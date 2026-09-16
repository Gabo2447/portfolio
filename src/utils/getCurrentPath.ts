/**
 * Verify if the path is active.
 *
 * @param pathname actual path
 * @param href path to validate
 * @returns boolean
 */
export function pathIsActive(pathname: string, href: string): boolean {
  const normalize = (path: string) =>
    path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;

  const cleanPathname = normalize(pathname);
  const cleanHref = normalize(href);

  if (cleanPathname === cleanHref) return true;

  if (cleanHref === "" || cleanHref === "/" || cleanHref === "/portfolio") {
    return false;
  }

  return cleanPathname.startsWith(`${cleanHref}/`);
}
