// Components
import LegacyArticle from "./_components/LegacyArticle";
import Article from "./_components/Article";

// Constants
const OBSERVER_PARAMS = {
    root: null
};

// Runtime
import { getArticle } from "../../../../lib/api/article";

// Types
import type { LegacyArticleDataType, ArrayArticleDataType } from "@/types/article.types";

type ArticlePagePropsType = {
    params: { articleId: string };
};

import type { Metadata } from "next";

export default async function ArticlePage({ params }: ArticlePagePropsType) {
    const { articleId } = await params;

    const response = await getArticle(articleId);

    if (!response.ok) return <p>Serwer się uruchamia. Odśwież stronę.</p>;

    const articleTitle: string = response.article.title;

    if ("text" in response.article) {
        const stringArticle: string = `${response.article.short}${response.article.text}`;

        return (
            <LegacyArticle 
            articleTitle={articleTitle}
            stringArticle={stringArticle}
            />
        )
    } else {
        const arrayArticle: ArrayArticleDataType = JSON.parse(response.article.content);

        return (
            <Article
                articleTitle={articleTitle}
                arrayArticle={arrayArticle}
            />
        );
    }
}