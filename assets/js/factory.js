app.factory("candidatefactory",function($q,$http){
    var object={
        
        getCandidateList:function(){
            // var pr=$q.defer();
            // $http.post("http://13.71.116.40:4040/getNaukariCandidate.php",
            // {"id":"M0ntN8WLBEXIgSKJXq1Mm5rbySu2"},{"":""})
            // .then(function(data){
                // pr.resolve(data);
            // },function(er){
                // pr.reject(er);
            // });
            var form = new FormData();
            form.append("id", "M0ntN8WLBEXIgSKJXq1Mm5rbySu2");
            
            var settings = {
              "async": true,
              "crossDomain": true,
              "url": "http://13.71.116.40:4040/getNaukariCandidate.php",
              "method": "POST",
              "processData": false,
              "contentType": false,
              "mimeType": "multipart/form-data",
              "data": form
            }
            
            // $.ajax(settings).done(function (response) {
            //   console.log(response);
            //   return response.promise;
            // });
            return $.ajax(settings);
        },
        updateCandidate:function(obj){
            var pr=$q.defer();
            console.log(obj);
            $http.post("http://13.71.116.40:4040/naukariEditCandidate.php",obj).then(function(data){
                pr.resolve(data);
            },function(er){
                pr.reject(er);
            });
            return pr.promise;
        }
    };
       console.log("server call");
       return object;
   });