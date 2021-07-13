import React from 'react'
import SidebarOption from '../atoms/SidebarOption'
import HomeIcon from "@material-ui/icons/Home"
import SearchIcon from "@material-ui/icons/Search"
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic"

const Sidebar = ({ content: { playlist } }) => {
    console.log(playlist)
    return (
        <div className="flex flex-col p-5 w-80 min-h-screen bg-primaryColor text-white">
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" className="h-48 object-contain mr-auto p-2" />
            <SidebarOption Icon={HomeIcon} name="Home" />
            <SidebarOption Icon={SearchIcon} name="Search" />
            <SidebarOption Icon={LibraryMusicIcon} name="Your Library" />
            <br />
            <strong className="ml-2 p-2 text-sm">PLAYLISTS</strong>
            {playlist && (
                <div>
                    {playlist.map((item, i) => (
                        <SidebarOption key={i} name={item.name} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Sidebar
