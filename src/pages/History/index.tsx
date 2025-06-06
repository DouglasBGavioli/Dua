import { useCallback, useEffect, useState } from "react"
import { compareAsc, parseISO } from "date-fns"

import "./style.min.css"

import ImageCard from "../../components/ImageCard";
import { useMidias } from "../../contexts";
import { Modal } from "../../components/Modal";
import { TitlePage } from "../../components/TitlePage";


interface Gallery {
    id: string,
    data: string,
    description: string,
    images: { url: string, order: number }[]
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

    const changeImage = useCallback(
        (e: 'prev' | 'next') => {
            const totalImages = modalGallery?.images?.length || modalGallery?.url?.length || 0;

            if (e === "prev") {
                if (galleryPosition > 1) {
                    setGalleryPosition(galleryPosition - 1);
                }
            } else if (galleryPosition < totalImages) {
                setGalleryPosition(galleryPosition + 1);
            }
        },
        [galleryPosition, modalGallery]
    );

    const galleryOrdenada = gallery?.sort((a, b) => {
        const dataA = parseISO(a.data);
        const dataB = parseISO(b.data);

        return compareAsc(dataB, dataA);
    });


    return (
        <div className="dua-history">
            <TitlePage title="Nossa história" subtitle="Galeria de jogos" />
            <h2>Um pouco da nossa história contada através de galerias</h2>
            <div className="dua-history__image">
                {galleryOrdenada?.map((item, index) => (
                    <ImageCard url={
                        item.images
                            ?.sort((a, b) => a.order - b.order)[0]?.url || item.url?.[0]
                    } data={item.data} evento={item.description} key={index} onClick={() => handleModal(item)} />
                ))}
            </div>
            <Modal isOpen={isModalOpen} className="dua-history__modal" onRequestClose={() => setIsModalOpen(false)}>
                <div className="dua-history__imageModal">
                    <div className="dua-history__imageModal__chevron" onClick={() => changeImage("prev")}>
                        <img src="/chevron-left.png" alt="Seta esquerda" />
                    </div>
                    <p>{modalGallery?.description}</p>
                    <img
                        src={modalGallery?.images?.[galleryPosition - 1]?.url || modalGallery?.url?.[galleryPosition - 1]}
                        alt="Imagem da galeria"
                    />

                    <div className="dua-history__imageModal__chevron" onClick={() => changeImage("next")}>
                        <img src="/chevron-right.png" alt="Seta direita" />
                    </div>
                </div>
                <span>{galleryPosition}/{(modalGallery?.url?.length || modalGallery?.images?.length)}</span>
            </Modal>
        </div>
    )
}

