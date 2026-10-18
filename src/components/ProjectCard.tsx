import Link from 'next/link';
import type { Project } from '@/content/projects';
import { ProjectArt } from './ProjectArt';
import { Arrow } from './Icons';
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-card project-${project.letter.toLowerCase()}`}>
      <Link
        href={`/work/${project.slug}`}
        className="project-card-link"
        aria-label={`Explore Project ${project.letter}: ${project.name}`}
        aria-describedby={`project-${project.slug}-year`}
      >
        <ProjectArt
          letter={project.letter}
          sizes="(min-width: 761px) and (min-height: 700px) and (prefers-reduced-motion: no-preference) 600px, (max-width: 760px) calc(100vw - 48px), (max-width: 1568px) 92vw, 1440px"
        />
        <div className="project-info">
          <div className="project-meta">
            <span>{project.category}</span>
            <span className="project-year" id={`project-${project.slug}-year`}>
              {project.year ?? 'Concept'}
            </span>
          </div>
          <div className="project-title">
            <h3>{project.name}</h3>
            <span className="project-arrow">
              <Arrow diagonal />
            </span>
          </div>
          <p>{project.summary}</p>
        </div>
      </Link>
    </article>
  );
}
