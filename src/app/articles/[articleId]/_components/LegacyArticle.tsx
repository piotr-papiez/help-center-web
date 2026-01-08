"use client";

// Components
import LegacyContent from "./LegacyContent";
import LegacyTOC from "./LegacyTOC";

// Hooks
import { useEffect, useState } from "react";

// Types
import type { ArrayArticleDataType } from "@/types/article.types";

type LegacyArticlePropsType = {
    articleTitle: string | null;
    stringArticle: string | null;
};

export default function LegacyArticle({ articleTitle, stringArticle }: LegacyArticlePropsType) {
    const [stringContent, setStringContent] = useState<string | null>(null);

    useEffect(() => {
        if (!stringArticle) return;

        setStringContent(stringArticle);
    }, [stringArticle]);

    return (
        <article>
            <aside>
                <LegacyTOC />
            </aside>

            <section>
                <LegacyContent
                    articleTitle={articleTitle}
                    stringContent={stringContent}
                />
            </section>
        </article>
    )
}