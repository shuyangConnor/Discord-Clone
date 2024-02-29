'use server'
import axios from 'axios'

export const deleteFile = async (fileName: string) => {
  const options = {
    method: 'POST',
    url: 'https://uploadthing.com/api/deleteFile',
    headers: {
      'Content-Type': 'application/json',
      'X-Uploadthing-Api-Key': process.env.UPLOADTHING_SECRET,
    },
    data: { fileKeys: [fileName] },
  }
  try {
    const { data } = await axios.request(options)
  } catch (error) {
    console.error(error)
  }
}
