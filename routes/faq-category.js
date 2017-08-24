module.exports = function(app, faq_category) {
 	
 	var FaqCategory = faq_category;
	
	app.get('/admin/faq-category', function(req, res) {
		FaqCategory.findAll().then(function(faq_category){
			res.render('admin/faq_category/index',{layout:'dashboard', faq_category:faq_category});
		});
		
	});

	app.get('/admin/faq-category/add', function(req, res){
		res.render('admin/faq_category/add',{layout:'dashboard'});
	});

	app.post('/admin/faq-category/add', function(req, res){
		FaqCategory.create({
			name: req.body.name,
			status: req.body.status
		}).then(function(result){
			res.redirect('/admin/faq-category');
		}).catch(function(err){
			var validation_error = err.errors;
	    	res.render('admin/faq_category/add', {
	        layout: 'dashboard',
	        error_message: validation_error[0].message,
	        body: req.body
	        });
		});
	});

	app.get('/admin/faq-category/edit/:id', function(req, res){
		FaqCategory.findById(req.params['id']).then(function(faq_category){
			res.render('admin/faq_category/edit', {
	        layout: 'dashboard',
	        faq_category:faq_category
	        });
		});
	});
	
	app.post('/admin/faq-category/edit/:id', function(req, res){
		FaqCategory.update({
    		name: req.body.name,
    		status: req.body.status
	    },{ where: { id: req.params['id'] } }).then(function(result){
	    	res.redirect('/admin/faq-category');
	    }).catch(function(err){
	    	var redirectUrl = '/admin/faq-category/edit/' + req.params['id'];
	    	res.redirect(redirectUrl);
	    });
	});

	app.get('/admin/faq-category/delete/:id', function(req, res){
		FaqCategory.destroy({
		    where: {
		       id:req.params['id']
		    }
		}).then(function(response){
			res.redirect('/admin/faq-category');
		});
	});

};