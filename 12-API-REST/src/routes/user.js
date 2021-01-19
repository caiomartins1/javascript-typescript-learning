import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// This routes are not common in real applications for users
// router.get('/', userController.index);
// router.get('/:id', userController.show);

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/**
 * @Controller methods:
 *  - Index -> list all resources | @GET
 *  - Store/Create -> create a new resource | @POST
 *  - Delete/Destroy -> delete a resource | @DELETE
 *  - Show/Detail -> show a resource | @GET
 *  - Update -> update a resource | @PATH or @PUT
 */
