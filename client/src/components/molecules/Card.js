import React from 'react'

const Card = ({ key, img, band, song }) => {
   
    return (
        <div>
            <div className="mt-5 mr-2" key={key}>
                <div className="h-full rounded-lg overflow-hidden bg-thirdColor shadow-lg cursor-pointer">
                    <div className="bg-gray-400 p-5">
                        <img src={img} alt="" width="150" height="100" />
                    </div>
                    <div className="p-5 flex flex-col text-center">
                        <span className="text-lg font-semibold">{song}</span>
                        <span className="text-sm">{band}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
