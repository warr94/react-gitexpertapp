import React, { useState } from 'react'
import PropTypes from 'prop-types'; //sirve para validar los tipos de datos

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        // console.log(event.target.value)
        setInputValue(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(category => [...category, inputValue]);  //inputValue es el valor que se esta enviando de todo lo que esta en la etiqueta form
            setInputValue(''); // sirve para limpiar el textbox cuando damos enter
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Buscar..." />
            </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
