// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "lbServices";
}

(function(window, angular, undefined) {'use strict';

var urlBase = "/api";
var authHeader = 'authorization';

function getHost(url) {
  var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
  return m ? m[1] : null;
}

var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.User
 * @header lbServices.User
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `User` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "User",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Users/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__findById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__destroyById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__updateById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__get__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Queries accessTokens of User.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/Users/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__create__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__delete__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__count__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Counts accessTokens of User.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#create
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#createMany
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#upsert
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Users",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#exists
         * @methodOf lbServices.User
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Users/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Users/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#find
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Users",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findOne
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Users/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#updateAll
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Users/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#deleteById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Users/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#count
         * @methodOf lbServices.User
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Users/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$updateAttributes
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Users/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#createChangeStream
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Users/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#login
         * @methodOf lbServices.User
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/Users/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#logout
         * @methodOf lbServices.User
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/Users/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#confirm
         * @methodOf lbServices.User
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/Users/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#resetPassword
         * @methodOf lbServices.User
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/Users/reset",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/Users" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.User#updateOrCreate
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.User#update
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.User#destroyById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#removeById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#getCachedCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.User#login} or
         * {@link lbServices.User#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A User instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#isAuthenticated
         * @methodOf lbServices.User
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrentId
         * @methodOf lbServices.User
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.User#modelName
    * @propertyOf lbServices.User
    * @description
    * The name of the model represented by this $resource,
    * i.e. `User`.
    */
    R.modelName = "User";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Student
 * @header lbServices.Student
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Student` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Student",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Students/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Student.studentGroups.findById() instead.
        "prototype$__findById__studentGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Students/:id/studentGroups/:fk",
          method: "GET"
        },

        // INTERNAL. Use Student.studentGroups.destroyById() instead.
        "prototype$__destroyById__studentGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Students/:id/studentGroups/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Student.studentGroups.updateById() instead.
        "prototype$__updateById__studentGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Students/:id/studentGroups/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Student.studentGroups.link() instead.
        "prototype$__link__studentGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Students/:id/studentGroups/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Student.studentGroups.unlink() instead.
        "prototype$__unlink__studentGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Students/:id/studentGroups/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Student.studentGroups.exists() instead.
        "prototype$__exists__studentGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Students/:id/studentGroups/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Student.classes.findById() instead.
        "prototype$__findById__classes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Students/:id/classes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Student.classes.destroyById() instead.
        "prototype$__destroyById__classes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Students/:id/classes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Student.classes.updateById() instead.
        "prototype$__updateById__classes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Students/:id/classes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Student.classes.link() instead.
        "prototype$__link__classes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Students/:id/classes/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Student.classes.unlink() instead.
        "prototype$__unlink__classes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Students/:id/classes/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Student.classes.exists() instead.
        "prototype$__exists__classes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Students/:id/classes/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Student.studentGroups() instead.
        "prototype$__get__studentGroups": {
          isArray: true,
          url: urlBase + "/Students/:id/studentGroups",
          method: "GET"
        },

        // INTERNAL. Use Student.studentGroups.create() instead.
        "prototype$__create__studentGroups": {
          url: urlBase + "/Students/:id/studentGroups",
          method: "POST"
        },

        // INTERNAL. Use Student.studentGroups.destroyAll() instead.
        "prototype$__delete__studentGroups": {
          url: urlBase + "/Students/:id/studentGroups",
          method: "DELETE"
        },

        // INTERNAL. Use Student.studentGroups.count() instead.
        "prototype$__count__studentGroups": {
          url: urlBase + "/Students/:id/studentGroups/count",
          method: "GET"
        },

        // INTERNAL. Use Student.classes() instead.
        "prototype$__get__classes": {
          isArray: true,
          url: urlBase + "/Students/:id/classes",
          method: "GET"
        },

        // INTERNAL. Use Student.classes.create() instead.
        "prototype$__create__classes": {
          url: urlBase + "/Students/:id/classes",
          method: "POST"
        },

        // INTERNAL. Use Student.classes.destroyAll() instead.
        "prototype$__delete__classes": {
          url: urlBase + "/Students/:id/classes",
          method: "DELETE"
        },

        // INTERNAL. Use Student.classes.count() instead.
        "prototype$__count__classes": {
          url: urlBase + "/Students/:id/classes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#create
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Students",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#createMany
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Students",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#upsert
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Students",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#exists
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Students/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#findById
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Students/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#find
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Students",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#findOne
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Students/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#updateAll
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Students/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#deleteById
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Students/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#count
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Students/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#prototype$updateAttributes
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Students/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#createChangeStream
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Students/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Class.students.findById() instead.
        "::findById::Class::students": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Classes/:id/students/:fk",
          method: "GET"
        },

        // INTERNAL. Use Class.students.destroyById() instead.
        "::destroyById::Class::students": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Classes/:id/students/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Class.students.updateById() instead.
        "::updateById::Class::students": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Classes/:id/students/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Class.students.link() instead.
        "::link::Class::students": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Classes/:id/students/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Class.students.unlink() instead.
        "::unlink::Class::students": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Classes/:id/students/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Class.students.exists() instead.
        "::exists::Class::students": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Classes/:id/students/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Class.students() instead.
        "::get::Class::students": {
          isArray: true,
          url: urlBase + "/Classes/:id/students",
          method: "GET"
        },

        // INTERNAL. Use Class.students.create() instead.
        "::create::Class::students": {
          url: urlBase + "/Classes/:id/students",
          method: "POST"
        },

        // INTERNAL. Use Class.students.createMany() instead.
        "::createMany::Class::students": {
          isArray: true,
          url: urlBase + "/Classes/:id/students",
          method: "POST"
        },

        // INTERNAL. Use Class.students.destroyAll() instead.
        "::delete::Class::students": {
          url: urlBase + "/Classes/:id/students",
          method: "DELETE"
        },

        // INTERNAL. Use Class.students.count() instead.
        "::count::Class::students": {
          url: urlBase + "/Classes/:id/students/count",
          method: "GET"
        },

        // INTERNAL. Use StudentGroup.students.findById() instead.
        "::findById::StudentGroup::students": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/StudentGroups/:id/students/:fk",
          method: "GET"
        },

        // INTERNAL. Use StudentGroup.students.destroyById() instead.
        "::destroyById::StudentGroup::students": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/StudentGroups/:id/students/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use StudentGroup.students.updateById() instead.
        "::updateById::StudentGroup::students": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/StudentGroups/:id/students/:fk",
          method: "PUT"
        },

        // INTERNAL. Use StudentGroup.students.link() instead.
        "::link::StudentGroup::students": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/StudentGroups/:id/students/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use StudentGroup.students.unlink() instead.
        "::unlink::StudentGroup::students": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/StudentGroups/:id/students/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use StudentGroup.students.exists() instead.
        "::exists::StudentGroup::students": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/StudentGroups/:id/students/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use StudentGroup.students() instead.
        "::get::StudentGroup::students": {
          isArray: true,
          url: urlBase + "/StudentGroups/:id/students",
          method: "GET"
        },

        // INTERNAL. Use StudentGroup.students.create() instead.
        "::create::StudentGroup::students": {
          url: urlBase + "/StudentGroups/:id/students",
          method: "POST"
        },

        // INTERNAL. Use StudentGroup.students.createMany() instead.
        "::createMany::StudentGroup::students": {
          isArray: true,
          url: urlBase + "/StudentGroups/:id/students",
          method: "POST"
        },

        // INTERNAL. Use StudentGroup.students.destroyAll() instead.
        "::delete::StudentGroup::students": {
          url: urlBase + "/StudentGroups/:id/students",
          method: "DELETE"
        },

        // INTERNAL. Use StudentGroup.students.count() instead.
        "::count::StudentGroup::students": {
          url: urlBase + "/StudentGroups/:id/students/count",
          method: "GET"
        },

        // INTERNAL. Use Seating.student() instead.
        "::get::Seating::student": {
          url: urlBase + "/Seatings/:id/student",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Student#updateOrCreate
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Student#update
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Student#destroyById
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Student#removeById
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Student#modelName
    * @propertyOf lbServices.Student
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Student`.
    */
    R.modelName = "Student";

    /**
     * @ngdoc object
     * @name lbServices.Student.studentGroups
     * @header lbServices.Student.studentGroups
     * @object
     * @description
     *
     * The object `Student.studentGroups` groups methods
     * manipulating `StudentGroup` instances related to `Student`.
     *
     * Call {@link lbServices.Student#studentGroups Student.studentGroups()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Student#studentGroups
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Queries studentGroups of Student.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StudentGroup` object.)
         * </em>
         */
        R.studentGroups = function() {
          var TargetResource = $injector.get("StudentGroup");
          var action = TargetResource["::get::Student::studentGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.studentGroups#count
         * @methodOf lbServices.Student.studentGroups
         *
         * @description
         *
         * Counts studentGroups of Student.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.studentGroups.count = function() {
          var TargetResource = $injector.get("StudentGroup");
          var action = TargetResource["::count::Student::studentGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.studentGroups#create
         * @methodOf lbServices.Student.studentGroups
         *
         * @description
         *
         * Creates a new instance in studentGroups of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StudentGroup` object.)
         * </em>
         */
        R.studentGroups.create = function() {
          var TargetResource = $injector.get("StudentGroup");
          var action = TargetResource["::create::Student::studentGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.studentGroups#createMany
         * @methodOf lbServices.Student.studentGroups
         *
         * @description
         *
         * Creates a new instance in studentGroups of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StudentGroup` object.)
         * </em>
         */
        R.studentGroups.createMany = function() {
          var TargetResource = $injector.get("StudentGroup");
          var action = TargetResource["::createMany::Student::studentGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.studentGroups#destroyAll
         * @methodOf lbServices.Student.studentGroups
         *
         * @description
         *
         * Deletes all studentGroups of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.studentGroups.destroyAll = function() {
          var TargetResource = $injector.get("StudentGroup");
          var action = TargetResource["::delete::Student::studentGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.studentGroups#destroyById
         * @methodOf lbServices.Student.studentGroups
         *
         * @description
         *
         * Delete a related item by id for studentGroups.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for studentGroups
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.studentGroups.destroyById = function() {
          var TargetResource = $injector.get("StudentGroup");
          var action = TargetResource["::destroyById::Student::studentGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.studentGroups#exists
         * @methodOf lbServices.Student.studentGroups
         *
         * @description
         *
         * Check the existence of studentGroups relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for studentGroups
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StudentGroup` object.)
         * </em>
         */
        R.studentGroups.exists = function() {
          var TargetResource = $injector.get("StudentGroup");
          var action = TargetResource["::exists::Student::studentGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.studentGroups#findById
         * @methodOf lbServices.Student.studentGroups
         *
         * @description
         *
         * Find a related item by id for studentGroups.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for studentGroups
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StudentGroup` object.)
         * </em>
         */
        R.studentGroups.findById = function() {
          var TargetResource = $injector.get("StudentGroup");
          var action = TargetResource["::findById::Student::studentGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.studentGroups#link
         * @methodOf lbServices.Student.studentGroups
         *
         * @description
         *
         * Add a related item by id for studentGroups.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for studentGroups
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StudentGroup` object.)
         * </em>
         */
        R.studentGroups.link = function() {
          var TargetResource = $injector.get("StudentGroup");
          var action = TargetResource["::link::Student::studentGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.studentGroups#unlink
         * @methodOf lbServices.Student.studentGroups
         *
         * @description
         *
         * Remove the studentGroups relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for studentGroups
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.studentGroups.unlink = function() {
          var TargetResource = $injector.get("StudentGroup");
          var action = TargetResource["::unlink::Student::studentGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.studentGroups#updateById
         * @methodOf lbServices.Student.studentGroups
         *
         * @description
         *
         * Update a related item by id for studentGroups.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for studentGroups
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StudentGroup` object.)
         * </em>
         */
        R.studentGroups.updateById = function() {
          var TargetResource = $injector.get("StudentGroup");
          var action = TargetResource["::updateById::Student::studentGroups"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Student.classes
     * @header lbServices.Student.classes
     * @object
     * @description
     *
     * The object `Student.classes` groups methods
     * manipulating `Class` instances related to `Student`.
     *
     * Call {@link lbServices.Student#classes Student.classes()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Student#classes
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Queries classes of Student.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R.classes = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::get::Student::classes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.classes#count
         * @methodOf lbServices.Student.classes
         *
         * @description
         *
         * Counts classes of Student.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.classes.count = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::count::Student::classes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.classes#create
         * @methodOf lbServices.Student.classes
         *
         * @description
         *
         * Creates a new instance in classes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R.classes.create = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::create::Student::classes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.classes#createMany
         * @methodOf lbServices.Student.classes
         *
         * @description
         *
         * Creates a new instance in classes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R.classes.createMany = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::createMany::Student::classes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.classes#destroyAll
         * @methodOf lbServices.Student.classes
         *
         * @description
         *
         * Deletes all classes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.classes.destroyAll = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::delete::Student::classes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.classes#destroyById
         * @methodOf lbServices.Student.classes
         *
         * @description
         *
         * Delete a related item by id for classes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for classes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.classes.destroyById = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::destroyById::Student::classes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.classes#exists
         * @methodOf lbServices.Student.classes
         *
         * @description
         *
         * Check the existence of classes relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for classes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R.classes.exists = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::exists::Student::classes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.classes#findById
         * @methodOf lbServices.Student.classes
         *
         * @description
         *
         * Find a related item by id for classes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for classes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R.classes.findById = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::findById::Student::classes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.classes#link
         * @methodOf lbServices.Student.classes
         *
         * @description
         *
         * Add a related item by id for classes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for classes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R.classes.link = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::link::Student::classes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.classes#unlink
         * @methodOf lbServices.Student.classes
         *
         * @description
         *
         * Remove the classes relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for classes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.classes.unlink = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::unlink::Student::classes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.classes#updateById
         * @methodOf lbServices.Student.classes
         *
         * @description
         *
         * Update a related item by id for classes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for classes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R.classes.updateById = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::updateById::Student::classes"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Teacher
 * @header lbServices.Teacher
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Teacher` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Teacher",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Teachers/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Teacher#prototype$__findById__accessTokens
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Teachers/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#prototype$__destroyById__accessTokens
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Teachers/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#prototype$__updateById__accessTokens
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Teachers/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Teacher.lessons.findById() instead.
        "prototype$__findById__lessons": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Teachers/:id/lessons/:fk",
          method: "GET"
        },

        // INTERNAL. Use Teacher.lessons.destroyById() instead.
        "prototype$__destroyById__lessons": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Teachers/:id/lessons/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Teacher.lessons.updateById() instead.
        "prototype$__updateById__lessons": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Teachers/:id/lessons/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Teacher.lessonNotes.findById() instead.
        "prototype$__findById__lessonNotes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Teachers/:id/lessonNotes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Teacher.lessonNotes.destroyById() instead.
        "prototype$__destroyById__lessonNotes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Teachers/:id/lessonNotes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Teacher.lessonNotes.updateById() instead.
        "prototype$__updateById__lessonNotes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Teachers/:id/lessonNotes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Teacher.learningSessions.findById() instead.
        "prototype$__findById__learningSessions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Teachers/:id/learningSessions/:fk",
          method: "GET"
        },

        // INTERNAL. Use Teacher.learningSessions.destroyById() instead.
        "prototype$__destroyById__learningSessions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Teachers/:id/learningSessions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Teacher.learningSessions.updateById() instead.
        "prototype$__updateById__learningSessions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Teachers/:id/learningSessions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Teacher.learningSessions.link() instead.
        "prototype$__link__learningSessions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Teachers/:id/learningSessions/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Teacher.learningSessions.unlink() instead.
        "prototype$__unlink__learningSessions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Teachers/:id/learningSessions/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Teacher.learningSessions.exists() instead.
        "prototype$__exists__learningSessions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Teachers/:id/learningSessions/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Teacher.weeklySchedules.findById() instead.
        "prototype$__findById__weeklySchedules": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Teachers/:id/weeklySchedules/:fk",
          method: "GET"
        },

        // INTERNAL. Use Teacher.weeklySchedules.destroyById() instead.
        "prototype$__destroyById__weeklySchedules": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Teachers/:id/weeklySchedules/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Teacher.weeklySchedules.updateById() instead.
        "prototype$__updateById__weeklySchedules": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Teachers/:id/weeklySchedules/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#prototype$__get__accessTokens
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Queries accessTokens of Teacher.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/Teachers/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#prototype$__create__accessTokens
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/Teachers/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#prototype$__delete__accessTokens
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/Teachers/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#prototype$__count__accessTokens
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Counts accessTokens of Teacher.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/Teachers/:id/accessTokens/count",
          method: "GET"
        },

        // INTERNAL. Use Teacher.lessons() instead.
        "prototype$__get__lessons": {
          isArray: true,
          url: urlBase + "/Teachers/:id/lessons",
          method: "GET"
        },

        // INTERNAL. Use Teacher.lessons.create() instead.
        "prototype$__create__lessons": {
          url: urlBase + "/Teachers/:id/lessons",
          method: "POST"
        },

        // INTERNAL. Use Teacher.lessons.destroyAll() instead.
        "prototype$__delete__lessons": {
          url: urlBase + "/Teachers/:id/lessons",
          method: "DELETE"
        },

        // INTERNAL. Use Teacher.lessons.count() instead.
        "prototype$__count__lessons": {
          url: urlBase + "/Teachers/:id/lessons/count",
          method: "GET"
        },

        // INTERNAL. Use Teacher.lessonNotes() instead.
        "prototype$__get__lessonNotes": {
          isArray: true,
          url: urlBase + "/Teachers/:id/lessonNotes",
          method: "GET"
        },

        // INTERNAL. Use Teacher.lessonNotes.create() instead.
        "prototype$__create__lessonNotes": {
          url: urlBase + "/Teachers/:id/lessonNotes",
          method: "POST"
        },

        // INTERNAL. Use Teacher.lessonNotes.destroyAll() instead.
        "prototype$__delete__lessonNotes": {
          url: urlBase + "/Teachers/:id/lessonNotes",
          method: "DELETE"
        },

        // INTERNAL. Use Teacher.lessonNotes.count() instead.
        "prototype$__count__lessonNotes": {
          url: urlBase + "/Teachers/:id/lessonNotes/count",
          method: "GET"
        },

        // INTERNAL. Use Teacher.learningSessions() instead.
        "prototype$__get__learningSessions": {
          isArray: true,
          url: urlBase + "/Teachers/:id/learningSessions",
          method: "GET"
        },

        // INTERNAL. Use Teacher.learningSessions.create() instead.
        "prototype$__create__learningSessions": {
          url: urlBase + "/Teachers/:id/learningSessions",
          method: "POST"
        },

        // INTERNAL. Use Teacher.learningSessions.destroyAll() instead.
        "prototype$__delete__learningSessions": {
          url: urlBase + "/Teachers/:id/learningSessions",
          method: "DELETE"
        },

        // INTERNAL. Use Teacher.learningSessions.count() instead.
        "prototype$__count__learningSessions": {
          url: urlBase + "/Teachers/:id/learningSessions/count",
          method: "GET"
        },

        // INTERNAL. Use Teacher.weeklySchedules() instead.
        "prototype$__get__weeklySchedules": {
          isArray: true,
          url: urlBase + "/Teachers/:id/weeklySchedules",
          method: "GET"
        },

        // INTERNAL. Use Teacher.weeklySchedules.create() instead.
        "prototype$__create__weeklySchedules": {
          url: urlBase + "/Teachers/:id/weeklySchedules",
          method: "POST"
        },

        // INTERNAL. Use Teacher.weeklySchedules.destroyAll() instead.
        "prototype$__delete__weeklySchedules": {
          url: urlBase + "/Teachers/:id/weeklySchedules",
          method: "DELETE"
        },

        // INTERNAL. Use Teacher.weeklySchedules.count() instead.
        "prototype$__count__weeklySchedules": {
          url: urlBase + "/Teachers/:id/weeklySchedules/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#create
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Teachers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#createMany
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Teachers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#upsert
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Teachers",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#exists
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Teachers/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#findById
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Teachers/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#find
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Teachers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#findOne
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Teachers/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#updateAll
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Teachers/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#deleteById
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Teachers/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#count
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Teachers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#prototype$updateAttributes
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Teachers/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#createChangeStream
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Teachers/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#login
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/Teachers/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#logout
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/Teachers/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#confirm
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/Teachers/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#resetPassword
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/Teachers/reset",
          method: "POST"
        },

        // INTERNAL. Use Lesson.teacher() instead.
        "::get::Lesson::teacher": {
          url: urlBase + "/Lessons/:id/teacher",
          method: "GET"
        },

        // INTERNAL. Use LessonNote.author() instead.
        "::get::LessonNote::author": {
          url: urlBase + "/LessonNotes/:id/author",
          method: "GET"
        },

        // INTERNAL. Use LearningSession.teachers.findById() instead.
        "::findById::LearningSession::teachers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/LearningSessions/:id/teachers/:fk",
          method: "GET"
        },

        // INTERNAL. Use LearningSession.teachers.destroyById() instead.
        "::destroyById::LearningSession::teachers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/LearningSessions/:id/teachers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use LearningSession.teachers.updateById() instead.
        "::updateById::LearningSession::teachers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/LearningSessions/:id/teachers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use LearningSession.teachers.link() instead.
        "::link::LearningSession::teachers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/LearningSessions/:id/teachers/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use LearningSession.teachers.unlink() instead.
        "::unlink::LearningSession::teachers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/LearningSessions/:id/teachers/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use LearningSession.teachers.exists() instead.
        "::exists::LearningSession::teachers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/LearningSessions/:id/teachers/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use LearningSession.teachers() instead.
        "::get::LearningSession::teachers": {
          isArray: true,
          url: urlBase + "/LearningSessions/:id/teachers",
          method: "GET"
        },

        // INTERNAL. Use LearningSession.teachers.create() instead.
        "::create::LearningSession::teachers": {
          url: urlBase + "/LearningSessions/:id/teachers",
          method: "POST"
        },

        // INTERNAL. Use LearningSession.teachers.createMany() instead.
        "::createMany::LearningSession::teachers": {
          isArray: true,
          url: urlBase + "/LearningSessions/:id/teachers",
          method: "POST"
        },

        // INTERNAL. Use LearningSession.teachers.destroyAll() instead.
        "::delete::LearningSession::teachers": {
          url: urlBase + "/LearningSessions/:id/teachers",
          method: "DELETE"
        },

        // INTERNAL. Use LearningSession.teachers.count() instead.
        "::count::LearningSession::teachers": {
          url: urlBase + "/LearningSessions/:id/teachers/count",
          method: "GET"
        },

        // INTERNAL. Use WeeklySchedule.teacher() instead.
        "::get::WeeklySchedule::teacher": {
          url: urlBase + "/WeeklySchedules/:id/teacher",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#getCurrent
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/Teachers" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Teacher#updateOrCreate
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Teacher#update
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Teacher#destroyById
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Teacher#removeById
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Teacher#getCachedCurrent
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.Teacher#login} or
         * {@link lbServices.Teacher#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Teacher instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Teacher#isAuthenticated
         * @methodOf lbServices.Teacher
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Teacher#getCurrentId
         * @methodOf lbServices.Teacher
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.Teacher#modelName
    * @propertyOf lbServices.Teacher
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Teacher`.
    */
    R.modelName = "Teacher";

    /**
     * @ngdoc object
     * @name lbServices.Teacher.lessons
     * @header lbServices.Teacher.lessons
     * @object
     * @description
     *
     * The object `Teacher.lessons` groups methods
     * manipulating `Lesson` instances related to `Teacher`.
     *
     * Call {@link lbServices.Teacher#lessons Teacher.lessons()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Teacher#lessons
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Queries lessons of Teacher.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lesson` object.)
         * </em>
         */
        R.lessons = function() {
          var TargetResource = $injector.get("Lesson");
          var action = TargetResource["::get::Teacher::lessons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Teacher.lessons#count
         * @methodOf lbServices.Teacher.lessons
         *
         * @description
         *
         * Counts lessons of Teacher.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.lessons.count = function() {
          var TargetResource = $injector.get("Lesson");
          var action = TargetResource["::count::Teacher::lessons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Teacher.lessons#create
         * @methodOf lbServices.Teacher.lessons
         *
         * @description
         *
         * Creates a new instance in lessons of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lesson` object.)
         * </em>
         */
        R.lessons.create = function() {
          var TargetResource = $injector.get("Lesson");
          var action = TargetResource["::create::Teacher::lessons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Teacher.lessons#createMany
         * @methodOf lbServices.Teacher.lessons
         *
         * @description
         *
         * Creates a new instance in lessons of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lesson` object.)
         * </em>
         */
        R.lessons.createMany = function() {
          var TargetResource = $injector.get("Lesson");
          var action = TargetResource["::createMany::Teacher::lessons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Teacher.lessons#destroyAll
         * @methodOf lbServices.Teacher.lessons
         *
         * @description
         *
         * Deletes all lessons of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.lessons.destroyAll = function() {
          var TargetResource = $injector.get("Lesson");
          var action = TargetResource["::delete::Teacher::lessons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Teacher.lessons#destroyById
         * @methodOf lbServices.Teacher.lessons
         *
         * @description
         *
         * Delete a related item by id for lessons.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for lessons
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.lessons.destroyById = function() {
          var TargetResource = $injector.get("Lesson");
          var action = TargetResource["::destroyById::Teacher::lessons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Teacher.lessons#findById
         * @methodOf lbServices.Teacher.lessons
         *
         * @description
         *
         * Find a related item by id for lessons.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for lessons
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lesson` object.)
         * </em>
         */
        R.lessons.findById = function() {
          var TargetResource = $injector.get("Lesson");
          var action = TargetResource["::findById::Teacher::lessons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Teacher.lessons#updateById
         * @methodOf lbServices.Teacher.lessons
         *
         * @description
         *
         * Update a related item by id for lessons.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for lessons
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lesson` object.)
         * </em>
         */
        R.lessons.updateById = function() {
          var TargetResource = $injector.get("Lesson");
          var action = TargetResource["::updateById::Teacher::lessons"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Teacher.lessonNotes
     * @header lbServices.Teacher.lessonNotes
     * @object
     * @description
     *
     * The object `Teacher.lessonNotes` groups methods
     * manipulating `LessonNote` instances related to `Teacher`.
     *
     * Call {@link lbServices.Teacher#lessonNotes Teacher.lessonNotes()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Teacher#lessonNotes
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Queries lessonNotes of Teacher.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LessonNote` object.)
         * </em>
         */
        R.lessonNotes = function() {
          var TargetResource = $injector.get("LessonNote");
          var action = TargetResource["::get::Teacher::lessonNotes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Teacher.lessonNotes#count
         * @methodOf lbServices.Teacher.lessonNotes
         *
         * @description
         *
         * Counts lessonNotes of Teacher.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.lessonNotes.count = function() {
          var TargetResource = $injector.get("LessonNote");
          var action = TargetResource["::count::Teacher::lessonNotes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Teacher.lessonNotes#create
         * @methodOf lbServices.Teacher.lessonNotes
         *
         * @description
         *
         * Creates a new instance in lessonNotes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LessonNote` object.)
         * </em>
         */
        R.lessonNotes.create = function() {
          var TargetResource = $injector.get("LessonNote");
          var action = TargetResource["::create::Teacher::lessonNotes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Teacher.lessonNotes#createMany
         * @methodOf lbServices.Teacher.lessonNotes
         *
         * @description
         *
         * Creates a new instance in lessonNotes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LessonNote` object.)
         * </em>
         */
        R.lessonNotes.createMany = function() {
          var TargetResource = $injector.get("LessonNote");
          var action = TargetResource["::createMany::Teacher::lessonNotes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Teacher.lessonNotes#destroyAll
         * @methodOf lbServices.Teacher.lessonNotes
         *
         * @description
         *
         * Deletes all lessonNotes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.lessonNotes.destroyAll = function() {
          var TargetResource = $injector.get("LessonNote");
          var action = TargetResource["::delete::Teacher::lessonNotes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Teacher.lessonNotes#destroyById
         * @methodOf lbServices.Teacher.lessonNotes
         *
         * @description
         *
         * Delete a related item by id for lessonNotes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for lessonNotes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.lessonNotes.destroyById = function() {
          var TargetResource = $injector.get("LessonNote");
          var action = TargetResource["::destroyById::Teacher::lessonNotes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Teacher.lessonNotes#findById
         * @methodOf lbServices.Teacher.lessonNotes
         *
         * @description
         *
         * Find a related item by id for lessonNotes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for lessonNotes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LessonNote` object.)
         * </em>
         */
        R.lessonNotes.findById = function() {
          var TargetResource = $injector.get("LessonNote");
          var action = TargetResource["::findById::Teacher::lessonNotes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Teacher.lessonNotes#updateById
         * @methodOf lbServices.Teacher.lessonNotes
         *
         * @description
         *
         * Update a related item by id for lessonNotes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for lessonNotes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LessonNote` object.)
         * </em>
         */
        R.lessonNotes.updateById = function() {
          var TargetResource = $injector.get("LessonNote");
          var action = TargetResource["::updateById::Teacher::lessonNotes"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Teacher.learningSessions
     * @header lbServices.Teacher.learningSessions
     * @object
     * @description
     *
     * The object `Teacher.learningSessions` groups methods
     * manipulating `LearningSession` instances related to `Teacher`.
     *
     * Call {@link lbServices.Teacher#learningSessions Teacher.learningSessions()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Teacher#learningSessions
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Queries learningSessions of Teacher.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LearningSession` object.)
         * </em>
         */
        R.learningSessions = function() {
          var TargetResource = $injector.get("LearningSession");
          var action = TargetResource["::get::Teacher::learningSessions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Teacher.learningSessions#count
         * @methodOf lbServices.Teacher.learningSessions
         *
         * @description
         *
         * Counts learningSessions of Teacher.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.learningSessions.count = function() {
          var TargetResource = $injector.get("LearningSession");
          var action = TargetResource["::count::Teacher::learningSessions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Teacher.learningSessions#create
         * @methodOf lbServices.Teacher.learningSessions
         *
         * @description
         *
         * Creates a new instance in learningSessions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LearningSession` object.)
         * </em>
         */
        R.learningSessions.create = function() {
          var TargetResource = $injector.get("LearningSession");
          var action = TargetResource["::create::Teacher::learningSessions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Teacher.learningSessions#createMany
         * @methodOf lbServices.Teacher.learningSessions
         *
         * @description
         *
         * Creates a new instance in learningSessions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LearningSession` object.)
         * </em>
         */
        R.learningSessions.createMany = function() {
          var TargetResource = $injector.get("LearningSession");
          var action = TargetResource["::createMany::Teacher::learningSessions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Teacher.learningSessions#destroyAll
         * @methodOf lbServices.Teacher.learningSessions
         *
         * @description
         *
         * Deletes all learningSessions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.learningSessions.destroyAll = function() {
          var TargetResource = $injector.get("LearningSession");
          var action = TargetResource["::delete::Teacher::learningSessions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Teacher.learningSessions#destroyById
         * @methodOf lbServices.Teacher.learningSessions
         *
         * @description
         *
         * Delete a related item by id for learningSessions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for learningSessions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.learningSessions.destroyById = function() {
          var TargetResource = $injector.get("LearningSession");
          var action = TargetResource["::destroyById::Teacher::learningSessions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Teacher.learningSessions#exists
         * @methodOf lbServices.Teacher.learningSessions
         *
         * @description
         *
         * Check the existence of learningSessions relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for learningSessions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LearningSession` object.)
         * </em>
         */
        R.learningSessions.exists = function() {
          var TargetResource = $injector.get("LearningSession");
          var action = TargetResource["::exists::Teacher::learningSessions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Teacher.learningSessions#findById
         * @methodOf lbServices.Teacher.learningSessions
         *
         * @description
         *
         * Find a related item by id for learningSessions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for learningSessions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LearningSession` object.)
         * </em>
         */
        R.learningSessions.findById = function() {
          var TargetResource = $injector.get("LearningSession");
          var action = TargetResource["::findById::Teacher::learningSessions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Teacher.learningSessions#link
         * @methodOf lbServices.Teacher.learningSessions
         *
         * @description
         *
         * Add a related item by id for learningSessions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for learningSessions
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LearningSession` object.)
         * </em>
         */
        R.learningSessions.link = function() {
          var TargetResource = $injector.get("LearningSession");
          var action = TargetResource["::link::Teacher::learningSessions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Teacher.learningSessions#unlink
         * @methodOf lbServices.Teacher.learningSessions
         *
         * @description
         *
         * Remove the learningSessions relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for learningSessions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.learningSessions.unlink = function() {
          var TargetResource = $injector.get("LearningSession");
          var action = TargetResource["::unlink::Teacher::learningSessions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Teacher.learningSessions#updateById
         * @methodOf lbServices.Teacher.learningSessions
         *
         * @description
         *
         * Update a related item by id for learningSessions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for learningSessions
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LearningSession` object.)
         * </em>
         */
        R.learningSessions.updateById = function() {
          var TargetResource = $injector.get("LearningSession");
          var action = TargetResource["::updateById::Teacher::learningSessions"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Teacher.weeklySchedules
     * @header lbServices.Teacher.weeklySchedules
     * @object
     * @description
     *
     * The object `Teacher.weeklySchedules` groups methods
     * manipulating `WeeklySchedule` instances related to `Teacher`.
     *
     * Call {@link lbServices.Teacher#weeklySchedules Teacher.weeklySchedules()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Teacher#weeklySchedules
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Queries weeklySchedules of Teacher.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WeeklySchedule` object.)
         * </em>
         */
        R.weeklySchedules = function() {
          var TargetResource = $injector.get("WeeklySchedule");
          var action = TargetResource["::get::Teacher::weeklySchedules"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Teacher.weeklySchedules#count
         * @methodOf lbServices.Teacher.weeklySchedules
         *
         * @description
         *
         * Counts weeklySchedules of Teacher.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.weeklySchedules.count = function() {
          var TargetResource = $injector.get("WeeklySchedule");
          var action = TargetResource["::count::Teacher::weeklySchedules"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Teacher.weeklySchedules#create
         * @methodOf lbServices.Teacher.weeklySchedules
         *
         * @description
         *
         * Creates a new instance in weeklySchedules of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WeeklySchedule` object.)
         * </em>
         */
        R.weeklySchedules.create = function() {
          var TargetResource = $injector.get("WeeklySchedule");
          var action = TargetResource["::create::Teacher::weeklySchedules"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Teacher.weeklySchedules#createMany
         * @methodOf lbServices.Teacher.weeklySchedules
         *
         * @description
         *
         * Creates a new instance in weeklySchedules of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WeeklySchedule` object.)
         * </em>
         */
        R.weeklySchedules.createMany = function() {
          var TargetResource = $injector.get("WeeklySchedule");
          var action = TargetResource["::createMany::Teacher::weeklySchedules"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Teacher.weeklySchedules#destroyAll
         * @methodOf lbServices.Teacher.weeklySchedules
         *
         * @description
         *
         * Deletes all weeklySchedules of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.weeklySchedules.destroyAll = function() {
          var TargetResource = $injector.get("WeeklySchedule");
          var action = TargetResource["::delete::Teacher::weeklySchedules"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Teacher.weeklySchedules#destroyById
         * @methodOf lbServices.Teacher.weeklySchedules
         *
         * @description
         *
         * Delete a related item by id for weeklySchedules.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for weeklySchedules
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.weeklySchedules.destroyById = function() {
          var TargetResource = $injector.get("WeeklySchedule");
          var action = TargetResource["::destroyById::Teacher::weeklySchedules"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Teacher.weeklySchedules#findById
         * @methodOf lbServices.Teacher.weeklySchedules
         *
         * @description
         *
         * Find a related item by id for weeklySchedules.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for weeklySchedules
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WeeklySchedule` object.)
         * </em>
         */
        R.weeklySchedules.findById = function() {
          var TargetResource = $injector.get("WeeklySchedule");
          var action = TargetResource["::findById::Teacher::weeklySchedules"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Teacher.weeklySchedules#updateById
         * @methodOf lbServices.Teacher.weeklySchedules
         *
         * @description
         *
         * Update a related item by id for weeklySchedules.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for weeklySchedules
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WeeklySchedule` object.)
         * </em>
         */
        R.weeklySchedules.updateById = function() {
          var TargetResource = $injector.get("WeeklySchedule");
          var action = TargetResource["::updateById::Teacher::weeklySchedules"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Class
 * @header lbServices.Class
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Class` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Class",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Classes/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Class.term() instead.
        "prototype$__get__term": {
          url: urlBase + "/Classes/:id/term",
          method: "GET"
        },

        // INTERNAL. Use Class.students.findById() instead.
        "prototype$__findById__students": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Classes/:id/students/:fk",
          method: "GET"
        },

        // INTERNAL. Use Class.students.destroyById() instead.
        "prototype$__destroyById__students": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Classes/:id/students/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Class.students.updateById() instead.
        "prototype$__updateById__students": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Classes/:id/students/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Class.students.link() instead.
        "prototype$__link__students": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Classes/:id/students/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Class.students.unlink() instead.
        "prototype$__unlink__students": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Classes/:id/students/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Class.students.exists() instead.
        "prototype$__exists__students": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Classes/:id/students/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Class.students() instead.
        "prototype$__get__students": {
          isArray: true,
          url: urlBase + "/Classes/:id/students",
          method: "GET"
        },

        // INTERNAL. Use Class.students.create() instead.
        "prototype$__create__students": {
          url: urlBase + "/Classes/:id/students",
          method: "POST"
        },

        // INTERNAL. Use Class.students.destroyAll() instead.
        "prototype$__delete__students": {
          url: urlBase + "/Classes/:id/students",
          method: "DELETE"
        },

        // INTERNAL. Use Class.students.count() instead.
        "prototype$__count__students": {
          url: urlBase + "/Classes/:id/students/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Class#create
         * @methodOf lbServices.Class
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Classes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Class#createMany
         * @methodOf lbServices.Class
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Classes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Class#upsert
         * @methodOf lbServices.Class
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Classes",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Class#exists
         * @methodOf lbServices.Class
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Classes/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Class#findById
         * @methodOf lbServices.Class
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Classes/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Class#find
         * @methodOf lbServices.Class
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Classes",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Class#findOne
         * @methodOf lbServices.Class
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Classes/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Class#updateAll
         * @methodOf lbServices.Class
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Classes/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Class#deleteById
         * @methodOf lbServices.Class
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Classes/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Class#count
         * @methodOf lbServices.Class
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Classes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Class#prototype$updateAttributes
         * @methodOf lbServices.Class
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Classes/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Class#createChangeStream
         * @methodOf lbServices.Class
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Classes/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Student.classes.findById() instead.
        "::findById::Student::classes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Students/:id/classes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Student.classes.destroyById() instead.
        "::destroyById::Student::classes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Students/:id/classes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Student.classes.updateById() instead.
        "::updateById::Student::classes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Students/:id/classes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Student.classes.link() instead.
        "::link::Student::classes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Students/:id/classes/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Student.classes.unlink() instead.
        "::unlink::Student::classes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Students/:id/classes/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Student.classes.exists() instead.
        "::exists::Student::classes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Students/:id/classes/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Student.classes() instead.
        "::get::Student::classes": {
          isArray: true,
          url: urlBase + "/Students/:id/classes",
          method: "GET"
        },

        // INTERNAL. Use Student.classes.create() instead.
        "::create::Student::classes": {
          url: urlBase + "/Students/:id/classes",
          method: "POST"
        },

        // INTERNAL. Use Student.classes.createMany() instead.
        "::createMany::Student::classes": {
          isArray: true,
          url: urlBase + "/Students/:id/classes",
          method: "POST"
        },

        // INTERNAL. Use Student.classes.destroyAll() instead.
        "::delete::Student::classes": {
          url: urlBase + "/Students/:id/classes",
          method: "DELETE"
        },

        // INTERNAL. Use Student.classes.count() instead.
        "::count::Student::classes": {
          url: urlBase + "/Students/:id/classes/count",
          method: "GET"
        },

        // INTERNAL. Use Term.classes.findById() instead.
        "::findById::Term::classes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Terms/:id/classes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Term.classes.destroyById() instead.
        "::destroyById::Term::classes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Terms/:id/classes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Term.classes.updateById() instead.
        "::updateById::Term::classes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Terms/:id/classes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Term.classes() instead.
        "::get::Term::classes": {
          isArray: true,
          url: urlBase + "/Terms/:id/classes",
          method: "GET"
        },

        // INTERNAL. Use Term.classes.create() instead.
        "::create::Term::classes": {
          url: urlBase + "/Terms/:id/classes",
          method: "POST"
        },

        // INTERNAL. Use Term.classes.createMany() instead.
        "::createMany::Term::classes": {
          isArray: true,
          url: urlBase + "/Terms/:id/classes",
          method: "POST"
        },

        // INTERNAL. Use Term.classes.destroyAll() instead.
        "::delete::Term::classes": {
          url: urlBase + "/Terms/:id/classes",
          method: "DELETE"
        },

        // INTERNAL. Use Term.classes.count() instead.
        "::count::Term::classes": {
          url: urlBase + "/Terms/:id/classes/count",
          method: "GET"
        },

        // INTERNAL. Use Seating.class() instead.
        "::get::Seating::class": {
          url: urlBase + "/Seatings/:id/class",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Class#updateOrCreate
         * @methodOf lbServices.Class
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Class#update
         * @methodOf lbServices.Class
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Class#destroyById
         * @methodOf lbServices.Class
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Class#removeById
         * @methodOf lbServices.Class
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Class#modelName
    * @propertyOf lbServices.Class
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Class`.
    */
    R.modelName = "Class";


        /**
         * @ngdoc method
         * @name lbServices.Class#term
         * @methodOf lbServices.Class
         *
         * @description
         *
         * Fetches belongsTo relation term.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Term` object.)
         * </em>
         */
        R.term = function() {
          var TargetResource = $injector.get("Term");
          var action = TargetResource["::get::Class::term"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Class.students
     * @header lbServices.Class.students
     * @object
     * @description
     *
     * The object `Class.students` groups methods
     * manipulating `Student` instances related to `Class`.
     *
     * Call {@link lbServices.Class#students Class.students()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Class#students
         * @methodOf lbServices.Class
         *
         * @description
         *
         * Queries students of Class.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R.students = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::get::Class::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Class.students#count
         * @methodOf lbServices.Class.students
         *
         * @description
         *
         * Counts students of Class.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.students.count = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::count::Class::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Class.students#create
         * @methodOf lbServices.Class.students
         *
         * @description
         *
         * Creates a new instance in students of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R.students.create = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::create::Class::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Class.students#createMany
         * @methodOf lbServices.Class.students
         *
         * @description
         *
         * Creates a new instance in students of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R.students.createMany = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::createMany::Class::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Class.students#destroyAll
         * @methodOf lbServices.Class.students
         *
         * @description
         *
         * Deletes all students of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.students.destroyAll = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::delete::Class::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Class.students#destroyById
         * @methodOf lbServices.Class.students
         *
         * @description
         *
         * Delete a related item by id for students.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for students
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.students.destroyById = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::destroyById::Class::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Class.students#exists
         * @methodOf lbServices.Class.students
         *
         * @description
         *
         * Check the existence of students relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for students
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R.students.exists = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::exists::Class::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Class.students#findById
         * @methodOf lbServices.Class.students
         *
         * @description
         *
         * Find a related item by id for students.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for students
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R.students.findById = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::findById::Class::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Class.students#link
         * @methodOf lbServices.Class.students
         *
         * @description
         *
         * Add a related item by id for students.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for students
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R.students.link = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::link::Class::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Class.students#unlink
         * @methodOf lbServices.Class.students
         *
         * @description
         *
         * Remove the students relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for students
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.students.unlink = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::unlink::Class::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Class.students#updateById
         * @methodOf lbServices.Class.students
         *
         * @description
         *
         * Update a related item by id for students.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for students
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R.students.updateById = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::updateById::Class::students"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.StudentGroup
 * @header lbServices.StudentGroup
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `StudentGroup` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "StudentGroup",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/StudentGroups/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use StudentGroup.students.findById() instead.
        "prototype$__findById__students": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/StudentGroups/:id/students/:fk",
          method: "GET"
        },

        // INTERNAL. Use StudentGroup.students.destroyById() instead.
        "prototype$__destroyById__students": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/StudentGroups/:id/students/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use StudentGroup.students.updateById() instead.
        "prototype$__updateById__students": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/StudentGroups/:id/students/:fk",
          method: "PUT"
        },

        // INTERNAL. Use StudentGroup.students.link() instead.
        "prototype$__link__students": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/StudentGroups/:id/students/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use StudentGroup.students.unlink() instead.
        "prototype$__unlink__students": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/StudentGroups/:id/students/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use StudentGroup.students.exists() instead.
        "prototype$__exists__students": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/StudentGroups/:id/students/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use StudentGroup.term() instead.
        "prototype$__get__term": {
          url: urlBase + "/StudentGroups/:id/term",
          method: "GET"
        },

        // INTERNAL. Use StudentGroup.learningSessions.findById() instead.
        "prototype$__findById__learningSessions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/StudentGroups/:id/learningSessions/:fk",
          method: "GET"
        },

        // INTERNAL. Use StudentGroup.learningSessions.destroyById() instead.
        "prototype$__destroyById__learningSessions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/StudentGroups/:id/learningSessions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use StudentGroup.learningSessions.updateById() instead.
        "prototype$__updateById__learningSessions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/StudentGroups/:id/learningSessions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use StudentGroup.learningSessions.link() instead.
        "prototype$__link__learningSessions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/StudentGroups/:id/learningSessions/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use StudentGroup.learningSessions.unlink() instead.
        "prototype$__unlink__learningSessions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/StudentGroups/:id/learningSessions/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use StudentGroup.learningSessions.exists() instead.
        "prototype$__exists__learningSessions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/StudentGroups/:id/learningSessions/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use StudentGroup.students() instead.
        "prototype$__get__students": {
          isArray: true,
          url: urlBase + "/StudentGroups/:id/students",
          method: "GET"
        },

        // INTERNAL. Use StudentGroup.students.create() instead.
        "prototype$__create__students": {
          url: urlBase + "/StudentGroups/:id/students",
          method: "POST"
        },

        // INTERNAL. Use StudentGroup.students.destroyAll() instead.
        "prototype$__delete__students": {
          url: urlBase + "/StudentGroups/:id/students",
          method: "DELETE"
        },

        // INTERNAL. Use StudentGroup.students.count() instead.
        "prototype$__count__students": {
          url: urlBase + "/StudentGroups/:id/students/count",
          method: "GET"
        },

        // INTERNAL. Use StudentGroup.learningSessions() instead.
        "prototype$__get__learningSessions": {
          isArray: true,
          url: urlBase + "/StudentGroups/:id/learningSessions",
          method: "GET"
        },

        // INTERNAL. Use StudentGroup.learningSessions.create() instead.
        "prototype$__create__learningSessions": {
          url: urlBase + "/StudentGroups/:id/learningSessions",
          method: "POST"
        },

        // INTERNAL. Use StudentGroup.learningSessions.destroyAll() instead.
        "prototype$__delete__learningSessions": {
          url: urlBase + "/StudentGroups/:id/learningSessions",
          method: "DELETE"
        },

        // INTERNAL. Use StudentGroup.learningSessions.count() instead.
        "prototype$__count__learningSessions": {
          url: urlBase + "/StudentGroups/:id/learningSessions/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.StudentGroup#create
         * @methodOf lbServices.StudentGroup
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StudentGroup` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/StudentGroups",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.StudentGroup#createMany
         * @methodOf lbServices.StudentGroup
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StudentGroup` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/StudentGroups",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.StudentGroup#upsert
         * @methodOf lbServices.StudentGroup
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StudentGroup` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/StudentGroups",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.StudentGroup#exists
         * @methodOf lbServices.StudentGroup
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/StudentGroups/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.StudentGroup#findById
         * @methodOf lbServices.StudentGroup
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StudentGroup` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/StudentGroups/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.StudentGroup#find
         * @methodOf lbServices.StudentGroup
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StudentGroup` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/StudentGroups",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.StudentGroup#findOne
         * @methodOf lbServices.StudentGroup
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StudentGroup` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/StudentGroups/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.StudentGroup#updateAll
         * @methodOf lbServices.StudentGroup
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/StudentGroups/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.StudentGroup#deleteById
         * @methodOf lbServices.StudentGroup
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StudentGroup` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/StudentGroups/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.StudentGroup#count
         * @methodOf lbServices.StudentGroup
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/StudentGroups/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.StudentGroup#prototype$updateAttributes
         * @methodOf lbServices.StudentGroup
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StudentGroup` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/StudentGroups/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.StudentGroup#createChangeStream
         * @methodOf lbServices.StudentGroup
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/StudentGroups/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Student.studentGroups.findById() instead.
        "::findById::Student::studentGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Students/:id/studentGroups/:fk",
          method: "GET"
        },

        // INTERNAL. Use Student.studentGroups.destroyById() instead.
        "::destroyById::Student::studentGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Students/:id/studentGroups/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Student.studentGroups.updateById() instead.
        "::updateById::Student::studentGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Students/:id/studentGroups/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Student.studentGroups.link() instead.
        "::link::Student::studentGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Students/:id/studentGroups/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Student.studentGroups.unlink() instead.
        "::unlink::Student::studentGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Students/:id/studentGroups/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Student.studentGroups.exists() instead.
        "::exists::Student::studentGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Students/:id/studentGroups/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Student.studentGroups() instead.
        "::get::Student::studentGroups": {
          isArray: true,
          url: urlBase + "/Students/:id/studentGroups",
          method: "GET"
        },

        // INTERNAL. Use Student.studentGroups.create() instead.
        "::create::Student::studentGroups": {
          url: urlBase + "/Students/:id/studentGroups",
          method: "POST"
        },

        // INTERNAL. Use Student.studentGroups.createMany() instead.
        "::createMany::Student::studentGroups": {
          isArray: true,
          url: urlBase + "/Students/:id/studentGroups",
          method: "POST"
        },

        // INTERNAL. Use Student.studentGroups.destroyAll() instead.
        "::delete::Student::studentGroups": {
          url: urlBase + "/Students/:id/studentGroups",
          method: "DELETE"
        },

        // INTERNAL. Use Student.studentGroups.count() instead.
        "::count::Student::studentGroups": {
          url: urlBase + "/Students/:id/studentGroups/count",
          method: "GET"
        },

        // INTERNAL. Use Lesson.targetStudentGroups.findById() instead.
        "::findById::Lesson::targetStudentGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Lessons/:id/targetStudentGroups/:fk",
          method: "GET"
        },

        // INTERNAL. Use Lesson.targetStudentGroups.destroyById() instead.
        "::destroyById::Lesson::targetStudentGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Lessons/:id/targetStudentGroups/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Lesson.targetStudentGroups.updateById() instead.
        "::updateById::Lesson::targetStudentGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Lessons/:id/targetStudentGroups/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Lesson.targetStudentGroups.link() instead.
        "::link::Lesson::targetStudentGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Lessons/:id/targetStudentGroups/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Lesson.targetStudentGroups.unlink() instead.
        "::unlink::Lesson::targetStudentGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Lessons/:id/targetStudentGroups/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Lesson.targetStudentGroups.exists() instead.
        "::exists::Lesson::targetStudentGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Lessons/:id/targetStudentGroups/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Lesson.targetStudentGroups() instead.
        "::get::Lesson::targetStudentGroups": {
          isArray: true,
          url: urlBase + "/Lessons/:id/targetStudentGroups",
          method: "GET"
        },

        // INTERNAL. Use Lesson.targetStudentGroups.create() instead.
        "::create::Lesson::targetStudentGroups": {
          url: urlBase + "/Lessons/:id/targetStudentGroups",
          method: "POST"
        },

        // INTERNAL. Use Lesson.targetStudentGroups.createMany() instead.
        "::createMany::Lesson::targetStudentGroups": {
          isArray: true,
          url: urlBase + "/Lessons/:id/targetStudentGroups",
          method: "POST"
        },

        // INTERNAL. Use Lesson.targetStudentGroups.destroyAll() instead.
        "::delete::Lesson::targetStudentGroups": {
          url: urlBase + "/Lessons/:id/targetStudentGroups",
          method: "DELETE"
        },

        // INTERNAL. Use Lesson.targetStudentGroups.count() instead.
        "::count::Lesson::targetStudentGroups": {
          url: urlBase + "/Lessons/:id/targetStudentGroups/count",
          method: "GET"
        },

        // INTERNAL. Use LearningSession.studentGroups.findById() instead.
        "::findById::LearningSession::studentGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/LearningSessions/:id/studentGroups/:fk",
          method: "GET"
        },

        // INTERNAL. Use LearningSession.studentGroups.destroyById() instead.
        "::destroyById::LearningSession::studentGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/LearningSessions/:id/studentGroups/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use LearningSession.studentGroups.updateById() instead.
        "::updateById::LearningSession::studentGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/LearningSessions/:id/studentGroups/:fk",
          method: "PUT"
        },

        // INTERNAL. Use LearningSession.studentGroups.link() instead.
        "::link::LearningSession::studentGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/LearningSessions/:id/studentGroups/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use LearningSession.studentGroups.unlink() instead.
        "::unlink::LearningSession::studentGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/LearningSessions/:id/studentGroups/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use LearningSession.studentGroups.exists() instead.
        "::exists::LearningSession::studentGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/LearningSessions/:id/studentGroups/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use LearningSession.studentGroups() instead.
        "::get::LearningSession::studentGroups": {
          isArray: true,
          url: urlBase + "/LearningSessions/:id/studentGroups",
          method: "GET"
        },

        // INTERNAL. Use LearningSession.studentGroups.create() instead.
        "::create::LearningSession::studentGroups": {
          url: urlBase + "/LearningSessions/:id/studentGroups",
          method: "POST"
        },

        // INTERNAL. Use LearningSession.studentGroups.createMany() instead.
        "::createMany::LearningSession::studentGroups": {
          isArray: true,
          url: urlBase + "/LearningSessions/:id/studentGroups",
          method: "POST"
        },

        // INTERNAL. Use LearningSession.studentGroups.destroyAll() instead.
        "::delete::LearningSession::studentGroups": {
          url: urlBase + "/LearningSessions/:id/studentGroups",
          method: "DELETE"
        },

        // INTERNAL. Use LearningSession.studentGroups.count() instead.
        "::count::LearningSession::studentGroups": {
          url: urlBase + "/LearningSessions/:id/studentGroups/count",
          method: "GET"
        },

        // INTERNAL. Use ScheduleItem.studentGroups.findById() instead.
        "::findById::ScheduleItem::studentGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ScheduleItems/:id/studentGroups/:fk",
          method: "GET"
        },

        // INTERNAL. Use ScheduleItem.studentGroups.destroyById() instead.
        "::destroyById::ScheduleItem::studentGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ScheduleItems/:id/studentGroups/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use ScheduleItem.studentGroups.updateById() instead.
        "::updateById::ScheduleItem::studentGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ScheduleItems/:id/studentGroups/:fk",
          method: "PUT"
        },

        // INTERNAL. Use ScheduleItem.studentGroups.link() instead.
        "::link::ScheduleItem::studentGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ScheduleItems/:id/studentGroups/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use ScheduleItem.studentGroups.unlink() instead.
        "::unlink::ScheduleItem::studentGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ScheduleItems/:id/studentGroups/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use ScheduleItem.studentGroups.exists() instead.
        "::exists::ScheduleItem::studentGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ScheduleItems/:id/studentGroups/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use ScheduleItem.studentGroups() instead.
        "::get::ScheduleItem::studentGroups": {
          isArray: true,
          url: urlBase + "/ScheduleItems/:id/studentGroups",
          method: "GET"
        },

        // INTERNAL. Use ScheduleItem.studentGroups.create() instead.
        "::create::ScheduleItem::studentGroups": {
          url: urlBase + "/ScheduleItems/:id/studentGroups",
          method: "POST"
        },

        // INTERNAL. Use ScheduleItem.studentGroups.createMany() instead.
        "::createMany::ScheduleItem::studentGroups": {
          isArray: true,
          url: urlBase + "/ScheduleItems/:id/studentGroups",
          method: "POST"
        },

        // INTERNAL. Use ScheduleItem.studentGroups.destroyAll() instead.
        "::delete::ScheduleItem::studentGroups": {
          url: urlBase + "/ScheduleItems/:id/studentGroups",
          method: "DELETE"
        },

        // INTERNAL. Use ScheduleItem.studentGroups.count() instead.
        "::count::ScheduleItem::studentGroups": {
          url: urlBase + "/ScheduleItems/:id/studentGroups/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.StudentGroup#updateOrCreate
         * @methodOf lbServices.StudentGroup
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StudentGroup` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.StudentGroup#update
         * @methodOf lbServices.StudentGroup
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.StudentGroup#destroyById
         * @methodOf lbServices.StudentGroup
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StudentGroup` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.StudentGroup#removeById
         * @methodOf lbServices.StudentGroup
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StudentGroup` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.StudentGroup#modelName
    * @propertyOf lbServices.StudentGroup
    * @description
    * The name of the model represented by this $resource,
    * i.e. `StudentGroup`.
    */
    R.modelName = "StudentGroup";

    /**
     * @ngdoc object
     * @name lbServices.StudentGroup.students
     * @header lbServices.StudentGroup.students
     * @object
     * @description
     *
     * The object `StudentGroup.students` groups methods
     * manipulating `Student` instances related to `StudentGroup`.
     *
     * Call {@link lbServices.StudentGroup#students StudentGroup.students()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.StudentGroup#students
         * @methodOf lbServices.StudentGroup
         *
         * @description
         *
         * Queries students of StudentGroup.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R.students = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::get::StudentGroup::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.StudentGroup.students#count
         * @methodOf lbServices.StudentGroup.students
         *
         * @description
         *
         * Counts students of StudentGroup.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.students.count = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::count::StudentGroup::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.StudentGroup.students#create
         * @methodOf lbServices.StudentGroup.students
         *
         * @description
         *
         * Creates a new instance in students of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R.students.create = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::create::StudentGroup::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.StudentGroup.students#createMany
         * @methodOf lbServices.StudentGroup.students
         *
         * @description
         *
         * Creates a new instance in students of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R.students.createMany = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::createMany::StudentGroup::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.StudentGroup.students#destroyAll
         * @methodOf lbServices.StudentGroup.students
         *
         * @description
         *
         * Deletes all students of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.students.destroyAll = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::delete::StudentGroup::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.StudentGroup.students#destroyById
         * @methodOf lbServices.StudentGroup.students
         *
         * @description
         *
         * Delete a related item by id for students.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for students
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.students.destroyById = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::destroyById::StudentGroup::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.StudentGroup.students#exists
         * @methodOf lbServices.StudentGroup.students
         *
         * @description
         *
         * Check the existence of students relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for students
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R.students.exists = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::exists::StudentGroup::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.StudentGroup.students#findById
         * @methodOf lbServices.StudentGroup.students
         *
         * @description
         *
         * Find a related item by id for students.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for students
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R.students.findById = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::findById::StudentGroup::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.StudentGroup.students#link
         * @methodOf lbServices.StudentGroup.students
         *
         * @description
         *
         * Add a related item by id for students.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for students
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R.students.link = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::link::StudentGroup::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.StudentGroup.students#unlink
         * @methodOf lbServices.StudentGroup.students
         *
         * @description
         *
         * Remove the students relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for students
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.students.unlink = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::unlink::StudentGroup::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.StudentGroup.students#updateById
         * @methodOf lbServices.StudentGroup.students
         *
         * @description
         *
         * Update a related item by id for students.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for students
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R.students.updateById = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::updateById::StudentGroup::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.StudentGroup#term
         * @methodOf lbServices.StudentGroup
         *
         * @description
         *
         * Fetches belongsTo relation term.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Term` object.)
         * </em>
         */
        R.term = function() {
          var TargetResource = $injector.get("Term");
          var action = TargetResource["::get::StudentGroup::term"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.StudentGroup.learningSessions
     * @header lbServices.StudentGroup.learningSessions
     * @object
     * @description
     *
     * The object `StudentGroup.learningSessions` groups methods
     * manipulating `LearningSession` instances related to `StudentGroup`.
     *
     * Call {@link lbServices.StudentGroup#learningSessions StudentGroup.learningSessions()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.StudentGroup#learningSessions
         * @methodOf lbServices.StudentGroup
         *
         * @description
         *
         * Queries learningSessions of StudentGroup.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LearningSession` object.)
         * </em>
         */
        R.learningSessions = function() {
          var TargetResource = $injector.get("LearningSession");
          var action = TargetResource["::get::StudentGroup::learningSessions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.StudentGroup.learningSessions#count
         * @methodOf lbServices.StudentGroup.learningSessions
         *
         * @description
         *
         * Counts learningSessions of StudentGroup.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.learningSessions.count = function() {
          var TargetResource = $injector.get("LearningSession");
          var action = TargetResource["::count::StudentGroup::learningSessions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.StudentGroup.learningSessions#create
         * @methodOf lbServices.StudentGroup.learningSessions
         *
         * @description
         *
         * Creates a new instance in learningSessions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LearningSession` object.)
         * </em>
         */
        R.learningSessions.create = function() {
          var TargetResource = $injector.get("LearningSession");
          var action = TargetResource["::create::StudentGroup::learningSessions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.StudentGroup.learningSessions#createMany
         * @methodOf lbServices.StudentGroup.learningSessions
         *
         * @description
         *
         * Creates a new instance in learningSessions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LearningSession` object.)
         * </em>
         */
        R.learningSessions.createMany = function() {
          var TargetResource = $injector.get("LearningSession");
          var action = TargetResource["::createMany::StudentGroup::learningSessions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.StudentGroup.learningSessions#destroyAll
         * @methodOf lbServices.StudentGroup.learningSessions
         *
         * @description
         *
         * Deletes all learningSessions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.learningSessions.destroyAll = function() {
          var TargetResource = $injector.get("LearningSession");
          var action = TargetResource["::delete::StudentGroup::learningSessions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.StudentGroup.learningSessions#destroyById
         * @methodOf lbServices.StudentGroup.learningSessions
         *
         * @description
         *
         * Delete a related item by id for learningSessions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for learningSessions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.learningSessions.destroyById = function() {
          var TargetResource = $injector.get("LearningSession");
          var action = TargetResource["::destroyById::StudentGroup::learningSessions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.StudentGroup.learningSessions#exists
         * @methodOf lbServices.StudentGroup.learningSessions
         *
         * @description
         *
         * Check the existence of learningSessions relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for learningSessions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LearningSession` object.)
         * </em>
         */
        R.learningSessions.exists = function() {
          var TargetResource = $injector.get("LearningSession");
          var action = TargetResource["::exists::StudentGroup::learningSessions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.StudentGroup.learningSessions#findById
         * @methodOf lbServices.StudentGroup.learningSessions
         *
         * @description
         *
         * Find a related item by id for learningSessions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for learningSessions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LearningSession` object.)
         * </em>
         */
        R.learningSessions.findById = function() {
          var TargetResource = $injector.get("LearningSession");
          var action = TargetResource["::findById::StudentGroup::learningSessions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.StudentGroup.learningSessions#link
         * @methodOf lbServices.StudentGroup.learningSessions
         *
         * @description
         *
         * Add a related item by id for learningSessions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for learningSessions
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LearningSession` object.)
         * </em>
         */
        R.learningSessions.link = function() {
          var TargetResource = $injector.get("LearningSession");
          var action = TargetResource["::link::StudentGroup::learningSessions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.StudentGroup.learningSessions#unlink
         * @methodOf lbServices.StudentGroup.learningSessions
         *
         * @description
         *
         * Remove the learningSessions relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for learningSessions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.learningSessions.unlink = function() {
          var TargetResource = $injector.get("LearningSession");
          var action = TargetResource["::unlink::StudentGroup::learningSessions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.StudentGroup.learningSessions#updateById
         * @methodOf lbServices.StudentGroup.learningSessions
         *
         * @description
         *
         * Update a related item by id for learningSessions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for learningSessions
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LearningSession` object.)
         * </em>
         */
        R.learningSessions.updateById = function() {
          var TargetResource = $injector.get("LearningSession");
          var action = TargetResource["::updateById::StudentGroup::learningSessions"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Term
 * @header lbServices.Term
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Term` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Term",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Terms/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Term.classes.findById() instead.
        "prototype$__findById__classes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Terms/:id/classes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Term.classes.destroyById() instead.
        "prototype$__destroyById__classes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Terms/:id/classes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Term.classes.updateById() instead.
        "prototype$__updateById__classes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Terms/:id/classes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Term.lessons.findById() instead.
        "prototype$__findById__lessons": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Terms/:id/lessons/:fk",
          method: "GET"
        },

        // INTERNAL. Use Term.lessons.destroyById() instead.
        "prototype$__destroyById__lessons": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Terms/:id/lessons/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Term.lessons.updateById() instead.
        "prototype$__updateById__lessons": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Terms/:id/lessons/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Term.weeklySchedules.findById() instead.
        "prototype$__findById__weeklySchedules": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Terms/:id/weeklySchedules/:fk",
          method: "GET"
        },

        // INTERNAL. Use Term.weeklySchedules.destroyById() instead.
        "prototype$__destroyById__weeklySchedules": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Terms/:id/weeklySchedules/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Term.weeklySchedules.updateById() instead.
        "prototype$__updateById__weeklySchedules": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Terms/:id/weeklySchedules/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Term.classes() instead.
        "prototype$__get__classes": {
          isArray: true,
          url: urlBase + "/Terms/:id/classes",
          method: "GET"
        },

        // INTERNAL. Use Term.classes.create() instead.
        "prototype$__create__classes": {
          url: urlBase + "/Terms/:id/classes",
          method: "POST"
        },

        // INTERNAL. Use Term.classes.destroyAll() instead.
        "prototype$__delete__classes": {
          url: urlBase + "/Terms/:id/classes",
          method: "DELETE"
        },

        // INTERNAL. Use Term.classes.count() instead.
        "prototype$__count__classes": {
          url: urlBase + "/Terms/:id/classes/count",
          method: "GET"
        },

        // INTERNAL. Use Term.lessons() instead.
        "prototype$__get__lessons": {
          isArray: true,
          url: urlBase + "/Terms/:id/lessons",
          method: "GET"
        },

        // INTERNAL. Use Term.lessons.create() instead.
        "prototype$__create__lessons": {
          url: urlBase + "/Terms/:id/lessons",
          method: "POST"
        },

        // INTERNAL. Use Term.lessons.destroyAll() instead.
        "prototype$__delete__lessons": {
          url: urlBase + "/Terms/:id/lessons",
          method: "DELETE"
        },

        // INTERNAL. Use Term.lessons.count() instead.
        "prototype$__count__lessons": {
          url: urlBase + "/Terms/:id/lessons/count",
          method: "GET"
        },

        // INTERNAL. Use Term.weeklySchedules() instead.
        "prototype$__get__weeklySchedules": {
          isArray: true,
          url: urlBase + "/Terms/:id/weeklySchedules",
          method: "GET"
        },

        // INTERNAL. Use Term.weeklySchedules.create() instead.
        "prototype$__create__weeklySchedules": {
          url: urlBase + "/Terms/:id/weeklySchedules",
          method: "POST"
        },

        // INTERNAL. Use Term.weeklySchedules.destroyAll() instead.
        "prototype$__delete__weeklySchedules": {
          url: urlBase + "/Terms/:id/weeklySchedules",
          method: "DELETE"
        },

        // INTERNAL. Use Term.weeklySchedules.count() instead.
        "prototype$__count__weeklySchedules": {
          url: urlBase + "/Terms/:id/weeklySchedules/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Term#create
         * @methodOf lbServices.Term
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Term` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Terms",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Term#createMany
         * @methodOf lbServices.Term
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Term` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Terms",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Term#upsert
         * @methodOf lbServices.Term
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Term` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Terms",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Term#exists
         * @methodOf lbServices.Term
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Terms/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Term#findById
         * @methodOf lbServices.Term
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Term` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Terms/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Term#find
         * @methodOf lbServices.Term
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Term` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Terms",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Term#findOne
         * @methodOf lbServices.Term
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Term` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Terms/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Term#updateAll
         * @methodOf lbServices.Term
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Terms/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Term#deleteById
         * @methodOf lbServices.Term
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Term` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Terms/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Term#count
         * @methodOf lbServices.Term
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Terms/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Term#prototype$updateAttributes
         * @methodOf lbServices.Term
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Term` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Terms/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Term#createChangeStream
         * @methodOf lbServices.Term
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Terms/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Class.term() instead.
        "::get::Class::term": {
          url: urlBase + "/Classes/:id/term",
          method: "GET"
        },

        // INTERNAL. Use StudentGroup.term() instead.
        "::get::StudentGroup::term": {
          url: urlBase + "/StudentGroups/:id/term",
          method: "GET"
        },

        // INTERNAL. Use Lesson.term() instead.
        "::get::Lesson::term": {
          url: urlBase + "/Lessons/:id/term",
          method: "GET"
        },

        // INTERNAL. Use WeeklySchedule.term() instead.
        "::get::WeeklySchedule::term": {
          url: urlBase + "/WeeklySchedules/:id/term",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Term#updateOrCreate
         * @methodOf lbServices.Term
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Term` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Term#update
         * @methodOf lbServices.Term
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Term#destroyById
         * @methodOf lbServices.Term
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Term` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Term#removeById
         * @methodOf lbServices.Term
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Term` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Term#modelName
    * @propertyOf lbServices.Term
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Term`.
    */
    R.modelName = "Term";

    /**
     * @ngdoc object
     * @name lbServices.Term.classes
     * @header lbServices.Term.classes
     * @object
     * @description
     *
     * The object `Term.classes` groups methods
     * manipulating `Class` instances related to `Term`.
     *
     * Call {@link lbServices.Term#classes Term.classes()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Term#classes
         * @methodOf lbServices.Term
         *
         * @description
         *
         * Queries classes of Term.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R.classes = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::get::Term::classes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Term.classes#count
         * @methodOf lbServices.Term.classes
         *
         * @description
         *
         * Counts classes of Term.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.classes.count = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::count::Term::classes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Term.classes#create
         * @methodOf lbServices.Term.classes
         *
         * @description
         *
         * Creates a new instance in classes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R.classes.create = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::create::Term::classes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Term.classes#createMany
         * @methodOf lbServices.Term.classes
         *
         * @description
         *
         * Creates a new instance in classes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R.classes.createMany = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::createMany::Term::classes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Term.classes#destroyAll
         * @methodOf lbServices.Term.classes
         *
         * @description
         *
         * Deletes all classes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.classes.destroyAll = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::delete::Term::classes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Term.classes#destroyById
         * @methodOf lbServices.Term.classes
         *
         * @description
         *
         * Delete a related item by id for classes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for classes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.classes.destroyById = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::destroyById::Term::classes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Term.classes#findById
         * @methodOf lbServices.Term.classes
         *
         * @description
         *
         * Find a related item by id for classes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for classes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R.classes.findById = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::findById::Term::classes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Term.classes#updateById
         * @methodOf lbServices.Term.classes
         *
         * @description
         *
         * Update a related item by id for classes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for classes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R.classes.updateById = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::updateById::Term::classes"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Term.lessons
     * @header lbServices.Term.lessons
     * @object
     * @description
     *
     * The object `Term.lessons` groups methods
     * manipulating `Lesson` instances related to `Term`.
     *
     * Call {@link lbServices.Term#lessons Term.lessons()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Term#lessons
         * @methodOf lbServices.Term
         *
         * @description
         *
         * Queries lessons of Term.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lesson` object.)
         * </em>
         */
        R.lessons = function() {
          var TargetResource = $injector.get("Lesson");
          var action = TargetResource["::get::Term::lessons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Term.lessons#count
         * @methodOf lbServices.Term.lessons
         *
         * @description
         *
         * Counts lessons of Term.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.lessons.count = function() {
          var TargetResource = $injector.get("Lesson");
          var action = TargetResource["::count::Term::lessons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Term.lessons#create
         * @methodOf lbServices.Term.lessons
         *
         * @description
         *
         * Creates a new instance in lessons of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lesson` object.)
         * </em>
         */
        R.lessons.create = function() {
          var TargetResource = $injector.get("Lesson");
          var action = TargetResource["::create::Term::lessons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Term.lessons#createMany
         * @methodOf lbServices.Term.lessons
         *
         * @description
         *
         * Creates a new instance in lessons of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lesson` object.)
         * </em>
         */
        R.lessons.createMany = function() {
          var TargetResource = $injector.get("Lesson");
          var action = TargetResource["::createMany::Term::lessons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Term.lessons#destroyAll
         * @methodOf lbServices.Term.lessons
         *
         * @description
         *
         * Deletes all lessons of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.lessons.destroyAll = function() {
          var TargetResource = $injector.get("Lesson");
          var action = TargetResource["::delete::Term::lessons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Term.lessons#destroyById
         * @methodOf lbServices.Term.lessons
         *
         * @description
         *
         * Delete a related item by id for lessons.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for lessons
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.lessons.destroyById = function() {
          var TargetResource = $injector.get("Lesson");
          var action = TargetResource["::destroyById::Term::lessons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Term.lessons#findById
         * @methodOf lbServices.Term.lessons
         *
         * @description
         *
         * Find a related item by id for lessons.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for lessons
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lesson` object.)
         * </em>
         */
        R.lessons.findById = function() {
          var TargetResource = $injector.get("Lesson");
          var action = TargetResource["::findById::Term::lessons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Term.lessons#updateById
         * @methodOf lbServices.Term.lessons
         *
         * @description
         *
         * Update a related item by id for lessons.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for lessons
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lesson` object.)
         * </em>
         */
        R.lessons.updateById = function() {
          var TargetResource = $injector.get("Lesson");
          var action = TargetResource["::updateById::Term::lessons"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Term.weeklySchedules
     * @header lbServices.Term.weeklySchedules
     * @object
     * @description
     *
     * The object `Term.weeklySchedules` groups methods
     * manipulating `WeeklySchedule` instances related to `Term`.
     *
     * Call {@link lbServices.Term#weeklySchedules Term.weeklySchedules()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Term#weeklySchedules
         * @methodOf lbServices.Term
         *
         * @description
         *
         * Queries weeklySchedules of Term.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WeeklySchedule` object.)
         * </em>
         */
        R.weeklySchedules = function() {
          var TargetResource = $injector.get("WeeklySchedule");
          var action = TargetResource["::get::Term::weeklySchedules"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Term.weeklySchedules#count
         * @methodOf lbServices.Term.weeklySchedules
         *
         * @description
         *
         * Counts weeklySchedules of Term.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.weeklySchedules.count = function() {
          var TargetResource = $injector.get("WeeklySchedule");
          var action = TargetResource["::count::Term::weeklySchedules"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Term.weeklySchedules#create
         * @methodOf lbServices.Term.weeklySchedules
         *
         * @description
         *
         * Creates a new instance in weeklySchedules of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WeeklySchedule` object.)
         * </em>
         */
        R.weeklySchedules.create = function() {
          var TargetResource = $injector.get("WeeklySchedule");
          var action = TargetResource["::create::Term::weeklySchedules"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Term.weeklySchedules#createMany
         * @methodOf lbServices.Term.weeklySchedules
         *
         * @description
         *
         * Creates a new instance in weeklySchedules of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WeeklySchedule` object.)
         * </em>
         */
        R.weeklySchedules.createMany = function() {
          var TargetResource = $injector.get("WeeklySchedule");
          var action = TargetResource["::createMany::Term::weeklySchedules"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Term.weeklySchedules#destroyAll
         * @methodOf lbServices.Term.weeklySchedules
         *
         * @description
         *
         * Deletes all weeklySchedules of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.weeklySchedules.destroyAll = function() {
          var TargetResource = $injector.get("WeeklySchedule");
          var action = TargetResource["::delete::Term::weeklySchedules"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Term.weeklySchedules#destroyById
         * @methodOf lbServices.Term.weeklySchedules
         *
         * @description
         *
         * Delete a related item by id for weeklySchedules.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for weeklySchedules
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.weeklySchedules.destroyById = function() {
          var TargetResource = $injector.get("WeeklySchedule");
          var action = TargetResource["::destroyById::Term::weeklySchedules"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Term.weeklySchedules#findById
         * @methodOf lbServices.Term.weeklySchedules
         *
         * @description
         *
         * Find a related item by id for weeklySchedules.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for weeklySchedules
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WeeklySchedule` object.)
         * </em>
         */
        R.weeklySchedules.findById = function() {
          var TargetResource = $injector.get("WeeklySchedule");
          var action = TargetResource["::findById::Term::weeklySchedules"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Term.weeklySchedules#updateById
         * @methodOf lbServices.Term.weeklySchedules
         *
         * @description
         *
         * Update a related item by id for weeklySchedules.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for weeklySchedules
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WeeklySchedule` object.)
         * </em>
         */
        R.weeklySchedules.updateById = function() {
          var TargetResource = $injector.get("WeeklySchedule");
          var action = TargetResource["::updateById::Term::weeklySchedules"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Lesson
 * @header lbServices.Lesson
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Lesson` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Lesson",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Lessons/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Lesson.term() instead.
        "prototype$__get__term": {
          url: urlBase + "/Lessons/:id/term",
          method: "GET"
        },

        // INTERNAL. Use Lesson.teacher() instead.
        "prototype$__get__teacher": {
          url: urlBase + "/Lessons/:id/teacher",
          method: "GET"
        },

        // INTERNAL. Use Lesson.targetStudentGroups.findById() instead.
        "prototype$__findById__targetStudentGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Lessons/:id/targetStudentGroups/:fk",
          method: "GET"
        },

        // INTERNAL. Use Lesson.targetStudentGroups.destroyById() instead.
        "prototype$__destroyById__targetStudentGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Lessons/:id/targetStudentGroups/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Lesson.targetStudentGroups.updateById() instead.
        "prototype$__updateById__targetStudentGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Lessons/:id/targetStudentGroups/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Lesson.targetStudentGroups.link() instead.
        "prototype$__link__targetStudentGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Lessons/:id/targetStudentGroups/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Lesson.targetStudentGroups.unlink() instead.
        "prototype$__unlink__targetStudentGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Lessons/:id/targetStudentGroups/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Lesson.targetStudentGroups.exists() instead.
        "prototype$__exists__targetStudentGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Lessons/:id/targetStudentGroups/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Lesson.lessonNotes.findById() instead.
        "prototype$__findById__lessonNotes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Lessons/:id/lessonNotes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Lesson.lessonNotes.destroyById() instead.
        "prototype$__destroyById__lessonNotes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Lessons/:id/lessonNotes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Lesson.lessonNotes.updateById() instead.
        "prototype$__updateById__lessonNotes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Lessons/:id/lessonNotes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Lesson.learningSessions.findById() instead.
        "prototype$__findById__learningSessions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Lessons/:id/learningSessions/:fk",
          method: "GET"
        },

        // INTERNAL. Use Lesson.learningSessions.destroyById() instead.
        "prototype$__destroyById__learningSessions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Lessons/:id/learningSessions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Lesson.learningSessions.updateById() instead.
        "prototype$__updateById__learningSessions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Lessons/:id/learningSessions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Lesson.targetStudentGroups() instead.
        "prototype$__get__targetStudentGroups": {
          isArray: true,
          url: urlBase + "/Lessons/:id/targetStudentGroups",
          method: "GET"
        },

        // INTERNAL. Use Lesson.targetStudentGroups.create() instead.
        "prototype$__create__targetStudentGroups": {
          url: urlBase + "/Lessons/:id/targetStudentGroups",
          method: "POST"
        },

        // INTERNAL. Use Lesson.targetStudentGroups.destroyAll() instead.
        "prototype$__delete__targetStudentGroups": {
          url: urlBase + "/Lessons/:id/targetStudentGroups",
          method: "DELETE"
        },

        // INTERNAL. Use Lesson.targetStudentGroups.count() instead.
        "prototype$__count__targetStudentGroups": {
          url: urlBase + "/Lessons/:id/targetStudentGroups/count",
          method: "GET"
        },

        // INTERNAL. Use Lesson.lessonNotes() instead.
        "prototype$__get__lessonNotes": {
          isArray: true,
          url: urlBase + "/Lessons/:id/lessonNotes",
          method: "GET"
        },

        // INTERNAL. Use Lesson.lessonNotes.create() instead.
        "prototype$__create__lessonNotes": {
          url: urlBase + "/Lessons/:id/lessonNotes",
          method: "POST"
        },

        // INTERNAL. Use Lesson.lessonNotes.destroyAll() instead.
        "prototype$__delete__lessonNotes": {
          url: urlBase + "/Lessons/:id/lessonNotes",
          method: "DELETE"
        },

        // INTERNAL. Use Lesson.lessonNotes.count() instead.
        "prototype$__count__lessonNotes": {
          url: urlBase + "/Lessons/:id/lessonNotes/count",
          method: "GET"
        },

        // INTERNAL. Use Lesson.learningSessions() instead.
        "prototype$__get__learningSessions": {
          isArray: true,
          url: urlBase + "/Lessons/:id/learningSessions",
          method: "GET"
        },

        // INTERNAL. Use Lesson.learningSessions.create() instead.
        "prototype$__create__learningSessions": {
          url: urlBase + "/Lessons/:id/learningSessions",
          method: "POST"
        },

        // INTERNAL. Use Lesson.learningSessions.destroyAll() instead.
        "prototype$__delete__learningSessions": {
          url: urlBase + "/Lessons/:id/learningSessions",
          method: "DELETE"
        },

        // INTERNAL. Use Lesson.learningSessions.count() instead.
        "prototype$__count__learningSessions": {
          url: urlBase + "/Lessons/:id/learningSessions/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Lesson#create
         * @methodOf lbServices.Lesson
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lesson` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Lessons",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Lesson#createMany
         * @methodOf lbServices.Lesson
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lesson` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Lessons",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Lesson#upsert
         * @methodOf lbServices.Lesson
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lesson` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Lessons",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Lesson#exists
         * @methodOf lbServices.Lesson
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Lessons/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Lesson#findById
         * @methodOf lbServices.Lesson
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lesson` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Lessons/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Lesson#find
         * @methodOf lbServices.Lesson
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lesson` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Lessons",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Lesson#findOne
         * @methodOf lbServices.Lesson
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lesson` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Lessons/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Lesson#updateAll
         * @methodOf lbServices.Lesson
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Lessons/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Lesson#deleteById
         * @methodOf lbServices.Lesson
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lesson` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Lessons/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Lesson#count
         * @methodOf lbServices.Lesson
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Lessons/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Lesson#prototype$updateAttributes
         * @methodOf lbServices.Lesson
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lesson` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Lessons/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Lesson#createChangeStream
         * @methodOf lbServices.Lesson
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Lessons/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Teacher.lessons.findById() instead.
        "::findById::Teacher::lessons": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Teachers/:id/lessons/:fk",
          method: "GET"
        },

        // INTERNAL. Use Teacher.lessons.destroyById() instead.
        "::destroyById::Teacher::lessons": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Teachers/:id/lessons/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Teacher.lessons.updateById() instead.
        "::updateById::Teacher::lessons": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Teachers/:id/lessons/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Teacher.lessons() instead.
        "::get::Teacher::lessons": {
          isArray: true,
          url: urlBase + "/Teachers/:id/lessons",
          method: "GET"
        },

        // INTERNAL. Use Teacher.lessons.create() instead.
        "::create::Teacher::lessons": {
          url: urlBase + "/Teachers/:id/lessons",
          method: "POST"
        },

        // INTERNAL. Use Teacher.lessons.createMany() instead.
        "::createMany::Teacher::lessons": {
          isArray: true,
          url: urlBase + "/Teachers/:id/lessons",
          method: "POST"
        },

        // INTERNAL. Use Teacher.lessons.destroyAll() instead.
        "::delete::Teacher::lessons": {
          url: urlBase + "/Teachers/:id/lessons",
          method: "DELETE"
        },

        // INTERNAL. Use Teacher.lessons.count() instead.
        "::count::Teacher::lessons": {
          url: urlBase + "/Teachers/:id/lessons/count",
          method: "GET"
        },

        // INTERNAL. Use Term.lessons.findById() instead.
        "::findById::Term::lessons": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Terms/:id/lessons/:fk",
          method: "GET"
        },

        // INTERNAL. Use Term.lessons.destroyById() instead.
        "::destroyById::Term::lessons": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Terms/:id/lessons/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Term.lessons.updateById() instead.
        "::updateById::Term::lessons": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Terms/:id/lessons/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Term.lessons() instead.
        "::get::Term::lessons": {
          isArray: true,
          url: urlBase + "/Terms/:id/lessons",
          method: "GET"
        },

        // INTERNAL. Use Term.lessons.create() instead.
        "::create::Term::lessons": {
          url: urlBase + "/Terms/:id/lessons",
          method: "POST"
        },

        // INTERNAL. Use Term.lessons.createMany() instead.
        "::createMany::Term::lessons": {
          isArray: true,
          url: urlBase + "/Terms/:id/lessons",
          method: "POST"
        },

        // INTERNAL. Use Term.lessons.destroyAll() instead.
        "::delete::Term::lessons": {
          url: urlBase + "/Terms/:id/lessons",
          method: "DELETE"
        },

        // INTERNAL. Use Term.lessons.count() instead.
        "::count::Term::lessons": {
          url: urlBase + "/Terms/:id/lessons/count",
          method: "GET"
        },

        // INTERNAL. Use LessonNote.lesson() instead.
        "::get::LessonNote::lesson": {
          url: urlBase + "/LessonNotes/:id/lesson",
          method: "GET"
        },

        // INTERNAL. Use LearningSession.lesson() instead.
        "::get::LearningSession::lesson": {
          url: urlBase + "/LearningSessions/:id/lesson",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Lesson#updateOrCreate
         * @methodOf lbServices.Lesson
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lesson` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Lesson#update
         * @methodOf lbServices.Lesson
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Lesson#destroyById
         * @methodOf lbServices.Lesson
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lesson` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Lesson#removeById
         * @methodOf lbServices.Lesson
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lesson` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Lesson#modelName
    * @propertyOf lbServices.Lesson
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Lesson`.
    */
    R.modelName = "Lesson";


        /**
         * @ngdoc method
         * @name lbServices.Lesson#term
         * @methodOf lbServices.Lesson
         *
         * @description
         *
         * Fetches belongsTo relation term.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Term` object.)
         * </em>
         */
        R.term = function() {
          var TargetResource = $injector.get("Term");
          var action = TargetResource["::get::Lesson::term"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lesson#teacher
         * @methodOf lbServices.Lesson
         *
         * @description
         *
         * Fetches belongsTo relation teacher.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        R.teacher = function() {
          var TargetResource = $injector.get("Teacher");
          var action = TargetResource["::get::Lesson::teacher"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Lesson.targetStudentGroups
     * @header lbServices.Lesson.targetStudentGroups
     * @object
     * @description
     *
     * The object `Lesson.targetStudentGroups` groups methods
     * manipulating `StudentGroup` instances related to `Lesson`.
     *
     * Call {@link lbServices.Lesson#targetStudentGroups Lesson.targetStudentGroups()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Lesson#targetStudentGroups
         * @methodOf lbServices.Lesson
         *
         * @description
         *
         * Queries targetStudentGroups of Lesson.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StudentGroup` object.)
         * </em>
         */
        R.targetStudentGroups = function() {
          var TargetResource = $injector.get("StudentGroup");
          var action = TargetResource["::get::Lesson::targetStudentGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lesson.targetStudentGroups#count
         * @methodOf lbServices.Lesson.targetStudentGroups
         *
         * @description
         *
         * Counts targetStudentGroups of Lesson.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.targetStudentGroups.count = function() {
          var TargetResource = $injector.get("StudentGroup");
          var action = TargetResource["::count::Lesson::targetStudentGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lesson.targetStudentGroups#create
         * @methodOf lbServices.Lesson.targetStudentGroups
         *
         * @description
         *
         * Creates a new instance in targetStudentGroups of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StudentGroup` object.)
         * </em>
         */
        R.targetStudentGroups.create = function() {
          var TargetResource = $injector.get("StudentGroup");
          var action = TargetResource["::create::Lesson::targetStudentGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lesson.targetStudentGroups#createMany
         * @methodOf lbServices.Lesson.targetStudentGroups
         *
         * @description
         *
         * Creates a new instance in targetStudentGroups of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StudentGroup` object.)
         * </em>
         */
        R.targetStudentGroups.createMany = function() {
          var TargetResource = $injector.get("StudentGroup");
          var action = TargetResource["::createMany::Lesson::targetStudentGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lesson.targetStudentGroups#destroyAll
         * @methodOf lbServices.Lesson.targetStudentGroups
         *
         * @description
         *
         * Deletes all targetStudentGroups of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.targetStudentGroups.destroyAll = function() {
          var TargetResource = $injector.get("StudentGroup");
          var action = TargetResource["::delete::Lesson::targetStudentGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lesson.targetStudentGroups#destroyById
         * @methodOf lbServices.Lesson.targetStudentGroups
         *
         * @description
         *
         * Delete a related item by id for targetStudentGroups.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for targetStudentGroups
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.targetStudentGroups.destroyById = function() {
          var TargetResource = $injector.get("StudentGroup");
          var action = TargetResource["::destroyById::Lesson::targetStudentGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lesson.targetStudentGroups#exists
         * @methodOf lbServices.Lesson.targetStudentGroups
         *
         * @description
         *
         * Check the existence of targetStudentGroups relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for targetStudentGroups
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StudentGroup` object.)
         * </em>
         */
        R.targetStudentGroups.exists = function() {
          var TargetResource = $injector.get("StudentGroup");
          var action = TargetResource["::exists::Lesson::targetStudentGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lesson.targetStudentGroups#findById
         * @methodOf lbServices.Lesson.targetStudentGroups
         *
         * @description
         *
         * Find a related item by id for targetStudentGroups.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for targetStudentGroups
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StudentGroup` object.)
         * </em>
         */
        R.targetStudentGroups.findById = function() {
          var TargetResource = $injector.get("StudentGroup");
          var action = TargetResource["::findById::Lesson::targetStudentGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lesson.targetStudentGroups#link
         * @methodOf lbServices.Lesson.targetStudentGroups
         *
         * @description
         *
         * Add a related item by id for targetStudentGroups.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for targetStudentGroups
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StudentGroup` object.)
         * </em>
         */
        R.targetStudentGroups.link = function() {
          var TargetResource = $injector.get("StudentGroup");
          var action = TargetResource["::link::Lesson::targetStudentGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lesson.targetStudentGroups#unlink
         * @methodOf lbServices.Lesson.targetStudentGroups
         *
         * @description
         *
         * Remove the targetStudentGroups relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for targetStudentGroups
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.targetStudentGroups.unlink = function() {
          var TargetResource = $injector.get("StudentGroup");
          var action = TargetResource["::unlink::Lesson::targetStudentGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lesson.targetStudentGroups#updateById
         * @methodOf lbServices.Lesson.targetStudentGroups
         *
         * @description
         *
         * Update a related item by id for targetStudentGroups.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for targetStudentGroups
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StudentGroup` object.)
         * </em>
         */
        R.targetStudentGroups.updateById = function() {
          var TargetResource = $injector.get("StudentGroup");
          var action = TargetResource["::updateById::Lesson::targetStudentGroups"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Lesson.lessonNotes
     * @header lbServices.Lesson.lessonNotes
     * @object
     * @description
     *
     * The object `Lesson.lessonNotes` groups methods
     * manipulating `LessonNote` instances related to `Lesson`.
     *
     * Call {@link lbServices.Lesson#lessonNotes Lesson.lessonNotes()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Lesson#lessonNotes
         * @methodOf lbServices.Lesson
         *
         * @description
         *
         * Queries lessonNotes of Lesson.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LessonNote` object.)
         * </em>
         */
        R.lessonNotes = function() {
          var TargetResource = $injector.get("LessonNote");
          var action = TargetResource["::get::Lesson::lessonNotes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lesson.lessonNotes#count
         * @methodOf lbServices.Lesson.lessonNotes
         *
         * @description
         *
         * Counts lessonNotes of Lesson.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.lessonNotes.count = function() {
          var TargetResource = $injector.get("LessonNote");
          var action = TargetResource["::count::Lesson::lessonNotes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lesson.lessonNotes#create
         * @methodOf lbServices.Lesson.lessonNotes
         *
         * @description
         *
         * Creates a new instance in lessonNotes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LessonNote` object.)
         * </em>
         */
        R.lessonNotes.create = function() {
          var TargetResource = $injector.get("LessonNote");
          var action = TargetResource["::create::Lesson::lessonNotes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lesson.lessonNotes#createMany
         * @methodOf lbServices.Lesson.lessonNotes
         *
         * @description
         *
         * Creates a new instance in lessonNotes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LessonNote` object.)
         * </em>
         */
        R.lessonNotes.createMany = function() {
          var TargetResource = $injector.get("LessonNote");
          var action = TargetResource["::createMany::Lesson::lessonNotes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lesson.lessonNotes#destroyAll
         * @methodOf lbServices.Lesson.lessonNotes
         *
         * @description
         *
         * Deletes all lessonNotes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.lessonNotes.destroyAll = function() {
          var TargetResource = $injector.get("LessonNote");
          var action = TargetResource["::delete::Lesson::lessonNotes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lesson.lessonNotes#destroyById
         * @methodOf lbServices.Lesson.lessonNotes
         *
         * @description
         *
         * Delete a related item by id for lessonNotes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for lessonNotes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.lessonNotes.destroyById = function() {
          var TargetResource = $injector.get("LessonNote");
          var action = TargetResource["::destroyById::Lesson::lessonNotes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lesson.lessonNotes#findById
         * @methodOf lbServices.Lesson.lessonNotes
         *
         * @description
         *
         * Find a related item by id for lessonNotes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for lessonNotes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LessonNote` object.)
         * </em>
         */
        R.lessonNotes.findById = function() {
          var TargetResource = $injector.get("LessonNote");
          var action = TargetResource["::findById::Lesson::lessonNotes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lesson.lessonNotes#updateById
         * @methodOf lbServices.Lesson.lessonNotes
         *
         * @description
         *
         * Update a related item by id for lessonNotes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for lessonNotes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LessonNote` object.)
         * </em>
         */
        R.lessonNotes.updateById = function() {
          var TargetResource = $injector.get("LessonNote");
          var action = TargetResource["::updateById::Lesson::lessonNotes"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Lesson.learningSessions
     * @header lbServices.Lesson.learningSessions
     * @object
     * @description
     *
     * The object `Lesson.learningSessions` groups methods
     * manipulating `LearningSession` instances related to `Lesson`.
     *
     * Call {@link lbServices.Lesson#learningSessions Lesson.learningSessions()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Lesson#learningSessions
         * @methodOf lbServices.Lesson
         *
         * @description
         *
         * Queries learningSessions of Lesson.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LearningSession` object.)
         * </em>
         */
        R.learningSessions = function() {
          var TargetResource = $injector.get("LearningSession");
          var action = TargetResource["::get::Lesson::learningSessions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lesson.learningSessions#count
         * @methodOf lbServices.Lesson.learningSessions
         *
         * @description
         *
         * Counts learningSessions of Lesson.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.learningSessions.count = function() {
          var TargetResource = $injector.get("LearningSession");
          var action = TargetResource["::count::Lesson::learningSessions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lesson.learningSessions#create
         * @methodOf lbServices.Lesson.learningSessions
         *
         * @description
         *
         * Creates a new instance in learningSessions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LearningSession` object.)
         * </em>
         */
        R.learningSessions.create = function() {
          var TargetResource = $injector.get("LearningSession");
          var action = TargetResource["::create::Lesson::learningSessions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lesson.learningSessions#createMany
         * @methodOf lbServices.Lesson.learningSessions
         *
         * @description
         *
         * Creates a new instance in learningSessions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LearningSession` object.)
         * </em>
         */
        R.learningSessions.createMany = function() {
          var TargetResource = $injector.get("LearningSession");
          var action = TargetResource["::createMany::Lesson::learningSessions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lesson.learningSessions#destroyAll
         * @methodOf lbServices.Lesson.learningSessions
         *
         * @description
         *
         * Deletes all learningSessions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.learningSessions.destroyAll = function() {
          var TargetResource = $injector.get("LearningSession");
          var action = TargetResource["::delete::Lesson::learningSessions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lesson.learningSessions#destroyById
         * @methodOf lbServices.Lesson.learningSessions
         *
         * @description
         *
         * Delete a related item by id for learningSessions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for learningSessions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.learningSessions.destroyById = function() {
          var TargetResource = $injector.get("LearningSession");
          var action = TargetResource["::destroyById::Lesson::learningSessions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lesson.learningSessions#findById
         * @methodOf lbServices.Lesson.learningSessions
         *
         * @description
         *
         * Find a related item by id for learningSessions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for learningSessions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LearningSession` object.)
         * </em>
         */
        R.learningSessions.findById = function() {
          var TargetResource = $injector.get("LearningSession");
          var action = TargetResource["::findById::Lesson::learningSessions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lesson.learningSessions#updateById
         * @methodOf lbServices.Lesson.learningSessions
         *
         * @description
         *
         * Update a related item by id for learningSessions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for learningSessions
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LearningSession` object.)
         * </em>
         */
        R.learningSessions.updateById = function() {
          var TargetResource = $injector.get("LearningSession");
          var action = TargetResource["::updateById::Lesson::learningSessions"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.LessonNote
 * @header lbServices.LessonNote
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `LessonNote` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "LessonNote",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/LessonNotes/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use LessonNote.lesson() instead.
        "prototype$__get__lesson": {
          url: urlBase + "/LessonNotes/:id/lesson",
          method: "GET"
        },

        // INTERNAL. Use LessonNote.author() instead.
        "prototype$__get__author": {
          url: urlBase + "/LessonNotes/:id/author",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.LessonNote#create
         * @methodOf lbServices.LessonNote
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LessonNote` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/LessonNotes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.LessonNote#createMany
         * @methodOf lbServices.LessonNote
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LessonNote` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/LessonNotes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.LessonNote#upsert
         * @methodOf lbServices.LessonNote
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LessonNote` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/LessonNotes",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.LessonNote#exists
         * @methodOf lbServices.LessonNote
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/LessonNotes/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.LessonNote#findById
         * @methodOf lbServices.LessonNote
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LessonNote` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/LessonNotes/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.LessonNote#find
         * @methodOf lbServices.LessonNote
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LessonNote` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/LessonNotes",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.LessonNote#findOne
         * @methodOf lbServices.LessonNote
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LessonNote` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/LessonNotes/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.LessonNote#updateAll
         * @methodOf lbServices.LessonNote
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/LessonNotes/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.LessonNote#deleteById
         * @methodOf lbServices.LessonNote
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LessonNote` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/LessonNotes/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.LessonNote#count
         * @methodOf lbServices.LessonNote
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/LessonNotes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.LessonNote#prototype$updateAttributes
         * @methodOf lbServices.LessonNote
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LessonNote` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/LessonNotes/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.LessonNote#createChangeStream
         * @methodOf lbServices.LessonNote
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/LessonNotes/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Teacher.lessonNotes.findById() instead.
        "::findById::Teacher::lessonNotes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Teachers/:id/lessonNotes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Teacher.lessonNotes.destroyById() instead.
        "::destroyById::Teacher::lessonNotes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Teachers/:id/lessonNotes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Teacher.lessonNotes.updateById() instead.
        "::updateById::Teacher::lessonNotes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Teachers/:id/lessonNotes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Teacher.lessonNotes() instead.
        "::get::Teacher::lessonNotes": {
          isArray: true,
          url: urlBase + "/Teachers/:id/lessonNotes",
          method: "GET"
        },

        // INTERNAL. Use Teacher.lessonNotes.create() instead.
        "::create::Teacher::lessonNotes": {
          url: urlBase + "/Teachers/:id/lessonNotes",
          method: "POST"
        },

        // INTERNAL. Use Teacher.lessonNotes.createMany() instead.
        "::createMany::Teacher::lessonNotes": {
          isArray: true,
          url: urlBase + "/Teachers/:id/lessonNotes",
          method: "POST"
        },

        // INTERNAL. Use Teacher.lessonNotes.destroyAll() instead.
        "::delete::Teacher::lessonNotes": {
          url: urlBase + "/Teachers/:id/lessonNotes",
          method: "DELETE"
        },

        // INTERNAL. Use Teacher.lessonNotes.count() instead.
        "::count::Teacher::lessonNotes": {
          url: urlBase + "/Teachers/:id/lessonNotes/count",
          method: "GET"
        },

        // INTERNAL. Use Lesson.lessonNotes.findById() instead.
        "::findById::Lesson::lessonNotes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Lessons/:id/lessonNotes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Lesson.lessonNotes.destroyById() instead.
        "::destroyById::Lesson::lessonNotes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Lessons/:id/lessonNotes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Lesson.lessonNotes.updateById() instead.
        "::updateById::Lesson::lessonNotes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Lessons/:id/lessonNotes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Lesson.lessonNotes() instead.
        "::get::Lesson::lessonNotes": {
          isArray: true,
          url: urlBase + "/Lessons/:id/lessonNotes",
          method: "GET"
        },

        // INTERNAL. Use Lesson.lessonNotes.create() instead.
        "::create::Lesson::lessonNotes": {
          url: urlBase + "/Lessons/:id/lessonNotes",
          method: "POST"
        },

        // INTERNAL. Use Lesson.lessonNotes.createMany() instead.
        "::createMany::Lesson::lessonNotes": {
          isArray: true,
          url: urlBase + "/Lessons/:id/lessonNotes",
          method: "POST"
        },

        // INTERNAL. Use Lesson.lessonNotes.destroyAll() instead.
        "::delete::Lesson::lessonNotes": {
          url: urlBase + "/Lessons/:id/lessonNotes",
          method: "DELETE"
        },

        // INTERNAL. Use Lesson.lessonNotes.count() instead.
        "::count::Lesson::lessonNotes": {
          url: urlBase + "/Lessons/:id/lessonNotes/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.LessonNote#updateOrCreate
         * @methodOf lbServices.LessonNote
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LessonNote` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.LessonNote#update
         * @methodOf lbServices.LessonNote
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.LessonNote#destroyById
         * @methodOf lbServices.LessonNote
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LessonNote` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.LessonNote#removeById
         * @methodOf lbServices.LessonNote
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LessonNote` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.LessonNote#modelName
    * @propertyOf lbServices.LessonNote
    * @description
    * The name of the model represented by this $resource,
    * i.e. `LessonNote`.
    */
    R.modelName = "LessonNote";


        /**
         * @ngdoc method
         * @name lbServices.LessonNote#lesson
         * @methodOf lbServices.LessonNote
         *
         * @description
         *
         * Fetches belongsTo relation lesson.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lesson` object.)
         * </em>
         */
        R.lesson = function() {
          var TargetResource = $injector.get("Lesson");
          var action = TargetResource["::get::LessonNote::lesson"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.LessonNote#author
         * @methodOf lbServices.LessonNote
         *
         * @description
         *
         * Fetches belongsTo relation author.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        R.author = function() {
          var TargetResource = $injector.get("Teacher");
          var action = TargetResource["::get::LessonNote::author"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.LearningSession
 * @header lbServices.LearningSession
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `LearningSession` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "LearningSession",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/LearningSessions/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use LearningSession.teachers.findById() instead.
        "prototype$__findById__teachers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/LearningSessions/:id/teachers/:fk",
          method: "GET"
        },

        // INTERNAL. Use LearningSession.teachers.destroyById() instead.
        "prototype$__destroyById__teachers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/LearningSessions/:id/teachers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use LearningSession.teachers.updateById() instead.
        "prototype$__updateById__teachers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/LearningSessions/:id/teachers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use LearningSession.teachers.link() instead.
        "prototype$__link__teachers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/LearningSessions/:id/teachers/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use LearningSession.teachers.unlink() instead.
        "prototype$__unlink__teachers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/LearningSessions/:id/teachers/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use LearningSession.teachers.exists() instead.
        "prototype$__exists__teachers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/LearningSessions/:id/teachers/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use LearningSession.studentGroups.findById() instead.
        "prototype$__findById__studentGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/LearningSessions/:id/studentGroups/:fk",
          method: "GET"
        },

        // INTERNAL. Use LearningSession.studentGroups.destroyById() instead.
        "prototype$__destroyById__studentGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/LearningSessions/:id/studentGroups/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use LearningSession.studentGroups.updateById() instead.
        "prototype$__updateById__studentGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/LearningSessions/:id/studentGroups/:fk",
          method: "PUT"
        },

        // INTERNAL. Use LearningSession.studentGroups.link() instead.
        "prototype$__link__studentGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/LearningSessions/:id/studentGroups/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use LearningSession.studentGroups.unlink() instead.
        "prototype$__unlink__studentGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/LearningSessions/:id/studentGroups/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use LearningSession.studentGroups.exists() instead.
        "prototype$__exists__studentGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/LearningSessions/:id/studentGroups/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use LearningSession.lesson() instead.
        "prototype$__get__lesson": {
          url: urlBase + "/LearningSessions/:id/lesson",
          method: "GET"
        },

        // INTERNAL. Use LearningSession.teachers() instead.
        "prototype$__get__teachers": {
          isArray: true,
          url: urlBase + "/LearningSessions/:id/teachers",
          method: "GET"
        },

        // INTERNAL. Use LearningSession.teachers.create() instead.
        "prototype$__create__teachers": {
          url: urlBase + "/LearningSessions/:id/teachers",
          method: "POST"
        },

        // INTERNAL. Use LearningSession.teachers.destroyAll() instead.
        "prototype$__delete__teachers": {
          url: urlBase + "/LearningSessions/:id/teachers",
          method: "DELETE"
        },

        // INTERNAL. Use LearningSession.teachers.count() instead.
        "prototype$__count__teachers": {
          url: urlBase + "/LearningSessions/:id/teachers/count",
          method: "GET"
        },

        // INTERNAL. Use LearningSession.studentGroups() instead.
        "prototype$__get__studentGroups": {
          isArray: true,
          url: urlBase + "/LearningSessions/:id/studentGroups",
          method: "GET"
        },

        // INTERNAL. Use LearningSession.studentGroups.create() instead.
        "prototype$__create__studentGroups": {
          url: urlBase + "/LearningSessions/:id/studentGroups",
          method: "POST"
        },

        // INTERNAL. Use LearningSession.studentGroups.destroyAll() instead.
        "prototype$__delete__studentGroups": {
          url: urlBase + "/LearningSessions/:id/studentGroups",
          method: "DELETE"
        },

        // INTERNAL. Use LearningSession.studentGroups.count() instead.
        "prototype$__count__studentGroups": {
          url: urlBase + "/LearningSessions/:id/studentGroups/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.LearningSession#create
         * @methodOf lbServices.LearningSession
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LearningSession` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/LearningSessions",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.LearningSession#createMany
         * @methodOf lbServices.LearningSession
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LearningSession` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/LearningSessions",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.LearningSession#upsert
         * @methodOf lbServices.LearningSession
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LearningSession` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/LearningSessions",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.LearningSession#exists
         * @methodOf lbServices.LearningSession
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/LearningSessions/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.LearningSession#findById
         * @methodOf lbServices.LearningSession
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LearningSession` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/LearningSessions/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.LearningSession#find
         * @methodOf lbServices.LearningSession
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LearningSession` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/LearningSessions",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.LearningSession#findOne
         * @methodOf lbServices.LearningSession
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LearningSession` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/LearningSessions/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.LearningSession#updateAll
         * @methodOf lbServices.LearningSession
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/LearningSessions/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.LearningSession#deleteById
         * @methodOf lbServices.LearningSession
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LearningSession` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/LearningSessions/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.LearningSession#count
         * @methodOf lbServices.LearningSession
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/LearningSessions/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.LearningSession#prototype$updateAttributes
         * @methodOf lbServices.LearningSession
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LearningSession` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/LearningSessions/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.LearningSession#createChangeStream
         * @methodOf lbServices.LearningSession
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/LearningSessions/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Teacher.learningSessions.findById() instead.
        "::findById::Teacher::learningSessions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Teachers/:id/learningSessions/:fk",
          method: "GET"
        },

        // INTERNAL. Use Teacher.learningSessions.destroyById() instead.
        "::destroyById::Teacher::learningSessions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Teachers/:id/learningSessions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Teacher.learningSessions.updateById() instead.
        "::updateById::Teacher::learningSessions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Teachers/:id/learningSessions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Teacher.learningSessions.link() instead.
        "::link::Teacher::learningSessions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Teachers/:id/learningSessions/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Teacher.learningSessions.unlink() instead.
        "::unlink::Teacher::learningSessions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Teachers/:id/learningSessions/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Teacher.learningSessions.exists() instead.
        "::exists::Teacher::learningSessions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Teachers/:id/learningSessions/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Teacher.learningSessions() instead.
        "::get::Teacher::learningSessions": {
          isArray: true,
          url: urlBase + "/Teachers/:id/learningSessions",
          method: "GET"
        },

        // INTERNAL. Use Teacher.learningSessions.create() instead.
        "::create::Teacher::learningSessions": {
          url: urlBase + "/Teachers/:id/learningSessions",
          method: "POST"
        },

        // INTERNAL. Use Teacher.learningSessions.createMany() instead.
        "::createMany::Teacher::learningSessions": {
          isArray: true,
          url: urlBase + "/Teachers/:id/learningSessions",
          method: "POST"
        },

        // INTERNAL. Use Teacher.learningSessions.destroyAll() instead.
        "::delete::Teacher::learningSessions": {
          url: urlBase + "/Teachers/:id/learningSessions",
          method: "DELETE"
        },

        // INTERNAL. Use Teacher.learningSessions.count() instead.
        "::count::Teacher::learningSessions": {
          url: urlBase + "/Teachers/:id/learningSessions/count",
          method: "GET"
        },

        // INTERNAL. Use StudentGroup.learningSessions.findById() instead.
        "::findById::StudentGroup::learningSessions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/StudentGroups/:id/learningSessions/:fk",
          method: "GET"
        },

        // INTERNAL. Use StudentGroup.learningSessions.destroyById() instead.
        "::destroyById::StudentGroup::learningSessions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/StudentGroups/:id/learningSessions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use StudentGroup.learningSessions.updateById() instead.
        "::updateById::StudentGroup::learningSessions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/StudentGroups/:id/learningSessions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use StudentGroup.learningSessions.link() instead.
        "::link::StudentGroup::learningSessions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/StudentGroups/:id/learningSessions/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use StudentGroup.learningSessions.unlink() instead.
        "::unlink::StudentGroup::learningSessions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/StudentGroups/:id/learningSessions/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use StudentGroup.learningSessions.exists() instead.
        "::exists::StudentGroup::learningSessions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/StudentGroups/:id/learningSessions/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use StudentGroup.learningSessions() instead.
        "::get::StudentGroup::learningSessions": {
          isArray: true,
          url: urlBase + "/StudentGroups/:id/learningSessions",
          method: "GET"
        },

        // INTERNAL. Use StudentGroup.learningSessions.create() instead.
        "::create::StudentGroup::learningSessions": {
          url: urlBase + "/StudentGroups/:id/learningSessions",
          method: "POST"
        },

        // INTERNAL. Use StudentGroup.learningSessions.createMany() instead.
        "::createMany::StudentGroup::learningSessions": {
          isArray: true,
          url: urlBase + "/StudentGroups/:id/learningSessions",
          method: "POST"
        },

        // INTERNAL. Use StudentGroup.learningSessions.destroyAll() instead.
        "::delete::StudentGroup::learningSessions": {
          url: urlBase + "/StudentGroups/:id/learningSessions",
          method: "DELETE"
        },

        // INTERNAL. Use StudentGroup.learningSessions.count() instead.
        "::count::StudentGroup::learningSessions": {
          url: urlBase + "/StudentGroups/:id/learningSessions/count",
          method: "GET"
        },

        // INTERNAL. Use Lesson.learningSessions.findById() instead.
        "::findById::Lesson::learningSessions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Lessons/:id/learningSessions/:fk",
          method: "GET"
        },

        // INTERNAL. Use Lesson.learningSessions.destroyById() instead.
        "::destroyById::Lesson::learningSessions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Lessons/:id/learningSessions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Lesson.learningSessions.updateById() instead.
        "::updateById::Lesson::learningSessions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Lessons/:id/learningSessions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Lesson.learningSessions() instead.
        "::get::Lesson::learningSessions": {
          isArray: true,
          url: urlBase + "/Lessons/:id/learningSessions",
          method: "GET"
        },

        // INTERNAL. Use Lesson.learningSessions.create() instead.
        "::create::Lesson::learningSessions": {
          url: urlBase + "/Lessons/:id/learningSessions",
          method: "POST"
        },

        // INTERNAL. Use Lesson.learningSessions.createMany() instead.
        "::createMany::Lesson::learningSessions": {
          isArray: true,
          url: urlBase + "/Lessons/:id/learningSessions",
          method: "POST"
        },

        // INTERNAL. Use Lesson.learningSessions.destroyAll() instead.
        "::delete::Lesson::learningSessions": {
          url: urlBase + "/Lessons/:id/learningSessions",
          method: "DELETE"
        },

        // INTERNAL. Use Lesson.learningSessions.count() instead.
        "::count::Lesson::learningSessions": {
          url: urlBase + "/Lessons/:id/learningSessions/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.LearningSession#updateOrCreate
         * @methodOf lbServices.LearningSession
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LearningSession` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.LearningSession#update
         * @methodOf lbServices.LearningSession
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.LearningSession#destroyById
         * @methodOf lbServices.LearningSession
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LearningSession` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.LearningSession#removeById
         * @methodOf lbServices.LearningSession
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LearningSession` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.LearningSession#modelName
    * @propertyOf lbServices.LearningSession
    * @description
    * The name of the model represented by this $resource,
    * i.e. `LearningSession`.
    */
    R.modelName = "LearningSession";

    /**
     * @ngdoc object
     * @name lbServices.LearningSession.teachers
     * @header lbServices.LearningSession.teachers
     * @object
     * @description
     *
     * The object `LearningSession.teachers` groups methods
     * manipulating `Teacher` instances related to `LearningSession`.
     *
     * Call {@link lbServices.LearningSession#teachers LearningSession.teachers()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.LearningSession#teachers
         * @methodOf lbServices.LearningSession
         *
         * @description
         *
         * Queries teachers of LearningSession.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        R.teachers = function() {
          var TargetResource = $injector.get("Teacher");
          var action = TargetResource["::get::LearningSession::teachers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.LearningSession.teachers#count
         * @methodOf lbServices.LearningSession.teachers
         *
         * @description
         *
         * Counts teachers of LearningSession.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.teachers.count = function() {
          var TargetResource = $injector.get("Teacher");
          var action = TargetResource["::count::LearningSession::teachers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.LearningSession.teachers#create
         * @methodOf lbServices.LearningSession.teachers
         *
         * @description
         *
         * Creates a new instance in teachers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        R.teachers.create = function() {
          var TargetResource = $injector.get("Teacher");
          var action = TargetResource["::create::LearningSession::teachers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.LearningSession.teachers#createMany
         * @methodOf lbServices.LearningSession.teachers
         *
         * @description
         *
         * Creates a new instance in teachers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        R.teachers.createMany = function() {
          var TargetResource = $injector.get("Teacher");
          var action = TargetResource["::createMany::LearningSession::teachers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.LearningSession.teachers#destroyAll
         * @methodOf lbServices.LearningSession.teachers
         *
         * @description
         *
         * Deletes all teachers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.teachers.destroyAll = function() {
          var TargetResource = $injector.get("Teacher");
          var action = TargetResource["::delete::LearningSession::teachers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.LearningSession.teachers#destroyById
         * @methodOf lbServices.LearningSession.teachers
         *
         * @description
         *
         * Delete a related item by id for teachers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for teachers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.teachers.destroyById = function() {
          var TargetResource = $injector.get("Teacher");
          var action = TargetResource["::destroyById::LearningSession::teachers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.LearningSession.teachers#exists
         * @methodOf lbServices.LearningSession.teachers
         *
         * @description
         *
         * Check the existence of teachers relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for teachers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        R.teachers.exists = function() {
          var TargetResource = $injector.get("Teacher");
          var action = TargetResource["::exists::LearningSession::teachers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.LearningSession.teachers#findById
         * @methodOf lbServices.LearningSession.teachers
         *
         * @description
         *
         * Find a related item by id for teachers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for teachers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        R.teachers.findById = function() {
          var TargetResource = $injector.get("Teacher");
          var action = TargetResource["::findById::LearningSession::teachers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.LearningSession.teachers#link
         * @methodOf lbServices.LearningSession.teachers
         *
         * @description
         *
         * Add a related item by id for teachers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for teachers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        R.teachers.link = function() {
          var TargetResource = $injector.get("Teacher");
          var action = TargetResource["::link::LearningSession::teachers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.LearningSession.teachers#unlink
         * @methodOf lbServices.LearningSession.teachers
         *
         * @description
         *
         * Remove the teachers relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for teachers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.teachers.unlink = function() {
          var TargetResource = $injector.get("Teacher");
          var action = TargetResource["::unlink::LearningSession::teachers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.LearningSession.teachers#updateById
         * @methodOf lbServices.LearningSession.teachers
         *
         * @description
         *
         * Update a related item by id for teachers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for teachers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        R.teachers.updateById = function() {
          var TargetResource = $injector.get("Teacher");
          var action = TargetResource["::updateById::LearningSession::teachers"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.LearningSession.studentGroups
     * @header lbServices.LearningSession.studentGroups
     * @object
     * @description
     *
     * The object `LearningSession.studentGroups` groups methods
     * manipulating `StudentGroup` instances related to `LearningSession`.
     *
     * Call {@link lbServices.LearningSession#studentGroups LearningSession.studentGroups()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.LearningSession#studentGroups
         * @methodOf lbServices.LearningSession
         *
         * @description
         *
         * Queries studentGroups of LearningSession.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StudentGroup` object.)
         * </em>
         */
        R.studentGroups = function() {
          var TargetResource = $injector.get("StudentGroup");
          var action = TargetResource["::get::LearningSession::studentGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.LearningSession.studentGroups#count
         * @methodOf lbServices.LearningSession.studentGroups
         *
         * @description
         *
         * Counts studentGroups of LearningSession.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.studentGroups.count = function() {
          var TargetResource = $injector.get("StudentGroup");
          var action = TargetResource["::count::LearningSession::studentGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.LearningSession.studentGroups#create
         * @methodOf lbServices.LearningSession.studentGroups
         *
         * @description
         *
         * Creates a new instance in studentGroups of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StudentGroup` object.)
         * </em>
         */
        R.studentGroups.create = function() {
          var TargetResource = $injector.get("StudentGroup");
          var action = TargetResource["::create::LearningSession::studentGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.LearningSession.studentGroups#createMany
         * @methodOf lbServices.LearningSession.studentGroups
         *
         * @description
         *
         * Creates a new instance in studentGroups of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StudentGroup` object.)
         * </em>
         */
        R.studentGroups.createMany = function() {
          var TargetResource = $injector.get("StudentGroup");
          var action = TargetResource["::createMany::LearningSession::studentGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.LearningSession.studentGroups#destroyAll
         * @methodOf lbServices.LearningSession.studentGroups
         *
         * @description
         *
         * Deletes all studentGroups of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.studentGroups.destroyAll = function() {
          var TargetResource = $injector.get("StudentGroup");
          var action = TargetResource["::delete::LearningSession::studentGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.LearningSession.studentGroups#destroyById
         * @methodOf lbServices.LearningSession.studentGroups
         *
         * @description
         *
         * Delete a related item by id for studentGroups.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for studentGroups
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.studentGroups.destroyById = function() {
          var TargetResource = $injector.get("StudentGroup");
          var action = TargetResource["::destroyById::LearningSession::studentGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.LearningSession.studentGroups#exists
         * @methodOf lbServices.LearningSession.studentGroups
         *
         * @description
         *
         * Check the existence of studentGroups relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for studentGroups
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StudentGroup` object.)
         * </em>
         */
        R.studentGroups.exists = function() {
          var TargetResource = $injector.get("StudentGroup");
          var action = TargetResource["::exists::LearningSession::studentGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.LearningSession.studentGroups#findById
         * @methodOf lbServices.LearningSession.studentGroups
         *
         * @description
         *
         * Find a related item by id for studentGroups.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for studentGroups
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StudentGroup` object.)
         * </em>
         */
        R.studentGroups.findById = function() {
          var TargetResource = $injector.get("StudentGroup");
          var action = TargetResource["::findById::LearningSession::studentGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.LearningSession.studentGroups#link
         * @methodOf lbServices.LearningSession.studentGroups
         *
         * @description
         *
         * Add a related item by id for studentGroups.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for studentGroups
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StudentGroup` object.)
         * </em>
         */
        R.studentGroups.link = function() {
          var TargetResource = $injector.get("StudentGroup");
          var action = TargetResource["::link::LearningSession::studentGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.LearningSession.studentGroups#unlink
         * @methodOf lbServices.LearningSession.studentGroups
         *
         * @description
         *
         * Remove the studentGroups relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for studentGroups
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.studentGroups.unlink = function() {
          var TargetResource = $injector.get("StudentGroup");
          var action = TargetResource["::unlink::LearningSession::studentGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.LearningSession.studentGroups#updateById
         * @methodOf lbServices.LearningSession.studentGroups
         *
         * @description
         *
         * Update a related item by id for studentGroups.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for studentGroups
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StudentGroup` object.)
         * </em>
         */
        R.studentGroups.updateById = function() {
          var TargetResource = $injector.get("StudentGroup");
          var action = TargetResource["::updateById::LearningSession::studentGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.LearningSession#lesson
         * @methodOf lbServices.LearningSession
         *
         * @description
         *
         * Fetches belongsTo relation lesson.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lesson` object.)
         * </em>
         */
        R.lesson = function() {
          var TargetResource = $injector.get("Lesson");
          var action = TargetResource["::get::LearningSession::lesson"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Seating
 * @header lbServices.Seating
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Seating` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Seating",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Seatings/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Seating.class() instead.
        "prototype$__get__class": {
          url: urlBase + "/Seatings/:id/class",
          method: "GET"
        },

        // INTERNAL. Use Seating.student() instead.
        "prototype$__get__student": {
          url: urlBase + "/Seatings/:id/student",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Seating#create
         * @methodOf lbServices.Seating
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Seating` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Seatings",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Seating#createMany
         * @methodOf lbServices.Seating
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Seating` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Seatings",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Seating#upsert
         * @methodOf lbServices.Seating
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Seating` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Seatings",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Seating#exists
         * @methodOf lbServices.Seating
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Seatings/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Seating#findById
         * @methodOf lbServices.Seating
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Seating` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Seatings/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Seating#find
         * @methodOf lbServices.Seating
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Seating` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Seatings",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Seating#findOne
         * @methodOf lbServices.Seating
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Seating` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Seatings/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Seating#updateAll
         * @methodOf lbServices.Seating
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Seatings/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Seating#deleteById
         * @methodOf lbServices.Seating
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Seating` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Seatings/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Seating#count
         * @methodOf lbServices.Seating
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Seatings/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Seating#prototype$updateAttributes
         * @methodOf lbServices.Seating
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Seating` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Seatings/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Seating#createChangeStream
         * @methodOf lbServices.Seating
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Seatings/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Seating#updateOrCreate
         * @methodOf lbServices.Seating
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Seating` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Seating#update
         * @methodOf lbServices.Seating
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Seating#destroyById
         * @methodOf lbServices.Seating
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Seating` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Seating#removeById
         * @methodOf lbServices.Seating
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Seating` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Seating#modelName
    * @propertyOf lbServices.Seating
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Seating`.
    */
    R.modelName = "Seating";


        /**
         * @ngdoc method
         * @name lbServices.Seating#class
         * @methodOf lbServices.Seating
         *
         * @description
         *
         * Fetches belongsTo relation class.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R.class = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::get::Seating::class"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Seating#student
         * @methodOf lbServices.Seating
         *
         * @description
         *
         * Fetches belongsTo relation student.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R.student = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::get::Seating::student"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.WeeklySchedule
 * @header lbServices.WeeklySchedule
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `WeeklySchedule` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "WeeklySchedule",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/WeeklySchedules/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use WeeklySchedule.term() instead.
        "prototype$__get__term": {
          url: urlBase + "/WeeklySchedules/:id/term",
          method: "GET"
        },

        // INTERNAL. Use WeeklySchedule.teacher() instead.
        "prototype$__get__teacher": {
          url: urlBase + "/WeeklySchedules/:id/teacher",
          method: "GET"
        },

        // INTERNAL. Use WeeklySchedule.scheduleItems.findById() instead.
        "prototype$__findById__scheduleItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/WeeklySchedules/:id/scheduleItems/:fk",
          method: "GET"
        },

        // INTERNAL. Use WeeklySchedule.scheduleItems.destroyById() instead.
        "prototype$__destroyById__scheduleItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/WeeklySchedules/:id/scheduleItems/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use WeeklySchedule.scheduleItems.updateById() instead.
        "prototype$__updateById__scheduleItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/WeeklySchedules/:id/scheduleItems/:fk",
          method: "PUT"
        },

        // INTERNAL. Use WeeklySchedule.scheduleItems() instead.
        "prototype$__get__scheduleItems": {
          isArray: true,
          url: urlBase + "/WeeklySchedules/:id/scheduleItems",
          method: "GET"
        },

        // INTERNAL. Use WeeklySchedule.scheduleItems.create() instead.
        "prototype$__create__scheduleItems": {
          url: urlBase + "/WeeklySchedules/:id/scheduleItems",
          method: "POST"
        },

        // INTERNAL. Use WeeklySchedule.scheduleItems.destroyAll() instead.
        "prototype$__delete__scheduleItems": {
          url: urlBase + "/WeeklySchedules/:id/scheduleItems",
          method: "DELETE"
        },

        // INTERNAL. Use WeeklySchedule.scheduleItems.count() instead.
        "prototype$__count__scheduleItems": {
          url: urlBase + "/WeeklySchedules/:id/scheduleItems/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WeeklySchedule#create
         * @methodOf lbServices.WeeklySchedule
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WeeklySchedule` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/WeeklySchedules",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.WeeklySchedule#createMany
         * @methodOf lbServices.WeeklySchedule
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WeeklySchedule` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/WeeklySchedules",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.WeeklySchedule#upsert
         * @methodOf lbServices.WeeklySchedule
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WeeklySchedule` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/WeeklySchedules",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.WeeklySchedule#exists
         * @methodOf lbServices.WeeklySchedule
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/WeeklySchedules/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WeeklySchedule#findById
         * @methodOf lbServices.WeeklySchedule
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WeeklySchedule` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/WeeklySchedules/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WeeklySchedule#find
         * @methodOf lbServices.WeeklySchedule
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WeeklySchedule` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/WeeklySchedules",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WeeklySchedule#findOne
         * @methodOf lbServices.WeeklySchedule
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WeeklySchedule` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/WeeklySchedules/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WeeklySchedule#updateAll
         * @methodOf lbServices.WeeklySchedule
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/WeeklySchedules/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.WeeklySchedule#deleteById
         * @methodOf lbServices.WeeklySchedule
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WeeklySchedule` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/WeeklySchedules/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.WeeklySchedule#count
         * @methodOf lbServices.WeeklySchedule
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/WeeklySchedules/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WeeklySchedule#prototype$updateAttributes
         * @methodOf lbServices.WeeklySchedule
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WeeklySchedule` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/WeeklySchedules/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.WeeklySchedule#createChangeStream
         * @methodOf lbServices.WeeklySchedule
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/WeeklySchedules/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Teacher.weeklySchedules.findById() instead.
        "::findById::Teacher::weeklySchedules": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Teachers/:id/weeklySchedules/:fk",
          method: "GET"
        },

        // INTERNAL. Use Teacher.weeklySchedules.destroyById() instead.
        "::destroyById::Teacher::weeklySchedules": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Teachers/:id/weeklySchedules/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Teacher.weeklySchedules.updateById() instead.
        "::updateById::Teacher::weeklySchedules": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Teachers/:id/weeklySchedules/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Teacher.weeklySchedules() instead.
        "::get::Teacher::weeklySchedules": {
          isArray: true,
          url: urlBase + "/Teachers/:id/weeklySchedules",
          method: "GET"
        },

        // INTERNAL. Use Teacher.weeklySchedules.create() instead.
        "::create::Teacher::weeklySchedules": {
          url: urlBase + "/Teachers/:id/weeklySchedules",
          method: "POST"
        },

        // INTERNAL. Use Teacher.weeklySchedules.createMany() instead.
        "::createMany::Teacher::weeklySchedules": {
          isArray: true,
          url: urlBase + "/Teachers/:id/weeklySchedules",
          method: "POST"
        },

        // INTERNAL. Use Teacher.weeklySchedules.destroyAll() instead.
        "::delete::Teacher::weeklySchedules": {
          url: urlBase + "/Teachers/:id/weeklySchedules",
          method: "DELETE"
        },

        // INTERNAL. Use Teacher.weeklySchedules.count() instead.
        "::count::Teacher::weeklySchedules": {
          url: urlBase + "/Teachers/:id/weeklySchedules/count",
          method: "GET"
        },

        // INTERNAL. Use Term.weeklySchedules.findById() instead.
        "::findById::Term::weeklySchedules": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Terms/:id/weeklySchedules/:fk",
          method: "GET"
        },

        // INTERNAL. Use Term.weeklySchedules.destroyById() instead.
        "::destroyById::Term::weeklySchedules": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Terms/:id/weeklySchedules/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Term.weeklySchedules.updateById() instead.
        "::updateById::Term::weeklySchedules": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Terms/:id/weeklySchedules/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Term.weeklySchedules() instead.
        "::get::Term::weeklySchedules": {
          isArray: true,
          url: urlBase + "/Terms/:id/weeklySchedules",
          method: "GET"
        },

        // INTERNAL. Use Term.weeklySchedules.create() instead.
        "::create::Term::weeklySchedules": {
          url: urlBase + "/Terms/:id/weeklySchedules",
          method: "POST"
        },

        // INTERNAL. Use Term.weeklySchedules.createMany() instead.
        "::createMany::Term::weeklySchedules": {
          isArray: true,
          url: urlBase + "/Terms/:id/weeklySchedules",
          method: "POST"
        },

        // INTERNAL. Use Term.weeklySchedules.destroyAll() instead.
        "::delete::Term::weeklySchedules": {
          url: urlBase + "/Terms/:id/weeklySchedules",
          method: "DELETE"
        },

        // INTERNAL. Use Term.weeklySchedules.count() instead.
        "::count::Term::weeklySchedules": {
          url: urlBase + "/Terms/:id/weeklySchedules/count",
          method: "GET"
        },

        // INTERNAL. Use ScheduleItem.weeklySchedule() instead.
        "::get::ScheduleItem::weeklySchedule": {
          url: urlBase + "/ScheduleItems/:id/weeklySchedule",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.WeeklySchedule#updateOrCreate
         * @methodOf lbServices.WeeklySchedule
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WeeklySchedule` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.WeeklySchedule#update
         * @methodOf lbServices.WeeklySchedule
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.WeeklySchedule#destroyById
         * @methodOf lbServices.WeeklySchedule
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WeeklySchedule` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.WeeklySchedule#removeById
         * @methodOf lbServices.WeeklySchedule
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WeeklySchedule` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.WeeklySchedule#modelName
    * @propertyOf lbServices.WeeklySchedule
    * @description
    * The name of the model represented by this $resource,
    * i.e. `WeeklySchedule`.
    */
    R.modelName = "WeeklySchedule";


        /**
         * @ngdoc method
         * @name lbServices.WeeklySchedule#term
         * @methodOf lbServices.WeeklySchedule
         *
         * @description
         *
         * Fetches belongsTo relation term.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Term` object.)
         * </em>
         */
        R.term = function() {
          var TargetResource = $injector.get("Term");
          var action = TargetResource["::get::WeeklySchedule::term"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WeeklySchedule#teacher
         * @methodOf lbServices.WeeklySchedule
         *
         * @description
         *
         * Fetches belongsTo relation teacher.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        R.teacher = function() {
          var TargetResource = $injector.get("Teacher");
          var action = TargetResource["::get::WeeklySchedule::teacher"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.WeeklySchedule.scheduleItems
     * @header lbServices.WeeklySchedule.scheduleItems
     * @object
     * @description
     *
     * The object `WeeklySchedule.scheduleItems` groups methods
     * manipulating `ScheduleItem` instances related to `WeeklySchedule`.
     *
     * Call {@link lbServices.WeeklySchedule#scheduleItems WeeklySchedule.scheduleItems()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.WeeklySchedule#scheduleItems
         * @methodOf lbServices.WeeklySchedule
         *
         * @description
         *
         * Queries scheduleItems of WeeklySchedule.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ScheduleItem` object.)
         * </em>
         */
        R.scheduleItems = function() {
          var TargetResource = $injector.get("ScheduleItem");
          var action = TargetResource["::get::WeeklySchedule::scheduleItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WeeklySchedule.scheduleItems#count
         * @methodOf lbServices.WeeklySchedule.scheduleItems
         *
         * @description
         *
         * Counts scheduleItems of WeeklySchedule.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.scheduleItems.count = function() {
          var TargetResource = $injector.get("ScheduleItem");
          var action = TargetResource["::count::WeeklySchedule::scheduleItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WeeklySchedule.scheduleItems#create
         * @methodOf lbServices.WeeklySchedule.scheduleItems
         *
         * @description
         *
         * Creates a new instance in scheduleItems of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ScheduleItem` object.)
         * </em>
         */
        R.scheduleItems.create = function() {
          var TargetResource = $injector.get("ScheduleItem");
          var action = TargetResource["::create::WeeklySchedule::scheduleItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WeeklySchedule.scheduleItems#createMany
         * @methodOf lbServices.WeeklySchedule.scheduleItems
         *
         * @description
         *
         * Creates a new instance in scheduleItems of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ScheduleItem` object.)
         * </em>
         */
        R.scheduleItems.createMany = function() {
          var TargetResource = $injector.get("ScheduleItem");
          var action = TargetResource["::createMany::WeeklySchedule::scheduleItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WeeklySchedule.scheduleItems#destroyAll
         * @methodOf lbServices.WeeklySchedule.scheduleItems
         *
         * @description
         *
         * Deletes all scheduleItems of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.scheduleItems.destroyAll = function() {
          var TargetResource = $injector.get("ScheduleItem");
          var action = TargetResource["::delete::WeeklySchedule::scheduleItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WeeklySchedule.scheduleItems#destroyById
         * @methodOf lbServices.WeeklySchedule.scheduleItems
         *
         * @description
         *
         * Delete a related item by id for scheduleItems.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for scheduleItems
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.scheduleItems.destroyById = function() {
          var TargetResource = $injector.get("ScheduleItem");
          var action = TargetResource["::destroyById::WeeklySchedule::scheduleItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WeeklySchedule.scheduleItems#findById
         * @methodOf lbServices.WeeklySchedule.scheduleItems
         *
         * @description
         *
         * Find a related item by id for scheduleItems.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for scheduleItems
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ScheduleItem` object.)
         * </em>
         */
        R.scheduleItems.findById = function() {
          var TargetResource = $injector.get("ScheduleItem");
          var action = TargetResource["::findById::WeeklySchedule::scheduleItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WeeklySchedule.scheduleItems#updateById
         * @methodOf lbServices.WeeklySchedule.scheduleItems
         *
         * @description
         *
         * Update a related item by id for scheduleItems.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for scheduleItems
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ScheduleItem` object.)
         * </em>
         */
        R.scheduleItems.updateById = function() {
          var TargetResource = $injector.get("ScheduleItem");
          var action = TargetResource["::updateById::WeeklySchedule::scheduleItems"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.ScheduleItem
 * @header lbServices.ScheduleItem
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ScheduleItem` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "ScheduleItem",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/ScheduleItems/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use ScheduleItem.weeklySchedule() instead.
        "prototype$__get__weeklySchedule": {
          url: urlBase + "/ScheduleItems/:id/weeklySchedule",
          method: "GET"
        },

        // INTERNAL. Use ScheduleItem.studentGroups.findById() instead.
        "prototype$__findById__studentGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ScheduleItems/:id/studentGroups/:fk",
          method: "GET"
        },

        // INTERNAL. Use ScheduleItem.studentGroups.destroyById() instead.
        "prototype$__destroyById__studentGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ScheduleItems/:id/studentGroups/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use ScheduleItem.studentGroups.updateById() instead.
        "prototype$__updateById__studentGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ScheduleItems/:id/studentGroups/:fk",
          method: "PUT"
        },

        // INTERNAL. Use ScheduleItem.studentGroups.link() instead.
        "prototype$__link__studentGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ScheduleItems/:id/studentGroups/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use ScheduleItem.studentGroups.unlink() instead.
        "prototype$__unlink__studentGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ScheduleItems/:id/studentGroups/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use ScheduleItem.studentGroups.exists() instead.
        "prototype$__exists__studentGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ScheduleItems/:id/studentGroups/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use ScheduleItem.studentGroups() instead.
        "prototype$__get__studentGroups": {
          isArray: true,
          url: urlBase + "/ScheduleItems/:id/studentGroups",
          method: "GET"
        },

        // INTERNAL. Use ScheduleItem.studentGroups.create() instead.
        "prototype$__create__studentGroups": {
          url: urlBase + "/ScheduleItems/:id/studentGroups",
          method: "POST"
        },

        // INTERNAL. Use ScheduleItem.studentGroups.destroyAll() instead.
        "prototype$__delete__studentGroups": {
          url: urlBase + "/ScheduleItems/:id/studentGroups",
          method: "DELETE"
        },

        // INTERNAL. Use ScheduleItem.studentGroups.count() instead.
        "prototype$__count__studentGroups": {
          url: urlBase + "/ScheduleItems/:id/studentGroups/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ScheduleItem#create
         * @methodOf lbServices.ScheduleItem
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ScheduleItem` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/ScheduleItems",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ScheduleItem#createMany
         * @methodOf lbServices.ScheduleItem
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ScheduleItem` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/ScheduleItems",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ScheduleItem#upsert
         * @methodOf lbServices.ScheduleItem
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ScheduleItem` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/ScheduleItems",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.ScheduleItem#exists
         * @methodOf lbServices.ScheduleItem
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/ScheduleItems/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ScheduleItem#findById
         * @methodOf lbServices.ScheduleItem
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ScheduleItem` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/ScheduleItems/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ScheduleItem#find
         * @methodOf lbServices.ScheduleItem
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ScheduleItem` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/ScheduleItems",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ScheduleItem#findOne
         * @methodOf lbServices.ScheduleItem
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ScheduleItem` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/ScheduleItems/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ScheduleItem#updateAll
         * @methodOf lbServices.ScheduleItem
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/ScheduleItems/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ScheduleItem#deleteById
         * @methodOf lbServices.ScheduleItem
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ScheduleItem` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/ScheduleItems/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.ScheduleItem#count
         * @methodOf lbServices.ScheduleItem
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/ScheduleItems/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ScheduleItem#prototype$updateAttributes
         * @methodOf lbServices.ScheduleItem
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ScheduleItem` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/ScheduleItems/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.ScheduleItem#createChangeStream
         * @methodOf lbServices.ScheduleItem
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/ScheduleItems/change-stream",
          method: "POST"
        },

        // INTERNAL. Use WeeklySchedule.scheduleItems.findById() instead.
        "::findById::WeeklySchedule::scheduleItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/WeeklySchedules/:id/scheduleItems/:fk",
          method: "GET"
        },

        // INTERNAL. Use WeeklySchedule.scheduleItems.destroyById() instead.
        "::destroyById::WeeklySchedule::scheduleItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/WeeklySchedules/:id/scheduleItems/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use WeeklySchedule.scheduleItems.updateById() instead.
        "::updateById::WeeklySchedule::scheduleItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/WeeklySchedules/:id/scheduleItems/:fk",
          method: "PUT"
        },

        // INTERNAL. Use WeeklySchedule.scheduleItems() instead.
        "::get::WeeklySchedule::scheduleItems": {
          isArray: true,
          url: urlBase + "/WeeklySchedules/:id/scheduleItems",
          method: "GET"
        },

        // INTERNAL. Use WeeklySchedule.scheduleItems.create() instead.
        "::create::WeeklySchedule::scheduleItems": {
          url: urlBase + "/WeeklySchedules/:id/scheduleItems",
          method: "POST"
        },

        // INTERNAL. Use WeeklySchedule.scheduleItems.createMany() instead.
        "::createMany::WeeklySchedule::scheduleItems": {
          isArray: true,
          url: urlBase + "/WeeklySchedules/:id/scheduleItems",
          method: "POST"
        },

        // INTERNAL. Use WeeklySchedule.scheduleItems.destroyAll() instead.
        "::delete::WeeklySchedule::scheduleItems": {
          url: urlBase + "/WeeklySchedules/:id/scheduleItems",
          method: "DELETE"
        },

        // INTERNAL. Use WeeklySchedule.scheduleItems.count() instead.
        "::count::WeeklySchedule::scheduleItems": {
          url: urlBase + "/WeeklySchedules/:id/scheduleItems/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.ScheduleItem#updateOrCreate
         * @methodOf lbServices.ScheduleItem
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ScheduleItem` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.ScheduleItem#update
         * @methodOf lbServices.ScheduleItem
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.ScheduleItem#destroyById
         * @methodOf lbServices.ScheduleItem
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ScheduleItem` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.ScheduleItem#removeById
         * @methodOf lbServices.ScheduleItem
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ScheduleItem` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.ScheduleItem#modelName
    * @propertyOf lbServices.ScheduleItem
    * @description
    * The name of the model represented by this $resource,
    * i.e. `ScheduleItem`.
    */
    R.modelName = "ScheduleItem";


        /**
         * @ngdoc method
         * @name lbServices.ScheduleItem#weeklySchedule
         * @methodOf lbServices.ScheduleItem
         *
         * @description
         *
         * Fetches belongsTo relation weeklySchedule.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WeeklySchedule` object.)
         * </em>
         */
        R.weeklySchedule = function() {
          var TargetResource = $injector.get("WeeklySchedule");
          var action = TargetResource["::get::ScheduleItem::weeklySchedule"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.ScheduleItem.studentGroups
     * @header lbServices.ScheduleItem.studentGroups
     * @object
     * @description
     *
     * The object `ScheduleItem.studentGroups` groups methods
     * manipulating `StudentGroup` instances related to `ScheduleItem`.
     *
     * Call {@link lbServices.ScheduleItem#studentGroups ScheduleItem.studentGroups()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.ScheduleItem#studentGroups
         * @methodOf lbServices.ScheduleItem
         *
         * @description
         *
         * Queries studentGroups of ScheduleItem.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StudentGroup` object.)
         * </em>
         */
        R.studentGroups = function() {
          var TargetResource = $injector.get("StudentGroup");
          var action = TargetResource["::get::ScheduleItem::studentGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ScheduleItem.studentGroups#count
         * @methodOf lbServices.ScheduleItem.studentGroups
         *
         * @description
         *
         * Counts studentGroups of ScheduleItem.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.studentGroups.count = function() {
          var TargetResource = $injector.get("StudentGroup");
          var action = TargetResource["::count::ScheduleItem::studentGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ScheduleItem.studentGroups#create
         * @methodOf lbServices.ScheduleItem.studentGroups
         *
         * @description
         *
         * Creates a new instance in studentGroups of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StudentGroup` object.)
         * </em>
         */
        R.studentGroups.create = function() {
          var TargetResource = $injector.get("StudentGroup");
          var action = TargetResource["::create::ScheduleItem::studentGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ScheduleItem.studentGroups#createMany
         * @methodOf lbServices.ScheduleItem.studentGroups
         *
         * @description
         *
         * Creates a new instance in studentGroups of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StudentGroup` object.)
         * </em>
         */
        R.studentGroups.createMany = function() {
          var TargetResource = $injector.get("StudentGroup");
          var action = TargetResource["::createMany::ScheduleItem::studentGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ScheduleItem.studentGroups#destroyAll
         * @methodOf lbServices.ScheduleItem.studentGroups
         *
         * @description
         *
         * Deletes all studentGroups of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.studentGroups.destroyAll = function() {
          var TargetResource = $injector.get("StudentGroup");
          var action = TargetResource["::delete::ScheduleItem::studentGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ScheduleItem.studentGroups#destroyById
         * @methodOf lbServices.ScheduleItem.studentGroups
         *
         * @description
         *
         * Delete a related item by id for studentGroups.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for studentGroups
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.studentGroups.destroyById = function() {
          var TargetResource = $injector.get("StudentGroup");
          var action = TargetResource["::destroyById::ScheduleItem::studentGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ScheduleItem.studentGroups#exists
         * @methodOf lbServices.ScheduleItem.studentGroups
         *
         * @description
         *
         * Check the existence of studentGroups relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for studentGroups
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StudentGroup` object.)
         * </em>
         */
        R.studentGroups.exists = function() {
          var TargetResource = $injector.get("StudentGroup");
          var action = TargetResource["::exists::ScheduleItem::studentGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ScheduleItem.studentGroups#findById
         * @methodOf lbServices.ScheduleItem.studentGroups
         *
         * @description
         *
         * Find a related item by id for studentGroups.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for studentGroups
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StudentGroup` object.)
         * </em>
         */
        R.studentGroups.findById = function() {
          var TargetResource = $injector.get("StudentGroup");
          var action = TargetResource["::findById::ScheduleItem::studentGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ScheduleItem.studentGroups#link
         * @methodOf lbServices.ScheduleItem.studentGroups
         *
         * @description
         *
         * Add a related item by id for studentGroups.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for studentGroups
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StudentGroup` object.)
         * </em>
         */
        R.studentGroups.link = function() {
          var TargetResource = $injector.get("StudentGroup");
          var action = TargetResource["::link::ScheduleItem::studentGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ScheduleItem.studentGroups#unlink
         * @methodOf lbServices.ScheduleItem.studentGroups
         *
         * @description
         *
         * Remove the studentGroups relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for studentGroups
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.studentGroups.unlink = function() {
          var TargetResource = $injector.get("StudentGroup");
          var action = TargetResource["::unlink::ScheduleItem::studentGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ScheduleItem.studentGroups#updateById
         * @methodOf lbServices.ScheduleItem.studentGroups
         *
         * @description
         *
         * Update a related item by id for studentGroups.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for studentGroups
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StudentGroup` object.)
         * </em>
         */
        R.studentGroups.updateById = function() {
          var TargetResource = $injector.get("StudentGroup");
          var action = TargetResource["::updateById::ScheduleItem::studentGroups"];
          return action.apply(R, arguments);
        };

    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch(err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
