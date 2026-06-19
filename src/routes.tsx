import type { RouteRecord } from 'vite-react-ssg'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import PortfolioPage from './pages/PortfolioPage'
import EcoPage from './pages/EcoPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import Portal from './pages/portal/Portal'
import { POSTS } from './data/posts'

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
      { path: 'blog', Component: BlogPage },
      {
        path: 'blog/:slug',
        Component: BlogPostPage,
        getStaticPaths: () => POSTS.map((p) => `/blog/${p.slug}`),
      },
      { path: 'portal', Component: Portal },
    ],
  },
]
