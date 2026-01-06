"use client";

// Constants
const OBSERVER_PARAMS = {
    root: null,
    intersectionRatio: 0.5,
    threshold: 0.5
};

// Components
import Dialog from "./Dialog";

// Hooks
import { useEffect, useRef, useState } from "react";

// Types
import type { ArrayArticleDataType } from "@/types/article.types";

// Utils
import { containersToHTML } from "@/utils/object-to-html";

type ContentPropsType = {
    articleTitle: string | null;
    arrayContent: ArrayArticleDataType | null;
    intersectingIds: string[] | null;
    setIntersectingIds: (id: string[]) => void;
};

export default function Content({ articleTitle, arrayContent, intersectingIds, setIntersectingIds }: ContentPropsType) {
    const [imageSource, setImageSource] = useState<string | null>(null);

    const articleRef = useRef<HTMLElement | null>(null);
    const dialogRef = useRef<HTMLDialogElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            const visible = entries
                .filter(entry => entry.isIntersecting)
                .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

            if (visible[0]) {
                const headingsIntersecting = visible.map(heading => heading.target.id);
                setIntersectingIds(headingsIntersecting);
            }
        }, OBSERVER_PARAMS);

        const headings = articleRef.current?.querySelectorAll("h2, h3, h4");
        headings?.forEach(heading => observer.observe(heading));

        return () => observer.disconnect();
    }, [arrayContent, intersectingIds]);

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
    }, [arrayContent]);

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

    const htmlContent: TrustedHTML | null = containersToHTML(arrayContent);

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