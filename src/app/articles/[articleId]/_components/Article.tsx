"use client";

// Components
import Content from "./Content";
import TOC from "./TOC";

// Hooks
import { useEffect, useState } from "react";

// Types
import type { ArrayArticleDataType } from "@/types/article.types";

type ArticlePropsType = {
    articleTitle: string | null;
    arrayArticle: ArrayArticleDataType;
};

export default function Article({ articleTitle, arrayArticle }: ArticlePropsType) {
    const [arrayContent, setArrayContent] = useState<ArrayArticleDataType | null>(null);
    const [arrayHeadings, setArrayHeadings] = useState<ArrayArticleDataType | null>(null);
    const [intersectingIds, setIntersectingIds] = useState<string[] | null>(null);

    useEffect(() => {
        if (arrayArticle.length === 0) return;

        setArrayContent(arrayArticle);
    }, [arrayArticle]);

    useEffect(() => {
        if (arrayArticle.length === 0) return;

        const headings = arrayArticle.filter(element => ["h2", "h3", "h4"].includes(element.tag));

        setArrayHeadings(headings);
    }, [arrayArticle]);

    return (
        <article>
            <aside>
                <TOC
                    arrayHeadings={arrayHeadings}
                    intersectingIds={intersectingIds}
                />
            </aside>

            <section>
                <Content
                    articleTitle={articleTitle}
                    arrayContent={arrayContent}
                    intersectingIds={intersectingIds}
                    setIntersectingIds={setIntersectingIds}
                />
            </section>
        </article>
    )
}