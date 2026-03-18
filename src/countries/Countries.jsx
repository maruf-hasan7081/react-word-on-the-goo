import React, { use } from 'react';
import Country from '../country/Country';

const Countries = ({ countryPromise }) => {
    const countriesData = use(countryPromise);
    const countries = countriesData.countries;

const countriesStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '15px'
}

return (
    <div>
        <h1>Countries length is : {countries.length}</h1>

        <div style={countriesStyle}>
            {
                countries.map((country) => (
                    <Country key={country.cca3} country={country}></Country>
                ))
            }
        </div>
    </div>
);
};

export default Countries;