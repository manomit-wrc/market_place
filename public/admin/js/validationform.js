/* Skill validation section start */
function validateskill(){
    var skill_name = $("#skill_name").val();                
    if(skill_name ==''){
      document.getElementById('skill_name').style.border = '1px solid red !important';
      $("#skill_name_error").css("display", "block");
      document.getElementById("skill_name_error").innerHTML = "Please enter name";
      document.getElementById('skill_name').focus();
      return false;
    }else{
      $("#skill_name_error").css("display", "none");     
      document.getElementById('skill_name').style.border = '';
      document.getElementById("skill_name_error").innerHTML = "";
    }

    var skill_status = $("#skill_status").val();                
    if(skill_status ==''){
      document.getElementById('skill_status').style.border = '1px solid red !important';
      $("#skill_status_error").css("display", "block");
      document.getElementById("skill_status_error").innerHTML = "Please select status";
      document.getElementById('skill_status').focus();
      return false;
    }else{
      $("#skill_status_error").css("display", "none");     
      document.getElementById('skill_status').style.border = '';
      document.getElementById("skill_status_error").innerHTML = "";
    }
  }

  function skillckhnameval(val)
  {                                       
    if(val.search(/\S/) == -1)
    {
      $("#skill_name_error").show();
      $("#skill_name_error").html("Please enter name");
    }
    else
    {                     
      $("#skill_name_error").hide();
    }    
  }
  function skillckhstatusval(val)
  {                                       
    if(val == '')
    {
      $("#skill_status_error").show();
      $("#skill_status_error").html("Please select status");
    }
    else
    {                     
      $("#skill_status_error").hide();
    }                     
  }

/* Skill validation section end */

/* Job Category validation section start */

  function validatejobcategory(){
    var job_category_name = $("#job_category_name").val();                
    if(job_category_name ==''){
      document.getElementById('job_category_name').style.border = '1px solid red !important';
      $("#job_category_name_error").css("display", "block");
      document.getElementById("job_category_name_error").innerHTML = "Please enter name";
      document.getElementById('job_category_name').focus();
      return false;
    }else{
      $("#job_category_name_error").css("display", "none");     
      document.getElementById('job_category_name').style.border = '';
      document.getElementById("job_category_name_error").innerHTML = "";
    }

    var job_category_status = $("#job_category_status").val();                
    if(job_category_status ==''){
      document.getElementById('job_category_status').style.border = '1px solid red !important';
      $("#job_category_status_error").css("display", "block");
      document.getElementById("job_category_status_error").innerHTML = "Please select status";
      document.getElementById('job_category_status').focus();
      return false;
    }else{
      $("#job_category_status_error").css("display", "none");     
      document.getElementById('job_category_status').style.border = '';
      document.getElementById("job_category_status_error").innerHTML = "";
    }
  }

  function jobcatckhnameval(val)
  {                                       
    if(val.search(/\S/) == -1)
    {
      $("#job_category_name_error").show();
      $("#job_category_name_error").html("Please enter name");
    }
    else
    {                     
      $("#job_category_name_error").hide();
    }    
  }
  function jobcatckhstatusval(val)
  {                                       
    if(val == '')
    {
      $("#job_category_status_error").show();
      $("#job_category_status_error").html("Please select status");
    }
    else
    {                     
      $("#job_category_status_error").hide();
    }                     
  }

  /* Job Category validation section end */



  /* CMS validation section start */

  function validatecms(){
    var cms_slag = $("#cms_slag").val();                
    if(cms_slag ==''){
      document.getElementById('cms_slag').style.border = '1px solid red !important';
      $("#cms_slag_error").css("display", "block");
      document.getElementById("cms_slag_error").innerHTML = "Please enter slag";
      document.getElementById('cms_slag').focus();
      return false;
    }else{
      $("#cms_slag_error").css("display", "none");     
      document.getElementById('cms_slag').style.border = '';
      document.getElementById("cms_slag_error").innerHTML = "";
    }

    var cms_title = $("#cms_title").val();                
    if(cms_title ==''){
      document.getElementById('cms_title').style.border = '1px solid red !important';
      $("#cms_title_error").css("display", "block");
      document.getElementById("cms_title_error").innerHTML = "Please enter title";
      document.getElementById('cms_title').focus();
      return false;
    }else{
      $("#cms_title_error").css("display", "none");     
      document.getElementById('cms_title').style.border = '';
      document.getElementById("cms_title_error").innerHTML = "";
    }

    var cms_short_description = $("#cms_short_description").val();                
    if(cms_short_description ==''){
      document.getElementById('cms_short_description').style.border = '1px solid red !important';
      $("#cms_short_description_error").css("display", "block");
      document.getElementById("cms_short_description_error").innerHTML = "Please enter short description";
      document.getElementById('cms_short_description').focus();
      return false;
    }else{
      $("#cms_short_description_error").css("display", "none");     
      document.getElementById('cms_short_description').style.border = '';
      document.getElementById("cms_short_description_error").innerHTML = "";
    }

   /* var cms_full_description = $("#cms_full_description").val();                
    if(cms_full_description ==''){
      document.getElementById('cms_full_description').style.border = '1px solid red !important';
      $("#cms_full_description_error").css("display", "block");
      document.getElementById("cms_full_description_error").innerHTML = "Please enter full description";
      document.getElementById('cms_full_description').focus();
      return false;
    }else{
      $("#cms_full_description_error").css("display", "none");     
      document.getElementById('cms_full_description').style.border = '';
      document.getElementById("cms_full_description_error").innerHTML = "";
    } */
  }

  function cmsckhslagval(val)
  {                                       
    if(val.search(/\S/) == -1)
    {
      $("#cms_slag_error").show();
      $("#cms_slag_error").html("Please enter slag");
    }
    else
    {                     
      $("#cms_slag_error").hide();
    }    
  }
  function cmsckhtitleval(val)
  {                                       
    if(val.search(/\S/) == -1)
    {
      $("#cms_title_error").show();
      $("#cms_title_error").html("Please enter title");
    }
    else
    {                     
      $("#cms_title_error").hide();
    }                     
  }
  function cmsckhshortdescval(val)
  {                                       
    if(val.search(/\S/) == -1)
    {
      $("#cms_short_description_error").show();
      $("#cms_short_description_error").html("Please enter short description");
    }
    else
    {                     
      $("#cms_short_description_error").hide();
    }                     
  }
  function cmsckhfulldescriptionval(val)
  {                                       
    if(val.search(/\S/) == -1)
    {
      $("#cms_full_description_error").show();
      $("#cms_full_description_error").html("Please enter full description");
    }
    else
    {                     
      $("#cms_full_description_error").hide();
    }                     
  }

  /* CMS validation section end */


  /* Blog Category validation section start */

  function validateblogcategory(){
    var blog_category_name = $("#blog_category_name").val();                
    if(blog_category_name ==''){
      document.getElementById('blog_category_name').style.border = '1px solid red !important';
      $("#blog_category_name_error").css("display", "block");
      document.getElementById("blog_category_name_error").innerHTML = "Please enter name";
      document.getElementById('blog_category_name').focus();
      return false;
    }else{
      $("#blog_category_name_error").css("display", "none");     
      document.getElementById('blog_category_name').style.border = '';
      document.getElementById("blog_category_name_error").innerHTML = "";
    }

    var blog_category_status = $("#blog_category_status").val();                
    if(blog_category_status ==''){
      document.getElementById('blog_category_status').style.border = '1px solid red !important';
      $("#blog_category_status_error").css("display", "block");
      document.getElementById("blog_category_status_error").innerHTML = "Please select status";
      document.getElementById('blog_category_status').focus();
      return false;
    }else{
      $("#blog_category_status_error").css("display", "none");     
      document.getElementById('blog_category_status').style.border = '';
      document.getElementById("blog_category_status_error").innerHTML = "";
    }
  }

  function blogcatckhnameval(val)
  {                                       
    if(val.search(/\S/) == -1)
    {
      $("#blog_category_name_error").show();
      $("#blog_category_name_error").html("Please enter name");
    }
    else
    {                     
      $("#blog_category_name_error").hide();
    }    
  }
  function blogcatckhstatusval(val)
  {                                       
    if(val == '')
    {
      $("#blog_category_status_error").show();
      $("#blog_category_status_error").html("Please select status");
    }
    else
    {                     
      $("#blog_category_status_error").hide();
    }                     
  }

  /* Blog category validation section end */

  /* Blog validation section start */

  function validateblog(){
    var blog_name = $("#blog_name").val();                
    if(blog_name ==''){
      document.getElementById('blog_name').style.border = '1px solid red !important';
      $("#blog_name_error").css("display", "block");
      document.getElementById("blog_name_error").innerHTML = "Please enter blog name";
      document.getElementById('blog_name').focus();
      return false;
    }else{
      $("#blog_name_error").css("display", "none");     
      document.getElementById('blog_name').style.border = '';
      document.getElementById("blog_name_error").innerHTML = "";
    }

    var blog_category_id = $("#blog_category_id").val();                
    if(blog_category_id ==''){
      document.getElementById('blog_category_id').style.border = '1px solid red !important';
      $("#blog_category_id_error").css("display", "block");
      document.getElementById("blog_category_id_error").innerHTML = "Please select category";
      document.getElementById('blog_category_id').focus();
      return false;
    }else{
      $("#blog_category_id_error").css("display", "none");     
      document.getElementById('blog_category_id').style.border = '';
      document.getElementById("blog_category_id_error").innerHTML = "";
    }

    var blog_short_description = $("#blog_short_description").val();                
    if(blog_short_description ==''){
      document.getElementById('blog_short_description').style.border = '1px solid red !important';
      $("#blog_short_description_error").css("display", "block");
      document.getElementById("blog_short_description_error").innerHTML = "Please enter short description";
      document.getElementById('blog_short_description').focus();
      return false;
    }else{
      $("#blog_short_description_error").css("display", "none");     
      document.getElementById('blog_short_description').style.border = '';
      document.getElementById("blog_short_description_error").innerHTML = "";
    }
  }

  function blognameckhval(val)
  {                                       
    if(val.search(/\S/) == -1)
    {
      $("#blog_name_error").show();
      $("#blog_name_error").html("Please enter blog name");
    }
    else
    {                     
      $("#blog_name_error").hide();
    }    
  }
  function blogcatckhval(val)
  {                                       
    if(val == '')
    {
      $("#blog_category_id_error").show();
      $("#blog_category_id_error").html("Please select category");
    }
    else
    {                     
      $("#blog_category_id_error").hide();
    }                     
  }

  function blogckhshortdescval(val)
  {                                       
    if(val.search(/\S/) == -1)
    {
      $("#blog_short_description_error").show();
      $("#blog_short_description_error").html("Please enter short description");
    }
    else
    {                     
      $("#blog_short_description_error").hide();
    }                     
  }
  


  /* Blog validation section end */
$(document).ready(function(){
  //organization validation
  $('#org_edit').on('click',function(){
    var valid = $('#org').valid();
    if(valid){
      $('#org').submit();    
    }
  });

  $('#org').validate({
    rules:{
      address:{
        required: true
      },
      contact_no:{
        required: true,
        number: true,
        maxlength: 10,
        minlength: 10
      },
      email:{
        required: true,
        email: true
      },
      fb_link:{
        required: true
      },
      twitter:{
        required: true
      },
      linkedin:{
        required: true
      },
      title:{
        required: true
      },
      meta_key:{
        required: true
      },
      meta_description:{
        required: true 
      }
    },
    messages:{
      address: {
        required: "<font color='red'>Please enter address</font>"
      },
      contact_no:{
        required: "<font color='red'>Please enter contact number</font>",
        number: "<font color='red'>Contact number should be a digit</font>",
        maxlength: "<font color='red'>Contact number should be a 10 digit</font>",
        minlength: "<font color='red'>Contact number should be a 10 digit</font>"
      },
      email:{
        required: "<font color='red'>Please enter email id</font>",
        email: "<font color='red'>Please enter valid email id</font>",
      },
      fb_link:{
        required: "<font color='red'>Please enter facebook link</font>"
      },
      twitter:{
        required: "<font color='red'>Please enter twitter link</font>"
      },
      linkedin:{
        required: "<font color='red'>Please enter linkedin link</font>"
      },
      title:{
        required: "<font color='red'>Please enter title</font>"
      },
      meta_key:{
        required: "<font color='red'>Please enter meta key</font>"
      },
      meta_description:{
        required: "<font color='red'>Please enter meta description</font>"
      }
    }
  });

  // banner add validation
  $('#frmBanner_add_submit').on('click',function(){
    var valid = $('#frmBanner_add').valid();
    if(valid){
      $('#frmBanner_add').submit();
    }
  });

  $('#frmBanner_add').validate({
    rules:{
      header_1:{
        required: true
      },
      header_2:{
        required: true
      },
      description:{
        required: true
      },
      banner_image:{
        required: true
      }
    },
    messages:{
      header_1:{
        required: "<font color='red'>Please enter heading 1"
      },
      header_2:{
        required: "<font color='red'>Please enter heading 2"
      },
      description:{
        required: "<font color='red'>Please enter description"
      },
      banner_image:{
        required: "<font color='red'>Please select image"
      }
    }
  });
});