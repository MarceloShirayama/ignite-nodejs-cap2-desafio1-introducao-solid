import { Request, Response } from "express";

import { IRequest } from "../turnUserAdmin/TurnUserAdminUseCase";
import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = (request.headers as unknown) as IRequest;

    try {
      const users = this.listAllUsersUseCase.execute({ user_id });

      return response.send(users);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListAllUsersController };
