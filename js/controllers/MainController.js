app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Golden Age of Science Fiction'; 
  $scope.promo = 'The most popular books this age';
  $scope.products = [
  	{ 
    	name: 'Fahrenheit 451', 
    	price: 25, 
    	pubdate: new Date('1953', '10', '10'), 
    	cover: 'img/Fahrenheit 451.jpg',
    	likes: 0,
    	dislikes: 0
  	}, 
  	{ 
    	name: 'Flowers for Algernon', 
    	price: 18, 
    	pubdate: new Date('1959', '04', '03'), 
    	cover: 'img/Flowers for Algernon.jpg',
    	likes: 0,
    	dislikes: 0
  	}, 
  	{ 
    	name: 'The Time Machine', 
    	price: 22.67, 
    	pubdate: new Date('1895', '11', '08'), 
    	cover: 'img/The Time Machine.jpg',
    	likes: 0,
    	dislikes: 0 
  	}, 
  	{ 
    	name: 'The Da Vinci Code', 
    	price: 24.50, 
    	pubdate: new Date('2003', '03', '16'), 
    	cover: 'img/The Da Vinci Code.jpg',
    	likes: 0,
    	dislikes: 0 
  	}
  ];
  $scope.plusOne = function(index) { 
  	$scope.products[index].likes += 1; 
	};
	$scope.minusOne = function(index) { 
  	$scope.products[index].dislikes += 1; 
	};
}]);
