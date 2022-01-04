import React from 'react';
import pokedex from './pokedex.json';
const prefixes = ["Bulb","Ivy","Venu","Char","Char","Char","Squirt","War","Blast","Cater","Meta","Butter","Wee","Kak","Bee","Pid","Pidg","Pidg","Rat","Rat","Spear","Fear","Ek","Arb","Pika","Rai","Sand","Sand","Nido","Nido","Nido","Nido","Nido","Nido","Clef","Clef","Vul","Nine","Jiggly","Wiggly","Zu","Gol","Odd","Gloo","Vile","Pa","Para","Veno","Veno","Dig","Dug","Meow","Per","Psy","Gol","Man","Prime","Grow","Arca","Poli","Poli","Poli","Ab","Kada","Ala","Ma","Ma","Ma","Bell","Weepin","Victree","Tenta","Tenta","Geo","Grav","Gol","Pony","Rapi","Slow","Slow","Magne","Magne","Far","Do","Do","See","Dew","Gri","Mu","Shell","Cloy","Gas","Haunt","Gen","On","Drow","Hyp","Krab","King","Volt","Electr","Exegg","Exegg","Cu","Maro","Hitmon","Hitmon","Licki","Koff","Wee","Rhy","Rhy","Chan","Tang","Kangas","Hors","Sea","Gold","Sea","Star","Star","Mr.","Scy","Jyn","Electa","Mag","Pin","Tau","Magi","Gyara","Lap","Dit","Ee","Vapor","Jolt","Flare","Pory","Oma","Oma","Kabu","Kabu","Aero","Snor","Artic","Zap","Molt","Dra","Dragon","Dragon","Mew","Mew"];
const suffixes = ["basaur","ysaur","usaur","mander","meleon","izard","tle","tortle","toise","pie","pod","free","dle","una","drill","gey","eotto","eot","tata","icate","row","row","kans","bok","chu","chu","shrew","slash","oran","rina","queen","ran","rino","king","fairy","fable","pix","tales","puff","tuff","bat","bat","ish","oom","plume","ras","sect","nat","moth","lett","trio","th","sian","duck","duck","key","ape","lithe","nine","wag","whirl","wrath","ra","bra","kazam","chop","choke","champ","sprout","bell","bell","cool","cruel","dude","eler","em","ta","dash","poke","bro","mite","ton","fetchd","duo","drio","eel","gong","mer","uk","der","ster","tly","ter","gar","ix","zee","no","by","ler","orb","ode","cute","utor","bone","wak","lee","chan","tung","fing","zing","horn","don","sey","gela","khan","sea","dra","deen","king","yu","mie","mime","ther","nx","buzz","mar","sir","ros","karp","dos","ras","to","vee","eon","eon","eon","gon","nyte","star","to","tops","dactyl","lax","cuno","dos","tres","tini","nair","nite","two","ew"];

const starters = [1,4,7,10,13,16,19,21,23,25,27,29,32,35,37,39,41,43,46,48,50,52,54,56,58,60,63,66,69,72,74,77,79,81,83,84,86,88,90,92,96,97,98,100,102,104,106,107,108,109,111,113,114,115,116,118,120,122,123,124,125,126,127,128,129,131,132,133,137,138,140,143,147];
const normal = [1,4,7];
const strictStarters =[1,4,7,10,13,16,19,21,23,25,27,29,32,35,37,39,41,43,46,48,50,52,54,56,58,60,63,66,69,72,74,77,79,81,86,88,90,92,96,98,100,104,109,113,116,118,120,122,129,132,133,138,140,147];
const rival=[3,6,9,31,34,38,53,55,59,62,65,68,71,76,78,80,91,94,95,103,106,107,112,115,123,124,125,126,127,128,130,131,139,141,142,143,144,145,146,149,150,151];

const typeColors=[
  {"type": "Normal", "color":"#A8A878"},
  {"type": "Fire", "color":"#F08030"},
  {"type": "Water", "color":"#6890F0"},
  {"type": "Grass", "color":"#78C850"},
  {"type": "Electric", "color":"#F8D030"},
  {"type": "Ice", "color":"#98D8D8"},
  {"type": "Fighting", "color":"#C03028"},
  {"type": "Poison", "color":"#A040A0"},
  {"type": "Ground", "color":"#E0C068"},
  {"type": "Flying", "color":"#A890F0"}, 
  {"type": "Psychic", "color":"#F85888"},
  {"type": "Bug", "color":"#A8B820"},
  {"type": "Rock", "color":"#B8A038"},
  {"type": "Ghost", "color":"#705898"},
  {"type": "Dark", "color":"#705848"},
  {"type": "Dragon", "color":"#7038F8"},
  {"type": "Steel", "color":"#B8B8D0"},
  {"type": "Fairy", "color":"#F0B6BC"}
];

const typeWeakneses=[
  {type:"Bug", weak:["Fire", "Flying", "Rock"]},
  {type:"Dark", weak:["Bug", "Fairy", "Fighting"]},
  {type:"Dragon", weak:["Dragon", "Fairy", "Ice"]},
  {type:"Electric", weak:["Ground"]},
  {type:"Fairy", weak:["Poison", "Steel"]},
  {type:"Fighting", weak:["Fairy", "Flying", "Psychic"]},
  {type:"Fire", weak:["Ground", "Rock", "Water"]},
  {type:"Flying", weak:["Electric", "Ice", "Rock"]},
  {type:"Ghost", weak:["Dark", "Ghost"]},
  {type:"Grass", weak:["Bug", "Fire", "Flying", "Ice", "Poison"]},
  {type:"Ground", weak:["Grass", "Ice", "Water"]},
  {type:"Ice", weak:["Fighting", "Fire", "Rock", "Steel"]},
  {type:"Normal", weak:["Fighting"]},
  {type:"Poison", weak:["Ground", "Psychic"]},
  {type:"Psychic", weak:["Bug", "Dark", "Ghost"]},
  {type:"Rock", weak:["Fighting", "Grass", "Ground", "Steel", "Water"]},
  {type:"Steel", weak:["Fighting", "Fire", "Ground"]},
  {type:"Water", weak:["Electric", "Grass"]}
];

function getFusionName(pkmn1, pkmn2) {
  var name, prefix, suffix;
  prefix = prefixes[pkmn1-1];
  suffix = suffixes[pkmn2-1];
  if (pkmn1 === 108 && pkmn2 === 132) {
    name = 'Covfefe';
  } else if (prefix.length> 2 && prefix.slice(-2) === suffix.slice(0, 2)) {
    name = prefix.slice(0, prefix.length - 2) + suffix;
  } else if (prefix.slice(-1) === suffix.slice(0, 1)) {
    name = prefix.slice(0, prefix.length - 1) + suffix;
  } else if (prefix.slice(-1) === '.') {
    name = prefix + " " + suffix[0].toUpperCase() + suffix.slice(1);
  } else {
    name = prefix + suffix;
  }
  return name;
};


function getRandomPokemonIndex(type){
  if(type==="starter"){
    return starters[Math.floor(Math.random() * starters.length)];
  }
  if(type==="normal"){
    return normal[Math.floor(Math.random() * normal.length)];
  }
  if(type==="strictStarters"){
    return strictStarters[Math.floor(Math.random() * strictStarters.length)];
  }
  return Math.floor(Math.random()*151)+1;
}

function getStarterGroup(){
  let starterIDs = [];
  for(let i = 0; i <3; i++){
    let pokemon ={};
    pokemon.pkmn1 =getRandomPokemonIndex("strictStarters");
    pokemon.pkmn2 = getRandomPokemonIndex("strictStarters");
    starterIDs.push(pokemon);
  }
  return starterIDs;
}

function getUniqueStarters(){
  let starterIDs = [];
  let starterOptions = strictStarters;
  for(let i = 0; i <3; i++){
    let pokemon ={};
    const starter1 =Math.floor(Math.random() * starterOptions.length);
    pokemon.pkmn1 =starterOptions[starter1];
    starterOptions.splice(starter1, 1);

    const starter2 =Math.floor(Math.random() * starterOptions.length);
    pokemon.pkmn2 =starterOptions[starter2];
    starterOptions.splice(starter2, 1);
    starterIDs.push(pokemon);
  }
  return starterIDs;
}

function getRivalStarter(starterChoiceType){
  const weaknesses = typeWeakneses.find(obj => obj.type === starterChoiceType).weak;
  let noAdvantage = true;
  let rivalTypes = [];
  let starter1 = null;
  let starter2 = null;


  while(noAdvantage){
    starter1 =Math.floor(Math.random() * rival.length);
    starter2 =Math.floor(Math.random() * rival.length);
    rivalTypes = getFusionTypes(rival[starter2], rival[starter1]);
    if(weaknesses.includes(rivalTypes[0].type)){
      noAdvantage = false;
    }
  }
  const rivalObj = {pkmn1: rival[starter1], pkmn2: rival[starter2], types:rivalTypes};
  return rivalObj
}

function getFusionTypes(pkmn1, pkmn2){
  const pokemon1Types = pokedex[pkmn1].type;
  const pokemon2Types = pokedex[pkmn2].type;
  const pokemonTypes = pokemon1Types.concat(pokemon2Types);
  if(pokemon1Types.length === 1 && pokemon2Types.length === 1){
    return findColor(pokemonTypes);
  } else {
    let temp1 = pokemon1Types;
    let temp2 = pokemon2Types;
    if(pokemon1Types.length > 1){
      temp1 = pokemon1Types.filter(e => e !== 'Normal')
    }
    if(pokemon2Types.length > 1){
      temp2 = pokemon2Types.filter(e => e !== 'Normal')
    }
    return findColor([temp1[0], temp2[0]]);
  }
}

function betterFusionTypes(pkmn1, pkmn2){
  const pokemon1Types = pokedex[pkmn1].type;
  const pokemon2Types = pokedex[pkmn2].type;
  const pokemonTypes = pokemon2Types.concat(pokemon1Types);

  if(pokemon1Types.length === 1 && pokemon2Types.length === 1){
    return findColor(pokemonTypes);
  } else {
    let temp1 = pokemon1Types;
    let temp2 = pokemon2Types;
    const sharedTypes = temp1.filter(function(e) {
        return temp2.indexOf(e) > -1;
    });
    if(sharedTypes.length>0){
      const shared = sharedTypes[0];
      let primary = "";
      let secondary ="";
      if(temp2.length>1){
        primary = temp2.filter(e => e !== shared)[0];
        secondary = shared;
      } else {
        primary = shared;
        secondary = temp1.filter(e => e !== shared)[0];
      }
      return findColor([primary, secondary]);
    }
    if(pokemon1Types.length > 1){
      temp1 = pokemon1Types.filter(e => e !== 'Normal')
      if (temp1.includes('Flying')){
        temp1[0] = 'Flying';
      }
    }
    if(pokemon2Types.length > 1){
      temp2 = pokemon2Types.filter(e => e !== 'Normal')
    }
    return findColor([temp2[0], temp1[0]]);
  }
}

function findColor(typesArr){
  if (typesArr.length === 1){
    return [typeColors.find(obj => obj.type === typesArr[0])];
  } else if (typesArr[0] === typesArr[1] ){
    return [typeColors.find(obj => obj.type === typesArr[0])];
  } else {
    let types = [];
    types.push(typeColors.find(obj => obj.type === typesArr[0]));
    types.push(typeColors.find(obj => obj.type === typesArr[1]));
    return types;
  }
}

function getRivalPkmn(playersPkmn){
  const playersStarterTypes = betterFusionTypes(playersPkmn.pkmn1, playersPkmn.pkmn2);
  const rivalsType = playersStarterTypes[0].type;
  const rivalStarter = getRivalStarter(rivalsType);
  let finalScreen = {player: {}, rival: {}};
  finalScreen.rival = rivalStarter;
  finalScreen.player.pkmn1 = playersPkmn.pkmn1;
  finalScreen.player.pkmn2 = playersPkmn.pkmn2;
  finalScreen.player.types = playersStarterTypes;
  return finalScreen;
}
export {getRandomPokemonIndex, getFusionName, getStarterGroup, getUniqueStarters, getFusionTypes, betterFusionTypes, getRivalPkmn};

