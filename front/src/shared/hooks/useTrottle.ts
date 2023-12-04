import { useCallback, useRef } from 'react';

export const useTrottle = (
	callback: (...args: any[]) => void,
	time: number
) => {
	const timerRef = useRef(false);
	return useCallback(
		(...args: any[]) => {
			if (!timerRef.current) {
				callback(...args);
				timerRef.current = true;
				setTimeout(() => {
					timerRef.current = false;
				}, time);
			}
		},
		[callback, time]
	);
};
