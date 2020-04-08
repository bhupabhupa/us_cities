import React, { Component } from 'react';

class Header extends Component {
    render() {
        return(
            <nav>
                <div className="nav-wrapper">
                    <a className="left brand-logo" href="/">
                        U.S City info
                    </a>
                </div>
            </nav>
        );
    }
}

export default Header;