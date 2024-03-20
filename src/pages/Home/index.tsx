import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"
import "./style.min.css"
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebaseClient"
import { useLoader, useMidias, useStore } from "../../contexts";
import { Alert } from "../../components/Alert";
import { compareAsc, parseISO } from "date-fns"
import ImageCard from "../../components/ImageCard";

interface FormData {
    email: string,
    mensagem: string,
    nome: string,
    telefone: string,
    tempoPratica: string
}

const INITIAL_DATA = {
    email: "",
    mensagem: "",
    nome: "",
    telefone: "",
    tempoPratica: ""
} as FormData

export default function Home() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { handleLoader } = useLoader()
    const { getStore, store } = useStore()
    const { getMidias, gallery } = useMidias()
    const navigate = useNavigate()


    const [data, setData] = useState(INITIAL_DATA)
    const [alert, setAlert] = useState("")
    const [alertMessage, setAlertMessage] = useState("")

    useEffect(() => {
        getMidias()
        getStore()
    }, [getMidias, getStore])


    const handleData = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }, [data]);

    const dataValidation = useCallback(() => {
        const values = Object.values(data);
        return !values.some((value) => value === undefined || value === null || value === "");
    }, [data])

    const sendData = useCallback(async () => {
        handleLoader(true)
        try {
            const docRef = await addDoc(collection(db, "contatos"), {
                ...data
            });
            setData(INITIAL_DATA)
            setAlert("success")
            setAlertMessage("Seu formulário foi enviado com sucesso!")
            setTimeout(() => {
                setAlert("")
            }, 2000);
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
            setAlert("error")
            setAlertMessage("Erro ao enviar seu formulário!")
            setTimeout(() => {
                setAlert("")
            }, 2000);
        } finally {
            handleLoader(false)
        }
    }, [handleLoader, data])

    const scrollToSection = () => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    function formatPhoneNumber(phoneNumber: string): string {
        // Remove todos os caracteres não numéricos do número de telefone
        const cleanedNumber = phoneNumber.replace(/\D/g, '');

        // Formata o número no formato desejado (exemplo: (055) 99993-3697)
        const formattedNumber = cleanedNumber.replace(/(\d{3})(\d{5})(\d{4})/, '($1) $2-$3');

        return formattedNumber;
    }
    const handleContactChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const formattedNumber = formatPhoneNumber(event.target.value);
        setData({ ...data, "telefone": formattedNumber });
    };

    const galleryOrdenada = gallery?.sort((a, b) => {
        const dataA = parseISO(a.data);
        const dataB = parseISO(b.data);

        return compareAsc(dataB, dataA);
    });

    function formatCurrency(value: number): string {
        return value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
    }

    return (
        <div className="dua-home">
            <div className="dua-home__banner" >
                <div className="dua-home__banner__infos">
                    <h1>D.U.A</h1>
                    <h2>Força e Honra</h2>
                    <button onClick={scrollToSection} className="buttonHome">SAIBA MAIS</button>
                </div>

            </div>

            <div ref={sectionRef} className="dua-home__about">
                <div className="dua-home__about-title">
                    <h2>Sobre a equipe</h2>
                    <h3>Divisão Urutu Airsoft</h3>
                </div>
                <div className="dua-home__about-description">
                    <img src={"/logo.png"} alt="Logo dua" />
                    <div className="dua-home__about-description-content">
                        <p>
                            <img src={"/logo.png"} alt="Logo dua" />
                            Divisão Urutu Airsoft, equipe fundada em setembro de 2016 na cidade de Canela-Rs, para prática de Airsoft.</p>
                        <p>
                            Utilizando como base simulações de ações militares o (Milsim), a Divisão Urutu Airsoft conta hoje com 18 jogadores. Seguindo os passos dos pioneiros do esporte levando sempre para campo os valores de: honra, respeito, disciplina e amizade.</p>
                    </div>
                </div>
                <span>Fortis et adaptabilis, urutu est exemplar virtutis</span>
            </div>
            {((galleryOrdenada?.length! > 0) || (store?.length! > 0)) &&
                <div className="dua-home__news">
                    <div className="dua-home__news-title">
                        <h2>Atividade recente no portal</h2>
                    </div>

                    <div className="dua-home__news-itens">

                        {galleryOrdenada?.length! > 0 &&
                            <div className="dua-home__news-itens-item" onClick={() => navigate("/galery")}>
                                <h2>Última galeria criada!</h2>
                                {galleryOrdenada && galleryOrdenada[0] && (
                                    <ImageCard url={galleryOrdenada[0].url?.[0]} data={galleryOrdenada[0].data} evento={galleryOrdenada[0].description} />
                                )}
                            </div>
                        }

                        {store?.length! > 0 &&
                            (
                                <div className="dua-home__news-itens-item" onClick={() => navigate("/loja")}>
                                    <h2>Último item anunciado!</h2>
                                    {store && store[0] && (

                                        <div className="dua-imageCard" >
                                            <div className="dua-imageCard__image">
                                                <img src={store[store.length - 1].url?.[0]} alt="Imagem da nossa história" />
                                            </div>
                                            <div className="dua-imageCard__description">
                                                <h2>{store[store.length - 1].text}</h2>
                                                <p>{formatCurrency(Number(store[store.length - 1].value))}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )
                        }
                    </div>

                </div>
            }

            <div className="dua-home__honor">
                <div className="dua-home__honor-title">
                    <h2>
                        CÓDIGO DE HONRA
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

            <div className="dua-home__laws">
                <div className="dua-home__laws-title">
                    <h2>Legislação no airsoft</h2>
                    <h3>Exército Brasileiro</h3>
                </div>
                <div className="dua-home__laws-description">
                    <img src={"/balanca.png"} alt="Logo dua" />
                    <div className="dua-home__laws-description-content">
                        <p>
                            <img src={"/balanca.png"} alt="Logo dua" />
                            As regras para a aquisição e a importação de armas de pressão para airsoft no Brasil estão definidas na Portaria Nº 02 COLOG de 26 de fevereiro de 2010, que regulamenta o art. 26 da Lei 10.826/03 sobre réplicas, simulacros de armas de fogo e armas de pressão.</p>
                        <p>
                            Artigo 26 da Lei 10.826/03 - São vedadas a fabricação, a venda, a comercialização e a importação de brinquedos, réplicas e simulacros de armas de fogo, que com estas possam confundir. Parágrafo único - Excetuam-se da proibição as réplicas e os simulacros destinados à instrução, ao adestramento, ou à coleção de usuário autorizado, nas condições fixadas pelo Comando do Exército.</p>
                        <p>Para mais informações, acesse o site do EB: &nbsp; <a href="https://www.eb.mil.br" rel="noopener noreferrer" target={"_blank"}>www.eb.mil.br</a></p>
                    </div>
                </div>
            </div>

            <div className="dua-home__contact">
                {alert === "success" ?
                    (
                        <Alert variant={"success"} type="inline">{alertMessage}</Alert>
                    )
                    : alert === "error" &&
                    (
                        <Alert variant={"error"} type="inline">{alertMessage}</Alert>
                    )}
                <div className="dua-home__contact-title">
                    <h2>Contato para jogos</h2>
                    <h3>Se interessou pela equipe e gostaria de participar de um jogo aberto a convidados?</h3>
                    <h3>Entre em contato conosco e aliste-se!</h3>
                </div>
                <div className="dua-home__contact-form">
                    <div className="dua-home__contact-form-inputs">
                        <input type={"text"} name="nome" value={data.nome} placeholder="Digite seu nome*" onChange={handleData} />
                        <input type={"email"} name="email" value={data.email} placeholder="Digite seu e-mail*" onChange={handleData} />
                        <input
                            type="tel"
                            required
                            value={data.telefone}
                            placeholder="(055) 99999-9999"
                            onChange={handleContactChange}
                        />
                        <input type={"text"} name="tempoPratica" value={data.tempoPratica} placeholder="A quanto tempo pratica o esporte*" onChange={handleData} />
                    </div>
                    <div>
                        <textarea name="mensagem" value={data.mensagem} className="dua-home__contact-form-textArea" placeholder="Deixe alguma mensagem*" onChange={e => setData({ ...data, mensagem: e.target.value })} />
                    </div>
                </div>
                <button type="button" disabled={!dataValidation() as unknown as boolean} className="buttonHome" onClick={sendData}>Enviar</button>
            </div>
        </div>
    )
}
