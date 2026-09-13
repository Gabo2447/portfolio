/**
 * Verify if the path is active.
 *
 * @param pathname actual path
 * @param href path to validate
 * @returns boolean
 */
export function pathIsActive(pathname: string, href: string): boolean {
  return pathname === href || (href !== "/" && pathname.startsWith(href));
}
