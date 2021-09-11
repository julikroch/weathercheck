import { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';

import './App.css';

export type Search = {
  city: string,
  country: string
}

function App() {

  const [search, setSearch] = useState<Search>({
    city: '',
    country: ''
  })

  const [consult, setConsult] = useState(false)
  const [result, setResult] = useState({})

  const { city, country } = search

  useEffect(() => {
    const apiCall = async () => {

      if (consult) {
        const appKey = '1734ba884292cd92f2eb52cabf12a595'
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appKey}`;

        const response = await fetch(url)
        const result = response.json()
        console.log(result)
        setResult(result)
      }
    }

    apiCall()
  }, [consult, city, country])

  return (
    <Fragment>
      <Header title='Clima React App' />

      <div className="form-container">
        <div className="row">
          <div className="col m6 s12">
            <Form search={search} setSearch={setSearch} setConsult={setConsult} />
          </div>
          <div className="col m6 s12">
            <Weather />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
