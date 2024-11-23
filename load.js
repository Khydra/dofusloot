import {loadMenuScene} from './src/menu/menu.js';
import {stashData} from './src/dofusloot/player/stashData.js';
import {familiarData} from './src/dofusloot/player/familiarData.js';
import {characterData} from './src/dofusloot/player/characterData.js';
import {summonData} from './src/dofusloot/player/summonData.js';
import {itemData} from './src/dofusloot/inventory/itemData.js';
import {enemyData} from './src/dofusloot/enemy/enemyData.js';
import {statusData} from './src/dofusloot/enemy/statusData.js';
import {mapData} from './src/dofusloot/location/mapData.js';
import {spellData} from './src/dofusloot/player/spellData.js';

const assets = [];


//iconos
Object.keys(spellData).forEach((key)=>{assets.push(spellData[key].image)})
Object.keys(stashData).forEach((key)=>{assets.push(stashData[key].image)})
Object.keys(mapData).forEach((key)=>{assets.push(mapData[key].image)})
Object.keys(summonData).forEach((key)=>{assets.push(summonData[key].image)})
Object.keys(enemyData).forEach((key)=>{assets.push(enemyData[key].img)})
Object.keys(statusData).forEach((key)=>{assets.push(statusData[key].image)})
Object.keys(itemData).forEach((key)=>{assets.push(itemData[key].img)})
Object.keys(familiarData).forEach((key)=>{
    assets.push(familiarData[key].portrait);
    assets.push(familiarData[key].itemImg);
})
Object.keys(characterData).forEach((key)=>{
    assets.push(characterData[key].portrait)
    assets.push(characterData[key].image)
})

function preloadAssets(assetList, onProgress, onComplete) {
    let loadedAssets = 0;
    const totalAssets = assetList.length;
    
    assetList.forEach(asset => {
        const img = new Image();
        img.src = asset;
        
        img.onload = () => {
            loadedAssets++;
            onProgress(loadedAssets / totalAssets); 
            if (loadedAssets === totalAssets) {
                onComplete(); 
            }
        };

        img.onerror = () => {
            console.error(`Error cargando el asset: ${asset}`);
        };
    });
}

function showLoadingScreen() {
    const loadingScreen = document.createElement("div");
    loadingScreen.id = "loadingScreen";
    loadingScreen.style.position = "fixed";
    loadingScreen.style.top = "0";
    loadingScreen.style.left = "0";
    loadingScreen.style.width = "100%";
    loadingScreen.style.height = "100%";
    loadingScreen.style.backgroundColor = "#000";
    loadingScreen.style.display = "flex";
    loadingScreen.style.justifyContent = "center";
    loadingScreen.style.alignItems = "center";
    loadingScreen.style.color = "#fff";
    loadingScreen.innerHTML = "<p>Cargando... 0%</p>";
    document.getElementById('app').appendChild(loadingScreen);
    return loadingScreen;
}

function updateLoadingScreen(screen, progress) {
    screen.innerHTML = `<p>Cargando... ${Math.floor(progress * 100)}%</p>`;
}

function hideLoadingScreen(screen) {
   document.getElementById('app').removeChild(screen);
}

export function loadGameAssets() {
    const loadingScreen = showLoadingScreen();
    
    preloadAssets(assets, 
        progress => updateLoadingScreen(loadingScreen, progress), 
        () => {
            hideLoadingScreen(loadingScreen);
            loadMenuScene();
        }
    );
}
