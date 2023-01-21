function validateAndGetFormData() {
    var studentIdVar = $("#studentId").val();
    if (studentIdVar === "") {
      alert("Student Roll NO Required Value");
      $("#studentId").focus();
      return "";
    }
    var studentNameVar = $("#studentName").val();
    if (studentNameVar === "") {
      alert("Student Name is Required Value");
      $("#studentName").focus();
      return "";
    }
    var studentClassVar = $("#studentClass").val();
    if (studentClassVar === "") {
      alert("Student class is Required Value");
      $("#studentClass").focus();
      return "";
    }
    var studentDOBVar = $("#studentDOB").val();
    if (studentDOBVar === "") {
      alert("D.O.B is Required Value");
      $("#studentDOBVar").focus();
      return "";
    }
    var studentAddrVar = $("#studentAddr").val();
    if (studentAddrVar === "") {
      alert("Address is Required Value");
      $("#studentAddr").focus();
      return "";
    }
    var studentEnrlVar = $("#studentEnrl").val();
    if (studentEnrlVar === "") {
      alert("Enrollment NO is Required Value");
      $("#studentEnrl").focus();
      return "";
    }
    
    var jsonStrObj = {
      studentId: studentIdVar,
      studentName: studentNameVar,
      studentClass: studentClassVar,
      studentDOB: studentDOBVar,
      studentAddr: studentAddrVar,
      studentEnrl: studentEnrlVar,

    };
    return JSON.stringify(jsonStrObj);
  }

  // This method is used to create PUT Json request.
  /*function createPUTRequest(connToken, jsonObj, dbName, relName) {
    var putRequest =
      "{\n" +
      '"token" : "' +
      connToken +
      '",' +
      '"dbName": "' +
      dbName +
      '",\n' +
      '"cmd" : "PUT",\n' +
      '"rel" : "' +
      relName +
      '",' +
      '"jsonStr": \n' +
      jsonObj +
      "\n" +
      "}";
    return putRequest;
  }

  function executeCommand(reqString, dbBaseUrl, apiEndPointUrl) {
    var url = dbBaseUrl + apiEndPointUrl;
    var jsonObj;
    $.post(url, reqString, function (result) {
      jsonObj = JSON.parse(result);
    }).fail(function (result) {
      var dataJsonObj = result.responseText;
      jsonObj = JSON.parse(dataJsonObj);
    });
    return jsonObj;
  }*/

  function resetForm() {
    $("#studentId").val("");
    $("#studentName").val("");
    $("#studentClass").val("");
    $("#studentDOB").val("");
    $("#studentAddr").val("");
    $("#studentEnrl").val("");
    $("#studentId").prop("disabled",false);
    //$("#save").prop("disabled",true);
   // $("#change").prop("disabled",true);
    //$("#Reset").prop("disabled",true);
    $("#studentId").focus();
  }

 /* function changeData(){
      $("#change").prop("disabled",true);
      jsonchg = validateAndGetFormData();
      var updateRequest = createUPDATERecordRequest("90932354|-31949271672937233|90953902",)

  }*/

  function saveEmployee() {
    var jsonStr = validateAndGetFormData();
    if (jsonStr === "") {
      return;
    }
    var putReqStr = createPUTRequest(
      "90932354|-31949271672937233|90953902",
      jsonStr,
      "Employee",
      "Employee-Rel"
    );
    alert(putReqStr);
    jQuery.ajaxSetup({ async: false });
    var resultObj = executeCommandAtGivenBaseUrl(
      putReqStr,
      "http://api.login2explore.com:5577",
      "/api/iml"
    );
    jQuery.ajaxSetup({ async: true });
    alert(JSON.stringify(resultObj));

    resetForm();
    
  }