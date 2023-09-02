export type RolesNames = 'manager' | 'trainer' | 'player';
export type RolesIds = 11 | 22 | 33;

export interface UserRole {
  roleId: RolesIds;
  roleName: RolesNames;
  description: string;
}

export type StatusOptions = 'Placeholder' | 'Active';
