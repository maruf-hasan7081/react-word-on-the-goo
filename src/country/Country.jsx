import React from 'react';

const Country = ({country}) => {

    const countryStyle={
        
    border:'2px solid red',
    borderRadius:'10px',
    
    padding: '10px',
    


    }

    console.log(country.name.common);
    return (
        <div style={countryStyle}>
            <img src={country.flags.flags.png} alt={country.name.common} />
            <h3>population:{country.population.population}</h3>
            
            <h3>Name :{country.name.common}</h3>
            
        </div>
    );
};

export default Country;