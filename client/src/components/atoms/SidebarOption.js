import React from 'react'
import { Link } from 'react-router-dom'
const SidebarOption = ({ Icon, name, link }) => {

    return (
        <div className="flex cursor-pointer h-10 items-center text-gray-400 hover:text-white">
            {Icon && (
                <div className="px-2 text-2xl">
                    <Link to={link}>
                        <Icon />
                    </Link>
                </div>
            )}
            {Icon ? <h4>{name}</h4> : <p>{name}</p>}
        </div>
    )
}

export default SidebarOption
