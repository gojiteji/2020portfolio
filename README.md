# gojiteji.com

The site is built with Node.js and has no package dependencies. Edit
`site/profile.json` for the homepage, education, experience, and publications.
The shared page layout is in `site/build.mjs`. Static assets and Cloudflare
Pages headers are in `static/`.

```sh
npm ci
npm run build
python3 -m http.server --directory public
```

Cloudflare Pages builds with `npm run build` and serves `public/`.

The layout was adapted from [Rolwin Reevan's MIT-licensed theme](https://github.com/rolwin100/rolwinreevan_gatsby_blog).
The social SVG icons are from [Font Awesome Free](https://fontawesome.com/license/free)
(CC BY 4.0). The location, language, and email icons are from
[Feather](https://github.com/feathericons/feather) (MIT).
