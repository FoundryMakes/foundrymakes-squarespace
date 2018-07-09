# Foundry Squarespace Template

A fully custom Squarespace template for Foundry. Read more about [how and why we switched to Squarespace on our blog](https://www.foundrymakes.com/blog/how-and-why-we-switched-to-squarespace) to better understand the approach we used when building our site.

## Requirements

- Node / NPM
- [Squarespace Server](https://developers.squarespace.com/local-development/)
- Squarespace account with [Developer Mode enabled](https://developers.squarespace.com/beginner-tutorial/) for the website you will be using

## Develop

1. `npm install`
2. `npm install -g @squarespace/server`
3. You'll need to authenticate with your Squarespace once before the dev script will work so `squarespace-server https://site-name.squarespace.com --auth`
4. After authenticating, you can stop the server.
5. `npm run dev` to restart the server with Browsersync live reload enabled. Now changes you make to code will automatically reload in your browser and you can easily view the local site on mobile and tablet devices. Just be sure you use the Browsersync link.

![Browsersync link](assets/images/terminal.png?raw=true "Terminal Window")

## Caveats

As described on [our blog](https://www.foundrymakes.com/blog/how-and-why-we-switched-to-squarespace), this is not a true local development environment. All the content is pulled down from your site via the Squarespace API upon starting the development server. So you will need to make content changes via the Squarespace CMS and those changes will only display locally upon restarting the server. Furthermore, changes to collection files (like `blog.conf`, `blog.item`, `blog.list`) will not display locally until you commit and push changes to Squarespace. It's pretty annoying.

And this might be obvious but the template will not look right without content. It'll work, but there will be a lot of whitespace. Here's a look at how our pages are structured in Squarespace.

![Squarespace pages](assets/images/sqs-pages.png?raw=true "Squarespace pages")

## Squarespace Documentation

For further reading please consult the [Squarespace Template Overview](https://developers.squarespace.com/template-overview/) and other documentation on the Squarespace developers website. See the [Developer Getting Started](https://developers.squarespace.com/getting-started) page for an step-by-step guide for getting started with the Squaresapce Developer Platform.

### JSON-T

Squarespace template files are written in [JSON Template](https://developers.squarespace.com/what-is-json-t), also known as JSON-T. It is a simple yet expressive template language. JSON-T files have different extensions depending on the type of file, for example `.list`, `.item`, and `.region`.

### LESS

Squarespace natively supports LESS files (.less). The files are processed through the [LESS](http://lesscss.org/ preprocessor. LESS extends CSS with dynamic behavior such as variables, mixins, operations and functions.

### Template Folder Structure

Squarespace template files are organized using the following folder structure:

- **assets**: design assets — example: images, fonts and icons
- **blocks**: reusable blocks of JSON-T (AKA partials) — ex: navigation.block
- **collections**: collection files — [collection].list, [collection].item, [collection].conf
- **scripts**: Javascript files — site.js
- **styles**: stylesheet files — styles.css, styles.less
- [**root**]: sitewide files — site.region, template.conf

### /site.region

Typically this file is used as the global site template – containing the site header, footer, and sidebars. This is like the `index.html` of your site. Every template must have at least one `.region` file. Simple templates will have a single `.region`, more advanced templates will have multiple `.region` files describing header, body, and footer variants. Regions files live in the root directory of a template.

See the [Layouts & Regions documentation](https://developers.squarespace.com/layouts-regions/) for more details.

### /template.conf

Contains the configuration settings for the template. This is where you can name your template, specify layouts, add navigation sections, specify stylesheets, and other general site options. Template configuration files must live in the root directory of a template.

See the [Template Configuration documentation](https://developers.squarespace.com/template-configuration/) for more details.
