import { getRepository } from "typeorm";
import AppError from "../errors/AppError";
import Experience from "../models/Experience";

interface IExperience {
    level: number;
    completedChallenges: number;
    points: number;
}

interface Request {
    id: string;
    level: number;
    completedChallenges: number;
    points: number;
}

class LevelUpService {
    public async execute({ id, points, completedChallenges, level }: Request): Promise<IExperience> {
        const experienceRepository = getRepository(Experience);

        const experience = await experienceRepository.findOne(id);

        if (!experience) {
            throw new AppError('Experience does not exist!')
        };

        experienceRepository.save({
            id,
            level,
            points,
            completedChallenges,
        });

        return experience;
    }
}

export default LevelUpService;