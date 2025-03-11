"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getNoticias } from "../actions/fetchNoticias";


export default async function NoticiasSection() {
  const router = useRouter()
  const [noticias, setNoticias] = useState([]);

  await getNoticias().then(data => {
    setNoticias(data)
  })

  return (
    <div>
      <ul>
        {noticias?.length ?
          noticias.map((noticia: any) => {
            return <li
            onClick={() => router.push(`/noticias/${noticia.id}`)} 
            key={noticia.id}> {noticia.title}</li>
          })
        : <>Carregando noticias ....</>}
      </ul>
    </div>
  );
}
