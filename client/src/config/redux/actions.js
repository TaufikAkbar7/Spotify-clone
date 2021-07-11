import { PROFILE_USER, PROFILE_USER_REQUEST, RECENTLY_TRACK } from "./constats"

export const getRecentlyTrack = (s) => async (dispatch) => {
    s.getMyRecentlyPlayedTracks({ limit: 5 })
        .then(res => {
            const getData = res.body.items
            dispatch({ type: RECENTLY_TRACK, payload: getData })
        })
        .catch(err => console.log(err))
}

export const getProfile = (s) => async (dispatch) => {
    dispatch({ type: PROFILE_USER_REQUEST })
    s.getMe()
            .then(res => {
                dispatch({ type: PROFILE_USER, payload: res })
            })
            .catch(err => console.log(err))
}