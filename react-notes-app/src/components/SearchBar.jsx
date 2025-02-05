import { MdSearch } from 'react-icons/md';

const SearchBar = ({ handleSearchNote }) => {
    return (
        <div className="search-bar">
            <MdSearch className='search-icons' size='1.3em'/>
            <input onChange={(e) => handleSearchNote(e.target.value)}  type="text" placeholder="type to search..." />
        </div>
    )
}

export default SearchBar;