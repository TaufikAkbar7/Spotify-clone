import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getUserPlaylist } from '../config/redux/actions'
import { useAuth, sliceName } from '../utils'
import spotifyApi from "spotify-web-api-node"
import { code } from "./Login"
import { Card, Sidebar, Spinner, Title } from '../components'
const Library = () => {
    const accessToken = useAuth(code)
    const s = new spotifyApi({
        clientId: "6c7d7ffb3ab74ab7a9bf265960469268"
    })
    const userPlaylist = useSelector(state => state.userPlaylist)
    const { loading, playlist } = userPlaylist
    const dispatch = useDispatch()

    useEffect(() => {
        s.setAccessToken(accessToken)
        dispatch(getUserPlaylist(s))
    }, [accessToken, dispatch])

    console.log(userPlaylist)
    return (
        <div className="min-h-screen py-10 flex justify-start items-start">
            {loading ? (
                <Spinner />
            ) : playlist ? (
                <div className="flex justify-center items-start">
                    <Sidebar content={userPlaylist} />
                    <div className="flex flex-col justify-center items-start ml-5">
                        <Title title="New releases" />
                        <div className="flex flex-wrap justify-center items-center container mx-auto">
                            {playlist.map(item => (
                                <Card
                                    key={item.id}
                                    click={item.id}
                                    img={item.images[0].url}
                                    song={sliceName(item.name)}
                                    band={sliceName(item.description)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <Spinner />
            )}
        </div>
    )
}

export default Library
