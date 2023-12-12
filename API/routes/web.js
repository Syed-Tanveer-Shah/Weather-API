import express from 'express'
 const router = express.Router();
 import weathercontroller from '../controller/weathercontroller.js';

 router.get('/',weathercontroller.getAllDoc)
 router.get('/:Id',weathercontroller.getSingleDocById)
 router.post('/',weathercontroller.createDoc)
 router.put('/:Id',weathercontroller.updatDocById)
 router.delete('/:Id',weathercontroller.deleteDocById)

 export default router