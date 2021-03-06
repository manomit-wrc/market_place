module.exports = function(app, blog,blogcategory, blogcomment, user) {
 	
 	var blog = blog;
 	var blogcategory = blogcategory;

 	var multer  = require('multer');
	var im = require('imagemagick');
	var fileExt = '';
	var fileName = '';
	var storage = multer.diskStorage({
	  destination: function (req, file, cb) {
	    cb(null, 'public/blog');
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
	
	/* app.get('/admin/blog', function(req, res) {
		blog.findAll().then(function(blog){
			res.render('admin/blog/index',{layout:'dashboard', blog:blog});
		});
		
	}); */

	app.get('/admin/blog', function(req, res) {
		blog.belongsTo(blogcategory, {foreignKey: 'blog_category_id'});
		blog.findAll({include: [{model: blogcategory}]}).then(function(blog){
		console.log(blog);
		res.render('admin/blog/index',{layout:'dashboard', title:'Admin - Blog', blog:blog});
		});
	});

	app.get('/admin/blog/add', function(req, res){
		blogcategory.findAll(
		{
			where:
			{
				status:'1'
			}
		}
		).then(function(blogcategory){

			res.render('admin/blog/add',{layout:'dashboard', title:'Admin - Blog', blogcategory:blogcategory});
		});		
	});

	app.post('/admin/blog/add',upload.single('blog_image'), function(req, res){
		var photo = null;
	    var allowedTypes = ['image/jpeg','image/gif','image/png'];
	    if (req.file){
	            photo = fileName;
	            // save thumbnail -- should this part go elsewhere?
	            im.crop({
	              srcPath: 'public/blog/'+ fileName,
	              dstPath: 'public/blog/thumbs/'+ fileName,
	              width: 100,
	              height: 100
	            }, function(err, stdout, stderr){
	              if (err) throw err;
	              console.log('100x100 thumbnail created');
	            });
	    }
		blog.create({
			blog_name: req.body.blog_name,
			blog_category_id: req.body.blog_category_id,
			short_description: req.body.short_description,
			long_description: req.body.long_description,
			blog_image: fileName
		}).then(function(result){
			res.redirect('/admin/blog');
		}).catch(function(err){
			var validation_error = err.errors;
	    	res.render('admin/blog/add', {
	        layout: 'dashboard',
	        error_message: validation_error[0].message,
	        body: req.body
	        });
		});
	});

	app.get('/admin/blog/comments/:id', function(req, res) {
		blog.findById(req.params['id']).then(function(blog){
			blogcomment.belongsTo(user, {foreignKey: 'user_id'});
			blogcomment.findAll({
				include: [{
					model: user
				}],
				where: {
					blog_id: req.params['id']
				}
			}).then(function(blogcomment){
				res.render('admin/blog/comments',{
					layout:'dashboard',
					title:'Admin - Blog',
					blog:blog,
					blogcomment:blogcomment,
				});
			});
		});
	});

	app.get('/admin/blog/edit/:id', function(req, res){
		blog.findById(req.params['id']).then(function(blog){
			blogcategory.findAll(
			{
				where:
				{
					status:'1'
				}
			}	
			).then(function(blogcategory){
				res.render('admin/blog/edit', {
		        layout: 'dashboard',
		        title:'Admin - Blog',
		        blog:blog,
		        blogcategory:blogcategory,
		        });
			});
		});
	});
	
	app.post('/admin/blog/edit/:id',upload.single('blog_image'), function(req, res){
		var photo = null;
	    var allowedTypes = ['image/jpeg','image/gif','image/png'];
	    if (req.file){
            photo = fileName;
            // save thumbnail -- should this part go elsewhere?
            im.crop({
              srcPath: 'public/blog/'+ fileName,
              dstPath: 'public/blog/thumbs/'+ fileName,
              width: 100,
              height: 100
            }, function(err, stdout, stderr){
              if (err) throw err;
              console.log('100x100 thumbnail created');
            });
	    }		
		blog.update({
    		blog_name: req.body.blog_name,
			blog_category_id: req.body.blog_category_id,
			short_description: req.body.short_description,
			long_description: req.body.long_description,
			blog_image: fileName			
	    },{ where: { id: req.params['id'] } }).then(function(result){
	    	res.redirect('/admin/blog');
	    }).catch(function(err){
	    	
	    });
	});

	app.get('/admin/blog/delete/:id', function(req, res){
		blog.destroy({
		    where: {
		       id:req.params['id']
		    }
		}).then(function(response){
			res.redirect('/admin/blog');
		});
	});

};