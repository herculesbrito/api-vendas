import { EntityRepository, Repository } from 'typeorm';
import UserToken from '../entities/UserToken';

@EntityRepository(UserToken)
class UserTokensRepository extends Repository<UserToken> {
  public async findByToken(token: string): Promise<UserToken | undefined> {
    const tokenToken = await this.findOne({
      where: {
        token,
      },
    });

    return tokenToken;
  }

  public async generate(user_id: string): Promise<UserToken> {
    const tokenToken = await this.create({
      user_id,
    });

    await this.save(tokenToken);

    return tokenToken;
  }
}

export default UserTokensRepository;
