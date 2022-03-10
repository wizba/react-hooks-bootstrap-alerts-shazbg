/**
 *  
 

QUESTIONS
given an array of countries, modify the code to  
 * 1. display a list of coutries
 * 2. Search and filter by name/ country
 * 3. Sort by highest/lowest country population
 
 * you may take advantage of the Country component and the searchInput
  * boostrap has been added for you
 */

import React, { useEffect, useState } from 'react';
import { Country } from './Country';
import { countries } from './CountryData';

function App() {
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    console.log(countries[0]);
  }, []);
  return (
    <div className="container">
      <div className="row el-element-overlay">
        <div className="col-12">
          <div class="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Country name"
              value={searchInput}
              // detect change in input
              onChange={(event) => {
                let data = event.target.value;
              }}
            />
            <button type="button" class="btn btn-primary">
              Search
            </button>
          </div>
          <div className="col-12">
            <label>Sort by : </label>
            <select
              className="form-select form-select-lg mb-3 form-control"
              aria-label=".form-select-lg example"
            >
              <option value="1">Highest population</option>
              <option value="2">Lowest population</option>
            </select>
          </div>
        </div>

        <div className="col-lg-4 col-md-4">
          {/* Country component */}
          <Country myCountry={countries[0]} />
        </div>
      </div>
    </div>
  );
}

export { App };





/**
 *  
 

QUESTIONS
given an array of countries, modify the code to  
 * 1. display a list of coutries
 * 2. Search and filter by name/ country /region /capital city
 * 3. Sort by highest/lowest country population
 
 * you may take advantage of the Country component and the searchInput
  * boostrap has been added for you
 */

import React, { useEffect, useState } from 'react';
import { Country } from './Country';
import { countries } from './CountryData';

function App() {
  const [searchInput, setSearchInput] = useState('');

  //solution 1
  const [$contries, setCountries] = useState([]);
  useEffect(() => {
    console.log(countries[0]);
    setCountries([...countries]);
  }, []);

  //Search and filter by name/ country /region /capital city
  const fileterContries = () =>{
    let filteredContries = countries.filter((c) =>
    (c.name + '').toLocaleLowerCase().includes(searchInput.trim().toLocaleLowerCase())
    || (c.region + '').toLocaleLowerCase().includes(searchInput.trim().toLocaleLowerCase())
    || (c.capital + '').toLocaleLowerCase().includes(searchInput.trim().toLocaleLowerCase())
  );

  
  setCountries(
    filteredContries
  )
  }

  const sortCountry =(sortBy) =>{
    //lowest
    let newArr =$contries.sort((c1,c2)=>{
      return sortBy*c1.population - sortBy*c2.population
    })

    console.log(newArr)
    setCountries([...newArr])
  }
  return (
    <div className="container">
      <div className="row el-element-overlay">
        <div className="col-12">
          <div class="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Country name"
              value={searchInput}
              // detect change in input
              onChange={(event) => {
                let data = event.target.value;
                setSearchInput(data);
                fileterContries();
               
              }}
            />
            <button type="button" class="btn btn-primary">
              Search
            </button>
          </div>
          <div className="col-12">
            <label>Sort by : </label>
            <select
              className="form-select form-select-lg mb-3 form-control"
              aria-label=".form-select-lg example"
              onChange ={(event)=>{
                let data = event.target.value;
             
                sortCountry(data)
              }}
            >
              <option value="-1">Highest population</option>
              <option value="1">Lowest population</option>
            </select>
          </div>
        </div>

        <div className="col-lg-4 col-md-4">
          {/* Country component */}
          <Country myCountry={countries[0]} />

          {/* Solution */}
        </div>

        {$contries.map((c) => (
          <div className="col-lg-4 col-md-4">
            <Country myCountry={c} />
          </div>
        ))}
      </div>
    </div>
  );
}

export { App };
