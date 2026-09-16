/**
 * Returns an array of key-value pairs for an object, preserving its strong TypeScript types.
 *
 * @template T - The type of the object.
 * @param {T} obj - The object whose key-value pairs are to be extracted.
 * @returns {[keyof T, T[keyof T]][]} An array of `[key, value]` tuples with key-of-T types.
 */
export function typedEntries<T extends object>(
  obj: T,
): [keyof T, T[keyof T]][] {
  return Object.entries(obj) as [keyof T, T[keyof T]][];
}
