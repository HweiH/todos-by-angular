'use strict';

/**
 * @ngdoc function
 * @name todosByAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todosByAngularApp
 */
angular.module('todosByAngularApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    // 从本地缓存中读取Todo
    var todosInStore = localStorageService.get('todos');
    // 初始项
    $scope.todos = todosInStore && todosInStore.split('|') || [];
    // 表单提交
    $scope.addTodo = function() {
      if($scope.todo && '' !== $scope.todo) {
        $scope.todos.push($scope.todo);
      }
      $scope.todo = '';
    };
    // 列表项的删除
    $scope.removeTodo = function(index) {
      $scope.todos.splice(index, 1);
    };

    // 监听本地缓存
    $scope.$watch('todos', function() {
      localStorageService.add('todos', $scope.todos.join('|'));
    }, true);
  });
