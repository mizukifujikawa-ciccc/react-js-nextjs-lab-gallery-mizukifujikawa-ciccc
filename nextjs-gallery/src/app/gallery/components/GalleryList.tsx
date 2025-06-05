"use client"

import { useEffect, useState } from "react"
import Image from 'next/image'
import Link from 'next/link'

interface Photo {
    id: number,
    thumbnailUrl: string,
    title: string
}

const GalleryList = () =>  {
    const [photos, setPhoto] = useState<Photo[]>([])

    useEffect(() => {
        const fetchPhotos = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/photos')
            const data = await res.json()

            const updatedPhotos = data.map((photo: Photo) => ({
                ...photo,
                thumbnailUrl: 'https://placehold.co/300x300', // サムネイルURLを変更
                }))

            setPhoto(updatedPhotos)
        }

        fetchPhotos()
    }, [])

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {photos.slice(0, 20).map(photo => (
            <Link key={photo.id} href={`/gallery/photos/${photo.id}`}>
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

export default GalleryList