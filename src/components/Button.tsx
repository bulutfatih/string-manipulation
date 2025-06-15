import type React from "react";
import { useState } from "react";
import { FloatingPortal, offset, useFloating, useHover, useInteractions } from "@floating-ui/react";

type ButtonProps = {
	className?: string;
	tooltip: string;
	tooltipPlacement?: "top" | "bottom" | "left" | "right";
	onClick: (e: React.MouseEvent) => void;
	children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ 
	className, 
	tooltip, 
	tooltipPlacement = "bottom", 
	onClick, 
	children 
}) => {
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
			<div 
				ref={refs.setReference} 
				{...getReferenceProps()} 
				className={`button ${className || ''}`}
				onClick={onClick}
			>
				{children}
			</div>
			{open && (
				<FloatingPortal>
					<div
						ref={refs.setFloating}
						className="button__tooltip"
						style={floatingStyles}
						{...getFloatingProps()}
					>
						{tooltip}
					</div>
				</FloatingPortal>
			)}
		</>
	);
};

export default Button; 