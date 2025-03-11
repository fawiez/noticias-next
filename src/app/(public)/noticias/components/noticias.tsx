"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getNoticias } from "../actions/fetchNoticias";
import { error } from "console";


export default function NoticiasSection() {
  const router = useRouter()
  const [noticias, setNoticias] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getNoticias();
        setNoticias(data);
      } catch(error) {
        console.error("Erro ao buscar notícias:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [])

  return (
    <div>
      <ul>
        {noticias?.length ?
          noticias.map((noticia: any) => {
            return <li
            onClick={() => router.push(`/noticias/${noticia.id}`)} 
            key={noticia.id} style={{ cursor: "pointer" }}> {noticia.title}</li>
          })
        : <>Carregando noticias ....</>}
      </ul>
    </div>
  );
}
