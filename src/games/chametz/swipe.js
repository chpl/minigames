/**
 * Swipe gesture handler using Pointer Events.
 * Supports both touch and mouse input.
 */

const SWIPE_THRESHOLD = 70
const MAX_ROTATION = 15

export function createSwipeHandler(cardEl, { onSwipeLeft, onSwipeRight, onMove, onCancel }) {
  let startX = 0
  let startY = 0
  let currentX = 0
  let isDragging = false
  let pointerId = null

  function onPointerDown(e) {
    if (pointerId !== null) return
    isDragging = true
    pointerId = e.pointerId
    startX = e.clientX
    startY = e.clientY
    currentX = 0
    cardEl.setPointerCapture(e.pointerId)
    cardEl.style.transition = 'none'
  }

  function onPointerMove(e) {
    if (!isDragging || e.pointerId !== pointerId) return
    const dx = e.clientX - startX
    const dy = e.clientY - startY

    // If moving more vertically, ignore
    if (Math.abs(dy) > Math.abs(dx) * 1.5 && Math.abs(dx) < 20) return

    e.preventDefault()
    currentX = dx
    const rotation = (dx / window.innerWidth) * MAX_ROTATION
    const opacity = 1 - Math.min(Math.abs(dx) / (window.innerWidth * 0.4), 0.3)

    cardEl.style.transform = `translateX(${dx}px) rotate(${rotation}deg)`
    cardEl.style.opacity = opacity

    if (onMove) {
      onMove(dx)
    }
  }

  function onPointerUp(e) {
    if (!isDragging || e.pointerId !== pointerId) return
    isDragging = false
    pointerId = null

    const dx = currentX

    if (dx < -SWIPE_THRESHOLD) {
      // Swiped left → bonfire
      flyOut('left', onSwipeLeft)
    } else if (dx > SWIPE_THRESHOLD) {
      // Swiped right → basket
      flyOut('right', onSwipeRight)
    } else {
      // Snap back
      cardEl.style.transition = 'transform 0.3s ease, opacity 0.3s ease'
      cardEl.style.transform = 'translateX(0) rotate(0deg)'
      cardEl.style.opacity = '1'
      if (onCancel) onCancel()
    }
  }

  function flyOut(direction, callback) {
    const flyX = direction === 'left' ? -window.innerWidth : window.innerWidth
    const flyRotation = direction === 'left' ? -30 : 30
    cardEl.style.transition = 'transform 0.4s ease-in, opacity 0.4s ease-in'
    cardEl.style.transform = `translateX(${flyX}px) rotate(${flyRotation}deg)`
    cardEl.style.opacity = '0'

    setTimeout(() => {
      if (callback) callback()
    }, 400)
  }

  cardEl.addEventListener('pointerdown', onPointerDown)
  cardEl.addEventListener('pointermove', onPointerMove)
  cardEl.addEventListener('pointerup', onPointerUp)
  cardEl.addEventListener('pointercancel', onPointerUp)

  // Prevent default drag behavior
  cardEl.addEventListener('dragstart', e => e.preventDefault())

  return function destroy() {
    cardEl.removeEventListener('pointerdown', onPointerDown)
    cardEl.removeEventListener('pointermove', onPointerMove)
    cardEl.removeEventListener('pointerup', onPointerUp)
    cardEl.removeEventListener('pointercancel', onPointerUp)
  }
}
