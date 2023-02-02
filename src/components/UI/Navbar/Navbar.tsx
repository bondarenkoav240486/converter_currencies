import React
    from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {

  return (
    <div className="navbar ">
        <div className="navbar_row">
            <div className="navbar_links">
                    <Link className="link" to="/converter">КОНВЕРТЕР</Link>
                    <Link className="link" to="/rates">КУРСИ</Link>
            </div>
        </div >
   </div>
   );
};

export default Navbar;