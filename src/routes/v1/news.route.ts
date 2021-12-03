import express from 'express';
import { createResource, findResource, findOneResource, patchResource, deleteResource } from '../../services/news.service';
import { handleAsync, EntityNotFoundError } from '../../shared/common';
import valMiddleware from '../../middlewares/validation.middleware'
import { NewsValidator } from '../../models/news.entity'


let router = express.Router( );

// API Endpoint '/news' (temporary)
router.post(`/`,(req, res) => {
    res.send( `${req.method} method called on news ${req.path}` );
});
router.get(`/`,(req, res) => {
    res.send( `${req.method} method called on news ${req.path}` );
});
router.get(`/:id`,(req, res) => {
    res.send( `${req.method} method called on news ${req.path}` );
});
router.patch(`/:id`,(req, res) => {
    res.send( `${req.method} method called on news ${req.path}` );
});
router.delete(`/:id`,(req, res) => {
    res.send( `${req.method} method called on news ${req.path}` );
});

// // API Endpoint '/news'
// router.post('/', valMiddleware( NewsValidator ), async (req, res, next) => {

//     const model = req.body;
  
//     // Call service 
//     const [ newResource, error ] = await handleAsync( createResource(model) );
//     if ( error ) return next( error );

//     res.send( newResource );
// });  

// router.get('/', async (req, res, next) => {

// // Retreive fields from Query params
//     let options: any = req.query;
    
//     // Call service
//     const [ allResources, error ] = await handleAsync( findResource(options) );
//     if ( error ) return next( error );

//     res.send( allResources );
    
// });  

// router.get(`/:id`, async(req, res, next) => {

//     // Retreive id from Route params
//     const id = Number( req.params.id );

//     let options: any = req.query;

//     // Call service
//     const [ resource, error ] = await handleAsync( findOneResource(id, options) );
//     if ( error ) return next( error );

//     if ( resource ) {
//         res.send( resource );
//     } else {
//         next( new EntityNotFoundError(id, `news.route -> get/:id`) );
//     }
// });  
    
// router.patch('/:id', valMiddleware( NewsValidator, {skipMissingProperties: true} ), async(req, res, next) => {

//     const id = Number( req.params.id );
//     const patchedModel = req.body;

//     // Call service
//     const [ resource, error ] = await handleAsync( patchResource(id, patchedModel) ) ;
//     if ( error ) return next( error );

//     if ( resource ) {
//         res.send( resource );
//     } else {
//         next(new EntityNotFoundError(id, `news.route -> patch`) );
//     }
// });  
   
// router.delete('/:id', async(req, res, next) => {

//     const id = Number( req.params.id );

//     // Call service
//     const [ result, error ] = await handleAsync( deleteResource(id) ) ;
//     if ( error ) return next( error );

//     if ( result.affected === 1 ) {
//         res.send( {deleted : true} );
//     } else {
//         next( new EntityNotFoundError(id, `products.route -> delete`) );
//     }
// });

    
export default router;
