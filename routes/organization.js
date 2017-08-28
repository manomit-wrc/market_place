module.exports = function (app,organization){
	var Organization = organization;

	app.get('/admin/organization', function (req, res) {
		//for fetch use findAll()
		Organization.findAll().then(function(result){
			res.render('admin/organization/index',{layout:'dashboard',details:result[0],successMsg:req.flash('successMsg')[0]});
		});
	});

	app.post('/admin/organization/edit/:id', function (req, res){
		Organization.update({
			address: req.body.address,
			contact_no: req.body.contact_no,
			email: req.body.email,
			facebook: req.body.fb_link,
			twitter: req.body.twitter,
			linkedin: req.body.linkedin,
			title: req.body.title,
			meta_key: req.body.meta_key,
			meta_description: req.body.meta_description
		},{
			where:{
				id: req.params['id']
			}
		}).then(function(result){
			req.flash('successMsg', 'Edit successfully');
			res.redirect('/admin/organization');
		}).catch(function(err){
			var validation_error = err.errors;
	      	req.flash('error_message', validation_error[0].message);
		    var redirectUrl = '/admin/organization';
		    res.redirect(redirectUrl);
		});

	});
}