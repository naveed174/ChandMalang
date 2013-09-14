
/*
 Initialize Parse
*/
function InitializeParse()
{
	// Initialize the Parse object first.
	Parse.initialize("<GIT_APP_ID>", "<GIT_JAVASCRIPT_KEY>");	
}

/*
 Facebook Initialization
*/
function FacebookInit()
{
	window.fbAsyncInit = function() {
	FB.init({
	appId      : '<GIT_FACEBOOK_APP_ID>', // Facebook App ID
		channelUrl : '//<GIT_APP_URL>/channel.html', // Channel File	
		status     : true, // check login status
		cookie     : true, // enable cookies to allow the server to access the session
		xfbml      : true  // parse XFBML
	  });
  };

  // Load the SDK asynchronously
  (function(d){
   var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement('script'); js.id = id; js.async = true;
   js.src = "//connect.facebook.net/en_US/all.js";
   ref.parentNode.insertBefore(js, ref);
  }(document));

}