# liberium
A lightweight, open source, and free to use javascript and typescript library made for the unblocking community. Updates will keep coming, please suggest things to add or open pull requests with new features!

## How to use

Include the library before any usage. You can import it using either Gitloaf or JSDelivr:

* `<script src="https://gitloaf.com/cdn/albibos/liberium/main/library.js"></script>`
* `<script src="https://cdn.jsdelivr.net/gh/albibos/liberium@main/library.js"></script>`

## Example 

```js
Liberium.url('game')
Liberium.gopen('/load.html', 'iceagebaby')
```

Now, when the `Liberium.gopen` function is called, the user is redirected to https://example.com/load.html?game=iceagebaby.

## Documentation

### Functions

`Liberium.cloak(string)` - opens an about:blank tab using the specified url parameter

`Liberium.blob(string)` - opens a blob: url using the specified url parameter

`Liberium.copen(string)` - opens an about:blank tab with a 3kh0 assets game loaded via the id provided

`Liberium.redirect(string)` - redirects the user to the specified url

`Liberium.tabcloak(title, faviconurl)` - sets the title and favicon based on the specified params. Still works if only title or only faviconurl are set, just do (null, faviconurl) or (title, null)

`Liberium.gopen(page, gameid)` - redirects to the specified file and adds a url param based on the Liberium.url('') global. (only use if you know what you're doing)

### Globals

`Liberium.url(string)` - the url param used for the Liberium.gopen function, should be set in a <script> in your head tag or anywhere before Liberium.gopen is used.

### In the works

`Liberium.g404(key: string)` - overlays the google 404 page over your page which can be made invisible by clicking the specified key
