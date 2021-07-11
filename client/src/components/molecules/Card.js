import React from 'react'

const Card = ({ content }) => {
    console.log(content)
    return (
        <div className="flex flex-wrap justify-center items-center">
            <div className="p-5 sm:w-1/2 lg:w-1/3 md:ml-4 md:mr-4 md:mt-5 sm:mt-5 sm:ml-1 sm:mr-3">
                {
                    content ? (
                        <div>
                            {content.map((item, i) => (
                            <div className="h-full rounded-lg overflow-hidden bg-thirdColor" key={i}>
                                <img src={item.track.href} alt="" />
                                <span className="text-2xl font-semibold">{item.track.name}</span>
                                {item.artists.map(band => (
                                    <span className="text-sm">{band.name}</span>
                                ))}
                            </div>
                        ))}
                        </div>
                    ) : (
                        <p>not found</p>
                    )
                }
            </div>
        </div>
    )
}

export default Card
