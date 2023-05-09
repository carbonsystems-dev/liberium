interface Liberium {
  cloak(url?: string): void;
  blob(url: string): Window | null;
  copen(id: string): void;
  url(param?: string): string;
  gopen(file: string, gameId: string): void;
  redirect(url: string): void;
  tabcloak(title?: string, faviconurl?: string): void;
  g404(key: string): void;
  getapi(url: string): void;
}

const Liberium: Liberium = {
  cloak(url?: string): void {
    const win = window.open();
    const f = win?.document.createElement("iframe");
    window.focus();

    if (!url) return;

    f!.style.width = "100%";
    f!.style.height = "100%";
    win?.document.body.appendChild(f!);
    f!.src = url;
    win?.document.body.style.margin = "0";
    f!.style.border = "none";
    f!.style.margin = "0";
    win?.document.body.style.height = "100vh";
  },

  blob(url: string): Window | null {
    const page = new Blob(
      [
        `<iframe style="height:100%; width: 100%; border: none; position: fixed; top: 0; right: 0; left: 0; bottom: 0; border: none" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation" src="${url.startsWith(
          "https://"
        )
          ? url
          : "https://" + url}"></iframe>`,
      ],
      { type: "text/html" }
    );
    return window.open(URL.createObjectURL(page));
  },

  copen(id: string): void {
    const url = `https://raw.githack.com/3kh0/3kh0-Assets/main/${id}/index.html`;
    this.cloak(url);
  },

  urlParam: "",

  url(param?: string): string {
    if (param) {
      this.urlParam = param;
    } else {
      return this.urlParam;
    }
    return "";
  },

  gopen(file: string, gameId: string): void {
    const param = this.urlParam;
    const url = new URL(file, window.location.origin);
    url.searchParams.append(param, gameId);
    window.location.href = url.href;
  },

  redirect(url: string): void {
    window.location.href = url;
  },

  tabcloak(title?: string, faviconurl?: string): void {
    if (title) {
      document.title = title;
    }
    if (faviconurl) {
      const favicon =
        document.querySelector("link[rel='icon']") ||
        document.createElement("link");
      favicon.type = "image/x-icon";
      favicon.rel = "icon";
      favicon.href = faviconurl;
      document.head.appendChild(favicon);
    }
  },

  g404(key: string): void {
    const overlayDiv = document.createElement("div");
    overlayDiv.style.position = "fixed";
    overlayDiv.style.top = "50%";
    overlayDiv.style.left = "0";
    overlayDiv.style.width = "100%";
    overlayDiv.style.transform = "translateY(-50%)";
    overlayDiv.style.background = "#fff";
    overlayDiv.style.zIndex = "9999999";

    const overlayContent = `
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="initial-scale=1, minimum-scale=1, width=device-width">
        <title>Error 404 (Not Found)!!1</title>
        <style>
          *{margin:0;padding:0}html,code{font:15px/22px arial,sans-serif}html{background:#fff;color:#222;padding:15px}body{margin:7% auto 0;max-width:390px;min-height:180px;padding:30px 0 15px}* > body{background:url(//www.google.com/images/errors/robot.png) 100% 5px no-repeat;padding-right:205px}p{margin:11px 0 22px;overflow:hidden}ins{color:#777;text-decoration:none}a img{border:0}@media screen and (max-width:772px){body{background:none;margin-top:0;max-width:none;padding-right:0}}#logo{background:url(//www.google.com/images/branding/googlelogo/1x/googlelogo_color_150x54dp.png) no-repeat;margin-left:-5px}@media only screen and (min-resolution:192dpi){#logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) no-repeat 0% 0%/100% 100%;-moz-border-image:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) 0}}@media only screen and (-webkit-min-device-pixel-ratio:2){#logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) no-repeat;-webkit-background-size:100% 100%}}#logo{display:inline-block;height:54px;width:150px}
        </style>
      </head>
      <body>
        <a href="//www.google.com/">
          <span id="logo" aria-label="Google"></span>
        </a>
        <p>
          <b>404.</b> <ins>That’s an error.</ins>
        </p>
        <p>
          The requested URL <code></code> was not found on this server. <ins>That’s all we know.</ins>
        </p>
      </body>
      </html>
    `;

    overlayDiv.innerHTML = overlayContent;

    const handleKeyPress = function(event: KeyboardEvent) {
      const keyCode = event.keyCode || event.which;
      const key = String.fromCharCode(keyCode).toLowerCase();
      if (key === key.toLowerCase()) {
        overlayDiv.parentNode?.removeChild(overlayDiv);
        document.removeEventListener("keypress", handleKeyPress);
      }
    };

    document.body.appendChild(overlayDiv);
    document.addEventListener("keypress", handleKeyPress);
  },

  getapi(url: string): void {
    if (!url) return;

    fetch(url)
      .then(function(response) {
        if (!response.ok) {
          throw new Error("API request failed, maybe it isn't working?");
        }

        return response.json();
      })
      .then(function(data) {
        console.log("API response:", data);
      })
      .catch(function(error) {
        console.error("API request error:", error);
      });
  },
};

window.Liberium = Liberium;
