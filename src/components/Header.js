import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Header = ({ onToggleMenu }) => {
    return (
        <StaticQuery
            query={query}
            render={data => {
                return (
                    <header id="header" className="alt">
                        <Link to="/" className="logo">
                            <div className="banner_logo">
                                <Img
                                    style={{ marginRight: '10px' }}
                                    alt="banner logo"
                                    fixed={data.img.childImageSharp.fixed}
                                />
                                <span>VISIT OUR KICKSTARTER</span>
                            </div>
                        </Link>
                        <nav>
                            <a className="menu-link" onClick={onToggleMenu}>
                                Menu
                            </a>
                        </nav>
                    </header>
                )
            }}
        />
    )
}

Header.propTypes = {
    onToggleMenu: PropTypes.func,
}

export const query = graphql`
    query {
        img: file(relativePath: { eq: "banner-logo.png" }) {
            childImageSharp {
                fixed(width: 125) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`

export default Header
