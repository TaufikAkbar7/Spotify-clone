import {
PROFILE_USER,
PROFILE_USER_REQUEST,
RECENTLY_TRACK,
FEATURES_FOR_TRACK,
NEW_RELEASES,
NEW_RELEASES_REQUEST,
RECOMMENDATIONS,
RECOMMENDATIONS_REQUEST,
USER_PLAYLIST,
USER_PLAYLIST_REQUEST,
RECENTLY_TRACK_REQUEST,
FEATURES_FOR_TRACK_REQUEST,
CATEGORIES_REQUEST,
CATEGORIES,
SEARCH_TRACKS_REQUEST,
SEARCH_TRACKS
} from "./constats"

export const getRecentlyTrack = (s) => async (dispatch) => {
    dispatch({ type: RECENTLY_TRACK_REQUEST })
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
    dispatch({ type: FEATURES_FOR_TRACK_REQUEST })
    s.getAudioFeaturesForTrack('3Qm86XLflmIXVm1wcwkgDK')
        .then(res => dispatch({ type: FEATURES_FOR_TRACK, payload: res.body }))
        .catch(err => console.log(err))
}

export const getNewReleases = (s) => async (dispatch) => {
    dispatch({ type: NEW_RELEASES_REQUEST })
    s.getNewReleases({ limit: 5, offset: 0, country: "ID" })
        .then(res => dispatch({ type: NEW_RELEASES, payload: res.body }))
        .catch(err => console.log(err))
}

export const getRecommendations = (s) => async (dispatch) => {
    dispatch({ type: RECOMMENDATIONS_REQUEST })
    s.getRecommendations({
        min_energy: 0.4,
        seed_artists: ['6mfK6Q2tzLMEchAr0e9Uzu', '4DYFVNKZ1uixa6SQTvzQwJ'],
        min_popularity: 5
    })
        .then(res => dispatch({ type: RECOMMENDATIONS, payload: res.body }))
        .catch(err => console.log(err))
}

export const getUserPlaylist = (s) => async (dispatch) => {
    dispatch({ type: USER_PLAYLIST_REQUEST })
    s.getUserPlaylists()
        .then(res => dispatch({ type: USER_PLAYLIST, payload: res.body.items }))
        .catch(err => console.log(err))
}

export const getCategories = (s) => async (dispatch) => {
    dispatch({ type: CATEGORIES_REQUEST })
    s.getCategories({
        limit: 10,
        offset: 0,
        country: "SE",
        locale: "sv_SE"
    })
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

export const getSearchTracks = (s, keyword) => async (dispatch) => {
    dispatch({ type: SEARCH_TRACKS_REQUEST })
    s.searchTracks(keyword)
        .then(res => console.log(res))
        .catch(err => console.log(err))
}