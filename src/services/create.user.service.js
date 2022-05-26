const axios = require('axios'); 

exports.createUser = async (user) => {
    const response = await axios.post('https://rentyback.herokuapp.com/user',user);
    return response.data;
};