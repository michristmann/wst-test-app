export const DateConverter = (date: string) => new Date(date).toLocaleString(undefined, { dateStyle: 'short' });
