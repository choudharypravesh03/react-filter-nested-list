/*
 * action types
 */

export const SEARCH = 'SEARCH';
/*
 * action creators
 */

export function search(text) {
  return { type: SEARCH, text };
}