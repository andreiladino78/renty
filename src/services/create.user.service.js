const axios = require('axios'); 

const createUser = async (user) => {
    const response = await axios.post('https://rentyback.herokuapp.com/user',user);
    return response.data;
};

export default createUser;