"use strict";
/*let nom:string = "amine";
console.log(nom);*/
/*function info(){
    for(let i=0;i<10;i++)
    {
        console.log("i="+i);
    }
    console.log("Finally i="+i);
}*/
exports.__esModule = true;
//info();
/*
function somme(x:number,y:number)
{
    console.log(x+y);
}

somme(10,20);*/
/*
let somme = (x,y)=>console.log(x+y);  //Arrow Function

somme(1,2);*/
/*
let tab:any[]=[12,"Angular",true,'a'];
for(var i=0;i<tab.length;i++)
{
    console.log(tab[i]);
}
let names:string[]=["amine","anis","radhi"];
for(var i=0;i<names.length;i++)
{
    console.log(names[i]);
}*/
var modeles_1 = require("./modeles");
function dispalyCours(c) {
    console.log(c.nom + " " + c.volume);
}
dispalyCours({
    'nom': 'Angular',
    'volume': 30
});
var e = new modeles_1.Etudiant("amine", 20);
e.info();
