module.exports = function(app, passport, models) {

	// =====================================
	// Login PAGE (with login links) ========
	// =====================================
	var fs = require('fs');
	app.get('/', function(req, res){
		res.render('frontend/index',{layout:false}); 
	});
	app.get('/about', function(req, res){
		res.render('frontend/index',{layout:false}); 
	});

	app.get('/home-content', function(req, res){
		Promise.all([
		    models.testimonial.findAll(),
		    models.banner.findAll(),
		    models.jobcategory.findAll()
		  ]).then(function(values) {
		    var result = JSON.parse(JSON.stringify(values));
		    var bannerArray = [];
		    var jobCategoryArr = [];
		    for(var i=0;i<result[1].length;i++) {
		    	bannerArray.push({ src: "/banner/resize/"+result[1][i].banner_image});
		    }

		    for(var i=0;i<result[2].length;i++) {
		    	jobCategoryArr.push({
		    		name: result[2][i].name,
		    		short_desc: result[2][i].short_desc,
		    		image_url: "/job_category_image/"+result[2][i].background_image
		    	});
		    }
		    res.send({testimonials: result[0], banner: bannerArray, jobcategories:jobCategoryArr});
		  });
	});

	app.get('/about-content', function(req, res){
		Promise.all([
			models.team.findAll(),
			models.story.findAll(),
			models.cms.findAll({ where: {slag:"about"}})
		]).then(function(values){
			var result = JSON.parse(JSON.stringify(values));
			var teamArr = [];
			for(var i=0;i<result[0].length;i++) {
				if (fs.existsSync("public/team/thumbs/"+result[0][i].image) && result[0][i].image != "") {
      				image = "/team/thumbs/"+result[0][i].image;
    			}
			    else {
			      	image = "/user2-160x160.jpg";
			    }
			    teamArr.push({
			    	name: result[0][i].name,
			    	designation: result[0][i].designation,
			    	description: result[0][i].description,
			    	image:image,
			    	facebook: (result[0][i].facebook != "" ? result[0][i].facebook : 'javascript:void(0)'), 
			    	linkedin: (result[0][i].linkedin != "" ? result[0][i].linkedin : 'javascript:void(0)'),
			    	twitter: (result[0][i].twitter != "" ? result[0][i].twitter : 'javascript:void(0)'),
			    	google_plus: (result[0][i].google_plus != "" ? result[0][i].google_plus : 'javascript:void(0)')
			    });
			}
			
			res.send({team:teamArr,stories:result[1], about:result[2][0].full_description});
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
