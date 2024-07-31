import { DotGothic16 } from "next/font/google"

export const dotGothic_base = DotGothic16({
  weight: "400",
  subsets: ['latin'],
})

export const DotGothic = () => {
  return (
    <div className={dotGothic_base.className}></div>
  )
}