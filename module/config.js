/**
 * The T2K4E Configuration file.
 * @constant
 */
export const T2K4E = {};

T2K4E.ASCII = `_________________________________________
                                         
████████╗██████╗ ██╗  ██╗██╗  ██╗███████╗
╚══██╔══╝╚════██╗██║ ██╔╝██║  ██║██╔════╝
   ██║    █████╔╝█████╔╝ ███████║█████╗  
   ██║   ██╔═══╝ ██╔═██╗ ╚════██║██╔══╝  
   ██║   ███████╗██║  ██╗     ██║███████╗
   ╚═╝   ╚══════╝╚═╝  ╚═╝     ╚═╝╚══════╝
_________________________________________`;

T2K4E.attributes = {
	str: 'T2KLANG.AttributeNames.str',
	agl: 'T2KLANG.AttributeNames.agl',
	int: 'T2KLANG.AttributeNames.int',
	emp: 'T2KLANG.AttributeNames.emp',
};

T2K4E.skills = {
	none: 'T2KLANG.SkillNames.none',
	heavyWeapons: 'T2KLANG.SkillNames.heavyWeapons',
	closeCombat: 'T2KLANG.SkillNames.closeCombat',
	stamina: 'T2KLANG.SkillNames.stamina',
	driving: 'T2KLANG.SkillNames.driving',
	mobility: 'T2KLANG.SkillNames.mobility',
	rangedCombat: 'T2KLANG.SkillNames.rangedCombat',
	recon: 'T2KLANG.SkillNames.recon',
	survival: 'T2KLANG.SkillNames.survival',
	tech: 'T2KLANG.SkillNames.tech',
	command: 'T2KLANG.SkillNames.command',
	persuasion: 'T2KLANG.SkillNames.persuasion',
	medicalAid: 'T2KLANG.SkillNames.medicalAid',
};

T2K4E.skillsMap = {
	none: null,
	heavyWeapons: 'str',
	closeCombat: 'str',
	stamina: 'str',
	driving: 'agl',
	mobility: 'agl',
	rangedCombat: 'agl',
	recon: 'int',
	survival: 'int',
	tech: 'int',
	command: 'emp',
	persuasion: 'emp',
	medicalAid: 'emp',
};

T2K4E.dieSizes = [-1, 12, 10, 8, 6, 0];
T2K4E.dieScores = ['–', 'A', 'B', 'C', 'D', 'F'];
T2K4E.dieSizesMap = new Map(T2K4E.dieScores.map((x, i) => [x, T2K4E.dieSizes[i]]));

T2K4E.armorLocationIcons = {
	head: '<i class="fas fa-hard-hat"></i>',
	arms: '<i class="fas fa-hand-paper"></i>',
	torso: '<i class="fas fa-tshirt"></i>',
	legs: '<i class="fas fa-socks"></i>',
};

T2K4E.diceIcons = {
	base: {
		d12: [
			null,
			't2k-a1.png',
			't2k-a0.png',
			't2k-a0.png',
			't2k-a0.png',
			't2k-a0.png',
			't2k-a6.png',
			't2k-a6.png',
			't2k-a6.png',
			't2k-a6.png',
			't2k-a10.png',
			't2k-a10.png',
			't2k-a10.png',
		],
		d10: [
			null,
			't2k-b1.png',
			't2k-b0.png',
			't2k-b0.png',
			't2k-b0.png',
			't2k-b0.png',
			't2k-b6.png',
			't2k-b6.png',
			't2k-b6.png',
			't2k-b6.png',
			't2k-b10.png',
		],
		d8: [
			null,
			't2k-c1.png',
			't2k-c0.png',
			't2k-c0.png',
			't2k-c0.png',
			't2k-c0.png',
			't2k-c6.png',
			't2k-c6.png',
			't2k-c6.png',
		],
		d6: [
			null,
			't2k-d1.png',
			't2k-d0.png',
			't2k-d0.png',
			't2k-d0.png',
			't2k-d0.png',
			't2k-d6.png',
		],
	},
	ammo: {
		d6: [
			null,
			't2k-g1.png',
			't2k-g0.png',
			't2k-g0.png',
			't2k-g0.png',
			't2k-g0.png',
			't2k-g6.png',
		],
	},
};

T2K4E.ranges = [
	'T2KLANG.Ranges.close',
	'T2KLANG.Ranges.short',
	'T2KLANG.Ranges.medium',
	'T2KLANG.Ranges.long',
	'T2KLANG.Ranges.extreme',
];