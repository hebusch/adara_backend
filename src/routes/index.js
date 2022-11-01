const router = require('express').Router();

router.get('/', (req, res) => {
    try{
        res.status(200).json({
            status: 200,
            message: 'Adara API',
            data: {}
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Internal Server Error',
            data: {}
        });
    }
});

module.exports = router;