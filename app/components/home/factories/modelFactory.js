/**
 * Created by Lata Tiwari on 5/18/2017.
 */

angular.module('app')
    .factory('modelFactory', modelFactory);

modelFactory.$inject = ['$log', '$http', 'apiConstant'];

function modelFactory($log, Ajax, api) {

    var service = {};
    service.userCount = 0;
    service.getData = getData;
    return service;

    //////////////////////////////////
    function getData() {

        return Ajax.get(api.url)
            .then(function (response) {
                $log.debug("response---", response);
                $log.debug("data---", response.data);

                return userModel(response.data.users);
            });

        function userModel(userList) {
            $log.debug("userList-----", userList);

            return userList.map(function (oneUser) {

                $log.debug("main Lists's user----", oneUser);
                return new User(oneUser);
            });
        }

        function User(oneUser) {
            this.id = (function () {
                service.userCount = service.userCount + 1;
                return ( service.userCount );
            }());
            this.name = oneUser.name;
            this.proPic = oneUser.pic;
            this.pass = oneUser.password;
            this.userName = oneUser.username;
            this.email = oneUser.email;
            this.email = oneUser.email;
            this.todolist = [];

            var User = this;

            oneUser.todolist.forEach(function (todo) {
                return ( User.todolist.push(new Todo(todo)) );
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
