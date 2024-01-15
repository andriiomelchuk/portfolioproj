//action type
export const FETCH_MOVIES_LIST = 'FETCH_MOVIES_LIST';

//action creator

export const fetchMoviesAction = (movies) => ({
    type: FETCH_MOVIES_LIST,
    payload: movies
})