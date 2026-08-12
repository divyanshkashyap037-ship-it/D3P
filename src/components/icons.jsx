// ai for the svg path
export function Asterisk({ className, color = "#fff" }) {
  return (
    <svg className={className} viewBox="0 0 12.853 13.293" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M 5.507 13.286 L 5.479 8.406 L 1.766 11.174 L 0 7.758 L 4.357 6.267 L 0.731 3.534 L 3.409 0.773 L 6.027 4.5 L 7.489 0 L 10.871 1.836 L 8.165 5.687 L 12.853 5.722 L 12.244 9.538 L 7.834 8.013 L 9.268 12.672 L 5.52 13.293 Z"
        fill={color}
      />
    </svg>
  );
}

export function AsteriskOrange({ className }) {
  return (
    <svg className={className} viewBox="0 0 14.45 14.66" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M 6.2 14.66 L 6.17 9.28 L 1.99 12.33 L 0 8.56 L 4.9 6.92 L 0.82 3.91 L 3.83 0.86 L 6.78 4.97 L 8.43 0 L 12.23 2.02 L 9.18 6.27 L 14.45 6.3 L 13.76 10.51 L 8.79 8.83 L 10.4 13.97 L 6.19 14.66 Z"
        fill="#fe3c01"
      />
    </svg>
  );
}

export function ArrowIcon({ className, stroke = "#fff", strokeWidth = 2 }) {
  return (
    <svg className={className} role="presentation" viewBox="0 0 24 24">
      <g fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" transform="translate(3 3)">
        <path d="M 13.68 6.952 C 13.765 7.081 13.865 7.204 13.979 7.318 C 14.899 8.238 16.39 8.238 17.31 7.318 C 18.23 6.398 18.23 4.907 17.31 3.987 C 16.765 3.442 16.02 3.22 15.312 3.321 C 15.059 3.357 14.812 3.434 14.58 3.551 C 14.5 3.592 14.377 3.657 14.301 3.707 C 14.351 3.631 14.408 3.5 14.449 3.42 C 14.566 3.188 14.643 2.941 14.679 2.688 C 14.78 1.98 14.558 1.235 14.013 0.69 C 13.093 -0.23 11.602 -0.23 10.682 0.69 C 9.762 1.61 9.762 3.101 10.682 4.021 C 10.796 4.135 10.809 4.145 10.982 4.32 L 4.32 10.982 C 4.129 10.789 4.135 10.796 4.021 10.682 C 3.101 9.762 1.61 9.762 0.69 10.682 C -0.23 11.602 -0.23 13.093 0.69 14.013 C 1.235 14.558 1.98 14.78 2.688 14.679 C 2.941 14.643 3.188 14.566 3.42 14.449 C 3.5 14.408 3.62 14.347 3.695 14.297 C 3.645 14.373 3.592 14.5 3.551 14.58 C 3.434 14.812 3.357 15.059 3.321 15.312 C 3.22 16.02 3.442 16.765 3.987 17.31 C 4.907 18.23 6.398 18.23 7.318 17.31 C 8.238 16.39 8.238 14.899 7.318 13.979 C 7.204 13.865 7.137 13.801 6.985 13.646 L 13.646 6.985" />
      </g>
    </svg>
  );
}

export function DragIcon({ className, stroke = "#fff" }) {
  return (
    <svg className={className} role="presentation" viewBox="0 0 24 24">
      <g fill="none" stroke={stroke} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M2 12h20M4.5 4.5l15 15M19.5 4.5l-15 15" />
      </g>
    </svg>
  );
}

export function HomeIcon({ className, stroke = "#fff" }) {
  return (
    <svg className={className} role="presentation" viewBox="0 0 24 24">
      <g fill="none" stroke={stroke} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5.5 9.5V21h13V9.5" />
        <path d="M10 21v-6h4v6" />
      </g>
    </svg>
  );
}

export function PlayIcon({ className, fill = "#fff" }) {
  return (
    <svg className={className} role="presentation" viewBox="0 0 24 24">
      <path d="M8 5.14v13.72c0 .8.87 1.3 1.56.9l10.9-6.86a1.06 1.06 0 0 0 0-1.8L9.56 4.24A1.06 1.06 0 0 0 8 5.14Z" fill={fill} />
    </svg>
  );
}
