import { Request, Response } from 'express';
import LevelUpService from '../services/LevelUpService';

const levelUpService = new LevelUpService();

class UserController {
    static async update(request: Request, response: Response) {
        try {
            const { id, level, points, completedChallenges } = request.body;

            await levelUpService.execute({ id, level, points, completedChallenges });

            return response.status(200).json({ ok: true })
        } catch (error) {
            return response.status(404).json({ message: error.message });
        }
    }
};

export default UserController;