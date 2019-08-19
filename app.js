var randomNumber;
var cardAmount = 11;
var coins = 0;
var coinsAmount;
var yay = new Audio('yay.mp3')
var dance = new Audio('dance.mp3')
var collecton = [];
var pack = [];
// var pokemonCardApi = "https://api.pokemontcg.io/v1/cards?setCode=base1"
var  common = [
    /*24 Common Pokemon*/
    /*pidgey*/ "https://cdn.bulbagarden.net/upload/thumb/5/58/PidgeyBaseSet57.jpg/180px-PidgeyBaseSet57.jpg",
    /*caterpie */"https://cdn.bulbagarden.net/upload/thumb/9/9f/CaterpieBaseSet45.jpg/180px-CaterpieBaseSet45.jpg",
    /*ponyta */"https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/42405_200w.jpg",
    /*vulpix */"https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/42413_200w.jpg",
    /*Weedle */"https://cdn.bulbagarden.net/upload/thumb/b/b0/WeedleEvolutions5.jpg/270px-WeedleEvolutions5.jpg",
    /*voltorb */"https://cdn.bulbagarden.net/upload/thumb/2/2d/VoltorbBaseSet67.jpg/270px-VoltorbBaseSet67.jpg",
    /*Tangela */"https://cdn.bulbagarden.net/upload/thumb/0/03/TangelaBaseSet66.jpg/270px-TangelaBaseSet66.jpg",
    /*Staryu */"https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/42413_200w.jpg",
    /*Starmie */"https://cdn.bulbagarden.net/upload/thumb/8/8e/StarmieBaseSet64.jpg/270px-StarmieBaseSet64.jpg",
    /*squirtle */"https://cdn.bulbagarden.net/upload/thumb/7/74/SquirtleBaseSet63.jpg/270px-SquirtleBaseSet63.jpg",
    /*sandshrew */"https://cdn.bulbagarden.net/upload/thumb/f/f5/SandshrewBaseSet62.jpg/270px-SandshrewBaseSet62.jpg",
    /*Rattata */"https://cdn.bulbagarden.net/upload/thumb/7/70/RattataBaseSet61.jpg/270px-RattataBaseSet61.jpg",
    /*poliwag */"https://cdn.bulbagarden.net/upload/7/79/PoliwagBaseSet59.jpg",
    /*Pikachu*/"https://cdn.bulbagarden.net/upload/thumb/7/78/PikachuBaseSet58.png/180px-PikachuBaseSet58.png",
    /*Onix*/"https://cdn.bulbagarden.net/upload/thumb/1/11/OnixBaseSet56.jpg/180px-OnixBaseSet56.jpg",
    /*Metapod*/"https://cdn.bulbagarden.net/upload/thumb/c/cb/MetapodBaseSet54.jpg/180px-MetapodBaseSet54.jpg",
    /*Magnemite*/"https://cdn.bulbagarden.net/upload/thumb/3/3b/MagnemiteBaseSet53.jpg/180px-MagnemiteBaseSet53.jpg",
    /*machop*/"https://cdn.bulbagarden.net/upload/thumb/e/e7/MachopBaseSet52.jpg/180px-MachopBaseSet52.jpg",
    /*koffing*/"https://cdn.bulbagarden.net/upload/thumb/9/96/KoffingBaseSet51.jpg/180px-KoffingBaseSet51.jpg",
    /*gastly*/"https://cdn.bulbagarden.net/upload/thumb/6/63/GastlyBaseSet50.jpg/180px-GastlyBaseSet50.jpg",
    /*drowzee*/"https://cdn.bulbagarden.net/upload/thumb/a/a1/DrowzeeBaseSet49.jpg/180px-DrowzeeBaseSet49.jpg",
    /*Doduo*/"https://cdn.bulbagarden.net/upload/thumb/6/6e/DoduoBaseSet48.jpg/180px-DoduoBaseSet48.jpg",
    /*Bulbasaur*/"https://cdn.bulbagarden.net/upload/thumb/2/2d/DiglettBaseSet47.jpg/180px-DiglettBaseSet47.jpg",
    /*Abra*/"https://cdn.bulbagarden.net/upload/thumb/b/b2/BulbasaurBaseSet44.jpg/180px-BulbasaurBaseSet44.jpg",
    
    
]
var uncommon = [
    /* 20 Uncommon Pokemon */
    /*Wartortle*/ "https://cdn.bulbagarden.net/upload/thumb/6/64/WartortleBaseSet42.jpg/270px-WartortleBaseSet42.jpg",
    /*Seel*/ "https://cdn.bulbagarden.net/upload/thumb/8/8a/SeelBaseSet41.jpg/270px-SeelBaseSet41.jpg",
    /*Raticate*/ "https://cdn.bulbagarden.net/upload/thumb/c/cb/RaticateBaseSet40.jpg/270px-RaticateBaseSet40.jpg",
    /*Porygon*/ "https://cdn.bulbagarden.net/upload/thumb/6/66/PorygonBaseSet39.jpg/270px-PorygonBaseSet39.jpg",
    /*Poliwhirl*/ "https://cdn.bulbagarden.net/upload/thumb/4/46/PoliwhirlBaseSet38.jpg/270px-PoliwhirlBaseSet38.jpg",
    /*Nidorino*/ "https://cdn.bulbagarden.net/upload/thumb/b/b3/NidorinoBaseSet37.jpg/270px-NidorinoBaseSet37.jpg",
    /*Magmar*/ "https://cdn.bulbagarden.net/upload/thumb/9/9f/MagmarBaseSet36.jpg/270px-MagmarBaseSet36.jpg",
    /*Magikarp*/ "https://cdn.bulbagarden.net/upload/7/76/MagikarpBaseSet35.jpg",
    /*Machoke*/ "https://cdn.bulbagarden.net/upload/thumb/e/ef/MachokeBaseSet34.jpg/270px-MachokeBaseSet34.jpg",
    /*Kakuna*/ "https://cdn.bulbagarden.net/upload/thumb/4/40/KakunaBaseSet33.jpg/270px-KakunaBaseSet33.jpg",
    /*Kadabra*/ "https://cdn.bulbagarden.net/upload/thumb/c/ce/KadabraBaseSet32.jpg/270px-KadabraBaseSet32.jpg",
    /*Jynx*/ "https://cdn.bulbagarden.net/upload/thumb/5/5d/JynxBaseSet31.jpg/270px-JynxBaseSet31.jpg",
    /*Ivysaur*/ "https://cdn.bulbagarden.net/upload/thumb/b/b4/IvysaurBaseSet30.jpg/270px-IvysaurBaseSet30.jpg",
    /*Haunter*/ "https://cdn.bulbagarden.net/upload/thumb/9/9b/HaunterBaseSet29.jpg/270px-HaunterBaseSet29.jpg",
    /*Growlithe*/ "https://cdn.bulbagarden.net/upload/thumb/b/b1/GrowlitheBaseSet28.jpg/270px-GrowlitheBaseSet28.jpg",
    /*Farfetch'd*/ "https://cdn.bulbagarden.net/upload/4/45/FarfetchdBaseSet27.jpg",
    /*Dratina*/ "https://cdn.bulbagarden.net/upload/thumb/8/84/DratiniBaseSet26.jpg/270px-DratiniBaseSet26.jpg",
    /*Dewgong*/ "https://cdn.bulbagarden.net/upload/thumb/d/dc/DewgongBaseSet25.jpg/270px-DewgongBaseSet25.jpg",
    /*Charmeleon*/ "https://cdn.bulbagarden.net/upload/9/99/CharmeleonBaseSet24.jpg",
    /*Arcanine*/ "https://cdn.bulbagarden.net/upload/thumb/4/48/ArcanineBaseSet23.jpg/270px-ArcanineBaseSet23.jpg",

]
var rare = [
    /* 6 rare Pokemon */
    /*Dugtrio*/
    "https://cdn.bulbagarden.net/upload/thumb/3/35/DugtrioBaseSet19.jpg/180px-DugtrioBaseSet19.jpg",
    /*Electrode*/
    "https://cdn.bulbagarden.net/upload/thumb/e/e7/ElectrodeBaseSet21.jpg/180px-ElectrodeBaseSet21.jpg",
    /*Electabuzz*/
    "https://cdn.bulbagarden.net/upload/2/21/021276_P_EREBU.jpg",    
    /*Dragonair*/
    "https://cdn.bulbagarden.net/upload/thumb/c/c9/DragonairBaseSet18.jpg/180px-DragonairBaseSet18.jpg",
    /*Pidgeotto*/
    "https://cdn.bulbagarden.net/upload/thumb/3/3e/PidgeottoBaseSet22.jpg/180px-PidgeottoBaseSet22.jpg",
    /*Beedrill*/ "https://cdn.bulbagarden.net/upload/thumb/7/7f/BeedrillBaseSet17.jpg/180px-BeedrillBaseSet17.jpg",
  
]
var ultraRare = [    
    /* 15 Ultra Rare Pokemon */
    /*Alakazam */
    "https://cdn.bulbagarden.net/upload/9/94/AlakazamBaseSet1.jpg",
    /*Charizard */
    "https://cdn.bulbagarden.net/upload/thumb/e/ef/CharizardBestCDPromo.jpg/180px-CharizardBestCDPromo.jpg",        
    /*Mewtwo */
    "https://cdn.bulbagarden.net/upload/a/a4/VenusaurBaseSet15.jpg",
    /*Gyrados */
    "https://cdn.bulbagarden.net/upload/thumb/3/3d/GyaradosBaseSet6.jpg/270px-GyaradosBaseSet6.jpg",
    /*Blastoise */
    "https://cdn.bulbagarden.net/upload/thumb/a/a5/BlastoiseBaseSet2.jpg/270px-BlastoiseBaseSet2.jpg",
    /*Venusaur */
    "https://cdn.bulbagarden.net/upload/a/a4/VenusaurBaseSet15.jpg",
    /*Zapdos */
    "https://cdn.bulbagarden.net/upload/thumb/7/78/ZapdosBaseSet16.jpg/180px-ZapdosBaseSet16.jpg",
    /*Chansey */
    "https://cdn.bulbagarden.net/upload/thumb/f/fc/ChanseyBaseSet3.jpg/300px-ChanseyBaseSet3.jpg",
    /*Clefairy */
    "https://cdn.bulbagarden.net/upload/thumb/7/7f/ClefairyBaseSet5.jpg/270px-ClefairyBaseSet5.jpg",
    /*Hitmonchan */
    "https://cdn.bulbagarden.net/upload/thumb/2/26/HitmonchanBaseSet7.jpg/200px-HitmonchanBaseSet7.jpg",
    /*Machamp*/
    "https://cdn.bulbagarden.net/upload/thumb/2/22/MachampBaseSet8.jpg/180px-MachampBaseSet8.jpg",
    /*Magneton*/
    "https://cdn.bulbagarden.net/upload/thumb/b/b7/MagnetonBaseSet9.jpg/180px-MagnetonBaseSet9.jpg",
    /*Nidoking*/
    "https://cdn.bulbagarden.net/upload/thumb/f/f8/NidokingBaseSet11.jpg/180px-NidokingBaseSet11.jpg",
    /*Ninetales*/
    "https://cdn.bulbagarden.net/upload/thumb/8/8b/NinetalesBaseSet12.jpg/180px-NinetalesBaseSet12.jpg",
    /*Poliwrath */
    "https://cdn.bulbagarden.net/upload/thumb/b/b2/PoliwrathBaseSet13.jpg/180px-PoliwrathBaseSet13.jpg",
    /*Raichu */
    "https://cdn.bulbagarden.net/upload/thumb/9/90/RaichuBaseSet14.jpg/180px-RaichuBaseSet14.jpg"    
]

const addCoins = () => {
    coinAmount = document.getElementById("coins");
    coinAmount.innerHTML = coins;
    coins++  
    }



    

const coinTimer = () => {
    window.setInterval(addCoins, 3000);
  
}

const pokemonCardCommon = () => {
    let i = Math.floor(Math.random() * 24)
    var src = common[i];
    show_image(common[i], 200,320, "pokemon");
}

const pokemonCardUncommon = () => {
    let i = Math.floor(Math.random() * 20)
    var src = uncommon[i];
    show_image(uncommon[i], 200,320, "pokemon");
}

const pokemonCardRare = () => {
    let i = Math.floor(Math.random() * 6)
    var src = rare[i];
    show_image(rare[i], 200,320, "pokemon");
}

const pokemonCardUltraRare = () => {
    let i = Math.floor(Math.random() * 16)
    var src = ultraRare[i];
    show_image(ultraRare[i], 200,320, "pokemon");
}


const show_image = (src, width, height, alt) => {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    document.body.appendChild(img).scrollIntoView();
}

const openPack = () => {
    document.getElementById('cardAmount').innerHTML = cardAmount;
    if (cardAmount != 0) {
        for (let i = 0; i < 11; i++) {
            randomNumber = Math.floor(Math.random() * 100)
            probs();
            cardAmount--

            console.log(cardAmount)
            break;
        }
    }   else alert("No cards Left. Buy more!")

    

    console.log("button pressed")
}

const buyPack = () => {
    if (coins >= 20) {
        coins -= 20;
        document.getElementById("cardAmount")
        cardAmount += 12
    } else {
        alert("You do not have enough money. Why dont you wait and come back later.")
    }


}
const probs = () => {
    if (randomNumber <= 60) {
        pokemonCardCommon()


    }  else if (randomNumber > 60 && randomNumber < 80) {
       // alert("Uncommon")
        pokemonCardUncommon()
    } else if  (randomNumber > 80 && randomNumber < 98) {
       // alert("rare")
        pokemonCardRare()
        confetti({
            particleCount: 1000,
            spread: 1500,
            origin: {
                y: .5
            }
        });
    } else {
       // alert("ultra Rare")
        pokemonCardUltraRare()
        dance.play();
        confetti({
            particleCount: 2000,
            angle: 60,
            spread: 55,
            origin: {
                x: 0
            },
          });
          confetti({
            particleCount: 2000,
            angle: 120,
            spread: 55,
            origin: {
                x: 1
            },            
          });
        
    }   

}

coinTimer();
openButton = document.getElementById('open-pack')

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("pokemart");
document.getElementById("pokemonCenterModal")

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

pokemonCenterButton = () => {
    alert("Coming soon..");
}


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



