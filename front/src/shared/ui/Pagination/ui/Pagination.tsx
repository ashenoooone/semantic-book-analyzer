// Pagination.tsx

import React, { memo } from 'react';

interface PaginationProps {
	currentPage: number;
	itemsPerPage: number;
	totalItems: number;
	onPageChange: (page: number) => void;
}

export const Pagination = memo(
	({
		currentPage,
		itemsPerPage,
		totalItems,
		onPageChange
	}: PaginationProps) => {
		const totalPages = Math.ceil(totalItems / itemsPerPage);

		const handlePageClick = (page: number) => {
			onPageChange(page);
		};

		const renderPagination = () => {
			const pages = [];
			const maxVisiblePages = 5; // Максимальное количество видимых страниц

			// Определяем диапазон ближайших страниц
			let startPage = Math.max(1, currentPage - 2);
			let endPage = Math.min(
				totalPages,
				startPage + maxVisiblePages - 1
			);

			// Если диапазон не заполняет максимальное количество видимых страниц, смещаем его
			const adjustment = maxVisiblePages - (endPage - startPage + 1);
			startPage = Math.max(1, startPage - adjustment);
			endPage = Math.min(totalPages, endPage + adjustment);

			for (let i = startPage; i <= endPage; i += 1) {
				pages.push(
					<button
						type='button'
						key={i}
						className={`mx-1 px-3 py-2 rounded-full cursor-pointer ${
							i === currentPage
								? 'bg-primary-color text-bg-color'
								: 'hover:bg-primary-color hover:text-bg-color'
						}`}
						onClick={() => handlePageClick(i)}
					>
						{i}
					</button>
				);
			}

			return pages;
		};

		return (
			<ul className='flex items-baseline'>
				<button
					type='button'
					className='mx-1 px-3 py-2 rounded-full hover:bg-primary-color hover:text-bg-color cursor-pointer'
					onClick={() => handlePageClick(currentPage - 1)}
					disabled={currentPage === 1}
				>
					Пред.
				</button>
				<button
					type='button'
					className={`mx-1 px-3 py-2 rounded-full cursor-pointer ${
						currentPage === 1
							? 'bg-gray-300'
							: 'hover:bg-primary-color hover:text-bg-color'
					} ${currentPage - 2 <= 1 && 'hidden'}`}
					onClick={() => handlePageClick(1)}
					disabled={currentPage === 1}
				>
					1
				</button>
				{currentPage - 2 >= 2 && <div>...</div>}
				{renderPagination()}
				{totalPages - currentPage >= 4 && <div>...</div>}
				<button
					type='button'
					className={`mx-1 px-3 py-2 rounded-full cursor-pointer ${
						currentPage === totalPages
							? 'bg-gray-300'
							: 'hover:bg-primary-color hover:text-bg-color'
					} ${totalPages - currentPage <= 2 && 'hidden'}`}
					onClick={() => handlePageClick(totalPages)}
					disabled={currentPage === totalPages}
				>
					{totalPages}
				</button>
				<button
					type='button'
					className='mx-1 px-3 py-2 hover:bg-primary-color hover:text-bg-color rounded-full cursor-pointer'
					onClick={() => handlePageClick(currentPage + 1)}
					disabled={currentPage === totalPages}
				>
					След.
				</button>
			</ul>
		);
	}
);
