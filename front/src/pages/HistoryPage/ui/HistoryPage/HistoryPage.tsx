import React from 'react';
import cls from './HistoryPage.module.scss';
import { History } from '~/widgets/History';

const HistoryPage = () => {
	return (
		<div className={cls.HistoryPage}>
			<History />
		</div>
	);
};

export default HistoryPage;
