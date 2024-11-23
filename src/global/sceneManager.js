export function deleteScenes() {
	let scenes = document.getElementsByClassName('scene');
    while(scenes.length > 0) scenes[0].parentNode.removeChild(scenes[0]);
}

