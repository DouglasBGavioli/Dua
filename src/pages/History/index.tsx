import { useCallback, useEffect, useState } from "react"
import "./style.min.css"
import ImageCard from "../../components/ImageCard";
import { useLoader, useMidias } from "../../contexts";
import { Modal } from "../../components/Modal";
import { TitlePage } from "../../components/TitlePage";


interface Gallery {
    id: string,
    data: string,
    description: string,
    url: string[]
}

export default function History() {
    const { getMidias, gallery } = useMidias()

    const [modalGallery, setModalGallery] = useState<Gallery>()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [galleryPosition, setGalleryPosition] = useState(1)

    useEffect(() => {
        getMidias()
    }, [getMidias]);

    const handleModal = useCallback((item: Gallery) => {
        setModalGallery(item)
        setIsModalOpen(true)
        if (!isModalOpen) {
            setGalleryPosition(1)
        }
    }, [isModalOpen])

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
            <TitlePage title="Nossa história" subtitle="Galeria de jogos" />
            <h2>Um pouco da nossa história contada através de galerias</h2>
            <div className="dua-history__image">
                {gallery?.map((item, index) => (
                    <ImageCard url={item.url?.[0]} data={item.data} evento={item.description} key={index} onClick={() => handleModal(item)} />
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

