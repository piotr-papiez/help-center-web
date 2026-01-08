// Constants
const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Runtime
import { apiFetch } from "./client";

// Types
import type { GetArticleType } from "@/types/article.types";


export async function getArticle(articleId: string): Promise<GetArticleType> {
    return apiFetch<GetArticleType>(`${API_URL}/api/articles/${articleId}`, {
        method: "GET"
    });
}