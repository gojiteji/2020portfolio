import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { basename } from 'node:path';

const root = new URL('../', import.meta.url);
const output = new URL('public/', root);
const origin = 'https://gojiteji.com';
const profile = JSON.parse(await readFile(new URL('profile.json', import.meta.url), 'utf8'));

const escape = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#39;');

const socialLinks = [
  ['X', 'https://twitter.com/gojiteji', '/assets/x-twitter.svg'],
  ['GitHub', 'https://github.com/gojiteji', '/assets/github.svg'],
  ['LinkedIn', 'https://www.linkedin.com/in/koki-tanaka-6bb38a16a', '/assets/linkedin-in.svg'],
  ['Hugging Face', 'https://huggingface.co/gojiteji', '/hf-logo.png'],
  ['Facebook', 'https://www.facebook.com/gojiteji/', '/assets/facebook.svg'],
  ['note', 'https://note.com/gojiteji', '/note-logo.png'],
  ['YouTube', 'https://www.youtube.com/@gojiteji', '/assets/youtube.svg'],
];

const profileCard = `
  <aside class="profile" aria-label="Profile">
    <img class="portrait" src="/assets/profile.png" alt="Koki Tanaka" width="1056" height="992">
    <h2>Koki <strong>Tanaka</strong></h2>
    <ul class="contact">
      <li><img src="/assets/location.svg" alt="" width="19" height="19">Japan</li>
      <li><img src="/assets/language.svg" alt="" width="19" height="19">English/日本語</li>
      <li><img src="/assets/email.svg" alt="" width="19" height="19"><!--email_off--><a href="mailto:mail@gojiteji.com">mail@gojiteji.com</a><!--/email_off--></li>
    </ul>
    <div class="social">
      ${socialLinks.map(([name, href, icon]) =>
        `<a href="${href}" target="_blank" rel="noopener noreferrer"><img src="${icon}" alt="${name}" width="32" height="32"></a>`).join('\n      ')}
      <details class="bitcoin">
        <summary aria-label="Bitcoin address" title="Bitcoin address"><img src="/assets/btc.svg" alt="" width="28" height="28"></summary>
        <div class="bitcoin-address">My Bitcoin Address<br><code>3DSFuuqBVUCwtXC8yi3jSKyVU6DZfhYzcA</code></div>
      </details>
    </div>
  </aside>`;

function layout({ title, route, content, sidebar = false }) {
  const current = route === '/' ? ' aria-current="page"' : '';
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escape(title)}</title>
  <meta name="description" content="Koki Tanaka's portfolio">
  <meta name="theme-color" content="#FC965D">
  <link rel="canonical" href="${origin}${route}">
  <link rel="icon" href="/assets/favicon.png" type="image/png">
  <link rel="manifest" href="/manifest.webmanifest">
  <link rel="stylesheet" href="/assets/site.css">
</head>
<body>
  <div class="site">
    <header class="top">
      <nav class="desktop-nav" aria-label="Main"><a href="/"${current}>About</a></nav>
      <details class="mobile-nav">
        <summary>Menu</summary>
        <nav aria-label="Main"><a href="/"${current}>About</a></nav>
      </details>
    </header>
    <div class="layout${sidebar ? ' with-profile' : ''}">
      ${sidebar ? profileCard : ''}
      <main>${content}
      </main>
    </div>
    ${route === '/' ? '<footer><a href="https://privacypolicy.gojiteji.com/">privacy policy</a>・Theme by <a href="https://github.com/rolwin100/rolwinreevan_gatsby_blog">rolwinreevan</a></footer>' : ''}
  </div>
</body>
</html>
`;
}

function timeline(heading, entries, className = '') {
  const rows = entries.map(({ year, title, period, description, url, link }) => `
  <li class="timeline-entry">
    <span class="timeline-year">${escape(year)}</span>
    <div class="timeline-item">
      <div class="timeline-title">${escape(title)}</div>
      <div class="timeline-period">${escape(period)}</div>
      ${url ? `<p>${description ? escape(description) + ' ' : ''}<a href="${escape(url)}">${escape(link)}</a></p>` : ''}
    </div>
  </li>`).join('');

  return `
<section class="section ${className}">
  <h2>${heading}</h2>
  <ol class="timeline">${rows}
  </ol>
</section>`;
}

const experiences = timeline('Experiences', profile.experience);
const publications = timeline('Publications', profile.publications, 'publications');
const education = profile.education.map(({ title, description }) =>
  `<li><h3>${escape(title)}</h3>${escape(description)}</li>`).join('\n    ');

const pages = [
  {
    file: 'index.html',
    route: '/',
    title: 'Koki Tanaka | About',
    sidebar: true,
    content: `
<section>
  <h1 class="section-title">About Me</h1>
  <p>${escape(profile.introduction)}</p>
</section>
<section class="section">
  <h2>Education</h2>
  <ul class="education">
    ${education}
  </ul>
</section>
${experiences}
${publications}`,
  },
  {
    file: 'experience/index.html',
    route: '/experience/',
    title: 'Experiences | Koki Tanaka',
    content: experiences,
  },
  {
    file: 'publications/index.html',
    route: '/publications/',
    title: 'Publications | Koki Tanaka',
    content: publications,
  },
  {
    file: 'blog/hello-world-rolwins-first-blog/index.html',
    route: '/blog/hello-world-rolwins-first-blog/',
    title: 'Hello World | Koki Tanaka',
    sidebar: true,
    content: `
<article>
  <h1 class="section-title">Hello World</h1>
  <p><time datetime="2018-12-20">December 20, 2018</time> · javascript, html, css</p>
  <img class="post-cover" src="/assets/hello-world.png" alt="Hello World" width="363" height="400">
</article>`,
  },
];
const missingPage = layout({
  route: '/404/',
  title: 'gojiteji | 404',
  content: `
<div class="missing">
  <img src="/assets/404.png" alt="404" width="750" height="561">
  <h1>This page was lost</h1>
  <p>The page you are looking for isn’t available.</p>
  <a href="/">Go Back</a>
</div>`,
});

async function write(relativePath, content) {
  const file = new URL(relativePath, output);
  await mkdir(new URL('.', file), { recursive: true });
  await writeFile(file, content);
}

await rm(output, { recursive: true, force: true });
await cp(new URL('static/', root), output, {
  recursive: true,
  filter: (path) => !basename(path).startsWith('.'),
});
await Promise.all([
  ...pages.map((page) => write(page.file, layout(page))),
  write('404.html', missingPage),
  write('404/index.html', missingPage),
  write('robots.txt', `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`),
  write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map(({ route }) => `  <url><loc>${origin}${route}</loc></url>`).join('\n')}\n</urlset>\n`),
]);
console.log('Built gojiteji.com to public/');
