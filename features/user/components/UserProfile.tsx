import { UserRound } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import LogoutButton from '@/features/authentication/components/LogoutButton';
import { getUserProfile } from '@/features/user/user-queries';

const UserProfile = async () => {
  const user = await getUserProfile();

  if (!user) {
    return (
      <Link href="/login">
        <Button variant="outline" size="sm">
          Sign In
        </Button>
      </Link>
    );
  }

  return (
    <div className="flex items-center space-x-2">
      <UserRound aria-hidden className="size-8 rounded-full bg-muted text-primary" />
      <div className="text-sm">
        <div className="font-medium">{user.name}</div>

        {/* logout */}
        <LogoutButton />
      </div>
    </div>
  );
};

export default UserProfile;

export function UserProfileSkeleton() {
  return (
    <div className="flex items-center space-x-2 animate-pulse">
      <div className="w-8 h-8 bg-muted rounded-full" />
      <div className="space-y-1">
        <div className="w-16 h-3 bg-muted rounded" />
        <div className="w-24 h-3 bg-muted rounded" />
      </div>
    </div>
  );
}
