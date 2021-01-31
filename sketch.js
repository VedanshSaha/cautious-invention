    const Engine=Matter.Engine;
    const World=Matter.World;
    const Bodies=Matter.Bodies;
    const Body=Matter.Body;
    const Constraint=Matter.Constraint;
    const MouseConstraint=Matter.MouseConstraint;

    var engine,world;
    var drops,umbrella;
    let umbrella_anim;
    let maxDrops=100;
    var thunderbolt;
    var drops=[];
    var num;
    var thunderframe;

    var thunderbolt_img1,thunderbolt_img2,thunderbolt_img3,thunderbolt_img4;
    let bg;
    let heck;
    let b;
    function preload(){

        umbrella_anim=loadAnimation("walking_1.png","walking_2.png","walking_3.png"
        ,"walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")

        thunderbolt_img1=loadImage("1.png");
        thunderbolt_img2=loadImage("2.png");
        thunderbolt_img3=loadImage("3.png");
        thunderbolt_img4=loadImage("4.png");
        
        bg = loadImage("night.png");

        heck = loadSound("Music.mp3");
    }

    function setup(){
    //To create canvas
    createCanvas(450,700);

    engine=Engine.create();  
    world=engine.world;


    
    heck.loop();
    
    //thunderbolt.addImage(thunderbolt_img1);
        
    umbrella=new Umbrella(200,420);

    b = createSprite(200,530,10,10)
    b.addAnimation("anime",umbrella_anim);
    b.scale = 0.5

    
    if(frameCount%150===0)
    {
        for(i=0;i<maxDrops;i++)
    {
        drops.push(new Drop(random(0,400),random(0,400)));
    }
    }
    
    }

    function draw(){
        //console.log(num);
        Engine.update(engine);

        //To assign the background
        background(bg);

        

        // console.log(thunderbolt);
        // console.log(frameCount);
        if(frameCount%80===0)
        {
        thunderframe=frameCount;  
        thunderbolt=createSprite(random(10,370),random(10,30),10,10);
        num=Math.round(random(1,4)); 
        switch(num)
        {
            case 1: thunderbolt.addImage(thunderbolt_img1);
                break;
            case 2: thunderbolt.addImage(thunderbolt_img2);
                break;
            case 3: thunderbolt.addImage(thunderbolt_img3);
                break;
            case 4: thunderbolt.addImage(thunderbolt_img4);
                break;
            default: break;
        }
        //randomizing thunderbolt
        thunderbolt.scale=random(0.3,0.6);
    }

    //destorying thunderbolt after 10 frames from its creation frame count
    if(thunderframe+10===frameCount && thunderbolt)
    {
        thunderbolt.destroy();
    }


    for(var i=0;i<maxDrops;i++)
    {
        drops[i].showDrops();
        drops[i].update();
    }   
    
    //  drops.update();

        
        
    drawSprites();   
    }   

