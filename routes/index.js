var express = require( 'express' );
var router = express.Router();

/* GET home page. */
router.get( '/', function ( req, res ) {
	var temp; 
	
	res.render( 'index', {
		title: 'Sample Node.js App (Express)'
	} );
} );

module.exports = router;
