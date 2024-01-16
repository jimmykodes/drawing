export class Coord implements Iterable<number>{
  x: number
  y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  sqrMag(other: Coord): number {
    return (this.x - other.x) ** 2 + (this.y - other.y) ** 2
  }

  dist(other: Coord): number {
    return Math.sqrt(this.sqrMag(other))
  }

  public *[Symbol.iterator](): IterableIterator<number> {
    yield this.x
    yield this.y
  }
}
