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
    return (
        <div className="dua-announcement">
            <div className="dua-announcement-card">
                <span>{props.item}</span>
                <img src={props.url} alt="Anúncio" />
                {(props.value || props.contact) && (
                    <>
                        <p>{formatCurrency(Number(props.value))} <br />Tel: {props.contact}</p>
                    </>
                )}

            </div>
        </div>
    )
}