angular.module('tf', [])
.controller('mc', ['$http', '$scope', function($http, $scope){
		$scope.dataset = [{}]
		$scope.spreadsheetId = '1fCNNcAJW4C5_Hco_DxFT33DtVZ36XVujGWhECfISVjQ';
		$scope.sheetid = '0';
		$scope.client_id = '107527709399-ee24p4h1d2q9msns1ue4oaj77a4vjr5h.apps.googleusercontent.com';
		$scope.api_key = 'AIzaSyBVER_7ixBquZnOqmDP45UHavsrpLOymtE';
		console.log('Hello')
		$scope.add = function () {

			$scope.dataset.push({})

			$(document).ready(function () {
		$('select').material_select()
	})
		}

		$scope.remove = function (index) {
			$scope.dataset.splice(index, 1);
			$(document).ready(function () {
		$('select').material_select()
	})
		}

		$scope.save = function() {
			console.log("Clicked")
			console.log($scope.dataset)

		values = []
			angular.forEach($scope.dataset, function(value, key){
						values.push(
							[$scope.ecode, $scope.salutation, $scope.name, value.year, value.course, value.sem, value.sname, value.scode]
							)
			});
			console.log(values)
			$scope.body = {values: values}

		gapi.client.sheets.spreadsheets.values.append({
     spreadsheetId: $scope.spreadsheetId,
     range: 'A1',
     valueInputOption: 'USER_ENTERED',
     insertDataOption: 'INSERT_ROWS',
     resource: $scope.body
  }).then((response) => {
    var result = response.result;
    console.log(result)

    if (result.updates) {
    	if (result.updates.updatedRows) {
    		console.log('Successful!')
    		alert('Saved ' + result.updates.updatedRows + ' subjects successfully!');
    	}
    }
  });


		}
}])