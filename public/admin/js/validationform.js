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