import React, { useState } from 'react';
// import PropTypes from 'prop-types' Sin importancia, es solo temas de estudio

const CounterApp = () => {

    const text= "Convertidor"

    const Grados = "Convertir a Radian"

    const Radian = "Convertir a Grados"

    const [value, setValue] = useState(0)

    const [name, setName] = useState(text)

    const HandleGrade = () => {
        const inputV = document.querySelector(".inputV").value;
        if (inputV!=0) {
        setName(Grados)
        setValue((parseInt(inputV)*Math.PI/180) + " Rad")
        } else {
            setName(Grados)
            setValue(0 + " Rad")
    
            }
    }

    const HandleRadian = () => {
        const inputV = document.querySelector(".inputV").value;
        if (inputV!=0) {
        setName(Radian)
        setValue((parseInt(inputV)*180/Math.PI) + " °C")
        console.log(inputV)
        } else {
            setName(Radian)
        setValue(0 + " °C")

        }
    }

    return (
        <>
            <h1>{name}</h1>
            <h2>{value}</h2>
            <input defaultValue="" placeholder={name} className="inputV" type="number"></input>
            <button onClick={HandleGrade}>Convertir grados a radianes</button>
            <button onClick={HandleRadian}>Convertir radianes a grados</button>
        </>
    )
}

//Solo tema de estudios, sin importancia
/* CounterApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

CounterApp.defaultProps = {
    saludo: "Hola"
} */

export {CounterApp};