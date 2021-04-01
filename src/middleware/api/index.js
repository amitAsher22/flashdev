const axios = require('axios');

export default {
    get: options =>{
      return axios.get(`http://localhost:4000/${options.entity}`)
            .then( response => {
                return response.data.result
            })
            .catch(error => {
                console.error(error);
            })

    },
    create: options =>{
        return axios.post(`http://localhost:4000/${options.entity}` , {Owners : options.Owners})
            .then(response => {
                console.log(response)
                return response.data.result
            })

    },

    remove: options => {
        return axios.delete(`http://localhost:4000/${options.entity}/${options.id}`)
            .then(response =>{
                return response.data.result

            })

    },

    update: options =>{
        return axios.put(`http://localhost:4000/${options.entity}/${options.id}`, {Owners:options.Owner })
            .then(response => {
                return response.data.result.Owners
            })

    },

    getItemById : options => {
        return axios.get(`http://localhost:4000/${options.entity}/${options.id}`)
            .then(response =>{
                return response.data.result
            })
    }

}

