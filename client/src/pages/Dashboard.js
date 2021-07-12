import React, { useEffect } from 'react'
import useAuth from '../utils/useAuth'
import spotifyApi from "spotify-web-api-node"
import { Title } from "../components"
import { useSelector, useDispatch } from "react-redux";
import { getFeaturesTrack, getNewReleases, getRecentlyTrack, getRecommendations } from "../config/redux/actions"
import "./style.css"

const Dashboard = ({ token }) => {
    // const myProfile = useSelector(state => state.myProfile)
    // const { profile, loading } = myProfile
    const recentlyTrack = useSelector(state => state.recentlyTrack)
    const featuresTrack = useSelector(state => state.featuresTrack)
    const newReleasesTrack = useSelector(state => state.newReleasesTrack)
    const recommendationsTrack = useSelector(state => state.recommendationsTrack)
    const { tracks } = recentlyTrack
    const accessToken = useAuth(token)
    const dispatch = useDispatch();
    const s = new spotifyApi({
        clientId: "6c7d7ffb3ab74ab7a9bf265960469268"
    })

    useEffect(() => {
        if (!accessToken) return console.log("cannot get access token")
        s.setAccessToken(accessToken)
        dispatch(getRecentlyTrack(s))
        dispatch(getFeaturesTrack(s))
        dispatch(getNewReleases(s))
        dispatch(getRecommendations(s))
    }, [accessToken, dispatch])
    console.log(featuresTrack)
    console.log(newReleasesTrack)
    console.log(recommendationsTrack)
    return (

        <div className="min-h-screen py-10 flex flex-col justify-center items-center">
            {tracks && (
                <div>
                    <Title title="Recently Played" />
                    <div className="flex flex-wrap justify-center items-center container mx-auto">
                        {tracks.map((item, i) => (
                            <div className="mt-5 p-5" key={i}>
                                <div key={i} className="h-full rounded-lg overflow-hidden bg-thirdColor shadow-lg mr-5 cursor-pointer">
                                    <div className="bg-gray-400 p-5">
                                        <img src={item.track.album.images[1].url} alt="" width="150" height="100" />
                                    </div>
                                    <div className="p-5 flex flex-col">
                                        <span className="text-lg font-semibold">{item.track.name}</span>
                                        <span className="text-sm">{item.track.artists[0].name}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Dashboard
