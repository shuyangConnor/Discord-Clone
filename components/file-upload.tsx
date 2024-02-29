'use client'

import { UploadDropzone } from '@/lib/uploadthing'
import Image from 'next/image'

import { X } from 'lucide-react'

import { deleteFile } from '@/lib/file-delete'
import { useEffect, useState } from 'react'

import { Progress } from '@/components/ui/progress'

interface FileUploadProps {
  onChange: (url?: string) => void
  value: string
  endpoint: 'messageFile' | 'serverImage'
}

export const FileUpload = ({ onChange, value, endpoint }: FileUploadProps) => {
  const [imageKey, setImageKey] = useState('')
  const [loading, setLoading] = useState(false)

  const [progress, setProgress] = useState(5)

  useEffect(() => {
    setProgress(5)
    const timer1 = setTimeout(() => setProgress(30), 600)
    const timer2 = setTimeout(() => setProgress(95), 1800)
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [loading])

  const fileType = value?.split('.').pop()

  if (value && imageKey && fileType !== 'pdf') {
    return (
      <div className="relative h-20 w-20">
        <Image
          fill
          src={value}
          alt="Upload"
          className="rounded-full"
          onLoad={(e) => {
            setLoading(false)
          }}></Image>
        {loading ? (
          <Progress
            value={progress}
            className="absolute top-8 left-[-2rem] w-36 "
          />
        ) : (
          <button
            className="bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
            type="button"
            onClick={() => {
              onChange('')
              deleteFile(imageKey)
            }}>
            <X className="h-4 w-4"></X>
          </button>
        )}
      </div>
    )
  }

  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url)
        setImageKey(res?.[0].key)
        setLoading(true)
      }}
      onUploadError={(error: Error) => console.log(error)}></UploadDropzone>
  )
}
