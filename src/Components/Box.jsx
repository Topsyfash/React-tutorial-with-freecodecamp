import { useState } from "react"

export const Box = (props) => {
    // const [light, setLight] = useState(props.on)

    const isOn = props.on ? "#222222" : "transparent"

    const styles = {
        background: isOn
    }

    // function handleClick() {
    //     setLight((prevState) => {
    //         return prevState = !prevState
    //     })
    // }
    return (
        <div>
            <div
                style={styles}
                className="boxes"
                onClick={() => props.toggle(props.id)}
            >

            </div>
        </div>
    )
}
