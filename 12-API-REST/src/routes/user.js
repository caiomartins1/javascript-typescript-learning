import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.store);

export default router;

/**
 * @Controller methods:
 *  - Index -> list all resources | @GET
 *  - Store/Create -> create a new resource | @POST
 *  - Delete/Destroy -> delete a resource | @DELETE
 *  - Show/Detail -> show a resource | @GET
 *  - Update -> update a resource | @PATH or @PUT
 */
