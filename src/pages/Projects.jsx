import { projects } from "../siteData"

export default function Projects() {
  return (
    <>
      <p className="eyebrow">Founder-selected work · beoneofus</p>
      <h1 className="display">Projects</h1>
      <p className="lede">
        These are the ecosystem brands and digital platforms I have helped shape as founder and builder,
        each designed to connect people, opportunities, and growth through trust, clarity, and modern
        design. Every project reflects the same mission behind beoneofus: build better systems for real lives.
      </p>

      <div className="project-list project-showcase">
        {projects.map((p) => (
          <a
            key={p.slug}
            className="project-row project-card"
            href={p.link}
            target="_blank"
            rel="noreferrer"
          >
            <div className="project-branding">
              <img className="project-logo" src={p.logo} alt={`${p.title} logo`} />
            </div>
            <div className="project-body">
              <div className="project-title-row">
                <h3>{p.title}</h3>
                <span className="project-year">{p.year}</span>
              </div>
              <p>{p.description}</p>
              <div className="tag-row">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="project-arrow">→</div>
          </a>
        ))}
      </div>
    </>
  )
}
