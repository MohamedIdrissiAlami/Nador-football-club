function DistributePlayersOnStadium(FormatChoice=0)
{
  const Formations=
  [
    {
      1 :{
        top: "77%",
        left : "46%",
      },
      2 :{
        top: "50%",
        left : "-5%",
      },
      3 :{
        top: "50%",
        left : "10%",
      },
      4 :{
        top: "50%",
        left : "37%",
      },
      5 :{
        top: "50%",
        left : "52%",
      },
      6 :{
        top: "25%",
        left : "-37%",
      },
      7 :{
        top: "25%",
        left : "-25%",
      },
      8 :{
        top: "25%",
        left : "-5%",
      },
      9 :{
        top: "25%",
        left : "10%",
      },
      10 :{
        top: "5%",
        left : "-54%",
      },
      11 :{
        top: "5%",
        left : "-30%",
      },
    },
    {
      1 :{
        top: "77%",
        left : "46%",
      },
      2 :{
        top: "50%",
        left : "-5%",
      },
      3 :{
        top: "50%",
        left : "10%",
      },
      4 :{
        top: "50%",
        left : "37%",
      },
      5 :{
        top: "50%",
        left : "52%",
      },
      6 :{
        top: "25%",
        left : "-27%",
      },
      7 :{
        top: "25%",
        left : "-8%",
      },
      8 :{
        top: "25%",
        left : "15%",
      },
      9 :{
        top: "5%",
        left : "-2%",
      },
      10 :{
        top: "5%",
        left : "-60%",
      },
      11 :{
        top: "5%",
        left : "-44%",
      },
    },
  ]
  let Players=document.querySelectorAll('.position');
  Players.forEach((Player,index) =>{
    Player.style.top=Formations[FormatChoice][index+1].top;
    Player.style.left=Formations[FormatChoice][index+1].left;
  })
}

let FormatOption=document.querySelector('#format');
FormatOption.addEventListener('change',()=>{
let FormatChoice=(FormatOption.value==='4-4-2')? 0:1;
  DistributePlayersOnStadium(FormatChoice);

  console.log(FormatChoice);
  // DistributePlayersOnStadium();
})


//-add button-:

let btnAdd = document.querySelector('.btn-add');
let AddPlayerForm = document.querySelector('.add-form');

btnAdd.addEventListener('click',()=>{
  (AddPlayerForm.style.display == "none")? AddPlayerForm.style.display="block":AddPlayerForm.style.display="none";

});

let SelectPlayerPosition=document.querySelector('#select-player-position');
SelectPlayerPosition.addEventListener('change',()=>{
  if (SelectPlayerPosition.value == "GK") {
    document.querySelector('#GK').style.display='block';
    document.querySelector('#Player').style.display='none';
  } else {
    document.querySelector('#Player').style.display='block'
    document.querySelector('#GK').style.display='none';

  }
})
//- -