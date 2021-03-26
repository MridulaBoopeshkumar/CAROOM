class White extends BaseClass{
    constructor(x,y, radius){
        
        super(x,y,radius)
        this.point = 4;

    }

    display(){
        fill("light yellow");
        super.display();
    }
}
