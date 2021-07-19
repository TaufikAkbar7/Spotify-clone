import React, { useEffect, Fragment } from 'react'
import { Card, Title, Sidebar, Spinner } from "../components"
import { useSelector, useDispatch } from "react-redux"
import { code } from "./Login"
import { getNewReleases, getRecentlyTrack, getUserPlaylist, getProfile } from "../config/redux/actions"
import { useAuth, sliceName } from '../utils'
import spotifyApi from "spotify-web-api-node"
import "./style.css"


const Dashboard = () => {
    const accessToken = useAuth(code)
    const s = new spotifyApi({
        clientId: "6c7d7ffb3ab74ab7a9bf265960469268"
    })
    const myProfile = useSelector(state => state.myProfile)
    const { profile, loading } = myProfile
    const recentlyTrack = useSelector(state => state.recentlyTrack)
    const newReleasesTrack = useSelector(state => state.newReleasesTrack)
    const userPlaylist = useSelector(state => state.userPlaylist)
    const { tracks, loading: loadingRecently } = recentlyTrack
    const { newReleases, loading: loadingNewReleases } = newReleasesTrack
    const dispatch = useDispatch();

    useEffect(() => {
        s.setAccessToken(accessToken)
        dispatch(getProfile(s))
        dispatch(getRecentlyTrack(s))
        dispatch(getNewReleases(s))
        dispatch(getUserPlaylist(s))
    }, [dispatch, accessToken])


    return (
        <div className="min-h-screen py-10 flex justify-center items-start">
            {loading ? (
                <Spinner />
            ) : profile ? (
                <div className="flex justify-center items-start">
                    <Sidebar content={userPlaylist} />
                    <div className="flex flex-col justify-center items-start bg-red-500">
                        <Title title="Recently Played" />
                        <div className="flex flex-wrap justify-center items-center container mx-auto">
                            {loadingRecently ? (
                                <Spinner />
                            ) : (
                                <Fragment>
                                    {tracks.map((item, i) => (
                                        <Card
                                            key={i}
                                            img={item.track.album.images[1].url}
                                            song={sliceName(item.track.name)}
                                            band={sliceName(item.track.artists[0].name)}
                                        />
                                    ))}
                                </Fragment>
                            )}
                        </div>
                        <Title title="New Releases" />
                        <div className="flex flex-wrap justify-center items-center container mx-auto">
                            {loadingNewReleases ? (
                                <Spinner />
                            ) : (
                                <Fragment>
                                    {newReleases.albums.items.map((item, i) => (
                                        <Card
                                            key={i}
                                            img={item.images[1].url}
                                            song={sliceName(item.name)}
                                            band={sliceName(item.artists[0].name)}
                                        />
                                    ))}
                                </Fragment>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <Spinner />
            )}
        </div>
    )
}

export default Dashboard
