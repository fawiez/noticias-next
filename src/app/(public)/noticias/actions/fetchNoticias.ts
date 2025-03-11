export const getNoticias = async () => {
    const data = await fetch('/api/noticias')
    return data.json()
}