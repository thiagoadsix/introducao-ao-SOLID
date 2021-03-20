import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { name, email } = request.body;

      const { admin } = this.createUserUseCase.execute({
        name,
        email,
      });

      return response.status(201).json({ admin, email, name });
    } catch (error) {
      return response
        .status(400)
        .json({ error: "Something happen in your UserController or UseCase." });
    }
  }
}

export { CreateUserController };
