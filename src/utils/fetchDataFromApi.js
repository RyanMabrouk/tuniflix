import axios from 'axios';


const BASE_URL = `https://api.themoviedb.org/3`;
const TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGE3OTZkYmQ3OTg5Mzc2M2IyMzc5ZmFmOTE0ODI3ZSIsInN1YiI6IjY0ZDU3YzUwNGE0YmY2MDBjNzE0NmQwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qBv4z1WpzIVVtAi9l2Rsozc9zVGL9H7m0INILnU2AJ8" 

const headers = {
    Authorization: `Bearer ${TOKEN}`
};

async function fetchDataFromApi(url, params="") {
    try {
        const { data } = await axios.get(BASE_URL + url, { headers, params });
        return data;
    } catch (err) {
        return err;
    }
}

export default fetchDataFromApi;

