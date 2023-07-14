
import { useCallback, useEffect, useState, MouseEvent } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import "./style.min.css"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [otherOpen, setOthersOpen] = useState(false)

    const location = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        setIsMenuOpen(false)
    }, [location])

    const handleDrop = useCallback((event: MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        if (otherOpen === true) {
            setOthersOpen(false);
        } else {
            setOthersOpen(true);
        }
    }, [otherOpen]);

    useEffect(() => {
        const closeDropdown = () => setOthersOpen(false);

        document.body.addEventListener('click', closeDropdown);

        return () => document.body.removeEventListener('click', closeDropdown);
    }, []);

    return (
        <div className={`dua-header  ${isMenuOpen ? "active" : ""}`}>
            <div className="dua-header__content">
                <div className="dua-header__content__logo" onClick={() => navigate("/home")}>
                    <img src={"/logo.png"} alt="Logo dua" />
                    <h1>D.U.A</h1>
                </div>
                <div className="dua-header__content__links">
                    <nav>
                        <ul>
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"/galery"}>Galerias</Link></li>
                            <li><Link to={"/integrantes"}>Integrantes</Link></li>
                            <li><Link to={"/loja"}>Loja</Link></li>
                            <li>
                                <button onClick={(e) => handleDrop(e)}>Outros</button>
                                <div className={`dua-header__content__links-others ${otherOpen ? "active" : ""}`}>
                                    <li><Link to={"/acervo"}>Acervo</Link></li>
                                    <li><Link to={"/manutencoes"}>Manutenções</Link></li>
                                </div>
                            </li>
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
                            <li><Link to={"/galery"}>Galerias</Link></li>
                            <li><Link to={"/integrantes"}>Integrantes</Link></li>
                            <li><Link to={"/loja"}>Loja</Link></li>
                            <li><Link to={"/acervo"}>Acervo</Link></li>
                            <li><Link to={"/manutencoes"}>Manutenções</Link></li>
                        </ul>

                    </nav>

                </div>

            </div>
        </div>
    )
}