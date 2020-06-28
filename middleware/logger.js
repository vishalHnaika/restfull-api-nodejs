
/* Logger Middle ware function */
const logger = (req, res, next) => {
    console.log( `REQUEST : ${ req.method } ${ req.protocol }://${ req.get('host')}${ req.originalUrl }` );
    next();
};

module.exports = logger;