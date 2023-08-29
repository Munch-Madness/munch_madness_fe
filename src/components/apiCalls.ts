function getData(){
  fetch('https://munch-madness-be-8b56c3719f5f.herokuapp.com/api/restaurants')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
}
getData()
export default getData