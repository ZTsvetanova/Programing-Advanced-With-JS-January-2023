class FootballTeam {
  constructor(clubName, country) {
    this.clubName = clubName;
    this.country = country;
    this.invitedPlayers = [];
  }
  //функция, която приема футболисти в масив, само ако вече не са в него
  newAdditions(footballPlayers) {
    let uniqueNames = [];
    footballPlayers.forEach((line) => {
      let [name, age, playerValue] = line.split("/");
      playerValue = Number(playerValue);

      let cheked = this.invitedPlayers.find(
        (player) => player.name === name
      );

      if (cheked) {
        if (playerValue > cheked.playerValue) {
          cheked.playerValue = playerValue;
        }
      } else {
        uniqueNames.push(name);
        this.invitedPlayers.push({
          name,
          age,
          playerValue,
        });
      }
    });

    return `You successfully invite ${uniqueNames.join(", ")}.`;
  }
  //функция, която сравнява оферта за договор и подадено число и изменя структурата
  signContract(selectedPlayer) {
    let [name, offer] = selectedPlayer.split("/");
    offer = Number(offer);

    let cheked = this.invitedPlayers.find(
      (footballPlayers) => footballPlayers.name === name
    );

    if (!cheked) {
      throw new Error(`${name} is not invited to the selection list!`);
    }

    if (cheked.playerValue > offer) {
      let priceDifference = Number(cheked.playerValue) - Number(offer);
      throw new Error(
        `The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`
      );
    } else {
      cheked.playerValue = "Bought";
    }
    return `Congratulations! You sign a contract with ${name} for ${offer} million dollars.`;
  }
  //функция, която срявнява възрастта на играча с подадена възраст и решава какъв договор да подпиша
  ageLimit(name, age) {
    let cheked = this.invitedPlayers.find(
      (f) => f.name === name
    );

    if (!cheked) {
      throw new Error(`${name} is not invited to the selection list!`);
    }
    

    if (cheked.age < age) {
        let ageDifference = age - cheked.age;
      if (ageDifference < 5) {
        return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
      } else {
        return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
      }
    } else {
      return `${name} is above age limit!`;
    }
  }
  //функция за принтиране на масив
  transferWindowResult() {
    const playersList = this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name));
    let output = "Players list:\n";
    for (let i = 0; i < playersList.length; i++) {
      output += `Player ${playersList[i].name}-${playersList[i].playerValue}\n`;
    }
    return output.trim();
  }
}

let fTeam = new FootballTeam("Barcelona", "Spain");
console.log(
  fTeam.newAdditions([
    "Kylian Mbappé/23/160",
    "Lionel Messi/35/50",
    "Pau Torres/25/52",
  ])
);
//console.log(fTeam.signContract("Lionel Messi/40"));
//console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Lionel Messi", 20));
console.log(fTeam.transferWindowResult());
