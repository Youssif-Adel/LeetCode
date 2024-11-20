// Solved

class ParkingSystem {
  constructor(
    private big: number,
    private medium: number,
    private small: number,
  ) {}

  addCar(carType: number): boolean {
    if (carType === 3) {
      if (this.small > 0) {
        this.small -= 1;
        return true;
      }
    }

    if (carType === 2) {
      if (this.medium > 0) {
        this.medium -= 1;
        return true;
      }
    }

    if (carType === 1) {
      if (this.big > 0) {
        this.big -= 1;
        return true;
      }
    }

    return false;
  }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
