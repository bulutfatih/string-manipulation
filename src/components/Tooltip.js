import React, { useState, useRef } from "react";
import {
  useFloating,
  offset,
  useHover,
  useInteractions,
  FloatingPortal,
} from "@floating-ui/react";

const Tooltip = ({ content, children, placement = "top" }) => {
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
      <span
        ref={refs.setReference}
        {...getReferenceProps()}
        style={{ display: "inline-block" }}
      >
        {children}
      </span>
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
