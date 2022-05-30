/*!
 * 
 *     ol-mapbox-style
 *     Copyright 2016-present Boundless Spatial
 *     Copyright© 2000-2018 SuperMap Software Co. Ltd
 *     github: https://github.com/boundlessgeo/ol-mapbox-style
 *     github: https://github.com/SuperMap/ol-mapbox-style
 *     license: BSD 2-Clause "Simplified" License
 *     version: v2.11.2-3
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ol/Map"), require("ol/Observable"), require("ol/format/GeoJSON"), require("ol/format/MVT"), require("ol/geom/Point"), require("ol/layer/Tile"), require("ol/layer/Vector"), require("ol/layer/VectorTile"), require("ol/proj"), require("ol/source/TileJSON"), require("ol/source/Vector"), require("ol/source/VectorTile"), require("ol/style/Circle"), require("ol/style/Fill"), require("ol/style/Icon"), require("ol/style/Stroke"), require("ol/style/Style"), require("ol/style/Text"), require("ol/tilegrid"));
	else if(typeof define === 'function' && define.amd)
		define(["ol/Map", "ol/Observable", "ol/format/GeoJSON", "ol/format/MVT", "ol/geom/Point", "ol/layer/Tile", "ol/layer/Vector", "ol/layer/VectorTile", "ol/proj", "ol/source/TileJSON", "ol/source/Vector", "ol/source/VectorTile", "ol/style/Circle", "ol/style/Fill", "ol/style/Icon", "ol/style/Stroke", "ol/style/Style", "ol/style/Text", "ol/tilegrid"], factory);
	else if(typeof exports === 'object')
		exports["olms"] = factory(require("ol/Map"), require("ol/Observable"), require("ol/format/GeoJSON"), require("ol/format/MVT"), require("ol/geom/Point"), require("ol/layer/Tile"), require("ol/layer/Vector"), require("ol/layer/VectorTile"), require("ol/proj"), require("ol/source/TileJSON"), require("ol/source/Vector"), require("ol/source/VectorTile"), require("ol/style/Circle"), require("ol/style/Fill"), require("ol/style/Icon"), require("ol/style/Stroke"), require("ol/style/Style"), require("ol/style/Text"), require("ol/tilegrid"));
	else
		root["olms"] = factory(root["ol"]["Map"], root["ol"]["Observable"], root["ol"]["format"]["GeoJSON"], root["ol"]["format"]["MVT"], root["ol"]["geom"]["Point"], root["ol"]["layer"]["Tile"], root["ol"]["layer"]["Vector"], root["ol"]["layer"]["VectorTile"], root["ol"]["proj"], root["ol"]["source"]["TileJSON"], root["ol"]["source"]["Vector"], root["ol"]["source"]["VectorTile"], root["ol"]["style"]["Circle"], root["ol"]["style"]["Fill"], root["ol"]["style"]["Icon"], root["ol"]["style"]["Stroke"], root["ol"]["style"]["Style"], root["ol"]["style"]["Text"], root["ol"]["tilegrid"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_ol_Map__, __WEBPACK_EXTERNAL_MODULE_ol_Observable__, __WEBPACK_EXTERNAL_MODULE_ol_format_GeoJSON__, __WEBPACK_EXTERNAL_MODULE_ol_format_MVT__, __WEBPACK_EXTERNAL_MODULE_ol_geom_Point__, __WEBPACK_EXTERNAL_MODULE_ol_layer_Tile__, __WEBPACK_EXTERNAL_MODULE_ol_layer_Vector__, __WEBPACK_EXTERNAL_MODULE_ol_layer_VectorTile__, __WEBPACK_EXTERNAL_MODULE_ol_proj__, __WEBPACK_EXTERNAL_MODULE_ol_source_TileJSON__, __WEBPACK_EXTERNAL_MODULE_ol_source_Vector__, __WEBPACK_EXTERNAL_MODULE_ol_source_VectorTile__, __WEBPACK_EXTERNAL_MODULE_ol_style_Circle__, __WEBPACK_EXTERNAL_MODULE_ol_style_Fill__, __WEBPACK_EXTERNAL_MODULE_ol_style_Icon__, __WEBPACK_EXTERNAL_MODULE_ol_style_Stroke__, __WEBPACK_EXTERNAL_MODULE_ol_style_Style__, __WEBPACK_EXTERNAL_MODULE_ol_style_Text__, __WEBPACK_EXTERNAL_MODULE_ol_tilegrid__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./olms.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /*
                                                                                                                                                                                                                                                                              ol-mapbox-style - Use Mapbox Style objects with OpenLayers
                                                                                                                                                                                                                                                                              Copyright 2016-present Boundless Spatial, Inc.
                                                                                                                                                                                                                                                                              License: https://raw.githubusercontent.com/boundlessgeo/ol-mapbox-gl-style/master/LICENSE
                                                                                                                                                                                                                                                                              */

exports.applyStyle = applyStyle;
exports.applyBackground = applyBackground;
exports.apply = apply;
exports.getLayer = getLayer;
exports.getSource = getSource;

var _mapboxGlStyleSpec = __webpack_require__(/*! @mapbox/mapbox-gl-style-spec */ "./node_modules/@mapbox/mapbox-gl-style-spec/dist/index.es.js");

var _mapboxToCssFont = __webpack_require__(/*! mapbox-to-css-font */ "./node_modules/mapbox-to-css-font/index.js");

var _mapboxToCssFont2 = _interopRequireDefault(_mapboxToCssFont);

var _stylefunction = __webpack_require__(/*! ./stylefunction */ "./stylefunction.js");

var _stylefunction2 = _interopRequireDefault(_stylefunction);

var _google = __webpack_require__(/*! webfont-matcher/lib/fonts/google */ "./node_modules/webfont-matcher/lib/fonts/google.js");

var _google2 = _interopRequireDefault(_google);

var _proj = __webpack_require__(/*! ol/proj */ "ol/proj");

var _tilegrid = __webpack_require__(/*! ol/tilegrid */ "ol/tilegrid");

var _Map = __webpack_require__(/*! ol/Map */ "ol/Map");

var _Map2 = _interopRequireDefault(_Map);

var _GeoJSON = __webpack_require__(/*! ol/format/GeoJSON */ "ol/format/GeoJSON");

var _GeoJSON2 = _interopRequireDefault(_GeoJSON);

var _MVT = __webpack_require__(/*! ol/format/MVT */ "ol/format/MVT");

var _MVT2 = _interopRequireDefault(_MVT);

var _Observable = __webpack_require__(/*! ol/Observable */ "ol/Observable");

var _Tile = __webpack_require__(/*! ol/layer/Tile */ "ol/layer/Tile");

var _Tile2 = _interopRequireDefault(_Tile);

var _Vector = __webpack_require__(/*! ol/layer/Vector */ "ol/layer/Vector");

var _Vector2 = _interopRequireDefault(_Vector);

var _VectorTile = __webpack_require__(/*! ol/layer/VectorTile */ "ol/layer/VectorTile");

var _VectorTile2 = _interopRequireDefault(_VectorTile);

var _TileJSON = __webpack_require__(/*! ol/source/TileJSON */ "ol/source/TileJSON");

var _TileJSON2 = _interopRequireDefault(_TileJSON);

var _Vector3 = __webpack_require__(/*! ol/source/Vector */ "ol/source/Vector");

var _Vector4 = _interopRequireDefault(_Vector3);

var _VectorTile3 = __webpack_require__(/*! ol/source/VectorTile */ "ol/source/VectorTile");

var _VectorTile4 = _interopRequireDefault(_VectorTile3);

var _XYZ = __webpack_require__(/*! ol/source/XYZ */ "./node_modules/ol/source/XYZ.js");

var _XYZ2 = _interopRequireDefault(_XYZ);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var availableFonts;

function loadFont(fonts) {
  var i, ii;
  if (!Array.isArray(fonts)) {
    var stops = fonts.stops;
    if (stops) {
      for (i = 0, ii = stops.length; i < ii; ++i) {
        loadFont(stops[i][1]);
      }
    }
    return;
  }
  var googleFamilies = _google2.default.getNames();
  var families = fonts.map(function (font) {
    return (0, _mapboxToCssFont2.default)(font, 1).split(' 1px ')[1].replace(/"/g, '');
  });
  for (i = 0, ii = families.length; i < ii; ++i) {
    var family = families[i];
    var font = fonts[i];
    if (googleFamilies.indexOf(family) !== -1) {
      if (!availableFonts) {
        availableFonts = [];
      }
      if (availableFonts.indexOf(font) == -1) {
        availableFonts.push(font);
        var fontUrl = 'https://fonts.googleapis.com/css?family=' + family.replace(/ /g, '+');
        if (!document.querySelector('link[href="' + fontUrl + '"]')) {
          var markup = document.createElement('link');
          markup.href = fontUrl;
          markup.rel = 'stylesheet';
          document.getElementsByTagName('head')[0].appendChild(markup);
        }
      }
      break;
    }
  }
}

var defaultFont = ['Open Sans Regular', 'Arial Regular'];

function preprocess(layer) {
  if ('layout' in layer && 'text-field' in layer.layout) {
    loadFont(layer.layout['text-font'] || defaultFont);
  }
}

var spriteRegEx = /^(.*)(\?.*)$/;

function withPath(url, path) {
  if (path && url.indexOf('http') != 0) {
    url = path + url;
  }
  return url;
}

function toSpriteUrl(url, path, extension) {
  url = withPath(url, path);
  var parts = url.match(spriteRegEx);
  return parts ? parts[1] + extension + (parts.length > 2 ? parts[2] : '') : url + extension;
}

/**
 * Applies a style function to an `ol.layer.VectorTile` or `ol.layer.Vector`
 * with an `ol.source.VectorTile` or an `ol.source.Vector`. The style function
 * will render all layers from the `glStyle` object that use the specified
 * `source`, or a subset of layers from the same source. The source needs to be
 * a `"type": "vector"`, `"type": "geojson"` or `"type": "raster"` source.
 *
 * @param {ol.layer.VectorTile} layer OpenLayers layer.
 * @param {string|Object} glStyle Mapbox Style object.
 * @param {string} source `source` key or an array of layer `id`s from the
 * Mapbox Style object. When a `source` key is provided, all layers for the
 * specified source will be included in the style function. When layer `id`s
 * are provided, they must be from layers that use the same source.
 * @param {string} [path=undefined] Path of the style file. Only required when
 * a relative path is used with the `"sprite"` property of the style.
 * @param {Array<number>} [resolutions=undefined] Resolutions for mapping resolution to zoom level.
 * @return {Promise} Promise which will be resolved when the style can be used
 * for rendering.
 */
function applyStyle(layer, glStyle, source, path, resolutions) {
  return new Promise(function (resolve, reject) {

    if ((typeof glStyle === 'undefined' ? 'undefined' : _typeof(glStyle)) != 'object') {
      glStyle = JSON.parse(glStyle);
    }
    if (glStyle.version != 8) {
      reject(new Error('glStyle version 8 required.'));
    }
    var spriteScale, spriteData, spriteImageUrl;
    if (glStyle.sprite) {
      spriteScale = window.devicePixelRatio >= 1.5 ? 0.5 : 1;
      var sizeFactor = spriteScale == 0.5 ? '@2x' : '';
      var spriteUrl = toSpriteUrl(glStyle.sprite, path, sizeFactor + '.json');

      fetch(spriteUrl, { credentials: 'same-origin' }).then(function (response) {
        // if the response is ready return the JSON promise
        if (response.status === 200) {
          return response.json();
        } else if (sizeFactor !== '') {
          // return the JSON promise for the low-resolution sprites.
          sizeFactor = '';
          spriteUrl = toSpriteUrl(glStyle.sprite, path, '.json');
          return fetch(spriteUrl, { credentials: 'same-origin' }).then(function (r) {
            return r.json();
          });
        }
      }).then(function (spritesJson) {
        if (spritesJson === undefined) {
          throw 'No sprites found.';
        }
        spriteData = spritesJson;
        spriteImageUrl = toSpriteUrl(glStyle.sprite, path, sizeFactor + '.png');
        onChange();
      }).catch(function (err) {
        console.error(err);
        reject(new Error('Sprites cannot be loaded from ' + spriteUrl));
      });
    }

    var style;
    function onChange() {
      if (!style && (!glStyle.sprite || spriteData) && (!availableFonts || availableFonts.length > 0)) {
        style = (0, _stylefunction2.default)(layer, glStyle, source, resolutions, spriteData, spriteImageUrl, availableFonts);
        resolve();
      } else if (style) {
        layer.setStyle(style);
      }
    }

    if (layer instanceof _VectorTile2.default || layer instanceof _Vector2.default) {
      try {
        var layers = glStyle.layers;
        for (var i = 0, ii = layers.length; i < ii; ++i) {
          if (typeof source == 'string' && layers[i].source == source || source.indexOf(layers[i].id) >= 0) {
            preprocess(layers[i]);
          }
        }
        onChange();
      } catch (e) {
        setTimeout(function () {
          reject(e);
        }, 0);
      }
    }
  });
}

function setBackground(map, layer) {
  var background = {
    type: layer.type
  };
  function updateStyle() {
    var element = map.getTargetElement();
    if (!element) {
      return;
    }
    var layout = layer.layout || {};
    var paint = layer.paint || {};
    background['paint'] = paint;
    background.id = 'olms-bg-' + paint['background-opacity'] + paint['background-color'];
    var zoom = map.getView().getZoom();
    if (paint['background-color'] !== undefined) {
      var bg = (0, _stylefunction.getValue)(background, 'paint', 'background-color', zoom, {});
      element.style.background = _mapboxGlStyleSpec.Color.parse(bg).toString();
    }
    if (paint['background-opacity'] !== undefined) {
      element.style.opacity = (0, _stylefunction.getValue)(background, 'paint', 'background-opacity', zoom, {});
    }
    if (layout.visibility == 'none') {
      element.style.backgroundColor = '';
      element.style.opacity = '';
    }
  }
  if (map.getTargetElement()) {
    updateStyle();
  }
  map.on(['change:resolution', 'change:target'], updateStyle);
}

/**
 * Applies properties of the Mapbox Style's first `background` layer to the map.
 * @param {ol.Map} map OpenLayers Map.
 * @param {Object} glStyle Mapbox Style object.
 */
function applyBackground(map, glStyle) {
  glStyle.layers.some(function (l) {
    if (l.type == 'background') {
      setBackground(map, l);
      return true;
    }
  });
}

function getSourceIdByRef(layers, ref) {
  var sourceId;
  layers.some(function (layer) {
    if (layer.id == ref) {
      sourceId = layer.source;
      return true;
    }
  });
  return sourceId;
}

function processStyle(glStyle, map, baseUrl, host, path, accessToken) {
  var view = map.getView();
  if ('center' in glStyle && !view.getCenter()) {
    view.setCenter((0, _proj.fromLonLat)(glStyle.center));
  }
  if ('zoom' in glStyle && view.getZoom() === undefined) {
    view.setZoom(glStyle.zoom);
  }
  if (!view.getCenter() || view.getZoom() === undefined) {
    view.fit(view.getProjection().getExtent(), {
      nearest: true,
      size: map.getSize()
    });
  }
  if (glStyle.sprite) {
    if (glStyle.sprite.indexOf('mapbox://') == 0) {
      glStyle.sprite = baseUrl + '/sprite' + accessToken;
    } else if (glStyle.sprite.indexOf('http') != 0) {
      glStyle.sprite = (host ? host + path : '') + glStyle.sprite + accessToken;
    }
  }

  var glLayers = glStyle.layers;
  var geoJsonFormat = new _GeoJSON2.default();
  var layerIds = [];

  function finalizeLayer(layer) {
    if (layerIds.length > 0) {
      map.addLayer(layer);
      var setStyle = function setStyle() {
        applyStyle(layer, glStyle, layerIds, path).then(function () {
          layer.setVisible(true);
        }, function (e) {
          /*eslint no-console: ["error", { allow: ["error"] }] */
          console.error(e);
        });
      };
      if (layer.getSource()) {
        setStyle();
      } else {
        layer.once('change:source', setStyle);
      }
    }
  }

  var glLayer, glSource, glSourceId, id, layer, mapid, url;
  for (var i = 0, ii = glLayers.length; i < ii; ++i) {
    glLayer = glLayers[i];
    if (glLayer.type == 'background') {
      setBackground(map, glLayer);
    } else {
      id = glLayer.source || getSourceIdByRef(glLayers, glLayer.ref);
      if (id != glSourceId) {
        finalizeLayer(layer);
        layerIds = [];
        glSource = glStyle.sources[id];
        url = glSource.url;
        var tiles = glSource.tiles;
        if (url) {
          if (url.indexOf('mapbox://') == 0) {
            mapid = url.replace('mapbox://', '');
            tiles = ['a', 'b', 'c', 'd'].map(function (host) {
              return 'https://' + host + '.tiles.mapbox.com/v4/' + mapid + '/{z}/{x}/{y}.' + (glSource.type == 'vector' ? 'vector.pbf' : 'png') + accessToken;
            });
          }
        }

        if (glSource.type == 'vector') {
          layer = tiles ? function () {
            var tileGrid = (0, _tilegrid.createXYZ)({
              tileSize: 512,
              maxZoom: 'maxzoom' in glSource ? glSource.maxzoom : 22,
              minZoom: glSource.minzoom
            });
            return new _VectorTile2.default({
              declutter: true,
              maxResolution: tileGrid.getMinZoom() > 0 ? tileGrid.getResolution(tileGrid.getMinZoom()) : undefined,
              source: new _VectorTile4.default({
                attributions: glSource.attribution,
                format: new _MVT2.default(),
                tileGrid: tileGrid,
                urls: tiles
              }),
              visible: false,
              zIndex: i
            });
          }() : function () {
            var layer = new _VectorTile2.default({
              declutter: true,
              visible: false,
              zIndex: i
            });
            var tilejson = new _TileJSON2.default({
              url: url
            });
            var key = tilejson.on('change', function () {
              if (tilejson.getState() == 'ready') {
                var tileJSONDoc = tilejson.getTileJSON();
                var tiles = Array.isArray(tileJSONDoc.tiles) ? tileJSONDoc.tiles : [tileJSONDoc.tiles];
                for (var i = 0, ii = tiles.length; i < ii; ++i) {
                  var tile = tiles[i];
                  if (tile.indexOf('http') != 0) {
                    tiles[i] = glSource.url + tile;
                  }
                }
                var tileGrid = tilejson.getTileGrid();
                layer.setSource(new _VectorTile4.default({
                  attributions: tilejson.getAttributions() || tileJSONDoc.attribution,
                  format: new _MVT2.default(),
                  tileGrid: (0, _tilegrid.createXYZ)({
                    minZoom: tileGrid.getMinZoom(),
                    maxZoom: tileGrid.getMaxZoom(),
                    tileSize: 512
                  }),
                  urls: tiles
                }));
                if (tileGrid.getMinZoom() > 0) {
                  layer.setMaxResolution(tileGrid.getResolution(tileGrid.getMinZoom()));
                }
                (0, _Observable.unByKey)(key);
              }
            });
            return layer;
          }();
        } else if (glSource.type == 'raster') {
          var source;
          if (!glSource.tiles) {
            source = function () {
              return new _TileJSON2.default({
                url: url,
                crossOrigin: 'anonymous'
              });
            }();
          } else {
            source = new _XYZ2.default({
              attributions: glSource.attribution,
              minZoom: glSource.minzoom,
              maxZoom: 'maxzoom' in glSource ? glSource.maxzoom : 22,
              tileSize: glSource.tileSize || 512,
              url: url,
              urls: glSource.tiles,
              crossOrigin: 'anonymous'
            });
          }
          source.setTileLoadFunction(function (tile, src) {
            if (src.indexOf('{bbox-epsg-3857}') != -1) {
              var bbox = source.getTileGrid().getTileCoordExtent(tile.getTileCoord());
              src = src.replace('{bbox-epsg-3857}', bbox.toString());
            }
            tile.getImage().src = src;
          });
          layer = new _Tile2.default({
            source: source,
            visible: glLayer.layout ? glLayer.layout.visibility !== 'none' : true
          });
        } else if (glSource.type == 'geojson') {
          var data = glSource.data;
          var features, geoJsonUrl;
          if (typeof data == 'string') {
            geoJsonUrl = withPath(data, path);
          } else {
            features = geoJsonFormat.readFeatures(data, { featureProjection: 'EPSG:3857' });
          }
          layer = new _Vector2.default({
            source: new _Vector4.default({
              attributions: glSource.attribution,
              features: features,
              format: geoJsonFormat,
              url: geoJsonUrl
            }),
            visible: false,
            zIndex: i
          });
        }
        glSourceId = id;
      }
      layerIds.push(glLayer.id);
    }
  }
  finalizeLayer(layer);
  map.set('mapbox-style', glStyle);
}

/**
 * Loads and applies a Mapbox Style object to an OpenLayers Map. This includes
 * the map background, the layers, the center and the zoom.
 *
 * The center and zoom will only be set if present in the Mapbox Style document,
 * and if not already set on the OpenLayers map.
 *
 * Layers will be added to the OpenLayers map, without affecting any layers that
 * might already be set on the map.
 *
 * Layers added by `apply()` will have two additional properties:
 *
 *  * `mapbox-source`: The `id` of the Mapbox Style document's source that the
 *    OpenLayers layer was created from. Usually `apply()` creates one
 *    OpenLayers layer per Mapbox Style source, unless the layer stack has
 *    layers from different sources in between.
 *  * `mapbox-layers`: The `id`s of the Mapbox Style document's layers that are
 *    included in the OpenLayers layer.
 *
 * The map returned by this function will have an additional `mapbox-style`
 * property which holds the Mapbox Style object.
 *
 * @param {ol.Map|HTMLElement|string} map Either an existing OpenLayers Map
 * instance, or a HTML element, or the id of a HTML element that will be the
 * target of a new OpenLayers Map.
 * @param {string|Object} style JSON style object or style url pointing to a
 * Mapbox Style object. When using Mapbox APIs, the url must contain an access
 * token and look like
 * `https://api.mapbox.com/styles/v1/mapbox/bright-v9?access_token=[your_access_token_here]`.
 * When passed as JSON style object, all OpenLayers layers created by `apply()`
 * will be immediately available, but they may not have a source yet (i.e. when
 * they are defined by a TileJSON url in the Mapbox Style document). When passed
 * as style url, layers will be added to the map when the Mapbox Style document
 * is loaded and parsed.
 * @return {ol.Map} The OpenLayers Map instance that will be populated with the
 * contents described in the Mapbox Style object.
 */
function apply(map, style) {

  var accessToken, baseUrl, host, path;
  accessToken = baseUrl = host = path = '';

  if (!(map instanceof _Map2.default)) {
    map = new _Map2.default({
      target: map
    });
  }

  if (typeof style === 'string') {
    var parts = style.match(spriteRegEx);
    if (parts) {
      baseUrl = parts[1];
      accessToken = parts.length > 2 ? parts[2] : '';
    }

    fetch(style, {
      credentials: 'same-origin'
    }).then(function (response) {
      return response.json();
    }).then(function (glStyle) {
      var a = document.createElement('A');
      a.href = style;
      path = a.pathname.split('/').slice(0, -1).join('/') + '/';
      host = style.substr(0, style.indexOf(path));

      processStyle(glStyle, map, baseUrl, host, path, accessToken);
    }).catch(function (err) {
      console.error(err);
      throw new Error('Could not load ' + style);
    });
  } else {
    setTimeout(function () {
      processStyle(style, map);
    }, 0);
  }
  return map;
}

/**
 * Get the OpenLayers layer instance that contains the provided Mapbox Style
 * `layer`. Note that multiple Mapbox Style layers are combined in a single
 * OpenLayers layer instance when they use the same Mapbox Style `source`.
 * @param {ol.Map} map OpenLayers Map.
 * @param {string} layerId Mapbox Style layer id.
 * @return {ol.layer.Layer} layer OpenLayers layer instance.
 */
function getLayer(map, layerId) {
  var layers = map.getLayers().getArray();
  for (var i = 0, ii = layers.length; i < ii; ++i) {
    if (layers[i].get('mapbox-layers').indexOf(layerId) !== -1) {
      return layers[i];
    }
  }
}

/**
 * Get the OpenLayers source instance for the provided Mapbox Style `source`.
 * @param {ol.Map} map OpenLayers Map.
 * @param {string} sourceId Mapbox Style source id.
 * @return {ol.layer.Layer} layer OpenLayers layer instance.
 */
function getSource(map, sourceId) {
  var layers = map.getLayers().getArray();
  for (var i = 0, ii = layers.length; i < ii; ++i) {
    var source = layers[i].getSource();
    if (layers[i].get('mapbox-source').indexOf(sourceId) !== -1) {
      return source;
    }
  }
}

/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-style-spec/dist/index.es.js":
/*!********************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-style-spec/dist/index.es.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, Buffer) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var $version = 8;
var $root = {
    version: {
        required: true,
        type: "enum",
        values: [8],
        doc: "Style specification version number. Must be 8.",
        example: 8
    },
    name: {
        type: "string",
        doc: "A human-readable name for the style.",
        example: "Bright"
    },
    metadata: {
        type: "*",
        doc: "Arbitrary properties useful to track with the stylesheet, but do not influence rendering. Properties should be prefixed to avoid collisions, like 'mapbox:'."
    },
    center: {
        type: "array",
        value: "number",
        doc: "Default map center in longitude and latitude.  The style center will be used only if the map has not been positioned by other means (e.g. map options or user interaction).",
        example: [-73.9749, 40.7736]
    },
    zoom: {
        type: "number",
        doc: "Default zoom level.  The style zoom will be used only if the map has not been positioned by other means (e.g. map options or user interaction).",
        example: 12.5
    },
    bearing: {
        type: "number",
        "default": 0,
        period: 360,
        units: "degrees",
        doc: "Default bearing, in degrees. The bearing is the compass direction that is \"up\"; for example, a bearing of 90° orients the map so that east is up. This value will be used only if the map has not been positioned by other means (e.g. map options or user interaction).",
        example: 29
    },
    pitch: {
        type: "number",
        "default": 0,
        units: "degrees",
        doc: "Default pitch, in degrees. Zero is perpendicular to the surface, for a look straight down at the map, while a greater value like 60 looks ahead towards the horizon. The style pitch will be used only if the map has not been positioned by other means (e.g. map options or user interaction).",
        example: 50
    },
    light: {
        type: "light",
        doc: "The global light source.",
        example: {
            anchor: "viewport",
            color: "white",
            intensity: 0.4
        }
    },
    sources: {
        required: true,
        type: "sources",
        doc: "Data source specifications.",
        example: {
            "mapbox-streets": {
                type: "vector",
                url: "mapbox://mapbox.mapbox-streets-v6"
            }
        }
    },
    sprite: {
        type: "string",
        doc: "A base URL for retrieving the sprite image and metadata. The extensions `.png`, `.json` and scale factor `@2x.png` will be automatically appended. This property is required if any layer uses the `background-pattern`, `fill-pattern`, `line-pattern`, `fill-extrusion-pattern`, or `icon-image` properties. The URL must be absolute, containing the [scheme, authority and path components](https://en.wikipedia.org/wiki/URL#Syntax).",
        example: "mapbox://sprites/mapbox/bright-v8"
    },
    glyphs: {
        type: "string",
        doc: "A URL template for loading signed-distance-field glyph sets in PBF format. The URL must include `{fontstack}` and `{range}` tokens. This property is required if any layer uses the `text-field` layout property. The URL must be absolute, containing the [scheme, authority and path components](https://en.wikipedia.org/wiki/URL#Syntax).",
        example: "mapbox://fonts/mapbox/{fontstack}/{range}.pbf"
    },
    transition: {
        type: "transition",
        doc: "A global transition definition to use as a default across properties, to be used for timing transitions between one value and the next when no property-specific transition is set. Collision-based symbol fading is controlled independently of the style's `transition` property.",
        example: {
            duration: 300,
            delay: 0
        }
    },
    layers: {
        required: true,
        type: "array",
        value: "layer",
        doc: "Layers will be drawn in the order of this array.",
        example: [{
            id: "water",
            source: "mapbox-streets",
            "source-layer": "water",
            type: "fill",
            paint: {
                "fill-color": "#00ffff"
            }
        }]
    }
};
var sources = {
    "*": {
        type: "source",
        doc: "Specification of a data source. For vector and raster sources, either TileJSON or a URL to a TileJSON must be provided. For image and video sources, a URL must be provided. For GeoJSON sources, a URL or inline GeoJSON must be provided."
    }
};
var source = ["source_vector", "source_raster", "source_raster_dem", "source_geojson", "source_video", "source_image"];
var source_vector = {
    type: {
        required: true,
        type: "enum",
        values: {
            vector: {
                doc: "A vector tile source."
            }
        },
        doc: "The type of the source."
    },
    url: {
        type: "string",
        doc: "A URL to a TileJSON resource. Supported protocols are `http:`, `https:`, and `mapbox://<Tileset ID>`."
    },
    tiles: {
        type: "array",
        value: "string",
        doc: "An array of one or more tile source URLs, as in the TileJSON spec."
    },
    bounds: {
        type: "array",
        value: "number",
        length: 4,
        "default": [-180, -85.051129, 180, 85.051129],
        doc: "An array containing the longitude and latitude of the southwest and northeast corners of the source's bounding box in the following order: `[sw.lng, sw.lat, ne.lng, ne.lat]`. When this property is included in a source, no tiles outside of the given bounds are requested by Mapbox GL."
    },
    scheme: {
        type: "enum",
        values: {
            xyz: {
                doc: "Slippy map tilenames scheme."
            },
            tms: {
                doc: "OSGeo spec scheme."
            }
        },
        "default": "xyz",
        doc: "Influences the y direction of the tile coordinates. The global-mercator (aka Spherical Mercator) profile is assumed."
    },
    minzoom: {
        type: "number",
        "default": 0,
        doc: "Minimum zoom level for which tiles are available, as in the TileJSON spec."
    },
    maxzoom: {
        type: "number",
        "default": 22,
        doc: "Maximum zoom level for which tiles are available, as in the TileJSON spec. Data from tiles at the maxzoom are used when displaying the map at higher zoom levels."
    },
    attribution: {
        type: "string",
        doc: "Contains an attribution to be displayed when the map is shown to a user."
    },
    promoteId: {
        type: "promoteId",
        doc: "A property to use as a feature id (for feature state). Either a property name, or an object of the form `{<sourceLayer>: <propertyName>}`. If specified as a string for a vector tile source, the same property is used across all its source layers."
    },
    "*": {
        type: "*",
        doc: "Other keys to configure the data source."
    }
};
var source_raster = {
    type: {
        required: true,
        type: "enum",
        values: {
            raster: {
                doc: "A raster tile source."
            }
        },
        doc: "The type of the source."
    },
    url: {
        type: "string",
        doc: "A URL to a TileJSON resource. Supported protocols are `http:`, `https:`, and `mapbox://<Tileset ID>`."
    },
    tiles: {
        type: "array",
        value: "string",
        doc: "An array of one or more tile source URLs, as in the TileJSON spec."
    },
    bounds: {
        type: "array",
        value: "number",
        length: 4,
        "default": [-180, -85.051129, 180, 85.051129],
        doc: "An array containing the longitude and latitude of the southwest and northeast corners of the source's bounding box in the following order: `[sw.lng, sw.lat, ne.lng, ne.lat]`. When this property is included in a source, no tiles outside of the given bounds are requested by Mapbox GL."
    },
    minzoom: {
        type: "number",
        "default": 0,
        doc: "Minimum zoom level for which tiles are available, as in the TileJSON spec."
    },
    maxzoom: {
        type: "number",
        "default": 22,
        doc: "Maximum zoom level for which tiles are available, as in the TileJSON spec. Data from tiles at the maxzoom are used when displaying the map at higher zoom levels."
    },
    tileSize: {
        type: "number",
        "default": 512,
        units: "pixels",
        doc: "The minimum visual size to display tiles for this layer. Only configurable for raster layers."
    },
    scheme: {
        type: "enum",
        values: {
            xyz: {
                doc: "Slippy map tilenames scheme."
            },
            tms: {
                doc: "OSGeo spec scheme."
            }
        },
        "default": "xyz",
        doc: "Influences the y direction of the tile coordinates. The global-mercator (aka Spherical Mercator) profile is assumed."
    },
    attribution: {
        type: "string",
        doc: "Contains an attribution to be displayed when the map is shown to a user."
    },
    "*": {
        type: "*",
        doc: "Other keys to configure the data source."
    }
};
var source_raster_dem = {
    type: {
        required: true,
        type: "enum",
        values: {
            "raster-dem": {
                doc: "A RGB-encoded raster DEM source"
            }
        },
        doc: "The type of the source."
    },
    url: {
        type: "string",
        doc: "A URL to a TileJSON resource. Supported protocols are `http:`, `https:`, and `mapbox://<Tileset ID>`."
    },
    tiles: {
        type: "array",
        value: "string",
        doc: "An array of one or more tile source URLs, as in the TileJSON spec."
    },
    bounds: {
        type: "array",
        value: "number",
        length: 4,
        "default": [-180, -85.051129, 180, 85.051129],
        doc: "An array containing the longitude and latitude of the southwest and northeast corners of the source's bounding box in the following order: `[sw.lng, sw.lat, ne.lng, ne.lat]`. When this property is included in a source, no tiles outside of the given bounds are requested by Mapbox GL."
    },
    minzoom: {
        type: "number",
        "default": 0,
        doc: "Minimum zoom level for which tiles are available, as in the TileJSON spec."
    },
    maxzoom: {
        type: "number",
        "default": 22,
        doc: "Maximum zoom level for which tiles are available, as in the TileJSON spec. Data from tiles at the maxzoom are used when displaying the map at higher zoom levels."
    },
    tileSize: {
        type: "number",
        "default": 512,
        units: "pixels",
        doc: "The minimum visual size to display tiles for this layer. Only configurable for raster layers."
    },
    attribution: {
        type: "string",
        doc: "Contains an attribution to be displayed when the map is shown to a user."
    },
    encoding: {
        type: "enum",
        values: {
            terrarium: {
                doc: "Terrarium format PNG tiles. See https://aws.amazon.com/es/public-datasets/terrain/ for more info."
            },
            mapbox: {
                doc: "Mapbox Terrain RGB tiles. See https://www.mapbox.com/help/access-elevation-data/#mapbox-terrain-rgb for more info."
            }
        },
        "default": "mapbox",
        doc: "The encoding used by this source. Mapbox Terrain RGB is used by default"
    },
    "*": {
        type: "*",
        doc: "Other keys to configure the data source."
    }
};
var source_geojson = {
    type: {
        required: true,
        type: "enum",
        values: {
            geojson: {
                doc: "A GeoJSON data source."
            }
        },
        doc: "The data type of the GeoJSON source."
    },
    data: {
        type: "*",
        doc: "A URL to a GeoJSON file, or inline GeoJSON."
    },
    maxzoom: {
        type: "number",
        "default": 18,
        doc: "Maximum zoom level at which to create vector tiles (higher means greater detail at high zoom levels)."
    },
    attribution: {
        type: "string",
        doc: "Contains an attribution to be displayed when the map is shown to a user."
    },
    buffer: {
        type: "number",
        "default": 128,
        maximum: 512,
        minimum: 0,
        doc: "Size of the tile buffer on each side. A value of 0 produces no buffer. A value of 512 produces a buffer as wide as the tile itself. Larger values produce fewer rendering artifacts near tile edges and slower performance."
    },
    tolerance: {
        type: "number",
        "default": 0.375,
        doc: "Douglas-Peucker simplification tolerance (higher means simpler geometries and faster performance)."
    },
    cluster: {
        type: "boolean",
        "default": false,
        doc: "If the data is a collection of point features, setting this to true clusters the points by radius into groups. Cluster groups become new `Point` features in the source with additional properties:\n * `cluster` Is `true` if the point is a cluster \n * `cluster_id` A unqiue id for the cluster to be used in conjunction with the [cluster inspection methods](https://www.mapbox.com/mapbox-gl-js/api/#geojsonsource#getclusterexpansionzoom)\n * `point_count` Number of original points grouped into this cluster\n * `point_count_abbreviated` An abbreviated point count"
    },
    clusterRadius: {
        type: "number",
        "default": 50,
        minimum: 0,
        doc: "Radius of each cluster if clustering is enabled. A value of 512 indicates a radius equal to the width of a tile."
    },
    clusterMaxZoom: {
        type: "number",
        doc: "Max zoom on which to cluster points if clustering is enabled. Defaults to one zoom less than maxzoom (so that last zoom features are not clustered)."
    },
    clusterProperties: {
        type: "*",
        doc: "An object defining custom properties on the generated clusters if clustering is enabled, aggregating values from clustered points. Has the form `{\"property_name\": [operator, map_expression]}`. `operator` is any expression function that accepts at least 2 operands (e.g. `\"+\"` or `\"max\"`) — it accumulates the property value from clusters/points the cluster contains; `map_expression` produces the value of a single point.\n\nExample: `{\"sum\": [\"+\", [\"get\", \"scalerank\"]]}`.\n\nFor more advanced use cases, in place of `operator`, you can use a custom reduce expression that references a special `[\"accumulated\"]` value, e.g.:\n`{\"sum\": [[\"+\", [\"accumulated\"], [\"get\", \"sum\"]], [\"get\", \"scalerank\"]]}`"
    },
    lineMetrics: {
        type: "boolean",
        "default": false,
        doc: "Whether to calculate line distance metrics. This is required for line layers that specify `line-gradient` values."
    },
    generateId: {
        type: "boolean",
        "default": false,
        doc: "Whether to generate ids for the geojson features. When enabled, the `feature.id` property will be auto assigned based on its index in the `features` array, over-writing any previous values."
    },
    promoteId: {
        type: "promoteId",
        doc: "A property to use as a feature id (for feature state). Either a property name, or an object of the form `{<sourceLayer>: <propertyName>}`."
    }
};
var source_video = {
    type: {
        required: true,
        type: "enum",
        values: {
            video: {
                doc: "A video data source."
            }
        },
        doc: "The data type of the video source."
    },
    urls: {
        required: true,
        type: "array",
        value: "string",
        doc: "URLs to video content in order of preferred format."
    },
    coordinates: {
        required: true,
        doc: "Corners of video specified in longitude, latitude pairs.",
        type: "array",
        length: 4,
        value: {
            type: "array",
            length: 2,
            value: "number",
            doc: "A single longitude, latitude pair."
        }
    }
};
var source_image = {
    type: {
        required: true,
        type: "enum",
        values: {
            image: {
                doc: "An image data source."
            }
        },
        doc: "The data type of the image source."
    },
    url: {
        required: true,
        type: "string",
        doc: "URL that points to an image."
    },
    coordinates: {
        required: true,
        doc: "Corners of image specified in longitude, latitude pairs.",
        type: "array",
        length: 4,
        value: {
            type: "array",
            length: 2,
            value: "number",
            doc: "A single longitude, latitude pair."
        }
    }
};
var layer = {
    id: {
        type: "string",
        doc: "Unique layer name.",
        required: true
    },
    type: {
        type: "enum",
        values: {
            fill: {
                doc: "A filled polygon with an optional stroked border.",
                "sdk-support": {
                    "basic functionality": {
                        js: "0.10.0",
                        android: "2.0.1",
                        ios: "2.0.0",
                        macos: "0.1.0"
                    }
                }
            },
            line: {
                doc: "A stroked line.",
                "sdk-support": {
                    "basic functionality": {
                        js: "0.10.0",
                        android: "2.0.1",
                        ios: "2.0.0",
                        macos: "0.1.0"
                    }
                }
            },
            symbol: {
                doc: "An icon or a text label.",
                "sdk-support": {
                    "basic functionality": {
                        js: "0.10.0",
                        android: "2.0.1",
                        ios: "2.0.0",
                        macos: "0.1.0"
                    }
                }
            },
            circle: {
                doc: "A filled circle.",
                "sdk-support": {
                    "basic functionality": {
                        js: "0.10.0",
                        android: "2.0.1",
                        ios: "2.0.0",
                        macos: "0.1.0"
                    }
                }
            },
            heatmap: {
                doc: "A heatmap.",
                "sdk-support": {
                    "basic functionality": {
                        js: "0.41.0",
                        android: "6.0.0",
                        ios: "4.0.0",
                        macos: "0.7.0"
                    }
                }
            },
            "fill-extrusion": {
                doc: "An extruded (3D) polygon.",
                "sdk-support": {
                    "basic functionality": {
                        js: "0.27.0",
                        android: "5.1.0",
                        ios: "3.6.0",
                        macos: "0.5.0"
                    }
                }
            },
            raster: {
                doc: "Raster map textures such as satellite imagery.",
                "sdk-support": {
                    "basic functionality": {
                        js: "0.10.0",
                        android: "2.0.1",
                        ios: "2.0.0",
                        macos: "0.1.0"
                    }
                }
            },
            hillshade: {
                doc: "Client-side hillshading visualization based on DEM data. Currently, the implementation only supports Mapbox Terrain RGB and Mapzen Terrarium tiles.",
                "sdk-support": {
                    "basic functionality": {
                        js: "0.43.0",
                        android: "6.0.0",
                        ios: "4.0.0",
                        macos: "0.7.0"
                    }
                }
            },
            background: {
                doc: "The background color or pattern of the map.",
                "sdk-support": {
                    "basic functionality": {
                        js: "0.10.0",
                        android: "2.0.1",
                        ios: "2.0.0",
                        macos: "0.1.0"
                    }
                }
            }
        },
        doc: "Rendering type of this layer.",
        required: true
    },
    metadata: {
        type: "*",
        doc: "Arbitrary properties useful to track with the layer, but do not influence rendering. Properties should be prefixed to avoid collisions, like 'mapbox:'."
    },
    source: {
        type: "string",
        doc: "Name of a source description to be used for this layer. Required for all layer types except `background`."
    },
    "source-layer": {
        type: "string",
        doc: "Layer to use from a vector tile source. Required for vector tile sources; prohibited for all other source types, including GeoJSON sources."
    },
    minzoom: {
        type: "number",
        minimum: 0,
        maximum: 24,
        doc: "The minimum zoom level for the layer. At zoom levels less than the minzoom, the layer will be hidden."
    },
    maxzoom: {
        type: "number",
        minimum: 0,
        maximum: 24,
        doc: "The maximum zoom level for the layer. At zoom levels equal to or greater than the maxzoom, the layer will be hidden."
    },
    filter: {
        type: "filter",
        doc: "A expression specifying conditions on source features. Only features that match the filter are displayed. Zoom expressions in filters are only evaluated at integer zoom levels. The `feature-state` expression is not supported in filter expressions."
    },
    layout: {
        type: "layout",
        doc: "Layout properties for the layer."
    },
    paint: {
        type: "paint",
        doc: "Default paint properties for this layer."
    }
};
var layout = ["layout_fill", "layout_line", "layout_circle", "layout_heatmap", "layout_fill-extrusion", "layout_symbol", "layout_raster", "layout_hillshade", "layout_background"];
var layout_background = {
    visibility: {
        type: "enum",
        values: {
            visible: {
                doc: "The layer is shown."
            },
            none: {
                doc: "The layer is not shown."
            }
        },
        "default": "visible",
        doc: "Whether this layer is displayed.",
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            }
        },
        "property-type": "constant"
    }
};
var layout_fill = {
    "fill-sort-key": {
        type: "number",
        doc: "Sorts features in ascending order based on this value. Features with a higher sort key will appear above features with a lower sort key.",
        "sdk-support": {
            "basic functionality": {
                js: "1.2.0"
            },
            "data-driven styling": {
                js: "1.2.0"
            }
        },
        expression: {
            interpolated: false,
            parameters: ["zoom", "feature"]
        },
        "property-type": "data-driven"
    },
    visibility: {
        type: "enum",
        values: {
            visible: {
                doc: "The layer is shown."
            },
            none: {
                doc: "The layer is not shown."
            }
        },
        "default": "visible",
        doc: "Whether this layer is displayed.",
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            }
        },
        "property-type": "constant"
    }
};
var layout_circle = {
    "circle-sort-key": {
        type: "number",
        doc: "Sorts features in ascending order based on this value. Features with a higher sort key will appear above features with a lower sort key.",
        "sdk-support": {
            "basic functionality": {
                js: "1.2.0"
            },
            "data-driven styling": {
                js: "1.2.0"
            }
        },
        expression: {
            interpolated: false,
            parameters: ["zoom", "feature"]
        },
        "property-type": "data-driven"
    },
    visibility: {
        type: "enum",
        values: {
            visible: {
                doc: "The layer is shown."
            },
            none: {
                doc: "The layer is not shown."
            }
        },
        "default": "visible",
        doc: "Whether this layer is displayed.",
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            }
        },
        "property-type": "constant"
    }
};
var layout_heatmap = {
    visibility: {
        type: "enum",
        values: {
            visible: {
                doc: "The layer is shown."
            },
            none: {
                doc: "The layer is not shown."
            }
        },
        "default": "visible",
        doc: "Whether this layer is displayed.",
        "sdk-support": {
            "basic functionality": {
                js: "0.41.0",
                android: "6.0.0",
                ios: "4.0.0",
                macos: "0.7.0"
            }
        },
        "property-type": "constant"
    }
};
var layout_line = {
    "line-cap": {
        type: "enum",
        values: {
            butt: {
                doc: "A cap with a squared-off end which is drawn to the exact endpoint of the line."
            },
            round: {
                doc: "A cap with a rounded end which is drawn beyond the endpoint of the line at a radius of one-half of the line's width and centered on the endpoint of the line."
            },
            square: {
                doc: "A cap with a squared-off end which is drawn beyond the endpoint of the line at a distance of one-half of the line's width."
            }
        },
        "default": "butt",
        doc: "The display of line endings.",
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            }
        },
        expression: {
            interpolated: false,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "line-join": {
        type: "enum",
        values: {
            bevel: {
                doc: "A join with a squared-off end which is drawn beyond the endpoint of the line at a distance of one-half of the line's width."
            },
            round: {
                doc: "A join with a rounded end which is drawn beyond the endpoint of the line at a radius of one-half of the line's width and centered on the endpoint of the line."
            },
            miter: {
                doc: "A join with a sharp, angled corner which is drawn with the outer sides beyond the endpoint of the path until they meet."
            }
        },
        "default": "miter",
        doc: "The display of lines when joining.",
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            },
            "data-driven styling": {
                js: "0.40.0",
                android: "5.2.0",
                ios: "3.7.0",
                macos: "0.6.0"
            }
        },
        expression: {
            interpolated: false,
            parameters: ["zoom", "feature"]
        },
        "property-type": "data-driven"
    },
    "line-miter-limit": {
        type: "number",
        "default": 2,
        doc: "Used to automatically convert miter joins to bevel joins for sharp angles.",
        requires: [{
            "line-join": "miter"
        }],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "line-round-limit": {
        type: "number",
        "default": 1.05,
        doc: "Used to automatically convert round joins to miter joins for shallow angles.",
        requires: [{
            "line-join": "round"
        }],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "line-sort-key": {
        type: "number",
        doc: "Sorts features in ascending order based on this value. Features with a higher sort key will appear above features with a lower sort key.",
        "sdk-support": {
            "basic functionality": {
                js: "1.2.0"
            },
            "data-driven styling": {
                js: "1.2.0"
            }
        },
        expression: {
            interpolated: false,
            parameters: ["zoom", "feature"]
        },
        "property-type": "data-driven"
    },
    visibility: {
        type: "enum",
        values: {
            visible: {
                doc: "The layer is shown."
            },
            none: {
                doc: "The layer is not shown."
            }
        },
        "default": "visible",
        doc: "Whether this layer is displayed.",
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            }
        },
        "property-type": "constant"
    }
};
var layout_symbol = {
    "symbol-placement": {
        type: "enum",
        values: {
            point: {
                doc: "The label is placed at the point where the geometry is located."
            },
            line: {
                doc: "The label is placed along the line of the geometry. Can only be used on `LineString` and `Polygon` geometries."
            },
            "line-center": {
                doc: "The label is placed at the center of the line of the geometry. Can only be used on `LineString` and `Polygon` geometries. Note that a single feature in a vector tile may contain multiple line geometries."
            }
        },
        "default": "point",
        doc: "Label placement relative to its geometry.",
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            },
            "`line-center` value": {
                js: "0.47.0",
                android: "6.4.0",
                ios: "4.3.0",
                macos: "0.10.0"
            }
        },
        expression: {
            interpolated: false,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "symbol-spacing": {
        type: "number",
        "default": 250,
        minimum: 1,
        units: "pixels",
        doc: "Distance between two symbol anchors.",
        requires: [{
            "symbol-placement": "line"
        }],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "symbol-avoid-edges": {
        type: "boolean",
        "default": false,
        doc: "If true, the symbols will not cross tile edges to avoid mutual collisions. Recommended in layers that don't have enough padding in the vector tile to prevent collisions, or if it is a point symbol layer placed after a line symbol layer. When using a client that supports global collision detection, like Mapbox GL JS version 0.42.0 or greater, enabling this property is not needed to prevent clipped labels at tile boundaries.",
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            }
        },
        expression: {
            interpolated: false,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "symbol-sort-key": {
        type: "number",
        doc: "Sorts features in ascending order based on this value. Features with lower sort keys are drawn and placed first.  When `icon-allow-overlap` or `text-allow-overlap` is `false`, features with a lower sort key will have priority during placement. When `icon-allow-overlap` or `text-allow-overlap` is set to `true`, features with a higher sort key will overlap over features with a lower sort key.",
        "sdk-support": {
            "basic functionality": {
                js: "0.53.0",
                android: "7.4.0",
                ios: "4.11.0",
                macos: "0.14.0"
            },
            "data-driven styling": {
                js: "0.53.0",
                android: "7.4.0",
                ios: "4.11.0",
                macos: "0.14.0"
            }
        },
        expression: {
            interpolated: false,
            parameters: ["zoom", "feature"]
        },
        "property-type": "data-driven"
    },
    "symbol-z-order": {
        type: "enum",
        values: {
            auto: {
                doc: "If `symbol-sort-key` is set, sort based on that. Otherwise sort symbols by their y-position relative to the viewport."
            },
            "viewport-y": {
                doc: "Symbols will be sorted by their y-position relative to the viewport."
            },
            source: {
                doc: "Symbols will be rendered in the same order as the source data with no sorting applied."
            }
        },
        "default": "auto",
        doc: "Controls the order in which overlapping symbols in the same layer are rendered",
        "sdk-support": {
            "basic functionality": {
                js: "0.49.0",
                android: "6.6.0",
                ios: "4.5.0",
                macos: "0.12.0"
            }
        },
        expression: {
            interpolated: false,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "icon-allow-overlap": {
        type: "boolean",
        "default": false,
        doc: "If true, the icon will be visible even if it collides with other previously drawn symbols.",
        requires: ["icon-image"],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            }
        },
        expression: {
            interpolated: false,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "icon-ignore-placement": {
        type: "boolean",
        "default": false,
        doc: "If true, other symbols can be visible even if they collide with the icon.",
        requires: ["icon-image"],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            }
        },
        expression: {
            interpolated: false,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "icon-optional": {
        type: "boolean",
        "default": false,
        doc: "If true, text will display without their corresponding icons when the icon collides with other symbols and the text does not.",
        requires: ["icon-image", "text-field"],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            }
        },
        expression: {
            interpolated: false,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "icon-rotation-alignment": {
        type: "enum",
        values: {
            map: {
                doc: "When `symbol-placement` is set to `point`, aligns icons east-west. When `symbol-placement` is set to `line` or `line-center`, aligns icon x-axes with the line."
            },
            viewport: {
                doc: "Produces icons whose x-axes are aligned with the x-axis of the viewport, regardless of the value of `symbol-placement`."
            },
            auto: {
                doc: "When `symbol-placement` is set to `point`, this is equivalent to `viewport`. When `symbol-placement` is set to `line` or `line-center`, this is equivalent to `map`."
            }
        },
        "default": "auto",
        doc: "In combination with `symbol-placement`, determines the rotation behavior of icons.",
        requires: ["icon-image"],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            },
            "`auto` value": {
                js: "0.25.0",
                android: "4.2.0",
                ios: "3.4.0",
                macos: "0.3.0"
            }
        },
        expression: {
            interpolated: false,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "icon-size": {
        type: "number",
        "default": 1,
        minimum: 0,
        units: "factor of the original icon size",
        doc: "Scales the original size of the icon by the provided factor. The new pixel size of the image will be the original pixel size multiplied by `icon-size`. 1 is the original size; 3 triples the size of the image.",
        requires: ["icon-image"],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            },
            "data-driven styling": {
                js: "0.35.0",
                android: "5.1.0",
                ios: "3.6.0",
                macos: "0.5.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom", "feature"]
        },
        "property-type": "data-driven"
    },
    "icon-text-fit": {
        type: "enum",
        values: {
            none: {
                doc: "The icon is displayed at its intrinsic aspect ratio."
            },
            width: {
                doc: "The icon is scaled in the x-dimension to fit the width of the text."
            },
            height: {
                doc: "The icon is scaled in the y-dimension to fit the height of the text."
            },
            both: {
                doc: "The icon is scaled in both x- and y-dimensions."
            }
        },
        "default": "none",
        doc: "Scales the icon to fit around the associated text.",
        requires: ["icon-image", "text-field"],
        "sdk-support": {
            "basic functionality": {
                js: "0.21.0",
                android: "4.2.0",
                ios: "3.4.0",
                macos: "0.2.1"
            }
        },
        expression: {
            interpolated: false,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "icon-text-fit-padding": {
        type: "array",
        value: "number",
        length: 4,
        "default": [0, 0, 0, 0],
        units: "pixels",
        doc: "Size of the additional area added to dimensions determined by `icon-text-fit`, in clockwise order: top, right, bottom, left.",
        requires: ["icon-image", "text-field", {
            "icon-text-fit": ["both", "width", "height"]
        }],
        "sdk-support": {
            "basic functionality": {
                js: "0.21.0",
                android: "4.2.0",
                ios: "3.4.0",
                macos: "0.2.1"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "icon-image": {
        type: "resolvedImage",
        doc: "Name of image in sprite to use for drawing an image background.",
        tokens: true,
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            },
            "data-driven styling": {
                js: "0.35.0",
                android: "5.1.0",
                ios: "3.6.0",
                macos: "0.5.0"
            }
        },
        expression: {
            interpolated: false,
            parameters: ["zoom", "feature"]
        },
        "property-type": "data-driven"
    },
    "icon-rotate": {
        type: "number",
        "default": 0,
        period: 360,
        units: "degrees",
        doc: "Rotates the icon clockwise.",
        requires: ["icon-image"],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            },
            "data-driven styling": {
                js: "0.21.0",
                android: "5.0.0",
                ios: "3.5.0",
                macos: "0.4.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom", "feature"]
        },
        "property-type": "data-driven"
    },
    "icon-padding": {
        type: "number",
        "default": 2,
        minimum: 0,
        units: "pixels",
        doc: "Size of the additional area around the icon bounding box used for detecting symbol collisions.",
        requires: ["icon-image"],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "icon-keep-upright": {
        type: "boolean",
        "default": false,
        doc: "If true, the icon may be flipped to prevent it from being rendered upside-down.",
        requires: ["icon-image", {
            "icon-rotation-alignment": "map"
        }, {
            "symbol-placement": ["line", "line-center"]
        }],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            }
        },
        expression: {
            interpolated: false,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "icon-offset": {
        type: "array",
        value: "number",
        length: 2,
        "default": [0, 0],
        doc: "Offset distance of icon from its anchor. Positive values indicate right and down, while negative values indicate left and up. Each component is multiplied by the value of `icon-size` to obtain the final offset in pixels. When combined with `icon-rotate` the offset will be as if the rotated direction was up.",
        requires: ["icon-image"],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            },
            "data-driven styling": {
                js: "0.29.0",
                android: "5.0.0",
                ios: "3.5.0",
                macos: "0.4.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom", "feature"]
        },
        "property-type": "data-driven"
    },
    "icon-anchor": {
        type: "enum",
        values: {
            center: {
                doc: "The center of the icon is placed closest to the anchor."
            },
            left: {
                doc: "The left side of the icon is placed closest to the anchor."
            },
            right: {
                doc: "The right side of the icon is placed closest to the anchor."
            },
            top: {
                doc: "The top of the icon is placed closest to the anchor."
            },
            bottom: {
                doc: "The bottom of the icon is placed closest to the anchor."
            },
            "top-left": {
                doc: "The top left corner of the icon is placed closest to the anchor."
            },
            "top-right": {
                doc: "The top right corner of the icon is placed closest to the anchor."
            },
            "bottom-left": {
                doc: "The bottom left corner of the icon is placed closest to the anchor."
            },
            "bottom-right": {
                doc: "The bottom right corner of the icon is placed closest to the anchor."
            }
        },
        "default": "center",
        doc: "Part of the icon placed closest to the anchor.",
        requires: ["icon-image"],
        "sdk-support": {
            "basic functionality": {
                js: "0.40.0",
                android: "5.2.0",
                ios: "3.7.0",
                macos: "0.6.0"
            },
            "data-driven styling": {
                js: "0.40.0",
                android: "5.2.0",
                ios: "3.7.0",
                macos: "0.6.0"
            }
        },
        expression: {
            interpolated: false,
            parameters: ["zoom", "feature"]
        },
        "property-type": "data-driven"
    },
    "icon-pitch-alignment": {
        type: "enum",
        values: {
            map: {
                doc: "The icon is aligned to the plane of the map."
            },
            viewport: {
                doc: "The icon is aligned to the plane of the viewport."
            },
            auto: {
                doc: "Automatically matches the value of `icon-rotation-alignment`."
            }
        },
        "default": "auto",
        doc: "Orientation of icon when map is pitched.",
        requires: ["icon-image"],
        "sdk-support": {
            "basic functionality": {
                js: "0.39.0",
                android: "5.2.0",
                ios: "3.7.0",
                macos: "0.6.0"
            }
        },
        expression: {
            interpolated: false,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "text-pitch-alignment": {
        type: "enum",
        values: {
            map: {
                doc: "The text is aligned to the plane of the map."
            },
            viewport: {
                doc: "The text is aligned to the plane of the viewport."
            },
            auto: {
                doc: "Automatically matches the value of `text-rotation-alignment`."
            }
        },
        "default": "auto",
        doc: "Orientation of text when map is pitched.",
        requires: ["text-field"],
        "sdk-support": {
            "basic functionality": {
                js: "0.21.0",
                android: "4.2.0",
                ios: "3.4.0",
                macos: "0.2.1"
            },
            "`auto` value": {
                js: "0.25.0",
                android: "4.2.0",
                ios: "3.4.0",
                macos: "0.3.0"
            }
        },
        expression: {
            interpolated: false,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "text-rotation-alignment": {
        type: "enum",
        values: {
            map: {
                doc: "When `symbol-placement` is set to `point`, aligns text east-west. When `symbol-placement` is set to `line` or `line-center`, aligns text x-axes with the line."
            },
            viewport: {
                doc: "Produces glyphs whose x-axes are aligned with the x-axis of the viewport, regardless of the value of `symbol-placement`."
            },
            auto: {
                doc: "When `symbol-placement` is set to `point`, this is equivalent to `viewport`. When `symbol-placement` is set to `line` or `line-center`, this is equivalent to `map`."
            }
        },
        "default": "auto",
        doc: "In combination with `symbol-placement`, determines the rotation behavior of the individual glyphs forming the text.",
        requires: ["text-field"],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            },
            "`auto` value": {
                js: "0.25.0",
                android: "4.2.0",
                ios: "3.4.0",
                macos: "0.3.0"
            }
        },
        expression: {
            interpolated: false,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "text-field": {
        type: "formatted",
        "default": "",
        tokens: true,
        doc: "Value to use for a text label. If a plain `string` is provided, it will be treated as a `formatted` with default/inherited formatting options.",
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            },
            "data-driven styling": {
                js: "0.33.0",
                android: "5.0.0",
                ios: "3.5.0",
                macos: "0.4.0"
            }
        },
        expression: {
            interpolated: false,
            parameters: ["zoom", "feature"]
        },
        "property-type": "data-driven"
    },
    "text-font": {
        type: "array",
        value: "string",
        "default": ["Open Sans Regular", "Arial Unicode MS Regular"],
        doc: "Font stack to use for displaying text.",
        requires: ["text-field"],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            },
            "data-driven styling": {
                js: "0.43.0",
                android: "6.0.0",
                ios: "4.0.0",
                macos: "0.7.0"
            }
        },
        expression: {
            interpolated: false,
            parameters: ["zoom", "feature"]
        },
        "property-type": "data-driven"
    },
    "text-size": {
        type: "number",
        "default": 16,
        minimum: 0,
        units: "pixels",
        doc: "Font size.",
        requires: ["text-field"],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            },
            "data-driven styling": {
                js: "0.35.0",
                android: "5.1.0",
                ios: "3.6.0",
                macos: "0.5.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom", "feature"]
        },
        "property-type": "data-driven"
    },
    "text-max-width": {
        type: "number",
        "default": 10,
        minimum: 0,
        units: "ems",
        doc: "The maximum line width for text wrapping.",
        requires: ["text-field"],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            },
            "data-driven styling": {
                js: "0.40.0",
                android: "5.2.0",
                ios: "3.7.0",
                macos: "0.6.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom", "feature"]
        },
        "property-type": "data-driven"
    },
    "text-line-height": {
        type: "number",
        "default": 1.2,
        units: "ems",
        doc: "Text leading value for multi-line text.",
        requires: ["text-field"],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "text-letter-spacing": {
        type: "number",
        "default": 0,
        units: "ems",
        doc: "Text tracking amount.",
        requires: ["text-field"],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            },
            "data-driven styling": {
                js: "0.40.0",
                android: "5.2.0",
                ios: "3.7.0",
                macos: "0.6.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom", "feature"]
        },
        "property-type": "data-driven"
    },
    "text-justify": {
        type: "enum",
        values: {
            auto: {
                doc: "The text is aligned towards the anchor position."
            },
            left: {
                doc: "The text is aligned to the left."
            },
            center: {
                doc: "The text is centered."
            },
            right: {
                doc: "The text is aligned to the right."
            }
        },
        "default": "center",
        doc: "Text justification options.",
        requires: ["text-field"],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            },
            "data-driven styling": {
                js: "0.39.0",
                android: "5.2.0",
                ios: "3.7.0",
                macos: "0.6.0"
            },
            auto: {
                js: "0.54.0",
                android: "7.4.0",
                ios: "4.10.0",
                macos: "0.14.0"
            }
        },
        expression: {
            interpolated: false,
            parameters: ["zoom", "feature"]
        },
        "property-type": "data-driven"
    },
    "text-radial-offset": {
        type: "number",
        units: "ems",
        "default": 0,
        doc: "Radial offset of text, in the direction of the symbol's anchor. Useful in combination with `text-variable-anchor`, which defaults to using the two-dimensional `text-offset` if present.",
        "sdk-support": {
            "basic functionality": {
                js: "0.54.0",
                android: "7.4.0",
                ios: "4.10.0",
                macos: "0.14.0"
            },
            "data-driven styling": {
                js: "0.54.0",
                android: "7.4.0",
                ios: "4.10.0",
                macos: "0.14.0"
            }
        },
        requires: ["text-field"],
        "property-type": "data-driven",
        expression: {
            interpolated: true,
            parameters: ["zoom", "feature"]
        }
    },
    "text-variable-anchor": {
        type: "array",
        value: "enum",
        values: {
            center: {
                doc: "The center of the text is placed closest to the anchor."
            },
            left: {
                doc: "The left side of the text is placed closest to the anchor."
            },
            right: {
                doc: "The right side of the text is placed closest to the anchor."
            },
            top: {
                doc: "The top of the text is placed closest to the anchor."
            },
            bottom: {
                doc: "The bottom of the text is placed closest to the anchor."
            },
            "top-left": {
                doc: "The top left corner of the text is placed closest to the anchor."
            },
            "top-right": {
                doc: "The top right corner of the text is placed closest to the anchor."
            },
            "bottom-left": {
                doc: "The bottom left corner of the text is placed closest to the anchor."
            },
            "bottom-right": {
                doc: "The bottom right corner of the text is placed closest to the anchor."
            }
        },
        requires: ["text-field", {
            "symbol-placement": ["point"]
        }],
        doc: "To increase the chance of placing high-priority labels on the map, you can provide an array of `text-anchor` locations: the renderer will attempt to place the label at each location, in order, before moving onto the next label. Use `text-justify: auto` to choose justification based on anchor position. To apply an offset, use the `text-radial-offset` or the two-dimensional `text-offset`.",
        "sdk-support": {
            "basic functionality": {
                js: "0.54.0",
                android: "7.4.0",
                ios: "4.10.0",
                macos: "0.14.0"
            }
        },
        expression: {
            interpolated: false,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "text-anchor": {
        type: "enum",
        values: {
            center: {
                doc: "The center of the text is placed closest to the anchor."
            },
            left: {
                doc: "The left side of the text is placed closest to the anchor."
            },
            right: {
                doc: "The right side of the text is placed closest to the anchor."
            },
            top: {
                doc: "The top of the text is placed closest to the anchor."
            },
            bottom: {
                doc: "The bottom of the text is placed closest to the anchor."
            },
            "top-left": {
                doc: "The top left corner of the text is placed closest to the anchor."
            },
            "top-right": {
                doc: "The top right corner of the text is placed closest to the anchor."
            },
            "bottom-left": {
                doc: "The bottom left corner of the text is placed closest to the anchor."
            },
            "bottom-right": {
                doc: "The bottom right corner of the text is placed closest to the anchor."
            }
        },
        "default": "center",
        doc: "Part of the text placed closest to the anchor.",
        requires: ["text-field", {
            "!": "text-variable-anchor"
        }],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            },
            "data-driven styling": {
                js: "0.39.0",
                android: "5.2.0",
                ios: "3.7.0",
                macos: "0.6.0"
            }
        },
        expression: {
            interpolated: false,
            parameters: ["zoom", "feature"]
        },
        "property-type": "data-driven"
    },
    "text-max-angle": {
        type: "number",
        "default": 45,
        units: "degrees",
        doc: "Maximum angle change between adjacent characters.",
        requires: ["text-field", {
            "symbol-placement": ["line", "line-center"]
        }],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "text-writing-mode": {
        type: "array",
        value: "enum",
        values: {
            horizontal: {
                doc: "If a text's language supports horizontal writing mode, symbols with point placement would be laid out horizontally."
            },
            vertical: {
                doc: "If a text's language supports vertical writing mode, symbols with point placement would be laid out vertically."
            }
        },
        doc: "The property allows control over a symbol's orientation. Note that the property values act as a hint, so that a symbol whose language doesn’t support the provided orientation will be laid out in its natural orientation. Example: English point symbol will be rendered horizontally even if array value contains single 'vertical' enum value. The order of elements in an array define priority order for the placement of an orientation variant.",
        requires: ["text-field", {
            "symbol-placement": ["point"]
        }],
        "sdk-support": {
            "basic functionality": {
                js: "1.3.0",
                android: "8.3.0",
                ios: "5.3.0",
                macos: "0.14.0"
            }
        },
        expression: {
            interpolated: false,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "text-rotate": {
        type: "number",
        "default": 0,
        period: 360,
        units: "degrees",
        doc: "Rotates the text clockwise.",
        requires: ["text-field"],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            },
            "data-driven styling": {
                js: "0.35.0",
                android: "5.1.0",
                ios: "3.6.0",
                macos: "0.5.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom", "feature"]
        },
        "property-type": "data-driven"
    },
    "text-padding": {
        type: "number",
        "default": 2,
        minimum: 0,
        units: "pixels",
        doc: "Size of the additional area around the text bounding box used for detecting symbol collisions.",
        requires: ["text-field"],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "text-keep-upright": {
        type: "boolean",
        "default": true,
        doc: "If true, the text may be flipped vertically to prevent it from being rendered upside-down.",
        requires: ["text-field", {
            "text-rotation-alignment": "map"
        }, {
            "symbol-placement": ["line", "line-center"]
        }],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            }
        },
        expression: {
            interpolated: false,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "text-transform": {
        type: "enum",
        values: {
            none: {
                doc: "The text is not altered."
            },
            uppercase: {
                doc: "Forces all letters to be displayed in uppercase."
            },
            lowercase: {
                doc: "Forces all letters to be displayed in lowercase."
            }
        },
        "default": "none",
        doc: "Specifies how to capitalize text, similar to the CSS `text-transform` property.",
        requires: ["text-field"],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            },
            "data-driven styling": {
                js: "0.33.0",
                android: "5.0.0",
                ios: "3.5.0",
                macos: "0.4.0"
            }
        },
        expression: {
            interpolated: false,
            parameters: ["zoom", "feature"]
        },
        "property-type": "data-driven"
    },
    "text-offset": {
        type: "array",
        doc: "Offset distance of text from its anchor. Positive values indicate right and down, while negative values indicate left and up. If used with text-variable-anchor, input values will be taken as absolute values. Offsets along the x- and y-axis will be applied automatically based on the anchor position.",
        value: "number",
        units: "ems",
        length: 2,
        "default": [0, 0],
        requires: ["text-field", {
            "!": "text-radial-offset"
        }],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            },
            "data-driven styling": {
                js: "0.35.0",
                android: "5.1.0",
                ios: "3.6.0",
                macos: "0.5.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom", "feature"]
        },
        "property-type": "data-driven"
    },
    "text-allow-overlap": {
        type: "boolean",
        "default": false,
        doc: "If true, the text will be visible even if it collides with other previously drawn symbols.",
        requires: ["text-field"],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            }
        },
        expression: {
            interpolated: false,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "text-ignore-placement": {
        type: "boolean",
        "default": false,
        doc: "If true, other symbols can be visible even if they collide with the text.",
        requires: ["text-field"],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            }
        },
        expression: {
            interpolated: false,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "text-optional": {
        type: "boolean",
        "default": false,
        doc: "If true, icons will display without their corresponding text when the text collides with other symbols and the icon does not.",
        requires: ["text-field", "icon-image"],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            }
        },
        expression: {
            interpolated: false,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    visibility: {
        type: "enum",
        values: {
            visible: {
                doc: "The layer is shown."
            },
            none: {
                doc: "The layer is not shown."
            }
        },
        "default": "visible",
        doc: "Whether this layer is displayed.",
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            }
        },
        "property-type": "constant"
    }
};
var layout_raster = {
    visibility: {
        type: "enum",
        values: {
            visible: {
                doc: "The layer is shown."
            },
            none: {
                doc: "The layer is not shown."
            }
        },
        "default": "visible",
        doc: "Whether this layer is displayed.",
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            }
        },
        "property-type": "constant"
    }
};
var layout_hillshade = {
    visibility: {
        type: "enum",
        values: {
            visible: {
                doc: "The layer is shown."
            },
            none: {
                doc: "The layer is not shown."
            }
        },
        "default": "visible",
        doc: "Whether this layer is displayed.",
        "sdk-support": {
            "basic functionality": {
                js: "0.43.0",
                android: "6.0.0",
                ios: "4.0.0",
                macos: "0.7.0"
            }
        },
        "property-type": "constant"
    }
};
var filter = {
    type: "array",
    value: "*",
    doc: "A filter selects specific features from a layer."
};
var filter_operator = {
    type: "enum",
    values: {
        "==": {
            doc: "`[\"==\", key, value]` equality: `feature[key] = value`"
        },
        "!=": {
            doc: "`[\"!=\", key, value]` inequality: `feature[key] ≠ value`"
        },
        ">": {
            doc: "`[\">\", key, value]` greater than: `feature[key] > value`"
        },
        ">=": {
            doc: "`[\">=\", key, value]` greater than or equal: `feature[key] ≥ value`"
        },
        "<": {
            doc: "`[\"<\", key, value]` less than: `feature[key] < value`"
        },
        "<=": {
            doc: "`[\"<=\", key, value]` less than or equal: `feature[key] ≤ value`"
        },
        "in": {
            doc: "`[\"in\", key, v0, ..., vn]` set inclusion: `feature[key] ∈ {v0, ..., vn}`"
        },
        "!in": {
            doc: "`[\"!in\", key, v0, ..., vn]` set exclusion: `feature[key] ∉ {v0, ..., vn}`"
        },
        all: {
            doc: "`[\"all\", f0, ..., fn]` logical `AND`: `f0 ∧ ... ∧ fn`"
        },
        any: {
            doc: "`[\"any\", f0, ..., fn]` logical `OR`: `f0 ∨ ... ∨ fn`"
        },
        none: {
            doc: "`[\"none\", f0, ..., fn]` logical `NOR`: `¬f0 ∧ ... ∧ ¬fn`"
        },
        has: {
            doc: "`[\"has\", key]` `feature[key]` exists"
        },
        "!has": {
            doc: "`[\"!has\", key]` `feature[key]` does not exist"
        }
    },
    doc: "The filter operator."
};
var geometry_type = {
    type: "enum",
    values: {
        Point: {
            doc: "Filter to point geometries."
        },
        LineString: {
            doc: "Filter to line geometries."
        },
        Polygon: {
            doc: "Filter to polygon geometries."
        }
    },
    doc: "The geometry type for the filter to select."
};
var function_stop = {
    type: "array",
    minimum: 0,
    maximum: 24,
    value: ["number", "color"],
    length: 2,
    doc: "Zoom level and value pair."
};
var expression = {
    type: "array",
    value: "*",
    minimum: 1,
    doc: "An expression defines a function that can be used for data-driven style properties or feature filters."
};
var expression_name = {
    doc: "",
    type: "enum",
    values: {
        "let": {
            doc: "Binds expressions to named variables, which can then be referenced in the result expression using [\"var\", \"variable_name\"].",
            group: "Variable binding",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        "var": {
            doc: "References variable bound using \"let\".",
            group: "Variable binding",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        literal: {
            doc: "Provides a literal array or object value.",
            group: "Types",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        array: {
            doc: "Asserts that the input is an array (optionally with a specific item type and length).  If, when the input expression is evaluated, it is not of the asserted type, then this assertion will cause the whole expression to be aborted.",
            group: "Types",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        at: {
            doc: "Retrieves an item from an array.",
            group: "Lookup",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        "in": {
            doc: "Determines whether an item exists in an array or a substring exists in a string.",
            group: "Lookup",
            "sdk-support": {
                "basic functionality": {
                    js: "1.6.0"
                }
            }
        },
        "index-of": {
            doc: "Returns the first index at which a given element can be found in an array, or for a string, the first occurrence of the specified value. If a second argument is provided, then the search is started from that position. Returns -1 if the value is not found.",
            group: "Lookup",
            "sdk-support": {
                "basic functionality": {
                    js: "1.10.0"
                }
            }
        },
        "case": {
            doc: "Selects the first output whose corresponding test condition evaluates to true, or the fallback value otherwise.",
            group: "Decision",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        match: {
            doc: "Selects the output whose label value matches the input value, or the fallback value if no match is found. The input can be any expression (e.g. `[\"get\", \"building_type\"]`). Each label must be either:\n * a single literal value; or\n * an array of literal values, whose values must be all strings or all numbers (e.g. `[100, 101]` or `[\"c\", \"b\"]`). The input matches if any of the values in the array matches, similar to the `\"in\"` operator.\n\nEach label must be unique. If the input type does not match the type of the labels, the result will be the fallback value.",
            group: "Decision",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        coalesce: {
            doc: "Evaluates each expression in turn until the first non-null value is obtained, and returns that value.",
            group: "Decision",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        step: {
            doc: "Produces discrete, stepped results by evaluating a piecewise-constant function defined by pairs of input and output values (\"stops\"). The `input` may be any numeric expression (e.g., `[\"get\", \"population\"]`). Stop inputs must be numeric literals in strictly ascending order. Returns the output value of the stop just less than the input, or the first output if the input is less than the first stop.",
            group: "Ramps, scales, curves",
            "sdk-support": {
                "basic functionality": {
                    js: "0.42.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        interpolate: {
            doc: "Produces continuous, smooth results by interpolating between pairs of input and output values (\"stops\"). The `input` may be any numeric expression (e.g., `[\"get\", \"population\"]`). Stop inputs must be numeric literals in strictly ascending order. The output type must be `number`, `array<number>`, or `color`.\n\nInterpolation types:\n- `[\"linear\"]`: interpolates linearly between the pair of stops just less than and just greater than the input.\n- `[\"exponential\", base]`: interpolates exponentially between the stops just less than and just greater than the input. `base` controls the rate at which the output increases: higher values make the output increase more towards the high end of the range. With values close to 1 the output increases linearly.\n- `[\"cubic-bezier\", x1, y1, x2, y2]`: interpolates using the cubic bezier curve defined by the given control points.",
            group: "Ramps, scales, curves",
            "sdk-support": {
                "basic functionality": {
                    js: "0.42.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        "interpolate-hcl": {
            doc: "Produces continuous, smooth results by interpolating between pairs of input and output values (\"stops\"). Works like `interpolate`, but the output type must be `color`, and the interpolation is performed in the Hue-Chroma-Luminance color space.",
            group: "Ramps, scales, curves",
            "sdk-support": {
                "basic functionality": {
                    js: "0.49.0"
                }
            }
        },
        "interpolate-lab": {
            doc: "Produces continuous, smooth results by interpolating between pairs of input and output values (\"stops\"). Works like `interpolate`, but the output type must be `color`, and the interpolation is performed in the CIELAB color space.",
            group: "Ramps, scales, curves",
            "sdk-support": {
                "basic functionality": {
                    js: "0.49.0"
                }
            }
        },
        ln2: {
            doc: "Returns mathematical constant ln(2).",
            group: "Math",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        pi: {
            doc: "Returns the mathematical constant pi.",
            group: "Math",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        e: {
            doc: "Returns the mathematical constant e.",
            group: "Math",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        "typeof": {
            doc: "Returns a string describing the type of the given value.",
            group: "Types",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        string: {
            doc: "Asserts that the input value is a string. If multiple values are provided, each one is evaluated in order until a string is obtained. If none of the inputs are strings, the expression is an error.",
            group: "Types",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        number: {
            doc: "Asserts that the input value is a number. If multiple values are provided, each one is evaluated in order until a number is obtained. If none of the inputs are numbers, the expression is an error.",
            group: "Types",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        boolean: {
            doc: "Asserts that the input value is a boolean. If multiple values are provided, each one is evaluated in order until a boolean is obtained. If none of the inputs are booleans, the expression is an error.",
            group: "Types",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        object: {
            doc: "Asserts that the input value is an object. If multiple values are provided, each one is evaluated in order until an object is obtained. If none of the inputs are objects, the expression is an error.",
            group: "Types",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        collator: {
            doc: "Returns a `collator` for use in locale-dependent comparison operations. The `case-sensitive` and `diacritic-sensitive` options default to `false`. The `locale` argument specifies the IETF language tag of the locale to use. If none is provided, the default locale is used. If the requested locale is not available, the `collator` will use a system-defined fallback locale. Use `resolved-locale` to test the results of locale fallback behavior.",
            group: "Types",
            "sdk-support": {
                "basic functionality": {
                    js: "0.45.0",
                    android: "6.5.0",
                    ios: "4.2.0",
                    macos: "0.9.0"
                }
            }
        },
        format: {
            doc: "Returns `formatted` text containing annotations for use in mixed-format `text-field` entries. For a `text-field` entries of a string type, following option object's properties are supported: If set, the `text-font` value overrides the font specified by the root layout properties. If set, the `font-scale` value specifies a scaling factor relative to the `text-size` specified in the root layout properties. If set, the `text-color` value overrides the color specified by the root paint properties for this layer.",
            group: "Types",
            "sdk-support": {
                "basic functionality": {
                    js: "0.48.0",
                    android: "6.7.0",
                    ios: "4.6.0",
                    macos: "0.12.0"
                },
                "text-font": {
                    js: "0.48.0",
                    android: "6.7.0",
                    ios: "4.6.0",
                    macos: "0.12.0"
                },
                "font-scale": {
                    js: "0.48.0",
                    android: "6.7.0",
                    ios: "4.6.0",
                    macos: "0.12.0"
                },
                "text-color": {
                    js: "1.3.0",
                    android: "7.3.0",
                    ios: "4.10.0",
                    macos: "0.14.0"
                },
                image: {
                    js: "1.6.0"
                }
            }
        },
        image: {
            doc: "Returns an `image` type for use in `icon-image`, `*-pattern` entries and as a section in the `format` expression. If set, the `image` argument will check that the requested image exists in the style and will return either the resolved image name or `null`, depending on whether or not the image is currently in the style. This validation process is synchronous and requires the image to have been added to the style before requesting it in the `image` argument.",
            group: "Types",
            "sdk-support": {
                "basic functionality": {
                    js: "1.4.0",
                    android: "8.6.0",
                    ios: "5.6.0"
                }
            }
        },
        "number-format": {
            doc: "Converts the input number into a string representation using the providing formatting rules. If set, the `locale` argument specifies the locale to use, as a BCP 47 language tag. If set, the `currency` argument specifies an ISO 4217 code to use for currency-style formatting. If set, the `min-fraction-digits` and `max-fraction-digits` arguments specify the minimum and maximum number of fractional digits to include.",
            group: "Types",
            "sdk-support": {
                "basic functionality": {
                    js: "0.54.0"
                }
            }
        },
        "to-string": {
            doc: "Converts the input value to a string. If the input is `null`, the result is `\"\"`. If the input is a boolean, the result is `\"true\"` or `\"false\"`. If the input is a number, it is converted to a string as specified by the [\"NumberToString\" algorithm](https://tc39.github.io/ecma262/#sec-tostring-applied-to-the-number-type) of the ECMAScript Language Specification. If the input is a color, it is converted to a string of the form `\"rgba(r,g,b,a)\"`, where `r`, `g`, and `b` are numerals ranging from 0 to 255, and `a` ranges from 0 to 1. Otherwise, the input is converted to a string in the format specified by the [`JSON.stringify`](https://tc39.github.io/ecma262/#sec-json.stringify) function of the ECMAScript Language Specification.",
            group: "Types",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        "to-number": {
            doc: "Converts the input value to a number, if possible. If the input is `null` or `false`, the result is 0. If the input is `true`, the result is 1. If the input is a string, it is converted to a number as specified by the [\"ToNumber Applied to the String Type\" algorithm](https://tc39.github.io/ecma262/#sec-tonumber-applied-to-the-string-type) of the ECMAScript Language Specification. If multiple values are provided, each one is evaluated in order until the first successful conversion is obtained. If none of the inputs can be converted, the expression is an error.",
            group: "Types",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        "to-boolean": {
            doc: "Converts the input value to a boolean. The result is `false` when then input is an empty string, 0, `false`, `null`, or `NaN`; otherwise it is `true`.",
            group: "Types",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        "to-rgba": {
            doc: "Returns a four-element array containing the input color's red, green, blue, and alpha components, in that order.",
            group: "Color",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        "to-color": {
            doc: "Converts the input value to a color. If multiple values are provided, each one is evaluated in order until the first successful conversion is obtained. If none of the inputs can be converted, the expression is an error.",
            group: "Types",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        rgb: {
            doc: "Creates a color value from red, green, and blue components, which must range between 0 and 255, and an alpha component of 1. If any component is out of range, the expression is an error.",
            group: "Color",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        rgba: {
            doc: "Creates a color value from red, green, blue components, which must range between 0 and 255, and an alpha component which must range between 0 and 1. If any component is out of range, the expression is an error.",
            group: "Color",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        get: {
            doc: "Retrieves a property value from the current feature's properties, or from another object if a second argument is provided. Returns null if the requested property is missing.",
            group: "Lookup",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        has: {
            doc: "Tests for the presence of an property value in the current feature's properties, or from another object if a second argument is provided.",
            group: "Lookup",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        length: {
            doc: "Gets the length of an array or string.",
            group: "Lookup",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        properties: {
            doc: "Gets the feature properties object.  Note that in some cases, it may be more efficient to use [\"get\", \"property_name\"] directly.",
            group: "Feature data",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        "feature-state": {
            doc: "Retrieves a property value from the current feature's state. Returns null if the requested property is not present on the feature's state. A feature's state is not part of the GeoJSON or vector tile data, and must be set programmatically on each feature. Features are identified by their `id` attribute, which must be an integer or a string that can be cast to an integer. Note that [\"feature-state\"] can only be used with paint properties that support data-driven styling.",
            group: "Feature data",
            "sdk-support": {
                "basic functionality": {
                    js: "0.46.0"
                }
            }
        },
        "geometry-type": {
            doc: "Gets the feature's geometry type: Point, MultiPoint, LineString, MultiLineString, Polygon, MultiPolygon.",
            group: "Feature data",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        id: {
            doc: "Gets the feature's id, if it has one.",
            group: "Feature data",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        zoom: {
            doc: "Gets the current zoom level.  Note that in style layout and paint properties, [\"zoom\"] may only appear as the input to a top-level \"step\" or \"interpolate\" expression.",
            group: "Zoom",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        "heatmap-density": {
            doc: "Gets the kernel density estimation of a pixel in a heatmap layer, which is a relative measure of how many data points are crowded around a particular pixel. Can only be used in the `heatmap-color` property.",
            group: "Heatmap",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        "line-progress": {
            doc: "Gets the progress along a gradient line. Can only be used in the `line-gradient` property.",
            group: "Feature data",
            "sdk-support": {
                "basic functionality": {
                    js: "0.45.0",
                    android: "6.5.0",
                    ios: "4.6.0",
                    macos: "0.12.0"
                }
            }
        },
        accumulated: {
            doc: "Gets the value of a cluster property accumulated so far. Can only be used in the `clusterProperties` option of a clustered GeoJSON source.",
            group: "Feature data",
            "sdk-support": {
                "basic functionality": {
                    js: "0.53.0"
                }
            }
        },
        "+": {
            doc: "Returns the sum of the inputs.",
            group: "Math",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        "*": {
            doc: "Returns the product of the inputs.",
            group: "Math",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        "-": {
            doc: "For two inputs, returns the result of subtracting the second input from the first. For a single input, returns the result of subtracting it from 0.",
            group: "Math",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        "/": {
            doc: "Returns the result of floating point division of the first input by the second.",
            group: "Math",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        "%": {
            doc: "Returns the remainder after integer division of the first input by the second.",
            group: "Math",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        "^": {
            doc: "Returns the result of raising the first input to the power specified by the second.",
            group: "Math",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        sqrt: {
            doc: "Returns the square root of the input.",
            group: "Math",
            "sdk-support": {
                "basic functionality": {
                    js: "0.42.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        log10: {
            doc: "Returns the base-ten logarithm of the input.",
            group: "Math",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        ln: {
            doc: "Returns the natural logarithm of the input.",
            group: "Math",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        log2: {
            doc: "Returns the base-two logarithm of the input.",
            group: "Math",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        sin: {
            doc: "Returns the sine of the input.",
            group: "Math",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        cos: {
            doc: "Returns the cosine of the input.",
            group: "Math",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        tan: {
            doc: "Returns the tangent of the input.",
            group: "Math",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        asin: {
            doc: "Returns the arcsine of the input.",
            group: "Math",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        acos: {
            doc: "Returns the arccosine of the input.",
            group: "Math",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        atan: {
            doc: "Returns the arctangent of the input.",
            group: "Math",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        min: {
            doc: "Returns the minimum value of the inputs.",
            group: "Math",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        max: {
            doc: "Returns the maximum value of the inputs.",
            group: "Math",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        round: {
            doc: "Rounds the input to the nearest integer. Halfway values are rounded away from zero. For example, `[\"round\", -1.5]` evaluates to -2.",
            group: "Math",
            "sdk-support": {
                "basic functionality": {
                    js: "0.45.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        abs: {
            doc: "Returns the absolute value of the input.",
            group: "Math",
            "sdk-support": {
                "basic functionality": {
                    js: "0.45.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        ceil: {
            doc: "Returns the smallest integer that is greater than or equal to the input.",
            group: "Math",
            "sdk-support": {
                "basic functionality": {
                    js: "0.45.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        floor: {
            doc: "Returns the largest integer that is less than or equal to the input.",
            group: "Math",
            "sdk-support": {
                "basic functionality": {
                    js: "0.45.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        "==": {
            doc: "Returns `true` if the input values are equal, `false` otherwise. The comparison is strictly typed: values of different runtime types are always considered unequal. Cases where the types are known to be different at parse time are considered invalid and will produce a parse error. Accepts an optional `collator` argument to control locale-dependent string comparisons.",
            group: "Decision",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                },
                collator: {
                    js: "0.45.0",
                    android: "6.5.0",
                    ios: "4.2.0",
                    macos: "0.9.0"
                }
            }
        },
        "!=": {
            doc: "Returns `true` if the input values are not equal, `false` otherwise. The comparison is strictly typed: values of different runtime types are always considered unequal. Cases where the types are known to be different at parse time are considered invalid and will produce a parse error. Accepts an optional `collator` argument to control locale-dependent string comparisons.",
            group: "Decision",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                },
                collator: {
                    js: "0.45.0",
                    android: "6.5.0",
                    ios: "4.2.0",
                    macos: "0.9.0"
                }
            }
        },
        ">": {
            doc: "Returns `true` if the first input is strictly greater than the second, `false` otherwise. The arguments are required to be either both strings or both numbers; if during evaluation they are not, expression evaluation produces an error. Cases where this constraint is known not to hold at parse time are considered in valid and will produce a parse error. Accepts an optional `collator` argument to control locale-dependent string comparisons.",
            group: "Decision",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                },
                collator: {
                    js: "0.45.0",
                    android: "6.5.0",
                    ios: "4.2.0",
                    macos: "0.9.0"
                }
            }
        },
        "<": {
            doc: "Returns `true` if the first input is strictly less than the second, `false` otherwise. The arguments are required to be either both strings or both numbers; if during evaluation they are not, expression evaluation produces an error. Cases where this constraint is known not to hold at parse time are considered in valid and will produce a parse error. Accepts an optional `collator` argument to control locale-dependent string comparisons.",
            group: "Decision",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                },
                collator: {
                    js: "0.45.0",
                    android: "6.5.0",
                    ios: "4.2.0",
                    macos: "0.9.0"
                }
            }
        },
        ">=": {
            doc: "Returns `true` if the first input is greater than or equal to the second, `false` otherwise. The arguments are required to be either both strings or both numbers; if during evaluation they are not, expression evaluation produces an error. Cases where this constraint is known not to hold at parse time are considered in valid and will produce a parse error. Accepts an optional `collator` argument to control locale-dependent string comparisons.",
            group: "Decision",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                },
                collator: {
                    js: "0.45.0",
                    android: "6.5.0",
                    ios: "4.2.0",
                    macos: "0.9.0"
                }
            }
        },
        "<=": {
            doc: "Returns `true` if the first input is less than or equal to the second, `false` otherwise. The arguments are required to be either both strings or both numbers; if during evaluation they are not, expression evaluation produces an error. Cases where this constraint is known not to hold at parse time are considered in valid and will produce a parse error. Accepts an optional `collator` argument to control locale-dependent string comparisons.",
            group: "Decision",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                },
                collator: {
                    js: "0.45.0",
                    android: "6.5.0",
                    ios: "4.2.0",
                    macos: "0.9.0"
                }
            }
        },
        all: {
            doc: "Returns `true` if all the inputs are `true`, `false` otherwise. The inputs are evaluated in order, and evaluation is short-circuiting: once an input expression evaluates to `false`, the result is `false` and no further input expressions are evaluated.",
            group: "Decision",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        any: {
            doc: "Returns `true` if any of the inputs are `true`, `false` otherwise. The inputs are evaluated in order, and evaluation is short-circuiting: once an input expression evaluates to `true`, the result is `true` and no further input expressions are evaluated.",
            group: "Decision",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        "!": {
            doc: "Logical negation. Returns `true` if the input is `false`, and `false` if the input is `true`.",
            group: "Decision",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        within: {
            doc: "Returns `true` if the feature being evaluated is inside the pre-defined geometry boundary, `false` otherwise. The expression has one argument which must be a valid GeoJSON Polygon/Multi-Polygon object. The expression only evaluates on `Point` or `LineString` feature. For `Point` feature, The expression will return false if any point of the feature is on the boundary or outside the boundary. For `LineString` feature, the expression will return false if the line is fully outside the boundary, or the line is partially intersecting the boundary, which means either part of the line is outside of the boundary, or end point of the line lies on the boundary.",
            group: "Decision",
            "sdk-support": {
                "basic functionality": {
                    js: "1.9.0"
                }
            }
        },
        "is-supported-script": {
            doc: "Returns `true` if the input string is expected to render legibly. Returns `false` if the input string contains sections that cannot be rendered without potential loss of meaning (e.g. Indic scripts that require complex text shaping, or right-to-left scripts if the the `mapbox-gl-rtl-text` plugin is not in use in Mapbox GL JS).",
            group: "String",
            "sdk-support": {
                "basic functionality": {
                    js: "0.45.0",
                    android: "6.6.0"
                }
            }
        },
        upcase: {
            doc: "Returns the input string converted to uppercase. Follows the Unicode Default Case Conversion algorithm and the locale-insensitive case mappings in the Unicode Character Database.",
            group: "String",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        downcase: {
            doc: "Returns the input string converted to lowercase. Follows the Unicode Default Case Conversion algorithm and the locale-insensitive case mappings in the Unicode Character Database.",
            group: "String",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        concat: {
            doc: "Returns a `string` consisting of the concatenation of the inputs. Each input is converted to a string as if by `to-string`.",
            group: "String",
            "sdk-support": {
                "basic functionality": {
                    js: "0.41.0",
                    android: "6.0.0",
                    ios: "4.0.0",
                    macos: "0.7.0"
                }
            }
        },
        "resolved-locale": {
            doc: "Returns the IETF language tag of the locale being used by the provided `collator`. This can be used to determine the default system locale, or to determine if a requested locale was successfully loaded.",
            group: "String",
            "sdk-support": {
                "basic functionality": {
                    js: "0.45.0",
                    android: "6.5.0",
                    ios: "4.2.0",
                    macos: "0.9.0"
                }
            }
        },
        slice: {
            doc: "Returns a portion of a string or an array starting from the provided beginning index. If a second argument is provided, then the return portion will run to, but not include, the end index.",
            group: "String",
            "sdk-support": {
                "basic functionality": {
                    js: "1.10.0"
                }
            }
        }
    }
};
var light = {
    anchor: {
        type: "enum",
        "default": "viewport",
        values: {
            map: {
                doc: "The position of the light source is aligned to the rotation of the map."
            },
            viewport: {
                doc: "The position of the light source is aligned to the rotation of the viewport."
            }
        },
        "property-type": "data-constant",
        transition: false,
        expression: {
            interpolated: false,
            parameters: ["zoom"]
        },
        doc: "Whether extruded geometries are lit relative to the map or viewport.",
        example: "map",
        "sdk-support": {
            "basic functionality": {
                js: "0.27.0",
                android: "5.1.0",
                ios: "3.6.0",
                macos: "0.5.0"
            }
        }
    },
    position: {
        type: "array",
        "default": [1.15, 210, 30],
        length: 3,
        value: "number",
        "property-type": "data-constant",
        transition: true,
        expression: {
            interpolated: true,
            parameters: ["zoom"]
        },
        doc: "Position of the light source relative to lit (extruded) geometries, in [r radial coordinate, a azimuthal angle, p polar angle] where r indicates the distance from the center of the base of an object to its light, a indicates the position of the light relative to 0° (0° when `light.anchor` is set to `viewport` corresponds to the top of the viewport, or 0° when `light.anchor` is set to `map` corresponds to due north, and degrees proceed clockwise), and p indicates the height of the light (from 0°, directly above, to 180°, directly below).",
        example: [1.5, 90, 80],
        "sdk-support": {
            "basic functionality": {
                js: "0.27.0",
                android: "5.1.0",
                ios: "3.6.0",
                macos: "0.5.0"
            }
        }
    },
    color: {
        type: "color",
        "property-type": "data-constant",
        "default": "#ffffff",
        expression: {
            interpolated: true,
            parameters: ["zoom"]
        },
        transition: true,
        doc: "Color tint for lighting extruded geometries.",
        "sdk-support": {
            "basic functionality": {
                js: "0.27.0",
                android: "5.1.0",
                ios: "3.6.0",
                macos: "0.5.0"
            }
        }
    },
    intensity: {
        type: "number",
        "property-type": "data-constant",
        "default": 0.5,
        minimum: 0,
        maximum: 1,
        expression: {
            interpolated: true,
            parameters: ["zoom"]
        },
        transition: true,
        doc: "Intensity of lighting (on a scale from 0 to 1). Higher numbers will present as more extreme contrast.",
        "sdk-support": {
            "basic functionality": {
                js: "0.27.0",
                android: "5.1.0",
                ios: "3.6.0",
                macos: "0.5.0"
            }
        }
    }
};
var paint = ["paint_fill", "paint_line", "paint_circle", "paint_heatmap", "paint_fill-extrusion", "paint_symbol", "paint_raster", "paint_hillshade", "paint_background"];
var paint_fill = {
    "fill-antialias": {
        type: "boolean",
        "default": true,
        doc: "Whether or not the fill should be antialiased.",
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            }
        },
        expression: {
            interpolated: false,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "fill-opacity": {
        type: "number",
        "default": 1,
        minimum: 0,
        maximum: 1,
        doc: "The opacity of the entire fill layer. In contrast to the `fill-color`, this value will also affect the 1px stroke around the fill, if the stroke is used.",
        transition: true,
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            },
            "data-driven styling": {
                js: "0.21.0",
                android: "5.0.0",
                ios: "3.5.0",
                macos: "0.4.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
    },
    "fill-color": {
        type: "color",
        "default": "#000000",
        doc: "The color of the filled part of this layer. This color can be specified as `rgba` with an alpha component and the color's opacity will not affect the opacity of the 1px stroke, if it is used.",
        transition: true,
        requires: [{
            "!": "fill-pattern"
        }],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            },
            "data-driven styling": {
                js: "0.19.0",
                android: "5.0.0",
                ios: "3.5.0",
                macos: "0.4.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
    },
    "fill-outline-color": {
        type: "color",
        doc: "The outline color of the fill. Matches the value of `fill-color` if unspecified.",
        transition: true,
        requires: [{
            "!": "fill-pattern"
        }, {
            "fill-antialias": true
        }],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            },
            "data-driven styling": {
                js: "0.19.0",
                android: "5.0.0",
                ios: "3.5.0",
                macos: "0.4.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
    },
    "fill-translate": {
        type: "array",
        value: "number",
        length: 2,
        "default": [0, 0],
        transition: true,
        units: "pixels",
        doc: "The geometry's offset. Values are [x, y] where negatives indicate left and up, respectively.",
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "fill-translate-anchor": {
        type: "enum",
        values: {
            map: {
                doc: "The fill is translated relative to the map."
            },
            viewport: {
                doc: "The fill is translated relative to the viewport."
            }
        },
        doc: "Controls the frame of reference for `fill-translate`.",
        "default": "map",
        requires: ["fill-translate"],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            }
        },
        expression: {
            interpolated: false,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "fill-pattern": {
        type: "resolvedImage",
        transition: true,
        doc: "Name of image in sprite to use for drawing image fills. For seamless patterns, image width and height must be a factor of two (2, 4, 8, ..., 512). Note that zoom-dependent expressions will be evaluated only at integer zoom levels.",
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            },
            "data-driven styling": {
                js: "0.49.0",
                android: "6.5.0",
                macos: "0.11.0",
                ios: "4.4.0"
            }
        },
        expression: {
            interpolated: false,
            parameters: ["zoom", "feature"]
        },
        "property-type": "cross-faded-data-driven"
    }
};
var paint_line = {
    "line-opacity": {
        type: "number",
        doc: "The opacity at which the line will be drawn.",
        "default": 1,
        minimum: 0,
        maximum: 1,
        transition: true,
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            },
            "data-driven styling": {
                js: "0.29.0",
                android: "5.0.0",
                ios: "3.5.0",
                macos: "0.4.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
    },
    "line-color": {
        type: "color",
        doc: "The color with which the line will be drawn.",
        "default": "#000000",
        transition: true,
        requires: [{
            "!": "line-pattern"
        }],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            },
            "data-driven styling": {
                js: "0.23.0",
                android: "5.0.0",
                ios: "3.5.0",
                macos: "0.4.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
    },
    "line-translate": {
        type: "array",
        value: "number",
        length: 2,
        "default": [0, 0],
        transition: true,
        units: "pixels",
        doc: "The geometry's offset. Values are [x, y] where negatives indicate left and up, respectively.",
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "line-translate-anchor": {
        type: "enum",
        values: {
            map: {
                doc: "The line is translated relative to the map."
            },
            viewport: {
                doc: "The line is translated relative to the viewport."
            }
        },
        doc: "Controls the frame of reference for `line-translate`.",
        "default": "map",
        requires: ["line-translate"],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            }
        },
        expression: {
            interpolated: false,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "line-width": {
        type: "number",
        "default": 1,
        minimum: 0,
        transition: true,
        units: "pixels",
        doc: "Stroke thickness.",
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            },
            "data-driven styling": {
                js: "0.39.0",
                android: "5.2.0",
                ios: "3.7.0",
                macos: "0.6.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
    },
    "line-gap-width": {
        type: "number",
        "default": 0,
        minimum: 0,
        doc: "Draws a line casing outside of a line's actual path. Value indicates the width of the inner gap.",
        transition: true,
        units: "pixels",
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            },
            "data-driven styling": {
                js: "0.29.0",
                android: "5.0.0",
                ios: "3.5.0",
                macos: "0.4.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
    },
    "line-offset": {
        type: "number",
        "default": 0,
        doc: "The line's offset. For linear features, a positive value offsets the line to the right, relative to the direction of the line, and a negative value to the left. For polygon features, a positive value results in an inset, and a negative value results in an outset.",
        transition: true,
        units: "pixels",
        "sdk-support": {
            "basic functionality": {
                js: "0.12.1",
                android: "3.0.0",
                ios: "3.1.0",
                macos: "0.1.0"
            },
            "data-driven styling": {
                js: "0.29.0",
                android: "5.0.0",
                ios: "3.5.0",
                macos: "0.4.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
    },
    "line-blur": {
        type: "number",
        "default": 0,
        minimum: 0,
        transition: true,
        units: "pixels",
        doc: "Blur applied to the line, in pixels.",
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            },
            "data-driven styling": {
                js: "0.29.0",
                android: "5.0.0",
                ios: "3.5.0",
                macos: "0.4.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
    },
    "line-dasharray": {
        type: "array",
        value: "number",
        doc: "Specifies the lengths of the alternating dashes and gaps that form the dash pattern. The lengths are later scaled by the line width. To convert a dash length to pixels, multiply the length by the current line width. Note that GeoJSON sources with `lineMetrics: true` specified won't render dashed lines to the expected scale. Also note that zoom-dependent expressions will be evaluated only at integer zoom levels.",
        minimum: 0,
        transition: true,
        units: "line widths",
        requires: [{
            "!": "line-pattern"
        }],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            },
            "data-driven styling": {}
        },
        expression: {
            interpolated: false,
            parameters: ["zoom"]
        },
        "property-type": "cross-faded"
    },
    "line-pattern": {
        type: "resolvedImage",
        transition: true,
        doc: "Name of image in sprite to use for drawing image lines. For seamless patterns, image width must be a factor of two (2, 4, 8, ..., 512). Note that zoom-dependent expressions will be evaluated only at integer zoom levels.",
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            },
            "data-driven styling": {
                js: "0.49.0",
                android: "6.5.0",
                macos: "0.11.0",
                ios: "4.4.0"
            }
        },
        expression: {
            interpolated: false,
            parameters: ["zoom", "feature"]
        },
        "property-type": "cross-faded-data-driven"
    },
    "line-gradient": {
        type: "color",
        doc: "Defines a gradient with which to color a line feature. Can only be used with GeoJSON sources that specify `\"lineMetrics\": true`.",
        transition: false,
        requires: [{
            "!": "line-dasharray"
        }, {
            "!": "line-pattern"
        }, {
            source: "geojson",
            has: {
                lineMetrics: true
            }
        }],
        "sdk-support": {
            "basic functionality": {
                js: "0.45.0",
                android: "6.5.0",
                ios: "4.4.0",
                macos: "0.11.0"
            },
            "data-driven styling": {}
        },
        expression: {
            interpolated: true,
            parameters: ["line-progress"]
        },
        "property-type": "color-ramp"
    }
};
var paint_circle = {
    "circle-radius": {
        type: "number",
        "default": 5,
        minimum: 0,
        transition: true,
        units: "pixels",
        doc: "Circle radius.",
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            },
            "data-driven styling": {
                js: "0.18.0",
                android: "5.0.0",
                ios: "3.5.0",
                macos: "0.4.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
    },
    "circle-color": {
        type: "color",
        "default": "#000000",
        doc: "The fill color of the circle.",
        transition: true,
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            },
            "data-driven styling": {
                js: "0.18.0",
                android: "5.0.0",
                ios: "3.5.0",
                macos: "0.4.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
    },
    "circle-blur": {
        type: "number",
        "default": 0,
        doc: "Amount to blur the circle. 1 blurs the circle such that only the centerpoint is full opacity.",
        transition: true,
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            },
            "data-driven styling": {
                js: "0.20.0",
                android: "5.0.0",
                ios: "3.5.0",
                macos: "0.4.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
    },
    "circle-opacity": {
        type: "number",
        doc: "The opacity at which the circle will be drawn.",
        "default": 1,
        minimum: 0,
        maximum: 1,
        transition: true,
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            },
            "data-driven styling": {
                js: "0.20.0",
                android: "5.0.0",
                ios: "3.5.0",
                macos: "0.4.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
    },
    "circle-translate": {
        type: "array",
        value: "number",
        length: 2,
        "default": [0, 0],
        transition: true,
        units: "pixels",
        doc: "The geometry's offset. Values are [x, y] where negatives indicate left and up, respectively.",
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "circle-translate-anchor": {
        type: "enum",
        values: {
            map: {
                doc: "The circle is translated relative to the map."
            },
            viewport: {
                doc: "The circle is translated relative to the viewport."
            }
        },
        doc: "Controls the frame of reference for `circle-translate`.",
        "default": "map",
        requires: ["circle-translate"],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            }
        },
        expression: {
            interpolated: false,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "circle-pitch-scale": {
        type: "enum",
        values: {
            map: {
                doc: "Circles are scaled according to their apparent distance to the camera."
            },
            viewport: {
                doc: "Circles are not scaled."
            }
        },
        "default": "map",
        doc: "Controls the scaling behavior of the circle when the map is pitched.",
        "sdk-support": {
            "basic functionality": {
                js: "0.21.0",
                android: "4.2.0",
                ios: "3.4.0",
                macos: "0.2.1"
            }
        },
        expression: {
            interpolated: false,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "circle-pitch-alignment": {
        type: "enum",
        values: {
            map: {
                doc: "The circle is aligned to the plane of the map."
            },
            viewport: {
                doc: "The circle is aligned to the plane of the viewport."
            }
        },
        "default": "viewport",
        doc: "Orientation of circle when map is pitched.",
        "sdk-support": {
            "basic functionality": {
                js: "0.39.0",
                android: "5.2.0",
                ios: "3.7.0",
                macos: "0.6.0"
            }
        },
        expression: {
            interpolated: false,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "circle-stroke-width": {
        type: "number",
        "default": 0,
        minimum: 0,
        transition: true,
        units: "pixels",
        doc: "The width of the circle's stroke. Strokes are placed outside of the `circle-radius`.",
        "sdk-support": {
            "basic functionality": {
                js: "0.29.0",
                android: "5.0.0",
                ios: "3.5.0",
                macos: "0.4.0"
            },
            "data-driven styling": {
                js: "0.29.0",
                android: "5.0.0",
                ios: "3.5.0",
                macos: "0.4.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
    },
    "circle-stroke-color": {
        type: "color",
        "default": "#000000",
        doc: "The stroke color of the circle.",
        transition: true,
        "sdk-support": {
            "basic functionality": {
                js: "0.29.0",
                android: "5.0.0",
                ios: "3.5.0",
                macos: "0.4.0"
            },
            "data-driven styling": {
                js: "0.29.0",
                android: "5.0.0",
                ios: "3.5.0",
                macos: "0.4.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
    },
    "circle-stroke-opacity": {
        type: "number",
        doc: "The opacity of the circle's stroke.",
        "default": 1,
        minimum: 0,
        maximum: 1,
        transition: true,
        "sdk-support": {
            "basic functionality": {
                js: "0.29.0",
                android: "5.0.0",
                ios: "3.5.0",
                macos: "0.4.0"
            },
            "data-driven styling": {
                js: "0.29.0",
                android: "5.0.0",
                ios: "3.5.0",
                macos: "0.4.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
    }
};
var paint_heatmap = {
    "heatmap-radius": {
        type: "number",
        "default": 30,
        minimum: 1,
        transition: true,
        units: "pixels",
        doc: "Radius of influence of one heatmap point in pixels. Increasing the value makes the heatmap smoother, but less detailed.",
        "sdk-support": {
            "basic functionality": {
                js: "0.41.0",
                android: "6.0.0",
                ios: "4.0.0",
                macos: "0.7.0"
            },
            "data-driven styling": {
                js: "0.43.0",
                android: "6.0.0",
                ios: "4.0.0",
                macos: "0.7.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
    },
    "heatmap-weight": {
        type: "number",
        "default": 1,
        minimum: 0,
        transition: false,
        doc: "A measure of how much an individual point contributes to the heatmap. A value of 10 would be equivalent to having 10 points of weight 1 in the same spot. Especially useful when combined with clustering.",
        "sdk-support": {
            "basic functionality": {
                js: "0.41.0",
                android: "6.0.0",
                ios: "4.0.0",
                macos: "0.7.0"
            },
            "data-driven styling": {
                js: "0.41.0",
                android: "6.0.0",
                ios: "4.0.0",
                macos: "0.7.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
    },
    "heatmap-intensity": {
        type: "number",
        "default": 1,
        minimum: 0,
        transition: true,
        doc: "Similar to `heatmap-weight` but controls the intensity of the heatmap globally. Primarily used for adjusting the heatmap based on zoom level.",
        "sdk-support": {
            "basic functionality": {
                js: "0.41.0",
                android: "6.0.0",
                ios: "4.0.0",
                macos: "0.7.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "heatmap-color": {
        type: "color",
        "default": ["interpolate", ["linear"], ["heatmap-density"], 0, "rgba(0, 0, 255, 0)", 0.1, "royalblue", 0.3, "cyan", 0.5, "lime", 0.7, "yellow", 1, "red"],
        doc: "Defines the color of each pixel based on its density value in a heatmap.  Should be an expression that uses `[\"heatmap-density\"]` as input.",
        transition: false,
        "sdk-support": {
            "basic functionality": {
                js: "0.41.0",
                android: "6.0.0",
                ios: "4.0.0",
                macos: "0.7.0"
            },
            "data-driven styling": {}
        },
        expression: {
            interpolated: true,
            parameters: ["heatmap-density"]
        },
        "property-type": "color-ramp"
    },
    "heatmap-opacity": {
        type: "number",
        doc: "The global opacity at which the heatmap layer will be drawn.",
        "default": 1,
        minimum: 0,
        maximum: 1,
        transition: true,
        "sdk-support": {
            "basic functionality": {
                js: "0.41.0",
                android: "6.0.0",
                ios: "4.0.0",
                macos: "0.7.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    }
};
var paint_symbol = {
    "icon-opacity": {
        doc: "The opacity at which the icon will be drawn.",
        type: "number",
        "default": 1,
        minimum: 0,
        maximum: 1,
        transition: true,
        requires: ["icon-image"],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            },
            "data-driven styling": {
                js: "0.33.0",
                android: "5.0.0",
                ios: "3.5.0",
                macos: "0.4.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
    },
    "icon-color": {
        type: "color",
        "default": "#000000",
        transition: true,
        doc: "The color of the icon. This can only be used with sdf icons.",
        requires: ["icon-image"],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            },
            "data-driven styling": {
                js: "0.33.0",
                android: "5.0.0",
                ios: "3.5.0",
                macos: "0.4.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
    },
    "icon-halo-color": {
        type: "color",
        "default": "rgba(0, 0, 0, 0)",
        transition: true,
        doc: "The color of the icon's halo. Icon halos can only be used with SDF icons.",
        requires: ["icon-image"],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            },
            "data-driven styling": {
                js: "0.33.0",
                android: "5.0.0",
                ios: "3.5.0",
                macos: "0.4.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
    },
    "icon-halo-width": {
        type: "number",
        "default": 0,
        minimum: 0,
        transition: true,
        units: "pixels",
        doc: "Distance of halo to the icon outline.",
        requires: ["icon-image"],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            },
            "data-driven styling": {
                js: "0.33.0",
                android: "5.0.0",
                ios: "3.5.0",
                macos: "0.4.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
    },
    "icon-halo-blur": {
        type: "number",
        "default": 0,
        minimum: 0,
        transition: true,
        units: "pixels",
        doc: "Fade out the halo towards the outside.",
        requires: ["icon-image"],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            },
            "data-driven styling": {
                js: "0.33.0",
                android: "5.0.0",
                ios: "3.5.0",
                macos: "0.4.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
    },
    "icon-translate": {
        type: "array",
        value: "number",
        length: 2,
        "default": [0, 0],
        transition: true,
        units: "pixels",
        doc: "Distance that the icon's anchor is moved from its original placement. Positive values indicate right and down, while negative values indicate left and up.",
        requires: ["icon-image"],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "icon-translate-anchor": {
        type: "enum",
        values: {
            map: {
                doc: "Icons are translated relative to the map."
            },
            viewport: {
                doc: "Icons are translated relative to the viewport."
            }
        },
        doc: "Controls the frame of reference for `icon-translate`.",
        "default": "map",
        requires: ["icon-image", "icon-translate"],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            }
        },
        expression: {
            interpolated: false,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "text-opacity": {
        type: "number",
        doc: "The opacity at which the text will be drawn.",
        "default": 1,
        minimum: 0,
        maximum: 1,
        transition: true,
        requires: ["text-field"],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            },
            "data-driven styling": {
                js: "0.33.0",
                android: "5.0.0",
                ios: "3.5.0",
                macos: "0.4.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
    },
    "text-color": {
        type: "color",
        doc: "The color with which the text will be drawn.",
        "default": "#000000",
        transition: true,
        overridable: true,
        requires: ["text-field"],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            },
            "data-driven styling": {
                js: "0.33.0",
                android: "5.0.0",
                ios: "3.5.0",
                macos: "0.4.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
    },
    "text-halo-color": {
        type: "color",
        "default": "rgba(0, 0, 0, 0)",
        transition: true,
        doc: "The color of the text's halo, which helps it stand out from backgrounds.",
        requires: ["text-field"],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            },
            "data-driven styling": {
                js: "0.33.0",
                android: "5.0.0",
                ios: "3.5.0",
                macos: "0.4.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
    },
    "text-halo-width": {
        type: "number",
        "default": 0,
        minimum: 0,
        transition: true,
        units: "pixels",
        doc: "Distance of halo to the font outline. Max text halo width is 1/4 of the font-size.",
        requires: ["text-field"],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            },
            "data-driven styling": {
                js: "0.33.0",
                android: "5.0.0",
                ios: "3.5.0",
                macos: "0.4.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
    },
    "text-halo-blur": {
        type: "number",
        "default": 0,
        minimum: 0,
        transition: true,
        units: "pixels",
        doc: "The halo's fadeout distance towards the outside.",
        requires: ["text-field"],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            },
            "data-driven styling": {
                js: "0.33.0",
                android: "5.0.0",
                ios: "3.5.0",
                macos: "0.4.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
    },
    "text-translate": {
        type: "array",
        value: "number",
        length: 2,
        "default": [0, 0],
        transition: true,
        units: "pixels",
        doc: "Distance that the text's anchor is moved from its original placement. Positive values indicate right and down, while negative values indicate left and up.",
        requires: ["text-field"],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "text-translate-anchor": {
        type: "enum",
        values: {
            map: {
                doc: "The text is translated relative to the map."
            },
            viewport: {
                doc: "The text is translated relative to the viewport."
            }
        },
        doc: "Controls the frame of reference for `text-translate`.",
        "default": "map",
        requires: ["text-field", "text-translate"],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            }
        },
        expression: {
            interpolated: false,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    }
};
var paint_raster = {
    "raster-opacity": {
        type: "number",
        doc: "The opacity at which the image will be drawn.",
        "default": 1,
        minimum: 0,
        maximum: 1,
        transition: true,
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "raster-hue-rotate": {
        type: "number",
        "default": 0,
        period: 360,
        transition: true,
        units: "degrees",
        doc: "Rotates hues around the color wheel.",
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "raster-brightness-min": {
        type: "number",
        doc: "Increase or reduce the brightness of the image. The value is the minimum brightness.",
        "default": 0,
        minimum: 0,
        maximum: 1,
        transition: true,
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "raster-brightness-max": {
        type: "number",
        doc: "Increase or reduce the brightness of the image. The value is the maximum brightness.",
        "default": 1,
        minimum: 0,
        maximum: 1,
        transition: true,
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "raster-saturation": {
        type: "number",
        doc: "Increase or reduce the saturation of the image.",
        "default": 0,
        minimum: -1,
        maximum: 1,
        transition: true,
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "raster-contrast": {
        type: "number",
        doc: "Increase or reduce the contrast of the image.",
        "default": 0,
        minimum: -1,
        maximum: 1,
        transition: true,
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "raster-resampling": {
        type: "enum",
        doc: "The resampling/interpolation method to use for overscaling, also known as texture magnification filter",
        values: {
            linear: {
                doc: "(Bi)linear filtering interpolates pixel values using the weighted average of the four closest original source pixels creating a smooth but blurry look when overscaled"
            },
            nearest: {
                doc: "Nearest neighbor filtering interpolates pixel values using the nearest original source pixel creating a sharp but pixelated look when overscaled"
            }
        },
        "default": "linear",
        "sdk-support": {
            "basic functionality": {
                js: "0.47.0",
                android: "6.3.0",
                ios: "4.2.0",
                macos: "0.9.0"
            }
        },
        expression: {
            interpolated: false,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "raster-fade-duration": {
        type: "number",
        "default": 300,
        minimum: 0,
        transition: false,
        units: "milliseconds",
        doc: "Fade duration when a new tile is added.",
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    }
};
var paint_hillshade = {
    "hillshade-illumination-direction": {
        type: "number",
        "default": 335,
        minimum: 0,
        maximum: 359,
        doc: "The direction of the light source used to generate the hillshading with 0 as the top of the viewport if `hillshade-illumination-anchor` is set to `viewport` and due north if `hillshade-illumination-anchor` is set to `map`.",
        transition: false,
        "sdk-support": {
            "basic functionality": {
                js: "0.43.0",
                android: "6.0.0",
                ios: "4.0.0",
                macos: "0.7.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "hillshade-illumination-anchor": {
        type: "enum",
        values: {
            map: {
                doc: "The hillshade illumination is relative to the north direction."
            },
            viewport: {
                doc: "The hillshade illumination is relative to the top of the viewport."
            }
        },
        "default": "viewport",
        doc: "Direction of light source when map is rotated.",
        "sdk-support": {
            "basic functionality": {
                js: "0.43.0",
                android: "6.0.0",
                ios: "4.0.0",
                macos: "0.7.0"
            }
        },
        expression: {
            interpolated: false,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "hillshade-exaggeration": {
        type: "number",
        doc: "Intensity of the hillshade",
        "default": 0.5,
        minimum: 0,
        maximum: 1,
        transition: true,
        "sdk-support": {
            "basic functionality": {
                js: "0.43.0",
                android: "6.0.0",
                ios: "4.0.0",
                macos: "0.7.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "hillshade-shadow-color": {
        type: "color",
        "default": "#000000",
        doc: "The shading color of areas that face away from the light source.",
        transition: true,
        "sdk-support": {
            "basic functionality": {
                js: "0.43.0",
                android: "6.0.0",
                ios: "4.0.0",
                macos: "0.7.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "hillshade-highlight-color": {
        type: "color",
        "default": "#FFFFFF",
        doc: "The shading color of areas that faces towards the light source.",
        transition: true,
        "sdk-support": {
            "basic functionality": {
                js: "0.43.0",
                android: "6.0.0",
                ios: "4.0.0",
                macos: "0.7.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "hillshade-accent-color": {
        type: "color",
        "default": "#000000",
        doc: "The shading color used to accentuate rugged terrain like sharp cliffs and gorges.",
        transition: true,
        "sdk-support": {
            "basic functionality": {
                js: "0.43.0",
                android: "6.0.0",
                ios: "4.0.0",
                macos: "0.7.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    }
};
var paint_background = {
    "background-color": {
        type: "color",
        "default": "#000000",
        doc: "The color with which the background will be drawn.",
        transition: true,
        requires: [{
            "!": "background-pattern"
        }],
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    },
    "background-pattern": {
        type: "resolvedImage",
        transition: true,
        doc: "Name of image in sprite to use for drawing an image background. For seamless patterns, image width and height must be a factor of two (2, 4, 8, ..., 512). Note that zoom-dependent expressions will be evaluated only at integer zoom levels.",
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            },
            "data-driven styling": {}
        },
        expression: {
            interpolated: false,
            parameters: ["zoom"]
        },
        "property-type": "cross-faded"
    },
    "background-opacity": {
        type: "number",
        "default": 1,
        minimum: 0,
        maximum: 1,
        doc: "The opacity at which the background will be drawn.",
        transition: true,
        "sdk-support": {
            "basic functionality": {
                js: "0.10.0",
                android: "2.0.1",
                ios: "2.0.0",
                macos: "0.1.0"
            }
        },
        expression: {
            interpolated: true,
            parameters: ["zoom"]
        },
        "property-type": "data-constant"
    }
};
var transition = {
    duration: {
        type: "number",
        "default": 300,
        minimum: 0,
        units: "milliseconds",
        doc: "Time allotted for transitions to complete."
    },
    delay: {
        type: "number",
        "default": 0,
        minimum: 0,
        units: "milliseconds",
        doc: "Length of time before a transition begins."
    }
};
var promoteId = {
    "*": {
        type: "string",
        doc: "A name of a feature property to use as ID for feature state."
    }
};
var v8 = {
    $version: $version,
    $root: $root,
    sources: sources,
    source: source,
    source_vector: source_vector,
    source_raster: source_raster,
    source_raster_dem: source_raster_dem,
    source_geojson: source_geojson,
    source_video: source_video,
    source_image: source_image,
    layer: layer,
    layout: layout,
    layout_background: layout_background,
    layout_fill: layout_fill,
    layout_circle: layout_circle,
    layout_heatmap: layout_heatmap,
    "layout_fill-extrusion": {
        visibility: {
            type: "enum",
            values: {
                visible: {
                    doc: "The layer is shown."
                },
                none: {
                    doc: "The layer is not shown."
                }
            },
            "default": "visible",
            doc: "Whether this layer is displayed.",
            "sdk-support": {
                "basic functionality": {
                    js: "0.27.0",
                    android: "5.1.0",
                    ios: "3.6.0",
                    macos: "0.5.0"
                }
            },
            "property-type": "constant"
        }
    },
    layout_line: layout_line,
    layout_symbol: layout_symbol,
    layout_raster: layout_raster,
    layout_hillshade: layout_hillshade,
    filter: filter,
    filter_operator: filter_operator,
    geometry_type: geometry_type,
    "function": {
        expression: {
            type: "expression",
            doc: "An expression."
        },
        stops: {
            type: "array",
            doc: "An array of stops.",
            value: "function_stop"
        },
        base: {
            type: "number",
            "default": 1,
            minimum: 0,
            doc: "The exponential base of the interpolation curve. It controls the rate at which the result increases. Higher values make the result increase more towards the high end of the range. With `1` the stops are interpolated linearly."
        },
        property: {
            type: "string",
            doc: "The name of a feature property to use as the function input.",
            "default": "$zoom"
        },
        type: {
            type: "enum",
            values: {
                identity: {
                    doc: "Return the input value as the output value."
                },
                exponential: {
                    doc: "Generate an output by interpolating between stops just less than and just greater than the function input."
                },
                interval: {
                    doc: "Return the output value of the stop just less than the function input."
                },
                categorical: {
                    doc: "Return the output value of the stop equal to the function input."
                }
            },
            doc: "The interpolation strategy to use in function evaluation.",
            "default": "exponential"
        },
        colorSpace: {
            type: "enum",
            values: {
                rgb: {
                    doc: "Use the RGB color space to interpolate color values"
                },
                lab: {
                    doc: "Use the LAB color space to interpolate color values."
                },
                hcl: {
                    doc: "Use the HCL color space to interpolate color values, interpolating the Hue, Chroma, and Luminance channels individually."
                }
            },
            doc: "The color space in which colors interpolated. Interpolating colors in perceptual color spaces like LAB and HCL tend to produce color ramps that look more consistent and produce colors that can be differentiated more easily than those interpolated in RGB space.",
            "default": "rgb"
        },
        "default": {
            type: "*",
            required: false,
            doc: "A value to serve as a fallback function result when a value isn't otherwise available. It is used in the following circumstances:\n* In categorical functions, when the feature value does not match any of the stop domain values.\n* In property and zoom-and-property functions, when a feature does not contain a value for the specified property.\n* In identity functions, when the feature value is not valid for the style property (for example, if the function is being used for a `circle-color` property but the feature property value is not a string or not a valid color).\n* In interval or exponential property and zoom-and-property functions, when the feature value is not numeric.\nIf no default is provided, the style property's default is used in these circumstances."
        }
    },
    function_stop: function_stop,
    expression: expression,
    expression_name: expression_name,
    light: light,
    paint: paint,
    paint_fill: paint_fill,
    "paint_fill-extrusion": {
        "fill-extrusion-opacity": {
            type: "number",
            "default": 1,
            minimum: 0,
            maximum: 1,
            doc: "The opacity of the entire fill extrusion layer. This is rendered on a per-layer, not per-feature, basis, and data-driven styling is not available.",
            transition: true,
            "sdk-support": {
                "basic functionality": {
                    js: "0.27.0",
                    android: "5.1.0",
                    ios: "3.6.0",
                    macos: "0.5.0"
                }
            },
            expression: {
                interpolated: true,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "fill-extrusion-color": {
            type: "color",
            "default": "#000000",
            doc: "The base color of the extruded fill. The extrusion's surfaces will be shaded differently based on this color in combination with the root `light` settings. If this color is specified as `rgba` with an alpha component, the alpha component will be ignored; use `fill-extrusion-opacity` to set layer opacity.",
            transition: true,
            requires: [{
                "!": "fill-extrusion-pattern"
            }],
            "sdk-support": {
                "basic functionality": {
                    js: "0.27.0",
                    android: "5.1.0",
                    ios: "3.6.0",
                    macos: "0.5.0"
                },
                "data-driven styling": {
                    js: "0.27.0",
                    android: "5.1.0",
                    ios: "3.6.0",
                    macos: "0.5.0"
                }
            },
            expression: {
                interpolated: true,
                parameters: ["zoom", "feature", "feature-state"]
            },
            "property-type": "data-driven"
        },
        "fill-extrusion-translate": {
            type: "array",
            value: "number",
            length: 2,
            "default": [0, 0],
            transition: true,
            units: "pixels",
            doc: "The geometry's offset. Values are [x, y] where negatives indicate left and up (on the flat plane), respectively.",
            "sdk-support": {
                "basic functionality": {
                    js: "0.27.0",
                    android: "5.1.0",
                    ios: "3.6.0",
                    macos: "0.5.0"
                }
            },
            expression: {
                interpolated: true,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "fill-extrusion-translate-anchor": {
            type: "enum",
            values: {
                map: {
                    doc: "The fill extrusion is translated relative to the map."
                },
                viewport: {
                    doc: "The fill extrusion is translated relative to the viewport."
                }
            },
            doc: "Controls the frame of reference for `fill-extrusion-translate`.",
            "default": "map",
            requires: ["fill-extrusion-translate"],
            "sdk-support": {
                "basic functionality": {
                    js: "0.27.0",
                    android: "5.1.0",
                    ios: "3.6.0",
                    macos: "0.5.0"
                }
            },
            expression: {
                interpolated: false,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "fill-extrusion-pattern": {
            type: "resolvedImage",
            transition: true,
            doc: "Name of image in sprite to use for drawing images on extruded fills. For seamless patterns, image width and height must be a factor of two (2, 4, 8, ..., 512). Note that zoom-dependent expressions will be evaluated only at integer zoom levels.",
            "sdk-support": {
                "basic functionality": {
                    js: "0.27.0",
                    android: "5.1.0",
                    ios: "3.6.0",
                    macos: "0.5.0"
                },
                "data-driven styling": {
                    js: "0.49.0",
                    android: "6.5.0",
                    macos: "0.11.0",
                    ios: "4.4.0"
                }
            },
            expression: {
                interpolated: false,
                parameters: ["zoom", "feature"]
            },
            "property-type": "cross-faded-data-driven"
        },
        "fill-extrusion-height": {
            type: "number",
            "default": 0,
            minimum: 0,
            units: "meters",
            doc: "The height with which to extrude this layer.",
            transition: true,
            "sdk-support": {
                "basic functionality": {
                    js: "0.27.0",
                    android: "5.1.0",
                    ios: "3.6.0",
                    macos: "0.5.0"
                },
                "data-driven styling": {
                    js: "0.27.0",
                    android: "5.1.0",
                    ios: "3.6.0",
                    macos: "0.5.0"
                }
            },
            expression: {
                interpolated: true,
                parameters: ["zoom", "feature", "feature-state"]
            },
            "property-type": "data-driven"
        },
        "fill-extrusion-base": {
            type: "number",
            "default": 0,
            minimum: 0,
            units: "meters",
            doc: "The height with which to extrude the base of this layer. Must be less than or equal to `fill-extrusion-height`.",
            transition: true,
            requires: ["fill-extrusion-height"],
            "sdk-support": {
                "basic functionality": {
                    js: "0.27.0",
                    android: "5.1.0",
                    ios: "3.6.0",
                    macos: "0.5.0"
                },
                "data-driven styling": {
                    js: "0.27.0",
                    android: "5.1.0",
                    ios: "3.6.0",
                    macos: "0.5.0"
                }
            },
            expression: {
                interpolated: true,
                parameters: ["zoom", "feature", "feature-state"]
            },
            "property-type": "data-driven"
        },
        "fill-extrusion-vertical-gradient": {
            type: "boolean",
            "default": true,
            doc: "Whether to apply a vertical gradient to the sides of a fill-extrusion layer. If true, sides will be shaded slightly darker farther down.",
            transition: false,
            "sdk-support": {
                "basic functionality": {
                    js: "0.50.0",
                    ios: "4.7.0",
                    macos: "0.13.0"
                }
            },
            expression: {
                interpolated: false,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        }
    },
    paint_line: paint_line,
    paint_circle: paint_circle,
    paint_heatmap: paint_heatmap,
    paint_symbol: paint_symbol,
    paint_raster: paint_raster,
    paint_hillshade: paint_hillshade,
    paint_background: paint_background,
    transition: transition,
    "property-type": {
        "data-driven": {
            type: "property-type",
            doc: "Property is interpolable and can be represented using a property expression."
        },
        "cross-faded": {
            type: "property-type",
            doc: "Property is non-interpolable; rather, its values will be cross-faded to smoothly transition between integer zooms."
        },
        "cross-faded-data-driven": {
            type: "property-type",
            doc: "Property is non-interpolable; rather, its values will be cross-faded to smoothly transition between integer zooms. It can be represented using a property expression."
        },
        "color-ramp": {
            type: "property-type",
            doc: "Property should be specified using a color ramp from which the output color can be sampled based on a property calculation."
        },
        "data-constant": {
            type: "property-type",
            doc: "Property is interpolable but cannot be represented using a property expression."
        },
        constant: {
            type: "property-type",
            doc: "Property is constant across all zoom levels and property values."
        }
    },
    promoteId: promoteId
};

// Note: This regex matches even invalid JSON strings, but since we’re
// working on the output of `JSON.stringify` we know that only valid strings
// are present (unless the user supplied a weird `options.indent` but in
// that case we don’t care since the output would be invalid anyway).
var stringOrChar = /("(?:[^\\"]|\\.)*")|[:,]/g;

var jsonStringifyPrettyCompact = function stringify(passedObj, options) {
    var indent, maxLength, replacer;

    options = options || {};
    indent = JSON.stringify([1], undefined, options.indent === undefined ? 2 : options.indent).slice(2, -3);
    maxLength = indent === "" ? Infinity : options.maxLength === undefined ? 80 : options.maxLength;
    replacer = options.replacer;

    return function _stringify(obj, currentIndent, reserved) {
        // prettier-ignore
        var end, index, items, key, keyPart, keys, length, nextIndent, prettified, start, string, value;

        if (obj && typeof obj.toJSON === "function") {
            obj = obj.toJSON();
        }

        string = JSON.stringify(obj, replacer);

        if (string === undefined) {
            return string;
        }

        length = maxLength - currentIndent.length - reserved;

        if (string.length <= length) {
            prettified = string.replace(stringOrChar, function (match, stringLiteral) {
                return stringLiteral || match + " ";
            });
            if (prettified.length <= length) {
                return prettified;
            }
        }

        if (replacer != null) {
            obj = JSON.parse(string);
            replacer = undefined;
        }

        if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" && obj !== null) {
            nextIndent = currentIndent + indent;
            items = [];
            index = 0;

            if (Array.isArray(obj)) {
                start = "[";
                end = "]";
                length = obj.length;
                for (; index < length; index++) {
                    items.push(_stringify(obj[index], nextIndent, index === length - 1 ? 0 : 1) || "null");
                }
            } else {
                start = "{";
                end = "}";
                keys = Object.keys(obj);
                length = keys.length;
                for (; index < length; index++) {
                    key = keys[index];
                    keyPart = JSON.stringify(key) + ": ";
                    value = _stringify(obj[key], nextIndent, keyPart.length + (index === length - 1 ? 0 : 1));
                    if (value !== undefined) {
                        items.push(keyPart + value);
                    }
                }
            }

            if (items.length > 0) {
                return [start, indent + items.join(",\n" + nextIndent), end].join("\n" + currentIndent);
            }
        }

        return string;
    }(passedObj, "", 0);
};

function sortKeysBy(obj, reference) {
    var result = {};
    for (var key in reference) {
        if (obj[key] !== undefined) {
            result[key] = obj[key];
        }
    }
    for (var key$1 in obj) {
        if (result[key$1] === undefined) {
            result[key$1] = obj[key$1];
        }
    }
    return result;
}
function format(style, space) {
    if (space === void 0) space = 2;
    style = sortKeysBy(style, v8.$root);
    if (style.layers) {
        style.layers = style.layers.map(function (layer) {
            return sortKeysBy(layer, v8.layer);
        });
    }
    return jsonStringifyPrettyCompact(style, { indent: space });
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function commonjsRequire() {
    throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
}

function createCommonjsModule(fn, module) {
    return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var punycode = createCommonjsModule(function (module, exports) {
    (function (root) {

        /** Detect free variables */
        var freeExports = exports && !exports.nodeType && exports;
        var freeModule = module && !module.nodeType && module;
        var freeGlobal = (typeof commonjsGlobal === "undefined" ? "undefined" : _typeof(commonjsGlobal)) == 'object' && commonjsGlobal;
        if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal) {
            root = freeGlobal;
        }

        /**
         * The `punycode` object.
         * @name punycode
         * @type Object
         */
        var punycode,


        /** Highest positive signed 32-bit float value */
        maxInt = 2147483647,
            // aka. 0x7FFFFFFF or 2^31-1

        /** Bootstring parameters */
        base = 36,
            tMin = 1,
            tMax = 26,
            skew = 38,
            damp = 700,
            initialBias = 72,
            initialN = 128,
            // 0x80
        delimiter = '-',
            // '\x2D'

        /** Regular expressions */
        regexPunycode = /^xn--/,
            regexNonASCII = /[^\x20-\x7E]/,
            // unprintable ASCII chars + non-ASCII chars
        regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g,
            // RFC 3490 separators

        /** Error messages */
        errors = {
            'overflow': 'Overflow: input needs wider integers to process',
            'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
            'invalid-input': 'Invalid input'
        },


        /** Convenience shortcuts */
        baseMinusTMin = base - tMin,
            floor = Math.floor,
            stringFromCharCode = String.fromCharCode,


        /** Temporary variable */
        key;

        /*--------------------------------------------------------------------------*/

        /**
         * A generic error utility function.
         * @private
         * @param {String} type The error type.
         * @returns {Error} Throws a `RangeError` with the applicable error message.
         */
        function error(type) {
            throw RangeError(errors[type]);
        }

        /**
         * A generic `Array#map` utility function.
         * @private
         * @param {Array} array The array to iterate over.
         * @param {Function} callback The function that gets called for every array
         * item.
         * @returns {Array} A new array of values returned by the callback function.
         */
        function map(array, fn) {
            var length = array.length;
            var result = [];
            while (length--) {
                result[length] = fn(array[length]);
            }
            return result;
        }

        /**
         * A simple `Array#map`-like wrapper to work with domain name strings or email
         * addresses.
         * @private
         * @param {String} domain The domain name or email address.
         * @param {Function} callback The function that gets called for every
         * character.
         * @returns {Array} A new string of characters returned by the callback
         * function.
         */
        function mapDomain(string, fn) {
            var parts = string.split('@');
            var result = '';
            if (parts.length > 1) {
                // In email addresses, only the domain name should be punycoded. Leave
                // the local part (i.e. everything up to `@`) intact.
                result = parts[0] + '@';
                string = parts[1];
            }
            // Avoid `split(regex)` for IE8 compatibility. See #17.
            string = string.replace(regexSeparators, '\x2E');
            var labels = string.split('.');
            var encoded = map(labels, fn).join('.');
            return result + encoded;
        }

        /**
         * Creates an array containing the numeric code points of each Unicode
         * character in the string. While JavaScript uses UCS-2 internally,
         * this function will convert a pair of surrogate halves (each of which
         * UCS-2 exposes as separate characters) into a single code point,
         * matching UTF-16.
         * @see `punycode.ucs2.encode`
         * @see <https://mathiasbynens.be/notes/javascript-encoding>
         * @memberOf punycode.ucs2
         * @name decode
         * @param {String} string The Unicode input string (UCS-2).
         * @returns {Array} The new array of code points.
         */
        function ucs2decode(string) {
            var output = [],
                counter = 0,
                length = string.length,
                value,
                extra;
            while (counter < length) {
                value = string.charCodeAt(counter++);
                if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
                    // high surrogate, and there is a next character
                    extra = string.charCodeAt(counter++);
                    if ((extra & 0xFC00) == 0xDC00) {
                        // low surrogate
                        output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
                    } else {
                        // unmatched surrogate; only append this code unit, in case the next
                        // code unit is the high surrogate of a surrogate pair
                        output.push(value);
                        counter--;
                    }
                } else {
                    output.push(value);
                }
            }
            return output;
        }

        /**
         * Creates a string based on an array of numeric code points.
         * @see `punycode.ucs2.decode`
         * @memberOf punycode.ucs2
         * @name encode
         * @param {Array} codePoints The array of numeric code points.
         * @returns {String} The new Unicode string (UCS-2).
         */
        function ucs2encode(array) {
            return map(array, function (value) {
                var output = '';
                if (value > 0xFFFF) {
                    value -= 0x10000;
                    output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
                    value = 0xDC00 | value & 0x3FF;
                }
                output += stringFromCharCode(value);
                return output;
            }).join('');
        }

        /**
         * Converts a basic code point into a digit/integer.
         * @see `digitToBasic()`
         * @private
         * @param {Number} codePoint The basic numeric code point value.
         * @returns {Number} The numeric value of a basic code point (for use in
         * representing integers) in the range `0` to `base - 1`, or `base` if
         * the code point does not represent a value.
         */
        function basicToDigit(codePoint) {
            if (codePoint - 48 < 10) {
                return codePoint - 22;
            }
            if (codePoint - 65 < 26) {
                return codePoint - 65;
            }
            if (codePoint - 97 < 26) {
                return codePoint - 97;
            }
            return base;
        }

        /**
         * Converts a digit/integer into a basic code point.
         * @see `basicToDigit()`
         * @private
         * @param {Number} digit The numeric value of a basic code point.
         * @returns {Number} The basic code point whose value (when used for
         * representing integers) is `digit`, which needs to be in the range
         * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
         * used; else, the lowercase form is used. The behavior is undefined
         * if `flag` is non-zero and `digit` has no uppercase form.
         */
        function digitToBasic(digit, flag) {
            //  0..25 map to ASCII a..z or A..Z
            // 26..35 map to ASCII 0..9
            return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
        }

        /**
         * Bias adaptation function as per section 3.4 of RFC 3492.
         * http://tools.ietf.org/html/rfc3492#section-3.4
         * @private
         */
        function adapt(delta, numPoints, firstTime) {
            var k = 0;
            delta = firstTime ? floor(delta / damp) : delta >> 1;
            delta += floor(delta / numPoints);
            for (; /* no initialization */delta > baseMinusTMin * tMax >> 1; k += base) {
                delta = floor(delta / baseMinusTMin);
            }
            return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
        }

        /**
         * Converts a Punycode string of ASCII-only symbols to a string of Unicode
         * symbols.
         * @memberOf punycode
         * @param {String} input The Punycode string of ASCII-only symbols.
         * @returns {String} The resulting string of Unicode symbols.
         */
        function decode(input) {
            // Don't use UCS-2
            var output = [],
                inputLength = input.length,
                out,
                i = 0,
                n = initialN,
                bias = initialBias,
                basic,
                j,
                index,
                oldi,
                w,
                k,
                digit,
                t,

            /** Cached calculation results */
            baseMinusT;

            // Handle the basic code points: let `basic` be the number of input code
            // points before the last delimiter, or `0` if there is none, then copy
            // the first basic code points to the output.

            basic = input.lastIndexOf(delimiter);
            if (basic < 0) {
                basic = 0;
            }

            for (j = 0; j < basic; ++j) {
                // if it's not a basic code point
                if (input.charCodeAt(j) >= 0x80) {
                    error('not-basic');
                }
                output.push(input.charCodeAt(j));
            }

            // Main decoding loop: start just after the last delimiter if any basic code
            // points were copied; start at the beginning otherwise.

            for (index = basic > 0 ? basic + 1 : 0; index < inputLength;) /* no final expression */{

                // `index` is the index of the next character to be consumed.
                // Decode a generalized variable-length integer into `delta`,
                // which gets added to `i`. The overflow checking is easier
                // if we increase `i` as we go, then subtract off its starting
                // value at the end to obtain `delta`.
                for (oldi = i, w = 1, k = base;; /* no condition */k += base) {

                    if (index >= inputLength) {
                        error('invalid-input');
                    }

                    digit = basicToDigit(input.charCodeAt(index++));

                    if (digit >= base || digit > floor((maxInt - i) / w)) {
                        error('overflow');
                    }

                    i += digit * w;
                    t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;

                    if (digit < t) {
                        break;
                    }

                    baseMinusT = base - t;
                    if (w > floor(maxInt / baseMinusT)) {
                        error('overflow');
                    }

                    w *= baseMinusT;
                }

                out = output.length + 1;
                bias = adapt(i - oldi, out, oldi == 0);

                // `i` was supposed to wrap around from `out` to `0`,
                // incrementing `n` each time, so we'll fix that now:
                if (floor(i / out) > maxInt - n) {
                    error('overflow');
                }

                n += floor(i / out);
                i %= out;

                // Insert `n` at position `i` of the output
                output.splice(i++, 0, n);
            }

            return ucs2encode(output);
        }

        /**
         * Converts a string of Unicode symbols (e.g. a domain name label) to a
         * Punycode string of ASCII-only symbols.
         * @memberOf punycode
         * @param {String} input The string of Unicode symbols.
         * @returns {String} The resulting Punycode string of ASCII-only symbols.
         */
        function encode(input) {
            var n,
                delta,
                handledCPCount,
                basicLength,
                bias,
                j,
                m,
                q,
                k,
                t,
                currentValue,
                output = [],

            /** `inputLength` will hold the number of code points in `input`. */
            inputLength,

            /** Cached calculation results */
            handledCPCountPlusOne,
                baseMinusT,
                qMinusT;

            // Convert the input in UCS-2 to Unicode
            input = ucs2decode(input);

            // Cache the length
            inputLength = input.length;

            // Initialize the state
            n = initialN;
            delta = 0;
            bias = initialBias;

            // Handle the basic code points
            for (j = 0; j < inputLength; ++j) {
                currentValue = input[j];
                if (currentValue < 0x80) {
                    output.push(stringFromCharCode(currentValue));
                }
            }

            handledCPCount = basicLength = output.length;

            // `handledCPCount` is the number of code points that have been handled;
            // `basicLength` is the number of basic code points.

            // Finish the basic string - if it is not empty - with a delimiter
            if (basicLength) {
                output.push(delimiter);
            }

            // Main encoding loop:
            while (handledCPCount < inputLength) {

                // All non-basic code points < n have been handled already. Find the next
                // larger one:
                for (m = maxInt, j = 0; j < inputLength; ++j) {
                    currentValue = input[j];
                    if (currentValue >= n && currentValue < m) {
                        m = currentValue;
                    }
                }

                // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
                // but guard against overflow
                handledCPCountPlusOne = handledCPCount + 1;
                if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
                    error('overflow');
                }

                delta += (m - n) * handledCPCountPlusOne;
                n = m;

                for (j = 0; j < inputLength; ++j) {
                    currentValue = input[j];

                    if (currentValue < n && ++delta > maxInt) {
                        error('overflow');
                    }

                    if (currentValue == n) {
                        // Represent delta as a generalized variable-length integer
                        for (q = delta, k = base;; /* no condition */k += base) {
                            t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                            if (q < t) {
                                break;
                            }
                            qMinusT = q - t;
                            baseMinusT = base - t;
                            output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
                            q = floor(qMinusT / baseMinusT);
                        }

                        output.push(stringFromCharCode(digitToBasic(q, 0)));
                        bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
                        delta = 0;
                        ++handledCPCount;
                    }
                }

                ++delta;
                ++n;
            }
            return output.join('');
        }

        /**
         * Converts a Punycode string representing a domain name or an email address
         * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
         * it doesn't matter if you call it on a string that has already been
         * converted to Unicode.
         * @memberOf punycode
         * @param {String} input The Punycoded domain name or email address to
         * convert to Unicode.
         * @returns {String} The Unicode representation of the given Punycode
         * string.
         */
        function toUnicode(input) {
            return mapDomain(input, function (string) {
                return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
            });
        }

        /**
         * Converts a Unicode string representing a domain name or an email address to
         * Punycode. Only the non-ASCII parts of the domain name will be converted,
         * i.e. it doesn't matter if you call it with a domain that's already in
         * ASCII.
         * @memberOf punycode
         * @param {String} input The domain name or email address to convert, as a
         * Unicode string.
         * @returns {String} The Punycode representation of the given domain name or
         * email address.
         */
        function toASCII(input) {
            return mapDomain(input, function (string) {
                return regexNonASCII.test(string) ? 'xn--' + encode(string) : string;
            });
        }

        /*--------------------------------------------------------------------------*/

        /** Define the public API */
        punycode = {
            /**
             * A string representing the current Punycode.js version number.
             * @memberOf punycode
             * @type String
             */
            'version': '1.3.2',
            /**
             * An object of methods to convert from JavaScript's internal character
             * representation (UCS-2) to Unicode code points, and back.
             * @see <https://mathiasbynens.be/notes/javascript-encoding>
             * @memberOf punycode
             * @type Object
             */
            'ucs2': {
                'decode': ucs2decode,
                'encode': ucs2encode
            },
            'decode': decode,
            'encode': encode,
            'toASCII': toASCII,
            'toUnicode': toUnicode
        };

        /** Expose `punycode` */
        // Some AMD build optimizers, like r.js, check for specific condition patterns
        // like the following:
        if (freeExports && freeModule) {
            if (module.exports == freeExports) {
                // in Node.js or RingoJS v0.8.0+
                freeModule.exports = punycode;
            } else {
                // in Narwhal or RingoJS v0.7.0-
                for (key in punycode) {
                    punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
                }
            }
        } else {
            // in Rhino or a web browser
            root.punycode = punycode;
        }
    })(commonjsGlobal);
});

var util = {
    isString: function isString(arg) {
        return typeof arg === 'string';
    },
    isObject: function isObject(arg) {
        return (typeof arg === "undefined" ? "undefined" : _typeof(arg)) === 'object' && arg !== null;
    },
    isNull: function isNull(arg) {
        return arg === null;
    },
    isNullOrUndefined: function isNullOrUndefined(arg) {
        return arg == null;
    }
};

// Copyright Joyent, Inc. and other Node contributors.

// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}

var decode = function decode(qs, sep, eq, options) {
    sep = sep || '&';
    eq = eq || '=';
    var obj = {};

    if (typeof qs !== 'string' || qs.length === 0) {
        return obj;
    }

    var regexp = /\+/g;
    qs = qs.split(sep);

    var maxKeys = 1000;
    if (options && typeof options.maxKeys === 'number') {
        maxKeys = options.maxKeys;
    }

    var len = qs.length;
    // maxKeys <= 0 means that we should not limit keys count
    if (maxKeys > 0 && len > maxKeys) {
        len = maxKeys;
    }

    for (var i = 0; i < len; ++i) {
        var x = qs[i].replace(regexp, '%20'),
            idx = x.indexOf(eq),
            kstr,
            vstr,
            k,
            v;

        if (idx >= 0) {
            kstr = x.substr(0, idx);
            vstr = x.substr(idx + 1);
        } else {
            kstr = x;
            vstr = '';
        }

        k = decodeURIComponent(kstr);
        v = decodeURIComponent(vstr);

        if (!hasOwnProperty(obj, k)) {
            obj[k] = v;
        } else if (Array.isArray(obj[k])) {
            obj[k].push(v);
        } else {
            obj[k] = [obj[k], v];
        }
    }

    return obj;
};

// Copyright Joyent, Inc. and other Node contributors.

var stringifyPrimitive = function stringifyPrimitive(v) {
    switch (typeof v === "undefined" ? "undefined" : _typeof(v)) {
        case 'string':
            return v;

        case 'boolean':
            return v ? 'true' : 'false';

        case 'number':
            return isFinite(v) ? v : '';

        default:
            return '';
    }
};

var encode = function encode(obj, sep, eq, name) {
    sep = sep || '&';
    eq = eq || '=';
    if (obj === null) {
        obj = undefined;
    }

    if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) === 'object') {
        return Object.keys(obj).map(function (k) {
            var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
            if (Array.isArray(obj[k])) {
                return obj[k].map(function (v) {
                    return ks + encodeURIComponent(stringifyPrimitive(v));
                }).join(sep);
            } else {
                return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
            }
        }).join(sep);
    }

    if (!name) {
        return '';
    }
    return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
};

var querystring = createCommonjsModule(function (module, exports) {

    exports.decode = exports.parse = decode;
    exports.encode = exports.stringify = encode;
});
var querystring_1 = querystring.decode;
var querystring_2 = querystring.parse;
var querystring_3 = querystring.encode;
var querystring_4 = querystring.stringify;

var parse = urlParse;
var resolve = urlResolve;
var resolveObject = urlResolveObject;
var format$1 = urlFormat;

var Url_1 = Url;

function Url() {
    this.protocol = null;
    this.slashes = null;
    this.auth = null;
    this.host = null;
    this.port = null;
    this.hostname = null;
    this.hash = null;
    this.search = null;
    this.query = null;
    this.pathname = null;
    this.path = null;
    this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,


// Special case for a simple path URL
simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,


// RFC 2396: characters reserved for delimiting URLs.
// We actually just auto-escape these.
delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],


// RFC 2396: characters not allowed for various reasons.
unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),


// Allowed by RFCs, but cause of XSS attacks.  Always escape these.
autoEscape = ['\''].concat(unwise),

// Characters that are never ever allowed in a hostname.
// Note that any invalid chars are also handled, but these
// are the ones that are *expected* to be seen, so we fast-path
// them.
nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,

// protocols that can allow "unsafe" and "unwise" chars.
unsafeProtocol = {
    'javascript': true,
    'javascript:': true
},

// protocols that never have a hostname.
hostlessProtocol = {
    'javascript': true,
    'javascript:': true
},

// protocols that always contain a // bit.
slashedProtocol = {
    'http': true,
    'https': true,
    'ftp': true,
    'gopher': true,
    'file': true,
    'http:': true,
    'https:': true,
    'ftp:': true,
    'gopher:': true,
    'file:': true
};

function urlParse(url, parseQueryString, slashesDenoteHost) {
    if (url && util.isObject(url) && url instanceof Url) {
        return url;
    }

    var u = new Url();
    u.parse(url, parseQueryString, slashesDenoteHost);
    return u;
}

Url.prototype.parse = function (url, parseQueryString, slashesDenoteHost) {
    if (!util.isString(url)) {
        throw new TypeError("Parameter 'url' must be a string, not " + (typeof url === "undefined" ? "undefined" : _typeof(url)));
    }

    // Copy chrome, IE, opera backslash-handling behavior.
    // Back slashes before the query string get converted to forward slashes
    // See: https://code.google.com/p/chromium/issues/detail?id=25916
    var queryIndex = url.indexOf('?'),
        splitter = queryIndex !== -1 && queryIndex < url.indexOf('#') ? '?' : '#',
        uSplit = url.split(splitter),
        slashRegex = /\\/g;
    uSplit[0] = uSplit[0].replace(slashRegex, '/');
    url = uSplit.join(splitter);

    var rest = url;

    // trim before proceeding.
    // This is to support parse stuff like "  http://foo.com  \n"
    rest = rest.trim();

    if (!slashesDenoteHost && url.split('#').length === 1) {
        // Try fast path regexp
        var simplePath = simplePathPattern.exec(rest);
        if (simplePath) {
            this.path = rest;
            this.href = rest;
            this.pathname = simplePath[1];
            if (simplePath[2]) {
                this.search = simplePath[2];
                if (parseQueryString) {
                    this.query = querystring.parse(this.search.substr(1));
                } else {
                    this.query = this.search.substr(1);
                }
            } else if (parseQueryString) {
                this.search = '';
                this.query = {};
            }
            return this;
        }
    }

    var proto = protocolPattern.exec(rest);
    if (proto) {
        proto = proto[0];
        var lowerProto = proto.toLowerCase();
        this.protocol = lowerProto;
        rest = rest.substr(proto.length);
    }

    // figure out if it's got a host
    // user@server is *always* interpreted as a hostname, and url
    // resolution will treat //foo/bar as host=foo,path=bar because that's
    // how the browser resolves relative URLs.
    if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
        var slashes = rest.substr(0, 2) === '//';
        if (slashes && !(proto && hostlessProtocol[proto])) {
            rest = rest.substr(2);
            this.slashes = true;
        }
    }

    if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {

        // there's a hostname.
        // the first instance of /, ?, ;, or # ends the host.
        //
        // If there is an @ in the hostname, then non-host chars *are* allowed
        // to the left of the last @ sign, unless some host-ending character
        // comes *before* the @-sign.
        // URLs are obnoxious.
        //
        // ex:
        // http://a@b@c/ => user:a@b host:c
        // http://a@b?@c => user:a host:c path:/?@c

        // v0.12 TODO(isaacs): This is not quite how Chrome does things.
        // Review our test case against browsers more comprehensively.

        // find the first instance of any hostEndingChars
        var hostEnd = -1;
        for (var i = 0; i < hostEndingChars.length; i++) {
            var hec = rest.indexOf(hostEndingChars[i]);
            if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
                hostEnd = hec;
            }
        }

        // at this point, either we have an explicit point where the
        // auth portion cannot go past, or the last @ char is the decider.
        var auth, atSign;
        if (hostEnd === -1) {
            // atSign can be anywhere.
            atSign = rest.lastIndexOf('@');
        } else {
            // atSign must be in auth portion.
            // http://a@b/c@d => host:b auth:a path:/c@d
            atSign = rest.lastIndexOf('@', hostEnd);
        }

        // Now we have a portion which is definitely the auth.
        // Pull that off.
        if (atSign !== -1) {
            auth = rest.slice(0, atSign);
            rest = rest.slice(atSign + 1);
            this.auth = decodeURIComponent(auth);
        }

        // the host is the remaining to the left of the first non-host char
        hostEnd = -1;
        for (var i = 0; i < nonHostChars.length; i++) {
            var hec = rest.indexOf(nonHostChars[i]);
            if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
                hostEnd = hec;
            }
        }
        // if we still have not hit it, then the entire thing is a host.
        if (hostEnd === -1) {
            hostEnd = rest.length;
        }

        this.host = rest.slice(0, hostEnd);
        rest = rest.slice(hostEnd);

        // pull out port.
        this.parseHost();

        // we've indicated that there is a hostname,
        // so even if it's empty, it has to be present.
        this.hostname = this.hostname || '';

        // if hostname begins with [ and ends with ]
        // assume that it's an IPv6 address.
        var ipv6Hostname = this.hostname[0] === '[' && this.hostname[this.hostname.length - 1] === ']';

        // validate a little.
        if (!ipv6Hostname) {
            var hostparts = this.hostname.split(/\./);
            for (var i = 0, l = hostparts.length; i < l; i++) {
                var part = hostparts[i];
                if (!part) {
                    continue;
                }
                if (!part.match(hostnamePartPattern)) {
                    var newpart = '';
                    for (var j = 0, k = part.length; j < k; j++) {
                        if (part.charCodeAt(j) > 127) {
                            // we replace non-ASCII char with a temporary placeholder
                            // we need this to make sure size of hostname is not
                            // broken by replacing non-ASCII by nothing
                            newpart += 'x';
                        } else {
                            newpart += part[j];
                        }
                    }
                    // we test again with ASCII char only
                    if (!newpart.match(hostnamePartPattern)) {
                        var validParts = hostparts.slice(0, i);
                        var notHost = hostparts.slice(i + 1);
                        var bit = part.match(hostnamePartStart);
                        if (bit) {
                            validParts.push(bit[1]);
                            notHost.unshift(bit[2]);
                        }
                        if (notHost.length) {
                            rest = '/' + notHost.join('.') + rest;
                        }
                        this.hostname = validParts.join('.');
                        break;
                    }
                }
            }
        }

        if (this.hostname.length > hostnameMaxLen) {
            this.hostname = '';
        } else {
            // hostnames are always lower case.
            this.hostname = this.hostname.toLowerCase();
        }

        if (!ipv6Hostname) {
            // IDNA Support: Returns a punycoded representation of "domain".
            // It only converts parts of the domain name that
            // have non-ASCII characters, i.e. it doesn't matter if
            // you call it with a domain that already is ASCII-only.
            this.hostname = punycode.toASCII(this.hostname);
        }

        var p = this.port ? ':' + this.port : '';
        var h = this.hostname || '';
        this.host = h + p;
        this.href += this.host;

        // strip [ and ] from the hostname
        // the host field still retains them, though
        if (ipv6Hostname) {
            this.hostname = this.hostname.substr(1, this.hostname.length - 2);
            if (rest[0] !== '/') {
                rest = '/' + rest;
            }
        }
    }

    // now rest is set to the post-host stuff.
    // chop off any delim chars.
    if (!unsafeProtocol[lowerProto]) {

        // First, make 100% sure that any "autoEscape" chars get
        // escaped, even if encodeURIComponent doesn't think they
        // need to be.
        for (var i = 0, l = autoEscape.length; i < l; i++) {
            var ae = autoEscape[i];
            if (rest.indexOf(ae) === -1) {
                continue;
            }
            var esc = encodeURIComponent(ae);
            if (esc === ae) {
                esc = escape(ae);
            }
            rest = rest.split(ae).join(esc);
        }
    }

    // chop off from the tail first.
    var hash = rest.indexOf('#');
    if (hash !== -1) {
        // got a fragment string.
        this.hash = rest.substr(hash);
        rest = rest.slice(0, hash);
    }
    var qm = rest.indexOf('?');
    if (qm !== -1) {
        this.search = rest.substr(qm);
        this.query = rest.substr(qm + 1);
        if (parseQueryString) {
            this.query = querystring.parse(this.query);
        }
        rest = rest.slice(0, qm);
    } else if (parseQueryString) {
        // no query string, but parseQueryString still requested
        this.search = '';
        this.query = {};
    }
    if (rest) {
        this.pathname = rest;
    }
    if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
        this.pathname = '/';
    }

    //to support http.request
    if (this.pathname || this.search) {
        var p = this.pathname || '';
        var s = this.search || '';
        this.path = p + s;
    }

    // finally, reconstruct the href based on what has been validated.
    this.href = this.format();
    return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
    // ensure it's an object, and not a string url.
    // If it's an obj, this is a no-op.
    // this way, you can call url_format() on strings
    // to clean up potentially wonky urls.
    if (util.isString(obj)) {
        obj = urlParse(obj);
    }
    if (!(obj instanceof Url)) {
        return Url.prototype.format.call(obj);
    }
    return obj.format();
}

Url.prototype.format = function () {
    var auth = this.auth || '';
    if (auth) {
        auth = encodeURIComponent(auth);
        auth = auth.replace(/%3A/i, ':');
        auth += '@';
    }

    var protocol = this.protocol || '',
        pathname = this.pathname || '',
        hash = this.hash || '',
        host = false,
        query = '';

    if (this.host) {
        host = auth + this.host;
    } else if (this.hostname) {
        host = auth + (this.hostname.indexOf(':') === -1 ? this.hostname : '[' + this.hostname + ']');
        if (this.port) {
            host += ':' + this.port;
        }
    }

    if (this.query && util.isObject(this.query) && Object.keys(this.query).length) {
        query = querystring.stringify(this.query);
    }

    var search = this.search || query && '?' + query || '';

    if (protocol && protocol.substr(-1) !== ':') {
        protocol += ':';
    }

    // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
    // unless they had them to begin with.
    if (this.slashes || (!protocol || slashedProtocol[protocol]) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname.charAt(0) !== '/') {
            pathname = '/' + pathname;
        }
    } else if (!host) {
        host = '';
    }

    if (hash && hash.charAt(0) !== '#') {
        hash = '#' + hash;
    }
    if (search && search.charAt(0) !== '?') {
        search = '?' + search;
    }

    pathname = pathname.replace(/[?#]/g, function (match) {
        return encodeURIComponent(match);
    });
    search = search.replace('#', '%23');

    return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
    return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function (relative) {
    return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
    if (!source) {
        return relative;
    }
    return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function (relative) {
    if (util.isString(relative)) {
        var rel = new Url();
        rel.parse(relative, false, true);
        relative = rel;
    }

    var result = new Url();
    var tkeys = Object.keys(this);
    for (var tk = 0; tk < tkeys.length; tk++) {
        var tkey = tkeys[tk];
        result[tkey] = this[tkey];
    }

    // hash is always overridden, no matter what.
    // even href="" will remove it.
    result.hash = relative.hash;

    // if the relative url is empty, then there's nothing left to do here.
    if (relative.href === '') {
        result.href = result.format();
        return result;
    }

    // hrefs like //foo/bar always cut to the protocol.
    if (relative.slashes && !relative.protocol) {
        // take everything except the protocol from relative
        var rkeys = Object.keys(relative);
        for (var rk = 0; rk < rkeys.length; rk++) {
            var rkey = rkeys[rk];
            if (rkey !== 'protocol') {
                result[rkey] = relative[rkey];
            }
        }

        //urlParse appends trailing / to urls like http://www.example.com
        if (slashedProtocol[result.protocol] && result.hostname && !result.pathname) {
            result.path = result.pathname = '/';
        }

        result.href = result.format();
        return result;
    }

    if (relative.protocol && relative.protocol !== result.protocol) {
        // if it's a known url protocol, then changing
        // the protocol does weird things
        // first, if it's not file:, then we MUST have a host,
        // and if there was a path
        // to begin with, then we MUST have a path.
        // if it is file:, then the host is dropped,
        // because that's known to be hostless.
        // anything else is assumed to be absolute.
        if (!slashedProtocol[relative.protocol]) {
            var keys = Object.keys(relative);
            for (var v = 0; v < keys.length; v++) {
                var k = keys[v];
                result[k] = relative[k];
            }
            result.href = result.format();
            return result;
        }

        result.protocol = relative.protocol;
        if (!relative.host && !hostlessProtocol[relative.protocol]) {
            var relPath = (relative.pathname || '').split('/');
            while (relPath.length && !(relative.host = relPath.shift())) {}
            if (!relative.host) {
                relative.host = '';
            }
            if (!relative.hostname) {
                relative.hostname = '';
            }
            if (relPath[0] !== '') {
                relPath.unshift('');
            }
            if (relPath.length < 2) {
                relPath.unshift('');
            }
            result.pathname = relPath.join('/');
        } else {
            result.pathname = relative.pathname;
        }
        result.search = relative.search;
        result.query = relative.query;
        result.host = relative.host || '';
        result.auth = relative.auth;
        result.hostname = relative.hostname || relative.host;
        result.port = relative.port;
        // to support http.request
        if (result.pathname || result.search) {
            var p = result.pathname || '';
            var s = result.search || '';
            result.path = p + s;
        }
        result.slashes = result.slashes || relative.slashes;
        result.href = result.format();
        return result;
    }

    var isSourceAbs = result.pathname && result.pathname.charAt(0) === '/',
        isRelAbs = relative.host || relative.pathname && relative.pathname.charAt(0) === '/',
        mustEndAbs = isRelAbs || isSourceAbs || result.host && relative.pathname,
        removeAllDots = mustEndAbs,
        srcPath = result.pathname && result.pathname.split('/') || [],
        relPath = relative.pathname && relative.pathname.split('/') || [],
        psychotic = result.protocol && !slashedProtocol[result.protocol];

    // if the url is a non-slashed url, then relative
    // links like ../.. should be able
    // to crawl up to the hostname, as well.  This is strange.
    // result.protocol has already been set by now.
    // Later on, put the first path part into the host field.
    if (psychotic) {
        result.hostname = '';
        result.port = null;
        if (result.host) {
            if (srcPath[0] === '') {
                srcPath[0] = result.host;
            } else {
                srcPath.unshift(result.host);
            }
        }
        result.host = '';
        if (relative.protocol) {
            relative.hostname = null;
            relative.port = null;
            if (relative.host) {
                if (relPath[0] === '') {
                    relPath[0] = relative.host;
                } else {
                    relPath.unshift(relative.host);
                }
            }
            relative.host = null;
        }
        mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
    }

    if (isRelAbs) {
        // it's absolute.
        result.host = relative.host || relative.host === '' ? relative.host : result.host;
        result.hostname = relative.hostname || relative.hostname === '' ? relative.hostname : result.hostname;
        result.search = relative.search;
        result.query = relative.query;
        srcPath = relPath;
        // fall through to the dot-handling below.
    } else if (relPath.length) {
        // it's relative
        // throw away the existing file, and take the new path instead.
        if (!srcPath) {
            srcPath = [];
        }
        srcPath.pop();
        srcPath = srcPath.concat(relPath);
        result.search = relative.search;
        result.query = relative.query;
    } else if (!util.isNullOrUndefined(relative.search)) {
        // just pull out the search.
        // like href='?foo'.
        // Put this after the other two cases because it simplifies the booleans
        if (psychotic) {
            result.hostname = result.host = srcPath.shift();
            //occationaly the auth can get stuck only in host
            //this especially happens in cases like
            //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
            var authInHost = result.host && result.host.indexOf('@') > 0 ? result.host.split('@') : false;
            if (authInHost) {
                result.auth = authInHost.shift();
                result.host = result.hostname = authInHost.shift();
            }
        }
        result.search = relative.search;
        result.query = relative.query;
        //to support http.request
        if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
            result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '');
        }
        result.href = result.format();
        return result;
    }

    if (!srcPath.length) {
        // no path at all.  easy.
        // we've already handled the other stuff above.
        result.pathname = null;
        //to support http.request
        if (result.search) {
            result.path = '/' + result.search;
        } else {
            result.path = null;
        }
        result.href = result.format();
        return result;
    }

    // if a url ENDs in . or .., then it must get a trailing slash.
    // however, if it ends in anything else non-slashy,
    // then it must NOT get a trailing slash.
    var last = srcPath.slice(-1)[0];
    var hasTrailingSlash = (result.host || relative.host || srcPath.length > 1) && (last === '.' || last === '..') || last === '';

    // strip single dots, resolve double dots to parent dir
    // if the path tries to go above the root, `up` ends up > 0
    var up = 0;
    for (var i = srcPath.length; i >= 0; i--) {
        last = srcPath[i];
        if (last === '.') {
            srcPath.splice(i, 1);
        } else if (last === '..') {
            srcPath.splice(i, 1);
            up++;
        } else if (up) {
            srcPath.splice(i, 1);
            up--;
        }
    }

    // if the path is allowed to go above the root, restore leading ..s
    if (!mustEndAbs && !removeAllDots) {
        for (; up--; up) {
            srcPath.unshift('..');
        }
    }

    if (mustEndAbs && srcPath[0] !== '' && (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
        srcPath.unshift('');
    }

    if (hasTrailingSlash && srcPath.join('/').substr(-1) !== '/') {
        srcPath.push('');
    }

    var isAbsolute = srcPath[0] === '' || srcPath[0] && srcPath[0].charAt(0) === '/';

    // put the host back
    if (psychotic) {
        result.hostname = result.host = isAbsolute ? '' : srcPath.length ? srcPath.shift() : '';
        //occationaly the auth can get stuck only in host
        //this especially happens in cases like
        //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
        var authInHost = result.host && result.host.indexOf('@') > 0 ? result.host.split('@') : false;
        if (authInHost) {
            result.auth = authInHost.shift();
            result.host = result.hostname = authInHost.shift();
        }
    }

    mustEndAbs = mustEndAbs || result.host && srcPath.length;

    if (mustEndAbs && !isAbsolute) {
        srcPath.unshift('');
    }

    if (!srcPath.length) {
        result.pathname = null;
        result.path = null;
    } else {
        result.pathname = srcPath.join('/');
    }

    //to support request.http
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
        result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '');
    }
    result.auth = relative.auth || result.auth;
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
};

Url.prototype.parseHost = function () {
    var host = this.host;
    var port = portPattern.exec(host);
    if (port) {
        port = port[0];
        if (port !== ':') {
            this.port = port.substr(1);
        }
        host = host.substr(0, host.length - port.length);
    }
    if (host) {
        this.hostname = host;
    }
};

var url = {
    parse: parse,
    resolve: resolve,
    resolveObject: resolveObject,
    format: format$1,
    Url: Url_1
};

function getPropertyReference(propertyName) {
    for (var i = 0; i < v8.layout.length; i++) {
        for (var key in v8[v8.layout[i]]) {
            if (key === propertyName) {
                return v8[v8.layout[i]][key];
            }
        }
    }
    for (var i$1 = 0; i$1 < v8.paint.length; i$1++) {
        for (var key$1 in v8[v8.paint[i$1]]) {
            if (key$1 === propertyName) {
                return v8[v8.paint[i$1]][key$1];
            }
        }
    }
    return null;
}
function eachSource(style, callback) {
    for (var k in style.sources) {
        callback(style.sources[k]);
    }
}
function eachLayer(style, callback) {
    for (var i = 0, list = style.layers; i < list.length; i += 1) {
        var layer = list[i];
        callback(layer);
    }
}
function eachProperty(style, options, callback) {
    function inner(layer, propertyType) {
        var properties = layer[propertyType];
        if (!properties) {
            return;
        }
        Object.keys(properties).forEach(function (key) {
            callback({
                path: [layer.id, propertyType, key],
                key: key,
                value: properties[key],
                reference: getPropertyReference(key),
                set: function set(x) {
                    properties[key] = x;
                }
            });
        });
    }
    eachLayer(style, function (layer) {
        if (options.paint) {
            inner(layer, 'paint');
        }
        if (options.layout) {
            inner(layer, 'layout');
        }
    });
}

function eachLayout(layer, callback) {
    for (var k in layer) {
        if (k.indexOf('layout') === 0) {
            callback(layer[k], k);
        }
    }
}
function eachPaint(layer, callback) {
    for (var k in layer) {
        if (k.indexOf('paint') === 0) {
            callback(layer[k], k);
        }
    }
}
function resolveConstant(style, value) {
    if (typeof value === 'string' && value[0] === '@') {
        return resolveConstant(style, style.constants[value]);
    } else {
        return value;
    }
}
function isFunction(value) {
    return Array.isArray(value.stops);
}
function renameProperty(obj, from, to) {
    obj[to] = obj[from];
    delete obj[from];
}
function migrateToV8(style) {
    style.version = 8;
    eachSource(style, function (source) {
        if (source.type === 'video' && source.url !== undefined) {
            renameProperty(source, 'url', 'urls');
        }
        if (source.type === 'video') {
            source.coordinates.forEach(function (coord) {
                return coord.reverse();
            });
        }
    });
    eachLayer(style, function (layer) {
        eachLayout(layer, function (layout) {
            if (layout['symbol-min-distance'] !== undefined) {
                renameProperty(layout, 'symbol-min-distance', 'symbol-spacing');
            }
        });
        eachPaint(layer, function (paint) {
            if (paint['background-image'] !== undefined) {
                renameProperty(paint, 'background-image', 'background-pattern');
            }
            if (paint['line-image'] !== undefined) {
                renameProperty(paint, 'line-image', 'line-pattern');
            }
            if (paint['fill-image'] !== undefined) {
                renameProperty(paint, 'fill-image', 'fill-pattern');
            }
        });
    });
    eachProperty(style, {
        paint: true,
        layout: true
    }, function (property) {
        var value = resolveConstant(style, property.value);
        if (isFunction(value)) {
            value.stops.forEach(function (stop) {
                stop[1] = resolveConstant(style, stop[1]);
            });
        }
        property.set(value);
    });
    delete style.constants;
    eachLayer(style, function (layer) {
        eachLayout(layer, function (layout) {
            delete layout['text-max-size'];
            delete layout['icon-max-size'];
        });
        eachPaint(layer, function (paint) {
            if (paint['text-size']) {
                if (!layer.layout) {
                    layer.layout = {};
                }
                layer.layout['text-size'] = paint['text-size'];
                delete paint['text-size'];
            }
            if (paint['icon-size']) {
                if (!layer.layout) {
                    layer.layout = {};
                }
                layer.layout['icon-size'] = paint['icon-size'];
                delete paint['icon-size'];
            }
        });
    });
    function migrateFontstackURL(input) {
        var inputParsed = url.parse(input);
        var inputPathnameParts = inputParsed.pathname.split('/');
        if (inputParsed.protocol !== 'mapbox:') {
            return input;
        } else if (inputParsed.hostname === 'fontstack') {
            return 'mapbox://fonts/mapbox/{fontstack}/{range}.pbf';
        } else if (inputParsed.hostname === 'fonts') {
            return 'mapbox://fonts/' + inputPathnameParts[2] + '/{fontstack}/{range}.pbf';
        }
    }
    if (style.glyphs) {
        style.glyphs = migrateFontstackURL(style.glyphs);
    }
    function migrateFontStack(font) {
        function splitAndTrim(string) {
            return string.split(',').map(function (s) {
                return s.trim();
            });
        }
        if (Array.isArray(font)) {
            return font;
        } else if (typeof font === 'string') {
            return splitAndTrim(font);
        } else if ((typeof font === "undefined" ? "undefined" : _typeof(font)) === 'object') {
            font.stops.forEach(function (stop) {
                stop[1] = splitAndTrim(stop[1]);
            });
            return font;
        } else {
            throw new Error('unexpected font value');
        }
    }
    eachLayer(style, function (layer) {
        eachLayout(layer, function (layout) {
            if (layout['text-font']) {
                layout['text-font'] = migrateFontStack(layout['text-font']);
            }
        });
    });
    var firstSymbolLayer = 0;
    for (var i = style.layers.length - 1; i >= 0; i--) {
        var layer = style.layers[i];
        if (layer.type !== 'symbol') {
            firstSymbolLayer = i + 1;
            break;
        }
    }
    var symbolLayers = style.layers.splice(firstSymbolLayer);
    symbolLayers.reverse();
    style.layers = style.layers.concat(symbolLayers);
    return style;
}

function extend(output) {
    var inputs = [],
        len = arguments.length - 1;
    while (len-- > 0) {
        inputs[len] = arguments[len + 1];
    }for (var i = 0, list = inputs; i < list.length; i += 1) {
        var input = list[i];
        for (var k in input) {
            output[k] = input[k];
        }
    }
    return output;
}

var ParsingError = function (Error) {
    function ParsingError(key, message) {
        Error.call(this, message);
        this.message = message;
        this.key = key;
    }
    if (Error) ParsingError.__proto__ = Error;
    ParsingError.prototype = Object.create(Error && Error.prototype);
    ParsingError.prototype.constructor = ParsingError;
    return ParsingError;
}(Error);

var Scope = function Scope(parent, bindings) {
    if (bindings === void 0) bindings = [];
    this.parent = parent;
    this.bindings = {};
    for (var i = 0, list = bindings; i < list.length; i += 1) {
        var ref = list[i];
        var name = ref[0];
        var expression = ref[1];
        this.bindings[name] = expression;
    }
};
Scope.prototype.concat = function concat(bindings) {
    return new Scope(this, bindings);
};
Scope.prototype.get = function get(name) {
    if (this.bindings[name]) {
        return this.bindings[name];
    }
    if (this.parent) {
        return this.parent.get(name);
    }
    throw new Error(name + ' not found in scope.');
};
Scope.prototype.has = function has(name) {
    if (this.bindings[name]) {
        return true;
    }
    return this.parent ? this.parent.has(name) : false;
};

var NullType = { kind: 'null' };
var NumberType = { kind: 'number' };
var StringType = { kind: 'string' };
var BooleanType = { kind: 'boolean' };
var ColorType = { kind: 'color' };
var ObjectType = { kind: 'object' };
var ValueType = { kind: 'value' };
var ErrorType = { kind: 'error' };
var CollatorType = { kind: 'collator' };
var FormattedType = { kind: 'formatted' };
var ResolvedImageType = { kind: 'resolvedImage' };
function array(itemType, N) {
    return {
        kind: 'array',
        itemType: itemType,
        N: N
    };
}
function toString(type) {
    if (type.kind === 'array') {
        var itemType = toString(type.itemType);
        return typeof type.N === 'number' ? 'array<' + itemType + ', ' + type.N + '>' : type.itemType.kind === 'value' ? 'array' : 'array<' + itemType + '>';
    } else {
        return type.kind;
    }
}
var valueMemberTypes = [NullType, NumberType, StringType, BooleanType, ColorType, FormattedType, ObjectType, array(ValueType), ResolvedImageType];
function checkSubtype(expected, t) {
    if (t.kind === 'error') {
        return null;
    } else if (expected.kind === 'array') {
        if (t.kind === 'array' && (t.N === 0 && t.itemType.kind === 'value' || !checkSubtype(expected.itemType, t.itemType)) && (typeof expected.N !== 'number' || expected.N === t.N)) {
            return null;
        }
    } else if (expected.kind === t.kind) {
        return null;
    } else if (expected.kind === 'value') {
        for (var i = 0, list = valueMemberTypes; i < list.length; i += 1) {
            var memberType = list[i];
            if (!checkSubtype(memberType, t)) {
                return null;
            }
        }
    }
    return 'Expected ' + toString(expected) + ' but found ' + toString(t) + ' instead.';
}
function isValidType(provided, allowedTypes) {
    return allowedTypes.some(function (t) {
        return t.kind === provided.kind;
    });
}
function isValidNativeType(provided, allowedTypes) {
    return allowedTypes.some(function (t) {
        if (t === 'null') {
            return provided === null;
        } else if (t === 'array') {
            return Array.isArray(provided);
        } else if (t === 'object') {
            return provided && !Array.isArray(provided) && (typeof provided === "undefined" ? "undefined" : _typeof(provided)) === 'object';
        } else {
            return t === (typeof provided === "undefined" ? "undefined" : _typeof(provided));
        }
    });
}

var csscolorparser = createCommonjsModule(function (module, exports) {
    // (c) Dean McNamee <dean@gmail.com>, 2012.
    //
    // https://github.com/deanm/css-color-parser-js
    //
    // Permission is hereby granted, free of charge, to any person obtaining a copy
    // of this software and associated documentation files (the "Software"), to
    // deal in the Software without restriction, including without limitation the
    // rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
    // sell copies of the Software, and to permit persons to whom the Software is
    // furnished to do so, subject to the following conditions:
    //
    // The above copyright notice and this permission notice shall be included in
    // all copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    // IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    // FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    // AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    // LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    // FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
    // IN THE SOFTWARE.

    // http://www.w3.org/TR/css3-color/
    var kCSSColorTable = {
        "transparent": [0, 0, 0, 0], "aliceblue": [240, 248, 255, 1],
        "antiquewhite": [250, 235, 215, 1], "aqua": [0, 255, 255, 1],
        "aquamarine": [127, 255, 212, 1], "azure": [240, 255, 255, 1],
        "beige": [245, 245, 220, 1], "bisque": [255, 228, 196, 1],
        "black": [0, 0, 0, 1], "blanchedalmond": [255, 235, 205, 1],
        "blue": [0, 0, 255, 1], "blueviolet": [138, 43, 226, 1],
        "brown": [165, 42, 42, 1], "burlywood": [222, 184, 135, 1],
        "cadetblue": [95, 158, 160, 1], "chartreuse": [127, 255, 0, 1],
        "chocolate": [210, 105, 30, 1], "coral": [255, 127, 80, 1],
        "cornflowerblue": [100, 149, 237, 1], "cornsilk": [255, 248, 220, 1],
        "crimson": [220, 20, 60, 1], "cyan": [0, 255, 255, 1],
        "darkblue": [0, 0, 139, 1], "darkcyan": [0, 139, 139, 1],
        "darkgoldenrod": [184, 134, 11, 1], "darkgray": [169, 169, 169, 1],
        "darkgreen": [0, 100, 0, 1], "darkgrey": [169, 169, 169, 1],
        "darkkhaki": [189, 183, 107, 1], "darkmagenta": [139, 0, 139, 1],
        "darkolivegreen": [85, 107, 47, 1], "darkorange": [255, 140, 0, 1],
        "darkorchid": [153, 50, 204, 1], "darkred": [139, 0, 0, 1],
        "darksalmon": [233, 150, 122, 1], "darkseagreen": [143, 188, 143, 1],
        "darkslateblue": [72, 61, 139, 1], "darkslategray": [47, 79, 79, 1],
        "darkslategrey": [47, 79, 79, 1], "darkturquoise": [0, 206, 209, 1],
        "darkviolet": [148, 0, 211, 1], "deeppink": [255, 20, 147, 1],
        "deepskyblue": [0, 191, 255, 1], "dimgray": [105, 105, 105, 1],
        "dimgrey": [105, 105, 105, 1], "dodgerblue": [30, 144, 255, 1],
        "firebrick": [178, 34, 34, 1], "floralwhite": [255, 250, 240, 1],
        "forestgreen": [34, 139, 34, 1], "fuchsia": [255, 0, 255, 1],
        "gainsboro": [220, 220, 220, 1], "ghostwhite": [248, 248, 255, 1],
        "gold": [255, 215, 0, 1], "goldenrod": [218, 165, 32, 1],
        "gray": [128, 128, 128, 1], "green": [0, 128, 0, 1],
        "greenyellow": [173, 255, 47, 1], "grey": [128, 128, 128, 1],
        "honeydew": [240, 255, 240, 1], "hotpink": [255, 105, 180, 1],
        "indianred": [205, 92, 92, 1], "indigo": [75, 0, 130, 1],
        "ivory": [255, 255, 240, 1], "khaki": [240, 230, 140, 1],
        "lavender": [230, 230, 250, 1], "lavenderblush": [255, 240, 245, 1],
        "lawngreen": [124, 252, 0, 1], "lemonchiffon": [255, 250, 205, 1],
        "lightblue": [173, 216, 230, 1], "lightcoral": [240, 128, 128, 1],
        "lightcyan": [224, 255, 255, 1], "lightgoldenrodyellow": [250, 250, 210, 1],
        "lightgray": [211, 211, 211, 1], "lightgreen": [144, 238, 144, 1],
        "lightgrey": [211, 211, 211, 1], "lightpink": [255, 182, 193, 1],
        "lightsalmon": [255, 160, 122, 1], "lightseagreen": [32, 178, 170, 1],
        "lightskyblue": [135, 206, 250, 1], "lightslategray": [119, 136, 153, 1],
        "lightslategrey": [119, 136, 153, 1], "lightsteelblue": [176, 196, 222, 1],
        "lightyellow": [255, 255, 224, 1], "lime": [0, 255, 0, 1],
        "limegreen": [50, 205, 50, 1], "linen": [250, 240, 230, 1],
        "magenta": [255, 0, 255, 1], "maroon": [128, 0, 0, 1],
        "mediumaquamarine": [102, 205, 170, 1], "mediumblue": [0, 0, 205, 1],
        "mediumorchid": [186, 85, 211, 1], "mediumpurple": [147, 112, 219, 1],
        "mediumseagreen": [60, 179, 113, 1], "mediumslateblue": [123, 104, 238, 1],
        "mediumspringgreen": [0, 250, 154, 1], "mediumturquoise": [72, 209, 204, 1],
        "mediumvioletred": [199, 21, 133, 1], "midnightblue": [25, 25, 112, 1],
        "mintcream": [245, 255, 250, 1], "mistyrose": [255, 228, 225, 1],
        "moccasin": [255, 228, 181, 1], "navajowhite": [255, 222, 173, 1],
        "navy": [0, 0, 128, 1], "oldlace": [253, 245, 230, 1],
        "olive": [128, 128, 0, 1], "olivedrab": [107, 142, 35, 1],
        "orange": [255, 165, 0, 1], "orangered": [255, 69, 0, 1],
        "orchid": [218, 112, 214, 1], "palegoldenrod": [238, 232, 170, 1],
        "palegreen": [152, 251, 152, 1], "paleturquoise": [175, 238, 238, 1],
        "palevioletred": [219, 112, 147, 1], "papayawhip": [255, 239, 213, 1],
        "peachpuff": [255, 218, 185, 1], "peru": [205, 133, 63, 1],
        "pink": [255, 192, 203, 1], "plum": [221, 160, 221, 1],
        "powderblue": [176, 224, 230, 1], "purple": [128, 0, 128, 1],
        "rebeccapurple": [102, 51, 153, 1],
        "red": [255, 0, 0, 1], "rosybrown": [188, 143, 143, 1],
        "royalblue": [65, 105, 225, 1], "saddlebrown": [139, 69, 19, 1],
        "salmon": [250, 128, 114, 1], "sandybrown": [244, 164, 96, 1],
        "seagreen": [46, 139, 87, 1], "seashell": [255, 245, 238, 1],
        "sienna": [160, 82, 45, 1], "silver": [192, 192, 192, 1],
        "skyblue": [135, 206, 235, 1], "slateblue": [106, 90, 205, 1],
        "slategray": [112, 128, 144, 1], "slategrey": [112, 128, 144, 1],
        "snow": [255, 250, 250, 1], "springgreen": [0, 255, 127, 1],
        "steelblue": [70, 130, 180, 1], "tan": [210, 180, 140, 1],
        "teal": [0, 128, 128, 1], "thistle": [216, 191, 216, 1],
        "tomato": [255, 99, 71, 1], "turquoise": [64, 224, 208, 1],
        "violet": [238, 130, 238, 1], "wheat": [245, 222, 179, 1],
        "white": [255, 255, 255, 1], "whitesmoke": [245, 245, 245, 1],
        "yellow": [255, 255, 0, 1], "yellowgreen": [154, 205, 50, 1] };

    function clamp_css_byte(i) {
        // Clamp to integer 0 .. 255.
        i = Math.round(i); // Seems to be what Chrome does (vs truncation).
        return i < 0 ? 0 : i > 255 ? 255 : i;
    }

    function clamp_css_float(f) {
        // Clamp to float 0.0 .. 1.0.
        return f < 0 ? 0 : f > 1 ? 1 : f;
    }

    function parse_css_int(str) {
        // int or percentage.
        if (str[str.length - 1] === '%') {
            return clamp_css_byte(parseFloat(str) / 100 * 255);
        }
        return clamp_css_byte(parseInt(str));
    }

    function parse_css_float(str) {
        // float or percentage.
        if (str[str.length - 1] === '%') {
            return clamp_css_float(parseFloat(str) / 100);
        }
        return clamp_css_float(parseFloat(str));
    }

    function css_hue_to_rgb(m1, m2, h) {
        if (h < 0) {
            h += 1;
        } else if (h > 1) {
            h -= 1;
        }

        if (h * 6 < 1) {
            return m1 + (m2 - m1) * h * 6;
        }
        if (h * 2 < 1) {
            return m2;
        }
        if (h * 3 < 2) {
            return m1 + (m2 - m1) * (2 / 3 - h) * 6;
        }
        return m1;
    }

    function parseCSSColor(css_str) {
        // Remove all whitespace, not compliant, but should just be more accepting.
        var str = css_str.replace(/ /g, '').toLowerCase();

        // Color keywords (and transparent) lookup.
        if (str in kCSSColorTable) {
            return kCSSColorTable[str].slice();
        } // dup.

        // #abc and #abc123 syntax.
        if (str[0] === '#') {
            if (str.length === 4) {
                var iv = parseInt(str.substr(1), 16); // TODO(deanm): Stricter parsing.
                if (!(iv >= 0 && iv <= 0xfff)) {
                    return null;
                } // Covers NaN.
                return [(iv & 0xf00) >> 4 | (iv & 0xf00) >> 8, iv & 0xf0 | (iv & 0xf0) >> 4, iv & 0xf | (iv & 0xf) << 4, 1];
            } else if (str.length === 7) {
                var iv = parseInt(str.substr(1), 16); // TODO(deanm): Stricter parsing.
                if (!(iv >= 0 && iv <= 0xffffff)) {
                    return null;
                } // Covers NaN.
                return [(iv & 0xff0000) >> 16, (iv & 0xff00) >> 8, iv & 0xff, 1];
            }

            return null;
        }

        var op = str.indexOf('('),
            ep = str.indexOf(')');
        if (op !== -1 && ep + 1 === str.length) {
            var fname = str.substr(0, op);
            var params = str.substr(op + 1, ep - (op + 1)).split(',');
            var alpha = 1; // To allow case fallthrough.
            switch (fname) {
                case 'rgba':
                    if (params.length !== 4) {
                        return null;
                    }
                    alpha = parse_css_float(params.pop());
                // Fall through.
                case 'rgb':
                    if (params.length !== 3) {
                        return null;
                    }
                    return [parse_css_int(params[0]), parse_css_int(params[1]), parse_css_int(params[2]), alpha];
                case 'hsla':
                    if (params.length !== 4) {
                        return null;
                    }
                    alpha = parse_css_float(params.pop());
                // Fall through.
                case 'hsl':
                    if (params.length !== 3) {
                        return null;
                    }
                    var h = (parseFloat(params[0]) % 360 + 360) % 360 / 360; // 0 .. 1
                    // NOTE(deanm): According to the CSS spec s/l should only be
                    // percentages, but we don't bother and let float or percentage.
                    var s = parse_css_float(params[1]);
                    var l = parse_css_float(params[2]);
                    var m2 = l <= 0.5 ? l * (s + 1) : l + s - l * s;
                    var m1 = l * 2 - m2;
                    return [clamp_css_byte(css_hue_to_rgb(m1, m2, h + 1 / 3) * 255), clamp_css_byte(css_hue_to_rgb(m1, m2, h) * 255), clamp_css_byte(css_hue_to_rgb(m1, m2, h - 1 / 3) * 255), alpha];
                default:
                    return null;
            }
        }

        return null;
    }

    try {
        exports.parseCSSColor = parseCSSColor;
    } catch (e) {}
});
var csscolorparser_1 = csscolorparser.parseCSSColor;

var Color = function Color(r, g, b, a) {
    if (a === void 0) a = 1;
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
};
Color.parse = function parse(input) {
    if (!input) {
        return undefined;
    }
    if (input instanceof Color) {
        return input;
    }
    if (typeof input !== 'string') {
        return undefined;
    }
    var rgba = csscolorparser_1(input);
    if (!rgba) {
        return undefined;
    }
    return new Color(rgba[0] / 255 * rgba[3], rgba[1] / 255 * rgba[3], rgba[2] / 255 * rgba[3], rgba[3]);
};
Color.prototype.toString = function toString() {
    var ref = this.toArray();
    var r = ref[0];
    var g = ref[1];
    var b = ref[2];
    var a = ref[3];
    return 'rgba(' + Math.round(r) + ',' + Math.round(g) + ',' + Math.round(b) + ',' + a + ')';
};
Color.prototype.toArray = function toArray() {
    var ref = this;
    var r = ref.r;
    var g = ref.g;
    var b = ref.b;
    var a = ref.a;
    return a === 0 ? [0, 0, 0, 0] : [r * 255 / a, g * 255 / a, b * 255 / a, a];
};
Color.black = new Color(0, 0, 0, 1);
Color.white = new Color(1, 1, 1, 1);
Color.transparent = new Color(0, 0, 0, 0);
Color.red = new Color(1, 0, 0, 1);

var Collator = function Collator(caseSensitive, diacriticSensitive, locale) {
    if (caseSensitive) {
        this.sensitivity = diacriticSensitive ? 'variant' : 'case';
    } else {
        this.sensitivity = diacriticSensitive ? 'accent' : 'base';
    }
    this.locale = locale;
    this.collator = new Intl.Collator(this.locale ? this.locale : [], {
        sensitivity: this.sensitivity,
        usage: 'search'
    });
};
Collator.prototype.compare = function compare(lhs, rhs) {
    return this.collator.compare(lhs, rhs);
};
Collator.prototype.resolvedLocale = function resolvedLocale() {
    return new Intl.Collator(this.locale ? this.locale : []).resolvedOptions().locale;
};

var FormattedSection = function FormattedSection(text, image, scale, fontStack, textColor) {
    this.text = text;
    this.image = image;
    this.scale = scale;
    this.fontStack = fontStack;
    this.textColor = textColor;
};
var Formatted = function Formatted(sections) {
    this.sections = sections;
};
Formatted.fromString = function fromString(unformatted) {
    return new Formatted([new FormattedSection(unformatted, null, null, null, null)]);
};
Formatted.prototype.isEmpty = function isEmpty() {
    if (this.sections.length === 0) {
        return true;
    }
    return !this.sections.some(function (section) {
        return section.text.length !== 0 || section.image && section.image.name.length !== 0;
    });
};
Formatted.factory = function factory(text) {
    if (text instanceof Formatted) {
        return text;
    } else {
        return Formatted.fromString(text);
    }
};
Formatted.prototype.toString = function toString() {
    if (this.sections.length === 0) {
        return '';
    }
    return this.sections.map(function (section) {
        return section.text;
    }).join('');
};
Formatted.prototype.serialize = function serialize() {
    var serialized = ['format'];
    for (var i = 0, list = this.sections; i < list.length; i += 1) {
        var section = list[i];
        if (section.image) {
            serialized.push(['image', section.image.name]);
            continue;
        }
        serialized.push(section.text);
        var options = {};
        if (section.fontStack) {
            options['text-font'] = ['literal', section.fontStack.split(',')];
        }
        if (section.scale) {
            options['font-scale'] = section.scale;
        }
        if (section.textColor) {
            options['text-color'] = ['rgba'].concat(section.textColor.toArray());
        }
        serialized.push(options);
    }
    return serialized;
};

var ResolvedImage = function ResolvedImage(options) {
    this.name = options.name;
    this.available = options.available;
};
ResolvedImage.prototype.toString = function toString() {
    return this.name;
};
ResolvedImage.fromString = function fromString(name) {
    if (!name) {
        return null;
    }
    return new ResolvedImage({
        name: name,
        available: false
    });
};
ResolvedImage.prototype.serialize = function serialize() {
    return ['image', this.name];
};

function validateRGBA(r, g, b, a) {
    if (!(typeof r === 'number' && r >= 0 && r <= 255 && typeof g === 'number' && g >= 0 && g <= 255 && typeof b === 'number' && b >= 0 && b <= 255)) {
        var value = typeof a === 'number' ? [r, g, b, a] : [r, g, b];
        return 'Invalid rgba value [' + value.join(', ') + ']: \'r\', \'g\', and \'b\' must be between 0 and 255.';
    }
    if (!(typeof a === 'undefined' || typeof a === 'number' && a >= 0 && a <= 1)) {
        return 'Invalid rgba value [' + [r, g, b, a].join(', ') + ']: \'a\' must be between 0 and 1.';
    }
    return null;
}
function isValue(mixed) {
    if (mixed === null) {
        return true;
    } else if (typeof mixed === 'string') {
        return true;
    } else if (typeof mixed === 'boolean') {
        return true;
    } else if (typeof mixed === 'number') {
        return true;
    } else if (mixed instanceof Color) {
        return true;
    } else if (mixed instanceof Collator) {
        return true;
    } else if (mixed instanceof Formatted) {
        return true;
    } else if (mixed instanceof ResolvedImage) {
        return true;
    } else if (Array.isArray(mixed)) {
        for (var i = 0, list = mixed; i < list.length; i += 1) {
            var item = list[i];
            if (!isValue(item)) {
                return false;
            }
        }
        return true;
    } else if ((typeof mixed === "undefined" ? "undefined" : _typeof(mixed)) === 'object') {
        for (var key in mixed) {
            if (!isValue(mixed[key])) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}
function typeOf(value) {
    if (value === null) {
        return NullType;
    } else if (typeof value === 'string') {
        return StringType;
    } else if (typeof value === 'boolean') {
        return BooleanType;
    } else if (typeof value === 'number') {
        return NumberType;
    } else if (value instanceof Color) {
        return ColorType;
    } else if (value instanceof Collator) {
        return CollatorType;
    } else if (value instanceof Formatted) {
        return FormattedType;
    } else if (value instanceof ResolvedImage) {
        return ResolvedImageType;
    } else if (Array.isArray(value)) {
        var length = value.length;
        var itemType;
        for (var i = 0, list = value; i < list.length; i += 1) {
            var item = list[i];
            var t = typeOf(item);
            if (!itemType) {
                itemType = t;
            } else if (itemType === t) {
                continue;
            } else {
                itemType = ValueType;
                break;
            }
        }
        return array(itemType || ValueType, length);
    } else {
        return ObjectType;
    }
}
function toString$1(value) {
    var type = typeof value === "undefined" ? "undefined" : _typeof(value);
    if (value === null) {
        return '';
    } else if (type === 'string' || type === 'number' || type === 'boolean') {
        return String(value);
    } else if (value instanceof Color || value instanceof Formatted || value instanceof ResolvedImage) {
        return value.toString();
    } else {
        return JSON.stringify(value);
    }
}

var Literal = function Literal(type, value) {
    this.type = type;
    this.value = value;
};
Literal.parse = function parse(args, context) {
    if (args.length !== 2) {
        return context.error('\'literal\' expression requires exactly one argument, but found ' + (args.length - 1) + ' instead.');
    }
    if (!isValue(args[1])) {
        return context.error('invalid value');
    }
    var value = args[1];
    var type = typeOf(value);
    var expected = context.expectedType;
    if (type.kind === 'array' && type.N === 0 && expected && expected.kind === 'array' && (typeof expected.N !== 'number' || expected.N === 0)) {
        type = expected;
    }
    return new Literal(type, value);
};
Literal.prototype.evaluate = function evaluate() {
    return this.value;
};
Literal.prototype.eachChild = function eachChild() {};
Literal.prototype.outputDefined = function outputDefined() {
    return true;
};
Literal.prototype.serialize = function serialize() {
    if (this.type.kind === 'array' || this.type.kind === 'object') {
        return ['literal', this.value];
    } else if (this.value instanceof Color) {
        return ['rgba'].concat(this.value.toArray());
    } else if (this.value instanceof Formatted) {
        return this.value.serialize();
    } else {
        return this.value;
    }
};

var RuntimeError = function RuntimeError(message) {
    this.name = 'ExpressionEvaluationError';
    this.message = message;
};
RuntimeError.prototype.toJSON = function toJSON() {
    return this.message;
};

var types = {
    string: StringType,
    number: NumberType,
    boolean: BooleanType,
    object: ObjectType
};
var Assertion = function Assertion(type, args) {
    this.type = type;
    this.args = args;
};
Assertion.parse = function parse(args, context) {
    if (args.length < 2) {
        return context.error('Expected at least one argument.');
    }
    var i = 1;
    var type;
    var name = args[0];
    if (name === 'array') {
        var itemType;
        if (args.length > 2) {
            var type$1 = args[1];
            if (typeof type$1 !== 'string' || !(type$1 in types) || type$1 === 'object') {
                return context.error('The item type argument of "array" must be one of string, number, boolean', 1);
            }
            itemType = types[type$1];
            i++;
        } else {
            itemType = ValueType;
        }
        var N;
        if (args.length > 3) {
            if (args[2] !== null && (typeof args[2] !== 'number' || args[2] < 0 || args[2] !== Math.floor(args[2]))) {
                return context.error('The length argument to "array" must be a positive integer literal', 2);
            }
            N = args[2];
            i++;
        }
        type = array(itemType, N);
    } else {
        type = types[name];
    }
    var parsed = [];
    for (; i < args.length; i++) {
        var input = context.parse(args[i], i, ValueType);
        if (!input) {
            return null;
        }
        parsed.push(input);
    }
    return new Assertion(type, parsed);
};
Assertion.prototype.evaluate = function evaluate(ctx) {
    for (var i = 0; i < this.args.length; i++) {
        var value = this.args[i].evaluate(ctx);
        var error = checkSubtype(this.type, typeOf(value));
        if (!error) {
            return value;
        } else if (i === this.args.length - 1) {
            throw new RuntimeError('Expected value to be of type ' + toString(this.type) + ', but found ' + toString(typeOf(value)) + ' instead.');
        }
    }
    return null;
};
Assertion.prototype.eachChild = function eachChild(fn) {
    this.args.forEach(fn);
};
Assertion.prototype.outputDefined = function outputDefined() {
    return this.args.every(function (arg) {
        return arg.outputDefined();
    });
};
Assertion.prototype.serialize = function serialize() {
    var type = this.type;
    var serialized = [type.kind];
    if (type.kind === 'array') {
        var itemType = type.itemType;
        if (itemType.kind === 'string' || itemType.kind === 'number' || itemType.kind === 'boolean') {
            serialized.push(itemType.kind);
            var N = type.N;
            if (typeof N === 'number' || this.args.length > 1) {
                serialized.push(N);
            }
        }
    }
    return serialized.concat(this.args.map(function (arg) {
        return arg.serialize();
    }));
};

var FormatExpression = function FormatExpression(sections) {
    this.type = FormattedType;
    this.sections = sections;
};
FormatExpression.parse = function parse(args, context) {
    if (args.length < 2) {
        return context.error('Expected at least one argument.');
    }
    var firstArg = args[1];
    if (!Array.isArray(firstArg) && (typeof firstArg === "undefined" ? "undefined" : _typeof(firstArg)) === 'object') {
        return context.error('First argument must be an image or text section.');
    }
    var sections = [];
    var nextTokenMayBeObject = false;
    for (var i = 1; i <= args.length - 1; ++i) {
        var arg = args[i];
        if (nextTokenMayBeObject && (typeof arg === "undefined" ? "undefined" : _typeof(arg)) === 'object' && !Array.isArray(arg)) {
            nextTokenMayBeObject = false;
            var scale = null;
            if (arg['font-scale']) {
                scale = context.parse(arg['font-scale'], 1, NumberType);
                if (!scale) {
                    return null;
                }
            }
            var font = null;
            if (arg['text-font']) {
                font = context.parse(arg['text-font'], 1, array(StringType));
                if (!font) {
                    return null;
                }
            }
            var textColor = null;
            if (arg['text-color']) {
                textColor = context.parse(arg['text-color'], 1, ColorType);
                if (!textColor) {
                    return null;
                }
            }
            var lastExpression = sections[sections.length - 1];
            lastExpression.scale = scale;
            lastExpression.font = font;
            lastExpression.textColor = textColor;
        } else {
            var content = context.parse(args[i], 1, ValueType);
            if (!content) {
                return null;
            }
            var kind = content.type.kind;
            if (kind !== 'string' && kind !== 'value' && kind !== 'null' && kind !== 'resolvedImage') {
                return context.error('Formatted text type must be \'string\', \'value\', \'image\' or \'null\'.');
            }
            nextTokenMayBeObject = true;
            sections.push({
                content: content,
                scale: null,
                font: null,
                textColor: null
            });
        }
    }
    return new FormatExpression(sections);
};
FormatExpression.prototype.evaluate = function evaluate(ctx) {
    var evaluateSection = function evaluateSection(section) {
        var evaluatedContent = section.content.evaluate(ctx);
        if (typeOf(evaluatedContent) === ResolvedImageType) {
            return new FormattedSection('', evaluatedContent, null, null, null);
        }
        return new FormattedSection(toString$1(evaluatedContent), null, section.scale ? section.scale.evaluate(ctx) : null, section.font ? section.font.evaluate(ctx).join(',') : null, section.textColor ? section.textColor.evaluate(ctx) : null);
    };
    return new Formatted(this.sections.map(evaluateSection));
};
FormatExpression.prototype.eachChild = function eachChild(fn) {
    for (var i = 0, list = this.sections; i < list.length; i += 1) {
        var section = list[i];
        fn(section.content);
        if (section.scale) {
            fn(section.scale);
        }
        if (section.font) {
            fn(section.font);
        }
        if (section.textColor) {
            fn(section.textColor);
        }
    }
};
FormatExpression.prototype.outputDefined = function outputDefined() {
    return false;
};
FormatExpression.prototype.serialize = function serialize() {
    var serialized = ['format'];
    for (var i = 0, list = this.sections; i < list.length; i += 1) {
        var section = list[i];
        serialized.push(section.content.serialize());
        var options = {};
        if (section.scale) {
            options['font-scale'] = section.scale.serialize();
        }
        if (section.font) {
            options['text-font'] = section.font.serialize();
        }
        if (section.textColor) {
            options['text-color'] = section.textColor.serialize();
        }
        serialized.push(options);
    }
    return serialized;
};

var ImageExpression = function ImageExpression(input) {
    this.type = ResolvedImageType;
    this.input = input;
};
ImageExpression.parse = function parse(args, context) {
    if (args.length !== 2) {
        return context.error('Expected two arguments.');
    }
    var name = context.parse(args[1], 1, StringType);
    if (!name) {
        return context.error('No image name provided.');
    }
    return new ImageExpression(name);
};
ImageExpression.prototype.evaluate = function evaluate(ctx) {
    var evaluatedImageName = this.input.evaluate(ctx);
    var value = ResolvedImage.fromString(evaluatedImageName);
    if (value && ctx.availableImages) {
        value.available = ctx.availableImages.indexOf(evaluatedImageName) > -1;
    }
    return value;
};
ImageExpression.prototype.eachChild = function eachChild(fn) {
    fn(this.input);
};
ImageExpression.prototype.outputDefined = function outputDefined() {
    return false;
};
ImageExpression.prototype.serialize = function serialize() {
    return ['image', this.input.serialize()];
};

var types$1 = {
    'to-boolean': BooleanType,
    'to-color': ColorType,
    'to-number': NumberType,
    'to-string': StringType
};
var Coercion = function Coercion(type, args) {
    this.type = type;
    this.args = args;
};
Coercion.parse = function parse(args, context) {
    if (args.length < 2) {
        return context.error('Expected at least one argument.');
    }
    var name = args[0];
    if ((name === 'to-boolean' || name === 'to-string') && args.length !== 2) {
        return context.error('Expected one argument.');
    }
    var type = types$1[name];
    var parsed = [];
    for (var i = 1; i < args.length; i++) {
        var input = context.parse(args[i], i, ValueType);
        if (!input) {
            return null;
        }
        parsed.push(input);
    }
    return new Coercion(type, parsed);
};
Coercion.prototype.evaluate = function evaluate(ctx) {
    if (this.type.kind === 'boolean') {
        return Boolean(this.args[0].evaluate(ctx));
    } else if (this.type.kind === 'color') {
        var input;
        var error;
        for (var i = 0, list = this.args; i < list.length; i += 1) {
            var arg = list[i];
            input = arg.evaluate(ctx);
            error = null;
            if (input instanceof Color) {
                return input;
            } else if (typeof input === 'string') {
                var c = ctx.parseColor(input);
                if (c) {
                    return c;
                }
            } else if (Array.isArray(input)) {
                if (input.length < 3 || input.length > 4) {
                    error = 'Invalid rbga value ' + JSON.stringify(input) + ': expected an array containing either three or four numeric values.';
                } else {
                    error = validateRGBA(input[0], input[1], input[2], input[3]);
                }
                if (!error) {
                    return new Color(input[0] / 255, input[1] / 255, input[2] / 255, input[3]);
                }
            }
        }
        throw new RuntimeError(error || 'Could not parse color from value \'' + (typeof input === 'string' ? input : String(JSON.stringify(input))) + '\'');
    } else if (this.type.kind === 'number') {
        var value = null;
        for (var i$1 = 0, list$1 = this.args; i$1 < list$1.length; i$1 += 1) {
            var arg$1 = list$1[i$1];
            value = arg$1.evaluate(ctx);
            if (value === null) {
                return 0;
            }
            var num = Number(value);
            if (isNaN(num)) {
                continue;
            }
            return num;
        }
        throw new RuntimeError('Could not convert ' + JSON.stringify(value) + ' to number.');
    } else if (this.type.kind === 'formatted') {
        return Formatted.fromString(toString$1(this.args[0].evaluate(ctx)));
    } else if (this.type.kind === 'resolvedImage') {
        return ResolvedImage.fromString(toString$1(this.args[0].evaluate(ctx)));
    } else {
        return toString$1(this.args[0].evaluate(ctx));
    }
};
Coercion.prototype.eachChild = function eachChild(fn) {
    this.args.forEach(fn);
};
Coercion.prototype.outputDefined = function outputDefined() {
    return this.args.every(function (arg) {
        return arg.outputDefined();
    });
};
Coercion.prototype.serialize = function serialize() {
    if (this.type.kind === 'formatted') {
        return new FormatExpression([{
            content: this.args[0],
            scale: null,
            font: null,
            textColor: null
        }]).serialize();
    }
    if (this.type.kind === 'resolvedImage') {
        return new ImageExpression(this.args[0]).serialize();
    }
    var serialized = ['to-' + this.type.kind];
    this.eachChild(function (child) {
        serialized.push(child.serialize());
    });
    return serialized;
};

var geometryTypes = ['Unknown', 'Point', 'LineString', 'Polygon'];
var EvaluationContext = function EvaluationContext() {
    this.globals = null;
    this.feature = null;
    this.featureState = null;
    this.formattedSection = null;
    this._parseColorCache = {};
    this.availableImages = null;
    this.canonical = null;
};
EvaluationContext.prototype.id = function id() {
    return this.feature && 'id' in this.feature ? this.feature.id : null;
};
EvaluationContext.prototype.geometryType = function geometryType() {
    return this.feature ? typeof this.feature.type === 'number' ? geometryTypes[this.feature.type] : this.feature.type : null;
};
EvaluationContext.prototype.geometry = function geometry() {
    return this.feature && 'geometry' in this.feature ? this.feature.geometry : null;
};
EvaluationContext.prototype.canonicalID = function canonicalID() {
    return this.canonical;
};
EvaluationContext.prototype.properties = function properties() {
    return this.feature && this.feature.properties || {};
};
EvaluationContext.prototype.parseColor = function parseColor(input) {
    var cached = this._parseColorCache[input];
    if (!cached) {
        cached = this._parseColorCache[input] = Color.parse(input);
    }
    return cached;
};

var CompoundExpression = function CompoundExpression(name, type, evaluate, args) {
    this.name = name;
    this.type = type;
    this._evaluate = evaluate;
    this.args = args;
};
CompoundExpression.prototype.evaluate = function evaluate(ctx) {
    return this._evaluate(ctx, this.args);
};
CompoundExpression.prototype.eachChild = function eachChild(fn) {
    this.args.forEach(fn);
};
CompoundExpression.prototype.outputDefined = function outputDefined() {
    return false;
};
CompoundExpression.prototype.serialize = function serialize() {
    return [this.name].concat(this.args.map(function (arg) {
        return arg.serialize();
    }));
};
CompoundExpression.parse = function parse(args, context) {
    var ref$1;
    var op = args[0];
    var definition = CompoundExpression.definitions[op];
    if (!definition) {
        return context.error('Unknown expression "' + op + '". If you wanted a literal array, use ["literal", [...]].', 0);
    }
    var type = Array.isArray(definition) ? definition[0] : definition.type;
    var availableOverloads = Array.isArray(definition) ? [[definition[1], definition[2]]] : definition.overloads;
    var overloads = availableOverloads.filter(function (ref) {
        var signature = ref[0];
        return !Array.isArray(signature) || signature.length === args.length - 1;
    });
    var signatureContext = null;
    for (var i$3 = 0, list = overloads; i$3 < list.length; i$3 += 1) {
        var ref = list[i$3];
        var params = ref[0];
        var evaluate = ref[1];
        signatureContext = new ParsingContext(context.registry, context.path, null, context.scope);
        var parsedArgs = [];
        var argParseFailed = false;
        for (var i = 1; i < args.length; i++) {
            var arg = args[i];
            var expectedType = Array.isArray(params) ? params[i - 1] : params.type;
            var parsed = signatureContext.parse(arg, 1 + parsedArgs.length, expectedType);
            if (!parsed) {
                argParseFailed = true;
                break;
            }
            parsedArgs.push(parsed);
        }
        if (argParseFailed) {
            continue;
        }
        if (Array.isArray(params)) {
            if (params.length !== parsedArgs.length) {
                signatureContext.error('Expected ' + params.length + ' arguments, but found ' + parsedArgs.length + ' instead.');
                continue;
            }
        }
        for (var i$1 = 0; i$1 < parsedArgs.length; i$1++) {
            var expected = Array.isArray(params) ? params[i$1] : params.type;
            var arg$1 = parsedArgs[i$1];
            signatureContext.concat(i$1 + 1).checkSubtype(expected, arg$1.type);
        }
        if (signatureContext.errors.length === 0) {
            return new CompoundExpression(op, type, evaluate, parsedArgs);
        }
    }
    if (overloads.length === 1) {
        (ref$1 = context.errors).push.apply(ref$1, signatureContext.errors);
    } else {
        var expected$1 = overloads.length ? overloads : availableOverloads;
        var signatures = expected$1.map(function (ref) {
            var params = ref[0];
            return stringifySignature(params);
        }).join(' | ');
        var actualTypes = [];
        for (var i$2 = 1; i$2 < args.length; i$2++) {
            var parsed$1 = context.parse(args[i$2], 1 + actualTypes.length);
            if (!parsed$1) {
                return null;
            }
            actualTypes.push(toString(parsed$1.type));
        }
        context.error('Expected arguments of type ' + signatures + ', but found (' + actualTypes.join(', ') + ') instead.');
    }
    return null;
};
CompoundExpression.register = function register(registry, definitions) {
    CompoundExpression.definitions = definitions;
    for (var name in definitions) {
        registry[name] = CompoundExpression;
    }
};
function stringifySignature(signature) {
    if (Array.isArray(signature)) {
        return '(' + signature.map(toString).join(', ') + ')';
    } else {
        return '(' + toString(signature.type) + '...)';
    }
}

var CollatorExpression = function CollatorExpression(caseSensitive, diacriticSensitive, locale) {
    this.type = CollatorType;
    this.locale = locale;
    this.caseSensitive = caseSensitive;
    this.diacriticSensitive = diacriticSensitive;
};
CollatorExpression.parse = function parse(args, context) {
    if (args.length !== 2) {
        return context.error('Expected one argument.');
    }
    var options = args[1];
    if ((typeof options === "undefined" ? "undefined" : _typeof(options)) !== 'object' || Array.isArray(options)) {
        return context.error('Collator options argument must be an object.');
    }
    var caseSensitive = context.parse(options['case-sensitive'] === undefined ? false : options['case-sensitive'], 1, BooleanType);
    if (!caseSensitive) {
        return null;
    }
    var diacriticSensitive = context.parse(options['diacritic-sensitive'] === undefined ? false : options['diacritic-sensitive'], 1, BooleanType);
    if (!diacriticSensitive) {
        return null;
    }
    var locale = null;
    if (options['locale']) {
        locale = context.parse(options['locale'], 1, StringType);
        if (!locale) {
            return null;
        }
    }
    return new CollatorExpression(caseSensitive, diacriticSensitive, locale);
};
CollatorExpression.prototype.evaluate = function evaluate(ctx) {
    return new Collator(this.caseSensitive.evaluate(ctx), this.diacriticSensitive.evaluate(ctx), this.locale ? this.locale.evaluate(ctx) : null);
};
CollatorExpression.prototype.eachChild = function eachChild(fn) {
    fn(this.caseSensitive);
    fn(this.diacriticSensitive);
    if (this.locale) {
        fn(this.locale);
    }
};
CollatorExpression.prototype.outputDefined = function outputDefined() {
    return false;
};
CollatorExpression.prototype.serialize = function serialize() {
    var options = {};
    options['case-sensitive'] = this.caseSensitive.serialize();
    options['diacritic-sensitive'] = this.diacriticSensitive.serialize();
    if (this.locale) {
        options['locale'] = this.locale.serialize();
    }
    return ['collator', options];
};

var EXTENT = 8192;
function updateBBox(bbox, coord) {
    bbox[0] = Math.min(bbox[0], coord[0]);
    bbox[1] = Math.min(bbox[1], coord[1]);
    bbox[2] = Math.max(bbox[2], coord[0]);
    bbox[3] = Math.max(bbox[3], coord[1]);
}
function mercatorXfromLng(lng) {
    return (180 + lng) / 360;
}
function mercatorYfromLat(lat) {
    return (180 - 180 / Math.PI * Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360))) / 360;
}
function boxWithinBox(bbox1, bbox2) {
    if (bbox1[0] <= bbox2[0]) {
        return false;
    }
    if (bbox1[2] >= bbox2[2]) {
        return false;
    }
    if (bbox1[1] <= bbox2[1]) {
        return false;
    }
    if (bbox1[3] >= bbox2[3]) {
        return false;
    }
    return true;
}
function getTileCoordinates(p, canonical) {
    var x = mercatorXfromLng(p[0]);
    var y = mercatorYfromLat(p[1]);
    var tilesAtZoom = Math.pow(2, canonical.z);
    return [Math.round(x * tilesAtZoom * EXTENT), Math.round(y * tilesAtZoom * EXTENT)];
}
function onBoundary(p, p1, p2) {
    var x1 = p[0] - p1[0];
    var y1 = p[1] - p1[1];
    var x2 = p[0] - p2[0];
    var y2 = p[1] - p2[1];
    return x1 * y2 - x2 * y1 === 0 && x1 * x2 <= 0 && y1 * y2 <= 0;
}
function rayIntersect(p, p1, p2) {
    return p1[1] > p[1] !== p2[1] > p[1] && p[0] < (p2[0] - p1[0]) * (p[1] - p1[1]) / (p2[1] - p1[1]) + p1[0];
}
function pointWithinPolygon(point, rings) {
    var inside = false;
    for (var i = 0, len = rings.length; i < len; i++) {
        var ring = rings[i];
        for (var j = 0, len2 = ring.length; j < len2 - 1; j++) {
            if (onBoundary(point, ring[j], ring[j + 1])) {
                return false;
            }
            if (rayIntersect(point, ring[j], ring[j + 1])) {
                inside = !inside;
            }
        }
    }
    return inside;
}
function pointWithinPolygons(point, polygons) {
    for (var i = 0; i < polygons.length; i++) {
        if (pointWithinPolygon(point, polygons[i])) {
            return true;
        }
    }
    return false;
}
function perp(v1, v2) {
    return v1[0] * v2[1] - v1[1] * v2[0];
}
function twoSided(p1, p2, q1, q2) {
    var x1 = p1[0] - q1[0];
    var y1 = p1[1] - q1[1];
    var x2 = p2[0] - q1[0];
    var y2 = p2[1] - q1[1];
    var x3 = q2[0] - q1[0];
    var y3 = q2[1] - q1[1];
    var det1 = x1 * y3 - x3 * y1;
    var det2 = x2 * y3 - x3 * y2;
    if (det1 > 0 && det2 < 0 || det1 < 0 && det2 > 0) {
        return true;
    }
    return false;
}
function lineIntersectLine(a, b, c, d) {
    var vectorP = [b[0] - a[0], b[1] - a[1]];
    var vectorQ = [d[0] - c[0], d[1] - c[1]];
    if (perp(vectorQ, vectorP) === 0) {
        return false;
    }
    if (twoSided(a, b, c, d) && twoSided(c, d, a, b)) {
        return true;
    }
    return false;
}
function lineIntersectPolygon(p1, p2, polygon) {
    for (var i = 0, list = polygon; i < list.length; i += 1) {
        var ring = list[i];
        for (var j = 0; j < ring.length - 1; ++j) {
            if (lineIntersectLine(p1, p2, ring[j], ring[j + 1])) {
                return true;
            }
        }
    }
    return false;
}
function lineStringWithinPolygon(line, polygon) {
    for (var i = 0; i < line.length; ++i) {
        if (!pointWithinPolygon(line[i], polygon)) {
            return false;
        }
    }
    for (var i$1 = 0; i$1 < line.length - 1; ++i$1) {
        if (lineIntersectPolygon(line[i$1], line[i$1 + 1], polygon)) {
            return false;
        }
    }
    return true;
}
function lineStringWithinPolygons(line, polygons) {
    for (var i = 0; i < polygons.length; i++) {
        if (lineStringWithinPolygon(line, polygons[i])) {
            return true;
        }
    }
    return false;
}
function getTilePolygon(coordinates, bbox, canonical) {
    var polygon = [];
    for (var i = 0; i < coordinates.length; i++) {
        var ring = [];
        for (var j = 0; j < coordinates[i].length; j++) {
            var coord = getTileCoordinates(coordinates[i][j], canonical);
            updateBBox(bbox, coord);
            ring.push(coord);
        }
        polygon.push(ring);
    }
    return polygon;
}
function getTilePolygons(coordinates, bbox, canonical) {
    var polygons = [];
    for (var i = 0; i < coordinates.length; i++) {
        var polygon = getTilePolygon(coordinates[i], bbox, canonical);
        polygons.push(polygon);
    }
    return polygons;
}
function updatePoint(p, bbox, polyBBox, worldSize) {
    if (p[0] < polyBBox[0] || p[0] > polyBBox[2]) {
        var halfWorldSize = worldSize * 0.5;
        var shift = p[0] - polyBBox[0] > halfWorldSize ? -worldSize : polyBBox[0] - p[0] > halfWorldSize ? worldSize : 0;
        if (shift === 0) {
            shift = p[0] - polyBBox[2] > halfWorldSize ? -worldSize : polyBBox[2] - p[0] > halfWorldSize ? worldSize : 0;
        }
        p[0] += shift;
    }
    updateBBox(bbox, p);
}
function resetBBox(bbox) {
    bbox[0] = bbox[1] = Infinity;
    bbox[2] = bbox[3] = -Infinity;
}
function getTilePoints(geometry, pointBBox, polyBBox, canonical) {
    var worldSize = Math.pow(2, canonical.z) * EXTENT;
    var shifts = [canonical.x * EXTENT, canonical.y * EXTENT];
    var tilePoints = [];
    for (var i$1 = 0, list$1 = geometry; i$1 < list$1.length; i$1 += 1) {
        var points = list$1[i$1];
        for (var i = 0, list = points; i < list.length; i += 1) {
            var point = list[i];
            var p = [point.x + shifts[0], point.y + shifts[1]];
            updatePoint(p, pointBBox, polyBBox, worldSize);
            tilePoints.push(p);
        }
    }
    return tilePoints;
}
function getTileLines(geometry, lineBBox, polyBBox, canonical) {
    var worldSize = Math.pow(2, canonical.z) * EXTENT;
    var shifts = [canonical.x * EXTENT, canonical.y * EXTENT];
    var tileLines = [];
    for (var i$1 = 0, list$1 = geometry; i$1 < list$1.length; i$1 += 1) {
        var line = list$1[i$1];
        var tileLine = [];
        for (var i = 0, list = line; i < list.length; i += 1) {
            var point = list[i];
            var p = [point.x + shifts[0], point.y + shifts[1]];
            updateBBox(lineBBox, p);
            tileLine.push(p);
        }
        tileLines.push(tileLine);
    }
    if (lineBBox[2] - lineBBox[0] <= worldSize / 2) {
        resetBBox(lineBBox);
        for (var i$3 = 0, list$3 = tileLines; i$3 < list$3.length; i$3 += 1) {
            var line$1 = list$3[i$3];
            for (var i$2 = 0, list$2 = line$1; i$2 < list$2.length; i$2 += 1) {
                var p$1 = list$2[i$2];
                updatePoint(p$1, lineBBox, polyBBox, worldSize);
            }
        }
    }
    return tileLines;
}
function pointsWithinPolygons(ctx, polygonGeometry) {
    var pointBBox = [Infinity, Infinity, -Infinity, -Infinity];
    var polyBBox = [Infinity, Infinity, -Infinity, -Infinity];
    var canonical = ctx.canonicalID();
    if (polygonGeometry.type === 'Polygon') {
        var tilePolygon = getTilePolygon(polygonGeometry.coordinates, polyBBox, canonical);
        var tilePoints = getTilePoints(ctx.geometry(), pointBBox, polyBBox, canonical);
        if (!boxWithinBox(pointBBox, polyBBox)) {
            return false;
        }
        for (var i = 0, list = tilePoints; i < list.length; i += 1) {
            var point = list[i];
            if (!pointWithinPolygon(point, tilePolygon)) {
                return false;
            }
        }
    }
    if (polygonGeometry.type === 'MultiPolygon') {
        var tilePolygons = getTilePolygons(polygonGeometry.coordinates, polyBBox, canonical);
        var tilePoints$1 = getTilePoints(ctx.geometry(), pointBBox, polyBBox, canonical);
        if (!boxWithinBox(pointBBox, polyBBox)) {
            return false;
        }
        for (var i$1 = 0, list$1 = tilePoints$1; i$1 < list$1.length; i$1 += 1) {
            var point$1 = list$1[i$1];
            if (!pointWithinPolygons(point$1, tilePolygons)) {
                return false;
            }
        }
    }
    return true;
}
function linesWithinPolygons(ctx, polygonGeometry) {
    var lineBBox = [Infinity, Infinity, -Infinity, -Infinity];
    var polyBBox = [Infinity, Infinity, -Infinity, -Infinity];
    var canonical = ctx.canonicalID();
    if (polygonGeometry.type === 'Polygon') {
        var tilePolygon = getTilePolygon(polygonGeometry.coordinates, polyBBox, canonical);
        var tileLines = getTileLines(ctx.geometry(), lineBBox, polyBBox, canonical);
        if (!boxWithinBox(lineBBox, polyBBox)) {
            return false;
        }
        for (var i = 0, list = tileLines; i < list.length; i += 1) {
            var line = list[i];
            if (!lineStringWithinPolygon(line, tilePolygon)) {
                return false;
            }
        }
    }
    if (polygonGeometry.type === 'MultiPolygon') {
        var tilePolygons = getTilePolygons(polygonGeometry.coordinates, polyBBox, canonical);
        var tileLines$1 = getTileLines(ctx.geometry(), lineBBox, polyBBox, canonical);
        if (!boxWithinBox(lineBBox, polyBBox)) {
            return false;
        }
        for (var i$1 = 0, list$1 = tileLines$1; i$1 < list$1.length; i$1 += 1) {
            var line$1 = list$1[i$1];
            if (!lineStringWithinPolygons(line$1, tilePolygons)) {
                return false;
            }
        }
    }
    return true;
}
var Within = function Within(geojson, geometries) {
    this.type = BooleanType;
    this.geojson = geojson;
    this.geometries = geometries;
};
Within.parse = function parse(args, context) {
    if (args.length !== 2) {
        return context.error('\'within\' expression requires exactly one argument, but found ' + (args.length - 1) + ' instead.');
    }
    if (isValue(args[1])) {
        var geojson = args[1];
        if (geojson.type === 'FeatureCollection') {
            for (var i = 0; i < geojson.features.length; ++i) {
                var type = geojson.features[i].geometry.type;
                if (type === 'Polygon' || type === 'MultiPolygon') {
                    return new Within(geojson, geojson.features[i].geometry);
                }
            }
        } else if (geojson.type === 'Feature') {
            var type$1 = geojson.geometry.type;
            if (type$1 === 'Polygon' || type$1 === 'MultiPolygon') {
                return new Within(geojson, geojson.geometry);
            }
        } else if (geojson.type === 'Polygon' || geojson.type === 'MultiPolygon') {
            return new Within(geojson, geojson);
        }
    }
    return context.error('\'within\' expression requires valid geojson object that contains polygon geometry type.');
};
Within.prototype.evaluate = function evaluate(ctx) {
    if (ctx.geometry() != null && ctx.canonicalID() != null) {
        if (ctx.geometryType() === 'Point') {
            return pointsWithinPolygons(ctx, this.geometries);
        } else if (ctx.geometryType() === 'LineString') {
            return linesWithinPolygons(ctx, this.geometries);
        }
    }
    return false;
};
Within.prototype.eachChild = function eachChild() {};
Within.prototype.outputDefined = function outputDefined() {
    return true;
};
Within.prototype.serialize = function serialize() {
    return ['within', this.geojson];
};

function isFeatureConstant(e) {
    if (e instanceof CompoundExpression) {
        if (e.name === 'get' && e.args.length === 1) {
            return false;
        } else if (e.name === 'feature-state') {
            return false;
        } else if (e.name === 'has' && e.args.length === 1) {
            return false;
        } else if (e.name === 'properties' || e.name === 'geometry-type' || e.name === 'id') {
            return false;
        } else if (/^filter-/.test(e.name)) {
            return false;
        }
    }
    if (e instanceof Within) {
        return false;
    }
    var result = true;
    e.eachChild(function (arg) {
        if (result && !isFeatureConstant(arg)) {
            result = false;
        }
    });
    return result;
}
function isStateConstant(e) {
    if (e instanceof CompoundExpression) {
        if (e.name === 'feature-state') {
            return false;
        }
    }
    var result = true;
    e.eachChild(function (arg) {
        if (result && !isStateConstant(arg)) {
            result = false;
        }
    });
    return result;
}
function isGlobalPropertyConstant(e, properties) {
    if (e instanceof CompoundExpression && properties.indexOf(e.name) >= 0) {
        return false;
    }
    var result = true;
    e.eachChild(function (arg) {
        if (result && !isGlobalPropertyConstant(arg, properties)) {
            result = false;
        }
    });
    return result;
}

var Var = function Var(name, boundExpression) {
    this.type = boundExpression.type;
    this.name = name;
    this.boundExpression = boundExpression;
};
Var.parse = function parse(args, context) {
    if (args.length !== 2 || typeof args[1] !== 'string') {
        return context.error('\'var\' expression requires exactly one string literal argument.');
    }
    var name = args[1];
    if (!context.scope.has(name)) {
        return context.error('Unknown variable "' + name + '". Make sure "' + name + '" has been bound in an enclosing "let" expression before using it.', 1);
    }
    return new Var(name, context.scope.get(name));
};
Var.prototype.evaluate = function evaluate(ctx) {
    return this.boundExpression.evaluate(ctx);
};
Var.prototype.eachChild = function eachChild() {};
Var.prototype.outputDefined = function outputDefined() {
    return false;
};
Var.prototype.serialize = function serialize() {
    return ['var', this.name];
};

var ParsingContext = function ParsingContext(registry, path, expectedType, scope, errors) {
    if (path === void 0) path = [];
    if (scope === void 0) scope = new Scope();
    if (errors === void 0) errors = [];
    this.registry = registry;
    this.path = path;
    this.key = path.map(function (part) {
        return '[' + part + ']';
    }).join('');
    this.scope = scope;
    this.errors = errors;
    this.expectedType = expectedType;
};
ParsingContext.prototype.parse = function parse(expr, index, expectedType, bindings, options) {
    if (options === void 0) options = {};
    if (index) {
        return this.concat(index, expectedType, bindings)._parse(expr, options);
    }
    return this._parse(expr, options);
};
ParsingContext.prototype._parse = function _parse(expr, options) {
    if (expr === null || typeof expr === 'string' || typeof expr === 'boolean' || typeof expr === 'number') {
        expr = ['literal', expr];
    }
    function annotate(parsed, type, typeAnnotation) {
        if (typeAnnotation === 'assert') {
            return new Assertion(type, [parsed]);
        } else if (typeAnnotation === 'coerce') {
            return new Coercion(type, [parsed]);
        } else {
            return parsed;
        }
    }
    if (Array.isArray(expr)) {
        if (expr.length === 0) {
            return this.error('Expected an array with at least one element. If you wanted a literal array, use ["literal", []].');
        }
        var op = expr[0];
        if (typeof op !== 'string') {
            this.error('Expression name must be a string, but found ' + (typeof op === "undefined" ? "undefined" : _typeof(op)) + ' instead. If you wanted a literal array, use ["literal", [...]].', 0);
            return null;
        }
        var Expr = this.registry[op];
        if (Expr) {
            var parsed = Expr.parse(expr, this);
            if (!parsed) {
                return null;
            }
            if (this.expectedType) {
                var expected = this.expectedType;
                var actual = parsed.type;
                if ((expected.kind === 'string' || expected.kind === 'number' || expected.kind === 'boolean' || expected.kind === 'object' || expected.kind === 'array') && actual.kind === 'value') {
                    parsed = annotate(parsed, expected, options.typeAnnotation || 'assert');
                } else if ((expected.kind === 'color' || expected.kind === 'formatted' || expected.kind === 'resolvedImage') && (actual.kind === 'value' || actual.kind === 'string')) {
                    parsed = annotate(parsed, expected, options.typeAnnotation || 'coerce');
                } else if (this.checkSubtype(expected, actual)) {
                    return null;
                }
            }
            if (!(parsed instanceof Literal) && parsed.type.kind !== 'resolvedImage' && isConstant(parsed)) {
                var ec = new EvaluationContext();
                try {
                    parsed = new Literal(parsed.type, parsed.evaluate(ec));
                } catch (e) {
                    this.error(e.message);
                    return null;
                }
            }
            return parsed;
        }
        return this.error('Unknown expression "' + op + '". If you wanted a literal array, use ["literal", [...]].', 0);
    } else if (typeof expr === 'undefined') {
        return this.error('\'undefined\' value invalid. Use null instead.');
    } else if ((typeof expr === "undefined" ? "undefined" : _typeof(expr)) === 'object') {
        return this.error('Bare objects invalid. Use ["literal", {...}] instead.');
    } else {
        return this.error('Expected an array, but found ' + (typeof expr === "undefined" ? "undefined" : _typeof(expr)) + ' instead.');
    }
};
ParsingContext.prototype.concat = function concat(index, expectedType, bindings) {
    var path = typeof index === 'number' ? this.path.concat(index) : this.path;
    var scope = bindings ? this.scope.concat(bindings) : this.scope;
    return new ParsingContext(this.registry, path, expectedType || null, scope, this.errors);
};
ParsingContext.prototype.error = function error(error$1) {
    var keys = [],
        len = arguments.length - 1;
    while (len-- > 0) {
        keys[len] = arguments[len + 1];
    }var key = '' + this.key + keys.map(function (k) {
        return '[' + k + ']';
    }).join('');
    this.errors.push(new ParsingError(key, error$1));
};
ParsingContext.prototype.checkSubtype = function checkSubtype$1(expected, t) {
    var error = checkSubtype(expected, t);
    if (error) {
        this.error(error);
    }
    return error;
};
function isConstant(expression) {
    if (expression instanceof Var) {
        return isConstant(expression.boundExpression);
    } else if (expression instanceof CompoundExpression && expression.name === 'error') {
        return false;
    } else if (expression instanceof CollatorExpression) {
        return false;
    } else if (expression instanceof Within) {
        return false;
    }
    var isTypeAnnotation = expression instanceof Coercion || expression instanceof Assertion;
    var childrenConstant = true;
    expression.eachChild(function (child) {
        if (isTypeAnnotation) {
            childrenConstant = childrenConstant && isConstant(child);
        } else {
            childrenConstant = childrenConstant && child instanceof Literal;
        }
    });
    if (!childrenConstant) {
        return false;
    }
    return isFeatureConstant(expression) && isGlobalPropertyConstant(expression, ['zoom', 'heatmap-density', 'line-progress', 'accumulated', 'is-supported-script']);
}

function findStopLessThanOrEqualTo(stops, input) {
    var lastIndex = stops.length - 1;
    var lowerIndex = 0;
    var upperIndex = lastIndex;
    var currentIndex = 0;
    var currentValue, nextValue;
    while (lowerIndex <= upperIndex) {
        currentIndex = Math.floor((lowerIndex + upperIndex) / 2);
        currentValue = stops[currentIndex];
        nextValue = stops[currentIndex + 1];
        if (currentValue <= input) {
            if (currentIndex === lastIndex || input < nextValue) {
                return currentIndex;
            }
            lowerIndex = currentIndex + 1;
        } else if (currentValue > input) {
            upperIndex = currentIndex - 1;
        } else {
            throw new RuntimeError('Input is not a number.');
        }
    }
    return 0;
}

var Step = function Step(type, input, stops) {
    this.type = type;
    this.input = input;
    this.labels = [];
    this.outputs = [];
    for (var i = 0, list = stops; i < list.length; i += 1) {
        var ref = list[i];
        var label = ref[0];
        var expression = ref[1];
        this.labels.push(label);
        this.outputs.push(expression);
    }
};
Step.parse = function parse(args, context) {
    if (args.length - 1 < 4) {
        return context.error('Expected at least 4 arguments, but found only ' + (args.length - 1) + '.');
    }
    if ((args.length - 1) % 2 !== 0) {
        return context.error('Expected an even number of arguments.');
    }
    var input = context.parse(args[1], 1, NumberType);
    if (!input) {
        return null;
    }
    var stops = [];
    var outputType = null;
    if (context.expectedType && context.expectedType.kind !== 'value') {
        outputType = context.expectedType;
    }
    for (var i = 1; i < args.length; i += 2) {
        var label = i === 1 ? -Infinity : args[i];
        var value = args[i + 1];
        var labelKey = i;
        var valueKey = i + 1;
        if (typeof label !== 'number') {
            return context.error('Input/output pairs for "step" expressions must be defined using literal numeric values (not computed expressions) for the input values.', labelKey);
        }
        if (stops.length && stops[stops.length - 1][0] >= label) {
            return context.error('Input/output pairs for "step" expressions must be arranged with input values in strictly ascending order.', labelKey);
        }
        var parsed = context.parse(value, valueKey, outputType);
        if (!parsed) {
            return null;
        }
        outputType = outputType || parsed.type;
        stops.push([label, parsed]);
    }
    return new Step(outputType, input, stops);
};
Step.prototype.evaluate = function evaluate(ctx) {
    var labels = this.labels;
    var outputs = this.outputs;
    if (labels.length === 1) {
        return outputs[0].evaluate(ctx);
    }
    var value = this.input.evaluate(ctx);
    if (value <= labels[0]) {
        return outputs[0].evaluate(ctx);
    }
    var stopCount = labels.length;
    if (value >= labels[stopCount - 1]) {
        return outputs[stopCount - 1].evaluate(ctx);
    }
    var index = findStopLessThanOrEqualTo(labels, value);
    return outputs[index].evaluate(ctx);
};
Step.prototype.eachChild = function eachChild(fn) {
    fn(this.input);
    for (var i = 0, list = this.outputs; i < list.length; i += 1) {
        var expression = list[i];
        fn(expression);
    }
};
Step.prototype.outputDefined = function outputDefined() {
    return this.outputs.every(function (out) {
        return out.outputDefined();
    });
};
Step.prototype.serialize = function serialize() {
    var serialized = ['step', this.input.serialize()];
    for (var i = 0; i < this.labels.length; i++) {
        if (i > 0) {
            serialized.push(this.labels[i]);
        }
        serialized.push(this.outputs[i].serialize());
    }
    return serialized;
};

/*
 * Copyright (C) 2008 Apple Inc. All Rights Reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY APPLE INC. ``AS IS'' AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL APPLE INC. OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * Ported from Webkit
 * http://svn.webkit.org/repository/webkit/trunk/Source/WebCore/platform/graphics/UnitBezier.h
 */

var unitbezier = UnitBezier;

function UnitBezier(p1x, p1y, p2x, p2y) {
    // Calculate the polynomial coefficients, implicit first and last control points are (0,0) and (1,1).
    this.cx = 3.0 * p1x;
    this.bx = 3.0 * (p2x - p1x) - this.cx;
    this.ax = 1.0 - this.cx - this.bx;

    this.cy = 3.0 * p1y;
    this.by = 3.0 * (p2y - p1y) - this.cy;
    this.ay = 1.0 - this.cy - this.by;

    this.p1x = p1x;
    this.p1y = p2y;
    this.p2x = p2x;
    this.p2y = p2y;
}

UnitBezier.prototype.sampleCurveX = function (t) {
    // `ax t^3 + bx t^2 + cx t' expanded using Horner's rule.
    return ((this.ax * t + this.bx) * t + this.cx) * t;
};

UnitBezier.prototype.sampleCurveY = function (t) {
    return ((this.ay * t + this.by) * t + this.cy) * t;
};

UnitBezier.prototype.sampleCurveDerivativeX = function (t) {
    return (3.0 * this.ax * t + 2.0 * this.bx) * t + this.cx;
};

UnitBezier.prototype.solveCurveX = function (x, epsilon) {
    if (typeof epsilon === 'undefined') {
        epsilon = 1e-6;
    }

    var t0, t1, t2, x2, i;

    // First try a few iterations of Newton's method -- normally very fast.
    for (t2 = x, i = 0; i < 8; i++) {

        x2 = this.sampleCurveX(t2) - x;
        if (Math.abs(x2) < epsilon) {
            return t2;
        }

        var d2 = this.sampleCurveDerivativeX(t2);
        if (Math.abs(d2) < 1e-6) {
            break;
        }

        t2 = t2 - x2 / d2;
    }

    // Fall back to the bisection method for reliability.
    t0 = 0.0;
    t1 = 1.0;
    t2 = x;

    if (t2 < t0) {
        return t0;
    }
    if (t2 > t1) {
        return t1;
    }

    while (t0 < t1) {

        x2 = this.sampleCurveX(t2);
        if (Math.abs(x2 - x) < epsilon) {
            return t2;
        }

        if (x > x2) {
            t0 = t2;
        } else {
            t1 = t2;
        }

        t2 = (t1 - t0) * 0.5 + t0;
    }

    // Failure.
    return t2;
};

UnitBezier.prototype.solve = function (x, epsilon) {
    return this.sampleCurveY(this.solveCurveX(x, epsilon));
};

function number(a, b, t) {
    return a * (1 - t) + b * t;
}
function color(from, to, t) {
    return new Color(number(from.r, to.r, t), number(from.g, to.g, t), number(from.b, to.b, t), number(from.a, to.a, t));
}
function array$1(from, to, t) {
    return from.map(function (d, i) {
        return number(d, to[i], t);
    });
}

var interpolate = /*#__PURE__*/Object.freeze({
    __proto__: null,
    number: number,
    color: color,
    array: array$1
});

var Xn = 0.95047,
    Yn = 1,
    Zn = 1.08883,
    t0 = 4 / 29,
    t1 = 6 / 29,
    t2 = 3 * t1 * t1,
    t3 = t1 * t1 * t1,
    deg2rad = Math.PI / 180,
    rad2deg = 180 / Math.PI;
function xyz2lab(t) {
    return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}
function lab2xyz(t) {
    return t > t1 ? t * t * t : t2 * (t - t0);
}
function xyz2rgb(x) {
    return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}
function rgb2xyz(x) {
    x /= 255;
    return x <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}
function rgbToLab(rgbColor) {
    var b = rgb2xyz(rgbColor.r),
        a = rgb2xyz(rgbColor.g),
        l = rgb2xyz(rgbColor.b),
        x = xyz2lab((0.4124564 * b + 0.3575761 * a + 0.1804375 * l) / Xn),
        y = xyz2lab((0.2126729 * b + 0.7151522 * a + 0.072175 * l) / Yn),
        z = xyz2lab((0.0193339 * b + 0.119192 * a + 0.9503041 * l) / Zn);
    return {
        l: 116 * y - 16,
        a: 500 * (x - y),
        b: 200 * (y - z),
        alpha: rgbColor.a
    };
}
function labToRgb(labColor) {
    var y = (labColor.l + 16) / 116,
        x = isNaN(labColor.a) ? y : y + labColor.a / 500,
        z = isNaN(labColor.b) ? y : y - labColor.b / 200;
    y = Yn * lab2xyz(y);
    x = Xn * lab2xyz(x);
    z = Zn * lab2xyz(z);
    return new Color(xyz2rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z), xyz2rgb(-0.969266 * x + 1.8760108 * y + 0.041556 * z), xyz2rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z), labColor.alpha);
}
function interpolateLab(from, to, t) {
    return {
        l: number(from.l, to.l, t),
        a: number(from.a, to.a, t),
        b: number(from.b, to.b, t),
        alpha: number(from.alpha, to.alpha, t)
    };
}
function rgbToHcl(rgbColor) {
    var ref = rgbToLab(rgbColor);
    var l = ref.l;
    var a = ref.a;
    var b = ref.b;
    var h = Math.atan2(b, a) * rad2deg;
    return {
        h: h < 0 ? h + 360 : h,
        c: Math.sqrt(a * a + b * b),
        l: l,
        alpha: rgbColor.a
    };
}
function hclToRgb(hclColor) {
    var h = hclColor.h * deg2rad,
        c = hclColor.c,
        l = hclColor.l;
    return labToRgb({
        l: l,
        a: Math.cos(h) * c,
        b: Math.sin(h) * c,
        alpha: hclColor.alpha
    });
}
function interpolateHue(a, b, t) {
    var d = b - a;
    return a + t * (d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d);
}
function interpolateHcl(from, to, t) {
    return {
        h: interpolateHue(from.h, to.h, t),
        c: number(from.c, to.c, t),
        l: number(from.l, to.l, t),
        alpha: number(from.alpha, to.alpha, t)
    };
}
var lab = {
    forward: rgbToLab,
    reverse: labToRgb,
    interpolate: interpolateLab
};
var hcl = {
    forward: rgbToHcl,
    reverse: hclToRgb,
    interpolate: interpolateHcl
};

var colorSpaces = /*#__PURE__*/Object.freeze({
    __proto__: null,
    lab: lab,
    hcl: hcl
});

var Interpolate = function Interpolate(type, operator, interpolation, input, stops) {
    this.type = type;
    this.operator = operator;
    this.interpolation = interpolation;
    this.input = input;
    this.labels = [];
    this.outputs = [];
    for (var i = 0, list = stops; i < list.length; i += 1) {
        var ref = list[i];
        var label = ref[0];
        var expression = ref[1];
        this.labels.push(label);
        this.outputs.push(expression);
    }
};
Interpolate.interpolationFactor = function interpolationFactor(interpolation, input, lower, upper) {
    var t = 0;
    if (interpolation.name === 'exponential') {
        t = exponentialInterpolation(input, interpolation.base, lower, upper);
    } else if (interpolation.name === 'linear') {
        t = exponentialInterpolation(input, 1, lower, upper);
    } else if (interpolation.name === 'cubic-bezier') {
        var c = interpolation.controlPoints;
        var ub = new unitbezier(c[0], c[1], c[2], c[3]);
        t = ub.solve(exponentialInterpolation(input, 1, lower, upper));
    }
    return t;
};
Interpolate.parse = function parse(args, context) {
    var operator = args[0];
    var interpolation = args[1];
    var input = args[2];
    var rest = args.slice(3);
    if (!Array.isArray(interpolation) || interpolation.length === 0) {
        return context.error('Expected an interpolation type expression.', 1);
    }
    if (interpolation[0] === 'linear') {
        interpolation = { name: 'linear' };
    } else if (interpolation[0] === 'exponential') {
        var base = interpolation[1];
        if (typeof base !== 'number') {
            return context.error('Exponential interpolation requires a numeric base.', 1, 1);
        }
        interpolation = {
            name: 'exponential',
            base: base
        };
    } else if (interpolation[0] === 'cubic-bezier') {
        var controlPoints = interpolation.slice(1);
        if (controlPoints.length !== 4 || controlPoints.some(function (t) {
            return typeof t !== 'number' || t < 0 || t > 1;
        })) {
            return context.error('Cubic bezier interpolation requires four numeric arguments with values between 0 and 1.', 1);
        }
        interpolation = {
            name: 'cubic-bezier',
            controlPoints: controlPoints
        };
    } else {
        return context.error('Unknown interpolation type ' + String(interpolation[0]), 1, 0);
    }
    if (args.length - 1 < 4) {
        return context.error('Expected at least 4 arguments, but found only ' + (args.length - 1) + '.');
    }
    if ((args.length - 1) % 2 !== 0) {
        return context.error('Expected an even number of arguments.');
    }
    input = context.parse(input, 2, NumberType);
    if (!input) {
        return null;
    }
    var stops = [];
    var outputType = null;
    if (operator === 'interpolate-hcl' || operator === 'interpolate-lab') {
        outputType = ColorType;
    } else if (context.expectedType && context.expectedType.kind !== 'value') {
        outputType = context.expectedType;
    }
    for (var i = 0; i < rest.length; i += 2) {
        var label = rest[i];
        var value = rest[i + 1];
        var labelKey = i + 3;
        var valueKey = i + 4;
        if (typeof label !== 'number') {
            return context.error('Input/output pairs for "interpolate" expressions must be defined using literal numeric values (not computed expressions) for the input values.', labelKey);
        }
        if (stops.length && stops[stops.length - 1][0] >= label) {
            return context.error('Input/output pairs for "interpolate" expressions must be arranged with input values in strictly ascending order.', labelKey);
        }
        var parsed = context.parse(value, valueKey, outputType);
        if (!parsed) {
            return null;
        }
        outputType = outputType || parsed.type;
        stops.push([label, parsed]);
    }
    if (outputType.kind !== 'number' && outputType.kind !== 'color' && !(outputType.kind === 'array' && outputType.itemType.kind === 'number' && typeof outputType.N === 'number')) {
        return context.error('Type ' + toString(outputType) + ' is not interpolatable.');
    }
    return new Interpolate(outputType, operator, interpolation, input, stops);
};
Interpolate.prototype.evaluate = function evaluate(ctx) {
    var labels = this.labels;
    var outputs = this.outputs;
    if (labels.length === 1) {
        return outputs[0].evaluate(ctx);
    }
    var value = this.input.evaluate(ctx);
    if (value <= labels[0]) {
        return outputs[0].evaluate(ctx);
    }
    var stopCount = labels.length;
    if (value >= labels[stopCount - 1]) {
        return outputs[stopCount - 1].evaluate(ctx);
    }
    var index = findStopLessThanOrEqualTo(labels, value);
    var lower = labels[index];
    var upper = labels[index + 1];
    var t = Interpolate.interpolationFactor(this.interpolation, value, lower, upper);
    var outputLower = outputs[index].evaluate(ctx);
    var outputUpper = outputs[index + 1].evaluate(ctx);
    if (this.operator === 'interpolate') {
        return interpolate[this.type.kind.toLowerCase()](outputLower, outputUpper, t);
    } else if (this.operator === 'interpolate-hcl') {
        return hcl.reverse(hcl.interpolate(hcl.forward(outputLower), hcl.forward(outputUpper), t));
    } else {
        return lab.reverse(lab.interpolate(lab.forward(outputLower), lab.forward(outputUpper), t));
    }
};
Interpolate.prototype.eachChild = function eachChild(fn) {
    fn(this.input);
    for (var i = 0, list = this.outputs; i < list.length; i += 1) {
        var expression = list[i];
        fn(expression);
    }
};
Interpolate.prototype.outputDefined = function outputDefined() {
    return this.outputs.every(function (out) {
        return out.outputDefined();
    });
};
Interpolate.prototype.serialize = function serialize() {
    var interpolation;
    if (this.interpolation.name === 'linear') {
        interpolation = ['linear'];
    } else if (this.interpolation.name === 'exponential') {
        if (this.interpolation.base === 1) {
            interpolation = ['linear'];
        } else {
            interpolation = ['exponential', this.interpolation.base];
        }
    } else {
        interpolation = ['cubic-bezier'].concat(this.interpolation.controlPoints);
    }
    var serialized = [this.operator, interpolation, this.input.serialize()];
    for (var i = 0; i < this.labels.length; i++) {
        serialized.push(this.labels[i], this.outputs[i].serialize());
    }
    return serialized;
};
function exponentialInterpolation(input, base, lowerValue, upperValue) {
    var difference = upperValue - lowerValue;
    var progress = input - lowerValue;
    if (difference === 0) {
        return 0;
    } else if (base === 1) {
        return progress / difference;
    } else {
        return (Math.pow(base, progress) - 1) / (Math.pow(base, difference) - 1);
    }
}

var Coalesce = function Coalesce(type, args) {
    this.type = type;
    this.args = args;
};
Coalesce.parse = function parse(args, context) {
    if (args.length < 2) {
        return context.error('Expectected at least one argument.');
    }
    var outputType = null;
    var expectedType = context.expectedType;
    if (expectedType && expectedType.kind !== 'value') {
        outputType = expectedType;
    }
    var parsedArgs = [];
    for (var i = 0, list = args.slice(1); i < list.length; i += 1) {
        var arg = list[i];
        var parsed = context.parse(arg, 1 + parsedArgs.length, outputType, undefined, { typeAnnotation: 'omit' });
        if (!parsed) {
            return null;
        }
        outputType = outputType || parsed.type;
        parsedArgs.push(parsed);
    }
    var needsAnnotation = expectedType && parsedArgs.some(function (arg) {
        return checkSubtype(expectedType, arg.type);
    });
    return needsAnnotation ? new Coalesce(ValueType, parsedArgs) : new Coalesce(outputType, parsedArgs);
};
Coalesce.prototype.evaluate = function evaluate(ctx) {
    var result = null;
    var argCount = 0;
    var requestedImageName;
    for (var i = 0, list = this.args; i < list.length; i += 1) {
        var arg = list[i];
        argCount++;
        result = arg.evaluate(ctx);
        if (result && result instanceof ResolvedImage && !result.available) {
            if (!requestedImageName) {
                requestedImageName = result.name;
            }
            result = null;
            if (argCount === this.args.length) {
                result = requestedImageName;
            }
        }
        if (result !== null) {
            break;
        }
    }
    return result;
};
Coalesce.prototype.eachChild = function eachChild(fn) {
    this.args.forEach(fn);
};
Coalesce.prototype.outputDefined = function outputDefined() {
    return this.args.every(function (arg) {
        return arg.outputDefined();
    });
};
Coalesce.prototype.serialize = function serialize() {
    var serialized = ['coalesce'];
    this.eachChild(function (child) {
        serialized.push(child.serialize());
    });
    return serialized;
};

var Let = function Let(bindings, result) {
    this.type = result.type;
    this.bindings = [].concat(bindings);
    this.result = result;
};
Let.prototype.evaluate = function evaluate(ctx) {
    return this.result.evaluate(ctx);
};
Let.prototype.eachChild = function eachChild(fn) {
    for (var i = 0, list = this.bindings; i < list.length; i += 1) {
        var binding = list[i];
        fn(binding[1]);
    }
    fn(this.result);
};
Let.parse = function parse(args, context) {
    if (args.length < 4) {
        return context.error('Expected at least 3 arguments, but found ' + (args.length - 1) + ' instead.');
    }
    var bindings = [];
    for (var i = 1; i < args.length - 1; i += 2) {
        var name = args[i];
        if (typeof name !== 'string') {
            return context.error('Expected string, but found ' + (typeof name === "undefined" ? "undefined" : _typeof(name)) + ' instead.', i);
        }
        if (/[^a-zA-Z0-9_]/.test(name)) {
            return context.error('Variable names must contain only alphanumeric characters or \'_\'.', i);
        }
        var value = context.parse(args[i + 1], i + 1);
        if (!value) {
            return null;
        }
        bindings.push([name, value]);
    }
    var result = context.parse(args[args.length - 1], args.length - 1, context.expectedType, bindings);
    if (!result) {
        return null;
    }
    return new Let(bindings, result);
};
Let.prototype.outputDefined = function outputDefined() {
    return this.result.outputDefined();
};
Let.prototype.serialize = function serialize() {
    var serialized = ['let'];
    for (var i = 0, list = this.bindings; i < list.length; i += 1) {
        var ref = list[i];
        var name = ref[0];
        var expr = ref[1];
        serialized.push(name, expr.serialize());
    }
    serialized.push(this.result.serialize());
    return serialized;
};

var At = function At(type, index, input) {
    this.type = type;
    this.index = index;
    this.input = input;
};
At.parse = function parse(args, context) {
    if (args.length !== 3) {
        return context.error('Expected 2 arguments, but found ' + (args.length - 1) + ' instead.');
    }
    var index = context.parse(args[1], 1, NumberType);
    var input = context.parse(args[2], 2, array(context.expectedType || ValueType));
    if (!index || !input) {
        return null;
    }
    var t = input.type;
    return new At(t.itemType, index, input);
};
At.prototype.evaluate = function evaluate(ctx) {
    var index = this.index.evaluate(ctx);
    var array = this.input.evaluate(ctx);
    if (index < 0) {
        throw new RuntimeError('Array index out of bounds: ' + index + ' < 0.');
    }
    if (index >= array.length) {
        throw new RuntimeError('Array index out of bounds: ' + index + ' > ' + (array.length - 1) + '.');
    }
    if (index !== Math.floor(index)) {
        throw new RuntimeError('Array index must be an integer, but found ' + index + ' instead.');
    }
    return array[index];
};
At.prototype.eachChild = function eachChild(fn) {
    fn(this.index);
    fn(this.input);
};
At.prototype.outputDefined = function outputDefined() {
    return false;
};
At.prototype.serialize = function serialize() {
    return ['at', this.index.serialize(), this.input.serialize()];
};

var In = function In(needle, haystack) {
    this.type = BooleanType;
    this.needle = needle;
    this.haystack = haystack;
};
In.parse = function parse(args, context) {
    if (args.length !== 3) {
        return context.error('Expected 2 arguments, but found ' + (args.length - 1) + ' instead.');
    }
    var needle = context.parse(args[1], 1, ValueType);
    var haystack = context.parse(args[2], 2, ValueType);
    if (!needle || !haystack) {
        return null;
    }
    if (!isValidType(needle.type, [BooleanType, StringType, NumberType, NullType, ValueType])) {
        return context.error('Expected first argument to be of type boolean, string, number or null, but found ' + toString(needle.type) + ' instead');
    }
    return new In(needle, haystack);
};
In.prototype.evaluate = function evaluate(ctx) {
    var needle = this.needle.evaluate(ctx);
    var haystack = this.haystack.evaluate(ctx);
    if (!haystack) {
        return false;
    }
    if (!isValidNativeType(needle, ['boolean', 'string', 'number', 'null'])) {
        throw new RuntimeError('Expected first argument to be of type boolean, string, number or null, but found ' + toString(typeOf(needle)) + ' instead.');
    }
    if (!isValidNativeType(haystack, ['string', 'array'])) {
        throw new RuntimeError('Expected second argument to be of type array or string, but found ' + toString(typeOf(haystack)) + ' instead.');
    }
    return haystack.indexOf(needle) >= 0;
};
In.prototype.eachChild = function eachChild(fn) {
    fn(this.needle);
    fn(this.haystack);
};
In.prototype.outputDefined = function outputDefined() {
    return true;
};
In.prototype.serialize = function serialize() {
    return ['in', this.needle.serialize(), this.haystack.serialize()];
};

var IndexOf = function IndexOf(needle, haystack, fromIndex) {
    this.type = NumberType;
    this.needle = needle;
    this.haystack = haystack;
    this.fromIndex = fromIndex;
};
IndexOf.parse = function parse(args, context) {
    if (args.length <= 2 || args.length >= 5) {
        return context.error('Expected 3 or 4 arguments, but found ' + (args.length - 1) + ' instead.');
    }
    var needle = context.parse(args[1], 1, ValueType);
    var haystack = context.parse(args[2], 2, ValueType);
    if (!needle || !haystack) {
        return null;
    }
    if (!isValidType(needle.type, [BooleanType, StringType, NumberType, NullType, ValueType])) {
        return context.error('Expected first argument to be of type boolean, string, number or null, but found ' + toString(needle.type) + ' instead');
    }
    if (args.length === 4) {
        var fromIndex = context.parse(args[3], 3, NumberType);
        if (!fromIndex) {
            return null;
        }
        return new IndexOf(needle, haystack, fromIndex);
    } else {
        return new IndexOf(needle, haystack);
    }
};
IndexOf.prototype.evaluate = function evaluate(ctx) {
    var needle = this.needle.evaluate(ctx);
    var haystack = this.haystack.evaluate(ctx);
    if (!isValidNativeType(needle, ['boolean', 'string', 'number', 'null'])) {
        throw new RuntimeError('Expected first argument to be of type boolean, string, number or null, but found ' + toString(typeOf(needle)) + ' instead.');
    }
    if (!isValidNativeType(haystack, ['string', 'array'])) {
        throw new RuntimeError('Expected second argument to be of type array or string, but found ' + toString(typeOf(haystack)) + ' instead.');
    }
    if (this.fromIndex) {
        var fromIndex = this.fromIndex.evaluate(ctx);
        return haystack.indexOf(needle, fromIndex);
    }
    return haystack.indexOf(needle);
};
IndexOf.prototype.eachChild = function eachChild(fn) {
    fn(this.needle);
    fn(this.haystack);
    if (this.fromIndex) {
        fn(this.fromIndex);
    }
};
IndexOf.prototype.outputDefined = function outputDefined() {
    return false;
};
IndexOf.prototype.serialize = function serialize() {
    if (this.fromIndex != null && this.fromIndex !== undefined) {
        var fromIndex = this.fromIndex.serialize();
        return ['index-of', this.needle.serialize(), this.haystack.serialize(), fromIndex];
    }
    return ['index-of', this.needle.serialize(), this.haystack.serialize()];
};

var Match = function Match(inputType, outputType, input, cases, outputs, otherwise) {
    this.inputType = inputType;
    this.type = outputType;
    this.input = input;
    this.cases = cases;
    this.outputs = outputs;
    this.otherwise = otherwise;
};
Match.parse = function parse(args, context) {
    if (args.length < 5) {
        return context.error('Expected at least 4 arguments, but found only ' + (args.length - 1) + '.');
    }
    if (args.length % 2 !== 1) {
        return context.error('Expected an even number of arguments.');
    }
    var inputType;
    var outputType;
    if (context.expectedType && context.expectedType.kind !== 'value') {
        outputType = context.expectedType;
    }
    var cases = {};
    var outputs = [];
    for (var i = 2; i < args.length - 1; i += 2) {
        var labels = args[i];
        var value = args[i + 1];
        if (!Array.isArray(labels)) {
            labels = [labels];
        }
        var labelContext = context.concat(i);
        if (labels.length === 0) {
            return labelContext.error('Expected at least one branch label.');
        }
        for (var i$1 = 0, list = labels; i$1 < list.length; i$1 += 1) {
            var label = list[i$1];
            if (typeof label !== 'number' && typeof label !== 'string') {
                return labelContext.error('Branch labels must be numbers or strings.');
            } else if (typeof label === 'number' && Math.abs(label) > Number.MAX_SAFE_INTEGER) {
                return labelContext.error('Branch labels must be integers no larger than ' + Number.MAX_SAFE_INTEGER + '.');
            } else if (typeof label === 'number' && Math.floor(label) !== label) {
                return labelContext.error('Numeric branch labels must be integer values.');
            } else if (!inputType) {
                inputType = typeOf(label);
            } else if (labelContext.checkSubtype(inputType, typeOf(label))) {
                return null;
            }
            if (typeof cases[String(label)] !== 'undefined') {
                return labelContext.error('Branch labels must be unique.');
            }
            cases[String(label)] = outputs.length;
        }
        var result = context.parse(value, i, outputType);
        if (!result) {
            return null;
        }
        outputType = outputType || result.type;
        outputs.push(result);
    }
    var input = context.parse(args[1], 1, ValueType);
    if (!input) {
        return null;
    }
    var otherwise = context.parse(args[args.length - 1], args.length - 1, outputType);
    if (!otherwise) {
        return null;
    }
    if (input.type.kind !== 'value' && context.concat(1).checkSubtype(inputType, input.type)) {
        return null;
    }
    return new Match(inputType, outputType, input, cases, outputs, otherwise);
};
Match.prototype.evaluate = function evaluate(ctx) {
    var input = this.input.evaluate(ctx);
    var output = typeOf(input) === this.inputType && this.outputs[this.cases[input]] || this.otherwise;
    return output.evaluate(ctx);
};
Match.prototype.eachChild = function eachChild(fn) {
    fn(this.input);
    this.outputs.forEach(fn);
    fn(this.otherwise);
};
Match.prototype.outputDefined = function outputDefined() {
    return this.outputs.every(function (out) {
        return out.outputDefined();
    }) && this.otherwise.outputDefined();
};
Match.prototype.serialize = function serialize() {
    var this$1 = this;
    var serialized = ['match', this.input.serialize()];
    var sortedLabels = Object.keys(this.cases).sort();
    var groupedByOutput = [];
    var outputLookup = {};
    for (var i = 0, list = sortedLabels; i < list.length; i += 1) {
        var label = list[i];
        var outputIndex = outputLookup[this.cases[label]];
        if (outputIndex === undefined) {
            outputLookup[this.cases[label]] = groupedByOutput.length;
            groupedByOutput.push([this.cases[label], [label]]);
        } else {
            groupedByOutput[outputIndex][1].push(label);
        }
    }
    var coerceLabel = function coerceLabel(label) {
        return this$1.inputType.kind === 'number' ? Number(label) : label;
    };
    for (var i$1 = 0, list$1 = groupedByOutput; i$1 < list$1.length; i$1 += 1) {
        var ref = list$1[i$1];
        var outputIndex = ref[0];
        var labels = ref[1];
        if (labels.length === 1) {
            serialized.push(coerceLabel(labels[0]));
        } else {
            serialized.push(labels.map(coerceLabel));
        }
        serialized.push(this.outputs[outputIndex$1].serialize());
    }
    serialized.push(this.otherwise.serialize());
    return serialized;
};

var Case = function Case(type, branches, otherwise) {
    this.type = type;
    this.branches = branches;
    this.otherwise = otherwise;
};
Case.parse = function parse(args, context) {
    if (args.length < 4) {
        return context.error('Expected at least 3 arguments, but found only ' + (args.length - 1) + '.');
    }
    if (args.length % 2 !== 0) {
        return context.error('Expected an odd number of arguments.');
    }
    var outputType;
    if (context.expectedType && context.expectedType.kind !== 'value') {
        outputType = context.expectedType;
    }
    var branches = [];
    for (var i = 1; i < args.length - 1; i += 2) {
        var test = context.parse(args[i], i, BooleanType);
        if (!test) {
            return null;
        }
        var result = context.parse(args[i + 1], i + 1, outputType);
        if (!result) {
            return null;
        }
        branches.push([test, result]);
        outputType = outputType || result.type;
    }
    var otherwise = context.parse(args[args.length - 1], args.length - 1, outputType);
    if (!otherwise) {
        return null;
    }
    return new Case(outputType, branches, otherwise);
};
Case.prototype.evaluate = function evaluate(ctx) {
    for (var i = 0, list = this.branches; i < list.length; i += 1) {
        var ref = list[i];
        var test = ref[0];
        var expression = ref[1];
        if (test.evaluate(ctx)) {
            return expression.evaluate(ctx);
        }
    }
    return this.otherwise.evaluate(ctx);
};
Case.prototype.eachChild = function eachChild(fn) {
    for (var i = 0, list = this.branches; i < list.length; i += 1) {
        var ref = list[i];
        var test = ref[0];
        var expression = ref[1];
        fn(test);
        fn(expression);
    }
    fn(this.otherwise);
};
Case.prototype.outputDefined = function outputDefined() {
    return this.branches.every(function (ref) {
        var _ = ref[0];
        var out = ref[1];
        return out.outputDefined();
    }) && this.otherwise.outputDefined();
};
Case.prototype.serialize = function serialize() {
    var serialized = ['case'];
    this.eachChild(function (child) {
        serialized.push(child.serialize());
    });
    return serialized;
};

var Slice = function Slice(type, input, beginIndex, endIndex) {
    this.type = type;
    this.input = input;
    this.beginIndex = beginIndex;
    this.endIndex = endIndex;
};
Slice.parse = function parse(args, context) {
    if (args.length <= 2 || args.length >= 5) {
        return context.error('Expected 3 or 4 arguments, but found ' + (args.length - 1) + ' instead.');
    }
    var input = context.parse(args[1], 1, ValueType);
    var beginIndex = context.parse(args[2], 2, NumberType);
    if (!input || !beginIndex) {
        return null;
    }
    if (!isValidType(input.type, [array(ValueType), StringType, ValueType])) {
        return context.error('Expected first argument to be of type array or string, but found ' + toString(input.type) + ' instead');
    }
    if (args.length === 4) {
        var endIndex = context.parse(args[3], 3, NumberType);
        if (!endIndex) {
            return null;
        }
        return new Slice(input.type, input, beginIndex, endIndex);
    } else {
        return new Slice(input.type, input, beginIndex);
    }
};
Slice.prototype.evaluate = function evaluate(ctx) {
    var input = this.input.evaluate(ctx);
    var beginIndex = this.beginIndex.evaluate(ctx);
    if (!isValidNativeType(input, ['string', 'array'])) {
        throw new RuntimeError('Expected first argument to be of type array or string, but found ' + toString(typeOf(input)) + ' instead.');
    }
    if (this.endIndex) {
        var endIndex = this.endIndex.evaluate(ctx);
        return input.slice(beginIndex, endIndex);
    }
    return input.slice(beginIndex);
};
Slice.prototype.eachChild = function eachChild(fn) {
    fn(this.input);
    fn(this.beginIndex);
    if (this.endIndex) {
        fn(this.endIndex);
    }
};
Slice.prototype.outputDefined = function outputDefined() {
    return false;
};
Slice.prototype.serialize = function serialize() {
    if (this.endIndex != null && this.endIndex !== undefined) {
        var endIndex = this.endIndex.serialize();
        return ['slice', this.input.serialize(), this.beginIndex.serialize(), endIndex];
    }
    return ['slice', this.input.serialize(), this.beginIndex.serialize()];
};

function isComparableType(op, type) {
    if (op === '==' || op === '!=') {
        return type.kind === 'boolean' || type.kind === 'string' || type.kind === 'number' || type.kind === 'null' || type.kind === 'value';
    } else {
        return type.kind === 'string' || type.kind === 'number' || type.kind === 'value';
    }
}
function eq(ctx, a, b) {
    return a === b;
}
function neq(ctx, a, b) {
    return a !== b;
}
function lt(ctx, a, b) {
    return a < b;
}
function gt(ctx, a, b) {
    return a > b;
}
function lteq(ctx, a, b) {
    return a <= b;
}
function gteq(ctx, a, b) {
    return a >= b;
}
function eqCollate(ctx, a, b, c) {
    return c.compare(a, b) === 0;
}
function neqCollate(ctx, a, b, c) {
    return !eqCollate(ctx, a, b, c);
}
function ltCollate(ctx, a, b, c) {
    return c.compare(a, b) < 0;
}
function gtCollate(ctx, a, b, c) {
    return c.compare(a, b) > 0;
}
function lteqCollate(ctx, a, b, c) {
    return c.compare(a, b) <= 0;
}
function gteqCollate(ctx, a, b, c) {
    return c.compare(a, b) >= 0;
}
function makeComparison(op, compareBasic, compareWithCollator) {
    var isOrderComparison = op !== '==' && op !== '!=';
    return function () {
        function Comparison(lhs, rhs, collator) {
            this.type = BooleanType;
            this.lhs = lhs;
            this.rhs = rhs;
            this.collator = collator;
            this.hasUntypedArgument = lhs.type.kind === 'value' || rhs.type.kind === 'value';
        }
        Comparison.parse = function parse(args, context) {
            if (args.length !== 3 && args.length !== 4) {
                return context.error('Expected two or three arguments.');
            }
            var op = args[0];
            var lhs = context.parse(args[1], 1, ValueType);
            if (!lhs) {
                return null;
            }
            if (!isComparableType(op, lhs.type)) {
                return context.concat(1).error('"' + op + '" comparisons are not supported for type \'' + toString(lhs.type) + '\'.');
            }
            var rhs = context.parse(args[2], 2, ValueType);
            if (!rhs) {
                return null;
            }
            if (!isComparableType(op, rhs.type)) {
                return context.concat(2).error('"' + op + '" comparisons are not supported for type \'' + toString(rhs.type) + '\'.');
            }
            if (lhs.type.kind !== rhs.type.kind && lhs.type.kind !== 'value' && rhs.type.kind !== 'value') {
                return context.error('Cannot compare types \'' + toString(lhs.type) + '\' and \'' + toString(rhs.type) + '\'.');
            }
            if (isOrderComparison) {
                if (lhs.type.kind === 'value' && rhs.type.kind !== 'value') {
                    lhs = new Assertion(rhs.type, [lhs]);
                } else if (lhs.type.kind !== 'value' && rhs.type.kind === 'value') {
                    rhs = new Assertion(lhs.type, [rhs]);
                }
            }
            var collator = null;
            if (args.length === 4) {
                if (lhs.type.kind !== 'string' && rhs.type.kind !== 'string' && lhs.type.kind !== 'value' && rhs.type.kind !== 'value') {
                    return context.error('Cannot use collator to compare non-string types.');
                }
                collator = context.parse(args[3], 3, CollatorType);
                if (!collator) {
                    return null;
                }
            }
            return new Comparison(lhs, rhs, collator);
        };
        Comparison.prototype.evaluate = function evaluate(ctx) {
            var lhs = this.lhs.evaluate(ctx);
            var rhs = this.rhs.evaluate(ctx);
            if (isOrderComparison && this.hasUntypedArgument) {
                var lt = typeOf(lhs);
                var rt = typeOf(rhs);
                if (lt.kind !== rt.kind || !(lt.kind === 'string' || lt.kind === 'number')) {
                    throw new RuntimeError('Expected arguments for "' + op + '" to be (string, string) or (number, number), but found (' + lt.kind + ', ' + rt.kind + ') instead.');
                }
            }
            if (this.collator && !isOrderComparison && this.hasUntypedArgument) {
                var lt$1 = typeOf(lhs);
                var rt$1 = typeOf(rhs);
                if (lt$1.kind !== 'string' || rt$1.kind !== 'string') {
                    return compareBasic(ctx, lhs, rhs);
                }
            }
            return this.collator ? compareWithCollator(ctx, lhs, rhs, this.collator.evaluate(ctx)) : compareBasic(ctx, lhs, rhs);
        };
        Comparison.prototype.eachChild = function eachChild(fn) {
            fn(this.lhs);
            fn(this.rhs);
            if (this.collator) {
                fn(this.collator);
            }
        };
        Comparison.prototype.outputDefined = function outputDefined() {
            return true;
        };
        Comparison.prototype.serialize = function serialize() {
            var serialized = [op];
            this.eachChild(function (child) {
                serialized.push(child.serialize());
            });
            return serialized;
        };
        return Comparison;
    }();
}
var Equals = makeComparison('==', eq, eqCollate);
var NotEquals = makeComparison('!=', neq, neqCollate);
var LessThan = makeComparison('<', lt, ltCollate);
var GreaterThan = makeComparison('>', gt, gtCollate);
var LessThanOrEqual = makeComparison('<=', lteq, lteqCollate);
var GreaterThanOrEqual = makeComparison('>=', gteq, gteqCollate);

var NumberFormat = function NumberFormat(number, locale, currency, minFractionDigits, maxFractionDigits) {
    this.type = StringType;
    this.number = number;
    this.locale = locale;
    this.currency = currency;
    this.minFractionDigits = minFractionDigits;
    this.maxFractionDigits = maxFractionDigits;
};
NumberFormat.parse = function parse(args, context) {
    if (args.length !== 3) {
        return context.error('Expected two arguments.');
    }
    var number = context.parse(args[1], 1, NumberType);
    if (!number) {
        return null;
    }
    var options = args[2];
    if ((typeof options === "undefined" ? "undefined" : _typeof(options)) !== 'object' || Array.isArray(options)) {
        return context.error('NumberFormat options argument must be an object.');
    }
    var locale = null;
    if (options['locale']) {
        locale = context.parse(options['locale'], 1, StringType);
        if (!locale) {
            return null;
        }
    }
    var currency = null;
    if (options['currency']) {
        currency = context.parse(options['currency'], 1, StringType);
        if (!currency) {
            return null;
        }
    }
    var minFractionDigits = null;
    if (options['min-fraction-digits']) {
        minFractionDigits = context.parse(options['min-fraction-digits'], 1, NumberType);
        if (!minFractionDigits) {
            return null;
        }
    }
    var maxFractionDigits = null;
    if (options['max-fraction-digits']) {
        maxFractionDigits = context.parse(options['max-fraction-digits'], 1, NumberType);
        if (!maxFractionDigits) {
            return null;
        }
    }
    return new NumberFormat(number, locale, currency, minFractionDigits, maxFractionDigits);
};
NumberFormat.prototype.evaluate = function evaluate(ctx) {
    return new Intl.NumberFormat(this.locale ? this.locale.evaluate(ctx) : [], {
        style: this.currency ? 'currency' : 'decimal',
        currency: this.currency ? this.currency.evaluate(ctx) : undefined,
        minimumFractionDigits: this.minFractionDigits ? this.minFractionDigits.evaluate(ctx) : undefined,
        maximumFractionDigits: this.maxFractionDigits ? this.maxFractionDigits.evaluate(ctx) : undefined
    }).format(this.number.evaluate(ctx));
};
NumberFormat.prototype.eachChild = function eachChild(fn) {
    fn(this.number);
    if (this.locale) {
        fn(this.locale);
    }
    if (this.currency) {
        fn(this.currency);
    }
    if (this.minFractionDigits) {
        fn(this.minFractionDigits);
    }
    if (this.maxFractionDigits) {
        fn(this.maxFractionDigits);
    }
};
NumberFormat.prototype.outputDefined = function outputDefined() {
    return false;
};
NumberFormat.prototype.serialize = function serialize() {
    var options = {};
    if (this.locale) {
        options['locale'] = this.locale.serialize();
    }
    if (this.currency) {
        options['currency'] = this.currency.serialize();
    }
    if (this.minFractionDigits) {
        options['min-fraction-digits'] = this.minFractionDigits.serialize();
    }
    if (this.maxFractionDigits) {
        options['max-fraction-digits'] = this.maxFractionDigits.serialize();
    }
    return ['number-format', this.number.serialize(), options];
};

var Length = function Length(input) {
    this.type = NumberType;
    this.input = input;
};
Length.parse = function parse(args, context) {
    if (args.length !== 2) {
        return context.error('Expected 1 argument, but found ' + (args.length - 1) + ' instead.');
    }
    var input = context.parse(args[1], 1);
    if (!input) {
        return null;
    }
    if (input.type.kind !== 'array' && input.type.kind !== 'string' && input.type.kind !== 'value') {
        return context.error('Expected argument of type string or array, but found ' + toString(input.type) + ' instead.');
    }
    return new Length(input);
};
Length.prototype.evaluate = function evaluate(ctx) {
    var input = this.input.evaluate(ctx);
    if (typeof input === 'string') {
        return input.length;
    } else if (Array.isArray(input)) {
        return input.length;
    } else {
        throw new RuntimeError('Expected value to be of type string or array, but found ' + toString(typeOf(input)) + ' instead.');
    }
};
Length.prototype.eachChild = function eachChild(fn) {
    fn(this.input);
};
Length.prototype.outputDefined = function outputDefined() {
    return false;
};
Length.prototype.serialize = function serialize() {
    var serialized = ['length'];
    this.eachChild(function (child) {
        serialized.push(child.serialize());
    });
    return serialized;
};

var expressions = {
    '==': Equals,
    '!=': NotEquals,
    '>': GreaterThan,
    '<': LessThan,
    '>=': GreaterThanOrEqual,
    '<=': LessThanOrEqual,
    'array': Assertion,
    'at': At,
    'boolean': Assertion,
    'case': Case,
    'coalesce': Coalesce,
    'collator': CollatorExpression,
    'format': FormatExpression,
    'image': ImageExpression,
    'in': In,
    'index-of': IndexOf,
    'interpolate': Interpolate,
    'interpolate-hcl': Interpolate,
    'interpolate-lab': Interpolate,
    'length': Length,
    'let': Let,
    'literal': Literal,
    'match': Match,
    'number': Assertion,
    'number-format': NumberFormat,
    'object': Assertion,
    'slice': Slice,
    'step': Step,
    'string': Assertion,
    'to-boolean': Coercion,
    'to-color': Coercion,
    'to-number': Coercion,
    'to-string': Coercion,
    'var': Var,
    'within': Within
};
function rgba(ctx, ref) {
    var r = ref[0];
    var g = ref[1];
    var b = ref[2];
    var a = ref[3];
    r = r.evaluate(ctx);
    g = g.evaluate(ctx);
    b = b.evaluate(ctx);
    var alpha = a ? a.evaluate(ctx) : 1;
    var error = validateRGBA(r, g, b, alpha);
    if (error) {
        throw new RuntimeError(error);
    }
    return new Color(r / 255 * alpha, g / 255 * alpha, b / 255 * alpha, alpha);
}
function has(key, obj) {
    return key in obj;
}
function get(key, obj) {
    var v = obj[key];
    return typeof v === 'undefined' ? null : v;
}
function binarySearch(v, a, i, j) {
    while (i <= j) {
        var m = i + j >> 1;
        if (a[m] === v) {
            return true;
        }
        if (a[m] > v) {
            j = m - 1;
        } else {
            i = m + 1;
        }
    }
    return false;
}
function varargs(type) {
    return { type: type };
}
CompoundExpression.register(expressions, {
    'error': [ErrorType, [StringType], function (ctx, ref) {
        var v = ref[0];
        throw new RuntimeError(v.evaluate(ctx));
    }],
    'typeof': [StringType, [ValueType], function (ctx, ref) {
        var v = ref[0];
        return toString(typeOf(v.evaluate(ctx)));
    }],
    'to-rgba': [array(NumberType, 4), [ColorType], function (ctx, ref) {
        var v = ref[0];
        return v.evaluate(ctx).toArray();
    }],
    'rgb': [ColorType, [NumberType, NumberType, NumberType], rgba],
    'rgba': [ColorType, [NumberType, NumberType, NumberType, NumberType], rgba],
    'has': {
        type: BooleanType,
        overloads: [[[StringType], function (ctx, ref) {
            var key = ref[0];
            return has(key.evaluate(ctx), ctx.properties());
        }], [[StringType, ObjectType], function (ctx, ref) {
            var key = ref[0];
            var obj = ref[1];
            return has(key.evaluate(ctx), obj.evaluate(ctx));
        }]]
    },
    'get': {
        type: ValueType,
        overloads: [[[StringType], function (ctx, ref) {
            var key = ref[0];
            return get(key.evaluate(ctx), ctx.properties());
        }], [[StringType, ObjectType], function (ctx, ref) {
            var key = ref[0];
            var obj = ref[1];
            return get(key.evaluate(ctx), obj.evaluate(ctx));
        }]]
    },
    'feature-state': [ValueType, [StringType], function (ctx, ref) {
        var key = ref[0];
        return get(key.evaluate(ctx), ctx.featureState || {});
    }],
    'properties': [ObjectType, [], function (ctx) {
        return ctx.properties();
    }],
    'geometry-type': [StringType, [], function (ctx) {
        return ctx.geometryType();
    }],
    'id': [ValueType, [], function (ctx) {
        return ctx.id();
    }],
    'zoom': [NumberType, [], function (ctx) {
        return ctx.globals.zoom;
    }],
    'heatmap-density': [NumberType, [], function (ctx) {
        return ctx.globals.heatmapDensity || 0;
    }],
    'line-progress': [NumberType, [], function (ctx) {
        return ctx.globals.lineProgress || 0;
    }],
    'accumulated': [ValueType, [], function (ctx) {
        return ctx.globals.accumulated === undefined ? null : ctx.globals.accumulated;
    }],
    '+': [NumberType, varargs(NumberType), function (ctx, args) {
        var result = 0;
        for (var i = 0, list = args; i < list.length; i += 1) {
            var arg = list[i];
            result += arg.evaluate(ctx);
        }
        return result;
    }],
    '*': [NumberType, varargs(NumberType), function (ctx, args) {
        var result = 1;
        for (var i = 0, list = args; i < list.length; i += 1) {
            var arg = list[i];
            result *= arg.evaluate(ctx);
        }
        return result;
    }],
    '-': {
        type: NumberType,
        overloads: [[[NumberType, NumberType], function (ctx, ref) {
            var a = ref[0];
            var b = ref[1];
            return a.evaluate(ctx) - b.evaluate(ctx);
        }], [[NumberType], function (ctx, ref) {
            var a = ref[0];
            return -a.evaluate(ctx);
        }]]
    },
    '/': [NumberType, [NumberType, NumberType], function (ctx, ref) {
        var a = ref[0];
        var b = ref[1];
        return a.evaluate(ctx) / b.evaluate(ctx);
    }],
    '%': [NumberType, [NumberType, NumberType], function (ctx, ref) {
        var a = ref[0];
        var b = ref[1];
        return a.evaluate(ctx) % b.evaluate(ctx);
    }],
    'ln2': [NumberType, [], function () {
        return Math.LN2;
    }],
    'pi': [NumberType, [], function () {
        return Math.PI;
    }],
    'e': [NumberType, [], function () {
        return Math.E;
    }],
    '^': [NumberType, [NumberType, NumberType], function (ctx, ref) {
        var b = ref[0];
        var e = ref[1];
        return Math.pow(b.evaluate(ctx), e.evaluate(ctx));
    }],
    'sqrt': [NumberType, [NumberType], function (ctx, ref) {
        var x = ref[0];
        return Math.sqrt(x.evaluate(ctx));
    }],
    'log10': [NumberType, [NumberType], function (ctx, ref) {
        var n = ref[0];
        return Math.log(n.evaluate(ctx)) / Math.LN10;
    }],
    'ln': [NumberType, [NumberType], function (ctx, ref) {
        var n = ref[0];
        return Math.log(n.evaluate(ctx));
    }],
    'log2': [NumberType, [NumberType], function (ctx, ref) {
        var n = ref[0];
        return Math.log(n.evaluate(ctx)) / Math.LN2;
    }],
    'sin': [NumberType, [NumberType], function (ctx, ref) {
        var n = ref[0];
        return Math.sin(n.evaluate(ctx));
    }],
    'cos': [NumberType, [NumberType], function (ctx, ref) {
        var n = ref[0];
        return Math.cos(n.evaluate(ctx));
    }],
    'tan': [NumberType, [NumberType], function (ctx, ref) {
        var n = ref[0];
        return Math.tan(n.evaluate(ctx));
    }],
    'asin': [NumberType, [NumberType], function (ctx, ref) {
        var n = ref[0];
        return Math.asin(n.evaluate(ctx));
    }],
    'acos': [NumberType, [NumberType], function (ctx, ref) {
        var n = ref[0];
        return Math.acos(n.evaluate(ctx));
    }],
    'atan': [NumberType, [NumberType], function (ctx, ref) {
        var n = ref[0];
        return Math.atan(n.evaluate(ctx));
    }],
    'min': [NumberType, varargs(NumberType), function (ctx, args) {
        return Math.min.apply(Math, args.map(function (arg) {
            return arg.evaluate(ctx);
        }));
    }],
    'max': [NumberType, varargs(NumberType), function (ctx, args) {
        return Math.max.apply(Math, args.map(function (arg) {
            return arg.evaluate(ctx);
        }));
    }],
    'abs': [NumberType, [NumberType], function (ctx, ref) {
        var n = ref[0];
        return Math.abs(n.evaluate(ctx));
    }],
    'round': [NumberType, [NumberType], function (ctx, ref) {
        var n = ref[0];
        var v = n.evaluate(ctx);
        return v < 0 ? -Math.round(-v) : Math.round(v);
    }],
    'floor': [NumberType, [NumberType], function (ctx, ref) {
        var n = ref[0];
        return Math.floor(n.evaluate(ctx));
    }],
    'ceil': [NumberType, [NumberType], function (ctx, ref) {
        var n = ref[0];
        return Math.ceil(n.evaluate(ctx));
    }],
    'filter-==': [BooleanType, [StringType, ValueType], function (ctx, ref) {
        var k = ref[0];
        var v = ref[1];
        return ctx.properties()[k.value] === v.value;
    }],
    'filter-id-==': [BooleanType, [ValueType], function (ctx, ref) {
        var v = ref[0];
        return ctx.id() === v.value;
    }],
    'filter-type-==': [BooleanType, [StringType], function (ctx, ref) {
        var v = ref[0];
        return ctx.geometryType() === v.value;
    }],
    'filter-<': [BooleanType, [StringType, ValueType], function (ctx, ref) {
        var k = ref[0];
        var v = ref[1];
        var a = ctx.properties()[k.value];
        var b = v.value;
        return (typeof a === "undefined" ? "undefined" : _typeof(a)) === (typeof b === "undefined" ? "undefined" : _typeof(b)) && a < b;
    }],
    'filter-id-<': [BooleanType, [ValueType], function (ctx, ref) {
        var v = ref[0];
        var a = ctx.id();
        var b = v.value;
        return (typeof a === "undefined" ? "undefined" : _typeof(a)) === (typeof b === "undefined" ? "undefined" : _typeof(b)) && a < b;
    }],
    'filter->': [BooleanType, [StringType, ValueType], function (ctx, ref) {
        var k = ref[0];
        var v = ref[1];
        var a = ctx.properties()[k.value];
        var b = v.value;
        return (typeof a === "undefined" ? "undefined" : _typeof(a)) === (typeof b === "undefined" ? "undefined" : _typeof(b)) && a > b;
    }],
    'filter-id->': [BooleanType, [ValueType], function (ctx, ref) {
        var v = ref[0];
        var a = ctx.id();
        var b = v.value;
        return (typeof a === "undefined" ? "undefined" : _typeof(a)) === (typeof b === "undefined" ? "undefined" : _typeof(b)) && a > b;
    }],
    'filter-<=': [BooleanType, [StringType, ValueType], function (ctx, ref) {
        var k = ref[0];
        var v = ref[1];
        var a = ctx.properties()[k.value];
        var b = v.value;
        return (typeof a === "undefined" ? "undefined" : _typeof(a)) === (typeof b === "undefined" ? "undefined" : _typeof(b)) && a <= b;
    }],
    'filter-id-<=': [BooleanType, [ValueType], function (ctx, ref) {
        var v = ref[0];
        var a = ctx.id();
        var b = v.value;
        return (typeof a === "undefined" ? "undefined" : _typeof(a)) === (typeof b === "undefined" ? "undefined" : _typeof(b)) && a <= b;
    }],
    'filter->=': [BooleanType, [StringType, ValueType], function (ctx, ref) {
        var k = ref[0];
        var v = ref[1];
        var a = ctx.properties()[k.value];
        var b = v.value;
        return (typeof a === "undefined" ? "undefined" : _typeof(a)) === (typeof b === "undefined" ? "undefined" : _typeof(b)) && a >= b;
    }],
    'filter-id->=': [BooleanType, [ValueType], function (ctx, ref) {
        var v = ref[0];
        var a = ctx.id();
        var b = v.value;
        return (typeof a === "undefined" ? "undefined" : _typeof(a)) === (typeof b === "undefined" ? "undefined" : _typeof(b)) && a >= b;
    }],
    'filter-has': [BooleanType, [ValueType], function (ctx, ref) {
        var k = ref[0];
        return k.value in ctx.properties();
    }],
    'filter-has-id': [BooleanType, [], function (ctx) {
        return ctx.id() !== null && ctx.id() !== undefined;
    }],
    'filter-type-in': [BooleanType, [array(StringType)], function (ctx, ref) {
        var v = ref[0];
        return v.value.indexOf(ctx.geometryType()) >= 0;
    }],
    'filter-id-in': [BooleanType, [array(ValueType)], function (ctx, ref) {
        var v = ref[0];
        return v.value.indexOf(ctx.id()) >= 0;
    }],
    'filter-in-small': [BooleanType, [StringType, array(ValueType)], function (ctx, ref) {
        var k = ref[0];
        var v = ref[1];
        return v.value.indexOf(ctx.properties()[k.value]) >= 0;
    }],
    'filter-in-large': [BooleanType, [StringType, array(ValueType)], function (ctx, ref) {
        var k = ref[0];
        var v = ref[1];
        return binarySearch(ctx.properties()[k.value], v.value, 0, v.value.length - 1);
    }],
    'all': {
        type: BooleanType,
        overloads: [[[BooleanType, BooleanType], function (ctx, ref) {
            var a = ref[0];
            var b = ref[1];
            return a.evaluate(ctx) && b.evaluate(ctx);
        }], [varargs(BooleanType), function (ctx, args) {
            for (var i = 0, list = args; i < list.length; i += 1) {
                var arg = list[i];
                if (!arg.evaluate(ctx)) {
                    return false;
                }
            }
            return true;
        }]]
    },
    'any': {
        type: BooleanType,
        overloads: [[[BooleanType, BooleanType], function (ctx, ref) {
            var a = ref[0];
            var b = ref[1];
            return a.evaluate(ctx) || b.evaluate(ctx);
        }], [varargs(BooleanType), function (ctx, args) {
            for (var i = 0, list = args; i < list.length; i += 1) {
                var arg = list[i];
                if (arg.evaluate(ctx)) {
                    return true;
                }
            }
            return false;
        }]]
    },
    '!': [BooleanType, [BooleanType], function (ctx, ref) {
        var b = ref[0];
        return !b.evaluate(ctx);
    }],
    'is-supported-script': [BooleanType, [StringType], function (ctx, ref) {
        var s = ref[0];
        var isSupportedScript = ctx.globals && ctx.globals.isSupportedScript;
        if (isSupportedScript) {
            return isSupportedScript(s.evaluate(ctx));
        }
        return true;
    }],
    'upcase': [StringType, [StringType], function (ctx, ref) {
        var s = ref[0];
        return s.evaluate(ctx).toUpperCase();
    }],
    'downcase': [StringType, [StringType], function (ctx, ref) {
        var s = ref[0];
        return s.evaluate(ctx).toLowerCase();
    }],
    'concat': [StringType, varargs(ValueType), function (ctx, args) {
        return args.map(function (arg) {
            return toString$1(arg.evaluate(ctx));
        }).join('');
    }],
    'resolved-locale': [StringType, [CollatorType], function (ctx, ref) {
        var collator = ref[0];
        return collator.evaluate(ctx).resolvedLocale();
    }]
});

function success(value) {
    return {
        result: 'success',
        value: value
    };
}
function error(value) {
    return {
        result: 'error',
        value: value
    };
}

function supportsPropertyExpression(spec) {
    return spec['property-type'] === 'data-driven' || spec['property-type'] === 'cross-faded-data-driven';
}
function supportsZoomExpression(spec) {
    return !!spec.expression && spec.expression.parameters.indexOf('zoom') > -1;
}
function supportsInterpolation(spec) {
    return !!spec.expression && spec.expression.interpolated;
}

function getType(val) {
    if (val instanceof Number) {
        return 'number';
    } else if (val instanceof String) {
        return 'string';
    } else if (val instanceof Boolean) {
        return 'boolean';
    } else if (Array.isArray(val)) {
        return 'array';
    } else if (val === null) {
        return 'null';
    } else {
        return typeof val === "undefined" ? "undefined" : _typeof(val);
    }
}

function isFunction$1(value) {
    return (typeof value === "undefined" ? "undefined" : _typeof(value)) === 'object' && value !== null && !Array.isArray(value);
}
function identityFunction(x) {
    return x;
}
function createFunction(parameters, propertySpec) {
    var isColor = propertySpec.type === 'color';
    var zoomAndFeatureDependent = parameters.stops && _typeof(parameters.stops[0][0]) === 'object';
    var featureDependent = zoomAndFeatureDependent || parameters.property !== undefined;
    var zoomDependent = zoomAndFeatureDependent || !featureDependent;
    var type = parameters.type || (supportsInterpolation(propertySpec) ? 'exponential' : 'interval');
    if (isColor) {
        parameters = extend({}, parameters);
        if (parameters.stops) {
            parameters.stops = parameters.stops.map(function (stop) {
                return [stop[0], Color.parse(stop[1])];
            });
        }
        if (parameters.default) {
            parameters.default = Color.parse(parameters.default);
        } else {
            parameters.default = Color.parse(propertySpec.default);
        }
    }
    if (parameters.colorSpace && parameters.colorSpace !== 'rgb' && !colorSpaces[parameters.colorSpace]) {
        throw new Error('Unknown color space: ' + parameters.colorSpace);
    }
    var innerFun;
    var hashedStops;
    var categoricalKeyType;
    if (type === 'exponential') {
        innerFun = evaluateExponentialFunction;
    } else if (type === 'interval') {
        innerFun = evaluateIntervalFunction;
    } else if (type === 'categorical') {
        innerFun = evaluateCategoricalFunction;
        hashedStops = Object.create(null);
        for (var i = 0, list = parameters.stops; i < list.length; i += 1) {
            var stop = list[i];
            hashedStops[stop[0]] = stop[1];
        }
        categoricalKeyType = _typeof(parameters.stops[0][0]);
    } else if (type === 'identity') {
        innerFun = evaluateIdentityFunction;
    } else {
        throw new Error('Unknown function type "' + type + '"');
    }
    if (zoomAndFeatureDependent) {
        var featureFunctions = {};
        var zoomStops = [];
        for (var s = 0; s < parameters.stops.length; s++) {
            var stop$1 = parameters.stops[s];
            var zoom = stop$1[0].zoom;
            if (featureFunctions[zoom] === undefined) {
                featureFunctions[zoom] = {
                    zoom: zoom,
                    type: parameters.type,
                    property: parameters.property,
                    default: parameters.default,
                    stops: []
                };
                zoomStops.push(zoom);
            }
            featureFunctions[zoom].stops.push([stop$1[0].value, stop$1[1]]);
        }
        var featureFunctionStops = [];
        for (var i$1 = 0, list$1 = zoomStops; i$1 < list$1.length; i$1 += 1) {
            var z = list$1[i$1];
            featureFunctionStops.push([featureFunctions[z].zoom, createFunction(featureFunctions[z], propertySpec)]);
        }
        var interpolationType = { name: 'linear' };
        return {
            kind: 'composite',
            interpolationType: interpolationType,
            interpolationFactor: Interpolate.interpolationFactor.bind(undefined, interpolationType),
            zoomStops: featureFunctionStops.map(function (s) {
                return s[0];
            }),
            evaluate: function evaluate(ref, properties) {
                var zoom = ref.zoom;
                return evaluateExponentialFunction({
                    stops: featureFunctionStops,
                    base: parameters.base
                }, propertySpec, zoom).evaluate(zoom, properties);
            }
        };
    } else if (zoomDependent) {
        var interpolationType$1 = type === 'exponential' ? {
            name: 'exponential',
            base: parameters.base !== undefined ? parameters.base : 1
        } : null;
        return {
            kind: 'camera',
            interpolationType: interpolationType$1,
            interpolationFactor: Interpolate.interpolationFactor.bind(undefined, interpolationType$1),
            zoomStops: parameters.stops.map(function (s) {
                return s[0];
            }),
            evaluate: function evaluate(ref) {
                var zoom = ref.zoom;
                return innerFun(parameters, propertySpec, zoom, hashedStops, categoricalKeyType);
            }
        };
    } else {
        return {
            kind: 'source',
            evaluate: function evaluate(_, feature) {
                var value = feature && feature.properties ? feature.properties[parameters.property] : undefined;
                if (value === undefined) {
                    return coalesce(parameters.default, propertySpec.default);
                }
                return innerFun(parameters, propertySpec, value, hashedStops, categoricalKeyType);
            }
        };
    }
}
function coalesce(a, b, c) {
    if (a !== undefined) {
        return a;
    }
    if (b !== undefined) {
        return b;
    }
    if (c !== undefined) {
        return c;
    }
}
function evaluateCategoricalFunction(parameters, propertySpec, input, hashedStops, keyType) {
    var evaluated = (typeof input === "undefined" ? "undefined" : _typeof(input)) === keyType ? hashedStops[input] : undefined;
    return coalesce(evaluated, parameters.default, propertySpec.default);
}
function evaluateIntervalFunction(parameters, propertySpec, input) {
    if (getType(input) !== 'number') {
        return coalesce(parameters.default, propertySpec.default);
    }
    var n = parameters.stops.length;
    if (n === 1) {
        return parameters.stops[0][1];
    }
    if (input <= parameters.stops[0][0]) {
        return parameters.stops[0][1];
    }
    if (input >= parameters.stops[n - 1][0]) {
        return parameters.stops[n - 1][1];
    }
    var index = findStopLessThanOrEqualTo(parameters.stops.map(function (stop) {
        return stop[0];
    }), input);
    return parameters.stops[index][1];
}
function evaluateExponentialFunction(parameters, propertySpec, input) {
    var base = parameters.base !== undefined ? parameters.base : 1;
    if (getType(input) !== 'number') {
        return coalesce(parameters.default, propertySpec.default);
    }
    var n = parameters.stops.length;
    if (n === 1) {
        return parameters.stops[0][1];
    }
    if (input <= parameters.stops[0][0]) {
        return parameters.stops[0][1];
    }
    if (input >= parameters.stops[n - 1][0]) {
        return parameters.stops[n - 1][1];
    }
    var index = findStopLessThanOrEqualTo(parameters.stops.map(function (stop) {
        return stop[0];
    }), input);
    var t = interpolationFactor(input, base, parameters.stops[index][0], parameters.stops[index + 1][0]);
    var outputLower = parameters.stops[index][1];
    var outputUpper = parameters.stops[index + 1][1];
    var interp = interpolate[propertySpec.type] || identityFunction;
    if (parameters.colorSpace && parameters.colorSpace !== 'rgb') {
        var colorspace = colorSpaces[parameters.colorSpace];
        interp = function interp(a, b) {
            return colorspace.reverse(colorspace.interpolate(colorspace.forward(a), colorspace.forward(b), t));
        };
    }
    if (typeof outputLower.evaluate === 'function') {
        return {
            evaluate: function evaluate() {
                var args = [],
                    len = arguments.length;
                while (len--) {
                    args[len] = arguments[len];
                }var evaluatedLower = outputLower.evaluate.apply(undefined, args);
                var evaluatedUpper = outputUpper.evaluate.apply(undefined, args);
                if (evaluatedLower === undefined || evaluatedUpper === undefined) {
                    return undefined;
                }
                return interp(evaluatedLower, evaluatedUpper, t);
            }
        };
    }
    return interp(outputLower, outputUpper, t);
}
function evaluateIdentityFunction(parameters, propertySpec, input) {
    if (propertySpec.type === 'color') {
        input = Color.parse(input);
    } else if (propertySpec.type === 'formatted') {
        input = Formatted.fromString(input.toString());
    } else if (propertySpec.type === 'resolvedImage') {
        input = ResolvedImage.fromString(input.toString());
    } else if (getType(input) !== propertySpec.type && (propertySpec.type !== 'enum' || !propertySpec.values[input])) {
        input = undefined;
    }
    return coalesce(input, parameters.default, propertySpec.default);
}
function interpolationFactor(input, base, lowerValue, upperValue) {
    var difference = upperValue - lowerValue;
    var progress = input - lowerValue;
    if (difference === 0) {
        return 0;
    } else if (base === 1) {
        return progress / difference;
    } else {
        return (Math.pow(base, progress) - 1) / (Math.pow(base, difference) - 1);
    }
}

var StyleExpression = function StyleExpression(expression, propertySpec) {
    this.expression = expression;
    this._warningHistory = {};
    this._evaluator = new EvaluationContext();
    this._defaultValue = propertySpec ? getDefaultValue(propertySpec) : null;
    this._enumValues = propertySpec && propertySpec.type === 'enum' ? propertySpec.values : null;
};
StyleExpression.prototype.evaluateWithoutErrorHandling = function evaluateWithoutErrorHandling(globals, feature, featureState, canonical, availableImages, formattedSection) {
    this._evaluator.globals = globals;
    this._evaluator.feature = feature;
    this._evaluator.featureState = featureState;
    this._evaluator.canonical = canonical;
    this._evaluator.availableImages = availableImages || null;
    this._evaluator.formattedSection = formattedSection;
    return this.expression.evaluate(this._evaluator);
};
StyleExpression.prototype.evaluate = function evaluate(globals, feature, featureState, canonical, availableImages, formattedSection) {
    this._evaluator.globals = globals;
    this._evaluator.feature = feature || null;
    this._evaluator.featureState = featureState || null;
    this._evaluator.canonical = canonical;
    this._evaluator.availableImages = availableImages || null;
    this._evaluator.formattedSection = formattedSection || null;
    try {
        var val = this.expression.evaluate(this._evaluator);
        if (val === null || val === undefined || typeof val === 'number' && val !== val) {
            return this._defaultValue;
        }
        if (this._enumValues && !(val in this._enumValues)) {
            throw new RuntimeError('Expected value to be one of ' + Object.keys(this._enumValues).map(function (v) {
                return JSON.stringify(v);
            }).join(', ') + ', but found ' + JSON.stringify(val) + ' instead.');
        }
        return val;
    } catch (e) {
        if (!this._warningHistory[e.message]) {
            this._warningHistory[e.message] = true;
            if (typeof console !== 'undefined') {
                console.warn(e.message);
            }
        }
        return this._defaultValue;
    }
};
function isExpression(expression) {
    return Array.isArray(expression) && expression.length > 0 && typeof expression[0] === 'string' && expression[0] in expressions;
}
function createExpression(expression, propertySpec) {
    var parser = new ParsingContext(expressions, [], propertySpec ? getExpectedType(propertySpec) : undefined);
    var parsed = parser.parse(expression, undefined, undefined, undefined, propertySpec && propertySpec.type === 'string' ? { typeAnnotation: 'coerce' } : undefined);
    if (!parsed) {
        return error(parser.errors);
    }
    return success(new StyleExpression(parsed, propertySpec));
}
var ZoomConstantExpression = function ZoomConstantExpression(kind, expression) {
    this.kind = kind;
    this._styleExpression = expression;
    this.isStateDependent = kind !== 'constant' && !isStateConstant(expression.expression);
};
ZoomConstantExpression.prototype.evaluateWithoutErrorHandling = function evaluateWithoutErrorHandling(globals, feature, featureState, canonical, availableImages, formattedSection) {
    return this._styleExpression.evaluateWithoutErrorHandling(globals, feature, featureState, canonical, availableImages, formattedSection);
};
ZoomConstantExpression.prototype.evaluate = function evaluate(globals, feature, featureState, canonical, availableImages, formattedSection) {
    return this._styleExpression.evaluate(globals, feature, featureState, canonical, availableImages, formattedSection);
};
var ZoomDependentExpression = function ZoomDependentExpression(kind, expression, zoomStops, interpolationType) {
    this.kind = kind;
    this.zoomStops = zoomStops;
    this._styleExpression = expression;
    this.isStateDependent = kind !== 'camera' && !isStateConstant(expression.expression);
    this.interpolationType = interpolationType;
};
ZoomDependentExpression.prototype.evaluateWithoutErrorHandling = function evaluateWithoutErrorHandling(globals, feature, featureState, canonical, availableImages, formattedSection) {
    return this._styleExpression.evaluateWithoutErrorHandling(globals, feature, featureState, canonical, availableImages, formattedSection);
};
ZoomDependentExpression.prototype.evaluate = function evaluate(globals, feature, featureState, canonical, availableImages, formattedSection) {
    return this._styleExpression.evaluate(globals, feature, featureState, canonical, availableImages, formattedSection);
};
ZoomDependentExpression.prototype.interpolationFactor = function interpolationFactor(input, lower, upper) {
    if (this.interpolationType) {
        return Interpolate.interpolationFactor(this.interpolationType, input, lower, upper);
    } else {
        return 0;
    }
};
function createPropertyExpression(expression, propertySpec) {
    expression = createExpression(expression, propertySpec);
    if (expression.result === 'error') {
        return expression;
    }
    var parsed = expression.value.expression;
    var isFeatureConstant$1 = isFeatureConstant(parsed);
    if (!isFeatureConstant$1 && !supportsPropertyExpression(propertySpec)) {
        return error([new ParsingError('', 'data expressions not supported')]);
    }
    var isZoomConstant = isGlobalPropertyConstant(parsed, ['zoom']);
    if (!isZoomConstant && !supportsZoomExpression(propertySpec)) {
        return error([new ParsingError('', 'zoom expressions not supported')]);
    }
    var zoomCurve = findZoomCurve(parsed);
    if (!zoomCurve && !isZoomConstant) {
        return error([new ParsingError('', '"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.')]);
    } else if (zoomCurve instanceof ParsingError) {
        return error([zoomCurve]);
    } else if (zoomCurve instanceof Interpolate && !supportsInterpolation(propertySpec)) {
        return error([new ParsingError('', '"interpolate" expressions cannot be used with this property')]);
    }
    if (!zoomCurve) {
        return success(isFeatureConstant$1 ? new ZoomConstantExpression('constant', expression.value) : new ZoomConstantExpression('source', expression.value));
    }
    var interpolationType = zoomCurve instanceof Interpolate ? zoomCurve.interpolation : undefined;
    return success(isFeatureConstant$1 ? new ZoomDependentExpression('camera', expression.value, zoomCurve.labels, interpolationType) : new ZoomDependentExpression('composite', expression.value, zoomCurve.labels, interpolationType));
}
var StylePropertyFunction = function StylePropertyFunction(parameters, specification) {
    this._parameters = parameters;
    this._specification = specification;
    extend(this, createFunction(this._parameters, this._specification));
};
StylePropertyFunction.deserialize = function deserialize(serialized) {
    return new StylePropertyFunction(serialized._parameters, serialized._specification);
};
StylePropertyFunction.serialize = function serialize(input) {
    return {
        _parameters: input._parameters,
        _specification: input._specification
    };
};
function normalizePropertyExpression(value, specification) {
    if (isFunction$1(value)) {
        return new StylePropertyFunction(value, specification);
    } else if (isExpression(value)) {
        var expression = createPropertyExpression(value, specification);
        if (expression.result === 'error') {
            throw new Error(expression.value.map(function (err) {
                return err.key + ': ' + err.message;
            }).join(', '));
        }
        return expression.value;
    } else {
        var constant = value;
        if (typeof value === 'string' && specification.type === 'color') {
            constant = Color.parse(value);
        }
        return {
            kind: 'constant',
            evaluate: function evaluate() {
                return constant;
            }
        };
    }
}
function findZoomCurve(expression) {
    var result = null;
    if (expression instanceof Let) {
        result = findZoomCurve(expression.result);
    } else if (expression instanceof Coalesce) {
        for (var i = 0, list = expression.args; i < list.length; i += 1) {
            var arg = list[i];
            result = findZoomCurve(arg);
            if (result) {
                break;
            }
        }
    } else if ((expression instanceof Step || expression instanceof Interpolate) && expression.input instanceof CompoundExpression && expression.input.name === 'zoom') {
        result = expression;
    }
    if (result instanceof ParsingError) {
        return result;
    }
    expression.eachChild(function (child) {
        var childResult = findZoomCurve(child);
        if (childResult instanceof ParsingError) {
            result = childResult;
        } else if (!result && childResult) {
            result = new ParsingError('', '"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.');
        } else if (result && childResult && result !== childResult) {
            result = new ParsingError('', 'Only one zoom-based "step" or "interpolate" subexpression may be used in an expression.');
        }
    });
    return result;
}
function getExpectedType(spec) {
    var types = {
        color: ColorType,
        string: StringType,
        number: NumberType,
        enum: StringType,
        boolean: BooleanType,
        formatted: FormattedType,
        resolvedImage: ResolvedImageType
    };
    if (spec.type === 'array') {
        return array(types[spec.value] || ValueType, spec.length);
    }
    return types[spec.type];
}
function getDefaultValue(spec) {
    if (spec.type === 'color' && isFunction$1(spec.default)) {
        return new Color(0, 0, 0, 0);
    } else if (spec.type === 'color') {
        return Color.parse(spec.default) || null;
    } else if (spec.default === undefined) {
        return null;
    } else {
        return spec.default;
    }
}

function convertLiteral(value) {
    return (typeof value === "undefined" ? "undefined" : _typeof(value)) === 'object' ? ['literal', value] : value;
}
function convertFunction(parameters, propertySpec) {
    var stops = parameters.stops;
    if (!stops) {
        return convertIdentityFunction(parameters, propertySpec);
    }
    var zoomAndFeatureDependent = stops && _typeof(stops[0][0]) === 'object';
    var featureDependent = zoomAndFeatureDependent || parameters.property !== undefined;
    var zoomDependent = zoomAndFeatureDependent || !featureDependent;
    stops = stops.map(function (stop) {
        if (!featureDependent && propertySpec.tokens && typeof stop[1] === 'string') {
            return [stop[0], convertTokenString(stop[1])];
        }
        return [stop[0], convertLiteral(stop[1])];
    });
    if (zoomAndFeatureDependent) {
        return convertZoomAndPropertyFunction(parameters, propertySpec, stops);
    } else if (zoomDependent) {
        return convertZoomFunction(parameters, propertySpec, stops);
    } else {
        return convertPropertyFunction(parameters, propertySpec, stops);
    }
}
function convertIdentityFunction(parameters, propertySpec) {
    var get = ['get', parameters.property];
    if (parameters.default === undefined) {
        return propertySpec.type === 'string' ? ['string', get] : get;
    } else if (propertySpec.type === 'enum') {
        return ['match', get, Object.keys(propertySpec.values), get, parameters.default];
    } else {
        var expression = [propertySpec.type === 'color' ? 'to-color' : propertySpec.type, get, convertLiteral(parameters.default)];
        if (propertySpec.type === 'array') {
            expression.splice(1, 0, propertySpec.value, propertySpec.length || null);
        }
        return expression;
    }
}
function getInterpolateOperator(parameters) {
    switch (parameters.colorSpace) {
        case 'hcl':
            return 'interpolate-hcl';
        case 'lab':
            return 'interpolate-lab';
        default:
            return 'interpolate';
    }
}
function convertZoomAndPropertyFunction(parameters, propertySpec, stops) {
    var featureFunctionParameters = {};
    var featureFunctionStops = {};
    var zoomStops = [];
    for (var s = 0; s < stops.length; s++) {
        var stop = stops[s];
        var zoom = stop[0].zoom;
        if (featureFunctionParameters[zoom] === undefined) {
            featureFunctionParameters[zoom] = {
                zoom: zoom,
                type: parameters.type,
                property: parameters.property,
                default: parameters.default
            };
            featureFunctionStops[zoom] = [];
            zoomStops.push(zoom);
        }
        featureFunctionStops[zoom].push([stop[0].value, stop[1]]);
    }
    var functionType = getFunctionType({}, propertySpec);
    if (functionType === 'exponential') {
        var expression = [getInterpolateOperator(parameters), ['linear'], ['zoom']];
        for (var i = 0, list = zoomStops; i < list.length; i += 1) {
            var z = list[i];
            var output = convertPropertyFunction(featureFunctionParameters[z], propertySpec, featureFunctionStops[z]);
            appendStopPair(expression, z, output, false);
        }
        return expression;
    } else {
        var expression$1 = ['step', ['zoom']];
        for (var i$1 = 0, list$1 = zoomStops; i$1 < list$1.length; i$1 += 1) {
            var z$1 = list$1[i$1];
            var output$1 = convertPropertyFunction(featureFunctionParameters[z$1], propertySpec, featureFunctionStops[z$1]);
            appendStopPair(expression$1, z$1, output$1, true);
        }
        fixupDegenerateStepCurve(expression$1);
        return expression$1;
    }
}
function coalesce$1(a, b) {
    if (a !== undefined) {
        return a;
    }
    if (b !== undefined) {
        return b;
    }
}
function convertPropertyFunction(parameters, propertySpec, stops) {
    var type = getFunctionType(parameters, propertySpec);
    var get = ['get', parameters.property];
    if (type === 'categorical' && typeof stops[0][0] === 'boolean') {
        var expression = ['case'];
        for (var i = 0, list = stops; i < list.length; i += 1) {
            var stop = list[i];
            expression.push(['==', get, stop[0]], stop[1]);
        }
        expression.push(convertLiteral(coalesce$1(parameters.default, propertySpec.default)));
        return expression;
    } else if (type === 'categorical') {
        var expression$1 = ['match', get];
        for (var i$1 = 0, list$1 = stops; i$1 < list$1.length; i$1 += 1) {
            var stop$1 = list$1[i$1];
            appendStopPair(expression$1, stop$1[0], stop$1[1], false);
        }
        expression$1.push(convertLiteral(coalesce$1(parameters.default, propertySpec.default)));
        return expression$1;
    } else if (type === 'interval') {
        var expression$2 = ['step', ['number', get]];
        for (var i$2 = 0, list$2 = stops; i$2 < list$2.length; i$2 += 1) {
            var stop$2 = list$2[i$2];
            appendStopPair(expression$2, stop$2[0], stop$2[1], true);
        }
        fixupDegenerateStepCurve(expression$2);
        return parameters.default === undefined ? expression$2 : ['case', ['==', ['typeof', get], 'number'], expression$2, convertLiteral(parameters.default)];
    } else if (type === 'exponential') {
        var base = parameters.base !== undefined ? parameters.base : 1;
        var expression$3 = [getInterpolateOperator(parameters), base === 1 ? ['linear'] : ['exponential', base], ['number', get]];
        for (var i$3 = 0, list$3 = stops; i$3 < list$3.length; i$3 += 1) {
            var stop$3 = list$3[i$3];
            appendStopPair(expression$3, stop$3[0], stop$3[1], false);
        }
        return parameters.default === undefined ? expression$3 : ['case', ['==', ['typeof', get], 'number'], expression$3, convertLiteral(parameters.default)];
    } else {
        throw new Error('Unknown property function type ' + type);
    }
}
function convertZoomFunction(parameters, propertySpec, stops, input) {
    if (input === void 0) input = ['zoom'];
    var type = getFunctionType(parameters, propertySpec);
    var expression;
    var isStep = false;
    if (type === 'interval') {
        expression = ['step', input];
        isStep = true;
    } else if (type === 'exponential') {
        var base = parameters.base !== undefined ? parameters.base : 1;
        expression = [getInterpolateOperator(parameters), base === 1 ? ['linear'] : ['exponential', base], input];
    } else {
        throw new Error('Unknown zoom function type "' + type + '"');
    }
    for (var i = 0, list = stops; i < list.length; i += 1) {
        var stop = list[i];
        appendStopPair(expression, stop[0], stop[1], isStep);
    }
    fixupDegenerateStepCurve(expression);
    return expression;
}
function fixupDegenerateStepCurve(expression) {
    if (expression[0] === 'step' && expression.length === 3) {
        expression.push(0);
        expression.push(expression[3]);
    }
}
function appendStopPair(curve, input, output, isStep) {
    if (curve.length > 3 && input === curve[curve.length - 2]) {
        return;
    }
    if (!(isStep && curve.length === 2)) {
        curve.push(input);
    }
    curve.push(output);
}
function getFunctionType(parameters, propertySpec) {
    if (parameters.type) {
        return parameters.type;
    } else {
        return propertySpec.expression.interpolated ? 'exponential' : 'interval';
    }
}
function convertTokenString(s) {
    var result = ['concat'];
    var re = /{([^{}]+)}/g;
    var pos = 0;
    for (var match = re.exec(s); match !== null; match = re.exec(s)) {
        var literal = s.slice(pos, re.lastIndex - match[0].length);
        pos = re.lastIndex;
        if (literal.length > 0) {
            result.push(literal);
        }
        result.push(['get', match[1]]);
    }
    if (result.length === 1) {
        return s;
    }
    if (pos < s.length) {
        result.push(s.slice(pos));
    } else if (result.length === 2) {
        return ['to-string', result[1]];
    }
    return result;
}

function isExpressionFilter(filter) {
    if (filter === true || filter === false) {
        return true;
    }
    if (!Array.isArray(filter) || filter.length === 0) {
        return false;
    }
    switch (filter[0]) {
        case 'has':
            return filter.length >= 2 && filter[1] !== '$id' && filter[1] !== '$type';
        case 'in':
            return filter.length >= 3 && (typeof filter[1] !== 'string' || Array.isArray(filter[2]));
        case '!in':
        case '!has':
        case 'none':
            return false;
        case '==':
        case '!=':
        case '>':
        case '>=':
        case '<':
        case '<=':
            return filter.length !== 3 || Array.isArray(filter[1]) || Array.isArray(filter[2]);
        case 'any':
        case 'all':
            for (var i = 0, list = filter.slice(1); i < list.length; i += 1) {
                var f = list[i];
                if (!isExpressionFilter(f) && typeof f !== 'boolean') {
                    return false;
                }
            }
            return true;
        default:
            return true;
    }
}
var filterSpec = {
    'type': 'boolean',
    'default': false,
    'transition': false,
    'property-type': 'data-driven',
    'expression': {
        'interpolated': false,
        'parameters': ['zoom', 'feature']
    }
};
function createFilter(filter) {
    if (filter === null || filter === undefined) {
        return {
            filter: function filter() {
                return true;
            },
            needGeometry: false
        };
    }
    if (!isExpressionFilter(filter)) {
        filter = convertFilter(filter);
    }
    var compiled = createExpression(filter, filterSpec);
    if (compiled.result === 'error') {
        throw new Error(compiled.value.map(function (err) {
            return err.key + ': ' + err.message;
        }).join(', '));
    } else {
        var needGeometry = Array.isArray(filter) && filter.length !== 0 && filter[0] === 'within';
        return {
            filter: function filter(globalProperties, feature, canonical) {
                return compiled.value.evaluate(globalProperties, feature, {}, canonical);
            },
            needGeometry: needGeometry
        };
    }
}
function compare(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}
function convertFilter(filter) {
    if (!filter) {
        return true;
    }
    var op = filter[0];
    if (filter.length <= 1) {
        return op !== 'any';
    }
    var converted = op === '==' ? convertComparisonOp(filter[1], filter[2], '==') : op === '!=' ? convertNegation(convertComparisonOp(filter[1], filter[2], '==')) : op === '<' || op === '>' || op === '<=' || op === '>=' ? convertComparisonOp(filter[1], filter[2], op) : op === 'any' ? convertDisjunctionOp(filter.slice(1)) : op === 'all' ? ['all'].concat(filter.slice(1).map(convertFilter)) : op === 'none' ? ['all'].concat(filter.slice(1).map(convertFilter).map(convertNegation)) : op === 'in' ? convertInOp(filter[1], filter.slice(2)) : op === '!in' ? convertNegation(convertInOp(filter[1], filter.slice(2))) : op === 'has' ? convertHasOp(filter[1]) : op === '!has' ? convertNegation(convertHasOp(filter[1])) : true;
    return converted;
}
function convertComparisonOp(property, value, op) {
    switch (property) {
        case '$type':
            return ['filter-type-' + op, value];
        case '$id':
            return ['filter-id-' + op, value];
        default:
            return ['filter-' + op, property, value];
    }
}
function convertDisjunctionOp(filters) {
    return ['any'].concat(filters.map(convertFilter));
}
function convertInOp(property, values) {
    if (values.length === 0) {
        return false;
    }
    switch (property) {
        case '$type':
            return ['filter-type-in', ['literal', values]];
        case '$id':
            return ['filter-id-in', ['literal', values]];
        default:
            if (values.length > 200 && !values.some(function (v) {
                return (typeof v === "undefined" ? "undefined" : _typeof(v)) !== _typeof(values[0]);
            })) {
                return ['filter-in-large', property, ['literal', values.sort(compare)]];
            } else {
                return ['filter-in-small', property, ['literal', values]];
            }
    }
}
function convertHasOp(property) {
    switch (property) {
        case '$type':
            return true;
        case '$id':
            return ['filter-has-id'];
        default:
            return ['filter-has', property];
    }
}
function convertNegation(filter) {
    return ['!', filter];
}

function convertFilter$1(filter) {
    return _convertFilter(filter, {});
}
function _convertFilter(filter, expectedTypes) {
    var ref$1;
    if (isExpressionFilter(filter)) {
        return filter;
    }
    if (!filter) {
        return true;
    }
    var op = filter[0];
    if (filter.length <= 1) {
        return op !== 'any';
    }
    var converted;
    if (op === '==' || op === '!=' || op === '<' || op === '>' || op === '<=' || op === '>=') {
        var ref = filter;
        var property = ref[1];
        var value = ref[2];
        converted = convertComparisonOp$1(property, value, op, expectedTypes);
    } else if (op === 'any') {
        var children = filter.slice(1).map(function (f) {
            var types = {};
            var child = _convertFilter(f, types);
            var typechecks = runtimeTypeChecks(types);
            return typechecks === true ? child : ['case', typechecks, child, false];
        });
        return ['any'].concat(children);
    } else if (op === 'all') {
        var children$1 = filter.slice(1).map(function (f) {
            return _convertFilter(f, expectedTypes);
        });
        return children$1.length > 1 ? ['all'].concat(children$1) : (ref$1 = []).concat.apply(ref$1, children$1);
    } else if (op === 'none') {
        return ['!', _convertFilter(['any'].concat(filter.slice(1)), {})];
    } else if (op === 'in') {
        converted = convertInOp$1(filter[1], filter.slice(2));
    } else if (op === '!in') {
        converted = convertInOp$1(filter[1], filter.slice(2), true);
    } else if (op === 'has') {
        converted = convertHasOp$1(filter[1]);
    } else if (op === '!has') {
        converted = ['!', convertHasOp$1(filter[1])];
    } else {
        converted = true;
    }
    return converted;
}
function runtimeTypeChecks(expectedTypes) {
    var conditions = [];
    for (var property in expectedTypes) {
        var get = property === '$id' ? ['id'] : ['get', property];
        conditions.push(['==', ['typeof', get], expectedTypes[property]]);
    }
    if (conditions.length === 0) {
        return true;
    }
    if (conditions.length === 1) {
        return conditions[0];
    }
    return ['all'].concat(conditions);
}
function convertComparisonOp$1(property, value, op, expectedTypes) {
    var get;
    if (property === '$type') {
        return [op, ['geometry-type'], value];
    } else if (property === '$id') {
        get = ['id'];
    } else {
        get = ['get', property];
    }
    if (expectedTypes && value !== null) {
        var type = typeof value === "undefined" ? "undefined" : _typeof(value);
        expectedTypes[property] = type;
    }
    if (op === '==' && property !== '$id' && value === null) {
        return ['all', ['has', property], ['==', get, null]];
    } else if (op === '!=' && property !== '$id' && value === null) {
        return ['any', ['!', ['has', property]], ['!=', get, null]];
    }
    return [op, get, value];
}
function convertInOp$1(property, values, negate) {
    if (negate === void 0) negate = false;
    if (values.length === 0) {
        return negate;
    }
    var get;
    if (property === '$type') {
        get = ['geometry-type'];
    } else if (property === '$id') {
        get = ['id'];
    } else {
        get = ['get', property];
    }
    var uniformTypes = true;
    var type = _typeof(values[0]);
    for (var i = 0, list = values; i < list.length; i += 1) {
        var value = list[i];
        if ((typeof value === "undefined" ? "undefined" : _typeof(value)) !== type) {
            uniformTypes = false;
            break;
        }
    }
    if (uniformTypes && (type === 'string' || type === 'number')) {
        var uniqueValues = values.sort().filter(function (v, i) {
            return i === 0 || values[i - 1] !== v;
        });
        return ['match', get, uniqueValues, !negate, negate];
    }
    return [negate ? 'all' : 'any'].concat(values.map(function (v) {
        return [negate ? '!=' : '==', get, v];
    }));
}
function convertHasOp$1(property) {
    if (property === '$type') {
        return true;
    } else if (property === '$id') {
        return ['!=', ['id'], null];
    } else {
        return ['has', property];
    }
}

function migrateToExpressions(style) {
    var converted = [];
    eachLayer(style, function (layer) {
        if (layer.filter) {
            layer.filter = convertFilter$1(layer.filter);
        }
    });
    eachProperty(style, {
        paint: true,
        layout: true
    }, function (ref) {
        var path = ref.path;
        var value = ref.value;
        var reference = ref.reference;
        var set = ref.set;
        if (isExpression(value)) {
            return;
        }
        if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === 'object' && !Array.isArray(value)) {
            set(convertFunction(value, reference));
            converted.push(path.join('.'));
        } else if (reference.tokens && typeof value === 'string') {
            set(convertTokenString(value));
        }
    });
    return style;
}

function migrate(style) {
    var migrated = false;
    if (style.version === 7) {
        style = migrateToV8(style);
        migrated = true;
    }
    if (style.version === 8) {
        migrated = migrateToExpressions(style);
        migrated = true;
    }
    if (!migrated) {
        throw new Error('cannot migrate from', style.version);
    }
    return style;
}

function composite(style) {
    var styleIDs = [];
    var sourceIDs = [];
    var compositedSourceLayers = [];
    for (var id in style.sources) {
        var source = style.sources[id];
        if (source.type !== 'vector') {
            continue;
        }
        var match = /^mapbox:\/\/(.*)/.exec(source.url);
        if (!match) {
            continue;
        }
        styleIDs.push(id);
        sourceIDs.push(match[1]);
    }
    if (styleIDs.length < 2) {
        return style;
    }
    styleIDs.forEach(function (id) {
        delete style.sources[id];
    });
    var compositeID = sourceIDs.join(',');
    style.sources[compositeID] = {
        'type': 'vector',
        'url': 'mapbox://' + compositeID
    };
    style.layers.forEach(function (layer) {
        if (styleIDs.indexOf(layer.source) >= 0) {
            layer.source = compositeID;
            if ('source-layer' in layer) {
                if (compositedSourceLayers.indexOf(layer['source-layer']) >= 0) {
                    throw new Error('Conflicting source layer names');
                } else {
                    compositedSourceLayers.push(layer['source-layer']);
                }
            }
        }
    });
    return style;
}

var refProperties = ['type', 'source', 'source-layer', 'minzoom', 'maxzoom', 'filter', 'layout'];

function deref(layer, parent) {
    var result = {};
    for (var k in layer) {
        if (k !== 'ref') {
            result[k] = layer[k];
        }
    }
    refProperties.forEach(function (k) {
        if (k in parent) {
            result[k] = parent[k];
        }
    });
    return result;
}
function derefLayers(layers) {
    layers = layers.slice();
    var map = Object.create(null);
    for (var i = 0; i < layers.length; i++) {
        map[layers[i].id] = layers[i];
    }
    for (var i$1 = 0; i$1 < layers.length; i$1++) {
        if ('ref' in layers[i$1]) {
            layers[i$1] = deref(layers[i$1], map[layers[i$1].ref]);
        }
    }
    return layers;
}

function deepEqual(a, b) {
    if (Array.isArray(a)) {
        if (!Array.isArray(b) || a.length !== b.length) {
            return false;
        }
        for (var i = 0; i < a.length; i++) {
            if (!deepEqual(a[i], b[i])) {
                return false;
            }
        }
        return true;
    }
    if ((typeof a === "undefined" ? "undefined" : _typeof(a)) === 'object' && a !== null && b !== null) {
        if (!((typeof b === "undefined" ? "undefined" : _typeof(b)) === 'object')) {
            return false;
        }
        var keys = Object.keys(a);
        if (keys.length !== Object.keys(b).length) {
            return false;
        }
        for (var key in a) {
            if (!deepEqual(a[key], b[key])) {
                return false;
            }
        }
        return true;
    }
    return a === b;
}

var operations = {
    setStyle: 'setStyle',
    addLayer: 'addLayer',
    removeLayer: 'removeLayer',
    setPaintProperty: 'setPaintProperty',
    setLayoutProperty: 'setLayoutProperty',
    setFilter: 'setFilter',
    addSource: 'addSource',
    removeSource: 'removeSource',
    setGeoJSONSourceData: 'setGeoJSONSourceData',
    setLayerZoomRange: 'setLayerZoomRange',
    setLayerProperty: 'setLayerProperty',
    setCenter: 'setCenter',
    setZoom: 'setZoom',
    setBearing: 'setBearing',
    setPitch: 'setPitch',
    setSprite: 'setSprite',
    setGlyphs: 'setGlyphs',
    setTransition: 'setTransition',
    setLight: 'setLight'
};
function addSource(sourceId, after, commands) {
    commands.push({
        command: operations.addSource,
        args: [sourceId, after[sourceId]]
    });
}
function removeSource(sourceId, commands, sourcesRemoved) {
    commands.push({
        command: operations.removeSource,
        args: [sourceId]
    });
    sourcesRemoved[sourceId] = true;
}
function updateSource(sourceId, after, commands, sourcesRemoved) {
    removeSource(sourceId, commands, sourcesRemoved);
    addSource(sourceId, after, commands);
}
function canUpdateGeoJSON(before, after, sourceId) {
    var prop;
    for (prop in before[sourceId]) {
        if (!before[sourceId].hasOwnProperty(prop)) {
            continue;
        }
        if (prop !== 'data' && !deepEqual(before[sourceId][prop], after[sourceId][prop])) {
            return false;
        }
    }
    for (prop in after[sourceId]) {
        if (!after[sourceId].hasOwnProperty(prop)) {
            continue;
        }
        if (prop !== 'data' && !deepEqual(before[sourceId][prop], after[sourceId][prop])) {
            return false;
        }
    }
    return true;
}
function diffSources(before, after, commands, sourcesRemoved) {
    before = before || {};
    after = after || {};
    var sourceId;
    for (sourceId in before) {
        if (!before.hasOwnProperty(sourceId)) {
            continue;
        }
        if (!after.hasOwnProperty(sourceId)) {
            removeSource(sourceId, commands, sourcesRemoved);
        }
    }
    for (sourceId in after) {
        if (!after.hasOwnProperty(sourceId)) {
            continue;
        }
        if (!before.hasOwnProperty(sourceId)) {
            addSource(sourceId, after, commands);
        } else if (!deepEqual(before[sourceId], after[sourceId])) {
            if (before[sourceId].type === 'geojson' && after[sourceId].type === 'geojson' && canUpdateGeoJSON(before, after, sourceId)) {
                commands.push({
                    command: operations.setGeoJSONSourceData,
                    args: [sourceId, after[sourceId].data]
                });
            } else {
                updateSource(sourceId, after, commands, sourcesRemoved);
            }
        }
    }
}
function diffLayerPropertyChanges(before, after, commands, layerId, klass, command) {
    before = before || {};
    after = after || {};
    var prop;
    for (prop in before) {
        if (!before.hasOwnProperty(prop)) {
            continue;
        }
        if (!deepEqual(before[prop], after[prop])) {
            commands.push({
                command: command,
                args: [layerId, prop, after[prop], klass]
            });
        }
    }
    for (prop in after) {
        if (!after.hasOwnProperty(prop) || before.hasOwnProperty(prop)) {
            continue;
        }
        if (!deepEqual(before[prop], after[prop])) {
            commands.push({
                command: command,
                args: [layerId, prop, after[prop], klass]
            });
        }
    }
}
function pluckId(layer) {
    return layer.id;
}
function indexById(group, layer) {
    group[layer.id] = layer;
    return group;
}
function diffLayers(before, after, commands) {
    before = before || [];
    after = after || [];
    var beforeOrder = before.map(pluckId);
    var afterOrder = after.map(pluckId);
    var beforeIndex = before.reduce(indexById, {});
    var afterIndex = after.reduce(indexById, {});
    var tracker = beforeOrder.slice();
    var clean = Object.create(null);
    var i, d, layerId, beforeLayer, afterLayer, insertBeforeLayerId, prop;
    for (i = 0, d = 0; i < beforeOrder.length; i++) {
        layerId = beforeOrder[i];
        if (!afterIndex.hasOwnProperty(layerId)) {
            commands.push({
                command: operations.removeLayer,
                args: [layerId]
            });
            tracker.splice(tracker.indexOf(layerId, d), 1);
        } else {
            d++;
        }
    }
    for (i = 0, d = 0; i < afterOrder.length; i++) {
        layerId = afterOrder[afterOrder.length - 1 - i];
        if (tracker[tracker.length - 1 - i] === layerId) {
            continue;
        }
        if (beforeIndex.hasOwnProperty(layerId)) {
            commands.push({
                command: operations.removeLayer,
                args: [layerId]
            });
            tracker.splice(tracker.lastIndexOf(layerId, tracker.length - d), 1);
        } else {
            d++;
        }
        insertBeforeLayerId = tracker[tracker.length - i];
        commands.push({
            command: operations.addLayer,
            args: [afterIndex[layerId], insertBeforeLayerId]
        });
        tracker.splice(tracker.length - i, 0, layerId);
        clean[layerId] = true;
    }
    for (i = 0; i < afterOrder.length; i++) {
        layerId = afterOrder[i];
        beforeLayer = beforeIndex[layerId];
        afterLayer = afterIndex[layerId];
        if (clean[layerId] || deepEqual(beforeLayer, afterLayer)) {
            continue;
        }
        if (!deepEqual(beforeLayer.source, afterLayer.source) || !deepEqual(beforeLayer['source-layer'], afterLayer['source-layer']) || !deepEqual(beforeLayer.type, afterLayer.type)) {
            commands.push({
                command: operations.removeLayer,
                args: [layerId]
            });
            insertBeforeLayerId = tracker[tracker.lastIndexOf(layerId) + 1];
            commands.push({
                command: operations.addLayer,
                args: [afterLayer, insertBeforeLayerId]
            });
            continue;
        }
        diffLayerPropertyChanges(beforeLayer.layout, afterLayer.layout, commands, layerId, null, operations.setLayoutProperty);
        diffLayerPropertyChanges(beforeLayer.paint, afterLayer.paint, commands, layerId, null, operations.setPaintProperty);
        if (!deepEqual(beforeLayer.filter, afterLayer.filter)) {
            commands.push({
                command: operations.setFilter,
                args: [layerId, afterLayer.filter]
            });
        }
        if (!deepEqual(beforeLayer.minzoom, afterLayer.minzoom) || !deepEqual(beforeLayer.maxzoom, afterLayer.maxzoom)) {
            commands.push({
                command: operations.setLayerZoomRange,
                args: [layerId, afterLayer.minzoom, afterLayer.maxzoom]
            });
        }
        for (prop in beforeLayer) {
            if (!beforeLayer.hasOwnProperty(prop)) {
                continue;
            }
            if (prop === 'layout' || prop === 'paint' || prop === 'filter' || prop === 'metadata' || prop === 'minzoom' || prop === 'maxzoom') {
                continue;
            }
            if (prop.indexOf('paint.') === 0) {
                diffLayerPropertyChanges(beforeLayer[prop], afterLayer[prop], commands, layerId, prop.slice(6), operations.setPaintProperty);
            } else if (!deepEqual(beforeLayer[prop], afterLayer[prop])) {
                commands.push({
                    command: operations.setLayerProperty,
                    args: [layerId, prop, afterLayer[prop]]
                });
            }
        }
        for (prop in afterLayer) {
            if (!afterLayer.hasOwnProperty(prop) || beforeLayer.hasOwnProperty(prop)) {
                continue;
            }
            if (prop === 'layout' || prop === 'paint' || prop === 'filter' || prop === 'metadata' || prop === 'minzoom' || prop === 'maxzoom') {
                continue;
            }
            if (prop.indexOf('paint.') === 0) {
                diffLayerPropertyChanges(beforeLayer[prop], afterLayer[prop], commands, layerId, prop.slice(6), operations.setPaintProperty);
            } else if (!deepEqual(beforeLayer[prop], afterLayer[prop])) {
                commands.push({
                    command: operations.setLayerProperty,
                    args: [layerId, prop, afterLayer[prop]]
                });
            }
        }
    }
}
function diffStyles(before, after) {
    if (!before) {
        return [{
            command: operations.setStyle,
            args: [after]
        }];
    }
    var commands = [];
    try {
        if (!deepEqual(before.version, after.version)) {
            return [{
                command: operations.setStyle,
                args: [after]
            }];
        }
        if (!deepEqual(before.center, after.center)) {
            commands.push({
                command: operations.setCenter,
                args: [after.center]
            });
        }
        if (!deepEqual(before.zoom, after.zoom)) {
            commands.push({
                command: operations.setZoom,
                args: [after.zoom]
            });
        }
        if (!deepEqual(before.bearing, after.bearing)) {
            commands.push({
                command: operations.setBearing,
                args: [after.bearing]
            });
        }
        if (!deepEqual(before.pitch, after.pitch)) {
            commands.push({
                command: operations.setPitch,
                args: [after.pitch]
            });
        }
        if (!deepEqual(before.sprite, after.sprite)) {
            commands.push({
                command: operations.setSprite,
                args: [after.sprite]
            });
        }
        if (!deepEqual(before.glyphs, after.glyphs)) {
            commands.push({
                command: operations.setGlyphs,
                args: [after.glyphs]
            });
        }
        if (!deepEqual(before.transition, after.transition)) {
            commands.push({
                command: operations.setTransition,
                args: [after.transition]
            });
        }
        if (!deepEqual(before.light, after.light)) {
            commands.push({
                command: operations.setLight,
                args: [after.light]
            });
        }
        var sourcesRemoved = {};
        var removeOrAddSourceCommands = [];
        diffSources(before.sources, after.sources, removeOrAddSourceCommands, sourcesRemoved);
        var beforeLayers = [];
        if (before.layers) {
            before.layers.forEach(function (layer) {
                if (sourcesRemoved[layer.source]) {
                    commands.push({
                        command: operations.removeLayer,
                        args: [layer.id]
                    });
                } else {
                    beforeLayers.push(layer);
                }
            });
        }
        commands = commands.concat(removeOrAddSourceCommands);
        diffLayers(beforeLayers, after.layers, commands);
    } catch (e) {
        console.warn('Unable to compute style diff:', e);
        commands = [{
            command: operations.setStyle,
            args: [after]
        }];
    }
    return commands;
}

var ValidationError = function ValidationError(key, value, message, identifier) {
    this.message = (key ? key + ': ' : '') + message;
    if (identifier) {
        this.identifier = identifier;
    }
    if (value !== null && value !== undefined && value.__line__) {
        this.line = value.__line__;
    }
};

var ParsingError$1 = function ParsingError(error) {
    this.error = error;
    this.message = error.message;
    var match = error.message.match(/line (\d+)/);
    this.line = match ? parseInt(match[1], 10) : 0;
};

function validateConstants(options) {
    var key = options.key;
    var constants = options.value;
    if (constants) {
        return [new ValidationError(key, constants, 'constants have been deprecated as of v8')];
    } else {
        return [];
    }
}

function unbundle(value) {
    if (value instanceof Number || value instanceof String || value instanceof Boolean) {
        return value.valueOf();
    } else {
        return value;
    }
}
function deepUnbundle(value) {
    if (Array.isArray(value)) {
        return value.map(deepUnbundle);
    } else if (value instanceof Object && !(value instanceof Number || value instanceof String || value instanceof Boolean)) {
        var unbundledValue = {};
        for (var key in value) {
            unbundledValue[key] = deepUnbundle(value[key]);
        }
        return unbundledValue;
    }
    return unbundle(value);
}

function validateObject(options) {
    var key = options.key;
    var object = options.value;
    var elementSpecs = options.valueSpec || {};
    var elementValidators = options.objectElementValidators || {};
    var style = options.style;
    var styleSpec = options.styleSpec;
    var errors = [];
    var type = getType(object);
    if (type !== 'object') {
        return [new ValidationError(key, object, 'object expected, ' + type + ' found')];
    }
    for (var objectKey in object) {
        var elementSpecKey = objectKey.split('.')[0];
        var elementSpec = elementSpecs[elementSpecKey] || elementSpecs['*'];
        var validateElement = void 0;
        if (elementValidators[elementSpecKey]) {
            validateElement = elementValidators[elementSpecKey];
        } else if (elementSpecs[elementSpecKey]) {
            validateElement = validate;
        } else if (elementValidators['*']) {
            validateElement = elementValidators['*'];
        } else if (elementSpecs['*']) {
            validateElement = validate;
        } else {
            errors.push(new ValidationError(key, object[objectKey], 'unknown property "' + objectKey + '"'));
            continue;
        }
        errors = errors.concat(validateElement({
            key: (key ? key + '.' : key) + objectKey,
            value: object[objectKey],
            valueSpec: elementSpec,
            style: style,
            styleSpec: styleSpec,
            object: object,
            objectKey: objectKey
        }, object));
    }
    for (var elementSpecKey$1 in elementSpecs) {
        if (elementValidators[elementSpecKey$1]) {
            continue;
        }
        if (elementSpecs[elementSpecKey$1].required && elementSpecs[elementSpecKey$1]['default'] === undefined && object[elementSpecKey$1] === undefined) {
            errors.push(new ValidationError(key, object, 'missing required property "' + elementSpecKey$1 + '"'));
        }
    }
    return errors;
}

function validateArray(options) {
    var array = options.value;
    var arraySpec = options.valueSpec;
    var style = options.style;
    var styleSpec = options.styleSpec;
    var key = options.key;
    var validateArrayElement = options.arrayElementValidator || validate;
    if (getType(array) !== 'array') {
        return [new ValidationError(key, array, 'array expected, ' + getType(array) + ' found')];
    }
    if (arraySpec.length && array.length !== arraySpec.length) {
        return [new ValidationError(key, array, 'array length ' + arraySpec.length + ' expected, length ' + array.length + ' found')];
    }
    if (arraySpec['min-length'] && array.length < arraySpec['min-length']) {
        return [new ValidationError(key, array, 'array length at least ' + arraySpec['min-length'] + ' expected, length ' + array.length + ' found')];
    }
    var arrayElementSpec = {
        'type': arraySpec.value,
        'values': arraySpec.values
    };
    if (styleSpec.$version < 7) {
        arrayElementSpec.function = arraySpec.function;
    }
    if (getType(arraySpec.value) === 'object') {
        arrayElementSpec = arraySpec.value;
    }
    var errors = [];
    for (var i = 0; i < array.length; i++) {
        errors = errors.concat(validateArrayElement({
            array: array,
            arrayIndex: i,
            value: array[i],
            valueSpec: arrayElementSpec,
            style: style,
            styleSpec: styleSpec,
            key: key + '[' + i + ']'
        }));
    }
    return errors;
}

function validateNumber(options) {
    var key = options.key;
    var value = options.value;
    var valueSpec = options.valueSpec;
    var type = getType(value);
    if (type === 'number' && value !== value) {
        type = 'NaN';
    }
    if (type !== 'number') {
        return [new ValidationError(key, value, 'number expected, ' + type + ' found')];
    }
    if ('minimum' in valueSpec && value < valueSpec.minimum) {
        return [new ValidationError(key, value, value + ' is less than the minimum value ' + valueSpec.minimum)];
    }
    if ('maximum' in valueSpec && value > valueSpec.maximum) {
        return [new ValidationError(key, value, value + ' is greater than the maximum value ' + valueSpec.maximum)];
    }
    return [];
}

function validateFunction(options) {
    var functionValueSpec = options.valueSpec;
    var functionType = unbundle(options.value.type);
    var stopKeyType;
    var stopDomainValues = {};
    var previousStopDomainValue;
    var previousStopDomainZoom;
    var isZoomFunction = functionType !== 'categorical' && options.value.property === undefined;
    var isPropertyFunction = !isZoomFunction;
    var isZoomAndPropertyFunction = getType(options.value.stops) === 'array' && getType(options.value.stops[0]) === 'array' && getType(options.value.stops[0][0]) === 'object';
    var errors = validateObject({
        key: options.key,
        value: options.value,
        valueSpec: options.styleSpec.function,
        style: options.style,
        styleSpec: options.styleSpec,
        objectElementValidators: {
            stops: validateFunctionStops,
            default: validateFunctionDefault
        }
    });
    if (functionType === 'identity' && isZoomFunction) {
        errors.push(new ValidationError(options.key, options.value, 'missing required property "property"'));
    }
    if (functionType !== 'identity' && !options.value.stops) {
        errors.push(new ValidationError(options.key, options.value, 'missing required property "stops"'));
    }
    if (functionType === 'exponential' && options.valueSpec.expression && !supportsInterpolation(options.valueSpec)) {
        errors.push(new ValidationError(options.key, options.value, 'exponential functions not supported'));
    }
    if (options.styleSpec.$version >= 8) {
        if (isPropertyFunction && !supportsPropertyExpression(options.valueSpec)) {
            errors.push(new ValidationError(options.key, options.value, 'property functions not supported'));
        } else if (isZoomFunction && !supportsZoomExpression(options.valueSpec)) {
            errors.push(new ValidationError(options.key, options.value, 'zoom functions not supported'));
        }
    }
    if ((functionType === 'categorical' || isZoomAndPropertyFunction) && options.value.property === undefined) {
        errors.push(new ValidationError(options.key, options.value, '"property" property is required'));
    }
    return errors;
    function validateFunctionStops(options) {
        if (functionType === 'identity') {
            return [new ValidationError(options.key, options.value, 'identity function may not have a "stops" property')];
        }
        var errors = [];
        var value = options.value;
        errors = errors.concat(validateArray({
            key: options.key,
            value: value,
            valueSpec: options.valueSpec,
            style: options.style,
            styleSpec: options.styleSpec,
            arrayElementValidator: validateFunctionStop
        }));
        if (getType(value) === 'array' && value.length === 0) {
            errors.push(new ValidationError(options.key, value, 'array must have at least one stop'));
        }
        return errors;
    }
    function validateFunctionStop(options) {
        var errors = [];
        var value = options.value;
        var key = options.key;
        if (getType(value) !== 'array') {
            return [new ValidationError(key, value, 'array expected, ' + getType(value) + ' found')];
        }
        if (value.length !== 2) {
            return [new ValidationError(key, value, 'array length 2 expected, length ' + value.length + ' found')];
        }
        if (isZoomAndPropertyFunction) {
            if (getType(value[0]) !== 'object') {
                return [new ValidationError(key, value, 'object expected, ' + getType(value[0]) + ' found')];
            }
            if (value[0].zoom === undefined) {
                return [new ValidationError(key, value, 'object stop key must have zoom')];
            }
            if (value[0].value === undefined) {
                return [new ValidationError(key, value, 'object stop key must have value')];
            }
            if (previousStopDomainZoom && previousStopDomainZoom > unbundle(value[0].zoom)) {
                return [new ValidationError(key, value[0].zoom, 'stop zoom values must appear in ascending order')];
            }
            if (unbundle(value[0].zoom) !== previousStopDomainZoom) {
                previousStopDomainZoom = unbundle(value[0].zoom);
                previousStopDomainValue = undefined;
                stopDomainValues = {};
            }
            errors = errors.concat(validateObject({
                key: key + '[0]',
                value: value[0],
                valueSpec: { zoom: {} },
                style: options.style,
                styleSpec: options.styleSpec,
                objectElementValidators: {
                    zoom: validateNumber,
                    value: validateStopDomainValue
                }
            }));
        } else {
            errors = errors.concat(validateStopDomainValue({
                key: key + '[0]',
                value: value[0],
                valueSpec: {},
                style: options.style,
                styleSpec: options.styleSpec
            }, value));
        }
        if (isExpression(deepUnbundle(value[1]))) {
            return errors.concat([new ValidationError(key + '[1]', value[1], 'expressions are not allowed in function stops.')]);
        }
        return errors.concat(validate({
            key: key + '[1]',
            value: value[1],
            valueSpec: functionValueSpec,
            style: options.style,
            styleSpec: options.styleSpec
        }));
    }
    function validateStopDomainValue(options, stop) {
        var type = getType(options.value);
        var value = unbundle(options.value);
        var reportValue = options.value !== null ? options.value : stop;
        if (!stopKeyType) {
            stopKeyType = type;
        } else if (type !== stopKeyType) {
            return [new ValidationError(options.key, reportValue, type + ' stop domain type must match previous stop domain type ' + stopKeyType)];
        }
        if (type !== 'number' && type !== 'string' && type !== 'boolean') {
            return [new ValidationError(options.key, reportValue, 'stop domain value must be a number, string, or boolean')];
        }
        if (type !== 'number' && functionType !== 'categorical') {
            var message = 'number expected, ' + type + ' found';
            if (supportsPropertyExpression(functionValueSpec) && functionType === undefined) {
                message += '\nIf you intended to use a categorical function, specify `"type": "categorical"`.';
            }
            return [new ValidationError(options.key, reportValue, message)];
        }
        if (functionType === 'categorical' && type === 'number' && (!isFinite(value) || Math.floor(value) !== value)) {
            return [new ValidationError(options.key, reportValue, 'integer expected, found ' + value)];
        }
        if (functionType !== 'categorical' && type === 'number' && previousStopDomainValue !== undefined && value < previousStopDomainValue) {
            return [new ValidationError(options.key, reportValue, 'stop domain values must appear in ascending order')];
        } else {
            previousStopDomainValue = value;
        }
        if (functionType === 'categorical' && value in stopDomainValues) {
            return [new ValidationError(options.key, reportValue, 'stop domain values must be unique')];
        } else {
            stopDomainValues[value] = true;
        }
        return [];
    }
    function validateFunctionDefault(options) {
        return validate({
            key: options.key,
            value: options.value,
            valueSpec: functionValueSpec,
            style: options.style,
            styleSpec: options.styleSpec
        });
    }
}

function validateExpression(options) {
    var expression = (options.expressionContext === 'property' ? createPropertyExpression : createExpression)(deepUnbundle(options.value), options.valueSpec);
    if (expression.result === 'error') {
        return expression.value.map(function (error) {
            return new ValidationError('' + options.key + error.key, options.value, error.message);
        });
    }
    var expressionObj = expression.value.expression || expression.value._styleExpression.expression;
    if (options.expressionContext === 'property' && options.propertyKey === 'text-font' && !expressionObj.outputDefined()) {
        return [new ValidationError(options.key, options.value, 'Invalid data expression for "' + options.propertyKey + '". Output values must be contained as literals within the expression.')];
    }
    if (options.expressionContext === 'property' && options.propertyType === 'layout' && !isStateConstant(expressionObj)) {
        return [new ValidationError(options.key, options.value, '"feature-state" data expressions are not supported with layout properties.')];
    }
    if (options.expressionContext === 'filter' && !isStateConstant(expressionObj)) {
        return [new ValidationError(options.key, options.value, '"feature-state" data expressions are not supported with filters.')];
    }
    if (options.expressionContext && options.expressionContext.indexOf('cluster') === 0) {
        if (!isGlobalPropertyConstant(expressionObj, ['zoom', 'feature-state'])) {
            return [new ValidationError(options.key, options.value, '"zoom" and "feature-state" expressions are not supported with cluster properties.')];
        }
        if (options.expressionContext === 'cluster-initial' && !isFeatureConstant(expressionObj)) {
            return [new ValidationError(options.key, options.value, 'Feature data expressions are not supported with initial expression part of cluster properties.')];
        }
    }
    return [];
}

function validateBoolean(options) {
    var value = options.value;
    var key = options.key;
    var type = getType(value);
    if (type !== 'boolean') {
        return [new ValidationError(key, value, 'boolean expected, ' + type + ' found')];
    }
    return [];
}

function validateColor(options) {
    var key = options.key;
    var value = options.value;
    var type = getType(value);
    if (type !== 'string') {
        return [new ValidationError(key, value, 'color expected, ' + type + ' found')];
    }
    if (csscolorparser_1(value) === null) {
        return [new ValidationError(key, value, 'color expected, "' + value + '" found')];
    }
    return [];
}

function validateEnum(options) {
    var key = options.key;
    var value = options.value;
    var valueSpec = options.valueSpec;
    var errors = [];
    if (Array.isArray(valueSpec.values)) {
        if (valueSpec.values.indexOf(unbundle(value)) === -1) {
            errors.push(new ValidationError(key, value, 'expected one of [' + valueSpec.values.join(', ') + '], ' + JSON.stringify(value) + ' found'));
        }
    } else {
        if (Object.keys(valueSpec.values).indexOf(unbundle(value)) === -1) {
            errors.push(new ValidationError(key, value, 'expected one of [' + Object.keys(valueSpec.values).join(', ') + '], ' + JSON.stringify(value) + ' found'));
        }
    }
    return errors;
}

function validateFilter(options) {
    if (isExpressionFilter(deepUnbundle(options.value))) {
        return validateExpression(extend({}, options, {
            expressionContext: 'filter',
            valueSpec: { value: 'boolean' }
        }));
    } else {
        return validateNonExpressionFilter(options);
    }
}
function validateNonExpressionFilter(options) {
    var value = options.value;
    var key = options.key;
    if (getType(value) !== 'array') {
        return [new ValidationError(key, value, 'array expected, ' + getType(value) + ' found')];
    }
    var styleSpec = options.styleSpec;
    var type;
    var errors = [];
    if (value.length < 1) {
        return [new ValidationError(key, value, 'filter array must have at least 1 element')];
    }
    errors = errors.concat(validateEnum({
        key: key + '[0]',
        value: value[0],
        valueSpec: styleSpec.filter_operator,
        style: options.style,
        styleSpec: options.styleSpec
    }));
    switch (unbundle(value[0])) {
        case '<':
        case '<=':
        case '>':
        case '>=':
            if (value.length >= 2 && unbundle(value[1]) === '$type') {
                errors.push(new ValidationError(key, value, '"$type" cannot be use with operator "' + value[0] + '"'));
            }
        case '==':
        case '!=':
            if (value.length !== 3) {
                errors.push(new ValidationError(key, value, 'filter array for operator "' + value[0] + '" must have 3 elements'));
            }
        case 'in':
        case '!in':
            if (value.length >= 2) {
                type = getType(value[1]);
                if (type !== 'string') {
                    errors.push(new ValidationError(key + '[1]', value[1], 'string expected, ' + type + ' found'));
                }
            }
            for (var i = 2; i < value.length; i++) {
                type = getType(value[i]);
                if (unbundle(value[1]) === '$type') {
                    errors = errors.concat(validateEnum({
                        key: key + '[' + i + ']',
                        value: value[i],
                        valueSpec: styleSpec.geometry_type,
                        style: options.style,
                        styleSpec: options.styleSpec
                    }));
                } else if (type !== 'string' && type !== 'number' && type !== 'boolean') {
                    errors.push(new ValidationError(key + '[' + i + ']', value[i], 'string, number, or boolean expected, ' + type + ' found'));
                }
            }
            break;
        case 'any':
        case 'all':
        case 'none':
            for (var i$1 = 1; i$1 < value.length; i$1++) {
                errors = errors.concat(validateNonExpressionFilter({
                    key: key + '[' + i$1 + ']',
                    value: value[i$1],
                    style: options.style,
                    styleSpec: options.styleSpec
                }));
            }
            break;
        case 'has':
        case '!has':
            type = getType(value[1]);
            if (value.length !== 2) {
                errors.push(new ValidationError(key, value, 'filter array for "' + value[0] + '" operator must have 2 elements'));
            } else if (type !== 'string') {
                errors.push(new ValidationError(key + '[1]', value[1], 'string expected, ' + type + ' found'));
            }
            break;
    }
    return errors;
}

function validateProperty(options, propertyType) {
    var key = options.key;
    var style = options.style;
    var styleSpec = options.styleSpec;
    var value = options.value;
    var propertyKey = options.objectKey;
    var layerSpec = styleSpec[propertyType + '_' + options.layerType];
    if (!layerSpec) {
        return [];
    }
    var transitionMatch = propertyKey.match(/^(.*)-transition$/);
    if (propertyType === 'paint' && transitionMatch && layerSpec[transitionMatch[1]] && layerSpec[transitionMatch[1]].transition) {
        return validate({
            key: key,
            value: value,
            valueSpec: styleSpec.transition,
            style: style,
            styleSpec: styleSpec
        });
    }
    var valueSpec = options.valueSpec || layerSpec[propertyKey];
    if (!valueSpec) {
        return [new ValidationError(key, value, 'unknown property "' + propertyKey + '"')];
    }
    var tokenMatch;
    if (getType(value) === 'string' && supportsPropertyExpression(valueSpec) && !valueSpec.tokens && (tokenMatch = /^{([^}]+)}$/.exec(value))) {
        return [new ValidationError(key, value, '"' + propertyKey + '" does not support interpolation syntax\n' + 'Use an identity property function instead: `{ "type": "identity", "property": ' + JSON.stringify(tokenMatch[1]) + ' }`.')];
    }
    var errors = [];
    if (options.layerType === 'symbol') {
        if (propertyKey === 'text-field' && style && !style.glyphs) {
            errors.push(new ValidationError(key, value, 'use of "text-field" requires a style "glyphs" property'));
        }
        if (propertyKey === 'text-font' && isFunction$1(deepUnbundle(value)) && unbundle(value.type) === 'identity') {
            errors.push(new ValidationError(key, value, '"text-font" does not support identity functions'));
        }
    }
    return errors.concat(validate({
        key: options.key,
        value: value,
        valueSpec: valueSpec,
        style: style,
        styleSpec: styleSpec,
        expressionContext: 'property',
        propertyType: propertyType,
        propertyKey: propertyKey
    }));
}

function validatePaintProperty(options) {
    return validateProperty(options, 'paint');
}

function validateLayoutProperty(options) {
    return validateProperty(options, 'layout');
}

function validateLayer(options) {
    var errors = [];
    var layer = options.value;
    var key = options.key;
    var style = options.style;
    var styleSpec = options.styleSpec;
    if (!layer.type && !layer.ref) {
        errors.push(new ValidationError(key, layer, 'either "type" or "ref" is required'));
    }
    var type = unbundle(layer.type);
    var ref = unbundle(layer.ref);
    if (layer.id) {
        var layerId = unbundle(layer.id);
        for (var i = 0; i < options.arrayIndex; i++) {
            var otherLayer = style.layers[i];
            if (unbundle(otherLayer.id) === layerId) {
                errors.push(new ValidationError(key, layer.id, 'duplicate layer id "' + layer.id + '", previously used at line ' + otherLayer.id.__line__));
            }
        }
    }
    if ('ref' in layer) {
        ['type', 'source', 'source-layer', 'filter', 'layout'].forEach(function (p) {
            if (p in layer) {
                errors.push(new ValidationError(key, layer[p], '"' + p + '" is prohibited for ref layers'));
            }
        });
        var parent;
        style.layers.forEach(function (layer) {
            if (unbundle(layer.id) === ref) {
                parent = layer;
            }
        });
        if (!parent) {
            errors.push(new ValidationError(key, layer.ref, 'ref layer "' + ref + '" not found'));
        } else if (parent.ref) {
            errors.push(new ValidationError(key, layer.ref, 'ref cannot reference another ref layer'));
        } else {
            type = unbundle(parent.type);
        }
    } else if (type !== 'background') {
        if (!layer.source) {
            errors.push(new ValidationError(key, layer, 'missing required property "source"'));
        } else {
            var source = style.sources && style.sources[layer.source];
            var sourceType = source && unbundle(source.type);
            if (!source) {
                errors.push(new ValidationError(key, layer.source, 'source "' + layer.source + '" not found'));
            } else if (sourceType === 'vector' && type === 'raster') {
                errors.push(new ValidationError(key, layer.source, 'layer "' + layer.id + '" requires a raster source'));
            } else if (sourceType === 'raster' && type !== 'raster') {
                errors.push(new ValidationError(key, layer.source, 'layer "' + layer.id + '" requires a vector source'));
            } else if (sourceType === 'vector' && !layer['source-layer']) {
                errors.push(new ValidationError(key, layer, 'layer "' + layer.id + '" must specify a "source-layer"'));
            } else if (sourceType === 'raster-dem' && type !== 'hillshade') {
                errors.push(new ValidationError(key, layer.source, 'raster-dem source can only be used with layer type \'hillshade\'.'));
            } else if (type === 'line' && layer.paint && layer.paint['line-gradient'] && (sourceType !== 'geojson' || !source.lineMetrics)) {
                errors.push(new ValidationError(key, layer, 'layer "' + layer.id + '" specifies a line-gradient, which requires a GeoJSON source with `lineMetrics` enabled.'));
            }
        }
    }
    errors = errors.concat(validateObject({
        key: key,
        value: layer,
        valueSpec: styleSpec.layer,
        style: options.style,
        styleSpec: options.styleSpec,
        objectElementValidators: {
            '*': function _() {
                return [];
            },
            type: function type() {
                return validate({
                    key: key + '.type',
                    value: layer.type,
                    valueSpec: styleSpec.layer.type,
                    style: options.style,
                    styleSpec: options.styleSpec,
                    object: layer,
                    objectKey: 'type'
                });
            },
            filter: validateFilter,
            layout: function layout(options) {
                return validateObject({
                    layer: layer,
                    key: options.key,
                    value: options.value,
                    style: options.style,
                    styleSpec: options.styleSpec,
                    objectElementValidators: {
                        '*': function _(options) {
                            return validateLayoutProperty(extend({ layerType: type }, options));
                        }
                    }
                });
            },
            paint: function paint(options) {
                return validateObject({
                    layer: layer,
                    key: options.key,
                    value: options.value,
                    style: options.style,
                    styleSpec: options.styleSpec,
                    objectElementValidators: {
                        '*': function _(options) {
                            return validatePaintProperty(extend({ layerType: type }, options));
                        }
                    }
                });
            }
        }
    }));
    return errors;
}

function validateString(options) {
    var value = options.value;
    var key = options.key;
    var type = getType(value);
    if (type !== 'string') {
        return [new ValidationError(key, value, 'string expected, ' + type + ' found')];
    }
    return [];
}

var objectElementValidators = { promoteId: validatePromoteId };
function validateSource(options) {
    var value = options.value;
    var key = options.key;
    var styleSpec = options.styleSpec;
    var style = options.style;
    if (!value.type) {
        return [new ValidationError(key, value, '"type" is required')];
    }
    var type = unbundle(value.type);
    var errors;
    switch (type) {
        case 'vector':
        case 'raster':
        case 'raster-dem':
            errors = validateObject({
                key: key,
                value: value,
                valueSpec: styleSpec['source_' + type.replace('-', '_')],
                style: options.style,
                styleSpec: styleSpec,
                objectElementValidators: objectElementValidators
            });
            return errors;
        case 'geojson':
            errors = validateObject({
                key: key,
                value: value,
                valueSpec: styleSpec.source_geojson,
                style: style,
                styleSpec: styleSpec,
                objectElementValidators: objectElementValidators
            });
            if (value.cluster) {
                for (var prop in value.clusterProperties) {
                    var ref = value.clusterProperties[prop];
                    var operator = ref[0];
                    var mapExpr = ref[1];
                    var reduceExpr = typeof operator === 'string' ? [operator, ['accumulated'], ['get', prop]] : operator;
                    errors.push.apply(errors, validateExpression({
                        key: key + '.' + prop + '.map',
                        value: mapExpr,
                        expressionContext: 'cluster-map'
                    }));
                    errors.push.apply(errors, validateExpression({
                        key: key + '.' + prop + '.reduce',
                        value: reduceExpr,
                        expressionContext: 'cluster-reduce'
                    }));
                }
            }
            return errors;
        case 'video':
            return validateObject({
                key: key,
                value: value,
                valueSpec: styleSpec.source_video,
                style: style,
                styleSpec: styleSpec
            });
        case 'image':
            return validateObject({
                key: key,
                value: value,
                valueSpec: styleSpec.source_image,
                style: style,
                styleSpec: styleSpec
            });
        case 'canvas':
            return [new ValidationError(key, null, 'Please use runtime APIs to add canvas sources, rather than including them in stylesheets.', 'source.canvas')];
        default:
            return validateEnum({
                key: key + '.type',
                value: value.type,
                valueSpec: {
                    values: ['vector', 'raster', 'raster-dem', 'geojson', 'video', 'image']
                },
                style: style,
                styleSpec: styleSpec
            });
    }
}
function validatePromoteId(ref) {
    var key = ref.key;
    var value = ref.value;
    if (getType(value) === 'string') {
        return validateString({
            key: key,
            value: value
        });
    } else {
        var errors = [];
        for (var prop in value) {
            errors.push.apply(errors, validateString({
                key: key + '.' + prop,
                value: value[prop]
            }));
        }
        return errors;
    }
}

function validateLight(options) {
    var light = options.value;
    var styleSpec = options.styleSpec;
    var lightSpec = styleSpec.light;
    var style = options.style;
    var errors = [];
    var rootType = getType(light);
    if (light === undefined) {
        return errors;
    } else if (rootType !== 'object') {
        errors = errors.concat([new ValidationError('light', light, 'object expected, ' + rootType + ' found')]);
        return errors;
    }
    for (var key in light) {
        var transitionMatch = key.match(/^(.*)-transition$/);
        if (transitionMatch && lightSpec[transitionMatch[1]] && lightSpec[transitionMatch[1]].transition) {
            errors = errors.concat(validate({
                key: key,
                value: light[key],
                valueSpec: styleSpec.transition,
                style: style,
                styleSpec: styleSpec
            }));
        } else if (lightSpec[key]) {
            errors = errors.concat(validate({
                key: key,
                value: light[key],
                valueSpec: lightSpec[key],
                style: style,
                styleSpec: styleSpec
            }));
        } else {
            errors = errors.concat([new ValidationError(key, light[key], 'unknown property "' + key + '"')]);
        }
    }
    return errors;
}

function validateFormatted(options) {
    if (validateString(options).length === 0) {
        return [];
    }
    return validateExpression(options);
}

function validateImage(options) {
    if (validateString(options).length === 0) {
        return [];
    }
    return validateExpression(options);
}

var VALIDATORS = {
    '*': function _() {
        return [];
    },
    'array': validateArray,
    'boolean': validateBoolean,
    'number': validateNumber,
    'color': validateColor,
    'constants': validateConstants,
    'enum': validateEnum,
    'filter': validateFilter,
    'function': validateFunction,
    'layer': validateLayer,
    'object': validateObject,
    'source': validateSource,
    'light': validateLight,
    'string': validateString,
    'formatted': validateFormatted,
    'resolvedImage': validateImage
};
function validate(options) {
    var value = options.value;
    var valueSpec = options.valueSpec;
    var styleSpec = options.styleSpec;
    if (valueSpec.expression && isFunction$1(unbundle(value))) {
        return validateFunction(options);
    } else if (valueSpec.expression && isExpression(deepUnbundle(value))) {
        return validateExpression(options);
    } else if (valueSpec.type && VALIDATORS[valueSpec.type]) {
        return VALIDATORS[valueSpec.type](options);
    } else {
        var valid = validateObject(extend({}, options, { valueSpec: valueSpec.type ? styleSpec[valueSpec.type] : valueSpec }));
        return valid;
    }
}

function validateGlyphsURL(options) {
    var value = options.value;
    var key = options.key;
    var errors = validateString(options);
    if (errors.length) {
        return errors;
    }
    if (value.indexOf('{fontstack}') === -1) {
        errors.push(new ValidationError(key, value, '"glyphs" url must include a "{fontstack}" token'));
    }
    if (value.indexOf('{range}') === -1) {
        errors.push(new ValidationError(key, value, '"glyphs" url must include a "{range}" token'));
    }
    return errors;
}

function validateStyleMin(style, styleSpec) {
    if (styleSpec === void 0) styleSpec = v8;
    var errors = [];
    errors = errors.concat(validate({
        key: '',
        value: style,
        valueSpec: styleSpec.$root,
        styleSpec: styleSpec,
        style: style,
        objectElementValidators: {
            glyphs: validateGlyphsURL,
            '*': function _() {
                return [];
            }
        }
    }));
    if (style.constants) {
        errors = errors.concat(validateConstants({
            key: 'constants',
            value: style.constants,
            style: style,
            styleSpec: styleSpec
        }));
    }
    return sortErrors(errors);
}
validateStyleMin.source = wrapCleanErrors(validateSource);
validateStyleMin.light = wrapCleanErrors(validateLight);
validateStyleMin.layer = wrapCleanErrors(validateLayer);
validateStyleMin.filter = wrapCleanErrors(validateFilter);
validateStyleMin.paintProperty = wrapCleanErrors(validatePaintProperty);
validateStyleMin.layoutProperty = wrapCleanErrors(validateLayoutProperty);
function sortErrors(errors) {
    return [].concat(errors).sort(function (a, b) {
        return a.line - b.line;
    });
}
function wrapCleanErrors(inner) {
    return function () {
        var args = [],
            len = arguments.length;
        while (len--) {
            args[len] = arguments[len];
        }return sortErrors(inner.apply(this, args));
    };
}

var jsonlint = createCommonjsModule(function (module, exports) {
    /* parser generated by jison 0.4.15 */
    /*
      Returns a Parser object of the following structure:
    
      Parser: {
        yy: {}
      }
    
      Parser.prototype: {
        yy: {},
        trace: function(),
        symbols_: {associative list: name ==> number},
        terminals_: {associative list: number ==> name},
        productions_: [...],
        performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
        table: [...],
        defaultActions: {...},
        parseError: function(str, hash),
        parse: function(input),
    
        lexer: {
            EOF: 1,
            parseError: function(str, hash),
            setInput: function(input),
            input: function(),
            unput: function(str),
            more: function(),
            less: function(n),
            pastInput: function(),
            upcomingInput: function(),
            showPosition: function(),
            test_match: function(regex_match_array, rule_index),
            next: function(),
            lex: function(),
            begin: function(condition),
            popState: function(),
            _currentRules: function(),
            topState: function(),
            pushState: function(condition),
    
            options: {
                ranges: boolean           (optional: true ==> token location info will include a .range[] member)
                flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
                backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
            },
    
            performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
            rules: [...],
            conditions: {associative list: name ==> set},
        }
      }
    
    
      token location info (@$, _$, etc.): {
        first_line: n,
        last_line: n,
        first_column: n,
        last_column: n,
        range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
      }
    
    
      the parseError function receives a 'hash' object with these members for lexer and parser errors: {
        text:        (matched text)
        token:       (the produced terminal token, if any)
        line:        (yylineno)
      }
      while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
        loc:         (yylloc)
        expected:    (string describing the set of expected tokens)
        recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
      }
    */
    var parser = function () {
        var o = function o(k, v, _o, l) {
            for (_o = _o || {}, l = k.length; l--; _o[k[l]] = v) {}return _o;
        },
            $V0 = [1, 12],
            $V1 = [1, 13],
            $V2 = [1, 9],
            $V3 = [1, 10],
            $V4 = [1, 11],
            $V5 = [1, 14],
            $V6 = [1, 15],
            $V7 = [14, 18, 22, 24],
            $V8 = [18, 22],
            $V9 = [22, 24];
        var parser = { trace: function trace() {},
            yy: {},
            symbols_: { "error": 2, "JSONString": 3, "STRING": 4, "JSONNumber": 5, "NUMBER": 6, "JSONNullLiteral": 7, "NULL": 8, "JSONBooleanLiteral": 9, "TRUE": 10, "FALSE": 11, "JSONText": 12, "JSONValue": 13, "EOF": 14, "JSONObject": 15, "JSONArray": 16, "{": 17, "}": 18, "JSONMemberList": 19, "JSONMember": 20, ":": 21, ",": 22, "[": 23, "]": 24, "JSONElementList": 25, "$accept": 0, "$end": 1 },
            terminals_: { 2: "error", 4: "STRING", 6: "NUMBER", 8: "NULL", 10: "TRUE", 11: "FALSE", 14: "EOF", 17: "{", 18: "}", 21: ":", 22: ",", 23: "[", 24: "]" },
            productions_: [0, [3, 1], [5, 1], [7, 1], [9, 1], [9, 1], [12, 2], [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [15, 2], [15, 3], [20, 3], [19, 1], [19, 3], [16, 2], [16, 3], [25, 1], [25, 3]],
            performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
                /* this == yyval */

                var $0 = $$.length - 1;
                switch (yystate) {
                    case 1:
                        // replace escaped characters with actual character
                        this.$ = new String(yytext.replace(/\\(\\|")/g, "$" + "1").replace(/\\n/g, '\n').replace(/\\r/g, '\r').replace(/\\t/g, '\t').replace(/\\v/g, '\v').replace(/\\f/g, '\f').replace(/\\b/g, '\b'));
                        this.$.__line__ = this._$.first_line;

                        break;
                    case 2:

                        this.$ = new Number(yytext);
                        this.$.__line__ = this._$.first_line;

                        break;
                    case 3:

                        this.$ = null;

                        break;
                    case 4:

                        this.$ = new Boolean(true);
                        this.$.__line__ = this._$.first_line;

                        break;
                    case 5:

                        this.$ = new Boolean(false);
                        this.$.__line__ = this._$.first_line;

                        break;
                    case 6:
                        return this.$ = $$[$0 - 1];
                    case 13:
                        this.$ = {};Object.defineProperty(this.$, '__line__', {
                            value: this._$.first_line,
                            enumerable: false
                        });
                        break;
                    case 14:case 19:
                        this.$ = $$[$0 - 1];Object.defineProperty(this.$, '__line__', {
                            value: this._$.first_line,
                            enumerable: false
                        });
                        break;
                    case 15:
                        this.$ = [$$[$0 - 2], $$[$0]];
                        break;
                    case 16:
                        this.$ = {};this.$[$$[$0][0]] = $$[$0][1];
                        break;
                    case 17:
                        this.$ = $$[$0 - 2];$$[$0 - 2][$$[$0][0]] = $$[$0][1];
                        break;
                    case 18:
                        this.$ = [];Object.defineProperty(this.$, '__line__', {
                            value: this._$.first_line,
                            enumerable: false
                        });
                        break;
                    case 20:
                        this.$ = [$$[$0]];
                        break;
                    case 21:
                        this.$ = $$[$0 - 2];$$[$0 - 2].push($$[$0]);
                        break;
                }
            },
            table: [{ 3: 5, 4: $V0, 5: 6, 6: $V1, 7: 3, 8: $V2, 9: 4, 10: $V3, 11: $V4, 12: 1, 13: 2, 15: 7, 16: 8, 17: $V5, 23: $V6 }, { 1: [3] }, { 14: [1, 16] }, o($V7, [2, 7]), o($V7, [2, 8]), o($V7, [2, 9]), o($V7, [2, 10]), o($V7, [2, 11]), o($V7, [2, 12]), o($V7, [2, 3]), o($V7, [2, 4]), o($V7, [2, 5]), o([14, 18, 21, 22, 24], [2, 1]), o($V7, [2, 2]), { 3: 20, 4: $V0, 18: [1, 17], 19: 18, 20: 19 }, { 3: 5, 4: $V0, 5: 6, 6: $V1, 7: 3, 8: $V2, 9: 4, 10: $V3, 11: $V4, 13: 23, 15: 7, 16: 8, 17: $V5, 23: $V6, 24: [1, 21], 25: 22 }, { 1: [2, 6] }, o($V7, [2, 13]), { 18: [1, 24], 22: [1, 25] }, o($V8, [2, 16]), { 21: [1, 26] }, o($V7, [2, 18]), { 22: [1, 28], 24: [1, 27] }, o($V9, [2, 20]), o($V7, [2, 14]), { 3: 20, 4: $V0, 20: 29 }, { 3: 5, 4: $V0, 5: 6, 6: $V1, 7: 3, 8: $V2, 9: 4, 10: $V3, 11: $V4, 13: 30, 15: 7, 16: 8, 17: $V5, 23: $V6 }, o($V7, [2, 19]), { 3: 5, 4: $V0, 5: 6, 6: $V1, 7: 3, 8: $V2, 9: 4, 10: $V3, 11: $V4, 13: 31, 15: 7, 16: 8, 17: $V5, 23: $V6 }, o($V8, [2, 17]), o($V8, [2, 15]), o($V9, [2, 21])],
            defaultActions: { 16: [2, 6] },
            parseError: function parseError(str, hash) {
                if (hash.recoverable) {
                    this.trace(str);
                } else {
                    throw new Error(str);
                }
            },
            parse: function parse(input) {
                var self = this,
                    stack = [0],
                    vstack = [null],
                    lstack = [],
                    table = this.table,
                    yytext = '',
                    yylineno = 0,
                    yyleng = 0,
                    TERROR = 2,
                    EOF = 1;
                var args = lstack.slice.call(arguments, 1);
                var lexer = Object.create(this.lexer);
                var sharedState = { yy: {} };
                for (var k in this.yy) {
                    if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
                        sharedState.yy[k] = this.yy[k];
                    }
                }
                lexer.setInput(input, sharedState.yy);
                sharedState.yy.lexer = lexer;
                sharedState.yy.parser = this;
                if (typeof lexer.yylloc == 'undefined') {
                    lexer.yylloc = {};
                }
                var yyloc = lexer.yylloc;
                lstack.push(yyloc);
                var ranges = lexer.options && lexer.options.ranges;
                if (typeof sharedState.yy.parseError === 'function') {
                    this.parseError = sharedState.yy.parseError;
                } else {
                    this.parseError = Object.getPrototypeOf(this).parseError;
                }

                function lex() {
                    var token;
                    token = lexer.lex() || EOF;
                    if (typeof token !== 'number') {
                        token = self.symbols_[token] || token;
                    }
                    return token;
                }
                var symbol,
                    state,
                    action,
                    r,
                    yyval = {},
                    p,
                    len,
                    newState,
                    expected;
                while (true) {
                    state = stack[stack.length - 1];
                    if (this.defaultActions[state]) {
                        action = this.defaultActions[state];
                    } else {
                        if (symbol === null || typeof symbol == 'undefined') {
                            symbol = lex();
                        }
                        action = table[state] && table[state][symbol];
                    }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                        var errStr = '';
                        expected = [];
                        for (p in table[state]) {
                            if (this.terminals_[p] && p > TERROR) {
                                expected.push('\'' + this.terminals_[p] + '\'');
                            }
                        }
                        if (lexer.showPosition) {
                            errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                        } else {
                            errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                        }
                        this.parseError(errStr, {
                            text: lexer.match,
                            token: this.terminals_[symbol] || symbol,
                            line: lexer.yylineno,
                            loc: yyloc,
                            expected: expected
                        });
                    }
                    if (action[0] instanceof Array && action.length > 1) {
                        throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
                    }
                    switch (action[0]) {
                        case 1:
                            stack.push(symbol);
                            vstack.push(lexer.yytext);
                            lstack.push(lexer.yylloc);
                            stack.push(action[1]);
                            symbol = null;
                            {
                                yyleng = lexer.yyleng;
                                yytext = lexer.yytext;
                                yylineno = lexer.yylineno;
                                yyloc = lexer.yylloc;
                            }
                            break;
                        case 2:
                            len = this.productions_[action[1]][1];
                            yyval.$ = vstack[vstack.length - len];
                            yyval._$ = {
                                first_line: lstack[lstack.length - (len || 1)].first_line,
                                last_line: lstack[lstack.length - 1].last_line,
                                first_column: lstack[lstack.length - (len || 1)].first_column,
                                last_column: lstack[lstack.length - 1].last_column
                            };
                            if (ranges) {
                                yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
                            }
                            r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));
                            if (typeof r !== 'undefined') {
                                return r;
                            }
                            if (len) {
                                stack = stack.slice(0, -1 * len * 2);
                                vstack = vstack.slice(0, -1 * len);
                                lstack = lstack.slice(0, -1 * len);
                            }
                            stack.push(this.productions_[action[1]][0]);
                            vstack.push(yyval.$);
                            lstack.push(yyval._$);
                            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
                            stack.push(newState);
                            break;
                        case 3:
                            return true;
                    }
                }
                return true;
            } };
        /* generated by jison-lex 0.3.4 */
        var lexer = function () {
            var lexer = {

                EOF: 1,

                parseError: function parseError(str, hash) {
                    if (this.yy.parser) {
                        this.yy.parser.parseError(str, hash);
                    } else {
                        throw new Error(str);
                    }
                },

                // resets the lexer, sets new input
                setInput: function setInput(input, yy) {
                    this.yy = yy || this.yy || {};
                    this._input = input;
                    this._more = this._backtrack = this.done = false;
                    this.yylineno = this.yyleng = 0;
                    this.yytext = this.matched = this.match = '';
                    this.conditionStack = ['INITIAL'];
                    this.yylloc = {
                        first_line: 1,
                        first_column: 0,
                        last_line: 1,
                        last_column: 0
                    };
                    if (this.options.ranges) {
                        this.yylloc.range = [0, 0];
                    }
                    this.offset = 0;
                    return this;
                },

                // consumes and returns one char from the input
                input: function input() {
                    var ch = this._input[0];
                    this.yytext += ch;
                    this.yyleng++;
                    this.offset++;
                    this.match += ch;
                    this.matched += ch;
                    var lines = ch.match(/(?:\r\n?|\n).*/g);
                    if (lines) {
                        this.yylineno++;
                        this.yylloc.last_line++;
                    } else {
                        this.yylloc.last_column++;
                    }
                    if (this.options.ranges) {
                        this.yylloc.range[1]++;
                    }

                    this._input = this._input.slice(1);
                    return ch;
                },

                // unshifts one char (or a string) into the input
                unput: function unput(ch) {
                    var len = ch.length;
                    var lines = ch.split(/(?:\r\n?|\n)/g);

                    this._input = ch + this._input;
                    this.yytext = this.yytext.substr(0, this.yytext.length - len);
                    //this.yyleng -= len;
                    this.offset -= len;
                    var oldLines = this.match.split(/(?:\r\n?|\n)/g);
                    this.match = this.match.substr(0, this.match.length - 1);
                    this.matched = this.matched.substr(0, this.matched.length - 1);

                    if (lines.length - 1) {
                        this.yylineno -= lines.length - 1;
                    }
                    var r = this.yylloc.range;

                    this.yylloc = {
                        first_line: this.yylloc.first_line,
                        last_line: this.yylineno + 1,
                        first_column: this.yylloc.first_column,
                        last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
                    };

                    if (this.options.ranges) {
                        this.yylloc.range = [r[0], r[0] + this.yyleng - len];
                    }
                    this.yyleng = this.yytext.length;
                    return this;
                },

                // When called from action, caches matched text and appends it on next action
                more: function more() {
                    this._more = true;
                    return this;
                },

                // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
                reject: function reject() {
                    if (this.options.backtrack_lexer) {
                        this._backtrack = true;
                    } else {
                        return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                            text: "",
                            token: null,
                            line: this.yylineno
                        });
                    }
                    return this;
                },

                // retain first n characters of the match
                less: function less(n) {
                    this.unput(this.match.slice(n));
                },

                // displays already matched input, i.e. for error messages
                pastInput: function pastInput() {
                    var past = this.matched.substr(0, this.matched.length - this.match.length);
                    return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, "");
                },

                // displays upcoming input, i.e. for error messages
                upcomingInput: function upcomingInput() {
                    var next = this.match;
                    if (next.length < 20) {
                        next += this._input.substr(0, 20 - next.length);
                    }
                    return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
                },

                // displays the character position where the lexing error occurred, i.e. for error messages
                showPosition: function showPosition() {
                    var pre = this.pastInput();
                    var c = new Array(pre.length + 1).join("-");
                    return pre + this.upcomingInput() + "\n" + c + "^";
                },

                // test the lexed token: return FALSE when not a match, otherwise return token
                test_match: function test_match(match, indexed_rule) {
                    var token, lines, backup;

                    if (this.options.backtrack_lexer) {
                        // save context
                        backup = {
                            yylineno: this.yylineno,
                            yylloc: {
                                first_line: this.yylloc.first_line,
                                last_line: this.last_line,
                                first_column: this.yylloc.first_column,
                                last_column: this.yylloc.last_column
                            },
                            yytext: this.yytext,
                            match: this.match,
                            matches: this.matches,
                            matched: this.matched,
                            yyleng: this.yyleng,
                            offset: this.offset,
                            _more: this._more,
                            _input: this._input,
                            yy: this.yy,
                            conditionStack: this.conditionStack.slice(0),
                            done: this.done
                        };
                        if (this.options.ranges) {
                            backup.yylloc.range = this.yylloc.range.slice(0);
                        }
                    }

                    lines = match[0].match(/(?:\r\n?|\n).*/g);
                    if (lines) {
                        this.yylineno += lines.length;
                    }
                    this.yylloc = {
                        first_line: this.yylloc.last_line,
                        last_line: this.yylineno + 1,
                        first_column: this.yylloc.last_column,
                        last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
                    };
                    this.yytext += match[0];
                    this.match += match[0];
                    this.matches = match;
                    this.yyleng = this.yytext.length;
                    if (this.options.ranges) {
                        this.yylloc.range = [this.offset, this.offset += this.yyleng];
                    }
                    this._more = false;
                    this._backtrack = false;
                    this._input = this._input.slice(match[0].length);
                    this.matched += match[0];
                    token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
                    if (this.done && this._input) {
                        this.done = false;
                    }
                    if (token) {
                        return token;
                    } else if (this._backtrack) {
                        // recover context
                        for (var k in backup) {
                            this[k] = backup[k];
                        }
                        return false; // rule action called reject() implying the next rule should be tested instead.
                    }
                    return false;
                },

                // return next match in input
                next: function next() {
                    if (this.done) {
                        return this.EOF;
                    }
                    if (!this._input) {
                        this.done = true;
                    }

                    var token, match, tempMatch, index;
                    if (!this._more) {
                        this.yytext = '';
                        this.match = '';
                    }
                    var rules = this._currentRules();
                    for (var i = 0; i < rules.length; i++) {
                        tempMatch = this._input.match(this.rules[rules[i]]);
                        if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                            match = tempMatch;
                            index = i;
                            if (this.options.backtrack_lexer) {
                                token = this.test_match(tempMatch, rules[i]);
                                if (token !== false) {
                                    return token;
                                } else if (this._backtrack) {
                                    match = false;
                                    continue; // rule action called reject() implying a rule MISmatch.
                                } else {
                                    // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                                    return false;
                                }
                            } else if (!this.options.flex) {
                                break;
                            }
                        }
                    }
                    if (match) {
                        token = this.test_match(match, rules[index]);
                        if (token !== false) {
                            return token;
                        }
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                    if (this._input === "") {
                        return this.EOF;
                    } else {
                        return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                            text: "",
                            token: null,
                            line: this.yylineno
                        });
                    }
                },

                // return next match that has a token
                lex: function lex() {
                    var r = this.next();
                    if (r) {
                        return r;
                    } else {
                        return this.lex();
                    }
                },

                // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
                begin: function begin(condition) {
                    this.conditionStack.push(condition);
                },

                // pop the previously active lexer condition state off the condition stack
                popState: function popState() {
                    var n = this.conditionStack.length - 1;
                    if (n > 0) {
                        return this.conditionStack.pop();
                    } else {
                        return this.conditionStack[0];
                    }
                },

                // produce the lexer rule set which is active for the currently active lexer condition state
                _currentRules: function _currentRules() {
                    if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
                        return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
                    } else {
                        return this.conditions["INITIAL"].rules;
                    }
                },

                // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
                topState: function topState(n) {
                    n = this.conditionStack.length - 1 - Math.abs(n || 0);
                    if (n >= 0) {
                        return this.conditionStack[n];
                    } else {
                        return "INITIAL";
                    }
                },

                // alias for begin(condition)
                pushState: function pushState(condition) {
                    this.begin(condition);
                },

                // return the number of states currently on the stack
                stateStackSize: function stateStackSize() {
                    return this.conditionStack.length;
                },
                options: {},
                performAction: function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
                    switch ($avoiding_name_collisions) {
                        case 0:
                            /* skip whitespace */
                            break;
                        case 1:
                            return 6;
                        case 2:
                            yy_.yytext = yy_.yytext.substr(1, yy_.yyleng - 2);return 4;
                        case 3:
                            return 17;
                        case 4:
                            return 18;
                        case 5:
                            return 23;
                        case 6:
                            return 24;
                        case 7:
                            return 22;
                        case 8:
                            return 21;
                        case 9:
                            return 10;
                        case 10:
                            return 11;
                        case 11:
                            return 8;
                        case 12:
                            return 14;
                        case 13:
                            return 'INVALID';
                    }
                },
                rules: [/^(?:\s+)/, /^(?:(-?([0-9]|[1-9][0-9]+))(\.[0-9]+)?([eE][-+]?[0-9]+)?\b)/, /^(?:"(?:\\[\\"bfnrt/]|\\u[a-fA-F0-9]{4}|[^\\\0-\x09\x0a-\x1f"])*")/, /^(?:\{)/, /^(?:\})/, /^(?:\[)/, /^(?:\])/, /^(?:,)/, /^(?::)/, /^(?:true\b)/, /^(?:false\b)/, /^(?:null\b)/, /^(?:$)/, /^(?:.)/],
                conditions: { "INITIAL": { "rules": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "inclusive": true } }
            };
            return lexer;
        }();
        parser.lexer = lexer;
        function Parser() {
            this.yy = {};
        }
        Parser.prototype = parser;parser.Parser = Parser;
        return new Parser();
    }();

    if (typeof commonjsRequire !== 'undefined' && 'object' !== 'undefined') {
        exports.parser = parser;
        exports.Parser = parser.Parser;
        exports.parse = function () {
            return parser.parse.apply(parser, arguments);
        };
    }
});
var jsonlint_1 = jsonlint.parser;
var jsonlint_2 = jsonlint.Parser;
var jsonlint_3 = jsonlint.parse;

function readStyle(style) {
    if (style instanceof String || typeof style === 'string' || style instanceof Buffer) {
        try {
            return jsonlint.parse(style.toString());
        } catch (e) {
            throw new ParsingError$1(e);
        }
    }
    return style;
}

function validateStyle(style, styleSpec) {
    if (styleSpec === void 0) styleSpec = v8;
    var s = style;
    try {
        s = readStyle(s);
    } catch (e) {
        return [e];
    }
    return validateStyleMin(s, styleSpec);
}

var SUPPORTED_SPEC_VERSION = 8;
var MAX_SOURCES_IN_STYLE = 15;
function isValid(value, regex) {
    if (!value || getType(value) !== 'string') {
        return true;
    }
    return !!value.match(regex);
}
function getSourceCount(source) {
    if (source.url) {
        return source.url.split(',').length;
    } else {
        return 0;
    }
}
function getAllowedKeyErrors(obj, keys, path) {
    var allowed = new Set(keys);
    var errors = [];
    Object.keys(obj).forEach(function (k) {
        if (!allowed.has(k)) {
            var prop = path ? path + '.' + k : null;
            errors.push(new ValidationError(prop, obj[k], 'Unsupported property "' + k + '"'));
        }
    });
    return errors;
}
function getSourceErrors(source, i) {
    var errors = [];
    var sourceKeys = ['type', 'url', 'tileSize'];
    errors.push.apply(errors, getAllowedKeyErrors(source, sourceKeys, 'source'));
    var sourceUrlPattern = /^mapbox:\/\/([^/]*)$/;
    if (!isValid(source.url, sourceUrlPattern)) {
        errors.push(new ValidationError('sources[' + i + ']', source.url, 'Source url must be a valid Mapbox tileset url'));
    }
    return errors;
}
function getSourcesErrors(sources) {
    var errors = [];
    var count = 0;
    Object.keys(sources).forEach(function (s, i) {
        var sourceErrors = getSourceErrors(sources[s], i);
        if (!sourceErrors.length) {
            count = count + getSourceCount(sources[s]);
        }
        errors.push.apply(errors, sourceErrors);
    });
    if (count > MAX_SOURCES_IN_STYLE) {
        errors.push(new ValidationError('sources', null, 'Styles must contain ' + MAX_SOURCES_IN_STYLE + ' or fewer sources'));
    }
    return errors;
}
function getRootErrors(style, specKeys) {
    var errors = [];
    var optionalRootProperties = ['owner', 'id', 'cacheControl', 'draft', 'created', 'modified', 'visibility'];
    var allowedKeyErrors = getAllowedKeyErrors(style, specKeys.concat(optionalRootProperties));
    errors.push.apply(errors, allowedKeyErrors);
    if (style.version > SUPPORTED_SPEC_VERSION || style.version < SUPPORTED_SPEC_VERSION) {
        errors.push(new ValidationError('version', style.version, 'Style version must be ' + SUPPORTED_SPEC_VERSION));
    }
    var glyphUrlPattern = /^mapbox:\/\/fonts\/([^/]*)\/{fontstack}\/{range}.pbf$/;
    if (!isValid(style.glyphs, glyphUrlPattern)) {
        errors.push(new ValidationError('glyphs', style.glyphs, 'Styles must reference glyphs hosted by Mapbox'));
    }
    var spriteUrlPattern = /^mapbox:\/\/sprites\/([^/]*)\/([^/]*)\/?([^/]*)?$/;
    if (!isValid(style.sprite, spriteUrlPattern)) {
        errors.push(new ValidationError('sprite', style.sprite, 'Styles must reference sprites hosted by Mapbox'));
    }
    var visibilityPattern = /^(public|private)$/;
    if (!isValid(style.visibility, visibilityPattern)) {
        errors.push(new ValidationError('visibility', style.visibility, 'Style visibility must be public or private'));
    }
    return errors;
}
function validateMapboxApiSupported(style) {
    var s = style;
    try {
        s = readStyle(s);
    } catch (e) {
        return [e];
    }
    var errors = validateStyleMin(s, v8).concat(getRootErrors(s, Object.keys(v8.$root)));
    if (s.sources) {
        errors = errors.concat(getSourcesErrors(s.sources));
    }
    return errors;
}

var expression$1 = {
    StyleExpression: StyleExpression,
    isExpression: isExpression,
    isExpressionFilter: isExpressionFilter,
    createExpression: createExpression,
    createPropertyExpression: createPropertyExpression,
    normalizePropertyExpression: normalizePropertyExpression,
    ZoomConstantExpression: ZoomConstantExpression,
    ZoomDependentExpression: ZoomDependentExpression,
    StylePropertyFunction: StylePropertyFunction
};
var styleFunction = {
    convertFunction: convertFunction,
    createFunction: createFunction,
    isFunction: isFunction$1
};
var visit = {
    eachSource: eachSource,
    eachLayer: eachLayer,
    eachProperty: eachProperty
};
validateStyle.parsed = validateStyle;
validateStyle.latest = validateStyle;

exports.Color = Color;
exports.ParsingError = ParsingError$1;
exports.ValidationError = ValidationError;
exports.composite = composite;
exports.convertFilter = convertFilter$1;
exports.derefLayers = derefLayers;
exports.diff = diffStyles;
exports.expression = expression$1;
exports.featureFilter = createFilter;
exports.format = format;
exports.function = styleFunction;
exports.latest = v8;
exports.migrate = migrate;
exports.v8 = v8;
exports.validate = validateStyle;
exports.validateMapboxApiSupported = validateMapboxApiSupported;
exports.visit = visit;
//# sourceMappingURL=index.es.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;

var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i];
  revLookup[code.charCodeAt(i)] = i;
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;

function getLens(b64) {
  var len = b64.length;

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4');
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=');
  if (validLen === -1) validLen = len;

  var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;

  return [validLen, placeHoldersLen];
}

// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}

function _byteLength(b64, validLen, placeHoldersLen) {
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}

function toByteArray(b64) {
  var tmp;
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));

  var curByte = 0;

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0 ? validLen - 4 : validLen;

  var i;
  for (i = 0; i < len; i += 4) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[curByte++] = tmp >> 16 & 0xFF;
    arr[curByte++] = tmp >> 8 & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[curByte++] = tmp >> 8 & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  return arr;
}

function tripletToBase64(num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}

function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
    output.push(tripletToBase64(tmp));
  }
  return output.join('');
}

function fromByteArray(uint8) {
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '==');
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '=');
  }

  return parts.join('');
}

/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js");
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js");
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js");

exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength();

function typedArraySupport() {
  try {
    var arr = new Uint8Array(1);
    arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function foo() {
        return 42;
      } };
    return arr.foo() === 42 && // typed array instances can be augmented
    typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
    arr.subarray(1, 1).byteLength === 0; // ie10 has broken `subarray`
  } catch (e) {
    return false;
  }
}

function kMaxLength() {
  return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
}

function createBuffer(that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length');
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length);
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length);
    }
    that.length = length;
  }

  return that;
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer(arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length);
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error('If encoding is specified then the first argument must be a string');
    }
    return allocUnsafe(this, arg);
  }
  return from(this, arg, encodingOrOffset, length);
}

Buffer.poolSize = 8192; // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype;
  return arr;
};

function from(that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number');
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length);
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset);
  }

  return fromObject(that, value);
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length);
};

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype;
  Buffer.__proto__ = Uint8Array;
  if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    });
  }
}

function assertSize(size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number');
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative');
  }
}

function alloc(that, size, fill, encoding) {
  assertSize(size);
  if (size <= 0) {
    return createBuffer(that, size);
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
  }
  return createBuffer(that, size);
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding);
};

function allocUnsafe(that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }
  return that;
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size);
};

function fromString(that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding');
  }

  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);

  var actual = that.write(string, encoding);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual);
  }

  return that;
}

function fromArrayLike(that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }
  return that;
}

function fromArrayBuffer(that, array, byteOffset, length) {
  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds');
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds');
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array);
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array;
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array);
  }
  return that;
}

function fromObject(that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);

    if (that.length === 0) {
      return that;
    }

    obj.copy(that, 0, 0, len);
    return that;
  }

  if (obj) {
    if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0);
      }
      return fromArrayLike(that, obj);
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data);
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
}

function checked(length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
  }
  return length | 0;
}

function SlowBuffer(length) {
  if (+length != length) {
    // eslint-disable-line eqeqeq
    length = 0;
  }
  return Buffer.alloc(+length);
}

Buffer.isBuffer = function isBuffer(b) {
  return !!(b != null && b._isBuffer);
};

Buffer.compare = function compare(a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers');
  }

  if (a === b) return 0;

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

Buffer.isEncoding = function isEncoding(encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true;
    default:
      return false;
  }
};

Buffer.concat = function concat(list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers');
  }

  if (list.length === 0) {
    return Buffer.alloc(0);
  }

  var i;
  if (length === undefined) {
    length = 0;
    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  var buffer = Buffer.allocUnsafe(length);
  var pos = 0;
  for (i = 0; i < list.length; ++i) {
    var buf = list[i];
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }
    buf.copy(buffer, pos);
    pos += buf.length;
  }
  return buffer;
};

function byteLength(string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length;
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength;
  }
  if (typeof string !== 'string') {
    string = '' + string;
  }

  var len = string.length;
  if (len === 0) return 0;

  // Use a for loop to avoid recursion
  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len;
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length;
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2;
      case 'hex':
        return len >>> 1;
      case 'base64':
        return base64ToBytes(string).length;
      default:
        if (loweredCase) return utf8ToBytes(string).length; // assume utf8
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}
Buffer.byteLength = byteLength;

function slowToString(encoding, start, end) {
  var loweredCase = false;

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0;
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return '';
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return '';
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return '';
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end);

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end);

      case 'ascii':
        return asciiSlice(this, start, end);

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end);

      case 'base64':
        return base64Slice(this, start, end);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true;

function swap(b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}

Buffer.prototype.swap16 = function swap16() {
  var len = this.length;
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits');
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }
  return this;
};

Buffer.prototype.swap32 = function swap32() {
  var len = this.length;
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits');
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }
  return this;
};

Buffer.prototype.swap64 = function swap64() {
  var len = this.length;
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits');
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }
  return this;
};

Buffer.prototype.toString = function toString() {
  var length = this.length | 0;
  if (length === 0) return '';
  if (arguments.length === 0) return utf8Slice(this, 0, length);
  return slowToString.apply(this, arguments);
};

Buffer.prototype.equals = function equals(b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
  if (this === b) return true;
  return Buffer.compare(this, b) === 0;
};

Buffer.prototype.inspect = function inspect() {
  var str = '';
  var max = exports.INSPECT_MAX_BYTES;
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
    if (this.length > max) str += ' ... ';
  }
  return '<Buffer ' + str + '>';
};

Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer');
  }

  if (start === undefined) {
    start = 0;
  }
  if (end === undefined) {
    end = target ? target.length : 0;
  }
  if (thisStart === undefined) {
    thisStart = 0;
  }
  if (thisEnd === undefined) {
    thisEnd = this.length;
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index');
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0;
  }
  if (thisStart >= thisEnd) {
    return -1;
  }
  if (start >= end) {
    return 1;
  }

  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;

  if (this === target) return 0;

  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);

  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1;

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }
  byteOffset = +byteOffset; // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
  if (byteOffset >= buffer.length) {
    if (dir) return -1;else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;else return -1;
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1;
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
      }
    }
    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  }

  throw new TypeError('val must be string, number or Buffer');
}

function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();
    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1;
      }
      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }

  function read(buf, i) {
    if (indexSize === 1) {
      return buf[i];
    } else {
      return buf.readUInt16BE(i * indexSize);
    }
  }

  var i;
  if (dir) {
    var foundIndex = -1;
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
    for (i = byteOffset; i >= 0; i--) {
      var found = true;
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break;
        }
      }
      if (found) return i;
    }
  }

  return -1;
}

Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1;
};

Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};

Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};

function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = Number(length);
    if (length > remaining) {
      length = remaining;
    }
  }

  // must be an even number of digits
  var strLen = string.length;
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

  if (length > strLen / 2) {
    length = strLen / 2;
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed)) return i;
    buf[offset + i] = parsed;
  }
  return i;
}

function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}

function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length);
}

function latin1Write(buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length);
}

function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length);
}

function ucs2Write(buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}

Buffer.prototype.write = function write(string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0;
    // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0;
    if (isFinite(length)) {
      length = length | 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    }
    // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
  }

  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds');
  }

  if (!encoding) encoding = 'utf8';

  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length);

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length);

      case 'ascii':
        return asciiWrite(this, string, offset, length);

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length);

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};

Buffer.prototype.toJSON = function toJSON() {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};

function base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf);
  } else {
    return base64.fromByteArray(buf.slice(start, end));
  }
}

function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];

  var i = start;
  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }
          break;
        case 2:
          secondByte = buf[i + 1];
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res);
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray(codePoints) {
  var len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = '';
  var i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }
  return res;
}

function asciiSlice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }
  return ret;
}

function latin1Slice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }
  return ret;
}

function hexSlice(buf, start, end) {
  var len = buf.length;

  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;

  var out = '';
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }
  return out;
}

function utf16leSlice(buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }
  return res;
}

Buffer.prototype.slice = function slice(start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;

  var newBuf;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    newBuf.__proto__ = Buffer.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer(sliceLen, undefined);
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }

  return newBuf;
};

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}

Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  return val;
};

Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }

  var val = this[offset + --byteLength];
  var mul = 1;
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }

  return val;
};

Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset];
};

Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | this[offset + 1] << 8;
};

Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] << 8 | this[offset + 1];
};

Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};

Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};

Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val;
};

Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var i = byteLength;
  var mul = 1;
  var val = this[offset + --i];
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val;
};

Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return this[offset];
  return (0xff - this[offset] + 1) * -1;
};

Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset] | this[offset + 1] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | this[offset] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};

Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};

Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, true, 23, 4);
};

Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, false, 23, 4);
};

Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, true, 52, 8);
};

Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, false, 52, 8);
};

function checkInt(buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
}

Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var mul = 1;
  var i = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var i = byteLength - 1;
  var mul = 1;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  this[offset] = value & 0xff;
  return offset + 1;
};

function objectWriteUInt16(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2;
};

Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2;
};

function objectWriteUInt32(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4;
};

Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4;
};

Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = byteLength - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = value & 0xff;
  return offset + 1;
};

Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2;
};

Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2;
};

Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4;
};

Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4;
};

function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
  if (offset < 0) throw new RangeError('Index out of range');
}

function writeFloat(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4;
}

Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert);
};

Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert);
};

function writeDouble(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8;
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert);
};

Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert);
};

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start;

  // Copy 0 bytes; we're done
  if (end === start) return 0;
  if (target.length === 0 || this.length === 0) return 0;

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds');
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
  if (end < 0) throw new RangeError('sourceEnd out of bounds');

  // Are we oob?
  if (end > this.length) end = this.length;
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  var len = end - start;
  var i;

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
  }

  return len;
};

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0);
      if (code < 256) {
        val = code;
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string');
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding);
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index');
  }

  if (end <= start) {
    return this;
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;

  if (!val) val = 0;

  var i;
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
    var len = bytes.length;
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this;
};

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

function base64clean(str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '');
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return '';
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '=';
  }
  return str;
}

function stringtrim(str) {
  if (str.trim) return str.trim();
  return str.replace(/^\s+|\s+$/g, '');
}

function toHex(n) {
  if (n < 16) return '0' + n.toString(16);
  return n.toString(16);
}

function utf8ToBytes(string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i);

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        }

        // valid lead
        leadSurrogate = codePoint;

        continue;
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue;
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null;

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break;
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break;
      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break;
      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break;
      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else {
      throw new Error('Invalid code point');
    }
  }

  return bytes;
}

function asciiToBytes(str) {
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }
  return byteArray;
}

function utf16leToBytes(str, units) {
  var c, hi, lo;
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break;

    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray;
}

function base64ToBytes(str) {
  return base64.toByteArray(base64clean(str));
}

function blitBuffer(src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length) break;
    dst[i + offset] = src[i];
  }
  return i;
}

function isnan(val) {
  return val !== val; // eslint-disable-line no-self-compare
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];

  i += d;

  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
};

/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

/***/ }),

/***/ "./node_modules/mapbox-to-css-font/index.js":
/*!**************************************************!*\
  !*** ./node_modules/mapbox-to-css-font/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fontWeights = {
  thin: 100,
  hairline: 100,
  'ultra-light': 100,
  'extra-light': 100,
  light: 200,
  book: 300,
  regular: 400,
  normal: 400,
  plain: 400,
  roman: 400,
  standard: 400,
  medium: 500,
  'semi-bold': 600,
  'demi-bold': 600,
  bold: 700,
  heavy: 800,
  black: 800,
  'extra-bold': 800,
  'ultra-black': 900,
  'extra-black': 900,
  'ultra-bold': 900,
  'heavy-black': 900,
  fat: 900,
  poster: 900
};
var sp = ' ';
var italicRE = /(italic|oblique)$/i;

var fontCache = {};

module.exports = function (fonts, size, lineHeight) {
  var cssData = fontCache[fonts];
  if (!cssData) {
    if (!Array.isArray(fonts)) {
      fonts = [fonts];
    }
    var weight = 400;
    var style = 'normal';
    var fontFamilies = [];
    var haveWeight, haveStyle;
    for (var i = 0, ii = fonts.length; i < ii; ++i) {
      var font = fonts[i];
      var parts = font.split(' ');
      var maybeWeight = parts[parts.length - 1].toLowerCase();
      if (maybeWeight == 'normal' || maybeWeight == 'italic' || maybeWeight == 'oblique') {
        style = haveStyle ? style : maybeWeight;
        parts.pop();
        maybeWeight = parts[parts.length - 1].toLowerCase();
      } else if (italicRE.test(maybeWeight)) {
        maybeWeight = maybeWeight.replace(italicRE, '');
        style = haveStyle ? style : parts[parts.length - 1].replace(maybeWeight, '');
      }
      for (var w in fontWeights) {
        if (maybeWeight == w || maybeWeight == w.replace('-', '') || maybeWeight == w.replace('-', sp)) {
          weight = haveWeight ? weight : fontWeights[w];
          parts.pop();
          break;
        }
      }
      if (!haveWeight && typeof maybeWeight == 'number') {
        weight = maybeWeight;
      }
      var fontFamily = parts.join(sp).replace('Klokantech Noto Sans', 'Noto Sans');
      if (fontFamily.indexOf(sp) !== -1) {
        fontFamily = '"' + fontFamily + '"';
      }
      fontFamilies.push(fontFamily);
    }
    // CSS font property: font-style font-weight font-size/line-height font-family
    cssData = fontCache[fonts] = [style, weight, fontFamilies];
  }
  return cssData[0] + sp + cssData[1] + sp + size + 'px' + (lineHeight ? '/' + lineHeight : '') + sp + cssData[2];
};

/***/ }),

/***/ "./node_modules/ol/AssertionError.js":
/*!*******************************************!*\
  !*** ./node_modules/ol/AssertionError.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ./index.js */ "./node_modules/ol/index.js");

/**
 * Error object thrown when an assertion failed. This is an ECMA-262 Error,
 * extended with a `code` property.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error}
 * @constructor
 * @extends {Error}
 * @param {number} code Error code.
 */
var AssertionError = function AssertionError(code) {

  var path = _index.VERSION ? _index.VERSION.split('-')[0] : 'latest';

  /**
   * @type {string}
   */
  this.message = 'Assertion failed. See https://openlayers.org/en/' + path + '/doc/errors/#' + code + ' for details.';

  /**
   * Error code. The meaning of the code can be found on
   * {@link https://openlayers.org/en/latest/doc/errors/} (replace `latest` with
   * the version found in the OpenLayers script's header comment if a version
   * other than the latest is used).
   * @type {number}
   * @api
   */
  this.code = code;

  this.name = 'AssertionError';
}; /**
    * @module ol/AssertionError
    */


(0, _index.inherits)(AssertionError, Error);

exports.default = AssertionError;

/***/ }),

/***/ "./node_modules/ol/Disposable.js":
/*!***************************************!*\
  !*** ./node_modules/ol/Disposable.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _functions = __webpack_require__(/*! ./functions.js */ "./node_modules/ol/functions.js");

/**
 * Objects that need to clean up after themselves.
 * @constructor
 */
var Disposable = function Disposable() {};

/**
 * The object has already been disposed.
 * @type {boolean}
 * @private
 */
/**
 * @module ol/Disposable
 */
Disposable.prototype.disposed_ = false;

/**
 * Clean up.
 */
Disposable.prototype.dispose = function () {
  if (!this.disposed_) {
    this.disposed_ = true;
    this.disposeInternal();
  }
};

/**
 * Extension point for disposable objects.
 * @protected
 */
Disposable.prototype.disposeInternal = _functions.UNDEFINED;
exports.default = Disposable;

/***/ }),

/***/ "./node_modules/ol/ImageTile.js":
/*!**************************************!*\
  !*** ./node_modules/ol/ImageTile.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ./index.js */ "./node_modules/ol/index.js");

var _Tile = __webpack_require__(/*! ./Tile.js */ "./node_modules/ol/Tile.js");

var _Tile2 = _interopRequireDefault(_Tile);

var _TileState = __webpack_require__(/*! ./TileState.js */ "./node_modules/ol/TileState.js");

var _TileState2 = _interopRequireDefault(_TileState);

var _dom = __webpack_require__(/*! ./dom.js */ "./node_modules/ol/dom.js");

var _events = __webpack_require__(/*! ./events.js */ "./node_modules/ol/events.js");

var _EventType = __webpack_require__(/*! ./events/EventType.js */ "./node_modules/ol/events/EventType.js");

var _EventType2 = _interopRequireDefault(_EventType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @typedef {function(new: module:ol/ImageTile, module:ol/tilecoord~TileCoord,
 * module:ol/TileState, string, ?string, module:ol/Tile~LoadFunction)} TileClass
 * @api
 */

/**
 * @constructor
 * @extends {module:ol/Tile}
 * @param {module:ol/tilecoord~TileCoord} tileCoord Tile coordinate.
 * @param {module:ol/TileState} state State.
 * @param {string} src Image source URI.
 * @param {?string} crossOrigin Cross origin.
 * @param {module:ol/Tile~LoadFunction} tileLoadFunction Tile load function.
 * @param {module:ol/Tile~Options=} opt_options Tile options.
 */
/**
 * @module ol/ImageTile
 */
var ImageTile = function ImageTile(tileCoord, state, src, crossOrigin, tileLoadFunction, opt_options) {

  _Tile2.default.call(this, tileCoord, state, opt_options);

  /**
   * @private
   * @type {?string}
   */
  this.crossOrigin_ = crossOrigin;

  /**
   * Image URI
   *
   * @private
   * @type {string}
   */
  this.src_ = src;

  /**
   * @private
   * @type {Image|HTMLCanvasElement}
   */
  this.image_ = new Image();
  if (crossOrigin !== null) {
    this.image_.crossOrigin = crossOrigin;
  }

  /**
   * @private
   * @type {Array.<module:ol/events~EventsKey>}
   */
  this.imageListenerKeys_ = null;

  /**
   * @private
   * @type {module:ol/Tile~LoadFunction}
   */
  this.tileLoadFunction_ = tileLoadFunction;
};

(0, _index.inherits)(ImageTile, _Tile2.default);

/**
 * @inheritDoc
 */
ImageTile.prototype.disposeInternal = function () {
  if (this.state == _TileState2.default.LOADING) {
    this.unlistenImage_();
    this.image_ = getBlankImage();
  }
  if (this.interimTile) {
    this.interimTile.dispose();
  }
  this.state = _TileState2.default.ABORT;
  this.changed();
  _Tile2.default.prototype.disposeInternal.call(this);
};

/**
 * Get the HTML image element for this tile (may be a Canvas, Image, or Video).
 * @return {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} Image.
 * @api
 */
ImageTile.prototype.getImage = function () {
  return this.image_;
};

/**
 * @inheritDoc
 */
ImageTile.prototype.getKey = function () {
  return this.src_;
};

/**
 * Tracks loading or read errors.
 *
 * @private
 */
ImageTile.prototype.handleImageError_ = function () {
  this.state = _TileState2.default.ERROR;
  this.unlistenImage_();
  this.image_ = getBlankImage();
  this.changed();
};

/**
 * Tracks successful image load.
 *
 * @private
 */
ImageTile.prototype.handleImageLoad_ = function () {
  if (this.image_.naturalWidth && this.image_.naturalHeight) {
    this.state = _TileState2.default.LOADED;
  } else {
    this.state = _TileState2.default.EMPTY;
  }
  this.unlistenImage_();
  this.changed();
};

/**
 * @inheritDoc
 * @api
 */
ImageTile.prototype.load = function () {
  if (this.state == _TileState2.default.ERROR) {
    this.state = _TileState2.default.IDLE;
    this.image_ = new Image();
    if (this.crossOrigin_ !== null) {
      this.image_.crossOrigin = this.crossOrigin_;
    }
  }
  if (this.state == _TileState2.default.IDLE) {
    this.state = _TileState2.default.LOADING;
    this.changed();
    this.imageListenerKeys_ = [(0, _events.listenOnce)(this.image_, _EventType2.default.ERROR, this.handleImageError_, this), (0, _events.listenOnce)(this.image_, _EventType2.default.LOAD, this.handleImageLoad_, this)];
    this.tileLoadFunction_(this, this.src_);
  }
};

/**
 * Discards event handlers which listen for load completion or errors.
 *
 * @private
 */
ImageTile.prototype.unlistenImage_ = function () {
  this.imageListenerKeys_.forEach(_events.unlistenByKey);
  this.imageListenerKeys_ = null;
};

/**
 * Get a 1-pixel blank image.
 * @return {HTMLCanvasElement} Blank image.
 */
function getBlankImage() {
  var ctx = (0, _dom.createCanvasContext2D)(1, 1);
  ctx.fillStyle = 'rgba(0,0,0,0)';
  ctx.fillRect(0, 0, 1, 1);
  return ctx.canvas;
}

exports.default = ImageTile;

/***/ }),

/***/ "./node_modules/ol/Object.js":
/*!***********************************!*\
  !*** ./node_modules/ol/Object.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getChangeEventType = getChangeEventType;

var _index = __webpack_require__(/*! ./index.js */ "./node_modules/ol/index.js");

var _ObjectEventType = __webpack_require__(/*! ./ObjectEventType.js */ "./node_modules/ol/ObjectEventType.js");

var _ObjectEventType2 = _interopRequireDefault(_ObjectEventType);

var _Observable = __webpack_require__(/*! ./Observable.js */ "./node_modules/ol/Observable.js");

var _Observable2 = _interopRequireDefault(_Observable);

var _Event = __webpack_require__(/*! ./events/Event.js */ "./node_modules/ol/events/Event.js");

var _Event2 = _interopRequireDefault(_Event);

var _obj = __webpack_require__(/*! ./obj.js */ "./node_modules/ol/obj.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @classdesc
 * Events emitted by {@link module:ol/Object~BaseObject} instances are instances of
 * this type.
 *
 * @param {string} type The event type.
 * @param {string} key The property name.
 * @param {*} oldValue The old value for `key`.
 * @extends {module:ol/events/Event}
 * @constructor
 */
var ObjectEvent = function ObjectEvent(type, key, oldValue) {
  _Event2.default.call(this, type);

  /**
   * The name of the property whose value is changing.
   * @type {string}
   * @api
   */
  this.key = key;

  /**
   * The old value. To get the new value use `e.target.get(e.key)` where
   * `e` is the event object.
   * @type {*}
   * @api
   */
  this.oldValue = oldValue;
}; /**
    * @module ol/Object
    */

(0, _index.inherits)(ObjectEvent, _Event2.default);

/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * Most non-trivial classes inherit from this.
 *
 * This extends {@link module:ol/Observable} with observable
 * properties, where each property is observable as well as the object as a
 * whole.
 *
 * Classes that inherit from this have pre-defined properties, to which you can
 * add your owns. The pre-defined properties are listed in this documentation as
 * 'Observable Properties', and have their own accessors; for example,
 * {@link module:ol/Map~Map} has a `target` property, accessed with
 * `getTarget()` and changed with `setTarget()`. Not all properties are however
 * settable. There are also general-purpose accessors `get()` and `set()`. For
 * example, `get('target')` is equivalent to `getTarget()`.
 *
 * The `set` accessors trigger a change event, and you can monitor this by
 * registering a listener. For example, {@link module:ol/View~View} has a
 * `center` property, so `view.on('change:center', function(evt) {...});` would
 * call the function whenever the value of the center property changes. Within
 * the function, `evt.target` would be the view, so `evt.target.getCenter()`
 * would return the new center.
 *
 * You can add your own observable properties with
 * `object.set('prop', 'value')`, and retrieve that with `object.get('prop')`.
 * You can listen for changes on that property value with
 * `object.on('change:prop', listener)`. You can get a list of all
 * properties with {@link module:ol/Object~BaseObject#getProperties}.
 *
 * Note that the observable properties are separate from standard JS properties.
 * You can, for example, give your map object a title with
 * `map.title='New title'` and with `map.set('title', 'Another title')`. The
 * first will be a `hasOwnProperty`; the second will appear in
 * `getProperties()`. Only the second is observable.
 *
 * Properties can be deleted by using the unset method. E.g.
 * object.unset('foo').
 *
 * @constructor
 * @extends {module:ol/Observable}
 * @param {Object.<string, *>=} opt_values An object with key-value pairs.
 * @fires module:ol/Object~ObjectEvent
 * @api
 */
var BaseObject = function BaseObject(opt_values) {
  _Observable2.default.call(this);

  // Call {@link module:ol~getUid} to ensure that the order of objects' ids is
  // the same as the order in which they were created.  This also helps to
  // ensure that object properties are always added in the same order, which
  // helps many JavaScript engines generate faster code.
  (0, _index.getUid)(this);

  /**
   * @private
   * @type {!Object.<string, *>}
   */
  this.values_ = {};

  if (opt_values !== undefined) {
    this.setProperties(opt_values);
  }
};

(0, _index.inherits)(BaseObject, _Observable2.default);

/**
 * @type {Object.<string, string>}
 */
var changeEventTypeCache = {};

/**
 * @param {string} key Key name.
 * @return {string} Change name.
 */
function getChangeEventType(key) {
  return changeEventTypeCache.hasOwnProperty(key) ? changeEventTypeCache[key] : changeEventTypeCache[key] = 'change:' + key;
}

/**
 * Gets a value.
 * @param {string} key Key name.
 * @return {*} Value.
 * @api
 */
BaseObject.prototype.get = function (key) {
  var value = void 0;
  if (this.values_.hasOwnProperty(key)) {
    value = this.values_[key];
  }
  return value;
};

/**
 * Get a list of object property names.
 * @return {Array.<string>} List of property names.
 * @api
 */
BaseObject.prototype.getKeys = function () {
  return Object.keys(this.values_);
};

/**
 * Get an object of all property names and values.
 * @return {Object.<string, *>} Object.
 * @api
 */
BaseObject.prototype.getProperties = function () {
  return (0, _obj.assign)({}, this.values_);
};

/**
 * @param {string} key Key name.
 * @param {*} oldValue Old value.
 */
BaseObject.prototype.notify = function (key, oldValue) {
  var eventType = void 0;
  eventType = getChangeEventType(key);
  this.dispatchEvent(new ObjectEvent(eventType, key, oldValue));
  eventType = _ObjectEventType2.default.PROPERTYCHANGE;
  this.dispatchEvent(new ObjectEvent(eventType, key, oldValue));
};

/**
 * Sets a value.
 * @param {string} key Key name.
 * @param {*} value Value.
 * @param {boolean=} opt_silent Update without triggering an event.
 * @api
 */
BaseObject.prototype.set = function (key, value, opt_silent) {
  if (opt_silent) {
    this.values_[key] = value;
  } else {
    var oldValue = this.values_[key];
    this.values_[key] = value;
    if (oldValue !== value) {
      this.notify(key, oldValue);
    }
  }
};

/**
 * Sets a collection of key-value pairs.  Note that this changes any existing
 * properties and adds new ones (it does not remove any existing properties).
 * @param {Object.<string, *>} values Values.
 * @param {boolean=} opt_silent Update without triggering an event.
 * @api
 */
BaseObject.prototype.setProperties = function (values, opt_silent) {
  for (var key in values) {
    this.set(key, values[key], opt_silent);
  }
};

/**
 * Unsets a property.
 * @param {string} key Key name.
 * @param {boolean=} opt_silent Unset without triggering an event.
 * @api
 */
BaseObject.prototype.unset = function (key, opt_silent) {
  if (key in this.values_) {
    var oldValue = this.values_[key];
    delete this.values_[key];
    if (!opt_silent) {
      this.notify(key, oldValue);
    }
  }
};

exports.default = BaseObject;

/***/ }),

/***/ "./node_modules/ol/ObjectEventType.js":
/*!********************************************!*\
  !*** ./node_modules/ol/ObjectEventType.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @module ol/ObjectEventType
 */

/**
 * @enum {string}
 */
exports.default = {
  /**
   * Triggered when a property is changed.
   * @event module:ol/Object~ObjectEvent#propertychange
   * @api
   */
  PROPERTYCHANGE: 'propertychange'
};

/***/ }),

/***/ "./node_modules/ol/Observable.js":
/*!***************************************!*\
  !*** ./node_modules/ol/Observable.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unByKey = unByKey;

var _index = __webpack_require__(/*! ./index.js */ "./node_modules/ol/index.js");

var _events = __webpack_require__(/*! ./events.js */ "./node_modules/ol/events.js");

var _EventTarget = __webpack_require__(/*! ./events/EventTarget.js */ "./node_modules/ol/events/EventTarget.js");

var _EventTarget2 = _interopRequireDefault(_EventTarget);

var _EventType = __webpack_require__(/*! ./events/EventType.js */ "./node_modules/ol/events/EventType.js");

var _EventType2 = _interopRequireDefault(_EventType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * An event target providing convenient methods for listener registration
 * and unregistration. A generic `change` event is always available through
 * {@link module:ol/Observable~Observable#changed}.
 *
 * @constructor
 * @extends {module:ol/events/EventTarget}
 * @fires module:ol/events/Event~Event
 * @struct
 * @api
 */
/**
 * @module ol/Observable
 */
var Observable = function Observable() {

  _EventTarget2.default.call(this);

  /**
   * @private
   * @type {number}
   */
  this.revision_ = 0;
};

(0, _index.inherits)(Observable, _EventTarget2.default);

/**
 * Removes an event listener using the key returned by `on()` or `once()`.
 * @param {module:ol/events~EventsKey|Array.<module:ol/events~EventsKey>} key The key returned by `on()`
 *     or `once()` (or an array of keys).
 * @api
 */
function unByKey(key) {
  if (Array.isArray(key)) {
    for (var i = 0, ii = key.length; i < ii; ++i) {
      (0, _events.unlistenByKey)(key[i]);
    }
  } else {
    (0, _events.unlistenByKey)( /** @type {module:ol/events~EventsKey} */key);
  }
}

/**
 * Increases the revision counter and dispatches a 'change' event.
 * @api
 */
Observable.prototype.changed = function () {
  ++this.revision_;
  this.dispatchEvent(_EventType2.default.CHANGE);
};

/**
 * Dispatches an event and calls all listeners listening for events
 * of this type. The event parameter can either be a string or an
 * Object with a `type` property.
 *
 * @param {{type: string,
 *     target: (EventTarget|module:ol/events/EventTarget|undefined)}|
 *     module:ol/events/Event|string} event Event object.
 * @function
 * @api
 */
Observable.prototype.dispatchEvent;

/**
 * Get the version number for this object.  Each time the object is modified,
 * its version number will be incremented.
 * @return {number} Revision.
 * @api
 */
Observable.prototype.getRevision = function () {
  return this.revision_;
};

/**
 * Listen for a certain type of event.
 * @param {string|Array.<string>} type The event type or array of event types.
 * @param {function(?): ?} listener The listener function.
 * @return {module:ol/events~EventsKey|Array.<module:ol/events~EventsKey>} Unique key for the listener. If
 *     called with an array of event types as the first argument, the return
 *     will be an array of keys.
 * @api
 */
Observable.prototype.on = function (type, listener) {
  if (Array.isArray(type)) {
    var len = type.length;
    var keys = new Array(len);
    for (var i = 0; i < len; ++i) {
      keys[i] = (0, _events.listen)(this, type[i], listener);
    }
    return keys;
  } else {
    return (0, _events.listen)(this, /** @type {string} */type, listener);
  }
};

/**
 * Listen once for a certain type of event.
 * @param {string|Array.<string>} type The event type or array of event types.
 * @param {function(?): ?} listener The listener function.
 * @return {module:ol/events~EventsKey|Array.<module:ol/events~EventsKey>} Unique key for the listener. If
 *     called with an array of event types as the first argument, the return
 *     will be an array of keys.
 * @api
 */
Observable.prototype.once = function (type, listener) {
  if (Array.isArray(type)) {
    var len = type.length;
    var keys = new Array(len);
    for (var i = 0; i < len; ++i) {
      keys[i] = (0, _events.listenOnce)(this, type[i], listener);
    }
    return keys;
  } else {
    return (0, _events.listenOnce)(this, /** @type {string} */type, listener);
  }
};

/**
 * Unlisten for a certain type of event.
 * @param {string|Array.<string>} type The event type or array of event types.
 * @param {function(?): ?} listener The listener function.
 * @api
 */
Observable.prototype.un = function (type, listener) {
  if (Array.isArray(type)) {
    for (var i = 0, ii = type.length; i < ii; ++i) {
      (0, _events.unlisten)(this, type[i], listener);
    }
    return;
  } else {
    (0, _events.unlisten)(this, /** @type {string} */type, listener);
  }
};
exports.default = Observable;

/***/ }),

/***/ "./node_modules/ol/Tile.js":
/*!*********************************!*\
  !*** ./node_modules/ol/Tile.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ./index.js */ "./node_modules/ol/index.js");

var _TileState = __webpack_require__(/*! ./TileState.js */ "./node_modules/ol/TileState.js");

var _TileState2 = _interopRequireDefault(_TileState);

var _easing = __webpack_require__(/*! ./easing.js */ "./node_modules/ol/easing.js");

var _EventTarget = __webpack_require__(/*! ./events/EventTarget.js */ "./node_modules/ol/events/EventTarget.js");

var _EventTarget2 = _interopRequireDefault(_EventTarget);

var _EventType = __webpack_require__(/*! ./events/EventType.js */ "./node_modules/ol/events/EventType.js");

var _EventType2 = _interopRequireDefault(_EventType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A function that takes an {@link module:ol/Tile} for the tile and a
 * `{string}` for the url as arguments.
 *
 * @typedef {function(module:ol/Tile, string)} LoadFunction
 * @api
 */

/**
 * {@link module:ol/source/Tile~Tile} sources use a function of this type to get
 * the url that provides a tile for a given tile coordinate.
 *
 * This function takes an {@link module:ol/tilecoord~TileCoord} for the tile
 * coordinate, a `{number}` representing the pixel ratio and a
 * {@link module:ol/proj/Projection} for the projection  as arguments
 * and returns a `{string}` representing the tile URL, or undefined if no tile
 * should be requested for the passed tile coordinate.
 *
 * @typedef {function(module:ol/tilecoord~TileCoord, number,
 *           module:ol/proj/Projection): (string|undefined)} UrlFunction
 * @api
 */

/**
 * @typedef {Object} Options
 * @property {number} [transition=250] A duration for tile opacity
 * transitions in milliseconds. A duration of 0 disables the opacity transition.
 * @api
 */

/**
 * @classdesc
 * Base class for tiles.
 *
 * @constructor
 * @abstract
 * @extends {module:ol/events/EventTarget}
 * @param {module:ol/tilecoord~TileCoord} tileCoord Tile coordinate.
 * @param {module:ol/TileState} state State.
 * @param {module:ol/Tile~Options=} opt_options Tile options.
 */
var Tile = function Tile(tileCoord, state, opt_options) {
  _EventTarget2.default.call(this);

  var options = opt_options ? opt_options : {};

  /**
   * @type {module:ol/tilecoord~TileCoord}
   */
  this.tileCoord = tileCoord;

  /**
   * @protected
   * @type {module:ol/TileState}
   */
  this.state = state;

  /**
   * An "interim" tile for this tile. The interim tile may be used while this
   * one is loading, for "smooth" transitions when changing params/dimensions
   * on the source.
   * @type {module:ol/Tile}
   */
  this.interimTile = null;

  /**
   * A key assigned to the tile. This is used by the tile source to determine
   * if this tile can effectively be used, or if a new tile should be created
   * and this one be used as an interim tile for this new tile.
   * @type {string}
   */
  this.key = '';

  /**
   * The duration for the opacity transition.
   * @type {number}
   */
  this.transition_ = options.transition === undefined ? 250 : options.transition;

  /**
   * Lookup of start times for rendering transitions.  If the start time is
   * equal to -1, the transition is complete.
   * @type {Object.<number, number>}
   */
  this.transitionStarts_ = {};
}; /**
    * @module ol/Tile
    */


(0, _index.inherits)(Tile, _EventTarget2.default);

/**
 * @protected
 */
Tile.prototype.changed = function () {
  this.dispatchEvent(_EventType2.default.CHANGE);
};

/**
 * @return {string} Key.
 */
Tile.prototype.getKey = function () {
  return this.key + '/' + this.tileCoord;
};

/**
 * Get the interim tile most suitable for rendering using the chain of interim
 * tiles. This corresponds to the  most recent tile that has been loaded, if no
 * such tile exists, the original tile is returned.
 * @return {!module:ol/Tile} Best tile for rendering.
 */
Tile.prototype.getInterimTile = function () {
  if (!this.interimTile) {
    //empty chain
    return this;
  }
  var tile = this.interimTile;

  // find the first loaded tile and return it. Since the chain is sorted in
  // decreasing order of creation time, there is no need to search the remainder
  // of the list (all those tiles correspond to older requests and will be
  // cleaned up by refreshInterimChain)
  do {
    if (tile.getState() == _TileState2.default.LOADED) {
      return tile;
    }
    tile = tile.interimTile;
  } while (tile);

  // we can not find a better tile
  return this;
};

/**
 * Goes through the chain of interim tiles and discards sections of the chain
 * that are no longer relevant.
 */
Tile.prototype.refreshInterimChain = function () {
  if (!this.interimTile) {
    return;
  }

  var tile = this.interimTile;
  var prev = this;

  do {
    if (tile.getState() == _TileState2.default.LOADED) {
      //we have a loaded tile, we can discard the rest of the list
      //we would could abort any LOADING tile request
      //older than this tile (i.e. any LOADING tile following this entry in the chain)
      tile.interimTile = null;
      break;
    } else if (tile.getState() == _TileState2.default.LOADING) {
      //keep this LOADING tile any loaded tiles later in the chain are
      //older than this tile, so we're still interested in the request
      prev = tile;
    } else if (tile.getState() == _TileState2.default.IDLE) {
      //the head of the list is the most current tile, we don't need
      //to start any other requests for this chain
      prev.interimTile = tile.interimTile;
    } else {
      prev = tile;
    }
    tile = prev.interimTile;
  } while (tile);
};

/**
 * Get the tile coordinate for this tile.
 * @return {module:ol/tilecoord~TileCoord} The tile coordinate.
 * @api
 */
Tile.prototype.getTileCoord = function () {
  return this.tileCoord;
};

/**
 * @return {module:ol/TileState} State.
 */
Tile.prototype.getState = function () {
  return this.state;
};

/**
 * @param {module:ol/TileState} state State.
 */
Tile.prototype.setState = function (state) {
  this.state = state;
  this.changed();
};

/**
 * Load the image or retry if loading previously failed.
 * Loading is taken care of by the tile queue, and calling this method is
 * only needed for preloading or for reloading in case of an error.
 * @abstract
 * @api
 */
Tile.prototype.load = function () {};

/**
 * Get the alpha value for rendering.
 * @param {number} id An id for the renderer.
 * @param {number} time The render frame time.
 * @return {number} A number between 0 and 1.
 */
Tile.prototype.getAlpha = function (id, time) {
  if (!this.transition_) {
    return 1;
  }

  var start = this.transitionStarts_[id];
  if (!start) {
    start = time;
    this.transitionStarts_[id] = start;
  } else if (start === -1) {
    return 1;
  }

  var delta = time - start + 1000 / 60; // avoid rendering at 0
  if (delta >= this.transition_) {
    return 1;
  }
  return (0, _easing.easeIn)(delta / this.transition_);
};

/**
 * Determine if a tile is in an alpha transition.  A tile is considered in
 * transition if tile.getAlpha() has not yet been called or has been called
 * and returned 1.
 * @param {number} id An id for the renderer.
 * @return {boolean} The tile is in transition.
 */
Tile.prototype.inTransition = function (id) {
  if (!this.transition_) {
    return false;
  }
  return this.transitionStarts_[id] !== -1;
};

/**
 * Mark a transition as complete.
 * @param {number} id An id for the renderer.
 */
Tile.prototype.endTransition = function (id) {
  if (this.transition_) {
    this.transitionStarts_[id] = -1;
  }
};
exports.default = Tile;

/***/ }),

/***/ "./node_modules/ol/TileCache.js":
/*!**************************************!*\
  !*** ./node_modules/ol/TileCache.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ./index.js */ "./node_modules/ol/index.js");

var _LRUCache = __webpack_require__(/*! ./structs/LRUCache.js */ "./node_modules/ol/structs/LRUCache.js");

var _LRUCache2 = _interopRequireDefault(_LRUCache);

var _tilecoord = __webpack_require__(/*! ./tilecoord.js */ "./node_modules/ol/tilecoord.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @constructor
 * @extends {module:ol/structs/LRUCache.<module:ol/Tile>}
 * @param {number=} opt_highWaterMark High water mark.
 * @struct
 */
var TileCache = function TileCache(opt_highWaterMark) {

  _LRUCache2.default.call(this, opt_highWaterMark);
}; /**
    * @module ol/TileCache
    */


(0, _index.inherits)(TileCache, _LRUCache2.default);

/**
 * @param {!Object.<string, module:ol/TileRange>} usedTiles Used tiles.
 */
TileCache.prototype.expireCache = function (usedTiles) {
  while (this.canExpireCache()) {
    var tile = this.peekLast();
    var zKey = tile.tileCoord[0].toString();
    if (zKey in usedTiles && usedTiles[zKey].contains(tile.tileCoord)) {
      break;
    } else {
      this.pop().dispose();
    }
  }
};

/**
 * Prune all tiles from the cache that don't have the same z as the newest tile.
 */
TileCache.prototype.pruneExceptNewestZ = function () {
  if (this.getCount() === 0) {
    return;
  }
  var key = this.peekFirstKey();
  var tileCoord = (0, _tilecoord.fromKey)(key);
  var z = tileCoord[0];
  this.forEach(function (tile) {
    if (tile.tileCoord[0] !== z) {
      this.remove((0, _tilecoord.getKey)(tile.tileCoord));
      tile.dispose();
    }
  }, this);
};
exports.default = TileCache;

/***/ }),

/***/ "./node_modules/ol/TileRange.js":
/*!**************************************!*\
  !*** ./node_modules/ol/TileRange.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOrUpdate = createOrUpdate;
/**
 * @module ol/TileRange
 */
/**
 * A representation of a contiguous block of tiles.  A tile range is specified
 * by its min/max tile coordinates and is inclusive of coordinates.
 *
 * @constructor
 * @param {number} minX Minimum X.
 * @param {number} maxX Maximum X.
 * @param {number} minY Minimum Y.
 * @param {number} maxY Maximum Y.
 * @struct
 */
var TileRange = function TileRange(minX, maxX, minY, maxY) {

  /**
   * @type {number}
   */
  this.minX = minX;

  /**
   * @type {number}
   */
  this.maxX = maxX;

  /**
   * @type {number}
   */
  this.minY = minY;

  /**
   * @type {number}
   */
  this.maxY = maxY;
};

/**
 * @param {number} minX Minimum X.
 * @param {number} maxX Maximum X.
 * @param {number} minY Minimum Y.
 * @param {number} maxY Maximum Y.
 * @param {module:ol/TileRange=} tileRange TileRange.
 * @return {module:ol/TileRange} Tile range.
 */
function createOrUpdate(minX, maxX, minY, maxY, tileRange) {
  if (tileRange !== undefined) {
    tileRange.minX = minX;
    tileRange.maxX = maxX;
    tileRange.minY = minY;
    tileRange.maxY = maxY;
    return tileRange;
  } else {
    return new TileRange(minX, maxX, minY, maxY);
  }
}

/**
 * @param {module:ol/tilecoord~TileCoord} tileCoord Tile coordinate.
 * @return {boolean} Contains tile coordinate.
 */
TileRange.prototype.contains = function (tileCoord) {
  return this.containsXY(tileCoord[1], tileCoord[2]);
};

/**
 * @param {module:ol/TileRange} tileRange Tile range.
 * @return {boolean} Contains.
 */
TileRange.prototype.containsTileRange = function (tileRange) {
  return this.minX <= tileRange.minX && tileRange.maxX <= this.maxX && this.minY <= tileRange.minY && tileRange.maxY <= this.maxY;
};

/**
 * @param {number} x Tile coordinate x.
 * @param {number} y Tile coordinate y.
 * @return {boolean} Contains coordinate.
 */
TileRange.prototype.containsXY = function (x, y) {
  return this.minX <= x && x <= this.maxX && this.minY <= y && y <= this.maxY;
};

/**
 * @param {module:ol/TileRange} tileRange Tile range.
 * @return {boolean} Equals.
 */
TileRange.prototype.equals = function (tileRange) {
  return this.minX == tileRange.minX && this.minY == tileRange.minY && this.maxX == tileRange.maxX && this.maxY == tileRange.maxY;
};

/**
 * @param {module:ol/TileRange} tileRange Tile range.
 */
TileRange.prototype.extend = function (tileRange) {
  if (tileRange.minX < this.minX) {
    this.minX = tileRange.minX;
  }
  if (tileRange.maxX > this.maxX) {
    this.maxX = tileRange.maxX;
  }
  if (tileRange.minY < this.minY) {
    this.minY = tileRange.minY;
  }
  if (tileRange.maxY > this.maxY) {
    this.maxY = tileRange.maxY;
  }
};

/**
 * @return {number} Height.
 */
TileRange.prototype.getHeight = function () {
  return this.maxY - this.minY + 1;
};

/**
 * @return {module:ol/size~Size} Size.
 */
TileRange.prototype.getSize = function () {
  return [this.getWidth(), this.getHeight()];
};

/**
 * @return {number} Width.
 */
TileRange.prototype.getWidth = function () {
  return this.maxX - this.minX + 1;
};

/**
 * @param {module:ol/TileRange} tileRange Tile range.
 * @return {boolean} Intersects.
 */
TileRange.prototype.intersects = function (tileRange) {
  return this.minX <= tileRange.maxX && this.maxX >= tileRange.minX && this.minY <= tileRange.maxY && this.maxY >= tileRange.minY;
};
exports.default = TileRange;

/***/ }),

/***/ "./node_modules/ol/TileState.js":
/*!**************************************!*\
  !*** ./node_modules/ol/TileState.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @module ol/TileState
 */

/**
 * @enum {number}
 */
exports.default = {
  IDLE: 0,
  LOADING: 1,
  LOADED: 2,
  ERROR: 3,
  EMPTY: 4,
  ABORT: 5
};

/***/ }),

/***/ "./node_modules/ol/array.js":
/*!**********************************!*\
  !*** ./node_modules/ol/array.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.binarySearch = binarySearch;
exports.numberSafeCompareFunction = numberSafeCompareFunction;
exports.includes = includes;
exports.linearFindNearest = linearFindNearest;
exports.reverseSubArray = reverseSubArray;
exports.extend = extend;
exports.remove = remove;
exports.find = find;
exports.equals = equals;
exports.stableSort = stableSort;
exports.findIndex = findIndex;
exports.isSorted = isSorted;
/**
 * @module ol/array
 */

/**
 * Performs a binary search on the provided sorted list and returns the index of the item if found. If it can't be found it'll return -1.
 * https://github.com/darkskyapp/binary-search
 *
 * @param {Array.<*>} haystack Items to search through.
 * @param {*} needle The item to look for.
 * @param {Function=} opt_comparator Comparator function.
 * @return {number} The index of the item if found, -1 if not.
 */
function binarySearch(haystack, needle, opt_comparator) {
  var mid = void 0,
      cmp = void 0;
  var comparator = opt_comparator || numberSafeCompareFunction;
  var low = 0;
  var high = haystack.length;
  var found = false;

  while (low < high) {
    /* Note that "(low + high) >>> 1" may overflow, and results in a typecast
     * to double (which gives the wrong results). */
    mid = low + (high - low >> 1);
    cmp = +comparator(haystack[mid], needle);

    if (cmp < 0.0) {
      /* Too low. */
      low = mid + 1;
    } else {
      /* Key found or too high */
      high = mid;
      found = !cmp;
    }
  }

  /* Key not found. */
  return found ? low : ~low;
}

/**
 * Compare function for array sort that is safe for numbers.
 * @param {*} a The first object to be compared.
 * @param {*} b The second object to be compared.
 * @return {number} A negative number, zero, or a positive number as the first
 *     argument is less than, equal to, or greater than the second.
 */
function numberSafeCompareFunction(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}

/**
 * Whether the array contains the given object.
 * @param {Array.<*>} arr The array to test for the presence of the element.
 * @param {*} obj The object for which to test.
 * @return {boolean} The object is in the array.
 */
function includes(arr, obj) {
  return arr.indexOf(obj) >= 0;
}

/**
 * @param {Array.<number>} arr Array.
 * @param {number} target Target.
 * @param {number} direction 0 means return the nearest, > 0
 *    means return the largest nearest, < 0 means return the
 *    smallest nearest.
 * @return {number} Index.
 */
function linearFindNearest(arr, target, direction) {
  var n = arr.length;
  if (arr[0] <= target) {
    return 0;
  } else if (target <= arr[n - 1]) {
    return n - 1;
  } else {
    var i = void 0;
    if (direction > 0) {
      for (i = 1; i < n; ++i) {
        if (arr[i] < target) {
          return i - 1;
        }
      }
    } else if (direction < 0) {
      for (i = 1; i < n; ++i) {
        if (arr[i] <= target) {
          return i;
        }
      }
    } else {
      for (i = 1; i < n; ++i) {
        if (arr[i] == target) {
          return i;
        } else if (arr[i] < target) {
          if (arr[i - 1] - target < target - arr[i]) {
            return i - 1;
          } else {
            return i;
          }
        }
      }
    }
    return n - 1;
  }
}

/**
 * @param {Array.<*>} arr Array.
 * @param {number} begin Begin index.
 * @param {number} end End index.
 */
function reverseSubArray(arr, begin, end) {
  while (begin < end) {
    var tmp = arr[begin];
    arr[begin] = arr[end];
    arr[end] = tmp;
    ++begin;
    --end;
  }
}

/**
 * @param {Array.<VALUE>} arr The array to modify.
 * @param {!Array.<VALUE>|VALUE} data The elements or arrays of elements to add to arr.
 * @template VALUE
 */
function extend(arr, data) {
  var extension = Array.isArray(data) ? data : [data];
  var length = extension.length;
  for (var i = 0; i < length; i++) {
    arr[arr.length] = extension[i];
  }
}

/**
 * @param {Array.<VALUE>} arr The array to modify.
 * @param {VALUE} obj The element to remove.
 * @template VALUE
 * @return {boolean} If the element was removed.
 */
function remove(arr, obj) {
  var i = arr.indexOf(obj);
  var found = i > -1;
  if (found) {
    arr.splice(i, 1);
  }
  return found;
}

/**
 * @param {Array.<VALUE>} arr The array to search in.
 * @param {function(VALUE, number, ?) : boolean} func The function to compare.
 * @template VALUE
 * @return {VALUE|null} The element found or null.
 */
function find(arr, func) {
  var length = arr.length >>> 0;
  var value = void 0;

  for (var i = 0; i < length; i++) {
    value = arr[i];
    if (func(value, i, arr)) {
      return value;
    }
  }
  return null;
}

/**
 * @param {Array|Uint8ClampedArray} arr1 The first array to compare.
 * @param {Array|Uint8ClampedArray} arr2 The second array to compare.
 * @return {boolean} Whether the two arrays are equal.
 */
function equals(arr1, arr2) {
  var len1 = arr1.length;
  if (len1 !== arr2.length) {
    return false;
  }
  for (var i = 0; i < len1; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

/**
 * @param {Array.<*>} arr The array to sort (modifies original).
 * @param {Function} compareFnc Comparison function.
 */
function stableSort(arr, compareFnc) {
  var length = arr.length;
  var tmp = Array(arr.length);
  var i = void 0;
  for (i = 0; i < length; i++) {
    tmp[i] = { index: i, value: arr[i] };
  }
  tmp.sort(function (a, b) {
    return compareFnc(a.value, b.value) || a.index - b.index;
  });
  for (i = 0; i < arr.length; i++) {
    arr[i] = tmp[i].value;
  }
}

/**
 * @param {Array.<*>} arr The array to search in.
 * @param {Function} func Comparison function.
 * @return {number} Return index.
 */
function findIndex(arr, func) {
  var index = void 0;
  var found = !arr.every(function (el, idx) {
    index = idx;
    return !func(el, idx, arr);
  });
  return found ? index : -1;
}

/**
 * @param {Array.<*>} arr The array to test.
 * @param {Function=} opt_func Comparison function.
 * @param {boolean=} opt_strict Strictly sorted (default false).
 * @return {boolean} Return index.
 */
function isSorted(arr, opt_func, opt_strict) {
  var compare = opt_func || numberSafeCompareFunction;
  return arr.every(function (currentVal, index) {
    if (index === 0) {
      return true;
    }
    var res = compare(arr[index - 1], currentVal);
    return !(res > 0 || opt_strict && res === 0);
  });
}

/***/ }),

/***/ "./node_modules/ol/asserts.js":
/*!************************************!*\
  !*** ./node_modules/ol/asserts.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assert = assert;

var _AssertionError = __webpack_require__(/*! ./AssertionError.js */ "./node_modules/ol/AssertionError.js");

var _AssertionError2 = _interopRequireDefault(_AssertionError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {*} assertion Assertion we expected to be truthy.
 * @param {number} errorCode Error code.
 */
function assert(assertion, errorCode) {
  if (!assertion) {
    throw new _AssertionError2.default(errorCode);
  }
} /**
   * @module ol/asserts
   */

/***/ }),

/***/ "./node_modules/ol/dom.js":
/*!********************************!*\
  !*** ./node_modules/ol/dom.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCanvasContext2D = createCanvasContext2D;
exports.outerWidth = outerWidth;
exports.outerHeight = outerHeight;
exports.replaceNode = replaceNode;
exports.removeNode = removeNode;
exports.removeChildren = removeChildren;
/**
 * @module ol/dom
 */

/**
 * Create an html canvas element and returns its 2d context.
 * @param {number=} opt_width Canvas width.
 * @param {number=} opt_height Canvas height.
 * @return {CanvasRenderingContext2D} The context.
 */
function createCanvasContext2D(opt_width, opt_height) {
  var canvas = /** @type {HTMLCanvasElement} */document.createElement('CANVAS');
  if (opt_width) {
    canvas.width = opt_width;
  }
  if (opt_height) {
    canvas.height = opt_height;
  }
  return (/** @type {CanvasRenderingContext2D} */canvas.getContext('2d')
  );
}

/**
 * Get the current computed width for the given element including margin,
 * padding and border.
 * Equivalent to jQuery's `$(el).outerWidth(true)`.
 * @param {!Element} element Element.
 * @return {number} The width.
 */
function outerWidth(element) {
  var width = element.offsetWidth;
  var style = getComputedStyle(element);
  width += parseInt(style.marginLeft, 10) + parseInt(style.marginRight, 10);

  return width;
}

/**
 * Get the current computed height for the given element including margin,
 * padding and border.
 * Equivalent to jQuery's `$(el).outerHeight(true)`.
 * @param {!Element} element Element.
 * @return {number} The height.
 */
function outerHeight(element) {
  var height = element.offsetHeight;
  var style = getComputedStyle(element);
  height += parseInt(style.marginTop, 10) + parseInt(style.marginBottom, 10);

  return height;
}

/**
 * @param {Node} newNode Node to replace old node
 * @param {Node} oldNode The node to be replaced
 */
function replaceNode(newNode, oldNode) {
  var parent = oldNode.parentNode;
  if (parent) {
    parent.replaceChild(newNode, oldNode);
  }
}

/**
 * @param {Node} node The node to remove.
 * @returns {Node} The node that was removed or null.
 */
function removeNode(node) {
  return node && node.parentNode ? node.parentNode.removeChild(node) : null;
}

/**
 * @param {Node} node The node to remove the children from.
 */
function removeChildren(node) {
  while (node.lastChild) {
    node.removeChild(node.lastChild);
  }
}

/***/ }),

/***/ "./node_modules/ol/easing.js":
/*!***********************************!*\
  !*** ./node_modules/ol/easing.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.easeIn = easeIn;
exports.easeOut = easeOut;
exports.inAndOut = inAndOut;
exports.linear = linear;
exports.upAndDown = upAndDown;
/**
 * @module ol/easing
 */

/**
 * Start slow and speed up.
 * @param {number} t Input between 0 and 1.
 * @return {number} Output between 0 and 1.
 * @api
 */
function easeIn(t) {
  return Math.pow(t, 3);
}

/**
 * Start fast and slow down.
 * @param {number} t Input between 0 and 1.
 * @return {number} Output between 0 and 1.
 * @api
 */
function easeOut(t) {
  return 1 - easeIn(1 - t);
}

/**
 * Start slow, speed up, and then slow down again.
 * @param {number} t Input between 0 and 1.
 * @return {number} Output between 0 and 1.
 * @api
 */
function inAndOut(t) {
  return 3 * t * t - 2 * t * t * t;
}

/**
 * Maintain a constant speed over time.
 * @param {number} t Input between 0 and 1.
 * @return {number} Output between 0 and 1.
 * @api
 */
function linear(t) {
  return t;
}

/**
 * Start slow, speed up, and at the very end slow down again.  This has the
 * same general behavior as {@link module:ol/easing~inAndOut}, but the final
 * slowdown is delayed.
 * @param {number} t Input between 0 and 1.
 * @return {number} Output between 0 and 1.
 * @api
 */
function upAndDown(t) {
  if (t < 0.5) {
    return inAndOut(2 * t);
  } else {
    return 1 - inAndOut(2 * (t - 0.5));
  }
}

/***/ }),

/***/ "./node_modules/ol/events.js":
/*!***********************************!*\
  !*** ./node_modules/ol/events.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bindListener = bindListener;
exports.findListener = findListener;
exports.getListeners = getListeners;
exports.listen = listen;
exports.listenOnce = listenOnce;
exports.unlisten = unlisten;
exports.unlistenByKey = unlistenByKey;
exports.unlistenAll = unlistenAll;

var _obj = __webpack_require__(/*! ./obj.js */ "./node_modules/ol/obj.js");

/**
 * Key to use with {@link module:ol/Observable~Observable#unByKey}.
 * @typedef {Object} EventsKey
 * @property {Object} [bindTo]
 * @property {module:ol/events~ListenerFunction} [boundListener]
 * @property {boolean} callOnce
 * @property {number} [deleteIndex]
 * @property {module:ol/events~ListenerFunction} listener
 * @property {EventTarget|module:ol/events/EventTarget} target
 * @property {string} type
 * @api
 */

/**
 * Listener function. This function is called with an event object as argument.
 * When the function returns `false`, event propagation will stop.
 *
 * @typedef {function(module:ol/events/Event)|function(module:ol/events/Event): boolean} ListenerFunction
 * @api
 */

/**
 * @param {module:ol/events~EventsKey} listenerObj Listener object.
 * @return {module:ol/events~ListenerFunction} Bound listener.
 */
function bindListener(listenerObj) {
  var boundListener = function boundListener(evt) {
    var listener = listenerObj.listener;
    var bindTo = listenerObj.bindTo || listenerObj.target;
    if (listenerObj.callOnce) {
      unlistenByKey(listenerObj);
    }
    return listener.call(bindTo, evt);
  };
  listenerObj.boundListener = boundListener;
  return boundListener;
}

/**
 * Finds the matching {@link module:ol/events~EventsKey} in the given listener
 * array.
 *
 * @param {!Array<!module:ol/events~EventsKey>} listeners Array of listeners.
 * @param {!Function} listener The listener function.
 * @param {Object=} opt_this The `this` value inside the listener.
 * @param {boolean=} opt_setDeleteIndex Set the deleteIndex on the matching
 *     listener, for {@link module:ol/events~unlistenByKey}.
 * @return {module:ol/events~EventsKey|undefined} The matching listener object.
 */
/**
 * @module ol/events
 */
function findListener(listeners, listener, opt_this, opt_setDeleteIndex) {
  var listenerObj = void 0;
  for (var i = 0, ii = listeners.length; i < ii; ++i) {
    listenerObj = listeners[i];
    if (listenerObj.listener === listener && listenerObj.bindTo === opt_this) {
      if (opt_setDeleteIndex) {
        listenerObj.deleteIndex = i;
      }
      return listenerObj;
    }
  }
  return undefined;
}

/**
 * @param {module:ol/events/EventTarget~EventTargetLike} target Target.
 * @param {string} type Type.
 * @return {Array.<module:ol/events~EventsKey>|undefined} Listeners.
 */
function getListeners(target, type) {
  var listenerMap = target.ol_lm;
  return listenerMap ? listenerMap[type] : undefined;
}

/**
 * Get the lookup of listeners.  If one does not exist on the target, it is
 * created.
 * @param {module:ol/events/EventTarget~EventTargetLike} target Target.
 * @return {!Object.<string, Array.<module:ol/events~EventsKey>>} Map of
 *     listeners by event type.
 */
function getListenerMap(target) {
  var listenerMap = target.ol_lm;
  if (!listenerMap) {
    listenerMap = target.ol_lm = {};
  }
  return listenerMap;
}

/**
 * Clean up all listener objects of the given type.  All properties on the
 * listener objects will be removed, and if no listeners remain in the listener
 * map, it will be removed from the target.
 * @param {module:ol/events/EventTarget~EventTargetLike} target Target.
 * @param {string} type Type.
 */
function removeListeners(target, type) {
  var listeners = getListeners(target, type);
  if (listeners) {
    for (var i = 0, ii = listeners.length; i < ii; ++i) {
      target.removeEventListener(type, listeners[i].boundListener);
      (0, _obj.clear)(listeners[i]);
    }
    listeners.length = 0;
    var listenerMap = target.ol_lm;
    if (listenerMap) {
      delete listenerMap[type];
      if (Object.keys(listenerMap).length === 0) {
        delete target.ol_lm;
      }
    }
  }
}

/**
 * Registers an event listener on an event target. Inspired by
 * {@link https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html}
 *
 * This function efficiently binds a `listener` to a `this` object, and returns
 * a key for use with {@link module:ol/events~unlistenByKey}.
 *
 * @param {module:ol/events/EventTarget~EventTargetLike} target Event target.
 * @param {string} type Event type.
 * @param {module:ol/events~ListenerFunction} listener Listener.
 * @param {Object=} opt_this Object referenced by the `this` keyword in the
 *     listener. Default is the `target`.
 * @param {boolean=} opt_once If true, add the listener as one-off listener.
 * @return {module:ol/events~EventsKey} Unique key for the listener.
 */
function listen(target, type, listener, opt_this, opt_once) {
  var listenerMap = getListenerMap(target);
  var listeners = listenerMap[type];
  if (!listeners) {
    listeners = listenerMap[type] = [];
  }
  var listenerObj = findListener(listeners, listener, opt_this, false);
  if (listenerObj) {
    if (!opt_once) {
      // Turn one-off listener into a permanent one.
      listenerObj.callOnce = false;
    }
  } else {
    listenerObj = /** @type {module:ol/events~EventsKey} */{
      bindTo: opt_this,
      callOnce: !!opt_once,
      listener: listener,
      target: target,
      type: type
    };
    target.addEventListener(type, bindListener(listenerObj));
    listeners.push(listenerObj);
  }

  return listenerObj;
}

/**
 * Registers a one-off event listener on an event target. Inspired by
 * {@link https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html}
 *
 * This function efficiently binds a `listener` as self-unregistering listener
 * to a `this` object, and returns a key for use with
 * {@link module:ol/events~unlistenByKey} in case the listener needs to be
 * unregistered before it is called.
 *
 * When {@link module:ol/events~listen} is called with the same arguments after this
 * function, the self-unregistering listener will be turned into a permanent
 * listener.
 *
 * @param {module:ol/events/EventTarget~EventTargetLike} target Event target.
 * @param {string} type Event type.
 * @param {module:ol/events~ListenerFunction} listener Listener.
 * @param {Object=} opt_this Object referenced by the `this` keyword in the
 *     listener. Default is the `target`.
 * @return {module:ol/events~EventsKey} Key for unlistenByKey.
 */
function listenOnce(target, type, listener, opt_this) {
  return listen(target, type, listener, opt_this, true);
}

/**
 * Unregisters an event listener on an event target. Inspired by
 * {@link https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html}
 *
 * To return a listener, this function needs to be called with the exact same
 * arguments that were used for a previous {@link module:ol/events~listen} call.
 *
 * @param {module:ol/events/EventTarget~EventTargetLike} target Event target.
 * @param {string} type Event type.
 * @param {module:ol/events~ListenerFunction} listener Listener.
 * @param {Object=} opt_this Object referenced by the `this` keyword in the
 *     listener. Default is the `target`.
 */
function unlisten(target, type, listener, opt_this) {
  var listeners = getListeners(target, type);
  if (listeners) {
    var listenerObj = findListener(listeners, listener, opt_this, true);
    if (listenerObj) {
      unlistenByKey(listenerObj);
    }
  }
}

/**
 * Unregisters event listeners on an event target. Inspired by
 * {@link https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html}
 *
 * The argument passed to this function is the key returned from
 * {@link module:ol/events~listen} or {@link module:ol/events~listenOnce}.
 *
 * @param {module:ol/events~EventsKey} key The key.
 */
function unlistenByKey(key) {
  if (key && key.target) {
    key.target.removeEventListener(key.type, key.boundListener);
    var listeners = getListeners(key.target, key.type);
    if (listeners) {
      var i = 'deleteIndex' in key ? key.deleteIndex : listeners.indexOf(key);
      if (i !== -1) {
        listeners.splice(i, 1);
      }
      if (listeners.length === 0) {
        removeListeners(key.target, key.type);
      }
    }
    (0, _obj.clear)(key);
  }
}

/**
 * Unregisters all event listeners on an event target. Inspired by
 * {@link https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html}
 *
 * @param {module:ol/events/EventTarget~EventTargetLike} target Target.
 */
function unlistenAll(target) {
  var listenerMap = getListenerMap(target);
  for (var type in listenerMap) {
    removeListeners(target, type);
  }
}

/***/ }),

/***/ "./node_modules/ol/events/Event.js":
/*!*****************************************!*\
  !*** ./node_modules/ol/events/Event.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stopPropagation = stopPropagation;
exports.preventDefault = preventDefault;
/**
 * @module ol/events/Event
 */
/**
 * @classdesc
 * Stripped down implementation of the W3C DOM Level 2 Event interface.
 * @see {@link https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-interface}
 *
 * This implementation only provides `type` and `target` properties, and
 * `stopPropagation` and `preventDefault` methods. It is meant as base class
 * for higher level events defined in the library, and works with
 * {@link module:ol/events/EventTarget~EventTarget}.
 *
 * @constructor
 * @param {string} type Type.
 */
var Event = function Event(type) {

  /**
   * @type {boolean}
   */
  this.propagationStopped;

  /**
   * The event type.
   * @type {string}
   * @api
   */
  this.type = type;

  /**
   * The event target.
   * @type {Object}
   * @api
   */
  this.target = null;
};

/**
 * Stop event propagation.
 * @function
 * @api
 */
Event.prototype.preventDefault =

/**
 * Stop event propagation.
 * @function
 * @api
 */
Event.prototype.stopPropagation = function () {
  this.propagationStopped = true;
};

/**
 * @param {Event|module:ol/events/Event} evt Event
 */
function stopPropagation(evt) {
  evt.stopPropagation();
}

/**
 * @param {Event|module:ol/events/Event} evt Event
 */
function preventDefault(evt) {
  evt.preventDefault();
}

exports.default = Event;

/***/ }),

/***/ "./node_modules/ol/events/EventTarget.js":
/*!***********************************************!*\
  !*** ./node_modules/ol/events/EventTarget.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../index.js */ "./node_modules/ol/index.js");

var _Disposable = __webpack_require__(/*! ../Disposable.js */ "./node_modules/ol/Disposable.js");

var _Disposable2 = _interopRequireDefault(_Disposable);

var _events = __webpack_require__(/*! ../events.js */ "./node_modules/ol/events.js");

var _functions = __webpack_require__(/*! ../functions.js */ "./node_modules/ol/functions.js");

var _Event = __webpack_require__(/*! ../events/Event.js */ "./node_modules/ol/events/Event.js");

var _Event2 = _interopRequireDefault(_Event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @typedef {EventTarget|module:ol/events/EventTarget} EventTargetLike
 */

/**
 * @classdesc
 * A simplified implementation of the W3C DOM Level 2 EventTarget interface.
 * @see {@link https://www.w3.org/TR/2000/REC-DOM-Level-2-Events-20001113/events.html#Events-EventTarget}
 *
 * There are two important simplifications compared to the specification:
 *
 * 1. The handling of `useCapture` in `addEventListener` and
 *    `removeEventListener`. There is no real capture model.
 * 2. The handling of `stopPropagation` and `preventDefault` on `dispatchEvent`.
 *    There is no event target hierarchy. When a listener calls
 *    `stopPropagation` or `preventDefault` on an event object, it means that no
 *    more listeners after this one will be called. Same as when the listener
 *    returns false.
 *
 * @constructor
 * @extends {module:ol/Disposable}
 */
var EventTarget = function EventTarget() {

  _Disposable2.default.call(this);

  /**
   * @private
   * @type {!Object.<string, number>}
   */
  this.pendingRemovals_ = {};

  /**
   * @private
   * @type {!Object.<string, number>}
   */
  this.dispatching_ = {};

  /**
   * @private
   * @type {!Object.<string, Array.<module:ol/events~ListenerFunction>>}
   */
  this.listeners_ = {};
}; /**
    * @module ol/events/EventTarget
    */


(0, _index.inherits)(EventTarget, _Disposable2.default);

/**
 * @param {string} type Type.
 * @param {module:ol/events~ListenerFunction} listener Listener.
 */
EventTarget.prototype.addEventListener = function (type, listener) {
  var listeners = this.listeners_[type];
  if (!listeners) {
    listeners = this.listeners_[type] = [];
  }
  if (listeners.indexOf(listener) === -1) {
    listeners.push(listener);
  }
};

/**
 * @param {{type: string,
 *     target: (EventTarget|module:ol/events/EventTarget|undefined)}|module:ol/events/Event|
 *     string} event Event or event type.
 * @return {boolean|undefined} `false` if anyone called preventDefault on the
 *     event object or if any of the listeners returned false.
 */
EventTarget.prototype.dispatchEvent = function (event) {
  var evt = typeof event === 'string' ? new _Event2.default(event) : event;
  var type = evt.type;
  evt.target = this;
  var listeners = this.listeners_[type];
  var propagate = void 0;
  if (listeners) {
    if (!(type in this.dispatching_)) {
      this.dispatching_[type] = 0;
      this.pendingRemovals_[type] = 0;
    }
    ++this.dispatching_[type];
    for (var i = 0, ii = listeners.length; i < ii; ++i) {
      if (listeners[i].call(this, evt) === false || evt.propagationStopped) {
        propagate = false;
        break;
      }
    }
    --this.dispatching_[type];
    if (this.dispatching_[type] === 0) {
      var pendingRemovals = this.pendingRemovals_[type];
      delete this.pendingRemovals_[type];
      while (pendingRemovals--) {
        this.removeEventListener(type, _functions.UNDEFINED);
      }
      delete this.dispatching_[type];
    }
    return propagate;
  }
};

/**
 * @inheritDoc
 */
EventTarget.prototype.disposeInternal = function () {
  (0, _events.unlistenAll)(this);
};

/**
 * Get the listeners for a specified event type. Listeners are returned in the
 * order that they will be called in.
 *
 * @param {string} type Type.
 * @return {Array.<module:ol/events~ListenerFunction>} Listeners.
 */
EventTarget.prototype.getListeners = function (type) {
  return this.listeners_[type];
};

/**
 * @param {string=} opt_type Type. If not provided,
 *     `true` will be returned if this EventTarget has any listeners.
 * @return {boolean} Has listeners.
 */
EventTarget.prototype.hasListener = function (opt_type) {
  return opt_type ? opt_type in this.listeners_ : Object.keys(this.listeners_).length > 0;
};

/**
 * @param {string} type Type.
 * @param {module:ol/events~ListenerFunction} listener Listener.
 */
EventTarget.prototype.removeEventListener = function (type, listener) {
  var listeners = this.listeners_[type];
  if (listeners) {
    var index = listeners.indexOf(listener);
    if (type in this.pendingRemovals_) {
      // make listener a no-op, and remove later in #dispatchEvent()
      listeners[index] = _functions.UNDEFINED;
      ++this.pendingRemovals_[type];
    } else {
      listeners.splice(index, 1);
      if (listeners.length === 0) {
        delete this.listeners_[type];
      }
    }
  }
};
exports.default = EventTarget;

/***/ }),

/***/ "./node_modules/ol/events/EventType.js":
/*!*********************************************!*\
  !*** ./node_modules/ol/events/EventType.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @module ol/events/EventType
 */

/**
 * @enum {string}
 * @const
 */
exports.default = {
  /**
   * Generic change event. Triggered when the revision counter is increased.
   * @event module:ol/events/Event~Event#change
   * @api
   */
  CHANGE: 'change',

  CLEAR: 'clear',
  CONTEXTMENU: 'contextmenu',
  CLICK: 'click',
  DBLCLICK: 'dblclick',
  DRAGENTER: 'dragenter',
  DRAGOVER: 'dragover',
  DROP: 'drop',
  ERROR: 'error',
  KEYDOWN: 'keydown',
  KEYPRESS: 'keypress',
  LOAD: 'load',
  MOUSEDOWN: 'mousedown',
  MOUSEMOVE: 'mousemove',
  MOUSEOUT: 'mouseout',
  MOUSEUP: 'mouseup',
  MOUSEWHEEL: 'mousewheel',
  MSPOINTERDOWN: 'MSPointerDown',
  RESIZE: 'resize',
  TOUCHSTART: 'touchstart',
  TOUCHMOVE: 'touchmove',
  TOUCHEND: 'touchend',
  WHEEL: 'wheel'
};

/***/ }),

/***/ "./node_modules/ol/extent.js":
/*!***********************************!*\
  !*** ./node_modules/ol/extent.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.boundingExtent = boundingExtent;
exports.buffer = buffer;
exports.clone = clone;
exports.closestSquaredDistanceXY = closestSquaredDistanceXY;
exports.containsCoordinate = containsCoordinate;
exports.containsExtent = containsExtent;
exports.containsXY = containsXY;
exports.coordinateRelationship = coordinateRelationship;
exports.createEmpty = createEmpty;
exports.createOrUpdate = createOrUpdate;
exports.createOrUpdateEmpty = createOrUpdateEmpty;
exports.createOrUpdateFromCoordinate = createOrUpdateFromCoordinate;
exports.createOrUpdateFromCoordinates = createOrUpdateFromCoordinates;
exports.createOrUpdateFromFlatCoordinates = createOrUpdateFromFlatCoordinates;
exports.createOrUpdateFromRings = createOrUpdateFromRings;
exports.equals = equals;
exports.extend = extend;
exports.extendCoordinate = extendCoordinate;
exports.extendCoordinates = extendCoordinates;
exports.extendFlatCoordinates = extendFlatCoordinates;
exports.extendRings = extendRings;
exports.extendXY = extendXY;
exports.forEachCorner = forEachCorner;
exports.getArea = getArea;
exports.getBottomLeft = getBottomLeft;
exports.getBottomRight = getBottomRight;
exports.getCenter = getCenter;
exports.getCorner = getCorner;
exports.getEnlargedArea = getEnlargedArea;
exports.getForViewAndSize = getForViewAndSize;
exports.getHeight = getHeight;
exports.getIntersectionArea = getIntersectionArea;
exports.getIntersection = getIntersection;
exports.getMargin = getMargin;
exports.getSize = getSize;
exports.getTopLeft = getTopLeft;
exports.getTopRight = getTopRight;
exports.getWidth = getWidth;
exports.intersects = intersects;
exports.isEmpty = isEmpty;
exports.returnOrUpdate = returnOrUpdate;
exports.scaleFromCenter = scaleFromCenter;
exports.intersectsSegment = intersectsSegment;
exports.applyTransform = applyTransform;

var _asserts = __webpack_require__(/*! ./asserts.js */ "./node_modules/ol/asserts.js");

var _Corner = __webpack_require__(/*! ./extent/Corner.js */ "./node_modules/ol/extent/Corner.js");

var _Corner2 = _interopRequireDefault(_Corner);

var _Relationship = __webpack_require__(/*! ./extent/Relationship.js */ "./node_modules/ol/extent/Relationship.js");

var _Relationship2 = _interopRequireDefault(_Relationship);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * An array of numbers representing an extent: `[minx, miny, maxx, maxy]`.
 * @typedef {Array.<number>} Extent
 * @api
 */

/**
 * Build an extent that includes all given coordinates.
 *
 * @param {Array.<module:ol/coordinate~Coordinate>} coordinates Coordinates.
 * @return {module:ol/extent~Extent} Bounding extent.
 * @api
 */
function boundingExtent(coordinates) {
  var extent = createEmpty();
  for (var i = 0, ii = coordinates.length; i < ii; ++i) {
    extendCoordinate(extent, coordinates[i]);
  }
  return extent;
}

/**
 * @param {Array.<number>} xs Xs.
 * @param {Array.<number>} ys Ys.
 * @param {module:ol/extent~Extent=} opt_extent Destination extent.
 * @private
 * @return {module:ol/extent~Extent} Extent.
 */
/**
 * @module ol/extent
 */
function _boundingExtentXYs(xs, ys, opt_extent) {
  var minX = Math.min.apply(null, xs);
  var minY = Math.min.apply(null, ys);
  var maxX = Math.max.apply(null, xs);
  var maxY = Math.max.apply(null, ys);
  return createOrUpdate(minX, minY, maxX, maxY, opt_extent);
}

/**
 * Return extent increased by the provided value.
 * @param {module:ol/extent~Extent} extent Extent.
 * @param {number} value The amount by which the extent should be buffered.
 * @param {module:ol/extent~Extent=} opt_extent Extent.
 * @return {module:ol/extent~Extent} Extent.
 * @api
 */
function buffer(extent, value, opt_extent) {
  if (opt_extent) {
    opt_extent[0] = extent[0] - value;
    opt_extent[1] = extent[1] - value;
    opt_extent[2] = extent[2] + value;
    opt_extent[3] = extent[3] + value;
    return opt_extent;
  } else {
    return [extent[0] - value, extent[1] - value, extent[2] + value, extent[3] + value];
  }
}

/**
 * Creates a clone of an extent.
 *
 * @param {module:ol/extent~Extent} extent Extent to clone.
 * @param {module:ol/extent~Extent=} opt_extent Extent.
 * @return {module:ol/extent~Extent} The clone.
 */
function clone(extent, opt_extent) {
  if (opt_extent) {
    opt_extent[0] = extent[0];
    opt_extent[1] = extent[1];
    opt_extent[2] = extent[2];
    opt_extent[3] = extent[3];
    return opt_extent;
  } else {
    return extent.slice();
  }
}

/**
 * @param {module:ol/extent~Extent} extent Extent.
 * @param {number} x X.
 * @param {number} y Y.
 * @return {number} Closest squared distance.
 */
function closestSquaredDistanceXY(extent, x, y) {
  var dx = void 0,
      dy = void 0;
  if (x < extent[0]) {
    dx = extent[0] - x;
  } else if (extent[2] < x) {
    dx = x - extent[2];
  } else {
    dx = 0;
  }
  if (y < extent[1]) {
    dy = extent[1] - y;
  } else if (extent[3] < y) {
    dy = y - extent[3];
  } else {
    dy = 0;
  }
  return dx * dx + dy * dy;
}

/**
 * Check if the passed coordinate is contained or on the edge of the extent.
 *
 * @param {module:ol/extent~Extent} extent Extent.
 * @param {module:ol/coordinate~Coordinate} coordinate Coordinate.
 * @return {boolean} The coordinate is contained in the extent.
 * @api
 */
function containsCoordinate(extent, coordinate) {
  return containsXY(extent, coordinate[0], coordinate[1]);
}

/**
 * Check if one extent contains another.
 *
 * An extent is deemed contained if it lies completely within the other extent,
 * including if they share one or more edges.
 *
 * @param {module:ol/extent~Extent} extent1 Extent 1.
 * @param {module:ol/extent~Extent} extent2 Extent 2.
 * @return {boolean} The second extent is contained by or on the edge of the
 *     first.
 * @api
 */
function containsExtent(extent1, extent2) {
  return extent1[0] <= extent2[0] && extent2[2] <= extent1[2] && extent1[1] <= extent2[1] && extent2[3] <= extent1[3];
}

/**
 * Check if the passed coordinate is contained or on the edge of the extent.
 *
 * @param {module:ol/extent~Extent} extent Extent.
 * @param {number} x X coordinate.
 * @param {number} y Y coordinate.
 * @return {boolean} The x, y values are contained in the extent.
 * @api
 */
function containsXY(extent, x, y) {
  return extent[0] <= x && x <= extent[2] && extent[1] <= y && y <= extent[3];
}

/**
 * Get the relationship between a coordinate and extent.
 * @param {module:ol/extent~Extent} extent The extent.
 * @param {module:ol/coordinate~Coordinate} coordinate The coordinate.
 * @return {module:ol/extent/Relationship} The relationship (bitwise compare with
 *     module:ol/extent/Relationship~Relationship).
 */
function coordinateRelationship(extent, coordinate) {
  var minX = extent[0];
  var minY = extent[1];
  var maxX = extent[2];
  var maxY = extent[3];
  var x = coordinate[0];
  var y = coordinate[1];
  var relationship = _Relationship2.default.UNKNOWN;
  if (x < minX) {
    relationship = relationship | _Relationship2.default.LEFT;
  } else if (x > maxX) {
    relationship = relationship | _Relationship2.default.RIGHT;
  }
  if (y < minY) {
    relationship = relationship | _Relationship2.default.BELOW;
  } else if (y > maxY) {
    relationship = relationship | _Relationship2.default.ABOVE;
  }
  if (relationship === _Relationship2.default.UNKNOWN) {
    relationship = _Relationship2.default.INTERSECTING;
  }
  return relationship;
}

/**
 * Create an empty extent.
 * @return {module:ol/extent~Extent} Empty extent.
 * @api
 */
function createEmpty() {
  return [Infinity, Infinity, -Infinity, -Infinity];
}

/**
 * Create a new extent or update the provided extent.
 * @param {number} minX Minimum X.
 * @param {number} minY Minimum Y.
 * @param {number} maxX Maximum X.
 * @param {number} maxY Maximum Y.
 * @param {module:ol/extent~Extent=} opt_extent Destination extent.
 * @return {module:ol/extent~Extent} Extent.
 */
function createOrUpdate(minX, minY, maxX, maxY, opt_extent) {
  if (opt_extent) {
    opt_extent[0] = minX;
    opt_extent[1] = minY;
    opt_extent[2] = maxX;
    opt_extent[3] = maxY;
    return opt_extent;
  } else {
    return [minX, minY, maxX, maxY];
  }
}

/**
 * Create a new empty extent or make the provided one empty.
 * @param {module:ol/extent~Extent=} opt_extent Extent.
 * @return {module:ol/extent~Extent} Extent.
 */
function createOrUpdateEmpty(opt_extent) {
  return createOrUpdate(Infinity, Infinity, -Infinity, -Infinity, opt_extent);
}

/**
 * @param {module:ol/coordinate~Coordinate} coordinate Coordinate.
 * @param {module:ol/extent~Extent=} opt_extent Extent.
 * @return {module:ol/extent~Extent} Extent.
 */
function createOrUpdateFromCoordinate(coordinate, opt_extent) {
  var x = coordinate[0];
  var y = coordinate[1];
  return createOrUpdate(x, y, x, y, opt_extent);
}

/**
 * @param {Array.<module:ol/coordinate~Coordinate>} coordinates Coordinates.
 * @param {module:ol/extent~Extent=} opt_extent Extent.
 * @return {module:ol/extent~Extent} Extent.
 */
function createOrUpdateFromCoordinates(coordinates, opt_extent) {
  var extent = createOrUpdateEmpty(opt_extent);
  return extendCoordinates(extent, coordinates);
}

/**
 * @param {Array.<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {module:ol/extent~Extent=} opt_extent Extent.
 * @return {module:ol/extent~Extent} Extent.
 */
function createOrUpdateFromFlatCoordinates(flatCoordinates, offset, end, stride, opt_extent) {
  var extent = createOrUpdateEmpty(opt_extent);
  return extendFlatCoordinates(extent, flatCoordinates, offset, end, stride);
}

/**
 * @param {Array.<Array.<module:ol/coordinate~Coordinate>>} rings Rings.
 * @param {module:ol/extent~Extent=} opt_extent Extent.
 * @return {module:ol/extent~Extent} Extent.
 */
function createOrUpdateFromRings(rings, opt_extent) {
  var extent = createOrUpdateEmpty(opt_extent);
  return extendRings(extent, rings);
}

/**
 * Determine if two extents are equivalent.
 * @param {module:ol/extent~Extent} extent1 Extent 1.
 * @param {module:ol/extent~Extent} extent2 Extent 2.
 * @return {boolean} The two extents are equivalent.
 * @api
 */
function equals(extent1, extent2) {
  return extent1[0] == extent2[0] && extent1[2] == extent2[2] && extent1[1] == extent2[1] && extent1[3] == extent2[3];
}

/**
 * Modify an extent to include another extent.
 * @param {module:ol/extent~Extent} extent1 The extent to be modified.
 * @param {module:ol/extent~Extent} extent2 The extent that will be included in the first.
 * @return {module:ol/extent~Extent} A reference to the first (extended) extent.
 * @api
 */
function extend(extent1, extent2) {
  if (extent2[0] < extent1[0]) {
    extent1[0] = extent2[0];
  }
  if (extent2[2] > extent1[2]) {
    extent1[2] = extent2[2];
  }
  if (extent2[1] < extent1[1]) {
    extent1[1] = extent2[1];
  }
  if (extent2[3] > extent1[3]) {
    extent1[3] = extent2[3];
  }
  return extent1;
}

/**
 * @param {module:ol/extent~Extent} extent Extent.
 * @param {module:ol/coordinate~Coordinate} coordinate Coordinate.
 */
function extendCoordinate(extent, coordinate) {
  if (coordinate[0] < extent[0]) {
    extent[0] = coordinate[0];
  }
  if (coordinate[0] > extent[2]) {
    extent[2] = coordinate[0];
  }
  if (coordinate[1] < extent[1]) {
    extent[1] = coordinate[1];
  }
  if (coordinate[1] > extent[3]) {
    extent[3] = coordinate[1];
  }
}

/**
 * @param {module:ol/extent~Extent} extent Extent.
 * @param {Array.<module:ol/coordinate~Coordinate>} coordinates Coordinates.
 * @return {module:ol/extent~Extent} Extent.
 */
function extendCoordinates(extent, coordinates) {
  for (var i = 0, ii = coordinates.length; i < ii; ++i) {
    extendCoordinate(extent, coordinates[i]);
  }
  return extent;
}

/**
 * @param {module:ol/extent~Extent} extent Extent.
 * @param {Array.<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @return {module:ol/extent~Extent} Extent.
 */
function extendFlatCoordinates(extent, flatCoordinates, offset, end, stride) {
  for (; offset < end; offset += stride) {
    extendXY(extent, flatCoordinates[offset], flatCoordinates[offset + 1]);
  }
  return extent;
}

/**
 * @param {module:ol/extent~Extent} extent Extent.
 * @param {Array.<Array.<module:ol/coordinate~Coordinate>>} rings Rings.
 * @return {module:ol/extent~Extent} Extent.
 */
function extendRings(extent, rings) {
  for (var i = 0, ii = rings.length; i < ii; ++i) {
    extendCoordinates(extent, rings[i]);
  }
  return extent;
}

/**
 * @param {module:ol/extent~Extent} extent Extent.
 * @param {number} x X.
 * @param {number} y Y.
 */
function extendXY(extent, x, y) {
  extent[0] = Math.min(extent[0], x);
  extent[1] = Math.min(extent[1], y);
  extent[2] = Math.max(extent[2], x);
  extent[3] = Math.max(extent[3], y);
}

/**
 * This function calls `callback` for each corner of the extent. If the
 * callback returns a truthy value the function returns that value
 * immediately. Otherwise the function returns `false`.
 * @param {module:ol/extent~Extent} extent Extent.
 * @param {function(this:T, module:ol/coordinate~Coordinate): S} callback Callback.
 * @param {T=} opt_this Value to use as `this` when executing `callback`.
 * @return {S|boolean} Value.
 * @template S, T
 */
function forEachCorner(extent, callback, opt_this) {
  var val = void 0;
  val = callback.call(opt_this, getBottomLeft(extent));
  if (val) {
    return val;
  }
  val = callback.call(opt_this, getBottomRight(extent));
  if (val) {
    return val;
  }
  val = callback.call(opt_this, getTopRight(extent));
  if (val) {
    return val;
  }
  val = callback.call(opt_this, getTopLeft(extent));
  if (val) {
    return val;
  }
  return false;
}

/**
 * Get the size of an extent.
 * @param {module:ol/extent~Extent} extent Extent.
 * @return {number} Area.
 * @api
 */
function getArea(extent) {
  var area = 0;
  if (!isEmpty(extent)) {
    area = getWidth(extent) * getHeight(extent);
  }
  return area;
}

/**
 * Get the bottom left coordinate of an extent.
 * @param {module:ol/extent~Extent} extent Extent.
 * @return {module:ol/coordinate~Coordinate} Bottom left coordinate.
 * @api
 */
function getBottomLeft(extent) {
  return [extent[0], extent[1]];
}

/**
 * Get the bottom right coordinate of an extent.
 * @param {module:ol/extent~Extent} extent Extent.
 * @return {module:ol/coordinate~Coordinate} Bottom right coordinate.
 * @api
 */
function getBottomRight(extent) {
  return [extent[2], extent[1]];
}

/**
 * Get the center coordinate of an extent.
 * @param {module:ol/extent~Extent} extent Extent.
 * @return {module:ol/coordinate~Coordinate} Center.
 * @api
 */
function getCenter(extent) {
  return [(extent[0] + extent[2]) / 2, (extent[1] + extent[3]) / 2];
}

/**
 * Get a corner coordinate of an extent.
 * @param {module:ol/extent~Extent} extent Extent.
 * @param {module:ol/extent/Corner} corner Corner.
 * @return {module:ol/coordinate~Coordinate} Corner coordinate.
 */
function getCorner(extent, corner) {
  var coordinate = void 0;
  if (corner === _Corner2.default.BOTTOM_LEFT) {
    coordinate = getBottomLeft(extent);
  } else if (corner === _Corner2.default.BOTTOM_RIGHT) {
    coordinate = getBottomRight(extent);
  } else if (corner === _Corner2.default.TOP_LEFT) {
    coordinate = getTopLeft(extent);
  } else if (corner === _Corner2.default.TOP_RIGHT) {
    coordinate = getTopRight(extent);
  } else {
    (0, _asserts.assert)(false, 13); // Invalid corner
  }
  return (
    /** @type {!module:ol/coordinate~Coordinate} */coordinate
  );
}

/**
 * @param {module:ol/extent~Extent} extent1 Extent 1.
 * @param {module:ol/extent~Extent} extent2 Extent 2.
 * @return {number} Enlarged area.
 */
function getEnlargedArea(extent1, extent2) {
  var minX = Math.min(extent1[0], extent2[0]);
  var minY = Math.min(extent1[1], extent2[1]);
  var maxX = Math.max(extent1[2], extent2[2]);
  var maxY = Math.max(extent1[3], extent2[3]);
  return (maxX - minX) * (maxY - minY);
}

/**
 * @param {module:ol/coordinate~Coordinate} center Center.
 * @param {number} resolution Resolution.
 * @param {number} rotation Rotation.
 * @param {module:ol/size~Size} size Size.
 * @param {module:ol/extent~Extent=} opt_extent Destination extent.
 * @return {module:ol/extent~Extent} Extent.
 */
function getForViewAndSize(center, resolution, rotation, size, opt_extent) {
  var dx = resolution * size[0] / 2;
  var dy = resolution * size[1] / 2;
  var cosRotation = Math.cos(rotation);
  var sinRotation = Math.sin(rotation);
  var xCos = dx * cosRotation;
  var xSin = dx * sinRotation;
  var yCos = dy * cosRotation;
  var ySin = dy * sinRotation;
  var x = center[0];
  var y = center[1];
  var x0 = x - xCos + ySin;
  var x1 = x - xCos - ySin;
  var x2 = x + xCos - ySin;
  var x3 = x + xCos + ySin;
  var y0 = y - xSin - yCos;
  var y1 = y - xSin + yCos;
  var y2 = y + xSin + yCos;
  var y3 = y + xSin - yCos;
  return createOrUpdate(Math.min(x0, x1, x2, x3), Math.min(y0, y1, y2, y3), Math.max(x0, x1, x2, x3), Math.max(y0, y1, y2, y3), opt_extent);
}

/**
 * Get the height of an extent.
 * @param {module:ol/extent~Extent} extent Extent.
 * @return {number} Height.
 * @api
 */
function getHeight(extent) {
  return extent[3] - extent[1];
}

/**
 * @param {module:ol/extent~Extent} extent1 Extent 1.
 * @param {module:ol/extent~Extent} extent2 Extent 2.
 * @return {number} Intersection area.
 */
function getIntersectionArea(extent1, extent2) {
  var intersection = getIntersection(extent1, extent2);
  return getArea(intersection);
}

/**
 * Get the intersection of two extents.
 * @param {module:ol/extent~Extent} extent1 Extent 1.
 * @param {module:ol/extent~Extent} extent2 Extent 2.
 * @param {module:ol/extent~Extent=} opt_extent Optional extent to populate with intersection.
 * @return {module:ol/extent~Extent} Intersecting extent.
 * @api
 */
function getIntersection(extent1, extent2, opt_extent) {
  var intersection = opt_extent ? opt_extent : createEmpty();
  if (intersects(extent1, extent2)) {
    if (extent1[0] > extent2[0]) {
      intersection[0] = extent1[0];
    } else {
      intersection[0] = extent2[0];
    }
    if (extent1[1] > extent2[1]) {
      intersection[1] = extent1[1];
    } else {
      intersection[1] = extent2[1];
    }
    if (extent1[2] < extent2[2]) {
      intersection[2] = extent1[2];
    } else {
      intersection[2] = extent2[2];
    }
    if (extent1[3] < extent2[3]) {
      intersection[3] = extent1[3];
    } else {
      intersection[3] = extent2[3];
    }
  } else {
    createOrUpdateEmpty(intersection);
  }
  return intersection;
}

/**
 * @param {module:ol/extent~Extent} extent Extent.
 * @return {number} Margin.
 */
function getMargin(extent) {
  return getWidth(extent) + getHeight(extent);
}

/**
 * Get the size (width, height) of an extent.
 * @param {module:ol/extent~Extent} extent The extent.
 * @return {module:ol/size~Size} The extent size.
 * @api
 */
function getSize(extent) {
  return [extent[2] - extent[0], extent[3] - extent[1]];
}

/**
 * Get the top left coordinate of an extent.
 * @param {module:ol/extent~Extent} extent Extent.
 * @return {module:ol/coordinate~Coordinate} Top left coordinate.
 * @api
 */
function getTopLeft(extent) {
  return [extent[0], extent[3]];
}

/**
 * Get the top right coordinate of an extent.
 * @param {module:ol/extent~Extent} extent Extent.
 * @return {module:ol/coordinate~Coordinate} Top right coordinate.
 * @api
 */
function getTopRight(extent) {
  return [extent[2], extent[3]];
}

/**
 * Get the width of an extent.
 * @param {module:ol/extent~Extent} extent Extent.
 * @return {number} Width.
 * @api
 */
function getWidth(extent) {
  return extent[2] - extent[0];
}

/**
 * Determine if one extent intersects another.
 * @param {module:ol/extent~Extent} extent1 Extent 1.
 * @param {module:ol/extent~Extent} extent2 Extent.
 * @return {boolean} The two extents intersect.
 * @api
 */
function intersects(extent1, extent2) {
  return extent1[0] <= extent2[2] && extent1[2] >= extent2[0] && extent1[1] <= extent2[3] && extent1[3] >= extent2[1];
}

/**
 * Determine if an extent is empty.
 * @param {module:ol/extent~Extent} extent Extent.
 * @return {boolean} Is empty.
 * @api
 */
function isEmpty(extent) {
  return extent[2] < extent[0] || extent[3] < extent[1];
}

/**
 * @param {module:ol/extent~Extent} extent Extent.
 * @param {module:ol/extent~Extent=} opt_extent Extent.
 * @return {module:ol/extent~Extent} Extent.
 */
function returnOrUpdate(extent, opt_extent) {
  if (opt_extent) {
    opt_extent[0] = extent[0];
    opt_extent[1] = extent[1];
    opt_extent[2] = extent[2];
    opt_extent[3] = extent[3];
    return opt_extent;
  } else {
    return extent;
  }
}

/**
 * @param {module:ol/extent~Extent} extent Extent.
 * @param {number} value Value.
 */
function scaleFromCenter(extent, value) {
  var deltaX = (extent[2] - extent[0]) / 2 * (value - 1);
  var deltaY = (extent[3] - extent[1]) / 2 * (value - 1);
  extent[0] -= deltaX;
  extent[2] += deltaX;
  extent[1] -= deltaY;
  extent[3] += deltaY;
}

/**
 * Determine if the segment between two coordinates intersects (crosses,
 * touches, or is contained by) the provided extent.
 * @param {module:ol/extent~Extent} extent The extent.
 * @param {module:ol/coordinate~Coordinate} start Segment start coordinate.
 * @param {module:ol/coordinate~Coordinate} end Segment end coordinate.
 * @return {boolean} The segment intersects the extent.
 */
function intersectsSegment(extent, start, end) {
  var intersects = false;
  var startRel = coordinateRelationship(extent, start);
  var endRel = coordinateRelationship(extent, end);
  if (startRel === _Relationship2.default.INTERSECTING || endRel === _Relationship2.default.INTERSECTING) {
    intersects = true;
  } else {
    var minX = extent[0];
    var minY = extent[1];
    var maxX = extent[2];
    var maxY = extent[3];
    var startX = start[0];
    var startY = start[1];
    var endX = end[0];
    var endY = end[1];
    var slope = (endY - startY) / (endX - startX);
    var x = void 0,
        y = void 0;
    if (!!(endRel & _Relationship2.default.ABOVE) && !(startRel & _Relationship2.default.ABOVE)) {
      // potentially intersects top
      x = endX - (endY - maxY) / slope;
      intersects = x >= minX && x <= maxX;
    }
    if (!intersects && !!(endRel & _Relationship2.default.RIGHT) && !(startRel & _Relationship2.default.RIGHT)) {
      // potentially intersects right
      y = endY - (endX - maxX) * slope;
      intersects = y >= minY && y <= maxY;
    }
    if (!intersects && !!(endRel & _Relationship2.default.BELOW) && !(startRel & _Relationship2.default.BELOW)) {
      // potentially intersects bottom
      x = endX - (endY - minY) / slope;
      intersects = x >= minX && x <= maxX;
    }
    if (!intersects && !!(endRel & _Relationship2.default.LEFT) && !(startRel & _Relationship2.default.LEFT)) {
      // potentially intersects left
      y = endY - (endX - minX) * slope;
      intersects = y >= minY && y <= maxY;
    }
  }
  return intersects;
}

/**
 * Apply a transform function to the extent.
 * @param {module:ol/extent~Extent} extent Extent.
 * @param {module:ol/proj~TransformFunction} transformFn Transform function.
 * Called with `[minX, minY, maxX, maxY]` extent coordinates.
 * @param {module:ol/extent~Extent=} opt_extent Destination extent.
 * @return {module:ol/extent~Extent} Extent.
 * @api
 */
function applyTransform(extent, transformFn, opt_extent) {
  var coordinates = [extent[0], extent[1], extent[0], extent[3], extent[2], extent[1], extent[2], extent[3]];
  transformFn(coordinates, coordinates, 2);
  var xs = [coordinates[0], coordinates[2], coordinates[4], coordinates[6]];
  var ys = [coordinates[1], coordinates[3], coordinates[5], coordinates[7]];
  return _boundingExtentXYs(xs, ys, opt_extent);
}

/***/ }),

/***/ "./node_modules/ol/extent/Corner.js":
/*!******************************************!*\
  !*** ./node_modules/ol/extent/Corner.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @module ol/extent/Corner
 */

/**
 * Extent corner.
 * @enum {string}
 */
exports.default = {
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_RIGHT: 'bottom-right',
  TOP_LEFT: 'top-left',
  TOP_RIGHT: 'top-right'
};

/***/ }),

/***/ "./node_modules/ol/extent/Relationship.js":
/*!************************************************!*\
  !*** ./node_modules/ol/extent/Relationship.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @module ol/extent/Relationship
 */

/**
 * Relationship to an extent.
 * @enum {number}
 */
exports.default = {
  UNKNOWN: 0,
  INTERSECTING: 1,
  ABOVE: 2,
  RIGHT: 4,
  BELOW: 8,
  LEFT: 16
};

/***/ }),

/***/ "./node_modules/ol/functions.js":
/*!**************************************!*\
  !*** ./node_modules/ol/functions.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TRUE = TRUE;
exports.FALSE = FALSE;
exports.UNDEFINED = UNDEFINED;
/**
 * @module ol/functions
 */

/**
 * Always returns true.
 * @returns {boolean} true.
 */
function TRUE() {
  return true;
}

/**
 * Always returns false.
 * @returns {boolean} false.
 */
function FALSE() {
  return false;
}

/**
 * A reusable function, used e.g. as a default for callbacks.
 *
 * @return {undefined} Nothing.
 */
function UNDEFINED() {}

/***/ }),

/***/ "./node_modules/ol/geom/GeometryType.js":
/*!**********************************************!*\
  !*** ./node_modules/ol/geom/GeometryType.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @module ol/geom/GeometryType
 */

/**
 * The geometry type. One of `'Point'`, `'LineString'`, `'LinearRing'`,
 * `'Polygon'`, `'MultiPoint'`, `'MultiLineString'`, `'MultiPolygon'`,
 * `'GeometryCollection'`, `'Circle'`.
 * @enum {string}
 */
exports.default = {
  POINT: 'Point',
  LINE_STRING: 'LineString',
  LINEAR_RING: 'LinearRing',
  POLYGON: 'Polygon',
  MULTI_POINT: 'MultiPoint',
  MULTI_LINE_STRING: 'MultiLineString',
  MULTI_POLYGON: 'MultiPolygon',
  GEOMETRY_COLLECTION: 'GeometryCollection',
  CIRCLE: 'Circle'
};

/***/ }),

/***/ "./node_modules/ol/index.js":
/*!**********************************!*\
  !*** ./node_modules/ol/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VERSION = exports.WEBGL_EXTENSIONS = exports.WEBGL_MAX_TEXTURE_SIZE = exports.HAS_WEBGL = exports.DEBUG_WEBGL = undefined;
exports.inherits = inherits;
exports.getUid = getUid;

var _webgl = __webpack_require__(/*! ./webgl.js */ "./node_modules/ol/webgl.js");

/**
 * An array with two elements, representing a pixel. The first element is the
 * x-coordinate, the second the y-coordinate of the pixel.
 * @typedef {Array.<number>} Pixel
 * @api
 */

/**
 * Include debuggable shader sources.  Default is `true`. This should be set to
 * `false` for production builds.
 * TODO: move to a separate ol-webgl package
 * @type {boolean}
 */
var DEBUG_WEBGL = exports.DEBUG_WEBGL = true;

/**
 * TODO: move to a separate ol-webgl package
 * The maximum supported WebGL texture size in pixels. If WebGL is not
 * supported, the value is set to `undefined`.
 * @type {number|undefined}
 */
/**
 * @module ol
 */

var WEBGL_MAX_TEXTURE_SIZE = void 0; // value is set below


/**
 * TODO: move to a separate ol-webgl package
 * List of supported WebGL extensions.
 * @type {Array.<string>}
 */
var WEBGL_EXTENSIONS = void 0; // value is set below


/**
 * TODO: move to a separate ol-webgl package
 * WebGL is available.
 * @type {boolean}
 */
var HAS_WEBGL = false;

if (typeof window !== 'undefined' && 'WebGLRenderingContext' in window) {
  try {
    var canvas = /** @type {HTMLCanvasElement} */document.createElement('CANVAS');
    var gl = (0, _webgl.getContext)(canvas, { failIfMajorPerformanceCaveat: true });
    if (gl) {
      exports.HAS_WEBGL = HAS_WEBGL = true;
      exports.WEBGL_MAX_TEXTURE_SIZE = WEBGL_MAX_TEXTURE_SIZE = /** @type {number} */gl.getParameter(gl.MAX_TEXTURE_SIZE);
      exports.WEBGL_EXTENSIONS = WEBGL_EXTENSIONS = gl.getSupportedExtensions();
    }
  } catch (e) {
    // pass
  }
}

exports.HAS_WEBGL = HAS_WEBGL;
exports.WEBGL_MAX_TEXTURE_SIZE = WEBGL_MAX_TEXTURE_SIZE;
exports.WEBGL_EXTENSIONS = WEBGL_EXTENSIONS;

/**
 * OpenLayers version.
 * @type {string}
 */

var VERSION = exports.VERSION = 'v4.6.4';

/**
 * Inherit the prototype methods from one constructor into another.
 *
 * Usage:
 *
 *     function ParentClass(a, b) { }
 *     ParentClass.prototype.foo = function(a) { }
 *
 *     function ChildClass(a, b, c) {
 *       // Call parent constructor
 *       ParentClass.call(this, a, b);
 *     }
 *     inherits(ChildClass, ParentClass);
 *
 *     var child = new ChildClass('a', 'b', 'see');
 *     child.foo(); // This works.
 *
 * @param {!Function} childCtor Child constructor.
 * @param {!Function} parentCtor Parent constructor.
 * @function
 * @api
 */
function inherits(childCtor, parentCtor) {
  childCtor.prototype = Object.create(parentCtor.prototype);
  childCtor.prototype.constructor = childCtor;
}

/**
 * Counter for getUid.
 * @type {number}
 * @private
 */
var uidCounter_ = 0;

/**
 * Gets a unique ID for an object. This mutates the object so that further calls
 * with the same object as a parameter returns the same value. Unique IDs are generated
 * as a strictly increasing sequence. Adapted from goog.getUid.
 *
 * @param {Object} obj The object to get the unique ID for.
 * @return {number} The unique ID for the object.
 */
function getUid(obj) {
  return obj.ol_uid || (obj.ol_uid = ++uidCounter_);
}

/***/ }),

/***/ "./node_modules/ol/math.js":
/*!*********************************!*\
  !*** ./node_modules/ol/math.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cosh = undefined;
exports.clamp = clamp;
exports.roundUpToPowerOfTwo = roundUpToPowerOfTwo;
exports.squaredSegmentDistance = squaredSegmentDistance;
exports.squaredDistance = squaredDistance;
exports.solveLinearSystem = solveLinearSystem;
exports.toDegrees = toDegrees;
exports.toRadians = toRadians;
exports.modulo = modulo;
exports.lerp = lerp;

var _asserts = __webpack_require__(/*! ./asserts.js */ "./node_modules/ol/asserts.js");

/**
 * Takes a number and clamps it to within the provided bounds.
 * @param {number} value The input number.
 * @param {number} min The minimum value to return.
 * @param {number} max The maximum value to return.
 * @return {number} The input number if it is within bounds, or the nearest
 *     number within the bounds.
 */
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Return the hyperbolic cosine of a given number. The method will use the
 * native `Math.cosh` function if it is available, otherwise the hyperbolic
 * cosine will be calculated via the reference implementation of the Mozilla
 * developer network.
 *
 * @param {number} x X.
 * @return {number} Hyperbolic cosine of x.
 */
/**
 * @module ol/math
 */
var cosh = exports.cosh = function () {
  // Wrapped in a iife, to save the overhead of checking for the native
  // implementation on every invocation.
  var cosh = void 0;
  if ('cosh' in Math) {
    // The environment supports the native Math.cosh function, use it…
    cosh = Math.cosh;
  } else {
    // … else, use the reference implementation of MDN:
    cosh = function cosh(x) {
      var y = Math.exp(x);
      return (y + 1 / y) / 2;
    };
  }
  return cosh;
}();

/**
 * @param {number} x X.
 * @return {number} The smallest power of two greater than or equal to x.
 */
function roundUpToPowerOfTwo(x) {
  (0, _asserts.assert)(0 < x, 29); // `x` must be greater than `0`
  return Math.pow(2, Math.ceil(Math.log(x) / Math.LN2));
}

/**
 * Returns the square of the closest distance between the point (x, y) and the
 * line segment (x1, y1) to (x2, y2).
 * @param {number} x X.
 * @param {number} y Y.
 * @param {number} x1 X1.
 * @param {number} y1 Y1.
 * @param {number} x2 X2.
 * @param {number} y2 Y2.
 * @return {number} Squared distance.
 */
function squaredSegmentDistance(x, y, x1, y1, x2, y2) {
  var dx = x2 - x1;
  var dy = y2 - y1;
  if (dx !== 0 || dy !== 0) {
    var t = ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy);
    if (t > 1) {
      x1 = x2;
      y1 = y2;
    } else if (t > 0) {
      x1 += dx * t;
      y1 += dy * t;
    }
  }
  return squaredDistance(x, y, x1, y1);
}

/**
 * Returns the square of the distance between the points (x1, y1) and (x2, y2).
 * @param {number} x1 X1.
 * @param {number} y1 Y1.
 * @param {number} x2 X2.
 * @param {number} y2 Y2.
 * @return {number} Squared distance.
 */
function squaredDistance(x1, y1, x2, y2) {
  var dx = x2 - x1;
  var dy = y2 - y1;
  return dx * dx + dy * dy;
}

/**
 * Solves system of linear equations using Gaussian elimination method.
 *
 * @param {Array.<Array.<number>>} mat Augmented matrix (n x n + 1 column)
 *                                     in row-major order.
 * @return {Array.<number>} The resulting vector.
 */
function solveLinearSystem(mat) {
  var n = mat.length;

  for (var i = 0; i < n; i++) {
    // Find max in the i-th column (ignoring i - 1 first rows)
    var maxRow = i;
    var maxEl = Math.abs(mat[i][i]);
    for (var r = i + 1; r < n; r++) {
      var absValue = Math.abs(mat[r][i]);
      if (absValue > maxEl) {
        maxEl = absValue;
        maxRow = r;
      }
    }

    if (maxEl === 0) {
      return null; // matrix is singular
    }

    // Swap max row with i-th (current) row
    var tmp = mat[maxRow];
    mat[maxRow] = mat[i];
    mat[i] = tmp;

    // Subtract the i-th row to make all the remaining rows 0 in the i-th column
    for (var j = i + 1; j < n; j++) {
      var coef = -mat[j][i] / mat[i][i];
      for (var k = i; k < n + 1; k++) {
        if (i == k) {
          mat[j][k] = 0;
        } else {
          mat[j][k] += coef * mat[i][k];
        }
      }
    }
  }

  // Solve Ax=b for upper triangular matrix A (mat)
  var x = new Array(n);
  for (var l = n - 1; l >= 0; l--) {
    x[l] = mat[l][n] / mat[l][l];
    for (var m = l - 1; m >= 0; m--) {
      mat[m][n] -= mat[m][l] * x[l];
    }
  }
  return x;
}

/**
 * Converts radians to to degrees.
 *
 * @param {number} angleInRadians Angle in radians.
 * @return {number} Angle in degrees.
 */
function toDegrees(angleInRadians) {
  return angleInRadians * 180 / Math.PI;
}

/**
 * Converts degrees to radians.
 *
 * @param {number} angleInDegrees Angle in degrees.
 * @return {number} Angle in radians.
 */
function toRadians(angleInDegrees) {
  return angleInDegrees * Math.PI / 180;
}

/**
 * Returns the modulo of a / b, depending on the sign of b.
 *
 * @param {number} a Dividend.
 * @param {number} b Divisor.
 * @return {number} Modulo.
 */
function modulo(a, b) {
  var r = a % b;
  return r * b < 0 ? r + b : r;
}

/**
 * Calculates the linearly interpolated value of x between a and b.
 *
 * @param {number} a Number
 * @param {number} b Number
 * @param {number} x Value to be interpolated.
 * @return {number} Interpolated value.
 */
function lerp(a, b, x) {
  return a + x * (b - a);
}

/***/ }),

/***/ "./node_modules/ol/obj.js":
/*!********************************!*\
  !*** ./node_modules/ol/obj.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clear = clear;
exports.getValues = getValues;
exports.isEmpty = isEmpty;
/**
 * @module ol/obj
 */

/**
 * Polyfill for Object.assign().  Assigns enumerable and own properties from
 * one or more source objects to a target object.
 *
 * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 * @param {!Object} target The target object.
 * @param {...Object} var_sources The source object(s).
 * @return {!Object} The modified target object.
 */
var assign = exports.assign = typeof Object.assign === 'function' ? Object.assign : function (target, var_sources) {
  if (target === undefined || target === null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  var output = Object(target);
  for (var i = 1, ii = arguments.length; i < ii; ++i) {
    var source = arguments[i];
    if (source !== undefined && source !== null) {
      for (var key in source) {
        if (source.hasOwnProperty(key)) {
          output[key] = source[key];
        }
      }
    }
  }
  return output;
};

/**
 * Removes all properties from an object.
 * @param {Object} object The object to clear.
 */
function clear(object) {
  for (var property in object) {
    delete object[property];
  }
}

/**
 * Get an array of property values from an object.
 * @param {Object<K,V>} object The object from which to get the values.
 * @return {!Array<V>} The property values.
 * @template K,V
 */
function getValues(object) {
  var values = [];
  for (var property in object) {
    values.push(object[property]);
  }
  return values;
}

/**
 * Determine if an object has any properties.
 * @param {Object} object The object to check.
 * @return {boolean} The object is empty.
 */
function isEmpty(object) {
  var property = void 0;
  for (property in object) {
    return false;
  }
  return !property;
}

/***/ }),

/***/ "./node_modules/ol/proj.js":
/*!*********************************!*\
  !*** ./node_modules/ol/proj.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.METERS_PER_UNIT = undefined;
exports.cloneTransform = cloneTransform;
exports.identityTransform = identityTransform;
exports.addProjection = addProjection;
exports.addProjections = addProjections;
exports.get = get;
exports.getPointResolution = getPointResolution;
exports.addEquivalentProjections = addEquivalentProjections;
exports.addEquivalentTransforms = addEquivalentTransforms;
exports.clearAllProjections = clearAllProjections;
exports.createProjection = createProjection;
exports.createTransformFromCoordinateTransform = createTransformFromCoordinateTransform;
exports.addCoordinateTransforms = addCoordinateTransforms;
exports.fromLonLat = fromLonLat;
exports.toLonLat = toLonLat;
exports.equivalent = equivalent;
exports.getTransformFromProjections = getTransformFromProjections;
exports.getTransform = getTransform;
exports.transform = transform;
exports.transformExtent = transformExtent;
exports.transformWithProjections = transformWithProjections;
exports.addCommon = addCommon;

var _sphere = __webpack_require__(/*! ./sphere.js */ "./node_modules/ol/sphere.js");

var _extent = __webpack_require__(/*! ./extent.js */ "./node_modules/ol/extent.js");

var _math = __webpack_require__(/*! ./math.js */ "./node_modules/ol/math.js");

var _epsg = __webpack_require__(/*! ./proj/epsg3857.js */ "./node_modules/ol/proj/epsg3857.js");

var _epsg2 = __webpack_require__(/*! ./proj/epsg4326.js */ "./node_modules/ol/proj/epsg4326.js");

var _Projection = __webpack_require__(/*! ./proj/Projection.js */ "./node_modules/ol/proj/Projection.js");

var _Projection2 = _interopRequireDefault(_Projection);

var _Units = __webpack_require__(/*! ./proj/Units.js */ "./node_modules/ol/proj/Units.js");

var _Units2 = _interopRequireDefault(_Units);

var _projections = __webpack_require__(/*! ./proj/projections.js */ "./node_modules/ol/proj/projections.js");

var projections = _interopRequireWildcard(_projections);

var _transforms = __webpack_require__(/*! ./proj/transforms.js */ "./node_modules/ol/proj/transforms.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A projection as {@link module:ol/proj/Projection}, SRS identifier
 * string or undefined.
 * @typedef {module:ol/proj/Projection|string|undefined} ProjectionLike
 * @api
 */

/**
 * A transform function accepts an array of input coordinate values, an optional
 * output array, and an optional dimension (default should be 2).  The function
 * transforms the input coordinate values, populates the output array, and
 * returns the output array.
 *
 * @typedef {function(Array.<number>, Array.<number>=, number=): Array.<number>} TransformFunction
 * @api
 */

exports.METERS_PER_UNIT = _Units.METERS_PER_UNIT;

/**
 * @param {Array.<number>} input Input coordinate array.
 * @param {Array.<number>=} opt_output Output array of coordinate values.
 * @param {number=} opt_dimension Dimension.
 * @return {Array.<number>} Output coordinate array (new array, same coordinate
 *     values).
 */
/**
 * @module ol/proj
 */

/**
 * The ol/proj module stores:
 * * a list of {@link module:ol/proj/Projection}
 * objects, one for each projection supported by the application
 * * a list of transform functions needed to convert coordinates in one projection
 * into another.
 *
 * The static functions are the methods used to maintain these.
 * Each transform function can handle not only simple coordinate pairs, but also
 * large arrays of coordinates such as vector geometries.
 *
 * When loaded, the library adds projection objects for EPSG:4326 (WGS84
 * geographic coordinates) and EPSG:3857 (Web or Spherical Mercator, as used
 * for example by Bing Maps or OpenStreetMap), together with the relevant
 * transform functions.
 *
 * Additional transforms may be added by using the {@link http://proj4js.org/}
 * library (version 2.2 or later). You can use the full build supplied by
 * Proj4js, or create a custom build to support those projections you need; see
 * the Proj4js website for how to do this. You also need the Proj4js definitions
 * for the required projections. These definitions can be obtained from
 * {@link https://epsg.io/}, and are a JS function, so can be loaded in a script
 * tag (as in the examples) or pasted into your application.
 *
 * After all required projection definitions are added to proj4's registry (by
 * using `proj4.defs()`), simply call `register(proj4)` from the `ol/proj/proj4`
 * package. Existing transforms are not changed by this function. See
 * examples/wms-image-custom-proj for an example of this.
 *
 * Additional projection definitions can be registered with `proj4.defs()` any
 * time. Just make sure to call `register(proj4)` again; for example, with user-supplied data where you don't
 * know in advance what projections are needed, you can initially load minimal
 * support and then load whichever are requested.
 *
 * Note that Proj4js does not support projection extents. If you want to add
 * one for creating default tile grids, you can add it after the Projection
 * object has been created with `setExtent`, for example,
 * `get('EPSG:1234').setExtent(extent)`.
 *
 * In addition to Proj4js support, any transform functions can be added with
 * {@link module:ol/proj~addCoordinateTransforms}. To use this, you must first create
 * a {@link module:ol/proj/Projection} object for the new projection and add it with
 * {@link module:ol/proj~addProjection}. You can then add the forward and inverse
 * functions with {@link module:ol/proj~addCoordinateTransforms}. See
 * examples/wms-custom-proj for an example of this.
 *
 * Note that if no transforms are needed and you only need to define the
 * projection, just add a {@link module:ol/proj/Projection} with
 * {@link module:ol/proj~addProjection}. See examples/wms-no-proj for an example of
 * this.
 */

function cloneTransform(input, opt_output, opt_dimension) {
  var output = void 0;
  if (opt_output !== undefined) {
    for (var i = 0, ii = input.length; i < ii; ++i) {
      opt_output[i] = input[i];
    }
    output = opt_output;
  } else {
    output = input.slice();
  }
  return output;
}

/**
 * @param {Array.<number>} input Input coordinate array.
 * @param {Array.<number>=} opt_output Output array of coordinate values.
 * @param {number=} opt_dimension Dimension.
 * @return {Array.<number>} Input coordinate array (same array as input).
 */
function identityTransform(input, opt_output, opt_dimension) {
  if (opt_output !== undefined && input !== opt_output) {
    for (var i = 0, ii = input.length; i < ii; ++i) {
      opt_output[i] = input[i];
    }
    input = opt_output;
  }
  return input;
}

/**
 * Add a Projection object to the list of supported projections that can be
 * looked up by their code.
 *
 * @param {module:ol/proj/Projection} projection Projection instance.
 * @api
 */
function addProjection(projection) {
  projections.add(projection.getCode(), projection);
  (0, _transforms.add)(projection, projection, cloneTransform);
}

/**
 * @param {Array.<module:ol/proj/Projection>} projections Projections.
 */
function addProjections(projections) {
  projections.forEach(addProjection);
}

/**
 * Fetches a Projection object for the code specified.
 *
 * @param {module:ol/proj~ProjectionLike} projectionLike Either a code string which is
 *     a combination of authority and identifier such as "EPSG:4326", or an
 *     existing projection object, or undefined.
 * @return {module:ol/proj/Projection} Projection object, or null if not in list.
 * @api
 */
function get(projectionLike) {
  var projection = null;
  if (projectionLike instanceof _Projection2.default) {
    projection = projectionLike;
  } else if (typeof projectionLike === 'string') {
    var code = projectionLike;
    projection = projections.get(code);
  }
  return projection;
}

/**
 * Get the resolution of the point in degrees or distance units.
 * For projections with degrees as the unit this will simply return the
 * provided resolution. For other projections the point resolution is
 * by default estimated by transforming the 'point' pixel to EPSG:4326,
 * measuring its width and height on the normal sphere,
 * and taking the average of the width and height.
 * A custom function can be provided for a specific projection, either
 * by setting the `getPointResolution` option in the
 * {@link module:ol/proj/Projection~Projection} constructor or by using
 * {@link module:ol/proj/Projection~Projection#setGetPointResolution} to change an existing
 * projection object.
 * @param {module:ol/proj~ProjectionLike} projection The projection.
 * @param {number} resolution Nominal resolution in projection units.
 * @param {module:ol/coordinate~Coordinate} point Point to find adjusted resolution at.
 * @param {module:ol/proj/Units=} opt_units Units to get the point resolution in.
 * Default is the projection's units.
 * @return {number} Point resolution.
 * @api
 */
function getPointResolution(projection, resolution, point, opt_units) {
  projection = get(projection);
  var pointResolution = void 0;
  var getter = projection.getPointResolutionFunc();
  if (getter) {
    pointResolution = getter(resolution, point);
  } else {
    var units = projection.getUnits();
    if (units == _Units2.default.DEGREES && !opt_units || opt_units == _Units2.default.DEGREES) {
      pointResolution = resolution;
    } else {
      // Estimate point resolution by transforming the center pixel to EPSG:4326,
      // measuring its width and height on the normal sphere, and taking the
      // average of the width and height.
      var _toEPSG = getTransformFromProjections(projection, get('EPSG:4326'));
      var vertices = [point[0] - resolution / 2, point[1], point[0] + resolution / 2, point[1], point[0], point[1] - resolution / 2, point[0], point[1] + resolution / 2];
      vertices = _toEPSG(vertices, vertices, 2);
      var width = (0, _sphere.getDistance)(vertices.slice(0, 2), vertices.slice(2, 4));
      var height = (0, _sphere.getDistance)(vertices.slice(4, 6), vertices.slice(6, 8));
      pointResolution = (width + height) / 2;
      var metersPerUnit = opt_units ? _Units.METERS_PER_UNIT[opt_units] : projection.getMetersPerUnit();
      if (metersPerUnit !== undefined) {
        pointResolution /= metersPerUnit;
      }
    }
  }
  return pointResolution;
}

/**
 * Registers transformation functions that don't alter coordinates. Those allow
 * to transform between projections with equal meaning.
 *
 * @param {Array.<module:ol/proj/Projection>} projections Projections.
 * @api
 */
function addEquivalentProjections(projections) {
  addProjections(projections);
  projections.forEach(function (source) {
    projections.forEach(function (destination) {
      if (source !== destination) {
        (0, _transforms.add)(source, destination, cloneTransform);
      }
    });
  });
}

/**
 * Registers transformation functions to convert coordinates in any projection
 * in projection1 to any projection in projection2.
 *
 * @param {Array.<module:ol/proj/Projection>} projections1 Projections with equal
 *     meaning.
 * @param {Array.<module:ol/proj/Projection>} projections2 Projections with equal
 *     meaning.
 * @param {module:ol/proj~TransformFunction} forwardTransform Transformation from any
 *   projection in projection1 to any projection in projection2.
 * @param {module:ol/proj~TransformFunction} inverseTransform Transform from any projection
 *   in projection2 to any projection in projection1..
 */
function addEquivalentTransforms(projections1, projections2, forwardTransform, inverseTransform) {
  projections1.forEach(function (projection1) {
    projections2.forEach(function (projection2) {
      (0, _transforms.add)(projection1, projection2, forwardTransform);
      (0, _transforms.add)(projection2, projection1, inverseTransform);
    });
  });
}

/**
 * Clear all cached projections and transforms.
 */
function clearAllProjections() {
  projections.clear();
  (0, _transforms.clear)();
}

/**
 * @param {module:ol/proj/Projection|string|undefined} projection Projection.
 * @param {string} defaultCode Default code.
 * @return {module:ol/proj/Projection} Projection.
 */
function createProjection(projection, defaultCode) {
  if (!projection) {
    return get(defaultCode);
  } else if (typeof projection === 'string') {
    return get(projection);
  } else {
    return (
      /** @type {module:ol/proj/Projection} */projection
    );
  }
}

/**
 * Creates a {@link module:ol/proj~TransformFunction} from a simple 2D coordinate transform
 * function.
 * @param {function(module:ol/coordinate~Coordinate): module:ol/coordinate~Coordinate} coordTransform Coordinate
 *     transform.
 * @return {module:ol/proj~TransformFunction} Transform function.
 */
function createTransformFromCoordinateTransform(coordTransform) {
  return (
    /**
     * @param {Array.<number>} input Input.
     * @param {Array.<number>=} opt_output Output.
     * @param {number=} opt_dimension Dimension.
     * @return {Array.<number>} Output.
     */
    function (input, opt_output, opt_dimension) {
      var length = input.length;
      var dimension = opt_dimension !== undefined ? opt_dimension : 2;
      var output = opt_output !== undefined ? opt_output : new Array(length);
      for (var i = 0; i < length; i += dimension) {
        var point = coordTransform([input[i], input[i + 1]]);
        output[i] = point[0];
        output[i + 1] = point[1];
        for (var j = dimension - 1; j >= 2; --j) {
          output[i + j] = input[i + j];
        }
      }
      return output;
    }
  );
}

/**
 * Registers coordinate transform functions to convert coordinates between the
 * source projection and the destination projection.
 * The forward and inverse functions convert coordinate pairs; this function
 * converts these into the functions used internally which also handle
 * extents and coordinate arrays.
 *
 * @param {module:ol/proj~ProjectionLike} source Source projection.
 * @param {module:ol/proj~ProjectionLike} destination Destination projection.
 * @param {function(module:ol/coordinate~Coordinate): module:ol/coordinate~Coordinate} forward The forward transform
 *     function (that is, from the source projection to the destination
 *     projection) that takes a {@link module:ol/coordinate~Coordinate} as argument and returns
 *     the transformed {@link module:ol/coordinate~Coordinate}.
 * @param {function(module:ol/coordinate~Coordinate): module:ol/coordinate~Coordinate} inverse The inverse transform
 *     function (that is, from the destination projection to the source
 *     projection) that takes a {@link module:ol/coordinate~Coordinate} as argument and returns
 *     the transformed {@link module:ol/coordinate~Coordinate}.
 * @api
 */
function addCoordinateTransforms(source, destination, forward, inverse) {
  var sourceProj = get(source);
  var destProj = get(destination);
  (0, _transforms.add)(sourceProj, destProj, createTransformFromCoordinateTransform(forward));
  (0, _transforms.add)(destProj, sourceProj, createTransformFromCoordinateTransform(inverse));
}

/**
 * Transforms a coordinate from longitude/latitude to a different projection.
 * @param {module:ol/coordinate~Coordinate} coordinate Coordinate as longitude and latitude, i.e.
 *     an array with longitude as 1st and latitude as 2nd element.
 * @param {module:ol/proj~ProjectionLike=} opt_projection Target projection. The
 *     default is Web Mercator, i.e. 'EPSG:3857'.
 * @return {module:ol/coordinate~Coordinate} Coordinate projected to the target projection.
 * @api
 */
function fromLonLat(coordinate, opt_projection) {
  return transform(coordinate, 'EPSG:4326', opt_projection !== undefined ? opt_projection : 'EPSG:3857');
}

/**
 * Transforms a coordinate to longitude/latitude.
 * @param {module:ol/coordinate~Coordinate} coordinate Projected coordinate.
 * @param {module:ol/proj~ProjectionLike=} opt_projection Projection of the coordinate.
 *     The default is Web Mercator, i.e. 'EPSG:3857'.
 * @return {module:ol/coordinate~Coordinate} Coordinate as longitude and latitude, i.e. an array
 *     with longitude as 1st and latitude as 2nd element.
 * @api
 */
function toLonLat(coordinate, opt_projection) {
  var lonLat = transform(coordinate, opt_projection !== undefined ? opt_projection : 'EPSG:3857', 'EPSG:4326');
  var lon = lonLat[0];
  if (lon < -180 || lon > 180) {
    lonLat[0] = (0, _math.modulo)(lon + 180, 360) - 180;
  }
  return lonLat;
}

/**
 * Checks if two projections are the same, that is every coordinate in one
 * projection does represent the same geographic point as the same coordinate in
 * the other projection.
 *
 * @param {module:ol/proj/Projection} projection1 Projection 1.
 * @param {module:ol/proj/Projection} projection2 Projection 2.
 * @return {boolean} Equivalent.
 * @api
 */
function equivalent(projection1, projection2) {
  if (projection1 === projection2) {
    return true;
  }
  var equalUnits = projection1.getUnits() === projection2.getUnits();
  if (projection1.getCode() === projection2.getCode()) {
    return equalUnits;
  } else {
    var transformFunc = getTransformFromProjections(projection1, projection2);
    return transformFunc === cloneTransform && equalUnits;
  }
}

/**
 * Searches in the list of transform functions for the function for converting
 * coordinates from the source projection to the destination projection.
 *
 * @param {module:ol/proj/Projection} sourceProjection Source Projection object.
 * @param {module:ol/proj/Projection} destinationProjection Destination Projection
 *     object.
 * @return {module:ol/proj~TransformFunction} Transform function.
 */
function getTransformFromProjections(sourceProjection, destinationProjection) {
  var sourceCode = sourceProjection.getCode();
  var destinationCode = destinationProjection.getCode();
  var transformFunc = (0, _transforms.get)(sourceCode, destinationCode);
  if (!transformFunc) {
    transformFunc = identityTransform;
  }
  return transformFunc;
}

/**
 * Given the projection-like objects, searches for a transformation
 * function to convert a coordinates array from the source projection to the
 * destination projection.
 *
 * @param {module:ol/proj~ProjectionLike} source Source.
 * @param {module:ol/proj~ProjectionLike} destination Destination.
 * @return {module:ol/proj~TransformFunction} Transform function.
 * @api
 */
function getTransform(source, destination) {
  var sourceProjection = get(source);
  var destinationProjection = get(destination);
  return getTransformFromProjections(sourceProjection, destinationProjection);
}

/**
 * Transforms a coordinate from source projection to destination projection.
 * This returns a new coordinate (and does not modify the original).
 *
 * See {@link module:ol/proj~transformExtent} for extent transformation.
 * See the transform method of {@link module:ol/geom/Geometry~Geometry} and its
 * subclasses for geometry transforms.
 *
 * @param {module:ol/coordinate~Coordinate} coordinate Coordinate.
 * @param {module:ol/proj~ProjectionLike} source Source projection-like.
 * @param {module:ol/proj~ProjectionLike} destination Destination projection-like.
 * @return {module:ol/coordinate~Coordinate} Coordinate.
 * @api
 */
function transform(coordinate, source, destination) {
  var transformFunc = getTransform(source, destination);
  return transformFunc(coordinate, undefined, coordinate.length);
}

/**
 * Transforms an extent from source projection to destination projection.  This
 * returns a new extent (and does not modify the original).
 *
 * @param {module:ol/extent~Extent} extent The extent to transform.
 * @param {module:ol/proj~ProjectionLike} source Source projection-like.
 * @param {module:ol/proj~ProjectionLike} destination Destination projection-like.
 * @return {module:ol/extent~Extent} The transformed extent.
 * @api
 */
function transformExtent(extent, source, destination) {
  var transformFunc = getTransform(source, destination);
  return (0, _extent.applyTransform)(extent, transformFunc);
}

/**
 * Transforms the given point to the destination projection.
 *
 * @param {module:ol/coordinate~Coordinate} point Point.
 * @param {module:ol/proj/Projection} sourceProjection Source projection.
 * @param {module:ol/proj/Projection} destinationProjection Destination projection.
 * @return {module:ol/coordinate~Coordinate} Point.
 */
function transformWithProjections(point, sourceProjection, destinationProjection) {
  var transformFunc = getTransformFromProjections(sourceProjection, destinationProjection);
  return transformFunc(point);
}

/**
 * Add transforms to and from EPSG:4326 and EPSG:3857.  This function is called
 * by when this module is executed and should only need to be called again after
 * `clearAllProjections()` is called (e.g. in tests).
 */
function addCommon() {
  // Add transformations that don't alter coordinates to convert within set of
  // projections with equal meaning.
  addEquivalentProjections(_epsg.PROJECTIONS);
  addEquivalentProjections(_epsg2.PROJECTIONS);
  // Add transformations to convert EPSG:4326 like coordinates to EPSG:3857 like
  // coordinates and back.
  addEquivalentTransforms(_epsg2.PROJECTIONS, _epsg.PROJECTIONS, _epsg.fromEPSG4326, _epsg.toEPSG4326);
}

addCommon();

/***/ }),

/***/ "./node_modules/ol/proj/Projection.js":
/*!********************************************!*\
  !*** ./node_modules/ol/proj/Projection.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Units = __webpack_require__(/*! ../proj/Units.js */ "./node_modules/ol/proj/Units.js");

/**
 * @typedef {Object} Options
 * @property {string} code The SRS identifier code, e.g. `EPSG:4326`.
 * @property {module:ol/proj/Units|string} [units] Units. Required unless a
 * proj4 projection is defined for `code`.
 * @property {module:ol/extent~Extent} [extent] The validity extent for the SRS.
 * @property {string} [axisOrientation='enu'] The axis orientation as specified in Proj4.
 * @property {boolean} [global=false] Whether the projection is valid for the whole globe.
 * @property {number} [metersPerUnit] The meters per unit for the SRS.
 * If not provided, the `units` are used to get the meters per unit from the {@link module:ol/proj/Units~METERS_PER_UNIT}
 * lookup table.
 * @property {module:ol/extent~Extent} [worldExtent] The world extent for the SRS.
 * @property {function(number, module:ol/coordinate~Coordinate):number} [getPointResolution]
 * Function to determine resolution at a point. The function is called with a
 * `{number}` view resolution and an `{module:ol/coordinate~Coordinate}` as arguments, and returns
 * the `{number}` resolution at the passed coordinate. If this is `undefined`,
 * the default {@link module:ol/proj#getPointResolution} function will be used.
 */

/**
 * @classdesc
 * Projection definition class. One of these is created for each projection
 * supported in the application and stored in the {@link module:ol/proj} namespace.
 * You can use these in applications, but this is not required, as API params
 * and options use {@link module:ol/proj~ProjectionLike} which means the simple string
 * code will suffice.
 *
 * You can use {@link module:ol/proj~get} to retrieve the object for a particular
 * projection.
 *
 * The library includes definitions for `EPSG:4326` and `EPSG:3857`, together
 * with the following aliases:
 * * `EPSG:4326`: CRS:84, urn:ogc:def:crs:EPSG:6.6:4326,
 *     urn:ogc:def:crs:OGC:1.3:CRS84, urn:ogc:def:crs:OGC:2:84,
 *     http://www.opengis.net/gml/srs/epsg.xml#4326,
 *     urn:x-ogc:def:crs:EPSG:4326
 * * `EPSG:3857`: EPSG:102100, EPSG:102113, EPSG:900913,
 *     urn:ogc:def:crs:EPSG:6.18:3:3857,
 *     http://www.opengis.net/gml/srs/epsg.xml#3857
 *
 * If you use proj4js, aliases can be added using `proj4.defs()`; see
 * [documentation](https://github.com/proj4js/proj4js). To set an alternative
 * namespace for proj4, use {@link module:ol/proj~setProj4}.
 *
 * @constructor
 * @param {module:ol/proj/Projection~Options} options Projection options.
 * @struct
 * @api
 */
var Projection = function Projection(options) {
  /**
   * @private
   * @type {string}
   */
  this.code_ = options.code;

  /**
   * Units of projected coordinates. When set to `TILE_PIXELS`, a
   * `this.extent_` and `this.worldExtent_` must be configured properly for each
   * tile.
   * @private
   * @type {module:ol/proj/Units}
   */
  this.units_ = /** @type {module:ol/proj/Units} */options.units;

  /**
   * Validity extent of the projection in projected coordinates. For projections
   * with `TILE_PIXELS` units, this is the extent of the tile in
   * tile pixel space.
   * @private
   * @type {module:ol/extent~Extent}
   */
  this.extent_ = options.extent !== undefined ? options.extent : null;

  /**
   * Extent of the world in EPSG:4326. For projections with
   * `TILE_PIXELS` units, this is the extent of the tile in
   * projected coordinate space.
   * @private
   * @type {module:ol/extent~Extent}
   */
  this.worldExtent_ = options.worldExtent !== undefined ? options.worldExtent : null;

  /**
   * @private
   * @type {string}
   */
  this.axisOrientation_ = options.axisOrientation !== undefined ? options.axisOrientation : 'enu';

  /**
   * @private
   * @type {boolean}
   */
  this.global_ = options.global !== undefined ? options.global : false;

  /**
   * @private
   * @type {boolean}
   */
  this.canWrapX_ = !!(this.global_ && this.extent_);

  /**
   * @private
   * @type {function(number, module:ol/coordinate~Coordinate):number|undefined}
   */
  this.getPointResolutionFunc_ = options.getPointResolution;

  /**
   * @private
   * @type {module:ol/tilegrid/TileGrid}
   */
  this.defaultTileGrid_ = null;

  /**
   * @private
   * @type {number|undefined}
   */
  this.metersPerUnit_ = options.metersPerUnit;
};

/**
 * @return {boolean} The projection is suitable for wrapping the x-axis
 */
/**
 * @module ol/proj/Projection
 */
Projection.prototype.canWrapX = function () {
  return this.canWrapX_;
};

/**
 * Get the code for this projection, e.g. 'EPSG:4326'.
 * @return {string} Code.
 * @api
 */
Projection.prototype.getCode = function () {
  return this.code_;
};

/**
 * Get the validity extent for this projection.
 * @return {module:ol/extent~Extent} Extent.
 * @api
 */
Projection.prototype.getExtent = function () {
  return this.extent_;
};

/**
 * Get the units of this projection.
 * @return {module:ol/proj/Units} Units.
 * @api
 */
Projection.prototype.getUnits = function () {
  return this.units_;
};

/**
 * Get the amount of meters per unit of this projection.  If the projection is
 * not configured with `metersPerUnit` or a units identifier, the return is
 * `undefined`.
 * @return {number|undefined} Meters.
 * @api
 */
Projection.prototype.getMetersPerUnit = function () {
  return this.metersPerUnit_ || _Units.METERS_PER_UNIT[this.units_];
};

/**
 * Get the world extent for this projection.
 * @return {module:ol/extent~Extent} Extent.
 * @api
 */
Projection.prototype.getWorldExtent = function () {
  return this.worldExtent_;
};

/**
 * Get the axis orientation of this projection.
 * Example values are:
 * enu - the default easting, northing, elevation.
 * neu - northing, easting, up - useful for "lat/long" geographic coordinates,
 *     or south orientated transverse mercator.
 * wnu - westing, northing, up - some planetary coordinate systems have
 *     "west positive" coordinate systems
 * @return {string} Axis orientation.
 * @api
 */
Projection.prototype.getAxisOrientation = function () {
  return this.axisOrientation_;
};

/**
 * Is this projection a global projection which spans the whole world?
 * @return {boolean} Whether the projection is global.
 * @api
 */
Projection.prototype.isGlobal = function () {
  return this.global_;
};

/**
* Set if the projection is a global projection which spans the whole world
* @param {boolean} global Whether the projection is global.
* @api
*/
Projection.prototype.setGlobal = function (global) {
  this.global_ = global;
  this.canWrapX_ = !!(global && this.extent_);
};

/**
 * @return {module:ol/tilegrid/TileGrid} The default tile grid.
 */
Projection.prototype.getDefaultTileGrid = function () {
  return this.defaultTileGrid_;
};

/**
 * @param {module:ol/tilegrid/TileGrid} tileGrid The default tile grid.
 */
Projection.prototype.setDefaultTileGrid = function (tileGrid) {
  this.defaultTileGrid_ = tileGrid;
};

/**
 * Set the validity extent for this projection.
 * @param {module:ol/extent~Extent} extent Extent.
 * @api
 */
Projection.prototype.setExtent = function (extent) {
  this.extent_ = extent;
  this.canWrapX_ = !!(this.global_ && extent);
};

/**
 * Set the world extent for this projection.
 * @param {module:ol/extent~Extent} worldExtent World extent
 *     [minlon, minlat, maxlon, maxlat].
 * @api
 */
Projection.prototype.setWorldExtent = function (worldExtent) {
  this.worldExtent_ = worldExtent;
};

/**
 * Set the getPointResolution function (see {@link module:ol/proj~getPointResolution}
 * for this projection.
 * @param {function(number, module:ol/coordinate~Coordinate):number} func Function
 * @api
 */
Projection.prototype.setGetPointResolution = function (func) {
  this.getPointResolutionFunc_ = func;
};

/**
 * Get the custom point resolution function for this projection (if set).
 * @return {function(number, module:ol/coordinate~Coordinate):number|undefined} The custom point
 * resolution function (if set).
 */
Projection.prototype.getPointResolutionFunc = function () {
  return this.getPointResolutionFunc_;
};
exports.default = Projection;

/***/ }),

/***/ "./node_modules/ol/proj/Units.js":
/*!***************************************!*\
  !*** ./node_modules/ol/proj/Units.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @module ol/proj/Units
 */

/**
 * Projection units: `'degrees'`, `'ft'`, `'m'`, `'pixels'`, `'tile-pixels'` or
 * `'us-ft'`.
 * @enum {string}
 */
var Units = {
  DEGREES: 'degrees',
  FEET: 'ft',
  METERS: 'm',
  PIXELS: 'pixels',
  TILE_PIXELS: 'tile-pixels',
  USFEET: 'us-ft'
};

/**
 * Meters per unit lookup table.
 * @const
 * @type {Object.<module:ol/proj/Units, number>}
 * @api
 */
var METERS_PER_UNIT = exports.METERS_PER_UNIT = {};
// use the radius of the Normal sphere
METERS_PER_UNIT[Units.DEGREES] = 2 * Math.PI * 6370997 / 360;
METERS_PER_UNIT[Units.FEET] = 0.3048;
METERS_PER_UNIT[Units.METERS] = 1;
METERS_PER_UNIT[Units.USFEET] = 1200 / 3937;

exports.default = Units;

/***/ }),

/***/ "./node_modules/ol/proj/epsg3857.js":
/*!******************************************!*\
  !*** ./node_modules/ol/proj/epsg3857.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PROJECTIONS = exports.WORLD_EXTENT = exports.EXTENT = exports.HALF_SIZE = exports.RADIUS = undefined;
exports.fromEPSG4326 = fromEPSG4326;
exports.toEPSG4326 = toEPSG4326;

var _index = __webpack_require__(/*! ../index.js */ "./node_modules/ol/index.js");

var _math = __webpack_require__(/*! ../math.js */ "./node_modules/ol/math.js");

var _Projection = __webpack_require__(/*! ../proj/Projection.js */ "./node_modules/ol/proj/Projection.js");

var _Projection2 = _interopRequireDefault(_Projection);

var _Units = __webpack_require__(/*! ../proj/Units.js */ "./node_modules/ol/proj/Units.js");

var _Units2 = _interopRequireDefault(_Units);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Radius of WGS84 sphere
 *
 * @const
 * @type {number}
 */
/**
 * @module ol/proj/epsg3857
 */
var RADIUS = exports.RADIUS = 6378137;

/**
 * @const
 * @type {number}
 */
var HALF_SIZE = exports.HALF_SIZE = Math.PI * RADIUS;

/**
 * @const
 * @type {module:ol/extent~Extent}
 */
var EXTENT = exports.EXTENT = [-HALF_SIZE, -HALF_SIZE, HALF_SIZE, HALF_SIZE];

/**
 * @const
 * @type {module:ol/extent~Extent}
 */
var WORLD_EXTENT = exports.WORLD_EXTENT = [-180, -85, 180, 85];

/**
 * @classdesc
 * Projection object for web/spherical Mercator (EPSG:3857).
 *
 * @constructor
 * @extends {module:ol/proj/Projection}
 * @param {string} code Code.
 */
function EPSG3857Projection(code) {
  _Projection2.default.call(this, {
    code: code,
    units: _Units2.default.METERS,
    extent: EXTENT,
    global: true,
    worldExtent: WORLD_EXTENT,
    getPointResolution: function getPointResolution(resolution, point) {
      return resolution / (0, _math.cosh)(point[1] / RADIUS);
    }
  });
}
(0, _index.inherits)(EPSG3857Projection, _Projection2.default);

/**
 * Projections equal to EPSG:3857.
 *
 * @const
 * @type {Array.<module:ol/proj/Projection>}
 */
var PROJECTIONS = exports.PROJECTIONS = [new EPSG3857Projection('EPSG:3857'), new EPSG3857Projection('EPSG:102100'), new EPSG3857Projection('EPSG:102113'), new EPSG3857Projection('EPSG:900913'), new EPSG3857Projection('urn:ogc:def:crs:EPSG:6.18:3:3857'), new EPSG3857Projection('urn:ogc:def:crs:EPSG::3857'), new EPSG3857Projection('http://www.opengis.net/gml/srs/epsg.xml#3857')];

/**
 * Transformation from EPSG:4326 to EPSG:3857.
 *
 * @param {Array.<number>} input Input array of coordinate values.
 * @param {Array.<number>=} opt_output Output array of coordinate values.
 * @param {number=} opt_dimension Dimension (default is `2`).
 * @return {Array.<number>} Output array of coordinate values.
 */
function fromEPSG4326(input, opt_output, opt_dimension) {
  var length = input.length;
  var dimension = opt_dimension > 1 ? opt_dimension : 2;
  var output = opt_output;
  if (output === undefined) {
    if (dimension > 2) {
      // preserve values beyond second dimension
      output = input.slice();
    } else {
      output = new Array(length);
    }
  }
  var halfSize = HALF_SIZE;
  for (var i = 0; i < length; i += dimension) {
    output[i] = halfSize * input[i] / 180;
    var y = RADIUS * Math.log(Math.tan(Math.PI * (input[i + 1] + 90) / 360));
    if (y > halfSize) {
      y = halfSize;
    } else if (y < -halfSize) {
      y = -halfSize;
    }
    output[i + 1] = y;
  }
  return output;
}

/**
 * Transformation from EPSG:3857 to EPSG:4326.
 *
 * @param {Array.<number>} input Input array of coordinate values.
 * @param {Array.<number>=} opt_output Output array of coordinate values.
 * @param {number=} opt_dimension Dimension (default is `2`).
 * @return {Array.<number>} Output array of coordinate values.
 */
function toEPSG4326(input, opt_output, opt_dimension) {
  var length = input.length;
  var dimension = opt_dimension > 1 ? opt_dimension : 2;
  var output = opt_output;
  if (output === undefined) {
    if (dimension > 2) {
      // preserve values beyond second dimension
      output = input.slice();
    } else {
      output = new Array(length);
    }
  }
  for (var i = 0; i < length; i += dimension) {
    output[i] = 180 * input[i] / HALF_SIZE;
    output[i + 1] = 360 * Math.atan(Math.exp(input[i + 1] / RADIUS)) / Math.PI - 90;
  }
  return output;
}

/***/ }),

/***/ "./node_modules/ol/proj/epsg4326.js":
/*!******************************************!*\
  !*** ./node_modules/ol/proj/epsg4326.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PROJECTIONS = exports.METERS_PER_UNIT = exports.EXTENT = exports.RADIUS = undefined;

var _index = __webpack_require__(/*! ../index.js */ "./node_modules/ol/index.js");

var _Projection = __webpack_require__(/*! ../proj/Projection.js */ "./node_modules/ol/proj/Projection.js");

var _Projection2 = _interopRequireDefault(_Projection);

var _Units = __webpack_require__(/*! ../proj/Units.js */ "./node_modules/ol/proj/Units.js");

var _Units2 = _interopRequireDefault(_Units);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Semi-major radius of the WGS84 ellipsoid.
 *
 * @const
 * @type {number}
 */
var RADIUS = exports.RADIUS = 6378137;

/**
 * Extent of the EPSG:4326 projection which is the whole world.
 *
 * @const
 * @type {module:ol/extent~Extent}
 */
/**
 * @module ol/proj/epsg4326
 */
var EXTENT = exports.EXTENT = [-180, -90, 180, 90];

/**
 * @const
 * @type {number}
 */
var METERS_PER_UNIT = exports.METERS_PER_UNIT = Math.PI * RADIUS / 180;

/**
 * @classdesc
 * Projection object for WGS84 geographic coordinates (EPSG:4326).
 *
 * Note that OpenLayers does not strictly comply with the EPSG definition.
 * The EPSG registry defines 4326 as a CRS for Latitude,Longitude (y,x).
 * OpenLayers treats EPSG:4326 as a pseudo-projection, with x,y coordinates.
 *
 * @constructor
 * @extends {module:ol/proj/Projection}
 * @param {string} code Code.
 * @param {string=} opt_axisOrientation Axis orientation.
 */
function EPSG4326Projection(code, opt_axisOrientation) {
  _Projection2.default.call(this, {
    code: code,
    units: _Units2.default.DEGREES,
    extent: EXTENT,
    axisOrientation: opt_axisOrientation,
    global: true,
    metersPerUnit: METERS_PER_UNIT,
    worldExtent: EXTENT
  });
}
(0, _index.inherits)(EPSG4326Projection, _Projection2.default);

/**
 * Projections equal to EPSG:4326.
 *
 * @const
 * @type {Array.<module:ol/proj/Projection>}
 */
var PROJECTIONS = exports.PROJECTIONS = [new EPSG4326Projection('CRS:84'), new EPSG4326Projection('EPSG:4326', 'neu'), new EPSG4326Projection('urn:ogc:def:crs:EPSG::4326', 'neu'), new EPSG4326Projection('urn:ogc:def:crs:EPSG:6.6:4326', 'neu'), new EPSG4326Projection('urn:ogc:def:crs:OGC:1.3:CRS84'), new EPSG4326Projection('urn:ogc:def:crs:OGC:2:84'), new EPSG4326Projection('http://www.opengis.net/gml/srs/epsg.xml#4326', 'neu'), new EPSG4326Projection('urn:x-ogc:def:crs:EPSG:4326', 'neu')];

/***/ }),

/***/ "./node_modules/ol/proj/projections.js":
/*!*********************************************!*\
  !*** ./node_modules/ol/proj/projections.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clear = clear;
exports.get = get;
exports.add = add;
/**
 * @module ol/proj/projections
 */

/**
 * @type {Object.<string, module:ol/proj/Projection>}
 */
var cache = {};

/**
 * Clear the projections cache.
 */
function clear() {
  cache = {};
}

/**
 * Get a cached projection by code.
 * @param {string} code The code for the projection.
 * @return {module:ol/proj/Projection} The projection (if cached).
 */
function get(code) {
  return cache[code] || null;
}

/**
 * Add a projection to the cache.
 * @param {string} code The projection code.
 * @param {module:ol/proj/Projection} projection The projection to cache.
 */
function add(code, projection) {
  cache[code] = projection;
}

/***/ }),

/***/ "./node_modules/ol/proj/transforms.js":
/*!********************************************!*\
  !*** ./node_modules/ol/proj/transforms.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clear = clear;
exports.add = add;
exports.remove = remove;
exports.get = get;

var _obj = __webpack_require__(/*! ../obj.js */ "./node_modules/ol/obj.js");

/**
 * @private
 * @type {!Object.<string, Object.<string, module:ol/proj~TransformFunction>>}
 */
var transforms = {};

/**
 * Clear the transform cache.
 */
/**
 * @module ol/proj/transforms
 */
function clear() {
  transforms = {};
}

/**
 * Registers a conversion function to convert coordinates from the source
 * projection to the destination projection.
 *
 * @param {module:ol/proj/Projection} source Source.
 * @param {module:ol/proj/Projection} destination Destination.
 * @param {module:ol/proj~TransformFunction} transformFn Transform.
 */
function add(source, destination, transformFn) {
  var sourceCode = source.getCode();
  var destinationCode = destination.getCode();
  if (!(sourceCode in transforms)) {
    transforms[sourceCode] = {};
  }
  transforms[sourceCode][destinationCode] = transformFn;
}

/**
 * Unregisters the conversion function to convert coordinates from the source
 * projection to the destination projection.  This method is used to clean up
 * cached transforms during testing.
 *
 * @param {module:ol/proj/Projection} source Source projection.
 * @param {module:ol/proj/Projection} destination Destination projection.
 * @return {module:ol/proj~TransformFunction} transformFn The unregistered transform.
 */
function remove(source, destination) {
  var sourceCode = source.getCode();
  var destinationCode = destination.getCode();
  var transform = transforms[sourceCode][destinationCode];
  delete transforms[sourceCode][destinationCode];
  if ((0, _obj.isEmpty)(transforms[sourceCode])) {
    delete transforms[sourceCode];
  }
  return transform;
}

/**
 * Get a transform given a source code and a destination code.
 * @param {string} sourceCode The code for the source projection.
 * @param {string} destinationCode The code for the destination projection.
 * @return {module:ol/proj~TransformFunction|undefined} The transform function (if found).
 */
function get(sourceCode, destinationCode) {
  var transform = void 0;
  if (sourceCode in transforms && destinationCode in transforms[sourceCode]) {
    transform = transforms[sourceCode][destinationCode];
  }
  return transform;
}

/***/ }),

/***/ "./node_modules/ol/reproj.js":
/*!***********************************!*\
  !*** ./node_modules/ol/reproj.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateSourceResolution = calculateSourceResolution;
exports.render = render;

var _dom = __webpack_require__(/*! ./dom.js */ "./node_modules/ol/dom.js");

var _extent = __webpack_require__(/*! ./extent.js */ "./node_modules/ol/extent.js");

var _math = __webpack_require__(/*! ./math.js */ "./node_modules/ol/math.js");

var _proj = __webpack_require__(/*! ./proj.js */ "./node_modules/ol/proj.js");

/**
 * Calculates ideal resolution to use from the source in order to achieve
 * pixel mapping as close as possible to 1:1 during reprojection.
 * The resolution is calculated regardless of what resolutions
 * are actually available in the dataset (TileGrid, Image, ...).
 *
 * @param {module:ol/proj/Projection} sourceProj Source projection.
 * @param {module:ol/proj/Projection} targetProj Target projection.
 * @param {module:ol/coordinate~Coordinate} targetCenter Target center.
 * @param {number} targetResolution Target resolution.
 * @return {number} The best resolution to use. Can be +-Infinity, NaN or 0.
 */
/**
 * @module ol/reproj
 */
function calculateSourceResolution(sourceProj, targetProj, targetCenter, targetResolution) {

  var sourceCenter = (0, _proj.transform)(targetCenter, targetProj, sourceProj);

  // calculate the ideal resolution of the source data
  var sourceResolution = (0, _proj.getPointResolution)(targetProj, targetResolution, targetCenter);

  var targetMetersPerUnit = targetProj.getMetersPerUnit();
  if (targetMetersPerUnit !== undefined) {
    sourceResolution *= targetMetersPerUnit;
  }
  var sourceMetersPerUnit = sourceProj.getMetersPerUnit();
  if (sourceMetersPerUnit !== undefined) {
    sourceResolution /= sourceMetersPerUnit;
  }

  // Based on the projection properties, the point resolution at the specified
  // coordinates may be slightly different. We need to reverse-compensate this
  // in order to achieve optimal results.

  var sourceExtent = sourceProj.getExtent();
  if (!sourceExtent || (0, _extent.containsCoordinate)(sourceExtent, sourceCenter)) {
    var compensationFactor = (0, _proj.getPointResolution)(sourceProj, sourceResolution, sourceCenter) / sourceResolution;
    if (isFinite(compensationFactor) && compensationFactor > 0) {
      sourceResolution /= compensationFactor;
    }
  }

  return sourceResolution;
}

/**
 * Enlarge the clipping triangle point by 1 pixel to ensure the edges overlap
 * in order to mask gaps caused by antialiasing.
 *
 * @param {number} centroidX Centroid of the triangle (x coordinate in pixels).
 * @param {number} centroidY Centroid of the triangle (y coordinate in pixels).
 * @param {number} x X coordinate of the point (in pixels).
 * @param {number} y Y coordinate of the point (in pixels).
 * @return {module:ol/coordinate~Coordinate} New point 1 px farther from the centroid.
 */
function enlargeClipPoint(centroidX, centroidY, x, y) {
  var dX = x - centroidX;
  var dY = y - centroidY;
  var distance = Math.sqrt(dX * dX + dY * dY);
  return [Math.round(x + dX / distance), Math.round(y + dY / distance)];
}

/**
 * Renders the source data into new canvas based on the triangulation.
 *
 * @param {number} width Width of the canvas.
 * @param {number} height Height of the canvas.
 * @param {number} pixelRatio Pixel ratio.
 * @param {number} sourceResolution Source resolution.
 * @param {module:ol/extent~Extent} sourceExtent Extent of the data source.
 * @param {number} targetResolution Target resolution.
 * @param {module:ol/extent~Extent} targetExtent Target extent.
 * @param {module:ol/reproj/Triangulation} triangulation
 * Calculated triangulation.
 * @param {Array.<{extent: module:ol/extent~Extent,
 *                 image: (HTMLCanvasElement|Image|HTMLVideoElement)}>} sources
 * Array of sources.
 * @param {number} gutter Gutter of the sources.
 * @param {boolean=} opt_renderEdges Render reprojection edges.
 * @return {HTMLCanvasElement} Canvas with reprojected data.
 */
function render(width, height, pixelRatio, sourceResolution, sourceExtent, targetResolution, targetExtent, triangulation, sources, gutter, opt_renderEdges) {

  var context = (0, _dom.createCanvasContext2D)(Math.round(pixelRatio * width), Math.round(pixelRatio * height));

  if (sources.length === 0) {
    return context.canvas;
  }

  context.scale(pixelRatio, pixelRatio);

  var sourceDataExtent = (0, _extent.createEmpty)();
  sources.forEach(function (src, i, arr) {
    (0, _extent.extend)(sourceDataExtent, src.extent);
  });

  var canvasWidthInUnits = (0, _extent.getWidth)(sourceDataExtent);
  var canvasHeightInUnits = (0, _extent.getHeight)(sourceDataExtent);
  var stitchContext = (0, _dom.createCanvasContext2D)(Math.round(pixelRatio * canvasWidthInUnits / sourceResolution), Math.round(pixelRatio * canvasHeightInUnits / sourceResolution));

  var stitchScale = pixelRatio / sourceResolution;

  sources.forEach(function (src, i, arr) {
    var xPos = src.extent[0] - sourceDataExtent[0];
    var yPos = -(src.extent[3] - sourceDataExtent[3]);
    var srcWidth = (0, _extent.getWidth)(src.extent);
    var srcHeight = (0, _extent.getHeight)(src.extent);

    stitchContext.drawImage(src.image, gutter, gutter, src.image.width - 2 * gutter, src.image.height - 2 * gutter, xPos * stitchScale, yPos * stitchScale, srcWidth * stitchScale, srcHeight * stitchScale);
  });

  var targetTopLeft = (0, _extent.getTopLeft)(targetExtent);

  triangulation.getTriangles().forEach(function (triangle, i, arr) {
    /* Calculate affine transform (src -> dst)
     * Resulting matrix can be used to transform coordinate
     * from `sourceProjection` to destination pixels.
     *
     * To optimize number of context calls and increase numerical stability,
     * we also do the following operations:
     * trans(-topLeftExtentCorner), scale(1 / targetResolution), scale(1, -1)
     * here before solving the linear system so [ui, vi] are pixel coordinates.
     *
     * Src points: xi, yi
     * Dst points: ui, vi
     * Affine coefficients: aij
     *
     * | x0 y0 1  0  0 0 |   |a00|   |u0|
     * | x1 y1 1  0  0 0 |   |a01|   |u1|
     * | x2 y2 1  0  0 0 | x |a02| = |u2|
     * |  0  0 0 x0 y0 1 |   |a10|   |v0|
     * |  0  0 0 x1 y1 1 |   |a11|   |v1|
     * |  0  0 0 x2 y2 1 |   |a12|   |v2|
     */
    var source = triangle.source;
    var target = triangle.target;
    var x0 = source[0][0],
        y0 = source[0][1];
    var x1 = source[1][0],
        y1 = source[1][1];
    var x2 = source[2][0],
        y2 = source[2][1];
    var u0 = (target[0][0] - targetTopLeft[0]) / targetResolution;
    var v0 = -(target[0][1] - targetTopLeft[1]) / targetResolution;
    var u1 = (target[1][0] - targetTopLeft[0]) / targetResolution;
    var v1 = -(target[1][1] - targetTopLeft[1]) / targetResolution;
    var u2 = (target[2][0] - targetTopLeft[0]) / targetResolution;
    var v2 = -(target[2][1] - targetTopLeft[1]) / targetResolution;

    // Shift all the source points to improve numerical stability
    // of all the subsequent calculations. The [x0, y0] is used here.
    // This is also used to simplify the linear system.
    var sourceNumericalShiftX = x0;
    var sourceNumericalShiftY = y0;
    x0 = 0;
    y0 = 0;
    x1 -= sourceNumericalShiftX;
    y1 -= sourceNumericalShiftY;
    x2 -= sourceNumericalShiftX;
    y2 -= sourceNumericalShiftY;

    var augmentedMatrix = [[x1, y1, 0, 0, u1 - u0], [x2, y2, 0, 0, u2 - u0], [0, 0, x1, y1, v1 - v0], [0, 0, x2, y2, v2 - v0]];
    var affineCoefs = (0, _math.solveLinearSystem)(augmentedMatrix);
    if (!affineCoefs) {
      return;
    }

    context.save();
    context.beginPath();
    var centroidX = (u0 + u1 + u2) / 3;
    var centroidY = (v0 + v1 + v2) / 3;
    var p0 = enlargeClipPoint(centroidX, centroidY, u0, v0);
    var p1 = enlargeClipPoint(centroidX, centroidY, u1, v1);
    var p2 = enlargeClipPoint(centroidX, centroidY, u2, v2);

    context.moveTo(p1[0], p1[1]);
    context.lineTo(p0[0], p0[1]);
    context.lineTo(p2[0], p2[1]);
    context.clip();

    context.transform(affineCoefs[0], affineCoefs[2], affineCoefs[1], affineCoefs[3], u0, v0);

    context.translate(sourceDataExtent[0] - sourceNumericalShiftX, sourceDataExtent[3] - sourceNumericalShiftY);

    context.scale(sourceResolution / pixelRatio, -sourceResolution / pixelRatio);

    context.drawImage(stitchContext.canvas, 0, 0);
    context.restore();
  });

  if (opt_renderEdges) {
    context.save();

    context.strokeStyle = 'black';
    context.lineWidth = 1;

    triangulation.getTriangles().forEach(function (triangle, i, arr) {
      var target = triangle.target;
      var u0 = (target[0][0] - targetTopLeft[0]) / targetResolution;
      var v0 = -(target[0][1] - targetTopLeft[1]) / targetResolution;
      var u1 = (target[1][0] - targetTopLeft[0]) / targetResolution;
      var v1 = -(target[1][1] - targetTopLeft[1]) / targetResolution;
      var u2 = (target[2][0] - targetTopLeft[0]) / targetResolution;
      var v2 = -(target[2][1] - targetTopLeft[1]) / targetResolution;

      context.beginPath();
      context.moveTo(u1, v1);
      context.lineTo(u0, v0);
      context.lineTo(u2, v2);
      context.closePath();
      context.stroke();
    });

    context.restore();
  }
  return context.canvas;
}

/***/ }),

/***/ "./node_modules/ol/reproj/Tile.js":
/*!****************************************!*\
  !*** ./node_modules/ol/reproj/Tile.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = __webpack_require__(/*! ./common.js */ "./node_modules/ol/reproj/common.js");

var _index = __webpack_require__(/*! ../index.js */ "./node_modules/ol/index.js");

var _Tile = __webpack_require__(/*! ../Tile.js */ "./node_modules/ol/Tile.js");

var _Tile2 = _interopRequireDefault(_Tile);

var _TileState = __webpack_require__(/*! ../TileState.js */ "./node_modules/ol/TileState.js");

var _TileState2 = _interopRequireDefault(_TileState);

var _events = __webpack_require__(/*! ../events.js */ "./node_modules/ol/events.js");

var _EventType = __webpack_require__(/*! ../events/EventType.js */ "./node_modules/ol/events/EventType.js");

var _EventType2 = _interopRequireDefault(_EventType);

var _extent = __webpack_require__(/*! ../extent.js */ "./node_modules/ol/extent.js");

var _math = __webpack_require__(/*! ../math.js */ "./node_modules/ol/math.js");

var _reproj = __webpack_require__(/*! ../reproj.js */ "./node_modules/ol/reproj.js");

var _Triangulation = __webpack_require__(/*! ../reproj/Triangulation.js */ "./node_modules/ol/reproj/Triangulation.js");

var _Triangulation2 = _interopRequireDefault(_Triangulation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @typedef {function(number, number, number, number) : module:ol/Tile} FunctionType
 */

/**
 * @classdesc
 * Class encapsulating single reprojected tile.
 * See {@link module:ol/source/TileImage~TileImage}.
 *
 * @constructor
 * @extends {module:ol/Tile}
 * @param {module:ol/proj/Projection} sourceProj Source projection.
 * @param {module:ol/tilegrid/TileGrid} sourceTileGrid Source tile grid.
 * @param {module:ol/proj/Projection} targetProj Target projection.
 * @param {module:ol/tilegrid/TileGrid} targetTileGrid Target tile grid.
 * @param {module:ol/tilecoord~TileCoord} tileCoord Coordinate of the tile.
 * @param {module:ol/tilecoord~TileCoord} wrappedTileCoord Coordinate of the tile wrapped in X.
 * @param {number} pixelRatio Pixel ratio.
 * @param {number} gutter Gutter of the source tiles.
 * @param {module:ol/reproj/Tile~FunctionType} getTileFunction
 *     Function returning source tiles (z, x, y, pixelRatio).
 * @param {number=} opt_errorThreshold Acceptable reprojection error (in px).
 * @param {boolean=} opt_renderEdges Render reprojection edges.
 */
/**
 * @module ol/reproj/Tile
 */
var ReprojTile = function ReprojTile(sourceProj, sourceTileGrid, targetProj, targetTileGrid, tileCoord, wrappedTileCoord, pixelRatio, gutter, getTileFunction, opt_errorThreshold, opt_renderEdges) {
  _Tile2.default.call(this, tileCoord, _TileState2.default.IDLE);

  /**
   * @private
   * @type {boolean}
   */
  this.renderEdges_ = opt_renderEdges !== undefined ? opt_renderEdges : false;

  /**
   * @private
   * @type {number}
   */
  this.pixelRatio_ = pixelRatio;

  /**
   * @private
   * @type {number}
   */
  this.gutter_ = gutter;

  /**
   * @private
   * @type {HTMLCanvasElement}
   */
  this.canvas_ = null;

  /**
   * @private
   * @type {module:ol/tilegrid/TileGrid}
   */
  this.sourceTileGrid_ = sourceTileGrid;

  /**
   * @private
   * @type {module:ol/tilegrid/TileGrid}
   */
  this.targetTileGrid_ = targetTileGrid;

  /**
   * @private
   * @type {module:ol/tilecoord~TileCoord}
   */
  this.wrappedTileCoord_ = wrappedTileCoord ? wrappedTileCoord : tileCoord;

  /**
   * @private
   * @type {!Array.<module:ol/Tile>}
   */
  this.sourceTiles_ = [];

  /**
   * @private
   * @type {Array.<module:ol/events~EventsKey>}
   */
  this.sourcesListenerKeys_ = null;

  /**
   * @private
   * @type {number}
   */
  this.sourceZ_ = 0;

  var targetExtent = targetTileGrid.getTileCoordExtent(this.wrappedTileCoord_);
  var maxTargetExtent = this.targetTileGrid_.getExtent();
  var maxSourceExtent = this.sourceTileGrid_.getExtent();

  var limitedTargetExtent = maxTargetExtent ? (0, _extent.getIntersection)(targetExtent, maxTargetExtent) : targetExtent;

  if ((0, _extent.getArea)(limitedTargetExtent) === 0) {
    // Tile is completely outside range -> EMPTY
    // TODO: is it actually correct that the source even creates the tile ?
    this.state = _TileState2.default.EMPTY;
    return;
  }

  var sourceProjExtent = sourceProj.getExtent();
  if (sourceProjExtent) {
    if (!maxSourceExtent) {
      maxSourceExtent = sourceProjExtent;
    } else {
      maxSourceExtent = (0, _extent.getIntersection)(maxSourceExtent, sourceProjExtent);
    }
  }

  var targetResolution = targetTileGrid.getResolution(this.wrappedTileCoord_[0]);

  var targetCenter = (0, _extent.getCenter)(limitedTargetExtent);
  var sourceResolution = (0, _reproj.calculateSourceResolution)(sourceProj, targetProj, targetCenter, targetResolution);

  if (!isFinite(sourceResolution) || sourceResolution <= 0) {
    // invalid sourceResolution -> EMPTY
    // probably edges of the projections when no extent is defined
    this.state = _TileState2.default.EMPTY;
    return;
  }

  var errorThresholdInPixels = opt_errorThreshold !== undefined ? opt_errorThreshold : _common.ERROR_THRESHOLD;

  /**
   * @private
   * @type {!module:ol/reproj/Triangulation}
   */
  this.triangulation_ = new _Triangulation2.default(sourceProj, targetProj, limitedTargetExtent, maxSourceExtent, sourceResolution * errorThresholdInPixels);

  if (this.triangulation_.getTriangles().length === 0) {
    // no valid triangles -> EMPTY
    this.state = _TileState2.default.EMPTY;
    return;
  }

  this.sourceZ_ = sourceTileGrid.getZForResolution(sourceResolution);
  var sourceExtent = this.triangulation_.calculateSourceExtent();

  if (maxSourceExtent) {
    if (sourceProj.canWrapX()) {
      sourceExtent[1] = (0, _math.clamp)(sourceExtent[1], maxSourceExtent[1], maxSourceExtent[3]);
      sourceExtent[3] = (0, _math.clamp)(sourceExtent[3], maxSourceExtent[1], maxSourceExtent[3]);
    } else {
      sourceExtent = (0, _extent.getIntersection)(sourceExtent, maxSourceExtent);
    }
  }

  if (!(0, _extent.getArea)(sourceExtent)) {
    this.state = _TileState2.default.EMPTY;
  } else {
    var sourceRange = sourceTileGrid.getTileRangeForExtentAndZ(sourceExtent, this.sourceZ_);

    for (var srcX = sourceRange.minX; srcX <= sourceRange.maxX; srcX++) {
      for (var srcY = sourceRange.minY; srcY <= sourceRange.maxY; srcY++) {
        var tile = getTileFunction(this.sourceZ_, srcX, srcY, pixelRatio);
        if (tile) {
          this.sourceTiles_.push(tile);
        }
      }
    }

    if (this.sourceTiles_.length === 0) {
      this.state = _TileState2.default.EMPTY;
    }
  }
};

(0, _index.inherits)(ReprojTile, _Tile2.default);

/**
 * @inheritDoc
 */
ReprojTile.prototype.disposeInternal = function () {
  if (this.state == _TileState2.default.LOADING) {
    this.unlistenSources_();
  }
  _Tile2.default.prototype.disposeInternal.call(this);
};

/**
 * Get the HTML Canvas element for this tile.
 * @return {HTMLCanvasElement} Canvas.
 */
ReprojTile.prototype.getImage = function () {
  return this.canvas_;
};

/**
 * @private
 */
ReprojTile.prototype.reproject_ = function () {
  var sources = [];
  this.sourceTiles_.forEach(function (tile, i, arr) {
    if (tile && tile.getState() == _TileState2.default.LOADED) {
      sources.push({
        extent: this.sourceTileGrid_.getTileCoordExtent(tile.tileCoord),
        image: tile.getImage()
      });
    }
  }.bind(this));
  this.sourceTiles_.length = 0;

  if (sources.length === 0) {
    this.state = _TileState2.default.ERROR;
  } else {
    var z = this.wrappedTileCoord_[0];
    var size = this.targetTileGrid_.getTileSize(z);
    var width = typeof size === 'number' ? size : size[0];
    var height = typeof size === 'number' ? size : size[1];
    var targetResolution = this.targetTileGrid_.getResolution(z);
    var sourceResolution = this.sourceTileGrid_.getResolution(this.sourceZ_);

    var targetExtent = this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_);
    this.canvas_ = (0, _reproj.render)(width, height, this.pixelRatio_, sourceResolution, this.sourceTileGrid_.getExtent(), targetResolution, targetExtent, this.triangulation_, sources, this.gutter_, this.renderEdges_);

    this.state = _TileState2.default.LOADED;
  }
  this.changed();
};

/**
 * @inheritDoc
 */
ReprojTile.prototype.load = function () {
  if (this.state == _TileState2.default.IDLE) {
    this.state = _TileState2.default.LOADING;
    this.changed();

    var leftToLoad = 0;

    this.sourcesListenerKeys_ = [];
    this.sourceTiles_.forEach(function (tile, i, arr) {
      var state = tile.getState();
      if (state == _TileState2.default.IDLE || state == _TileState2.default.LOADING) {
        leftToLoad++;

        var sourceListenKey = (0, _events.listen)(tile, _EventType2.default.CHANGE, function (e) {
          var state = tile.getState();
          if (state == _TileState2.default.LOADED || state == _TileState2.default.ERROR || state == _TileState2.default.EMPTY) {
            (0, _events.unlistenByKey)(sourceListenKey);
            leftToLoad--;
            if (leftToLoad === 0) {
              this.unlistenSources_();
              this.reproject_();
            }
          }
        }, this);
        this.sourcesListenerKeys_.push(sourceListenKey);
      }
    }.bind(this));

    this.sourceTiles_.forEach(function (tile, i, arr) {
      var state = tile.getState();
      if (state == _TileState2.default.IDLE) {
        tile.load();
      }
    });

    if (leftToLoad === 0) {
      setTimeout(this.reproject_.bind(this), 0);
    }
  }
};

/**
 * @private
 */
ReprojTile.prototype.unlistenSources_ = function () {
  this.sourcesListenerKeys_.forEach(_events.unlistenByKey);
  this.sourcesListenerKeys_ = null;
};
exports.default = ReprojTile;

/***/ }),

/***/ "./node_modules/ol/reproj/Triangulation.js":
/*!*************************************************!*\
  !*** ./node_modules/ol/reproj/Triangulation.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extent = __webpack_require__(/*! ../extent.js */ "./node_modules/ol/extent.js");

var _math = __webpack_require__(/*! ../math.js */ "./node_modules/ol/math.js");

var _proj = __webpack_require__(/*! ../proj.js */ "./node_modules/ol/proj.js");

/**
 * Single triangle; consists of 3 source points and 3 target points.
 * @typedef {Object} Triangle
 * @property {Array.<module:ol/coordinate~Coordinate>} source
 * @property {Array.<module:ol/coordinate~Coordinate>} target
 */

/**
 * Maximum number of subdivision steps during raster reprojection triangulation.
 * Prevents high memory usage and large number of proj4 calls (for certain
 * transformations and areas). At most `2*(2^this)` triangles are created for
 * each triangulated extent (tile/image).
 * @type {number}
 */
var MAX_SUBDIVISION = 10;

/**
 * Maximum allowed size of triangle relative to world width. When transforming
 * corners of world extent between certain projections, the resulting
 * triangulation seems to have zero error and no subdivision is performed. If
 * the triangle width is more than this (relative to world width; 0-1),
 * subdivison is forced (up to `MAX_SUBDIVISION`). Default is `0.25`.
 * @type {number}
 */
/**
 * @module ol/reproj/Triangulation
 */
var MAX_TRIANGLE_WIDTH = 0.25;

/**
 * @classdesc
 * Class containing triangulation of the given target extent.
 * Used for determining source data and the reprojection itself.
 *
 * @param {module:ol/proj/Projection} sourceProj Source projection.
 * @param {module:ol/proj/Projection} targetProj Target projection.
 * @param {module:ol/extent~Extent} targetExtent Target extent to triangulate.
 * @param {module:ol/extent~Extent} maxSourceExtent Maximal source extent that can be used.
 * @param {number} errorThreshold Acceptable error (in source units).
 * @constructor
 */
var Triangulation = function Triangulation(sourceProj, targetProj, targetExtent, maxSourceExtent, errorThreshold) {

  /**
   * @type {module:ol/proj/Projection}
   * @private
   */
  this.sourceProj_ = sourceProj;

  /**
   * @type {module:ol/proj/Projection}
   * @private
   */
  this.targetProj_ = targetProj;

  /** @type {!Object.<string, module:ol/coordinate~Coordinate>} */
  var transformInvCache = {};
  var transformInv = (0, _proj.getTransform)(this.targetProj_, this.sourceProj_);

  /**
   * @param {module:ol/coordinate~Coordinate} c A coordinate.
   * @return {module:ol/coordinate~Coordinate} Transformed coordinate.
   * @private
   */
  this.transformInv_ = function (c) {
    var key = c[0] + '/' + c[1];
    if (!transformInvCache[key]) {
      transformInvCache[key] = transformInv(c);
    }
    return transformInvCache[key];
  };

  /**
   * @type {module:ol/extent~Extent}
   * @private
   */
  this.maxSourceExtent_ = maxSourceExtent;

  /**
   * @type {number}
   * @private
   */
  this.errorThresholdSquared_ = errorThreshold * errorThreshold;

  /**
   * @type {Array.<module:ol/reproj/Triangulation~Triangle>}
   * @private
   */
  this.triangles_ = [];

  /**
   * Indicates that the triangulation crosses edge of the source projection.
   * @type {boolean}
   * @private
   */
  this.wrapsXInSource_ = false;

  /**
   * @type {boolean}
   * @private
   */
  this.canWrapXInSource_ = this.sourceProj_.canWrapX() && !!maxSourceExtent && !!this.sourceProj_.getExtent() && (0, _extent.getWidth)(maxSourceExtent) == (0, _extent.getWidth)(this.sourceProj_.getExtent());

  /**
   * @type {?number}
   * @private
   */
  this.sourceWorldWidth_ = this.sourceProj_.getExtent() ? (0, _extent.getWidth)(this.sourceProj_.getExtent()) : null;

  /**
   * @type {?number}
   * @private
   */
  this.targetWorldWidth_ = this.targetProj_.getExtent() ? (0, _extent.getWidth)(this.targetProj_.getExtent()) : null;

  var destinationTopLeft = (0, _extent.getTopLeft)(targetExtent);
  var destinationTopRight = (0, _extent.getTopRight)(targetExtent);
  var destinationBottomRight = (0, _extent.getBottomRight)(targetExtent);
  var destinationBottomLeft = (0, _extent.getBottomLeft)(targetExtent);
  var sourceTopLeft = this.transformInv_(destinationTopLeft);
  var sourceTopRight = this.transformInv_(destinationTopRight);
  var sourceBottomRight = this.transformInv_(destinationBottomRight);
  var sourceBottomLeft = this.transformInv_(destinationBottomLeft);

  this.addQuad_(destinationTopLeft, destinationTopRight, destinationBottomRight, destinationBottomLeft, sourceTopLeft, sourceTopRight, sourceBottomRight, sourceBottomLeft, MAX_SUBDIVISION);

  if (this.wrapsXInSource_) {
    var leftBound = Infinity;
    this.triangles_.forEach(function (triangle, i, arr) {
      leftBound = Math.min(leftBound, triangle.source[0][0], triangle.source[1][0], triangle.source[2][0]);
    });

    // Shift triangles to be as close to `leftBound` as possible
    // (if the distance is more than `worldWidth / 2` it can be closer.
    this.triangles_.forEach(function (triangle) {
      if (Math.max(triangle.source[0][0], triangle.source[1][0], triangle.source[2][0]) - leftBound > this.sourceWorldWidth_ / 2) {
        var newTriangle = [[triangle.source[0][0], triangle.source[0][1]], [triangle.source[1][0], triangle.source[1][1]], [triangle.source[2][0], triangle.source[2][1]]];
        if (newTriangle[0][0] - leftBound > this.sourceWorldWidth_ / 2) {
          newTriangle[0][0] -= this.sourceWorldWidth_;
        }
        if (newTriangle[1][0] - leftBound > this.sourceWorldWidth_ / 2) {
          newTriangle[1][0] -= this.sourceWorldWidth_;
        }
        if (newTriangle[2][0] - leftBound > this.sourceWorldWidth_ / 2) {
          newTriangle[2][0] -= this.sourceWorldWidth_;
        }

        // Rarely (if the extent contains both the dateline and prime meridian)
        // the shift can in turn break some triangles.
        // Detect this here and don't shift in such cases.
        var minX = Math.min(newTriangle[0][0], newTriangle[1][0], newTriangle[2][0]);
        var maxX = Math.max(newTriangle[0][0], newTriangle[1][0], newTriangle[2][0]);
        if (maxX - minX < this.sourceWorldWidth_ / 2) {
          triangle.source = newTriangle;
        }
      }
    }.bind(this));
  }

  transformInvCache = {};
};

/**
 * Adds triangle to the triangulation.
 * @param {module:ol/coordinate~Coordinate} a The target a coordinate.
 * @param {module:ol/coordinate~Coordinate} b The target b coordinate.
 * @param {module:ol/coordinate~Coordinate} c The target c coordinate.
 * @param {module:ol/coordinate~Coordinate} aSrc The source a coordinate.
 * @param {module:ol/coordinate~Coordinate} bSrc The source b coordinate.
 * @param {module:ol/coordinate~Coordinate} cSrc The source c coordinate.
 * @private
 */
Triangulation.prototype.addTriangle_ = function (a, b, c, aSrc, bSrc, cSrc) {
  this.triangles_.push({
    source: [aSrc, bSrc, cSrc],
    target: [a, b, c]
  });
};

/**
 * Adds quad (points in clock-wise order) to the triangulation
 * (and reprojects the vertices) if valid.
 * Performs quad subdivision if needed to increase precision.
 *
 * @param {module:ol/coordinate~Coordinate} a The target a coordinate.
 * @param {module:ol/coordinate~Coordinate} b The target b coordinate.
 * @param {module:ol/coordinate~Coordinate} c The target c coordinate.
 * @param {module:ol/coordinate~Coordinate} d The target d coordinate.
 * @param {module:ol/coordinate~Coordinate} aSrc The source a coordinate.
 * @param {module:ol/coordinate~Coordinate} bSrc The source b coordinate.
 * @param {module:ol/coordinate~Coordinate} cSrc The source c coordinate.
 * @param {module:ol/coordinate~Coordinate} dSrc The source d coordinate.
 * @param {number} maxSubdivision Maximal allowed subdivision of the quad.
 * @private
 */
Triangulation.prototype.addQuad_ = function (a, b, c, d, aSrc, bSrc, cSrc, dSrc, maxSubdivision) {

  var sourceQuadExtent = (0, _extent.boundingExtent)([aSrc, bSrc, cSrc, dSrc]);
  var sourceCoverageX = this.sourceWorldWidth_ ? (0, _extent.getWidth)(sourceQuadExtent) / this.sourceWorldWidth_ : null;
  var sourceWorldWidth = /** @type {number} */this.sourceWorldWidth_;

  // when the quad is wrapped in the source projection
  // it covers most of the projection extent, but not fully
  var wrapsX = this.sourceProj_.canWrapX() && sourceCoverageX > 0.5 && sourceCoverageX < 1;

  var needsSubdivision = false;

  if (maxSubdivision > 0) {
    if (this.targetProj_.isGlobal() && this.targetWorldWidth_) {
      var targetQuadExtent = (0, _extent.boundingExtent)([a, b, c, d]);
      var targetCoverageX = (0, _extent.getWidth)(targetQuadExtent) / this.targetWorldWidth_;
      needsSubdivision |= targetCoverageX > MAX_TRIANGLE_WIDTH;
    }
    if (!wrapsX && this.sourceProj_.isGlobal() && sourceCoverageX) {
      needsSubdivision |= sourceCoverageX > MAX_TRIANGLE_WIDTH;
    }
  }

  if (!needsSubdivision && this.maxSourceExtent_) {
    if (!(0, _extent.intersects)(sourceQuadExtent, this.maxSourceExtent_)) {
      // whole quad outside source projection extent -> ignore
      return;
    }
  }

  if (!needsSubdivision) {
    if (!isFinite(aSrc[0]) || !isFinite(aSrc[1]) || !isFinite(bSrc[0]) || !isFinite(bSrc[1]) || !isFinite(cSrc[0]) || !isFinite(cSrc[1]) || !isFinite(dSrc[0]) || !isFinite(dSrc[1])) {
      if (maxSubdivision > 0) {
        needsSubdivision = true;
      } else {
        return;
      }
    }
  }

  if (maxSubdivision > 0) {
    if (!needsSubdivision) {
      var center = [(a[0] + c[0]) / 2, (a[1] + c[1]) / 2];
      var centerSrc = this.transformInv_(center);

      var dx = void 0;
      if (wrapsX) {
        var centerSrcEstimX = ((0, _math.modulo)(aSrc[0], sourceWorldWidth) + (0, _math.modulo)(cSrc[0], sourceWorldWidth)) / 2;
        dx = centerSrcEstimX - (0, _math.modulo)(centerSrc[0], sourceWorldWidth);
      } else {
        dx = (aSrc[0] + cSrc[0]) / 2 - centerSrc[0];
      }
      var dy = (aSrc[1] + cSrc[1]) / 2 - centerSrc[1];
      var centerSrcErrorSquared = dx * dx + dy * dy;
      needsSubdivision = centerSrcErrorSquared > this.errorThresholdSquared_;
    }
    if (needsSubdivision) {
      if (Math.abs(a[0] - c[0]) <= Math.abs(a[1] - c[1])) {
        // split horizontally (top & bottom)
        var bc = [(b[0] + c[0]) / 2, (b[1] + c[1]) / 2];
        var bcSrc = this.transformInv_(bc);
        var da = [(d[0] + a[0]) / 2, (d[1] + a[1]) / 2];
        var daSrc = this.transformInv_(da);

        this.addQuad_(a, b, bc, da, aSrc, bSrc, bcSrc, daSrc, maxSubdivision - 1);
        this.addQuad_(da, bc, c, d, daSrc, bcSrc, cSrc, dSrc, maxSubdivision - 1);
      } else {
        // split vertically (left & right)
        var ab = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
        var abSrc = this.transformInv_(ab);
        var cd = [(c[0] + d[0]) / 2, (c[1] + d[1]) / 2];
        var cdSrc = this.transformInv_(cd);

        this.addQuad_(a, ab, cd, d, aSrc, abSrc, cdSrc, dSrc, maxSubdivision - 1);
        this.addQuad_(ab, b, c, cd, abSrc, bSrc, cSrc, cdSrc, maxSubdivision - 1);
      }
      return;
    }
  }

  if (wrapsX) {
    if (!this.canWrapXInSource_) {
      return;
    }
    this.wrapsXInSource_ = true;
  }

  this.addTriangle_(a, c, d, aSrc, cSrc, dSrc);
  this.addTriangle_(a, b, c, aSrc, bSrc, cSrc);
};

/**
 * Calculates extent of the 'source' coordinates from all the triangles.
 *
 * @return {module:ol/extent~Extent} Calculated extent.
 */
Triangulation.prototype.calculateSourceExtent = function () {
  var extent = (0, _extent.createEmpty)();

  this.triangles_.forEach(function (triangle, i, arr) {
    var src = triangle.source;
    (0, _extent.extendCoordinate)(extent, src[0]);
    (0, _extent.extendCoordinate)(extent, src[1]);
    (0, _extent.extendCoordinate)(extent, src[2]);
  });

  return extent;
};

/**
 * @return {Array.<module:ol/reproj/Triangulation~Triangle>} Array of the calculated triangles.
 */
Triangulation.prototype.getTriangles = function () {
  return this.triangles_;
};
exports.default = Triangulation;

/***/ }),

/***/ "./node_modules/ol/reproj/common.js":
/*!******************************************!*\
  !*** ./node_modules/ol/reproj/common.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Default maximum allowed threshold  (in pixels) for reprojection
 * triangulation.
 * @type {number}
 */
var ERROR_THRESHOLD = exports.ERROR_THRESHOLD = 0.5;

/**
 * Enable automatic reprojection of raster sources. Default is `true`.
 * TODO: decide if we want to expose this as a build flag or remove it
 * @type {boolean}
 */
var ENABLE_RASTER_REPROJECTION = exports.ENABLE_RASTER_REPROJECTION = true;

/***/ }),

/***/ "./node_modules/ol/size.js":
/*!*********************************!*\
  !*** ./node_modules/ol/size.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buffer = buffer;
exports.hasArea = hasArea;
exports.scale = scale;
exports.toSize = toSize;
/**
 * @module ol/size
 */

/**
 * An array of numbers representing a size: `[width, height]`.
 * @typedef {Array.<number>} Size
 * @api
 */

/**
 * Returns a buffered size.
 * @param {module:ol/size~Size} size Size.
 * @param {number} num The amount by which to buffer.
 * @param {module:ol/size~Size=} opt_size Optional reusable size array.
 * @return {module:ol/size~Size} The buffered size.
 */
function buffer(size, num, opt_size) {
  if (opt_size === undefined) {
    opt_size = [0, 0];
  }
  opt_size[0] = size[0] + 2 * num;
  opt_size[1] = size[1] + 2 * num;
  return opt_size;
}

/**
 * Determines if a size has a positive area.
 * @param {module:ol/size~Size} size The size to test.
 * @return {boolean} The size has a positive area.
 */
function hasArea(size) {
  return size[0] > 0 && size[1] > 0;
}

/**
 * Returns a size scaled by a ratio. The result will be an array of integers.
 * @param {module:ol/size~Size} size Size.
 * @param {number} ratio Ratio.
 * @param {module:ol/size~Size=} opt_size Optional reusable size array.
 * @return {module:ol/size~Size} The scaled size.
 */
function scale(size, ratio, opt_size) {
  if (opt_size === undefined) {
    opt_size = [0, 0];
  }
  opt_size[0] = size[0] * ratio + 0.5 | 0;
  opt_size[1] = size[1] * ratio + 0.5 | 0;
  return opt_size;
}

/**
 * Returns an `module:ol/size~Size` array for the passed in number (meaning: square) or
 * `module:ol/size~Size` array.
 * (meaning: non-square),
 * @param {number|module:ol/size~Size} size Width and height.
 * @param {module:ol/size~Size=} opt_size Optional reusable size array.
 * @return {module:ol/size~Size} Size.
 * @api
 */
function toSize(size, opt_size) {
  if (Array.isArray(size)) {
    return size;
  } else {
    if (opt_size === undefined) {
      opt_size = [size, size];
    } else {
      opt_size[0] = opt_size[1] = /** @type {number} */size;
    }
    return opt_size;
  }
}

/***/ }),

/***/ "./node_modules/ol/source/Source.js":
/*!******************************************!*\
  !*** ./node_modules/ol/source/Source.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../index.js */ "./node_modules/ol/index.js");

var _functions = __webpack_require__(/*! ../functions.js */ "./node_modules/ol/functions.js");

var _Object = __webpack_require__(/*! ../Object.js */ "./node_modules/ol/Object.js");

var _Object2 = _interopRequireDefault(_Object);

var _proj = __webpack_require__(/*! ../proj.js */ "./node_modules/ol/proj.js");

var _State = __webpack_require__(/*! ../source/State.js */ "./node_modules/ol/source/State.js");

var _State2 = _interopRequireDefault(_State);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A function that returns a string or an array of strings representing source
 * attributions.
 *
 * @typedef {function(module:ol/PluggableMap~FrameState): (string|Array.<string>)} Attribution
 */

/**
 * A type that can be used to provide attribution information for data sources.
 *
 * It represents either
 * * a simple string (e.g. `'© Acme Inc.'`)
 * * an array of simple strings (e.g. `['© Acme Inc.', '© Bacme Inc.']`)
 * * a function that returns a string or array of strings (`{@link module:ol/source/Source~Attribution}`)
 *
 * @typedef {string|Array.<string>|module:ol/source/Source~Attribution} AttributionLike
 */

/**
 * @typedef {Object} Options
 * @property {module:ol/source/Source~AttributionLike} [attributions]
 * @property {module:ol/proj~ProjectionLike} projection
 * @property {module:ol/source/State} [state]
 * @property {boolean} [wrapX]
 */

/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * Base class for {@link module:ol/layer/Layer~Layer} sources.
 *
 * A generic `change` event is triggered when the state of the source changes.
 *
 * @constructor
 * @abstract
 * @extends {module:ol/Object}
 * @param {module:ol/source/Source~Options} options Source options.
 * @api
 */
var Source = function Source(options) {

  _Object2.default.call(this);

  /**
   * @private
   * @type {module:ol/proj/Projection}
   */
  this.projection_ = (0, _proj.get)(options.projection);

  /**
   * @private
   * @type {?module:ol/source/Source~Attribution}
   */
  this.attributions_ = this.adaptAttributions_(options.attributions);

  /**
   * @private
   * @type {module:ol/source/State}
   */
  this.state_ = options.state !== undefined ? options.state : _State2.default.READY;

  /**
   * @private
   * @type {boolean}
   */
  this.wrapX_ = options.wrapX !== undefined ? options.wrapX : false;
}; /**
    * @module ol/source/Source
    */


(0, _index.inherits)(Source, _Object2.default);

/**
 * Turns the attributions option into an attributions function.
 * @param {module:ol/source/Source~AttributionLike|undefined} attributionLike The attribution option.
 * @return {?module:ol/source/Source~Attribution} An attribution function (or null).
 */
Source.prototype.adaptAttributions_ = function (attributionLike) {
  if (!attributionLike) {
    return null;
  }
  if (Array.isArray(attributionLike)) {
    return function (frameState) {
      return attributionLike;
    };
  }

  if (typeof attributionLike === 'function') {
    return attributionLike;
  }

  return function (frameState) {
    return [attributionLike];
  };
};

/**
 * @param {module:ol/coordinate~Coordinate} coordinate Coordinate.
 * @param {number} resolution Resolution.
 * @param {number} rotation Rotation.
 * @param {number} hitTolerance Hit tolerance in pixels.
 * @param {Object.<string, boolean>} skippedFeatureUids Skipped feature uids.
 * @param {function((module:ol/Feature|module:ol/render/Feature)): T} callback Feature callback.
 * @return {T|undefined} Callback result.
 * @template T
 */
Source.prototype.forEachFeatureAtCoordinate = _functions.UNDEFINED;

/**
 * Get the attribution function for the source.
 * @return {?module:ol/source/Source~Attribution} Attribution function.
 */
Source.prototype.getAttributions = function () {
  return this.attributions_;
};

/**
 * Get the projection of the source.
 * @return {module:ol/proj/Projection} Projection.
 * @api
 */
Source.prototype.getProjection = function () {
  return this.projection_;
};

/**
 * @abstract
 * @return {Array.<number>|undefined} Resolutions.
 */
Source.prototype.getResolutions = function () {};

/**
 * Get the state of the source, see {@link module:ol/source/State~State} for possible states.
 * @return {module:ol/source/State} State.
 * @api
 */
Source.prototype.getState = function () {
  return this.state_;
};

/**
 * @return {boolean|undefined} Wrap X.
 */
Source.prototype.getWrapX = function () {
  return this.wrapX_;
};

/**
 * Refreshes the source and finally dispatches a 'change' event.
 * @api
 */
Source.prototype.refresh = function () {
  this.changed();
};

/**
 * Set the attributions of the source.
 * @param {module:ol/source/Source~AttributionLike|undefined} attributions Attributions.
 *     Can be passed as `string`, `Array<string>`, `{@link module:ol/source/Source~Attribution}`,
 *     or `undefined`.
 * @api
 */
Source.prototype.setAttributions = function (attributions) {
  this.attributions_ = this.adaptAttributions_(attributions);
  this.changed();
};

/**
 * Set the state of the source.
 * @param {module:ol/source/State} state State.
 * @protected
 */
Source.prototype.setState = function (state) {
  this.state_ = state;
  this.changed();
};
exports.default = Source;

/***/ }),

/***/ "./node_modules/ol/source/State.js":
/*!*****************************************!*\
  !*** ./node_modules/ol/source/State.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @module ol/source/State
 */

/**
 * State of the source, one of 'undefined', 'loading', 'ready' or 'error'.
 * @enum {string}
 */
exports.default = {
  UNDEFINED: 'undefined',
  LOADING: 'loading',
  READY: 'ready',
  ERROR: 'error'
};

/***/ }),

/***/ "./node_modules/ol/source/Tile.js":
/*!****************************************!*\
  !*** ./node_modules/ol/source/Tile.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TileSourceEvent = undefined;

var _index = __webpack_require__(/*! ../index.js */ "./node_modules/ol/index.js");

var _functions = __webpack_require__(/*! ../functions.js */ "./node_modules/ol/functions.js");

var _TileCache = __webpack_require__(/*! ../TileCache.js */ "./node_modules/ol/TileCache.js");

var _TileCache2 = _interopRequireDefault(_TileCache);

var _TileState = __webpack_require__(/*! ../TileState.js */ "./node_modules/ol/TileState.js");

var _TileState2 = _interopRequireDefault(_TileState);

var _Event = __webpack_require__(/*! ../events/Event.js */ "./node_modules/ol/events/Event.js");

var _Event2 = _interopRequireDefault(_Event);

var _proj = __webpack_require__(/*! ../proj.js */ "./node_modules/ol/proj.js");

var _size = __webpack_require__(/*! ../size.js */ "./node_modules/ol/size.js");

var _Source = __webpack_require__(/*! ../source/Source.js */ "./node_modules/ol/source/Source.js");

var _Source2 = _interopRequireDefault(_Source);

var _tilecoord = __webpack_require__(/*! ../tilecoord.js */ "./node_modules/ol/tilecoord.js");

var _tilegrid = __webpack_require__(/*! ../tilegrid.js */ "./node_modules/ol/tilegrid.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @typedef {Object} Options
 * @property {module:ol/source/Source~AttributionLike} [attributions]
 * @property {number} [cacheSize]
 * @property {module:ol/extent~Extent} [extent]
 * @property {boolean} [opaque]
 * @property {number} [tilePixelRatio]
 * @property {module:ol/proj~ProjectionLike} [projection]
 * @property {module:ol/source/State} [state]
 * @property {module:ol/tilegrid/TileGrid} [tileGrid]
 * @property {boolean} [wrapX=true]
 * @property {number} [transition]
 */

/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * Base class for sources providing images divided into a tile grid.
 *
 * @constructor
 * @abstract
 * @extends {module:ol/source/Source}
 * @param {module:ol/source/Tile~Options=} options SourceTile source options.
 * @api
 */
/**
 * @module ol/source/Tile
 */
var TileSource = function TileSource(options) {

  _Source2.default.call(this, {
    attributions: options.attributions,
    extent: options.extent,
    projection: options.projection,
    state: options.state,
    wrapX: options.wrapX
  });

  /**
   * @private
   * @type {boolean}
   */
  this.opaque_ = options.opaque !== undefined ? options.opaque : false;

  /**
   * @private
   * @type {number}
   */
  this.tilePixelRatio_ = options.tilePixelRatio !== undefined ? options.tilePixelRatio : 1;

  /**
   * @protected
   * @type {module:ol/tilegrid/TileGrid}
   */
  this.tileGrid = options.tileGrid !== undefined ? options.tileGrid : null;

  /**
   * @protected
   * @type {module:ol/TileCache}
   */
  this.tileCache = new _TileCache2.default(options.cacheSize);

  /**
   * @protected
   * @type {module:ol/size~Size}
   */
  this.tmpSize = [0, 0];

  /**
   * @private
   * @type {string}
   */
  this.key_ = '';

  /**
   * @protected
   * @type {module:ol/Tile~Options}
   */
  this.tileOptions = { transition: options.transition };
};

(0, _index.inherits)(TileSource, _Source2.default);

/**
 * @return {boolean} Can expire cache.
 */
TileSource.prototype.canExpireCache = function () {
  return this.tileCache.canExpireCache();
};

/**
 * @param {module:ol/proj/Projection} projection Projection.
 * @param {!Object.<string, module:ol/TileRange>} usedTiles Used tiles.
 */
TileSource.prototype.expireCache = function (projection, usedTiles) {
  var tileCache = this.getTileCacheForProjection(projection);
  if (tileCache) {
    tileCache.expireCache(usedTiles);
  }
};

/**
 * @param {module:ol/proj/Projection} projection Projection.
 * @param {number} z Zoom level.
 * @param {module:ol/TileRange} tileRange Tile range.
 * @param {function(module:ol/Tile):(boolean|undefined)} callback Called with each
 *     loaded tile.  If the callback returns `false`, the tile will not be
 *     considered loaded.
 * @return {boolean} The tile range is fully covered with loaded tiles.
 */
TileSource.prototype.forEachLoadedTile = function (projection, z, tileRange, callback) {
  var tileCache = this.getTileCacheForProjection(projection);
  if (!tileCache) {
    return false;
  }

  var covered = true;
  var tile = void 0,
      tileCoordKey = void 0,
      loaded = void 0;
  for (var x = tileRange.minX; x <= tileRange.maxX; ++x) {
    for (var y = tileRange.minY; y <= tileRange.maxY; ++y) {
      tileCoordKey = (0, _tilecoord.getKeyZXY)(z, x, y);
      loaded = false;
      if (tileCache.containsKey(tileCoordKey)) {
        tile = /** @type {!module:ol/Tile} */tileCache.get(tileCoordKey);
        loaded = tile.getState() === _TileState2.default.LOADED;
        if (loaded) {
          loaded = callback(tile) !== false;
        }
      }
      if (!loaded) {
        covered = false;
      }
    }
  }
  return covered;
};

/**
 * @param {module:ol/proj/Projection} projection Projection.
 * @return {number} Gutter.
 */
TileSource.prototype.getGutter = function (projection) {
  return 0;
};

/**
 * Return the key to be used for all tiles in the source.
 * @return {string} The key for all tiles.
 * @protected
 */
TileSource.prototype.getKey = function () {
  return this.key_;
};

/**
 * Set the value to be used as the key for all tiles in the source.
 * @param {string} key The key for tiles.
 * @protected
 */
TileSource.prototype.setKey = function (key) {
  if (this.key_ !== key) {
    this.key_ = key;
    this.changed();
  }
};

/**
 * @param {module:ol/proj/Projection} projection Projection.
 * @return {boolean} Opaque.
 */
TileSource.prototype.getOpaque = function (projection) {
  return this.opaque_;
};

/**
 * @inheritDoc
 */
TileSource.prototype.getResolutions = function () {
  return this.tileGrid.getResolutions();
};

/**
 * @abstract
 * @param {number} z Tile coordinate z.
 * @param {number} x Tile coordinate x.
 * @param {number} y Tile coordinate y.
 * @param {number} pixelRatio Pixel ratio.
 * @param {module:ol/proj/Projection} projection Projection.
 * @return {!module:ol/Tile} Tile.
 */
TileSource.prototype.getTile = function (z, x, y, pixelRatio, projection) {};

/**
 * Return the tile grid of the tile source.
 * @return {module:ol/tilegrid/TileGrid} Tile grid.
 * @api
 */
TileSource.prototype.getTileGrid = function () {
  return this.tileGrid;
};

/**
 * @param {module:ol/proj/Projection} projection Projection.
 * @return {!module:ol/tilegrid/TileGrid} Tile grid.
 */
TileSource.prototype.getTileGridForProjection = function (projection) {
  if (!this.tileGrid) {
    return (0, _tilegrid.getForProjection)(projection);
  } else {
    return this.tileGrid;
  }
};

/**
 * @param {module:ol/proj/Projection} projection Projection.
 * @return {module:ol/TileCache} Tile cache.
 * @protected
 */
TileSource.prototype.getTileCacheForProjection = function (projection) {
  var thisProj = this.getProjection();
  if (thisProj && !(0, _proj.equivalent)(thisProj, projection)) {
    return null;
  } else {
    return this.tileCache;
  }
};

/**
 * Get the tile pixel ratio for this source. Subclasses may override this
 * method, which is meant to return a supported pixel ratio that matches the
 * provided `pixelRatio` as close as possible.
 * @param {number} pixelRatio Pixel ratio.
 * @return {number} Tile pixel ratio.
 */
TileSource.prototype.getTilePixelRatio = function (pixelRatio) {
  return this.tilePixelRatio_;
};

/**
 * @param {number} z Z.
 * @param {number} pixelRatio Pixel ratio.
 * @param {module:ol/proj/Projection} projection Projection.
 * @return {module:ol/size~Size} Tile size.
 */
TileSource.prototype.getTilePixelSize = function (z, pixelRatio, projection) {
  var tileGrid = this.getTileGridForProjection(projection);
  var tilePixelRatio = this.getTilePixelRatio(pixelRatio);
  var tileSize = (0, _size.toSize)(tileGrid.getTileSize(z), this.tmpSize);
  if (tilePixelRatio == 1) {
    return tileSize;
  } else {
    return (0, _size.scale)(tileSize, tilePixelRatio, this.tmpSize);
  }
};

/**
 * Returns a tile coordinate wrapped around the x-axis. When the tile coordinate
 * is outside the resolution and extent range of the tile grid, `null` will be
 * returned.
 * @param {module:ol/tilecoord~TileCoord} tileCoord Tile coordinate.
 * @param {module:ol/proj/Projection=} opt_projection Projection.
 * @return {module:ol/tilecoord~TileCoord} Tile coordinate to be passed to the tileUrlFunction or
 *     null if no tile URL should be created for the passed `tileCoord`.
 */
TileSource.prototype.getTileCoordForTileUrlFunction = function (tileCoord, opt_projection) {
  var projection = opt_projection !== undefined ? opt_projection : this.getProjection();
  var tileGrid = this.getTileGridForProjection(projection);
  if (this.getWrapX() && projection.isGlobal()) {
    tileCoord = (0, _tilegrid.wrapX)(tileGrid, tileCoord, projection);
  }
  return (0, _tilecoord.withinExtentAndZ)(tileCoord, tileGrid) ? tileCoord : null;
};

/**
 * @inheritDoc
 */
TileSource.prototype.refresh = function () {
  this.tileCache.clear();
  this.changed();
};

/**
 * Marks a tile coord as being used, without triggering a load.
 * @param {number} z Tile coordinate z.
 * @param {number} x Tile coordinate x.
 * @param {number} y Tile coordinate y.
 * @param {module:ol/proj/Projection} projection Projection.
 */
TileSource.prototype.useTile = _functions.UNDEFINED;

/**
 * @classdesc
 * Events emitted by {@link module:ol/source/Tile~TileSource} instances are instances of this
 * type.
 *
 * @constructor
 * @extends {module:ol/events/Event}
 * @param {string} type Type.
 * @param {module:ol/Tile} tile The tile.
 */
var TileSourceEvent = exports.TileSourceEvent = function TileSourceEvent(type, tile) {

  _Event2.default.call(this, type);

  /**
   * The tile related to the event.
   * @type {module:ol/Tile}
   * @api
   */
  this.tile = tile;
};
(0, _index.inherits)(TileSourceEvent, _Event2.default);

exports.default = TileSource;

/***/ }),

/***/ "./node_modules/ol/source/TileEventType.js":
/*!*************************************************!*\
  !*** ./node_modules/ol/source/TileEventType.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @module ol/source/TileEventType
 */

/**
 * @enum {string}
 */
exports.default = {

  /**
   * Triggered when a tile starts loading.
   * @event module:ol/source/Tile~TileSourceEvent#tileloadstart
   * @api
   */
  TILELOADSTART: 'tileloadstart',

  /**
   * Triggered when a tile finishes loading, either when its data is loaded,
   * or when loading was aborted because the tile is no longer needed.
   * @event module:ol/source/Tile~TileSourceEvent#tileloadend
   * @api
   */
  TILELOADEND: 'tileloadend',

  /**
   * Triggered if tile loading results in an error.
   * @event module:ol/source/Tile~TileSourceEvent#tileloaderror
   * @api
   */
  TILELOADERROR: 'tileloaderror'

};

/***/ }),

/***/ "./node_modules/ol/source/TileImage.js":
/*!*********************************************!*\
  !*** ./node_modules/ol/source/TileImage.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = __webpack_require__(/*! ../reproj/common.js */ "./node_modules/ol/reproj/common.js");

var _index = __webpack_require__(/*! ../index.js */ "./node_modules/ol/index.js");

var _ImageTile = __webpack_require__(/*! ../ImageTile.js */ "./node_modules/ol/ImageTile.js");

var _ImageTile2 = _interopRequireDefault(_ImageTile);

var _TileCache = __webpack_require__(/*! ../TileCache.js */ "./node_modules/ol/TileCache.js");

var _TileCache2 = _interopRequireDefault(_TileCache);

var _TileState = __webpack_require__(/*! ../TileState.js */ "./node_modules/ol/TileState.js");

var _TileState2 = _interopRequireDefault(_TileState);

var _events = __webpack_require__(/*! ../events.js */ "./node_modules/ol/events.js");

var _EventType = __webpack_require__(/*! ../events/EventType.js */ "./node_modules/ol/events/EventType.js");

var _EventType2 = _interopRequireDefault(_EventType);

var _proj = __webpack_require__(/*! ../proj.js */ "./node_modules/ol/proj.js");

var _Tile = __webpack_require__(/*! ../reproj/Tile.js */ "./node_modules/ol/reproj/Tile.js");

var _Tile2 = _interopRequireDefault(_Tile);

var _UrlTile = __webpack_require__(/*! ../source/UrlTile.js */ "./node_modules/ol/source/UrlTile.js");

var _UrlTile2 = _interopRequireDefault(_UrlTile);

var _tilecoord = __webpack_require__(/*! ../tilecoord.js */ "./node_modules/ol/tilecoord.js");

var _tilegrid = __webpack_require__(/*! ../tilegrid.js */ "./node_modules/ol/tilegrid.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @typedef {Object} Options
 * @property {module:ol/source/Source~AttributionLike} [attributions] Attributions.
 * @property {number} [cacheSize=2048] Cache size.
 * @property {null|string} [crossOrigin] The `crossOrigin` attribute for loaded images.  Note that
 * you must provide a `crossOrigin` value if you are using the WebGL renderer or if you want to
 * access pixel data with the Canvas renderer.  See
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image} for more detail.
 * @property {boolean} [opaque=true] Whether the layer is opaque.
 * @property {module:ol/proj~ProjectionLike} projection Projection.
 * @property {boolean} [reprojectionErrorThreshold=0.5] Maximum allowed reprojection error (in pixels).
 * Higher values can increase reprojection performance, but decrease precision.
 * @property {module:ol/source/State} [state] Source state.
 * @property {module:ol/ImageTile~TileClass} [tileClass] Class used to instantiate image tiles.
 * Default is {@link module:ol/ImageTile~ImageTile}.
 * @property {module:ol/tilegrid/TileGrid} [tileGrid] Tile grid.
 * @property {module:ol/Tile~LoadFunction} [tileLoadFunction] Optional function to load a tile given a URL. The default is
 * ```js
 * function(imageTile, src) {
 *   imageTile.getImage().src = src;
 * };
 * ```
 * @property {number} [tilePixelRatio=1] The pixel ratio used by the tile service. For example, if the tile
 * service advertizes 256px by 256px tiles but actually sends 512px
 * by 512px images (for retina/hidpi devices) then `tilePixelRatio`
 * should be set to `2`.
 * @property {module:ol/Tile~UrlFunction} [tileUrlFunction] Optional function to get tile URL given a tile coordinate and the projection.
 * @property {string} [url] URL template. Must include `{x}`, `{y}` or `{-y}`, and `{z}` placeholders.
 * A `{?-?}` template pattern, for example `subdomain{a-f}.domain.com`, may be
 * used instead of defining each one separately in the `urls` option.
 * @property {Array.<string>} [urls] An array of URL templates.
 * @property {boolean} [wrapX] Whether to wrap the world horizontally. The default, is to
 * request out-of-bounds tiles from the server. When set to `false`, only one
 * world will be rendered. When set to `true`, tiles will be requested for one
 * world only, but they will be wrapped horizontally to render multiple worlds.
 * @property {number} [transition] Duration of the opacity transition for rendering.
 * To disable the opacity transition, pass `transition: 0`.
 */

/**
 * @classdesc
 * Base class for sources providing images divided into a tile grid.
 *
 * @constructor
 * @fires module:ol/source/Tile~TileSourceEvent
 * @extends {module:ol/source/UrlTile}
 * @param {module:ol/source/TileImage~Options=} options Image tile options.
 * @api
 */
/**
 * @module ol/source/TileImage
 */
var TileImage = function TileImage(options) {

  _UrlTile2.default.call(this, {
    attributions: options.attributions,
    cacheSize: options.cacheSize,
    extent: options.extent,
    opaque: options.opaque,
    projection: options.projection,
    state: options.state,
    tileGrid: options.tileGrid,
    tileLoadFunction: options.tileLoadFunction ? options.tileLoadFunction : defaultTileLoadFunction,
    tilePixelRatio: options.tilePixelRatio,
    tileUrlFunction: options.tileUrlFunction,
    url: options.url,
    urls: options.urls,
    wrapX: options.wrapX,
    transition: options.transition
  });

  /**
   * @protected
   * @type {?string}
   */
  this.crossOrigin = options.crossOrigin !== undefined ? options.crossOrigin : null;

  /**
   * @protected
   * @type {function(new: module:ol/ImageTile, module:ol/tilecoord~TileCoord, module:ol/TileState, string,
   *        ?string, module:ol/Tile~LoadFunction, module:ol/Tile~Options=)}
   */
  this.tileClass = options.tileClass !== undefined ? options.tileClass : _ImageTile2.default;

  /**
   * @protected
   * @type {!Object.<string, module:ol/TileCache>}
   */
  this.tileCacheForProjection = {};

  /**
   * @protected
   * @type {!Object.<string, module:ol/tilegrid/TileGrid>}
   */
  this.tileGridForProjection = {};

  /**
   * @private
   * @type {number|undefined}
   */
  this.reprojectionErrorThreshold_ = options.reprojectionErrorThreshold;

  /**
   * @private
   * @type {boolean}
   */
  this.renderReprojectionEdges_ = false;
};

(0, _index.inherits)(TileImage, _UrlTile2.default);

/**
 * @inheritDoc
 */
TileImage.prototype.canExpireCache = function () {
  if (!_common.ENABLE_RASTER_REPROJECTION) {
    return _UrlTile2.default.prototype.canExpireCache.call(this);
  }
  if (this.tileCache.canExpireCache()) {
    return true;
  } else {
    for (var key in this.tileCacheForProjection) {
      if (this.tileCacheForProjection[key].canExpireCache()) {
        return true;
      }
    }
  }
  return false;
};

/**
 * @inheritDoc
 */
TileImage.prototype.expireCache = function (projection, usedTiles) {
  if (!_common.ENABLE_RASTER_REPROJECTION) {
    _UrlTile2.default.prototype.expireCache.call(this, projection, usedTiles);
    return;
  }
  var usedTileCache = this.getTileCacheForProjection(projection);

  this.tileCache.expireCache(this.tileCache == usedTileCache ? usedTiles : {});
  for (var id in this.tileCacheForProjection) {
    var tileCache = this.tileCacheForProjection[id];
    tileCache.expireCache(tileCache == usedTileCache ? usedTiles : {});
  }
};

/**
 * @inheritDoc
 */
TileImage.prototype.getGutter = function (projection) {
  if (_common.ENABLE_RASTER_REPROJECTION && this.getProjection() && projection && !(0, _proj.equivalent)(this.getProjection(), projection)) {
    return 0;
  } else {
    return this.getGutterInternal();
  }
};

/**
 * @protected
 * @return {number} Gutter.
 */
TileImage.prototype.getGutterInternal = function () {
  return 0;
};

/**
 * @inheritDoc
 */
TileImage.prototype.getOpaque = function (projection) {
  if (_common.ENABLE_RASTER_REPROJECTION && this.getProjection() && projection && !(0, _proj.equivalent)(this.getProjection(), projection)) {
    return false;
  } else {
    return _UrlTile2.default.prototype.getOpaque.call(this, projection);
  }
};

/**
 * @inheritDoc
 */
TileImage.prototype.getTileGridForProjection = function (projection) {
  if (!_common.ENABLE_RASTER_REPROJECTION) {
    return _UrlTile2.default.prototype.getTileGridForProjection.call(this, projection);
  }
  var thisProj = this.getProjection();
  if (this.tileGrid && (!thisProj || (0, _proj.equivalent)(thisProj, projection))) {
    return this.tileGrid;
  } else {
    var projKey = (0, _index.getUid)(projection).toString();
    if (!(projKey in this.tileGridForProjection)) {
      this.tileGridForProjection[projKey] = (0, _tilegrid.getForProjection)(projection);
    }
    return (
      /** @type {!module:ol/tilegrid/TileGrid} */this.tileGridForProjection[projKey]
    );
  }
};

/**
 * @inheritDoc
 */
TileImage.prototype.getTileCacheForProjection = function (projection) {
  if (!_common.ENABLE_RASTER_REPROJECTION) {
    return _UrlTile2.default.prototype.getTileCacheForProjection.call(this, projection);
  }
  var thisProj = this.getProjection();if (!thisProj || (0, _proj.equivalent)(thisProj, projection)) {
    return this.tileCache;
  } else {
    var projKey = (0, _index.getUid)(projection).toString();
    if (!(projKey in this.tileCacheForProjection)) {
      this.tileCacheForProjection[projKey] = new _TileCache2.default(this.tileCache.highWaterMark);
    }
    return this.tileCacheForProjection[projKey];
  }
};

/**
 * @param {number} z Tile coordinate z.
 * @param {number} x Tile coordinate x.
 * @param {number} y Tile coordinate y.
 * @param {number} pixelRatio Pixel ratio.
 * @param {module:ol/proj/Projection} projection Projection.
 * @param {string} key The key set on the tile.
 * @return {!module:ol/Tile} Tile.
 * @private
 */
TileImage.prototype.createTile_ = function (z, x, y, pixelRatio, projection, key) {
  var tileCoord = [z, x, y];
  var urlTileCoord = this.getTileCoordForTileUrlFunction(tileCoord, projection);
  var tileUrl = urlTileCoord ? this.tileUrlFunction(urlTileCoord, pixelRatio, projection) : undefined;
  var tile = new this.tileClass(tileCoord, tileUrl !== undefined ? _TileState2.default.IDLE : _TileState2.default.EMPTY, tileUrl !== undefined ? tileUrl : '', this.crossOrigin, this.tileLoadFunction, this.tileOptions);
  tile.key = key;
  (0, _events.listen)(tile, _EventType2.default.CHANGE, this.handleTileChange, this);
  return tile;
};

/**
 * @inheritDoc
 */
TileImage.prototype.getTile = function (z, x, y, pixelRatio, projection) {
  var sourceProjection = /** @type {!module:ol/proj/Projection} */this.getProjection();
  if (!_common.ENABLE_RASTER_REPROJECTION || !sourceProjection || !projection || (0, _proj.equivalent)(sourceProjection, projection)) {
    return this.getTileInternal(z, x, y, pixelRatio, sourceProjection || projection);
  } else {
    var cache = this.getTileCacheForProjection(projection);
    var tileCoord = [z, x, y];
    var tile = void 0;
    var tileCoordKey = (0, _tilecoord.getKey)(tileCoord);
    if (cache.containsKey(tileCoordKey)) {
      tile = /** @type {!module:ol/Tile} */cache.get(tileCoordKey);
    }
    var key = this.getKey();
    if (tile && tile.key == key) {
      return tile;
    } else {
      var sourceTileGrid = this.getTileGridForProjection(sourceProjection);
      var targetTileGrid = this.getTileGridForProjection(projection);
      var wrappedTileCoord = this.getTileCoordForTileUrlFunction(tileCoord, projection);
      var newTile = new _Tile2.default(sourceProjection, sourceTileGrid, projection, targetTileGrid, tileCoord, wrappedTileCoord, this.getTilePixelRatio(pixelRatio), this.getGutterInternal(), function (z, x, y, pixelRatio) {
        return this.getTileInternal(z, x, y, pixelRatio, sourceProjection);
      }.bind(this), this.reprojectionErrorThreshold_, this.renderReprojectionEdges_);
      newTile.key = key;

      if (tile) {
        newTile.interimTile = tile;
        newTile.refreshInterimChain();
        cache.replace(tileCoordKey, newTile);
      } else {
        cache.set(tileCoordKey, newTile);
      }
      return newTile;
    }
  }
};

/**
 * @param {number} z Tile coordinate z.
 * @param {number} x Tile coordinate x.
 * @param {number} y Tile coordinate y.
 * @param {number} pixelRatio Pixel ratio.
 * @param {!module:ol/proj/Projection} projection Projection.
 * @return {!module:ol/Tile} Tile.
 * @protected
 */
TileImage.prototype.getTileInternal = function (z, x, y, pixelRatio, projection) {
  var tile = null;
  var tileCoordKey = (0, _tilecoord.getKeyZXY)(z, x, y);
  var key = this.getKey();
  if (!this.tileCache.containsKey(tileCoordKey)) {
    tile = this.createTile_(z, x, y, pixelRatio, projection, key);
    this.tileCache.set(tileCoordKey, tile);
  } else {
    tile = this.tileCache.get(tileCoordKey);
    if (tile.key != key) {
      // The source's params changed. If the tile has an interim tile and if we
      // can use it then we use it. Otherwise we create a new tile.  In both
      // cases we attempt to assign an interim tile to the new tile.
      var interimTile = tile;
      tile = this.createTile_(z, x, y, pixelRatio, projection, key);

      //make the new tile the head of the list,
      if (interimTile.getState() == _TileState2.default.IDLE) {
        //the old tile hasn't begun loading yet, and is now outdated, so we can simply discard it
        tile.interimTile = interimTile.interimTile;
      } else {
        tile.interimTile = interimTile;
      }
      tile.refreshInterimChain();
      this.tileCache.replace(tileCoordKey, tile);
    }
  }
  return tile;
};

/**
 * Sets whether to render reprojection edges or not (usually for debugging).
 * @param {boolean} render Render the edges.
 * @api
 */
TileImage.prototype.setRenderReprojectionEdges = function (render) {
  if (!_common.ENABLE_RASTER_REPROJECTION || this.renderReprojectionEdges_ == render) {
    return;
  }
  this.renderReprojectionEdges_ = render;
  for (var id in this.tileCacheForProjection) {
    this.tileCacheForProjection[id].clear();
  }
  this.changed();
};

/**
 * Sets the tile grid to use when reprojecting the tiles to the given
 * projection instead of the default tile grid for the projection.
 *
 * This can be useful when the default tile grid cannot be created
 * (e.g. projection has no extent defined) or
 * for optimization reasons (custom tile size, resolutions, ...).
 *
 * @param {module:ol/proj~ProjectionLike} projection Projection.
 * @param {module:ol/tilegrid/TileGrid} tilegrid Tile grid to use for the projection.
 * @api
 */
TileImage.prototype.setTileGridForProjection = function (projection, tilegrid) {
  if (_common.ENABLE_RASTER_REPROJECTION) {
    var proj = (0, _proj.get)(projection);
    if (proj) {
      var projKey = (0, _index.getUid)(proj).toString();
      if (!(projKey in this.tileGridForProjection)) {
        this.tileGridForProjection[projKey] = tilegrid;
      }
    }
  }
};

/**
 * @param {module:ol/ImageTile} imageTile Image tile.
 * @param {string} src Source.
 */
function defaultTileLoadFunction(imageTile, src) {
  imageTile.getImage().src = src;
}

exports.default = TileImage;

/***/ }),

/***/ "./node_modules/ol/source/UrlTile.js":
/*!*******************************************!*\
  !*** ./node_modules/ol/source/UrlTile.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../index.js */ "./node_modules/ol/index.js");

var _TileState = __webpack_require__(/*! ../TileState.js */ "./node_modules/ol/TileState.js");

var _TileState2 = _interopRequireDefault(_TileState);

var _tileurlfunction = __webpack_require__(/*! ../tileurlfunction.js */ "./node_modules/ol/tileurlfunction.js");

var _Tile = __webpack_require__(/*! ../source/Tile.js */ "./node_modules/ol/source/Tile.js");

var _Tile2 = _interopRequireDefault(_Tile);

var _TileEventType = __webpack_require__(/*! ../source/TileEventType.js */ "./node_modules/ol/source/TileEventType.js");

var _TileEventType2 = _interopRequireDefault(_TileEventType);

var _tilecoord = __webpack_require__(/*! ../tilecoord.js */ "./node_modules/ol/tilecoord.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @typedef {Object} Options
 * @property {module:ol/source/Source~AttributionLike} [attributions]
 * @property {number} [cacheSize]
 * @property {module:ol/extent~Extent} [extent]
 * @property {boolean} [opaque]
 * @property {module:ol/proj~ProjectionLike} [projection]
 * @property {module:ol/source/State} [state]
 * @property {module:ol/tilegrid/TileGrid} [tileGrid]
 * @property {module:ol/Tile~LoadFunction} tileLoadFunction
 * @property {number} [tilePixelRatio]
 * @property {module:ol/Tile~UrlFunction} [tileUrlFunction]
 * @property {string} [url]
 * @property {Array.<string>} [urls]
 * @property {boolean} [wrapX=true]
 * @property {number} [transition]
 */

/**
 * @classdesc
 * Base class for sources providing tiles divided into a tile grid over http.
 *
 * @constructor
 * @abstract
 * @fires module:ol/source/TileEvent
 * @extends {module:ol/source/Tile}
 * @param {module:ol/source/UrlTile~Options=} options Image tile options.
 */
/**
 * @module ol/source/UrlTile
 */
var UrlTile = function UrlTile(options) {

  _Tile2.default.call(this, {
    attributions: options.attributions,
    cacheSize: options.cacheSize,
    extent: options.extent,
    opaque: options.opaque,
    projection: options.projection,
    state: options.state,
    tileGrid: options.tileGrid,
    tilePixelRatio: options.tilePixelRatio,
    wrapX: options.wrapX,
    transition: options.transition
  });

  /**
   * @protected
   * @type {module:ol/Tile~LoadFunction}
   */
  this.tileLoadFunction = options.tileLoadFunction;

  /**
   * @protected
   * @type {module:ol/Tile~UrlFunction}
   */
  this.tileUrlFunction = this.fixedTileUrlFunction ? this.fixedTileUrlFunction.bind(this) : _tileurlfunction.nullTileUrlFunction;

  /**
   * @protected
   * @type {!Array.<string>|null}
   */
  this.urls = null;

  if (options.urls) {
    this.setUrls(options.urls);
  } else if (options.url) {
    this.setUrl(options.url);
  }
  if (options.tileUrlFunction) {
    this.setTileUrlFunction(options.tileUrlFunction);
  }

  /**
   * @private
   * @type {!Object.<number, boolean>}
   */
  this.tileLoadingKeys_ = {};
};

(0, _index.inherits)(UrlTile, _Tile2.default);

/**
 * @type {module:ol/Tile~UrlFunction|undefined}
 * @protected
 */
UrlTile.prototype.fixedTileUrlFunction;

/**
 * Return the tile load function of the source.
 * @return {module:ol/Tile~LoadFunction} TileLoadFunction
 * @api
 */
UrlTile.prototype.getTileLoadFunction = function () {
  return this.tileLoadFunction;
};

/**
 * Return the tile URL function of the source.
 * @return {module:ol/Tile~UrlFunction} TileUrlFunction
 * @api
 */
UrlTile.prototype.getTileUrlFunction = function () {
  return this.tileUrlFunction;
};

/**
 * Return the URLs used for this source.
 * When a tileUrlFunction is used instead of url or urls,
 * null will be returned.
 * @return {!Array.<string>|null} URLs.
 * @api
 */
UrlTile.prototype.getUrls = function () {
  return this.urls;
};

/**
 * Handle tile change events.
 * @param {module:ol/events/Event} event Event.
 * @protected
 */
UrlTile.prototype.handleTileChange = function (event) {
  var tile = /** @type {module:ol/Tile} */event.target;
  var uid = (0, _index.getUid)(tile);
  var tileState = tile.getState();
  var type = void 0;
  if (tileState == _TileState2.default.LOADING) {
    this.tileLoadingKeys_[uid] = true;
    type = _TileEventType2.default.TILELOADSTART;
  } else if (uid in this.tileLoadingKeys_) {
    delete this.tileLoadingKeys_[uid];
    type = tileState == _TileState2.default.ERROR ? _TileEventType2.default.TILELOADERROR : tileState == _TileState2.default.LOADED || tileState == _TileState2.default.ABORT ? _TileEventType2.default.TILELOADEND : undefined;
  }
  if (type != undefined) {
    this.dispatchEvent(new _Tile.TileSourceEvent(type, tile));
  }
};

/**
 * Set the tile load function of the source.
 * @param {module:ol/Tile~LoadFunction} tileLoadFunction Tile load function.
 * @api
 */
UrlTile.prototype.setTileLoadFunction = function (tileLoadFunction) {
  this.tileCache.clear();
  this.tileLoadFunction = tileLoadFunction;
  this.changed();
};

/**
 * Set the tile URL function of the source.
 * @param {module:ol/Tile~UrlFunction} tileUrlFunction Tile URL function.
 * @param {string=} opt_key Optional new tile key for the source.
 * @api
 */
UrlTile.prototype.setTileUrlFunction = function (tileUrlFunction, opt_key) {
  this.tileUrlFunction = tileUrlFunction;
  this.tileCache.pruneExceptNewestZ();
  if (typeof opt_key !== 'undefined') {
    this.setKey(opt_key);
  } else {
    this.changed();
  }
};

/**
 * Set the URL to use for requests.
 * @param {string} url URL.
 * @api
 */
UrlTile.prototype.setUrl = function (url) {
  var urls = this.urls = (0, _tileurlfunction.expandUrl)(url);
  this.setTileUrlFunction(this.fixedTileUrlFunction ? this.fixedTileUrlFunction.bind(this) : (0, _tileurlfunction.createFromTemplates)(urls, this.tileGrid), url);
};

/**
 * Set the URLs to use for requests.
 * @param {Array.<string>} urls URLs.
 * @api
 */
UrlTile.prototype.setUrls = function (urls) {
  this.urls = urls;
  var key = urls.join('\n');
  this.setTileUrlFunction(this.fixedTileUrlFunction ? this.fixedTileUrlFunction.bind(this) : (0, _tileurlfunction.createFromTemplates)(urls, this.tileGrid), key);
};

/**
 * @inheritDoc
 */
UrlTile.prototype.useTile = function (z, x, y) {
  var tileCoordKey = (0, _tilecoord.getKeyZXY)(z, x, y);
  if (this.tileCache.containsKey(tileCoordKey)) {
    this.tileCache.get(tileCoordKey);
  }
};
exports.default = UrlTile;

/***/ }),

/***/ "./node_modules/ol/source/XYZ.js":
/*!***************************************!*\
  !*** ./node_modules/ol/source/XYZ.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../index.js */ "./node_modules/ol/index.js");

var _TileImage = __webpack_require__(/*! ../source/TileImage.js */ "./node_modules/ol/source/TileImage.js");

var _TileImage2 = _interopRequireDefault(_TileImage);

var _tilegrid = __webpack_require__(/*! ../tilegrid.js */ "./node_modules/ol/tilegrid.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @typedef {Object} Options
 * @property {module:ol/source/Source~AttributionLike} [attributions] Attributions.
 * @property {number} [cacheSize=2048] Cache size.
 * @property {null|string} [crossOrigin] The `crossOrigin` attribute for loaded images.  Note that
 * you must provide a `crossOrigin` value if you are using the WebGL renderer or if you want to
 * access pixel data with the Canvas renderer.  See
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image} for more detail.
 * @property {boolean} [opaque=true] Whether the layer is opaque.
 * @property {module:ol/proj~ProjectionLike} [projection='EPSG:3857'] Projection.
 * @property {boolean} [reprojectionErrorThreshold=0.5] Maximum allowed reprojection error (in pixels).
 * Higher values can increase reprojection performance, but decrease precision.
 * @property {number} [maxZoom=18] Optional max zoom level.
 * @property {number} [minZoom=0] Optional min zoom level.
 * @property {module:ol/tilegrid/TileGrid} [tileGrid] Tile grid.
 * @property {module:ol/Tile~LoadFunction} [tileLoadFunction] Optional function to load a tile given a URL. The default is
 * ```js
 * function(imageTile, src) {
 *   imageTile.getImage().src = src;
 * };
 * ```
 * @property {number} [tilePixelRatio=1] The pixel ratio used by the tile service.
 * For example, if the tile service advertizes 256px by 256px tiles but actually sends 512px
 * by 512px images (for retina/hidpi devices) then `tilePixelRatio`
 * should be set to `2`.
 * @property {number|module:ol/size~Size} [tileSize=[256, 256]] The tile size used by the tile service.
 * @property {module:ol/Tile~UrlFunction} [tileUrlFunction] Optional function to get
 * tile URL given a tile coordinate and the projection.
 * Required if url or urls are not provided.
 * @property {string} [url] URL template. Must include `{x}`, `{y}` or `{-y}`,
 * and `{z}` placeholders. A `{?-?}` template pattern, for example `subdomain{a-f}.domain.com`,
 * may be used instead of defining each one separately in the `urls` option.
 * @property {Array.<string>} [urls] An array of URL templates.
 * @property {boolean} [wrapX=true] Whether to wrap the world horizontally.
 * @property {number} [transition] Duration of the opacity transition for rendering.
 * To disable the opacity transition, pass `transition: 0`.
 */

/**
 * @classdesc
 * Layer source for tile data with URLs in a set XYZ format that are
 * defined in a URL template. By default, this follows the widely-used
 * Google grid where `x` 0 and `y` 0 are in the top left. Grids like
 * TMS where `x` 0 and `y` 0 are in the bottom left can be used by
 * using the `{-y}` placeholder in the URL template, so long as the
 * source does not have a custom tile grid. In this case,
 * {@link module:ol/source/TileImage} can be used with a `tileUrlFunction`
 * such as:
 *
 *  tileUrlFunction: function(coordinate) {
 *    return 'http://mapserver.com/' + coordinate[0] + '/' +
 *        coordinate[1] + '/' + coordinate[2] + '.png';
 *    }
 *
 *
 * @constructor
 * @extends {module:ol/source/TileImage}
 * @param {module:ol/source/XYZ~Options=} opt_options XYZ options.
 * @api
 */
var XYZ = function XYZ(opt_options) {
  var options = opt_options || {};
  var projection = options.projection !== undefined ? options.projection : 'EPSG:3857';

  var tileGrid = options.tileGrid !== undefined ? options.tileGrid : (0, _tilegrid.createXYZ)({
    extent: (0, _tilegrid.extentFromProjection)(projection),
    maxZoom: options.maxZoom,
    minZoom: options.minZoom,
    tileSize: options.tileSize
  });

  _TileImage2.default.call(this, {
    attributions: options.attributions,
    cacheSize: options.cacheSize,
    crossOrigin: options.crossOrigin,
    opaque: options.opaque,
    projection: projection,
    reprojectionErrorThreshold: options.reprojectionErrorThreshold,
    tileGrid: tileGrid,
    tileLoadFunction: options.tileLoadFunction,
    tilePixelRatio: options.tilePixelRatio,
    tileUrlFunction: options.tileUrlFunction,
    url: options.url,
    urls: options.urls,
    wrapX: options.wrapX !== undefined ? options.wrapX : true,
    transition: options.transition
  });
}; /**
    * @module ol/source/XYZ
    */


(0, _index.inherits)(XYZ, _TileImage2.default);
exports.default = XYZ;

/***/ }),

/***/ "./node_modules/ol/sphere.js":
/*!***********************************!*\
  !*** ./node_modules/ol/sphere.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_RADIUS = undefined;
exports.getDistance = getDistance;
exports.getLength = getLength;
exports.getArea = getArea;
exports.offset = offset;

var _math = __webpack_require__(/*! ./math.js */ "./node_modules/ol/math.js");

var _GeometryType = __webpack_require__(/*! ./geom/GeometryType.js */ "./node_modules/ol/geom/GeometryType.js");

var _GeometryType2 = _interopRequireDefault(_GeometryType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Object literal with options for the {@link getLength} or {@link getArea}
 * functions.
 * @typedef {Object} SphereMetricOptions
 * @property {module:ol/proj~ProjectionLike} [projection='EPSG:3857']
 * Projection of the  geometry.  By default, the geometry is assumed to be in
 * Web Mercator.
 * @property {number} [radius=6371008.8] Sphere radius.  By default, the radius of the
 * earth is used (Clarke 1866 Authalic Sphere).
 */

/**
 * The mean Earth radius (1/3 * (2a + b)) for the WGS84 ellipsoid.
 * https://en.wikipedia.org/wiki/Earth_radius#Mean_radius
 * @type {number}
 */
/**
 * @license
 * Latitude/longitude spherical geodesy formulae taken from
 * http://www.movable-type.co.uk/scripts/latlong.html
 * Licensed under CC-BY-3.0.
 */

/**
 * @module ol/sphere
 */
var DEFAULT_RADIUS = exports.DEFAULT_RADIUS = 6371008.8;

/**
 * Get the great circle distance (in meters) between two geographic coordinates.
 * @param {Array} c1 Starting coordinate.
 * @param {Array} c2 Ending coordinate.
 * @param {number=} opt_radius The sphere radius to use.  Defaults to the Earth's
 *     mean radius using the WGS84 ellipsoid.
 * @return {number} The great circle distance between the points (in meters).
 * @api
 */
function getDistance(c1, c2, opt_radius) {
  var radius = opt_radius || DEFAULT_RADIUS;
  var lat1 = (0, _math.toRadians)(c1[1]);
  var lat2 = (0, _math.toRadians)(c2[1]);
  var deltaLatBy2 = (lat2 - lat1) / 2;
  var deltaLonBy2 = (0, _math.toRadians)(c2[0] - c1[0]) / 2;
  var a = Math.sin(deltaLatBy2) * Math.sin(deltaLatBy2) + Math.sin(deltaLonBy2) * Math.sin(deltaLonBy2) * Math.cos(lat1) * Math.cos(lat2);
  return 2 * radius * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

/**
 * Get the cumulative great circle length of linestring coordinates (geographic).
 * @param {Array} coordinates Linestring coordinates.
 * @param {number} radius The sphere radius to use.
 * @return {number} The length (in meters).
 */
function getLengthInternal(coordinates, radius) {
  var length = 0;
  for (var i = 0, ii = coordinates.length; i < ii - 1; ++i) {
    length += getDistance(coordinates[i], coordinates[i + 1], radius);
  }
  return length;
}

/**
 * Get the spherical length of a geometry.  This length is the sum of the
 * great circle distances between coordinates.  For polygons, the length is
 * the sum of all rings.  For points, the length is zero.  For multi-part
 * geometries, the length is the sum of the length of each part.
 * @param {module:ol/geom/Geometry} geometry A geometry.
 * @param {module:ol/sphere~SphereMetricOptions=} opt_options Options for the
 * length calculation.  By default, geometries are assumed to be in 'EPSG:3857'.
 * You can change this by providing a `projection` option.
 * @return {number} The spherical length (in meters).
 * @api
 */
function getLength(geometry, opt_options) {
  var options = opt_options || {};
  var radius = options.radius || DEFAULT_RADIUS;
  var projection = options.projection || 'EPSG:3857';
  var type = geometry.getType();
  if (type !== _GeometryType2.default.GEOMETRY_COLLECTION) {
    geometry = geometry.clone().transform(projection, 'EPSG:4326');
  }
  var length = 0;
  var coordinates = void 0,
      coords = void 0,
      i = void 0,
      ii = void 0,
      j = void 0,
      jj = void 0;
  switch (type) {
    case _GeometryType2.default.POINT:
    case _GeometryType2.default.MULTI_POINT:
      {
        break;
      }
    case _GeometryType2.default.LINE_STRING:
    case _GeometryType2.default.LINEAR_RING:
      {
        coordinates = /** @type {module:ol/geom/SimpleGeometry} */geometry.getCoordinates();
        length = getLengthInternal(coordinates, radius);
        break;
      }
    case _GeometryType2.default.MULTI_LINE_STRING:
    case _GeometryType2.default.POLYGON:
      {
        coordinates = /** @type {module:ol/geom/SimpleGeometry} */geometry.getCoordinates();
        for (i = 0, ii = coordinates.length; i < ii; ++i) {
          length += getLengthInternal(coordinates[i], radius);
        }
        break;
      }
    case _GeometryType2.default.MULTI_POLYGON:
      {
        coordinates = /** @type {module:ol/geom/SimpleGeometry} */geometry.getCoordinates();
        for (i = 0, ii = coordinates.length; i < ii; ++i) {
          coords = coordinates[i];
          for (j = 0, jj = coords.length; j < jj; ++j) {
            length += getLengthInternal(coords[j], radius);
          }
        }
        break;
      }
    case _GeometryType2.default.GEOMETRY_COLLECTION:
      {
        var geometries = /** @type {module:ol/geom/GeometryCollection} */geometry.getGeometries();
        for (i = 0, ii = geometries.length; i < ii; ++i) {
          length += getLength(geometries[i], opt_options);
        }
        break;
      }
    default:
      {
        throw new Error('Unsupported geometry type: ' + type);
      }
  }
  return length;
}

/**
 * Returns the spherical area for a list of coordinates.
 *
 * [Reference](https://trs-new.jpl.nasa.gov/handle/2014/40409)
 * Robert. G. Chamberlain and William H. Duquette, "Some Algorithms for
 * Polygons on a Sphere", JPL Publication 07-03, Jet Propulsion
 * Laboratory, Pasadena, CA, June 2007
 *
 * @param {Array.<module:ol/coordinate~Coordinate>} coordinates List of coordinates of a linear
 * ring. If the ring is oriented clockwise, the area will be positive,
 * otherwise it will be negative.
 * @param {number} radius The sphere radius.
 * @return {number} Area (in square meters).
 */
function getAreaInternal(coordinates, radius) {
  var area = 0;
  var len = coordinates.length;
  var x1 = coordinates[len - 1][0];
  var y1 = coordinates[len - 1][1];
  for (var i = 0; i < len; i++) {
    var x2 = coordinates[i][0];
    var y2 = coordinates[i][1];
    area += (0, _math.toRadians)(x2 - x1) * (2 + Math.sin((0, _math.toRadians)(y1)) + Math.sin((0, _math.toRadians)(y2)));
    x1 = x2;
    y1 = y2;
  }
  return area * radius * radius / 2.0;
}

/**
 * Get the spherical area of a geometry.  This is the area (in meters) assuming
 * that polygon edges are segments of great circles on a sphere.
 * @param {module:ol/geom/Geometry} geometry A geometry.
 * @param {module:ol/sphere~SphereMetricOptions=} opt_options Options for the area
 *     calculation.  By default, geometries are assumed to be in 'EPSG:3857'.
 *     You can change this by providing a `projection` option.
 * @return {number} The spherical area (in square meters).
 * @api
 */
function getArea(geometry, opt_options) {
  var options = opt_options || {};
  var radius = options.radius || DEFAULT_RADIUS;
  var projection = options.projection || 'EPSG:3857';
  var type = geometry.getType();
  if (type !== _GeometryType2.default.GEOMETRY_COLLECTION) {
    geometry = geometry.clone().transform(projection, 'EPSG:4326');
  }
  var area = 0;
  var coordinates = void 0,
      coords = void 0,
      i = void 0,
      ii = void 0,
      j = void 0,
      jj = void 0;
  switch (type) {
    case _GeometryType2.default.POINT:
    case _GeometryType2.default.MULTI_POINT:
    case _GeometryType2.default.LINE_STRING:
    case _GeometryType2.default.MULTI_LINE_STRING:
    case _GeometryType2.default.LINEAR_RING:
      {
        break;
      }
    case _GeometryType2.default.POLYGON:
      {
        coordinates = /** @type {module:ol/geom/Polygon} */geometry.getCoordinates();
        area = Math.abs(getAreaInternal(coordinates[0], radius));
        for (i = 1, ii = coordinates.length; i < ii; ++i) {
          area -= Math.abs(getAreaInternal(coordinates[i], radius));
        }
        break;
      }
    case _GeometryType2.default.MULTI_POLYGON:
      {
        coordinates = /** @type {module:ol/geom/SimpleGeometry} */geometry.getCoordinates();
        for (i = 0, ii = coordinates.length; i < ii; ++i) {
          coords = coordinates[i];
          area += Math.abs(getAreaInternal(coords[0], radius));
          for (j = 1, jj = coords.length; j < jj; ++j) {
            area -= Math.abs(getAreaInternal(coords[j], radius));
          }
        }
        break;
      }
    case _GeometryType2.default.GEOMETRY_COLLECTION:
      {
        var geometries = /** @type {module:ol/geom/GeometryCollection} */geometry.getGeometries();
        for (i = 0, ii = geometries.length; i < ii; ++i) {
          area += getArea(geometries[i], opt_options);
        }
        break;
      }
    default:
      {
        throw new Error('Unsupported geometry type: ' + type);
      }
  }
  return area;
}

/**
 * Returns the coordinate at the given distance and bearing from `c1`.
 *
 * @param {module:ol/coordinate~Coordinate} c1 The origin point (`[lon, lat]` in degrees).
 * @param {number} distance The great-circle distance between the origin
 *     point and the target point.
 * @param {number} bearing The bearing (in radians).
 * @param {number=} opt_radius The sphere radius to use.  Defaults to the Earth's
 *     mean radius using the WGS84 ellipsoid.
 * @return {module:ol/coordinate~Coordinate} The target point.
 */
function offset(c1, distance, bearing, opt_radius) {
  var radius = opt_radius || DEFAULT_RADIUS;
  var lat1 = (0, _math.toRadians)(c1[1]);
  var lon1 = (0, _math.toRadians)(c1[0]);
  var dByR = distance / radius;
  var lat = Math.asin(Math.sin(lat1) * Math.cos(dByR) + Math.cos(lat1) * Math.sin(dByR) * Math.cos(bearing));
  var lon = lon1 + Math.atan2(Math.sin(bearing) * Math.sin(dByR) * Math.cos(lat1), Math.cos(dByR) - Math.sin(lat1) * Math.sin(lat));
  return [(0, _math.toDegrees)(lon), (0, _math.toDegrees)(lat)];
}

/***/ }),

/***/ "./node_modules/ol/structs/LRUCache.js":
/*!*********************************************!*\
  !*** ./node_modules/ol/structs/LRUCache.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../index.js */ "./node_modules/ol/index.js");

var _asserts = __webpack_require__(/*! ../asserts.js */ "./node_modules/ol/asserts.js");

var _EventTarget = __webpack_require__(/*! ../events/EventTarget.js */ "./node_modules/ol/events/EventTarget.js");

var _EventTarget2 = _interopRequireDefault(_EventTarget);

var _EventType = __webpack_require__(/*! ../events/EventType.js */ "./node_modules/ol/events/EventType.js");

var _EventType2 = _interopRequireDefault(_EventType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @typedef {Object} Entry
 * @property {string} key_
 * @property {Object} newer
 * @property {Object} older
 * @property {*} value_
 */

/**
 * Implements a Least-Recently-Used cache where the keys do not conflict with
 * Object's properties (e.g. 'hasOwnProperty' is not allowed as a key). Expiring
 * items from the cache is the responsibility of the user.
 * @constructor
 * @extends {module:ol/events/EventTarget}
 * @fires module:ol/events/Event~Event
 * @struct
 * @template T
 * @param {number=} opt_highWaterMark High water mark.
 */
/**
 * @module ol/structs/LRUCache
 */
var LRUCache = function LRUCache(opt_highWaterMark) {

  _EventTarget2.default.call(this);

  /**
   * @type {number}
   */
  this.highWaterMark = opt_highWaterMark !== undefined ? opt_highWaterMark : 2048;

  /**
   * @private
   * @type {number}
   */
  this.count_ = 0;

  /**
   * @private
   * @type {!Object.<string, module:ol/structs/LRUCache~Entry>}
   */
  this.entries_ = {};

  /**
   * @private
   * @type {?module:ol/structs/LRUCache~Entry}
   */
  this.oldest_ = null;

  /**
   * @private
   * @type {?module:ol/structs/LRUCache~Entry}
   */
  this.newest_ = null;
};

(0, _index.inherits)(LRUCache, _EventTarget2.default);

/**
 * @return {boolean} Can expire cache.
 */
LRUCache.prototype.canExpireCache = function () {
  return this.getCount() > this.highWaterMark;
};

/**
 * FIXME empty description for jsdoc
 */
LRUCache.prototype.clear = function () {
  this.count_ = 0;
  this.entries_ = {};
  this.oldest_ = null;
  this.newest_ = null;
  this.dispatchEvent(_EventType2.default.CLEAR);
};

/**
 * @param {string} key Key.
 * @return {boolean} Contains key.
 */
LRUCache.prototype.containsKey = function (key) {
  return this.entries_.hasOwnProperty(key);
};

/**
 * @param {function(this: S, T, string, module:ol/structs/LRUCache): ?} f The function
 *     to call for every entry from the oldest to the newer. This function takes
 *     3 arguments (the entry value, the entry key and the LRUCache object).
 *     The return value is ignored.
 * @param {S=} opt_this The object to use as `this` in `f`.
 * @template S
 */
LRUCache.prototype.forEach = function (f, opt_this) {
  var entry = this.oldest_;
  while (entry) {
    f.call(opt_this, entry.value_, entry.key_, this);
    entry = entry.newer;
  }
};

/**
 * @param {string} key Key.
 * @return {T} Value.
 */
LRUCache.prototype.get = function (key) {
  var entry = this.entries_[key];
  (0, _asserts.assert)(entry !== undefined, 15); // Tried to get a value for a key that does not exist in the cache
  if (entry === this.newest_) {
    return entry.value_;
  } else if (entry === this.oldest_) {
    this.oldest_ = /** @type {module:ol/structs/LRUCache~Entry} */this.oldest_.newer;
    this.oldest_.older = null;
  } else {
    entry.newer.older = entry.older;
    entry.older.newer = entry.newer;
  }
  entry.newer = null;
  entry.older = this.newest_;
  this.newest_.newer = entry;
  this.newest_ = entry;
  return entry.value_;
};

/**
 * Remove an entry from the cache.
 * @param {string} key The entry key.
 * @return {T} The removed entry.
 */
LRUCache.prototype.remove = function (key) {
  var entry = this.entries_[key];
  (0, _asserts.assert)(entry !== undefined, 15); // Tried to get a value for a key that does not exist in the cache
  if (entry === this.newest_) {
    this.newest_ = /** @type {module:ol/structs/LRUCache~Entry} */entry.older;
    if (this.newest_) {
      this.newest_.newer = null;
    }
  } else if (entry === this.oldest_) {
    this.oldest_ = /** @type {module:ol/structs/LRUCache~Entry} */entry.newer;
    if (this.oldest_) {
      this.oldest_.older = null;
    }
  } else {
    entry.newer.older = entry.older;
    entry.older.newer = entry.newer;
  }
  delete this.entries_[key];
  --this.count_;
  return entry.value_;
};

/**
 * @return {number} Count.
 */
LRUCache.prototype.getCount = function () {
  return this.count_;
};

/**
 * @return {Array.<string>} Keys.
 */
LRUCache.prototype.getKeys = function () {
  var keys = new Array(this.count_);
  var i = 0;
  var entry = void 0;
  for (entry = this.newest_; entry; entry = entry.older) {
    keys[i++] = entry.key_;
  }
  return keys;
};

/**
 * @return {Array.<T>} Values.
 */
LRUCache.prototype.getValues = function () {
  var values = new Array(this.count_);
  var i = 0;
  var entry = void 0;
  for (entry = this.newest_; entry; entry = entry.older) {
    values[i++] = entry.value_;
  }
  return values;
};

/**
 * @return {T} Last value.
 */
LRUCache.prototype.peekLast = function () {
  return this.oldest_.value_;
};

/**
 * @return {string} Last key.
 */
LRUCache.prototype.peekLastKey = function () {
  return this.oldest_.key_;
};

/**
 * Get the key of the newest item in the cache.  Throws if the cache is empty.
 * @return {string} The newest key.
 */
LRUCache.prototype.peekFirstKey = function () {
  return this.newest_.key_;
};

/**
 * @return {T} value Value.
 */
LRUCache.prototype.pop = function () {
  var entry = this.oldest_;
  delete this.entries_[entry.key_];
  if (entry.newer) {
    entry.newer.older = null;
  }
  this.oldest_ = /** @type {module:ol/structs/LRUCache~Entry} */entry.newer;
  if (!this.oldest_) {
    this.newest_ = null;
  }
  --this.count_;
  return entry.value_;
};

/**
 * @param {string} key Key.
 * @param {T} value Value.
 */
LRUCache.prototype.replace = function (key, value) {
  this.get(key); // update `newest_`
  this.entries_[key].value_ = value;
};

/**
 * @param {string} key Key.
 * @param {T} value Value.
 */
LRUCache.prototype.set = function (key, value) {
  (0, _asserts.assert)(!(key in this.entries_), 16); // Tried to set a value for a key that is used already
  var entry = /** @type {module:ol/structs/LRUCache~Entry} */{
    key_: key,
    newer: null,
    older: this.newest_,
    value_: value
  };
  if (!this.newest_) {
    this.oldest_ = entry;
  } else {
    this.newest_.newer = entry;
  }
  this.newest_ = entry;
  this.entries_[key] = entry;
  ++this.count_;
};

/**
 * Set a maximum number of entries for the cache.
 * @param {number} size Cache size.
 * @api
 */
LRUCache.prototype.setSize = function (size) {
  this.highWaterMark = size;
};

/**
 * Prune the cache.
 */
LRUCache.prototype.prune = function () {
  while (this.canExpireCache()) {
    this.pop();
  }
};
exports.default = LRUCache;

/***/ }),

/***/ "./node_modules/ol/tilecoord.js":
/*!**************************************!*\
  !*** ./node_modules/ol/tilecoord.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOrUpdate = createOrUpdate;
exports.getKeyZXY = getKeyZXY;
exports.getKey = getKey;
exports.fromKey = fromKey;
exports.hash = hash;
exports.quadKey = quadKey;
exports.withinExtentAndZ = withinExtentAndZ;
/**
 * @module ol/tilecoord
 */

/**
 * An array of three numbers representing the location of a tile in a tile
 * grid. The order is `z`, `x`, and `y`. `z` is the zoom level.
 * @typedef {Array.<number>} TileCoord
 * @api
 */

/**
 * @param {number} z Z.
 * @param {number} x X.
 * @param {number} y Y.
 * @param {module:ol/tilecoord~TileCoord=} opt_tileCoord Tile coordinate.
 * @return {module:ol/tilecoord~TileCoord} Tile coordinate.
 */
function createOrUpdate(z, x, y, opt_tileCoord) {
  if (opt_tileCoord !== undefined) {
    opt_tileCoord[0] = z;
    opt_tileCoord[1] = x;
    opt_tileCoord[2] = y;
    return opt_tileCoord;
  } else {
    return [z, x, y];
  }
}

/**
 * @param {number} z Z.
 * @param {number} x X.
 * @param {number} y Y.
 * @return {string} Key.
 */
function getKeyZXY(z, x, y) {
  return z + '/' + x + '/' + y;
}

/**
 * Get the key for a tile coord.
 * @param {module:ol/tilecoord~TileCoord} tileCoord The tile coord.
 * @return {string} Key.
 */
function getKey(tileCoord) {
  return getKeyZXY(tileCoord[0], tileCoord[1], tileCoord[2]);
}

/**
 * Get a tile coord given a key.
 * @param {string} key The tile coord key.
 * @return {module:ol/tilecoord~TileCoord} The tile coord.
 */
function fromKey(key) {
  return key.split('/').map(Number);
}

/**
 * @param {module:ol/tilecoord~TileCoord} tileCoord Tile coord.
 * @return {number} Hash.
 */
function hash(tileCoord) {
  return (tileCoord[1] << tileCoord[0]) + tileCoord[2];
}

/**
 * @param {module:ol/tilecoord~TileCoord} tileCoord Tile coord.
 * @return {string} Quad key.
 */
function quadKey(tileCoord) {
  var z = tileCoord[0];
  var digits = new Array(z);
  var mask = 1 << z - 1;
  var i = void 0,
      charCode = void 0;
  for (i = 0; i < z; ++i) {
    // 48 is charCode for 0 - '0'.charCodeAt(0)
    charCode = 48;
    if (tileCoord[1] & mask) {
      charCode += 1;
    }
    if (tileCoord[2] & mask) {
      charCode += 2;
    }
    digits[i] = String.fromCharCode(charCode);
    mask >>= 1;
  }
  return digits.join('');
}

/**
 * @param {module:ol/tilecoord~TileCoord} tileCoord Tile coordinate.
 * @param {!module:ol/tilegrid/TileGrid} tileGrid Tile grid.
 * @return {boolean} Tile coordinate is within extent and zoom level range.
 */
function withinExtentAndZ(tileCoord, tileGrid) {
  var z = tileCoord[0];
  var x = tileCoord[1];
  var y = tileCoord[2];

  if (tileGrid.getMinZoom() > z || z > tileGrid.getMaxZoom()) {
    return false;
  }
  var extent = tileGrid.getExtent();
  var tileRange = void 0;
  if (!extent) {
    tileRange = tileGrid.getFullTileRange(z);
  } else {
    tileRange = tileGrid.getTileRangeForExtentAndZ(extent, z);
  }
  if (!tileRange) {
    return true;
  } else {
    return tileRange.containsXY(x, y);
  }
}

/***/ }),

/***/ "./node_modules/ol/tilegrid.js":
/*!*************************************!*\
  !*** ./node_modules/ol/tilegrid.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getForProjection = getForProjection;
exports.wrapX = wrapX;
exports.createForExtent = createForExtent;
exports.createXYZ = createXYZ;
exports.createForProjection = createForProjection;
exports.extentFromProjection = extentFromProjection;

var _common = __webpack_require__(/*! ./tilegrid/common.js */ "./node_modules/ol/tilegrid/common.js");

var _size = __webpack_require__(/*! ./size.js */ "./node_modules/ol/size.js");

var _extent = __webpack_require__(/*! ./extent.js */ "./node_modules/ol/extent.js");

var _Corner = __webpack_require__(/*! ./extent/Corner.js */ "./node_modules/ol/extent/Corner.js");

var _Corner2 = _interopRequireDefault(_Corner);

var _obj = __webpack_require__(/*! ./obj.js */ "./node_modules/ol/obj.js");

var _proj = __webpack_require__(/*! ./proj.js */ "./node_modules/ol/proj.js");

var _Units = __webpack_require__(/*! ./proj/Units.js */ "./node_modules/ol/proj/Units.js");

var _Units2 = _interopRequireDefault(_Units);

var _TileGrid = __webpack_require__(/*! ./tilegrid/TileGrid.js */ "./node_modules/ol/tilegrid/TileGrid.js");

var _TileGrid2 = _interopRequireDefault(_TileGrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {module:ol/proj/Projection} projection Projection.
 * @return {!module:ol/tilegrid/TileGrid} Default tile grid for the
 * passed projection.
 */
/**
 * @module ol/tilegrid
 */
function getForProjection(projection) {
  var tileGrid = projection.getDefaultTileGrid();
  if (!tileGrid) {
    tileGrid = createForProjection(projection);
    projection.setDefaultTileGrid(tileGrid);
  }
  return tileGrid;
}

/**
 * @param {module:ol/tilegrid/TileGrid} tileGrid Tile grid.
 * @param {module:ol/tilecoord~TileCoord} tileCoord Tile coordinate.
 * @param {module:ol/proj/Projection} projection Projection.
 * @return {module:ol/tilecoord~TileCoord} Tile coordinate.
 */
function wrapX(tileGrid, tileCoord, projection) {
  var z = tileCoord[0];
  var center = tileGrid.getTileCoordCenter(tileCoord);
  var projectionExtent = extentFromProjection(projection);
  if (!(0, _extent.containsCoordinate)(projectionExtent, center)) {
    var worldWidth = (0, _extent.getWidth)(projectionExtent);
    var worldsAway = Math.ceil((projectionExtent[0] - center[0]) / worldWidth);
    center[0] += worldWidth * worldsAway;
    return tileGrid.getTileCoordForCoordAndZ(center, z);
  } else {
    return tileCoord;
  }
}

/**
 * @param {module:ol/extent~Extent} extent Extent.
 * @param {number=} opt_maxZoom Maximum zoom level (default is
 *     DEFAULT_MAX_ZOOM).
 * @param {number|module:ol/size~Size=} opt_tileSize Tile size (default uses
 *     DEFAULT_TILE_SIZE).
 * @param {module:ol/extent/Corner=} opt_corner Extent corner (default is `'top-left'`).
 * @return {!module:ol/tilegrid/TileGrid} TileGrid instance.
 */
function createForExtent(extent, opt_maxZoom, opt_tileSize, opt_corner) {
  var corner = opt_corner !== undefined ? opt_corner : _Corner2.default.TOP_LEFT;

  var resolutions = resolutionsFromExtent(extent, opt_maxZoom, opt_tileSize);

  return new _TileGrid2.default({
    extent: extent,
    origin: (0, _extent.getCorner)(extent, corner),
    resolutions: resolutions,
    tileSize: opt_tileSize
  });
}

/**
 * @typedef {Object} XYZOptions
 * @property {module:ol/extent~Extent} [extent] Extent for the tile grid. The origin for an XYZ tile grid is the
 * top-left corner of the extent. The zero level of the grid is defined by the resolution at which one tile fits in the
 * provided extent. If not provided, the extent of the EPSG:3857 projection is used.
 * @property {number} [maxZoom] Maximum zoom. The default is `42`. This determines the number of levels
 * in the grid set. For example, a `maxZoom` of 21 means there are 22 levels in the grid set.
 * @property {number} [minZoom=0] Minimum zoom.
 * @property {number|module:ol/size~Size} [tileSize=[256, 256]] Tile size in pixels.
 */

/**
 * Creates a tile grid with a standard XYZ tiling scheme.
 * @param {module:ol/tilegrid~XYZOptions=} opt_options Tile grid options.
 * @return {!module:ol/tilegrid/TileGrid} Tile grid instance.
 * @api
 */
function createXYZ(opt_options) {
  var options = /** @type {module:ol/tilegrid/TileGrid~Options} */{};
  (0, _obj.assign)(options, opt_options !== undefined ? opt_options : /** @type {module:ol/tilegrid~XYZOptions} */{});
  if (options.extent === undefined) {
    options.extent = (0, _proj.get)('EPSG:3857').getExtent();
  }
  options.resolutions = resolutionsFromExtent(options.extent, options.maxZoom, options.tileSize);
  delete options.maxZoom;

  return new _TileGrid2.default(options);
}

/**
 * Create a resolutions array from an extent.  A zoom factor of 2 is assumed.
 * @param {module:ol/extent~Extent} extent Extent.
 * @param {number=} opt_maxZoom Maximum zoom level (default is
 *     DEFAULT_MAX_ZOOM).
 * @param {number|module:ol/size~Size=} opt_tileSize Tile size (default uses
 *     DEFAULT_TILE_SIZE).
 * @return {!Array.<number>} Resolutions array.
 */
function resolutionsFromExtent(extent, opt_maxZoom, opt_tileSize) {
  var maxZoom = opt_maxZoom !== undefined ? opt_maxZoom : _common.DEFAULT_MAX_ZOOM;

  var height = (0, _extent.getHeight)(extent);
  var width = (0, _extent.getWidth)(extent);

  var tileSize = (0, _size.toSize)(opt_tileSize !== undefined ? opt_tileSize : _common.DEFAULT_TILE_SIZE);
  var maxResolution = Math.max(width / tileSize[0], height / tileSize[1]);

  var length = maxZoom + 1;
  var resolutions = new Array(length);
  for (var z = 0; z < length; ++z) {
    resolutions[z] = maxResolution / Math.pow(2, z);
  }
  return resolutions;
}

/**
 * @param {module:ol/proj~ProjectionLike} projection Projection.
 * @param {number=} opt_maxZoom Maximum zoom level (default is
 *     DEFAULT_MAX_ZOOM).
 * @param {number|module:ol/size~Size=} opt_tileSize Tile size (default uses
 *     DEFAULT_TILE_SIZE).
 * @param {module:ol/extent/Corner=} opt_corner Extent corner (default is `'top-left'`).
 * @return {!module:ol/tilegrid/TileGrid} TileGrid instance.
 */
function createForProjection(projection, opt_maxZoom, opt_tileSize, opt_corner) {
  var extent = extentFromProjection(projection);
  return createForExtent(extent, opt_maxZoom, opt_tileSize, opt_corner);
}

/**
 * Generate a tile grid extent from a projection.  If the projection has an
 * extent, it is used.  If not, a global extent is assumed.
 * @param {module:ol/proj~ProjectionLike} projection Projection.
 * @return {module:ol/extent~Extent} Extent.
 */
function extentFromProjection(projection) {
  projection = (0, _proj.get)(projection);
  var extent = projection.getExtent();
  if (!extent) {
    var half = 180 * _proj.METERS_PER_UNIT[_Units2.default.DEGREES] / projection.getMetersPerUnit();
    extent = (0, _extent.createOrUpdate)(-half, -half, half, half);
  }
  return extent;
}

/***/ }),

/***/ "./node_modules/ol/tilegrid/TileGrid.js":
/*!**********************************************!*\
  !*** ./node_modules/ol/tilegrid/TileGrid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = __webpack_require__(/*! ./common.js */ "./node_modules/ol/tilegrid/common.js");

var _asserts = __webpack_require__(/*! ../asserts.js */ "./node_modules/ol/asserts.js");

var _TileRange = __webpack_require__(/*! ../TileRange.js */ "./node_modules/ol/TileRange.js");

var _TileRange2 = _interopRequireDefault(_TileRange);

var _array = __webpack_require__(/*! ../array.js */ "./node_modules/ol/array.js");

var _extent = __webpack_require__(/*! ../extent.js */ "./node_modules/ol/extent.js");

var _math = __webpack_require__(/*! ../math.js */ "./node_modules/ol/math.js");

var _size = __webpack_require__(/*! ../size.js */ "./node_modules/ol/size.js");

var _tilecoord = __webpack_require__(/*! ../tilecoord.js */ "./node_modules/ol/tilecoord.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @typedef {Object} Options
 * @property {module:ol/extent~Extent} [extent] Extent for the tile grid. No tiles outside this
 * extent will be requested by {@link module:ol/source/Tile} sources. When no `origin` or
 * `origins` are configured, the `origin` will be set to the top-left corner of the extent.
 * @property {number} [minZoom=0] Minimum zoom.
 * @property {module:ol/coordinate~Coordinate} [origin] The tile grid origin, i.e. where the `x`
 * and `y` axes meet (`[z, 0, 0]`). Tile coordinates increase left to right and upwards. If not
 * specified, `extent` or `origins` must be provided.
 * @property {Array.<module:ol/coordinate~Coordinate>} [origins] Tile grid origins, i.e. where
 * the `x` and `y` axes meet (`[z, 0, 0]`), for each zoom level. If given, the array length
 * should match the length of the `resolutions` array, i.e. each resolution can have a different
 * origin. Tile coordinates increase left to right and upwards. If not specified, `extent` or
 * `origin` must be provided.
 * @property {!Array.<number>} resolutions Resolutions. The array index of each resolution needs
 * to match the zoom level. This means that even if a `minZoom` is configured, the resolutions
 * array will have a length of `maxZoom + 1`.
 * @property {Array.<module:ol/size~Size>} [sizes] Sizes.
 * @property {number|module:ol/size~Size} [tileSize] Tile size.
 * Default is `[256, 256]`.
 * @property {Array.<module:ol/size~Size>} [tileSizes] Tile sizes. If given, the array length
 * should match the length of the `resolutions` array, i.e. each resolution can have a different
 * tile size.
 */

/**
 * @classdesc
 * Base class for setting the grid pattern for sources accessing tiled-image
 * servers.
 *
 * @constructor
 * @param {module:ol/tilegrid/TileGrid~Options} options Tile grid options.
 * @struct
 * @api
 */
/**
 * @module ol/tilegrid/TileGrid
 */
var TileGrid = function TileGrid(options) {

  /**
   * @protected
   * @type {number}
   */
  this.minZoom = options.minZoom !== undefined ? options.minZoom : 0;

  /**
   * @private
   * @type {!Array.<number>}
   */
  this.resolutions_ = options.resolutions;
  (0, _asserts.assert)((0, _array.isSorted)(this.resolutions_, function (a, b) {
    return b - a;
  }, true), 17); // `resolutions` must be sorted in descending order


  // check if we've got a consistent zoom factor and origin
  var zoomFactor = void 0;
  if (!options.origins) {
    for (var i = 0, ii = this.resolutions_.length - 1; i < ii; ++i) {
      if (!zoomFactor) {
        zoomFactor = this.resolutions_[i] / this.resolutions_[i + 1];
      } else {
        if (this.resolutions_[i] / this.resolutions_[i + 1] !== zoomFactor) {
          zoomFactor = undefined;
          break;
        }
      }
    }
  }

  /**
   * @private
   * @type {number|undefined}
   */
  this.zoomFactor_ = zoomFactor;

  /**
   * @protected
   * @type {number}
   */
  this.maxZoom = this.resolutions_.length - 1;

  /**
   * @private
   * @type {module:ol/coordinate~Coordinate}
   */
  this.origin_ = options.origin !== undefined ? options.origin : null;

  /**
   * @private
   * @type {Array.<module:ol/coordinate~Coordinate>}
   */
  this.origins_ = null;
  if (options.origins !== undefined) {
    this.origins_ = options.origins;
    (0, _asserts.assert)(this.origins_.length == this.resolutions_.length, 20); // Number of `origins` and `resolutions` must be equal
  }

  var extent = options.extent;

  if (extent !== undefined && !this.origin_ && !this.origins_) {
    this.origin_ = (0, _extent.getTopLeft)(extent);
  }

  (0, _asserts.assert)(!this.origin_ && this.origins_ || this.origin_ && !this.origins_, 18); // Either `origin` or `origins` must be configured, never both

  /**
   * @private
   * @type {Array.<number|module:ol/size~Size>}
   */
  this.tileSizes_ = null;
  if (options.tileSizes !== undefined) {
    this.tileSizes_ = options.tileSizes;
    (0, _asserts.assert)(this.tileSizes_.length == this.resolutions_.length, 19); // Number of `tileSizes` and `resolutions` must be equal
  }

  /**
   * @private
   * @type {number|module:ol/size~Size}
   */
  this.tileSize_ = options.tileSize !== undefined ? options.tileSize : !this.tileSizes_ ? _common.DEFAULT_TILE_SIZE : null;
  (0, _asserts.assert)(!this.tileSize_ && this.tileSizes_ || this.tileSize_ && !this.tileSizes_, 22); // Either `tileSize` or `tileSizes` must be configured, never both

  /**
   * @private
   * @type {module:ol/extent~Extent}
   */
  this.extent_ = extent !== undefined ? extent : null;

  /**
   * @private
   * @type {Array.<module:ol/TileRange>}
   */
  this.fullTileRanges_ = null;

  /**
   * @private
   * @type {module:ol/size~Size}
   */
  this.tmpSize_ = [0, 0];

  if (options.sizes !== undefined) {
    this.fullTileRanges_ = options.sizes.map(function (size, z) {
      var tileRange = new _TileRange2.default(Math.min(0, size[0]), Math.max(size[0] - 1, -1), Math.min(0, size[1]), Math.max(size[1] - 1, -1));
      return tileRange;
    }, this);
  } else if (extent) {
    this.calculateTileRanges_(extent);
  }
};

/**
 * @private
 * @type {module:ol/tilecoord~TileCoord}
 */
var tmpTileCoord = [0, 0, 0];

/**
 * Call a function with each tile coordinate for a given extent and zoom level.
 *
 * @param {module:ol/extent~Extent} extent Extent.
 * @param {number} zoom Integer zoom level.
 * @param {function(module:ol/tilecoord~TileCoord)} callback Function called with each tile coordinate.
 * @api
 */
TileGrid.prototype.forEachTileCoord = function (extent, zoom, callback) {
  var tileRange = this.getTileRangeForExtentAndZ(extent, zoom);
  for (var i = tileRange.minX, ii = tileRange.maxX; i <= ii; ++i) {
    for (var j = tileRange.minY, jj = tileRange.maxY; j <= jj; ++j) {
      callback([zoom, i, j]);
    }
  }
};

/**
 * @param {module:ol/tilecoord~TileCoord} tileCoord Tile coordinate.
 * @param {function(this: T, number, module:ol/TileRange): boolean} callback Callback.
 * @param {T=} opt_this The object to use as `this` in `callback`.
 * @param {module:ol/TileRange=} opt_tileRange Temporary module:ol/TileRange object.
 * @param {module:ol/extent~Extent=} opt_extent Temporary module:ol/extent~Extent object.
 * @return {boolean} Callback succeeded.
 * @template T
 */
TileGrid.prototype.forEachTileCoordParentTileRange = function (tileCoord, callback, opt_this, opt_tileRange, opt_extent) {
  var tileRange = void 0,
      x = void 0,
      y = void 0;
  var tileCoordExtent = null;
  var z = tileCoord[0] - 1;
  if (this.zoomFactor_ === 2) {
    x = tileCoord[1];
    y = tileCoord[2];
  } else {
    tileCoordExtent = this.getTileCoordExtent(tileCoord, opt_extent);
  }
  while (z >= this.minZoom) {
    if (this.zoomFactor_ === 2) {
      x = Math.floor(x / 2);
      y = Math.floor(y / 2);
      tileRange = (0, _TileRange.createOrUpdate)(x, x, y, y, opt_tileRange);
    } else {
      tileRange = this.getTileRangeForExtentAndZ(tileCoordExtent, z, opt_tileRange);
    }
    if (callback.call(opt_this, z, tileRange)) {
      return true;
    }
    --z;
  }
  return false;
};

/**
 * Get the extent for this tile grid, if it was configured.
 * @return {module:ol/extent~Extent} Extent.
 */
TileGrid.prototype.getExtent = function () {
  return this.extent_;
};

/**
 * Get the maximum zoom level for the grid.
 * @return {number} Max zoom.
 * @api
 */
TileGrid.prototype.getMaxZoom = function () {
  return this.maxZoom;
};

/**
 * Get the minimum zoom level for the grid.
 * @return {number} Min zoom.
 * @api
 */
TileGrid.prototype.getMinZoom = function () {
  return this.minZoom;
};

/**
 * Get the origin for the grid at the given zoom level.
 * @param {number} z Integer zoom level.
 * @return {module:ol/coordinate~Coordinate} Origin.
 * @api
 */
TileGrid.prototype.getOrigin = function (z) {
  if (this.origin_) {
    return this.origin_;
  } else {
    return this.origins_[z];
  }
};

/**
 * Get the resolution for the given zoom level.
 * @param {number} z Integer zoom level.
 * @return {number} Resolution.
 * @api
 */
TileGrid.prototype.getResolution = function (z) {
  return this.resolutions_[z];
};

/**
 * Get the list of resolutions for the tile grid.
 * @return {Array.<number>} Resolutions.
 * @api
 */
TileGrid.prototype.getResolutions = function () {
  return this.resolutions_;
};

/**
 * @param {module:ol/tilecoord~TileCoord} tileCoord Tile coordinate.
 * @param {module:ol/TileRange=} opt_tileRange Temporary module:ol/TileRange object.
 * @param {module:ol/extent~Extent=} opt_extent Temporary module:ol/extent~Extent object.
 * @return {module:ol/TileRange} Tile range.
 */
TileGrid.prototype.getTileCoordChildTileRange = function (tileCoord, opt_tileRange, opt_extent) {
  if (tileCoord[0] < this.maxZoom) {
    if (this.zoomFactor_ === 2) {
      var minX = tileCoord[1] * 2;
      var minY = tileCoord[2] * 2;
      return (0, _TileRange.createOrUpdate)(minX, minX + 1, minY, minY + 1, opt_tileRange);
    }
    var tileCoordExtent = this.getTileCoordExtent(tileCoord, opt_extent);
    return this.getTileRangeForExtentAndZ(tileCoordExtent, tileCoord[0] + 1, opt_tileRange);
  }
  return null;
};

/**
 * Get the extent for a tile range.
 * @param {number} z Integer zoom level.
 * @param {module:ol/TileRange} tileRange Tile range.
 * @param {module:ol/extent~Extent=} opt_extent Temporary module:ol/extent~Extent object.
 * @return {module:ol/extent~Extent} Extent.
 */
TileGrid.prototype.getTileRangeExtent = function (z, tileRange, opt_extent) {
  var origin = this.getOrigin(z);
  var resolution = this.getResolution(z);
  var tileSize = (0, _size.toSize)(this.getTileSize(z), this.tmpSize_);
  var minX = origin[0] + tileRange.minX * tileSize[0] * resolution;
  var maxX = origin[0] + (tileRange.maxX + 1) * tileSize[0] * resolution;
  var minY = origin[1] + tileRange.minY * tileSize[1] * resolution;
  var maxY = origin[1] + (tileRange.maxY + 1) * tileSize[1] * resolution;
  return (0, _extent.createOrUpdate)(minX, minY, maxX, maxY, opt_extent);
};

/**
 * Get a tile range for the given extent and integer zoom level.
 * @param {module:ol/extent~Extent} extent Extent.
 * @param {number} z Integer zoom level.
 * @param {module:ol/TileRange=} opt_tileRange Temporary tile range object.
 * @return {module:ol/TileRange} Tile range.
 */
TileGrid.prototype.getTileRangeForExtentAndZ = function (extent, z, opt_tileRange) {
  var tileCoord = tmpTileCoord;
  this.getTileCoordForXYAndZ_(extent[0], extent[1], z, false, tileCoord);
  var minX = tileCoord[1];
  var minY = tileCoord[2];
  this.getTileCoordForXYAndZ_(extent[2], extent[3], z, true, tileCoord);
  return (0, _TileRange.createOrUpdate)(minX, tileCoord[1], minY, tileCoord[2], opt_tileRange);
};

/**
 * @param {module:ol/tilecoord~TileCoord} tileCoord Tile coordinate.
 * @return {module:ol/coordinate~Coordinate} Tile center.
 */
TileGrid.prototype.getTileCoordCenter = function (tileCoord) {
  var origin = this.getOrigin(tileCoord[0]);
  var resolution = this.getResolution(tileCoord[0]);
  var tileSize = (0, _size.toSize)(this.getTileSize(tileCoord[0]), this.tmpSize_);
  return [origin[0] + (tileCoord[1] + 0.5) * tileSize[0] * resolution, origin[1] + (tileCoord[2] + 0.5) * tileSize[1] * resolution];
};

/**
 * Get the extent of a tile coordinate.
 *
 * @param {module:ol/tilecoord~TileCoord} tileCoord Tile coordinate.
 * @param {module:ol/extent~Extent=} opt_extent Temporary extent object.
 * @return {module:ol/extent~Extent} Extent.
 * @api
 */
TileGrid.prototype.getTileCoordExtent = function (tileCoord, opt_extent) {
  var origin = this.getOrigin(tileCoord[0]);
  var resolution = this.getResolution(tileCoord[0]);
  var tileSize = (0, _size.toSize)(this.getTileSize(tileCoord[0]), this.tmpSize_);
  var minX = origin[0] + tileCoord[1] * tileSize[0] * resolution;
  var minY = origin[1] + tileCoord[2] * tileSize[1] * resolution;
  var maxX = minX + tileSize[0] * resolution;
  var maxY = minY + tileSize[1] * resolution;
  return (0, _extent.createOrUpdate)(minX, minY, maxX, maxY, opt_extent);
};

/**
 * Get the tile coordinate for the given map coordinate and resolution.  This
 * method considers that coordinates that intersect tile boundaries should be
 * assigned the higher tile coordinate.
 *
 * @param {module:ol/coordinate~Coordinate} coordinate Coordinate.
 * @param {number} resolution Resolution.
 * @param {module:ol/tilecoord~TileCoord=} opt_tileCoord Destination module:ol/tilecoord~TileCoord object.
 * @return {module:ol/tilecoord~TileCoord} Tile coordinate.
 * @api
 */
TileGrid.prototype.getTileCoordForCoordAndResolution = function (coordinate, resolution, opt_tileCoord) {
  return this.getTileCoordForXYAndResolution_(coordinate[0], coordinate[1], resolution, false, opt_tileCoord);
};

/**
 * Note that this method should not be called for resolutions that correspond
 * to an integer zoom level.  Instead call the `getTileCoordForXYAndZ_` method.
 * @param {number} x X.
 * @param {number} y Y.
 * @param {number} resolution Resolution (for a non-integer zoom level).
 * @param {boolean} reverseIntersectionPolicy Instead of letting edge
 *     intersections go to the higher tile coordinate, let edge intersections
 *     go to the lower tile coordinate.
 * @param {module:ol/tilecoord~TileCoord=} opt_tileCoord Temporary module:ol/tilecoord~TileCoord object.
 * @return {module:ol/tilecoord~TileCoord} Tile coordinate.
 * @private
 */
TileGrid.prototype.getTileCoordForXYAndResolution_ = function (x, y, resolution, reverseIntersectionPolicy, opt_tileCoord) {
  var z = this.getZForResolution(resolution);
  var scale = resolution / this.getResolution(z);
  var origin = this.getOrigin(z);
  var tileSize = (0, _size.toSize)(this.getTileSize(z), this.tmpSize_);

  var adjustX = reverseIntersectionPolicy ? 0.5 : 0;
  var adjustY = reverseIntersectionPolicy ? 0 : 0.5;
  var xFromOrigin = Math.floor((x - origin[0]) / resolution + adjustX);
  var yFromOrigin = Math.floor((y - origin[1]) / resolution + adjustY);
  var tileCoordX = scale * xFromOrigin / tileSize[0];
  var tileCoordY = scale * yFromOrigin / tileSize[1];

  if (reverseIntersectionPolicy) {
    tileCoordX = Math.ceil(tileCoordX) - 1;
    tileCoordY = Math.ceil(tileCoordY) - 1;
  } else {
    tileCoordX = Math.floor(tileCoordX);
    tileCoordY = Math.floor(tileCoordY);
  }

  return (0, _tilecoord.createOrUpdate)(z, tileCoordX, tileCoordY, opt_tileCoord);
};

/**
 * Although there is repetition between this method and `getTileCoordForXYAndResolution_`,
 * they should have separate implementations.  This method is for integer zoom
 * levels.  The other method should only be called for resolutions corresponding
 * to non-integer zoom levels.
 * @param {number} x Map x coordinate.
 * @param {number} y Map y coordinate.
 * @param {number} z Integer zoom level.
 * @param {boolean} reverseIntersectionPolicy Instead of letting edge
 *     intersections go to the higher tile coordinate, let edge intersections
 *     go to the lower tile coordinate.
 * @param {module:ol/tilecoord~TileCoord=} opt_tileCoord Temporary module:ol/tilecoord~TileCoord object.
 * @return {module:ol/tilecoord~TileCoord} Tile coordinate.
 * @private
 */
TileGrid.prototype.getTileCoordForXYAndZ_ = function (x, y, z, reverseIntersectionPolicy, opt_tileCoord) {
  var origin = this.getOrigin(z);
  var resolution = this.getResolution(z);
  var tileSize = (0, _size.toSize)(this.getTileSize(z), this.tmpSize_);

  var adjustX = reverseIntersectionPolicy ? 0.5 : 0;
  var adjustY = reverseIntersectionPolicy ? 0 : 0.5;
  var xFromOrigin = Math.floor((x - origin[0]) / resolution + adjustX);
  var yFromOrigin = Math.floor((y - origin[1]) / resolution + adjustY);
  var tileCoordX = xFromOrigin / tileSize[0];
  var tileCoordY = yFromOrigin / tileSize[1];

  if (reverseIntersectionPolicy) {
    tileCoordX = Math.ceil(tileCoordX) - 1;
    tileCoordY = Math.ceil(tileCoordY) - 1;
  } else {
    tileCoordX = Math.floor(tileCoordX);
    tileCoordY = Math.floor(tileCoordY);
  }

  return (0, _tilecoord.createOrUpdate)(z, tileCoordX, tileCoordY, opt_tileCoord);
};

/**
 * Get a tile coordinate given a map coordinate and zoom level.
 * @param {module:ol/coordinate~Coordinate} coordinate Coordinate.
 * @param {number} z Zoom level.
 * @param {module:ol/tilecoord~TileCoord=} opt_tileCoord Destination module:ol/tilecoord~TileCoord object.
 * @return {module:ol/tilecoord~TileCoord} Tile coordinate.
 * @api
 */
TileGrid.prototype.getTileCoordForCoordAndZ = function (coordinate, z, opt_tileCoord) {
  return this.getTileCoordForXYAndZ_(coordinate[0], coordinate[1], z, false, opt_tileCoord);
};

/**
 * @param {module:ol/tilecoord~TileCoord} tileCoord Tile coordinate.
 * @return {number} Tile resolution.
 */
TileGrid.prototype.getTileCoordResolution = function (tileCoord) {
  return this.resolutions_[tileCoord[0]];
};

/**
 * Get the tile size for a zoom level. The type of the return value matches the
 * `tileSize` or `tileSizes` that the tile grid was configured with. To always
 * get an `module:ol/size~Size`, run the result through `module:ol/size~Size.toSize()`.
 * @param {number} z Z.
 * @return {number|module:ol/size~Size} Tile size.
 * @api
 */
TileGrid.prototype.getTileSize = function (z) {
  if (this.tileSize_) {
    return this.tileSize_;
  } else {
    return this.tileSizes_[z];
  }
};

/**
 * @param {number} z Zoom level.
 * @return {module:ol/TileRange} Extent tile range for the specified zoom level.
 */
TileGrid.prototype.getFullTileRange = function (z) {
  if (!this.fullTileRanges_) {
    return null;
  } else {
    return this.fullTileRanges_[z];
  }
};

/**
 * @param {number} resolution Resolution.
 * @param {number=} opt_direction If 0, the nearest resolution will be used.
 *     If 1, the nearest lower resolution will be used. If -1, the nearest
 *     higher resolution will be used. Default is 0.
 * @return {number} Z.
 * @api
 */
TileGrid.prototype.getZForResolution = function (resolution, opt_direction) {
  var z = (0, _array.linearFindNearest)(this.resolutions_, resolution, opt_direction || 0);
  return (0, _math.clamp)(z, this.minZoom, this.maxZoom);
};

/**
 * @param {!module:ol/extent~Extent} extent Extent for this tile grid.
 * @private
 */
TileGrid.prototype.calculateTileRanges_ = function (extent) {
  var length = this.resolutions_.length;
  var fullTileRanges = new Array(length);
  for (var z = this.minZoom; z < length; ++z) {
    fullTileRanges[z] = this.getTileRangeForExtentAndZ(extent, z);
  }
  this.fullTileRanges_ = fullTileRanges;
};
exports.default = TileGrid;

/***/ }),

/***/ "./node_modules/ol/tilegrid/common.js":
/*!********************************************!*\
  !*** ./node_modules/ol/tilegrid/common.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @module ol/tilegrid/common
 */

/**
 * Default maximum zoom for default tile grids.
 * @type {number}
 */
var DEFAULT_MAX_ZOOM = exports.DEFAULT_MAX_ZOOM = 42;

/**
 * Default tile size.
 * @type {number}
 */
var DEFAULT_TILE_SIZE = exports.DEFAULT_TILE_SIZE = 256;

/***/ }),

/***/ "./node_modules/ol/tileurlfunction.js":
/*!********************************************!*\
  !*** ./node_modules/ol/tileurlfunction.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFromTemplate = createFromTemplate;
exports.createFromTemplates = createFromTemplates;
exports.createFromTileUrlFunctions = createFromTileUrlFunctions;
exports.nullTileUrlFunction = nullTileUrlFunction;
exports.expandUrl = expandUrl;

var _asserts = __webpack_require__(/*! ./asserts.js */ "./node_modules/ol/asserts.js");

var _math = __webpack_require__(/*! ./math.js */ "./node_modules/ol/math.js");

var _tilecoord = __webpack_require__(/*! ./tilecoord.js */ "./node_modules/ol/tilecoord.js");

/**
 * @param {string} template Template.
 * @param {module:ol/tilegrid/TileGrid} tileGrid Tile grid.
 * @return {module:ol/Tile~UrlFunction} Tile URL function.
 */
function createFromTemplate(template, tileGrid) {
  var zRegEx = /\{z\}/g;
  var xRegEx = /\{x\}/g;
  var yRegEx = /\{y\}/g;
  var dashYRegEx = /\{-y\}/g;
  return (
    /**
     * @param {module:ol/tilecoord~TileCoord} tileCoord Tile Coordinate.
     * @param {number} pixelRatio Pixel ratio.
     * @param {module:ol/proj/Projection} projection Projection.
     * @return {string|undefined} Tile URL.
     */
    function (tileCoord, pixelRatio, projection) {
      if (!tileCoord) {
        return undefined;
      } else {
        return template.replace(zRegEx, tileCoord[0].toString()).replace(xRegEx, tileCoord[1].toString()).replace(yRegEx, function () {
          var y = -tileCoord[2] - 1;
          return y.toString();
        }).replace(dashYRegEx, function () {
          var z = tileCoord[0];
          var range = tileGrid.getFullTileRange(z);
          (0, _asserts.assert)(range, 55); // The {-y} placeholder requires a tile grid with extent
          var y = range.getHeight() + tileCoord[2];
          return y.toString();
        });
      }
    }
  );
}

/**
 * @param {Array.<string>} templates Templates.
 * @param {module:ol/tilegrid/TileGrid} tileGrid Tile grid.
 * @return {module:ol/Tile~UrlFunction} Tile URL function.
 */
/**
 * @module ol/tileurlfunction
 */
function createFromTemplates(templates, tileGrid) {
  var len = templates.length;
  var tileUrlFunctions = new Array(len);
  for (var i = 0; i < len; ++i) {
    tileUrlFunctions[i] = createFromTemplate(templates[i], tileGrid);
  }
  return createFromTileUrlFunctions(tileUrlFunctions);
}

/**
 * @param {Array.<module:ol/Tile~UrlFunction>} tileUrlFunctions Tile URL Functions.
 * @return {module:ol/Tile~UrlFunction} Tile URL function.
 */
function createFromTileUrlFunctions(tileUrlFunctions) {
  if (tileUrlFunctions.length === 1) {
    return tileUrlFunctions[0];
  }
  return (
    /**
     * @param {module:ol/tilecoord~TileCoord} tileCoord Tile Coordinate.
     * @param {number} pixelRatio Pixel ratio.
     * @param {module:ol/proj/Projection} projection Projection.
     * @return {string|undefined} Tile URL.
     */
    function (tileCoord, pixelRatio, projection) {
      if (!tileCoord) {
        return undefined;
      } else {
        var h = (0, _tilecoord.hash)(tileCoord);
        var index = (0, _math.modulo)(h, tileUrlFunctions.length);
        return tileUrlFunctions[index](tileCoord, pixelRatio, projection);
      }
    }
  );
}

/**
 * @param {module:ol/tilecoord~TileCoord} tileCoord Tile coordinate.
 * @param {number} pixelRatio Pixel ratio.
 * @param {module:ol/proj/Projection} projection Projection.
 * @return {string|undefined} Tile URL.
 */
function nullTileUrlFunction(tileCoord, pixelRatio, projection) {
  return undefined;
}

/**
 * @param {string} url URL.
 * @return {Array.<string>} Array of urls.
 */
function expandUrl(url) {
  var urls = [];
  var match = /\{([a-z])-([a-z])\}/.exec(url);
  if (match) {
    // char range
    var startCharCode = match[1].charCodeAt(0);
    var stopCharCode = match[2].charCodeAt(0);
    var charCode = void 0;
    for (charCode = startCharCode; charCode <= stopCharCode; ++charCode) {
      urls.push(url.replace(match[0], String.fromCharCode(charCode)));
    }
    return urls;
  }
  match = match = /\{(\d+)-(\d+)\}/.exec(url);
  if (match) {
    // number range
    var stop = parseInt(match[2], 10);
    for (var i = parseInt(match[1], 10); i <= stop; i++) {
      urls.push(url.replace(match[0], i.toString()));
    }
    return urls;
  }
  urls.push(url);
  return urls;
}

/***/ }),

/***/ "./node_modules/ol/webgl.js":
/*!**********************************!*\
  !*** ./node_modules/ol/webgl.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getContext = getContext;
/**
 * @module ol/webgl
 */

/**
 * Constants taken from goog.webgl
 */

/**
 * @const
 * @type {number}
 */
var ONE = exports.ONE = 1;

/**
 * @const
 * @type {number}
 */
var SRC_ALPHA = exports.SRC_ALPHA = 0x0302;

/**
 * @const
 * @type {number}
 */
var COLOR_ATTACHMENT0 = exports.COLOR_ATTACHMENT0 = 0x8CE0;

/**
 * @const
 * @type {number}
 */
var COLOR_BUFFER_BIT = exports.COLOR_BUFFER_BIT = 0x00004000;

/**
 * @const
 * @type {number}
 */
var TRIANGLES = exports.TRIANGLES = 0x0004;

/**
 * @const
 * @type {number}
 */
var TRIANGLE_STRIP = exports.TRIANGLE_STRIP = 0x0005;

/**
 * @const
 * @type {number}
 */
var ONE_MINUS_SRC_ALPHA = exports.ONE_MINUS_SRC_ALPHA = 0x0303;

/**
 * @const
 * @type {number}
 */
var ARRAY_BUFFER = exports.ARRAY_BUFFER = 0x8892;

/**
 * @const
 * @type {number}
 */
var ELEMENT_ARRAY_BUFFER = exports.ELEMENT_ARRAY_BUFFER = 0x8893;

/**
 * @const
 * @type {number}
 */
var STREAM_DRAW = exports.STREAM_DRAW = 0x88E0;

/**
 * @const
 * @type {number}
 */
var STATIC_DRAW = exports.STATIC_DRAW = 0x88E4;

/**
 * @const
 * @type {number}
 */
var DYNAMIC_DRAW = exports.DYNAMIC_DRAW = 0x88E8;

/**
 * @const
 * @type {number}
 */
var CULL_FACE = exports.CULL_FACE = 0x0B44;

/**
 * @const
 * @type {number}
 */
var BLEND = exports.BLEND = 0x0BE2;

/**
 * @const
 * @type {number}
 */
var STENCIL_TEST = exports.STENCIL_TEST = 0x0B90;

/**
 * @const
 * @type {number}
 */
var DEPTH_TEST = exports.DEPTH_TEST = 0x0B71;

/**
 * @const
 * @type {number}
 */
var SCISSOR_TEST = exports.SCISSOR_TEST = 0x0C11;

/**
 * @const
 * @type {number}
 */
var UNSIGNED_BYTE = exports.UNSIGNED_BYTE = 0x1401;

/**
 * @const
 * @type {number}
 */
var UNSIGNED_SHORT = exports.UNSIGNED_SHORT = 0x1403;

/**
 * @const
 * @type {number}
 */
var UNSIGNED_INT = exports.UNSIGNED_INT = 0x1405;

/**
 * @const
 * @type {number}
 */
var FLOAT = exports.FLOAT = 0x1406;

/**
 * @const
 * @type {number}
 */
var RGBA = exports.RGBA = 0x1908;

/**
 * @const
 * @type {number}
 */
var FRAGMENT_SHADER = exports.FRAGMENT_SHADER = 0x8B30;

/**
 * @const
 * @type {number}
 */
var VERTEX_SHADER = exports.VERTEX_SHADER = 0x8B31;

/**
 * @const
 * @type {number}
 */
var LINK_STATUS = exports.LINK_STATUS = 0x8B82;

/**
 * @const
 * @type {number}
 */
var LINEAR = exports.LINEAR = 0x2601;

/**
 * @const
 * @type {number}
 */
var TEXTURE_MAG_FILTER = exports.TEXTURE_MAG_FILTER = 0x2800;

/**
 * @const
 * @type {number}
 */
var TEXTURE_MIN_FILTER = exports.TEXTURE_MIN_FILTER = 0x2801;

/**
 * @const
 * @type {number}
 */
var TEXTURE_WRAP_S = exports.TEXTURE_WRAP_S = 0x2802;

/**
 * @const
 * @type {number}
 */
var TEXTURE_WRAP_T = exports.TEXTURE_WRAP_T = 0x2803;

/**
 * @const
 * @type {number}
 */
var TEXTURE_2D = exports.TEXTURE_2D = 0x0DE1;

/**
 * @const
 * @type {number}
 */
var TEXTURE0 = exports.TEXTURE0 = 0x84C0;

/**
 * @const
 * @type {number}
 */
var CLAMP_TO_EDGE = exports.CLAMP_TO_EDGE = 0x812F;

/**
 * @const
 * @type {number}
 */
var COMPILE_STATUS = exports.COMPILE_STATUS = 0x8B81;

/**
 * @const
 * @type {number}
 */
var FRAMEBUFFER = exports.FRAMEBUFFER = 0x8D40;

/** end of goog.webgl constants
 */

/**
 * @const
 * @type {Array.<string>}
 */
var CONTEXT_IDS = ['experimental-webgl', 'webgl', 'webkit-3d', 'moz-webgl'];

/**
 * @param {HTMLCanvasElement} canvas Canvas.
 * @param {Object=} opt_attributes Attributes.
 * @return {WebGLRenderingContext} WebGL rendering context.
 */
function getContext(canvas, opt_attributes) {
  var ii = CONTEXT_IDS.length;
  for (var i = 0; i < ii; ++i) {
    try {
      var context = canvas.getContext(CONTEXT_IDS[i], opt_attributes);
      if (context) {
        return (/** @type {!WebGLRenderingContext} */context
        );
      }
    } catch (e) {
      // pass
    }
  }
  return null;
}

/***/ }),

/***/ "./node_modules/webfont-matcher/lib/fonts/google.js":
/*!**********************************************************!*\
  !*** ./node_modules/webfont-matcher/lib/fonts/google.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Generated by CoffeeScript 1.10.0
(function () {
  var families;

  module.exports = {
    icon: 'icons/google.svg',
    name: 'google',
    title: 'Google Fonts',
    link: 'google.com/fonts',
    getNames: function getNames() {
      return families;
    },
    getLink: function getLink(name) {
      return "https://fonts.google.com/specimen/" + name.replace(/( )/g, '+');
    },
    normalizeName: function normalizeName(name) {
      return name;
    }
  };

  families = ["ABeeZee", "Abel", "Abril Fatface", "Aclonica", "Acme", "Actor", "Adamina", "Advent Pro", "Aguafina Script", "Akronim", "Aladin", "Aldrich", "Alef", "Alegreya", "Alegreya SC", "Alegreya Sans", "Alegreya Sans SC", "Alex Brush", "Alfa Slab One", "Alice", "Alike", "Alike Angular", "Allan", "Allerta", "Allerta Stencil", "Allura", "Almendra", "Almendra Display", "Almendra SC", "Amarante", "Amaranth", "Amatic SC", "Amethysta", "Amiri", "Amita", "Anaheim", "Andada", "Andika", "Angkor", "Annie Use Your Telescope", "Anonymous Pro", "Antic", "Antic Didone", "Antic Slab", "Anton", "Arapey", "Arbutus", "Arbutus Slab", "Architects Daughter", "Archivo Black", "Archivo Narrow", "Arimo", "Arizonia", "Armata", "Artifika", "Arvo", "Arya", "Asap", "Asar", "Asset", "Astloch", "Asul", "Atomic Age", "Aubrey", "Audiowide", "Autour One", "Average", "Average Sans", "Averia Gruesa Libre", "Averia Libre", "Averia Sans Libre", "Averia Serif Libre", "Bad Script", "Balthazar", "Bangers", "Basic", "Battambang", "Baumans", "Bayon", "Belgrano", "Belleza", "BenchNine", "Bentham", "Berkshire Swash", "Bevan", "Bigelow Rules", "Bigshot One", "Bilbo", "Bilbo Swash Caps", "Biryani", "Bitter", "Black Ops One", "Bokor", "Bonbon", "Boogaloo", "Bowlby One", "Bowlby One SC", "Brawler", "Bree Serif", "Bubblegum Sans", "Bubbler One", "Buda", "Buenard", "Butcherman", "Butterfly Kids", "Cabin", "Cabin Condensed", "Cabin Sketch", "Caesar Dressing", "Cagliostro", "Calligraffitti", "Cambay", "Cambo", "Candal", "Cantarell", "Cantata One", "Cantora One", "Capriola", "Cardo", "Carme", "Carrois Gothic", "Carrois Gothic SC", "Carter One", "Catamaran", "Caudex", "Caveat", "Caveat Brush", "Cedarville Cursive", "Ceviche One", "Changa One", "Chango", "Chau Philomene One", "Chela One", "Chelsea Market", "Chenla", "Cherry Cream Soda", "Cherry Swash", "Chewy", "Chicle", "Chivo", "Chonburi", "Cinzel", "Cinzel Decorative", "Clicker Script", "Coda", "Coda Caption", "Codystar", "Combo", "Comfortaa", "Coming Soon", "Concert One", "Condiment", "Content", "Contrail One", "Convergence", "Cookie", "Copse", "Corben", "Courgette", "Cousine", "Coustard", "Covered By Your Grace", "Crafty Girls", "Creepster", "Crete Round", "Crimson Text", "Croissant One", "Crushed", "Cuprum", "Cutive", "Cutive Mono", "Damion", "Dancing Script", "Dangrek", "Dawning of a New Day", "Days One", "Dekko", "Delius", "Delius Swash Caps", "Delius Unicase", "Della Respira", "Denk One", "Devonshire", "Dhurjati", "Didact Gothic", "Diplomata", "Diplomata SC", "Domine", "Donegal One", "Doppio One", "Dorsa", "Dosis", "Dr Sugiyama", "Droid Sans", "Droid Sans Mono", "Droid Serif", "Duru Sans", "Dynalight", "EB Garamond", "Eagle Lake", "Eater", "Economica", "Eczar", "Ek Mukta", "Electrolize", "Elsie", "Elsie Swash Caps", "Emblema One", "Emilys Candy", "Engagement", "Englebert", "Enriqueta", "Erica One", "Esteban", "Euphoria Script", "Ewert", "Exo", "Exo 2", "Expletus Sans", "Fanwood Text", "Fascinate", "Fascinate Inline", "Faster One", "Fasthand", "Fauna One", "Federant", "Federo", "Felipa", "Fenix", "Finger Paint", "Fira Mono", "Fira Sans", "Fjalla One", "Fjord One", "Flamenco", "Flavors", "Fondamento", "Fontdiner Swanky", "Forum", "Francois One", "Freckle Face", "Fredericka the Great", "Fredoka One", "Freehand", "Fresca", "Frijole", "Fruktur", "Fugaz One", "GFS Didot", "GFS Neohellenic", "Gabriela", "Gafata", "Galdeano", "Galindo", "Gentium Basic", "Gentium Book Basic", "Geo", "Geostar", "Geostar Fill", "Germania One", "Gidugu", "Gilda Display", "Give You Glory", "Glass Antiqua", "Glegoo", "Gloria Hallelujah", "Goblin One", "Gochi Hand", "Gorditas", "Goudy Bookletter 1911", "Graduate", "Grand Hotel", "Gravitas One", "Great Vibes", "Griffy", "Gruppo", "Gudea", "Gurajada", "Habibi", "Halant", "Hammersmith One", "Hanalei", "Hanalei Fill", "Handlee", "Hanuman", "Happy Monkey", "Headland One", "Henny Penny", "Herr Von Muellerhoff", "Hind", "Hind Siliguri", "Hind Vadodara", "Holtwood One SC", "Homemade Apple", "Homenaje", "IM Fell DW Pica", "IM Fell DW Pica SC", "IM Fell Double Pica", "IM Fell Double Pica SC", "IM Fell English", "IM Fell English SC", "IM Fell French Canon", "IM Fell French Canon SC", "IM Fell Great Primer", "IM Fell Great Primer SC", "Iceberg", "Iceland", "Imprima", "Inconsolata", "Inder", "Indie Flower", "Inika", "Inknut Antiqua", "Irish Grover", "Istok Web", "Italiana", "Italianno", "Itim", "Jacques Francois", "Jacques Francois Shadow", "Jaldi", "Jim Nightshade", "Jockey One", "Jolly Lodger", "Josefin Sans", "Josefin Slab", "Joti One", "Judson", "Julee", "Julius Sans One", "Junge", "Jura", "Just Another Hand", "Just Me Again Down Here", "Kadwa", "Kalam", "Kameron", "Kantumruy", "Karla", "Karma", "Kaushan Script", "Kavoon", "Kdam Thmor", "Keania One", "Kelly Slab", "Kenia", "Khand", "Khmer", "Khula", "Kite One", "Knewave", "Kotta One", "Koulen", "Kranky", "Kreon", "Kristi", "Krona One", "Kurale", "La Belle Aurore", "Laila", "Lakki Reddy", "Lancelot", "Lateef", "Lato", "League Script", "Leckerli One", "Ledger", "Lekton", "Lemon", "Libre Baskerville", "Life Savers", "Lilita One", "Lily Script One", "Limelight", "Linden Hill", "Lobster", "Lobster Two", "Londrina Outline", "Londrina Shadow", "Londrina Sketch", "Londrina Solid", "Lora", "Love Ya Like A Sister", "Loved by the King", "Lovers Quarrel", "Luckiest Guy", "Lusitana", "Lustria", "Macondo", "Macondo Swash Caps", "Magra", "Maiden Orange", "Mako", "Mallanna", "Mandali", "Marcellus", "Marcellus SC", "Marck Script", "Margarine", "Marko One", "Marmelad", "Martel", "Martel Sans", "Marvel", "Mate", "Mate SC", "Maven Pro", "McLaren", "Meddon", "MedievalSharp", "Medula One", "Megrim", "Meie Script", "Merienda", "Merienda One", "Merriweather", "Merriweather Sans", "Metal", "Metal Mania", "Metamorphous", "Metrophobic", "Michroma", "Milonga", "Miltonian", "Miltonian Tattoo", "Miniver", "Miss Fajardose", "Modak", "Modern Antiqua", "Molengo", "Molle", "Monda", "Monofett", "Monoton", "Monsieur La Doulaise", "Montaga", "Montez", "Montserrat", "Montserrat Alternates", "Montserrat Subrayada", "Moul", "Moulpali", "Mountains of Christmas", "Mouse Memoirs", "Mr Bedfort", "Mr Dafoe", "Mr De Haviland", "Mrs Saint Delafield", "Mrs Sheppards", "Muli", "Mystery Quest", "NTR", "Neucha", "Neuton", "New Rocker", "News Cycle", "Niconne", "Nixie One", "Nobile", "Nokora", "Norican", "Nosifer", "Nothing You Could Do", "Noticia Text", "Noto Sans", "Noto Serif", "Nova Cut", "Nova Flat", "Nova Mono", "Nova Oval", "Nova Round", "Nova Script", "Nova Slim", "Nova Square", "Numans", "Nunito", "Odor Mean Chey", "Offside", "Old Standard TT", "Oldenburg", "Oleo Script", "Oleo Script Swash Caps", "Open Sans", "Open Sans Condensed", "Oranienbaum", "Orbitron", "Oregano", "Orienta", "Original Surfer", "Oswald", "Over the Rainbow", "Overlock", "Overlock SC", "Ovo", "Oxygen", "Oxygen Mono", "PT Mono", "PT Sans", "PT Sans Caption", "PT Sans Narrow", "PT Serif", "PT Serif Caption", "Pacifico", "Palanquin", "Palanquin Dark", "Paprika", "Parisienne", "Passero One", "Passion One", "Pathway Gothic One", "Patrick Hand", "Patrick Hand SC", "Patua One", "Paytone One", "Peddana", "Peralta", "Permanent Marker", "Petit Formal Script", "Petrona", "Philosopher", "Piedra", "Pinyon Script", "Pirata One", "Plaster", "Play", "Playball", "Playfair Display", "Playfair Display SC", "Podkova", "Poiret One", "Poller One", "Poly", "Pompiere", "Pontano Sans", "Poppins", "Port Lligat Sans", "Port Lligat Slab", "Pragati Narrow", "Prata", "Preahvihear", "Press Start 2P", "Princess Sofia", "Prociono", "Prosto One", "Puritan", "Purple Purse", "Quando", "Quantico", "Quattrocento", "Quattrocento Sans", "Questrial", "Quicksand", "Quintessential", "Qwigley", "Racing Sans One", "Radley", "Rajdhani", "Raleway", "Raleway Dots", "Ramabhadra", "Ramaraja", "Rambla", "Rammetto One", "Ranchers", "Rancho", "Ranga", "Rationale", "Ravi Prakash", "Redressed", "Reenie Beanie", "Revalia", "Rhodium Libre", "Ribeye", "Ribeye Marrow", "Righteous", "Risque", "Roboto", "Roboto Condensed", "Roboto Mono", "Roboto Slab", "Rochester", "Rock Salt", "Rokkitt", "Romanesco", "Ropa Sans", "Rosario", "Rosarivo", "Rouge Script", "Rozha One", "Rubik", "Rubik Mono One", "Rubik One", "Ruda", "Rufina", "Ruge Boogie", "Ruluko", "Rum Raisin", "Ruslan Display", "Russo One", "Ruthie", "Rye", "Sacramento", "Sahitya", "Sail", "Salsa", "Sanchez", "Sancreek", "Sansita One", "Sarala", "Sarina", "Sarpanch", "Satisfy", "Scada", "Scheherazade", "Schoolbell", "Seaweed Script", "Sevillana", "Seymour One", "Shadows Into Light", "Shadows Into Light Two", "Shanti", "Share", "Share Tech", "Share Tech Mono", "Shojumaru", "Short Stack", "Siemreap", "Sigmar One", "Signika", "Signika Negative", "Simonetta", "Sintony", "Sirin Stencil", "Six Caps", "Skranji", "Slabo 13px", "Slabo 27px", "Slackey", "Smokum", "Smythe", "Sniglet", "Snippet", "Snowburst One", "Sofadi One", "Sofia", "Sonsie One", "Sorts Mill Goudy", "Source Code Pro", "Source Sans Pro", "Source Serif Pro", "Special Elite", "Spicy Rice", "Spinnaker", "Spirax", "Squada One", "Sree Krushnadevaraya", "Stalemate", "Stalinist One", "Stardos Stencil", "Stint Ultra Condensed", "Stint Ultra Expanded", "Stoke", "Strait", "Sue Ellen Francisco", "Sumana", "Sunshiney", "Supermercado One", "Sura", "Suranna", "Suravaram", "Suwannaphum", "Swanky and Moo Moo", "Syncopate", "Tangerine", "Taprom", "Tauri", "Teko", "Telex", "Tenali Ramakrishna", "Tenor Sans", "Text Me One", "The Girl Next Door", "Tienne", "Tillana", "Timmana", "Tinos", "Titan One", "Titillium Web", "Trade Winds", "Trocchi", "Trochut", "Trykker", "Tulpen One", "Ubuntu", "Ubuntu Condensed", "Ubuntu Mono", "Ultra", "Uncial Antiqua", "Underdog", "Unica One", "UnifrakturCook", "UnifrakturMaguntia", "Unkempt", "Unlock", "Unna", "VT323", "Vampiro One", "Varela", "Varela Round", "Vast Shadow", "Vesper Libre", "Vibur", "Vidaloka", "Viga", "Voces", "Volkhov", "Vollkorn", "Voltaire", "Waiting for the Sunrise", "Wallpoet", "Walter Turncoat", "Warnes", "Wellfleet", "Wendy One", "Wire One", "Work Sans", "Yanone Kaffeesatz", "Yantramanav", "Yellowtail", "Yeseva One", "Yesteryear", "Zeyada"];
}).call(undefined);

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),

/***/ "./olms.js":
/*!*****************!*\
  !*** ./olms.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ./index */ "./index.js");

var _stylefunction = __webpack_require__(/*! ./stylefunction */ "./stylefunction.js");

var _stylefunction2 = _interopRequireDefault(_stylefunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var olms = {
  apply: _index.apply,
  applyBackground: _index.applyBackground,
  applyStyle: _index.applyStyle,
  stylefunction: _stylefunction2.default
};
if (window) {
  window.olms = olms;
}
exports.default = olms;

/***/ }),

/***/ "./stylefunction.js":
/*!**************************!*\
  !*** ./stylefunction.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getValue = getValue;

exports.default = function (olLayer, glStyle, source, resolutions, spriteData, spriteImageUrl, spriteImage, fonts) {
  if (!resolutions) {
    resolutions = [];
    for (var res = 78271.51696402048; resolutions.length < 21; res /= 2) {
      resolutions.push(res);
    }
  }
  if (typeof glStyle == 'string') {
    glStyle = JSON.parse(glStyle);
  }
  if (glStyle.version != 8) {
    throw new Error('glStyle version 8 required.');
  }

  var spriteImgSize = void 0;
  if (spriteImageUrl && !spriteImage) {
    var img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = function () {
      spriteImage = img;
      spriteImgSize = [img.width, img.height];
      olLayer.changed();
    };
    img.src = spriteImageUrl;
  }

  var ctx = document.createElement('CANVAS').getContext('2d');
  var measureCache = {};

  function wrapText(text, font, em) {
    var key = em + ',' + font + ',' + text;
    var wrappedText = measureCache[key];
    if (!wrappedText) {
      ctx.font = font;
      var oneEm = ctx.measureText('M').width;
      var width = oneEm * em;
      var words = text.split(' ');
      var line = '';
      var lines = [];
      for (var i = 0, ii = words.length; i < ii; ++i) {
        var word = words[i];
        if (ctx.measureText(line + word).width <= width) {
          line += (line ? ' ' : '') + word;
        } else {
          if (line) {
            lines.push(line);
          }
          line = word;
        }
      }
      if (line) {
        lines.push(line);
      }
      measureCache[key] = wrappedText = lines.join('\n');
    }
    return wrappedText;
  }

  var allLayers = (0, _mapboxGlStyleSpec.derefLayers)(glStyle.layers);

  var layersBySourceLayer = {};
  var mapboxLayers = [];
  var mapboxSource = void 0;
  for (var i = 0, ii = allLayers.length; i < ii; ++i) {
    var layer = allLayers[i];
    var layerId = layer.id;
    if (typeof source == 'string' && layer.source == source || source.indexOf(layerId) !== -1) {
      var sourceLayer = layer['source-layer'];
      if (!mapboxSource) {
        mapboxSource = layer.source;
      }
      var layers = layersBySourceLayer[sourceLayer];
      if (!layers) {
        layers = layersBySourceLayer[sourceLayer] = [];
      }
      layers.push({
        layer: layer,
        index: i
      });
      mapboxLayers.push(layerId);
    }
    // // TODO revisit when diffing gets added
    delete functionCache[layerId];
    delete filterCache[layerId];
  }
  var iconImageCache = {};

  var styles = [];
  var patternCache = {};

  var styleFunction = function styleFunction(feature, resolution) {
    var properties = feature.getProperties();
    feature.styleIds = feature.styleIds || {};
    var layers = layersBySourceLayer[properties.layer];
    if (!layers) {
      return;
    }
    var zoom = resolutions.indexOf(resolution);
    if (zoom == -1) {
      zoom = Math.round((0, _util.getZoomForResolution)(resolution, resolutions));
    }
    var type = types[feature.getGeometry().getType()];
    var f = {
      properties: properties,
      type: type
    };
    var stylesLength = -1;
    for (var _i = 0, _ii = layers.length; _i < _ii; ++_i) {
      var layerData = layers[_i];
      var _layer = layerData.layer;
      var _layerId = _layer.id;

      var layout = _layer.layout || emptyObj;
      var paint = _layer.paint || emptyObj;
      if (layout.visibility === 'none' || 'minzoom' in _layer && zoom < _layer.minzoom || 'maxzoom' in _layer && zoom >= _layer.maxzoom) {
        continue;
      }
      feature.styleIds[zoom] = feature.styleIds[zoom] || [];
      var filter = _layer.filter;
      var icon = void 0,
          iconImg = void 0;
      if (!filter || evaluateFilter(_layerId, filter, f, zoom)) {
        var color = void 0,
            opacity = void 0,
            fill = void 0,
            stroke = void 0,
            strokeColor = void 0,
            style = void 0;
        var index = layerData.index;
        if (type == 3 && _layer.type == 'fill') {
          opacity = getValue(_layer, 'paint', 'fill-opacity', zoom, f);
          if ('fill-pattern' in paint) {
            var iconImage = getValue(_layer, 'paint', 'fill-pattern', zoom, f);
            if (iconImage) {
              icon = typeof iconImage === 'string' ? fromTemplate(iconImage, properties) : iconImage.toString();
              if (spriteImage && spriteData && spriteData[icon]) {
                ++stylesLength;
                if (feature.styleIds[zoom].indexOf(_layerId) === -1) {
                  feature.styleIds[zoom].push(_layerId);
                }
                style = styles[stylesLength];
                if (!style || !style.getFill() || style.getStroke() || style.getText()) {
                  style = styles[stylesLength] = new _Style2.default({
                    fill: new _Fill2.default()
                  });
                }
                fill = style.getFill();
                style.setZIndex(index);
                var icon_cache_key = icon + '.' + opacity;
                var pattern = patternCache[icon_cache_key];
                if (!pattern) {
                  var spriteImageData = spriteData[icon];
                  var canvas = document.createElement('canvas');
                  canvas.width = spriteImageData.width;
                  canvas.height = spriteImageData.height;
                  var _ctx = canvas.getContext('2d');
                  _ctx.globalAlpha = opacity;
                  _ctx.drawImage(spriteImage, spriteImageData.x, spriteImageData.y, spriteImageData.width, spriteImageData.height, 0, 0, spriteImageData.width, spriteImageData.height);
                  pattern = _ctx.createPattern(canvas, 'repeat');
                  patternCache[icon_cache_key] = pattern;
                }
                fill.setColor(pattern);
              }
            }
          } else if ('fill-color' in paint) {
            color = colorWithOpacity(getValue(_layer, 'paint', 'fill-color', zoom, f), opacity);
            if (color) {
              ++stylesLength;
              if (feature.styleIds[zoom].indexOf(_layerId) === -1) {
                feature.styleIds[zoom].push(_layerId);
              }
              style = styles[stylesLength];
              if (!style || !style.getFill() || style.getStroke() || style.getText()) {
                style = styles[stylesLength] = new _Style2.default({
                  fill: new _Fill2.default()
                });
              }
              fill = style.getFill();
              fill.setColor(color);
              style.setZIndex(index);
            }
            if ('fill-outline-color' in paint) {
              strokeColor = colorWithOpacity(getValue(_layer, 'paint', 'fill-outline-color', zoom, properties), opacity);
            } else if ('fill-antialias' in paint) {
              strokeColor = color;
            }
            if (strokeColor) {
              ++stylesLength;
              if (feature.styleIds[zoom].indexOf(_layerId) === -1) {
                feature.styleIds[zoom].push(_layerId);
              }
              style = styles[stylesLength];
              if (!style || !style.getStroke() || style.getFill() || style.getText()) {
                style = styles[stylesLength] = new _Style2.default({
                  stroke: new _Stroke2.default()
                });
              }
              stroke = style.getStroke();
              stroke.setColor(strokeColor);
              stroke.setWidth(1);
              style.setZIndex(index);
            }
          }
        }
        if (type != 1 && _layer.type == 'line') {
          (function () {
            color = !('line-pattern' in paint) && 'line-color' in paint ? colorWithOpacity(getValue(_layer, 'paint', 'line-color', zoom, f), getValue(_layer, 'paint', 'line-opacity', zoom, f)) : undefined;
            var width = getValue(_layer, 'paint', 'line-width', zoom, f);
            if (color && width > 0) {
              ++stylesLength;
              if (feature.styleIds[zoom].indexOf(_layerId) === -1) {
                feature.styleIds[zoom].push(_layerId);
              }
              style = styles[stylesLength];
              if (!style || !style.getStroke() || style.getFill() || style.getText()) {
                style = styles[stylesLength] = new _Style2.default({
                  stroke: new _Stroke2.default()
                });
              }
              stroke = style.getStroke();
              stroke.setLineCap(getValue(_layer, 'layout', 'line-cap', zoom, f));
              stroke.setLineJoin(getValue(_layer, 'layout', 'line-join', zoom, f));
              stroke.setMiterLimit(getValue(_layer, 'layout', 'line-miter-limit', zoom, f));
              stroke.setColor(color);
              stroke.setWidth(width);
              stroke.setLineDash(paint['line-dasharray'] ? getValue(_layer, 'paint', 'line-dasharray', zoom, f).map(function (x) {
                return x * width;
              }) : null);
              style.setZIndex(index);
            }
          })();
        }

        var hasImage = false;
        var text = null;
        var skipLabel = void 0;
        if ((type == 1 || type == 2) && 'icon-image' in layout) {
          var _iconImage = getValue(_layer, 'layout', 'icon-image', zoom, f);
          if (_iconImage) {
            icon = typeof _iconImage === 'string' ? fromTemplate(_iconImage, properties) : _iconImage.toString();
            var styleGeom = undefined;
            if (spriteImage && spriteData && spriteData[icon]) {
              if (type == 2) {
                var geom = feature.getGeometry();
                // ol package and ol-debug.js only
                if (geom.getFlatMidpoint) {
                  var extent = geom.getExtent();
                  var size = Math.sqrt(Math.max(Math.pow((extent[2] - extent[0]) / resolution, 2), Math.pow((extent[3] - extent[1]) / resolution, 2)));
                  if (size > 150) {
                    //FIXME Do not hard-code a size of 150
                    styleGeom = new _Point2.default(geom.getFlatMidpoint());
                  }
                }
              }
              if (type !== 2 || styleGeom) {
                ++stylesLength;
                if (feature.styleIds[zoom].indexOf(_layerId) === -1) {
                  feature.styleIds[zoom].push(_layerId);
                }
                style = styles[stylesLength];
                if (!style || !style.getImage() || style.getFill() || style.getStroke()) {
                  style = styles[stylesLength] = new _Style2.default();
                }
                style.setGeometry(styleGeom);
                var iconSize = getValue(_layer, 'layout', 'icon-size', zoom, f);
                var iconColor = paint['icon-color'] !== undefined ? getValue(_layer, 'paint', 'icon-color', zoom, f) : null;
                var iconTranslate = getValue(_layer, 'paint', 'icon-translate', zoom, f);
                var iconTranslateAnchor = getValue(_layer, 'paint', 'icon-translate-anchor', zoom, f);
                var iconAnchorValue = getValue(_layer, 'layout', 'icon-anchor', zoom, f);
                var iconOffset = getValue(_layer, 'layout', 'icon-offset', zoom, f);

                var _covertIconAnchor = covertIconAnchor(iconAnchorValue),
                    anchorOffset = _covertIconAnchor.anchorOffset,
                    _covertIconAnchor$ico = _covertIconAnchor.iconAnchor,
                    iconAnchor = _covertIconAnchor$ico === undefined ? iconAnchorValue : _covertIconAnchor$ico;

                var _icon_cache_key = icon + '.' + iconSize + '.' + iconTranslate + '.' + iconTranslateAnchor + '.' + iconAnchor + '.' + iconOffset + '.' + anchorOffset;
                if (iconColor !== null) {
                  _icon_cache_key += '.' + iconColor;
                }
                iconImg = iconImageCache[_icon_cache_key];
                if (!iconImg) {
                  var _spriteImageData = spriteData[icon];
                  var _canvas = document.createElement('canvas');
                  _canvas.width = _spriteImageData.width;
                  _canvas.height = _spriteImageData.height;
                  var _ctx2 = _canvas.getContext('2d');
                  _ctx2.drawImage(spriteImage, _spriteImageData.x, _spriteImageData.y, _spriteImageData.width, _spriteImageData.height, 0, 0, _spriteImageData.width, _spriteImageData.height);
                  var data = _ctx2.getImageData(0, 0, _canvas.width, _canvas.height);
                  if (iconColor !== null) {
                    // cut out the sprite and color it
                    color = colorWithOpacity(iconColor, 1);
                    for (var c = 0, cc = data.data.length; c < cc; c += 4) {
                      data.data[c] = color[0];
                      data.data[c + 1] = color[1];
                      data.data[c + 2] = color[2];
                    }
                  }
                  _ctx2.putImageData(data, 0, 0);
                  var translateOffset = [iconTranslate[0] / _spriteImageData.width, iconTranslate[1] / _spriteImageData.height];
                  iconImg = iconImageCache[_icon_cache_key] = new _Icon2.default({
                    img: _canvas,
                    anchorOrigin: iconAnchor,
                    anchor: [iconOffset[0] + anchorOffset[0] + translateOffset[0], iconOffset[1] + anchorOffset[1] - translateOffset[1]],
                    imgSize: [_canvas.width, _canvas.height],
                    scale: iconSize / _spriteImageData.pixelRatio
                  });
                }
                var rotateValue = getValue(_layer, 'layout', 'icon-rotate', zoom, f);
                if (rotateValue.indexOf && rotateValue.indexOf('{') === 0) {
                  rotateValue = 360 - fromTemplate(rotateValue, properties);
                }
                iconImg.setRotation((0, _util.deg2rad)(rotateValue));
                iconImg.setOpacity(getValue(_layer, 'paint', 'icon-opacity', zoom, f));
                style.setImage(iconImg);
                text = style.getText();
                style.setText(undefined);
                style.setZIndex(99999 - index);
                hasImage = true;
                skipLabel = false;
              } else {
                skipLabel = true;
              }
            }
          }
        }

        if (type == 1 && 'circle-radius' in paint) {
          ++stylesLength;
          if (feature.styleIds[zoom].indexOf(_layerId) === -1) {
            feature.styleIds[zoom].push(_layerId);
          }
          style = styles[stylesLength];
          if (!style || !style.getImage() || style.getFill() || style.getStroke()) {
            style = styles[stylesLength] = new _Style2.default();
          }
          var circleRadius = getValue(_layer, 'paint', 'circle-radius', zoom, f);
          var circleStrokeColor = getValue(_layer, 'paint', 'circle-stroke-color', zoom, f);
          var circleColor = getValue(_layer, 'paint', 'circle-color', zoom, f);
          var circleOpacity = getValue(_layer, 'paint', 'circle-opacity', zoom, f);
          var circleStrokeWidth = getValue(_layer, 'paint', 'circle-stroke-width', zoom, f);
          var circleStrokeOpacity = getValue(_layer, 'paint', 'circle-stroke-opacity', zoom, f);
          var cache_key = circleRadius + '.' + circleStrokeColor + '.' + circleColor + '.' + circleOpacity + '.' + circleStrokeWidth + '.' + circleStrokeOpacity;
          iconImg = iconImageCache[cache_key];
          if (!iconImg) {
            iconImg = new _Circle2.default({
              radius: circleRadius,
              stroke: circleStrokeWidth === 0 ? undefined : new _Stroke2.default({
                width: circleStrokeWidth,
                color: colorWithOpacity(circleStrokeColor, circleStrokeOpacity)
              }),
              fill: new _Fill2.default({
                color: colorWithOpacity(circleColor, circleOpacity)
              })
            });
          }
          style.setImage(iconImg);
          text = style.getText();
          style.setText(undefined);
          style.setGeometry(undefined);
          style.setZIndex(99999 - index);
          hasImage = true;
        }

        var label = void 0;
        if ('text-field' in layout) {
          var textField = getValue(_layer, 'layout', 'text-field', zoom, f);
          label = fromTemplate(textField, properties);
        }
        if (label && !skipLabel) {
          if (!hasImage) {
            ++stylesLength;
            if (feature.styleIds[zoom].indexOf(_layerId) === -1) {
              feature.styleIds[zoom].push(_layerId);
            }
            style = styles[stylesLength];
            if (!style || !style.getText() || style.getFill() || style.getStroke()) {
              style = styles[stylesLength] = new _Style2.default();
            }
            style.setImage(undefined);
            style.setGeometry(undefined);
          }
          if (!style.getText()) {
            style.setText(text || new _Text2.default());
          }
          text = style.getText();
          var textSize = getValue(_layer, 'layout', 'text-size', zoom, f);
          var textLineHeight = getValue(_layer, 'layout', 'text-line-height', zoom, f);
          var font = (0, _mapboxToCssFont2.default)(chooseFont(getValue(_layer, 'layout', 'text-font', zoom, f)), textSize);
          var textTransform = layout['text-transform'];
          if (textTransform == 'uppercase') {
            label = label.toUpperCase();
          } else if (textTransform == 'lowercase') {
            label = label.toLowerCase();
          }
          var wrappedLabel = type == 2 ? label : wrapText(label, font, getValue(_layer, 'layout', 'text-max-width', zoom, f));
          text.setText(wrappedLabel);
          text.setFont(font);
          text.setRotation((0, _util.deg2rad)(getValue(_layer, 'layout', 'text-rotate', zoom, f)));
          var textAnchor = getValue(_layer, 'layout', 'text-anchor', zoom, f);
          var placement = hasImage || type == 1 ? 'point' : getValue(_layer, 'layout', 'symbol-placement', zoom, f);
          text.setPlacement(placement);
          var textHaloWidth = getValue(_layer, 'paint', 'text-halo-width', zoom, f);
          var textOffset = getValue(_layer, 'layout', 'text-offset', zoom, f);
          var textTranslate = getValue(_layer, 'paint', 'text-translate', zoom, f);
          var vOffset = 0;
          var hOffset = 0;
          var textAlign = 'center';
          if (textAnchor.indexOf('left') !== -1) {
            textAlign = 'left';
            hOffset = textHaloWidth;
          } else if (textAnchor.indexOf('right') !== -1) {
            textAlign = 'right';
            hOffset = -textHaloWidth;
          }
          if (placement == 'point') {
            text.setTextAlign(textAlign);
          } else {
            text.setMaxAngle((0, _util.deg2rad)(getValue(_layer, 'layout', 'text-max-angle', zoom, f)) * label.length / wrappedLabel.length);
            text.setTextAlign();
          }
          var textBaseline = 'middle';
          if (textAnchor.indexOf('bottom') == 0) {
            textBaseline = 'bottom';
            vOffset = -textHaloWidth - 0.5 * (textLineHeight - 1) * textSize;
          } else if (textAnchor.indexOf('top') == 0) {
            textBaseline = 'top';
            vOffset = textHaloWidth + 0.5 * (textLineHeight - 1) * textSize;
          }
          text.setTextBaseline(textBaseline);
          text.setOffsetX(textOffset[0] * textSize + hOffset + textTranslate[0]);
          text.setOffsetY(textOffset[1] * textSize + vOffset + textTranslate[1]);
          opacity = getValue(_layer, 'paint', 'text-opacity', zoom, f);
          var textColor = new _Fill2.default();

          textColor.setColor(colorWithOpacity(getValue(_layer, 'paint', 'text-color', zoom, f), opacity));
          text.setFill(textColor);
          var haloColor = colorWithOpacity(getValue(_layer, 'paint', 'text-halo-color', zoom, f), opacity);
          if (haloColor) {
            var textHalo = new _Stroke2.default();
            textHalo.setColor(haloColor);
            textHalo.setWidth(getValue(_layer, 'paint', 'text-halo-width', zoom, f));
            text.setStroke(textHalo);
          } else {
            text.setStroke(undefined);
          }
          style.setZIndex(99999 - index);
        }
      }
    }

    if (stylesLength > -1) {
      styles.length = stylesLength + 1;
      return styles;
    }
  };

  olLayer.setStyle(styleFunction);
  olLayer.set('mapbox-source', mapboxSource);
  olLayer.set('mapbox-layers', mapboxLayers);
  return styleFunction;
};

var _Style = __webpack_require__(/*! ol/style/Style */ "ol/style/Style");

var _Style2 = _interopRequireDefault(_Style);

var _Fill = __webpack_require__(/*! ol/style/Fill */ "ol/style/Fill");

var _Fill2 = _interopRequireDefault(_Fill);

var _Stroke = __webpack_require__(/*! ol/style/Stroke */ "ol/style/Stroke");

var _Stroke2 = _interopRequireDefault(_Stroke);

var _Icon = __webpack_require__(/*! ol/style/Icon */ "ol/style/Icon");

var _Icon2 = _interopRequireDefault(_Icon);

var _Text = __webpack_require__(/*! ol/style/Text */ "ol/style/Text");

var _Text2 = _interopRequireDefault(_Text);

var _Circle = __webpack_require__(/*! ol/style/Circle */ "ol/style/Circle");

var _Circle2 = _interopRequireDefault(_Circle);

var _Point = __webpack_require__(/*! ol/geom/Point */ "ol/geom/Point");

var _Point2 = _interopRequireDefault(_Point);

var _mapboxGlStyleSpec = __webpack_require__(/*! @mapbox/mapbox-gl-style-spec */ "./node_modules/@mapbox/mapbox-gl-style-spec/dist/index.es.js");

var _mapboxToCssFont = __webpack_require__(/*! mapbox-to-css-font */ "./node_modules/mapbox-to-css-font/index.js");

var _mapboxToCssFont2 = _interopRequireDefault(_mapboxToCssFont);

var _util = __webpack_require__(/*! ./util */ "./util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isFunction = _mapboxGlStyleSpec.function.isFunction; /*
                                                         ol-mapbox-style - Use Mapbox Style objects with OpenLayers
                                                         Copyright 2016-present Boundless Spatial, Inc.
                                                         License: https://raw.githubusercontent.com/boundlessgeo/ol-mapbox-gl-style/master/LICENSE
                                                         */

var convertFunction = _mapboxGlStyleSpec.function.convertFunction;
var isExpression = _mapboxGlStyleSpec.expression.isExpression;
var createPropertyExpression = _mapboxGlStyleSpec.expression.createPropertyExpression;

var types = {
  'Point': 1,
  'MultiPoint': 1,
  'LineString': 2,
  'MultiLineString': 2,
  'Polygon': 3,
  'MultiPolygon': 3
};
var expressionData = function expressionData(rawExpression, propertySpec) {
  var compiledExpression = createPropertyExpression(rawExpression, propertySpec);
  if (compiledExpression.result === 'error') {
    throw new Error(compiledExpression.value.map(function (err) {
      return err.key + ': ' + err.message;
    }).join(', '));
  }
  return compiledExpression.value;
};

var emptyObj = {};
var zoomObj = { zoom: 0 };
var functionCache = {};

/**
 * @private
 * @param {Object} layer Gl object layer.
 * @param {string} layoutOrPaint 'layout' or 'paint'.
 * @param {string} property Feature property.
 * @param {number} zoom Zoom.
 * @param {Object} feature Gl feature.
 * @return {?} Value.
 */
function getValue(layer, layoutOrPaint, property, zoom, feature) {
  var layerId = layer.id;
  if (!functionCache[layerId]) {
    functionCache[layerId] = {};
  }
  var functions = functionCache[layerId];
  if (!functions[property]) {
    var value = (layer[layoutOrPaint] || emptyObj)[property];
    var propertySpec = _mapboxGlStyleSpec.latest[layoutOrPaint + '_' + layer.type][property];
    if (value === undefined) {
      value = propertySpec.default;
    }
    var isExpr = isExpression(value);
    if (!isExpr && isFunction(value)) {
      value = convertFunction(value, propertySpec);
      isExpr = true;
    }
    if (isExpr) {
      var compiledExpression = expressionData(value, propertySpec);
      functions[property] = compiledExpression.evaluate.bind(compiledExpression);
    } else {
      if (propertySpec.type == 'color') {
        value = _mapboxGlStyleSpec.Color.parse(value);
      }
      functions[property] = function () {
        return value;
      };
    }
  }
  zoomObj.zoom = zoom;
  return functions[property](zoomObj, feature);
}

function covertIconAnchor(iconAnchor) {
  var anchorOffset = [0.5, 0.5];
  if (['top-left', 'top-right', 'bottom-left', 'bottom-right'].indexOf(iconAnchor) > -1) {
    anchorOffset = [0, 0];
  }
  if (iconAnchor === 'left') {
    iconAnchor = 'top-left';
    anchorOffset = [0, 0.5];
  }
  if (iconAnchor === 'right') {
    iconAnchor = 'top-left';
    anchorOffset = [1, 0.5];
  }
  if (iconAnchor === 'bottom') {
    iconAnchor = 'top-left';
    anchorOffset = [0.5, 1];
  }
  if (iconAnchor === 'top') {
    iconAnchor = 'top-left';
    anchorOffset = [0.5, 0];
  }
  //center
  return {
    anchorOffset: anchorOffset,
    iconAnchor: iconAnchor
  };
}

var fontMap = {};

function chooseFont(fonts, availableFonts) {
  if (fontMap[fonts]) {
    return fontMap[fonts];
  }
  if (availableFonts) {
    for (var i = 0, ii = fonts.length; i < ii; ++i) {
      var font = fonts[i];
      if (availableFonts.indexOf(font) != -1) {
        fontMap[fonts] = font;
        break;
      }
    }
    if (!fontMap[fonts]) {
      // fallback font
      fontMap[fonts] = fonts[fonts.length - 1];
    }
  } else {
    fontMap[fonts] = fonts[0];
  }
  return fontMap[fonts];
}

var filterCache = {};

function evaluateFilter(layerId, filter, feature, zoom) {
  if (!(layerId in filterCache)) {
    filterCache[layerId] = (0, _mapboxGlStyleSpec.featureFilter)(filter).filter;
  }
  zoomObj.zoom = zoom;
  return filterCache[layerId](zoomObj, feature);
}

function colorWithOpacity(color, opacity) {
  if (color) {
    if (color.a === 0 || opacity === 0) {
      return undefined;
    }
    var a = color.a;
    opacity = opacity === undefined ? 1 : opacity;
    return 'rgba(' + Math.round(color.r * 255 / a) + ',' + Math.round(color.g * 255 / a) + ',' + Math.round(color.b * 255 / a) + ',' + a * opacity + ')';
  }
  return color;
}

var templateRegEx = /^([^]*)\{(.*)\}([^]*)$/;

function fromTemplate(text, properties) {
  var parts = void 0;
  do {
    parts = text.match(templateRegEx);
    if (parts) {
      var value = properties[parts[2]] || '';
      text = parts[1] + value + parts[3];
    }
  } while (parts);
  return text;
}

/**
 * Creates a style function from the `glStyle` object for all layers that use
 * the specified `source`, which needs to be a `"type": "vector"` or
 * `"type": "geojson"` source and applies it to the specified OpenLayers layer.
 *
 * @param {ol.layer.Vector|ol.layer.VectorTile} olLayer OpenLayers layer to
 * apply the style to. In addition to the style, the layer will get two
 * properties: `mapbox-source` will be the `id` of the `glStyle`'s source used
 * for the layer, and `mapbox-layers` will be an array of the `id`s of the
 * `glStyle`'s layers.
 * @param {string|Object} glStyle Mapbox Style object.
 * @param {string|Array<string>} source `source` key or an array of layer `id`s
 * from the Mapbox Style object. When a `source` key is provided, all layers for
 * the specified source will be included in the style function. When layer `id`s
 * are provided, they must be from layers that use the same source.
 * @param {Array<number>} [resolutions=[78271.51696402048, 39135.75848201024,
 * 19567.87924100512, 9783.93962050256, 4891.96981025128, 2445.98490512564,
 * 1222.99245256282, 611.49622628141, 305.748113140705, 152.8740565703525,
 * 76.43702828517625, 38.21851414258813, 19.109257071294063, 9.554628535647032,
 * 4.777314267823516, 2.388657133911758, 1.194328566955879, 0.5971642834779395,
 * 0.29858214173896974, 0.14929107086948487, 0.07464553543474244]]
 * Resolutions for mapping resolution to zoom level.
 * @param {Object} [spriteData=undefined] Sprite data from the url specified in
 * the Mapbox Style object's `sprite` property. Only required if a `sprite`
 * property is specified in the Mapbox Style object.
 * @param {Object} [spriteImageUrl=undefined] Sprite image url for the sprite
 * specified in the Mapbox Style object's `sprite` property. Only required if a
 * `sprite` property is specified in the Mapbox Style object.
 * @param {Array<string>} [fonts=undefined] Array of available fonts, using the
 * same font names as the Mapbox Style object. If not provided, the style
 * function will always use the first font from the font array.
 * @return {ol.style.StyleFunction} Style function for use in
 * `ol.layer.Vector` or `ol.layer.VectorTile`.
 */

/***/ }),

/***/ "./util.js":
/*!*****************!*\
  !*** ./util.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deg2rad = deg2rad;
exports.getZoomForResolution = getZoomForResolution;
function deg2rad(degrees) {
  return degrees * Math.PI / 180;
}

function getZoomForResolution(resolution, resolutions) {
  var i = 0;
  var ii = resolutions.length;
  for (; i < ii; ++i) {
    var candidate = resolutions[i];
    if (candidate < resolution && i + 1 < ii) {
      var zoomFactor = resolutions[i] / resolutions[i + 1];
      return i + Math.log(resolutions[i] / resolution) / Math.log(zoomFactor);
    }
  }
  return ii - 1;
}

/***/ }),

/***/ "ol/Map":
/*!**********************************************************************************************!*\
  !*** external {"root":["ol","Map"],"commonjs":"ol/Map","commonjs2":"ol/Map","amd":"ol/Map"} ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ol_Map__;

/***/ }),

/***/ "ol/Observable":
/*!**************************************************************************************************************************!*\
  !*** external {"root":["ol","Observable"],"commonjs":"ol/Observable","commonjs2":"ol/Observable","amd":"ol/Observable"} ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ol_Observable__;

/***/ }),

/***/ "ol/format/GeoJSON":
/*!********************************************************************************************************************************************!*\
  !*** external {"root":["ol","format","GeoJSON"],"commonjs":"ol/format/GeoJSON","commonjs2":"ol/format/GeoJSON","amd":"ol/format/GeoJSON"} ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ol_format_GeoJSON__;

/***/ }),

/***/ "ol/format/MVT":
/*!****************************************************************************************************************************!*\
  !*** external {"root":["ol","format","MVT"],"commonjs":"ol/format/MVT","commonjs2":"ol/format/MVT","amd":"ol/format/MVT"} ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ol_format_MVT__;

/***/ }),

/***/ "ol/geom/Point":
/*!****************************************************************************************************************************!*\
  !*** external {"root":["ol","geom","Point"],"commonjs":"ol/geom/Point","commonjs2":"ol/geom/Point","amd":"ol/geom/Point"} ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ol_geom_Point__;

/***/ }),

/***/ "ol/layer/Tile":
/*!****************************************************************************************************************************!*\
  !*** external {"root":["ol","layer","Tile"],"commonjs":"ol/layer/Tile","commonjs2":"ol/layer/Tile","amd":"ol/layer/Tile"} ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ol_layer_Tile__;

/***/ }),

/***/ "ol/layer/Vector":
/*!************************************************************************************************************************************!*\
  !*** external {"root":["ol","layer","Vector"],"commonjs":"ol/layer/Vector","commonjs2":"ol/layer/Vector","amd":"ol/layer/Vector"} ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ol_layer_Vector__;

/***/ }),

/***/ "ol/layer/VectorTile":
/*!****************************************************************************************************************************************************!*\
  !*** external {"root":["ol","layer","VectorTile"],"commonjs":"ol/layer/VectorTile","commonjs2":"ol/layer/VectorTile","amd":"ol/layer/VectorTile"} ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ol_layer_VectorTile__;

/***/ }),

/***/ "ol/proj":
/*!**************************************************************************************************!*\
  !*** external {"root":["ol","proj"],"commonjs":"ol/proj","commonjs2":"ol/proj","amd":"ol/proj"} ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ol_proj__;

/***/ }),

/***/ "ol/source/TileJSON":
/*!************************************************************************************************************************************************!*\
  !*** external {"root":["ol","source","TileJSON"],"commonjs":"ol/source/TileJSON","commonjs2":"ol/source/TileJSON","amd":"ol/source/TileJSON"} ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ol_source_TileJSON__;

/***/ }),

/***/ "ol/source/Vector":
/*!****************************************************************************************************************************************!*\
  !*** external {"root":["ol","source","Vector"],"commonjs":"ol/source/Vector","commonjs2":"ol/source/Vector","amd":"ol/source/Vector"} ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ol_source_Vector__;

/***/ }),

/***/ "ol/source/VectorTile":
/*!********************************************************************************************************************************************************!*\
  !*** external {"root":["ol","source","VectorTile"],"commonjs":"ol/source/VectorTile","commonjs2":"ol/source/VectorTile","amd":"ol/source/VectorTile"} ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ol_source_VectorTile__;

/***/ }),

/***/ "ol/style/Circle":
/*!************************************************************************************************************************************!*\
  !*** external {"root":["ol","style","Circle"],"commonjs":"ol/style/Circle","commonjs2":"ol/style/Circle","amd":"ol/style/Circle"} ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ol_style_Circle__;

/***/ }),

/***/ "ol/style/Fill":
/*!****************************************************************************************************************************!*\
  !*** external {"root":["ol","style","Fill"],"commonjs":"ol/style/Fill","commonjs2":"ol/style/Fill","amd":"ol/style/Fill"} ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ol_style_Fill__;

/***/ }),

/***/ "ol/style/Icon":
/*!****************************************************************************************************************************!*\
  !*** external {"root":["ol","style","Icon"],"commonjs":"ol/style/Icon","commonjs2":"ol/style/Icon","amd":"ol/style/Icon"} ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ol_style_Icon__;

/***/ }),

/***/ "ol/style/Stroke":
/*!************************************************************************************************************************************!*\
  !*** external {"root":["ol","style","Stroke"],"commonjs":"ol/style/Stroke","commonjs2":"ol/style/Stroke","amd":"ol/style/Stroke"} ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ol_style_Stroke__;

/***/ }),

/***/ "ol/style/Style":
/*!********************************************************************************************************************************!*\
  !*** external {"root":["ol","style","Style"],"commonjs":"ol/style/Style","commonjs2":"ol/style/Style","amd":"ol/style/Style"} ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ol_style_Style__;

/***/ }),

/***/ "ol/style/Text":
/*!****************************************************************************************************************************!*\
  !*** external {"root":["ol","style","Text"],"commonjs":"ol/style/Text","commonjs2":"ol/style/Text","amd":"ol/style/Text"} ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ol_style_Text__;

/***/ }),

/***/ "ol/tilegrid":
/*!******************************************************************************************************************!*\
  !*** external {"root":["ol","tilegrid"],"commonjs":"ol/tilegrid","commonjs2":"ol/tilegrid","amd":"ol/tilegrid"} ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ol_tilegrid__;

/***/ })

/******/ })["default"];
});