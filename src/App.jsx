import { Suspense } from 'react'
import './App.css'
import Countries from './countries/countries'
// import Countries from './countries/countries'

function App() {
  const countryPromise = fetch("https://openapi.programming-hero.com/api/all")
    .then(res => res.json())

  return (
    <>
      <Suspense fallback={<p>waiting for message...</p>}>
        {/* <Countries countryPromis={countryPromise}></Countries> */}
        <Countries countryPromise={countryPromise}></Countries>
        
      </Suspense>
    </>
  )
}

export default App