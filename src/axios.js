import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-clone-aae13.cloudfunctions.net/api'
    //'http://localhost:5001/clone-aae13/us-central1/api'
});

export default instance;