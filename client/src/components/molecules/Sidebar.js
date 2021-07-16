import React from 'react'
import SidebarOption from '../atoms/SidebarOption'
import HomeIcon from "@material-ui/icons/Home"
import SearchIcon from "@material-ui/icons/Search"
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic"


const Sidebar = ({ content: { playlist } }) => {
    
    return (
        <div className="flex flex-col px-5 w-48 min-h-screen bg-primaryColor text-white">
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" className="object-contain mr-auto" />
            <SidebarOption Icon={HomeIcon} name="Home" link="/dashboard"/>
            <SidebarOption Icon={SearchIcon} name="Search" link="/search"/>
            <SidebarOption Icon={LibraryMusicIcon} name="Your Library" link="/library" />
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
