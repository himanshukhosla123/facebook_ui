$(document).ready(function(){

    var config = {
        apiKey: "AIzaSyD2OMabK-UdmrY5tExuWF8YNgeKnYddnZQ",
        authDomain: "hirecall-5bbea.firebaseapp.com",
        databaseURL: "https://hirecall-5bbea.firebaseio.com",
        projectId: "hirecall-5bbea",
        storageBucket: "hirecall-5bbea.appspot.com",
        messagingSenderId: "44473246990"
      };
      firebase.initializeApp(config);
    
    //   firebase.auth().createUserWithEmailAndPassword("himanshukhosla123@gmail.com","himanshucode").catch(function(e){
        //   alert(e.message);
    //   });

      $("#login").click(function(){
          var email=$("input[name=email]").val();
          var pass=$("input[name=password]").val();
          var auth=firebase.auth();
          var promise=auth.signInWithEmailAndPassword(email,pass);
          promise.catch(function(e){
              alert(e.users[0].email);
              location.href="/crud.html";
          });
      });

      


});