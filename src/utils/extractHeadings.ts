export const extractHeadings = (text: string) => {
  const lines = text.split('\n');

  const headings = lines
    .filter((line) => line.startsWith('### '))
    .map((headlines) => headlines.replace(/#|\*/g, '').trim());

  return headings;
};
