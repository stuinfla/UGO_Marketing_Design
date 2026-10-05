import React from "react";

// Hash routing (#/scholars) so the site works on any static host without rewrites.
export const ROUTES = ["home", "scholars", "donate"];

function read() {
  const r = window.location.hash.replace(/^#\/?/, "");
  return ROUTES.includes(r) ? r : "home";
}

export function useRoute() {
  const [route, setRoute] = React.useState(read);
  React.useEffect(() => {
    const onHash = () => {
      setRoute(read());
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  const navigate = React.useCallback((r) => {
    window.location.hash = r === "home" ? "/" : `/${r}`;
  }, []);
  return [route, navigate];
}
