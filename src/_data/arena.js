const axios = require('axios')

// Make an instance of Axios
const instance = axios.create({
  baseURL: "https://api.are.na/v2/"
});

const getData = async function() {
  // the per query at the end of the api url tells arena how many blocks we want from the channel since they're paginated by default
  // https://dev.are.na/documentation/channels

  let data = await instance.get('/channels/good-images-kxr0s9wzmpk?per=100')
    .then(function (response) {
      return response.data.contents;
    }) 
    .catch(function (error) { 
      console.log(error);
    })

  // Uncomment to see response in console
  // console.log(data)

  return data;
};

module.exports = getData();