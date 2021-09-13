import { Result } from "../App"

type WeatherProps = {
    result?: Result
}

const Weather = ({ result }: WeatherProps) => {

    if (!result?.name) return null

    const kelvin: number = 273.15;
    //const temperature : number = parseFloat(result?.main.temp_max)
    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>The weather in {result?.name} is</h2>
                <p className="temperature">
                    {(result.main.temp - kelvin).toFixed(1)} <span> &#x2103;</span>
                </p>

                <div className="temperatures-container">
                    <p> Max temperature {(result.main.temp_max - kelvin).toFixed(1)} <span> &#x2103;</span></p>
                    <p> Min temperature {(result.main.temp_min - kelvin).toFixed(1)} <span> &#x2103;</span></p>
                </div>

            </div>
        </div>
    )
}

export default Weather
