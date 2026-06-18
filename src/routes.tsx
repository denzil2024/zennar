import type { RouteRecord } from 'vite-react-ssg'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import PortfolioPage from './pages/PortfolioPage'
import EcoPage from './pages/EcoPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PortalLogin from './pages/portal/PortalLogin'

export const routes: RouteRecord[] = [
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'services', Component: ServicesPage },
      { path: 'portfolio', Component: PortfolioPage },
      { path: 'eco', Component: EcoPage },
      { path: 'about', Component: AboutPage },
      { path: 'contact', Component: ContactPage },
      { path: 'portal', Component: PortalLogin },
    ],
  },
]
