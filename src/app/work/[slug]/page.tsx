import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/content/projects';
import { ProjectArt } from '@/components/ProjectArt';
import { Arrow } from '@/components/Icons';
import { CaseNavigation } from '@/components/CaseNavigation';
import { CaseMediaGallery } from '@/components/CaseMediaGallery';
import { CaseWalkthroughs } from '@/components/CaseWalkthroughs';
import { CaseResearchMatrix } from '@/components/CaseResearchMatrix';
import { CaseToolsMap } from '@/components/CaseToolsMap';
import { CaseFeatureIcon } from '@/components/CaseFeatureIcon';
export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return { title: project?.name ?? 'Project not found', description: project?.summary };
}
function CaseParagraphs({ text, className }: { text: string | string[]; className?: string }) {
  if (typeof text === 'string') return <p className={className}>{text}</p>;
  return (
    <div className="case-paragraphs">
      {text.map((paragraph) => (
        <p className={className} key={paragraph}>
          {paragraph}
        </p>
      ))}
    </div>
  );
}
export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  const story = project.caseStudy;
  const solution = project.solution;
  const solutionChapter = solution
    ? solution.kind === 'proposal'
      ? { id: 'proposal', label: 'The proposal' }
      : { id: 'solution', label: 'The solution' }
    : undefined;
  const chapters = story
    ? [
        { id: 'contribution', label: 'My contribution' },
        { id: 'challenge', label: 'The challenge' },
        { id: 'approach', label: 'The approach' },
        ...(solutionChapter ? [solutionChapter] : []),
        ...(project.potentialImpact ? [{ id: 'impact', label: 'Potential impact' }] : []),
        { id: 'reflection', label: 'The reflection' },
      ]
    : undefined;
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <main id="main" data-project={project.letter}>
      <section className="case-hero page-width">
        <Link href="/#work" className="back-link">
          <span aria-hidden="true">←</span> All explorations
        </Link>
        <div className="case-eyebrow">
          <div className="case-project-meta">
            <span>{project.category}</span>
            {project.year && <span className="project-year">{project.year}</span>}
          </div>
          {!story && project.showPlaceholderNotice !== false && (
            <span className="placeholder-pill">Not a completed client project</span>
          )}
        </div>
        <h1>{project.title}</h1>
        <p className="case-summary">{project.summary}</p>
        <dl className="case-facts">
          <div>
            <dt>{project.clientLabel ?? 'Client / Industry'}</dt>
            <dd>
              {project.client}
              <br />
              {project.industry}
            </dd>
          </div>
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Timeline</dt>
            <dd>{project.duration}</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>{project.status ?? 'Illustrative concept'}</dd>
          </div>
        </dl>
      </section>
      <div className="case-art page-width">
        <ProjectArt letter={project.letter} eager={project.letter === 'E'} />
      </div>
      <div className="case-layout page-width">
        <aside className="case-sidebar">
          <CaseNavigation key={project.slug} chapters={chapters} />
        </aside>
        <div className="case-content">
          {story && (
            <section id="contribution">
              <h2>My contribution</h2>
              <p className="large-body">{story.contribution}</p>
              <dl className="case-facts case-context">
                <div>
                  <dt>Context</dt>
                  <dd>{story.context}</dd>
                </div>
                <div>
                  <dt>Tools</dt>
                  <dd>{story.tools}</dd>
                </div>
              </dl>
            </section>
          )}
          <section id="challenge">
            <p className="section-kicker">The challenge</p>
            <h2>
              {story?.challengeHeading ?? (
                <>
                  Start with what
                  <br />
                  isn’t working.
                </>
              )}
            </h2>
            <CaseParagraphs text={project.challenge} className="large-body" />
            {story?.designQuestions && (
              <div className="case-design-questions">
                <h3>Design questions</h3>
                <ol>
                  {story.designQuestions.map((question) => (
                    <li key={question}>{question}</li>
                  ))}
                </ol>
              </div>
            )}
            {story?.confidentialityNote && (
              <aside
                className="measurement-note case-confidentiality-note"
                aria-label="Confidentiality disclaimer"
              >
                <h3 className="case-icon-heading">
                  <CaseFeatureIcon name="information" />
                  <span>Disclaimer</span>
                </h3>
                <p>{story.confidentialityNote}</p>
              </aside>
            )}
            {project.insight && (
              <blockquote className="insight-quote">
                <span>
                  {story?.insightLabel ?? (story ? 'Research insight' : 'Illustrative insight')}
                </span>
                {project.insight}
              </blockquote>
            )}
          </section>
          <section id="approach">
            <p className="section-kicker">The approach</p>
            <h2>
              {story?.approachHeading ?? (
                <>
                  From the right question
                  <br />
                  to a workable answer.
                </>
              )}
            </h2>
            <p className="case-section-intro">
              {story?.approachIntro ??
                'A proposed process for this example brief. The questions, evidence, and iterations would shape the real path.'}
            </p>
            {story && project.metrics.length > 0 && (
              <div className="case-metrics case-evidence">
                {project.metrics.map((metric) => (
                  <div key={metric.label}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                    <small>{metric.note}</small>
                  </div>
                ))}
              </div>
            )}
            <div className="case-stages">
              {project.stages.map((stage, index) => (
                <article className="case-stage" key={stage.name}>
                  <div className="stage-label">
                    <span>0{index + 1}</span>
                    {stage.name}
                  </div>
                  <h3>{stage.title}</h3>
                  <CaseParagraphs text={stage.text} />
                  {stage.findings && (
                    <ul className="case-research-insights" aria-label="Research insight groups">
                      {stage.findings.map((finding) => (
                        <li className="case-research-insight" key={finding.title}>
                          <h4>{finding.title}</h4>
                          <p>{finding.text}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                  {stage.toolsMap && <CaseToolsMap map={stage.toolsMap} />}
                  {stage.matrix && <CaseResearchMatrix matrix={stage.matrix} />}
                  {stage.output && (
                    <div className="stage-output">
                      <span>{story ? 'Outputs' : 'Proposed output'}</span>
                      <p>{stage.output}</p>
                    </div>
                  )}
                  {stage.media && <CaseMediaGallery groups={stage.media} />}
                  {stage.disclaimer && (
                    <aside
                      className="measurement-note case-stage-disclaimer"
                      aria-label="Project involvement disclaimer"
                    >
                      <h3 className="case-icon-heading">
                        <CaseFeatureIcon name="information" />
                        <span>Disclaimer</span>
                      </h3>
                      <p>{stage.disclaimer}</p>
                    </aside>
                  )}
                </article>
              ))}
            </div>
            {story?.approachOutcome && (
              <div className="case-approach-outcome">
                <h3>{story.approachOutcome.heading}</h3>
                <p>{story.approachOutcome.text}</p>
              </div>
            )}
          </section>
          {solution && solutionChapter && (
            <section id={solutionChapter.id}>
              <p className="section-kicker">{solutionChapter.label}</p>
              <h2>{solution.heading}</h2>
              {solution.media && <CaseMediaGallery groups={solution.media} />}
              {solution.walkthroughs && !solution.walkthroughsAfterFeatures && (
                <CaseWalkthroughs
                  items={solution.walkthroughs}
                  intro={solution.walkthroughIntro}
                  layout={solution.walkthroughLayout}
                  showTranscript={solution.showWalkthroughTranscript}
                />
              )}
              {solution.description && <p>{solution.description}</p>}
              {solution.features && (
                <div className="case-solution-features">
                  {solution.features.map((feature) => (
                    <div key={feature.title}>
                      <h3 className={feature.icon ? 'case-icon-heading' : undefined}>
                        {feature.icon && <CaseFeatureIcon name={feature.icon} />}
                        <span>{feature.title}</span>
                      </h3>
                      <CaseParagraphs text={feature.text} />
                      {feature.media && <CaseMediaGallery groups={feature.media} />}
                    </div>
                  ))}
                </div>
              )}
              {solution.walkthroughs && solution.walkthroughsAfterFeatures && (
                <CaseWalkthroughs
                  items={solution.walkthroughs}
                  intro={solution.walkthroughIntro}
                  layout={solution.walkthroughLayout}
                  showTranscript={solution.showWalkthroughTranscript}
                />
              )}
              {solution.supplementalMedia && (
                <CaseMediaGallery groups={solution.supplementalMedia} />
              )}
              {solution.prototypeLink && (
                <p className="case-prototype-link">
                  <a
                    className="text-link"
                    href={solution.prototypeLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {solution.prototypeLink.label}
                    <Arrow diagonal />
                    <span className="case-link-context"> (opens in a new tab)</span>
                  </a>
                </p>
              )}
              {solution.credits && <p className="case-credits">{solution.credits}</p>}
              {solution.note && <p className="case-solution-note">{solution.note}</p>}
              {solution.validation && (
                <div className="measurement-note">
                  <h3 className={solution.validation.icon ? 'case-icon-heading' : undefined}>
                    {solution.validation.icon && (
                      <CaseFeatureIcon name={solution.validation.icon} />
                    )}
                    <span>{solution.validation.heading}</span>
                  </h3>
                  <p>{solution.validation.text}</p>
                </div>
              )}
            </section>
          )}
          {project.potentialImpact ? (
            <section id="impact">
              <p className="section-kicker">Potential impact</p>
              <h2>{project.potentialImpact.heading}</h2>
              <CaseParagraphs text={project.potentialImpact.text} className="large-body" />
            </section>
          ) : !story ? (
            <section id="impact">
              <p className="section-kicker">Potential impact</p>
              <h2>
                What better could
                <br />
                look like.
              </h2>
              <p>
                These fictional figures show how the impact section could be presented. They are not
                measured outcomes or promises of performance.
              </p>
              <div className="case-metrics">
                {project.metrics.map((metric) => (
                  <div key={metric.label}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                    <small>Illustrative metric</small>
                  </div>
                ))}
              </div>
              <div className="measurement-note">
                <h3>Evidence before claims.</h3>
                <p>
                  For the final case study, replace these figures with a defined baseline, sample
                  size, measurement period, and source. Include limitations and explain what changed
                  for the people using the service.
                </p>
              </div>
            </section>
          ) : null}
          <section id="reflection">
            <p className="section-kicker">The reflection</p>
            <h2>
              {story?.reflectionHeading ?? (
                <>
                  Keep the learning
                  <br />
                  in the picture.
                </>
              )}
            </h2>
            <CaseParagraphs text={project.reflection} className="large-body" />
            {story?.reflectionMedia && <CaseMediaGallery groups={story.reflectionMedia} />}
            {story?.lessons && (
              <div className="case-lessons">
                {story.lessons.map((lesson) => (
                  <article key={lesson.title}>
                    <h3>{lesson.title}</h3>
                    <p>{lesson.text}</p>
                    <h4>What I would do next</h4>
                    <ul>
                      {lesson.nextSteps.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            )}
            {story?.closingNote && <p className="case-closing-note">{story.closingNote}</p>}
            <Link href="/contact" className="text-link">
              Talk through an idea with me
              <Arrow />
            </Link>
          </section>
        </div>
      </div>
      <section className="next-project page-width">
        <p>Keep exploring</p>
        <Link href={`/work/${next.slug}`}>
          <span>
            <small>
              {next.year} / {next.category}
            </small>
            {next.name}
          </span>
          <Arrow diagonal />
        </Link>
      </section>
    </main>
  );
}
