import React, { useEffect } from 'react'
import useAuth from '../utils/useAuth'
import spotifyApi from "spotify-web-api-node"
import { Spinner, Title } from "../components"
import { useSelector, useDispatch } from "react-redux";
import { getProfile, getRecentlyTrack } from "../config/redux/actions"
import "./style.css"

const Dashboard = ({ token }) => {
    const myProfile = useSelector(state => state.myProfile)
    const { profile, loading } = myProfile
    const recentlyTrack = useSelector(state => state.recentlyTrack)
    const { tracks } = recentlyTrack
    const accessToken = useAuth(token)
    const dispatch = useDispatch();
    const s = new spotifyApi({
        clientId: "6c7d7ffb3ab74ab7a9bf265960469268"
    })

    useEffect(() => {
        if (!accessToken) return console.log("cannot get access token")
        s.setAccessToken(accessToken)
        dispatch(getProfile(s))
        dispatch(getRecentlyTrack(s))
    }, [accessToken, dispatch])
    console.log(profile)
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="container mx-auto bg-red-500">
                {loading ? (
                    <Spinner/>

                ) : myProfile ? (
                    <div className="flex flex-wrap justify-center items-center">
                        <Title title="Adddww"/>
                        <div className="p-5 sm:w-1/2 lg:w-1/3 md:ml-4 md:mr-4 md:mt-5 sm:mt-5 sm:ml-1 sm:mr-3">
                            {/* {tracks.map((item, i) => (
                                <div className="h-full rounded-lg overflow-hidden bg-thirdColor" key={i}>
                                    <img src={item.track.href} alt="" />
                                    <span className="text-2xl font-semibold">{item.track.name}</span>
                                    {item.artists.map(band => (
                                        <span className="text-sm">{band.name}</span>
                                    ))}
                                </div>
                            ))} */}
                            {profile.body.display_name}
                        </div>
                    </div>
                ) : (
                    <p>aa</p>
                )}
            </div>
        </div>
    )
}

export default Dashboard
