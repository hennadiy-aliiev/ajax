$('#btn-send').click(function(e) {
  // Please set your email in url field
  $.ajax({
      url: "https://formspree.io/aliev.gennadiy@gmail.com",  
      method: "POST",
      error: function () {
        $('#container').html('<h1>Error!</h1>')
      },
      data: {
             email: email.value,
             message: msg.value
             },
      dataType: "json"
  }).done(function() {
     $('#container').html('<h1>Thank you!</h1>')
  } );
  e.preventDefault();
});
