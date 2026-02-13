'use client';

import { Eye, EyeOff } from 'lucide-react';

interface PasswordVisibilityToggleProps {
  show: boolean;
  onToggle: () => void;
}

const PasswordVisibilityToggle = ({ show, onToggle }: PasswordVisibilityToggleProps) => (
  <button
    type="button"
    onClick={onToggle}
    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
  >
    {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
  </button>
);

export default PasswordVisibilityToggle;
