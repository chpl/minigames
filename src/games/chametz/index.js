import './style.css'
import { shuffleFoods } from './foods.js'
import { renderBonfire } from './svg/bonfire.js'
import { renderBasket } from './svg/basket.js'
import { createSwipeHandler } from './swipe.js'
import { showConfetti, showStars } from '../../shared/confetti.js'
import { navigate } from '../../router.js'

export function mount(container) {
  let state = 'title' // title | playing | complete
  let foodList = []
  let currentIndex = 0
  let destroySwipe = null
  let showArrows = true

  function render() {
    switch (state) {
      case 'title': renderTitle(); break
      case 'playing': renderPlaying(); break
      case 'complete': renderComplete(); break
    }
  }

  function renderTitle() {
    container.innerHTML = `
      <div class="chametz-game">
        <div class="chametz-title">
          <div class="title-icon">${renderBonfire()}</div>
          <h1>ביעור חמץ!</h1>
          <p class="subtitle">מה כשר לפסח ומה לא?</p>
          <p class="subtitle" style="font-size:17px; opacity:0.8;">
            החליקו ימינה לכשר לפסח<br/>
            החליקו שמאלה לשריפה
          </p>
          <button class="btn btn-primary" style="margin-top:12px; font-size:28px;" id="start-btn">!יאללה נתחיל</button>
        </div>
      </div>
    `
    container.querySelector('#start-btn').addEventListener('click', () => {
      state = 'playing'
      foodList = shuffleFoods()
      currentIndex = 0
      showArrows = true
      render()
    })
  }

  function renderPlaying() {
    const food = foodList[currentIndex]
    const progress = currentIndex / foodList.length * 100

    container.innerHTML = `
      <div class="chametz-game">
        <div class="game-play">
          <div class="game-header">
            <div class="level-text">${currentIndex + 1} / ${foodList.length}</div>
            <div class="progress-bar">
              <div class="progress-bar-fill" style="width: ${progress}%"></div>
            </div>
          </div>

          <div class="game-arena" id="game-arena">
            <div class="side-indicator left" id="indicator-left">
              <div class="indicator-icon">${renderBonfire()}</div>
              <span class="indicator-label">חמץ!</span>
            </div>

            <div class="food-card pop-in" id="food-card">
              <div class="swipe-hint left" id="hint-left">חמץ 🔥</div>
              <div class="swipe-hint right" id="hint-right">✓ כשר לפסח</div>
              <div class="food-svg">${food.svg()}</div>
              <div class="food-name">${food.name}</div>
            </div>

            <div class="side-indicator right" id="indicator-right">
              <div class="indicator-icon">${renderBasket()}</div>
              <span class="indicator-label">כשר לפסח</span>
            </div>

            ${showArrows ? `
              <div class="arrow-hints">
                <div class="arrow-hint left">← חמץ</div>
                <div class="arrow-hint right">כשר לפסח →</div>
              </div>
            ` : ''}
          </div>
        </div>
      </div>
    `

    // Hide arrow hints after 2nd item
    if (currentIndex >= 2) {
      showArrows = false
    }

    setupSwipe(food)
  }

  function setupSwipe(food) {
    const card = container.querySelector('#food-card')
    const hintLeft = container.querySelector('#hint-left')
    const hintRight = container.querySelector('#hint-right')
    const indicatorLeft = container.querySelector('#indicator-left')
    const indicatorRight = container.querySelector('#indicator-right')

    if (!card) return

    destroySwipe = createSwipeHandler(card, {
      onMove(dx) {
        // Show directional hints
        if (dx < -30) {
          hintLeft.classList.add('visible')
          hintRight.classList.remove('visible')
          indicatorLeft.classList.add('active')
          indicatorRight.classList.remove('active')
        } else if (dx > 30) {
          hintRight.classList.add('visible')
          hintLeft.classList.remove('visible')
          indicatorRight.classList.add('active')
          indicatorLeft.classList.remove('active')
        } else {
          hintLeft.classList.remove('visible')
          hintRight.classList.remove('visible')
          indicatorLeft.classList.remove('active')
          indicatorRight.classList.remove('active')
        }
      },
      onCancel() {
        hintLeft.classList.remove('visible')
        hintRight.classList.remove('visible')
        indicatorLeft.classList.remove('active')
        indicatorRight.classList.remove('active')
      },
      onSwipeLeft() {
        // Swiped to bonfire - correct if chametz
        if (!food.isKosher) {
          onCorrect()
        } else {
          onWrong()
        }
      },
      onSwipeRight() {
        // Swiped to basket - correct if kosher
        if (food.isKosher) {
          onCorrect()
        } else {
          onWrong()
        }
      }
    })
  }

  function onCorrect() {
    if (destroySwipe) {
      destroySwipe()
      destroySwipe = null
    }

    // Show stars at card position
    const arena = container.querySelector('#game-arena')
    if (arena) {
      const rect = arena.getBoundingClientRect()
      showStars(arena, rect.width / 2, rect.height / 2)
    }

    currentIndex++
    if (currentIndex >= foodList.length) {
      setTimeout(() => {
        state = 'complete'
        render()
      }, 500)
    } else {
      setTimeout(() => render(), 450)
    }
  }

  function onWrong() {
    if (destroySwipe) {
      destroySwipe()
      destroySwipe = null
    }

    const arena = container.querySelector('#game-arena')
    if (!arena) return

    // Show retry message
    const msg = document.createElement('div')
    msg.className = 'retry-message'
    msg.textContent = '!נסו שוב'
    arena.appendChild(msg)

    // Remove message and re-render same card
    setTimeout(() => {
      msg.remove()
      render()
    }, 900)
  }

  function renderComplete() {
    container.innerHTML = `
      <div class="chametz-game">
        <div class="chametz-end">
          <div class="end-stars">
            <svg width="50" height="50" viewBox="0 0 24 24"><path d="M12 2l3 7h7l-5.5 4.5 2 7L12 16l-6.5 4.5 2-7L2 9h7z" fill="#FFD700" stroke="#FFA000" stroke-width="0.5"/></svg>
            <svg width="60" height="60" viewBox="0 0 24 24"><path d="M12 2l3 7h7l-5.5 4.5 2 7L12 16l-6.5 4.5 2-7L2 9h7z" fill="#FFD700" stroke="#FFA000" stroke-width="0.5"/></svg>
            <svg width="50" height="50" viewBox="0 0 24 24"><path d="M12 2l3 7h7l-5.5 4.5 2 7L12 16l-6.5 4.5 2-7L2 9h7z" fill="#FFD700" stroke="#FFA000" stroke-width="0.5"/></svg>
          </div>
          <h1>!כל הכבוד</h1>
          <p class="end-subtitle">מיינתם את כל המאכלים בהצלחה!</p>
          <div class="end-buttons">
            <button class="btn btn-success" id="play-again-btn">!שחקו שוב</button>
            <button class="btn btn-secondary" id="home-btn">חזרה לתפריט</button>
          </div>
        </div>
      </div>
    `

    // Confetti!
    showConfetti(container)

    container.querySelector('#play-again-btn').addEventListener('click', () => {
      state = 'playing'
      foodList = shuffleFoods()
      currentIndex = 0
      showArrows = true
      render()
    })

    container.querySelector('#home-btn').addEventListener('click', () => {
      navigate('/')
    })
  }

  // Start
  render()

  // Return cleanup function
  return () => {
    if (destroySwipe) {
      destroySwipe()
      destroySwipe = null
    }
  }
}
