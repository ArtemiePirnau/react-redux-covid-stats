import axios from "axios";

const options = {
  method: "GET",
  url: "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats",
  headers: {
    "X-RapidAPI-Key": "6eff618fd3mshb998c5881cfd16cp18c7bdjsne0e0e1b6068d",
    "X-RapidAPI-Host": "covid-19-coronavirus-statistics.p.rapidapi.com",
  },
};

const response = axios
  .request(options)
  .catch((err) => console.log(`Error is ${err}`));

export default response;
