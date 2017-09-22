module.exports = function(app, passport, models) {
  
    var user = user;

	const encode = require('nodejs-base64-encode');

	//for image
 	var multer = require('multer');

 	/*var express = require('express');
	var http = require('http');
	var path = require('path');
	var fs = require('fs');
	var https = require("https");*/

	var im = require('imagemagick');
	var fileExt = '';
	var fileName = '';
	var storage = multer.diskStorage({
		destination: function (req, file, cb) {
			console.log('hello');
			console.log(file[0].fieldname);
			cb(null, 'public/vendor');
		},
		filename: function (req, file, cb) {
			fileExt = file.mimetype.split('/')[1];
			if (fileExt == 'jpeg') { fileExt = 'jpg'; }
			fileName = req.body.all.id + '-' + Date.now() + '.' + fileExt;
			//fileName = req.user.id + '-' + Date.now() + '.' + fileExt;
			cb(null, fileName);
		}
	});

	var restrictImgType = function(req, file, cb) {
	    var allowedTypes = ['image/jpeg','image/png','image/jpg'];
		if (allowedTypes.indexOf(req.file.mimetype) !== -1) {
			// To accept the file pass `true`
			cb(null, true);
		} else {
	        // To reject this file pass `false`
	        cb(null, false);
	       //cb(new Error('File type not allowed'));// How to pass an error?
		}
	};

	var upload = multer({ storage: storage, limits: {fileSize:2000000, fileFilter:restrictImgType} });   




//----------file upload end-------------------------------

   var md5=require('md5');
   var jwt=require('jwt-simple');
	// =====================================
	// Login PAGE (with login links) ========
	// =====================================
	var fs = require('fs');
	var md5 = require('md5');
	var jwt = require('jwt-simple');
	
	app.get('/', function(req, res){
		res.render('frontend/index',{layout:false}); 
	});
	app.get('/about', function(req, res){
		res.render('frontend/index',{layout:false}); 
	});
	app.get('/jobs', function(req, res){
		res.render('frontend/index',{layout:false}); 
	});

	app.get('/faq', function(req, res){
		res.render('frontend/index',{layout:false}); 
	});

	app.get('/work-details', function(req, res){
		res.render('frontend/index',{layout:false}); 
	});

	app.get('/contact', function(req, res){
		res.render('frontend/index',{layout:false}); 
	});

	app.get('/vendor/register', function(req, res){
		res.render('frontend/index',{layout:false}); 
	});

	app.get('/freelancer/register', function(req, res){
		res.render('frontend/index',{layout:false}); 
	});

	app.get('/blog', function(req, res){
		res.render('frontend/index',{layout:false}); 
	});

	app.get('/blog-details/:id', function (req,res){
		res.render('frontend/index',{layout:false}); 
	});

	app.get('/signup', function (req,res){
		res.render('frontend/index',{layout:false}); 
	});

	app.get('/login',function (req,res){
		res.render('frontend/index',{layout:false}); 
	});

	app.get('/freelancer-profile',function (req,res){
		res.render('frontend/index',{layout:false}); 
	});

	app.get('/jobpost' , function (req, res){
		res.render('frontend/index',{layout:false}); 
	});

	app.get('/vendor-profile',function (req,res){
		res.render('frontend/index',{layout:false}); 
	});

	app.get('/change-password',function (req,res){
		res.render('frontend/index',{layout:false}); 
	});

	app.get('/editjobpost', function (req,res){
		res.render('frontend/index',{layout:false});
	});

	app.get('/home-content', function(req, res){
		Promise.all([
		    models.testimonial.findAll(),
		    models.banner.findAll(),
		    models.jobcategory.findAll(),
		    models.organization.findAll()
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
		    res.send({testimonials: result[0], banner: bannerArray, jobcategories:jobCategoryArr, organization:result[3]});
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

	app.get("/faq-content", function(req, res){
		Promise.all([
			models.faqcategory.findAll()
		]).then(function(values){
			var result = JSON.parse(JSON.stringify(values));
			res.send({faq_category:result[0]});
		});
	});

	app.get("/work-content", function(req, res){
		Promise.all([
			models.work.findAll()
		]).then(function(values){
			var result = JSON.parse(JSON.stringify(values));
			//console.log(result[0]);
			res.send({work_details:result[0]});
		});
	});


    app.get("/get-type",function(res){
          console.log('hello how r u');
        var token = getToken(req.headers);
		   
		if (token) {
	         var decoded = jwt.decode(token, "W$q4=25*8%v-}UW");
	         var user_id=decoded[0].id;
	         var user_type=decoded[0].type;
	         console.log(user_type);
	         res.json({code:'100', success: true,type:user_type});
              /*models.user.findAll().then(function(user){
							res.json({code:'100', success: true,type: user[0].type});
						});*/
           }

     });

	app.get("/contact-content", function(req, res){
		Promise.all([
			models.organization.findAll()
		]).then(function(values){
			var result = JSON.parse(JSON.stringify(values));
			//console.log(result[0]);
			res.send({organization:result[0]});
		});
	});


	app.get("/blog-content", function (req,res){
		Promise.all([
			models.blog.findAll(),
			models.blogcategory.findAll()
		]).then(function(values){
			var result = JSON.parse(JSON.stringify(values));
			res.send({
				blog_content: result[0],
				blogcategory: result[1]
			});
		});
	});

	app.get('/blog_details', function (req,res){
		models.blogcomment.belongsTo(models.blog, {foreignKey: 'blog_id'});
		models.blogcomment.belongsTo(models.user, {foreignKey: 'user_id'});
		Promise.all([
			models.blog.findById(req.query.id),
			models.blogcomment.findAll({
				include: [
		            {
		              model: models.user
		            }
		        ],
			  	where: {
			  		blog_id: req.query.id
			  	}
			})
		]).then(function(values){
			var result = JSON.parse(JSON.stringify(values));
			var blog_detailsArr = [];
			var blog_commentsArr = [];
			//console.log(result[0]);
			//console.log(result[1]);
	    	blog_detailsArr.push({
	    		blog_name: result[0].blog_name,
	    		short_description: result[0].short_description,
	    		long_description: result[0].long_description,
	    		blog_image: "/blog/"+result[0].blog_image,
	    		createdAt: result[0].createdAt
	    	});

	    	for (var i=0;i<result[1].length;i++) {
	    		if (fs.existsSync("public/user/thumbs/"+result[1][i].user.image) && result[1][i].user.image != "") {
      				image = "/user/thumbs/"+result[1][i].user.image;
    			}
			    else {
			      	image = "/user2-160x160.jpg";
			    }
		    	blog_commentsArr.push({
		    		blog_comment: result[1][i].blog_comment,
		    		date: result[1][i].createdAt,
		    		name: result[1][i].user.fname+" "+result[1][i].user.lname,
		    		image: image
		    	});
		    }
			res.send({
				blog_details: blog_detailsArr,
				blog_comments: blog_commentsArr
			});
		});
	});

   app.get('/jobs-details', passport.authenticate('jwt', { session: false}), function (req,res) {
		
		var token = getToken(req.headers);
		var decoded = jwt.decode(token, "W$q4=25*8%v-}UW");
	    var user_id=decoded[0].id;
        
        //models.user.belongsTo(models.country, {foreignKey: 'country_id'});
       

		models.job.belongsTo(models.user, {foreignKey:'user_id'});
        models.job.belongsTo(models.jobcategory, {foreignKey: 'jobscategory_id'});

		//models.job.belongsTo(models.job_skill, {foreignKey: 'job_id'});
        //models.job_skill.hasMany(models.skill, {foreignKey: 'skill_id'});
		//models.skill.belongsTo(models.job_skill, {foreignKey: 'id'});
		
         models.user.belongsTo(models.country, {foreignKey:'country_id'});

         
         models.job_skill.belongsTo(models.job, {foreignKey: 'job_id'});
         models.job_skill.belongsTo(models.skill, {foreignKey: 'skill_id'});


		Promise.all([

			models.job.findAll({
				include: [
		            {
		              model: models.user
		            },
                    {
		              model: models.jobcategory
		            },
		           /* {
		              model: models.job_skill
		            },*/
		            /*{
		              model: models.skill
		            }*/
		        ],
			  	where: {
			  		user_id:user_id
			  	}
			}),

			models.user.findAll({
				include: [
		            {
		              model: models.country
		            }
                 ],
			  	where: {
			  		id:user_id
			  	}
			}),

			models.job_skill.findAll({
				include: [
		            {
		              model: models.job
		            },
		            {
		              model: models.skill
		            }
                 ],
			  	where: {
			  		id:user_id
			  	}
			})
			
		]).then(function(values){

			var result = JSON.parse(JSON.stringify(values));
		     console.log(result[0]);
		    //console.log(result[1]);
             //console.log(result[2]);
             res.send({
				jobs_data: result[0],
				country_name: result[1]
			});

		});
	});






	app.post("/vendor/register", function(req, res){
	    models.user.create({
			email:req.body.email,
			fname:req.body.fname,
			lname:req.body.lname,
			type:'V',
			status:1,
			password:md5(req.body.password)
		}).then(function(result){
			res.json({success: true, msg: 'Registration successfully'});
		}).catch(function(err){


     });
	});
         
	app.post('/change-password-check', passport.authenticate('jwt', { session: false}), function (req, res) {
		   
		   var oldPwd=req.body.oldpwd;
		   var newPwd=req.body.newpwd;
		   var confPwd=req.body.confpwd;
		   var token = getToken(req.headers);
		   
		if (token) {
	    var decoded = jwt.decode(token, "W$q4=25*8%v-}UW");
	         
	         var user_id=decoded[0].id;
	      if(decoded[0].password==md5(oldPwd))
	      {
	      	
			     if(newPwd==confPwd)
			      {	
			      		   models.user.update({
							password: md5(newPwd),
							
						           },{
							where: {
								 id: user_id
							}
						}).then(function(result){
							res.json({success: true, msg: 'Password Edited Successfully'});
						});
			     

			      }
			      else
			      {
			      	res.json({success: true, msg: 'New Password does not match with Confirm Password'});
			      }
	      }
	      else
	      {
	      	
	      		res.json({success: true, msg: 'Password does not match'});
	      }
		   
        }
		
	});



	app.post('/authenticate', function(req, res) {
		//console.log(req.body.email);

		models.user.findAll({
		  	where: {
		  		email: req.body.email,
	    		password: md5(req.body.password)
		  	}
		}).then(function(user){
			//console.log(user);
		  	if (user.length == 0) {
		  		// return res.status(403).send({code:'300', success: false, msg: 'Authentication failed. Username or password not found.'});

		  		res.json({code:'300', success: false, token: 'Bearer ' + token});

		  	} else {
		  		var token = jwt.encode(user, "W$q4=25*8%v-}UW");
		  		res.json({code:'100', success: true, token: 'Bearer ' + token, type: user[0].type});
		  	}
		});	
	});

	app.get('/user-profile', passport.authenticate('jwt', { session: false}), function(req, res) {
		var token = getToken(req.headers);
		if (token) {
	    	var decoded = jwt.decode(token, "W$q4=25*8%v-}UW");
			models.user.findAll({ where: {
				email: decoded[0].email
			} }).then(function(user) {
				if (user.length == 0) {
				  	return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
				} else {
					var user_details = JSON.parse(JSON.stringify(user[0]));
				  	res.json({success: true, user_details: user_details});
				}
			});
		} else {
			return res.status(403).send({success: false, msg: 'No token provided.'});
		}
	});

	app.post('/edit_profile', passport.authenticate('jwt', { session: false}), function (req, res) {
		models.user.findById(req.body.all.id).then(function(result){
			models.user.update({
				fname: req.body.all.fname,
				lname: req.body.all.lname,
				// email: req.body.all.email,
				mobile_no: req.body.all.mobile_no,
				address: req.body.all.address,
				state: req.body.all.state,
				city: req.body.all.city,
				pincode: req.body.all.pincode
			},{
				where: {
					id: req.body.all.id
				}
			}).then(function(result){
				res.json({success: true, msg: 'Freelancer profile edited successfully'});
			});
		});
	});

	app.get('/job-details', passport.authenticate('jwt', { session: false}), function (req,res) {
		Promise.all([
			models.jobcategory.findAll(),
			models.skill.findAll({attributes:['id','name']})
		]).then(function(values){
			var result = JSON.parse(JSON.stringify(values));
			res.send({jobs_category: result[0], jobs_skill: result[1]});
		});
	});
    
    app.get('/country-details', passport.authenticate('jwt', { session: false}), function (req,res) {
		Promise.all([
			models.country.findAll({attributes:['id','code','name']})
		]).then(function(values){

			var result = JSON.parse(JSON.stringify(values));
			//console.log(result);
			res.send({country_data: result[0]});
		});
	});



	app.post('/job-post-submit', passport.authenticate('jwt', { session: false}), function (req,res) {
		var token = getToken(req.headers);
		if(token){
			var decoded = jwt.decode(token, "W$q4=25*8%v-}UW");
			
			models.job.create({
				jobscategory_id: req.body.job.jobCategory,
				title: req.body.job.jobTitle,
				budget: req.body.job.jobBudget,
				no_of_applicant: req.body.job.jobNoOfApplicant,
				description: req.body.job.jobDescription,
				user_id: decoded[0].id
			}).then(function(result){
				var job_id = result.id;
				var job_skill = req.body.job.jobSkills.map(Number);

				for(var i=0; i<job_skill.length; i++){
					models.job_skill.create({
						job_id: job_id,
						skill_id: job_skill[i],
					});
				}
				res.json({success: true});

			});
		}else{
			return res.status(403).send({success: false, msg: 'No token provided.'});
		}

	});

	app.get('/fetch_job_post_details', passport.authenticate('jwt', { session: false}), function(req,res){
		var token = getToken(req.headers);
		if(token){
			var decoded = jwt.decode(token, "W$q4=25*8%v-}UW");

			models.job.findAll({
				where:{
					user_id:decoded[0].id
				}
			}).then(function(result){
				models.job_skill.findAll({
					where:{
						job_id:result[0].id
					}
				}).then(function(result1){
					res.json({job_post: result,job_skill:result1});
				});

			});
		}
	});
  
	app.post('/edit_vendorprofile',upload.single('image') ,passport.authenticate('jwt', { session: false}), function (req, res) {
		models.user.findById(req.body.all.id).then(function(result){
			


			if (req.files) {
             photo = fileName;
            // save thumbnail -- should this part go elsewhere?
		        im.crop({
					srcPath: 'public/vendor/'+ fileName,
					dstPath: 'public/vendor/thumbs/'+ fileName,
					width: 100,
					height: 100
		        }, function(err, stdout, stderr) {
					if (err) throw err;
		        });
	        }
		    console.log(req.body.fileName);
		    console.log(req.body.ctry_id);
			models.user.update({
				fname: req.body.all.fname,
				lname: req.body.all.lname,
				email: req.body.all.email,
				mobile_no: req.body.all.mobile_no,
				address: req.body.all.address,
				state: req.body.all.state,
				city: req.body.all.city,
				pincode: req.body.all.pincode,
				country_id: req.body.ctry_id,
				image: fileName
			},{
				where: {
					id: req.body.all.id
				}
			}).then(function(result){
				res.json({success: true, msg: 'Vendor profile edited successfully'});
			});
		});
	});

	getToken = function (headers) {
	  if (headers && headers.authorization) {
	    var parted = headers.authorization.split(' ');
	    if (parted.length === 2) {
	      return parted[1];
	    } else {
	      return null;
	    }
	  } else {
	    return null;
	  }
    }

    app.post('/do-comment', function(req, res) {
		models.blogcomment.create({
			user_id:req.body.user_id,
			blog_id:req.body.blog_id,
			blog_comment:req.body.comments
		}).then(function(result){
			//console.log('success');
		}).catch(function(err){
			//console.log('failure');
		});
	});

	app.post('/do-contact-submit', function(req, res) {
		models.contact.create({
			name:req.body.fullname,
			email:req.body.email,
			phone_no:req.body.phone,
			comment:req.body.comments
		}).then(function(result){
			res.json({success: true, msg: 'Contact form submitted successfully!'});
		}).catch(function(err){
			//console.log('failure');
			res.json({success: false, msg: 'Some error occured while submitting the form!'});
		});
	});

	app.get('/fetch-user', function(req, res) {
		var token = getToken(req.headers);
	  	if (token) {
	    	var decoded = jwt.decode(token, "W$q4=25*8%v-}UW");
	    	models.user.findAll({ where: {
		      email: decoded[0].email
		    } }).then(function(user) {
		        if (user.length == 0) {
		          return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
		        } else {
		          res.json({user_id: user[0].id});
		        }
		    });
		} else {
		    return res.status(403).send({success: false, msg: 'No token provided.'});
		}
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
	}), function(req, res) {
        //console.log("hello");
        if (req.body.remember_me) {
          req.session.cookie.maxAge = 1000 * 60 * 3;
        } else {
          req.session.cookie.expires = false;
        }
    	res.redirect('/admin');
    });

	app.post('/register-submit', function(req, res) {
		//alert(config);
		user.create({
			fname: req.body.fname,
			lname: req.body.lname,
			email: req.body.email,
			password: req.body.password
		}).then(function(result) {
			res.redirect('/register-submit');
		}).catch(function(err) {
			alert(err);
		});
	});
};

// route middleware to make sure
