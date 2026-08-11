import type { StatProps } from '../types/Pokemon.types';

const Stat = ({ label, value }: StatProps) => {
	const percentage = `${(value / 100) * 100}%`;

	return (
		<div>
			<div className="mb-1 flex items-center justify-between text-sm">
				<span className="font-medium text-slate-700">{label}</span>

				<span className="text-slate-500">{value}</span>
			</div>

			<div className="h-2 overflow-hidden rounded-full bg-slate-100">
				<div
					className="h-full rounded-full bg-slate-900"
					style={{ width: percentage }}
				/>
			</div>
		</div>
	);
};
export default Stat;
