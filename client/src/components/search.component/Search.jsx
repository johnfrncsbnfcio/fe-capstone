import React from 'react'

const Search = ({type, value, id, placeholder, onChange}) => {

    const handleChange = (event) => {
        const { value } = event.target;
        onChange(value);
    };

    return (
        <input
            type={type}
            value={value}
            id={id}
            className='search'
            placeholder={placeholder}
            onChange={handleChange}
        />
    )
}

export default Search