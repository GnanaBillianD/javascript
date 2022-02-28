const axios = require('axios');

const url = 'http://example.com/endpoint/get/posts';

axios.get(url).then(data => console.log(data)).catch(err => console.log(err))
