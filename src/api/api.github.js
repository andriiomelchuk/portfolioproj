import axios from "axios";

const handlerError = (error) => console.error(error)


// get all repos where stars more then 1000. Use for popular page
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


// get profile by user
const getUserByName = (userName) => {
    return axios.get(`https://api.github.com/users/${userName}`)
        .then(user => user.data)
}

const getReposByUserName = (userName) => {
    return axios.get(`https://api.github.com/users/${userName}/repos`)
        .then(repos => repos.data)
}

const getStarCount = (repos) => {
    return repos.reduce((acc, repo) => {
        return acc + repo.stargazers_count
    }, 0)
}

const calculateStore = (profile, repos) => {
    const followers = profile.followers;
    const totalStars = getStarCount(repos);
    return followers + totalStars;
}

const getUserData = (userName) => {
    return Promise.all([
        getUserByName(userName),
        getReposByUserName(userName)
    ])
        .then(([profile, repos]) => {
            return {
                profile,
                score: calculateStore(profile, repos)
            }
        })
}

const sortPlayersByStars = (players) => players.sort((a, b) => b.score - a.score);

export const makeBattle = (players) => {
    return Promise.all(players.map(getUserData))
        .then(sortPlayersByStars)
        .catch(handlerError)
}