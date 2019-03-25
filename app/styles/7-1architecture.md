## 7-1 bem/scss architecture

tl;dr:

- base/
- components/
- layout/
- pages/
- themes/
- abstracts/
- vendors/

all those folders' files get imported in

- main.scss

https://sass-guidelin.es/#architecture

### Components

To keep stylesheets short and efficient, it is usually a good idea to think of an interface as a collection of components.

Components can be anything, as long as they:

- do one thing and one thing only;
- are re-usable and re-used across the project;
- are independent.

For instance, a search form should be treated as a component. It should be reusable, at different positions, on different pages, in various situations. It should not depend on its position in the DOM (footer, sidebar, main content…).

#### Component Structure

Components should exist in their own Sass partial (within the components/ folder, as is described in the 7-1 pattern below), such as `components/_button.scss`. The styles described in each component file should only be concerned with:

- the style of the component itself;
- the style of the component’s variants, modifiers, and/or states;
- the styles of the component’s descendents (i.e. children), if necessary.
If components are themed externally (e.g. from a theme inside the `themes/` folder), limit the declarations to only structural styles, such as dimensions (width/height), padding, margins, alignment, etc. Exclude styles such as colors, shadows, font rules, background rules, etc.

### Base

The `base/` folder holds boilerplate code for the project. In there, you might find the reset file, some typographic rules, and probably a stylesheet defining some standard styles for commonly used HTML elements (_base.scss).

If your project uses a lot of CSS animations, you might consider adding an `\_animations.scss` file containing the `@keyframes` definitions of all animations.

### Layout

The `layout/` folder contains everything that takes part in laying out the site or application. This folder could have stylesheets for the main parts of the site (header, footer, navigation, sidebar…), the grid system or even CSS styles for all the forms. `layout/` is **macro** (defining the global wireframe).

- _grid.scss
- _header.scss
- _footer.scss
- _sidebar.scss
- _forms.scss
- _navigation.scss

### Components

For smaller components, there is the `components/` folder. While `layout/` is macro, `components/` is more focused on **widgets**. It contains all kind of specific modules like a slider, a loader, a widget, and basically anything along those lines. There are usually a lot of files in `components/` since the whole site/application should be mostly composed of tiny modules.

- _media.scss
- _carousel.scss
- _thumbnails.scss

### Pages

If you have page-specific styles, it is better to put them in a `pages/` folder, in a file named after the page. For instance, it’s not uncommon to have very specific styles for the home page hence the need for a `_home.scss` file in `pages/`.

- _home.scss
- _contact.scss

### Themes

On large sites and applications, it is not unusual to have different themes.

- _theme.scss
- _admin.scss

This is very project-specific and is likely to be non-existent on many projects.

### Abstracts

The `abstracts/` folder gathers all Sass tools and helpers used across the project. Every global variable, function, mixin and placeholder should be put in here.

The rule of thumb for this folder is that it should not output a single line of CSS when compiled on its own. These are nothing but Sass helpers.

- _variables.scss
- _mixins.scss
- _functions.scss
- _placeholders.scss

When working on a very large project with a lot of abstract utilities, it might be interesting to group them by topic rather than type, for instance typography (`_typography.scss`), theming (`_theming.scss`), etc. Each file contains all the related helpers: variables, functions, mixins and placeholders. Doing so can make the code easier to browse and maintain, especially when files are getting very long.

### Vendors

Most projects will have a vendors/ folder containing all the CSS files from external libraries and frameworks – Normalize, Bootstrap, jQueryUI, FancyCarouselSliderjQueryPowered, and so on.

- _normalize.scss
- _bootstrap.scss
- _jquery-ui.scss
- _select2.scss

If you have to override a section of any vendor, it can be done in an 8th folder called `vendors-extensions/` with files named exactly after the vendors they overwrite.

For instance, `vendors-extensions/_bootstrap.scss` is a file containing all CSS rules intended to re-declare some of Bootstrap’s default CSS. This is to avoid editing the vendor files themselves, which is generally not a good idea.

### Main file

The main file (usually labelled `main.scss`) should be the only Sass file from the whole code base not to begin with an underscore. This file should not contain anything but `@import` and comments.

Files should be imported according to the folder they live in, one after the other in the following order:

- abstracts/
- vendors/
- base/
- layout/
- components/
- pages/
- themes/

In order to preserve readability, the main file should respect these guidelines:

- one file per @import;
- one @import per line;
- no new line between two imports from the same folder;
- a new line after the last import from a folder;
- file extensions and leading underscores omitted.