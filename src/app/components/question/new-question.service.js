/**
 * @ngdoc service
 * @name question Service
 *
 * @description
 * This is the question service.
 *
 * @author <a href="https://github.com/FranckAJ">Franck Aragão</a>
 **/
angular.module("components").factory("questionService", function($http, aqtValue) {

    var _getSuggestions = function(question, callback) {
        return $http.post(aqtValue.api + "analyzerOnly", question).then(function(response) {
            callback(response.data);
        });

    };

    var _postQuestion = function(question, callback) {
        var config = {
            params: {
                title: question.title,
                body: question.description,
                tags: question.tags,
                site: aqtValue.so.site,
                key: aqtValue.so.key,
                preview: true,
                filter: 'default',
                run: true
            }
        }

        return $http.jsonp(aqtValue.so.api + 'questions/add', config).then(function(response) {
            callback(response.data);
        });

    };

    return {
        getSuggestions: _getSuggestions,
        postQuestion: _postQuestion
    }

});;
