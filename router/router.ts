import {Router,Request,Response} from 'express';
import bodyParser from 'body-parser';

export const router=Router();

router.get('/mensajes',(req:Request,res:Response)=>{
    res.json({
        ok:true,
        mensaje:'todo est bien!'
    });
});


router.post('/mensajes',(req:Request,res:Response)=>{
    const cuerpo=req.body.cuerpo;
    const de=req.body.de; 
    res.json({
        ok:true,
        cuerpo,
        de
    });
});



router.post('/mensajes/:id',(req:Request,res:Response)=>{
    const cuerpo=req.body.cuerpo;
    const de=req.body.de; 
    const id =req.params.id;

    res.json({
        ok:true,
        cuerpo,
        de,
        id
    });
});

export default router;
