console.log(people);

$(document).ready(readyNow);

function readyNow(){
  appendFunct();
  clickHandler();
  setName();
}
var randomName;

function appendFunct(){
  // for (var i=0; i < people.length; i +=1){
  //   $("#peopleDiv").append(constructImages(people[i]));
  //
  // }
  $('#peopleDiv').children().remove();
  // Make temporary copy of people array
  var tempArray = people.slice();
  // while there's stuff in tempArray
  while (tempArray.length > 0) {
    //pick a random index in tempArray
    var index = randomNumber(0,tempArray.length-1);
    // splice one person out of the temp array and append
    var personToAppend = tempArray.splice(index,1)[0];
    $('#peopleDiv').append(constructImages(personToAppend));
  }

}

function constructImages(person){


  var face = '<img src="https://github.com/' + person.githubUsername + '.png" alt="Profile image of '+person.name+'">';
  var $imageDiv = $('<div class="face">'+face+'</div>');
  $imageDiv.data('name', person.name);
  return $imageDiv;

}
function clickHandler(){
  $('#peopleDiv').on('click', '.face', faceClick);
}//end of clickHandler
function faceClick(){
  var clicked = $(this).data('name');
  if(clicked === randomName){
    $(this).toggleClass("greenBorder");
    $(this).children().animate({height:150, width:150}, 1000);
    $(this).children().animate({height:100, width:100}, 1000);
    $("#returnMessage").text('Yay, get ready to play again!');
    setTimeout(reset, 2000);
  }
  else{
    $("#returnMessage").text('Nah, try again!');
  }
}//end of faceClick
function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
}
//end of randomNumber
function setName() {
  randomName= people[randomNumber(0,people.length-1)].name;
  $("#nameToPick").text(randomName);
}

function reset(){
  $(".face").removeClass('greenBorder');
  setName();
  $("#returnMessage").text('Pick Someone!');
  appendFunct();
}
