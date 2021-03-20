import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.headers;

      const user = this.listAllUsersUseCase.execute({
        user_id: user_id.toString(),
      });

      return response.json(user);
    } catch ({ message }) {
      return response.status(400).json({ error: message });
    }
  }
}

export { ListAllUsersController };
