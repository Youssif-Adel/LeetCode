function countPoints(rings: string): number {
  let num = 0;
  const rods: string[] = new Array(10).fill("");

  for (let i = 0; i < rings.length; i += 2) {
    let color = rings[i],
      rodId = Number(rings[i + 1]);

    if (!rods[rodId].includes(color)) {
      rods[rodId] = rods[rodId] + color;
      if (rods[rodId].length === 3) num++;
    }
  }

  return num;
}
