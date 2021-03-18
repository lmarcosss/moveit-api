import { getRepository } from 'typeorm';

import User from '../models/User';
import CreateExperienceService from './CreateExperienceService';
import GithubService from './GithubService';

interface Request {
    username: string;
}

interface IExperience {
    level: number;
    completedChallenges: number;
    points: number;
}

interface IUser {
    name: string;
    avatarURL: string;
    experience: IExperience;
}

const githubService = new GithubService()
const experienceService = new CreateExperienceService()

class LoginService {
    public async execute({
        username,
    }: Request): Promise<IUser> {
        const userRepository = getRepository(User);

        const user = await userRepository.findOne({ username });

        if (!user) {
            const { avatar_url, name } = await githubService.execute({ username });

            const experience = await experienceService.execute();

            const newUser = userRepository.create({
                username,
                name,
                avatarURL: avatar_url,
                experience,
            });

            await userRepository.save(newUser);

            return newUser;
        };

        return user;
    };
  };
  
  export default LoginService;