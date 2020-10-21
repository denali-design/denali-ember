'use strict';

const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');

const denaliCssPath = require('denali-css').getFilePath();
const denaliIconPath = require('denali-icon-font').getFilePath();

const iconFiles = ['css', 'eot', 'svg', 'ttf', 'woff'];

module.exports = {
  name: require('./package').name,

  options: {
    'ember-composable-helpers': {
      only: ['includes'],
    },
  },

  treeForVendor(tree) {
    const trees = tree ? [tree] : [];

    if (!this.hasSass) {
      const denali = new Funnel(denaliCssPath, {
        srcDir: 'css',
        files: ['denali.css'],
      });
      trees.push(denali);
    }

    const icons = new Funnel(denaliIconPath, {
      srcDir: 'dist',
      files: iconFiles.map((ext) => `denali-icon-font.${ext}`),
    });
    trees.push(icons);

    return mergeTrees(trees);
  },

  treeForStyles(tree) {
    const trees = tree ? [tree] : [];

    if (this.hasSass) {
      const denali = new Funnel(denaliCssPath, {
        srcDir: 'scss',
        destDir: 'denali',
      });
      trees.push(denali);
    }
    return mergeTrees(trees);
  },

  included(app) {
    this._super.included.apply(this, arguments);

    this.hasSass = !!app.registry.availablePlugins['ember-cli-sass'];

    // CSS Files
    if (!this.hasSass) {
      app.import('vendor/denali.css');
    }

    // Icon Files
    iconFiles.forEach((ext) => {
      app.import(`vendor/denali-icon-font.${ext}`, {
        destDir: 'assets',
      });
    });
  },
};
