function destCity(paths: string[][]): string {
  const citiesWithDestinations: Set<string> = new Set();

  for (let i = 0; i < paths.length; i++) {
    citiesWithDestinations.add(paths[i][0]);
  }

  for (let i = 0; i < paths.length; i++) {
    const city = paths[i][1];
    if (!citiesWithDestinations.has(city)) return city;
  }

  return "";
}
