import { Coord } from "./coord"

export class Line {
  p1: Coord
  p2: Coord

  constructor(p1: Coord, p2: Coord) {
    this.p1 = p1
    this.p2 = p2
  }

  public static fromPoints(x1: number, y1: number, x2: number, y2: number): Line {
    return new Line(new Coord(x1, y1), new Coord(x2, y2))
  }

  draw(ctx: CanvasRenderingContext2D, moveTo?: boolean, stroke?: boolean): void {
    if (moveTo) {
      ctx.moveTo(...this.p1)
    }
    ctx.lineTo(...this.p2)

    if (stroke) {
      ctx.stroke()
    }
  }
}
