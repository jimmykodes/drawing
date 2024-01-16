export class Canvas {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  width: number
  height: number

  constructor(id: string) {
    if (!id) {
      id = "canvas"
    }

    this.canvas = document.getElementById(id) as HTMLCanvasElement
    const ctx = this.canvas.getContext('2d')
    if (ctx == null) {
      throw new Error("drawing ctx not supported")
    }
    this.ctx = ctx

    this.height = window.innerHeight
    this.width = window.innerWidth

    const dpr = window.devicePixelRatio
    this.canvas.width = this.width * dpr
    this.canvas.height = this.height * dpr
    this.canvas.style.width = `${this.width}px`
    this.canvas.style.height = `${this.height}px`
    this.ctx.scale(dpr, dpr)
  }
}

