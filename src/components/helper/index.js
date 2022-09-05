const API_ID = process.env.REACT_APP_TEMPT;

export const tempt = (city_name) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?appid=${API_ID}&q=${city_name}&units=metric&feels_like=Metric`,
    {
      method: "GET",
    }
  )
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      console.log(error);
    });
};
