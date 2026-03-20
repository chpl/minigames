import { games } from '../games/registry.js'
import { navigate } from '../router.js'

export function mount(container) {
  container.innerHTML = `
    <div class="home-page">
      <header class="home-header">
        <h1 class="home-title">משחקונים</h1>
        <p class="home-subtitle">משחקים לילדים</p>
      </header>
      <div class="games-grid">
        ${games.map(game => `
          <button class="game-card pop-in" data-route="${game.route}">
            <div class="game-card-icon">${game.icon}</div>
            <h2 class="game-card-title">${game.title}</h2>
            <p class="game-card-subtitle">${game.subtitle}</p>
          </button>
        `).join('')}
      </div>
    </div>
  `

  // Add styles
  const style = document.createElement('style')
  style.textContent = `
    .home-page {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 30px 20px;
      overflow-y: auto;
      background: linear-gradient(180deg, #E8F4FD 0%, var(--color-bg) 100%);
    }

    .home-header {
      text-align: center;
      margin-bottom: 32px;
    }

    .home-title {
      font-size: 42px;
      color: var(--color-primary);
      text-shadow: 2px 2px 0 rgba(0,0,0,0.08);
      margin-bottom: 4px;
    }

    .home-subtitle {
      font-size: 18px;
      color: var(--color-text-light);
    }

    .games-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
      max-width: 600px;
    }

    .game-card {
      background: var(--color-card-bg);
      border: 3px solid #E0E0E0;
      border-radius: 20px;
      padding: 24px 20px;
      width: 260px;
      text-align: center;
      cursor: pointer;
      transition: transform 0.15s ease, box-shadow 0.15s ease;
      box-shadow: 0 4px 16px rgba(0,0,0,0.08);
      font-family: var(--font-family);
    }

    .game-card:active {
      transform: scale(0.96);
      box-shadow: 0 2px 8px rgba(0,0,0,0.06);
    }

    .game-card-icon {
      margin-bottom: 12px;
    }

    .game-card-title {
      font-size: 26px;
      color: var(--color-text);
      margin-bottom: 6px;
    }

    .game-card-subtitle {
      font-size: 15px;
      color: var(--color-text-light);
    }
  `
  container.appendChild(style)

  // Event delegation for game cards
  function handleClick(e) {
    const card = e.target.closest('.game-card')
    if (card) {
      navigate(card.dataset.route)
    }
  }
  container.addEventListener('click', handleClick)

  return () => {
    container.removeEventListener('click', handleClick)
  }
}
