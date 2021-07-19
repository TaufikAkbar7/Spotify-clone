import React from 'react'
import { useHistory } from 'react-router-dom'

const Card = ({ key, img, band, song, click }) => {

    const history = useHistory();

    return (
        <div className="mt-5 mr-2" key={key} onClick={() => history.push(`/library/${click}`)}>
            <div className="h-full rounded-lg overflow-hidden bg-thirdColor shadow-lg cursor-pointer">
                <div className="bg-gray-400 p-5">
                    <img src={img} alt="" width="150" height="100" />
                </div>
                <div className="p-2 flex flex-col text-center">
                    <span className="text-sm font-semibold">{song}</span>
                    <span className="text-xs">{band}</span>
                </div>
            </div>
        </div>
    )
}

export default Card
