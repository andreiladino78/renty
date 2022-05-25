const axios = require('axios'); 

exports.createUser = async (user) => {
    const response = await axios.post('http://localhost:4000/user',user);
    return response.data;
};