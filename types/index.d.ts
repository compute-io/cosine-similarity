type AccessorFunction<T> = (value: T) => number;

/**
 * Computes the cosine similarity between two arrays.
 *
 * @param {Number[]|Array} x - input array
 * @param {Number[]|Array} y - input array
 * @param {Function} [accessor] - accessor function for accessing array values
 * @returns {number | null} cosine similarity or null
 */
declare function similarity<T>(
  x: number[],
  y: number[],
  accessor?: AccessorFunction<T>
): number | null;

export default similarity
