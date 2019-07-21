
$.ajax({
        type: 'POST',
        url: "scripts/sample.py",
        data: {param: xyz}, //passing some input here
        dataType: "text",
        success: function(response){
           console.log(response);
        }
});
