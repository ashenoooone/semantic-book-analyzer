import { MutableRefObject, useCallback, useRef } from 'react';

export const useDebounce = (
	callback: (...args: any[]) => void,
	time: number
) => {
	const timerRef = useRef() as MutableRefObject<any>;
	return useCallback(
		(...args: any[]) => {
			if (timerRef.current) {
				clearTimeout(timerRef.current);
			}
			timerRef.current = setTimeout(() => {
				callback(...args);
			}, time);
		},
		[callback, time]
	);
};
