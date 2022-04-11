import axios from "axios";

export const apiFilmes = axios.create({
    baseURL: 'http://api.themoviedb.org/3',
    headers: {
        'Content-type': 'application/json;charset=utf-8',
    },

});

