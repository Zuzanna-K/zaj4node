const but1 = document.getElementById("f1");
const but2 = document.getElementById("f2");
const but3 = document.getElementById("f3");
const but4 = document.getElementById("f4");
const but5 = document.getElementById("f5");


let cakeQuantity = 0;
let cakePerSecond = 0;
let cakePerClick = 1;

const cakeQuantityDisplay= document.getElementById("suma");
const cakePerSecondDisplay= document.getElementById("kremowka_ps");
const cakePerClickDisplay= document.getElementById("Kremowka_per_click");


const mainKremowka = document.querySelector("img");

function updateDisplay()
{
    cakeQuantityDisplay.innerHTML = "Ilość kremówek: " + cakeQuantity.toFixed(1);
    cakePerSecondDisplay.innerHTML = "Kremówki na sekundę: " + cakePerSecond.toFixed(1);
    cakePerClickDisplay.innerHTML = "Kremówki na kliknięcie: " + cakePerClick.toFixed(1);

    but1.innerHTML = ((levelsOfUpgrades[0] + 1) * upgrades[0]).toFixed(2); 
    but2.innerHTML = ((levelsOfUpgrades[1] + 1) * upgrades[1]).toFixed(2); 
    but3.innerHTML = ((levelsOfUpgrades[2] + 1) * upgrades[2]).toFixed(2); 
    but4.innerHTML = ((levelsOfUpgrades[3] + 1) * upgrades[3]).toFixed(2); 
    but5.innerHTML = ((levelsOfUpgrades[4] + 1) * upgrades[4]).toFixed(2); 


    cost1.innerHTML =(costsOfUpgrades[0]).toFixed(1) + " kremówek";
    cost2.innerHTML =(costsOfUpgrades[1]).toFixed(1) + " kremówek";
    cost3.innerHTML =(costsOfUpgrades[2]).toFixed(1) + " kremówek";
    cost4.innerHTML =(costsOfUpgrades[3]).toFixed(1) + " kremówek";
    cost5.innerHTML =(costsOfUpgrades[4]).toFixed(1) + " kremówek";

    level1.innerHTML = levelsOfUpgrades[0] + " lvl";
    level2.innerHTML = levelsOfUpgrades[1] + " lvl";
    level3.innerHTML = levelsOfUpgrades[2] + " lvl";
    level4.innerHTML = levelsOfUpgrades[3] + " lvl";
    level5.innerHTML = levelsOfUpgrades[4] + " lvl";

    if (cakeQuantity >= costsOfUpgrades[0])
    {
        but1.style.background = '#d4bbdd';
    }
    else
    {
        but1.style.background = '#f3e5c3';
    }

    
    if (cakeQuantity >= costsOfUpgrades[1])
    {
        but2.style.background = '#d4bbdd';
    }
    else
    {
        but2.style.background = '#f3e5c3';
    }

    
    if (cakeQuantity >= costsOfUpgrades[2])
    {
        but3.style.background = 'd4bbdd';
    }
    else
    {
        but3.style.background = '#f3e5c3';
    }


    
    if (cakeQuantity >= costsOfUpgrades[3])
    {
        but4.style.background = 'd4bbdd';
    }
    else
    {
        but4.style.background = '#f3e5c3';
    }

    
    if (cakeQuantity >= costsOfUpgrades[4])
    {
        but5.style.background = 'd4bbdd';
    }
    else
    {
        but5.style.background = '#f3e5c3';
    }

}

function updateKremowki()
{
    cakeQuantity += cakePerSecond;
}

mainKremowka.addEventListener ('click', () =>
{
    cakeQuantity+=cakePerClick;
    updateDisplay();
});

//Upgrades

let costsOfUpgrades = [10,100,1000,5000,100000];
let upgrades = [0.1,1,5,10,100];
let levelsOfUpgrades= [0,0,0,0,0];

const cost1 = document.getElementById("koszt1");
const cost2 = document.getElementById("koszt2");
const cost3 = document.getElementById("koszt3");
const cost4 = document.getElementById("koszt4");
const cost5 = document.getElementById("koszt5");


const level1 = document.getElementById("poziom1");
const level2 = document.getElementById("poziom2");
const level3 = document.getElementById("poziom3");
const level4 = document.getElementById("poziom4");
const level5 = document.getElementById("poziom5");


but1.addEventListener('click', () => {
    if (cakeQuantity < costsOfUpgrades[0]) {
        return;
    }
    levelsOfUpgrades[0]++;
    cakePerSecond += upgrades[0]*levelsOfUpgrades[0];
    cakeQuantity -= costsOfUpgrades[0];
    costsOfUpgrades[0]*= 1.3; 
    
});

but2.addEventListener('click', () => {
    if (cakeQuantity < costsOfUpgrades[1]) {
        return;
    }
    levelsOfUpgrades[1]++;
    cakePerSecond += upgrades[1]*levelsOfUpgrades[1];
    cakeQuantity -= costsOfUpgrades[1];
    costsOfUpgrades[1]*= 1.3; 
    
});

but3.addEventListener('click', () => {
    if (cakeQuantity < costsOfUpgrades[2]) {
        return;
    }
    levelsOfUpgrades[2]++;
    cakePerSecond += upgrades[2]*levelsOfUpgrades[2];
    cakeQuantity -= costsOfUpgrades[2];
    costsOfUpgrades[2]*= 1.3; 
    
});

but4.addEventListener('click', () => {
    if (cakeQuantity < costsOfUpgrades[3]) {
        return;
    }
    levelsOfUpgrades[3]++;
    cakePerSecond += upgrades[3]*levelsOfUpgrades[3];
    cakeQuantity -= costsOfUpgrades[3];
    costsOfUpgrades[3]*= 1.3; 
    
});

but5.addEventListener('click', () => {
    if (cakeQuantity < costsOfUpgrades[4]) {
        return;
    }
    levelsOfUpgrades[4]++;
    cakePerSecond += upgrades[4]*levelsOfUpgrades[4];
    cakeQuantity -= costsOfUpgrades[4];
    costsOfUpgrades[4]*= 1.3; 
    
});

setInterval(() => {
    updateDisplay();
    updateKremowki();
}, 1000);


updateDisplay();

