module.exports = function(app, banner) {
 	
 	var Banner = banner;
 	
 	var multer  = require('multer');
	var im = require('imagemagick');
	var fileExt = '';
	var fileName = '';
	var storage = multer.diskStorage({
	  destination: function (req, file, cb) {
	    cb(null, 'public/banner');
	  },
	  filename: function (req, file, cb) {
	    fileExt = file.mimetype.split('/')[1];
	    if (fileExt == 'jpeg'){ fileExt = 'jpg';}
	    fileName = req.user.id + '-' + Date.now() + '.' + fileExt;
	    cb(null, fileName);
	  }
	})

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
	

	app.get('/admin/banner', function(req, res) {
		Banner.findAll().then(function(banner){
		res.render('admin/banner/index',{layout:'dashboard', banner:banner});
		});
	});

	app.get('/admin/banner/add', function(req, res){
		res.render('admin/banner/add',{layout:'dashboard'});		
	});

	app.post('/admin/banner/add',upload.single('banner_image'), function(req, res){
		var photo = null;
	    var allowedTypes = ['image/jpeg','image/gif','image/png'];
	    if (req.file){
	            photo = fileName;
	            // save thumbnail -- should this part go elsewhere?
	            im.crop({
	              srcPath: 'public/banner/'+ fileName,
	              dstPath: 'public/banner/resize/'+ fileName,
	              width: 1280,
	              height: 650
	            }, function(err, stdout, stderr){
	              if (err) throw err;
	              
	            });
	    }
		Banner.create({
			header_1: req.body.header_1,
			header_2: req.body.header_2,
			description: req.body.description,
			banner_image: fileName,
			status: req.body.status
		}).then(function(result){
			res.redirect('/admin/banner');
		}).catch(function(err){
			var validation_error = err.errors;
	    	res.render('admin/banner/add', {
	        layout: 'dashboard',
	        error_message: validation_error[0].message,
	        body: req.body
	        });
		});
	});

	app.get('/admin/banner/edit/:id', function(req, res){
		Banner.findById(req.params['id']).then(function(banner){
			res.render('admin/banner/edit', {
	        layout: 'dashboard',
	        banner:banner
	        });
		});
	});
	
	app.post('/admin/banner/edit/:id',upload.single('banner_image'), function(req, res){
		var photo = null;
	    var allowedTypes = ['image/jpeg','image/gif','image/png'];
	    if (req.file){
            photo = fileName;
            // save thumbnail -- should this part go elsewhere?
            im.crop({
              srcPath: 'public/banner/'+ fileName,
              dstPath: 'public/banner/resize/'+ fileName,
              width: 100,
              height: 100
            }, function(err, stdout, stderr){
              if (err) throw err;
              
            });
	    }		
		Banner.update({
    		header_1: req.body.header_1,
			header_2: req.body.header_2,
			description: req.body.description,
			banner_image: fileName,
			status: req.body.status			
	    },{ where: { id: req.params['id'] } }).then(function(result){
	    	res.redirect('/admin/banner');
	    }).catch(function(err){
	    	
	    });
	});

	app.get('/admin/banner/delete/:id', function(req, res){
		Banner.destroy({
		    where: {
		       id:req.params['id']
		    }
		}).then(function(response){
			res.redirect('/admin/banner');
		});
	});

};