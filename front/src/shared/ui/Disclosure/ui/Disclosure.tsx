import React, { ReactNode } from 'react';
import {
	MdOutlineExpandLess,
	MdOutlineExpandMore
} from 'react-icons/md';
import { Disclosure as HDisclosure } from '@headlessui/react';
import cls from './Disclosure.module.scss';
import { classNames } from '~/shared/lib/classNames';

interface DisclosureProps {
	className?: string;
	children?: ReactNode;
	title?: string;
}

export const Disclosure = (props: DisclosureProps) => {
	const { className = '', title, children } = props;
	return (
		<HDisclosure
			as='div'
			className={classNames(cls.Disclosure, {}, [className])}
		>
			{({ open }) => (
				<>
					<header className={cls.header}>
						{title}
						<HDisclosure.Button className={cls.btn}>
							{open ? (
								<MdOutlineExpandLess className={cls.icon} />
							) : (
								<MdOutlineExpandMore className={cls.icon} />
							)}
						</HDisclosure.Button>
					</header>
					<HDisclosure.Panel className={cls.panel}>
						{children}
					</HDisclosure.Panel>
				</>
			)}
		</HDisclosure>
	);
};
