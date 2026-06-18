import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './routes'
import './styles/tokens.css'
import './styles/app.css'
import './styles/pages.css'

export const createRoot = ViteReactSSG({ routes })
