
export function checkAchievement(bossId) {
	let profile = JSON.parse(window.localStorage.getItem("profile"));

	if (profile.achievement[bossId] != 'completed') {
		profile.achievement[bossId] = 'able';
	}

	window.localStorage.setItem('profile', JSON.stringify(profile));
}