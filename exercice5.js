let livres=["antigone","harry potter","darkly dreaming dexter"]
livres.push("L etranger")
livres.unshift("jane doe")
livres.pop()
livres.shift()

console.log(livres)
let categorie=new Set(["Fiction","Science","Histoire"])
categorie.add("jilali")
categorie.add("jilali")
categorie.delete("Fiction")
console.log(categorie) 

let temparr=Array.from(categorie)
let borrows=new Map()
categorie=temparr
for(let i=0;i<livres.length;i++){
    borrows.set(livres[i],categorie[Math.floor(Math.random() *3)])
}
console.log(borrows)
borrows.set("hamid lmzyab",'story')
console.log(borrows)
borrows.set("hamid ww",'storyww')
console.log(borrows)
borrows.set("hamid lmzyabxx",'storyxx')
console.log(borrows)
borrows.set("hamid lmzyabxy")
console.log(borrows)
borrows.delete("hamid lmzyabxx")
console.log(borrows)
console.log(borrows.has("hamid lmzyabxy"))