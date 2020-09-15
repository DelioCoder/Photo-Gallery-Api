import { Router } from 'express';
import { createPhoto, detelePhoto, getPhoto, getPhotos, updatePhoto } from '../controllers/photo.controller';
import multer from '../libs/multer';

const router = Router();

router.route('/photos')
    .get(getPhotos)
    .post(multer.single(''), createPhoto)

router.route('/photos/:id')
    .get(getPhoto)
    .put(updatePhoto)
    .delete(detelePhoto)

export default router;