import React, { useEffect, useState } from 'react'

function MemoryMatch() {
    let randomBoxModels = ["circle", "square", "star", "oval"]

    const [box1, setbox1] = useState("")
    const [box2, setbox2] = useState("")
    const [box3, setbox3] = useState("")
    const [points, setpoints] = useState(0)

    useEffect(() => {

        setbox1(randomBoxModels[Math.floor(Math.random() * randomBoxModels.length)])
        setbox2(randomBoxModels[Math.floor(Math.random() * randomBoxModels.length)])
        setbox3(randomBoxModels[Math.floor(Math.random() * randomBoxModels.length)])
    }, [])

    let boxStyle = {
        width: "100px",
        height: "100px",
        margin: "10px",
        border: "1px solid black"
    }

    const next = () => {
        setbox1(box2)
        setbox2(box3)
        setbox3(randomBoxModels[Math.floor(Math.random() * randomBoxModels.length)])
    }


    const includeBox = () => {
        //random3, random1 veya random2'ye eşitse puanı arttır
        if (box1 === box3 || box2 === box3) {
            setpoints(points + 1)
        }
        next()
    }

    const excludeBox = () => {
        //random3, random1 veya random2'ye eşit değilse puanı arttır
        if (box1 !== box3 && box2 !== box3) {
            setpoints(points + 1)
        }

        next()
    }

    return (<>
        <h1 style={{textAlign:'center'}}>{points}</h1>
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>

            <div style={boxStyle}>
                <h1>{box1}</h1>
            </div>
            <div style={boxStyle}>
                <h1>{box2}</h1>
            </div>
            <div style={boxStyle}>
                <h1>{box3}</h1>
            </div>
        </div>
        <div style={{ textAlign: 'center' }}>
            <button onClick={excludeBox}>False</button>
            <button onClick={includeBox}>True</button>
        </div>
    </>)
}

export default MemoryMatch