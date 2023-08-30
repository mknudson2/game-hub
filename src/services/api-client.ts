import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '3805c01271664c5a8cf87bad9405ece5'
    }
})