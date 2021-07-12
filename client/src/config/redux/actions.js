import { PROFILE_USER, PROFILE_USER_REQUEST, RECENTLY_TRACK, FEATURES_FOR_TRACK, NEW_RELEASES, RECOMMENDATIONS } from "./constats"

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
        .then(res => dispatch({ type: PROFILE_USER, payload: res }))
        .catch(err => console.log(err))
}

export const getFeaturesTrack = (s) => async (dispatch) => {
    s.getAudioFeaturesForTrack('3Qm86XLflmIXVm1wcwkgDK')
    .then(res => dispatch({ type: FEATURES_FOR_TRACK, payload: res.body }))
    .catch(err => console.log(err))
}

export const getNewReleases = (s) => async (dispatch) => {
    s.getNewReleases({ limit: 5, offset: 0, country: "ID" })
    .then(res => dispatch({ type: NEW_RELEASES, payload: res.body }))
    .catch(err => console.log(err))
}

export const getRecommendations = (s) => async (dispatch) => {
    s.getRecommendations({
        min_energy: 0.4,
        seed_artists: ['6mfK6Q2tzLMEchAr0e9Uzu', '4DYFVNKZ1uixa6SQTvzQwJ'],
        min_popularity: 5
    })
    .then(res => dispatch({ type: RECOMMENDATIONS, payload: res.body }))
    .catch(err => console.log(err))
}