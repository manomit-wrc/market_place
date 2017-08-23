module.exports = function (app, testimonial){
	var Testimonial = testimonial;
	const encode = require('nodejs-base64-encode');

	app.get('/admin/testimonial', function (req, res) {
		//for fetch use findAll()
		Testimonial.findAll().then(function(testimonial){
			res.render('admin/testimonial/index',{layout:'dashboard', testimonial:testimonial, successMsg:req.flash('successMsg')[0]});
		});
	});

	app.get('/admin/testimonial/add', function (req,res){
		res.render('admin/testimonial/add',{layout:'dashboard'});
	});

	app.post('/admin/testimonial/add', function (req,res){
		//for add
		Testimonial.create({
			ClientName: req.body.client_name,
			description: req.body.description
		}).then(function(result){
			req.flash('successMsg', 'Added successfully');
			res.redirect('/admin/testimonial');
		}).catch(function(err){
			//showing error messeges
			var validation_error = err.errors;
	    	res.render('admin/testimonial/add', {
	        layout: 'dashboard',
	        error_message: validation_error[0].message,
	        body: req.body
	        });
		});
	});

	app.get('/admin/testimonial/edit/:id', function (req,res){
		Testimonial.findById(req.params['id']).then(function(testimonial){
			res.render('admin/testimonial/edit',{
				layout:'dashboard',
				testimonial:testimonial,
				error_message: req.flash('error_message')[0]
			});
		});
	});

	app.get('/admin/testimonial/edit/:id', function (req,res){
		//for edit
		Testimonial.update({
			ClientName: req.body.client_name,
			description: req.body.description
		},{ where: { id: req.params['id'] } }).then(function(result){
			req.flash('successMsg', 'Edit successfully');
			res.redirect('/admin/testimonial');
		}).catch(function(err){
			var validation_error = err.errors;
	      	req.flash('error_message', validation_error[0].message);
		    var redirectUrl = '/admin/testimonial/edit/' + req.params['id'];
		    res.redirect(redirectUrl);
		});
	});

	app.get('/admin/testimonial/delete/:id', function(req,res){
		//for delete
		Testimonial.destroy({
		    where: {
		       id:req.params['id']
		    }
		}).then(function(response){
			req.flash('successMsg', 'Deleted successfully.');
			res.redirect('/admin/testimonial');
		});

	});
}