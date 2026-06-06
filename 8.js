(function () {
  "use strict";
  var _0xb5031f = "_ab";
  var _0x34706e = "Melisa";
  var _0x500565 = "B8JzqPoHCr6TtATKJ70hqPFc";
  var _0x3d30a5 = {
    api: "lampac" + _0xb5031f,
    localhost: "https://akter-black.com/",
    apn: ""
  };
  var _0x4be50f = /^https:\/\/((?:[^./]+\.)?akter-black\.com)\//i;
  var _0x23e875 = Lampa.Storage.get("lampac_unic_id" + _0xb5031f, "");
  if (!_0x23e875) {
    _0x23e875 = Lampa.Utils.uid(8).toLowerCase();
    Lampa.Storage.set("lampac_unic_id" + _0xb5031f, _0x23e875);
  }
  if (!window.rch) {
    Lampa.Utils.putScript([_0x3d30a5.localhost + "invc-rch.js"], function () {}, false, function () {}, true);
  }
  function _0x59e29b() {
    this.net = new Lampa.Reguest();
    this.timeout = function (_0x457138) {
      this.net.timeout(_0x457138);
    };
    this.req = function (_0x4e7ee2, _0xa13898, _0x2e26c0, _0x7f773a, _0x48a8d1, _0x136952 = {}) {
      var _0x4cab75 = "";
      var _0x2f944a = _0xa13898.match(_0x4be50f);
      if (_0x2f944a) {
        _0x4cab75 = _0xa13898.substring(_0x2f944a[0].length).split("?");
      }
      if (_0x4cab75 && _0x4cab75[0].indexOf("http") === -1 && _0x4cab75[0] !== _0xa13898.substring(_0x2f944a ? _0x2f944a[0].length : 0)) {
        if (typeof DotNet !== "undefined" && DotNet.invokeMethodAsync) {
          DotNet.invokeMethodAsync("JinEnergy", _0x4cab75[0], _0x4cab75[1]).then(function (_0x2cf32e) {
            if (_0x136952.dataType == "text") {
              _0x2e26c0(_0x2cf32e);
            } else {
              _0x2e26c0(Lampa.Arrays.decodeJson(_0x2cf32e, {}));
            }
          }).catch(function (_0x3bb576) {
            console.log("Blazor" + _0xb5031f, "error:", _0x3bb576);
            _0x7f773a(_0x3bb576);
          });
        } else {
          console.error("Blazor" + _0xb5031f, "DotNet is not available.");
          _0x7f773a("DotNet is not available.");
        }
      } else {
        return this.net[_0x4e7ee2](_0xa13898, _0x2e26c0, _0x7f773a, _0x48a8d1, _0x136952);
      }
    };
    this.silent = function (_0x1a53b6, _0x39b24a, _0x4c5682, _0x3083af, _0x50e682 = {}) {
      this.req("silent", _0x1a53b6, _0x39b24a, _0x4c5682, _0x3083af, _0x50e682);
    };
    this.native = function (_0x18b0e9, _0x492d84, _0x4d37a0, _0x56f094, _0x7dd817 = {}) {
      this.req("native", _0x18b0e9, _0x492d84, _0x4d37a0, _0x56f094, _0x7dd817);
    };
    this.clear = function () {
      this.net.clear();
    };
  }
  var _0x4ced2d = Lampa.Reguest;
  function _0x12df94(_0x45b0db) {
    var _0x279950 = new _0x4ced2d();
    var _0x4c0ed9 = new Lampa.Scroll({
      mask: true,
      over: true
    });
    var _0x3be876 = new Lampa.Explorer(_0x45b0db);
    var _0x278f18 = new Lampa.Filter(_0x45b0db);
    var _0x7931a = {};
    var _0x3cfc11;
    var _0x1e7060;
    var _0x3a083e;
    var _0x2b4869;
    var _0x58694b;
    var _0x5b8268 = [];
    var _0xfe7dd2 = 0;
    var _0x1162e2;
    var _0x3281de = 0;
    var _0x304f0a;
    var _0x57bdec;
    var _0x1a63a2;
    var _0x258b81 = {};
    var _0x3b6cb7 = {
      season: Lampa.Lang.translate("torrent_serial_season"),
      voice: Lampa.Lang.translate("torrent_parser_voice"),
      source: Lampa.Lang.translate("settings_rest_source")
    };
    var _0x45c51b = {
      season: [],
      voice: []
    };
    var _0x35a8e3 = ["kinotochka", "kinopub", "lumex", "filmix", "filmixtv", "redheadsound", "animevost", "animego", "animedia", "animebesst", "anilibria", "rezka", "rhsprem", "kodik", "remux", "animelib", "kinoukr", "rc/filmix", "rc/fxapi", "rc/kinopub", "rc/rhs", "vcdn"];
    function _0x2ba9cd(_0x3f87cf) {
      _0x3f87cf = _0x3f87cf + "";
      if (_0x4be50f.test(_0x3f87cf)) {
        if (_0x3f87cf.indexOf("ab_token=" + _0x500565) === -1) {
          _0x3f87cf = Lampa.Utils.addUrlComponent(_0x3f87cf, "ab_token=" + _0x500565);
        }
      }
      if (_0x3f87cf.indexOf("account_email=") == -1) {
        var _0x449db7 = Lampa.Storage.get("account_email");
        if (_0x449db7) {
          _0x3f87cf = Lampa.Utils.addUrlComponent(_0x3f87cf, "account_email=" + encodeURIComponent(_0x449db7));
        }
      }
      if (_0x3f87cf.indexOf("uid=") == -1) {
        var _0x57a734 = Lampa.Storage.get("lampac_unic_id" + _0xb5031f, "");
        if (_0x57a734) {
          _0x3f87cf = Lampa.Utils.addUrlComponent(_0x3f87cf, "uid=" + encodeURIComponent(_0x57a734));
        }
      }
      var _0x136213 = Lampa.Storage.get("token");
      if (_0x136213 && !_0x4be50f.test(_0x3f87cf)) {
        if (_0x3f87cf.indexOf("ab_token=") === -1) {
          _0x3f87cf = Lampa.Utils.addUrlComponent(_0x3f87cf, "ab_token=" + _0x136213);
        }
      }
      return _0x3f87cf;
    }
    function _0x3ec34f(_0x20b7c5) {
      var _0x256e59 = _0x20b7c5.balanser;
      var _0x5053a2 = _0x20b7c5.name.split(" ")[0];
      return (_0x256e59 || _0x5053a2).toLowerCase();
    }
    function _0x3e1280(_0x4255dd) {
      var _0x2acd94 = Lampa.Utils.hash(_0x45b0db.movie.number_of_seasons ? _0x45b0db.movie.original_name : _0x45b0db.movie.original_title);
      var _0x10be27 = Lampa.Storage.get("clarification_search" + _0xb5031f, "{}");
      _0x10be27[_0x2acd94] = _0x4255dd;
      Lampa.Storage.set("clarification_search" + _0xb5031f, _0x10be27);
    }
    function _0x557fe0() {
      var _0x14239e = Lampa.Utils.hash(_0x45b0db.movie.number_of_seasons ? _0x45b0db.movie.original_name : _0x45b0db.movie.original_title);
      var _0x3fcc1c = Lampa.Storage.get("clarification_search" + _0xb5031f, "{}");
      delete _0x3fcc1c[_0x14239e];
      Lampa.Storage.set("clarification_search" + _0xb5031f, _0x3fcc1c);
    }
    function _0x15a06a() {
      var _0x4c6464 = Lampa.Utils.hash(_0x45b0db.movie.number_of_seasons ? _0x45b0db.movie.original_name : _0x45b0db.movie.original_title);
      var _0x19026b = Lampa.Storage.get("clarification_search" + _0xb5031f, "{}");
      return _0x19026b[_0x4c6464];
    }
    this.initialize = function () {
      var _0x51cf19 = this;
      this.loading(true);
      _0x278f18.onSearch = function (_0x4d9927) {
        _0x3e1280(_0x4d9927);
        var _0x47ecee = {
          search: _0x4d9927,
          clarification: true
        };
        Lampa.Activity.replace(_0x47ecee);
      };
      _0x278f18.onBack = function () {
        _0x51cf19.start();
      };
      _0x278f18.render().find(".selector").on("hover:enter", function () {
        clearInterval(_0x58694b);
      });
      _0x278f18.render().find(".filter--search").appendTo(_0x278f18.render().find(".torrent-filter"));
      _0x278f18.onSelect = function (_0xf122e6, _0x1dde7c, _0x5706c6) {
        if (_0xf122e6 == "filter") {
          if (_0x1dde7c.reset) {
            _0x557fe0();
            _0x51cf19.replaceChoice({
              season: 0,
              voice: 0,
              voice_url: "",
              voice_name: ""
            });
            setTimeout(function () {
              Lampa.Select.close();
              Lampa.Activity.replace({
                clarification: 0
              });
            }, 10);
          } else {
            var _0x53d52e = _0x45c51b[_0x1dde7c.stype][_0x5706c6.index].url;
            var _0x297d4f = _0x51cf19.getChoice();
            if (_0x1dde7c.stype == "voice") {
              _0x297d4f.voice_name = _0x45c51b.voice[_0x5706c6.index].title;
              _0x297d4f.voice_url = _0x53d52e;
            }
            _0x297d4f[_0x1dde7c.stype] = _0x5706c6.index;
            _0x51cf19.saveChoice(_0x297d4f);
            _0x51cf19.reset();
            _0x51cf19.request(_0x53d52e);
            setTimeout(Lampa.Select.close, 10);
          }
        } else if (_0xf122e6 == "sort") {
          Lampa.Select.close();
          _0x45b0db.lampac_custom_select = _0x1dde7c.source;
          _0x51cf19.changeBalanser(_0x1dde7c.source);
        }
      };
      if (_0x278f18.addButtonBack) {
        _0x278f18.addButtonBack();
      }
      _0x278f18.render().find(".filter--sort span").text(Lampa.Lang.translate("lampac_balanser" + _0xb5031f));
      _0x4c0ed9.body().addClass("torrent-list" + _0xb5031f);
      _0x3be876.appendFiles(_0x4c0ed9.render());
      _0x3be876.appendHead(_0x278f18.render());
      _0x4c0ed9.minus(_0x3be876.render().find(".explorer__files-head"));
      _0x4c0ed9.body().append(Lampa.Template.get("lampac_content_loading" + _0xb5031f));
      Lampa.Controller.enable("content");
      this.loading(false);
      this.externalids().then(function () {
        return _0x51cf19.createSource();
      }).then(function (_0x1b3183) {
        if (_0x3a083e && !_0x35a8e3.find(function (_0x40b766) {
          return _0x3a083e.slice(0, _0x40b766.length) == _0x40b766;
        })) {
          _0x278f18.render().find(".filter--search").addClass("hide");
        }
        _0x51cf19.search();
      }).catch(function (_0x2e52c5) {
        _0x51cf19.noConnectToServer(_0x2e52c5);
      });
    };
    this.rch = function (_0xbab03f, _0x51af84) {
      var _0x596ccd = this;
      var _0x29f7a7 = function _0x20109d() {
        if (_0x57bdec) {
          clearTimeout(_0x1a63a2);
          _0x57bdec.stop();
          _0x57bdec = null;
          console.log("RCH" + _0xb5031f, "hubConnection stop");
        }
        if (typeof signalR === "undefined") {
          console.error("signalR is not defined for " + _0xb5031f);
          if (_0x51af84 && typeof _0x51af84 === "function") {
            _0x51af84();
          } else if (typeof _0x596ccd.find === "function") {
            _0x596ccd.find();
          }
          return;
        }
        _0x57bdec = new signalR.HubConnectionBuilder().withUrl(_0xbab03f.ws).build();
        _0x57bdec.start().then(function () {
          if (window.rch && window.rch.Registry) {
            window.rch.Registry(_0x3d30a5.localhost, _0x57bdec, function () {
              console.log("RCH" + _0xb5031f, "hubConnection start");
              if (!_0x51af84) {
                _0x596ccd.find();
              } else {
                _0x51af84();
              }
            });
          } else {
            console.error("window.rch or window.rch.Registry is not defined for " + _0xb5031f);
            if (_0x51af84 && typeof _0x51af84 === "function") {
              _0x51af84();
            } else if (typeof _0x596ccd.find === "function") {
              _0x596ccd.find();
            }
          }
        }).catch(function (_0x180bc6) {
          console.log("RCH" + _0xb5031f, _0x180bc6.toString());
          if (_0x51af84 && typeof _0x51af84 === "function") {
            _0x51af84();
          } else if (typeof _0x596ccd.find === "function") {
            _0x596ccd.find();
          }
        });
        if (_0xbab03f.keepalive > 0) {
          _0x1a63a2 = setTimeout(function () {
            if (_0x57bdec) {
              _0x57bdec.stop();
            }
            _0x57bdec = null;
          }, _0xbab03f.keepalive * 1000);
        }
      };
      if (typeof signalR == "undefined") {
        Lampa.Utils.putScript([_0x3d30a5.localhost + "signalr-6.0.25_es5.js"], function () {}, false, function () {
          _0x29f7a7();
        }, true);
      } else {
        _0x29f7a7();
      }
    };
    this.externalids = function () {
      return new Promise(function (_0x299011, _0x386fa4) {
        if (!_0x45b0db.movie.imdb_id || !_0x45b0db.movie.kinopoisk_id) {
          var _0x1aa403 = [];
          _0x1aa403.push("id=" + _0x45b0db.movie.id);
          _0x1aa403.push("serial=" + (_0x45b0db.movie.name ? 1 : 0));
          if (_0x45b0db.movie.imdb_id) {
            _0x1aa403.push("imdb_id=" + (_0x45b0db.movie.imdb_id || ""));
          }
          if (_0x45b0db.movie.kinopoisk_id) {
            _0x1aa403.push("kinopoisk_id=" + (_0x45b0db.movie.kinopoisk_id || ""));
          }
          var _0x965f6c = _0x3d30a5.localhost + "externalids?" + _0x1aa403.join("&");
          _0x279950.timeout(10000);
          _0x279950.silent(_0x2ba9cd(_0x965f6c), function (_0x3aabc5) {
            for (var _0x32adc5 in _0x3aabc5) {
              _0x45b0db.movie[_0x32adc5] = _0x3aabc5[_0x32adc5];
            }
            _0x299011();
          }, function () {
            _0x299011();
          });
        } else {
          _0x299011();
        }
      });
    };
    this.updateBalanser = function (_0x5a2c84) {
      var _0x1260d8 = Lampa.Storage.cache("online_last_balanser" + _0xb5031f, 3000, {});
      _0x1260d8[_0x45b0db.movie.id] = _0x5a2c84;
      Lampa.Storage.set("online_last_balanser" + _0xb5031f, _0x1260d8);
    };
    this.changeBalanser = function (_0x5b91e7) {
      this.updateBalanser(_0x5b91e7);
      Lampa.Storage.set("online_balanser" + _0xb5031f, _0x5b91e7);
      var _0x130029 = this.getChoice(_0x5b91e7);
      var _0x120658 = this.getChoice();
      if (_0x120658.voice_name) {
        _0x130029.voice_name = _0x120658.voice_name;
      }
      this.saveChoice(_0x130029, _0x5b91e7);
      Lampa.Activity.replace();
    };
    this.requestParams = function (_0x16d589) {
      var _0x5245fc = [];
      var _0x45380f = _0x45b0db.movie.source || "tmdb";
      _0x5245fc.push("id=" + _0x45b0db.movie.id);
      if (_0x45b0db.movie.imdb_id) {
        _0x5245fc.push("imdb_id=" + (_0x45b0db.movie.imdb_id || ""));
      }
      if (_0x45b0db.movie.kinopoisk_id) {
        _0x5245fc.push("kinopoisk_id=" + (_0x45b0db.movie.kinopoisk_id || ""));
      }
      _0x5245fc.push("title=" + encodeURIComponent(_0x45b0db.clarification ? _0x45b0db.search : _0x45b0db.movie.title || _0x45b0db.movie.name));
      _0x5245fc.push("original_title=" + encodeURIComponent(_0x45b0db.movie.original_title || _0x45b0db.movie.original_name));
      _0x5245fc.push("serial=" + (_0x45b0db.movie.name ? 1 : 0));
      _0x5245fc.push("original_language=" + (_0x45b0db.movie.original_language || ""));
      _0x5245fc.push("year=" + ((_0x45b0db.movie.release_date || _0x45b0db.movie.first_air_date || "0000") + "").slice(0, 4));
      _0x5245fc.push("source=" + _0x45380f);
      _0x5245fc.push("rchtype=" + (window.rch ? window.rch.type : ""));
      _0x5245fc.push("clarification=" + (_0x45b0db.clarification ? 1 : 0));
      if (Lampa.Storage.get("account_email", "")) {
        _0x5245fc.push("cub_id=" + Lampa.Utils.hash(Lampa.Storage.get("account_email", "")));
      }
      return _0x16d589 + (_0x16d589.indexOf("?") >= 0 ? "&" : "?") + _0x5245fc.join("&");
    };
    this.getLastChoiceBalanser = function () {
      var _0x191d77 = Lampa.Storage.cache("online_last_balanser" + _0xb5031f, 3000, {});
      if (_0x191d77[_0x45b0db.movie.id]) {
        return _0x191d77[_0x45b0db.movie.id];
      } else {
        return Lampa.Storage.get("online_balanser" + _0xb5031f, _0x258b81.length ? _0x258b81[0] : "");
      }
    };
    this.startSource = function (_0x227dc7) {
      return new Promise(function (_0x3a6a00, _0x35621f) {
        _0x227dc7.forEach(function (_0x450235) {
          var _0x27fb70 = _0x3ec34f(_0x450235);
          _0x7931a[_0x27fb70] = {
            url: _0x450235.url,
            name: _0x450235.name,
            show: typeof _0x450235.show == "undefined" ? true : _0x450235.show
          };
        });
        _0x258b81 = Lampa.Arrays.getKeys(_0x7931a);
        if (_0x258b81.length) {
          var _0x18b774 = Lampa.Storage.cache("online_last_balanser" + _0xb5031f, 3000, {});
          if (_0x18b774[_0x45b0db.movie.id]) {
            _0x3a083e = _0x18b774[_0x45b0db.movie.id];
          } else {
            _0x3a083e = Lampa.Storage.get("online_balanser" + _0xb5031f, _0x258b81[0]);
          }
          if (!_0x7931a[_0x3a083e]) {
            _0x3a083e = _0x258b81[0];
          }
          if (_0x7931a[_0x3a083e] && !_0x7931a[_0x3a083e].show && !_0x45b0db.lampac_custom_select) {
            _0x3a083e = _0x258b81[0];
          }
          if (_0x7931a[_0x3a083e]) {
            _0x1e7060 = _0x7931a[_0x3a083e].url;
          } else {
            _0x1e7060 = null;
          }
          _0x3a6a00(_0x227dc7);
        } else {
          _0x35621f();
        }
      });
    };
    this.lifeSource = function () {
      var _0x2608e0 = this;
      return new Promise(function (_0x40dd1a, _0x5db3dd) {
        var _0xe454cb = _0x2608e0.requestParams(_0x3d30a5.localhost + "lifeevents?memkey=" + (_0x2608e0.memkey || ""));
        var _0x25299b = false;
        var _0x10273d = function _0x175497(_0x28b7b8, _0x47edef) {
          if (_0x28b7b8.accsdb) {
            return _0x5db3dd(_0x28b7b8);
          }
          var _0x5bcff4 = _0x2608e0.getLastChoiceBalanser();
          if (!_0x25299b) {
            var _0x16d34d = _0x28b7b8.online.filter(function (_0x25074e) {
              if (_0x47edef) {
                return _0x25074e.show;
              } else {
                return _0x25074e.show && _0x25074e.name.toLowerCase() == _0x5bcff4;
              }
            });
            if (_0x16d34d.length) {
              _0x25299b = true;
              _0x40dd1a(_0x28b7b8.online.filter(function (_0x3ad9ad) {
                return _0x3ad9ad.show;
              }));
            } else if (_0x47edef) {
              _0x5db3dd();
            }
          }
        };
        function _0x214579(_0x2b78e8) {
          return _0x2b78e8.name.indexOf("2160") > -1;
        }
        function _0x36db7c() {
          return window.matchMedia("(min-width: 768px)").matches;
        }
        var _0x57f7f2 = function _0x483397() {
          _0x279950.timeout(3000);
          _0x279950.silent(_0x2ba9cd(_0xe454cb), function (_0x3d3f50) {
            _0x3281de++;
            _0x258b81 = [];
            _0x7931a = {};
            if (_0x3d3f50 && _0x3d3f50.online && Array.isArray(_0x3d3f50.online)) {

    _0x3d3f50.online = _0x3d3f50.online.filter(function(_0x24d5b3){
		
		

        var bal = (_0x24d5b3.balanser || "").toLowerCase();
        var name = (_0x24d5b3.name || "").toLowerCase();

        var txt = bal + " " + name;

        // скрываем источники
        if (
            txt.includes("filmix") ||
            txt.includes("filmixtv") ||
            txt.includes("kinopub") ||
            txt.includes("alloha") ||
            txt.includes("hidraflix") ||
            txt.includes("vidlink") ||
            txt.includes("movpi9") ||
			txt.includes("kinotochka") ||
			txt.includes("cdnvideohub") ||
			txt.includes("kinoukr") ||
			txt.includes("ashdi") ||
			txt.includes("hdvb") ||
            txt.includes("eng")
        ) {
            return false;
        }

        return true;
    });
	

    _0x3d3f50.online.forEach(function (_0x4ca62c) {
        var _0x31082f = _0x3ec34f(_0x4ca62c);

      
var _newName = _0x4ca62c.name;
var _newKey = _0x31082f;

if (_newName.toLowerCase().includes("torrent")) {
    _0x4ca62c.name = "👑 Torrent VIP";
}

if (_newName.toLowerCase().includes("vk")) {
    _0x4ca62c.name = "⭐ VK Premium";
}

if (_newName.toLowerCase().includes("zetflix")) {
    _0x4ca62c.name = "🍿 ZetCinema";
}

if (_newName.toLowerCase().includes("rutube")) {
    _0x4ca62c.name = "💎 Rutube";
}

_newName = _0x4ca62c.name;

_0x7931a[_newKey] = {
    url: _0x4ca62c.url,
    name: _newName,
    show: typeof _0x4ca62c.show == "undefined" ? true : _0x4ca62c.show
};
    });


              
            } else {
              console.warn(_0x34706e + ": json_life_data.online is not an array or undefined in lifeSource");
              _0x3d3f50.online = [];
            }
            _0x258b81 = Lampa.Arrays.getKeys(_0x7931a);
			
			_0x258b81.sort(function(a,b){

var order = {
    "1_torrent":1,
    "2_vk":2,
    "3_zetflix":3,
	"4_rutube":4
};

              return (order[a] || 999) - (order[b] || 999);

              });
            _0x278f18.set("sort", _0x258b81
.filter(function(_0x158f11){
    return _0x7931a[_0x158f11] && _0x7931a[_0x158f11].show;
})
.map(function (_0x158f11) {
    return {
        title: _0x7931a[_0x158f11].name,
        source: _0x158f11,
        selected: _0x158f11 == _0x3a083e
    };
}));
            if (_0x7931a[_0x3a083e]) {
		if (_0x7931a[_0x3a083e]) {

    var currentName = _0x7931a[_0x3a083e].name.toLowerCase();

    if (currentName.includes("torrent")) {
        _0x7931a[_0x3a083e].name = "👑 Torrent VIP";
    }
    else if (currentName.includes("vk")) {
        _0x7931a[_0x3a083e].name = "⭐ VK Premium";
    }
    else if (currentName.includes("zetflix")) {
        _0x7931a[_0x3a083e].name = "🍿 ZetCinema";
    }
	else if (currentName.includes("rutube")) {
        _0x7931a[_0x3a083e].name = "💎 Rutube";
    }
}
              _0x278f18.chosen("sort", [_0x7931a[_0x3a083e].name]);
            } else if (_0x3a083e) {
              _0x278f18.chosen("sort", [_0x3a083e]);
            }
            _0x10273d(_0x3d3f50);
            var _0x5df456 = _0x2608e0.getLastChoiceBalanser();
            if (_0x3281de > 15 || _0x3d3f50 && _0x3d3f50.ready) {
              var _0x25f551 = _0x278f18.render().find(".lampac-balanser-loader");
              if (_0x25f551.length) {
                _0x25f551.remove();
              }
              _0x10273d(_0x3d3f50, true);
            } else if (!_0x25299b && _0x7931a[_0x5df456] && _0x7931a[_0x5df456].show) {
              _0x10273d(_0x3d3f50, true);
              _0x304f0a = setTimeout(_0x483397, 1000);
            } else {
              _0x304f0a = setTimeout(_0x483397, 1000);
            }
          }, function () {
            _0x3281de++;
            if (_0x3281de > 15) {
              _0x5db3dd();
            } else {
              _0x304f0a = setTimeout(_0x483397, 1000);
            }
          });
        };
        _0x57f7f2();
      });
    };
    this.createSource = function () {
      var _0x37c9a4 = this;
      return new Promise(function (_0xb2bcd2, _0x55d78a) {
        var _0x55f7e6 = _0x37c9a4.requestParams(_0x3d30a5.localhost + "lite/events?life=true");
        _0x279950.timeout(15000);
        _0x279950.silent(_0x2ba9cd(_0x55f7e6), function (_0x2288c5) {
          if (_0x2288c5.accsdb) {
            return _0x55d78a(_0x2288c5);
          }
          if (_0x2288c5.life) {
            _0x37c9a4.memkey = _0x2288c5.memkey;
            _0x278f18.render().find(".filter--sort").append("<span class=\"lampac-balanser-loader\" style=\"width: 1.2em; height: 1.2em; margin-top: 0; background: url(./img/loader.svg) no-repeat 50% 50%; background-size: contain; margin-left: 0.5em\"></span>");
            _0x37c9a4.lifeSource().then(_0x37c9a4.startSource).then(_0xb2bcd2).catch(_0x55d78a);
          } else {
            _0x37c9a4.startSource(_0x2288c5).then(_0xb2bcd2).catch(_0x55d78a);
          }
        }, _0x55d78a);
      });
    };
    this.create = function () {
      return this.render();
    };
    this.search = function () {
      var _0x1cb10e = {
        source: _0x258b81
      };
      this.filter(_0x1cb10e, this.getChoice());
      this.find();
    };
    this.find = function () {
      if (_0x1e7060) {
        this.request(this.requestParams(_0x1e7060));
      } else {
        console.warn(_0x34706e + ": Source is undefined in find().");
        this.empty();
      }
    };
    this.request = function (_0x2e2013) {
      _0xfe7dd2++;
      if (_0xfe7dd2 < 10) {
        _0x279950.native(_0x2ba9cd(_0x2e2013), this.parse.bind(this), this.doesNotAnswer.bind(this), false, {
          dataType: "text"
        });
        clearTimeout(_0x1162e2);
        _0x1162e2 = setTimeout(function () {
          _0xfe7dd2 = 0;
        }, 4000);
      } else {
        this.empty();
      }
    };
    this.parseJsonDate = function (_0x5d7a0b, _0x3d9440) {
      try {
        var _0xa462c1 = $("<div>" + _0x5d7a0b + "</div>");
        var _0x171135 = [];
        _0xa462c1.find(_0x3d9440).each(function () {
          var _0x59d9bb = $(this);
          var _0x3ce82d = JSON.parse(_0x59d9bb.attr("data-json"));
          var _0x5623c5 = _0x59d9bb.attr("s");
          var _0x1bc513 = _0x59d9bb.attr("e");
          var _0xb3fc56 = _0x59d9bb.text();
          if (!_0x45b0db.movie.name) {
            if (_0xb3fc56.match(/\d+p/i)) {
              if (!_0x3ce82d.quality) {
                _0x3ce82d.quality = {};
                _0x3ce82d.quality[_0xb3fc56] = _0x3ce82d.url;
              }
              _0xb3fc56 = _0x45b0db.movie.title;
            }
            if (_0xb3fc56 == "По умолчанию") {
              _0xb3fc56 = _0x45b0db.movie.title;
            }
          }
          if (_0x1bc513) {
            _0x3ce82d.episode = parseInt(_0x1bc513);
          }
          if (_0x5623c5) {
            _0x3ce82d.season = parseInt(_0x5623c5);
          }
          if (_0xb3fc56) {
            _0x3ce82d.text = _0xb3fc56;
          }
          _0x3ce82d.active = _0x59d9bb.hasClass("active");
          _0x171135.push(_0x3ce82d);
        });
        return _0x171135;
      } catch (_0x32692b) {
        return [];
      }
    };
    this.getFileUrl = function (_0x5806cf, _0x39aaec) {
      var _0x3f05f2 = this;
      if (_0x5806cf.stream) {
        _0x5806cf.stream = _0x2ba9cd(_0x5806cf.stream);
      }
      if (_0x5806cf.url) {
        _0x5806cf.url = _0x2ba9cd(_0x5806cf.url);
      }
      if (Lampa.Storage.field("player") !== "inner" && _0x5806cf.stream && Lampa.Platform.is("apple")) {
        var _0x22568f = Lampa.Arrays.clone(_0x5806cf);
        _0x22568f.method = "play";
        _0x39aaec(_0x22568f, {});
      } else if (_0x5806cf.method == "play") {
        _0x39aaec(_0x5806cf, {});
      } else {
        Lampa.Loading.start(function () {
          Lampa.Loading.stop();
          Lampa.Controller.toggle("content");
          _0x279950.clear();
        });
        _0x279950.native(_0x5806cf.url, function (_0x4cb8df) {
          if (_0x4cb8df.rch) {
            _0x3f05f2.rch(_0x4cb8df, function () {
              Lampa.Loading.stop();
              _0x3f05f2.getFileUrl(_0x5806cf, _0x39aaec);
            });
          } else {
            Lampa.Loading.stop();
            if (_0x4cb8df.url) {
              _0x4cb8df.url = _0x2ba9cd(_0x4cb8df.url);
            }
            _0x39aaec(_0x4cb8df, _0x4cb8df);
          }
        }, function () {
          Lampa.Loading.stop();
          _0x39aaec(false, {});
        });
      }
    };
    this.toPlayElement = function (_0x4c512b) {
      var _0x283306 = {
        title: _0x4c512b.title,
        url: _0x4c512b.url,
        quality: _0x4c512b.qualitys,
        timeline: _0x4c512b.timeline,
        subtitles: _0x4c512b.subtitles,
        callback: _0x4c512b.mark
      };
      var _0x5b4a62 = _0x283306;
      return _0x5b4a62;
    };
    this.appendAPN = function (_0x3bf304) {
      if (_0x3d30a5.api.indexOf("pwa") == 0 && _0x3d30a5.apn.length && _0x3bf304.url && typeof _0x3bf304.url == "string" && _0x3bf304.url.indexOf(_0x3d30a5.apn) == -1) {
        _0x3bf304.url_reserve = _0x3d30a5.apn + _0x3bf304.url;
      }
    };
    this.setDefaultQuality = function (_0x3d3b70) {
      if (_0x3d3b70.quality && Lampa.Arrays.getKeys(_0x3d3b70.quality).length) {
        for (var _0x4b4fb2 in _0x3d3b70.quality) {
          if (parseInt(_0x4b4fb2) == Lampa.Storage.field("video_quality_default")) {
            _0x3d3b70.url = _0x3d3b70.quality[_0x4b4fb2];
            this.appendAPN(_0x3d3b70);
            break;
          }
        }
      }
    };
    this.display = function (_0x5c8490) {
      var _0x3bbe3c = this;
      this.draw(_0x5c8490, {
        onEnter: function _0x503fab(_0x54df46, _0x4fd165) {
          _0x3bbe3c.getFileUrl(_0x54df46, function (_0x55abd0, _0xe7bd34) {
            if (_0x55abd0 && _0x55abd0.url) {
              var _0x5ccd1b = [];
              var _0x517d8d = _0x3bbe3c.toPlayElement(_0x54df46);
              _0x517d8d.url = _0x55abd0.url;
              _0x517d8d.headers = _0x55abd0.headers;
              _0x517d8d.quality = _0xe7bd34.quality || _0x54df46.qualitys;
              _0x517d8d.subtitles = _0x55abd0.subtitles;
              _0x517d8d.vast_url = _0x55abd0.vast_url;
              _0x517d8d.vast_msg = _0x55abd0.vast_msg;
              _0x3bbe3c.appendAPN(_0x517d8d);
              _0x3bbe3c.setDefaultQuality(_0x517d8d);
              if (_0x54df46.season) {
                _0x5c8490.forEach(function (_0x272b2c) {
                  var _0x4683bf = _0x3bbe3c.toPlayElement(_0x272b2c);
                  if (_0x272b2c == _0x54df46) {
                    _0x4683bf.url = _0x55abd0.url;
                  } else if (_0x272b2c.method == "call") {
                    if (Lampa.Storage.field("player") !== "inner") {
                      _0x4683bf.url = _0x2ba9cd(_0x272b2c.stream);
                      delete _0x4683bf.quality;
                    } else {
                      _0x4683bf.url = function (_0x3d52bd) {
                        _0x3bbe3c.getFileUrl(_0x272b2c, function (_0x20456b, _0x4ae737) {
                          if (_0x20456b.url) {
                            _0x4683bf.url = _0x20456b.url;
                            _0x4683bf.quality = _0x4ae737.quality || _0x272b2c.qualitys;
                            _0x4683bf.subtitles = _0x20456b.subtitles;
                            _0x3bbe3c.appendAPN(_0x4683bf);
                            _0x3bbe3c.setDefaultQuality(_0x4683bf);
                            _0x272b2c.mark();
                          } else {
                            _0x4683bf.url = "";
                            Lampa.Noty.show(Lampa.Lang.translate("lampac_nolink" + _0xb5031f));
                          }
                          _0x3d52bd();
                        }, function () {
                          _0x4683bf.url = "";
                          _0x3d52bd();
                        });
                      };
                    }
                  } else {
                    _0x4683bf.url = _0x2ba9cd(_0x272b2c.url);
                  }
                  _0x3bbe3c.appendAPN(_0x4683bf);
                  _0x3bbe3c.setDefaultQuality(_0x4683bf);
                  _0x5ccd1b.push(_0x4683bf);
                });
              } else {
                _0x5ccd1b.push(_0x517d8d);
              }
              if (_0x5ccd1b.length > 1) {
                _0x517d8d.playlist = _0x5ccd1b;
              }
              if (_0x517d8d.url) {
                Lampa.Player.play(_0x517d8d);
                Lampa.Player.playlist(_0x5ccd1b);
                _0x54df46.mark();
                _0x3bbe3c.updateBalanser(_0x3a083e);
              } else {
                Lampa.Noty.show(Lampa.Lang.translate("lampac_nolink" + _0xb5031f));
              }
            } else {
              Lampa.Noty.show(Lampa.Lang.translate("lampac_nolink" + _0xb5031f));
            }
          }, true);
        },
        onContextMenu: function _0x13fe5e(_0x7d82e7, _0x18bb29, _0x53f475, _0x1a60af) {
          _0x3bbe3c.getFileUrl(_0x7d82e7, function (_0x12e6f1) {
            var _0x583238 = {
              file: _0x12e6f1.url,
              quality: _0x7d82e7.qualitys
            };
            _0x1a60af(_0x583238);
          }, true);
        }
      });
      this.filter({
        season: _0x45c51b.season.map(function (_0x40f4f6) {
          return _0x40f4f6.title;
        }),
        voice: _0x45c51b.voice.map(function (_0x15757c) {
          return _0x15757c.title;
        })
      }, this.getChoice());
    };
    this.parse = function (_0x279635) {
      var _0x23c222 = Lampa.Arrays.decodeJson(_0x279635, {});
      if (Lampa.Arrays.isObject(_0x279635) && _0x279635.rch) {
        _0x23c222 = _0x279635;
      }
      if (_0x23c222.rch) {
        return this.rch(_0x23c222);
      }
      try {
        var _0x171f78 = this.parseJsonDate(_0x279635, ".videos__item");
        var _0x58f1e3 = this.parseJsonDate(_0x279635, ".videos__button");
        if (_0x171f78.length == 1 && _0x171f78[0].method == "link" && !_0x171f78[0].similar) {
          _0x45c51b.season = _0x171f78.map(function (_0x5bb279) {
            var _0x3f9f9c = {
              title: _0x5bb279.text,
              url: _0x5bb279.url
            };
            return _0x3f9f9c;
          });
          this.replaceChoice({
            season: 0
          });
          if (_0x171f78[0].url) {
            this.request(_0x171f78[0].url);
          } else {
            this.empty();
          }
        } else {
          this.activity.loader(false);
          var _0x307660 = _0x171f78.filter(function (_0x40f5c0) {
            return _0x40f5c0.method == "play" || _0x40f5c0.method == "call";
          });
          var _0x24e20b = _0x171f78.filter(function (_0x30ba0d) {
            return _0x30ba0d.similar;
          });
          if (_0x307660.length) {
            if (_0x58f1e3.length) {
              _0x45c51b.voice = _0x58f1e3.map(function (_0x42b20d) {
                var _0x49e0ea = {
                  title: _0x42b20d.text,
                  url: _0x42b20d.url
                };
                return _0x49e0ea;
              });
              var _0x3dd753 = this.getChoice(_0x3a083e).voice_url;
              var _0x19698e = this.getChoice(_0x3a083e).voice_name;
              var _0x20a926 = _0x58f1e3.find(function (_0xe28be) {
                return _0xe28be.url == _0x3dd753;
              });
              var _0x5840ed = _0x58f1e3.find(function (_0x5005f8) {
                return _0x5005f8.text == _0x19698e;
              });
              var _0x3fd422 = _0x58f1e3.find(function (_0x275a6d) {
                return _0x275a6d.active;
              });
              if (_0x20a926 && !_0x20a926.active) {
                console.log("Lampac" + _0xb5031f, "go to voice", _0x20a926);
                this.replaceChoice({
                  voice: _0x58f1e3.indexOf(_0x20a926),
                  voice_name: _0x20a926.text
                });
                this.request(_0x20a926.url);
              } else if (_0x5840ed && !_0x5840ed.active) {
                console.log("Lampac" + _0xb5031f, "go to voice", _0x5840ed);
                this.replaceChoice({
                  voice: _0x58f1e3.indexOf(_0x5840ed),
                  voice_name: _0x5840ed.text
                });
                this.request(_0x5840ed.url);
              } else {
                if (_0x3fd422) {
                  this.replaceChoice({
                    voice: _0x58f1e3.indexOf(_0x3fd422),
                    voice_name: _0x3fd422.text
                  });
                }
                this.display(_0x307660);
              }
            } else {
              this.replaceChoice({
                voice: 0,
                voice_url: "",
                voice_name: ""
              });
              this.display(_0x307660);
            }
          } else if (_0x171f78.length) {
            if (_0x24e20b.length) {
              this.similars(_0x24e20b);
              this.activity.loader(false);
            } else {
              _0x45c51b.season = _0x171f78.map(function (_0x84a354) {
                var _0x2fb372 = {
                  title: _0x84a354.text,
                  url: _0x84a354.url
                };
                return _0x2fb372;
              });
              var _0x45aeb5 = this.getChoice(_0x3a083e).season;
              var _0x5a4857 = _0x45c51b.season[_0x45aeb5];
              if (!_0x5a4857) {
                _0x5a4857 = _0x45c51b.season[0];
              }
              console.log("Lampac" + _0xb5031f, "go to season", _0x5a4857);
              if (_0x5a4857 && _0x5a4857.url) {
                this.request(_0x5a4857.url);
              } else {
                this.empty();
              }
            }
          } else {
            this.doesNotAnswer(_0x23c222);
          }
        }
      } catch (_0x5dcec7) {
        console.log("Lampac" + _0xb5031f, "error", _0x5dcec7.stack);
        this.doesNotAnswer(_0x5dcec7);
      }
    };
    this.similars = function (_0x27667e) {
      var _0x807afd = this;
      _0x4c0ed9.clear();
      _0x27667e.forEach(function (_0x1c15c9) {
        _0x1c15c9.title = _0x1c15c9.text;
        _0x1c15c9.info = "Test";
        var _0x2acdd0 = [];
        var _0x4a988d = ((_0x1c15c9.start_date || _0x1c15c9.year || _0x45b0db.movie.release_date || _0x45b0db.movie.first_air_date || "") + "").slice(0, 4);
        if (_0x4a988d) {
          _0x2acdd0.push(_0x4a988d);
        }
        if (_0x1c15c9.details) {
          _0x2acdd0.push(_0x1c15c9.details);
        }
        var _0x268578 = _0x1c15c9.title || _0x1c15c9.text;
       _0x1c15c9.title = _0x268578;
       _0x1c15c9.time = _0x1c15c9.time || "";
       _0x1c15c9.info = _0x2acdd0.join(" | ");

var _0x182590 = Lampa.Template.get("lampac_prestige_folder" + _0xb5031f, _0x1c15c9);
        _0x182590.on("hover:enter", function () {
          _0x807afd.reset();
          if (_0x1c15c9.url) {
            _0x807afd.request(_0x1c15c9.url);
          } else {
            _0x807afd.empty();
          }
        }).on("hover:focus", function (_0x12ff9a) {
          _0x3cfc11 = _0x12ff9a.target;
          _0x4c0ed9.update($(_0x12ff9a.target), true);
        });
        _0x4c0ed9.append(_0x182590);
      });
      this.filter({
        season: _0x45c51b.season.map(function (_0x2eb2a0) {
          return _0x2eb2a0.title;
        }),
        voice: _0x45c51b.voice.map(function (_0x4d487c) {
          return _0x4d487c.title;
        })
      }, this.getChoice());
      Lampa.Controller.enable("content");
    };
    this.getChoice = function (_0x477def) {
      var _0x2ca874 = Lampa.Storage.cache("online_choice_" + (_0x477def || _0x3a083e) + _0xb5031f, 3000, {});
      var _0x353cfd = _0x2ca874[_0x45b0db.movie.id] || {};
      Lampa.Arrays.extend(_0x353cfd, {
        season: 0,
        voice: 0,
        voice_name: "",
        voice_id: 0,
        episodes_view: {},
        movie_view: ""
      });
      return _0x353cfd;
    };
    this.saveChoice = function (_0x4e5a47, _0x5275d1) {
      var _0x26d176 = Lampa.Storage.cache("online_choice_" + (_0x5275d1 || _0x3a083e) + _0xb5031f, 3000, {});
      _0x26d176[_0x45b0db.movie.id] = _0x4e5a47;
      Lampa.Storage.set("online_choice_" + (_0x5275d1 || _0x3a083e) + _0xb5031f, _0x26d176);
      this.updateBalanser(_0x5275d1 || _0x3a083e);
    };
    this.replaceChoice = function (_0x3a980e, _0x592791) {
      var _0x1b0695 = this.getChoice(_0x592791);
      Lampa.Arrays.extend(_0x1b0695, _0x3a980e, true);
      this.saveChoice(_0x1b0695, _0x592791);
    };
    this.clearImages = function () {
      _0x5b8268.forEach(function (_0x14cfa2) {
        _0x14cfa2.onerror = function () {};
        _0x14cfa2.onload = function () {};
        _0x14cfa2.src = "";
      });
      _0x5b8268 = [];
    };
    this.reset = function () {
      _0x3cfc11 = false;
      clearInterval(_0x58694b);
      _0x279950.clear();
      this.clearImages();
      _0x4c0ed9.render().find(".empty").remove();
      _0x4c0ed9.clear();
      _0x4c0ed9.reset();
      _0x4c0ed9.body().append(Lampa.Template.get("lampac_content_loading" + _0xb5031f));
    };
    this.loading = function (_0xcd5461) {
      if (_0xcd5461) {
        this.activity.loader(true);
      } else {
        this.activity.loader(false);
        this.activity.toggle();
      }
    };
    this.filter = function (_0x5a2868, _0x18b6cb) {
      var _0x43457a = this;
      var _0xfd8c3d = [];
      var _0x2ab312 = function _0x44b8ac(_0x3875ee, _0x2e3081) {
        var _0x321690 = _0x43457a.getChoice();
        var _0x7a532e = _0x5a2868[_0x3875ee] || [];
        var _0x44eaea = [];
        var _0x40f192 = _0x321690[_0x3875ee];
        _0x7a532e.forEach(function (_0x5c9fc9, _0x1212e4) {
          _0x44eaea.push({
            title: _0x5c9fc9,
            selected: _0x40f192 == _0x1212e4,
            index: _0x1212e4
          });
        });
        var _0x358b90 = {
          title: _0x2e3081,
          subtitle: _0x7a532e[_0x40f192] || "",
          items: _0x44eaea,
          stype: _0x3875ee
        };
        _0xfd8c3d.push(_0x358b90);
      };
      _0x5a2868.source = _0x258b81;
      _0xfd8c3d.push({
        title: Lampa.Lang.translate("torrent_parser_reset"),
        reset: true
      });
      this.saveChoice(_0x18b6cb);
      if (_0x5a2868.voice && _0x5a2868.voice.length) {
        _0x2ab312("voice", Lampa.Lang.translate("torrent_parser_voice"));
      }
      if (_0x5a2868.season && _0x5a2868.season.length) {
        _0x2ab312("season", Lampa.Lang.translate("torrent_serial_season"));
      }
      _0x278f18.set("filter", _0xfd8c3d);
     _0x278f18.set("sort",
    _0x258b81
    .filter(function(_0x3251b8){
        return _0x7931a[_0x3251b8] &&
               _0x7931a[_0x3251b8].show === true;
    })
    .map(function (_0x3251b8) {
        return {
            title: _0x7931a[_0x3251b8].name,
            source: _0x3251b8,
            selected: _0x3251b8 == _0x3a083e
        };
    })
);
      this.selected(_0x5a2868);
    };
    this.selected = function (_0xacc7cd) {
      var _0x4111f8 = this.getChoice();
      var _0x3e1e9b = [];
      for (var _0x16edc9 in _0x4111f8) {
        if (_0xacc7cd[_0x16edc9] && _0xacc7cd[_0x16edc9].length) {
          if (_0x16edc9 == "voice") {
            _0x3e1e9b.push(_0x3b6cb7[_0x16edc9] + ": " + (_0xacc7cd[_0x16edc9][_0x4111f8[_0x16edc9]] || ""));
          } else if (_0x16edc9 !== "source") {
            if (_0xacc7cd.season && _0xacc7cd.season.length >= 1) {
              _0x3e1e9b.push(_0x3b6cb7.season + ": " + (_0xacc7cd[_0x16edc9][_0x4111f8[_0x16edc9]] || ""));
            }
          }
        }
      }
      _0x278f18.chosen("filter", _0x3e1e9b);
 if (_0x7931a[_0x3a083e]) {

    var showName = (_0x7931a[_0x3a083e].name || "").toLowerCase();

    if (showName.includes("torrent")) {
        showName = "👑 Torrent VIP";
    }
    else if (showName.includes("vk")) {
        showName = "⭐ VK Premium";
    }
    else if (showName.includes("zetflix")) {
        showName = "🍿 ZetCinema";
    }
    else {
        showName = _0x7931a[_0x3a083e].name;
    }

    _0x278f18.chosen("sort",[showName]);

} else if (_0x3a083e) {

    _0x278f18.chosen("sort",[_0x3a083e]);

}
    };
    this.getEpisodes = function (_0x3154a1, _0x48b4b8) {
      var _0x58e6a6 = [];
      if (_0x45b0db.movie && ["cub", "tmdb"].indexOf(_0x45b0db.movie.source || "tmdb") == -1) {
        return _0x48b4b8(_0x58e6a6);
      }
      if (_0x45b0db.movie && typeof _0x45b0db.movie.id == "number" && _0x45b0db.movie.name) {
        var _0x450f5b = "tv/" + _0x45b0db.movie.id + "/season/" + _0x3154a1 + "?api_key=" + Lampa.TMDB.key() + "&language=" + Lampa.Storage.get("language", "ru");
        var _0x27c2e6 = Lampa.TMDB.api(_0x450f5b);
        _0x279950.timeout(10000);
        _0x279950.native(_0x27c2e6, function (_0x2e12e2) {
          _0x58e6a6 = _0x2e12e2.episodes || [];
          _0x48b4b8(_0x58e6a6);
        }, function (_0x327e7e, _0x4411e1) {
          _0x48b4b8(_0x58e6a6);
        });
      } else {
        _0x48b4b8(_0x58e6a6);
      }
    };
    this.watched = function (_0x5bcb74) {
      var _0x182143 = Lampa.Utils.hash(_0x45b0db.movie.number_of_seasons ? _0x45b0db.movie.original_name : _0x45b0db.movie.original_title);
      var _0x3308a8 = Lampa.Storage.cache("online_watched_last" + _0xb5031f, 5000, {});
      if (_0x5bcb74) {
        if (!_0x3308a8[_0x182143]) {
          _0x3308a8[_0x182143] = {};
        }
        Lampa.Arrays.extend(_0x3308a8[_0x182143], _0x5bcb74, true);
        Lampa.Storage.set("online_watched_last" + _0xb5031f, _0x3308a8);
        this.updateWatched();
      } else {
        return _0x3308a8[_0x182143];
      }
    };
    this.updateWatched = function () {
      var _0x2a13e9 = this.watched();
      var _0x8f1acf;
      if (_0x4c0ed9 && _0x4c0ed9.body()) {
        _0x8f1acf = _0x4c0ed9.body().find(".online-prestige" + _0xb5031f + "-watched .online-prestige" + _0xb5031f + "-watched__body");
        if (_0x8f1acf.length) {
          _0x8f1acf.empty();
        }
      }
      if (_0x2a13e9) {
        var _0x2730ea = [];
        if (_0x2a13e9.balanser_name) {
          _0x2730ea.push(_0x2a13e9.balanser_name);
        }
        if (_0x2a13e9.voice_name) {
          _0x2730ea.push(_0x2a13e9.voice_name);
        }
        if (_0x2a13e9.season) {
          _0x2730ea.push(Lampa.Lang.translate("torrent_serial_season") + " " + _0x2a13e9.season);
        }
        if (_0x2a13e9.episode) {
          _0x2730ea.push(Lampa.Lang.translate("torrent_serial_episode") + " " + _0x2a13e9.episode);
        }
        _0x2730ea.forEach(function (_0x5283f6) {
          if (_0x8f1acf && _0x8f1acf.length) {
            _0x8f1acf.append("<span>" + _0x5283f6 + "</span>");
          }
        });
      } else if (_0x8f1acf && _0x8f1acf.length) {
        _0x8f1acf.append("<span>" + Lampa.Lang.translate("lampac_no_watch_history" + _0xb5031f) + "</span>");
      }
    };
    this.draw = function (_0x3a3c48) {
      var _0x4de11d = this;
      var _0x242125 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!_0x3a3c48.length) {
        return this.empty();
      }
      _0x4c0ed9.clear();
      _0x4c0ed9.append(Lampa.Template.get("lampac_prestige_watched" + _0xb5031f, {}));
      this.updateWatched();
      this.getEpisodes(_0x3a3c48[0] ? _0x3a3c48[0].season : 1, function (_0x48d156) {
        var _0x15bb78 = Lampa.Storage.cache("online_view" + _0xb5031f, 5000, []);
        var _0x18f1cd = _0x45b0db.movie.name ? true : false;
        var _0x1732b5 = _0x4de11d.getChoice();
        var _0x3b40f2 = window.innerWidth > 480;
        var _0x1d3c36 = false;
        var _0x4278a4 = false;
		_0x3a3c48.sort(function(a,b){

    var aq = JSON.stringify(a).toLowerCase();
    var bq = JSON.stringify(b).toLowerCase();

    if (aq.includes("2160")) return -1;
    if (bq.includes("2160")) return 1;

    return 0;
});
        _0x3a3c48.forEach(function (_0x55e1d6, _0x2ad12c) {
          var _0x5269d2 = _0x18f1cd && _0x48d156.length && !_0x242125.similars ? _0x48d156.find(function (_0x39d09f) {
            return _0x39d09f.episode_number == _0x55e1d6.episode;
          }) : false;
          var _0x50975d = _0x55e1d6.episode || _0x2ad12c + 1;
          var _0xfbfc03 = _0x1732b5.episodes_view[_0x55e1d6.season];
          var _0x57aac7 = _0x1732b5.voice_name || (_0x45c51b.voice[0] ? _0x45c51b.voice[0].title : false) || _0x55e1d6.voice_name || (_0x18f1cd ? "Неизвестно" : _0x55e1d6.text) || "Неизвестно";
          _0x55e1d6.quality_text = "";
          if (_0x55e1d6.quality) {
            _0x55e1d6.qualitys = _0x55e1d6.quality;
            var _0x1ab4d7 = Lampa.Arrays.getKeys(_0x55e1d6.quality);
            if (_0x1ab4d7.length > 0) {
              _0x55e1d6.quality_text = _0x1ab4d7[0];
            }
          }
          Lampa.Arrays.extend(_0x55e1d6, {
            voice_name: _0x57aac7,
            info: _0x57aac7.length > 60 ? _0x57aac7.substr(0, 60) + "..." : _0x57aac7,
            time: Lampa.Utils.secondsToTime((_0x5269d2 ? _0x5269d2.runtime : _0x45b0db.movie.runtime || 0) * 60, true)
          });
          var _0x5832d5 = Lampa.Utils.hash(_0x55e1d6.season ? [_0x55e1d6.season, _0x55e1d6.season > 10 ? ":" : "", _0x55e1d6.episode, _0x45b0db.movie.original_title].join("✦") : _0x45b0db.movie.original_title);
          var _0x4f4ecb = Lampa.Utils.hash(_0x55e1d6.season ? [_0x55e1d6.season, _0x55e1d6.season > 10 ? ":" : "", _0x55e1d6.episode, _0x45b0db.movie.original_title, _0x55e1d6.voice_name].join("✦") : _0x45b0db.movie.original_title + _0x55e1d6.voice_name);
          var _0x315c64 = {
            hash_timeline: _0x5832d5,
            hash_behold: _0x4f4ecb
          };
          var _0x317e70 = _0x315c64;
          var _0x238458 = [];
          if (_0x55e1d6.season) {
            _0x55e1d6.translate_episode_end = _0x4de11d.getLastEpisode(_0x3a3c48);
            _0x55e1d6.translate_voice = _0x55e1d6.voice_name;
          }
          if (_0x55e1d6.text && !_0x5269d2) {
            _0x55e1d6.title = _0x55e1d6.text;
          } else if (!_0x55e1d6.title && _0x5269d2) {
            _0x55e1d6.title = _0x5269d2.name;
          } else if (!_0x55e1d6.title) {
            _0x55e1d6.title = "Эпизод " + _0x50975d;
          }
          _0x55e1d6.timeline = Lampa.Timeline.view(_0x5832d5);
          if (_0x5269d2) {
            if (_0x55e1d6.info && _0x55e1d6.info.length < 30 && _0x5269d2.vote_average) {
              _0x238458.push(Lampa.Template.get("lampac_prestige_rate" + _0xb5031f, {
                rate: parseFloat(_0x5269d2.vote_average + "").toFixed(1)
              }, true));
            }
            if (_0x5269d2.air_date && _0x3b40f2) {
              _0x238458.push(Lampa.Utils.parseTime(_0x5269d2.air_date).full);
            }
          } else if (_0x45b0db.movie.release_date && _0x3b40f2) {
            _0x238458.push(Lampa.Utils.parseTime(_0x45b0db.movie.release_date).full);
          }
          if (!_0x18f1cd && _0x45b0db.movie.tagline && _0x55e1d6.info && _0x55e1d6.info.length < 30) {
            _0x238458.push(_0x45b0db.movie.tagline);
          }
          if (_0x55e1d6.info && typeof _0x55e1d6.info === "string") {
            _0x238458.push(_0x55e1d6.info);
          }
          if (_0x238458.length) {
            _0x55e1d6.info_display = _0x238458.map(function (_0x35bbb7) {
              return "<span>" + _0x35bbb7 + "</span>";
            }).join("<span class=\"online-prestige" + _0xb5031f + "-split\">⚡</span>");
          } else {
            _0x55e1d6.info_display = "";
          }
          var _0x12a647 = Lampa.Arrays.clone(_0x55e1d6);
          _0x12a647.quality = _0x55e1d6.quality_text;
          _0x12a647.info = _0x55e1d6.info_display;
          var _0x4c7ad8 = Lampa.Template.get("lampac_prestige_full" + _0xb5031f, _0x12a647);
          var _0x458992 = _0x4c7ad8.find(".online-prestige" + _0xb5031f + "__loader");
          var _0x5b13bc = _0x4c7ad8.find(".online-prestige" + _0xb5031f + "__img");
          if (!_0x18f1cd) {
            if (_0x1732b5.movie_view == _0x4f4ecb) {
              _0x1d3c36 = _0x4c7ad8;
            }
          } else if (typeof _0xfbfc03 !== "undefined" && _0xfbfc03 == _0x50975d) {
            _0x1d3c36 = _0x4c7ad8;
          }
          if (_0x18f1cd && !_0x5269d2) {
            _0x5b13bc.append("<div class=\"online-prestige" + _0xb5031f + "__episode-number\">" + ("0" + (_0x55e1d6.episode || _0x2ad12c + 1)).slice(-2) + "</div>");
            _0x458992.remove();
          } else if (!_0x18f1cd && _0x45b0db.movie.source && ["cub", "tmdb"].indexOf(_0x45b0db.movie.source) == -1) {
            _0x458992.remove();
          } else {
            var _0x3d051a = _0x4c7ad8.find("img")[0];
            _0x3d051a.onerror = function () {
              _0x3d051a.src = "./img/img_broken.svg";
            };
            _0x3d051a.onload = function () {
              _0x5b13bc.addClass("online-prestige" + _0xb5031f + "__img--loaded");
              _0x458992.remove();
              if (_0x18f1cd) {
                _0x5b13bc.append("<div class=\"online-prestige" + _0xb5031f + "__episode-number\">" + ("0" + (_0x55e1d6.episode || _0x2ad12c + 1)).slice(-2) + "</div>");
              }
            };
            _0x3d051a.src = Lampa.TMDB.image("t/p/w300" + (_0x5269d2 ? _0x5269d2.still_path : _0x45b0db.movie.backdrop_path));
            _0x5b8268.push(_0x3d051a);
          }
          _0x4c7ad8.find(".online-prestige" + _0xb5031f + "__timeline").append(Lampa.Timeline.render(_0x55e1d6.timeline));
          if (_0x15bb78.indexOf(_0x4f4ecb) !== -1) {
            _0x4278a4 = _0x4c7ad8;
            _0x4c7ad8.find(".online-prestige" + _0xb5031f + "__img").append("<div class=\"online-prestige" + _0xb5031f + "__viewed\">" + Lampa.Template.get("icon_viewed", {}, true) + "</div>");
          }
          _0x55e1d6.mark = function () {
            _0x15bb78 = Lampa.Storage.cache("online_view" + _0xb5031f, 5000, []);
            if (_0x15bb78.indexOf(_0x4f4ecb) == -1) {
              _0x15bb78.push(_0x4f4ecb);
              Lampa.Storage.set("online_view" + _0xb5031f, _0x15bb78);
              if (_0x4c7ad8.find(".online-prestige" + _0xb5031f + "__viewed").length == 0) {
                _0x4c7ad8.find(".online-prestige" + _0xb5031f + "__img").append("<div class=\"online-prestige" + _0xb5031f + "__viewed\">" + Lampa.Template.get("icon_viewed", {}, true) + "</div>");
              }
            }
            _0x1732b5 = _0x4de11d.getChoice();
            if (!_0x18f1cd) {
              _0x1732b5.movie_view = _0x4f4ecb;
            } else {
              _0x1732b5.episodes_view[_0x55e1d6.season] = _0x50975d;
            }
            _0x4de11d.saveChoice(_0x1732b5);
            var _0x39b1fc = _0x1732b5.voice_name || _0x55e1d6.voice_name || _0x55e1d6.title;
            if (_0x39b1fc.length > 30) {
              _0x39b1fc = _0x39b1fc.slice(0, 30) + "...";
            }
            _0x4de11d.watched({
              balanser: _0x3a083e,
              balanser_name: Lampa.Utils.capitalizeFirstLetter(_0x7931a[_0x3a083e] ? _0x7931a[_0x3a083e].name.split(" ")[0] : _0x3a083e || ""),
              voice_id: _0x1732b5.voice_id,
              voice_name: _0x39b1fc,
              episode: _0x55e1d6.episode,
              season: _0x55e1d6.season
            });
          };
          _0x55e1d6.unmark = function () {
            _0x15bb78 = Lampa.Storage.cache("online_view" + _0xb5031f, 5000, []);
            if (_0x15bb78.indexOf(_0x4f4ecb) !== -1) {
              Lampa.Arrays.remove(_0x15bb78, _0x4f4ecb);
              Lampa.Storage.set("online_view" + _0xb5031f, _0x15bb78);
              _0x4c7ad8.find(".online-prestige" + _0xb5031f + "__viewed").remove();
            }
          };
          _0x55e1d6.timeclear = function () {
            _0x55e1d6.timeline.percent = 0;
            _0x55e1d6.timeline.time = 0;
            _0x55e1d6.timeline.duration = 0;
            Lampa.Timeline.update(_0x55e1d6.timeline);
          };
          _0x4c7ad8.on("hover:enter", function () {
            if (_0x45b0db.movie.id) {
              Lampa.Favorite.add("history", _0x45b0db.movie, 100);
              var _0x5160e7 = Lampa.Storage.get("ab_account");
              if (_0x45b0db && _0x45b0db.movie && _0x5160e7) {
                try {
                  var _0x21cf8d = {
                    balancer: _0x3a083e,
                    id: _0x45b0db.movie.id,
                    token: _0x5160e7.token,
                    userId: _0x5160e7.id,
                    name: _0x45b0db.search,
                    season: _0x55e1d6.season || 0,
                    episode: _0x55e1d6.episode || 0
                  };
                  $.ajax("//tracker.abmsx.tech/track", {
                    method: "post",
                    type: "POST",
                    contentType: "application/json",
                    data: JSON.stringify(_0x21cf8d),
                    error: function (_0x389fba) {
                      console.log("track error request", _0x389fba);
                    }
                  });
                } catch (_0x512c5f) {
                  console.log("track error", _0x512c5f);
                }
              }
            }
            if (_0x242125.onEnter) {
              _0x242125.onEnter(_0x55e1d6, _0x4c7ad8, _0x317e70);
            }
          }).on("hover:focus", function (_0x540a96) {
            _0x3cfc11 = _0x540a96.target;
            if (_0x242125.onFocus) {
              _0x242125.onFocus(_0x55e1d6, _0x4c7ad8, _0x317e70);
            }
            _0x4c0ed9.update($(_0x540a96.target), true);
          });
          if (_0x242125.onRender) {
            _0x242125.onRender(_0x55e1d6, _0x4c7ad8, _0x317e70);
          }
          _0x4de11d.contextMenu({
            html: _0x4c7ad8,
            element: _0x55e1d6,
            onFile: function _0x309f19(_0x2174af) {
              if (_0x242125.onContextMenu) {
                _0x242125.onContextMenu(_0x55e1d6, _0x4c7ad8, _0x317e70, _0x2174af);
              }
            },
            onClearAllMark: function _0x2c71d2() {
              _0x3a3c48.forEach(function (_0x48c460) {
                _0x48c460.unmark();
              });
            },
            onClearAllTime: function _0x37eaf9() {
              _0x3a3c48.forEach(function (_0x3e9603) {
                _0x3e9603.timeclear();
              });
            }
          });
          _0x4c0ed9.append(_0x4c7ad8);
        });
        if (_0x18f1cd && _0x48d156.length > _0x3a3c48.length && !_0x242125.similars) {
          var _0x4b117a = _0x48d156.slice(_0x3a3c48.length);
          _0x4b117a.forEach(function (_0x3c0df9) {
            var _0x1fb3b7 = [];
            if (_0x3c0df9.vote_average) {
              _0x1fb3b7.push(Lampa.Template.get("lampac_prestige_rate" + _0xb5031f, {
                rate: parseFloat(_0x3c0df9.vote_average + "").toFixed(1)
              }, true));
            }
            if (_0x3c0df9.air_date) {
              _0x1fb3b7.push(Lampa.Utils.parseTime(_0x3c0df9.air_date).full);
            }
            var _0x10ab5c = new Date((_0x3c0df9.air_date + "").replace(/-/g, "/"));
            var _0x50608e = Date.now();
            var _0x3a11ef = Math.round((_0x10ab5c.getTime() - _0x50608e) / 86400000);
            var _0x49f674 = Lampa.Lang.translate("full_episode_days_left") + ": " + _0x3a11ef;
            var _0x2b9aa7 = {
              time: Lampa.Utils.secondsToTime((_0x3c0df9 ? _0x3c0df9.runtime : _0x45b0db.movie.runtime || 0) * 60, true),
              info: _0x1fb3b7.length ? _0x1fb3b7.map(function (_0x62b722) {
                return "<span>" + _0x62b722 + "</span>";
              }).join("<span class=\"online-prestige" + _0xb5031f + "-split\">?</span>") : "",
              title: _0x3c0df9.name || "Эпизод " + _0x3c0df9.episode_number,
              quality: _0x3a11ef > 0 ? _0x49f674 : ""
            };
            var _0x2b9668 = Lampa.Template.get("lampac_prestige_full" + _0xb5031f, _0x2b9aa7);
            var _0x30ce9d = _0x2b9668.find(".online-prestige" + _0xb5031f + "__loader");
            var _0x194ebd = _0x2b9668.find(".online-prestige" + _0xb5031f + "__img");
            var _0x5a21a5 = _0x3a3c48[0] ? _0x3a3c48[0].season : 1;
            _0x2b9668.find(".online-prestige" + _0xb5031f + "__timeline").append(Lampa.Timeline.render(Lampa.Timeline.view(Lampa.Utils.hash([_0x5a21a5, _0x3c0df9.episode_number, _0x45b0db.movie.original_title].join("✦")))));
            var _0x512036 = _0x2b9668.find("img")[0];
            if (_0x3c0df9.still_path) {
              _0x512036.onerror = function () {
                _0x512036.src = "./img/img_broken.svg";
              };
              _0x512036.onload = function () {
                _0x194ebd.addClass("online-prestige" + _0xb5031f + "__img--loaded");
                _0x30ce9d.remove();
                _0x194ebd.append("<div class=\"online-prestige" + _0xb5031f + "__episode-number\">" + ("0" + _0x3c0df9.episode_number).slice(-2) + "</div>");
              };
              _0x512036.src = Lampa.TMDB.image("t/p/w300" + _0x3c0df9.still_path);
              _0x5b8268.push(_0x512036);
            } else {
              _0x30ce9d.remove();
              _0x194ebd.append("<div class=\"online-prestige" + _0xb5031f + "__episode-number\">" + ("0" + _0x3c0df9.episode_number).slice(-2) + "</div>");
            }
            _0x2b9668.on("hover:focus", function (_0x173d3a) {
              _0x3cfc11 = _0x173d3a.target;
              _0x4c0ed9.update($(_0x173d3a.target), true);
            });
            _0x2b9668.css("opacity", "0.5");
            _0x4c0ed9.append(_0x2b9668);
          });
        }
        if (_0x1d3c36) {
          _0x3cfc11 = _0x1d3c36[0];
        } else if (_0x4278a4) {
          _0x3cfc11 = _0x4278a4[0];
        }
        Lampa.Controller.enable("content");
      });
    };
    this.contextMenu = function (_0x2ab808) {
      _0x2ab808.html.on("hover:long", function () {
        function _0x466100(_0x13249a) {
          var _0x757512 = Lampa.Controller.enabled().name;
          var _0x139351 = [];
          if (Lampa.Platform.is("webos")) {
            _0x139351.push({
              title: Lampa.Lang.translate("player_lauch") + " - Webos",
              player: "webos"
            });
          }
          if (Lampa.Platform.is("android")) {
            _0x139351.push({
              title: Lampa.Lang.translate("player_lauch") + " - Android",
              player: "android"
            });
          }
          _0x139351.push({
            title: Lampa.Lang.translate("player_lauch") + " - Lampa",
            player: "lampa"
          });
          _0x139351.push({
            title: Lampa.Lang.translate("lampac_video" + _0xb5031f),
            separator: true
          });
          _0x139351.push({
            title: Lampa.Lang.translate("torrent_parser_label_title"),
            mark: true
          });
          _0x139351.push({
            title: Lampa.Lang.translate("torrent_parser_label_cancel_title"),
            unmark: true
          });
          _0x139351.push({
            title: Lampa.Lang.translate("time_reset"),
            timeclear: true
          });
          if (_0x13249a) {
            _0x139351.push({
              title: Lampa.Lang.translate("copy_link"),
              copylink: true
            });
          }
          _0x139351.push({
            title: Lampa.Lang.translate("more"),
            separator: true
          });
          if (Lampa.Account.logged() && _0x2ab808.element && typeof _0x2ab808.element.season !== "undefined" && _0x2ab808.element.translate_voice) {
            _0x139351.push({
              title: Lampa.Lang.translate("lampac_voice_subscribe" + _0xb5031f),
              subscribe: true
            });
          }
          _0x139351.push({
            title: Lampa.Lang.translate("lampac_clear_all_marks" + _0xb5031f),
            clearallmark: true
          });
          _0x139351.push({
            title: Lampa.Lang.translate("lampac_clear_all_timecodes" + _0xb5031f),
            timeclearall: true
          });
          Lampa.Select.show({
            title: Lampa.Lang.translate("title_action"),
            items: _0x139351,
            onBack: function _0x48abb9() {
              Lampa.Controller.toggle(_0x757512);
            },
            onSelect: function _0x25a844(_0x58b3af) {
              if (_0x58b3af.mark) {
                _0x2ab808.element.mark();
              }
              if (_0x58b3af.unmark) {
                _0x2ab808.element.unmark();
              }
              if (_0x58b3af.timeclear) {
                _0x2ab808.element.timeclear();
              }
              if (_0x58b3af.clearallmark) {
                _0x2ab808.onClearAllMark();
              }
              if (_0x58b3af.timeclearall) {
                _0x2ab808.onClearAllTime();
              }
              Lampa.Controller.toggle(_0x757512);
              if (_0x58b3af.player) {
                Lampa.Player.runas(_0x58b3af.player);
                _0x2ab808.html.trigger("hover:enter");
              }
              if (_0x58b3af.copylink) {
                if (_0x13249a.quality) {
                  var _0x99501a = [];
                  for (var _0x21b8ad in _0x13249a.quality) {
                    var _0x28c0c3 = {
                      title: _0x21b8ad,
                      file: _0x13249a.quality[_0x21b8ad]
                    };
                    _0x99501a.push(_0x28c0c3);
                  }
                  Lampa.Select.show({
                    title: Lampa.Lang.translate("settings_server_links"),
                    items: _0x99501a,
                    onBack: function _0x531003() {
                      Lampa.Controller.toggle(_0x757512);
                    },
                    onSelect: function _0x402f20(_0xf5c243) {
                      Lampa.Utils.copyTextToClipboard(_0xf5c243.file, function () {
                        Lampa.Noty.show(Lampa.Lang.translate("copy_secuses"));
                      }, function () {
                        Lampa.Noty.show(Lampa.Lang.translate("copy_error"));
                      });
                    }
                  });
                } else {
                  Lampa.Utils.copyTextToClipboard(_0x13249a.file, function () {
                    Lampa.Noty.show(Lampa.Lang.translate("copy_secuses"));
                  }, function () {
                    Lampa.Noty.show(Lampa.Lang.translate("copy_error"));
                  });
                }
              }
              if (_0x58b3af.subscribe) {
                var _0x3da836 = {
                  card: _0x45b0db.movie,
                  season: _0x2ab808.element.season,
                  episode: _0x2ab808.element.translate_episode_end,
                  voice: _0x2ab808.element.translate_voice
                };
                Lampa.Account.subscribeToTranslation(_0x3da836, function () {
                  Lampa.Noty.show(Lampa.Lang.translate("lampac_voice_success" + _0xb5031f));
                }, function () {
                  Lampa.Noty.show(Lampa.Lang.translate("lampac_voice_error" + _0xb5031f));
                });
              }
            }
          });
        }
        _0x2ab808.onFile(_0x466100);
      }).on("hover:focus", function () {
        if (Lampa.Helper) {
          Lampa.Helper.show("online_file" + _0xb5031f, Lampa.Lang.translate("helper_online_file" + _0xb5031f), _0x2ab808.html);
        }
      });
    };
    this.empty = function () {
      var _0x3a1d0c = Lampa.Template.get("lampac_does_not_answer" + _0xb5031f, {});
      if (_0x3a1d0c.length) {
        _0x3a1d0c.find(".online-empty" + _0xb5031f + "__buttons").remove();
        _0x3a1d0c.find(".online-empty" + _0xb5031f + "__title").text(Lampa.Lang.translate("empty_title_two"));
        _0x3a1d0c.find(".online-empty" + _0xb5031f + "__time").text(Lampa.Lang.translate("empty_text"));
      }
      _0x4c0ed9.clear();
      _0x4c0ed9.append(_0x3a1d0c);
      this.loading(false);
    };
    this.noConnectToServer = function (_0x3ca0a5) {
      var _0xc87b75 = Lampa.Template.get("lampac_does_not_answer" + _0xb5031f, {});
      if (_0xc87b75.length) {
        _0xc87b75.find(".online-empty" + _0xb5031f + "__buttons").remove();
        _0xc87b75.find(".online-empty" + _0xb5031f + "__title").text(Lampa.Lang.translate("title_error"));
        var _0x562006 = _0x7931a && _0x7931a[_0x3a083e] ? _0x7931a[_0x3a083e].name : _0x3a083e || "N/A";
        _0xc87b75.find(".online-empty" + _0xb5031f + "__time").text(_0x3ca0a5 && _0x3ca0a5.accsdb ? _0x3ca0a5.msg : Lampa.Lang.translate("lampac_does_not_answer_text" + _0xb5031f).replace("{balanser}", _0x562006));
      }
      _0x4c0ed9.clear();
      _0x4c0ed9.append(_0xc87b75);
      this.loading(false);
    };
    this.doesNotAnswer = function (_0x180025) {
      var _0x355517 = this;
      this.reset();
      var _0x1f65c6 = _0x7931a && _0x7931a[_0x3a083e] ? _0x7931a[_0x3a083e].name : _0x3a083e || "N/A";
      var _0x184de2 = {
        balanser: _0x1f65c6
      };
      var _0x5a803b = Lampa.Template.get("lampac_does_not_answer" + _0xb5031f, _0x184de2);
      if (_0x5a803b.length) {
        if (_0x180025 && _0x180025.accsdb) {
          _0x5a803b.find(".online-empty" + _0xb5031f + "__title").html(_0x180025.msg);
        }
        var _0xbec19c = _0x180025 && _0x180025.accsdb ? 10 : 5;
        _0x5a803b.find(".cancel").on("hover:enter", function () {
          clearInterval(_0x58694b);
        });
        _0x5a803b.find(".change").on("hover:enter", function () {
          clearInterval(_0x58694b);
          _0x278f18.render().find(".filter--sort").trigger("hover:enter");
        });
        _0x5a803b.find(".timeout").text(_0xbec19c);
      }
      _0x4c0ed9.clear();
      _0x4c0ed9.append(_0x5a803b);
      this.loading(false);
      _0x58694b = setInterval(function () {
        _0xbec19c--;
        if (_0x5a803b.length) {
          _0x5a803b.find(".timeout").text(_0xbec19c);
        }
        if (_0xbec19c == 0) {
          clearInterval(_0x58694b);
          var _0x270bce = Lampa.Arrays.getKeys(_0x7931a);
          if (_0x270bce.length > 0) {
            var _0x47bda8 = _0x270bce.indexOf(_0x3a083e);
            var _0x474da5 = _0x270bce[_0x47bda8 + 1];
            if (!_0x474da5) {
              _0x474da5 = _0x270bce[0];
            }
            _0x3a083e = _0x474da5;
            if (Lampa.Activity.active().activity == _0x355517.activity) {
              _0x355517.changeBalanser(_0x3a083e);
            }
          }
        }
      }, 1000);
    };
    this.getLastEpisode = function (_0x4191f5) {
      var _0x45f48b = 0;
      _0x4191f5.forEach(function (_0x332522) {
        if (typeof _0x332522.episode !== "undefined") {
          _0x45f48b = Math.max(_0x45f48b, parseInt(_0x332522.episode));
        }
      });
      return _0x45f48b;
    };
    this.start = function () {
      if (Lampa.Activity.active().activity !== this.activity) {
        return;
      }
      if (!_0x2b4869) {
        _0x2b4869 = true;
        this.initialize();
      }
      Lampa.Background.immediately(Lampa.Utils.cardImgBackgroundBlur(_0x45b0db.movie));
      Lampa.Controller.add("content", {
        toggle: function _0x281cd5() {
          Lampa.Controller.collectionSet(_0x4c0ed9.render(), _0x3be876.render());
          Lampa.Controller.collectionFocus(_0x3cfc11 || false, _0x4c0ed9.render());
        },
        gone: function _0x15399b() {
          clearTimeout(_0x58694b);
        },
        up: function _0x74e4b9() {
          if (Navigator.canmove("up")) {
            Navigator.move("up");
          } else {
            Lampa.Controller.toggle("head");
          }
        },
        down: function _0x4b20be() {
          Navigator.move("down");
        },
        right: function _0x145bae() {
          if (Navigator.canmove("right")) {
            Navigator.move("right");
          } else {
            _0x278f18.show(Lampa.Lang.translate("title_filter"), "filter");
          }
        },
        left: function _0x423e0b() {
          if (Navigator.canmove("left")) {
            Navigator.move("left");
          } else {
            Lampa.Controller.toggle("menu");
          }
        },
        back: this.back.bind(this)
      });
      Lampa.Controller.toggle("content");
    };
    this.render = function () {
      return _0x3be876.render();
    };
    this.back = function () {
      Lampa.Activity.backward();
    };
    this.pause = function () {};
    this.stop = function () {};
    this.destroy = function () {
      _0x279950.clear();
      this.clearImages();
      _0x3be876.destroy();
      _0x4c0ed9.destroy();
      clearInterval(_0x58694b);
      clearTimeout(_0x304f0a);
      clearTimeout(_0x1a63a2);
      if (_0x57bdec) {
        _0x57bdec.stop();
        _0x57bdec = null;
      }
    };
  }
  function _0x260ee9() {
    window["lampac_plugin" + _0xb5031f] = true;
    var _0x1d0342 = {
      type: "video",
      version: "7.7.7",
      name: _0x34706e,
      description: "Плагин (" + _0xb5031f.slice(1) + ") для просмотра онлайн сериалов и фильмов. Токен: " + (_0x500565 ? "встроен" : "не встроен"),
      component: "lampac" + _0xb5031f,
      onContextMenu: function _0x2c9068(_0x1d87d5) {
        return {
          name: Lampa.Lang.translate("lampac_watch" + _0xb5031f),
          description: "Плагин (" + _0xb5031f.slice(1) + ") для просмотра онлайн сериалов и фильмов"
        };
      },
      onContextLauch: function _0x31ea3a(_0x5a6356) {
        _0x185f94();
        Lampa.Component.add("lampac" + _0xb5031f, _0x12df94);
        var _0x16e0f8 = Lampa.Utils.hash(_0x5a6356.number_of_seasons ? _0x5a6356.original_name : _0x5a6356.original_title);
        var _0x5e561a = Lampa.Storage.get("clarification_search" + _0xb5031f, "{}");
        Lampa.Activity.push({
          url: "",
          title: Lampa.Lang.translate("title_online" + _0xb5031f),
          component: "lampac" + _0xb5031f,
          search: _0x5e561a[_0x16e0f8] ? _0x5e561a[_0x16e0f8] : _0x5a6356.title,
          search_one: _0x5a6356.title,
          search_two: _0x5a6356.original_title,
          movie: _0x5a6356,
          page: 1,
          clarification: _0x5e561a[_0x16e0f8] ? true : false
        });
      }
    };
    if (typeof Lampa.Manifest.plugins === "undefined" || typeof Lampa.Manifest.plugins === "object" && (!Lampa.Manifest.plugins.name || Lampa.Manifest.plugins.name.indexOf("Lampac") === -1)) {
      Lampa.Manifest.plugins = _0x1d0342;
    } else {
      console.warn(_0x34706e + ": Lampa.Manifest.plugins already set by another Lampac plugin, manifest not overridden. This plugin's context menu might not be available.");
    }
    Lampa.Component.add("lampac" + _0xb5031f, _0x12df94);
    var _0x28072f = {
      ["lampac_watch" + _0xb5031f]: {
        ru: "Смотреть онлайн 🍿",
        en: "Watch online (AB)",
        uk: "Дивитися онлайн (AB)",
        zh: "???? (AB)"
      },
      ["lampac_video" + _0xb5031f]: {
        ru: "Видео 🌐",
        en: "Video (AB)",
        uk: "Відео (AB)",
        zh: "?? (AB)"
      },
      ["lampac_no_watch_history" + _0xb5031f]: {
        ru: "Нет истории просмотра 😊",
        en: "No browsing history (AB)",
        ua: "Немає історії перегляду (AB)",
        zh: "?????? (AB)"
      },
      ["lampac_nolink" + _0xb5031f]: {
        ru: "Не удалось извлечь ссылку 😔",
        uk: "Неможливо отримати посилання (AB)",
        en: "Failed to fetch link (AB)",
        zh: "?????? (AB)"
      },
      ["lampac_balanser" + _0xb5031f]: {
        ru: "Источник 🌐",
        uk: "Джерело (AB)",
        en: "Source (AB)",
        zh: "?? (AB)"
      },
      ["helper_online_file" + _0xb5031f]: {
        ru: "Удерживайте \"ОК\" для меню",
        uk: "Утримуйте \"ОК\" для меню (AB)",
        en: "Hold \"OK\" for menu (AB)",
        zh: "??“??”???? (AB)"
      },
      ["title_online" + _0xb5031f]: {
        ru: "Онлайн 4К ",
        uk: "Онлайн (AB)",
        en: "Online (AB)",
        zh: "??? (AB)"
      },
      ["lampac_voice_subscribe" + _0xb5031f]: {
        ru: "Подписаться на перевод",
        uk: "Підписатися на переклад (AB)",
        en: "Subscribe to translation (AB)",
        zh: "???? (AB)"
      },
      ["lampac_voice_success" + _0xb5031f]: {
        ru: "Вы успешно подписались",
        uk: "Ви успішно підписалися (AB)",
        en: "You have successfully subscribed (AB)",
        zh: "?????? (AB)"
      },
      ["lampac_voice_error" + _0xb5031f]: {
        ru: "Возникла ошибка",
        uk: "Виникла помилка (AB)",
        en: "An error has occurred (AB)",
        zh: "????? (AB)"
      },
      ["lampac_clear_all_marks" + _0xb5031f]: {
        ru: "Очистить все метки ",
        uk: "Очистити всі мітки (AB)",
        en: "Clear all labels (AB)",
        zh: "?????? (AB)"
      },
      ["lampac_clear_all_timecodes" + _0xb5031f]: {
        ru: "Очистить все тайм-коды ",
        uk: "Очистити всі тайм-коди (AB)",
        en: "Clear all timecodes (AB)",
        zh: "???????? (AB)"
      },
      ["lampac_change_balanser" + _0xb5031f]: {
        ru: "Изменить балансер⚡",
        uk: "Змінити балансер (AB)",
        en: "Change balancer (AB)",
        zh: "????? (AB)"
      },
      ["lampac_balanser_dont_work" + _0xb5031f]: {
        ru: "Поиск на ({balanser}) не дал результатов ",
        uk: "Пошук на ({balanser}) не дав результатів (AB)",
        en: "Search on ({balanser}) did not return any results (AB)",
        zh: "?? ({balanser}) ??????? (AB)"
      },
      ["lampac_balanser_timeout" + _0xb5031f]: {
        ru: "Источник будет переключен через <span class=\"timeout\">10</span> сек. ",
        uk: "Джерело буде переключено через <span class=\"timeout\">10</span> сек. (AB)",
        en: "Source will be switched in <span class=\"timeout\">10</span> sec. (AB)",
        zh: "?????<span class=\"timeout\">10</span>?????? (AB)"
      },
      ["lampac_does_not_answer_text" + _0xb5031f]: {
        ru: "Поиск на ({balanser}) не дал результатов ",
        uk: "Пошук на ({balanser}) не дав результатів (AB)",
        en: "Search on ({balanser}) did not return any results (AB)",
        zh: "?? ({balanser}) ??????? (AB)"
      }
    };
    Lampa.Lang.add(_0x28072f);
    var _0x2426b5 = "\n        <style>\n        @charset 'UTF-8';\n        .online-prestige" + _0xb5031f + " {position:relative;-webkit-border-radius:.3em;border-radius:.3em;background-color:rgba(0,0,0,0.3);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}\n        .online-prestige" + _0xb5031f + "__body {padding:1.2em;line-height:1.3;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;position:relative}\n        @media screen and (max-width:480px){.online-prestige" + _0xb5031f + "__body{padding:.8em 1.2em}}\n        .online-prestige" + _0xb5031f + "__img {position:relative;width:13em;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;min-height:8.2em}\n        .online-prestige" + _0xb5031f + "__img>img {position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-webkit-border-radius:.3em;border-radius:.3em;opacity:0;-webkit-transition:opacity .3s;-o-transition:opacity .3s;-moz-transition:opacity .3s;transition:opacity .3s}\n        .online-prestige" + _0xb5031f + "__img--loaded>img {opacity:1}\n        @media screen and (max-width:480px){.online-prestige" + _0xb5031f + "__img{width:7em;min-height:6em}}\n        .online-prestige" + _0xb5031f + "__folder {padding:1em;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}\n        .online-prestige" + _0xb5031f + "__folder>svg {width:4.4em !important;height:4.4em !important}\n        .online-prestige" + _0xb5031f + "__viewed {position:absolute;top:1em;left:1em;background:rgba(0,0,0,0.45);-webkit-border-radius:100%;border-radius:100%;padding:.25em;font-size:.76em}\n        .online-prestige" + _0xb5031f + "__viewed>svg {width:1.5em !important;height:1.5em !important}\n        .online-prestige" + _0xb5031f + "__episode-number {position:absolute;top:0;left:0;right:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:2em}\n        .online-prestige" + _0xb5031f + "__loader {position:absolute;top:50%;left:50%;width:2em;height:2em;margin-left:-1em;margin-top:-1em;background:url(./img/loader.svg) no-repeat center center;-webkit-background-size:contain;-o-background-size:contain;background-size:contain}\n        .online-prestige" + _0xb5031f + "__head,.online-prestige" + _0xb5031f + "__footer {display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}\n        .online-prestige" + _0xb5031f + "__timeline {margin:.8em 0}\n        .online-prestige" + _0xb5031f + "__timeline>.time-line {display:block !important}\n        .online-prestige" + _0xb5031f + "__title {font-size:1.7em;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;line-clamp:1;-webkit-box-orient:vertical}\n        @media screen and (max-width:480px){.online-prestige" + _0xb5031f + "__title{font-size:1.4em}}\n        .online-prestige" + _0xb5031f + "__time {padding-left:2em}\n        .online-prestige" + _0xb5031f + "__info {display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}\n        .online-prestige" + _0xb5031f + "__info>* {overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;line-clamp:1;-webkit-box-orient:vertical}\n        .online-prestige" + _0xb5031f + "__quality {padding-left:1em;white-space:nowrap}\n        .online-prestige" + _0xb5031f + "__scan-file {position:absolute;bottom:0;left:0;right:0}\n        .online-prestige" + _0xb5031f + "__scan-file .broadcast__scan {margin:0}\n        .online-prestige" + _0xb5031f + " .online-prestige" + _0xb5031f + "-split {font-size:.8em;margin:0 1em;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}\n        .online-prestige" + _0xb5031f + ".focus::after {content:'✦';position:absolute;top:-0.6em;left:-0.6em;right:-0.6em;bottom:-0.6em;-webkit-border-radius:.7em;border-radius:.7em;border:solid .3em #fff;z-index:-1;pointer-events:none}\n        .online-prestige" + _0xb5031f + "+.online-prestige" + _0xb5031f + " {margin-top:1.5em}\n        .online-prestige" + _0xb5031f + "--folder .online-prestige" + _0xb5031f + "__footer {margin-top:.8em}\n        .online-prestige" + _0xb5031f + "-watched {padding:1em}\n        .online-prestige" + _0xb5031f + "-watched__icon>svg {width:1.5em;height:1.5em}\n        .online-prestige" + _0xb5031f + "-watched__body {padding-left:1em;padding-top:.1em;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}\n        .online-prestige" + _0xb5031f + "-watched__body>span+span::before {content:' ✦ ';vertical-align:top;display:inline-block;margin:0 .5em}\n        .online-prestige" + _0xb5031f + "-rate {display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}\n        .online-prestige" + _0xb5031f + "-rate>svg {width:1.3em !important;height:1.3em !important}\n        .online-prestige" + _0xb5031f + "-rate>span {font-weight:600;font-size:1.1em;padding-left:.7em}\n        .online-empty" + _0xb5031f + " {line-height:1.4}\n        .online-empty" + _0xb5031f + "__title {font-size:1.8em;margin-bottom:.3em}\n        .online-empty" + _0xb5031f + "__time {font-size:1.2em;font-weight:300;margin-bottom:1.6em}\n        .online-empty" + _0xb5031f + "__buttons {display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}\n        .online-empty" + _0xb5031f + "__buttons>*+* {margin-left:1em}\n        .online-empty" + _0xb5031f + "__button {background:rgba(0,0,0,0.3);font-size:1.2em;padding:.5em 1.2em;-webkit-border-radius:.2em;border-radius:.2em;margin-bottom:2.4em}\n        .online-empty" + _0xb5031f + "__button.focus {background:#fff;color:black}\n        .online-empty" + _0xb5031f + "__templates .online-empty" + _0xb5031f + "-template:nth-child(2) {opacity:.5}\n        .online-empty" + _0xb5031f + "__templates .online-empty" + _0xb5031f + "-template:nth-child(3) {opacity:.2}\n        .online-empty" + _0xb5031f + "-template {background-color:rgba(255,255,255,0.3);padding:1em;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-border-radius:.3em;border-radius:.3em}\n        .online-empty" + _0xb5031f + "-template>* {background:rgba(0,0,0,0.3);-webkit-border-radius:.3em;border-radius:.3em}\n        .online-empty" + _0xb5031f + "-template__ico {width:4em;height:4em;margin-right:2.4em}\n        .online-empty" + _0xb5031f + "-template__body {height:1.7em;width:70%}\n        .online-empty" + _0xb5031f + "-template+.online-empty" + _0xb5031f + "-template {margin-top:1em}\n        .torrent-list" + _0xb5031f + " .online-prestige" + _0xb5031f + "+.online-prestige" + _0xb5031f + " { margin-top: 1.5em; }\n        </style>\n        ";
    Lampa.Template.add("lampac_css" + _0xb5031f, _0x2426b5);
    $("body").append(Lampa.Template.get("lampac_css" + _0xb5031f, {}, true));
    function _0x185f94() {
      Lampa.Template.add("lampac_prestige_full" + _0xb5031f, "<div class=\"online-prestige" + _0xb5031f + " online-prestige" + _0xb5031f + "--full selector\">\n            <div class=\"online-prestige" + _0xb5031f + "__img\">\n                <img alt=\"\">\n                <div class=\"online-prestige" + _0xb5031f + "__loader\"></div>\n            </div>\n            <div class=\"online-prestige" + _0xb5031f + "__body\">\n                <div class=\"online-prestige" + _0xb5031f + "__head\">\n                    <div class=\"online-prestige" + _0xb5031f + "__title\">{title}</div>\n                    <div class=\"online-prestige" + _0xb5031f + "__time\">{time}</div>\n                </div>\n                <div class=\"online-prestige" + _0xb5031f + "__timeline\"></div>\n                <div class=\"online-prestige" + _0xb5031f + "__footer\">\n                    <div class=\"online-prestige" + _0xb5031f + "__info\">{info}</div>\n                    <div class=\"online-prestige" + _0xb5031f + "__quality\">{quality}</div>\n                </div>\n            </div>\n        </div>");
      Lampa.Template.add("lampac_content_loading" + _0xb5031f, "<div class=\"online-empty" + _0xb5031f + "\">\n            <div class=\"broadcast__scan\"><div></div></div>\n            <div class=\"online-empty" + _0xb5031f + "__templates\">\n                <div class=\"online-empty" + _0xb5031f + "-template selector\">\n                    <div class=\"online-empty" + _0xb5031f + "-template__ico\"></div>\n                    <div class=\"online-empty" + _0xb5031f + "-template__body\"></div>\n                </div>\n                <div class=\"online-empty" + _0xb5031f + "-template\">\n                    <div class=\"online-empty" + _0xb5031f + "-template__ico\"></div>\n                    <div class=\"online-empty" + _0xb5031f + "-template__body\"></div>\n                </div>\n                <div class=\"online-empty" + _0xb5031f + "-template\">\n                    <div class=\"online-empty" + _0xb5031f + "-template__ico\"></div>\n                    <div class=\"online-empty" + _0xb5031f + "-template__body\"></div>\n                </div>\n            </div>\n        </div>");
      Lampa.Template.add("lampac_does_not_answer" + _0xb5031f, "<div class=\"online-empty" + _0xb5031f + "\">\n            <div class=\"online-empty" + _0xb5031f + "__title\">\n                #{lampac_balanser_dont_work" + _0xb5031f + "}\n            </div>\n            <div class=\"online-empty" + _0xb5031f + "__time\">\n                #{lampac_balanser_timeout" + _0xb5031f + "}\n            </div>\n            <div class=\"online-empty" + _0xb5031f + "__buttons\">\n                <div class=\"online-empty" + _0xb5031f + "__button selector cancel\">#{cancel}</div>\n                <div class=\"online-empty" + _0xb5031f + "__button selector change\">#{lampac_change_balanser" + _0xb5031f + "}</div>\n            </div>\n            <div class=\"online-empty" + _0xb5031f + "__templates\">\n                <div class=\"online-empty" + _0xb5031f + "-template\">\n                    <div class=\"online-empty" + _0xb5031f + "-template__ico\"></div>\n                    <div class=\"online-empty" + _0xb5031f + "-template__body\"></div>\n                </div>\n                <div class=\"online-empty" + _0xb5031f + "-template\">\n                    <div class=\"online-empty" + _0xb5031f + "-template__ico\"></div>\n                    <div class=\"online-empty" + _0xb5031f + "-template__body\"></div>\n                </div>\n                <div class=\"online-empty" + _0xb5031f + "-template\">\n                    <div class=\"online-empty" + _0xb5031f + "-template__ico\"></div>\n                    <div class=\"online-empty" + _0xb5031f + "-template__body\"></div>\n                </div>\n            </div>\n        </div>");
      Lampa.Template.add("lampac_prestige_rate" + _0xb5031f, "<div class=\"online-prestige" + _0xb5031f + "-rate\">\n            <svg width=\"17\" height=\"16\" viewBox=\"0 0 17 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M8.39409 0.192139L10.99 5.30994L16.7882 6.20387L12.5475 10.4277L13.5819 15.9311L8.39409 13.2425L3.20626 15.9311L4.24065 10.4277L0 6.20387L5.79819 5.30994L8.39409 0.192139Z\" fill=\"#fff\"></path>\n            </svg>\n            <span>{rate}</span>\n        </div>");
      Lampa.Template.add("lampac_prestige_folder" + _0xb5031f, "<div class=\"online-prestige" + _0xb5031f + " online-prestige" + _0xb5031f + "--folder selector\">\n            <div class=\"online-prestige" + _0xb5031f + "__folder\">\n                <svg viewBox=\"0 0 128 112\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <rect y=\"20\" width=\"128\" height=\"92\" rx=\"13\" fill=\"white\"></rect>\n                    <path d=\"M29.9963 8H98.0037C96.0446 3.3021 91.4079 0 86 0H42C36.5921 0 31.9555 3.3021 29.9963 8Z\" fill=\"white\" fill-opacity=\"0.23\"></path>\n                    <rect x=\"11\" y=\"8\" width=\"106\" height=\"76\" rx=\"13\" fill=\"white\" fill-opacity=\"0.51\"></rect>\n                </svg>\n            </div>\n            <div class=\"online-prestige" + _0xb5031f + "__body\">\n                <div class=\"online-prestige" + _0xb5031f + "__head\">\n                    <div class=\"online-prestige" + _0xb5031f + "__title\">{title}</div>\n                    <div class=\"online-prestige" + _0xb5031f + "__time\">{time}</div>\n                </div>\n                <div class=\"online-prestige" + _0xb5031f + "__footer\">\n                    <div class=\"online-prestige" + _0xb5031f + "__info\">{info}</div>\n                </div>\n            </div>\n        </div>");
      Lampa.Template.add("lampac_prestige_watched" + _0xb5031f, "<div class=\"online-prestige" + _0xb5031f + " online-prestige" + _0xb5031f + "-watched selector\">\n            <div class=\"online-prestige" + _0xb5031f + "-watched__icon\">\n                <svg width=\"21\" height=\"21\" viewBox=\"0 0 21 21\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <circle cx=\"10.5\" cy=\"10.5\" r=\"9\" stroke=\"currentColor\" stroke-width=\"3\"/>\n                    <path d=\"M14.8477 10.5628L8.20312 14.399L8.20313 6.72656L14.8477 10.5628Z\" fill=\"currentColor\"/>\n                </svg>\n            </div>\n            <div class=\"online-prestige" + _0xb5031f + "-watched__body\">\n            </div>\n        </div>");
    }
    _0x185f94();
    var _0x3c5e63 = "<div class=\"full-start__button selector view--online lampac--button" + _0xb5031f + "\" data-subtitle=\"" + _0x34706e + " v" + _0x1d0342.version + "\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 392.697 392.697\" xml:space=\"preserve\">\n            <path d=\"M21.837,83.419l36.496,16.678L227.72,19.886c1.229-0.592,2.002-1.846,1.98-3.209c-0.021-1.365-0.834-2.592-2.082-3.145\n                L197.766,0.3c-0.903-0.4-1.933-0.4-2.837,0L21.873,77.036c-1.259,0.559-2.073,1.803-2.081,3.18\n                C19.784,81.593,20.584,82.847,21.837,83.419z\" fill=\"currentColor\"></path>\n            <path d=\"M185.689,177.261l-64.988-30.01v91.617c0,0.856-0.44,1.655-1.167,2.114c-0.406,0.257-0.869,0.386-1.333,0.386\n                c-0.368,0-0.736-0.082-1.079-0.244l-68.874-32.625c-0.869-0.416-1.421-1.293-1.421-2.256v-92.229L6.804,95.5\n                c-1.083-0.496-2.344-0.406-3.347,0.238c-1.002,0.645-1.608,1.754-1.608,2.944v208.744c0,1.371,0.799,2.615,2.045,3.185\n                l178.886,81.768c0.464,0.211,0.96,0.315,1.455,0.315c0.661,0,1.318-0.188,1.892-0.555c1.002-0.645,1.608-1.754,1.608-2.945\n                V180.445C187.735,179.076,186.936,177.831,185.689,177.261z\" fill=\"currentColor\"></path>\n            <path d=\"M389.24,95.74c-1.002-0.644-2.264-0.732-3.347-0.238l-178.876,81.76c-1.246,0.57-2.045,1.814-2.045,3.185v208.751\n                c0,1.191,0.606,2.302,1.608,2.945c0.572,0.367,1.23,0.555,1.892,0.555c0.495,0,0.991-0.104,1.455-0.315l178.876-81.768\n                c1.246-0.568,2.045-1.813,2.045-3.185V98.685C390.849,97.494,390.242,96.384,389.24,95.74z\" fill=\"currentColor\"></path>\n            <path d=\"M372.915,80.216c-0.009-1.377-0.823-2.621-2.082-3.18l-60.182-26.681c-0.938-0.418-2.013-0.399-2.938,0.045\n                l-173.755,82.992l60.933,29.117c0.462,0.211,0.958,0.316,1.455,0.316s0.993-0.105,1.455-0.316l173.066-79.092\n                C372.122,82.847,372.923,81.593,372.915,80.216z\" fill=\"currentColor\"></path>\n        </svg>\n        <span>#{title_online" + _0xb5031f + "}</span>\n    </div>";
    function _0x4c90fd(_0x35f139) {
      if (_0x35f139.render.find(".lampac--button" + _0xb5031f).length) {
        return;
      }
      var _0x9ec117 = $(Lampa.Lang.translate(_0x3c5e63));
      _0x9ec117.on("hover:enter", function () {
        _0x185f94();
        Lampa.Component.add("lampac" + _0xb5031f, _0x12df94);
        var _0x312412 = Lampa.Utils.hash(_0x35f139.movie.number_of_seasons ? _0x35f139.movie.original_name : _0x35f139.movie.original_title);
        var _0x498e62 = Lampa.Storage.get("clarification_search" + _0xb5031f, "{}");
        Lampa.Activity.push({
          url: "",
          title: Lampa.Lang.translate("title_online" + _0xb5031f),
          component: "lampac" + _0xb5031f,
          search: _0x498e62[_0x312412] ? _0x498e62[_0x312412] : _0x35f139.movie.title,
          search_one: _0x35f139.movie.title,
          search_two: _0x35f139.movie.original_title,
          movie: _0x35f139.movie,
          page: 1,
          clarification: _0x498e62[_0x312412] ? true : false
        });
      });
      _0x35f139.render.after(_0x9ec117);
    }
    Lampa.Listener.follow("full", function (_0x1c309f) {
      if (_0x1c309f.type == "complite") {
        _0x4c90fd({
          render: _0x1c309f.object.activity.render().find(".view--torrent"),
          movie: _0x1c309f.data.movie
        });
      }
    });
    try {
      if (Lampa.Activity.active().component == "full") {
        _0x4c90fd({
          render: Lampa.Activity.active().activity.render().find(".view--torrent"),
          movie: Lampa.Activity.active().card
        });
      }
    } catch (_0x3cb47b) {}
    if (Lampa.Manifest.app_digital >= 177) {
      var _0x4fe67e = ["filmix", "filmixtv", "fxapi", "rezka", "rhsprem", "lumex", "videodb", "collaps", "hdvb", "zetflix", "kodik", "ashdi", "kinoukr", "kinotochka", "remux", "iframevideo", "cdnmovies", "anilibria", "animedia", "animego", "animevost", "animebesst", "redheadsound", "alloha", "animelib", "moonanime", "kinopub", "vibix", "vdbmovies", "fancdn", "cdnvideohub", "vokino", "rc/filmix", "rc/fxapi", "rc/kinopub", "rc/rhs", "vcdn"];
      _0x4fe67e.forEach(function (_0x37fd06) {
        Lampa.Storage.sync("online_choice_" + _0x37fd06 + _0xb5031f, "object_object");
      });
      Lampa.Storage.sync("online_watched_last" + _0xb5031f, "object_object");
    }
  }
  if (!window["lampac_plugin" + _0xb5031f]) {
    _0x260ee9();
  }
})();
