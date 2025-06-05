'use client'
import { useRouter } from 'next/navigation'
import PhotoPage from '@/app/photos/[id]/page'

export default function Modal({ params }: { params: { id: string } }) {
  const router = useRouter()
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center" onClick={() => router.back()}>
      <div onClick={e => e.stopPropagation()} className="bg-white p-4 rounded">
        <PhotoPage params={params} />
      </div>
    </div>
  )
}
