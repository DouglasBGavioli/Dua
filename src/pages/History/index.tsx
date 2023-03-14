import { useCallback, useEffect, useState } from "react"
import "./style.min.css"

import { storage, app } from "../../config/firebaseClient"
import { getDownloadURL, listAll, ref, StorageReference } from "firebase/storage"
import ImageCard from "../../components/ImageCard";
import { useLoader } from "../../contexts";

interface Image {
    url: string;
}
export default function History() {
    const [images, setImages] = useState<Image[]>([]);
    const { handleLoader } = useLoader();

    const getImages = useCallback(async () => {
        handleLoader(true)
        try {
            const storageRef: StorageReference = ref(storage, "images");
            const res = await listAll(storageRef);
            const urls = await Promise.all(res.items.map(async (itemRef) => {
                try {
                    const url = await getDownloadURL(itemRef);
                    return { url };
                } catch (error) {
                    console.log(error);
                    return null;
                }
            }));
            const filteredUrls = urls.filter(url => url !== null) as Image[];
            setImages(filteredUrls);
        } catch (error) {
            console.log(error);
        } finally {
            handleLoader(false)
        }
    }, []);

    useEffect(() => {
        getImages();
    }, [getImages]);

    return (
        <div className="dua-history">
            <div className="dua-history__title">
                <h1>Nossa história</h1>
            </div>
            <div className="dua-history__image">
                {images.map((image, index) => (
                    <ImageCard url={image.url} data="23/11/22" evento="Lumberjack" key={index} />
                ))}
            </div>
        </div>
    )
}

