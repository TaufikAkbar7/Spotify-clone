import React from 'react'
import SearchIcon from '@material-ui/icons/Search'

const InputSearch = () => {
    return (
        <div className="p-8">
            <div className="bg-white flex items-center justify-start rounded-full flex-row-reverse pr-14">
                <input className="rounded-l-full w-64 py-2 px-2 text-gray-700 leading-tight focus:outline-none text-sm" id="search" type="text" placeholder="Search for Artists, Songs or Podcasts" />
                <button class="text-gray-500 rounded-full p-2 w-12 h-12 focus:outline-none flex items-center justify-center">
                    <SearchIcon />
                </button>
            </div>
        </div>
    )
}

export default InputSearch
