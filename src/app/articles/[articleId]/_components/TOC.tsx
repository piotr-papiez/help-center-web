// Types
import type { ArrayArticleDataType } from "@/types/article.types";

type TOCPropsType = {
    arrayHeadings: ArrayArticleDataType | null;
    intersectingIds: string[] | null;
};

export default function TOC({ arrayHeadings, intersectingIds }: TOCPropsType) {
    return (
        <nav>
            <span><b>Spis treści</b></span>
            <ul>
                {arrayHeadings?.map(heading => (
                    <li
                        key={heading.id}
                    >
                        <a
                            href={`#${heading.id}`}
                            className={
                                `TOC-${heading.tag}
                            ${intersectingIds?.includes(heading.id) ? "TOC-intersecting" : undefined}`
                            }
                        >
                            {heading.content}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}