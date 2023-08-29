function getData(){
  fetch("https://munch-madness-be-8b56c3719f5f.herokuapp.com/api/v1/places/search?query=chicken")
  .then(response => {
    if (!response.ok) {
      throw new Error("Problem with Network");
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error(error));
}
export default getData