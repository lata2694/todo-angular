/**
 * Created by Lata Tiwari on 5/18/2017.
 */

angular.module('app')
    .factory('modelFactory', modelFactory);

modelFactory.$inject = ['$log', '$http', 'apiConstant'];

function modelFactory($log, Ajax, api) {

    var service = {};
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

        function userModel(mainList) {
            $log.debug("mainList-----", mainList);

            return mainList.map(function (item) {

                $log.debug("main Lists's item----", item);
                return new User(item);
            });
        }

        function User(data) {
            this.id = data.id;
            this.name = data.name;
            this.proPic = data.pic;
            this.pass = data.pass;
            this.userName = data.username;
            this.email = data.email;
            this.email = data.email;
            this.toDoList = new Todo (data.todolist);
        }

        function Todo(data) {
            $log.debug("data.todolist-----", data);
            this.title = data.title;
            this.description = data.description;
            this.status = data.status;

            Todo.prototype.onStatus = function () {
                return ( ( this.status == "complete" ) ? true : false );
            }
        }
    }
}