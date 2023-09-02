import { UserClubRole } from 'src/modules/users/entitys/UserClubRole.entity';

export interface CreateClubProps {
  clubName: string;
  sport: string;
  league: string;
  city: string;
  country: string;
  logo: string;
  description: string;
  foundedAt: string;
  website: string;
  email: string;
  phoneNumber: string;
}

export interface RequestToJoinClubProps {
  userId: string;
  clubId: string;
}

export interface CreatePlaceholderProps extends UserClubRole {
  fullName: string;
}
