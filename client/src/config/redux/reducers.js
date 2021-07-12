import { FEATURES_FOR_TRACK, NEW_RELEASES, PROFILE_USER, PROFILE_USER_REQUEST, RECENTLY_TRACK, RECOMMENDATIONS } from "./constats"

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

export const featuresTrackReducer = (state = {}, action) => {
    switch (action.type){
        case FEATURES_FOR_TRACK:
            return { features: action.payload }
        default:
            return state;
    }
}

export const newReleasesReducer = (state = {}, action) => {
    switch (action.type){
        case NEW_RELEASES:
            return { newReleases: action.payload }
        default:
            return state;
    }
}

export const recommendationsReducer = (state = {}, action) => {
    switch (action.type){
        case RECOMMENDATIONS:
            return { recommendations: action.payload }
        default:
            return state;
    }
}