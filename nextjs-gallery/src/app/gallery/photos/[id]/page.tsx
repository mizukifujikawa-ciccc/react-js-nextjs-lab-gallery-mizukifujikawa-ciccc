import Image from 'next/image'

interface Props {
  params: { id: string }
}

interface Photo {
  id: number,
  url: string,
  title: string
}

const PhotoPage = async ({ params }: Props) => {

    const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${params.id}`)
    const data: Photo = await res.json()

    data.url = 'https://placehold.co/1000x1000'

    return (
      <div className="flex flex-col items-center gap-4 mt-10">
        <Image src={data.url} alt={data.title} width={600} height={600} />
        <h1 className="text-xl font-semibold">{data.title}</h1>
      </div>
    )
}

export default PhotoPage