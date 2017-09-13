module.exports = function (app, user) {
	var md5 = require('md5');
	var user = user;
	const encode = require('nodejs-base64-encode');

	//for image
 	var multer = require('multer');
	var im = require('imagemagick');
	var fileExt = '';
	var fileName = '';
	var storage = multer.diskStorage({
		destination: function (req, file, cb) {
			cb(null, 'public/user');
		},
		filename: function (req, file, cb) {
			fileExt = file.mimetype.split('/')[1];
			if (fileExt == 'jpeg') { fileExt = 'jpg'; }
			fileName = req.user.id + '-' + Date.now() + '.' + fileExt;
			cb(null, fileName);
		}
	});

	var restrictImgType = function(req, file, cb) {
	    var allowedTypes = ['image/jpeg','image/png'];
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
 	//end

	app.get('/admin/user', function (req, res) {
		//for fetch use findAll()
		user.findAll().then(function(user) {
			res.render('admin/user/index',{layout:'dashboard', title:'Admin - Users', user:user, successMsg:req.flash('successMsg')[0]});
		});
	});

	app.get('/admin/user/add', function (req, res) {
		res.render('admin/user/add',{layout:'dashboard', title:'Admin - Users'});
	});

	app.post('/admin/user/add', upload.single('image'), function(req, res) {
		console.log(req.body);
	    if (req.file) {
            photo = fileName;
            // save thumbnail -- should this part go elsewhere?
	        im.crop({
				srcPath: 'public/user/'+ fileName,
				dstPath: 'public/user/thumbs/'+ fileName,
				width: 100,
				height: 100
	        }, function(err, stdout, stderr) {
				if (err) throw err;
	        });
	    }
		//for add
		user.create({
			fname: req.body.fname,
			lname: req.body.lname,
			email: req.body.email,
			password: md5(req.body.password),
			mobile_no: req.body.mobile,
			address: req.body.address,
			state: req.body.state,
			city: req.body.city,
			pincode: req.body.pincode,
			image: fileName,
			type: req.body.reg_type,
			status: req.body.status
		}).then(function(result) {
			req.flash('successMsg', 'Added successfully');
			res.redirect('/admin/user');
		}).catch(function(err) {
			//showing error messeges
			var validation_error = err.errors;
	    	res.render('admin/user/add', {
		        layout: 'dashboard',
		        title:'Admin - Users',
		        error_message: validation_error[0].message,
		        body: req.body
	        });
		});
	});

	app.get('/admin/user/edit/:id', function(req, res) {
		user.findById(req.params['id']).then(function(user) {
			res.render('admin/user/edit',{
				layout:'dashboard',
				title:'Admin - Users',
				user:user,
				error_message: req.flash('error_message')[0]
			});
		});
	});
	
	app.post('/admin/user/edit/:id', upload.single('image'), function(req, res){
		var photo = null;
	    var allowedTypes = ['image/jpeg','image/png'];
	    if (req.file) {
            photo = fileName;
            // save thumbnail -- should this part go elsewhere?
            im.crop({
				srcPath: 'public/user/'+ fileName,
				dstPath: 'public/user/thumbs/'+ fileName,
				width: 100,
				height: 100
            }, function(err, stdout, stderr) {
				if (err) throw err;
            });
	    } else {
	    	fileName = req.body.image_name;
	    }
		user.update({
    		fname: req.body.fname,
			lname: req.body.lname,
			email: req.body.email,
			password: md5(req.body.password),
			mobile_no: req.body.mobile,
			address: req.body.address,
			state: req.body.state,
			city: req.body.city,
			pincode: req.body.pincode,
			image: fileName,
			status: req.body.status
	    }, { where: { id: req.params['id'] } }).then(function(result) {
	    	req.flash('successMsg', 'Updated successfully');
	    	res.redirect('/admin/user');
	    }).catch(function(err) {
	    	//showing error messeges
			var validation_error = err.errors;
	    	res.render('admin/user/edit/:id', {
		        layout: 'dashboard',
		        title:'Admin - Users',
		        error_message: validation_error[0].message,
		        body: req.body
	        });
	    });
	});

	app.get('/admin/user/delete/:id', function(req, res) {
		user.destroy({
		    where: {
		       id:req.params['id']
		    }
		}).then(function(response) {
			res.redirect('/admin/user');
		});
	});

	app.post('/admin/user/check-user-email', function(req, res) {
		user.findAll({
			where: {
				email: req.body.email
			},
			raw: true,
		}).then(function(email) {
			if(email.length > 0) {
				console.log(email);
				res.send(false);
			}
			else {
				res.send(true);
			}
		});
	});

}