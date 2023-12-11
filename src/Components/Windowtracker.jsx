import { useEffect, useState } from "react"

export const Windowtracker = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function checkWidth() {
            console.log("setting up")
            setWindowWidth(() => {
                return window.innerWidth
            })
        }
        window.addEventListener("resize", checkWidth)
        return () => {
            console.log("cleaning up")
            window.removeEventListener("resize",checkWidth)
        }
    },[])
  return (
      <div>
          <h1>Widow width :{windowWidth }</h1>
    </div>
  )
}
