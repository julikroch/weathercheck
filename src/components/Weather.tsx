import { Result } from "../App"

type WeatherProps = {
    result?: Result
}

const Weather = ({ result }: WeatherProps) => {

    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima es {result?.name}</h2>
                <span>{result?.main.temp_max}</span>
            </div>
        </div>
    )
}

export default Weather
