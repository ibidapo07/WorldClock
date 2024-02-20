const getCountries = async () => {
  const response = await fetch(
    "https://countryapi.io/api/all?apikey=ygMN9HYIZDMKnU4wTPDD3iiAvULddJ8LdbrfNhgg"
  );
  const json = await response.json();

  for (const country of json) {
    countries.push(json[country].name);
  }
};
