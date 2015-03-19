angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})


//<![CDATA[ 
//************ ME ***************
.controller('TodoCtrl', function($scope){
        $scope.todos = [];

        var Todo = $data.define("Todo", {
            task: String,
            done: Boolean
        });

        Todo.readAll().then(function (todos) {
            $scope.$apply(function () {
                $scope.todos = todos;
            });
        });

        $scope.addNew = function () {
            Todo.save($scope.newTodo).then(function (todo) {
                $scope.$apply(function () {
                    $scope.newTodo = null;
                    $scope.todos.push(todo);
                });
            });
	    };
			
        
		
		$scope.remove = function (id) {
			$data("Todo").read(id).then(function (todo) {
				return todo.remove(); 
			});
			for(i=0;i<$scope.todos.length;i++){ 
				if($scope.todos[i].Id==id){
					$scope.todos.splice(i,1);
				}
			}
		}
	});
//]]>  