import { Router } from 'express';
const router = Router();

router.get('/', function (req, res) {
    res.render('../Frontend/views/pages/index')
});
router.get('/iniciarSesion', function (req, res) {
    res.render('../Frontend/views/pages/iniciarSesion')
});
router.get('/oficios', function (req, res) {
    res.render('../Frontend/views/pages/oficios')
});
router.get('/registro', function (req, res) {
    res.render('../Frontend/views/pages/registro')
});

export default router;