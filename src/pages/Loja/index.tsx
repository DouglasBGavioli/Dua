import { useCallback, useEffect, useState } from "react"
import "./style.min.css"
import { useStore } from "../../contexts";
import { Modal } from "../../components/Modal";
import { TitlePage } from "../../components/TitlePage";
import AnnouncementCard from "../../components/AnnouncementCard";


interface Store {
    id: string,
    value?: string,
    contact: number,
    text: string,
    url: string[]
}

export default function Loja() {
    const { getStore, store } = useStore()

    const [modalGallery, setModalGallery] = useState<Store>()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [galleryPosition, setGalleryPosition] = useState(1)

    useEffect(() => {
        getStore()
    }, [getStore]);

    const handleModal = useCallback((item: Store) => {
        setModalGallery(item)
        setIsModalOpen(true)
    }, [])

    const changeImage = useCallback((e: 'prev' | 'next') => {
        if (e === "prev") {
            if (galleryPosition !== 1) {
                setGalleryPosition(galleryPosition - 1);
            }
        } else if (galleryPosition < modalGallery?.url.length!) {
            setGalleryPosition(galleryPosition + 1);
        }
    }, [galleryPosition, modalGallery?.url.length]);

    return (
        <div className="dua-history">
            <TitlePage title="Nossa loja" subtitle="Bem vindos a loja da Divisão Urutu" />
            <div className="dua-history__image">
                {store?.map((item, index) => (
                    <AnnouncementCard url={item.url?.[0]} value={item.value} item={item.text} key={index} onClick={() => handleModal(item)} contact={item.contact} />
                ))}
            </div>
            <Modal isOpen={isModalOpen} className="dua-history__modal" onRequestClose={() => setIsModalOpen(false)}>
                <div className="dua-history__imageModal">
                    <div className="dua-history__imageModal__chevron" onClick={() => changeImage("prev")}>
                        <img src="/chevron-left.png" alt="Seta esquerda" />
                    </div>

                    <img src={modalGallery?.url[galleryPosition - 1]} alt="" />

                    <div className="dua-history__imageModal__chevron" onClick={() => changeImage("next")}>
                        <img src="/chevron-right.png" alt="Seta direita" />
                    </div>
                </div>
                <span>{galleryPosition}/{modalGallery?.url.length}</span>
            </Modal>
        </div>
    )
}

