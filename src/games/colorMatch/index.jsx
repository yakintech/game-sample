import React, { useEffect, useRef, useState } from 'react'

function ColorMatch() {

    var randomColors = ["red", "blue", "black", "yellow"]

    const [random1, setrandom1] = useState("")
    const [random2, setrandom2] = useState("")
    const [random3, setrandom3] = useState("")
    const [points, setpoints] = useState(0)


    let divBoxStyle = {
        width: "100px",
        height: "100px",
        margin: "10px",
        border: "1px solid black"
    }

    useEffect(() => {
        loadRandom()
    }, [])

    const loadRandom = () => {
        setrandom1(randomColors[Math.floor(Math.random() * randomColors.length)])
        setrandom2(randomColors[Math.floor(Math.random() * randomColors.length)])
        setrandom3(randomColors[Math.floor(Math.random() * randomColors.length)])
    }


    const trueBox = () => {
        if (random1 === random3) {
            setpoints(points + 1)
        }
        loadRandom()
    }

    const falseBox = () => {
        if (random1 !== random3) {
            setpoints(points + 1)
        }
        loadRandom()
    }



    return (<>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1>Color Match</h1>
            <h1>Points: {points}</h1>
            <div style={{ display: 'flex' }}>
                <div style={divBoxStyle}>
                    <h1>{random1}</h1>
                </div>
                <div style={divBoxStyle}>
                    <h1 style={{ color: random3 }} >{random2}</h1>
                </div>
            </div>
            <div>
                <button onClick={falseBox} style={{ marginRight: 20 }}>False</button>
                <button onClick={trueBox} style={{ marginLeft: 20 }}>True</button>
            </div>
        </div>


    </>)
}

export default ColorMatch