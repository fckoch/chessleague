import axios from "axios"



const service = axios.create({
    baseURL:
      process.env.ENVIROMENT === "production"
        ? "/api"
        : `http://${window.location.hostname}:5000/api`,
  
    withCredentials: true,
  });


  const errHandler = err => {
    console.error(err)
    if (err.response && err.response.data) {
      console.error("API response", err.response.data)
      throw err.response.data.message
    }
    throw err
  };

  export default {
      service: service,
  // This is an example on how to use this method in a different file
  // api.getCountries().then(countries => { /* ... */ })
  getLeageData() {
    return service
      .get("/league")
      .then(res => res.data)
      .catch(errHandler)
  },

  getGameData(id) {
      console.log("id in service file =>",id);
    return service
      .get("/game" + id)
      .then(res => res.data)
      .catch(errHandler)
  },

  }

  