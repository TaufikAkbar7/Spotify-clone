import React, { useEffect } from 'react'
import useAuth from '../utils/useAuth'
import spotifyApi from "spotify-web-api-node"
import { Card, Title, Sidebar } from "../components"
import { useSelector, useDispatch } from "react-redux";
import { getNewReleases, getRecentlyTrack } from "../config/redux/actions"
import "./style.css"


const Dashboard = ({ token }) => {
    // const myProfile = useSelector(state => state.myProfile)
    // const { profile, loading } = myProfile
    const recentlyTrack = useSelector(state => state.recentlyTrack)
    const newReleasesTrack = useSelector(state => state.newReleasesTrack)
    const { tracks } = recentlyTrack
    const { newReleases } = newReleasesTrack
    const accessToken = useAuth(token)
    const dispatch = useDispatch();
    const s = new spotifyApi({
        clientId: "6c7d7ffb3ab74ab7a9bf265960469268"
    })

    const sliceName = (name) => {
        const data = name.slice(0, 16)
        return data
    }

    useEffect(() => {
        if (!accessToken) return console.log("cannot get access token")
        s.setAccessToken(accessToken)
        
        dispatch(getRecentlyTrack(s))
        dispatch(getNewReleases(s))
        
    }, [accessToken, dispatch])

    return (

        <div className="min-h-screen py-10 flex flex-row justify-center items-start">
            <Sidebar/>
            {newReleases && (
                <div>
                    <Title title="Recently Played" />
                    <div className="flex flex-wrap justify-center items-center container mx-auto">
                        {tracks.map((item, i) => (
                            <Card
                                key={i}
                                img={item.track.album.images[1].url}
                                song={sliceName(item.track.name)}
                                band={sliceName(item.track.artists[0].name)}
                            />
                        ))}
                    </div>
                    <Title title="New Releases" />
                    <div className="flex flex-wrap justify-center items-center container mx-auto">
                        {newReleases.albums.items.map((item, i) => (
                            <Card
                                key={i}
                                img={item.images[1].url}
                                song={sliceName(item.name)}
                                band={sliceName(item.artists[0].name)}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Dashboard
