import { FloatingPortal, type Placement, offset, useFloating, useHover, useInteractions } from "@floating-ui/react";
import type React from "react";
import { type ReactNode, useState } from "react";

type TooltipProps = {
	className?: string;
	content: ReactNode;
	children: ReactNode;
	placement?: Placement;
};

const Tooltip: React.FC<TooltipProps> = ({ content, children, placement = "top", className }) => {
	const [open, setOpen] = useState(false);
	const { refs, floatingStyles, context } = useFloating({
		open,
		onOpenChange: setOpen,
		placement,
		middleware: [offset(6)],
	});

	const hover = useHover(context, { move: false });
	const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

	return (
		<>
			<div ref={refs.setReference} {...getReferenceProps()} className={className}>
				{children}
			</div>
			{open && (
				<FloatingPortal>
					<div
						ref={refs.setFloating}
						className="tooltip"
						style={floatingStyles}
						{...getFloatingProps()}
					>
						{content}
					</div>
				</FloatingPortal>
			)}
		</>
	);
};

export default Tooltip;
