/**
* Accessor function.
*
* @param value - input value
* @returns numerical value
*/
type AccessorFunction<T> = (value: T) => number;

/**
* Computes the cosine similarity between two numeric arrays.
*
* @param x - numeric array
* @param y - numeric array
* @returns cosine similarity or null
*/
declare function similarity(
  x: number[],
  y: number[],
): number | null;

/**
* Computes the cosine similarity between two arrays.
*
* @param x - input array
* @param y - input array
* @param accessor - accessor function for accessing array values
* @returns cosine similarity or null
*/
declare function similarity<T>(
  x: T[],
  y: T[],
  accessor: AccessorFunction<T>
): number | null;


// EXPORTS //

export = similarity;
