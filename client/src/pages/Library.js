import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPlaylistById, getUserPlaylist } from '../config/redux/actions';
import spotifyApi from "spotify-web-api-node"
import { code } from "./Login"
import { useAuth } from '../utils';
import { Sidebar, Spinner, Song } from '../components'

const Library = () => {
    // const id = props.match.params.id
    const id = "37i9dQZF1EM76SlcZgb2Go"
    const dispatch = useDispatch();
    const accessToken = useAuth(code)
    const s = new spotifyApi({
        clientId: "6c7d7ffb3ab74ab7a9bf265960469268"
    })
    const playlistById = useSelector(state => state.playlistById)
    const { loading, playlist } = playlistById
    const userPlaylist = useSelector(state => state.userPlaylist)

    useEffect(() => {
        s.setAccessToken(accessToken)
        dispatch(getPlaylistById(s, id))
        dispatch(getUserPlaylist(s))
    }, [accessToken, dispatch])
    console.log(playlist)
    return (
        <div className="min-h-screen py-10 flex justify-start items-start">
            {loading ? (
                <Spinner />
            ) : playlist ? (
                <div className="flex justify-center items-start bg-wrapColor">
                    <Sidebar content={userPlaylist} />
                    <div className="container mx-auto flex flex-row items-start ml-5 p-10">
                        <div className="flex flex-col justify-center items-center">
                            <img src={playlist.images[0].url} width="300" height="150" alt="playlist-img"/>
                            <span className="text-2xl text-white font-semibold mt-5">{playlist.name}</span>
                            <button className="mt-5 rounded-full bg-green-500 text-white p-2 px-14">Play</button>
                            <span className="text-sm mt-5 text-gray-400">{playlist.tracks.total} SONGS</span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            {playlist.tracks.items.map(item => (
                                <Song
                                    key={item.track.id}
                                    song={item.track.name}
                                    artist={item.track.artists[0].name}
                                    duration={item.track.duration_ms}
                                    album={item.track.album.name}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <p>aa</p>
            )}
        </div>
    )
}

export default Library
