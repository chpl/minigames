import * as svgs from './svg/foods.js'

/**
 * Food items data for the chametz sorting game.
 * isKosher: true = kosher for Passover, false = chametz
 */
export const foods = [
  // Chametz items
  { id: 'bread', name: 'לחם', svg: svgs.bread, isKosher: false },
  { id: 'pasta', name: 'פסטה', svg: svgs.pasta, isKosher: false },
  { id: 'cake', name: 'עוגה', svg: svgs.cake, isKosher: false },
  { id: 'cookies', name: 'עוגיות', svg: svgs.cookies, isKosher: false },
  { id: 'pretzel', name: 'בייגלה', svg: svgs.pretzel, isKosher: false },
  { id: 'cereal', name: 'דגני בוקר', svg: svgs.cereal, isKosher: false },
  { id: 'pizza', name: 'פיצה', svg: svgs.pizza, isKosher: false },
  { id: 'pita', name: 'פיתה', svg: svgs.pita, isKosher: false },
  { id: 'croissant', name: 'קרואסון', svg: svgs.croissant, isKosher: false },

  // Kosher for Passover items
  { id: 'matza', name: 'מצה', svg: svgs.matza, isKosher: true },
  { id: 'potato', name: 'תפוח אדמה', svg: svgs.potato, isKosher: true },
  { id: 'apple', name: 'תפוח', svg: svgs.apple, isKosher: true },
  { id: 'carrot', name: 'גזר', svg: svgs.carrot, isKosher: true },
  { id: 'fish', name: 'דג', svg: svgs.fish, isKosher: true },
  { id: 'chicken', name: 'עוף', svg: svgs.chicken, isKosher: true },
  { id: 'egg', name: 'ביצה', svg: svgs.egg, isKosher: true },
  { id: 'banana', name: 'בננה', svg: svgs.banana, isKosher: true },
  { id: 'nuts', name: 'אגוזים', svg: svgs.nuts, isKosher: true },
]

/** Fisher-Yates shuffle */
export function shuffleFoods() {
  const arr = [...foods]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}
