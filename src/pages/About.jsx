import { timeline, skills, profile, ecosystemLinks } from "../siteData"

export default function About() {
  return (
    <>
      <div className="about-hero">
        <div className="about-portrait">
          <img src={profile.heroImage} alt={profile.name} />
        </div>

        <div className="about-intro">
          <p className="eyebrow">About the founder · beoneofus</p>
          <h1 className="display">
            A self-taught developer building a <span className="accent-italic">better world</span> through technology.
          </h1>
          <p className="lede">
            I am Dominique Savio M, founder and CEO of beoneofus. I am a Rwandan software engineer who
            learned by doing, building, and solving real problems while growing through experience in
            Mauritius. My work sits at the intersection of product building, professional ecosystems,
            and community trust — helping people access opportunity, grow their skills, and create impact
            through practical digital solutions.
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
