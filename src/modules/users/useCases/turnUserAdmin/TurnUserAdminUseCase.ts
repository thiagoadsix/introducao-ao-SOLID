import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userExists = this.usersRepository.findById(user_id);

    if (!userExists) throw new Error("This users doesn't exists.");

    if (userExists.admin === true)
      throw new Error("this user is already an admin.");

    const user = this.usersRepository.turnAdmin(userExists);

    return user;
  }
}

export { TurnUserAdminUseCase };
