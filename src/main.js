import './style.css'
import { registerRoute, startRouter } from './router.js'

// Register routes - games are lazy-loaded
registerRoute('/', () => import('./pages/home.js'))
registerRoute('/chametz', () => import('./games/chametz/index.js'))

// Start the app
const app = document.getElementById('app')
startRouter(app)
