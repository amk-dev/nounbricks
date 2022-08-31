import { withBase, useData } from "vitepress";
import { EXTERNAL_URL_RE } from "./../shared.js";

function isExternal(path) {
  return EXTERNAL_URL_RE.test(path);
}

export function normalizeLink(url) {
  if (isExternal(url)) {
    return url;
  }
  const { site } = useData();
  const { pathname, search, hash } = new URL(url, "http://example.com");
  const normalizedPath =
    pathname.endsWith("/") || pathname.endsWith(".html")
      ? url
      : `${pathname.replace(
          /(\.md)?$/,
          site.value.cleanUrls === "disabled" ? ".html" : ""
        )}${search}${hash}`;
  return withBase(normalizedPath);
}
