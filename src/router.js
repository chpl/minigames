/**
 * Simple hash-based router for the mini-games SPA.
 * Routes are registered with a path and a loader function.
 * Game modules are loaded lazily via dynamic import().
 */

const routes = new Map()
let currentCleanup = null

export function registerRoute(path, loader) {
  routes.set(path, loader)
}

export function navigate(path) {
  window.location.hash = path
}

export async function startRouter(appEl) {
  async function handleRoute() {
    const hash = window.location.hash.slice(1) || '/'
    const loader = routes.get(hash)

    if (currentCleanup) {
      currentCleanup()
      currentCleanup = null
    }

    if (loader) {
      appEl.innerHTML = '<div class="loading"></div>'
      try {
        const module = await loader()
        appEl.innerHTML = ''
        currentCleanup = module.mount(appEl) || null
      } catch (err) {
        console.error('Failed to load route:', hash, err)
        appEl.innerHTML = '<div style="text-align:center;padding:40px;font-size:20px;">שגיאה בטעינה</div>'
      }
    } else {
      // Default to home
      navigate('/')
    }
  }

  window.addEventListener('hashchange', handleRoute)
  await handleRoute()
}
