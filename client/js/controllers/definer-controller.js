function definerController($scope) {

  $scope.defineWords = function () {
    var ajaxComplete = 0;
    var wordList = $scope.definitionWord.split("\n");
    $scope.definitionWord = "";

    for (i = 0; i < wordList.length; i++) {
      $.ajax({
        url: "http://api.wordnik.com:80/v4/word.json/" + wordList[i] + "/definitions?limit=1&includeRelated=true&sourceDictionaries=all&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5",
        dataType: 'jsonp',
        success: function(results) {
            ajaxComplete++;
            $scope.definitionWord += wordList[ajaxComplete - 1] + ": " + results[0].text + "\n";
            $scope.$apply();
        }
      });
    }
   }
}
