/**
 * Basket SVG for kosher-for-Passover items.
 */
export function renderBasket() {
  return `
    <svg class="basket-svg" viewBox="0 0 120 110" xmlns="http://www.w3.org/2000/svg">
      <!-- Handle -->
      <path d="M30 40 Q60 -5 90 40" fill="none" stroke="#6D4C41" stroke-width="5" stroke-linecap="round"/>
      <path d="M30 40 Q60 0 90 40" fill="none" stroke="#8D6E63" stroke-width="3" stroke-linecap="round"/>

      <!-- Basket body -->
      <path d="M15 42 L25 95 Q60 105 95 95 L105 42 Z" fill="#8D6E63" stroke="#5D4037" stroke-width="3"/>

      <!-- Weave pattern horizontal -->
      <line x1="18" y1="52" x2="102" y2="52" stroke="#6D4C41" stroke-width="2"/>
      <line x1="20" y1="62" x2="100" y2="62" stroke="#A1887F" stroke-width="2"/>
      <line x1="21" y1="72" x2="99" y2="72" stroke="#6D4C41" stroke-width="2"/>
      <line x1="23" y1="82" x2="97" y2="82" stroke="#A1887F" stroke-width="2"/>

      <!-- Weave pattern vertical -->
      <line x1="35" y1="42" x2="30" y2="95" stroke="#6D4C41" stroke-width="2" opacity="0.5"/>
      <line x1="55" y1="42" x2="52" y2="98" stroke="#A1887F" stroke-width="2" opacity="0.5"/>
      <line x1="75" y1="42" x2="72" y2="98" stroke="#6D4C41" stroke-width="2" opacity="0.5"/>
      <line x1="95" y1="42" x2="90" y2="95" stroke="#A1887F" stroke-width="2" opacity="0.5"/>

      <!-- Rim -->
      <rect x="12" y="38" width="96" height="8" rx="4" fill="#6D4C41" stroke="#5D4037" stroke-width="2"/>

      <!-- Highlight -->
      <path d="M20 48 L26 88" stroke="#A1887F" stroke-width="3" opacity="0.3" stroke-linecap="round"/>
    </svg>
  `
}
