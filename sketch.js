const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
maxDrops=100
drops = []
function preload(){
    
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    if(frameCount % 150 === 0){
        for(var i=0; i<maxDrops; i++){
            eachdrop = new createDrop(random(0,400), random(0,400));
            drops.push(eachdrop);
        }
    }
    
}

function draw(){
    background('black')
    Engine.update(engine);

    for(var i = 0; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY()   
    }

}   

