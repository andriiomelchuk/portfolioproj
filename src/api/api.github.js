import axios from "axios";

const handlerError = (error) => console.error(error)

export const fetchPopularRepos = (language) => {
    let encodeURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1000+language:${language}&sort=star&order=desc`);
    return axios.get(encodeURI)
        .then(response => {
            if (response.status === 200){
                return response;
            }
        })
        .catch(handlerError)
}