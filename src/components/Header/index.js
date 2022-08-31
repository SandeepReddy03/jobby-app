import Cookies from 'js-cookie'
import {withRouter, Link} from 'react-router-dom'
import './index.css'

const Header = props => {
  const onClickLogOut = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <nav className="navbar-container">
      <div>
        <Link to="/" className="link-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.prg"
            alt="website logo"
            className="website-logo"
          />
        </Link>
      </div>
      <ul className="header-list-items">
        <Link className="link-item" to="/">
          <li className="home-heading home">Home</li>
        </Link>
        <Link to="/jobs" className="link-item">
          <li className="join-heading home">Jobs</li>
        </Link>
      </ul>
      <div>
        <button type="button" className="logout-button" onClick={onClickLogOut}>
          Logout
        </button>
      </div>
    </nav>
  )
}
export default withRouter(Header)
