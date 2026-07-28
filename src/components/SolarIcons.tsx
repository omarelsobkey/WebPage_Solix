export function SolarPanelIcon({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <rect x="4" y="4" width="40" height="40" rx="4" className="fill-solix-gold/20 stroke-solix-gold" strokeWidth="1.5" />
      <line x1="14" y1="24" x2="34" y2="24" className="stroke-solix-gold" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="24" y1="14" x2="24" y2="34" className="stroke-solix-gold" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="17.2" y1="17.2" x2="30.8" y2="30.8" className="stroke-solix-gold" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="30.8" y1="17.2" x2="17.2" y2="30.8" className="stroke-solix-gold" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function SunIcon({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="8" className="fill-solix-gold" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <line
          key={i}
          x1="24"
          y1="6"
          x2="24"
          y2="11"
          className="stroke-solix-gold"
          strokeWidth="2"
          strokeLinecap="round"
          transform={`rotate(${angle} 24 24)`}
        />
      ))}
    </svg>
  );
}

export function InstallationIcon({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="16" className="stroke-solix-gold" strokeWidth="1.5" fill="none" />
      <path d="M20 28L16 24L20 20" className="stroke-solix-gold" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28 20L32 24L28 28" className="stroke-solix-gold" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="22" y1="18" x2="26" y2="30" className="stroke-solix-gold" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function ConsultingIcon({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <rect x="8" y="10" width="32" height="28" rx="3" className="stroke-solix-gold" strokeWidth="1.5" fill="none" />
      <line x1="16" y1="18" x2="32" y2="18" className="stroke-solix-gold" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="24" x2="28" y2="24" className="stroke-solix-gold" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="30" x2="24" y2="30" className="stroke-solix-gold" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M36 34L40 38" className="stroke-solix-gold" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function MaintenanceIcon({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="14" className="stroke-solix-gold" strokeWidth="1.5" fill="none" strokeDasharray="4 3" />
      <circle cx="24" cy="24" r="6" className="fill-solix-gold/20 stroke-solix-gold" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="2" className="fill-solix-gold" />
    </svg>
  );
}

export function RecycleIcon({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <path d="M24 6L14 26H34L24 6Z" className="stroke-solix-gold" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      <path d="M24 42L34 22H14L24 42Z" className="stroke-solix-gold" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      <path d="M8 16L24 20L14 30L8 16Z" className="stroke-solix-gold" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      <path d="M40 16L24 20L34 30L40 16Z" className="stroke-solix-gold" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export const serviceIcons = [
  SolarPanelIcon,
  InstallationIcon,
  ConsultingIcon,
  MaintenanceIcon,
  RecycleIcon,
];
