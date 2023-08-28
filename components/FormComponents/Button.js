import classNames from "classnames";
export default function Button({
	children,
	loading = false,
	variant = "default",
	...props
}) {
	return (
		<button
			disabled={loading}
			className={classNames({
				"h-8 ml-2 mt-2 px-5 text-center text-white  text-base flex items-center justify-center cursor-pointer disabled:cursor-not-allowed disabled:bg-opacity-50": true,
				"bg-transparent": variant === "default",
				"bg-green-700 rounded": variant === "success",
				"bg-rose-700 rounded": variant === "danger",
				"bg-orange-700 rounded": variant === "warning",
				"bg-emerald-400 rounded": variant === "info",
			})}
			{...props}
		>
			{loading ? "...." : children}
		</button>
	);
}
