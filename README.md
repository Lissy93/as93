<h1 align="center">AS93</h1>
<p align="center">
<img src="https://github.com/Lissy93/as93/blob/main/static/favicon.png?raw=true" width="96" /><br />
<i>Simple site to list your GitHub projects</i>
<br />
<b>🌐 <a href="https://as93.net/">as93.net</a></b><br />
</p>

---

## Development

- Prerequisites: You'll need [Node](https://nodejs.org/) an [Git](https://git-scm.com/) installed.
- Get the code: `git clone git@github.com:Lissy93/as93.git`
- Install dependencies: `cd as93 && npm i`
- Start development server: `npm run dev`

---

## Deployment
Follow the [Development](#development) instructions above.<br> 
When you're ready to deploy, run `yarn build` and upload the `dist/` to any CDN, static hosting provider or web server.<br>
Or simply import your fork of the project into Netlify or Vercel - so easy!

---

## Configuring
All user-related settings goes in the `config.ts` file.
Other than that, the only other thing you need is a GitHub API key in `GITHUB_TOKEN` env var (to avoid being limited while fetching repos)

---

## Screenshot

<p align="center">
  <a href="https://as93.net">
    <img alt="screenshot" width="700" src="https://i.ibb.co/6Wq62PM/AS93-Screenshot.png" />
  </a>
</p>

---

## Contributing

Contributions are welcome! There's a standard [Code of Conduct](https://github.com/Lissy93/as93/blob/main/.github/CODE_OF_CONDUCT.md) that you should follow.<br>
If you're new to open source, I've put together some guides in [Git-In](https://github.com/Lissy93/git-into-open-source/), but feel free to reach out if you need any support.

Not a coder? You can still help, by raising bugs you find, updating docs, or consider sponsoring me on GitHub

[![Sponsor](https://img.shields.io/badge/Sponsor-Lissy93-EA4AAA?style=for-the-badge&logo=githubsponsors&labelColor=1b2744&link=https%3A%2F%2Fgithub.com%2Fsponsors%2FLissy93)](https://github.com/sponsors/Lissy93)

---

## Credits

##### Inspiration
The layout was inspired by Sindresorhus's homepage

##### Tech Credits
The app is built with Svelte + SvelteKit, and uses TypeScript and SCSS

##### Contributors

[![Contributors](https://contrib.rocks/image?repo=lissy93/as93)](https://github.com/Lissy93/as93/graphs/contributors)

<!-- readme: contributors -start -->
<!-- readme: contributors -end -->

##### Sponsors

Thank you so so much to everyone who [sponsors me on GitHub](https://github.com/sponsors/lissy93) 💖

<!-- readme: sponsors -start -->
<!-- readme: sponsors -end -->

---

## License

> _**[Lissy93/AS93](https://github.com/Lissy93/as93)** is licensed under [MIT](https://github.com/Lissy93/as93/blob/HEAD/LICENSE) © [Alicia Sykes](https://aliciasykes.com) 2024._<br>
> <sup align="right">For information, see <a href="https://tldrlegal.com/license/mit-license">TLDR Legal > MIT</a></sup>

<details>
<summary>Expand License</summary>

```
The MIT License (MIT)
Copyright (c) Alicia Sykes <alicia@omg.com> 

Permission is hereby granted, free of charge, to any person obtaining a copy 
of this software and associated documentation files (the "Software"), to deal 
in the Software without restriction, including without limitation the rights 
to use, copy, modify, merge, publish, distribute, sub-license, and/or sell 
copies of the Software, and to permit persons to whom the Software is furnished 
to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included install 
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANT ABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

</details>


<!-- License + Copyright -->
<p  align="center">
  <i>© <a href="https://aliciasykes.com">Alicia Sykes</a> 2024</i><br>
  <i>Licensed under <a href="https://gist.github.com/Lissy93/143d2ee01ccc5c052a17">MIT</a></i><br>
  <a href="https://github.com/lissy93"><img src="https://i.ibb.co/4KtpYxb/octocat-clean-mini.png" /></a><br>
  <sup>Thanks for visiting :)</sup>
</p>

<!-- Dinosaurs are Awesome -->
<!-- 
                        . - ~ ~ ~ - .
      ..     _      .-~               ~-.
     //|     \ `..~                      `.
    || |      }  }              /       \  \
(\   \\ \~^..'                 |         }  \
 \`.-~  o      /       }       |        /    \
 (__          |       /        |       /      `.
  `- - ~ ~ -._|      /_ - ~ ~ ^|      /- _      `.
              |     /          |     /     ~-.     ~- _
              |_____|          |_____|         ~ - . _ _~_-_
-->
