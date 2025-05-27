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
				className={className} 
				onClick={onClick}
			>
				{children}
			</div>
			{open && (
				<FloatingPortal>
					<div
						ref={refs.setFloating}
						style={{
							...floatingStyles,
							background: "linear-gradient(145deg, #333, #222)",
							color: "#fff",
							padding: "4px 8px",
							borderRadius: "6px",
							fontSize: "12px",
							zIndex: 9999,
							pointerEvents: "none",
							boxShadow: "3px 3px 8px rgba(0, 0, 0, 0.5)",
							whiteSpace: "nowrap",
							border: "1px outset #444",
							textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
						}}
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