
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

Parse.Cloud.beforeSave("UserEventsOne", function(request, response) {
	console.log("Before Save Called");
	query = new Parse.Query("UserEventsOne");
	
	var eventId = request.object.get("FB_ID");
	query.equalTo("FB_ID", eventId);
	
	query.count(
	{
		success: function(count) 
		{
		  if (count > 0) 
		  {		
			// If the event has been modified since the last time it was saved then 
			// delete the old one
			//
			if (count > 1) 
				console.log("Somehow we ended up with more than one event for this id: " + eventId + ", count:" + count);
				
			console.log("Event with Id:" + eventId + " already exists!!");
			
			query.find().then(function(results) 
			{
				console.log(results[0]);
				
				var fbEvent = results[0].get("FB_EVENT");
				newTS = request.object.get("FB_EVENT").updated_time;
				existingTS = fbEvent.updated_time;
				console.log("Existing TS: " +  existingTS + ", New TS:" + newTS);
				
				if (newTS > existingTS)
				{
					results[0].destroy().then(function(results)
					{
						console.log("Old Object destroyed, returning success");
						response.success();
					},
					function(error)
					{
						response.error(error);
					});
				}
				else
				{
					response.error("Object Already Exists.");	
				}
			}, function(error) {console.log(error);response.error("Object Already Exists.");});
			
				
		  } else 
		  {
			response.success();
		  }
		},
		error: function(error) {
		  response.error("Error " + error.code + " : " + error.message + " when getting evenr count.");
    }
  });	
});
