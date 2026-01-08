const minifyHtml = require('@minify-html/node')

hexo.extend.filter.register('after_render:html', str =>
  minifyHtml.minify(Buffer.from(str), {}),
)

const postcss = require('postcss')
const cssnano = require('cssnano')

hexo.extend.filter.register('after_render:css', (str, data) =>
  postcss([cssnano])
    .process(str, {
      from: data.path,
      map: false,
    })
    .then(result => result.css),
)

const esbuild = require('esbuild')

hexo.extend.filter.register('after_render:js', (str, data) =>
  esbuild
    .transform(str, {
      minify: true,
      target: 'es2018',
    })
    .then(result => result.code),
)
