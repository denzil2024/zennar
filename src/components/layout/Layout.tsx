import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import WhatsAppButton from '../WhatsAppButton'
import StickyCTA from '../StickyCTA'

export default function Layout() {
  // A successful render means we are on the fresh build; reset the one-shot
  // auto-reload guard so a future stale-deploy error can self-heal again.
  useEffect(() => {
    sessionStorage.removeItem('zennara_auto_reloaded')
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
      <StickyCTA />
      <WhatsAppButton />
    </>
  )
}
