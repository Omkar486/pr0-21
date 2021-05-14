var movRect, rect1, rect2, rect3, rect4


function setup(){
    createCanvas(1000,800);
    
    movRect = createSprite(100,700,100,100)
    rect1 = createSprite(200,700,100,100)
    rect1.shapeColor = "red"
    rect2 = createSprite(320,120,100,100)
    rect2.shapeColor="green"
    rect3 = createSprite(500,320,100,100)
    rect3.shapeColor = "blue"
    rect4 = createSprite(100,200,100,100)
    rect4.shapeColor = "yellow"
}

function draw() {

    background("black");
    


    movRect.x=mouseX
    movRect.y=mouseY
    drawSprites();
    isTouching(movRect,rect1)
    isTouching(movRect,rect2)
    isTouching(movRect,rect3)
    isTouching(movRect,rect4)
}

function isTouching(obj1,obj2){
    if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
        && obj2.x - obj1.x < obj2.width/2 + obj1.width/2 && obj1.y - obj2.y < obj2.height/2 + obj1.height/2
        && obj2.y - obj1.y < obj2.height/2 + obj1.height/2)
    {
        obj1.shapeColor = obj2.shapeColor            
    }else{
        obj1.shapeColor= rgb(120, 4, 209)
    }
    
}


