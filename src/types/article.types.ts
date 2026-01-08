export type LegacyArticleDataType = {
    status: string;
    title: string;
    titled: string;
    short: string;
    text: string;
    type: string;
    icons: { 22: string };
};

export type ElementaryArticleDataType = {
    id: string;
    tag: string;
    icon: string;
    content: string;
};

export type ArrayArticleDataType = ElementaryArticleDataType[];

export type ArticleType = {
    title: string;
    creationDate: Date;
    lastModificationDate: Date;
    content: string;
};

export type GetArticleType =
    | { ok: true, article: ArticleType | LegacyArticleDataType }
    | { ok: false, message: "INVALID_ID" | "ARTICLE_NOT_FOUND" | "SERVER_ERROR" };