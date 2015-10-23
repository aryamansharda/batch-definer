function definerController($scope) {
  $scope.meetupsCount =  10;

  $.ajax({
    url: "http://api.wordnik.com:80/v4/word.json/dog/definitions?limit=1&includeRelated=true&sourceDictionaries=all&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5",
    dataType: 'jsonp',
    success: function(results){
        console.log(results);
    }
  });

}
