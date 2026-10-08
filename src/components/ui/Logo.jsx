import { Link } from 'react-router-dom';

export default function Logo({ className = '', showText = true }) {
  return (
    <Link to="/" className={`flex items-center gap-2.5 ${className}`}>
      <svg width="34" height="34" viewBox="0 0 64 64" aria-hidden="true">
        <rect width="64" height="64" rx="14" fill="#d97706" />
        <text x="32" y="42" textAnchor="middle" fontSize="28" fontFamily="system-ui" fill="#fff" fontWeight="700">S</text>
      </svg>
      {showText && <span className="font-display text-xl font-semibold tracking-tight text-ink">Scenequor</span>}
    </Link>
  );
}
