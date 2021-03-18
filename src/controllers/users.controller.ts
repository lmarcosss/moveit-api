import { Request, Response } from 'express';
import LoginService from '../services/LoginService';

const loginService = new LoginService();

class UserController {
    static async create(request: Request, response: Response) {
        try {
            const { username } = request.body;

            const data = await loginService.execute({ username });

            return response.json(data);
        } catch (error) {
            return response.status(404).json({ message: error.message });
        }
    }

    static async execute(request: Request, response: Response) {
        const { username } = request.params;

        return response.json({
            ok: username
        });
    };
};

export default UserController;