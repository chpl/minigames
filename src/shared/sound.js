import { zzfx } from 'zzfx'

let muted = localStorage.getItem('minigames-muted') === 'true'
let audioUnlocked = false

function unlockAudio() {
  if (audioUnlocked) return
  // Play a silent sound to unlock AudioContext on mobile
  zzfx(0)
  audioUnlocked = true
}

function play(...params) {
  if (muted) return
  unlockAudio()
  zzfx(...params)
}

export function playCorrect() {
  play(.5, 0, 523, .05, .15, .3, 1, 1.5, 0, 0, 200, .05, 0, 0, 0, 0, 0, .7, .05)
}

export function playWrong() {
  play(.4, 0, 200, .03, .1, .2, 3, 1, 0, 0, 0, 0, 0, 0, 0, .5, .1, .5, .05)
}

export function playVictory() {
  play(.5, 0, 523, .05, .3, .4, 1, 1.5, 0, 0, 300, .1, .05, 0, 0, 0, 0, .8, .1)
  setTimeout(() => play(.5, 0, 659, .05, .3, .4, 1, 1.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, .8, .1), 150)
  setTimeout(() => play(.5, 0, 784, .05, .4, .5, 1, 1.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, .9, .15), 300)
}

export function playSwipe() {
  play(.2, 0, 300, .02, .05, .1, 0, .5, 20, -20, 0, 0, 0, 0, 0, 0, 0, .3, .02)
}

export function playClick() {
  play(.3, 0, 1e3, .01, .03, .05, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .5, .01)
}

export function isMuted() {
  return muted
}

export function setMuted(value) {
  muted = value
  localStorage.setItem('minigames-muted', String(muted))
}
