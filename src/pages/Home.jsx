import { Link } from "react-router-dom"
import { stack, projects, profile, ecosystemLinks, getAge } from "../siteData"

export default function Home() {
  const featured = projects.slice(0, 3)
  const age = getAge(profile.birthDate)

  return (
    <>
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">Owner, beoneofus</p>
          <h1 className="display">
            I build technology that creates <em>better futures</em>.
          </h1>
          <p className="lede">
            I am a 23-year-old self-taught software engineer from Rwanda, with professional experience
            shaped by time and work in Mauritius. I build products and ecosystems that connect people,
            opportunities, and communities through practical, trusted technology.
          </p>

          <div className="mini-mission">
            <span className="mini-label">Mission</span>
            <p>Build better systems, unlock opportunity, and use technology to improve lives across Africa and beyond.</p>
          </div>

          <div className="geo-tag">
            <span className="geo-dot" />
            Rwandan builder · experience shaped in Mauritius
          </div>

          <div className="age-tag">
            <span className="age-value">{age}</span>
            <span className="age-label">years old</span>
          </div>

          <div className="ecosystem-links">
            {ecosystemLinks.map((item) => (
              <a
                key={item.label}
                className={`ecosystem-button ${item.primary ? "primary" : ""}`}
                href={item.href}
                target="_blank"
                rel="noreferrer"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="owner-card">
          <img src={profile.heroImage} alt={profile.name} />
          <div className="owner-card-body">
            <span className="owner-label">Founder profile</span>
            <h2>{profile.name}</h2>
            <p>{profile.role}</p>
          </div>
        </div>
      </div>

      <div className="stack-readout">
        <div className="comment">// ecosystem focus</div>
        {stack.map((row) => (
          <div key={row.key}>
            <span className="key">{row.key}</span>: {row.value}
          </div>
        ))}
      </div>

      <h2 className="section-title">Ecosystem highlights</h2>
      <div className="project-list project-showcase">
        {featured.map((p) => (
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

      <p style={{ marginTop: "2rem" }}>
        <Link
          to="/projects"
          style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--accent)", textDecoration: "none" }}
        >
          View all ecosystem work →
        </Link>
      </p>
    </>
  )
}
