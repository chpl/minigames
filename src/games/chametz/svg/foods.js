/**
 * SVG illustrations for each food item.
 * Each function returns an SVG string. All use viewBox="0 0 100 100".
 * Style: cartoon, bold outlines, flat bright colors.
 */

export function bread() {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="55" rx="38" ry="28" fill="#D4A056" stroke="#8B6914" stroke-width="3"/>
    <ellipse cx="50" cy="50" rx="36" ry="25" fill="#E8C170"/>
    <path d="M25 45 Q35 35 50 33 Q65 35 75 45" fill="#F0D48A" stroke="none"/>
    <line x1="35" y1="42" x2="38" y2="55" stroke="#C9A04E" stroke-width="1.5" opacity="0.5"/>
    <line x1="50" y1="38" x2="50" y2="55" stroke="#C9A04E" stroke-width="1.5" opacity="0.5"/>
    <line x1="65" y1="42" x2="62" y2="55" stroke="#C9A04E" stroke-width="1.5" opacity="0.5"/>
  </svg>`
}

export function pasta() {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="60" rx="35" ry="22" fill="#F5F5DC" stroke="#8B7355" stroke-width="2.5"/>
    <ellipse cx="50" cy="56" rx="35" ry="22" fill="#FFF8DC" stroke="#8B7355" stroke-width="2.5"/>
    <path d="M25 50 Q30 45 38 50 Q42 54 50 50 Q55 46 62 50 Q68 54 75 50" fill="none" stroke="#E8C840" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M28 56 Q34 52 40 56 Q46 60 52 56 Q58 52 64 56 Q70 60 72 56" fill="none" stroke="#E8C840" stroke-width="3.5" stroke-linecap="round"/>
    <circle cx="35" cy="46" r="3" fill="#E74C3C"/>
    <circle cx="55" cy="44" r="2.5" fill="#E74C3C"/>
    <circle cx="62" cy="48" r="2" fill="#E74C3C"/>
  </svg>`
}

export function cake() {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="45" width="60" height="35" rx="5" fill="#F8BBD0" stroke="#C2185B" stroke-width="3"/>
    <rect x="20" y="45" width="60" height="12" rx="5" fill="#E91E63" stroke="#C2185B" stroke-width="2"/>
    <path d="M18 57 Q30 52 50 55 Q70 52 82 57" fill="#FFFFFF" stroke="none" opacity="0.4"/>
    <rect x="46" y="28" width="8" height="20" rx="2" fill="#E8C840" stroke="#B8960C" stroke-width="1.5"/>
    <ellipse cx="50" cy="26" rx="4" ry="6" fill="#FF9800"/>
    <ellipse cx="50" cy="24" rx="2.5" ry="4" fill="#FFEB3B"/>
    <circle cx="30" cy="65" r="2.5" fill="#E91E63"/>
    <circle cx="42" cy="68" r="2" fill="#FF4081"/>
    <circle cx="58" cy="66" r="2.5" fill="#E91E63"/>
    <circle cx="70" cy="68" r="2" fill="#FF4081"/>
  </svg>`
}

export function cookies() {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="38" cy="55" r="22" fill="#D4A056" stroke="#8B6914" stroke-width="3"/>
    <circle cx="30" cy="50" r="3" fill="#5D4037"/>
    <circle cx="42" cy="45" r="2.5" fill="#5D4037"/>
    <circle cx="35" cy="62" r="3" fill="#5D4037"/>
    <circle cx="48" cy="58" r="2.5" fill="#5D4037"/>
    <circle cx="62" cy="48" r="20" fill="#E8C170" stroke="#8B6914" stroke-width="3"/>
    <circle cx="55" cy="42" r="2.5" fill="#5D4037"/>
    <circle cx="68" cy="46" r="3" fill="#5D4037"/>
    <circle cx="58" cy="55" r="2.5" fill="#5D4037"/>
    <circle cx="70" cy="55" r="2" fill="#5D4037"/>
  </svg>`
}

export function pretzel() {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 80 Q25 65 20 45 Q15 25 35 20 Q50 16 50 35 Q50 16 65 20 Q85 25 80 45 Q75 65 50 80Z"
          fill="#D4A056" stroke="#8B6914" stroke-width="3" fill-rule="evenodd"/>
    <path d="M50 70 Q32 58 28 44 Q24 30 38 27 Q48 24 48 38 Q48 24 62 27 Q76 30 72 44 Q68 58 50 70Z"
          fill="#E8C170" stroke="none"/>
    <circle cx="35" cy="35" r="1.5" fill="#FFF" opacity="0.7"/>
    <circle cx="65" cy="35" r="1.5" fill="#FFF" opacity="0.7"/>
    <circle cx="50" cy="65" r="1.5" fill="#FFF" opacity="0.7"/>
    <circle cx="42" cy="50" r="1" fill="#FFF" opacity="0.7"/>
    <circle cx="58" cy="50" r="1" fill="#FFF" opacity="0.7"/>
  </svg>`
}

export function cereal() {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 35 L20 75 Q20 82 27 82 L73 82 Q80 82 80 75 L80 35" fill="#5C6BC0" stroke="#3949AB" stroke-width="3"/>
    <rect x="20" y="32" width="60" height="8" rx="2" fill="#7986CB" stroke="#3949AB" stroke-width="2"/>
    <circle cx="35" cy="50" r="5" fill="#FFB74D" stroke="#E65100" stroke-width="1.5"/>
    <circle cx="50" cy="45" r="5" fill="#FFB74D" stroke="#E65100" stroke-width="1.5"/>
    <circle cx="65" cy="48" r="5" fill="#FFB74D" stroke="#E65100" stroke-width="1.5"/>
    <circle cx="42" cy="58" r="5" fill="#FFB74D" stroke="#E65100" stroke-width="1.5"/>
    <circle cx="58" cy="56" r="5" fill="#FFB74D" stroke="#E65100" stroke-width="1.5"/>
    <circle cx="50" cy="65" r="5" fill="#FFB74D" stroke="#E65100" stroke-width="1.5"/>
  </svg>`
}

export function pizza() {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 15 L15 85 Q50 90 85 85 Z" fill="#F4C542" stroke="#D4952B" stroke-width="3"/>
    <path d="M50 22 L22 80 Q50 84 78 80 Z" fill="#E8A030"/>
    <path d="M15 85 Q50 90 85 85" fill="none" stroke="#D4952B" stroke-width="4" stroke-linecap="round"/>
    <circle cx="42" cy="50" r="7" fill="#E74C3C" stroke="#C0392B" stroke-width="1.5"/>
    <circle cx="60" cy="55" r="6" fill="#E74C3C" stroke="#C0392B" stroke-width="1.5"/>
    <circle cx="50" cy="70" r="7" fill="#E74C3C" stroke="#C0392B" stroke-width="1.5"/>
    <circle cx="45" cy="52" r="2" fill="#2E7D32" opacity="0.7"/>
    <circle cx="62" cy="62" r="1.5" fill="#2E7D32" opacity="0.7"/>
  </svg>`
}

export function pita() {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="55" rx="38" ry="30" fill="#E8C170" stroke="#8B6914" stroke-width="3"/>
    <ellipse cx="50" cy="52" rx="35" ry="27" fill="#F0D48A"/>
    <ellipse cx="50" cy="50" rx="20" ry="12" fill="#D4A056" opacity="0.4"/>
    <path d="M30 50 Q40 42 50 44 Q60 42 70 50" fill="none" stroke="#C9A04E" stroke-width="1.5" opacity="0.5"/>
  </svg>`
}

export function croissant() {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 60 Q20 35 40 30 Q50 28 55 35 Q60 28 70 30 Q85 35 85 60 Q70 55 50 58 Q30 55 15 60Z"
          fill="#E8C170" stroke="#8B6914" stroke-width="3"/>
    <path d="M20 56 Q25 40 42 34 Q50 32 55 38 Q58 32 68 34 Q80 40 80 56" fill="#F0D48A" stroke="none"/>
    <path d="M30 50 Q35 44 42 42" fill="none" stroke="#C9A04E" stroke-width="1.5" opacity="0.6"/>
    <path d="M55 42 Q62 40 70 50" fill="none" stroke="#C9A04E" stroke-width="1.5" opacity="0.6"/>
    <path d="M42 48 Q50 45 58 48" fill="none" stroke="#C9A04E" stroke-width="1.5" opacity="0.6"/>
  </svg>`
}

// --- Kosher for Passover foods ---

export function matza() {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="15" y="25" width="70" height="50" rx="6" fill="#F5DEB3" stroke="#8B7355" stroke-width="3"/>
    <line x1="25" y1="32" x2="25" y2="68" stroke="#D2B48C" stroke-width="1.5" stroke-dasharray="4,3"/>
    <line x1="40" y1="32" x2="40" y2="68" stroke="#D2B48C" stroke-width="1.5" stroke-dasharray="4,3"/>
    <line x1="55" y1="32" x2="55" y2="68" stroke="#D2B48C" stroke-width="1.5" stroke-dasharray="4,3"/>
    <line x1="70" y1="32" x2="70" y2="68" stroke="#D2B48C" stroke-width="1.5" stroke-dasharray="4,3"/>
    <line x1="22" y1="38" x2="78" y2="38" stroke="#D2B48C" stroke-width="1.5" stroke-dasharray="4,3"/>
    <line x1="22" y1="50" x2="78" y2="50" stroke="#D2B48C" stroke-width="1.5" stroke-dasharray="4,3"/>
    <line x1="22" y1="62" x2="78" y2="62" stroke="#D2B48C" stroke-width="1.5" stroke-dasharray="4,3"/>
    <circle cx="32" cy="44" r="2.5" fill="#C4A882"/>
    <circle cx="48" cy="56" r="2" fill="#C4A882"/>
    <circle cx="63" cy="44" r="2.5" fill="#C4A882"/>
    <circle cx="75" cy="56" r="2" fill="#C4A882"/>
    <circle cx="32" cy="56" r="2" fill="#C4A882"/>
  </svg>`
}

export function potato() {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="52" rx="32" ry="26" fill="#C8A26E" stroke="#8B6914" stroke-width="3"/>
    <ellipse cx="48" cy="50" rx="30" ry="24" fill="#D4B07A"/>
    <circle cx="38" cy="42" r="2" fill="#A0845C"/>
    <circle cx="55" cy="38" r="1.5" fill="#A0845C"/>
    <circle cx="62" cy="52" r="2" fill="#A0845C"/>
    <circle cx="40" cy="58" r="1.5" fill="#A0845C"/>
    <circle cx="55" cy="62" r="2" fill="#A0845C"/>
  </svg>`
}

export function apple() {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 25 Q30 25 22 45 Q15 65 30 78 Q42 88 50 82 Q58 88 70 78 Q85 65 78 45 Q70 25 50 25Z"
          fill="#E74C3C" stroke="#C0392B" stroke-width="3"/>
    <path d="M50 28 Q36 28 28 45 Q22 60 35 73" fill="#FF6B6B" stroke="none" opacity="0.4"/>
    <path d="M50 25 Q48 15 52 8" fill="none" stroke="#5D4037" stroke-width="3" stroke-linecap="round"/>
    <path d="M52 18 Q58 14 62 18 Q58 20 52 18Z" fill="#4CAF50"/>
  </svg>`
}

export function carrot() {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 90 Q42 70 40 50 Q38 30 45 20 Q55 20 52 30 Q54 50 52 70 Z"
          fill="#FF9800" stroke="#E65100" stroke-width="3"/>
    <path d="M48 85 Q44 65 42 45 Q40 30 46 22" fill="#FFB74D" stroke="none" opacity="0.5"/>
    <line x1="44" y1="40" x2="52" y2="38" stroke="#E65100" stroke-width="1.5" opacity="0.4"/>
    <line x1="44" y1="55" x2="52" y2="53" stroke="#E65100" stroke-width="1.5" opacity="0.4"/>
    <line x1="45" y1="70" x2="51" y2="68" stroke="#E65100" stroke-width="1.5" opacity="0.4"/>
    <path d="M45 20 Q40 10 35 8" fill="none" stroke="#4CAF50" stroke-width="3" stroke-linecap="round"/>
    <path d="M48 18 Q48 8 50 5" fill="none" stroke="#4CAF50" stroke-width="3" stroke-linecap="round"/>
    <path d="M52 20 Q56 12 60 10" fill="none" stroke="#4CAF50" stroke-width="3" stroke-linecap="round"/>
  </svg>`
}

export function fish() {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M75 50 Q65 30 45 28 Q25 26 15 50 Q25 74 45 72 Q65 70 75 50Z"
          fill="#42A5F5" stroke="#1565C0" stroke-width="3"/>
    <path d="M75 50 L90 35 L90 65 Z" fill="#42A5F5" stroke="#1565C0" stroke-width="3"/>
    <path d="M70 50 Q60 35 48 32 Q32 30 22 50" fill="#64B5F6" stroke="none" opacity="0.5"/>
    <circle cx="30" cy="46" r="5" fill="white" stroke="#1565C0" stroke-width="2"/>
    <circle cx="29" cy="46" r="2.5" fill="#1565C0"/>
    <path d="M18 52 Q22 56 30 56" fill="none" stroke="#1565C0" stroke-width="2" stroke-linecap="round"/>
    <path d="M45 38 Q48 45 45 52" fill="none" stroke="#1565C0" stroke-width="1.5" opacity="0.5"/>
    <path d="M55 40 Q58 48 55 56" fill="none" stroke="#1565C0" stroke-width="1.5" opacity="0.5"/>
    <path d="M65 42 Q68 48 65 54" fill="none" stroke="#1565C0" stroke-width="1.5" opacity="0.5"/>
  </svg>`
}

export function chicken() {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="48" cy="45" rx="25" ry="22" fill="#D4A056" stroke="#8B6914" stroke-width="3"/>
    <ellipse cx="46" cy="43" rx="23" ry="20" fill="#E8C170"/>
    <rect x="42" y="62" width="12" height="22" rx="3" fill="#E8C170" stroke="#8B6914" stroke-width="2.5"/>
    <circle cx="48" cy="85" r="5" fill="#E8C170" stroke="#8B6914" stroke-width="2.5"/>
    <path d="M35 35 Q40 30 48 32" fill="none" stroke="#C9A04E" stroke-width="1.5" opacity="0.5"/>
    <path d="M55 38 Q52 33 48 32" fill="none" stroke="#C9A04E" stroke-width="1.5" opacity="0.5"/>
  </svg>`
}

export function egg() {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 15 Q30 15 25 45 Q20 70 35 82 Q45 90 50 90 Q55 90 65 82 Q80 70 75 45 Q70 15 50 15Z"
          fill="#FFF8E1" stroke="#BCAAA4" stroke-width="3"/>
    <path d="M50 18 Q34 18 28 45 Q24 65 38 78" fill="#FFFFFF" stroke="none" opacity="0.5"/>
  </svg>`
}

export function banana() {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 20 Q25 25 22 40 Q18 60 30 75 Q42 88 60 85 Q75 82 80 70 Q82 62 75 60 Q60 65 45 58 Q30 48 32 30 Q33 22 30 20Z"
          fill="#FFE135" stroke="#F9A825" stroke-width="3"/>
    <path d="M32 25 Q28 35 26 48 Q24 62 34 72 Q44 82 58 80" fill="#FFF176" stroke="none" opacity="0.5"/>
    <path d="M30 20 Q32 15 38 14" fill="none" stroke="#8B6914" stroke-width="3" stroke-linecap="round"/>
  </svg>`
}

export function nuts() {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="35" cy="55" rx="16" ry="12" fill="#8B6914" stroke="#5D4037" stroke-width="2.5"/>
    <ellipse cx="34" cy="53" rx="14" ry="10" fill="#A0845C"/>
    <path d="M25 53 Q35 48 45 53" fill="none" stroke="#6D4C41" stroke-width="1.5"/>
    <ellipse cx="62" cy="50" rx="16" ry="12" fill="#8B6914" stroke="#5D4037" stroke-width="2.5"/>
    <ellipse cx="61" cy="48" rx="14" ry="10" fill="#A0845C"/>
    <path d="M52 48 Q62 43 72 48" fill="none" stroke="#6D4C41" stroke-width="1.5"/>
    <ellipse cx="48" cy="70" rx="14" ry="10" fill="#6D4C41" stroke="#5D4037" stroke-width="2.5"/>
    <ellipse cx="47" cy="68" rx="12" ry="8" fill="#8B6914"/>
    <path d="M40 68 Q48 64 56 68" fill="none" stroke="#5D4037" stroke-width="1.5"/>
  </svg>`
}
