import React, { useState } from 'react'
import Error from './Error'

const Form = () => {

    const [search, setSearch] = useState({
        city: '',
        country: ''
    })

    const [error, setError] = useState(false)

    const { city, country } = search

    const handleChange = (e: any) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()

        if (city.trim() === "" || country.trim() === "") {
            setError(true)
            return;
        }
        setError(false)
    }

    return (
        <form onSubmit={handleSubmit}>
            {error && <Error text='Todos los campos son obligatorioss' /> }
            <div className='input-field col s12'>
                <input
                    type='text'
                    name='city'
                    id='city'
                    value={city}
                    onChange={handleChange}
                />
                <label htmlFor='city'>City: </label>
            </div>

            <div className='input-field col s12'>
                <select
                    name='country'
                    id='country'
                    value={country}
                    onChange={handleChange}
                >
                    <option value=''>-- Seleccione un país --</option>
                    <option value='US'>Estados Unidos</option>
                    <option value='MX'>México</option>
                    <option value='AR'>Argentina</option>
                    <option value='CO'>Colombia</option>
                    <option value='CR'>Costa Rica</option>
                    <option value='ES'>España</option>
                    <option value='PE'>Perú</option>
                </select>
                <label htmlFor='country'>Country: </label>
            </div>

            <div className='input-field col s12'>
                <input
                    type='submit'
                    value='Search Weather'
                    className='waves-effect waves-light btn-large btn-block yellow accent-4'
                />
            </div>
        </form >
    )
}

export default Form
