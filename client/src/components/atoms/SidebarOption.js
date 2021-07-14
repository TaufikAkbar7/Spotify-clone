import React from 'react'

const SidebarOption = ({ Icon, name }) => {
    return (
        <div className="flex cursor-pointer h-10 items-center text-gray-400 hover:text-white">
            {Icon && (
                <div className="px-2 text-2xl">
                    <Icon />
                </div>
            )}
            {Icon ? <h4>{name}</h4> : <p>{name}</p>}
        </div>
    )
}

export default SidebarOption
