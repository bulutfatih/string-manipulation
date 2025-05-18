import { FloatingPortal, type Placement, offset, useFloating, useHover, useInteractions } from "@floating-ui/react";
import type React from "react";
import { type ReactNode, useState } from "react";

type TooltipProps = {
	content: ReactNode;
	children: ReactNode;
	placement?: Placement;
};

const Tooltip: React.FC<TooltipProps> = ({ content, children, placement = "top" }) => {
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
			<div ref={refs.setReference} {...getReferenceProps()} style={{}}>
				{children}
			</div>
			{open && (
				<FloatingPortal>
					<div
						ref={refs.setFloating}
						style={{
							...floatingStyles,
							background: "#222",
							color: "#fff",
							padding: "4px 8px",
							borderRadius: "4px",
							fontSize: "12px",
							zIndex: 9999,
							pointerEvents: "none",
							boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
							whiteSpace: "nowrap",
						}}
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
