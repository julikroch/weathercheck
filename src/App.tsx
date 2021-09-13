import { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Error from './components/Error';
import Form from './components/Form';
import Weather from './components/Weather';
import './App.css';

export type Search = {
  city: string,
  country: string
}

export type Result = {
  main: {
    temp: number,
    temp_min: number,
    temp_max: number
  },
  name: string,
  cod: string
}

function App() {

  const [search, setSearch] = useState<Search>({
    city: '',
    country: ''
  })

  const [consult, setConsult] = useState(false)
  const [result, setResult] = useState<Result | undefined>()
  const [error, setError] = useState(false)

  const { city, country } = search

  useEffect(() => {
    const apiCall = async () => {

      if (consult) {
        const appKey = '1734ba884292cd92f2eb52cabf12a595'
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appKey}`;

        const response = await fetch(url)
        const result = await response.json()
        setResult(result)
        setConsult(false)

        result?.cod === "404" ? setError(true) : setError(false)
      }
    }

    apiCall()
  }, [consult])

  return (
    <Fragment>
      <Header title='Clima React App' />

      <div className="form-container">
        <div className="row">
          <div className="col m6 s12">
            <Form search={search} setSearch={setSearch} setConsult={setConsult} />
          </div>
          <div className="col m6 s12">
            {error ? <Error text="Please enter a valid city" /> : <Weather result={result} />}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
