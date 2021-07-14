import 
{ 
    FEATURES_FOR_TRACK, 
    FEATURES_FOR_TRACK_REQUEST,
    NEW_RELEASES,
    NEW_RELEASES_REQUEST, 
    PROFILE_USER, 
    PROFILE_USER_REQUEST, 
    RECENTLY_TRACK,
    RECENTLY_TRACK_REQUEST, 
    RECOMMENDATIONS,
    RECOMMENDATIONS_REQUEST, 
    USER_PLAYLIST,
    USER_PLAYLIST_REQUEST, 
} from "./constats"

export const recentlyTrackReducer = (state = { loading: false }, action) => {
    switch (action.type){
        case RECENTLY_TRACK_REQUEST:
            return { loading: true }
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

export const featuresTrackReducer = (state = { loading: false }, action) => {
    switch (action.type){
        case FEATURES_FOR_TRACK_REQUEST:
            return { loading: true }
        case FEATURES_FOR_TRACK:
            return { features: action.payload }
        default:
            return state;
    }
}

export const newReleasesReducer = (state = { loading: false }, action) => {
    switch (action.type){
        case NEW_RELEASES_REQUEST:
            return { loading: true }
        case NEW_RELEASES:
            return { newReleases: action.payload }
        default:
            return state;
    }
}

export const recommendationsReducer = (state = { loading: false }, action) => {
    switch (action.type){
        case RECOMMENDATIONS_REQUEST:
            return { loading: true }
        case RECOMMENDATIONS:
            return { recommendations: action.payload }
        default:
            return state;
    }
}

export const userPlaylistReducer = (state = { loading: false }, action) => {
    switch (action.type){
        case USER_PLAYLIST_REQUEST:
            return { loading: true }
        case USER_PLAYLIST:
            return { playlist: action.payload }
        default:
            return state;
        }
}