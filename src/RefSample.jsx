import React, { useRef } from 'react'

function RefSample() {

    let h1Ref = useRef()
    const change = () => {
        h1Ref.current.style.color = "red"
        document.getElementById('country').style.color = "red"
    }

    return (<>
        <h1 id='country'>Türkiye</h1>
        <h1 ref={h1Ref}>Çağatay Yıldız</h1>
        <button onClick={change}>Change Color</button>
    </>
    )
}

export default RefSample