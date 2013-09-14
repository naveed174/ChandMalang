
/*
 Login Via Facebook
*/
function RedirectToHomePage(homePage)
{

	if (homePage != null)
		window.location.href = homePage;
}

function LoginViaFacebook(homePage) 
  {
	// Get FB login status
  	FB.getLoginStatus(function(response) 
	{
		console.log("FB Response: " + response.status);
		if (response.status === 'connected') 
		{
			// the user is logged in and has authenticated your
			// app, and response.authResponse supplies
			// the user's ID, a valid access token, a signed
			// request, and the time the access token 
			// and signed request each expire
			//LoginFBUserInParse();
			
			console.log("user already connected and must have authorized the app");
			RedirectToHomePage(homePage);
		} 
		else if (response.status === 'not_authorized') 
		{
			// User has not authorized the app 
			// Ask to login again
			//
			LoginFBUserInParse(homePage);
		}
		else
		{
			// Some other error or the user has not logged in yet
			//
			LoginFBUserInParse(homePage);
		}
	});
  };
  
  function LoginFBUserInParse(homePage)
  {
	FB.login(function(response) 
	{
		if(response.status == "connected") 
		{
			// build authData object for Parse
			var id = response.authResponse.userID;
			var access_token = response.authResponse.accessToken;
			var expiration_date = new Date();
			expiration_date.setSeconds(expiration_date.getSeconds() + response.authResponse.expiresIn);
			expiration_date = expiration_date.toISOString();
		   var authData = {
			"id" : id,
			"access_token" : access_token,
			"expiration_date" : expiration_date
			};			

			// log in with Parse
			Parse.FacebookUtils.logIn(authData, {
				success: function(user) {
					if (!user.existed()) {
					  console.log("NEW USER: User signed up and logged in through Facebook!");
					} else {
					  console.log("User logged in through Facebook!");
					}
					
					console.log('redirecting');
					
					RedirecToHomePage(homePage);					
				  },
				  error: function(user, error) {
					console.log("User cancelled the Facebook login or did not fully authorize. error:" + error.message);
				  }
			});
		}
		else if (response.status == "not_authorized")
		{	
			console.log("User did not authorize the app");			
		}
	}, {scope: 'create_event,rsvp_event,user_about_me,user_events,friends_events,user_hometown,user_location'});
  };
  
  function TestMethod()
  {
	console.log("Test Method CalleD");
  }