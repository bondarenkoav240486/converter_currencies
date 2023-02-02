import React
    from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {

    let NodeListLinnks = document.querySelectorAll('a');
    let arrLinnks = Array.from(NodeListLinnks);
    // arrLinnks.forEach((link)=>{
        const letMarkElectLink = (e:any)=>{
            arrLinnks.forEach((elem)=>{
                elem.classList.remove('elect')
            })
            e.target.classList.add('elect')
        }
    // })
    console.log(arrLinnks)

  return (
    <div className="navbar ">
        <div className="navbar_row">
            <div className="navbar_links">
                    <Link 
                        className="link" 
                        to="/converter"
                        onClick={letMarkElectLink}
                    >
                        КОНВЕРТЕР
                    </Link>
                    <Link 
                        className="link" 
                        to="/rates"
                        onClick={letMarkElectLink}
                    >
                        КУРСИ
                    </Link>
            </div>
        </div >
   </div>
   )
}

export default Navbar;