import { Card, CardContent } from '@/components/ui/card';
import { MotionDiv } from '@/components/ui/Motion';
import { getUserStats } from '@/features/user/user-queries';
import { getUidWithPrefix } from '@/utils';
import { fadeUp } from '@/utils/motion';

const QuickStats = async () => {
  'use cache';

  const quickStats = await getUserStats();

  return (
    <MotionDiv variants={fadeUp}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickStats.map((stat) => (
          <Card key={stat.label} hover="lift" className="cursor-pointer">
            <CardContent className="flex items-center gap-3 p-4">
              <div className={`p-2 rounded-lg bg-muted ${stat.color}`}>
                <stat.icon className="size-5" />
              </div>
              <div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </MotionDiv>
  );
};

export default QuickStats;

export function QuickStatsSkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-pulse">
      {Array.from({ length: 4 }).map((_, i) => (
        <Card key={getUidWithPrefix('quick-stat-skeleton', i)}>
          <CardContent className="flex items-center gap-3 p-4">
            <div className="p-2 rounded-lg bg-muted size-10" />
            <div className="space-y-2 flex-1">
              <div className="h-5 w-16 bg-muted rounded" />
              <div className="h-3 w-24 bg-muted rounded" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
