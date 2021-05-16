import instance from "./index";
import urls from "./urls";

const tokenApi = {
  create: function (data) {
    return new Promise((resolve, reject) => {
      instance({
        method: urls.createToken.method,
        url: urls.createToken.url,
        data: data
      }).then(response => {
        resolve(response)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getAll: function () {
  return new Promise((resolve, reject) => {
    instance({
      method: urls.getAllToken.method,
      url: urls.getAllToken.url,
    }).then(response => {
      resolve(response)
    }).catch(err => {
      reject(err)
    })
  })
}
}

export default tokenApi