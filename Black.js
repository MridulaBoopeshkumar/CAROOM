class Black extends BaseClass{
    constructor(x,y, radius){
        
        super(x,y,radius)
        this.point = 2;

    }

    display(){
        fill("black");
        super.display();
    }
}
