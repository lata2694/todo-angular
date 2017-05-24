/**
 * Created by Lata Tiwari on 5/18/2017.
 */

angular.module('app')
    .factory('filterFactory', filterFactory);

filterFactory.$inject = ['$log', 'modelFactory'];

function filterFactory($log, modelFactory) {

    $log.debug("hi i'm filter factory and i'm working");
    var service = {};
    service.cache = [];
    service.getUser = getUser;
    service.getCache = getCache;
    return service;

    ////////////////////////////////////////////////////

    function getUser() {
        return modelFactory
            .modeling()
            .then(function (user) {
                service.cache = gettingTodo(user);
                return service.cache;
            });
    }


    function getCache() {
        $log.debug("getting cache...");
        return service.cache;
    }

    function gettingTodo(user) {

        return user.map(function (oneUser, key) {

            $log.debug("key--------", key);
            $log.debug("oneUser--------", oneUser);
            $log.debug("current user is--------", oneUser);

            filterTodo(oneUser);

            return oneUser;
        });


    }

    function filterTodo(oneUser) {

        var todos = {
            complete: [],
            incomplete: [],
        };

        oneUser.todolist.forEach(function (todo) {
            if (todo.onStatus()) {
                $log.debug("inside if's if.....item.onStaus--------", todo.onStatus());
                todos.complete.push(todo);

            } else {
                todos.incomplete.push(todo);
            }
        });
        oneUser.todolist = todos;

        return ( oneUser.todolist );
    }

}