import {zoneData} from './zoneData.js';

export const mapData = {
	astrub: {
		id: 0,
		name: 'Astrub',
		image: './res/image/map/astrub.png',
		zone: [
			[zoneData['astrub']], 
			[zoneData['alrededoresAstrub'], zoneData['alcantarillasAstrub']], 
			[zoneData['bosqueAstrub'], zoneData['rinconTofu']], 
			[zoneData['calaAstrub']], 
			[zoneData['tainela'], zoneData['llanuraEscarahojas']], 
			[zoneData['cementerioAstrub'], zoneData['mansionEncantada'], zoneData['cementerioAmakna'], zoneData['campamentoBandidos']], 
			[zoneData['peninsulaGelatinas'], zoneData['sierraCania']],
			[zoneData['montanaCrujidores'], zoneData['campamentoBwork'], zoneData['cuevaLarvesca']], 
			[zoneData['territorioAncestral'], zoneData['antroDragocerdo'], zoneData['cuevaMaxilubo']], 
			[zoneData['alcantarillasBonta'], zoneData['alcantarillasBrakmar'], zoneData['bibliotecaCuerbok']],
			[zoneData['tofullineroReal'], zoneData['guaridaSkonk']],
			[zoneData['bosqueOscuro']]
		],
		unlocked: true,
	},
	madrestam: {
		id: 1,
		name: 'Madrestam',
		image: './res/image/map/madrestam.png',
		unlocked: false
	},
	pandala: {
		id: 2,
		name: 'Pandala',
		image: './res/image/map/pandala.png',
		unlocked: false
	},
	otomai: {
		id: 3,
		name: 'Otomai',
		image: './res/image/map/otomai.png',
		unlocked: false
	},
	frigost: {
		id: 4,
		name: 'Frigost',
		image: './res/image/map/frigost.png',
		unlocked: false
	},
}