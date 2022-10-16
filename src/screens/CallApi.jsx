import React, { useState } from "react";

const CallApi = () => {
  const [countries, setCountries] = useState("")
  let baseUrl = "https://covid-193.p.rapidapi.com/countries";
  const options = {
    method: "GET",
    headers: {
      'X-RapidAPI-Key': 'bbfe9f7397msh13132b4b0ddda52p15b2f0jsn85dc13e1d87d',
      'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
    }
  };

  

  async function fetchData() {
    await fetch(baseUrl, options)
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  fetchData();
  return <div>CallApi</div>;
};

export default CallApi;
