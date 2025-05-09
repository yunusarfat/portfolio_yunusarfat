// components/ui/badge.js
const Badge = ({ children, className }) => (
  <span className={`px-2 py-1 text-sm font-medium rounded-full ${className}`}>
    {children}
  </span>
);

export { Badge };
