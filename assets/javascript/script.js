$(document).ready(function () {

    var player1 = null;
    var player2 = null;

    var player1Name = "";
    var player2Name = "";

    var yourPlayerName = "";

    var player1Choice = "";
    var player2Choice = "";

    var turn = 1;


    var config = {
        apiKey: "AIzaSyBZAlDJcqEcqXSbWl0-yYv-8XxK7bx7rWo",
        authDomain: "rps-multiplayer-821e4.firebaseapp.com",
        databaseURL: "https://rps-multiplayer-821e4.firebaseio.com",
        projectId: "rps-multiplayer-821e4",
        storageBucket: "",
        messagingSenderId: "850824843965"
      };

      firebase.initializeApp(config);
      var database = firebase.database();


    $("#addName").on("click", function (event) {
        event.preventDefault();

        
        if (($("#name").val().trim() !== "") && !(player1 && player2)) {

            // Adding player1
            if (player1 === null) {
                console.log("Adding Player 1");

                yourPlayerName = $("#name").val().trim();
                player1 = {
                    name: yourPlayerName,
                    win: 0,
                    loss: 0,
                    tie: 0,
                    choice: ""
                };

                database.ref().child("/players/player1").set(player1);


                database.ref().child("/turn").set(1);

                database.ref("/players/player1").onDisconnect().remove();
            } else if ((player1 !== null) && (player2 === null)) {

                // Adding player2
                console.log("Adding Player 2");

                yourPlayerName = $("#name").val().trim();
                player2 = {
                    name: yourPlayerName,
                    win: 0,
                    loss: 0,
                    tie: 0,
                    choice: ""
                };

                database.ref().child("/players/player2").set(player2);


                database.ref("/players/player2").onDisconnect().remove();
            }

            // Alert player has entered game to chat
            var msg = yourPlayerName + " has joined!";
            console.log(msg);

            // // Get a key for the join chat entry
            // var chatKey = database.ref().child("/chat/").push().key;

            // // Save the join chat entry
            // database.ref("/chat/" + chatKey).set(msg);

            // Reset the name input box
            $("#name").val("");
        }
    });

    //Player 1's game play
    
})