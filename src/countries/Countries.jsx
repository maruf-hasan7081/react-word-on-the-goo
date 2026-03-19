import React, { use, useState } from 'react';
import Country from '../country/Country';

const Countries = ({ countryPromise }) => {
    const countriesData = use(countryPromise);
    const countries = countriesData.countries;

const countriesStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '15px'
    // test commit
}
const[Count , setCount] =useState(0)

const handlevisited=()=>{

  
    
    const newvisited=[...Count, Country]
    setCount(newvisited)

}


return (
    <div>
        <h1>Total country : {countries.length}</h1>
        <h2>Total country visited:{Count}</h2>
        <ol>
            {
                countries.map((country, index) => <li key={index}>{country.name.common}</li>)
            }
        </ol>

        <div style={countriesStyle}>
            {
                countries.map((country) => (
                    <Country key={country.cca3}

                    handlevisited={handlevisited}

                     country={country}></Country>
                ))
            }
        </div>
    </div>
);
};

export default Countries;