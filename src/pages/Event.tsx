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
    <div className="flex flex-col min-h-screen max-h-screen">
      <Header toggleMenu={() => setHideMenu(state=>!state)} isMenuHidden={hideMenu} />
      <main className="flex flex-1">
        { slug ? <Video lessonSlug={slug} hideContent={!hideMenu}/> : <Welcome hideContent={!hideMenu}/>}
        <Sidebar hideMenu={hideMenu}/>
      </main>
      <Footer hideFooter={!hideMenu}/>
    </div>
  )
}
