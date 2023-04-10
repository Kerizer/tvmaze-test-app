export const buildURLQuery = (obj: { [key: string]: string }) =>
  Object.entries(obj)
    .map((pair) => pair.map(encodeURIComponent).join('='))
    .join('&');
