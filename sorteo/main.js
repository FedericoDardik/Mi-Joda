document.getElementById("drawButton").addEventListener("click", function() {
    var participantsText = document.getElementById("participants").value;
    var participants;
  
    if (participantsText.includes(",")) {
      participants = participantsText.split(",");
    } else if (participantsText.includes("\n")){
      participants = participantsText.split("\n");
    } else {
      participants = participantsText.split(" ");
    }
  
    participants = participants.map(function(participant) {
      return participant.trim();
    }).filter(function(participant) {
      return participant !== "";
    });
  
    if (participants.length > 0) {
      var randomIndex = Math.floor(Math.random() * participants.length);
      var winner = participants[randomIndex];
      winner = winner.charAt(0).toUpperCase() + winner.slice(1); // Convertir primera letra en mayúscula
      document.getElementById("winner").textContent = "El ganador es: " + winner + "!";
    } else {
      document.getElementById("winner").textContent = "No hay participantes";
    }
  });