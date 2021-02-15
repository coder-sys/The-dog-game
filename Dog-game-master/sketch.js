var dog
var dogimage
var database
var eatenfood = 0
var foodbf
var dogemotion
let m
var ball
var int = 0
var time
let give_milks
let milk,livingrt
let milkf
let livingroom
let livingroomdog
let vac
let vaccinationref,vaccinationimg
let bathroomref,bathroomimg
let bathroom,gonetobathroom
function preload()
{
  dogimage = loadImage('images/dog.png')
  livingroomdog=loadImage('Living Room.png')
  bathroomimg=loadImage('Wash Room.png')
  vaccinationimg=loadImage('dogVaccination.png')
}

function setup() {
  createCanvas(800, 700);
  vac = new Vaccination()
  dog = createSprite(400,350,20,30)
  database = firebase.database()
  var foodcontent = database.ref('dog/hunger')
  foodcontent.on('value',food,console.log('Error connecting to firebase database'))
  dog.addImage(dogimage)
  dog.scale = 1/4;
  milk=new Milkfeeding()
  livingroom=new Livingroom()
  bathroomref=new Bathroom()
}


function draw() {  
  background(255)
  text('The amount of food fed is:',300,100)
  text(eatenfood,500,100)
  milk.give_milks()
  vac.getVac()
  bathroomref.goToBathroom()
  livingroom.goToLivingRoom()
  if(keyDown(UP_ARROW)){
    database.ref('dog/hunger').set({
      'val':foodbf.val + 1
    })
    
  }
  if(eatenfood>300){
    foodbf.val = 0
  }
  
  drawSprites()
}

food = function(data){
  foodbf = data.val()
  eatenfood = foodbf.val 
  dogemotion = foodbf.emotion
}