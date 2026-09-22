import { FloatingPortal, offset, useFloating, useHover, useInteractions } from "@floating-ui/react";
import type React from "react";
import { useState } from "react";

type ButtonProps = {
	className?: string;
	tooltip: string;
	tooltipPlacement?: "top" | "bottom" | "left" | "right";
	onClick: () => void;
	children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ className, tooltip, tooltipPlacement = "bottom", onClick, children }) => {
	const [open, setOpen] = useState(false);
	const { refs, floatingStyles, context } = useFloating({
		open,
		onOpenChange: setOpen,
		placement: tooltipPlacement,
		middleware: [offset(6)],
	});

	const hover = useHover(context, { move: false });
	const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

	return (
		<>
			<button
				type="button"
				aria-label={tooltip}
				ref={refs.setReference}
				{...getReferenceProps()}
				className={`button ${className || ""}`}
				onClick={onClick}
			>
				{children}
			</button>
			{open && (
				<FloatingPortal>
					<div ref={refs.setFloating} className="button__tooltip" style={floatingStyles} {...getFloatingProps()}>
						{tooltip}
					</div>
				</FloatingPortal>
			)}
		</>
	);
};

export default Button;
