import { getRepository } from "typeorm";
import Experience from "../models/Experience";

interface IExperience {
    level: number;
    completedChallenges: number;
    points: number;
}

class ExperienceService {
    public async execute(): Promise<IExperience> {
        const experienceRepository = getRepository(Experience);

        const experience = experienceRepository.create({
            level: 1,
            points: 0,
            completedChallenges: 0,
        });

        await experienceRepository.save(experience);

        return experience;
    }
}

export default ExperienceService;