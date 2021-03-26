class Red extends BaseClass{
  constructor(x,y, radius){
      
      super(x,y,radius)
      this.point = 10 ;

  }

  display(){
      fill("red");
      super.display();
  }
}
