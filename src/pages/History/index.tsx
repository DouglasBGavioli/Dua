import { useCallback, useEffect, useState } from "react"
import "./style.min.css"

import { storage, db } from "../../config/firebaseClient"
import { getDownloadURL, listAll, ref, StorageReference } from "firebase/storage"
import ImageCard from "../../components/ImageCard";
import { useLoader, useMidias } from "../../contexts";
import { Modal } from "../../components/Modal";


interface Gallery {
    id: string,
    data: string,
    description: string,
    url: string[]
}

const arrFake = [
    {
        id: "1",
        description: "teste",
        data: "12:12:2022",
        url: [
            "https://s2.glbimg.com/1o2J-rf2G9qtlQlm82gaq-mFBec=/0x129:1024x952/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/7/i/ME2AxRRoygUyFPCDe0jQ/3.png",
            "https://s2.glbimg.com/2vuA-R9eLK9q0yc5prAboLxBwIA=/1024x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/e/8/AoMju0TPWBvwkfwj2BXA/1.jpg",
            "https://i1.wp.com/files.agro20.com.br/uploads/2019/02/cabrito-01.jpg?resize=1024%2C665&ssl=1",
            "https://i2.wp.com/files.agro20.com.br/uploads/2020/09/Cabrito-1.jpg?w=1024&ssl=1"

        ]
    }
]

export default function History() {
    const { getMidias, setCollections, gallery, collections } = useMidias()
    const { handleLoader } = useLoader();

    const [modalGallery, setModalGallery] = useState<Gallery>()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [galleryPosition, setGalleryPosition] = useState(1)

    useEffect(() => {
        setCollections("images")
        getMidias()
    }, [getMidias, setCollections]);


    const handleModal = useCallback((item: Gallery) => {
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
        console.log(galleryPosition);

    }, [galleryPosition, modalGallery?.url.length]);

    return (
        <div className="dua-history">
            <div className="dua-history__title">
                <h1>Nossa história</h1>
            </div>
            <h1>   Galerias fakes temporariamente</h1>
            <div className="dua-history__image">
                {arrFake?.map((item, index) => (
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
            </Modal>
        </div>
    )
}

