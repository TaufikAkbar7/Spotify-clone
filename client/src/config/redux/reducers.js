import { PROFILE_USER, PROFILE_USER_REQUEST, RECENTLY_TRACK } from "./constats"

export const recentlyTrackReducer = (state = {}, action) => {
    switch (action.type){
        case RECENTLY_TRACK:
            return { tracks: action.payload }
        default:
            return state;
    }
}

export const profileReducer = (state = { loading: false }, action) => {
    switch (action.type){
        case PROFILE_USER_REQUEST:
            return { loading: true }
        case PROFILE_USER:
            return { loading: false, profile: action.payload }
        default:
            return state;
    }
}