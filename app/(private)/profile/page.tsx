import { Calendar, Mail, MapPin, Phone, Settings, UserRound } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import LogoutButton from '@/features/authentication/components/LogoutButton';
import { getUserProfile } from '@/features/user/user-queries';

export default async function ProfilePage() {
  const user = await getUserProfile();
  const { id, name, email, phone, address, birthDate } = user || {};

  const memberSince =
    birthDate &&
    new Date(birthDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

  return (
    <div>
      <Card variant="elevated" padding="lg">
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          {/* Avatar */}
          <div className="flex flex-col items-center gap-3">
            <div className="relative">
              <div className="size-24 rounded-full bg-linear-to-br from-primary/30 to-accent/30 flex items-center justify-center ring-4 ring-primary/20">
                <UserRound className="size-12 text-primary" />
              </div>
              <div className="absolute -bottom-1 -right-1 size-6 rounded-full bg-(--success) border-2 border-background" />
            </div>
            <Badge variant="info" size="sm">
              Premium Member
            </Badge>
          </div>

          {/* User Info */}
          <div className="flex-1 space-y-4">
            <div>
              <h2 className="text-2xl font-bold">{name}</h2>
              <p className="text-muted-foreground text-sm">Customer ID: {id}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="size-4 text-primary" />
                <span>{email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="size-4 text-primary" />
                <span>{phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="size-4 text-primary" />
                <span>{address}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="size-4 text-primary" />
                <span>Born {memberSince}</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-row md:flex-col gap-2">
            <Button variant="outline" size="sm" icon={<Settings className="size-4" />}>
              Edit Profile
            </Button>
            <LogoutButton />
          </div>
        </div>
      </Card>
    </div>
  );
}
