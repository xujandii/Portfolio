import Link from 'next/link';
import { HorizontalCards } from '@/components/HorizontalCards';
import { ServiceMap } from '@/components/ServiceMap';
import { Arrow } from '@/components/Icons';
import { ProjectCard } from '@/components/ProjectCard';
import { RecommendationCard } from '@/components/RecommendationCard';
import StackingCards from '@/components/ui/stacking-card';
import { GradientBackground } from '@/components/ui/jade-sky';
import { projects, recommendations } from '@/content/projects';

export default function Home() {
  return (
    <main id="main">
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-gradient" aria-hidden="true">
          <GradientBackground className="hero-gradient-layer" />
        </div>
        <ServiceMap
          action={
            <Link className="button-primary hero-contact" href="/contact">
              Let’s connect
              <Arrow diagonal />
            </Link>
          }
        >
          <div className="hero-copy">
            <p className="hero-greeting">Hi, I’m Jandi.</p>
            <h1 id="hero-heading">
              A Service
              <br />& UX <span className="accent-text">designer</span>
            </h1>
            <p className="hero-description">
              I turn complex systems into experiences that make sense for people. I love connecting
              what people need with what a service can become.
            </p>
          </div>
        </ServiceMap>
        <div className="hero-foot page-width">
          <a className="scroll-cue" href="#work" aria-label="Explore selected work">
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>
      <section id="work" className="work-section page-width" aria-labelledby="work-heading">
        <div className="section-intro section-intro--sticky">
          <div>
            <h2 id="work-heading">Recent works</h2>
          </div>
        </div>
        <StackingCards>
          {projects.map((project) => (
            <ProjectCard project={project} key={project.slug} />
          ))}
        </StackingCards>
      </section>
      <section
        className="recommendation-section page-width"
        aria-labelledby="recommendations-heading"
      >
        <div>
          <h2 id="recommendations-heading">What people say about me</h2>
        </div>
        <HorizontalCards
          id="recommendation-cards"
          label="Recommendations"
          className="recommendations"
        >
          {recommendations.map((r) => (
            <RecommendationCard key={r.role} {...r} />
          ))}
        </HorizontalCards>
      </section>
    </main>
  );
}
