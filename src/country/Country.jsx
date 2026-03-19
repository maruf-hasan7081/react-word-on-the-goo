import React, { useState } from 'react';
import './country.css'

const Country = ({country ,handlevisited}) => {


    const[visited, setVisited] =useState(false)


    const handleVisit =()=>{
        // if(visited){
        //     setVisited(false)
        //      handlevisited()
        // }
        // else{
        //     setVisited(true)
        //      handlevisited()
        // }

        setVisited(visited?   false :true);
        handlevisited(Country)
       

        

    }




    console.log(country.name.common);
    return (
        <div className={`countryStyle ${visited ? 'color' : ''}`}>
            <img src={country.flags.flags.png} alt={country.name.common} />
            <h3>population:{country.population.population}</h3>
            
            <h3>Name :{country.name.common}</h3>

            <p>Area: {country.area.area}</p>
            <p>continents: {country.continents.continents}</p>
            <p>capital:{country.capital.capital}</p>
            <p>language:{country.languages.languages.ara}</p>



            

                 <button className={visited ? 'btn-color' :'butn-color'} onClick={handleVisit}>{visited? 'visited' : 'not visited'}</button>

                
            

           
            
        </div>
    );
};

export default Country;