import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params;
      const userUpdated = this.turnUserAdminUseCase.execute({ user_id });

      return response.json(userUpdated);
    } catch (error) {
      return response
        .status(404)
        .json({ error: "Something happen in your UserController or UseCase." });
    }
  }
}

export { TurnUserAdminController };
