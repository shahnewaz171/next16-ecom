'use client';

import { Droplets, Layers, Square } from 'lucide-react';
import { type BoundaryMode, useBoundaryMode } from '@/components/core/BoundaryProvider';
import { cn } from '@/utils/cn';

const modes = [
  { value: 'hydration', label: 'Hydration', icon: <Droplets className="h-4 w-4" /> },
  { value: 'rendering', label: 'Rendering', icon: <Layers className="h-4 w-4" /> },
  { value: 'off', label: 'Off', icon: <Square className="h-4 w-4" /> }
];

function BoundaryToggle() {
  const { mode, setMode } = useBoundaryMode();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <div className="container mx-auto px-4 py-3">
        <div className="w-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">Rendering Mode:</span>
              <div className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
                {modes.map(({ value, label, icon }) => {
                  const isActive = mode === value;

                  return (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setMode(value as BoundaryMode)}
                      className={cn(
                        'relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
                        isActive ? 'text-foreground' : 'hover:text-foreground'
                      )}
                    >
                      {isActive && (
                        <div className="absolute inset-0 bg-background rounded-sm shadow-sm" />
                      )}
                      <span className="relative z-10">
                        <div className="inline-flex items-center gap-2">
                          {icon}
                          <span className="hidden sm:inline">{label}</span>
                        </div>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoundaryToggle;
