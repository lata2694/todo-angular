/**
 * Created by Lata Tiwari on 5/18/2017.
 */

'use strict';

var angular = require('angular');
var app = angular.module('app', ['ui.router']);

var RouteConfigurations = require('./route.js');


app.config(routeConfigurations);


routeConfigurations.$inject = ["$logProvider", "$locationProvider", "$stateProvider", "$urlRouterProvider"];

function routeConfigurations(logProvider, locationProvider, stateProvider, urlRouterProvider) {

    logProvider.debugEnabled(true);

    RouteConfigurations(locationProvider, stateProvider, urlRouterProvider);
}

