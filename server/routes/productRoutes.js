import { Router } from 'express';
import { getAllProducts, createProduct } from '../controllers/productController';

const router = Router();

router.route('/products').get(getAllProducts);

router.route('/product/new').post(createProduct);

export default router;