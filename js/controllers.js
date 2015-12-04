var TheGIFFileApp = angular.module('TheGIFFileApp', []);

TheGIFFileApp.controller('GIFListCtrl', function ($scope) {
	$http.get('gifs.json').success(function(data) {
		$scope.gifs = data;
	});
});