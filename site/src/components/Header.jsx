import React from "react";
import { Button } from "../ds.js";
import { logos } from "../assets.js";

// About / News / Contact have no screens yet; like the prototype, they land on home.
const LINKS = [
  ["home", "The Team"],
  ["about", "About Us"],
  ["scholars", "Meet the Scholars"],
  ["news", "News"],
  ["contact", "Contact"],
];
const target = (key) => (key === "scholars" ? "scholars" : "home");

export function Header({ route, onNav }) {
  const [open, setOpen] = React.useState(false);
  const go = (e, r) => {
    e.preventDefault();
    setOpen(false);
    onNav(r);
  };
  const links = (className) =>
    LINKS.map(([key, label]) => (
      <a
        key={key}
        className={className}
        href={`#/${target(key) === "home" ? "" : target(key)}`}
        aria-current={route === key ? "page" : undefined}
        onClick={(e) => go(e, target(key))}
      >
        {label}
      </a>
    ));

  return (
    <header className="site-header">
      <a className="logo" href="#/" onClick={(e) => go(e, "home")}>
        <img src={logos.horizontal} alt="U-GO University" />
      </a>
      <nav className="site-nav" aria-label="Main">
        {links("nav-link")}
        <button className="menu-toggle" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen((o) => !o)}>
          {open ? "Close" : "Menu"}
        </button>
        <Button variant="primary" size="sm" onClick={() => { setOpen(false); onNav("donate"); }}>
          Donate
        </Button>
      </nav>
      <nav id="mobile-nav" className="mobile-nav" hidden={!open} aria-label="Mobile">
        {links("nav-link")}
      </nav>
    </header>
  );
}
