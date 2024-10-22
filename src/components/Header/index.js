import {IoMdHome} from 'react-icons/io'
import {FiLogOut} from 'react-icons/fi'
import {IoBag} from 'react-icons/io5'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const logOut = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/Login')
  }

  return (
    <div className="header">
      <nav className="navBar">
        <div>
          <Link to="/">
            <img
              className="logo"
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
            />
          </Link>
        </div>
        <div className="navItemsLinks">
          <div className="textNavgatores">
            <Link to="/">
              <p className="homeNav">Home</p>
            </Link>
            <Link to="/Jobs">
              <p className="homeNav">Jobs</p>
            </Link>
          </div>
          <div>
            <button className="btnLogout" type="button" onClick={logOut}>
              Logout
            </button>
          </div>
        </div>

        <div className="iconsNavSmDevices">
          <Link to="/">
            <IoMdHome className="iconLink" />
          </Link>
          <Link to="/jobs">
            <IoBag className="iconLink" />
          </Link>

          <FiLogOut className="iconLink" onClick={logOut} />
        </div>
      </nav>
    </div>
  )
}

export default withRouter(Header)
