import React from 'react';
import '../../src/css/mattlinenberger.css';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navBar">
                <list className="navList">
                    <button className="navButton"><a className="navListItem" href="test">About</a></button>
                    <button className="navButton"><a className="navListItem" href="test">Home</a></button>
                    <button className="navButton"><a className="navListItem" href="test">Skills</a></button>
                    <button className="navButton"><a className="navListItem" href="test">Projects</a></button>
                </list>
            </div>
        )
    }

}
export default Navbar;