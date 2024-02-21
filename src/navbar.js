import { Link } from "react-router-dom";
const Navbar=()=>{
    return <div className="navbar">
    <h3 className="name"><i class="bi bi-columns-gap"></i> Elevate MEET</h3>
    <ul>
    <Link className="nav-items" to="/"><li><i class="bi bi-layout-text-sidebar-reverse"></i> ALL MEETS</li></Link>
    <Link className="nav-items" to="/mymeets"><li><i class="bi bi-grid-1x2"></i> MY MEETS</li></Link>
    <Link className="nav-items" to="/addmeet"><li><i class="bi bi-joystick"></i>  ADD MEET</li></Link>
    </ul>
    </div>
   }
export default Navbar;