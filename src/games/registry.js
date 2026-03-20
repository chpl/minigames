/**
 * Game registry - metadata only, modules are lazy-loaded.
 */
export const games = [
  {
    id: 'chametz',
    route: '/chametz',
    title: 'ביעור חמץ',
    subtitle: 'מה כשר לפסח ומה לא?',
    icon: `<svg viewBox="0 0 100 100" width="80" height="80">
      <!-- Matza -->
      <rect x="15" y="25" width="70" height="50" rx="8" fill="#F5DEB3" stroke="#8B7355" stroke-width="3"/>
      <line x1="25" y1="35" x2="25" y2="65" stroke="#D2B48C" stroke-width="2" stroke-dasharray="3,3"/>
      <line x1="40" y1="35" x2="40" y2="65" stroke="#D2B48C" stroke-width="2" stroke-dasharray="3,3"/>
      <line x1="55" y1="35" x2="55" y2="65" stroke="#D2B48C" stroke-width="2" stroke-dasharray="3,3"/>
      <line x1="70" y1="35" x2="70" y2="65" stroke="#D2B48C" stroke-width="2" stroke-dasharray="3,3"/>
      <circle cx="30" cy="42" r="2" fill="#C4A882"/>
      <circle cx="48" cy="55" r="2" fill="#C4A882"/>
      <circle cx="63" cy="40" r="2" fill="#C4A882"/>
      <circle cx="35" cy="58" r="2" fill="#C4A882"/>
      <circle cx="72" cy="52" r="2" fill="#C4A882"/>
      <!-- Flame -->
      <path d="M80 20 Q85 10 82 5 Q90 12 88 20 Q92 14 90 8 Q95 16 90 24 Q86 28 80 20Z" fill="#FF6B35" opacity="0.8"/>
    </svg>`,
  },
]
