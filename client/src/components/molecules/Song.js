import React from 'react'
import AudiotrackIcon from '@material-ui/icons/Audiotrack';

const Song = ({ song, artist, duration }) => {
    return (
        <div className="flex flex-row justify-between justify-items-stretch w-full p-5">
            <div className="flex flex-row justify-center items-center">
                <AudiotrackIcon className="text-gray-400"/>
                <div className="flex flex-col justify-start items-start ml-3">
                    <span className="text-sm font-semibold text-white">{song}</span>
                    <span className="text-xs text-gray-400">{artist}</span>
                </div>
            </div>
            <span className="text-xs ml-96 text-gray-400">{duration}</span>
        </div>
    )
}

export default Song
