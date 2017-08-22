module.exports = function(app, cms) {
 	
 	var Cms = cms;
	
	app.get('/admin/cms', function(req, res) {
		Cms.findAll().then(function(cms){
			res.render('admin/cms/index',{layout:'dashboard', cms:cms});
		});
		
	});

	app.get('/admin/cms/add', function(req, res){
		res.render('admin/cms/add',{layout:'dashboard'});
	});

	app.post('/admin/cms/add', function(req, res){
		Cms.create({
			slag: req.body.slag,
			title: req.body.title,
			short_description: req.body.short_description,
			full_description: req.body.full_description
		}).then(function(result){
			res.redirect('/admin/cms');
		}).catch(function(err){
			var validation_error = err.errors;
	    	res.render('admin/cms/add', {
	        layout: 'dashboard',
	        error_message: validation_error[0].message,
	        body: req.body
	        });
		});
	});

	app.get('/admin/cms/edit/:id', function(req, res){
		Cms.findById(req.params['id']).then(function(cms){
			res.render('admin/cms/edit', {
	        layout: 'dashboard',
	        cms:cms
	        });
		});
	});
	
	app.post('/admin/cms/edit/:id', function(req, res){
		Cms.update({
    		slag: req.body.slag,
			title: req.body.title,
			short_description: req.body.short_description,
			full_description: req.body.full_description
	    },{ where: { id: req.params['id'] } }).then(function(result){
	    	res.redirect('/admin/cms');
	    }).catch(function(err){
	    	
	    });
	});

	app.get('/admin/cms/delete/:id', function(req, res){
		Cms.destroy({
		    where: {
		       id:req.params['id']
		    }
		}).then(function(response){
			res.redirect('/admin/cms');
		});
	});

};