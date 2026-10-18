import type { Metadata } from 'next';
import { CapabilityIcon } from '@/components/CapabilityIcon';
import { HorizontalCards } from '@/components/HorizontalCards';
import { Portrait } from '@/components/Portrait';
import { ApproachTimeline } from '@/components/ApproachTimeline';
import { ValuesArtwork } from '@/components/ValuesArtwork';
export const metadata: Metadata = { title: 'The person behind the work' };
export default function About() {
  return (
    <main id="main">
      <section className="about-hero page-width">
        <div className="about-intro">
          <h1>
            Hello,
            <br />
            I’m Jandi.
            <br />
          </h1>
          <p className="large-body">
            My other name is Thao which means &quot;herb&quot; in Vietnamese. I’m a Service & UX
            Designer based in Helsinki. I’m interested in the space where people’s everyday lives
            meet the systems around them.
          </p>
        </div>
        <div className="ethos-portrait">
          <span className="portrait-orbit" aria-hidden="true"></span>
          <Portrait
            priority
            sizes="(max-width: 370px) 280px, (max-width: 760px) 330px, (max-width: 1100px) 320px, 390px"
          />
        </div>
      </section>
      <section className="about-story page-width">
        <div className="about-story-heading">
          <h2>
            Empathy
            <em> and </em>
            sustainability
          </h2>
          <ValuesArtwork />
        </div>
        <div>
          <p className="large-body">
            I believe design should be accessible to the widest possible audience with minimal
            effort, and outcomes should be scalable for continuous improvement and integration into
            various contexts.
          </p>
          <p>
            Working inside an industrial enterprise has shaped the way I look at design. Behind
            every touchpoint sits a network of people, processes, tools, and decisions. Improving
            the experience means understanding how that network works.
          </p>
          <p>
            I bring a designer’s curiosity and an appetite for complex questions. I’m comfortable
            moving between a research conversation, a service blueprint, and a clickable prototype.
            I value the colleagues who challenge my thinking and the people who trust me with their
            stories.
          </p>
          <p>
            My ambition is simple: make the complicated feel more understandable, and the everyday
            work a little better.
          </p>
        </div>
      </section>
      <ApproachTimeline />
      <section className="capabilities page-width">
        <div className="section-intro">
          <div>
            <h2>My skills</h2>
          </div>
        </div>
        <HorizontalCards id="capability-cards" label="Capabilities" className="capability-list">
          {[
            [
              'Service design & systems thinking',
              'See the whole service, connect stakeholders, and find where a small change can make a meaningful difference.',
            ],
            [
              'UX prototyping',
              'Make an idea tangible enough to question, test, and improve before committing to it.',
            ],
            [
              'Omnichannel journeys & service blueprints',
              'Connect what people experience with what the organization needs to deliver behind the scenes.',
            ],
            [
              'Strategic user research',
              'Ask purposeful questions, make space for overlooked perspectives, and turn evidence into direction.',
            ],
            [
              'Concept creation',
              'Explore possible futures, challenge assumptions, and shape ideas that are desirable and workable.',
            ],
          ].map(([title, description], index) => (
            <div className="capability" key={title}>
              <h3>
                <CapabilityIcon
                  name={
                    (['systems', 'prototype', 'journey', 'research', 'concept'] as const)[index]
                  }
                />
                {title}
              </h3>
              <p>{description}</p>
            </div>
          ))}
        </HorizontalCards>
      </section>
    </main>
  );
}
