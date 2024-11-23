// Solved

function minMovesToSeat(seats: number[], students: number[]): number {
  seats = seats.sort((a, b) => a - b);
  students = students.sort((a, b) => a - b);

  return students.reduce(
    (previousValue, currentValue, currentIndex) =>
      previousValue + Math.abs(currentValue - seats[currentIndex]),
    0,
  );
}
