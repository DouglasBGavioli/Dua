
import { Link } from "react-router-dom"
import "./style.min.css"

export default function Header() {
    return (
        <div className="dua-header">
            <div className="dua-header__content">
                <div className="dua-header__content__logo">
                    <img src={"/logo.png"} alt="Logo dua" />
                    <h1>D.U.A</h1>
                </div>
                <div className="dua-header__content__links">
                    <nav>
                        <ul>
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"/history"}>História</Link></li>
                            <li><Link to={"/"}>Regras</Link></li>
                            <li><Link to={"/"}>Leis</Link></li>
                            <li><Link to={"/"}>Contato</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}