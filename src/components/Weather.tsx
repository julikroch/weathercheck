import { Result } from '../App'

type WeatherProps = {
    result?: Result
}

const Weather = ({ result }: WeatherProps) => {

    if (!result?.name) return null

    const { main } = result
    const { temp, temp_min, temp_max } = main
    const kelvin: number = 273.15;
    
    return (
        <div className='card-panel white col s12'>
            <div className='black-text'>
                <h2>The weather in {result?.name} is</h2>
                <p className='temperature'>
                    {(temp - kelvin).toFixed(1)} <span> &#x2103;</span>
                </p>

                <div className='temperatures-container'>
                    <p> Max temperature {(temp_max - kelvin).toFixed(1)} <span> &#x2103;</span></p>
                    <p> Min temperature {(temp_min - kelvin).toFixed(1)} <span> &#x2103;</span></p>
                </div>

            </div>
        </div>
    )
}

export default Weather
