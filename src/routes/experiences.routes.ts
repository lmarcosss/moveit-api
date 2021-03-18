import { Router } from 'express';
import ExperienceController from '../controllers/experiences.controller';

const experincesRoutes = Router();

experincesRoutes.put('/level-up', ExperienceController.update);


export default experincesRoutes;
