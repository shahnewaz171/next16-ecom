import { UserRound } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { checkUserLoggedIn } from '@/features/authentication/auth-queries';
import LogoutButton from '@/features/authentication/components/LogoutButton';
import { getUserProfile } from '@/features/user/user-queries';

const UserProfile = async () => {
  const isLoggedIn = await checkUserLoggedIn();

  if (!isLoggedIn) {
    return (
      <Link href="/login">
        <Button variant="outline" size="sm">
          Sign In
        </Button>
      </Link>
    );
  }

  const user = await getUserProfile();

  return (
    <div className="flex items-center space-x-2">
      <Link
        href="/profile"
        title="View Profile"
        className="flex items-center justify-center size-9 rounded-full bg-muted text-primary hover:ring-2 hover:ring-primary/30 transition-all"
      >
        <UserRound aria-hidden className="size-5" />
      </Link>
      <div className="hidden sm:block text-sm">
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
      <div className="size-9 bg-muted rounded-full" />
      <div className="space-y-1">
        <div className="w-15.5 h-3 bg-muted rounded" />
        <div className="w-10 h-3 bg-muted rounded" />
      </div>
    </div>
  );
}
