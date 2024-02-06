// pages/index.tsx or pages/home.tsx
'use client'
import Link from 'next/link'
import NavbarLayout from './layouts/NavbarLayout'
import { blogPosts } from './constans/blogPosts'
import { useEffect, useState } from 'react'
import makeRequest from './utils/api'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Image from 'next/image';

const Home = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result: any = await makeRequest('get', '/endpoint')
        setData(result)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <NavbarLayout>
      <Banner />
      <div className="container mx-auto py-10 mt-8">
        <div className='mb-6' >
          <h2 className='text-3xl mb-3 text-teal-950 dark:text-teal-50' >The newest Post</h2>
          <hr className='border-0 border-b border-teal-700' />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-2 pb-4 rounded shadow hover:shadow-teal-800 dark:shadow-teal-50 duration-300 mb-10"
            >
              <Image
                        src={post.image}
                        alt={post.title}
                        width={320}  // specify the width of your image
                        height={213}  // specify the height of your image
                        className="h-32 object-cover mb-2 rounded"
                    />
              <div className="mb-2 flex justify-between">
                <span className="bg-teal-200 hover:bg-teal-300 px-1 py-0.5 text-teal-600 text-xs cursor-pointer">
                  Javascript
                </span>
                <span className="text-gray-600 text-xs">4 Januari 2024</span>
              </div>
              <Link href={`/post/${post.id}`} passHref>
                <h2 className="text-teal-800 text-lg font-bold mb-2 hover:underline">
                  {post.title}
                </h2>
              </Link>
              <p className="text-gray-600 line-clamp-2 text-sm">
                {post.content}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </NavbarLayout>
  )
}

export default Home
