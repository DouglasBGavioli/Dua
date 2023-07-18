import { useCallback, useEffect, useState } from "react"
import "./style.min.css"
import { useStore } from "../../contexts";
import { TitlePage } from "../../components/TitlePage";
import AnnouncementCard from "../../components/AnnouncementCard";


export default function Loja() {
    const { getStore, store } = useStore()

    useEffect(() => {
        getStore()
    }, [getStore]);

    return (
        <div className="dua-loja">
            <TitlePage title="Nossa loja" subtitle="Bem vindos a loja da Divisão Urutu" />
            <div className="dua-loja__image">
                {store?.map((item, index) => (
                    <>
                        <AnnouncementCard url={item.url?.[0]} value={item.value} item={item.text} key={index} contact={item.contact} />
                    </>
                ))}
            </div>

        </div>
    )
}

