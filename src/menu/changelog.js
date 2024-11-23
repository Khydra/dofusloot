import {deleteScenes} from '../global/sceneManager.js';
import {loadMenuScene} from './menu.js';
import {playSound} from '../data/audio.js';

const scene = document.createElement('div');
scene.className = 'scene menu-scene';

const patchContainer = document.createElement('div');
patchContainer.className = 'menu-container menu-changelog-patch-container';
scene.appendChild(patchContainer);

const patchNotesContainer = document.createElement('div');
patchNotesContainer.className = 'menu-container menu-changelog-patch-notes-container';
scene.appendChild(patchNotesContainer);

const patchNotesText = document.createElement('div');
patchNotesText.className = 'menu-changelog-patch-notes-text';
patchNotesContainer.appendChild(patchNotesText);

const prevContainer = document.createElement('div');
prevContainer.className = 'menu-container menu-changelog-prev-container';
prevContainer.innerHTML = '◄';

prevContainer.addEventListener('mouseover', () => playSound('hover', 'ui'))
prevContainer.addEventListener('click', () => changePatch(1));
scene.appendChild(prevContainer);

const nextContainer = document.createElement('div');
nextContainer.className = 'menu-container menu-changelog-next-container';
nextContainer.innerHTML = '►';
nextContainer.addEventListener('mouseover', () => playSound('hover', 'ui'))
nextContainer.addEventListener('click', () => changePatch(-1));
scene.appendChild(nextContainer);

const exitContainer = document.createElement('div');
exitContainer.className = 'menu-container menu-return-container';
exitContainer.innerHTML = 'VOLVER';
scene.appendChild(exitContainer);

export function loadChangelogScene() {
	deleteScenes();
	document.getElementById('app').appendChild(scene);

	patchSelected = Object.keys(clData).length-1;
	showPatch(patchSelected);
}

function showPatch() {
	prevContainer.className = 'menu-container menu-changelog-prev-container';
	nextContainer.className = 'menu-container menu-changelog-next-container';
	if (patchSelected == Object.keys(clData).length-1) prevContainer.className = 'menu-container menu-changelog-prev-container disabled';
	else if (patchSelected == 0) nextContainer.className = 'menu-container menu-changelog-next-container disabled';

	patchContainer.innerHTML = clData[patchSelected].tittle;
	patchNotesText.innerHTML = clData[patchSelected].text;
}

function changePatch(v) {
	playSound('click', 'ui')
	patchSelected += v;
	showPatch()
}

exitContainer.addEventListener('click', loadMenuScene);
exitContainer.addEventListener('mouseover', ()=> playSound('click2','ui'));

let patchSelected;

const clData = {
	
	6: {
		tittle: `NOTAS DEL PARCHE `,
		text: `
			<span class="cg-tittle">MAPAS</span><br>
			5 Zonas implementadas dentro de Astrub.<br>
			<br>
			<span class="cg-tittle">HECHIZOS</span><br>
			La erosión ahora reduce la vida máxima aunque el enemigo tenga armadura.
			<br>
			<span class="cg-tittle">OBJETOS</span><br>
			2 Nuevos huecos para objetos.<br>
			Ahora se pueden llevar 2 anillos.<br>
			Nuevo tipo de objeto: Consumibles.<br>
			Nuevo tipo de objeto: Utilizables.<br>
			4 Objetos utilizables nuevos.<br>
			13 Objetos consumibles nuevos.<br>
			61 Objetos nuevos.<br>
			13 Sets nuevos.<br>
			<br>
			<span class="cg-tittle">ENEMIGOS</span><br>
			21 Enemigos nuevos.<br>
			5 Jefes nuevos.<br>
			<br>
			<span class="cg-tittle">HABILIDADES ENEMIGAS</span><br>
			9 acciones nuevas implementadas.<br>
			<br>
			<span class="cg-tittle">BUGS</span><br>
			Arreglado un bug por el cual no cargaban los logros.<br>
		`
	},
	
	5: {
		tittle: `NOTAS DEL PARCHE 0.1.5 (20/11/2024)`,
		text: `
			<span class="cg-tittle">CLASES</span><br>
			Nuevas clases: Tymador, Zobal y Aniripsa.<br>
			Clases mejoradas: Yopuka y Ocra.<br>
			<br>
			<span class="cg-tittle">HECHIZOS</span><br>
			Nuevos sets de hechizos.<br>
			60 Hechizos añadidos (corresponden a las nuevas clases).<br>
			<br>
			<span class="cg-tittle">OBJETOS</span><br>
			Ahora se pueden vender los objetos.<br>
			Nuevas estadísticas: Reenvío de daños y Daños trampas.<br>
			El set prespic ahora da Reenvío de daños.<br>
			56 Objetos nuevos.<br>
			13 Sets nuevos.<br>
			<br>
			<span class="cg-tittle">MAPAS</span><br>
			Nuevo sistema de bifurcación de caminos.<br>
			12 Zonas implementadas dentro de Astrub.<br>
			<br>
			<span class="cg-tittle">LOGROS</span><br>
			Se ha creado un sistema de logros accesible desde el perfil.<br>
			28 Logros añadidos.<br>
			<br>
			<span class="cg-tittle">ENEMIGOS</span><br>
			48 Enemigos nuevos.<br>
			18 Jefes nuevos.<br>
			Se ha reducido la vida y armadura de varios enemigos.<br>
			<br>
			<span class="cg-tittle">SONIDOS</span><br>
			Se han añadido efectos de sonido a los hechizos.<br>
			Se han añadido efectos de sonido a las acciones enemigas.<br>
			<br>
			<span class="cg-tittle">HECHIZOS</span><br>
			Los hechizos no implementados ya no pueden salir en la bendicion Zurcarak.<br>
			Solucionado error con las curaciones.<br>
			Solucionado error que sucedía al tener daños negativos.<br>
			Solucionado error en el que se podía comprar personajes no implementados.<br>
			<br>
			<span class="cg-tittle">CALIDAD DE VIDA</span><br>
			Ahora se guarda el último personaje, mascota y trofeos jugados.<br>
			Se han implementado atajos de teclado.<br>
			<br>
			<span class="cg-tittle">BUGS</span><br>
			Arreglado un bug en el cual la Bendición Pandawa no daba un escudo.<br>
		`
	},
	4: {
		tittle: `NOTAS DEL PARCHE 0.1.4 (13/11/2024)`,
		text: `
			<span class="cg-tittle">CLASES</span><br>
			Nuevas clases: Sram, Anutrof, Zurcarak y Sadida.<br>
			Se han ajustado las demás clases.<br>
			<br>
			<span class="cg-tittle">HECHIZOS</span><br>
			Nuevos sets de hechizos.<br>
			80 Hechizos añadidos (corresponden a las nuevas clases).<br>
			<br>
			<span class="cg-tittle">INVOCACIONES</span><br>
			Se ha añadido una nueva mecánica de combate: Las invocaciones.<br>
			Algunos personajes cuentan ahora con hechizos para realizar invocaciones.<br>
			<br>
			<span class="cg-tittle">SONIDOS</span><br>
			Se han añadido nuevos sonidos.<br>
			<br>
			<span class="cg-tittle">OPCIONES</span><br>
			Se ha añadido una opción para canjear codigos promocionales.<br>
			<br>
			<span class="cg-tittle">BUGS</span><br>
			Arreglado un bug por el cual no se mostraban las estadísticas de los objetos si tenían demasiadas.<br>
		`
	},
	3: {
		tittle: `NOTAS DEL PARCHE 0.1.3 (6/11/2024)`,
		text: `
			<span class="cg-tittle">CLASES</span><br>
			Nueva clase: Sacrógrito.<br>
			Se han potenciado las clases Yopuka y Ocra.<br>
			<br>
			<span class="cg-tittle">HECHIZOS</span><br>
			Añadido elección entre 2 conjuntos de hechizos antes de empezar la partida.<br>
			20 Hechizos añadidos (corresponden a la nueva clase).<br>
			<br>
			<span class="cg-tittle">ALIJO DE OBJETOS</span><br>
			Nuevo tipo de objeto: Prismaradita.<br>
			9 Prismaraditas intruducidas.<br>
			4 Trofeos medianos introducidos.<br>
			<br>
			<span class="cg-tittle">OBJETOS</span><br>
			80 Objetos nuevos.<br>
			14 Sets nuevos.<br>
			<br>
			<span class="cg-tittle">SONIDOS</span><br>
			Se han añadido sonidos a la tienda e inventario.<br>
			<br>
			<span class="cg-tittle">OPCIONES</span><br>
			Ahora se puede bajar el volumen del juego en opciones.<br>
			Se ha creado un botón para eliminar los datos guardados.<br>
			<br>
			<span class="cg-tittle">OTROS</span><br>
			Se han modificado varios menús.<br>
			Se han modificado archivos de guardados.<br>
			Se han realizados ajustes en la interfaz.<br>
			Se han realizado otros ajustes diversos.<br>
		`
	},
	2: {
		tittle: `NOTAS DEL PARCHE 0.1.2 (29/11/2024)`,
		text: `
			<span class="cg-tittle">TIENDA</span><br>
			Se ha creado una tienda fuera del juego.<br>
			Nueva moneda: Ogrina.<br>
			Las ogrinas se obtienen después de cada partida según el desempeño del jugador.<br>
			Las ogrinas permiten comprar objetos permanentes para facilitar el inicio del juego que pueden ser equipados 
			en el menú de nueva partida.<br>
			<br>
			<span class="cg-tittle">MASCOTAS</span><br>
			Se han intrudicido las mascotas.<br>
			Otorgan estadísticas al derrotar enemigos.<br>
			14 Mascotas introducidas<br>
			<br>
			<span class="cg-tittle">ALIJO DE OBJETOS</span><br>
			Nuevos tipo de objetos: Trofeos y Dofus.<br>
			Otorgan estadísticas fijas.<br>
			20 Dofus intruducidas.<br>
			47 Trofeos introducidos.<br>
			<br>
			<span class="cg-tittle">ENEMIGOS</span><br>
			Ahora algunos enemigos pueden dejar caer objetos si forman parte de su set.<br>
			36 Enemigos nuevos.<br>
			10 Jefes nuevos.<br>
			<br>
			<span class="cg-tittle">OBJETOS</span><br>
			62 Objetos nuevos.<br>
			13 Sets nuevos.<br>
			<br>
			<span class="cg-tittle">MENÚS</span><br>
			Se han creado los menús de Tienda, Perfil y Opciones.<br>
		`
	},
	1: {
		tittle: `NOTAS DEL PARCHE 0.1.1 (22/10/2024)`,
		text: `
			<span class="cg-tittle">JUEGO</span><br>
			Se ha pulido el sistema de gestión de inventario y tienda.<br>
			Se ha modificado la interfaz del chat.<br>
			<br>
			<span class="cg-tittle">OBJETOS EXOMÁGICOS</span><br>
			Se han añadido un tipo nuevo de objetos que pueden dar bonus adicionales.<br>
			Pueden aparecer en la tienda según la Prospección del jugador.<br>
			<br>
			<span class="cg-tittle">BURBUJAS DE INFORMACIÓN</span><br>
			Se ha añadido un sistema de burbujas de información que permiten ver información de objetos y hechizos con 
			pasar el cursor por encima.<br>
			<br>
			<span class="cg-tittle">SISTEMA DE BENDICIONES</span><br>
			Se ha impantado un sistema de bendiciones que otorga ventajas al jugador después de derrotar un jefe.<br>
			20 bendiciones implementadas.
			<br>
			<span class="cg-tittle">CLASES</span><br>
			Nueva clase: Ocra.<br>
			<br>
			<span class="cg-tittle">HECHIZOS</span><br>
			20 Hechizos añadidos (corresponden a la nueva clase).<br>
			<br>
			<span class="cg-tittle">HABILIDADES ENEMIGAS</span><br>
			Se han añadido diversas acciones a los enemigos a parte de atacar y curarse.<br>
			14 acciones nuevas implementadas.<br>
			<br>
		`
	},
	0: {
		tittle: `NOTAS DEL PARCHE 0.1.0 (15/10/2024)`,
		text: `
			<span class="cg-tittle">JUEGO</span><br>
			Se ha creado el sistema principal de juego.<br>
			Se ha creado el sistema de combate principal.<br>
			Se ha creado el sistema de gestión de inventario principal.<br>
			<br>
			<span class="cg-tittle">CLASES</span><br>
			Nueva clase: Yopuka.<br>
			<br>
			<span class="cg-tittle">HECHIZOS</span><br>
			20 Hechizos añadidos (corresponden a la nueva clase).<br>
			<br>
			<span class="cg-tittle">MAPAS</span><br>
			Se ha creado el sistema de mapas y zonas.<br>
			1 Mapa implementado (Astrub).<br>
			9 Zonas implementadas dentro de Astrub.<br>
			<br>
			<span class="cg-tittle">ENEMIGOS</span><br>
			Se han creado los enemigos y sus acciones.<br>
			6 Enemigos implementados.<br>
			1 Jefe implementado.<br>
			2 Acciones creadas: Ataque y curación.<br>
			<br>
			<span class="cg-tittle">OBJETOS</span><br>
			Se ha creado el sistema de objetos y estadísticas.<br>
			38 Objetos implementados.<br>
			<br>
			<span class="cg-tittle">SETS</span><br>
			Se ha creado el sistema de sets y bonificaciones.<br>
			7 Sets implementados.<br>
			<br>
			<span class="cg-tittle">MENÚS</span><br>
			Se han creado los menús de Nueva Partida, Continuar y Changelog.<br>
		`
	}
} 