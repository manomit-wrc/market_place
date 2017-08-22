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