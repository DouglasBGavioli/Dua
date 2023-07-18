import "./style.min.css"

type AnnouncementCardProps = {
    url: string
    item?: string
    contact: number
    value?: string
    onClick?: () => void
}

export default function ImageCard(props: AnnouncementCardProps) {
    function formatCurrency(value: number): string {
        return value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
    }
    const regex = /\D/g;
    return (
        <div className="dua-announcement-card">
            <span>{props.item}</span>
            <img src={props.url} alt="Anúncio" />
            {(props.value || props.contact) && (
                <>
                    <p>
                        {formatCurrency(Number(props.value))}
                        <br />Tel: {props.contact}
                        <a aria-label="Chat on WhatsApp" target="_blank" href={`https://wa.me//55${props.contact.toString().replace(regex, "")}?text=Olá tenho interesse no seu produto anunciado no site da Divisão Urutu`} rel="noreferrer">
                            <img alt="Chat on WhatsApp" src="whatsapp_icon.png" />
                        </a>
                    </p>
                </>
            )}
        </div>
    )
}