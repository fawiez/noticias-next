export default async function Page({ params }: { params: any}) {
	const id = params.id

	const res = await fetch(`https://api.vercel.app/blog/${id}`)
	const data = await res.json()

	return <div>
		<h1>Postagem: {data.title}</h1>
		<h3>Categoria: {data.category}</h3>
		</div>
}