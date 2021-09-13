/*let nom:string = "amine";
console.log(nom);*/
/*function info(){
    for(let i=0;i<10;i++)
    {
        console.log("i="+i);
    }
    console.log("Finally i="+i);
}*/

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

import { Cours, Etudiant } from "./modeles";

function dispalyCours(c: Cours) {
    console.log(c.nom + " " + c.volume);
}

dispalyCours(
    {
        'nom': 'Angular',
        'volume': 30
    }
);

let e :Etudiant  = new Etudiant("amine",20);
let e2 :Etudiant  = new Etudiant("amine");
e.info();