import React, { useEffect, useState } from "react";
import Country from "./Country.jsx";
import { useSelector } from "react-redux";
import style from "./countries.module.css";
import "./countries.module.css"

const Countries = () => {
  const countries = useSelector((state) => state.countries);
  const [currentPage, setCurrentPage] = useState(0);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const calcCountriesForPage = () => {
    return countries.slice(currentPage, currentPage + 10);
  };

  useEffect(() => {
    goToPage(0);
  }, [countries]);
console.log(countries)
  const countriesForPage = calcCountriesForPage();

  return (
    <div>
      <button onClick={() => goToPage(0)} className={style.butn}> {'<<'} </button>
      <button onClick={() => goToPage(Math.max(0, currentPage - 10))} className={style.butn}> {'<'} </button>
      <button onClick={() => goToPage(Math.min(countries.length - 10, currentPage + 10))} className={style.butn}> {'>'} </button>
      <button onClick={() => goToPage(countries.length - 10)} className={style.butn}> {'>>'} </button>
      <div className={style.grid}>
        {countriesForPage.map((country) => (
          <Country 
            key={country.id} 
            id={country.id} 
            flags={country.image} 
            name={country.name} 
            region={country.region}
          />
        ))}
      </div>
    </div>
  );
}

export default Countries;