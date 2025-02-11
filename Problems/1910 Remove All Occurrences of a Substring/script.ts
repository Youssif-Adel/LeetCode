function removeOccurrences(s: string, part: string): string {
  const wordLength = part.length;
  while (s.indexOf(part) !== -1) {
    const index = s.indexOf(part);

    s = s.slice(0, index) + s.slice(index + wordLength);
  }

  return s;
}
