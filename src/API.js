const axios = require("axios");


const options = {
    method: 'GET',
    url: 'https://airbnb19.p.rapidapi.com/api/v1/searchDestination',
    headers: {
      'X-RapidAPI-Key': '4c4a9de1bamsha6b3b850c8d309ep189f2bjsn27461fdd98de',
      'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
    }
  };
  
  export async function GetPlaceId({query}) {

    options = {...options, params: {query: query}}

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
  }

//   export async function SearchPropery({placeId}) {

//     options = {...options, }

//     axios.request(options).then(function (response) {
//         console.log(response.data);
//     }).catch(function (error) {
//         console.error(error);
//     });
//   }



/*

    const options = {
    method: 'GET',
    url: 'https://airbnb19.p.rapidapi.com/api/v1/searchDestination',
    params: {query: 'Chicago', country: 'USA'},
    headers: {
        'X-RapidAPI-Key': '4c4a9de1bamsha6b3b850c8d309ep189f2bjsn27461fdd98de',
        'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
    }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });

*/