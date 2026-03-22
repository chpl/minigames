/**
 * SVG illustrations for each food item.
 * Each function returns an SVG string. All use viewBox="0 0 100 100".
 * Style: cartoon, bold outlines, flat bright colors.
 */

import breadSvg from './bread.svg?raw'
import pastaSvg from './pasta.svg?raw'
import cakeSvg from './cake.svg?raw'
import cookiesSvg from './cookies.svg?raw'
import pretzelSvg from './pretzel.svg?raw'
import cerealSvg from './cereal.svg?raw'
import pizzaSvg from './pizza.svg?raw'
import pitaSvg from './pita.svg?raw'
import croissantSvg from './croissant.svg?raw'
import matzaSvg from './matza.svg?raw'
import potatoSvg from './potato.svg?raw'
import appleSvg from './apple.svg?raw'
import carrotSvg from './carrot.svg?raw'
import fishSvg from './fish.svg?raw'
import chickenSvg from './chicken.svg?raw'
import eggSvg from './egg.svg?raw'
import bananaSvg from './banana.svg?raw'
import nutsSvg from './nuts.svg?raw'

export function bread() { return breadSvg }
export function pasta() { return pastaSvg }
export function cake() { return cakeSvg }
export function cookies() { return cookiesSvg }
export function pretzel() { return pretzelSvg }
export function cereal() { return cerealSvg }
export function pizza() { return pizzaSvg }
export function pita() { return pitaSvg }
export function croissant() { return croissantSvg }

// --- Kosher for Passover foods ---

export function matza() { return matzaSvg }
export function potato() { return potatoSvg }
export function apple() { return appleSvg }
export function carrot() { return carrotSvg }
export function fish() { return fishSvg }
export function chicken() { return chickenSvg }
export function egg() { return eggSvg }
export function banana() { return bananaSvg }
export function nuts() { return nutsSvg }
