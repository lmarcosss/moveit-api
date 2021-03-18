import axios from "axios";
import AppError from "../errors/AppError";

interface User {
    name: string;
    avatar_url: string;
}

interface Request {
    username: string;
}

class GithubService {
    public async execute({
        username,
    }: Request): Promise<User> {
        try {
            const { data } = await axios.get(`${process.env.GITHUB}/users/${username}`);

            return data;
        } catch (error) {
            throw new AppError('username does not exists in Github.', 404);
        }
    }
}

export default GithubService;