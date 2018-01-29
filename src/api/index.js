const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response
  }
  const error = new Error(response.statusText)
  error.response = response
  throw error
}

const parseResponse = (response) => {
  return response.json()
}

export default {
  getProducts () {
    return fetch('/data/products.json')
      .then(checkStatus)
      .then(parseResponse)
      .then(data => {
        return data
      })
      .catch(err => {
        Promise.reject(err)
      })
  }
}
