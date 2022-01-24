/** @format */

export function generateRandomId() {
  return `_${Math.random().toString(36).slice(2)}`;
}
