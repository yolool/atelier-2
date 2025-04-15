class voiture{
    constructor (model ,marque,année,type,carburant) {
        this.model=model
        this.marque=marque
        this.année=année
        this.type=type
        this.carburant=carburant
    }

}
class hyndai extends voiture{
    constructor (model ,marque,année,type,carburant,serie,hybrid) {
        super(model,marque,année,type,carburant)
        this.serie=serie
        this.hybrid=hybrid
    }
    alarmer() {
        console.log(`je suis ${this.marque} est j'alarme ` )
    }
}

class ford extends voiture{
    constructor(model ,marque,année,type,carburant,options){
        super(model,marque,année,type,carburant)
        this.options=options

    }
}
let voitures=[]
let v=new voiture(2004,"fordfiesta",2004,"e","diesel")
let v1=new voiture(2003,"fordfocus",2003,"e","diesel")
let v2=new voiture(2003,"fordflex",2003,"e","diesel")
voitures.push(v)
voitures.push(v1)
voitures.push(v2)
voitures.sort((x,y)=>{
    return x.année-y.année
})
for(let i=0;i<voitures.length;i++){
    console.log(i+") "+voitures[i]['marque']+" "+voitures[i]['model']+" "+voitures[i]['année'])
}
