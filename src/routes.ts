import { Router } from 'express';
import multer from 'multer';
import uploadConfig from './config/upload';

import OrphanagesController from './controllers/OrphanagesControllers';

const routes = Router();

const upload = multer(uploadConfig);

routes.post('/orphanages', upload.array('images'), OrphanagesController.create);
routes.get('/orphanages', OrphanagesController.show);
routes.get('/orphanages/:id', OrphanagesController.index);

export default routes;
