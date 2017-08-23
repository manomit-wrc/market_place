module.exports = function(app, blog,blogCategory) {
 	
 	var Blog = blog;
 	var BlogCategory = blogCategory;
	
	app.get('/admin/blog', function(req, res) {
		Blog.findAll().then(function(blog){
			res.render('admin/blog/index',{layout:'dashboard', blog:blog});
		});
		
	});

	app.get('/admin/blog/add', function(req, res){
		BlogCategory.findAll().then(function(blogCategory){
			res.render('admin/blog/add',{layout:'dashboard', blogCategory:blogCategory});
		});		
	});

	app.post('/admin/blog/add', function(req, res){
		Blog.create({
			blog_name: req.body.blog_name,
			blog_category_id: req.body.blog_category_id,
			short_description: req.body.short_description,
			long_description: req.body.long_description,
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

	app.get('/admin/blog/edit/:id', function(req, res){
		Blog.findById(req.params['id']).then(function(blog){
			BlogCategory.findAll().then(function(blogCategory){
			res.render('admin/blog/edit', {
	        layout: 'dashboard',
	        blog:blog,
	        blogCategory:blogCategory,
	        });
		 });
		});
	});
	
	app.post('/admin/blog/edit/:id', function(req, res){
		Blog.update({
    		blog_name: req.body.blog_name,
			blog_category_id: req.body.blog_category_id,
			short_description: req.body.short_description,
			long_description: req.body.long_description,
	    },{ where: { id: req.params['id'] } }).then(function(result){
	    	res.redirect('/admin/blog');
	    }).catch(function(err){
	    	
	    });
	});

	app.get('/admin/blog/delete/:id', function(req, res){
		Blog.destroy({
		    where: {
		       id:req.params['id']
		    }
		}).then(function(response){
			res.redirect('/admin/blog');
		});
	});

};