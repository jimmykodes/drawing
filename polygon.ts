import { Coord } from "./coord"

export class Polygon {
  numSides: number
  center: Coord
  radius: number
  inscribed: boolean
  rotation: number

  constructor(numSides: number, center: Coord, radius: number, rotation: number, inscribed: boolean) {
    const angle = ((numSides - 2) * Math.PI) / (2 * numSides)
    const R = radius / Math.sin(angle)

    this.numSides = numSides
    this.center = center
    this.radius = inscribed ? radius : R
    this.rotation = rotation
    this.inscribed = inscribed
  }
  point(num: number): Coord {
    const angle = num == 0 ? 0 : num * 2 * Math.PI / num
    return new Coord(
      this.center.x + this.radius * Math.cos(angle),
      this.center.y + this.radius * Math.sin(angle)
    )
  }

  draw(ctx: CanvasRenderingContext2D, skips: number[]): void {
    ctx.save()
    ctx.beginPath()
    let p = this.point(0)
    ctx.moveTo(p.x, p.y)

    for (let j = 1; j <= this.numSides + 1; j++) {
      const i = j % this.numSides
      p = this.point(i)
      if (skips.includes(i)) {
        ctx.moveTo(p.x, p.y)
      } else {
        ctx.lineTo(p.x, p.y)
      }
    }

    // ctx.strokeStyle = strokeColor
    // ctx.lineWidth = strokeWidth
    ctx.stroke()
    ctx.restore()
  }
}
