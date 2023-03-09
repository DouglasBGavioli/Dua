import Image from "next/image";
import Link from "next/link";
import "./style.min.css"

export default function Header() {
    return (
        <div className="dua-header">
            <div className="dua-header__content">
                <div className="dua-header__content__logo">
                    <Image src={"/assets/logo.png"} width="100" height="100" alt="Logo dua" />
                    <h1>D.U.A</h1>
                </div>
                <div className="dua-header__content__links">
                    <nav>
                        <ul>
                            <li><Link href={"/"}>Home</Link></li>
                            <li><Link href={"/"}>A equipe</Link></li>
                            <li><Link href={"/"}>Regras</Link></li>
                            <li><Link href={"/"}>Leis</Link></li>
                            <li><Link href={"/"}>Contato</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}