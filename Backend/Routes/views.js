import { Router } from 'express';
const router = Router();

router.get('/', function (req, res) {
    res.render('../Frontend/views/pages/index')
});

export default router;