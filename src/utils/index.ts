export const storage = typeof(global) === 'undefined' ? localStorage : {} as Storage;
