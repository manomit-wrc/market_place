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