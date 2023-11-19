import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import "./style.min.css"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        setIsMenuOpen(false)
    }, [location])

    return (
        <div className={`dua-header  ${isMenuOpen ? "active" : ""}`}>
            <h1>Descontinuado</h1>
            <div className="dua-header__content">
                <div className="dua-header__content__logo" onClick={() => navigate("/")}>
                    <img src={"/logo.png"} alt="Logo dua" />
                    <h1>D.U.A</h1>
                </div>
                <div className="dua-header__content__links">
                    <nav>
                        <ul>
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"/history"}>História</Link></li>
                            <li><Link to={"/integrantes"}>Integrantes</Link></li>
                            <li><Link to={"/acervo"}>Acervo</Link></li>
                            <li><Link to={"/loja"}>Loja</Link></li>
                            <li><Link to={"/manutencao"}>Manutenção</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="dua-header__content__linksMob">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="dua-header__content__linksMob-hamburguer">
                        <img src="/menu.svg" alt="Menu" />
                    </button>
                    <nav className={`dua-header__content__linksMob-links ${isMenuOpen ? "active" : ""}`}>
                        <ul>
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"/history"}>História</Link></li>
                            <li><Link to={"/integrantes"}>Integrantes</Link></li>
                            <li><Link to={"/acervo"}>Acervo</Link></li>
                            <li><Link to={"/loja"}>Loja</Link></li>
                            <li><Link to={"/manutencao"}>Manutenção</Link></li>
                        </ul>
                    </nav>
                </div>

            </div>
        </div>
    )
}