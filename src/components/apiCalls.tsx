import { error } from "console";
import React from "react";

function getData() {
  fetch("https://munch-madness-be-8b56c3719f5f.herokuapp.com/api/v1/places/?query=80214&search=random")
  .then(response => {
    console.log(response)
    if (!response.ok) {
      throw new Error("Problem with Network");
    }
    return response.json();
  })
  // .then(data => console.log(data))
  .catch(error => console.error(error));
}

interface ResaurantData {
  
    "id": string,
    "type": string,
    "attributes": {
    "name": string,
    "photo": string,
    "price": number,
    "rating": number
    }
    
}
export default getData