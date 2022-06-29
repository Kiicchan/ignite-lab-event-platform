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
    <div className="flex flex-col h-screen">
      <Header toggleMenu={() => setHideMenu((state) => !state)} isMenuHidden={hideMenu} />
      <main className="flex flex-1 min-h-0">
        <div className={`flex-1 h-full overflow-y-auto flex-col ${!hideMenu ? 'hidden md:flex' : 'flex'}`}>
          {slug ? <Video lessonSlug={slug} /> : <Welcome />}
          <Footer />
        </div>
        <Sidebar hideMenu={hideMenu} />
      </main>
    </div>
  )
}
