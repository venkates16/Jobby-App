import {BsSearch} from 'react-icons/bs'
import './index.css'

const SerachBar = props => {
  const {changeSearch, buttonClickSearch} = props
  return (
    <div className="inputCard   ">
      <input
        type="search"
        className="searchInput "
        placeholder="Search"
        onChange={changeSearch}
      />
      <button
        type="button"
        data-testid="searchButton"
        className="searchIconBtn"
        onClick={buttonClickSearch}
      >
        <BsSearch className="search-icon" />
      </button>
    </div>
  )
}

export default SerachBar
