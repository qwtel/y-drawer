# YDrawer

YDrawer is a touch-enabled drawer menu for the mobile web.
It focuses on providing a fun, natural feel in both the Android and iOS stock browser,
while being performant and easy to use.
It is the perfect companion for mobile-first web pages or (progressive-) web apps.
[Try it!](example/mixin/){:.no-push-state}.

YDrawer can be used with a variety of tools and frameworks:
* As Vanilla JavaScript class
* As jQuery plugin
* As WebComponent, either standalone or via HTML Import
* Possibly as part of your own component hierarchy via "[ES6 Mixin][1]".


The drawer is currently used in the wild by Hydejack.

It is part of the `y-components` family, that currently has `y-push-state` as another member.

## License
The component is [GPL licensed](LICENSE.md), meaning you cannot use it in a project that isn't itself GPL licensed. For cases where this is not acceptable, there are commercial licenses available.

TODO

## Examples
* [Mixin Example](example/mixin/){:.no-push-state}
* [Vanilla JS Example](example/vanilla/){:.no-push-state}
* [jQuery Example](example/jquery/){:.no-push-state}
* [WebComponent Example](example/webcomponent/){:.no-push-state}

## Documentation

TODO

## Source
The source code is written in a "literal programming" style, and should be very approachable.
Preferred reading order:

* [mixin/index.js](doc/src/mixin/index.md)
* [vanilla/index.js](doc/src/vanilla/index.md)
* [jquery/index.js](doc/src/jquery/index.md)
* [webcomponent/index.js](doc/src/webcomponent/index.md)
* [webcomponent/html-import.js](doc/src/webcomponent/html-import.md)
* [common.js](doc/src/common.md)


## Usage
### CDN
For every bundle there are three versions that you can pick from
* The `.min.js` version is the go-to, batteries-included version that you should use.
* The `-lite.min.js` version does not bundle `core-js` polyfills.
  It is slightly smaller and can be used when you only target modern browsers, or when you've already patched the environment with `core-js` or similar.
* The unminified version (`.js`) should only be used for development.

~~~html
<script src="https://unpkg.com/y-drawer/dist/vanilla/y-drawer.min.js"></script>
<!-- or -->
<script src="https://unpkg.com/y-drawer/dist/vanilla/y-drawer-lite.min.js"></script>
<!-- or -->
<script src="https://unpkg.com/y-drawer/dist/vanilla/y-drawer.js"></script>
~~~

Note that you can replace `vanilla` with your desired platform, which can be any of `vanilla`, `jquery`, `webcomponent` or `mixin`. How the component is used depends on the platform (see below).

If you chose `vanilla`, `jquery`, or `mixin`, you need to also include the stylesheet (the WebComponent comes bundled with its own stylesheet):

~~~html
<link href="https://unpkg.com/y-drawer/dist/vanilla/style.css" rel="stylesheet" type="text/css">
~~~

#### Vanilla JS
The vanilla JS class is defined within the global `yDrawer` namespace and is called `Drawer`:

~~~html
<link href="https://unpkg.com/y-drawer/dist/vanilla/style.css" rel="stylesheet" type="text/css">
<script src="https://unpkg.com/y-drawer/dist/vanilla/y-drawer.min.js"></script>
<script>
  var Drawer = yDrawer.Drawer;
  var drawer = new Drawer(document.getElementById('drawerEl'));
</script>
~~~

#### jQuery
As is typical for jQuery plugins, it will patch the existing jQuery instance,
so you only need to call `drawer` on your target element.

~~~html
<link href="https://unpkg.com/y-drawer/dist/jquery/style.css" rel="stylesheet" type="text/css">
<script src="https://unpkg.com/jquery@3"></script>
<script src="https://unpkg.com/y-drawer/dist/jquery/y-drawer.min.js"></script>
<script>
  $('#drawerEl').drawer();
</script>
~~~

### npm
You can use `y-drawer` as part of your webpack or browserify build chain by fetching the source from npm:

    npm  install --save-dev y-drawer

Usage depends on the

~~~js
// As Vanilla JS class
const { Drawer } = require('y-drawer/lib/vanilla');
const drawer = new Drawer(node);

// As jQuery Plugin
const $ = require('jquery');
// will monkey-patch $, as jQuery plugins usually do
require('y-drawer/lib/jquery');

// As WebComponent
const { DrawerHTMLElement } = require('y-drawer/lib/webcomponent');
customElements.define('y-drawer', DrawerHTMLElement);

// As "ES6 Mixin" (advanced!)
const { drawerMixin } = require('y-drawer/lib/mixin');
class MyDrawerComponent extends drawerMixin(MyComponent) {
  // ...
}
~~~

Note that `lib` is precompiled to ES5 for convenience.
Should you target a different set, you can


[1]: http://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/
