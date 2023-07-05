import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import logo from "../../assets/logo.png"
const Header = () => {
    return (
        <header>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="header-lft">
                            <div className="menu-iocn">
                                {/* <Link to="#">
                                    <img src="img/menu-icon.png" alt="menu-icon" />
                                </Link> */}
                                <Sidebar />
                            </div>

                            <div className="logo"><Link to="#">
                                <img src={logo} alt="logo" />
                            </Link>
                            </div>

                            <div className="order-button">
                                <button type="submit">New Order</button>
                                <input type="text" placeholder="Bill No" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="header-right">
                            <div className="head-call-box">
                                Call for support
                                <Link to="tel:9099912483">9099912483</Link>
                            </div>

                            <ul>
                                <li><Link to="#"><img src="assets/icon01.png" alt="" /></Link></li>
                                <li><Link to="#"><img src="assets/icon02.png" alt="" /></Link></li>
                                <li><Link to="#"><img src="assets/icon03.png" alt="" /></Link></li>
                                <li><Link to="#"><img src="assets/icon05.png" alt="" /></Link></li>
                                <li><Link to="#"><img src="assets/icon06.png" alt="" /></Link></li>
                                <li><Link to="#"><img src="assets/icon07.png" alt="" /></Link></li>
                                <li><Link to="#"><img src="assets/icon08.png" alt="" /></Link></li>
                                <li><Link to="#"><img src="assets/icon09.png" alt="" /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;