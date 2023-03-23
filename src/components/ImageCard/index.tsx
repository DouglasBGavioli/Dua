import "./style.min.css"

type ImageCardProps = {
    url: string
    evento?: string
    data?: string
    onClick?: () => void
}

export default function ImageCard(props: ImageCardProps) {
    return (
        <div className="dua-imageCard" onClick={props?.onClick}>
            <div className="dua-imageCard__image">
                <img src={props.url} alt="Imagem da nossa história" />
            </div>
            <div className="dua-imageCard__description">
                <h2>Evento: {props.evento}</h2>
                <p>Data: {props.data}</p>
            </div>
        </div>
    )
}