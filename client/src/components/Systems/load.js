import axios from 'axios';

exports.new = axios.create ({
    base_URL : 'localhost:5000/createUser',
});

exports.old = axios.create ({
    base_URL: 'localhost:5000/loadUser',
})