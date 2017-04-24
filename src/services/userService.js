const createUser = (user) => {
  /*
    NOTE: THIS will only work for dev. This needs to be a dynamic URL for production
  */
  // debugger;
  return fetch('/api/v1/users', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then((response) => {
      return response.json()
    })
    .then(data => data)
    .catch(err => err);
}

const loginUser = (username, password) => {
  return fetch('/api/v1/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({username, password})
  })
    .then((response) => {
      console.log(response)
      return response.json()
    })
    .then(data => data)
    .catch(err => err);

}

module.exports = {
  createUser,
  loginUser,
}
