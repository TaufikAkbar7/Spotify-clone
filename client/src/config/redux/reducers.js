import 
{ 
    CATEGORIES,
    CATEGORIES_REQUEST,
    FEATURES_FOR_TRACK, 
    FEATURES_FOR_TRACK_REQUEST,
    GET_PLAYLIST,
    GET_PLAYLIST_REQUEST,
    NEW_RELEASES,
    NEW_RELEASES_REQUEST, 
    PROFILE_USER, 
    PROFILE_USER_REQUEST, 
    RECENTLY_TRACK,
    RECENTLY_TRACK_REQUEST, 
    RECOMMENDATIONS,
    RECOMMENDATIONS_REQUEST, 
    SAVED_TRACKS, 
    SAVED_TRACKS_REQUEST, 
    SEARCH_TRACKS, 
    SEARCH_TRACKS_REQUEST, 
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

export const categoriesReducer = (state = { loading: false }, action) => {
    switch (action.type){
        case CATEGORIES_REQUEST:
            return { loading: true }
        case CATEGORIES:
            return { categories: action.payload }
        default:
            return state;
        }
}

export const searchTracksReducer = (state = { loading: false }, action) => {
    switch (action.type){
        case SEARCH_TRACKS_REQUEST:
            return { loading: true }
        case SEARCH_TRACKS:
            return { searchTracks: action.payload }
        default:
            return state;
        }
}

export const savedTracksReducer = (state = { loading: false }, action) => {
    switch (action.type){
        case SAVED_TRACKS_REQUEST:
            return { loading: true }
        case SAVED_TRACKS:
            return { savedTracks: action.payload }
        default:
            return state;
        }
}

export const playlistByIdReducer = (state = { loading: false }, action) => {
    switch (action.type){
        case GET_PLAYLIST_REQUEST:
            return { loading: true }
        case GET_PLAYLIST:
            return { playlist: action.payload }
        default:
            return state;
        }
}