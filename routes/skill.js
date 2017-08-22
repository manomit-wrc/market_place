module.exports = function(app, skill) {
 	
 	var Skill = skill;
	
	app.get('/admin/skill', function(req, res) {
		Skill.findAll().then(function(skill){
			res.render('admin/skill/index',{layout:'dashboard', skill:skill});
		});
		
	});

	app.get('/admin/skill/add', function(req, res){
		res.render('admin/skill/add',{layout:'dashboard'});
	});

	app.post('/admin/skill/add', function(req, res){
		Skill.create({
			name: req.body.name
		}).then(function(result){
			res.redirect('/admin/skill');
		}).catch(function(err){
			var validation_error = err.errors;
	    	res.render('admin/skill/add', {
	        layout: 'dashboard',
	        error_message: validation_error[0].message,
	        body: req.body
	        });
		});
	});

	/* app.get('/admin/skill/edit/:id', function(req, res){
		Skill.findById(req.params['id']).then(function(skill){
			res.render('admin/skill/edit', {
	        layout: 'dashboard',
	        skill:skill
	        });
		});
	});
	
	app.post('/admin/skill/edit/:id', function(req, res){
		Skill.update({
    		name: req.body.name,
    		description: req.body.description,
    		remarks: req.body.remarks
	    },{ where: { id: req.params['id'] } }).then(function(result){
	    	res.redirect('/admin/skill');
	    }).catch(function(err){
	    	
	    });
	});

	app.get('/admin/skill/delete/:id', function(req, res){
		Skill.destroy({
		    where: {
		       id:req.params['id']
		    }
		}).then(function(response){
			res.redirect('/admin/skill');
		});
	});*/

};