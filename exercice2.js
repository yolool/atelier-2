class etudiant  {
    constructor(nom  , prenom  , age   , cne ) {
        this.nom=nom
        this.prenom=prenom
        this.age=age
        this.cne=cne
    }
    etudier(){
        console.log(`${this.prenom} ${this.nom} est en train d'étudier`)
    }
}
class Professeur{
    constructor(nom,age,cin){
        this.nom=nom
        this.age=age
        this.cin=cin
    
    }  
    enseinger(){
        console.log(`${this.nom} est en train d'enseinge`)
    }}
let etudiants=[]
let etu1=new etudiant('oulehiane','adam',18,'K606403')
let etu2=new etudiant('laila','benAli',16,'Kb782097')

etudiants.push(etu1)
etudiants.push(etu2)

etudiants.sort((x,y)=>{
   if(x.nom!=y.nom){
    return x.nom.localeCompare(y.nom)
   }else if(x.prenom!=y.prenom){
    return x.prenom.localeCompare(y.prenom)
   }else{
    return x.age-y.age
   }

})



