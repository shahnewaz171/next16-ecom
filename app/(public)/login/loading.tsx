import { Card, CardContent } from '@/components/ui/card';

export default function Loading() {
  return (
    <Card variant="elevated" className="animate-pulse">
      <CardContent>
        <div className="space-y-6">
          {/* Email Field */}
          <div className="space-y-2">
            <div className="h-4 w-24 bg-muted rounded" />
            <div className="relative">
              <div className="h-10 w-full bg-muted rounded" />
            </div>
          </div>
          {/* Password Field */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="h-4 w-20 bg-muted rounded" />
              <div className="h-4 w-24 bg-muted rounded" />
            </div>
            <div className="relative">
              <div className="h-10 w-full bg-muted rounded" />
            </div>
          </div>

          {/* Submit Button */}
          <div className="h-10 w-full bg-muted rounded" />

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t bg-muted" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="h-2.5 w-2.5 rounded-2xl bg-muted mx-2" />
            </div>
          </div>

          {/* Sign Up Link */}
          <div className="text-center text-sm">
            <div className="h-4 w-32 bg-muted rounded mx-auto" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
