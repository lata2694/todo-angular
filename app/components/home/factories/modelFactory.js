/**
 * Created by Lata Tiwari on 5/18/2017.
 */

angular.module('app')
    .factory('modelFactory', modelFactory);

modelFactory.$inject = ['$log', 'dataFactory'];

function modelFactory($log, dataFactory) {

    var service = {};
    service.userCount = 0;
    service.modeling = modeling;
    return service;

    //////////////////////////////////
    function modeling() {

        return (dataFactory
                .getData()
                .then(function (userList) {

                    $log.debug("userList---------", userList);
                    return (userModel( userList ));
                }) );

        function userModel(userList) {
            $log.debug("userList in userModel-----", userList);

            return userList.map(function (user) {
                $log.debug("main Lists's user----", user);
                return new Users(user);
            });
        }

        function Users(user) {
            this.id = (function () {
                service.userCount = service.userCount + 1;
                return ( service.userCount );
            }());
            this.name = user.name;
            this.proPic = user.pic;
            this.pass = user.password;
            this.userName = user.username;
            this.email = user.email;
            this.email = user.email;
            this.todolist = [];

            var Users = this;

            todoModel (user.todolist, Users.todolist);
        }

        function todoModel (rawTodolist, todolist ) {
            rawTodolist.forEach(function (todo) {
                return ( todolist.push(new Todo(todo)) );
            })
        }

        function Todo(todo) {
            $log.debug("data.todolist-----", todo);
            this.title = todo.title;
            this.description = todo.description;
            this.status = todo.status;
            this.date = new Date();

            Todo.prototype.onStatus = function () {
                return ( ( this.status == "complete" ) ? true : false );
            }
        }
    }
}
