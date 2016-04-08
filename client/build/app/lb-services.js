System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', 'rxjs/add/observable/throw', 'rxjs/add/operator/map', 'rxjs/add/operator/catch', 'rxjs/add/operator/share'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, http_1, Observable_1;
    var LoopBackAuth, auth, ErrorHandler, BaseLoopBackApi, UserApi, StudentApi, TeacherApi, ClassApi, StudentGroupApi, TermApi, LessonApi, LessonNoteApi, LearningSessionApi, SeatingApi, WeeklyScheduleApi, ScheduleItemApi;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {}],
        execute: function() {
            LoopBackAuth = (function () {
                function LoopBackAuth() {
                    this.propsPrefix = '$LoopBack$';
                    this.accessTokenId = this.load("accessTokenId");
                    this.currentUserId = this.load("currentUserId");
                    this.rememberMe = this.load("rememberMe");
                    this.currentUserData = null;
                }
                LoopBackAuth.prototype.setRememberMe = function (value) {
                    this.rememberMe = value;
                    return this;
                };
                LoopBackAuth.prototype.getCurrentUserId = function () {
                    return this.currentUserId;
                };
                LoopBackAuth.prototype.setCurrentUserData = function (data) {
                    this.currentUserData = data;
                    return this;
                };
                LoopBackAuth.prototype.getCurrentUserData = function () {
                    return this.currentUserData;
                };
                LoopBackAuth.prototype.getAccessTokenId = function () {
                    return this.accessTokenId;
                };
                LoopBackAuth.prototype.save = function () {
                    var storage = this.rememberMe ? localStorage : sessionStorage;
                    this.saveThis(storage, "accessTokenId", this.accessTokenId);
                    this.saveThis(storage, "currentUserId", this.currentUserId);
                    this.saveThis(storage, "rememberMe", this.rememberMe);
                };
                ;
                LoopBackAuth.prototype.setUser = function (accessTokenId, userId, userData) {
                    this.accessTokenId = accessTokenId;
                    this.currentUserId = userId;
                    this.currentUserData = userData;
                };
                LoopBackAuth.prototype.clearUser = function () {
                    this.accessTokenId = null;
                    this.currentUserId = null;
                    this.currentUserData = null;
                };
                LoopBackAuth.prototype.clearStorage = function () {
                    this.saveThis(sessionStorage, "accessTokenId", null);
                    this.saveThis(localStorage, "accessTokenId", null);
                    this.saveThis(sessionStorage, "currentUserId", null);
                    this.saveThis(localStorage, "currentUserId", null);
                    this.saveThis(sessionStorage, "rememberMe", null);
                    this.saveThis(localStorage, "rememberMe", null);
                };
                ;
                // Note: LocalStorage converts the value to string
                // We are using empty string as a marker for null/undefined values.
                LoopBackAuth.prototype.saveThis = function (storage, name, value) {
                    try {
                        var key = this.propsPrefix + name;
                        if (value == null) {
                            value = '';
                        }
                        storage[key] = value;
                    }
                    catch (err) {
                        console.log('Cannot access local/session storage:', err);
                    }
                };
                LoopBackAuth.prototype.load = function (name) {
                    var key = this.propsPrefix + name;
                    return localStorage[key] || sessionStorage[key] || null;
                };
                return LoopBackAuth;
            }());
            auth = new LoopBackAuth();
            /**
             * Default error handler
             */
            ErrorHandler = (function () {
                function ErrorHandler() {
                }
                ErrorHandler.prototype.handleError = function (error) {
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                return ErrorHandler;
            }());
            exports_1("ErrorHandler", ErrorHandler);
            BaseLoopBackApi = (function () {
                function BaseLoopBackApi(http, errorHandler) {
                    this.http = http;
                    this.errorHandler = errorHandler;
                    if (!errorHandler) {
                        this.errorHandler = new ErrorHandler();
                    }
                    this.init();
                }
                /**
                 * Get path for building part of URL for API
                 * @return string
                 */
                BaseLoopBackApi.prototype.getPath = function () {
                    return this.path;
                };
                BaseLoopBackApi.prototype.init = function () {
                    this.path = "/api";
                };
                /**
                 * Process request
                 * @param string  method    Request method (GET, POST, PUT)
                 * @param string  url       Request url (my-host/my-url/:id)
                 * @param any     urlParams Values of url parameters
                 * @param any     params    Parameters for building url (filter and other)
                 * @param any     data      Request body
                 */
                BaseLoopBackApi.prototype.request = function (method, url, urlParams, params, data) {
                    if (urlParams === void 0) { urlParams = {}; }
                    if (params === void 0) { params = {}; }
                    if (data === void 0) { data = null; }
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    if (auth.getAccessTokenId()) {
                        headers.append('Authorization', auth.getAccessTokenId());
                    }
                    var requestUrl = url;
                    var key;
                    for (key in urlParams) {
                        requestUrl = requestUrl.replace(new RegExp(":" + key + "(\/|$)", "g"), urlParams[key] + "$1");
                    }
                    var parameters = [];
                    for (var param in params) {
                        parameters.push(param + '=' + (typeof params[param] === 'object' ? JSON.stringify(params[param]) : params[param]));
                    }
                    requestUrl += (parameters ? '?' : '') + parameters.join('&');
                    var request = new http_1.Request({
                        headers: headers,
                        method: method,
                        url: requestUrl,
                        body: data ? JSON.stringify(data) : undefined
                    });
                    return this.http.request(request)
                        .map(function (res) { return (res.text() != "" ? res.json() : {}); })
                        .catch(this.errorHandler.handleError);
                };
                BaseLoopBackApi = __decorate([
                    core_1.Injectable(),
                    __param(0, core_1.Inject(http_1.Http)),
                    __param(1, core_1.Optional()),
                    __param(1, core_1.Inject(ErrorHandler)), 
                    __metadata('design:paramtypes', [http_1.Http, ErrorHandler])
                ], BaseLoopBackApi);
                return BaseLoopBackApi;
            }());
            exports_1("BaseLoopBackApi", BaseLoopBackApi);
            /**
             * Api for the `User` model.
             */
            UserApi = (function (_super) {
                __extends(UserApi, _super);
                function UserApi(http, errorHandler) {
                    _super.call(this, http, errorHandler);
                }
                /**
                 * Find a related item by id for accessTokens.
                 *
                 * @param any id User id
                 *
                 * @param any fk Foreign key for accessTokens
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `User` object.)
                 * </em>
                 */
                UserApi.prototype.__findById__accessTokens = function (id, fk) {
                    var method = "GET";
                    var url = this.getPath() + "/Users/:id/accessTokens/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Delete a related item by id for accessTokens.
                 *
                 * @param any id User id
                 *
                 * @param any fk Foreign key for accessTokens
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                UserApi.prototype.__destroyById__accessTokens = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Users/:id/accessTokens/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update a related item by id for accessTokens.
                 *
                 * @param any id User id
                 *
                 * @param any fk Foreign key for accessTokens
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `User` object.)
                 * </em>
                 */
                UserApi.prototype.__updateById__accessTokens = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Users/:id/accessTokens/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Queries accessTokens of User.
                 *
                 * @param any id User id
                 *
                 * @param object filter
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `User` object.)
                 * </em>
                 */
                UserApi.prototype.__get__accessTokens = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Users/:id/accessTokens";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Creates a new instance in accessTokens of this model.
                 *
                 * @param any id User id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `User` object.)
                 * </em>
                 */
                UserApi.prototype.__create__accessTokens = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Users/:id/accessTokens";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Deletes all accessTokens of this model.
                 *
                 * @param any id User id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                UserApi.prototype.__delete__accessTokens = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Users/:id/accessTokens";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Counts accessTokens of User.
                 *
                 * @param any id User id
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                UserApi.prototype.__count__accessTokens = function (id, where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Users/:id/accessTokens/count";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Create a new instance of the model and persist it into the data source.
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `User` object.)
                 * </em>
                 */
                UserApi.prototype.create = function (data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Users";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Create a new instance of the model and persist it into the data source.
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `User` object.)
                 * </em>
                 */
                UserApi.prototype.createMany = function (data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Users";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Update an existing model instance or insert a new one into the data source.
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `User` object.)
                 * </em>
                 */
                UserApi.prototype.upsert = function (data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Users";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Check whether a model instance exists in the data source.
                 *
                 * @param any id Model id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `exists` – `{boolean}` -
                 */
                UserApi.prototype.exists = function (id) {
                    var method = "GET";
                    var url = this.getPath() + "/Users/:id/exists";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find a model instance by id from the data source.
                 *
                 * @param any id Model id
                 *
                 * @param object filter Filter defining fields and include
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `User` object.)
                 * </em>
                 */
                UserApi.prototype.findById = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Users/:id";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find all instances of the model matched by filter from the data source.
                 *
                 * @param object filter Filter defining fields, where, include, order, offset, and limit
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `User` object.)
                 * </em>
                 */
                UserApi.prototype.find = function (filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Users";
                    var urlParams = {};
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find first instance of the model matched by filter from the data source.
                 *
                 * @param object filter Filter defining fields, where, include, order, offset, and limit
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `User` object.)
                 * </em>
                 */
                UserApi.prototype.findOne = function (filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Users/findOne";
                    var urlParams = {};
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update instances of the model matched by where from the data source.
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * The number of instances updated
                 */
                UserApi.prototype.updateAll = function (where, data) {
                    if (where === void 0) { where = undefined; }
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Users/update";
                    var urlParams = {};
                    var params = {};
                    if (where !== undefined) {
                        params.where = where;
                    }
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Delete a model instance by id from the data source.
                 *
                 * @param any id Model id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `User` object.)
                 * </em>
                 */
                UserApi.prototype.deleteById = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Users/:id";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Count instances of the model matched by where from the data source.
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                UserApi.prototype.count = function (where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Users/count";
                    var urlParams = {};
                    var params = {};
                    if (where !== undefined) {
                        params.where = where;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update attributes for a model instance and persist it into the data source.
                 *
                 * @param any id User id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `User` object.)
                 * </em>
                 */
                UserApi.prototype.updateAttributes = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Users/:id";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Create a change stream.
                 *
                 * @param object data Request data.
                 *
                 *  - `options` – `{object}` -
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `changes` – `{ReadableStream}` -
                 */
                UserApi.prototype.createChangeStream = function (options) {
                    if (options === void 0) { options = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Users/change-stream";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params, options);
                    return result;
                };
                /**
                 * Login a user with username/email and password.
                 *
                 * @param string include Related objects to include in the response. See the description of return value for more details.
                 *   Default value: `user`.
                 *
                 *  - `rememberMe` - `boolean` - Whether the authentication credentials
                 *     should be remembered in localStorage across app/browser restarts.
                 *     Default: `true`.
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
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
                UserApi.prototype.login = function (credentials, include) {
                    if (include === void 0) { include = "user"; }
                    var method = "POST";
                    var url = this.getPath() + "/Users/login";
                    var urlParams = {};
                    var params = {};
                    if (include !== undefined) {
                        params.include = include;
                    }
                    var result = this.request(method, url, urlParams, params, credentials)
                        .share();
                    result.subscribe(function (response) {
                        auth.setUser(response.id, response.userId, response.user);
                        auth.setRememberMe(true);
                        auth.save();
                    }, function () { return null; });
                    return result;
                };
                /**
                 * Logout a user with access token.
                 *
                 * @param object data Request data.
                 *
                 *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                UserApi.prototype.logout = function () {
                    var method = "POST";
                    var url = this.getPath() + "/Users/logout";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params)
                        .share();
                    result.subscribe(function () {
                        auth.clearUser();
                        auth.clearStorage();
                    }, function () { return null; });
                    return result;
                };
                /**
                 * Confirm a user registration with email verification token.
                 *
                 * @param string uid
                 *
                 * @param string token
                 *
                 * @param string redirect
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                UserApi.prototype.confirm = function (uid, token, redirect) {
                    if (redirect === void 0) { redirect = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Users/confirm";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Reset password for a user with email.
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                UserApi.prototype.resetPassword = function (options) {
                    var method = "POST";
                    var url = this.getPath() + "/Users/reset";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params, options);
                    return result;
                };
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
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 */
                UserApi.prototype.getCurrent = function () {
                    var method = "GET";
                    var url = this.getPath() + "/Users" + "/:id";
                    var id = auth.getCurrentUserId();
                    if (id == null) {
                        id = '__anonymous__';
                    }
                    var urlParams = {
                        id: id
                    };
                    var result = this.request(method, url, urlParams)
                        .share();
                    result.subscribe(function (response) {
                        auth.setCurrentUserData(response);
                    }, function () { return null; });
                    return result;
                };
                /**
                 * Get data of the currently logged user that was returned by the last
                 * call to {@link lbServices.User#login} or
                 * {@link lbServices.User#getCurrent}. Return null when there
                 * is no user logged in or the data of the current user were not fetched
                 * yet.
                 *
                 * @returns object A User instance.
                 */
                UserApi.prototype.getCachedCurrent = function () {
                    return auth.getCurrentUserData();
                };
                /**
                 * @name lbServices.User#isAuthenticated
                 *
                 * @returns {boolean} True if the current user is authenticated (logged in).
                 */
                UserApi.prototype.isAuthenticated = function () {
                    return this.getCurrentId() != null;
                };
                /**
                 * @name lbServices.User#getCurrentId
                 *
                 * @returns object Id of the currently logged-in user or null.
                 */
                UserApi.prototype.getCurrentId = function () {
                    return auth.getCurrentUserId();
                };
                /**
                 * The name of the model represented by this $resource,
                 * i.e. `User`.
                 */
                UserApi.prototype.getModelName = function () {
                    return "User";
                };
                UserApi = __decorate([
                    core_1.Injectable(),
                    __param(0, core_1.Inject(http_1.Http)),
                    __param(1, core_1.Optional()),
                    __param(1, core_1.Inject(ErrorHandler)), 
                    __metadata('design:paramtypes', [http_1.Http, ErrorHandler])
                ], UserApi);
                return UserApi;
            }(BaseLoopBackApi));
            exports_1("UserApi", UserApi);
            /**
             * Api for the `Student` model.
             */
            StudentApi = (function (_super) {
                __extends(StudentApi, _super);
                function StudentApi(http, errorHandler) {
                    _super.call(this, http, errorHandler);
                }
                /**
                 * Find a related item by id for studentGroups.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for studentGroups
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Student` object.)
                 * </em>
                 */
                StudentApi.prototype.__findById__studentGroups = function (id, fk) {
                    var method = "GET";
                    var url = this.getPath() + "/Students/:id/studentGroups/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Delete a related item by id for studentGroups.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for studentGroups
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                StudentApi.prototype.__destroyById__studentGroups = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Students/:id/studentGroups/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update a related item by id for studentGroups.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for studentGroups
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Student` object.)
                 * </em>
                 */
                StudentApi.prototype.__updateById__studentGroups = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Students/:id/studentGroups/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Add a related item by id for studentGroups.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for studentGroups
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Student` object.)
                 * </em>
                 */
                StudentApi.prototype.__link__studentGroups = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Students/:id/studentGroups/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Remove the studentGroups relation to an item by id.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for studentGroups
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                StudentApi.prototype.__unlink__studentGroups = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Students/:id/studentGroups/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Check the existence of studentGroups relation to an item by id.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for studentGroups
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Student` object.)
                 * </em>
                 */
                StudentApi.prototype.__exists__studentGroups = function (id, fk) {
                    var method = "HEAD";
                    var url = this.getPath() + "/Students/:id/studentGroups/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find a related item by id for classes.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for classes
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Student` object.)
                 * </em>
                 */
                StudentApi.prototype.__findById__classes = function (id, fk) {
                    var method = "GET";
                    var url = this.getPath() + "/Students/:id/classes/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Delete a related item by id for classes.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for classes
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                StudentApi.prototype.__destroyById__classes = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Students/:id/classes/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update a related item by id for classes.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for classes
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Student` object.)
                 * </em>
                 */
                StudentApi.prototype.__updateById__classes = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Students/:id/classes/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Add a related item by id for classes.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for classes
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Student` object.)
                 * </em>
                 */
                StudentApi.prototype.__link__classes = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Students/:id/classes/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Remove the classes relation to an item by id.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for classes
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                StudentApi.prototype.__unlink__classes = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Students/:id/classes/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Check the existence of classes relation to an item by id.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for classes
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Student` object.)
                 * </em>
                 */
                StudentApi.prototype.__exists__classes = function (id, fk) {
                    var method = "HEAD";
                    var url = this.getPath() + "/Students/:id/classes/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Queries studentGroups of Student.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object filter
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Student` object.)
                 * </em>
                 */
                StudentApi.prototype.__get__studentGroups = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Students/:id/studentGroups";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Creates a new instance in studentGroups of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Student` object.)
                 * </em>
                 */
                StudentApi.prototype.__create__studentGroups = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Students/:id/studentGroups";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Deletes all studentGroups of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                StudentApi.prototype.__delete__studentGroups = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Students/:id/studentGroups";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Counts studentGroups of Student.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                StudentApi.prototype.__count__studentGroups = function (id, where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Students/:id/studentGroups/count";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Queries classes of Student.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object filter
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Student` object.)
                 * </em>
                 */
                StudentApi.prototype.__get__classes = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Students/:id/classes";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Creates a new instance in classes of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Student` object.)
                 * </em>
                 */
                StudentApi.prototype.__create__classes = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Students/:id/classes";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Deletes all classes of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                StudentApi.prototype.__delete__classes = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Students/:id/classes";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Counts classes of Student.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                StudentApi.prototype.__count__classes = function (id, where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Students/:id/classes/count";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Create a new instance of the model and persist it into the data source.
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Student` object.)
                 * </em>
                 */
                StudentApi.prototype.create = function (data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Students";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Create a new instance of the model and persist it into the data source.
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Student` object.)
                 * </em>
                 */
                StudentApi.prototype.createMany = function (data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Students";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Update an existing model instance or insert a new one into the data source.
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Student` object.)
                 * </em>
                 */
                StudentApi.prototype.upsert = function (data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Students";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Check whether a model instance exists in the data source.
                 *
                 * @param any id Model id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `exists` – `{boolean}` -
                 */
                StudentApi.prototype.exists = function (id) {
                    var method = "GET";
                    var url = this.getPath() + "/Students/:id/exists";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find a model instance by id from the data source.
                 *
                 * @param any id Model id
                 *
                 * @param object filter Filter defining fields and include
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Student` object.)
                 * </em>
                 */
                StudentApi.prototype.findById = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Students/:id";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find all instances of the model matched by filter from the data source.
                 *
                 * @param object filter Filter defining fields, where, include, order, offset, and limit
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Student` object.)
                 * </em>
                 */
                StudentApi.prototype.find = function (filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Students";
                    var urlParams = {};
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find first instance of the model matched by filter from the data source.
                 *
                 * @param object filter Filter defining fields, where, include, order, offset, and limit
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Student` object.)
                 * </em>
                 */
                StudentApi.prototype.findOne = function (filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Students/findOne";
                    var urlParams = {};
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update instances of the model matched by where from the data source.
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * The number of instances updated
                 */
                StudentApi.prototype.updateAll = function (where, data) {
                    if (where === void 0) { where = undefined; }
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Students/update";
                    var urlParams = {};
                    var params = {};
                    if (where !== undefined) {
                        params.where = where;
                    }
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Delete a model instance by id from the data source.
                 *
                 * @param any id Model id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Student` object.)
                 * </em>
                 */
                StudentApi.prototype.deleteById = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Students/:id";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Count instances of the model matched by where from the data source.
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                StudentApi.prototype.count = function (where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Students/count";
                    var urlParams = {};
                    var params = {};
                    if (where !== undefined) {
                        params.where = where;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update attributes for a model instance and persist it into the data source.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Student` object.)
                 * </em>
                 */
                StudentApi.prototype.updateAttributes = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Students/:id";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Create a change stream.
                 *
                 * @param object data Request data.
                 *
                 *  - `options` – `{object}` -
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `changes` – `{ReadableStream}` -
                 */
                StudentApi.prototype.createChangeStream = function (options) {
                    if (options === void 0) { options = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Students/change-stream";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params, options);
                    return result;
                };
                /**
                 * Find a related item by id for students.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for students
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Student` object.)
                 * </em>
                 */
                StudentApi.prototype.__findById__Class__students = function (id, fk) {
                    var method = "GET";
                    var url = this.getPath() + "/Classes/:id/students/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Delete a related item by id for students.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for students
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                StudentApi.prototype.__destroyById__Class__students = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Classes/:id/students/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update a related item by id for students.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for students
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Student` object.)
                 * </em>
                 */
                StudentApi.prototype.__updateById__Class__students = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Classes/:id/students/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Add a related item by id for students.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for students
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Student` object.)
                 * </em>
                 */
                StudentApi.prototype.__link__Class__students = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Classes/:id/students/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Remove the students relation to an item by id.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for students
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                StudentApi.prototype.__unlink__Class__students = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Classes/:id/students/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Check the existence of students relation to an item by id.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for students
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Student` object.)
                 * </em>
                 */
                StudentApi.prototype.__exists__Class__students = function (id, fk) {
                    var method = "HEAD";
                    var url = this.getPath() + "/Classes/:id/students/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Queries students of Class.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object filter
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Student` object.)
                 * </em>
                 */
                StudentApi.prototype.__get__Class__students = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Classes/:id/students";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Creates a new instance in students of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Student` object.)
                 * </em>
                 */
                StudentApi.prototype.__create__Class__students = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Classes/:id/students";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Creates a new instance in students of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Student` object.)
                 * </em>
                 */
                StudentApi.prototype.__createMany__Class__students = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Classes/:id/students";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Deletes all students of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                StudentApi.prototype.__delete__Class__students = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Classes/:id/students";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Counts students of Class.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                StudentApi.prototype.__count__Class__students = function (id, where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Classes/:id/students/count";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find a related item by id for students.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for students
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Student` object.)
                 * </em>
                 */
                StudentApi.prototype.__findById__StudentGroup__students = function (id, fk) {
                    var method = "GET";
                    var url = this.getPath() + "/StudentGroups/:id/students/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Delete a related item by id for students.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for students
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                StudentApi.prototype.__destroyById__StudentGroup__students = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/StudentGroups/:id/students/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update a related item by id for students.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for students
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Student` object.)
                 * </em>
                 */
                StudentApi.prototype.__updateById__StudentGroup__students = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/StudentGroups/:id/students/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Add a related item by id for students.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for students
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Student` object.)
                 * </em>
                 */
                StudentApi.prototype.__link__StudentGroup__students = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/StudentGroups/:id/students/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Remove the students relation to an item by id.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for students
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                StudentApi.prototype.__unlink__StudentGroup__students = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/StudentGroups/:id/students/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Check the existence of students relation to an item by id.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for students
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Student` object.)
                 * </em>
                 */
                StudentApi.prototype.__exists__StudentGroup__students = function (id, fk) {
                    var method = "HEAD";
                    var url = this.getPath() + "/StudentGroups/:id/students/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Queries students of StudentGroup.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object filter
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Student` object.)
                 * </em>
                 */
                StudentApi.prototype.__get__StudentGroup__students = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/StudentGroups/:id/students";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Creates a new instance in students of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Student` object.)
                 * </em>
                 */
                StudentApi.prototype.__create__StudentGroup__students = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/StudentGroups/:id/students";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Creates a new instance in students of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Student` object.)
                 * </em>
                 */
                StudentApi.prototype.__createMany__StudentGroup__students = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/StudentGroups/:id/students";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Deletes all students of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                StudentApi.prototype.__delete__StudentGroup__students = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/StudentGroups/:id/students";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Counts students of StudentGroup.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                StudentApi.prototype.__count__StudentGroup__students = function (id, where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/StudentGroups/:id/students/count";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Fetches belongsTo relation student.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param boolean refresh
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Student` object.)
                 * </em>
                 */
                StudentApi.prototype.__get__Seating__student = function (id, refresh) {
                    if (refresh === void 0) { refresh = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Seatings/:id/student";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (refresh !== undefined) {
                        params.refresh = refresh;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * The name of the model represented by this $resource,
                 * i.e. `Student`.
                 */
                StudentApi.prototype.getModelName = function () {
                    return "Student";
                };
                StudentApi = __decorate([
                    core_1.Injectable(),
                    __param(0, core_1.Inject(http_1.Http)),
                    __param(1, core_1.Optional()),
                    __param(1, core_1.Inject(ErrorHandler)), 
                    __metadata('design:paramtypes', [http_1.Http, ErrorHandler])
                ], StudentApi);
                return StudentApi;
            }(BaseLoopBackApi));
            exports_1("StudentApi", StudentApi);
            /**
             * Api for the `Teacher` model.
             */
            TeacherApi = (function (_super) {
                __extends(TeacherApi, _super);
                function TeacherApi(http, errorHandler) {
                    _super.call(this, http, errorHandler);
                }
                /**
                 * Find a related item by id for accessTokens.
                 *
                 * @param any id User id
                 *
                 * @param any fk Foreign key for accessTokens
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Teacher` object.)
                 * </em>
                 */
                TeacherApi.prototype.__findById__accessTokens = function (id, fk) {
                    var method = "GET";
                    var url = this.getPath() + "/Teachers/:id/accessTokens/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Delete a related item by id for accessTokens.
                 *
                 * @param any id User id
                 *
                 * @param any fk Foreign key for accessTokens
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                TeacherApi.prototype.__destroyById__accessTokens = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Teachers/:id/accessTokens/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update a related item by id for accessTokens.
                 *
                 * @param any id User id
                 *
                 * @param any fk Foreign key for accessTokens
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Teacher` object.)
                 * </em>
                 */
                TeacherApi.prototype.__updateById__accessTokens = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Teachers/:id/accessTokens/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Find a related item by id for lessons.
                 *
                 * @param any id User id
                 *
                 * @param any fk Foreign key for lessons
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Teacher` object.)
                 * </em>
                 */
                TeacherApi.prototype.__findById__lessons = function (id, fk) {
                    var method = "GET";
                    var url = this.getPath() + "/Teachers/:id/lessons/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Delete a related item by id for lessons.
                 *
                 * @param any id User id
                 *
                 * @param any fk Foreign key for lessons
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                TeacherApi.prototype.__destroyById__lessons = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Teachers/:id/lessons/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update a related item by id for lessons.
                 *
                 * @param any id User id
                 *
                 * @param any fk Foreign key for lessons
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Teacher` object.)
                 * </em>
                 */
                TeacherApi.prototype.__updateById__lessons = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Teachers/:id/lessons/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Find a related item by id for lessonNotes.
                 *
                 * @param any id User id
                 *
                 * @param any fk Foreign key for lessonNotes
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Teacher` object.)
                 * </em>
                 */
                TeacherApi.prototype.__findById__lessonNotes = function (id, fk) {
                    var method = "GET";
                    var url = this.getPath() + "/Teachers/:id/lessonNotes/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Delete a related item by id for lessonNotes.
                 *
                 * @param any id User id
                 *
                 * @param any fk Foreign key for lessonNotes
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                TeacherApi.prototype.__destroyById__lessonNotes = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Teachers/:id/lessonNotes/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update a related item by id for lessonNotes.
                 *
                 * @param any id User id
                 *
                 * @param any fk Foreign key for lessonNotes
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Teacher` object.)
                 * </em>
                 */
                TeacherApi.prototype.__updateById__lessonNotes = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Teachers/:id/lessonNotes/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Find a related item by id for learningSessions.
                 *
                 * @param any id User id
                 *
                 * @param any fk Foreign key for learningSessions
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Teacher` object.)
                 * </em>
                 */
                TeacherApi.prototype.__findById__learningSessions = function (id, fk) {
                    var method = "GET";
                    var url = this.getPath() + "/Teachers/:id/learningSessions/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Delete a related item by id for learningSessions.
                 *
                 * @param any id User id
                 *
                 * @param any fk Foreign key for learningSessions
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                TeacherApi.prototype.__destroyById__learningSessions = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Teachers/:id/learningSessions/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update a related item by id for learningSessions.
                 *
                 * @param any id User id
                 *
                 * @param any fk Foreign key for learningSessions
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Teacher` object.)
                 * </em>
                 */
                TeacherApi.prototype.__updateById__learningSessions = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Teachers/:id/learningSessions/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Add a related item by id for learningSessions.
                 *
                 * @param any id User id
                 *
                 * @param any fk Foreign key for learningSessions
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Teacher` object.)
                 * </em>
                 */
                TeacherApi.prototype.__link__learningSessions = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Teachers/:id/learningSessions/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Remove the learningSessions relation to an item by id.
                 *
                 * @param any id User id
                 *
                 * @param any fk Foreign key for learningSessions
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                TeacherApi.prototype.__unlink__learningSessions = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Teachers/:id/learningSessions/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Check the existence of learningSessions relation to an item by id.
                 *
                 * @param any id User id
                 *
                 * @param any fk Foreign key for learningSessions
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Teacher` object.)
                 * </em>
                 */
                TeacherApi.prototype.__exists__learningSessions = function (id, fk) {
                    var method = "HEAD";
                    var url = this.getPath() + "/Teachers/:id/learningSessions/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find a related item by id for weeklySchedules.
                 *
                 * @param any id User id
                 *
                 * @param any fk Foreign key for weeklySchedules
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Teacher` object.)
                 * </em>
                 */
                TeacherApi.prototype.__findById__weeklySchedules = function (id, fk) {
                    var method = "GET";
                    var url = this.getPath() + "/Teachers/:id/weeklySchedules/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Delete a related item by id for weeklySchedules.
                 *
                 * @param any id User id
                 *
                 * @param any fk Foreign key for weeklySchedules
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                TeacherApi.prototype.__destroyById__weeklySchedules = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Teachers/:id/weeklySchedules/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update a related item by id for weeklySchedules.
                 *
                 * @param any id User id
                 *
                 * @param any fk Foreign key for weeklySchedules
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Teacher` object.)
                 * </em>
                 */
                TeacherApi.prototype.__updateById__weeklySchedules = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Teachers/:id/weeklySchedules/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Queries accessTokens of Teacher.
                 *
                 * @param any id User id
                 *
                 * @param object filter
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Teacher` object.)
                 * </em>
                 */
                TeacherApi.prototype.__get__accessTokens = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Teachers/:id/accessTokens";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Creates a new instance in accessTokens of this model.
                 *
                 * @param any id User id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Teacher` object.)
                 * </em>
                 */
                TeacherApi.prototype.__create__accessTokens = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Teachers/:id/accessTokens";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Deletes all accessTokens of this model.
                 *
                 * @param any id User id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                TeacherApi.prototype.__delete__accessTokens = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Teachers/:id/accessTokens";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Counts accessTokens of Teacher.
                 *
                 * @param any id User id
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                TeacherApi.prototype.__count__accessTokens = function (id, where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Teachers/:id/accessTokens/count";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Queries lessons of Teacher.
                 *
                 * @param any id User id
                 *
                 * @param object filter
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Teacher` object.)
                 * </em>
                 */
                TeacherApi.prototype.__get__lessons = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Teachers/:id/lessons";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Creates a new instance in lessons of this model.
                 *
                 * @param any id User id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Teacher` object.)
                 * </em>
                 */
                TeacherApi.prototype.__create__lessons = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Teachers/:id/lessons";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Deletes all lessons of this model.
                 *
                 * @param any id User id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                TeacherApi.prototype.__delete__lessons = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Teachers/:id/lessons";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Counts lessons of Teacher.
                 *
                 * @param any id User id
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                TeacherApi.prototype.__count__lessons = function (id, where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Teachers/:id/lessons/count";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Queries lessonNotes of Teacher.
                 *
                 * @param any id User id
                 *
                 * @param object filter
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Teacher` object.)
                 * </em>
                 */
                TeacherApi.prototype.__get__lessonNotes = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Teachers/:id/lessonNotes";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Creates a new instance in lessonNotes of this model.
                 *
                 * @param any id User id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Teacher` object.)
                 * </em>
                 */
                TeacherApi.prototype.__create__lessonNotes = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Teachers/:id/lessonNotes";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Deletes all lessonNotes of this model.
                 *
                 * @param any id User id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                TeacherApi.prototype.__delete__lessonNotes = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Teachers/:id/lessonNotes";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Counts lessonNotes of Teacher.
                 *
                 * @param any id User id
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                TeacherApi.prototype.__count__lessonNotes = function (id, where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Teachers/:id/lessonNotes/count";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Queries learningSessions of Teacher.
                 *
                 * @param any id User id
                 *
                 * @param object filter
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Teacher` object.)
                 * </em>
                 */
                TeacherApi.prototype.__get__learningSessions = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Teachers/:id/learningSessions";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Creates a new instance in learningSessions of this model.
                 *
                 * @param any id User id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Teacher` object.)
                 * </em>
                 */
                TeacherApi.prototype.__create__learningSessions = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Teachers/:id/learningSessions";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Deletes all learningSessions of this model.
                 *
                 * @param any id User id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                TeacherApi.prototype.__delete__learningSessions = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Teachers/:id/learningSessions";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Counts learningSessions of Teacher.
                 *
                 * @param any id User id
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                TeacherApi.prototype.__count__learningSessions = function (id, where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Teachers/:id/learningSessions/count";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Queries weeklySchedules of Teacher.
                 *
                 * @param any id User id
                 *
                 * @param object filter
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Teacher` object.)
                 * </em>
                 */
                TeacherApi.prototype.__get__weeklySchedules = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Teachers/:id/weeklySchedules";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Creates a new instance in weeklySchedules of this model.
                 *
                 * @param any id User id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Teacher` object.)
                 * </em>
                 */
                TeacherApi.prototype.__create__weeklySchedules = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Teachers/:id/weeklySchedules";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Deletes all weeklySchedules of this model.
                 *
                 * @param any id User id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                TeacherApi.prototype.__delete__weeklySchedules = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Teachers/:id/weeklySchedules";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Counts weeklySchedules of Teacher.
                 *
                 * @param any id User id
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                TeacherApi.prototype.__count__weeklySchedules = function (id, where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Teachers/:id/weeklySchedules/count";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Create a new instance of the model and persist it into the data source.
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Teacher` object.)
                 * </em>
                 */
                TeacherApi.prototype.create = function (data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Teachers";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Create a new instance of the model and persist it into the data source.
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Teacher` object.)
                 * </em>
                 */
                TeacherApi.prototype.createMany = function (data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Teachers";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Update an existing model instance or insert a new one into the data source.
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Teacher` object.)
                 * </em>
                 */
                TeacherApi.prototype.upsert = function (data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Teachers";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Check whether a model instance exists in the data source.
                 *
                 * @param any id Model id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `exists` – `{boolean}` -
                 */
                TeacherApi.prototype.exists = function (id) {
                    var method = "GET";
                    var url = this.getPath() + "/Teachers/:id/exists";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find a model instance by id from the data source.
                 *
                 * @param any id Model id
                 *
                 * @param object filter Filter defining fields and include
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Teacher` object.)
                 * </em>
                 */
                TeacherApi.prototype.findById = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Teachers/:id";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find all instances of the model matched by filter from the data source.
                 *
                 * @param object filter Filter defining fields, where, include, order, offset, and limit
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Teacher` object.)
                 * </em>
                 */
                TeacherApi.prototype.find = function (filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Teachers";
                    var urlParams = {};
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find first instance of the model matched by filter from the data source.
                 *
                 * @param object filter Filter defining fields, where, include, order, offset, and limit
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Teacher` object.)
                 * </em>
                 */
                TeacherApi.prototype.findOne = function (filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Teachers/findOne";
                    var urlParams = {};
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update instances of the model matched by where from the data source.
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * The number of instances updated
                 */
                TeacherApi.prototype.updateAll = function (where, data) {
                    if (where === void 0) { where = undefined; }
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Teachers/update";
                    var urlParams = {};
                    var params = {};
                    if (where !== undefined) {
                        params.where = where;
                    }
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Delete a model instance by id from the data source.
                 *
                 * @param any id Model id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Teacher` object.)
                 * </em>
                 */
                TeacherApi.prototype.deleteById = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Teachers/:id";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Count instances of the model matched by where from the data source.
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                TeacherApi.prototype.count = function (where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Teachers/count";
                    var urlParams = {};
                    var params = {};
                    if (where !== undefined) {
                        params.where = where;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update attributes for a model instance and persist it into the data source.
                 *
                 * @param any id User id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Teacher` object.)
                 * </em>
                 */
                TeacherApi.prototype.updateAttributes = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Teachers/:id";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Create a change stream.
                 *
                 * @param object data Request data.
                 *
                 *  - `options` – `{object}` -
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `changes` – `{ReadableStream}` -
                 */
                TeacherApi.prototype.createChangeStream = function (options) {
                    if (options === void 0) { options = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Teachers/change-stream";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params, options);
                    return result;
                };
                /**
                 * Login a user with username/email and password.
                 *
                 * @param string include Related objects to include in the response. See the description of return value for more details.
                 *   Default value: `user`.
                 *
                 *  - `rememberMe` - `boolean` - Whether the authentication credentials
                 *     should be remembered in localStorage across app/browser restarts.
                 *     Default: `true`.
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
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
                TeacherApi.prototype.login = function (credentials, include) {
                    if (include === void 0) { include = "user"; }
                    var method = "POST";
                    var url = this.getPath() + "/Teachers/login";
                    var urlParams = {};
                    var params = {};
                    if (include !== undefined) {
                        params.include = include;
                    }
                    var result = this.request(method, url, urlParams, params, credentials)
                        .share();
                    result.subscribe(function (response) {
                        auth.setUser(response.id, response.userId, response.user);
                        auth.setRememberMe(true);
                        auth.save();
                    }, function () { return null; });
                    return result;
                };
                /**
                 * Logout a user with access token.
                 *
                 * @param object data Request data.
                 *
                 *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                TeacherApi.prototype.logout = function () {
                    var method = "POST";
                    var url = this.getPath() + "/Teachers/logout";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params)
                        .share();
                    result.subscribe(function () {
                        auth.clearUser();
                        auth.clearStorage();
                    }, function () { return null; });
                    return result;
                };
                /**
                 * Confirm a user registration with email verification token.
                 *
                 * @param string uid
                 *
                 * @param string token
                 *
                 * @param string redirect
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                TeacherApi.prototype.confirm = function (uid, token, redirect) {
                    if (redirect === void 0) { redirect = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Teachers/confirm";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Reset password for a user with email.
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                TeacherApi.prototype.resetPassword = function (options) {
                    var method = "POST";
                    var url = this.getPath() + "/Teachers/reset";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params, options);
                    return result;
                };
                /**
                 * Fetches belongsTo relation teacher.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param boolean refresh
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Teacher` object.)
                 * </em>
                 */
                TeacherApi.prototype.__get__Lesson__teacher = function (id, refresh) {
                    if (refresh === void 0) { refresh = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Lessons/:id/teacher";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (refresh !== undefined) {
                        params.refresh = refresh;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Fetches belongsTo relation author.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param boolean refresh
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Teacher` object.)
                 * </em>
                 */
                TeacherApi.prototype.__get__LessonNote__author = function (id, refresh) {
                    if (refresh === void 0) { refresh = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/LessonNotes/:id/author";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (refresh !== undefined) {
                        params.refresh = refresh;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find a related item by id for teachers.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for teachers
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Teacher` object.)
                 * </em>
                 */
                TeacherApi.prototype.__findById__LearningSession__teachers = function (id, fk) {
                    var method = "GET";
                    var url = this.getPath() + "/LearningSessions/:id/teachers/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Delete a related item by id for teachers.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for teachers
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                TeacherApi.prototype.__destroyById__LearningSession__teachers = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/LearningSessions/:id/teachers/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update a related item by id for teachers.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for teachers
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Teacher` object.)
                 * </em>
                 */
                TeacherApi.prototype.__updateById__LearningSession__teachers = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/LearningSessions/:id/teachers/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Add a related item by id for teachers.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for teachers
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Teacher` object.)
                 * </em>
                 */
                TeacherApi.prototype.__link__LearningSession__teachers = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/LearningSessions/:id/teachers/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Remove the teachers relation to an item by id.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for teachers
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                TeacherApi.prototype.__unlink__LearningSession__teachers = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/LearningSessions/:id/teachers/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Check the existence of teachers relation to an item by id.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for teachers
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Teacher` object.)
                 * </em>
                 */
                TeacherApi.prototype.__exists__LearningSession__teachers = function (id, fk) {
                    var method = "HEAD";
                    var url = this.getPath() + "/LearningSessions/:id/teachers/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Queries teachers of LearningSession.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object filter
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Teacher` object.)
                 * </em>
                 */
                TeacherApi.prototype.__get__LearningSession__teachers = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/LearningSessions/:id/teachers";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Creates a new instance in teachers of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Teacher` object.)
                 * </em>
                 */
                TeacherApi.prototype.__create__LearningSession__teachers = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/LearningSessions/:id/teachers";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Creates a new instance in teachers of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Teacher` object.)
                 * </em>
                 */
                TeacherApi.prototype.__createMany__LearningSession__teachers = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/LearningSessions/:id/teachers";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Deletes all teachers of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                TeacherApi.prototype.__delete__LearningSession__teachers = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/LearningSessions/:id/teachers";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Counts teachers of LearningSession.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                TeacherApi.prototype.__count__LearningSession__teachers = function (id, where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/LearningSessions/:id/teachers/count";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Fetches belongsTo relation teacher.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param boolean refresh
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Teacher` object.)
                 * </em>
                 */
                TeacherApi.prototype.__get__WeeklySchedule__teacher = function (id, refresh) {
                    if (refresh === void 0) { refresh = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/WeeklySchedules/:id/teacher";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (refresh !== undefined) {
                        params.refresh = refresh;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
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
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 */
                TeacherApi.prototype.getCurrent = function () {
                    var method = "GET";
                    var url = this.getPath() + "/Teachers" + "/:id";
                    var id = auth.getCurrentUserId();
                    if (id == null) {
                        id = '__anonymous__';
                    }
                    var urlParams = {
                        id: id
                    };
                    var result = this.request(method, url, urlParams)
                        .share();
                    result.subscribe(function (response) {
                        auth.setCurrentUserData(response);
                    }, function () { return null; });
                    return result;
                };
                /**
                 * Get data of the currently logged user that was returned by the last
                 * call to {@link lbServices.Teacher#login} or
                 * {@link lbServices.Teacher#getCurrent}. Return null when there
                 * is no user logged in or the data of the current user were not fetched
                 * yet.
                 *
                 * @returns object A Teacher instance.
                 */
                TeacherApi.prototype.getCachedCurrent = function () {
                    return auth.getCurrentUserData();
                };
                /**
                 * @name lbServices.Teacher#isAuthenticated
                 *
                 * @returns {boolean} True if the current user is authenticated (logged in).
                 */
                TeacherApi.prototype.isAuthenticated = function () {
                    return this.getCurrentId() != null;
                };
                /**
                 * @name lbServices.Teacher#getCurrentId
                 *
                 * @returns object Id of the currently logged-in user or null.
                 */
                TeacherApi.prototype.getCurrentId = function () {
                    return auth.getCurrentUserId();
                };
                /**
                 * The name of the model represented by this $resource,
                 * i.e. `Teacher`.
                 */
                TeacherApi.prototype.getModelName = function () {
                    return "Teacher";
                };
                TeacherApi = __decorate([
                    core_1.Injectable(),
                    __param(0, core_1.Inject(http_1.Http)),
                    __param(1, core_1.Optional()),
                    __param(1, core_1.Inject(ErrorHandler)), 
                    __metadata('design:paramtypes', [http_1.Http, ErrorHandler])
                ], TeacherApi);
                return TeacherApi;
            }(BaseLoopBackApi));
            exports_1("TeacherApi", TeacherApi);
            /**
             * Api for the `Class` model.
             */
            ClassApi = (function (_super) {
                __extends(ClassApi, _super);
                function ClassApi(http, errorHandler) {
                    _super.call(this, http, errorHandler);
                }
                /**
                 * Fetches belongsTo relation term.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param boolean refresh
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Class` object.)
                 * </em>
                 */
                ClassApi.prototype.__get__term = function (id, refresh) {
                    if (refresh === void 0) { refresh = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Classes/:id/term";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (refresh !== undefined) {
                        params.refresh = refresh;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find a related item by id for students.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for students
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Class` object.)
                 * </em>
                 */
                ClassApi.prototype.__findById__students = function (id, fk) {
                    var method = "GET";
                    var url = this.getPath() + "/Classes/:id/students/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Delete a related item by id for students.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for students
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                ClassApi.prototype.__destroyById__students = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Classes/:id/students/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update a related item by id for students.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for students
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Class` object.)
                 * </em>
                 */
                ClassApi.prototype.__updateById__students = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Classes/:id/students/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Add a related item by id for students.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for students
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Class` object.)
                 * </em>
                 */
                ClassApi.prototype.__link__students = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Classes/:id/students/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Remove the students relation to an item by id.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for students
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                ClassApi.prototype.__unlink__students = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Classes/:id/students/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Check the existence of students relation to an item by id.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for students
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Class` object.)
                 * </em>
                 */
                ClassApi.prototype.__exists__students = function (id, fk) {
                    var method = "HEAD";
                    var url = this.getPath() + "/Classes/:id/students/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Queries students of Class.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object filter
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Class` object.)
                 * </em>
                 */
                ClassApi.prototype.__get__students = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Classes/:id/students";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Creates a new instance in students of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Class` object.)
                 * </em>
                 */
                ClassApi.prototype.__create__students = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Classes/:id/students";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Deletes all students of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                ClassApi.prototype.__delete__students = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Classes/:id/students";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Counts students of Class.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                ClassApi.prototype.__count__students = function (id, where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Classes/:id/students/count";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Create a new instance of the model and persist it into the data source.
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Class` object.)
                 * </em>
                 */
                ClassApi.prototype.create = function (data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Classes";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Create a new instance of the model and persist it into the data source.
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Class` object.)
                 * </em>
                 */
                ClassApi.prototype.createMany = function (data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Classes";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Update an existing model instance or insert a new one into the data source.
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Class` object.)
                 * </em>
                 */
                ClassApi.prototype.upsert = function (data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Classes";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Check whether a model instance exists in the data source.
                 *
                 * @param any id Model id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `exists` – `{boolean}` -
                 */
                ClassApi.prototype.exists = function (id) {
                    var method = "GET";
                    var url = this.getPath() + "/Classes/:id/exists";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find a model instance by id from the data source.
                 *
                 * @param any id Model id
                 *
                 * @param object filter Filter defining fields and include
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Class` object.)
                 * </em>
                 */
                ClassApi.prototype.findById = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Classes/:id";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find all instances of the model matched by filter from the data source.
                 *
                 * @param object filter Filter defining fields, where, include, order, offset, and limit
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Class` object.)
                 * </em>
                 */
                ClassApi.prototype.find = function (filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Classes";
                    var urlParams = {};
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find first instance of the model matched by filter from the data source.
                 *
                 * @param object filter Filter defining fields, where, include, order, offset, and limit
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Class` object.)
                 * </em>
                 */
                ClassApi.prototype.findOne = function (filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Classes/findOne";
                    var urlParams = {};
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update instances of the model matched by where from the data source.
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * The number of instances updated
                 */
                ClassApi.prototype.updateAll = function (where, data) {
                    if (where === void 0) { where = undefined; }
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Classes/update";
                    var urlParams = {};
                    var params = {};
                    if (where !== undefined) {
                        params.where = where;
                    }
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Delete a model instance by id from the data source.
                 *
                 * @param any id Model id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Class` object.)
                 * </em>
                 */
                ClassApi.prototype.deleteById = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Classes/:id";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Count instances of the model matched by where from the data source.
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                ClassApi.prototype.count = function (where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Classes/count";
                    var urlParams = {};
                    var params = {};
                    if (where !== undefined) {
                        params.where = where;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update attributes for a model instance and persist it into the data source.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Class` object.)
                 * </em>
                 */
                ClassApi.prototype.updateAttributes = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Classes/:id";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Create a change stream.
                 *
                 * @param object data Request data.
                 *
                 *  - `options` – `{object}` -
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `changes` – `{ReadableStream}` -
                 */
                ClassApi.prototype.createChangeStream = function (options) {
                    if (options === void 0) { options = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Classes/change-stream";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params, options);
                    return result;
                };
                /**
                 * Find a related item by id for classes.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for classes
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Class` object.)
                 * </em>
                 */
                ClassApi.prototype.__findById__Student__classes = function (id, fk) {
                    var method = "GET";
                    var url = this.getPath() + "/Students/:id/classes/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Delete a related item by id for classes.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for classes
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                ClassApi.prototype.__destroyById__Student__classes = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Students/:id/classes/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update a related item by id for classes.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for classes
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Class` object.)
                 * </em>
                 */
                ClassApi.prototype.__updateById__Student__classes = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Students/:id/classes/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Add a related item by id for classes.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for classes
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Class` object.)
                 * </em>
                 */
                ClassApi.prototype.__link__Student__classes = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Students/:id/classes/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Remove the classes relation to an item by id.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for classes
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                ClassApi.prototype.__unlink__Student__classes = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Students/:id/classes/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Check the existence of classes relation to an item by id.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for classes
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Class` object.)
                 * </em>
                 */
                ClassApi.prototype.__exists__Student__classes = function (id, fk) {
                    var method = "HEAD";
                    var url = this.getPath() + "/Students/:id/classes/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Queries classes of Student.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object filter
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Class` object.)
                 * </em>
                 */
                ClassApi.prototype.__get__Student__classes = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Students/:id/classes";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Creates a new instance in classes of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Class` object.)
                 * </em>
                 */
                ClassApi.prototype.__create__Student__classes = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Students/:id/classes";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Creates a new instance in classes of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Class` object.)
                 * </em>
                 */
                ClassApi.prototype.__createMany__Student__classes = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Students/:id/classes";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Deletes all classes of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                ClassApi.prototype.__delete__Student__classes = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Students/:id/classes";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Counts classes of Student.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                ClassApi.prototype.__count__Student__classes = function (id, where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Students/:id/classes/count";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find a related item by id for classes.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for classes
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Class` object.)
                 * </em>
                 */
                ClassApi.prototype.__findById__Term__classes = function (id, fk) {
                    var method = "GET";
                    var url = this.getPath() + "/Terms/:id/classes/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Delete a related item by id for classes.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for classes
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                ClassApi.prototype.__destroyById__Term__classes = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Terms/:id/classes/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update a related item by id for classes.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for classes
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Class` object.)
                 * </em>
                 */
                ClassApi.prototype.__updateById__Term__classes = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Terms/:id/classes/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Queries classes of Term.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object filter
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Class` object.)
                 * </em>
                 */
                ClassApi.prototype.__get__Term__classes = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Terms/:id/classes";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Creates a new instance in classes of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Class` object.)
                 * </em>
                 */
                ClassApi.prototype.__create__Term__classes = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Terms/:id/classes";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Creates a new instance in classes of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Class` object.)
                 * </em>
                 */
                ClassApi.prototype.__createMany__Term__classes = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Terms/:id/classes";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Deletes all classes of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                ClassApi.prototype.__delete__Term__classes = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Terms/:id/classes";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Counts classes of Term.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                ClassApi.prototype.__count__Term__classes = function (id, where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Terms/:id/classes/count";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Fetches belongsTo relation class.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param boolean refresh
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Class` object.)
                 * </em>
                 */
                ClassApi.prototype.__get__Seating__class = function (id, refresh) {
                    if (refresh === void 0) { refresh = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Seatings/:id/class";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (refresh !== undefined) {
                        params.refresh = refresh;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * The name of the model represented by this $resource,
                 * i.e. `Class`.
                 */
                ClassApi.prototype.getModelName = function () {
                    return "Class";
                };
                ClassApi = __decorate([
                    core_1.Injectable(),
                    __param(0, core_1.Inject(http_1.Http)),
                    __param(1, core_1.Optional()),
                    __param(1, core_1.Inject(ErrorHandler)), 
                    __metadata('design:paramtypes', [http_1.Http, ErrorHandler])
                ], ClassApi);
                return ClassApi;
            }(BaseLoopBackApi));
            exports_1("ClassApi", ClassApi);
            /**
             * Api for the `StudentGroup` model.
             */
            StudentGroupApi = (function (_super) {
                __extends(StudentGroupApi, _super);
                function StudentGroupApi(http, errorHandler) {
                    _super.call(this, http, errorHandler);
                }
                /**
                 * Find a related item by id for students.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for students
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `StudentGroup` object.)
                 * </em>
                 */
                StudentGroupApi.prototype.__findById__students = function (id, fk) {
                    var method = "GET";
                    var url = this.getPath() + "/StudentGroups/:id/students/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Delete a related item by id for students.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for students
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                StudentGroupApi.prototype.__destroyById__students = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/StudentGroups/:id/students/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update a related item by id for students.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for students
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `StudentGroup` object.)
                 * </em>
                 */
                StudentGroupApi.prototype.__updateById__students = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/StudentGroups/:id/students/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Add a related item by id for students.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for students
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `StudentGroup` object.)
                 * </em>
                 */
                StudentGroupApi.prototype.__link__students = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/StudentGroups/:id/students/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Remove the students relation to an item by id.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for students
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                StudentGroupApi.prototype.__unlink__students = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/StudentGroups/:id/students/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Check the existence of students relation to an item by id.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for students
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `StudentGroup` object.)
                 * </em>
                 */
                StudentGroupApi.prototype.__exists__students = function (id, fk) {
                    var method = "HEAD";
                    var url = this.getPath() + "/StudentGroups/:id/students/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Fetches belongsTo relation term.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param boolean refresh
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `StudentGroup` object.)
                 * </em>
                 */
                StudentGroupApi.prototype.__get__term = function (id, refresh) {
                    if (refresh === void 0) { refresh = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/StudentGroups/:id/term";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (refresh !== undefined) {
                        params.refresh = refresh;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find a related item by id for learningSessions.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for learningSessions
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `StudentGroup` object.)
                 * </em>
                 */
                StudentGroupApi.prototype.__findById__learningSessions = function (id, fk) {
                    var method = "GET";
                    var url = this.getPath() + "/StudentGroups/:id/learningSessions/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Delete a related item by id for learningSessions.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for learningSessions
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                StudentGroupApi.prototype.__destroyById__learningSessions = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/StudentGroups/:id/learningSessions/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update a related item by id for learningSessions.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for learningSessions
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `StudentGroup` object.)
                 * </em>
                 */
                StudentGroupApi.prototype.__updateById__learningSessions = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/StudentGroups/:id/learningSessions/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Add a related item by id for learningSessions.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for learningSessions
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `StudentGroup` object.)
                 * </em>
                 */
                StudentGroupApi.prototype.__link__learningSessions = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/StudentGroups/:id/learningSessions/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Remove the learningSessions relation to an item by id.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for learningSessions
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                StudentGroupApi.prototype.__unlink__learningSessions = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/StudentGroups/:id/learningSessions/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Check the existence of learningSessions relation to an item by id.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for learningSessions
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `StudentGroup` object.)
                 * </em>
                 */
                StudentGroupApi.prototype.__exists__learningSessions = function (id, fk) {
                    var method = "HEAD";
                    var url = this.getPath() + "/StudentGroups/:id/learningSessions/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Queries students of StudentGroup.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object filter
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `StudentGroup` object.)
                 * </em>
                 */
                StudentGroupApi.prototype.__get__students = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/StudentGroups/:id/students";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Creates a new instance in students of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `StudentGroup` object.)
                 * </em>
                 */
                StudentGroupApi.prototype.__create__students = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/StudentGroups/:id/students";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Deletes all students of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                StudentGroupApi.prototype.__delete__students = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/StudentGroups/:id/students";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Counts students of StudentGroup.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                StudentGroupApi.prototype.__count__students = function (id, where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/StudentGroups/:id/students/count";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Queries learningSessions of StudentGroup.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object filter
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `StudentGroup` object.)
                 * </em>
                 */
                StudentGroupApi.prototype.__get__learningSessions = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/StudentGroups/:id/learningSessions";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Creates a new instance in learningSessions of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `StudentGroup` object.)
                 * </em>
                 */
                StudentGroupApi.prototype.__create__learningSessions = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/StudentGroups/:id/learningSessions";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Deletes all learningSessions of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                StudentGroupApi.prototype.__delete__learningSessions = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/StudentGroups/:id/learningSessions";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Counts learningSessions of StudentGroup.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                StudentGroupApi.prototype.__count__learningSessions = function (id, where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/StudentGroups/:id/learningSessions/count";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Create a new instance of the model and persist it into the data source.
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `StudentGroup` object.)
                 * </em>
                 */
                StudentGroupApi.prototype.create = function (data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/StudentGroups";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Create a new instance of the model and persist it into the data source.
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `StudentGroup` object.)
                 * </em>
                 */
                StudentGroupApi.prototype.createMany = function (data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/StudentGroups";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Update an existing model instance or insert a new one into the data source.
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `StudentGroup` object.)
                 * </em>
                 */
                StudentGroupApi.prototype.upsert = function (data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/StudentGroups";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Check whether a model instance exists in the data source.
                 *
                 * @param any id Model id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `exists` – `{boolean}` -
                 */
                StudentGroupApi.prototype.exists = function (id) {
                    var method = "GET";
                    var url = this.getPath() + "/StudentGroups/:id/exists";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find a model instance by id from the data source.
                 *
                 * @param any id Model id
                 *
                 * @param object filter Filter defining fields and include
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `StudentGroup` object.)
                 * </em>
                 */
                StudentGroupApi.prototype.findById = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/StudentGroups/:id";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find all instances of the model matched by filter from the data source.
                 *
                 * @param object filter Filter defining fields, where, include, order, offset, and limit
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `StudentGroup` object.)
                 * </em>
                 */
                StudentGroupApi.prototype.find = function (filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/StudentGroups";
                    var urlParams = {};
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find first instance of the model matched by filter from the data source.
                 *
                 * @param object filter Filter defining fields, where, include, order, offset, and limit
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `StudentGroup` object.)
                 * </em>
                 */
                StudentGroupApi.prototype.findOne = function (filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/StudentGroups/findOne";
                    var urlParams = {};
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update instances of the model matched by where from the data source.
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * The number of instances updated
                 */
                StudentGroupApi.prototype.updateAll = function (where, data) {
                    if (where === void 0) { where = undefined; }
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/StudentGroups/update";
                    var urlParams = {};
                    var params = {};
                    if (where !== undefined) {
                        params.where = where;
                    }
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Delete a model instance by id from the data source.
                 *
                 * @param any id Model id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `StudentGroup` object.)
                 * </em>
                 */
                StudentGroupApi.prototype.deleteById = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/StudentGroups/:id";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Count instances of the model matched by where from the data source.
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                StudentGroupApi.prototype.count = function (where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/StudentGroups/count";
                    var urlParams = {};
                    var params = {};
                    if (where !== undefined) {
                        params.where = where;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update attributes for a model instance and persist it into the data source.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `StudentGroup` object.)
                 * </em>
                 */
                StudentGroupApi.prototype.updateAttributes = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/StudentGroups/:id";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Create a change stream.
                 *
                 * @param object data Request data.
                 *
                 *  - `options` – `{object}` -
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `changes` – `{ReadableStream}` -
                 */
                StudentGroupApi.prototype.createChangeStream = function (options) {
                    if (options === void 0) { options = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/StudentGroups/change-stream";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params, options);
                    return result;
                };
                /**
                 * Find a related item by id for studentGroups.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for studentGroups
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `StudentGroup` object.)
                 * </em>
                 */
                StudentGroupApi.prototype.__findById__Student__studentGroups = function (id, fk) {
                    var method = "GET";
                    var url = this.getPath() + "/Students/:id/studentGroups/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Delete a related item by id for studentGroups.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for studentGroups
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                StudentGroupApi.prototype.__destroyById__Student__studentGroups = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Students/:id/studentGroups/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update a related item by id for studentGroups.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for studentGroups
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `StudentGroup` object.)
                 * </em>
                 */
                StudentGroupApi.prototype.__updateById__Student__studentGroups = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Students/:id/studentGroups/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Add a related item by id for studentGroups.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for studentGroups
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `StudentGroup` object.)
                 * </em>
                 */
                StudentGroupApi.prototype.__link__Student__studentGroups = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Students/:id/studentGroups/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Remove the studentGroups relation to an item by id.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for studentGroups
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                StudentGroupApi.prototype.__unlink__Student__studentGroups = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Students/:id/studentGroups/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Check the existence of studentGroups relation to an item by id.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for studentGroups
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `StudentGroup` object.)
                 * </em>
                 */
                StudentGroupApi.prototype.__exists__Student__studentGroups = function (id, fk) {
                    var method = "HEAD";
                    var url = this.getPath() + "/Students/:id/studentGroups/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Queries studentGroups of Student.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object filter
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `StudentGroup` object.)
                 * </em>
                 */
                StudentGroupApi.prototype.__get__Student__studentGroups = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Students/:id/studentGroups";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Creates a new instance in studentGroups of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `StudentGroup` object.)
                 * </em>
                 */
                StudentGroupApi.prototype.__create__Student__studentGroups = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Students/:id/studentGroups";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Creates a new instance in studentGroups of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `StudentGroup` object.)
                 * </em>
                 */
                StudentGroupApi.prototype.__createMany__Student__studentGroups = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Students/:id/studentGroups";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Deletes all studentGroups of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                StudentGroupApi.prototype.__delete__Student__studentGroups = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Students/:id/studentGroups";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Counts studentGroups of Student.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                StudentGroupApi.prototype.__count__Student__studentGroups = function (id, where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Students/:id/studentGroups/count";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find a related item by id for targetStudentGroups.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for targetStudentGroups
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `StudentGroup` object.)
                 * </em>
                 */
                StudentGroupApi.prototype.__findById__Lesson__targetStudentGroups = function (id, fk) {
                    var method = "GET";
                    var url = this.getPath() + "/Lessons/:id/targetStudentGroups/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Delete a related item by id for targetStudentGroups.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for targetStudentGroups
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                StudentGroupApi.prototype.__destroyById__Lesson__targetStudentGroups = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Lessons/:id/targetStudentGroups/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update a related item by id for targetStudentGroups.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for targetStudentGroups
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `StudentGroup` object.)
                 * </em>
                 */
                StudentGroupApi.prototype.__updateById__Lesson__targetStudentGroups = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Lessons/:id/targetStudentGroups/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Add a related item by id for targetStudentGroups.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for targetStudentGroups
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `StudentGroup` object.)
                 * </em>
                 */
                StudentGroupApi.prototype.__link__Lesson__targetStudentGroups = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Lessons/:id/targetStudentGroups/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Remove the targetStudentGroups relation to an item by id.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for targetStudentGroups
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                StudentGroupApi.prototype.__unlink__Lesson__targetStudentGroups = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Lessons/:id/targetStudentGroups/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Check the existence of targetStudentGroups relation to an item by id.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for targetStudentGroups
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `StudentGroup` object.)
                 * </em>
                 */
                StudentGroupApi.prototype.__exists__Lesson__targetStudentGroups = function (id, fk) {
                    var method = "HEAD";
                    var url = this.getPath() + "/Lessons/:id/targetStudentGroups/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Queries targetStudentGroups of Lesson.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object filter
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `StudentGroup` object.)
                 * </em>
                 */
                StudentGroupApi.prototype.__get__Lesson__targetStudentGroups = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Lessons/:id/targetStudentGroups";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Creates a new instance in targetStudentGroups of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `StudentGroup` object.)
                 * </em>
                 */
                StudentGroupApi.prototype.__create__Lesson__targetStudentGroups = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Lessons/:id/targetStudentGroups";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Creates a new instance in targetStudentGroups of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `StudentGroup` object.)
                 * </em>
                 */
                StudentGroupApi.prototype.__createMany__Lesson__targetStudentGroups = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Lessons/:id/targetStudentGroups";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Deletes all targetStudentGroups of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                StudentGroupApi.prototype.__delete__Lesson__targetStudentGroups = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Lessons/:id/targetStudentGroups";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Counts targetStudentGroups of Lesson.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                StudentGroupApi.prototype.__count__Lesson__targetStudentGroups = function (id, where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Lessons/:id/targetStudentGroups/count";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find a related item by id for studentGroups.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for studentGroups
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `StudentGroup` object.)
                 * </em>
                 */
                StudentGroupApi.prototype.__findById__LearningSession__studentGroups = function (id, fk) {
                    var method = "GET";
                    var url = this.getPath() + "/LearningSessions/:id/studentGroups/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Delete a related item by id for studentGroups.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for studentGroups
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                StudentGroupApi.prototype.__destroyById__LearningSession__studentGroups = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/LearningSessions/:id/studentGroups/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update a related item by id for studentGroups.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for studentGroups
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `StudentGroup` object.)
                 * </em>
                 */
                StudentGroupApi.prototype.__updateById__LearningSession__studentGroups = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/LearningSessions/:id/studentGroups/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Add a related item by id for studentGroups.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for studentGroups
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `StudentGroup` object.)
                 * </em>
                 */
                StudentGroupApi.prototype.__link__LearningSession__studentGroups = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/LearningSessions/:id/studentGroups/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Remove the studentGroups relation to an item by id.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for studentGroups
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                StudentGroupApi.prototype.__unlink__LearningSession__studentGroups = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/LearningSessions/:id/studentGroups/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Check the existence of studentGroups relation to an item by id.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for studentGroups
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `StudentGroup` object.)
                 * </em>
                 */
                StudentGroupApi.prototype.__exists__LearningSession__studentGroups = function (id, fk) {
                    var method = "HEAD";
                    var url = this.getPath() + "/LearningSessions/:id/studentGroups/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Queries studentGroups of LearningSession.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object filter
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `StudentGroup` object.)
                 * </em>
                 */
                StudentGroupApi.prototype.__get__LearningSession__studentGroups = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/LearningSessions/:id/studentGroups";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Creates a new instance in studentGroups of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `StudentGroup` object.)
                 * </em>
                 */
                StudentGroupApi.prototype.__create__LearningSession__studentGroups = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/LearningSessions/:id/studentGroups";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Creates a new instance in studentGroups of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `StudentGroup` object.)
                 * </em>
                 */
                StudentGroupApi.prototype.__createMany__LearningSession__studentGroups = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/LearningSessions/:id/studentGroups";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Deletes all studentGroups of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                StudentGroupApi.prototype.__delete__LearningSession__studentGroups = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/LearningSessions/:id/studentGroups";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Counts studentGroups of LearningSession.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                StudentGroupApi.prototype.__count__LearningSession__studentGroups = function (id, where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/LearningSessions/:id/studentGroups/count";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find a related item by id for studentGroups.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for studentGroups
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `StudentGroup` object.)
                 * </em>
                 */
                StudentGroupApi.prototype.__findById__ScheduleItem__studentGroups = function (id, fk) {
                    var method = "GET";
                    var url = this.getPath() + "/ScheduleItems/:id/studentGroups/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Delete a related item by id for studentGroups.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for studentGroups
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                StudentGroupApi.prototype.__destroyById__ScheduleItem__studentGroups = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/ScheduleItems/:id/studentGroups/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update a related item by id for studentGroups.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for studentGroups
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `StudentGroup` object.)
                 * </em>
                 */
                StudentGroupApi.prototype.__updateById__ScheduleItem__studentGroups = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/ScheduleItems/:id/studentGroups/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Add a related item by id for studentGroups.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for studentGroups
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `StudentGroup` object.)
                 * </em>
                 */
                StudentGroupApi.prototype.__link__ScheduleItem__studentGroups = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/ScheduleItems/:id/studentGroups/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Remove the studentGroups relation to an item by id.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for studentGroups
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                StudentGroupApi.prototype.__unlink__ScheduleItem__studentGroups = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/ScheduleItems/:id/studentGroups/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Check the existence of studentGroups relation to an item by id.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for studentGroups
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `StudentGroup` object.)
                 * </em>
                 */
                StudentGroupApi.prototype.__exists__ScheduleItem__studentGroups = function (id, fk) {
                    var method = "HEAD";
                    var url = this.getPath() + "/ScheduleItems/:id/studentGroups/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Queries studentGroups of ScheduleItem.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object filter
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `StudentGroup` object.)
                 * </em>
                 */
                StudentGroupApi.prototype.__get__ScheduleItem__studentGroups = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/ScheduleItems/:id/studentGroups";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Creates a new instance in studentGroups of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `StudentGroup` object.)
                 * </em>
                 */
                StudentGroupApi.prototype.__create__ScheduleItem__studentGroups = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/ScheduleItems/:id/studentGroups";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Creates a new instance in studentGroups of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `StudentGroup` object.)
                 * </em>
                 */
                StudentGroupApi.prototype.__createMany__ScheduleItem__studentGroups = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/ScheduleItems/:id/studentGroups";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Deletes all studentGroups of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                StudentGroupApi.prototype.__delete__ScheduleItem__studentGroups = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/ScheduleItems/:id/studentGroups";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Counts studentGroups of ScheduleItem.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                StudentGroupApi.prototype.__count__ScheduleItem__studentGroups = function (id, where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/ScheduleItems/:id/studentGroups/count";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * The name of the model represented by this $resource,
                 * i.e. `StudentGroup`.
                 */
                StudentGroupApi.prototype.getModelName = function () {
                    return "StudentGroup";
                };
                StudentGroupApi = __decorate([
                    core_1.Injectable(),
                    __param(0, core_1.Inject(http_1.Http)),
                    __param(1, core_1.Optional()),
                    __param(1, core_1.Inject(ErrorHandler)), 
                    __metadata('design:paramtypes', [http_1.Http, ErrorHandler])
                ], StudentGroupApi);
                return StudentGroupApi;
            }(BaseLoopBackApi));
            exports_1("StudentGroupApi", StudentGroupApi);
            /**
             * Api for the `Term` model.
             */
            TermApi = (function (_super) {
                __extends(TermApi, _super);
                function TermApi(http, errorHandler) {
                    _super.call(this, http, errorHandler);
                }
                /**
                 * Find a related item by id for classes.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for classes
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Term` object.)
                 * </em>
                 */
                TermApi.prototype.__findById__classes = function (id, fk) {
                    var method = "GET";
                    var url = this.getPath() + "/Terms/:id/classes/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Delete a related item by id for classes.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for classes
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                TermApi.prototype.__destroyById__classes = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Terms/:id/classes/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update a related item by id for classes.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for classes
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Term` object.)
                 * </em>
                 */
                TermApi.prototype.__updateById__classes = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Terms/:id/classes/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Find a related item by id for lessons.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for lessons
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Term` object.)
                 * </em>
                 */
                TermApi.prototype.__findById__lessons = function (id, fk) {
                    var method = "GET";
                    var url = this.getPath() + "/Terms/:id/lessons/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Delete a related item by id for lessons.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for lessons
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                TermApi.prototype.__destroyById__lessons = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Terms/:id/lessons/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update a related item by id for lessons.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for lessons
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Term` object.)
                 * </em>
                 */
                TermApi.prototype.__updateById__lessons = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Terms/:id/lessons/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Find a related item by id for weeklySchedules.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for weeklySchedules
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Term` object.)
                 * </em>
                 */
                TermApi.prototype.__findById__weeklySchedules = function (id, fk) {
                    var method = "GET";
                    var url = this.getPath() + "/Terms/:id/weeklySchedules/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Delete a related item by id for weeklySchedules.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for weeklySchedules
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                TermApi.prototype.__destroyById__weeklySchedules = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Terms/:id/weeklySchedules/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update a related item by id for weeklySchedules.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for weeklySchedules
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Term` object.)
                 * </em>
                 */
                TermApi.prototype.__updateById__weeklySchedules = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Terms/:id/weeklySchedules/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Queries classes of Term.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object filter
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Term` object.)
                 * </em>
                 */
                TermApi.prototype.__get__classes = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Terms/:id/classes";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Creates a new instance in classes of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Term` object.)
                 * </em>
                 */
                TermApi.prototype.__create__classes = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Terms/:id/classes";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Deletes all classes of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                TermApi.prototype.__delete__classes = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Terms/:id/classes";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Counts classes of Term.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                TermApi.prototype.__count__classes = function (id, where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Terms/:id/classes/count";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Queries lessons of Term.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object filter
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Term` object.)
                 * </em>
                 */
                TermApi.prototype.__get__lessons = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Terms/:id/lessons";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Creates a new instance in lessons of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Term` object.)
                 * </em>
                 */
                TermApi.prototype.__create__lessons = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Terms/:id/lessons";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Deletes all lessons of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                TermApi.prototype.__delete__lessons = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Terms/:id/lessons";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Counts lessons of Term.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                TermApi.prototype.__count__lessons = function (id, where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Terms/:id/lessons/count";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Queries weeklySchedules of Term.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object filter
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Term` object.)
                 * </em>
                 */
                TermApi.prototype.__get__weeklySchedules = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Terms/:id/weeklySchedules";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Creates a new instance in weeklySchedules of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Term` object.)
                 * </em>
                 */
                TermApi.prototype.__create__weeklySchedules = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Terms/:id/weeklySchedules";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Deletes all weeklySchedules of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                TermApi.prototype.__delete__weeklySchedules = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Terms/:id/weeklySchedules";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Counts weeklySchedules of Term.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                TermApi.prototype.__count__weeklySchedules = function (id, where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Terms/:id/weeklySchedules/count";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Create a new instance of the model and persist it into the data source.
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Term` object.)
                 * </em>
                 */
                TermApi.prototype.create = function (data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Terms";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Create a new instance of the model and persist it into the data source.
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Term` object.)
                 * </em>
                 */
                TermApi.prototype.createMany = function (data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Terms";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Update an existing model instance or insert a new one into the data source.
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Term` object.)
                 * </em>
                 */
                TermApi.prototype.upsert = function (data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Terms";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Check whether a model instance exists in the data source.
                 *
                 * @param any id Model id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `exists` – `{boolean}` -
                 */
                TermApi.prototype.exists = function (id) {
                    var method = "GET";
                    var url = this.getPath() + "/Terms/:id/exists";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find a model instance by id from the data source.
                 *
                 * @param any id Model id
                 *
                 * @param object filter Filter defining fields and include
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Term` object.)
                 * </em>
                 */
                TermApi.prototype.findById = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Terms/:id";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find all instances of the model matched by filter from the data source.
                 *
                 * @param object filter Filter defining fields, where, include, order, offset, and limit
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Term` object.)
                 * </em>
                 */
                TermApi.prototype.find = function (filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Terms";
                    var urlParams = {};
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find first instance of the model matched by filter from the data source.
                 *
                 * @param object filter Filter defining fields, where, include, order, offset, and limit
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Term` object.)
                 * </em>
                 */
                TermApi.prototype.findOne = function (filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Terms/findOne";
                    var urlParams = {};
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update instances of the model matched by where from the data source.
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * The number of instances updated
                 */
                TermApi.prototype.updateAll = function (where, data) {
                    if (where === void 0) { where = undefined; }
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Terms/update";
                    var urlParams = {};
                    var params = {};
                    if (where !== undefined) {
                        params.where = where;
                    }
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Delete a model instance by id from the data source.
                 *
                 * @param any id Model id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Term` object.)
                 * </em>
                 */
                TermApi.prototype.deleteById = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Terms/:id";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Count instances of the model matched by where from the data source.
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                TermApi.prototype.count = function (where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Terms/count";
                    var urlParams = {};
                    var params = {};
                    if (where !== undefined) {
                        params.where = where;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update attributes for a model instance and persist it into the data source.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Term` object.)
                 * </em>
                 */
                TermApi.prototype.updateAttributes = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Terms/:id";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Create a change stream.
                 *
                 * @param object data Request data.
                 *
                 *  - `options` – `{object}` -
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `changes` – `{ReadableStream}` -
                 */
                TermApi.prototype.createChangeStream = function (options) {
                    if (options === void 0) { options = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Terms/change-stream";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params, options);
                    return result;
                };
                /**
                 * Fetches belongsTo relation term.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param boolean refresh
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Term` object.)
                 * </em>
                 */
                TermApi.prototype.__get__Class__term = function (id, refresh) {
                    if (refresh === void 0) { refresh = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Classes/:id/term";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (refresh !== undefined) {
                        params.refresh = refresh;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Fetches belongsTo relation term.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param boolean refresh
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Term` object.)
                 * </em>
                 */
                TermApi.prototype.__get__StudentGroup__term = function (id, refresh) {
                    if (refresh === void 0) { refresh = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/StudentGroups/:id/term";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (refresh !== undefined) {
                        params.refresh = refresh;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Fetches belongsTo relation term.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param boolean refresh
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Term` object.)
                 * </em>
                 */
                TermApi.prototype.__get__Lesson__term = function (id, refresh) {
                    if (refresh === void 0) { refresh = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Lessons/:id/term";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (refresh !== undefined) {
                        params.refresh = refresh;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Fetches belongsTo relation term.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param boolean refresh
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Term` object.)
                 * </em>
                 */
                TermApi.prototype.__get__WeeklySchedule__term = function (id, refresh) {
                    if (refresh === void 0) { refresh = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/WeeklySchedules/:id/term";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (refresh !== undefined) {
                        params.refresh = refresh;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * The name of the model represented by this $resource,
                 * i.e. `Term`.
                 */
                TermApi.prototype.getModelName = function () {
                    return "Term";
                };
                TermApi = __decorate([
                    core_1.Injectable(),
                    __param(0, core_1.Inject(http_1.Http)),
                    __param(1, core_1.Optional()),
                    __param(1, core_1.Inject(ErrorHandler)), 
                    __metadata('design:paramtypes', [http_1.Http, ErrorHandler])
                ], TermApi);
                return TermApi;
            }(BaseLoopBackApi));
            exports_1("TermApi", TermApi);
            /**
             * Api for the `Lesson` model.
             */
            LessonApi = (function (_super) {
                __extends(LessonApi, _super);
                function LessonApi(http, errorHandler) {
                    _super.call(this, http, errorHandler);
                }
                /**
                 * Fetches belongsTo relation term.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param boolean refresh
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Lesson` object.)
                 * </em>
                 */
                LessonApi.prototype.__get__term = function (id, refresh) {
                    if (refresh === void 0) { refresh = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Lessons/:id/term";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (refresh !== undefined) {
                        params.refresh = refresh;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Fetches belongsTo relation teacher.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param boolean refresh
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Lesson` object.)
                 * </em>
                 */
                LessonApi.prototype.__get__teacher = function (id, refresh) {
                    if (refresh === void 0) { refresh = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Lessons/:id/teacher";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (refresh !== undefined) {
                        params.refresh = refresh;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find a related item by id for targetStudentGroups.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for targetStudentGroups
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Lesson` object.)
                 * </em>
                 */
                LessonApi.prototype.__findById__targetStudentGroups = function (id, fk) {
                    var method = "GET";
                    var url = this.getPath() + "/Lessons/:id/targetStudentGroups/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Delete a related item by id for targetStudentGroups.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for targetStudentGroups
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                LessonApi.prototype.__destroyById__targetStudentGroups = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Lessons/:id/targetStudentGroups/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update a related item by id for targetStudentGroups.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for targetStudentGroups
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Lesson` object.)
                 * </em>
                 */
                LessonApi.prototype.__updateById__targetStudentGroups = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Lessons/:id/targetStudentGroups/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Add a related item by id for targetStudentGroups.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for targetStudentGroups
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Lesson` object.)
                 * </em>
                 */
                LessonApi.prototype.__link__targetStudentGroups = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Lessons/:id/targetStudentGroups/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Remove the targetStudentGroups relation to an item by id.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for targetStudentGroups
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                LessonApi.prototype.__unlink__targetStudentGroups = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Lessons/:id/targetStudentGroups/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Check the existence of targetStudentGroups relation to an item by id.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for targetStudentGroups
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Lesson` object.)
                 * </em>
                 */
                LessonApi.prototype.__exists__targetStudentGroups = function (id, fk) {
                    var method = "HEAD";
                    var url = this.getPath() + "/Lessons/:id/targetStudentGroups/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find a related item by id for lessonNotes.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for lessonNotes
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Lesson` object.)
                 * </em>
                 */
                LessonApi.prototype.__findById__lessonNotes = function (id, fk) {
                    var method = "GET";
                    var url = this.getPath() + "/Lessons/:id/lessonNotes/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Delete a related item by id for lessonNotes.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for lessonNotes
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                LessonApi.prototype.__destroyById__lessonNotes = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Lessons/:id/lessonNotes/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update a related item by id for lessonNotes.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for lessonNotes
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Lesson` object.)
                 * </em>
                 */
                LessonApi.prototype.__updateById__lessonNotes = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Lessons/:id/lessonNotes/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Find a related item by id for learningSessions.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for learningSessions
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Lesson` object.)
                 * </em>
                 */
                LessonApi.prototype.__findById__learningSessions = function (id, fk) {
                    var method = "GET";
                    var url = this.getPath() + "/Lessons/:id/learningSessions/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Delete a related item by id for learningSessions.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for learningSessions
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                LessonApi.prototype.__destroyById__learningSessions = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Lessons/:id/learningSessions/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update a related item by id for learningSessions.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for learningSessions
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Lesson` object.)
                 * </em>
                 */
                LessonApi.prototype.__updateById__learningSessions = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Lessons/:id/learningSessions/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Queries targetStudentGroups of Lesson.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object filter
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Lesson` object.)
                 * </em>
                 */
                LessonApi.prototype.__get__targetStudentGroups = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Lessons/:id/targetStudentGroups";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Creates a new instance in targetStudentGroups of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Lesson` object.)
                 * </em>
                 */
                LessonApi.prototype.__create__targetStudentGroups = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Lessons/:id/targetStudentGroups";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Deletes all targetStudentGroups of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                LessonApi.prototype.__delete__targetStudentGroups = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Lessons/:id/targetStudentGroups";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Counts targetStudentGroups of Lesson.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                LessonApi.prototype.__count__targetStudentGroups = function (id, where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Lessons/:id/targetStudentGroups/count";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Queries lessonNotes of Lesson.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object filter
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Lesson` object.)
                 * </em>
                 */
                LessonApi.prototype.__get__lessonNotes = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Lessons/:id/lessonNotes";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Creates a new instance in lessonNotes of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Lesson` object.)
                 * </em>
                 */
                LessonApi.prototype.__create__lessonNotes = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Lessons/:id/lessonNotes";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Deletes all lessonNotes of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                LessonApi.prototype.__delete__lessonNotes = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Lessons/:id/lessonNotes";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Counts lessonNotes of Lesson.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                LessonApi.prototype.__count__lessonNotes = function (id, where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Lessons/:id/lessonNotes/count";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Queries learningSessions of Lesson.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object filter
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Lesson` object.)
                 * </em>
                 */
                LessonApi.prototype.__get__learningSessions = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Lessons/:id/learningSessions";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Creates a new instance in learningSessions of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Lesson` object.)
                 * </em>
                 */
                LessonApi.prototype.__create__learningSessions = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Lessons/:id/learningSessions";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Deletes all learningSessions of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                LessonApi.prototype.__delete__learningSessions = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Lessons/:id/learningSessions";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Counts learningSessions of Lesson.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                LessonApi.prototype.__count__learningSessions = function (id, where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Lessons/:id/learningSessions/count";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Create a new instance of the model and persist it into the data source.
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Lesson` object.)
                 * </em>
                 */
                LessonApi.prototype.create = function (data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Lessons";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Create a new instance of the model and persist it into the data source.
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Lesson` object.)
                 * </em>
                 */
                LessonApi.prototype.createMany = function (data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Lessons";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Update an existing model instance or insert a new one into the data source.
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Lesson` object.)
                 * </em>
                 */
                LessonApi.prototype.upsert = function (data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Lessons";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Check whether a model instance exists in the data source.
                 *
                 * @param any id Model id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `exists` – `{boolean}` -
                 */
                LessonApi.prototype.exists = function (id) {
                    var method = "GET";
                    var url = this.getPath() + "/Lessons/:id/exists";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find a model instance by id from the data source.
                 *
                 * @param any id Model id
                 *
                 * @param object filter Filter defining fields and include
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Lesson` object.)
                 * </em>
                 */
                LessonApi.prototype.findById = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Lessons/:id";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find all instances of the model matched by filter from the data source.
                 *
                 * @param object filter Filter defining fields, where, include, order, offset, and limit
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Lesson` object.)
                 * </em>
                 */
                LessonApi.prototype.find = function (filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Lessons";
                    var urlParams = {};
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find first instance of the model matched by filter from the data source.
                 *
                 * @param object filter Filter defining fields, where, include, order, offset, and limit
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Lesson` object.)
                 * </em>
                 */
                LessonApi.prototype.findOne = function (filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Lessons/findOne";
                    var urlParams = {};
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update instances of the model matched by where from the data source.
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * The number of instances updated
                 */
                LessonApi.prototype.updateAll = function (where, data) {
                    if (where === void 0) { where = undefined; }
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Lessons/update";
                    var urlParams = {};
                    var params = {};
                    if (where !== undefined) {
                        params.where = where;
                    }
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Delete a model instance by id from the data source.
                 *
                 * @param any id Model id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Lesson` object.)
                 * </em>
                 */
                LessonApi.prototype.deleteById = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Lessons/:id";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Count instances of the model matched by where from the data source.
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                LessonApi.prototype.count = function (where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Lessons/count";
                    var urlParams = {};
                    var params = {};
                    if (where !== undefined) {
                        params.where = where;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update attributes for a model instance and persist it into the data source.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Lesson` object.)
                 * </em>
                 */
                LessonApi.prototype.updateAttributes = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Lessons/:id";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Create a change stream.
                 *
                 * @param object data Request data.
                 *
                 *  - `options` – `{object}` -
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `changes` – `{ReadableStream}` -
                 */
                LessonApi.prototype.createChangeStream = function (options) {
                    if (options === void 0) { options = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Lessons/change-stream";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params, options);
                    return result;
                };
                /**
                 * Find a related item by id for lessons.
                 *
                 * @param any id User id
                 *
                 * @param any fk Foreign key for lessons
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Lesson` object.)
                 * </em>
                 */
                LessonApi.prototype.__findById__Teacher__lessons = function (id, fk) {
                    var method = "GET";
                    var url = this.getPath() + "/Teachers/:id/lessons/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Delete a related item by id for lessons.
                 *
                 * @param any id User id
                 *
                 * @param any fk Foreign key for lessons
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                LessonApi.prototype.__destroyById__Teacher__lessons = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Teachers/:id/lessons/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update a related item by id for lessons.
                 *
                 * @param any id User id
                 *
                 * @param any fk Foreign key for lessons
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Lesson` object.)
                 * </em>
                 */
                LessonApi.prototype.__updateById__Teacher__lessons = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Teachers/:id/lessons/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Queries lessons of Teacher.
                 *
                 * @param any id User id
                 *
                 * @param object filter
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Lesson` object.)
                 * </em>
                 */
                LessonApi.prototype.__get__Teacher__lessons = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Teachers/:id/lessons";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Creates a new instance in lessons of this model.
                 *
                 * @param any id User id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Lesson` object.)
                 * </em>
                 */
                LessonApi.prototype.__create__Teacher__lessons = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Teachers/:id/lessons";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Creates a new instance in lessons of this model.
                 *
                 * @param any id User id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Lesson` object.)
                 * </em>
                 */
                LessonApi.prototype.__createMany__Teacher__lessons = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Teachers/:id/lessons";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Deletes all lessons of this model.
                 *
                 * @param any id User id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                LessonApi.prototype.__delete__Teacher__lessons = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Teachers/:id/lessons";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Counts lessons of Teacher.
                 *
                 * @param any id User id
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                LessonApi.prototype.__count__Teacher__lessons = function (id, where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Teachers/:id/lessons/count";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find a related item by id for lessons.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for lessons
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Lesson` object.)
                 * </em>
                 */
                LessonApi.prototype.__findById__Term__lessons = function (id, fk) {
                    var method = "GET";
                    var url = this.getPath() + "/Terms/:id/lessons/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Delete a related item by id for lessons.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for lessons
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                LessonApi.prototype.__destroyById__Term__lessons = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Terms/:id/lessons/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update a related item by id for lessons.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for lessons
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Lesson` object.)
                 * </em>
                 */
                LessonApi.prototype.__updateById__Term__lessons = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Terms/:id/lessons/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Queries lessons of Term.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object filter
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Lesson` object.)
                 * </em>
                 */
                LessonApi.prototype.__get__Term__lessons = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Terms/:id/lessons";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Creates a new instance in lessons of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Lesson` object.)
                 * </em>
                 */
                LessonApi.prototype.__create__Term__lessons = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Terms/:id/lessons";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Creates a new instance in lessons of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Lesson` object.)
                 * </em>
                 */
                LessonApi.prototype.__createMany__Term__lessons = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Terms/:id/lessons";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Deletes all lessons of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                LessonApi.prototype.__delete__Term__lessons = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Terms/:id/lessons";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Counts lessons of Term.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                LessonApi.prototype.__count__Term__lessons = function (id, where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Terms/:id/lessons/count";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Fetches belongsTo relation lesson.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param boolean refresh
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Lesson` object.)
                 * </em>
                 */
                LessonApi.prototype.__get__LessonNote__lesson = function (id, refresh) {
                    if (refresh === void 0) { refresh = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/LessonNotes/:id/lesson";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (refresh !== undefined) {
                        params.refresh = refresh;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Fetches belongsTo relation lesson.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param boolean refresh
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Lesson` object.)
                 * </em>
                 */
                LessonApi.prototype.__get__LearningSession__lesson = function (id, refresh) {
                    if (refresh === void 0) { refresh = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/LearningSessions/:id/lesson";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (refresh !== undefined) {
                        params.refresh = refresh;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * The name of the model represented by this $resource,
                 * i.e. `Lesson`.
                 */
                LessonApi.prototype.getModelName = function () {
                    return "Lesson";
                };
                LessonApi = __decorate([
                    core_1.Injectable(),
                    __param(0, core_1.Inject(http_1.Http)),
                    __param(1, core_1.Optional()),
                    __param(1, core_1.Inject(ErrorHandler)), 
                    __metadata('design:paramtypes', [http_1.Http, ErrorHandler])
                ], LessonApi);
                return LessonApi;
            }(BaseLoopBackApi));
            exports_1("LessonApi", LessonApi);
            /**
             * Api for the `LessonNote` model.
             */
            LessonNoteApi = (function (_super) {
                __extends(LessonNoteApi, _super);
                function LessonNoteApi(http, errorHandler) {
                    _super.call(this, http, errorHandler);
                }
                /**
                 * Fetches belongsTo relation lesson.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param boolean refresh
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LessonNote` object.)
                 * </em>
                 */
                LessonNoteApi.prototype.__get__lesson = function (id, refresh) {
                    if (refresh === void 0) { refresh = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/LessonNotes/:id/lesson";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (refresh !== undefined) {
                        params.refresh = refresh;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Fetches belongsTo relation author.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param boolean refresh
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LessonNote` object.)
                 * </em>
                 */
                LessonNoteApi.prototype.__get__author = function (id, refresh) {
                    if (refresh === void 0) { refresh = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/LessonNotes/:id/author";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (refresh !== undefined) {
                        params.refresh = refresh;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Create a new instance of the model and persist it into the data source.
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LessonNote` object.)
                 * </em>
                 */
                LessonNoteApi.prototype.create = function (data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/LessonNotes";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Create a new instance of the model and persist it into the data source.
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LessonNote` object.)
                 * </em>
                 */
                LessonNoteApi.prototype.createMany = function (data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/LessonNotes";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Update an existing model instance or insert a new one into the data source.
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LessonNote` object.)
                 * </em>
                 */
                LessonNoteApi.prototype.upsert = function (data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/LessonNotes";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Check whether a model instance exists in the data source.
                 *
                 * @param any id Model id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `exists` – `{boolean}` -
                 */
                LessonNoteApi.prototype.exists = function (id) {
                    var method = "GET";
                    var url = this.getPath() + "/LessonNotes/:id/exists";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find a model instance by id from the data source.
                 *
                 * @param any id Model id
                 *
                 * @param object filter Filter defining fields and include
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LessonNote` object.)
                 * </em>
                 */
                LessonNoteApi.prototype.findById = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/LessonNotes/:id";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find all instances of the model matched by filter from the data source.
                 *
                 * @param object filter Filter defining fields, where, include, order, offset, and limit
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LessonNote` object.)
                 * </em>
                 */
                LessonNoteApi.prototype.find = function (filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/LessonNotes";
                    var urlParams = {};
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find first instance of the model matched by filter from the data source.
                 *
                 * @param object filter Filter defining fields, where, include, order, offset, and limit
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LessonNote` object.)
                 * </em>
                 */
                LessonNoteApi.prototype.findOne = function (filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/LessonNotes/findOne";
                    var urlParams = {};
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update instances of the model matched by where from the data source.
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * The number of instances updated
                 */
                LessonNoteApi.prototype.updateAll = function (where, data) {
                    if (where === void 0) { where = undefined; }
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/LessonNotes/update";
                    var urlParams = {};
                    var params = {};
                    if (where !== undefined) {
                        params.where = where;
                    }
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Delete a model instance by id from the data source.
                 *
                 * @param any id Model id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LessonNote` object.)
                 * </em>
                 */
                LessonNoteApi.prototype.deleteById = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/LessonNotes/:id";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Count instances of the model matched by where from the data source.
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                LessonNoteApi.prototype.count = function (where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/LessonNotes/count";
                    var urlParams = {};
                    var params = {};
                    if (where !== undefined) {
                        params.where = where;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update attributes for a model instance and persist it into the data source.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LessonNote` object.)
                 * </em>
                 */
                LessonNoteApi.prototype.updateAttributes = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/LessonNotes/:id";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Create a change stream.
                 *
                 * @param object data Request data.
                 *
                 *  - `options` – `{object}` -
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `changes` – `{ReadableStream}` -
                 */
                LessonNoteApi.prototype.createChangeStream = function (options) {
                    if (options === void 0) { options = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/LessonNotes/change-stream";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params, options);
                    return result;
                };
                /**
                 * Find a related item by id for lessonNotes.
                 *
                 * @param any id User id
                 *
                 * @param any fk Foreign key for lessonNotes
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LessonNote` object.)
                 * </em>
                 */
                LessonNoteApi.prototype.__findById__Teacher__lessonNotes = function (id, fk) {
                    var method = "GET";
                    var url = this.getPath() + "/Teachers/:id/lessonNotes/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Delete a related item by id for lessonNotes.
                 *
                 * @param any id User id
                 *
                 * @param any fk Foreign key for lessonNotes
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                LessonNoteApi.prototype.__destroyById__Teacher__lessonNotes = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Teachers/:id/lessonNotes/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update a related item by id for lessonNotes.
                 *
                 * @param any id User id
                 *
                 * @param any fk Foreign key for lessonNotes
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LessonNote` object.)
                 * </em>
                 */
                LessonNoteApi.prototype.__updateById__Teacher__lessonNotes = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Teachers/:id/lessonNotes/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Queries lessonNotes of Teacher.
                 *
                 * @param any id User id
                 *
                 * @param object filter
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LessonNote` object.)
                 * </em>
                 */
                LessonNoteApi.prototype.__get__Teacher__lessonNotes = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Teachers/:id/lessonNotes";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Creates a new instance in lessonNotes of this model.
                 *
                 * @param any id User id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LessonNote` object.)
                 * </em>
                 */
                LessonNoteApi.prototype.__create__Teacher__lessonNotes = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Teachers/:id/lessonNotes";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Creates a new instance in lessonNotes of this model.
                 *
                 * @param any id User id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LessonNote` object.)
                 * </em>
                 */
                LessonNoteApi.prototype.__createMany__Teacher__lessonNotes = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Teachers/:id/lessonNotes";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Deletes all lessonNotes of this model.
                 *
                 * @param any id User id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                LessonNoteApi.prototype.__delete__Teacher__lessonNotes = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Teachers/:id/lessonNotes";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Counts lessonNotes of Teacher.
                 *
                 * @param any id User id
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                LessonNoteApi.prototype.__count__Teacher__lessonNotes = function (id, where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Teachers/:id/lessonNotes/count";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find a related item by id for lessonNotes.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for lessonNotes
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LessonNote` object.)
                 * </em>
                 */
                LessonNoteApi.prototype.__findById__Lesson__lessonNotes = function (id, fk) {
                    var method = "GET";
                    var url = this.getPath() + "/Lessons/:id/lessonNotes/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Delete a related item by id for lessonNotes.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for lessonNotes
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                LessonNoteApi.prototype.__destroyById__Lesson__lessonNotes = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Lessons/:id/lessonNotes/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update a related item by id for lessonNotes.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for lessonNotes
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LessonNote` object.)
                 * </em>
                 */
                LessonNoteApi.prototype.__updateById__Lesson__lessonNotes = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Lessons/:id/lessonNotes/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Queries lessonNotes of Lesson.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object filter
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LessonNote` object.)
                 * </em>
                 */
                LessonNoteApi.prototype.__get__Lesson__lessonNotes = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Lessons/:id/lessonNotes";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Creates a new instance in lessonNotes of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LessonNote` object.)
                 * </em>
                 */
                LessonNoteApi.prototype.__create__Lesson__lessonNotes = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Lessons/:id/lessonNotes";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Creates a new instance in lessonNotes of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LessonNote` object.)
                 * </em>
                 */
                LessonNoteApi.prototype.__createMany__Lesson__lessonNotes = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Lessons/:id/lessonNotes";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Deletes all lessonNotes of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                LessonNoteApi.prototype.__delete__Lesson__lessonNotes = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Lessons/:id/lessonNotes";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Counts lessonNotes of Lesson.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                LessonNoteApi.prototype.__count__Lesson__lessonNotes = function (id, where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Lessons/:id/lessonNotes/count";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * The name of the model represented by this $resource,
                 * i.e. `LessonNote`.
                 */
                LessonNoteApi.prototype.getModelName = function () {
                    return "LessonNote";
                };
                LessonNoteApi = __decorate([
                    core_1.Injectable(),
                    __param(0, core_1.Inject(http_1.Http)),
                    __param(1, core_1.Optional()),
                    __param(1, core_1.Inject(ErrorHandler)), 
                    __metadata('design:paramtypes', [http_1.Http, ErrorHandler])
                ], LessonNoteApi);
                return LessonNoteApi;
            }(BaseLoopBackApi));
            exports_1("LessonNoteApi", LessonNoteApi);
            /**
             * Api for the `LearningSession` model.
             */
            LearningSessionApi = (function (_super) {
                __extends(LearningSessionApi, _super);
                function LearningSessionApi(http, errorHandler) {
                    _super.call(this, http, errorHandler);
                }
                /**
                 * Find a related item by id for teachers.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for teachers
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LearningSession` object.)
                 * </em>
                 */
                LearningSessionApi.prototype.__findById__teachers = function (id, fk) {
                    var method = "GET";
                    var url = this.getPath() + "/LearningSessions/:id/teachers/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Delete a related item by id for teachers.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for teachers
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                LearningSessionApi.prototype.__destroyById__teachers = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/LearningSessions/:id/teachers/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update a related item by id for teachers.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for teachers
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LearningSession` object.)
                 * </em>
                 */
                LearningSessionApi.prototype.__updateById__teachers = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/LearningSessions/:id/teachers/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Add a related item by id for teachers.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for teachers
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LearningSession` object.)
                 * </em>
                 */
                LearningSessionApi.prototype.__link__teachers = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/LearningSessions/:id/teachers/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Remove the teachers relation to an item by id.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for teachers
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                LearningSessionApi.prototype.__unlink__teachers = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/LearningSessions/:id/teachers/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Check the existence of teachers relation to an item by id.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for teachers
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LearningSession` object.)
                 * </em>
                 */
                LearningSessionApi.prototype.__exists__teachers = function (id, fk) {
                    var method = "HEAD";
                    var url = this.getPath() + "/LearningSessions/:id/teachers/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find a related item by id for studentGroups.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for studentGroups
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LearningSession` object.)
                 * </em>
                 */
                LearningSessionApi.prototype.__findById__studentGroups = function (id, fk) {
                    var method = "GET";
                    var url = this.getPath() + "/LearningSessions/:id/studentGroups/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Delete a related item by id for studentGroups.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for studentGroups
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                LearningSessionApi.prototype.__destroyById__studentGroups = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/LearningSessions/:id/studentGroups/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update a related item by id for studentGroups.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for studentGroups
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LearningSession` object.)
                 * </em>
                 */
                LearningSessionApi.prototype.__updateById__studentGroups = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/LearningSessions/:id/studentGroups/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Add a related item by id for studentGroups.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for studentGroups
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LearningSession` object.)
                 * </em>
                 */
                LearningSessionApi.prototype.__link__studentGroups = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/LearningSessions/:id/studentGroups/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Remove the studentGroups relation to an item by id.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for studentGroups
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                LearningSessionApi.prototype.__unlink__studentGroups = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/LearningSessions/:id/studentGroups/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Check the existence of studentGroups relation to an item by id.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for studentGroups
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LearningSession` object.)
                 * </em>
                 */
                LearningSessionApi.prototype.__exists__studentGroups = function (id, fk) {
                    var method = "HEAD";
                    var url = this.getPath() + "/LearningSessions/:id/studentGroups/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Fetches belongsTo relation lesson.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param boolean refresh
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LearningSession` object.)
                 * </em>
                 */
                LearningSessionApi.prototype.__get__lesson = function (id, refresh) {
                    if (refresh === void 0) { refresh = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/LearningSessions/:id/lesson";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (refresh !== undefined) {
                        params.refresh = refresh;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Queries teachers of LearningSession.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object filter
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LearningSession` object.)
                 * </em>
                 */
                LearningSessionApi.prototype.__get__teachers = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/LearningSessions/:id/teachers";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Creates a new instance in teachers of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LearningSession` object.)
                 * </em>
                 */
                LearningSessionApi.prototype.__create__teachers = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/LearningSessions/:id/teachers";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Deletes all teachers of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                LearningSessionApi.prototype.__delete__teachers = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/LearningSessions/:id/teachers";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Counts teachers of LearningSession.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                LearningSessionApi.prototype.__count__teachers = function (id, where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/LearningSessions/:id/teachers/count";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Queries studentGroups of LearningSession.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object filter
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LearningSession` object.)
                 * </em>
                 */
                LearningSessionApi.prototype.__get__studentGroups = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/LearningSessions/:id/studentGroups";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Creates a new instance in studentGroups of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LearningSession` object.)
                 * </em>
                 */
                LearningSessionApi.prototype.__create__studentGroups = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/LearningSessions/:id/studentGroups";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Deletes all studentGroups of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                LearningSessionApi.prototype.__delete__studentGroups = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/LearningSessions/:id/studentGroups";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Counts studentGroups of LearningSession.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                LearningSessionApi.prototype.__count__studentGroups = function (id, where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/LearningSessions/:id/studentGroups/count";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Create a new instance of the model and persist it into the data source.
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LearningSession` object.)
                 * </em>
                 */
                LearningSessionApi.prototype.create = function (data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/LearningSessions";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Create a new instance of the model and persist it into the data source.
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LearningSession` object.)
                 * </em>
                 */
                LearningSessionApi.prototype.createMany = function (data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/LearningSessions";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Update an existing model instance or insert a new one into the data source.
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LearningSession` object.)
                 * </em>
                 */
                LearningSessionApi.prototype.upsert = function (data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/LearningSessions";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Check whether a model instance exists in the data source.
                 *
                 * @param any id Model id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `exists` – `{boolean}` -
                 */
                LearningSessionApi.prototype.exists = function (id) {
                    var method = "GET";
                    var url = this.getPath() + "/LearningSessions/:id/exists";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find a model instance by id from the data source.
                 *
                 * @param any id Model id
                 *
                 * @param object filter Filter defining fields and include
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LearningSession` object.)
                 * </em>
                 */
                LearningSessionApi.prototype.findById = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/LearningSessions/:id";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find all instances of the model matched by filter from the data source.
                 *
                 * @param object filter Filter defining fields, where, include, order, offset, and limit
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LearningSession` object.)
                 * </em>
                 */
                LearningSessionApi.prototype.find = function (filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/LearningSessions";
                    var urlParams = {};
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find first instance of the model matched by filter from the data source.
                 *
                 * @param object filter Filter defining fields, where, include, order, offset, and limit
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LearningSession` object.)
                 * </em>
                 */
                LearningSessionApi.prototype.findOne = function (filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/LearningSessions/findOne";
                    var urlParams = {};
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update instances of the model matched by where from the data source.
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * The number of instances updated
                 */
                LearningSessionApi.prototype.updateAll = function (where, data) {
                    if (where === void 0) { where = undefined; }
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/LearningSessions/update";
                    var urlParams = {};
                    var params = {};
                    if (where !== undefined) {
                        params.where = where;
                    }
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Delete a model instance by id from the data source.
                 *
                 * @param any id Model id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LearningSession` object.)
                 * </em>
                 */
                LearningSessionApi.prototype.deleteById = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/LearningSessions/:id";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Count instances of the model matched by where from the data source.
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                LearningSessionApi.prototype.count = function (where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/LearningSessions/count";
                    var urlParams = {};
                    var params = {};
                    if (where !== undefined) {
                        params.where = where;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update attributes for a model instance and persist it into the data source.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LearningSession` object.)
                 * </em>
                 */
                LearningSessionApi.prototype.updateAttributes = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/LearningSessions/:id";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Create a change stream.
                 *
                 * @param object data Request data.
                 *
                 *  - `options` – `{object}` -
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `changes` – `{ReadableStream}` -
                 */
                LearningSessionApi.prototype.createChangeStream = function (options) {
                    if (options === void 0) { options = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/LearningSessions/change-stream";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params, options);
                    return result;
                };
                /**
                 * Find a related item by id for learningSessions.
                 *
                 * @param any id User id
                 *
                 * @param any fk Foreign key for learningSessions
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LearningSession` object.)
                 * </em>
                 */
                LearningSessionApi.prototype.__findById__Teacher__learningSessions = function (id, fk) {
                    var method = "GET";
                    var url = this.getPath() + "/Teachers/:id/learningSessions/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Delete a related item by id for learningSessions.
                 *
                 * @param any id User id
                 *
                 * @param any fk Foreign key for learningSessions
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                LearningSessionApi.prototype.__destroyById__Teacher__learningSessions = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Teachers/:id/learningSessions/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update a related item by id for learningSessions.
                 *
                 * @param any id User id
                 *
                 * @param any fk Foreign key for learningSessions
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LearningSession` object.)
                 * </em>
                 */
                LearningSessionApi.prototype.__updateById__Teacher__learningSessions = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Teachers/:id/learningSessions/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Add a related item by id for learningSessions.
                 *
                 * @param any id User id
                 *
                 * @param any fk Foreign key for learningSessions
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LearningSession` object.)
                 * </em>
                 */
                LearningSessionApi.prototype.__link__Teacher__learningSessions = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Teachers/:id/learningSessions/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Remove the learningSessions relation to an item by id.
                 *
                 * @param any id User id
                 *
                 * @param any fk Foreign key for learningSessions
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                LearningSessionApi.prototype.__unlink__Teacher__learningSessions = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Teachers/:id/learningSessions/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Check the existence of learningSessions relation to an item by id.
                 *
                 * @param any id User id
                 *
                 * @param any fk Foreign key for learningSessions
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LearningSession` object.)
                 * </em>
                 */
                LearningSessionApi.prototype.__exists__Teacher__learningSessions = function (id, fk) {
                    var method = "HEAD";
                    var url = this.getPath() + "/Teachers/:id/learningSessions/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Queries learningSessions of Teacher.
                 *
                 * @param any id User id
                 *
                 * @param object filter
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LearningSession` object.)
                 * </em>
                 */
                LearningSessionApi.prototype.__get__Teacher__learningSessions = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Teachers/:id/learningSessions";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Creates a new instance in learningSessions of this model.
                 *
                 * @param any id User id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LearningSession` object.)
                 * </em>
                 */
                LearningSessionApi.prototype.__create__Teacher__learningSessions = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Teachers/:id/learningSessions";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Creates a new instance in learningSessions of this model.
                 *
                 * @param any id User id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LearningSession` object.)
                 * </em>
                 */
                LearningSessionApi.prototype.__createMany__Teacher__learningSessions = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Teachers/:id/learningSessions";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Deletes all learningSessions of this model.
                 *
                 * @param any id User id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                LearningSessionApi.prototype.__delete__Teacher__learningSessions = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Teachers/:id/learningSessions";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Counts learningSessions of Teacher.
                 *
                 * @param any id User id
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                LearningSessionApi.prototype.__count__Teacher__learningSessions = function (id, where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Teachers/:id/learningSessions/count";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find a related item by id for learningSessions.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for learningSessions
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LearningSession` object.)
                 * </em>
                 */
                LearningSessionApi.prototype.__findById__StudentGroup__learningSessions = function (id, fk) {
                    var method = "GET";
                    var url = this.getPath() + "/StudentGroups/:id/learningSessions/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Delete a related item by id for learningSessions.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for learningSessions
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                LearningSessionApi.prototype.__destroyById__StudentGroup__learningSessions = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/StudentGroups/:id/learningSessions/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update a related item by id for learningSessions.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for learningSessions
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LearningSession` object.)
                 * </em>
                 */
                LearningSessionApi.prototype.__updateById__StudentGroup__learningSessions = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/StudentGroups/:id/learningSessions/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Add a related item by id for learningSessions.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for learningSessions
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LearningSession` object.)
                 * </em>
                 */
                LearningSessionApi.prototype.__link__StudentGroup__learningSessions = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/StudentGroups/:id/learningSessions/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Remove the learningSessions relation to an item by id.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for learningSessions
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                LearningSessionApi.prototype.__unlink__StudentGroup__learningSessions = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/StudentGroups/:id/learningSessions/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Check the existence of learningSessions relation to an item by id.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for learningSessions
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LearningSession` object.)
                 * </em>
                 */
                LearningSessionApi.prototype.__exists__StudentGroup__learningSessions = function (id, fk) {
                    var method = "HEAD";
                    var url = this.getPath() + "/StudentGroups/:id/learningSessions/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Queries learningSessions of StudentGroup.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object filter
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LearningSession` object.)
                 * </em>
                 */
                LearningSessionApi.prototype.__get__StudentGroup__learningSessions = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/StudentGroups/:id/learningSessions";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Creates a new instance in learningSessions of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LearningSession` object.)
                 * </em>
                 */
                LearningSessionApi.prototype.__create__StudentGroup__learningSessions = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/StudentGroups/:id/learningSessions";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Creates a new instance in learningSessions of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LearningSession` object.)
                 * </em>
                 */
                LearningSessionApi.prototype.__createMany__StudentGroup__learningSessions = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/StudentGroups/:id/learningSessions";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Deletes all learningSessions of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                LearningSessionApi.prototype.__delete__StudentGroup__learningSessions = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/StudentGroups/:id/learningSessions";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Counts learningSessions of StudentGroup.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                LearningSessionApi.prototype.__count__StudentGroup__learningSessions = function (id, where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/StudentGroups/:id/learningSessions/count";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find a related item by id for learningSessions.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for learningSessions
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LearningSession` object.)
                 * </em>
                 */
                LearningSessionApi.prototype.__findById__Lesson__learningSessions = function (id, fk) {
                    var method = "GET";
                    var url = this.getPath() + "/Lessons/:id/learningSessions/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Delete a related item by id for learningSessions.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for learningSessions
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                LearningSessionApi.prototype.__destroyById__Lesson__learningSessions = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Lessons/:id/learningSessions/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update a related item by id for learningSessions.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for learningSessions
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LearningSession` object.)
                 * </em>
                 */
                LearningSessionApi.prototype.__updateById__Lesson__learningSessions = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Lessons/:id/learningSessions/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Queries learningSessions of Lesson.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object filter
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LearningSession` object.)
                 * </em>
                 */
                LearningSessionApi.prototype.__get__Lesson__learningSessions = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Lessons/:id/learningSessions";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Creates a new instance in learningSessions of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LearningSession` object.)
                 * </em>
                 */
                LearningSessionApi.prototype.__create__Lesson__learningSessions = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Lessons/:id/learningSessions";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Creates a new instance in learningSessions of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `LearningSession` object.)
                 * </em>
                 */
                LearningSessionApi.prototype.__createMany__Lesson__learningSessions = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Lessons/:id/learningSessions";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Deletes all learningSessions of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                LearningSessionApi.prototype.__delete__Lesson__learningSessions = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Lessons/:id/learningSessions";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Counts learningSessions of Lesson.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                LearningSessionApi.prototype.__count__Lesson__learningSessions = function (id, where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Lessons/:id/learningSessions/count";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * The name of the model represented by this $resource,
                 * i.e. `LearningSession`.
                 */
                LearningSessionApi.prototype.getModelName = function () {
                    return "LearningSession";
                };
                LearningSessionApi = __decorate([
                    core_1.Injectable(),
                    __param(0, core_1.Inject(http_1.Http)),
                    __param(1, core_1.Optional()),
                    __param(1, core_1.Inject(ErrorHandler)), 
                    __metadata('design:paramtypes', [http_1.Http, ErrorHandler])
                ], LearningSessionApi);
                return LearningSessionApi;
            }(BaseLoopBackApi));
            exports_1("LearningSessionApi", LearningSessionApi);
            /**
             * Api for the `Seating` model.
             */
            SeatingApi = (function (_super) {
                __extends(SeatingApi, _super);
                function SeatingApi(http, errorHandler) {
                    _super.call(this, http, errorHandler);
                }
                /**
                 * Fetches belongsTo relation class.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param boolean refresh
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Seating` object.)
                 * </em>
                 */
                SeatingApi.prototype.__get__class = function (id, refresh) {
                    if (refresh === void 0) { refresh = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Seatings/:id/class";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (refresh !== undefined) {
                        params.refresh = refresh;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Fetches belongsTo relation student.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param boolean refresh
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Seating` object.)
                 * </em>
                 */
                SeatingApi.prototype.__get__student = function (id, refresh) {
                    if (refresh === void 0) { refresh = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Seatings/:id/student";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (refresh !== undefined) {
                        params.refresh = refresh;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Create a new instance of the model and persist it into the data source.
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Seating` object.)
                 * </em>
                 */
                SeatingApi.prototype.create = function (data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Seatings";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Create a new instance of the model and persist it into the data source.
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Seating` object.)
                 * </em>
                 */
                SeatingApi.prototype.createMany = function (data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Seatings";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Update an existing model instance or insert a new one into the data source.
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Seating` object.)
                 * </em>
                 */
                SeatingApi.prototype.upsert = function (data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Seatings";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Check whether a model instance exists in the data source.
                 *
                 * @param any id Model id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `exists` – `{boolean}` -
                 */
                SeatingApi.prototype.exists = function (id) {
                    var method = "GET";
                    var url = this.getPath() + "/Seatings/:id/exists";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find a model instance by id from the data source.
                 *
                 * @param any id Model id
                 *
                 * @param object filter Filter defining fields and include
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Seating` object.)
                 * </em>
                 */
                SeatingApi.prototype.findById = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Seatings/:id";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find all instances of the model matched by filter from the data source.
                 *
                 * @param object filter Filter defining fields, where, include, order, offset, and limit
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Seating` object.)
                 * </em>
                 */
                SeatingApi.prototype.find = function (filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Seatings";
                    var urlParams = {};
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find first instance of the model matched by filter from the data source.
                 *
                 * @param object filter Filter defining fields, where, include, order, offset, and limit
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Seating` object.)
                 * </em>
                 */
                SeatingApi.prototype.findOne = function (filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Seatings/findOne";
                    var urlParams = {};
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update instances of the model matched by where from the data source.
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * The number of instances updated
                 */
                SeatingApi.prototype.updateAll = function (where, data) {
                    if (where === void 0) { where = undefined; }
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Seatings/update";
                    var urlParams = {};
                    var params = {};
                    if (where !== undefined) {
                        params.where = where;
                    }
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Delete a model instance by id from the data source.
                 *
                 * @param any id Model id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Seating` object.)
                 * </em>
                 */
                SeatingApi.prototype.deleteById = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Seatings/:id";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Count instances of the model matched by where from the data source.
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                SeatingApi.prototype.count = function (where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Seatings/count";
                    var urlParams = {};
                    var params = {};
                    if (where !== undefined) {
                        params.where = where;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update attributes for a model instance and persist it into the data source.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Seating` object.)
                 * </em>
                 */
                SeatingApi.prototype.updateAttributes = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Seatings/:id";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Create a change stream.
                 *
                 * @param object data Request data.
                 *
                 *  - `options` – `{object}` -
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `changes` – `{ReadableStream}` -
                 */
                SeatingApi.prototype.createChangeStream = function (options) {
                    if (options === void 0) { options = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Seatings/change-stream";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params, options);
                    return result;
                };
                /**
                 * The name of the model represented by this $resource,
                 * i.e. `Seating`.
                 */
                SeatingApi.prototype.getModelName = function () {
                    return "Seating";
                };
                SeatingApi = __decorate([
                    core_1.Injectable(),
                    __param(0, core_1.Inject(http_1.Http)),
                    __param(1, core_1.Optional()),
                    __param(1, core_1.Inject(ErrorHandler)), 
                    __metadata('design:paramtypes', [http_1.Http, ErrorHandler])
                ], SeatingApi);
                return SeatingApi;
            }(BaseLoopBackApi));
            exports_1("SeatingApi", SeatingApi);
            /**
             * Api for the `WeeklySchedule` model.
             */
            WeeklyScheduleApi = (function (_super) {
                __extends(WeeklyScheduleApi, _super);
                function WeeklyScheduleApi(http, errorHandler) {
                    _super.call(this, http, errorHandler);
                }
                /**
                 * Fetches belongsTo relation term.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param boolean refresh
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `WeeklySchedule` object.)
                 * </em>
                 */
                WeeklyScheduleApi.prototype.__get__term = function (id, refresh) {
                    if (refresh === void 0) { refresh = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/WeeklySchedules/:id/term";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (refresh !== undefined) {
                        params.refresh = refresh;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Fetches belongsTo relation teacher.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param boolean refresh
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `WeeklySchedule` object.)
                 * </em>
                 */
                WeeklyScheduleApi.prototype.__get__teacher = function (id, refresh) {
                    if (refresh === void 0) { refresh = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/WeeklySchedules/:id/teacher";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (refresh !== undefined) {
                        params.refresh = refresh;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find a related item by id for scheduleItems.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for scheduleItems
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `WeeklySchedule` object.)
                 * </em>
                 */
                WeeklyScheduleApi.prototype.__findById__scheduleItems = function (id, fk) {
                    var method = "GET";
                    var url = this.getPath() + "/WeeklySchedules/:id/scheduleItems/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Delete a related item by id for scheduleItems.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for scheduleItems
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                WeeklyScheduleApi.prototype.__destroyById__scheduleItems = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/WeeklySchedules/:id/scheduleItems/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update a related item by id for scheduleItems.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for scheduleItems
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `WeeklySchedule` object.)
                 * </em>
                 */
                WeeklyScheduleApi.prototype.__updateById__scheduleItems = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/WeeklySchedules/:id/scheduleItems/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Queries scheduleItems of WeeklySchedule.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object filter
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `WeeklySchedule` object.)
                 * </em>
                 */
                WeeklyScheduleApi.prototype.__get__scheduleItems = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/WeeklySchedules/:id/scheduleItems";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Creates a new instance in scheduleItems of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `WeeklySchedule` object.)
                 * </em>
                 */
                WeeklyScheduleApi.prototype.__create__scheduleItems = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/WeeklySchedules/:id/scheduleItems";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Deletes all scheduleItems of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                WeeklyScheduleApi.prototype.__delete__scheduleItems = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/WeeklySchedules/:id/scheduleItems";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Counts scheduleItems of WeeklySchedule.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                WeeklyScheduleApi.prototype.__count__scheduleItems = function (id, where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/WeeklySchedules/:id/scheduleItems/count";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Create a new instance of the model and persist it into the data source.
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `WeeklySchedule` object.)
                 * </em>
                 */
                WeeklyScheduleApi.prototype.create = function (data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/WeeklySchedules";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Create a new instance of the model and persist it into the data source.
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `WeeklySchedule` object.)
                 * </em>
                 */
                WeeklyScheduleApi.prototype.createMany = function (data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/WeeklySchedules";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Update an existing model instance or insert a new one into the data source.
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `WeeklySchedule` object.)
                 * </em>
                 */
                WeeklyScheduleApi.prototype.upsert = function (data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/WeeklySchedules";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Check whether a model instance exists in the data source.
                 *
                 * @param any id Model id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `exists` – `{boolean}` -
                 */
                WeeklyScheduleApi.prototype.exists = function (id) {
                    var method = "GET";
                    var url = this.getPath() + "/WeeklySchedules/:id/exists";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find a model instance by id from the data source.
                 *
                 * @param any id Model id
                 *
                 * @param object filter Filter defining fields and include
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `WeeklySchedule` object.)
                 * </em>
                 */
                WeeklyScheduleApi.prototype.findById = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/WeeklySchedules/:id";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find all instances of the model matched by filter from the data source.
                 *
                 * @param object filter Filter defining fields, where, include, order, offset, and limit
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `WeeklySchedule` object.)
                 * </em>
                 */
                WeeklyScheduleApi.prototype.find = function (filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/WeeklySchedules";
                    var urlParams = {};
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find first instance of the model matched by filter from the data source.
                 *
                 * @param object filter Filter defining fields, where, include, order, offset, and limit
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `WeeklySchedule` object.)
                 * </em>
                 */
                WeeklyScheduleApi.prototype.findOne = function (filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/WeeklySchedules/findOne";
                    var urlParams = {};
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update instances of the model matched by where from the data source.
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * The number of instances updated
                 */
                WeeklyScheduleApi.prototype.updateAll = function (where, data) {
                    if (where === void 0) { where = undefined; }
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/WeeklySchedules/update";
                    var urlParams = {};
                    var params = {};
                    if (where !== undefined) {
                        params.where = where;
                    }
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Delete a model instance by id from the data source.
                 *
                 * @param any id Model id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `WeeklySchedule` object.)
                 * </em>
                 */
                WeeklyScheduleApi.prototype.deleteById = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/WeeklySchedules/:id";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Count instances of the model matched by where from the data source.
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                WeeklyScheduleApi.prototype.count = function (where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/WeeklySchedules/count";
                    var urlParams = {};
                    var params = {};
                    if (where !== undefined) {
                        params.where = where;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update attributes for a model instance and persist it into the data source.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `WeeklySchedule` object.)
                 * </em>
                 */
                WeeklyScheduleApi.prototype.updateAttributes = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/WeeklySchedules/:id";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Create a change stream.
                 *
                 * @param object data Request data.
                 *
                 *  - `options` – `{object}` -
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `changes` – `{ReadableStream}` -
                 */
                WeeklyScheduleApi.prototype.createChangeStream = function (options) {
                    if (options === void 0) { options = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/WeeklySchedules/change-stream";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params, options);
                    return result;
                };
                /**
                 * Find a related item by id for weeklySchedules.
                 *
                 * @param any id User id
                 *
                 * @param any fk Foreign key for weeklySchedules
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `WeeklySchedule` object.)
                 * </em>
                 */
                WeeklyScheduleApi.prototype.__findById__Teacher__weeklySchedules = function (id, fk) {
                    var method = "GET";
                    var url = this.getPath() + "/Teachers/:id/weeklySchedules/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Delete a related item by id for weeklySchedules.
                 *
                 * @param any id User id
                 *
                 * @param any fk Foreign key for weeklySchedules
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                WeeklyScheduleApi.prototype.__destroyById__Teacher__weeklySchedules = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Teachers/:id/weeklySchedules/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update a related item by id for weeklySchedules.
                 *
                 * @param any id User id
                 *
                 * @param any fk Foreign key for weeklySchedules
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `WeeklySchedule` object.)
                 * </em>
                 */
                WeeklyScheduleApi.prototype.__updateById__Teacher__weeklySchedules = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Teachers/:id/weeklySchedules/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Queries weeklySchedules of Teacher.
                 *
                 * @param any id User id
                 *
                 * @param object filter
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `WeeklySchedule` object.)
                 * </em>
                 */
                WeeklyScheduleApi.prototype.__get__Teacher__weeklySchedules = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Teachers/:id/weeklySchedules";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Creates a new instance in weeklySchedules of this model.
                 *
                 * @param any id User id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `WeeklySchedule` object.)
                 * </em>
                 */
                WeeklyScheduleApi.prototype.__create__Teacher__weeklySchedules = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Teachers/:id/weeklySchedules";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Creates a new instance in weeklySchedules of this model.
                 *
                 * @param any id User id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `WeeklySchedule` object.)
                 * </em>
                 */
                WeeklyScheduleApi.prototype.__createMany__Teacher__weeklySchedules = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Teachers/:id/weeklySchedules";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Deletes all weeklySchedules of this model.
                 *
                 * @param any id User id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                WeeklyScheduleApi.prototype.__delete__Teacher__weeklySchedules = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Teachers/:id/weeklySchedules";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Counts weeklySchedules of Teacher.
                 *
                 * @param any id User id
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                WeeklyScheduleApi.prototype.__count__Teacher__weeklySchedules = function (id, where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Teachers/:id/weeklySchedules/count";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find a related item by id for weeklySchedules.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for weeklySchedules
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `WeeklySchedule` object.)
                 * </em>
                 */
                WeeklyScheduleApi.prototype.__findById__Term__weeklySchedules = function (id, fk) {
                    var method = "GET";
                    var url = this.getPath() + "/Terms/:id/weeklySchedules/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Delete a related item by id for weeklySchedules.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for weeklySchedules
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                WeeklyScheduleApi.prototype.__destroyById__Term__weeklySchedules = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Terms/:id/weeklySchedules/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update a related item by id for weeklySchedules.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for weeklySchedules
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `WeeklySchedule` object.)
                 * </em>
                 */
                WeeklyScheduleApi.prototype.__updateById__Term__weeklySchedules = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/Terms/:id/weeklySchedules/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Queries weeklySchedules of Term.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object filter
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `WeeklySchedule` object.)
                 * </em>
                 */
                WeeklyScheduleApi.prototype.__get__Term__weeklySchedules = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Terms/:id/weeklySchedules";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Creates a new instance in weeklySchedules of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `WeeklySchedule` object.)
                 * </em>
                 */
                WeeklyScheduleApi.prototype.__create__Term__weeklySchedules = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Terms/:id/weeklySchedules";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Creates a new instance in weeklySchedules of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `WeeklySchedule` object.)
                 * </em>
                 */
                WeeklyScheduleApi.prototype.__createMany__Term__weeklySchedules = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/Terms/:id/weeklySchedules";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Deletes all weeklySchedules of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                WeeklyScheduleApi.prototype.__delete__Term__weeklySchedules = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/Terms/:id/weeklySchedules";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Counts weeklySchedules of Term.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                WeeklyScheduleApi.prototype.__count__Term__weeklySchedules = function (id, where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/Terms/:id/weeklySchedules/count";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Fetches belongsTo relation weeklySchedule.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param boolean refresh
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `WeeklySchedule` object.)
                 * </em>
                 */
                WeeklyScheduleApi.prototype.__get__ScheduleItem__weeklySchedule = function (id, refresh) {
                    if (refresh === void 0) { refresh = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/ScheduleItems/:id/weeklySchedule";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (refresh !== undefined) {
                        params.refresh = refresh;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * The name of the model represented by this $resource,
                 * i.e. `WeeklySchedule`.
                 */
                WeeklyScheduleApi.prototype.getModelName = function () {
                    return "WeeklySchedule";
                };
                WeeklyScheduleApi = __decorate([
                    core_1.Injectable(),
                    __param(0, core_1.Inject(http_1.Http)),
                    __param(1, core_1.Optional()),
                    __param(1, core_1.Inject(ErrorHandler)), 
                    __metadata('design:paramtypes', [http_1.Http, ErrorHandler])
                ], WeeklyScheduleApi);
                return WeeklyScheduleApi;
            }(BaseLoopBackApi));
            exports_1("WeeklyScheduleApi", WeeklyScheduleApi);
            /**
             * Api for the `ScheduleItem` model.
             */
            ScheduleItemApi = (function (_super) {
                __extends(ScheduleItemApi, _super);
                function ScheduleItemApi(http, errorHandler) {
                    _super.call(this, http, errorHandler);
                }
                /**
                 * Fetches belongsTo relation weeklySchedule.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param boolean refresh
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `ScheduleItem` object.)
                 * </em>
                 */
                ScheduleItemApi.prototype.__get__weeklySchedule = function (id, refresh) {
                    if (refresh === void 0) { refresh = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/ScheduleItems/:id/weeklySchedule";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (refresh !== undefined) {
                        params.refresh = refresh;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find a related item by id for studentGroups.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for studentGroups
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `ScheduleItem` object.)
                 * </em>
                 */
                ScheduleItemApi.prototype.__findById__studentGroups = function (id, fk) {
                    var method = "GET";
                    var url = this.getPath() + "/ScheduleItems/:id/studentGroups/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Delete a related item by id for studentGroups.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for studentGroups
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                ScheduleItemApi.prototype.__destroyById__studentGroups = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/ScheduleItems/:id/studentGroups/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update a related item by id for studentGroups.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for studentGroups
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `ScheduleItem` object.)
                 * </em>
                 */
                ScheduleItemApi.prototype.__updateById__studentGroups = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/ScheduleItems/:id/studentGroups/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Add a related item by id for studentGroups.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for studentGroups
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `ScheduleItem` object.)
                 * </em>
                 */
                ScheduleItemApi.prototype.__link__studentGroups = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/ScheduleItems/:id/studentGroups/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Remove the studentGroups relation to an item by id.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for studentGroups
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                ScheduleItemApi.prototype.__unlink__studentGroups = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/ScheduleItems/:id/studentGroups/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Check the existence of studentGroups relation to an item by id.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for studentGroups
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `ScheduleItem` object.)
                 * </em>
                 */
                ScheduleItemApi.prototype.__exists__studentGroups = function (id, fk) {
                    var method = "HEAD";
                    var url = this.getPath() + "/ScheduleItems/:id/studentGroups/rel/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Queries studentGroups of ScheduleItem.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object filter
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `ScheduleItem` object.)
                 * </em>
                 */
                ScheduleItemApi.prototype.__get__studentGroups = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/ScheduleItems/:id/studentGroups";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Creates a new instance in studentGroups of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `ScheduleItem` object.)
                 * </em>
                 */
                ScheduleItemApi.prototype.__create__studentGroups = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/ScheduleItems/:id/studentGroups";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Deletes all studentGroups of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                ScheduleItemApi.prototype.__delete__studentGroups = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/ScheduleItems/:id/studentGroups";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Counts studentGroups of ScheduleItem.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                ScheduleItemApi.prototype.__count__studentGroups = function (id, where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/ScheduleItems/:id/studentGroups/count";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Create a new instance of the model and persist it into the data source.
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `ScheduleItem` object.)
                 * </em>
                 */
                ScheduleItemApi.prototype.create = function (data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/ScheduleItems";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Create a new instance of the model and persist it into the data source.
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `ScheduleItem` object.)
                 * </em>
                 */
                ScheduleItemApi.prototype.createMany = function (data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/ScheduleItems";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Update an existing model instance or insert a new one into the data source.
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `ScheduleItem` object.)
                 * </em>
                 */
                ScheduleItemApi.prototype.upsert = function (data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/ScheduleItems";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Check whether a model instance exists in the data source.
                 *
                 * @param any id Model id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `exists` – `{boolean}` -
                 */
                ScheduleItemApi.prototype.exists = function (id) {
                    var method = "GET";
                    var url = this.getPath() + "/ScheduleItems/:id/exists";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find a model instance by id from the data source.
                 *
                 * @param any id Model id
                 *
                 * @param object filter Filter defining fields and include
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `ScheduleItem` object.)
                 * </em>
                 */
                ScheduleItemApi.prototype.findById = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/ScheduleItems/:id";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find all instances of the model matched by filter from the data source.
                 *
                 * @param object filter Filter defining fields, where, include, order, offset, and limit
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `ScheduleItem` object.)
                 * </em>
                 */
                ScheduleItemApi.prototype.find = function (filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/ScheduleItems";
                    var urlParams = {};
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Find first instance of the model matched by filter from the data source.
                 *
                 * @param object filter Filter defining fields, where, include, order, offset, and limit
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `ScheduleItem` object.)
                 * </em>
                 */
                ScheduleItemApi.prototype.findOne = function (filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/ScheduleItems/findOne";
                    var urlParams = {};
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update instances of the model matched by where from the data source.
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * The number of instances updated
                 */
                ScheduleItemApi.prototype.updateAll = function (where, data) {
                    if (where === void 0) { where = undefined; }
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/ScheduleItems/update";
                    var urlParams = {};
                    var params = {};
                    if (where !== undefined) {
                        params.where = where;
                    }
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Delete a model instance by id from the data source.
                 *
                 * @param any id Model id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `ScheduleItem` object.)
                 * </em>
                 */
                ScheduleItemApi.prototype.deleteById = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/ScheduleItems/:id";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Count instances of the model matched by where from the data source.
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                ScheduleItemApi.prototype.count = function (where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/ScheduleItems/count";
                    var urlParams = {};
                    var params = {};
                    if (where !== undefined) {
                        params.where = where;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update attributes for a model instance and persist it into the data source.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `ScheduleItem` object.)
                 * </em>
                 */
                ScheduleItemApi.prototype.updateAttributes = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/ScheduleItems/:id";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Create a change stream.
                 *
                 * @param object data Request data.
                 *
                 *  - `options` – `{object}` -
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `changes` – `{ReadableStream}` -
                 */
                ScheduleItemApi.prototype.createChangeStream = function (options) {
                    if (options === void 0) { options = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/ScheduleItems/change-stream";
                    var urlParams = {};
                    var params = {};
                    var result = this.request(method, url, urlParams, params, options);
                    return result;
                };
                /**
                 * Find a related item by id for scheduleItems.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for scheduleItems
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `ScheduleItem` object.)
                 * </em>
                 */
                ScheduleItemApi.prototype.__findById__WeeklySchedule__scheduleItems = function (id, fk) {
                    var method = "GET";
                    var url = this.getPath() + "/WeeklySchedules/:id/scheduleItems/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Delete a related item by id for scheduleItems.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for scheduleItems
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                ScheduleItemApi.prototype.__destroyById__WeeklySchedule__scheduleItems = function (id, fk) {
                    var method = "DELETE";
                    var url = this.getPath() + "/WeeklySchedules/:id/scheduleItems/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Update a related item by id for scheduleItems.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param any fk Foreign key for scheduleItems
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `ScheduleItem` object.)
                 * </em>
                 */
                ScheduleItemApi.prototype.__updateById__WeeklySchedule__scheduleItems = function (id, fk, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "PUT";
                    var url = this.getPath() + "/WeeklySchedules/:id/scheduleItems/:fk";
                    var urlParams = {
                        id: id,
                        fk: fk
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Queries scheduleItems of WeeklySchedule.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object filter
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `ScheduleItem` object.)
                 * </em>
                 */
                ScheduleItemApi.prototype.__get__WeeklySchedule__scheduleItems = function (id, filter) {
                    if (filter === void 0) { filter = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/WeeklySchedules/:id/scheduleItems";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    if (filter !== undefined) {
                        params.filter = filter;
                    }
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Creates a new instance in scheduleItems of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `ScheduleItem` object.)
                 * </em>
                 */
                ScheduleItemApi.prototype.__create__WeeklySchedule__scheduleItems = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/WeeklySchedules/:id/scheduleItems";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Creates a new instance in scheduleItems of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object data Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @returns object[] An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `ScheduleItem` object.)
                 * </em>
                 */
                ScheduleItemApi.prototype.__createMany__WeeklySchedule__scheduleItems = function (id, data) {
                    if (data === void 0) { data = undefined; }
                    var method = "POST";
                    var url = this.getPath() + "/WeeklySchedules/:id/scheduleItems";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params, data);
                    return result;
                };
                /**
                 * Deletes all scheduleItems of this model.
                 *
                 * @param any id PersistedModel id
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                ScheduleItemApi.prototype.__delete__WeeklySchedule__scheduleItems = function (id) {
                    var method = "DELETE";
                    var url = this.getPath() + "/WeeklySchedules/:id/scheduleItems";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * Counts scheduleItems of WeeklySchedule.
                 *
                 * @param any id PersistedModel id
                 *
                 * @param object where Criteria to match model instances
                 *
                 * @returns object An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number}` -
                 */
                ScheduleItemApi.prototype.__count__WeeklySchedule__scheduleItems = function (id, where) {
                    if (where === void 0) { where = undefined; }
                    var method = "GET";
                    var url = this.getPath() + "/WeeklySchedules/:id/scheduleItems/count";
                    var urlParams = {
                        id: id
                    };
                    var params = {};
                    var result = this.request(method, url, urlParams, params);
                    return result;
                };
                /**
                 * The name of the model represented by this $resource,
                 * i.e. `ScheduleItem`.
                 */
                ScheduleItemApi.prototype.getModelName = function () {
                    return "ScheduleItem";
                };
                ScheduleItemApi = __decorate([
                    core_1.Injectable(),
                    __param(0, core_1.Inject(http_1.Http)),
                    __param(1, core_1.Optional()),
                    __param(1, core_1.Inject(ErrorHandler)), 
                    __metadata('design:paramtypes', [http_1.Http, ErrorHandler])
                ], ScheduleItemApi);
                return ScheduleItemApi;
            }(BaseLoopBackApi));
            exports_1("ScheduleItemApi", ScheduleItemApi);
        }
    }
});
//# sourceMappingURL=lb-services.js.map