//https://github.com/staticallyio/statically/blob/main/src/pages/convert.js
//TODO: convert gist link to raw data linknp

/**
 * Convert URL to Statically.io URL
 * @param {string}  url - Input raw url
 * @return {(string|null)} Statically.io CDN url or null if url is not valid
 */
function convert(url?: string) {
  const STATICALLY_PASTE_DATA: Record<string, string> = {
    "https?:\\/\\/raw\\.github(?:usercontent)?\\.com\\/([^\\/]+)\\/([^\\/]+)\\/([^\\/]+)\\/([^?&#]+)":
      "https://cdn.statically.io/gh/$1/$2/$3/$4",
    "https?:\\/\\/gist\\.githubusercontent\\.com\\/(\\S+)":
      "https://cdn.statically.io/gist/$1",
    "https?:\\/\\/github\\.com\\/([^\\/]+)\\/([^\\/]+)\\/(?!releases\\/)(?:(?:blob|raw)\\/)?([^\\/]+)\\/([^?&#]+)":
      "https://cdn.statically.io/gh/$1/$2/$3/$4",
    "https?:\\/\\/gitlab\\.com\\/([^\\/].*)\\/-\\/(?:raw|blob)\\/(.+\\..+?)(?:\\?.*)?":
      "https://cdn.statically.io/gl/$1/$2",
    "https?:\\/\\/bitbucket\\.org\\/([^\\/]+\\/[^\\/]+)\\/(?:raw|src)\\/(.+\\..+?)(?:\\?.*)?":
      "https://cdn.statically.io/bb/$1/$2",
  };

  const tasks = STATICALLY_PASTE_DATA;
  if (!url) {
    return null;
  }
  for (let t in tasks) {
    const regex = new RegExp("^" + t + "$");
    const match = url.match(regex);
    const output = tasks[t];
    if (match) {
      return url.replace(regex, output);
    }
  }

  return null;
}

export default convert;
