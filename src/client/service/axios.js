const axios = require("axios").create({
    baseURL: (process.env.REACT_APP_API_SITE_NAME || 'http://localhost:8080') + '/api',
    headers: {
        Accept: 'application/json,application/x-www-form-urlencoded,text/plain,*/*',
        'Content-Type': 'application/json;charset=utf-8',
    },
});

const hello =  async () => {
    url = "/welcome"
    const { data }  = await axios.get(url)
    console.log(data)
}
hello()
