module.exports = function(app, job_category) {
 	
 	var JobCategory = job_category;

 	//for image
 	var multer  = require('multer');
	var im = require('imagemagick');
	var fileExt = '';
	var fileName = '';
	var storage = multer.diskStorage({
	  destination: function (req, file, cb) {
	    cb(null, 'public/job_category_image');
	  },
	  filename: function (req, file, cb) {
	    fileExt = file.mimetype.split('/')[1];
	    if (fileExt == 'jpeg'){ fileExt = 'jpg';}
	    fileName = req.user.id + '-' + Date.now() + '.' + fileExt;
	    cb(null, fileName);
	  }
	});

	var restrictImgType = function(req, file, cb) {

	    var allowedTypes = ['image/jpeg','image/gif','image/png'];
	      if (allowedTypes.indexOf(req.file.mimetype) !== -1){
	        // To accept the file pass `true`
	        cb(null, true);
	      } else {
	        // To reject this file pass `false`
	        cb(null, false);
	       //cb(new Error('File type not allowed'));// How to pass an error?
	      }
	};

	var upload = multer({ storage: storage, limits: {fileSize:3000000, fileFilter:restrictImgType} });
 	//end
	
	app.get('/admin/job-category', function(req, res) {
		JobCategory.findAll().then(function(job_category){
			res.render('admin/job_category/index',{layout:'dashboard', job_category:job_category});
		});
		
	});

	app.get('/admin/job-category/add', function(req, res){
		res.render('admin/job_category/add',{layout:'dashboard'});
	});

	app.post('/admin/job-category/add',upload.single('background_image'), function(req, res){
		var photo = null;
	    var allowedTypes = ['image/jpeg','image/gif','image/png'];
	    if (req.file){
	            photo = fileName;
	            // save thumbnail -- should this part go elsewhere?
	            im.crop({
	              srcPath: 'public/job_category_image/'+ fileName,
	              dstPath: 'public/job_category_image/resize/'+ fileName,
	              width: 767,
	              height: 511
	            }, function(err, stdout, stderr){
	              if (err) throw err;
	              
	            });
	    }
		JobCategory.create({
			name: req.body.name,
			short_desc: req.body.job_category_desc,
			background_image: fileName,
			status: req.body.status
		}).then(function(result){
			res.redirect('/admin/job-category');
		}).catch(function(err){
			var validation_error = err.errors;
	    	res.render('admin/job_category/add', {
	        layout: 'dashboard',
	        error_message: validation_error[0].message,
	        body: req.body
	        });
		});
	});

	app.get('/admin/job-category/edit/:id', function(req, res){
		JobCategory.findById(req.params['id']).then(function(job_category){
			res.render('admin/job_category/edit', {
	        layout: 'dashboard',
	        job_category:job_category
	        });
		});
	});
	
	app.post('/admin/job-category/edit/:id', function(req, res){
		JobCategory.update({
    		name: req.body.name,
    		status: req.body.status
	    },{ where: { id: req.params['id'] } }).then(function(result){
	    	res.redirect('/admin/job-category');
	    }).catch(function(err){
	    	
	    });
	});

	app.get('/admin/job-category/delete/:id', function(req, res){
		JobCategory.destroy({
		    where: {
		       id:req.params['id']
		    }
		}).then(function(response){
			res.redirect('/admin/job-category');
		});
	});

};