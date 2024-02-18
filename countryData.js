const getCountries = async () => {
  const response = await fetch("https://countryapi.io/api/all");
  const json = await response.json();

  console.log(json);
};

getCountries();
