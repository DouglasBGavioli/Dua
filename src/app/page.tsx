/* eslint-disable react/no-unescaped-entities */
'use client'
import Link from "next/link";
import "./style.min.css"
import Image from "next/image";

export default function Home() {

  return (
    <div className="dua-home">
      <div className="dua-home__banner" >
        <div className="dua-home__banner__infos">
          <h1>D.U.A</h1>
          <h2>Força e Honra</h2>
          <Link href={"#sobre"} className="button">SAIBA MAIS</Link>
        </div>

      </div>

      <div className="dua-home__about">
        <div className="dua-home__about-title">
          <h2>Sobre a equipe</h2>
          <h3>Divisão Urutu Airsoft</h3>
        </div>
        <div className="dua-home__about-description">
          <Image src={"/assets/logo.png"} alt="Logo dua" width={100} height={100} />
          <div className="dua-home__about-description-content">
            <p>
              <Image src={"/assets/logo.png"} alt="Logo dua" width={100} height={100} />
              Divisão Urutu Airsoft, equipe fundada em setembro de 2016, para prática de Airsoft.</p>
            <p>
              Utilizando como base simulações de ações militares o(Milsim), a Divisão Urutu Airsoft conta hoje com 18 jogadores. Seguindo os passos dos pioneiros do esporte levando sempre para campo os valores de : honra, respeito, disciplina e amizade.</p>
          </div>
        </div>
        <span>Fortis et adaptabilis, urutu est exemplar virtutis</span>
      </div>

      <div className="dua-home__honor">
        <div className="dua-home__honor-title">
          <h2>
            CÓDIGO DE HONRA
          </h2>
          <span>Divisão Urutu Airsoft</span>
        </div>
        <div className="dua-home__honor-topics">
          <Image className="dua-home__honor-topics-imgMob" src={"/assets/safe.png"} alt="Safe" width={75} height={75} />
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
          <Image className="dua-home__honor-topics-imgDesk" src={"/assets/safe.png"} alt="Safe" width={135} height={135} />
        </div>

        <div className="dua-home__honor-topicsReverse">
          <div className="dua-home__honor-topicsReverse-text">
            <h2>Respeito e amizade</h2>
            <ul>
              <p>O Airsoft é um esporte coletivo, você precisa de pelo menos uma pessoa para jogar contra. Portanto é fundamental o respeito e a seriedade, desta forma todos podem se divertir e conviver em harmonia.</p>
            </ul>
          </div>
          <Image src={"/assets/respect.png"} alt="Safe" width={135} height={135} />
        </div>

        <div className="dua-home__honor-topics">
          <Image className="dua-home__honor-topics-imgMob" src={"/assets/honra.png"} alt="Honor" width={75} height={75} />
          <div className="dua-home__honor-topics-text">
            <h2>JOGUE COM HONRA</h2>
            <p>O Airsoft necessita de um sistema de honra para registrar as eliminações, porém, devido a diversos fatores externos, como equipamentos e ambiente, é inviável garantir um registro completamente eficaz.</p>

            <ul>
              <li>Se houver incerteza sobre ter sido atingido no Airsoft, considera-se que o jogador está "morto". Portanto, a melhor opção é sair do jogo com honra.</li>
              <li> Se você atingiu um oponente e ele não se acusou, ele não está morto até que o mesmo se acuse.</li>
              <li>Se alguém não está admitindo ser atingido ou está agindo com desonestidade, é importante informar ao comando de maneira tranquila e discreta. Na equipe, esse comportamento não é aceitável e o comando irá avaliar cuidadosamente cada caso para evitar acusações falsas ou situações desconfortáveis.</li>
            </ul>
          </div>
          <Image className="dua-home__honor-topics-imgDesk" src={"/assets/honra.png"} alt="Safe" width={135} height={135} />
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
          <Image src={"/assets/laws.png"} alt="Safe" width={135} height={135} />
        </div>
      </div>

      <div className="dua-home__laws">
        <div className="dua-home__laws-title">
          <h2>Legislação no airsoft</h2>
          <h3>Exército Brasileiro</h3>
        </div>
        <div className="dua-home__laws-description">
          <Image src={"/assets/balanca.png"} alt="Logo dua" width={100} height={100} />
          <div className="dua-home__laws-description-content">
            <p>
              <Image src={"/assets/balanca.png"} alt="Logo dua" width={80} height={80} />
              As regras para a aquisição e a importação de armas de pressão para airsoft no Brasil estão definidas na Portaria Nº 02 COLOG de 26 de fevereiro de 2010, que regulamenta o art. 26 da Lei 10.826/03 sobre réplicas, simulacros de armas de fogo e armas de pressão.</p>
            <p>
              Artigo 26 da Lei 10.826/03 - São vedadas a fabricação, a venda, a comercialização e a importação de brinquedos, réplicas e simulacros de armas de fogo, que com estas possam confundir. Parágrafo único - Excetuam-se da proibição as réplicas e os simulacros destinados à instrução, ao adestramento, ou à coleção de usuário autorizado, nas condições fixadas pelo Comando do Exército.</p>
            <p>Para mais informações, acesse o site do DFPC: <a href="//www.dfpc.eb.mil.br" rel="noopener noreferrer" target={"_blank"}>www.dfpc.eb.mil.br</a></p>
          </div>
        </div>
      </div>

      <div className="dua-home__contact">
        <div className="dua-home__contact-title">
          <h2>Contato para jogos</h2>
          <h3>Se interessou pela equipe e gostaria de participar de um jogo aberto a convidados?</h3>
          <h3>Entre em contato conosco e aliste-se!</h3>
        </div>
        <div className="dua-home__contact-form">
          <div className="dua-home__contact-form-inputs">
            <input type={"text"} placeholder="Digite seu nome*" />
            <input type={"email"} placeholder="Digite seu e-mail*" />
            <input type={"tel"} placeholder="Digite seu telefone*" />
            <input type={"text"} placeholder="A quanto tempo pratica o esporte*" />
          </div>
          <div>
            <textarea className="dua-home__contact-form-textArea" placeholder="Deixe alguma mensagem*" />
          </div>
        </div>
        <button className="button">Enviar</button>
      </div>
    </div>
  )
}
