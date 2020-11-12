type ClassNamesCombinatorInput = string | string[] | Record<string, unknown> | undefined;

export const combineClassNames = (...props: ClassNamesCombinatorInput[]): string => {
	let classNames: string[] = [];

	props.forEach((p) => {
		if (typeof p === "string") {
			classNames.push(p);
		} else if (Array.isArray(p)) {
			classNames = [...classNames, ...p];
		} else if (typeof p === "object") {
			Object.keys(p).forEach((key) => {
				if (p[key]) {
					classNames.push(key);
				}
			});
		}
	});

	return classNames.join(" ");
};
