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
                    w-full
                    px-4
                    py-2
                    text-xl
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder={placeholder}
            onChange={handleChange}
        />
    )
}

export default Search