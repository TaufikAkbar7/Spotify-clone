import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { 
    recentlyTrackReducer, 
    profileReducer, 
    featuresTrackReducer, 
    newReleasesReducer, 
    recommendationsReducer, 
    userPlaylistReducer, 
    categoriesReducer,
    searchTracksReducer
} from "./reducers"

const reducer = combineReducers({
    myProfile: profileReducer,
    recentlyTrack: recentlyTrackReducer,
    featuresTrack: featuresTrackReducer,
    newReleasesTrack: newReleasesReducer,
    recommendationsTrack: recommendationsReducer,
    userPlaylist: userPlaylistReducer,
    listCategories: categoriesReducer,
    listSearchTracks: searchTracksReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunk))
)

export default store