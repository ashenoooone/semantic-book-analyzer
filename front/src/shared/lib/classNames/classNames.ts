export type Mods = Record<string, string | boolean | undefined>;

export function classNames(
	cls?: string,
	mods: Mods = {},
	additional: Array<string | undefined> = []
) {
	return [
		cls || '',
		...Object.entries(mods)
			.filter(([_, flag]) => Boolean(flag))
			.map(([className]) => className || ''),
		...additional
	].join(' ');
}
