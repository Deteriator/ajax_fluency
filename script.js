let url = "https://reqres.in/api/users";

function getLog(url) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status == 200) {
      let users = (JSON.parse(xhr.responseText)).data;
      users.map(user =>{
      	console.log(user)
      })
    }
  };
  xhr.open('GET', url);
  xhr.send();
}
getLog(url)

function get(url, callback) {
  const xhr = new XMLHttpRequest()
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      callback(xhr.response);
    }
  }
  xhr.open('GET', url);
  xhr.send();
}

function logUser(user) {
	for(let i = 0; i < 5; i++){
		console.log(user[i])
	}
}