export type ArticleType = {
    title: string;
    creationDate: Date;
    lastModificationDate: Date;
    content: string;
};

export type GetArticleType =
    | { ok: true, article: ArticleType }
    | { ok: false, message: "INVALID_ID" | "ARTICLE_NOT_FOUND" | "SERVER_ERROR" };