module.exports = function(app, blog_category) {
 	
 	var BlogCategory = blog_category;
	
	app.get('/admin/blog-category', function(req, res) {
		BlogCategory.findAll().then(function(blog_category){
			res.render('admin/blog_category/index',{layout:'dashboard', blog_category:blog_category});
		});
		
	});

	app.get('/admin/blog-category/add', function(req, res){
		res.render('admin/blog_category/add',{layout:'dashboard'});
	});

	app.post('/admin/blog-category/add', function(req, res){
		BlogCategory.create({
			name: req.body.name,
			status: req.body.status
		}).then(function(result){
			res.redirect('/admin/blog-category');
		}).catch(function(err){
			var validation_error = err.errors;
	    	res.render('admin/blog_category/add', {
	        layout: 'dashboard',
	        error_message: validation_error[0].message,
	        body: req.body
	        });
		});
	});

	app.get('/admin/blog-category/edit/:id', function(req, res){
		BlogCategory.findById(req.params['id']).then(function(blog_category){
			res.render('admin/blog_category/edit', {
	        layout: 'dashboard',
	        blog_category:blog_category
	        });
		});
	});
	
	app.post('/admin/blog-category/edit/:id', function(req, res){
		BlogCategory.update({
    		name: req.body.name,
    		status: req.body.status
	    },{ where: { id: req.params['id'] } }).then(function(result){
	    	res.redirect('/admin/blog-category');
	    }).catch(function(err){
	    	
	    });
	});

	app.get('/admin/blog-category/delete/:id', function(req, res){
		BlogCategory.destroy({
		    where: {
		       id:req.params['id']
		    }
		}).then(function(response){
			res.redirect('/admin/blog-category');
		});
	});

};