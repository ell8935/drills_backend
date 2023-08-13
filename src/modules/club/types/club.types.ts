export interface CreateClubProps {
  clubName: string;
  sport: string;
  clubManager: string;
  clubAdmin: string;
  teamsCount?: number;
  playersCount?: number;
  league: string;
  city: string;
  country: string;
  logo?: string;
  description?: string;
  contactInformation: string;
}
