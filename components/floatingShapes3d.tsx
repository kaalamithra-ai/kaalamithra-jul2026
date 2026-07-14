"use client"

import { useEffect, useRef } from "react"

interface Shape {
  x: number
  y: number
  size: number
  rotationX: number
  rotationY: number
  rotationZ: number
  speed: number
  color: string
  opacity: number
  type: "cube" | "pyramid" | "sphere" | "ring"
}

export default function FloatingShapes3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    const shapes: Shape[] = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const init = () => {
      const colors = ["#00D4FF", "#8B5CF6", "#38BDF8", "#A78BFA", "#00D4FF"]
      for (let i = 0; i < 8; i++) {
        shapes.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: 30 + Math.random() * 60,
          rotationX: Math.random() * 360,
          rotationY: Math.random() * 360,
          rotationZ: Math.random() * 360,
          speed: 0.2 + Math.random() * 0.4,
          color: colors[i % colors.length],
          opacity: 0.04 + Math.random() * 0.06,
          type: (["cube", "pyramid", "sphere", "ring"] as const)[Math.floor(Math.random() * 4)],
        })
      }
    }

    const drawShape = (shape: Shape) => {
      ctx.save()
      ctx.translate(shape.x, shape.y)
      ctx.globalAlpha = shape.opacity
      ctx.strokeStyle = shape.color
      ctx.lineWidth = 1.5

      shape.rotationX += shape.speed * 0.5
      shape.rotationY += shape.speed * 0.3
      shape.rotationZ += shape.speed * 0.2

      const s = shape.size
      const half = s / 2

      switch (shape.type) {
        case "cube": {
          ctx.beginPath()
          // Front face
          ctx.rect(-half, -half, s, s)
          ctx.stroke()
          // Back face (offset)
          ctx.beginPath()
          ctx.rect(-half + 15, -half - 10, s, s)
          ctx.stroke()
          // Connecting lines
          ctx.beginPath()
          ctx.moveTo(-half, -half)
          ctx.lineTo(-half + 15, -half - 10)
          ctx.moveTo(half, -half)
          ctx.lineTo(half + 15, -half - 10)
          ctx.moveTo(half, half)
          ctx.lineTo(half + 15, half - 10)
          ctx.moveTo(-half, half)
          ctx.lineTo(-half + 15, half - 10)
          ctx.stroke()
          break
        }
        case "pyramid": {
          ctx.beginPath()
          ctx.moveTo(0, -half)
          ctx.lineTo(-half, half)
          ctx.lineTo(half, half)
          ctx.closePath()
          ctx.stroke()
          // Bottom
          ctx.beginPath()
          ctx.rect(-half, half, s, 1)
          ctx.stroke()
          break
        }
        case "sphere": {
          ctx.beginPath()
          ctx.arc(0, 0, half, 0, Math.PI * 2)
          ctx.stroke()
          // Horizontal ellipse
          ctx.beginPath()
          ctx.ellipse(0, 0, half, half * 0.4, 0, 0, Math.PI * 2)
          ctx.stroke()
          // Vertical ellipse
          ctx.beginPath()
          ctx.ellipse(0, 0, half * 0.4, half, 0, 0, Math.PI * 2)
          ctx.stroke()
          break
        }
        case "ring": {
          ctx.beginPath()
          ctx.ellipse(0, 0, half, half * 0.3, shape.rotationZ * (Math.PI / 180), 0, Math.PI * 2)
          ctx.stroke()
          ctx.beginPath()
          ctx.ellipse(0, 0, half * 0.3, half, shape.rotationZ * (Math.PI / 180), 0, Math.PI * 2)
          ctx.stroke()
          break
        }
      }
      ctx.restore()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      shapes.forEach((shape) => {
        shape.y -= shape.speed * 0.15
        shape.x += Math.sin(Date.now() * 0.001 * shape.speed) * 0.2
        if (shape.y < -100) shape.y = canvas.height + 100
        if (shape.x < -100) shape.x = canvas.width + 100
        if (shape.x > canvas.width + 100) shape.x = -100
        drawShape(shape)
      })
      animationId = requestAnimationFrame(animate)
    }

    resize()
    init()
    animate()
    window.addEventListener("resize", resize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  )
}