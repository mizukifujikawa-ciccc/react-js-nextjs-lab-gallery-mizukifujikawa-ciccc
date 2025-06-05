import Image from 'next/image'
interface Props {
  params: { id: string }
}

async function getPhoto(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
  return res.json()
}

export default async function PhotoPage({ params }: Props) {
  const photo: { id: number; url: string; title: string } = await getPhoto(params.id)
  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <Image src={photo.url} alt={photo.title} width={600} height={600} />
      <h1 className="text-xl font-semibold">{photo.title}</h1>
    </div>
  )
}
