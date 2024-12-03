let CurrentFormat = 0;
let arrFormat_1_Positions = ['', 'GK', 'LB', 'CB', 'CB', 'RB', 'LM', 'CM', 'CM', 'RM', 'ST', 'ST'];
let arrFormat_2_Positions = ['', 'GK', 'LB', 'CB', 'CB', 'RB', 'CM', 'CM', 'CM', 'LW', 'RW', 'ST'];

const Formations =
  [
    {
      1: {
        top: "82%",
        left: "46%",
        IsOcupped: false,
      },
      2: {
        top: "45%",
        left: "-5%",
        IsOcupped: false,
      },
      3: {
        top: "50%",
        left: "10%",
        IsOcupped: false,

      },
      4: {
        top: "50%",
        left: "37%",
        IsOcupped: false,

      },
      5: {
        top: "45%",
        left: "52%",
        IsOcupped: false,

      },
      6: {
        top: "25%",
        left: "-35%",
        IsOcupped: false,

      },
      7: {
        top: "30%",
        left: "-20%",
        IsOcupped: false,

      },
      8: {
        top: "30%",
        left: "-5%",
        IsOcupped: false,

      },
      9: {
        top: "25%",
        left: "10%",
        IsOcupped: false,

      },
      10: {
        top: "5%",
        left: "-50%",
        IsOcupped: false,

      },
      11: {
        top: "5%",
        left: "-30%",
        IsOcupped: false,

      },

    },
    {
      1: {
        top: "82%",
        left: "46%",
        IsOcupped: false,

      },
      2: {
        top: "55%",
        left: "-5%",
        IsOcupped: false,
      },
      3: {
        top: "55%",
        left: "10%",
        IsOcupped: false,

      },
      4: {
        top: "55%",
        left: "37%",
        IsOcupped: false,

      },
      5: {
        top: "55%",
        left: "52%",
        IsOcupped: false,

      },
      6: {
        top: "35%",
        left: "-30%",
        IsOcupped: false,

      },
      7: {
        top: "30%",
        left: "-8%",
        IsOcupped: false,
      },
      8: {
        top: "35%",
        left: "14%",
        IsOcupped: false,
      },
      9: {
        top: "8%",
        left: "-45%",
        IsOcupped: false,
      },
      10: {
        top: "2%",
        left: "-35%",
        IsOcupped: false,
      },
      11: {
        top: "8%",
        left: "-24%",
        IsOcupped: false,
      },
    },
    // 4-3-3
    //       ST
    //    LW     RW
    //    CM  CM  CM
    // LB   CB    CB   RB
    //        GK


    //     

    // 4-4-2
    //     ST     ST
    // LM   CM    CM   RM
    // LB   CB    CB   RB
    //         GK

    // 

  ]



let arrFormat_Positions = {
  0: arrFormat_1_Positions,
  1: arrFormat_2_Positions,
}
// console.log(arrFormat_1_Positions);
// console.log(arrFormat_2_Positions);
// console.log(arrFormat_Positions[2][10])

function DistributePlayersOnStadium(CurrentFormat = 0) {

  let Players = document.querySelectorAll('.position');
  Players.forEach((Player, index) => {
    Player.style.top = Formations[CurrentFormat][index + 1].top;
    Player.style.left = Formations[CurrentFormat][index + 1].left;
  })
}

let FormatOption = document.querySelector('#format');
DistributePlayersOnStadium(0);
FormatOption.addEventListener('change', () => {
  CurrentFormat = (FormatOption.value === '4-4-2') ? 0 : 1;
  DistributePlayersOnStadium(CurrentFormat);
})

//func to clean input-feilds
function cleaninputs() {
  document.getElementById('p-name').value = '';
  document.getElementById('p-picture').value = '';
  document.getElementById('nationality').value = '';
  document.getElementById('flag').value = '';
  document.getElementById('club').value = '';
  document.getElementById('logo').value = '';

  document.querySelector("#select-player-position").value = 'Default';
  //player stats:

  document.getElementById('ratingp').value = '';
  document.getElementById('ratingg').value = '';

  document.getElementById('diving').value = '';
  document.getElementById('handling').value = '';
  document.getElementById('kicking').value = '';
  document.getElementById('reflexes').value = '';
  document.getElementById('speed').value = '';
  document.getElementById('positioning').value = '';


  document.getElementById('pace').value = '';
  document.getElementById('shooting').value = '';
  document.getElementById('passing').value = '';
  document.getElementById('dribbling').value = '';
  document.getElementById('defending').value = '';
  document.getElementById('physical').value = '';

  document.querySelector('#Player').style.display = 'none';
  document.querySelector('#GK').style.display = 'none';

  AddPlayerForm.style.display = "none"
}

//-add button-:

let btnAdd = document.querySelector('.btn-add');
let AddPlayerForm = document.querySelector('.add-form');


btnAdd.addEventListener('click', () => {
  (AddPlayerForm.style.display == "none") ? AddPlayerForm.style.display = "block" : AddPlayerForm.style.display = "none";

});

let SelectPlayerPosition = document.querySelector('#select-player-position');
SelectPlayerPosition.addEventListener('change', () => {
  if (SelectPlayerPosition.value == "GK") {
    document.querySelector('#GK').style.display = 'block';
    document.querySelector('#Player').style.display = 'none';
  } else if (SelectPlayerPosition.value == "Default") {
    document.querySelector('#Player').style.display = 'none';
    document.querySelector('#GK').style.display = 'none';
  } else {
    document.querySelector('#Player').style.display = 'block'
    document.querySelector('#GK').style.display = 'none';

  }
})

let replacement_cards = [];
let PlayersPositionsInStad = document.querySelectorAll('.position');

let SaveBtn = document.querySelector('.save-btn');
SaveBtn.addEventListener('click', () => {

  let PlayerName = document.getElementById('p-name').value;
  let PlayerPicture = document.getElementById('p-picture').value;
  let PlayerNationality = document.getElementById('nationality').value;
  let PlayerCountryFlag = document.getElementById('flag').value;
  let PlayerClub = document.getElementById('club').value;
  let PlayerClubLogo = document.getElementById('logo').value;

  let PlayerPosition = document.querySelector("#select-player-position").value;
  //player stats:

  let PlayerRatingp = document.getElementById('ratingp').value;
  let PlayerRatingg = document.getElementById('ratingg').value;

  let Player_stats_diving = document.getElementById('diving').value;
  let Player_stats_handling = document.getElementById('handling').value;
  let Player_stats_kicking = document.getElementById('kicking').value;
  let Player_stats_reflexes = document.getElementById('reflexes').value;
  let Player_stats_speed = document.getElementById('speed').value;
  let Player_stats_positioning = document.getElementById('positioning').value;


  let Player_stats_pace = document.getElementById('pace').value;
  let Player_stats_shooting = document.getElementById('shooting').value;
  let Player_stats_passing = document.getElementById('passing').value;
  let Player_stats_dribbling = document.getElementById('dribbling').value;
  let Player_stats_defending = document.getElementById('defending').value;
  let Player_stats_physical = document.getElementById('physical').value;

  // let PlayerCard=document.querySelector(".player-card");
  // (SelectPlayerPosition.value == "GK")? AllPlayers.push(PlayerInfo.GoolKipper): AllPlayers.push(PlayerInfo.player);
  // console.log(AllPlayers);
  // for(let i=0; i <AllPlayers.length;i++){
  // console.log (AllPlayers[i]);

  if (PlayerPosition === 'GK') {
    let NewCard = document.createElement('div');
    NewCard.classList.add('player-card')
    NewCard.innerHTML = `
              <div class="player-profile">
          <div class="rating">${PlayerRatingg}</div>
          <div style="width: 24px;height: 16px;border-radius: 6px;overflow: hidden; position:absolute;bottom: 0;right:0" class="flag"><img style="width: 100%; height: 100%;" src=${Player.PlayerCountryFlag}" alt=""></div>
          <div style="width: 16px;height: 16px; position:absolute;top:12px;left:0" class="club-logo"><img style="width: 100%; height: 100%;" src="${Player.PlayerClubLogo}" alt=""></div>
          <div class="profile-img-box">
            <img src="${PlayerPicture}" alt="${PlayerName}">
          </div>
        </div>
        <div class="player-info">
          <div class="player-name">${PlayerName}</div>
          <div class="player-stats">
            <div class="stat-val ">DIV ${Player_stats_diving}</div>
            <div class="stat-val ">HAN ${Player_stats_handling}</div>
            <div class="stat-val ">KIC ${Player_stats_kicking}</div>
            <div class="stat-val ">REF ${Player_stats_reflexes}</div>
            <div class="stat-val ">SPE ${Player_stats_speed}</div>
            <div class="stat-val ">POS ${Player_stats_positioning}</div>
          </div>
      `
    document.querySelector('.replacement-field').appendChild(NewCard);
    replacement_cards.push(NewCard);

    cleaninputs();

  }
  else if (PlayerPosition === 'Default') {
    alert()
  }
  else {
    let NewCard = document.createElement('div');
    NewCard.classList.add('player-card')
    NewCard.innerHTML = `
              <div class="player-profile">
          <div class="rating">${PlayerRatingp}</div>
          <div style="width: 24px;height: 16px;border-radius: 6px;overflow: hidden; position:absolute;bottom: 0;right:0" class="flag"><img style="width: 100%; height: 100%;" src=${Player.PlayerCountryFlag}" alt=""></div>
          <div style="width: 16px;height: 16px; position:absolute;top:12px;left:0" class="club-logo"><img style="width: 100%; height: 100%;" src="${Player.PlayerClubLogo}" alt=""></div>
          <div class="profile-img-box">
            <img src="${PlayerPicture}" alt="${PlayerName}">
          </div>
        </div>
        <div class="player-info">
          <div class="player-name">${PlayerName}</div>
          <div class="player-stats">
            <div class="stat-val ">PAC ${Player_stats_pace}</div>
            <div class="stat-val ">SHO ${Player_stats_shooting}</div>
            <div class="stat-val ">PAS ${Player_stats_passing}</div>
            <div class="stat-val ">DRI ${Player_stats_dribbling}</div>
            <div class="stat-val ">DEF ${Player_stats_defending}</div>
            <div class="stat-val ">PHY ${Player_stats_physical}</div>
          </div>
      `
    document.querySelector('.replacement-field').appendChild(NewCard);
    replacement_cards.push(NewCard);

    cleaninputs();
  }



  PlayersPositionsInStad.forEach((PlayerPos, index) => {
    if ((arrFormat_Positions[CurrentFormat][index + 1] === PlayerPosition) &&
      (Formations[CurrentFormat][index + 1].IsOcupped === false)
    ) {
      setTimeout(function () {
        PlayerPos.appendChild(replacement_cards[replacement_cards.length - 1]);
        Formations[CurrentFormat][index + 1].IsOcupped = true;
        replacement_cards.pop();

      },500)
    }

  })

})





//EDIT:

function EditPlayer(){
let arbi = null;
  PlayersPositionsInStad.forEach((PlayerPos,index)=>{
    PlayerPos.addEventListener('click',()=>{
      PlayersPositionsInStad.forEach(elem => {
        if (PlayerPos != elem) {
          elem.style.border ="none";   
          PlayerPos.style.transform ="scale(1.5)"   
        }
      })
      
      if (PlayerPos.textContent != "1" && PlayerPos.textContent != "2" && PlayerPos.innerHTML != "3" && PlayerPos.innerHTML != "4" && PlayerPos.innerHTML != "5" && PlayerPos.innerHTML != "6" && PlayerPos.innerHTML != "7" && PlayerPos.innerHTML != "8" && PlayerPos.innerHTML != "9" && PlayerPos.innerHTML != "10" && PlayerPos.innerHTML != "11") {
        console.log("dsfg");
      }
      AddPlayerForm.style.display="block";




    })
    PlayerPos.style.border='dotted 3px yellow';

  })
  replacement_cards.forEach((replacement_card,index)=>{
  replacement_card.style.border='dotted 3px yellow';

  })
}



let EditBtn=document.querySelector('.btn-edit');
EditBtn.addEventListener('click',function(){
  EditPlayer();
})