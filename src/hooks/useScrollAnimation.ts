import { useEffect } from "react"
import { useAnimation, useInView } from "framer-motion"

export function useScrollAnimation(ref: any) {
  const controls = useAnimation()
  const inView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (inView) {
      controls.start("animate")
    }
  }, [controls, inView])

  return controls
}
