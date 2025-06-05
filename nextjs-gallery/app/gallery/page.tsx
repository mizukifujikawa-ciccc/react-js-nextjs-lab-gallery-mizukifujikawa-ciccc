import Image from 'next/image'
import Link from 'next/link'

async function getPhotos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos')
  return res.json()
}

export default async function Gallery() {
  const photos: { id: number; thumbnailUrl: string; title: string }[] = await getPhotos()
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {photos.slice(0, 20).map(photo => (
        <Link key={photo.id} href={`/photos/${photo.id}`}> 
          <Image
            src={photo.thumbnailUrl}
            alt={photo.title}
            width={150}
            height={150}
            className="object-cover w-full h-auto"
          />
        </Link>
      ))}
    </div>
  )
}
