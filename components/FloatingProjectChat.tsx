"use client";
import { containDialogFocus } from "@/lib/dialogFocus";
import { useEffect, useRef, useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";
export function FloatingProjectChat() {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open || !dialog.current) return;
    const element = dialog.current,
      previous = document.body.style.overflow,
      opener = trigger.current;
    element.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element.close();
      document.body.style.overflow = previous;
      opener?.focus();
    };
  }, [open]);
  return (
    <>
      <button
        ref={trigger}
        type="button"
        className="inquiry-trigger"
        aria-label="Open project inquiry form"
        aria-expanded={open}
        aria-controls="quick-inquiry"
        onClick={() => setOpen(true)}
      >
        <MessageSquare size={23} />
      </button>
      <dialog
        ref={dialog}
        id="quick-inquiry"
        className="inquiry-dialog"
        aria-labelledby="inquiry-title"
        onKeyDown={containDialogFocus}
        onCancel={() => setOpen(false)}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            const box = e.currentTarget.getBoundingClientRect();
            if (
              e.clientX < box.left ||
              e.clientX > box.right ||
              e.clientY < box.top ||
              e.clientY > box.bottom
            )
              setOpen(false);
          }
        }}
      >
        <div className="inquiry-dialog-header">
          <div>
            <p className="eyebrow">A conversation starts here</p>
            <h2 id="inquiry-title">Tell me about your project.</h2>
            <p>Email inquiry · I’ll reply personally</p>
          </div>
          <button
            autoFocus
            type="button"
            className="icon-button"
            aria-label="Close project inquiry form"
            onClick={() => setOpen(false)}
          >
            <X size={20} />
          </button>
        </div>
        <InquiryForm compact />
      </dialog>
    </>
  );
}
