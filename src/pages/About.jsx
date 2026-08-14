import { timeline, skills, profile, ecosystemLinks } from "../siteData"

export default function About() {
  return (
    <>
      <div className="about-hero">
        <div className="about-portrait">
          <img src={profile.heroImage} alt={profile.name} />
        </div>

        <div className="about-intro">
          <p className="eyebrow">About</p>
          <h1 className="display">
            A self-taught developer building a <span className="accent-italic">better world</span> through technology.
          </h1>
          <p className="lede">
            I am a Rwandan software engineer who learned by doing, building, and solving real problems
            while growing through experience in Mauritius. I work across digital products, professional
            ecosystems, and community-driven technology to help people access opportunity, grow skills,
            and create meaningful impact.
          </p>

          <div className="ecosystem-links compact">
            {ecosystemLinks.slice(0, 3).map((item) => (
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
      </div>

      <hr className="rule" />

      <h2 className="section-title">Experience</h2>
      <div className="about-grid">
        <div>
          {timeline.map((t, i) => (
            <div className="timeline-item" key={i}>
              <div className="t-year">{t.year}</div>
              <div>
                <h4>{t.title}</h4>
                <p>{t.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h4 style={{ margin: "0 0 1rem", fontSize: "0.95rem" }}>
            Strengths & focus areas
          </h4>
          <div className="skills-cloud">
            {skills.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
