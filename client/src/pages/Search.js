import React, { useEffect } from 'react'
import { useAuth, sliceName } from '../utils'
import spotifyApi from "spotify-web-api-node"
import { code } from "./Login"
import { useDispatch, useSelector } from 'react-redux'
import { getCategories, getNewReleases, getUserPlaylist } from '../config/redux/actions'
import { Card, Spinner, Sidebar, Title, InputSearch } from '../components'
const Search = () => {
    const accessToken = useAuth(code)
    const s = new spotifyApi({
        clientId: "6c7d7ffb3ab74ab7a9bf265960469268"
    })
    const listCategories = useSelector(state => state.listCategories)
    const newReleasesTrack = useSelector(state => state.newReleasesTrack)
    const userPlaylist = useSelector(state => state.userPlaylist)
    const { loading, categories } = listCategories
    const { newReleases, } = newReleasesTrack
    const dispatch = useDispatch()

    useEffect(() => {
        s.setAccessToken(accessToken)
        dispatch(getCategories(s))
        dispatch(getNewReleases(s))
        dispatch(getUserPlaylist(s))
    }, [dispatch, accessToken])

   
    return (
        <div className="min-h-screen py-10 flex justify-center items-start">
            {loading ? (
                <Spinner />
            ) : categories && newReleases ? (
                <div className="flex justify-center items-start">
                    <Sidebar content={userPlaylist} />
                    <div className="flex flex-col justify-center items-start">
                        <InputSearch/>
                        <Title title="Recently Played" />
                        <div className="flex flex-wrap justify-center items-center container mx-auto">
                        {newReleases.albums.items.map(item => (
                            <Card
                            key={item.id}
                            img={item.images[1].url}
                            song={sliceName(item.name)}
                            band={sliceName(item.artists[0].name)}
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

export default Search
