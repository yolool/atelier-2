class Vecteur2D{
   
    constructor( x=0, y=0 ){
        this.x = x;
        this.y = y;
    }
    afficher(){
        console.log(`A[${this.x},${this.y}]`)
    }
    addition(a,b){
       console.log(`l addition de deux vecteur est:[${(a.x)+b.x},${a.y+b.y}]`)
    }

}
class rectangle{
  constructor(Long,Larg,nom){
    this.Long=Long
    this.Larg=Larg
    this.nom="rectangle"
  }
  afficher(){
    console.log(`le rectangle ${this.nom} a une longueur de ${this.Long} et une largueur ${this.Larg}`)
  }
  surface(){
    console.log(`la surface du rectangle est de ${this.Long*this.Larg} `)
  }

}
class carre extends rectangle{
    constructor(Long,Larg,nom){
     super(Long,Larg,nom)
     
     this.nom="carre"

    }

    }
class point {
 constructor(x=0.0, y=0.0) {
         this.x=x
         this.y=y
 }

}
class segment extends point {
    constructor(debut,fin){
        super()
        this.debut=debut
        this.fin=fin
    }

}


let vecsansparm=new Vecteur2D();
let vecavecparm=new Vecteur2D(1,2);
let v2=new Vecteur2D(4,2);

let rec=new rectangle(3,4)
let carr=new carre(5,5);

vecsansparm.afficher()
vecavecparm.addition(vecavecparm,v2)
rec.afficher()
carr.afficher()

let debut=new point(5,7)
let fin=new point(8,9)
let seg=new segment(debut,fin)

console.log(seg['debut'])
