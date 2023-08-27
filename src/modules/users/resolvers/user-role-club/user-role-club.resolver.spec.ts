import { Test, TestingModule } from '@nestjs/testing';
import { UserRoleClubResolver } from './user-role-club.resolver';

describe('UserRoleClubResolver', () => {
  let resolver: UserRoleClubResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserRoleClubResolver],
    }).compile();

    resolver = module.get<UserRoleClubResolver>(UserRoleClubResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
