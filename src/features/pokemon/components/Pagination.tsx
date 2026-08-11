interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
	disabled?: boolean;
}

const Pagination = ({
	currentPage,
	totalPages,
	onPageChange,
	disabled = false,
}: PaginationProps) => {
	const getPageNumbers = () => {
		if (totalPages <= 6) {
			return Array.from({ length: totalPages }, (_, index) => index + 1);
		}

		if (currentPage <= 3) {
			return [1, 2, 3, 4, 5, 'ellipsis', totalPages];
		}

		if (currentPage >= totalPages - 2) {
			return [
				1,
				'ellipsis',
				totalPages - 4,
				totalPages - 3,
				totalPages - 2,
				totalPages - 1,
				totalPages,
			];
		}

		return [
			1,
			'ellipsis',
			currentPage - 1,
			currentPage,
			currentPage + 1,
			'ellipsis-end',
			totalPages,
		];
	};

	const pages = getPageNumbers();

	const buttonClass =
		'cursor-pointer flex h-12 min-w-12 items-center justify-center rounded-md border border-slate-200 bg-white px-3 text-base font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50';

	const activeButtonClass =
		'flex h-12 min-w-12 items-center justify-center rounded-md bg-slate-900 px-3 text-base font-medium text-white';

	return (
		<nav
			aria-label="Pokemon pagination"
			className="flex flex-wrap items-center justify-center gap-3"
		>
			{/* Previous */}
			<button
				type="button"
				disabled={disabled || currentPage === 1}
				onClick={() => onPageChange(currentPage - 1)}
				className={`${buttonClass} px-5`}
			>
				‹ Previous
			</button>

			{/* Pages */}
			{pages.map((page, index) => {
				if (typeof page !== 'number') {
					return (
						<span
							key={`${page}-${index}`}
							className="flex h-12 min-w-6 items-center justify-center text-slate-500"
						>
							...
						</span>
					);
				}

				return (
					<button
						key={page}
						type="button"
						disabled={disabled}
						onClick={() => onPageChange(page)}
						className={page === currentPage ? activeButtonClass : buttonClass}
					>
						{page}
					</button>
				);
			})}

			{/* Next */}
			<button
				type="button"
				disabled={disabled || currentPage === totalPages}
				onClick={() => onPageChange(currentPage + 1)}
				className={`${buttonClass} px-5`}
			>
				Next ›
			</button>
		</nav>
	);
};

export default Pagination;
