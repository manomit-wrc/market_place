module.exports = function(app,work) {
 	
    var work = work;
	var multer  = require('multer');
	var im = require('imagemagick');
	var fileExt = '';
	var fileName = '';

	var fileNamevedio='';
	var fileExtvedio = '';

	var storage = multer.diskStorage({
	  destination: function (req, file, cb) {
	  	//console.log(file.fieldname);
	  	if(file.fieldname=='image')
	  	 {
	      cb(null, 'public/work');
	     }

	    if(file.fieldname=='video')
	    {
	     cb(null, 'public/work/vedio');
	    }
	   
	 },
	 
	  filename: function (req, file, cb) {
	    fileExt = file.mimetype.split('/')[1];
	    if (fileExt == 'jpeg'){ fileExt = 'jpg';}
	    fileName = req.user.id + '-' + Date.now() + '.' + fileExt;

       cb(null, fileName);
	  },
	  filename: function (req, file, cb) {
	 
        fileExtvedio = file.mimetype.split('/')[1];
	    //fileExtvedio = file.req.body.video;
	    fileNamevedio = req.user.id + '-' + Date.now() + '.' + fileExtvedio;

	    cb(null, fileNamevedio);
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


    /*var fileExtvedio = '';
	var fileNamevedio = '';

   var storagevedio = multer.diskStorage({
	  destination: function (req, file, cb) {
	    cb(null, 'public/work/vedio');
	  },
	  filename: function (req, file, cb) {
	    fileExtvedio = file.mimetype.split('/')[1];
	    //fileExtvedio = file.req.body.video;
	    fileNamevedio = req.user.id + '-' + Date.now() + '.' + fileExtvedio;
	    cb(null, fileNamevedio);
	  }
	})

	var restrictVedioType = function(req, file, cb) {

	    var allowedTypesVedio = ['avi','mov','mp4','wmv'];
	      if (allowedTypesVedio.indexOf(req.file.mimetype) !== -1){
	        // To accept the file pass `true`
	        cb(null, true);
	      } else {
	        // To reject this file pass `false`
	        cb(null, false);
	       //cb(new Error('File type not allowed'));// How to pass an error?
	      }
	};

    var uploadvedio = multer({ storage:storagevedio, limits: { fileFilter:restrictVedioType} });*/

	
app.get('/admin/works', function(req, res) {
		
		work.findAll().then(function(work){
			res.render('admin/works/index',{layout:'dashboard',work:work});
		
		});
	});

app.get('/admin/works/add', function(req, res){
		res.render('admin/works/add',{layout:'dashboard'});
	});

app.post('/admin/works/add',upload.fields([{name: 'image', maxCount: 1}, {name: 'video', maxCount: 1}]), function(req,res){
	//console.log(req.files['image'][0]['filename']);
	//console.log(req.files);

		var photo = null;
		fileName=req.files['image'][0]['filename'];
	    //var allowedTypes = ['image/jpeg','image/gif','image/png','image/jpg'];
	    if (req.files){
	            photo = fileName;
	            // save thumbnail -- should this part go elsewhere?
	            im.crop({
	              srcPath: 'public/work/'+ fileName,
	              dstPath: 'public/work/thumbs/'+ fileName,
	              width: 360,
	              height: 240
	            }, function(err, stdout, stderr){
	              if (err) throw err;
	              console.log('360x240 thumbnail created');
	            });
	    }
		work.create({
			description: req.body.description,
			video: fileNamevedio,
			image: fileName
		}).then(function(result){
			res.redirect('/admin/works');
		}).catch(function(err){
			var validation_error = err.errors;
	    	res.render('admin/works/add', {
	        layout: 'dashboard',
	        error_message: validation_error[0].message,
	        body: req.body
	        });
		});
       
	});

   app.get('/admin/works/edit/:id', function(req, res){
		work.findById(req.params['id']).then(function(work){
			res.render('admin/works/edit', {
	        layout: 'dashboard',
	        work:work
	        });
		});
	});

   app.post('/admin/works/edit/:id',upload.fields([{name: 'image', maxCount: 1}, {name: 'video', maxCount: 1}]), function(req,res){
	   //console.log(req.files['image'][0]['filename']);
	   //console.log(req.files['image']);
	   //console.log(req.files['video']);
          
		var photo = null;
		//fileName=req.files['image'][0]['filename'];
	    //var allowedTypes = ['image/jpeg','image/gif','image/png','image/jpg'];
	    if (req.files){
	    	if (req.files['image']!= null && req.files['video']!= null){
	    		console.log('hello');
	    	   fileName=req.files['image'][0]['filename'];
	    	   fileNamevedio=req.files['video'][0]['filename'];
	            photo = fileName;
	            // save thumbnail -- should this part go elsewhere?
	            im.crop({
	              srcPath: 'public/work/'+ fileName,
	              dstPath: 'public/work/thumbs/'+ fileName,
	              width: 360,
	              height: 240
	            }, function(err, stdout, stderr){
	              if (err) throw err;
	              console.log('360x240 thumbnail created');
	            });
	        }
	        else if(req.files['image']==null && req.files['video']!=null)
	        {
              fileName=req.body.hidimage;
              fileNamevedio=req.files['video'][0]['filename'];

	        }
	        else if(req.files['image']!=null && req.files['video']==null)
	        {
	        	 fileName=req.files['image'][0]['filename'];
	            photo = fileName;
	            // save thumbnail -- should this part go elsewhere?
	            im.crop({
	              srcPath: 'public/work/'+ fileName,
	              dstPath: 'public/work/thumbs/'+ fileName,
	              width: 360,
	              height: 240
	            }, function(err, stdout, stderr){
	              if (err) throw err;
	              console.log('360x240 thumbnail created');
	            });
              
              fileNamevedio=req.body.hidvedio;
	        }
	       else
		    {
		    	fileName=req.body.hidimage;
		    	fileNamevedio=req.body.hidvedio;
		    	//console.log(req.body);
		    }
	    }
	    
		work.update({
			description: req.body.description,
			video: fileNamevedio,
			image: fileName
		},{ where: { id: req.params['id'] } }).then(function(result){
			res.redirect('/admin/works');
		}).catch(function(err){
			
		});
       
	});

   app.get('/admin/work/delete/:id', function(req, res){
		work.destroy({
		    where: {
		       id:req.params['id']
		    }
		}).then(function(response){
			res.redirect('/admin/works');
		});
	});



	
};