import { TitlePage } from "../../components/TitlePage"
import "./style.min.css"

export default function Manutencao() {
    return (
        <div className="dua-manutencao">
            <TitlePage title="Manutenção" subtitle="Guia de manutenção básica e contato de armeiros da região" />
            <div className="dua-home__honor">
                <div className="dua-home__honor-title">
                    <h2>
                        GUIA DE MANUTENÇÃO BÁSICA
                    </h2>
                    <span>Divisão Urutu Airsoft</span>
                </div>
                <div className="dua-home__honor-topics">
                    <img className="dua-home__honor-topics-imgMob" src={"/safe.png"} alt="Safe" />
                    <div className="dua-home__honor-topics-text">
                        <h2>Conduta em campo</h2>
                        <p>Minimizando risco de acidentes</p>
                        <ul>
                            <li>Óculos de proteção é equipamento obrigatório.</li>
                            <li>Arma sempre travada e desmuniciada na safe zone.</li>
                            <li>Manter o fps da sua arma correspondente com o limite estipulado.</li>
                            <li>Considerar uso de equipamentos diversos, capacete, coturno e joelheira.</li>
                        </ul>
                    </div>
                    <img className="dua-home__honor-topics-imgDesk" src={"/safe.png"} alt="Safe" />
                </div>

                <div className="dua-home__honor-topicsReverse">
                    <div className="dua-home__honor-topicsReverse-text">
                        <h2>Respeito e amizade</h2>
                        <ul>
                            <p>O Airsoft é um esporte coletivo, você precisa de pelo menos uma pessoa para jogar contra. Portanto é fundamental o respeito e a seriedade, desta forma todos podem se divertir e conviver em harmonia.</p>
                        </ul>
                    </div>
                    <img src={"/respect.png"} alt="Safe" />
                </div>

                <div className="dua-home__honor-topics">
                    <img className="dua-home__honor-topics-imgMob" src={"/honra.png"} alt="Honor" />
                    <div className="dua-home__honor-topics-text">
                        <h2>JOGUE COM HONRA</h2>
                        <p>O Airsoft necessita de um sistema de honra para registrar as eliminações, porém, devido a diversos fatores externos, como equipamentos e ambiente, é inviável garantir um registro completamente eficaz.</p>

                        <ul>
                            <li>Se houver incerteza sobre ter sido atingido no Airsoft, considera-se que o jogador está "morto". Portanto, a melhor opção é sair do jogo com honra.</li>
                            <li> Se você atingiu um oponente e ele não se acusou, ele não está morto até que o mesmo se acuse.</li>
                            <li>Se alguém não está admitindo ser atingido ou está agindo com desonestidade, é importante informar ao comando de maneira tranquila e discreta. Na equipe, esse comportamento não é aceitável e o comando irá avaliar cuidadosamente cada caso para evitar acusações falsas ou situações desconfortáveis.</li>
                        </ul>
                    </div>
                    <img className="dua-home__honor-topics-imgDesk" src={"/honra.png"} alt="Safe" />
                </div>

                <div className="dua-home__honor-topicsReverse">
                    <div className="dua-home__honor-topicsReverse-text">
                        <h2>Respeito às leis</h2>
                        <p>O Exército Brasileiro é responsável pelo controle das armas de airsoft, que são consideradas produtos regulados. No Brasil, as normas para adquirir e importar armas de airsoft utilizadas nos jogos, estão descritas na Portaria Nº 02 COLOG de 26 de fevereiro de 2010, a qual regula o artigo 26 da Lei 10.826/03 sobre réplicas, simulações de armas de fogo e armas de pressão.</p>
                        <ul>
                            <li>Sobre o transporte das armas de airsoft, as mesmas devem esta em uma "case" de proteção, sem o magazine, bateria e obrigatoriamente portando a nota fiscal da mesma.</li>
                            <li>A ponta laranja é um item obrigatório e não deve ser removido de sua arma de airsoft, pois o mesmo identifica a mesma como arma de airsoft e não arma de fogo.</li>
                        </ul>
                    </div>
                    <img src={"/laws.png"} alt="Safe" />
                </div>
            </div>
        </div>
    )
}