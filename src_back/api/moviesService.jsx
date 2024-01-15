import axios from "./service";

export const movies = {
    get: () => axios.get().then(response => response.data),
}