var app = angular.module('myApp', []);

app.controller('ProfileListController', function ($scope, profileService) {
	$scope.profiles = profileService.profiles;

	$scope.edit = function(selectedProfile) {
		profileService.selectedProfile = selectedProfile;
	}
});

app.controller('ProfileDetailController', function ($scope, profileService) {
	$scope.profileService = profileService;
});

app.service('profileService', function() {
	this.profiles = [
    {
      name: "Twin PanichSombat",
      birthdate: new Date(1975, 3, 3),
    },
    {
      name: "Salah Chalermthai",
      birthdate: new Date(1981, 2, 23),
    },
    {
      name: "Steven Gerrad",
      birthdate: new Date(1980, 4, 30),
    },
    {
      name: "Michael Owen",
      birthdate: new Date(1979, 11, 14),
    },
    {
      name: "Luis Suárez",
      birthdate: new Date(1987, 0, 24),
    },
  ];

	this.selectedProfile = null;
})
