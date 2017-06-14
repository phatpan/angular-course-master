
angular.module('myApp.constant', []).constant('host', 'http://localhost:4000');

angular.module('myApp', ['myApp.constant']);
angular.module('myApp').factory('Blog', function($http, $q, host) {

  var Blog = function(obj) {
    if (obj) angular.extend(this, obj);
  }

  Blog.prototype.save = function() {
    var deferred = $q.defer(),
        self = this;

    Blog.findById(self.id)
      .then(
       function() { return $http.put(host + '/blogs/' + self.id, self) },
       function() { return $http.post(host + '/blogs', self) }
     ).then(function(resp) {
       angular.extend(self, resp.data);
       deferred.resolve(self);
     }).catch(function() { deferred.reject() });

    return deferred;
  }

  Blog.prototype.refresh = function() {
    var deferred = $q.defer(),
        self = this;

    $http.get(host + '/blogs/' + self.id)
      .then(function(resp) {
        angular.extend(self, resp.data);
        deferred.resolve(self);
      }).catch(function() { deferred.reject() });

    return deferred;
  }

  Blog.findLatestPosts = function() {
    var deferred = $q.defer();
    $http.get(host + '/blogs').then(function(resp) {
      var posts = _.map(resp.data, function(post) { return new Blog(post) })
      deferred.resolve(posts);
    }).catch(function() { deferred.reject() });

    return deferred.promise;
  }

  Blog.findById = function(id) {
    var deferred = $q.defer();
    $http.get(host + '/blogs/' + id).then(function(resp) {
      deferred.resolve(new Blog(resp.data));
    }).catch(function() { deferred.reject() });

    return deferred.promise;
  }

  return Blog;
});

angular.module('myApp').controller('BlogListController', function(Blog, $scope) {

});
