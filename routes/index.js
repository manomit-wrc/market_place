module.exports = function(app, passport, models) {

	// =====================================
	// Login PAGE (with login links) ========
	// =====================================

	app.get('/', function(req, res){
		res.render('frontend/index',{layout:false}); 
	});
	app.get('/about', function(req, res){
		res.render('frontend/index',{layout:false}); 
	});

	app.get('/home-content', function(req, res){
		Promise.all([
		    models.testimonial.findAll(),
		    models.banner.findAll()
		  ]).then(function(values) {
		    var result = JSON.parse(JSON.stringify(values));
		    var bannerArray = [];
		    for(var i=0;i<result[1].length;i++) {
		    	bannerArray.push({ src: "/banner/resize/"+result[1][i].banner_image});
		    }
		    
		    res.send({testimonials: result[0], banner: bannerArray});
		  });
	});

	app.get('/admin', function(req, res) {

		var msg = req.flash('loginMessage')[0];
		res.render('admin/login',{layout:'login',message: msg}); 
	});

	

	// process the login form
	app.post('/admin', passport.authenticate('local-login', {
            successRedirect : '/admin/dashboard', // redirect to the secure profile section
            failureRedirect : '/admin', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
		}),
        function(req, res) {
            console.log("hello");

            if (req.body.remember_me) {
              req.session.cookie.maxAge = 1000 * 60 * 3;
            } else {
              req.session.cookie.expires = false;
            }
        res.redirect('/admin');
    });

	
	
};

// route middleware to make sure
