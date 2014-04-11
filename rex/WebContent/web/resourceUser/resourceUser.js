// Define a new module. This time we declare a dependency on
// the ngResource module, so we can work with the Instagram API
var app = angular.module("switchableGrid", ['ngResource']);

// Create and register the new "instagram" service
app.factory('instagram', function($resource) {
	return {
		fetchPopular : function(callback) {

			// The ngResource module gives us the $resource
			// service. It makes working with
			// AJAX easy. Here I am using the client_id of a
			// test app. Replace it with yours.

			var api = $resource(
					'https://api.instagram.com/v1/users/:user_id/media/recent/?access_token=475087813.f59def8.2e822ad8e9b747e6b8c1081c02fc4913&callback=JSON_CALLBACK',					
					{
						user_id : '475087813'
					},				
					{
						// This creates an action which we've
						// chosen to name "fetch". It issues
						// an JSONP request to the URL of the
						// resource. JSONP requires that the
						// callback=JSON_CALLBACK part is added
						// to the URL.

						fetch : {
							method : 'JSONP'
						}
					});

			api.fetch(function(response) {
				// Call the supplied callback function			
				callback(response.data);
			});
		}
	};
});

// The controller. Notice that I've included our instagram service which we
// defined below. It will be available inside the function automatically.

function SwitchableGridController($scope, instagram) {

	// Default layout of the app. Clicking the buttons in the toolbar
	// changes this value.

	$scope.layout = 'grid';

	$scope.pics = [];

	// Use the instagram service and fetch a list of the popular pics
	instagram.fetchPopular(function(data) {

		// Assigning the pics array will cause the view
		// to be automatically redrawn by Angular.
		
		//console.log('data', data);
		
		$scope.pics = data;
	});

}