/**
 * Animated bonfire SVG with flickering flames.
 */
export function renderBonfire() {
  return `
    <svg class="bonfire-svg" viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg">
      <style>
        .flame-1 { animation: flicker1 0.8s ease-in-out infinite alternate; transform-origin: 60px 90px; }
        .flame-2 { animation: flicker2 1.0s ease-in-out infinite alternate; transform-origin: 60px 90px; }
        .flame-3 { animation: flicker3 0.6s ease-in-out infinite alternate; transform-origin: 60px 90px; }

        @keyframes flicker1 {
          0% { transform: scaleX(1) scaleY(1); }
          100% { transform: scaleX(0.92) scaleY(1.06); }
        }
        @keyframes flicker2 {
          0% { transform: scaleX(1) scaleY(1) translateX(0); }
          100% { transform: scaleX(1.05) scaleY(0.95) translateX(2px); }
        }
        @keyframes flicker3 {
          0% { transform: scaleX(1) scaleY(1) translateX(0); }
          100% { transform: scaleX(0.95) scaleY(1.08) translateX(-2px); }
        }
      </style>

      <!-- Logs -->
      <ellipse cx="40" cy="125" rx="28" ry="8" fill="#5D4037" stroke="#3E2723" stroke-width="2"/>
      <ellipse cx="80" cy="125" rx="28" ry="8" fill="#6D4C41" stroke="#3E2723" stroke-width="2"/>
      <ellipse cx="60" cy="118" rx="24" ry="7" fill="#4E342E" stroke="#3E2723" stroke-width="2"/>

      <!-- Outer flame (orange) -->
      <path class="flame-1"
            d="M60 20 Q35 50 30 75 Q25 100 45 110 Q55 115 60 112 Q65 115 75 110 Q95 100 90 75 Q85 50 60 20Z"
            fill="#FF6B35" opacity="0.9"/>

      <!-- Middle flame (orange-yellow) -->
      <path class="flame-2"
            d="M60 30 Q42 55 38 75 Q35 95 50 105 Q58 108 60 106 Q62 108 70 105 Q85 95 82 75 Q78 55 60 30Z"
            fill="#FF9800" opacity="0.9"/>

      <!-- Inner flame (yellow) -->
      <path class="flame-3"
            d="M60 42 Q48 60 46 78 Q44 92 54 98 Q58 100 60 99 Q62 100 66 98 Q76 92 74 78 Q72 60 60 42Z"
            fill="#FFEB3B" opacity="0.9"/>

      <!-- Bright core -->
      <ellipse cx="60" cy="95" rx="10" ry="8" fill="#FFF9C4" opacity="0.7"/>

      <!-- Sparks -->
      <circle cx="45" cy="40" r="2" fill="#FF6B35" opacity="0.6">
        <animate attributeName="cy" values="40;25;40" dur="1.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.6;0;0.6" dur="1.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="72" cy="35" r="1.5" fill="#FFEB3B" opacity="0.5">
        <animate attributeName="cy" values="35;18;35" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="55" cy="30" r="1.5" fill="#FF9800" opacity="0.4">
        <animate attributeName="cy" values="30;12;30" dur="1.8s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.4;0;0.4" dur="1.8s" repeatCount="indefinite"/>
      </circle>
    </svg>
  `
}
