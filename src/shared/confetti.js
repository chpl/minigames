/**
 * Simple confetti celebration effect using CSS animations.
 */

const COLORS = ['#FF6B35', '#FFD700', '#4CAF50', '#E91E63', '#42A5F5', '#9C27B0', '#FF9800']

export function showConfetti(container, count = 40) {
  const confettiContainer = document.createElement('div')
  confettiContainer.className = 'confetti-container'

  for (let i = 0; i < count; i++) {
    const piece = document.createElement('div')
    piece.className = 'confetti-piece'
    const color = COLORS[Math.floor(Math.random() * COLORS.length)]
    const left = Math.random() * 100
    const delay = Math.random() * 1.5
    const size = 6 + Math.random() * 8
    const shape = Math.random() > 0.5 ? '50%' : '2px'

    piece.style.cssText = `
      left: ${left}%;
      background: ${color};
      width: ${size}px;
      height: ${size}px;
      border-radius: ${shape};
      animation-delay: ${delay}s;
      animation-duration: ${2 + Math.random() * 2}s;
    `
    confettiContainer.appendChild(piece)
  }

  container.appendChild(confettiContainer)

  setTimeout(() => {
    confettiContainer.remove()
  }, 5000)
}

/**
 * Small stars burst at a position.
 */
export function showStars(container, x, y, count = 6) {
  const burst = document.createElement('div')
  burst.className = 'stars-burst'
  burst.style.left = x + 'px'
  burst.style.top = y + 'px'

  for (let i = 0; i < count; i++) {
    const star = document.createElement('div')
    star.className = 'star'
    const angle = (i / count) * 360
    const distance = 30 + Math.random() * 30
    const dx = Math.cos(angle * Math.PI / 180) * distance
    const dy = Math.sin(angle * Math.PI / 180) * distance

    star.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24">
      <path d="M12 2l3 7h7l-5.5 4.5 2 7L12 16l-6.5 4.5 2-7L2 9h7z" fill="#FFD700" stroke="#FFA000" stroke-width="1"/>
    </svg>`
    star.style.cssText = `
      left: ${dx}px;
      top: ${dy}px;
      animation-delay: ${i * 0.05}s;
    `
    burst.appendChild(star)
  }

  container.appendChild(burst)
  setTimeout(() => burst.remove(), 800)
}
