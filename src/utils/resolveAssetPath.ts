const EXTERNAL_URL_RE = /^(?:[a-z][a-z0-9+.-]*:)?\/\//i;

export function resolveAssetPath(
  path?: string,
  base = import.meta.env.BASE_URL,
): string | undefined {
  if (!path) {
    return undefined;
  }

  if (EXTERNAL_URL_RE.test(path)) {
    return path;
  }

  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;

  if (
    normalizedBase !== "/" &&
    normalizedPath.startsWith(normalizedBase.slice(1))
  ) {
    return `/${normalizedPath}`;
  }

  return `${normalizedBase}${normalizedPath}`;
}
