import React, { useEffect, useRef, useState } from 'react'

function MemoryMatrix() {

    //3*3 bir grid oluşturulacak

    const [matrixX, setMatrixX] = useState(3)
    const [matrixY, setMatrixY] = useState(3)

    const [randomNumbers, setRandomNumbers] = useState([])

    let counter = 0

    // const itemEls = useRef([])
    useEffect(() => {
        //generate random 3 numbers between 1-9
        let numbers = []
        while (numbers.length < matrixX) {
            let randomNumber = Math.floor(Math.random() * (matrixX * matrixY)) + 1
            if (!numbers.includes(randomNumber)) {
                numbers.push(randomNumber)
            }
        }
        setRandomNumbers(numbers)

        setTimeout(() => {
            //all div elements will be original color with pure js

            for (let i = 1; i <= matrixX * matrixY; i++) {
                document.getElementById(`item-${i}`).style.backgroundColor = ""
            }


        }, 2000);

    }, [matrixX])


    //bomb control
    const bombControl = (number) => {
        let bombNumber = number.split("-")[1]

  
        if (randomNumbers.includes(Number(bombNumber))) {
            alert("Game Over")
        }
    }


    const nextLevel = () => {
        setMatrixX(matrixX + 1)
        setMatrixY(matrixY + 1)
    }

    return (<>

        {

            Array(matrixX).fill().map((_, x) => {
                return <div key={x} style={{ display: 'flex' }}>
                    {
                        Array(matrixY).fill().map((_, y) => {
                            counter++
                            let bgColor = ""
                            if (randomNumbers.includes(counter)) {
                                bgColor = "red"
                            }
                            return <div

                                key={y}
                                id={`item-${counter}`}
                                style={{ width: '100px', height: '100px', border: '1px solid black', backgroundColor: bgColor }}
                                onClick={(e) => bombControl(e.target.id)}
                            // ref={el => itemEls.current.push(el)}
                            >
                                {counter}
                            </div>
                        })
                    }
                </div>
            })
        }

        <button onClick={nextLevel}>Next</button>

    </>)
}

export default MemoryMatrix

