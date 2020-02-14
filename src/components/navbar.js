import React from 'react';
import '../../src/css/mattlinenberger.css';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navBar">
                <list className="navList">
                    <a className="navListItem" href="test">About</a>
                    <a className="navListItem" href="test">Skills</a>
                    <a className="navListItem" href="test">Projects</a>
                    <a className="navListItem" href="test">Contact</a>
                </list>
            </div>
        )
    }

}
export default Navbar;