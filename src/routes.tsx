import type { RouteRecord } from 'vite-react-ssg'
import Layout from './components/layout/Layout'
import RouteError from './components/RouteError'
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import PortfolioPage from './pages/PortfolioPage'
import EcoPage from './pages/EcoPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import Portal from './pages/portal/Portal'
import Admin from './pages/portal/Admin'
import { POSTS } from './data/posts'
import { SERVICES } from './data/content'

export const routes: RouteRecord[] = [
  {
    path: '/',
    Component: Layout,
    ErrorBoundary: RouteError,
    children: [
      { index: true, Component: Home },
      { path: 'services', Component: ServicesPage },
      {
        path: 'services/:slug',
        Component: ServicesPage,
        getStaticPaths: () => SERVICES.map((s) => `/services/${s.slug}`),
      },
      { path: 'portfolio', Component: PortfolioPage },
      { path: 'eco', Component: EcoPage },
      { path: 'about', Component: AboutPage },
      { path: 'contact', Component: ContactPage },
      { path: 'blog', Component: BlogPage },
      {
        path: 'blog/:slug',
        Component: BlogPostPage,
        getStaticPaths: () => POSTS.map((p) => `/blog/${p.slug}`),
      },
      { path: 'portal', Component: Portal },
      { path: 'portal/admin', Component: Admin },
    ],
  },
]
