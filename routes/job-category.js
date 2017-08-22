module.exports = function(app, job_category) {
 	
 	var JobCategory = job_category;
	
	app.get('/admin/job-category', function(req, res) {
		JobCategory.findAll().then(function(job_category){
			res.render('admin/job_category/index',{layout:'dashboard', job_category:job_category});
		});
		
	});

	app.get('/admin/job-category/add', function(req, res){
		res.render('admin/job_category/add',{layout:'dashboard'});
	});

	app.post('/admin/job-category/add', function(req, res){
		JobCategory.create({
			name: req.body.name,
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