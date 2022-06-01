const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var iniciar;
var fase1,fase2;
var JOGAR;
var FIM;
var LOBBY;
var FASE1;
var FASES;
var estadoJogo = "LOBBY";
var grupoSup,grupoSup1;
var ground,av;
var obstaculo;
var barril;
var log1,log2,log3,log4;
var moeda,moedaF;
var backgroundI;
var  suport;

function preload(){
 backgroundI = loadImage("Floresta.png");

}
function setup() {
  createCanvas(1920,900);
   engine = Engine.create();
   world = engine.world;

  iniciar = createSprite(900,500,300,200);
  iniciar.shapeColor = "black";
  iniciar.visible = false;
  fase1 = createSprite(600,500,200,500);
  fase1.shapeColor = "blue";
  fase2 = createSprite(1200,500,200,500);
  fase2.shapeColor = "yellow";
  fase1.visible = false;
  fase2.visible = false;
  ground = createSprite(960,900,1920,30);
  ground.shapeColor = "purple";
  ground.visible = false;
  av = createSprite(100,870,20,40);
  av.shapeColor = "green";
  av.visible = false;
  log1 = new Log(100,200,50,PI/6);
  moeda = 0;
  moedaF = createSprite(200,300,20,20);
  moedaF.shapeColor = "yellow";
  moedaF.visible = false;
  av.debug = true;
  grupoSup = new Group();
  grupoSup1 = new Group();
}

function draw() {
  background(backgroundI); 
  textSize(20);
  text("Moedas: " + moeda,1800,30);
  
  if(estadoJogo === "LOBBY"){
    iniciar.visible = true;
  }
  if(estadoJogo === "FASES"){
    fase1.visible = true;
    fase2.visible = true;
    iniciar.visible = false;
  }
  if(mousePressedOver(iniciar) && estadoJogo === "LOBBY"){
    estadoJogo = "FASES";
  }
  if(mousePressedOver(fase1) && estadoJogo === "FASES"){
   estadoJogo = "FASE1";
   
  }
  
  if(estadoJogo === "FASE1"){
  ground.visible = true;
  av.visible = true;
  fase1.visible = false;
  fase2.visible = false;
  moedaF.visible = true;
 }
 if(estadoJogo)
 if(av.isTouching(moedaF)){
  moeda = 1;
 }
 
 av.collide(ground);
 av.collide(grupoSup);
 av.collide(grupoSup1);
 if(keyDown("a")&& estadoJogo === "FASE1"){
  av.x = av.x -10
  log1.display();
 }
 if(keyDown("d")&& estadoJogo === "FASE1"){
  av.x = av.x +10
 }
 if(keyDown("space")  ) {
  av.velocityY = -21;
}
if(av.isTouching(grupoSup)){
  av.velocityX = 0;
}
if(av.isTouching(grupoSup1)){
  av.velocityX = 0;
}
  av.velocityY = av.velocityY + 0.8;
 
 if(frameCount%60===0 && estadoJogo === "FASE1"){
  gerarObstaculos();

 }
 if(frameCount%70===0 && estadoJogo === "FASE1"){
  gerarSuport();
  
 }
 
  drawSprites();
}
function gerarObstaculos(){
  obstaculo = createSprite(1920,870,50,50);
  obstaculo.shapeColor = "lightblue";
  obstaculo.velocityX = -20;
  obstaculo.lifetime = 95;
  
}
function gerarSuport(){
  suport = createSprite(1920,650,500,40);
  suport.shapeColor = "green";
  suport.velocityX = -10;
  suport.lifetime = 305;
  s1 = createSprite(960,400,500,40);
  s1.shapeColor = "green";
  s1.velocityX = -10;
  s1.lifetime = 305;
  grupoSup.add(suport);
  grupoSup1.add(s1);
 }
 