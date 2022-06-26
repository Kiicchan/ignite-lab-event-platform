import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Sidebar } from '../components/Sidebar'
import { Video } from '../components/Video'
import { Welcome } from '../components/Welcome'

export function Event() {
  const { slug } = useParams<{ slug: string }>()
  const [hideMenu, setHideMenu] = useState(true)

  return (
    <div className="flex flex-col min-h-screen">
      <Header toggleMenu={() => setHideMenu((state) => !state)} isMenuHidden={hideMenu} />
      <main className="flex flex-1">
        <div className={`flex-1 flex-col justify-center ${!hideMenu ? 'hidden md:flex' : 'flex'}`}>
          {slug ? <Video lessonSlug={slug} /> : <Welcome />}
          <Footer />
        </div>
        <Sidebar hideMenu={hideMenu} />
      </main>
    </div>
  )
}
