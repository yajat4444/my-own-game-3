class Form{

    constructor(){
    this.input=createInput("write the name");
    this.button = createButton('Start');
    this.greeting=createElement('h3');
    this.title=createElement('h2');
    }
    dislay(){
    this.input.position(displayWidth/2,displayHeight/2.5,60,20);
    this.button.position(displayWidth/2,displayHeight/2,40,40) ;
    this.button.mousePressed(()=>{
        
         this.input.hide();
         
         this.button.hide();
         
         player.name = this.input.value();
         
         playerCount+=1;
         
         player.index = playerCount;
        
         player.update();
         
         player.updateCount(playerCount);
         
         this.greeting.html("Hello " + this.input);
         
         this.greeting.position(displayWidth/3, displayHeight/3);
         this.title.position(displayWidth/2-50,0);
       })
    }
    if(gameState!==START){
      this.input.display();
      this.button.display();
      
    }
    if(mousePressedOver(this.button)){
    gameState=PLAY1;
    }
    if(players.exists){
    gameState=PLAY2;
    
    }
    if(gameState===PLAY1){
      this.greeting();
    }
    if(gameState===PLAY2){
    
    lines();
    
    //o1
    if(mousePressedOver(o1)){
    
    o2.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    if(mousePressedOver(o2)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o3)){
    
    o1.destroy();
    o2.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o4)){
    
    o1.destroy();
    o3.destroy();
    o2.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o5)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o2.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o6)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o2.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o7)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o2.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o8)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o2.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o9)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o2.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o10)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o2.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o11)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o2.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o12)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o2.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o13)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o2.destroy();
    }  
    }
    //o2
    if(mousePressedOver(o2)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    
    if(mousePressedOver(o1)){
    
    o2.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o3)){
    
    o1.destroy();
    o2.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o4)){
    
    o1.destroy();
    o3.destroy();
    o2.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o5)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o2.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o6)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o2.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o7)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o2.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o8)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o2.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o9)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o2.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o10)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o2.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o11)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o2.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o12)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o2.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o13)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o2.destroy();
    }  
    }
    //o3
    if(mousePressedOver(o3)){
    
    o1.destroy();
    o2.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    
    if(mousePressedOver(o1)){
    
    o2.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o2)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o4)){
    
    o1.destroy();
    o3.destroy();
    o2.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o5)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o2.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o6)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o2.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o7)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o2.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o8)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o2.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o9)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o2.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o10)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o2.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o11)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o2.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o12)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o2.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o13)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o2.destroy();
    }  
    }
    //o4
    if(mousePressedOver(o4)){
    
    o1.destroy();
    o3.destroy();
    o2.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    
    if(mousePressedOver(o1)){
    
    o2.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o3)){
    
    o1.destroy();
    o2.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o2)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o5)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o2.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o6)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o2.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o7)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o2.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o8)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o2.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o9)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o2.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o10)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o2.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o11)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o2.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o12)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o2.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o13)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o2.destroy();
    }  
    }
    //o5
    if(mousePressedOver(o5)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o2.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    
    if(mousePressedOver(o1)){
    
    o2.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o3)){
    
    o1.destroy();
    o2.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o4)){
    
    o1.destroy();
    o3.destroy();
    o2.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o2)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o6)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o2.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o7)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o2.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o8)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o2.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o9)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o2.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o10)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o2.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o11)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o2.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o12)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o2.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o13)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o2.destroy();
    }  
    }
    //o6
    if(mousePressedOver(o6)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o2.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    
    if(mousePressedOver(o1)){
    
    o2.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o3)){
    
    o1.destroy();
    o2.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o4)){
    
    o1.destroy();
    o3.destroy();
    o2.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o5)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o2.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o2)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o7)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o2.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o8)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o2.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o9)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o2.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o10)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o2.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o11)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o2.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o12)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o2.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o13)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o2.destroy();
    }  
    }
    //o7
    if(mousePressedOver(o7)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o2.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    
    if(mousePressedOver(o1)){
    
    o2.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o3)){
    
    o1.destroy();
    o2.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o4)){
    
    o1.destroy();
    o3.destroy();
    o2.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o5)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o2.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o6)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o2.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o2)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o8)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o2.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o9)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o2.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o10)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o2.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o11)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o2.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o12)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o2.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o13)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o2.destroy();
    }  
    }
    //o8
    if(mousePressedOver(o8)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    
    if(mousePressedOver(o1)){
    
    o2.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o3)){
    
    o1.destroy();
    o2.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o4)){
    
    o1.destroy();
    o3.destroy();
    o2.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o5)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o2.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o6)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o2.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o7)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o2.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o2)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o9)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o2.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o10)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o2.destroy();
    o11.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o11)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o2.destroy();
    o12.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o12)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o2.destroy();
    o13.destroy();
    }
    if(mousePressedOver(o13)){
    
    o1.destroy();
    o3.destroy();
    o4.destroy();
    o5.destroy();
    o6.destroy();
    o7.destroy();
    o8.destroy();
    o9.destroy();
    o10.destroy();
    o11.destroy();
    o12.destroy();
    o2.destroy();
    }  
    }
    }
    if(gameState===START){
    this.button();
    this.input();
    p1.hide();
    p2.hide();
    p3.hide();
    p4.hide();
    p5.hide();
    p6.hide();
    p7.hide();
    p8.hide();
    o1.hide();
    o2.hide();
    o3.hide();
    o4.hide();
    o5.hide();
    o6.hide();
    o7.hide();
    o8.hide();
    o9.hide();
    o10.hide();
    o11.hide();
    o12.hide();
    o13.hide();
    }
    if(gameState===END){
    p1.hide();
    p2.hide();
    p3.hide();
    p4.hide();
    p5.hide();
    p6.hide();
    p7.hide();
    p8.hide();
    o1.hide();
    o2.hide();
    o3.hide();
    o4.hide();
    o5.hide();
    o6.hide();
    o7.hide();
    o8.hide();
    o9.hide();
    o10.hide();
    o11.hide();
    o12.hide();
    o13.hide();
    }
  }

}
    