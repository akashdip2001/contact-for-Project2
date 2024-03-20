function emailSend() {
	var userName = document.getElementById('name').value;
	var email = document.getElementById('email').value;
  
	var messageBody = "Name: " + userName +
	  "<br/> Email: " + email;
  
	Email.send({
		SecureToken: "f1fd93e4-78df-4474-8db5-80daf880c520",
		To: "mail.me.akashdip2001@gmail.com",
		From: "mail.me.akashdip2001@gmail.com",
		Subject: "Register Email for Project2",
		Body: messageBody
	}).then(
	  message => {
		if (message === 'OK') {
		  swal("Success", "Email sent!", "success");
		} else {
		  swal("Error", "Email not sent. Please try again later.", "error");
		}
	  }
	);
  }
  
