module.exports = function(app,team) {
 	
 	var team = team;
 	var multer  = require('multer');
	var im = require('imagemagick');
	var fileExt = '';
	var fileName = '';
	var storage = multer.diskStorage({
	  destination: function (req, file, cb) {
	    cb(null, 'public/team');
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

    var upload = multer({ storage: storage, limits: {fileSize:5242880, fileFilter:restrictImgType} });
	
	
	
	app.get('/admin/team', function(req, res) {
		team.findAll().then(function(team){
			res.render('admin/team/index',{layout:'dashboard', title:'Admin - Team', team:team});
		});
		
	});

	app.get('/admin/team/add', function(req, res){
		res.render('admin/team/add',{layout:'dashboard', title:'Admin - Team'});
	});

	app.post('/admin/team/add',upload.single('image'), function(req, res){
		var photo = null;
	    var allowedTypes = ['image/jpeg','image/gif','image/png'];
	    if (req.file){
	            photo = fileName;
	            // save thumbnail -- should this part go elsewhere?
	            im.crop({
	              srcPath: 'public/team/'+ fileName,
	              dstPath: 'public/team/thumbs/'+ fileName,
	              width: 360,
	              height: 240
	            }, function(err, stdout, stderr){
	              if (err) throw err;
	              console.log('360x240 thumbnail created');
	            });
	    }
		team.create({
			name: req.body.name,
			description: req.body.description,
			designation: req.body.designation,
			facebook: req.body.facebook,
			linkedin: req.body.linkedin,
			twitter: req.body.twitter,
			google_plus: req.body.google_plus,
			image: fileName
		}).then(function(result){
			res.redirect('/admin/team');
		}).catch(function(err){
			var validation_error = err.errors;
	    	res.render('admin/team/add', {
	        layout: 'dashboard',
	        title:'Admin - Team',
	        error_message: validation_error[0].message,
	        body: req.body
	        });
		});
	});

	app.get('/admin/team/edit/:id', function(req, res){
		team.findById(req.params['id']).then(function(team){
			res.render('admin/team/edit', {
	        layout: 'dashboard',
	        title:'Admin - Team',
	        team:team
	        });
		});
	});
	
	app.post('/admin/team/edit/:id',upload.single('image'), function(req, res){
		var photo = null;
	    var allowedTypes = ['image/jpeg','image/gif','image/png'];
	    if (req.file){
            photo = fileName;
            // save thumbnail -- should this part go elsewhere?
            im.crop({
              srcPath: 'public/team/'+ fileName,
              dstPath: 'public/team/thumbs/'+ fileName,
              width: 360,
              height: 240
            }, function(err, stdout, stderr){
              if (err) throw err;
              console.log('360x240 thumbnail created');
            });
	    }
		team.update({
    		name: req.body.name,
			description: req.body.description,
			designation: req.body.designation,
			facebook: req.body.facebook,
			linkedin: req.body.linkedin,
			twitter: req.body.twitter,
			google_plus: req.body.google_plus,
			image: fileName
	    },{ where: { id: req.params['id'] } }).then(function(result){
	    	res.redirect('/admin/team');
	    }).catch(function(err){
	    	
	    });
	}); 

	app.get('/admin/team/delete/:id', function(req, res){
		team.destroy({
		    where: {
		       id:req.params['id']
		    }
		}).then(function(response){
			res.redirect('/admin/team');
		});
	});

};