import { Instagram, PanelTop, Github, Rss } from 'lucide-svelte';

// 그룹 정의
export const groups = {
	wooncloud: {
		id: 'wooncloud',
		name: '운구름',
		description: '개인 소셜 미디어 및 개발 관련'
	},
	project: {
		id: 'project',
		name: '프로젝트',
		description: '개발 프로젝트 및 도구'
	},
	dosiowl: {
		id: 'dosiowl',
		name: '도시부엉',
		description: '도시부엉 프로젝트 관련'
	}
};

// 링크 데이터
export const links = [
	{
		id: 'blog',
		url: 'https://wooncloud.tistory.com',
		icon: Rss,
		label: '블로그 (blog)',
		ariaLabel: '운구름의 개발 블로그로 이동',
		group: 'wooncloud',
	},
	{
		id: 'github',
		url: 'https://github.com/wooncloud',
		icon: Github,
		label: '깃허브 (github)',
		ariaLabel: '운구름의 GitHub 프로필로 이동',
		group: 'wooncloud',
	},
	{
		id: 'instagram',
		url: 'https://instagram.com/_wooncloud',
		icon: Instagram,
		label: '인스타 (instagram)',
		ariaLabel: '운구름의 개인 Instagram으로 이동',
		group: 'wooncloud',
	},
	{
		id: 'char-analyzer',
		url: 'https://wooncloud.github.io/char_analyzer/',
		icon: PanelTop,
		label: 'Character Unicode/ASCII Analyzer',
		ariaLabel: 'Character Unicode/ASCII Analyzer로 이동',
		group: 'project',
	},
	{
		id: 'dosiowl-instagram',
		url: 'https://instagram.com/dosiowl_official',
		icon: Instagram,
		label: '도시부엉 인스타 (dosiowl instagram)',
		ariaLabel: '도시부엉 공식 Instagram으로 이동',
		group: 'dosiowl',
	},
	{
		id: 'dosiowl-littly',
		url: 'https://litt.ly/dosiowl',
		icon: PanelTop,
		label: '도시부엉 리틀리 (dosiowl littly)',
		ariaLabel: '도시부엉 Littly 프로필로 이동',
		group: 'dosiowl',
	}
];

// 그룹별로 링크를 정리하는 헬퍼 함수
export function getLinksByGroup() {
	const groupedLinks = {};
	
	// 모든 그룹 초기화
	Object.keys(groups).forEach(groupId => {
		groupedLinks[groupId] = {
			...groups[groupId],
			links: []
		};
	});
	
	// 링크를 그룹별로 분류
	links.forEach(link => {
		if (groupedLinks[link.group]) {
			groupedLinks[link.group].links.push(link);
		}
	});
	
	// 빈 그룹 제거
	Object.keys(groupedLinks).forEach(groupId => {
		if (groupedLinks[groupId].links.length === 0) {
			delete groupedLinks[groupId];
		}
	});
	
	return groupedLinks;
}