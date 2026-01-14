export default function addZoomIconForLegacyImages(html: string): TrustedHTML {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    const anchors = Array.from(doc.querySelectorAll("a"));

    anchors.forEach(a => {
        const elementChildren = Array.from(a.children);
        if (elementChildren.length !== 1) return;

        const onlyChild = elementChildren[0];
        if (onlyChild.tagName !== "IMG") return;

        const imageWrapper = doc.createElement("div");
        imageWrapper.className = "image-wrapper";

        const iconWrapper = doc.createElement("div");
        iconWrapper.className = "image-zoom-icon-wrapper";

        const text = doc.createElement("span");
        text.className = "image-zoom-text";
        text.textContent = "Wyświetl w większym rozmiarze";

        const icon = doc.createElement("span");
        icon.className = "material-symbols-rounded";
        icon.textContent = "zoom_in";

        a.replaceWith(imageWrapper);

        iconWrapper.appendChild(text);
        iconWrapper.appendChild(icon);

        imageWrapper.appendChild(a);
        imageWrapper.appendChild(iconWrapper);
    });

    return doc.body.innerHTML;
}