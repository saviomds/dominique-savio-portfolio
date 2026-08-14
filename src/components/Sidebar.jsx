import { useState } from "react"
import { NavLink } from "react-router-dom"
import { profile } from "../siteData"

const links = [
  { to: "/", label: "Home", num: "01" },
  { to: "/projects", label: "Projects", num: "02" },
  { to: "/about", label: "About", num: "03" },
  { to: "/contact", label: "Contact", num: "04" },
]

function NavItems() {
  return (
    <>
      {links.map((l) => (
        <NavLink
          key={l.to}
          to={l.to}
          end={l.to === "/"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <span className="nav-num">{l.num}</span>
          {l.label}
        </NavLink>
      ))}
    </>
  )
}

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div>
        <NavLink to="/" className="sidebar-mark">
          {profile.name}
        </NavLink>
        <div className="sidebar-role">{profile.role}</div>
        {profile.available && (
          <div className="status-line">
            <span className="status-dot" />
            Available for new work
          </div>
        )}
      </div>

      <nav className="sidebar-nav">
        <NavItems />
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-links">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
        <div className="sidebar-copyright">
          © {new Date().getFullYear()} {profile.name}
        </div>
      </div>
    </aside>
  )
}

export function MobileBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <div className="mobile-bar">
        <NavLink to="/" className="mobile-brand" onClick={closeMenu}>
          {profile.name}
        </NavLink>
        <button
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-line line-1"></span>
          <span className="hamburger-line line-2"></span>
          <span className="hamburger-line line-3"></span>
        </button>
      </div>

      {isMenuOpen && <div className="mobile-menu-overlay" onClick={closeMenu}></div>}

      <nav className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <div>
            <h3 className="mobile-menu-title">{profile.name}</h3>
            <p className="mobile-menu-subtitle">{profile.role}</p>
          </div>
          <button
            className="mobile-menu-close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <div className="mobile-nav-items">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) => `mobile-nav-link ${isActive ? "active" : ""}`}
              onClick={closeMenu}
            >
              <span className="nav-num">{l.num}</span>
              <span className="nav-label">{l.label}</span>
            </NavLink>
          ))}
        </div>

        <div className="mobile-menu-footer">
          <div className="mobile-menu-links">
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`}>Email</a>
          </div>
          <p className="mobile-menu-copyright">
            © {new Date().getFullYear()} {profile.name}
          </p>
        </div>
      </nav>
    </>
  )
}
