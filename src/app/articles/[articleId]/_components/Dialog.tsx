"use client";

// Portals
import { createPortal } from "react-dom";

// Types
import type { ComponentPropsWithRef, KeyboardEvent } from "react";

type DialogPropsType = {
    imageSource: string | null;
    onClose: () => void;
} & ComponentPropsWithRef<"dialog">;

export default function Dialog({ imageSource, onClose, ref }: DialogPropsType) {
    function onKeyClose(event: KeyboardEvent) {
        if (event.key === "Escape") {
            event.preventDefault();
            onClose();
        };
    }

    if (imageSource) {
        return createPortal((
            <dialog
                onKeyDown={onKeyClose}
                className="lightbox"
                ref={ref}
            >
                <button
                    className="material-symbols-rounded"
                    onClick={onClose}
                >
                    close
                </button>
                <img
                    src={imageSource}
                    alt="Zrzut ekranu"
                />
            </dialog>
        ), document.body);
    } else {
        return null;
    }
}