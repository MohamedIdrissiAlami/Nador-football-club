// --------------variables initialization--------------------//
let CurrentFormat = 0;
let FormatOption = document.querySelector('#format');
let AddPlayerForm = document.querySelector('.add-form');




let PlayerName = document.getElementById('p-name');
let PlayerPicture = document.getElementById('p-picture');
let PlayerNationality = document.getElementById('nationality');
let PlayerCountryFlag = document.getElementById('flag');
let PlayerClub = document.getElementById('club');
let PlayerClubLogo = document.getElementById('logo');

let PlayerPosition = document.querySelector("#select-player-position");
//player stats:

let PlayerRatingp = document.getElementById('ratingp');
let PlayerRatingg = document.getElementById('ratingg');

let Player_stats_diving = document.getElementById('diving');
let Player_stats_handling = document.getElementById('handling');
let Player_stats_kicking = document.getElementById('kicking');
let Player_stats_reflexes = document.getElementById('reflexes');
let Player_stats_speed = document.getElementById('speed');
let Player_stats_positioning = document.getElementById('positioning');


let Player_stats_pace = document.getElementById('pace');
let Player_stats_shooting = document.getElementById('shooting');
let Player_stats_passing = document.getElementById('passing');
let Player_stats_dribbling = document.getElementById('dribbling');
let Player_stats_defending = document.getElementById('defending');
let Player_stats_physical = document.getElementById('physical');


//-------data holders (arrays and objects)--------------
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
    //
    // 4-4-2
    //     ST     ST
    // LM   CM    CM   RM
    // LB   CB    CB   RB
    //         GK
    // 

  ]

let arrFormat_1_Positions = ['', 'GK', 'LB', 'CB', 'CB', 'RB', 'LM', 'CM', 'CM', 'RM', 'ST', 'ST'];
let arrFormat_2_Positions = ['', 'GK', 'LB', 'CB', 'CB', 'RB', 'CM', 'CM', 'CM', 'LW', 'ST', 'RW'];

let arrFormat_Positions = {
  0: arrFormat_1_Positions,
  1: arrFormat_2_Positions,
}

let replacement_cards = [];
let PlayersPositionsInStad = document.querySelectorAll('.position');



//------------------generic functions--------------//
function cleaninputs() {
  document.getElementById('p-name').value = '';
  document.getElementById('p-picture').value = '';
  document.getElementById('flag').value = '';
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
function DistributePlayersOnStadium(CurrentFormat = 0) {

  let Players = document.querySelectorAll('.position');
  Players.forEach((Player, index) => {
    Player.style.top = Formations[CurrentFormat][index + 1].top;
    Player.style.left = Formations[CurrentFormat][index + 1].left;
  })

   ensureCorrectPlacement();
   assignPlayerToPosition();
}

function ensureCorrectPlacement() {
  // console.log(PlayersPositionsInStad[0].querySelector('.player-pos').textContent === arrFormat_Positions[CurrentFormat][11 + 1]);
  PlayersPositionsInStad.forEach((Player, index) => {
    if (Player.children.length > 0) {
      if (Player.children[0].querySelector('.player-pos') != null) {        
        if (!(Player.children[0].querySelector('.player-pos').innerText === arrFormat_Positions[CurrentFormat][index + 1])) {
          replacement_cards.push(Player.children[0]);
          document.querySelector('.replacement-field').appendChild(Player.children[0]);
          Player.removeChild();
          Formations[CurrentFormat][index + 1].IsOcupped = false;
        }
      }
      
    }
  })
}
function assignPlayerToPosition() {
  TransferPlayerToPosition();
}

//


//add new player:
function TransferPlayerToPosition() {
  console.log(replacement_cards.length);
  PlayersPositionsInStad.forEach((PlayerPos, index) => {
    if(replacement_cards.length>0)
    {
      if ((arrFormat_Positions[CurrentFormat][index + 1] === replacement_cards[replacement_cards.length-1].querySelector('.player-pos').innerText) &&
      (Formations[CurrentFormat][index + 1].IsOcupped === false)  
    ) {
      setTimeout(function () {
        PlayerPos.appendChild(replacement_cards[replacement_cards.length - 1]);
        Formations[CurrentFormat][index + 1].IsOcupped = true;
        replacement_cards.pop();

      }, 500)
    }

    }

  })

}

function CreatePlayerCard() {
  PlayerName = document.getElementById('p-name');
  lPlayerPicture = document.getElementById('p-picture');
  PlayerNationality = document.getElementById('nationality');
  PlayerCountryFlag = document.getElementById('flag');
  PlayerClub = document.getElementById('club');
  PlayerClubLogo = document.getElementById('logo');

  PlayerPosition = document.querySelector("#select-player-position");
  //player stats:

  PlayerRatingp = document.getElementById('ratingp');
  PlayerRatingg = document.getElementById('ratingg');
  Player_stats_diving = document.getElementById('diving');
  Player_stats_handling = document.getElementById('handling');
  Player_stats_kicking = document.getElementById('kicking');
  Player_stats_reflexes = document.getElementById('reflexes');
  Player_stats_speed = document.getElementById('speed');
  Player_stats_positioning = document.getElementById('positioning');

  Player_stats_pace = document.getElementById('pace');
  Player_stats_shooting = document.getElementById('shooting');
  Player_stats_passing = document.getElementById('passing');
  Player_stats_dribbling = document.getElementById('dribbling');
  Player_stats_defending = document.getElementById('defending');
  Player_stats_physical = document.getElementById('physical');


  
  
  if (PlayerPosition.value === 'GK') {
    let NewCard = document.createElement('div');
    NewCard.classList.add('player-card')
    NewCard.innerHTML = `
    <div class="player-profile">
    <div class="player-pos">${PlayerPosition.value}</div>
    <div class="rating">${PlayerRatingg.value}</div>
    <div style="width: 24px;height: 16px;border-radius: 6px;overflow: hidden; position:absolute;bottom: 0;right:0" class="flag"><img style="width: 100%; height: 100%;" src="${PlayerCountryFlag.value}" alt=""></div>
    <div style="width: 16px;height: 16px; position:absolute;top:12px;left:0" class="club-logo"><img style="width: 100%; height: 100%;" src="${PlayerClubLogo.value}" alt=""></div>
    <div class="profile-img-box">
    <img id="player-pic" src="${PlayerPicture.value}" alt="${PlayerName.value}">
    </div>
    </div>
    <div class="player-info">
    <div class="player-name">${PlayerName.value}</div>
    <div class="player-stats">
    <div class="stat-val ">DIV ${Player_stats_diving.value}</div>
    <div class="stat-val ">HAN ${Player_stats_handling.value}</div>
    <div class="stat-val ">KIC ${Player_stats_kicking.value}</div>
    <div class="stat-val ">REF ${Player_stats_reflexes.value}</div>
    <div class="stat-val ">SPE ${Player_stats_speed.value}</div>
    <div class="stat-val ">POS ${Player_stats_positioning.value}</div>
    </div>
    `
    document.querySelector('.replacement-field').appendChild(NewCard);
    replacement_cards.push(NewCard);
    console.log(replacement_cards.length);
    
    cleaninputs();
    
  }
  else if (!(PlayerPosition.value === 'Default')) {
    
    let NewCard = document.createElement('div');
    NewCard.classList.add('player-card')
    NewCard.innerHTML = `
              <div class="player-profile">
              <div class="player-pos">${PlayerPosition.value}</div>
          <div class="rating">${PlayerRatingp.value}</div>
          <div style="width: 24px;height: 16px;border-radius: 6px;overflow: hidden; position:absolute;bottom: 0;right:0" class="flag"><img style="width: 100%; height: 100%;" src="${PlayerCountryFlag.value}" alt=""></div>
          
          <div style="width: 16px;height: 16px; position:absolute;top:12px;left:0" class="club-logo"><img style="width: 100%; height: 100%;" src="${PlayerClubLogo.value}" alt=""></div>
          <div class="profile-img-box">
            <img id="player-pic" src="${PlayerPicture.value}" alt="${PlayerName.value}">
          </div>
        </div>
        <div class="player-info">
          <div class="player-name">${PlayerName.value}</div>
          <div class="player-stats">
            <div class="stat-val ">PAC ${Player_stats_pace.value}</div>
            <div class="stat-val ">SHO ${Player_stats_shooting.value}</div>
            <div class="stat-val ">PAS ${Player_stats_passing.value}</div>
            <div class="stat-val ">DRI ${Player_stats_dribbling.value}</div>
            <div class="stat-val ">DEF ${Player_stats_defending.value}</div>
            <div class="stat-val ">PHY ${Player_stats_physical.value}</div>
          </div>
      `
    document.querySelector('.replacement-field').appendChild(NewCard);
    replacement_cards.push(NewCard);
    cleaninputs();
  }

}
function PlacePlayerInReplacementField() {
  CreatePlayerCard();
  TransferPlayerToPosition();

}
function DisplayAddNewPlayerForm() {
  let AddPlayerForm = document.querySelector('.add-form');
  (AddPlayerForm.style.display == "none") ? AddPlayerForm.style.display = "block" : AddPlayerForm.style.display = "none";
}
function ReadNewPlayerInfo() {
  DisplayAddNewPlayerForm();
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
}
function AddNewPlayer() {
  ReadNewPlayerInfo();
  let SaveBtn = document.querySelector('.save-btn');
  SaveBtn.addEventListener('click', function () {
    PlacePlayerInReplacementField();
  })
}

//edit player : 

function EditPlayerInfo(player)
{
  console.log('in the name of god');
  document.querySelector('.add-form').style.display='block';
  document.getElementById('p-name').value=player.querySelector('.player-name').innerText;
  document.getElementById('p-picture').value=player.querySelector('#player-pic').src;


}
function Editplayer() {

  PlayersPositionsInStad.forEach((pos,index)=>{
    if(pos.children.length>0)
    {
      pos.children[0].style.border='dashed 2px yellow';
      pos.children[0].addEventListener('click',function(){
          //im here.. :-)
        EditPlayerInfo(pos);
      })
    }
  })
  console.log(replacement_cards.length);
  if(replacement_cards.length>0)
  {
    replacement_cards.forEach((card,index)=>{
      card.style.border='dashed 2px red';
      card.addEventListener('click',function(){
        replacement_cards.splice(index,1);
        card.remove();
      })
    })
  }

}


//Remove player : 
function RemovePlayer() {
  PlayersPositionsInStad.forEach((pos,index)=>{
    if(pos.children.length>0)
    {
      pos.children[0].style.border='dashed 2px red';
      pos.children[0].addEventListener('click',function(){
        pos.children[0].remove();
      })
    }
  })
  if(replacement_cards.length>0)
  {
    replacement_cards.forEach((card,index)=>{
      card.style.border='dashed 2px red';
      card.addEventListener('click',function(){
        replacement_cards.splice(index,1);
        card.remove();
      })
    })
  }

}




//select format : 


let btnAdd = document.querySelector('.btn-add');
btnAdd.addEventListener('click', function () {
  AddNewPlayer();

})


let btnRemove = document.querySelector('.btn-del');
btnRemove.addEventListener('click', function () {
  RemovePlayer();


})

let btnEdit = document.querySelector('.btn-edit');
btnEdit.addEventListener('click', function () {
  Editplayer();
})

DistributePlayersOnStadium(0);
FormatOption.addEventListener('change', () => {
  CurrentFormat = (FormatOption.value === '4-4-2') ? 0 : 1;
  DistributePlayersOnStadium(CurrentFormat);
})
