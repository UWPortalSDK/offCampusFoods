angular.module('portalApp')

// Widget controller - runs every time widget is shown
.controller('offCampusFoodsCtrl', ['$scope', '$http', '$q', 'offCampusFoodsFactory', function ($scope, $http, $q, offCampusFoodsFactory) {

    // Import variables and functions from service
    $scope.data = offCampusFoodsFactory.data;
	$scope.items = offCampusFoodsFactory.items;
	$scope.detailsItem = offCampusFoodsFactory.detailsItem;
	
    // initialize the service
    offCampusFoodsFactory.init($scope);

	// Show main view in the first column
	$scope.portalHelpers.showView('offCampusFoodsMain.html', 1);
	
	// This function gets called when user clicks an item in the list
	$scope.showDetails = function(item){
		// Make the item that user clicked available to the template
		$scope.detailsItem.value = item;		
		$scope.portalHelpers.showView('offCampusFoodsDetails.html', 2);
	}
	
}])
// Factory maintains the state of the widget
.factory('offCampusFoodsFactory', ['$http', '$rootScope', '$filter', '$q', function ($http, $rootScope, $filter, $q) {
		
	var initialized = {value: false};

	// Your variable declarations
	var data = {value: null};
	var detailsItem = {value:null};
	// mock data
	var items = {value: null};
	
	var init = function ($scope) {
		if (initialized.value)
			return;
		
		initialized.value = true;

		// Place your init code here:
		data.value={message:"Welcome to Portal SDK!"};
        // sample data
		items.value = [
			{
                id:'gary-danko-san-francisco',
                name: 'Gary Danko',
                url: 'https://www.yelp.com/biz/gary-danko-san-francisco',
                price: '$$$$',
                rating: 4.5,
                review_count: 4521,
                today_start: '1730',
                today_end: '2200',
                tomorrow_start: '1730',
                today_end: '2200'
			},
		];
	}


	// Expose init(), and variables
	return {
		init: init,
		data: data,
		detailsItem: detailsItem,
		items: items
	};

}])
// Custom directive example
.directive('offCampusFoodsDirectiveName', ['$http', function ($http) {
	return {
		link: function (scope, el, attrs) {

		}
	};
}])
// Custom filter example
.filter('offCampusFoodsFilterName', function () {
	return function (input, arg1, arg2) {
		// Filter your output here by iterating over input elements
		var output = input;
		return output;
	}
});