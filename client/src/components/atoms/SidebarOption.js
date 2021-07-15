import React from 'react'
import { useHistory } from 'react-router-dom'
const SidebarOption = ({ Icon, name, link }) => {

    const history = useHistory()

    return (
        <div className="flex cursor-pointer h-10 items-center text-gray-400 hover:text-white" onClick={() => history.push(link)}>
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
