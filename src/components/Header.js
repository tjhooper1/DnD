import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import bannerLogo from '../assets/images/banner-logo.png'

const Header = props => (
    <header id="header" className="alt">
        <Link to="/" className="logo">
            <div className="banner_logo">
                <img alt="banner logo" width="120" src={bannerLogo} />
                <span>VISIT OUR KICKSTARTER</span>
            </div>
        </Link>
        <nav>
            <a className="menu-link" onClick={props.onToggleMenu}>
                Menu
            </a>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func,
}

export default Header
