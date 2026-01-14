"use client";

// Components
import Dialog from "./Dialog";

// Hooks
import { useEffect, useRef, useState } from "react";

// Types
type LegacyContentPropsType = {
    articleTitle: string | null;
    stringContent: string | null;
};

// Utils
import addZoomIconForLegacyImages from "@/utils/add-zoom-icon-for-legacy-images.util";

export default function LegacyContent({ articleTitle, stringContent }: LegacyContentPropsType) {
    const [imageSource, setImageSource] = useState<string | null>(null);

    const articleRef = useRef<HTMLElement | null>(null);
    const dialogRef = useRef<HTMLDialogElement | null>(null);

    useEffect(() => {
        const section = articleRef.current;
        if (!section) return;

        const onClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement;

            const link = target.closest("a");
            if (!link) return;

            const image = link.querySelector("img");
            if (!image) return;

            event.preventDefault();

            setImageSource(image.src);
        };

        section.addEventListener("click", onClick);

        return () => section.removeEventListener("click", onClick);
    }, [stringContent]);

    useEffect(() => {
        if (!imageSource) return;

        dialogRef.current?.showModal();

        requestAnimationFrame(() => {
            dialogRef.current?.classList.add("lightbox--opened");
        });
    }, [imageSource]);

    function closeDialog(): void {
        // document.body.style.overflow = "";

        dialogRef.current?.classList.remove("lightbox--opened");
        setTimeout(() => {
            dialogRef.current?.close();
            setImageSource(null);
        }, 300);

    }

    const preHtmlContent: string | null = stringContent;

    const htmlContent = preHtmlContent ? addZoomIconForLegacyImages(preHtmlContent) : null;

    if (!htmlContent) return;

    return (
        <>
            <h1>{articleTitle}</h1>

            <section
                dangerouslySetInnerHTML={{ __html: htmlContent }}
                ref={articleRef}
            />

            <Dialog
                imageSource={imageSource}
                onClose={closeDialog}
                ref={dialogRef}
            />
        </>
    );
}