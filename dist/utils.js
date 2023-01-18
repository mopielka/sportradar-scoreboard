// Generates a pseudo-unique ID.
// In a real-life project I'd probably use an external library generating UUIDs.
export const generateId = () => Math.random().toString(16).slice(2, 12);
//# sourceMappingURL=utils.js.map