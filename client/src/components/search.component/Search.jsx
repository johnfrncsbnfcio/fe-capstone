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
            className="form-control
                    block
                    px-10
                    py-2
                    text-xl
                    font-normal
                    text-gray-700
                    bg-gray-600 bg-clip-padding
                    border border-solid border-gray-600
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-white focus:bg-grey-600 focus:border-grey-600 focus:outline-none"
            placeholder={placeholder}
            onChange={handleChange}
        />
    )
}

export default Search