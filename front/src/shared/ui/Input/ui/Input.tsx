import React, {
	InputHTMLAttributes,
	memo,
	useCallback,
	useEffect,
	useRef
} from 'react';
import cls from './Input.module.scss';
import { classNames } from '~/shared/lib/classNames';

type HTMLInputType = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'onChange' | 'value' | 'className'
>;

interface InputProps extends HTMLInputType {
	className?: string;
	value?: string | number;
	onChange?: (val: string) => void;
	label?: string;
	autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
	const {
		className = '',
		type,
		value,
		onChange,
		label,
		autofocus,
		...other
	} = props;

	const input = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (autofocus) {
			input.current?.focus();
		}
	}, [autofocus]);

	const onInputChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			onChange?.(event.target.value);
		},
		[onChange]
	);

	return (
		<div className={classNames(cls.InputWrapper, {}, [className])}>
			{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
			<label className={cls.label}>
				{label && label}
				<input
					ref={input}
					className={cls.Input}
					type={type}
					value={value}
					onChange={onInputChange}
					{...other}
				/>
			</label>
		</div>
	);
});
