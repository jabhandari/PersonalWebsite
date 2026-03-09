type Project = {
  title: string;
  description: string;
  tech: string[];
  highlights: string[];
  github: string;
};

export default function ProjectsCard({ project }: { project: Project }) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>

      <p className="mt-3 text-sm leading-relaxed text-slate-600">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((item, index) => (
          <span
            key={index}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
          >
            {item}
          </span>
        ))}
      </div>

      <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-700">
        {project.highlights.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>

      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block text-sm font-semibold text-cyan-700 transition hover:text-cyan-500"
        >
          View Project
        </a>
      )}
    </article>
  );
}
