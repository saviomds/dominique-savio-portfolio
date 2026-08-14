import { profile } from "../siteData"

export default function Contact() {
  return (
    <>
      <p className="eyebrow">Founder contact · beoneofus</p>
      <h1 className="display">Let’s connect.</h1>
      <p className="lede">
        I’m Dominique Savio M, founder and CEO of beoneofus. I’m open to meaningful conversations around
        partnerships, ecosystem growth, community building, and the future of opportunity-driven digital products.
      </p>

      <div className="contact-card">
        <div className="contact-header">
          <div>
            <span className="contact-kicker">Contact</span>
            <h2>{profile.name}</h2>
          </div>
          <a className="contact-cta" href={`mailto:${profile.email}`}>
            Email now
          </a>
        </div>

        <div className="contact-grid">
          <a className="contact-box" href={`mailto:${profile.email}`}>
            <span className="contact-label">Email</span>
            <span className="contact-value">{profile.email}</span>
          </a>

          {profile.phone.map((number) => (
            <a key={number} className="contact-box" href={`tel:${number.replace(/\s+/g, "")}`}>
              <span className="contact-label">Phone</span>
              <span className="contact-value">{number}</span>
            </a>
          ))}

          <a
            className="contact-box"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-label">LinkedIn</span>
            <span className="contact-value">Dominique Savio</span>
          </a>

          <a
            className="contact-box"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-label">GitHub</span>
            <span className="contact-value">Dominique Savio</span>
          </a>

          <div className="contact-box muted-box">
            <span className="contact-label">Location</span>
            <span className="contact-value">{profile.location}</span>
          </div>
        </div>
      </div>
    </>
  )
}
