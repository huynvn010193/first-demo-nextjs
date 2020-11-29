import { useEffect } from "react"

export default function Button() {
  useEffect(() => {
    console.log("Render Button");
    return () => {
      console.log("Componet Button Will Unmount");
    }
  })
  return (
    <h1>Button Component</h1>
  )
}