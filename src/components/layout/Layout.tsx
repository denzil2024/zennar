import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import WhatsAppButton from '../WhatsAppButton'
import StickyCTA from '../StickyCTA'

export default function Layout() {
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
