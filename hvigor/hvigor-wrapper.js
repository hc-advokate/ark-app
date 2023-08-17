"use strict";
var e = require("fs"),
	t = require("path"),
	n = require("os"),
	r = require("crypto"),
	u = require("child_process"),
	o = require("constants"),
	i = require("stream"),
	s = require("util"),
	c = require("assert"),
	a = require("tty"),
	l = require("zlib"),
	f = require("net");
function d(e) {
	return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var D = d(e),
	p = d(t),
	E = d(n),
	m = d(r),
	h = d(u),
	y = d(o),
	C = d(i),
	F = d(s),
	g = d(c),
	A = d(a),
	v = d(l),
	S = d(f),
	w =
		"undefined" != typeof globalThis
			? globalThis
			: "undefined" != typeof window
			? window
			: "undefined" != typeof global
			? global
			: "undefined" != typeof self
			? self
			: {},
	O = {},
	b = {},
	_ = {},
	B =
		(w && w.__importDefault) ||
		function (e) {
			return e && e.__esModule ? e : { default: e };
		};
Object.defineProperty(_, "__esModule", { value: !0 }), (_.isMac = _.isLinux = _.isWindows = void 0);
const P = B(E.default),
	k = "Windows_NT",
	x = "Linux",
	N = "Darwin";
(_.isWindows = function () {
	return P.default.type() === k;
}),
	(_.isLinux = function () {
		return P.default.type() === x;
	}),
	(_.isMac = function () {
		return P.default.type() === N;
	});
var I = {},
	T =
		(w && w.__createBinding) ||
		(Object.create
			? function (e, t, n, r) {
					void 0 === r && (r = n);
					var u = Object.getOwnPropertyDescriptor(t, n);
					(u && !("get" in u ? !t.__esModule : u.writable || u.configurable)) ||
						(u = {
							enumerable: !0,
							get: function () {
								return t[n];
							},
						}),
						Object.defineProperty(e, r, u);
			  }
			: function (e, t, n, r) {
					void 0 === r && (r = n), (e[r] = t[n]);
			  }),
	R =
		(w && w.__setModuleDefault) ||
		(Object.create
			? function (e, t) {
					Object.defineProperty(e, "default", { enumerable: !0, value: t });
			  }
			: function (e, t) {
					e.default = t;
			  }),
	M =
		(w && w.__importStar) ||
		function (e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && T(t, e, n);
			return R(t, e), t;
		};
Object.defineProperty(I, "__esModule", { value: !0 }), (I.hash = void 0);
const L = M(m.default);
(I.hash = function (e, t = "md5") {
	return L.createHash(t).update(e, "utf-8").digest("hex");
}),
	(function (e) {
		var t =
				(w && w.__createBinding) ||
				(Object.create
					? function (e, t, n, r) {
							void 0 === r && (r = n);
							var u = Object.getOwnPropertyDescriptor(t, n);
							(u && !("get" in u ? !t.__esModule : u.writable || u.configurable)) ||
								(u = {
									enumerable: !0,
									get: function () {
										return t[n];
									},
								}),
								Object.defineProperty(e, r, u);
					  }
					: function (e, t, n, r) {
							void 0 === r && (r = n), (e[r] = t[n]);
					  }),
			n =
				(w && w.__setModuleDefault) ||
				(Object.create
					? function (e, t) {
							Object.defineProperty(e, "default", { enumerable: !0, value: t });
					  }
					: function (e, t) {
							e.default = t;
					  }),
			r =
				(w && w.__importStar) ||
				function (e) {
					if (e && e.__esModule) return e;
					var r = {};
					if (null != e) for (var u in e) "default" !== u && Object.prototype.hasOwnProperty.call(e, u) && t(r, e, u);
					return n(r, e), r;
				};
		Object.defineProperty(e, "__esModule", { value: !0 }),
			(e.HVIGOR_BOOT_JS_FILE_PATH =
				e.HVIGOR_PROJECT_DEPENDENCY_PACKAGE_JSON_PATH =
				e.HVIGOR_PROJECT_DEPENDENCIES_HOME =
				e.HVIGOR_PROJECT_WRAPPER_HOME =
				e.HVIGOR_PROJECT_NAME =
				e.HVIGOR_PROJECT_ROOT_DIR =
				e.HVIGOR_PROJECT_CACHES_HOME =
				e.HVIGOR_PNPM_STORE_PATH =
				e.HVIGOR_WRAPPER_PNPM_SCRIPT_PATH =
				e.HVIGOR_WRAPPER_TOOLS_HOME =
				e.HVIGOR_USER_HOME =
				e.DEFAULT_PACKAGE_JSON =
				e.DEFAULT_HVIGOR_CONFIG_JSON_FILE_NAME =
				e.PNPM =
				e.HVIGOR =
				e.NPM_TOOL =
				e.PNPM_TOOL =
				e.HVIGOR_ENGINE_PACKAGE_NAME =
					void 0);
		const u = r(p.default),
			o = r(E.default),
			i = _,
			s = I;
		(e.HVIGOR_ENGINE_PACKAGE_NAME = "@ohos/hvigor"),
			(e.PNPM_TOOL = (0, i.isWindows)() ? "pnpm.cmd" : "pnpm"),
			(e.NPM_TOOL = (0, i.isWindows)() ? "npm.cmd" : "npm"),
			(e.HVIGOR = "hvigor"),
			(e.PNPM = "pnpm"),
			(e.DEFAULT_HVIGOR_CONFIG_JSON_FILE_NAME = "hvigor-config.json5"),
			(e.DEFAULT_PACKAGE_JSON = "package.json"),
			(e.HVIGOR_USER_HOME = u.resolve(o.homedir(), ".hvigor")),
			(e.HVIGOR_WRAPPER_TOOLS_HOME = u.resolve(e.HVIGOR_USER_HOME, "wrapper", "tools")),
			(e.HVIGOR_WRAPPER_PNPM_SCRIPT_PATH = u.resolve(e.HVIGOR_WRAPPER_TOOLS_HOME, "node_modules", ".bin", e.PNPM_TOOL)),
			(e.HVIGOR_PNPM_STORE_PATH = u.resolve(e.HVIGOR_USER_HOME, "caches")),
			(e.HVIGOR_PROJECT_CACHES_HOME = u.resolve(e.HVIGOR_USER_HOME, "project_caches")),
			(e.HVIGOR_PROJECT_ROOT_DIR = process.cwd()),
			(e.HVIGOR_PROJECT_NAME = u.basename((0, s.hash)(e.HVIGOR_PROJECT_ROOT_DIR))),
			(e.HVIGOR_PROJECT_WRAPPER_HOME = u.resolve(e.HVIGOR_PROJECT_ROOT_DIR, e.HVIGOR)),
			(e.HVIGOR_PROJECT_DEPENDENCIES_HOME = u.resolve(e.HVIGOR_PROJECT_CACHES_HOME, e.HVIGOR_PROJECT_NAME, "workspace")),
			(e.HVIGOR_PROJECT_DEPENDENCY_PACKAGE_JSON_PATH = u.resolve(e.HVIGOR_PROJECT_DEPENDENCIES_HOME, e.DEFAULT_PACKAGE_JSON)),
			(e.HVIGOR_BOOT_JS_FILE_PATH = u.resolve(e.HVIGOR_PROJECT_DEPENDENCIES_HOME, "node_modules", "@ohos", "hvigor", "bin", "hvigor.js"));
	})(b);
var j = {},
	$ = {};
Object.defineProperty($, "__esModule", { value: !0 }),
	($.logInfoPrintConsole = $.logErrorAndExit = void 0),
	($.logErrorAndExit = function (e) {
		e instanceof Error ? console.error(e.message) : console.error(e), process.exit(-1);
	}),
	($.logInfoPrintConsole = function (e) {
		console.log(e);
	});
var H =
		(w && w.__createBinding) ||
		(Object.create
			? function (e, t, n, r) {
					void 0 === r && (r = n);
					var u = Object.getOwnPropertyDescriptor(t, n);
					(u && !("get" in u ? !t.__esModule : u.writable || u.configurable)) ||
						(u = {
							enumerable: !0,
							get: function () {
								return t[n];
							},
						}),
						Object.defineProperty(e, r, u);
			  }
			: function (e, t, n, r) {
					void 0 === r && (r = n), (e[r] = t[n]);
			  }),
	J =
		(w && w.__setModuleDefault) ||
		(Object.create
			? function (e, t) {
					Object.defineProperty(e, "default", { enumerable: !0, value: t });
			  }
			: function (e, t) {
					e.default = t;
			  }),
	G =
		(w && w.__importStar) ||
		function (e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && H(t, e, n);
			return J(t, e), t;
		},
	V =
		(w && w.__importDefault) ||
		function (e) {
			return e && e.__esModule ? e : { default: e };
		};
Object.defineProperty(j, "__esModule", { value: !0 }),
	(j.isFileExists = j.offlinePluginConversion = j.executeCommand = j.getNpmPath = j.hasNpmPackInPaths = void 0);
const U = h.default,
	W = G(p.default),
	z = b,
	K = $,
	q = V(D.default);
(j.hasNpmPackInPaths = function (e, t) {
	try {
		return require.resolve(e, { paths: [...t] }), !0;
	} catch (e) {
		return !1;
	}
}),
	(j.getNpmPath = function () {
		const e = process.execPath;
		return W.join(W.dirname(e), z.NPM_TOOL);
	}),
	(j.executeCommand = function (e, t, n) {
		0 !== (0, U.spawnSync)(e, t, n).status && (0, K.logErrorAndExit)(`Error: ${e} ${t} execute failed.See above for details.`);
	}),
	(j.offlinePluginConversion = function (e, t) {
		return t.startsWith("file:") || t.endsWith(".tgz") ? W.resolve(e, z.HVIGOR, t.replace("file:", "")) : t;
	}),
	(j.isFileExists = function (e) {
		return q.default.existsSync(e) && q.default.statSync(e).isFile();
	}),
	(function (e) {
		var t =
				(w && w.__createBinding) ||
				(Object.create
					? function (e, t, n, r) {
							void 0 === r && (r = n);
							var u = Object.getOwnPropertyDescriptor(t, n);
							(u && !("get" in u ? !t.__esModule : u.writable || u.configurable)) ||
								(u = {
									enumerable: !0,
									get: function () {
										return t[n];
									},
								}),
								Object.defineProperty(e, r, u);
					  }
					: function (e, t, n, r) {
							void 0 === r && (r = n), (e[r] = t[n]);
					  }),
			n =
				(w && w.__setModuleDefault) ||
				(Object.create
					? function (e, t) {
							Object.defineProperty(e, "default", { enumerable: !0, value: t });
					  }
					: function (e, t) {
							e.default = t;
					  }),
			r =
				(w && w.__importStar) ||
				function (e) {
					if (e && e.__esModule) return e;
					var r = {};
					if (null != e) for (var u in e) "default" !== u && Object.prototype.hasOwnProperty.call(e, u) && t(r, e, u);
					return n(r, e), r;
				},
			u =
				(w && w.__importDefault) ||
				function (e) {
					return e && e.__esModule ? e : { default: e };
				};
		Object.defineProperty(e, "__esModule", { value: !0 }),
			(e.executeInstallPnpm = e.isPnpmAvailable = e.environmentHandler = e.checkNpmConifg = e.PNPM_VERSION = void 0);
		const o = r(D.default),
			i = b,
			s = j,
			c = r(p.default),
			a = $,
			l = h.default,
			f = u(E.default);
		(e.PNPM_VERSION = "7.30.0"),
			(e.checkNpmConifg = function () {
				const e = c.resolve(i.HVIGOR_PROJECT_ROOT_DIR, ".npmrc"),
					t = c.resolve(f.default.homedir(), ".npmrc");
				if ((0, s.isFileExists)(e) || (0, s.isFileExists)(t)) return;
				const n = (0, s.getNpmPath)(),
					r = (0, l.spawnSync)(n, ["config", "get", "prefix"], { cwd: i.HVIGOR_PROJECT_ROOT_DIR });
				if (0 !== r.status || !r.stdout) return void (0, a.logErrorAndExit)("Error: The hvigor depends on the npmrc file. Configure the npmrc file first.");
				const u = c.resolve(`${r.stdout}`.replace(/[\r\n]/gi, ""), ".npmrc");
				(0, s.isFileExists)(u) || (0, a.logErrorAndExit)("Error: The hvigor depends on the npmrc file. Configure the npmrc file first.");
			}),
			(e.environmentHandler = function () {
				process.env["npm_config_update-notifier"] = "false";
			}),
			(e.isPnpmAvailable = function () {
				return !!o.existsSync(i.HVIGOR_WRAPPER_PNPM_SCRIPT_PATH) && (0, s.hasNpmPackInPaths)("pnpm", [i.HVIGOR_WRAPPER_TOOLS_HOME]);
			}),
			(e.executeInstallPnpm = function () {
				(0, a.logInfoPrintConsole)(`Installing pnpm@${e.PNPM_VERSION}...`);
				const t = (0, s.getNpmPath)();
				!(function () {
					const t = c.resolve(i.HVIGOR_WRAPPER_TOOLS_HOME, i.DEFAULT_PACKAGE_JSON);
					try {
						o.existsSync(i.HVIGOR_WRAPPER_TOOLS_HOME) || o.mkdirSync(i.HVIGOR_WRAPPER_TOOLS_HOME, { recursive: !0 });
						const n = { dependencies: {} };
						(n.dependencies[i.PNPM] = e.PNPM_VERSION), o.writeFileSync(t, JSON.stringify(n));
					} catch (e) {
						(0, a.logErrorAndExit)(`Error: EPERM: operation not permitted,create ${t} failed.`);
					}
				})(),
					(0, s.executeCommand)(t, ["install", "pnpm"], { cwd: i.HVIGOR_WRAPPER_TOOLS_HOME, stdio: ["inherit", "inherit", "inherit"], env: process.env }),
					(0, a.logInfoPrintConsole)("Pnpm install success.");
			});
	})(O);
var Y = {},
	X = {},
	Z = {},
	Q = {};
Object.defineProperty(Q, "__esModule", { value: !0 }), (Q.Unicode = void 0);
class ee {}
(Q.Unicode = ee),
	(ee.Space_Separator = /[\u1680\u2000-\u200A\u202F\u205F\u3000]/),
	(ee.ID_Start =
		/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/),
	(ee.ID_Continue =
		/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/),
	Object.defineProperty(Z, "__esModule", { value: !0 }),
	(Z.JudgeUtil = void 0);
const te = Q;
Z.JudgeUtil = class {
	static isIgnoreChar(e) {
		return (
			"string" == typeof e &&
			("\t" === e || "\v" === e || "\f" === e || " " === e || " " === e || "\ufeff" === e || "\n" === e || "\r" === e || "\u2028" === e || "\u2029" === e)
		);
	}
	static isSpaceSeparator(e) {
		return "string" == typeof e && te.Unicode.Space_Separator.test(e);
	}
	static isIdStartChar(e) {
		return "string" == typeof e && ((e >= "a" && e <= "z") || (e >= "A" && e <= "Z") || "$" === e || "_" === e || te.Unicode.ID_Start.test(e));
	}
	static isIdContinueChar(e) {
		return (
			"string" == typeof e &&
			((e >= "a" && e <= "z") ||
				(e >= "A" && e <= "Z") ||
				(e >= "0" && e <= "9") ||
				"$" === e ||
				"_" === e ||
				"‌" === e ||
				"‍" === e ||
				te.Unicode.ID_Continue.test(e))
		);
	}
	static isDigitWithoutZero(e) {
		return /[1-9]/.test(e);
	}
	static isDigit(e) {
		return "string" == typeof e && /[0-9]/.test(e);
	}
	static isHexDigit(e) {
		return "string" == typeof e && /[0-9A-Fa-f]/.test(e);
	}
};
var ne = {},
	re = {
		fromCallback: function (e) {
			return Object.defineProperty(
				function (...t) {
					if ("function" != typeof t[t.length - 1])
						return new Promise((n, r) => {
							e.call(this, ...t, (e, t) => (null != e ? r(e) : n(t)));
						});
					e.apply(this, t);
				},
				"name",
				{ value: e.name },
			);
		},
		fromPromise: function (e) {
			return Object.defineProperty(
				function (...t) {
					const n = t[t.length - 1];
					if ("function" != typeof n) return e.apply(this, t);
					e.apply(this, t.slice(0, -1)).then((e) => n(null, e), n);
				},
				"name",
				{ value: e.name },
			);
		},
	},
	ue = y.default,
	oe = process.cwd,
	ie = null,
	se = process.env.GRACEFUL_FS_PLATFORM || process.platform;
process.cwd = function () {
	return ie || (ie = oe.call(process)), ie;
};
try {
	process.cwd();
} catch (e) {}
if ("function" == typeof process.chdir) {
	var ce = process.chdir;
	(process.chdir = function (e) {
		(ie = null), ce.call(process, e);
	}),
		Object.setPrototypeOf && Object.setPrototypeOf(process.chdir, ce);
}
var ae = function (e) {
	ue.hasOwnProperty("O_SYMLINK") &&
		process.version.match(/^v0\.6\.[0-2]|^v0\.5\./) &&
		(function (e) {
			(e.lchmod = function (t, n, r) {
				e.open(t, ue.O_WRONLY | ue.O_SYMLINK, n, function (t, u) {
					t
						? r && r(t)
						: e.fchmod(u, n, function (t) {
								e.close(u, function (e) {
									r && r(t || e);
								});
						  });
				});
			}),
				(e.lchmodSync = function (t, n) {
					var r,
						u = e.openSync(t, ue.O_WRONLY | ue.O_SYMLINK, n),
						o = !0;
					try {
						(r = e.fchmodSync(u, n)), (o = !1);
					} finally {
						if (o)
							try {
								e.closeSync(u);
							} catch (e) {}
						else e.closeSync(u);
					}
					return r;
				});
		})(e);
	e.lutimes ||
		(function (e) {
			ue.hasOwnProperty("O_SYMLINK") && e.futimes
				? ((e.lutimes = function (t, n, r, u) {
						e.open(t, ue.O_SYMLINK, function (t, o) {
							t
								? u && u(t)
								: e.futimes(o, n, r, function (t) {
										e.close(o, function (e) {
											u && u(t || e);
										});
								  });
						});
				  }),
				  (e.lutimesSync = function (t, n, r) {
						var u,
							o = e.openSync(t, ue.O_SYMLINK),
							i = !0;
						try {
							(u = e.futimesSync(o, n, r)), (i = !1);
						} finally {
							if (i)
								try {
									e.closeSync(o);
								} catch (e) {}
							else e.closeSync(o);
						}
						return u;
				  }))
				: e.futimes &&
				  ((e.lutimes = function (e, t, n, r) {
						r && process.nextTick(r);
				  }),
				  (e.lutimesSync = function () {}));
		})(e);
	(e.chown = r(e.chown)),
		(e.fchown = r(e.fchown)),
		(e.lchown = r(e.lchown)),
		(e.chmod = t(e.chmod)),
		(e.fchmod = t(e.fchmod)),
		(e.lchmod = t(e.lchmod)),
		(e.chownSync = u(e.chownSync)),
		(e.fchownSync = u(e.fchownSync)),
		(e.lchownSync = u(e.lchownSync)),
		(e.chmodSync = n(e.chmodSync)),
		(e.fchmodSync = n(e.fchmodSync)),
		(e.lchmodSync = n(e.lchmodSync)),
		(e.stat = o(e.stat)),
		(e.fstat = o(e.fstat)),
		(e.lstat = o(e.lstat)),
		(e.statSync = i(e.statSync)),
		(e.fstatSync = i(e.fstatSync)),
		(e.lstatSync = i(e.lstatSync)),
		e.chmod &&
			!e.lchmod &&
			((e.lchmod = function (e, t, n) {
				n && process.nextTick(n);
			}),
			(e.lchmodSync = function () {}));
	e.chown &&
		!e.lchown &&
		((e.lchown = function (e, t, n, r) {
			r && process.nextTick(r);
		}),
		(e.lchownSync = function () {}));
	"win32" === se &&
		(e.rename =
			"function" != typeof e.rename
				? e.rename
				: (function (t) {
						function n(n, r, u) {
							var o = Date.now(),
								i = 0;
							t(n, r, function s(c) {
								if (c && ("EACCES" === c.code || "EPERM" === c.code || "EBUSY" === c.code) && Date.now() - o < 6e4)
									return (
										setTimeout(function () {
											e.stat(r, function (e, o) {
												e && "ENOENT" === e.code ? t(n, r, s) : u(c);
											});
										}, i),
										void (i < 100 && (i += 10))
									);
								u && u(c);
							});
						}
						return Object.setPrototypeOf && Object.setPrototypeOf(n, t), n;
				  })(e.rename));
	function t(t) {
		return t
			? function (n, r, u) {
					return t.call(e, n, r, function (e) {
						s(e) && (e = null), u && u.apply(this, arguments);
					});
			  }
			: t;
	}
	function n(t) {
		return t
			? function (n, r) {
					try {
						return t.call(e, n, r);
					} catch (e) {
						if (!s(e)) throw e;
					}
			  }
			: t;
	}
	function r(t) {
		return t
			? function (n, r, u, o) {
					return t.call(e, n, r, u, function (e) {
						s(e) && (e = null), o && o.apply(this, arguments);
					});
			  }
			: t;
	}
	function u(t) {
		return t
			? function (n, r, u) {
					try {
						return t.call(e, n, r, u);
					} catch (e) {
						if (!s(e)) throw e;
					}
			  }
			: t;
	}
	function o(t) {
		return t
			? function (n, r, u) {
					function o(e, t) {
						t && (t.uid < 0 && (t.uid += 4294967296), t.gid < 0 && (t.gid += 4294967296)), u && u.apply(this, arguments);
					}
					return "function" == typeof r && ((u = r), (r = null)), r ? t.call(e, n, r, o) : t.call(e, n, o);
			  }
			: t;
	}
	function i(t) {
		return t
			? function (n, r) {
					var u = r ? t.call(e, n, r) : t.call(e, n);
					return u && (u.uid < 0 && (u.uid += 4294967296), u.gid < 0 && (u.gid += 4294967296)), u;
			  }
			: t;
	}
	function s(e) {
		return !e || "ENOSYS" === e.code || !((process.getuid && 0 === process.getuid()) || ("EINVAL" !== e.code && "EPERM" !== e.code));
	}
	(e.read =
		"function" != typeof e.read
			? e.read
			: (function (t) {
					function n(n, r, u, o, i, s) {
						var c;
						if (s && "function" == typeof s) {
							var a = 0;
							c = function (l, f, d) {
								if (l && "EAGAIN" === l.code && a < 10) return a++, t.call(e, n, r, u, o, i, c);
								s.apply(this, arguments);
							};
						}
						return t.call(e, n, r, u, o, i, c);
					}
					return Object.setPrototypeOf && Object.setPrototypeOf(n, t), n;
			  })(e.read)),
		(e.readSync =
			"function" != typeof e.readSync
				? e.readSync
				: ((c = e.readSync),
				  function (t, n, r, u, o) {
						for (var i = 0; ; )
							try {
								return c.call(e, t, n, r, u, o);
							} catch (e) {
								if ("EAGAIN" === e.code && i < 10) {
									i++;
									continue;
								}
								throw e;
							}
				  }));
	var c;
};
var le = C.default.Stream,
	fe = function (e) {
		return {
			ReadStream: function t(n, r) {
				if (!(this instanceof t)) return new t(n, r);
				le.call(this);
				var u = this;
				(this.path = n),
					(this.fd = null),
					(this.readable = !0),
					(this.paused = !1),
					(this.flags = "r"),
					(this.mode = 438),
					(this.bufferSize = 65536),
					(r = r || {});
				for (var o = Object.keys(r), i = 0, s = o.length; i < s; i++) {
					var c = o[i];
					this[c] = r[c];
				}
				this.encoding && this.setEncoding(this.encoding);
				if (void 0 !== this.start) {
					if ("number" != typeof this.start) throw TypeError("start must be a Number");
					if (void 0 === this.end) this.end = 1 / 0;
					else if ("number" != typeof this.end) throw TypeError("end must be a Number");
					if (this.start > this.end) throw new Error("start must be <= end");
					this.pos = this.start;
				}
				if (null !== this.fd)
					return void process.nextTick(function () {
						u._read();
					});
				e.open(this.path, this.flags, this.mode, function (e, t) {
					if (e) return u.emit("error", e), void (u.readable = !1);
					(u.fd = t), u.emit("open", t), u._read();
				});
			},
			WriteStream: function t(n, r) {
				if (!(this instanceof t)) return new t(n, r);
				le.call(this),
					(this.path = n),
					(this.fd = null),
					(this.writable = !0),
					(this.flags = "w"),
					(this.encoding = "binary"),
					(this.mode = 438),
					(this.bytesWritten = 0),
					(r = r || {});
				for (var u = Object.keys(r), o = 0, i = u.length; o < i; o++) {
					var s = u[o];
					this[s] = r[s];
				}
				if (void 0 !== this.start) {
					if ("number" != typeof this.start) throw TypeError("start must be a Number");
					if (this.start < 0) throw new Error("start must be >= zero");
					this.pos = this.start;
				}
				(this.busy = !1),
					(this._queue = []),
					null === this.fd && ((this._open = e.open), this._queue.push([this._open, this.path, this.flags, this.mode, void 0]), this.flush());
			},
		};
	};
var de = function (e) {
		if (null === e || "object" != typeof e) return e;
		if (e instanceof Object) var t = { __proto__: De(e) };
		else t = Object.create(null);
		return (
			Object.getOwnPropertyNames(e).forEach(function (n) {
				Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
			}),
			t
		);
	},
	De =
		Object.getPrototypeOf ||
		function (e) {
			return e.__proto__;
		};
var pe,
	Ee,
	me = D.default,
	he = ae,
	ye = fe,
	Ce = de,
	Fe = F.default;
function ge(e, t) {
	Object.defineProperty(e, pe, {
		get: function () {
			return t;
		},
	});
}
"function" == typeof Symbol && "function" == typeof Symbol.for
	? ((pe = Symbol.for("graceful-fs.queue")), (Ee = Symbol.for("graceful-fs.previous")))
	: ((pe = "___graceful-fs.queue"), (Ee = "___graceful-fs.previous"));
var Ae = function () {};
if (
	(Fe.debuglog
		? (Ae = Fe.debuglog("gfs4"))
		: /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") &&
		  (Ae = function () {
				var e = Fe.format.apply(Fe, arguments);
				(e = "GFS4: " + e.split(/\n/).join("\nGFS4: ")), console.error(e);
		  }),
	!me[pe])
) {
	var ve = w[pe] || [];
	ge(me, ve),
		(me.close = (function (e) {
			function t(t, n) {
				return e.call(me, t, function (e) {
					e || _e(), "function" == typeof n && n.apply(this, arguments);
				});
			}
			return Object.defineProperty(t, Ee, { value: e }), t;
		})(me.close)),
		(me.closeSync = (function (e) {
			function t(t) {
				e.apply(me, arguments), _e();
			}
			return Object.defineProperty(t, Ee, { value: e }), t;
		})(me.closeSync)),
		/\bgfs4\b/i.test(process.env.NODE_DEBUG || "") &&
			process.on("exit", function () {
				Ae(me[pe]), g.default.equal(me[pe].length, 0);
			});
}
w[pe] || ge(w, me[pe]);
var Se,
	we = Oe(Ce(me));
function Oe(e) {
	he(e),
		(e.gracefulify = Oe),
		(e.createReadStream = function (t, n) {
			return new e.ReadStream(t, n);
		}),
		(e.createWriteStream = function (t, n) {
			return new e.WriteStream(t, n);
		});
	var t = e.readFile;
	e.readFile = function (e, n, r) {
		"function" == typeof n && ((r = n), (n = null));
		return (function e(n, r, u, o) {
			return t(n, r, function (t) {
				!t || ("EMFILE" !== t.code && "ENFILE" !== t.code)
					? "function" == typeof u && u.apply(this, arguments)
					: be([e, [n, r, u], t, o || Date.now(), Date.now()]);
			});
		})(e, n, r);
	};
	var n = e.writeFile;
	e.writeFile = function (e, t, r, u) {
		"function" == typeof r && ((u = r), (r = null));
		return (function e(t, r, u, o, i) {
			return n(t, r, u, function (n) {
				!n || ("EMFILE" !== n.code && "ENFILE" !== n.code)
					? "function" == typeof o && o.apply(this, arguments)
					: be([e, [t, r, u, o], n, i || Date.now(), Date.now()]);
			});
		})(e, t, r, u);
	};
	var r = e.appendFile;
	r &&
		(e.appendFile = function (e, t, n, u) {
			"function" == typeof n && ((u = n), (n = null));
			return (function e(t, n, u, o, i) {
				return r(t, n, u, function (r) {
					!r || ("EMFILE" !== r.code && "ENFILE" !== r.code)
						? "function" == typeof o && o.apply(this, arguments)
						: be([e, [t, n, u, o], r, i || Date.now(), Date.now()]);
				});
			})(e, t, n, u);
		});
	var u = e.copyFile;
	u &&
		(e.copyFile = function (e, t, n, r) {
			"function" == typeof n && ((r = n), (n = 0));
			return (function e(t, n, r, o, i) {
				return u(t, n, r, function (u) {
					!u || ("EMFILE" !== u.code && "ENFILE" !== u.code)
						? "function" == typeof o && o.apply(this, arguments)
						: be([e, [t, n, r, o], u, i || Date.now(), Date.now()]);
				});
			})(e, t, n, r);
		});
	var o = e.readdir;
	e.readdir = function (e, t, n) {
		"function" == typeof t && ((n = t), (t = null));
		var r = i.test(process.version)
			? function (e, t, n, r) {
					return o(e, u(e, t, n, r));
			  }
			: function (e, t, n, r) {
					return o(e, t, u(e, t, n, r));
			  };
		return r(e, t, n);
		function u(e, t, n, u) {
			return function (o, i) {
				!o || ("EMFILE" !== o.code && "ENFILE" !== o.code)
					? (i && i.sort && i.sort(), "function" == typeof n && n.call(this, o, i))
					: be([r, [e, t, n], o, u || Date.now(), Date.now()]);
			};
		}
	};
	var i = /^v[0-5]\./;
	if ("v0.8" === process.version.substr(0, 4)) {
		var s = ye(e);
		(d = s.ReadStream), (D = s.WriteStream);
	}
	var c = e.ReadStream;
	c &&
		((d.prototype = Object.create(c.prototype)),
		(d.prototype.open = function () {
			var e = this;
			E(e.path, e.flags, e.mode, function (t, n) {
				t ? (e.autoClose && e.destroy(), e.emit("error", t)) : ((e.fd = n), e.emit("open", n), e.read());
			});
		}));
	var a = e.WriteStream;
	a &&
		((D.prototype = Object.create(a.prototype)),
		(D.prototype.open = function () {
			var e = this;
			E(e.path, e.flags, e.mode, function (t, n) {
				t ? (e.destroy(), e.emit("error", t)) : ((e.fd = n), e.emit("open", n));
			});
		})),
		Object.defineProperty(e, "ReadStream", {
			get: function () {
				return d;
			},
			set: function (e) {
				d = e;
			},
			enumerable: !0,
			configurable: !0,
		}),
		Object.defineProperty(e, "WriteStream", {
			get: function () {
				return D;
			},
			set: function (e) {
				D = e;
			},
			enumerable: !0,
			configurable: !0,
		});
	var l = d;
	Object.defineProperty(e, "FileReadStream", {
		get: function () {
			return l;
		},
		set: function (e) {
			l = e;
		},
		enumerable: !0,
		configurable: !0,
	});
	var f = D;
	function d(e, t) {
		return this instanceof d ? (c.apply(this, arguments), this) : d.apply(Object.create(d.prototype), arguments);
	}
	function D(e, t) {
		return this instanceof D ? (a.apply(this, arguments), this) : D.apply(Object.create(D.prototype), arguments);
	}
	Object.defineProperty(e, "FileWriteStream", {
		get: function () {
			return f;
		},
		set: function (e) {
			f = e;
		},
		enumerable: !0,
		configurable: !0,
	});
	var p = e.open;
	function E(e, t, n, r) {
		return (
			"function" == typeof n && ((r = n), (n = null)),
			(function e(t, n, r, u, o) {
				return p(t, n, r, function (i, s) {
					!i || ("EMFILE" !== i.code && "ENFILE" !== i.code)
						? "function" == typeof u && u.apply(this, arguments)
						: be([e, [t, n, r, u], i, o || Date.now(), Date.now()]);
				});
			})(e, t, n, r)
		);
	}
	return (e.open = E), e;
}
function be(e) {
	Ae("ENQUEUE", e[0].name, e[1]), me[pe].push(e), Be();
}
function _e() {
	for (var e = Date.now(), t = 0; t < me[pe].length; ++t) me[pe][t].length > 2 && ((me[pe][t][3] = e), (me[pe][t][4] = e));
	Be();
}
function Be() {
	if ((clearTimeout(Se), (Se = void 0), 0 !== me[pe].length)) {
		var e = me[pe].shift(),
			t = e[0],
			n = e[1],
			r = e[2],
			u = e[3],
			o = e[4];
		if (void 0 === u) Ae("RETRY", t.name, n), t.apply(null, n);
		else if (Date.now() - u >= 6e4) {
			Ae("TIMEOUT", t.name, n);
			var i = n.pop();
			"function" == typeof i && i.call(null, r);
		} else {
			var s = Date.now() - o,
				c = Math.max(o - u, 1);
			s >= Math.min(1.2 * c, 100) ? (Ae("RETRY", t.name, n), t.apply(null, n.concat([u]))) : me[pe].push(e);
		}
		void 0 === Se && (Se = setTimeout(Be, 0));
	}
}
process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !me.__patched && ((we = Oe(me)), (me.__patched = !0)),
	(function (e) {
		const t = re.fromCallback,
			n = we,
			r = [
				"access",
				"appendFile",
				"chmod",
				"chown",
				"close",
				"copyFile",
				"fchmod",
				"fchown",
				"fdatasync",
				"fstat",
				"fsync",
				"ftruncate",
				"futimes",
				"lchmod",
				"lchown",
				"link",
				"lstat",
				"mkdir",
				"mkdtemp",
				"open",
				"opendir",
				"readdir",
				"readFile",
				"readlink",
				"realpath",
				"rename",
				"rm",
				"rmdir",
				"stat",
				"symlink",
				"truncate",
				"unlink",
				"utimes",
				"writeFile",
			].filter((e) => "function" == typeof n[e]);
		Object.assign(e, n),
			r.forEach((r) => {
				e[r] = t(n[r]);
			}),
			(e.realpath.native = t(n.realpath.native)),
			(e.exists = function (e, t) {
				return "function" == typeof t ? n.exists(e, t) : new Promise((t) => n.exists(e, t));
			}),
			(e.read = function (e, t, r, u, o, i) {
				return "function" == typeof i
					? n.read(e, t, r, u, o, i)
					: new Promise((i, s) => {
							n.read(e, t, r, u, o, (e, t, n) => {
								if (e) return s(e);
								i({ bytesRead: t, buffer: n });
							});
					  });
			}),
			(e.write = function (e, t, ...r) {
				return "function" == typeof r[r.length - 1]
					? n.write(e, t, ...r)
					: new Promise((u, o) => {
							n.write(e, t, ...r, (e, t, n) => {
								if (e) return o(e);
								u({ bytesWritten: t, buffer: n });
							});
					  });
			}),
			"function" == typeof n.writev &&
				(e.writev = function (e, t, ...r) {
					return "function" == typeof r[r.length - 1]
						? n.writev(e, t, ...r)
						: new Promise((u, o) => {
								n.writev(e, t, ...r, (e, t, n) => {
									if (e) return o(e);
									u({ bytesWritten: t, buffers: n });
								});
						  });
				});
	})(ne);
var Pe = {},
	ke = {};
const xe = p.default;
ke.checkPath = function (e) {
	if ("win32" === process.platform) {
		if (/[<>:"|?*]/.test(e.replace(xe.parse(e).root, ""))) {
			const t = new Error(`Path contains invalid characters: ${e}`);
			throw ((t.code = "EINVAL"), t);
		}
	}
};
const Ne = ne,
	{ checkPath: Ie } = ke,
	Te = (e) => ("number" == typeof e ? e : { mode: 511, ...e }.mode);
(Pe.makeDir = async (e, t) => (Ie(e), Ne.mkdir(e, { mode: Te(t), recursive: !0 }))),
	(Pe.makeDirSync = (e, t) => (Ie(e), Ne.mkdirSync(e, { mode: Te(t), recursive: !0 })));
const Re = re.fromPromise,
	{ makeDir: Me, makeDirSync: Le } = Pe,
	je = Re(Me);
var $e = { mkdirs: je, mkdirsSync: Le, mkdirp: je, mkdirpSync: Le, ensureDir: je, ensureDirSync: Le };
const He = re.fromPromise,
	Je = ne;
var Ge = {
	pathExists: He(function (e) {
		return Je.access(e)
			.then(() => !0)
			.catch(() => !1);
	}),
	pathExistsSync: Je.existsSync,
};
const Ve = we;
var Ue = function (e, t, n, r) {
		Ve.open(e, "r+", (e, u) => {
			if (e) return r(e);
			Ve.futimes(u, t, n, (e) => {
				Ve.close(u, (t) => {
					r && r(e || t);
				});
			});
		});
	},
	We = function (e, t, n) {
		const r = Ve.openSync(e, "r+");
		return Ve.futimesSync(r, t, n), Ve.closeSync(r);
	};
const ze = ne,
	Ke = p.default,
	qe = F.default;
function Ye(e, t, n) {
	const r = n.dereference ? (e) => ze.stat(e, { bigint: !0 }) : (e) => ze.lstat(e, { bigint: !0 });
	return Promise.all([
		r(e),
		r(t).catch((e) => {
			if ("ENOENT" === e.code) return null;
			throw e;
		}),
	]).then(([e, t]) => ({ srcStat: e, destStat: t }));
}
function Xe(e, t) {
	return t.ino && t.dev && t.ino === e.ino && t.dev === e.dev;
}
function Ze(e, t) {
	const n = Ke.resolve(e)
			.split(Ke.sep)
			.filter((e) => e),
		r = Ke.resolve(t)
			.split(Ke.sep)
			.filter((e) => e);
	return n.reduce((e, t, n) => e && r[n] === t, !0);
}
function Qe(e, t, n) {
	return `Cannot ${n} '${e}' to a subdirectory of itself, '${t}'.`;
}
var et = {
	checkPaths: function (e, t, n, r, u) {
		qe.callbackify(Ye)(e, t, r, (r, o) => {
			if (r) return u(r);
			const { srcStat: i, destStat: s } = o;
			if (s) {
				if (Xe(i, s)) {
					const r = Ke.basename(e),
						o = Ke.basename(t);
					return "move" === n && r !== o && r.toLowerCase() === o.toLowerCase()
						? u(null, { srcStat: i, destStat: s, isChangingCase: !0 })
						: u(new Error("Source and destination must not be the same."));
				}
				if (i.isDirectory() && !s.isDirectory()) return u(new Error(`Cannot overwrite non-directory '${t}' with directory '${e}'.`));
				if (!i.isDirectory() && s.isDirectory()) return u(new Error(`Cannot overwrite directory '${t}' with non-directory '${e}'.`));
			}
			return i.isDirectory() && Ze(e, t) ? u(new Error(Qe(e, t, n))) : u(null, { srcStat: i, destStat: s });
		});
	},
	checkPathsSync: function (e, t, n, r) {
		const { srcStat: u, destStat: o } = (function (e, t, n) {
			let r;
			const u = n.dereference ? (e) => ze.statSync(e, { bigint: !0 }) : (e) => ze.lstatSync(e, { bigint: !0 }),
				o = u(e);
			try {
				r = u(t);
			} catch (e) {
				if ("ENOENT" === e.code) return { srcStat: o, destStat: null };
				throw e;
			}
			return { srcStat: o, destStat: r };
		})(e, t, r);
		if (o) {
			if (Xe(u, o)) {
				const r = Ke.basename(e),
					i = Ke.basename(t);
				if ("move" === n && r !== i && r.toLowerCase() === i.toLowerCase()) return { srcStat: u, destStat: o, isChangingCase: !0 };
				throw new Error("Source and destination must not be the same.");
			}
			if (u.isDirectory() && !o.isDirectory()) throw new Error(`Cannot overwrite non-directory '${t}' with directory '${e}'.`);
			if (!u.isDirectory() && o.isDirectory()) throw new Error(`Cannot overwrite directory '${t}' with non-directory '${e}'.`);
		}
		if (u.isDirectory() && Ze(e, t)) throw new Error(Qe(e, t, n));
		return { srcStat: u, destStat: o };
	},
	checkParentPaths: function e(t, n, r, u, o) {
		const i = Ke.resolve(Ke.dirname(t)),
			s = Ke.resolve(Ke.dirname(r));
		if (s === i || s === Ke.parse(s).root) return o();
		ze.stat(s, { bigint: !0 }, (i, c) => (i ? ("ENOENT" === i.code ? o() : o(i)) : Xe(n, c) ? o(new Error(Qe(t, r, u))) : e(t, n, s, u, o)));
	},
	checkParentPathsSync: function e(t, n, r, u) {
		const o = Ke.resolve(Ke.dirname(t)),
			i = Ke.resolve(Ke.dirname(r));
		if (i === o || i === Ke.parse(i).root) return;
		let s;
		try {
			s = ze.statSync(i, { bigint: !0 });
		} catch (e) {
			if ("ENOENT" === e.code) return;
			throw e;
		}
		if (Xe(n, s)) throw new Error(Qe(t, r, u));
		return e(t, n, i, u);
	},
	isSrcSubdir: Ze,
	areIdentical: Xe,
};
const tt = we,
	nt = p.default,
	rt = $e.mkdirs,
	ut = Ge.pathExists,
	ot = Ue,
	it = et;
function st(e, t, n, r, u) {
	const o = nt.dirname(n);
	ut(o, (i, s) => (i ? u(i) : s ? at(e, t, n, r, u) : void rt(o, (o) => (o ? u(o) : at(e, t, n, r, u)))));
}
function ct(e, t, n, r, u, o) {
	Promise.resolve(u.filter(n, r)).then(
		(i) => (i ? e(t, n, r, u, o) : o()),
		(e) => o(e),
	);
}
function at(e, t, n, r, u) {
	(r.dereference ? tt.stat : tt.lstat)(t, (o, i) =>
		o
			? u(o)
			: i.isDirectory()
			? (function (e, t, n, r, u, o) {
					return t
						? Dt(n, r, u, o)
						: (function (e, t, n, r, u) {
								tt.mkdir(n, (o) => {
									if (o) return u(o);
									Dt(t, n, r, (t) => (t ? u(t) : dt(n, e, u)));
								});
						  })(e.mode, n, r, u, o);
			  })(i, e, t, n, r, u)
			: i.isFile() || i.isCharacterDevice() || i.isBlockDevice()
			? (function (e, t, n, r, u, o) {
					return t
						? (function (e, t, n, r, u) {
								if (!r.overwrite) return r.errorOnExist ? u(new Error(`'${n}' already exists`)) : u();
								tt.unlink(n, (o) => (o ? u(o) : lt(e, t, n, r, u)));
						  })(e, n, r, u, o)
						: lt(e, n, r, u, o);
			  })(i, e, t, n, r, u)
			: i.isSymbolicLink()
			? (function (e, t, n, r, u) {
					tt.readlink(t, (t, o) =>
						t
							? u(t)
							: (r.dereference && (o = nt.resolve(process.cwd(), o)),
							  e
									? void tt.readlink(n, (t, i) =>
											t
												? "EINVAL" === t.code || "UNKNOWN" === t.code
													? tt.symlink(o, n, u)
													: u(t)
												: (r.dereference && (i = nt.resolve(process.cwd(), i)),
												  it.isSrcSubdir(o, i)
														? u(new Error(`Cannot copy '${o}' to a subdirectory of itself, '${i}'.`))
														: e.isDirectory() && it.isSrcSubdir(i, o)
														? u(new Error(`Cannot overwrite '${i}' with '${o}'.`))
														: (function (e, t, n) {
																tt.unlink(t, (r) => (r ? n(r) : tt.symlink(e, t, n)));
														  })(o, n, u)),
									  )
									: tt.symlink(o, n, u)),
					);
			  })(e, t, n, r, u)
			: i.isSocket()
			? u(new Error(`Cannot copy a socket file: ${t}`))
			: i.isFIFO()
			? u(new Error(`Cannot copy a FIFO pipe: ${t}`))
			: u(new Error(`Unknown file: ${t}`)),
	);
}
function lt(e, t, n, r, u) {
	tt.copyFile(t, n, (o) =>
		o
			? u(o)
			: r.preserveTimestamps
			? (function (e, t, n, r) {
					if (
						(function (e) {
							return 0 == (128 & e);
						})(e)
					)
						return (function (e, t, n) {
							return dt(e, 128 | t, n);
						})(n, e, (u) => (u ? r(u) : ft(e, t, n, r)));
					return ft(e, t, n, r);
			  })(e.mode, t, n, u)
			: dt(n, e.mode, u),
	);
}
function ft(e, t, n, r) {
	!(function (e, t, n) {
		tt.stat(e, (e, r) => (e ? n(e) : ot(t, r.atime, r.mtime, n)));
	})(t, n, (t) => (t ? r(t) : dt(n, e, r)));
}
function dt(e, t, n) {
	return tt.chmod(e, t, n);
}
function Dt(e, t, n, r) {
	tt.readdir(e, (u, o) => (u ? r(u) : pt(o, e, t, n, r)));
}
function pt(e, t, n, r, u) {
	const o = e.pop();
	return o
		? (function (e, t, n, r, u, o) {
				const i = nt.join(n, t),
					s = nt.join(r, t);
				it.checkPaths(i, s, "copy", u, (t, c) => {
					if (t) return o(t);
					const { destStat: a } = c;
					!(function (e, t, n, r, u) {
						r.filter ? ct(at, e, t, n, r, u) : at(e, t, n, r, u);
					})(a, i, s, u, (t) => (t ? o(t) : pt(e, n, r, u, o)));
				});
		  })(e, o, t, n, r, u)
		: u();
}
var Et = function (e, t, n, r) {
	"function" != typeof n || r ? "function" == typeof n && (n = { filter: n }) : ((r = n), (n = {})),
		(r = r || function () {}),
		((n = n || {}).clobber = !("clobber" in n) || !!n.clobber),
		(n.overwrite = "overwrite" in n ? !!n.overwrite : n.clobber),
		n.preserveTimestamps &&
			"ia32" === process.arch &&
			console.warn(
				"fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n\n    see https://github.com/jprichardson/node-fs-extra/issues/269",
			),
		it.checkPaths(e, t, "copy", n, (u, o) => {
			if (u) return r(u);
			const { srcStat: i, destStat: s } = o;
			it.checkParentPaths(e, i, t, "copy", (u) => (u ? r(u) : n.filter ? ct(st, s, e, t, n, r) : st(s, e, t, n, r)));
		});
};
const mt = we,
	ht = p.default,
	yt = $e.mkdirsSync,
	Ct = We,
	Ft = et;
function gt(e, t, n, r) {
	const u = (r.dereference ? mt.statSync : mt.lstatSync)(t);
	if (u.isDirectory())
		return (function (e, t, n, r, u) {
			return t
				? St(n, r, u)
				: (function (e, t, n, r) {
						return mt.mkdirSync(n), St(t, n, r), vt(n, e);
				  })(e.mode, n, r, u);
		})(u, e, t, n, r);
	if (u.isFile() || u.isCharacterDevice() || u.isBlockDevice())
		return (function (e, t, n, r, u) {
			return t
				? (function (e, t, n, r) {
						if (r.overwrite) return mt.unlinkSync(n), At(e, t, n, r);
						if (r.errorOnExist) throw new Error(`'${n}' already exists`);
				  })(e, n, r, u)
				: At(e, n, r, u);
		})(u, e, t, n, r);
	if (u.isSymbolicLink())
		return (function (e, t, n, r) {
			let u = mt.readlinkSync(t);
			r.dereference && (u = ht.resolve(process.cwd(), u));
			if (e) {
				let e;
				try {
					e = mt.readlinkSync(n);
				} catch (e) {
					if ("EINVAL" === e.code || "UNKNOWN" === e.code) return mt.symlinkSync(u, n);
					throw e;
				}
				if ((r.dereference && (e = ht.resolve(process.cwd(), e)), Ft.isSrcSubdir(u, e)))
					throw new Error(`Cannot copy '${u}' to a subdirectory of itself, '${e}'.`);
				if (mt.statSync(n).isDirectory() && Ft.isSrcSubdir(e, u)) throw new Error(`Cannot overwrite '${e}' with '${u}'.`);
				return (function (e, t) {
					return mt.unlinkSync(t), mt.symlinkSync(e, t);
				})(u, n);
			}
			return mt.symlinkSync(u, n);
		})(e, t, n, r);
	if (u.isSocket()) throw new Error(`Cannot copy a socket file: ${t}`);
	if (u.isFIFO()) throw new Error(`Cannot copy a FIFO pipe: ${t}`);
	throw new Error(`Unknown file: ${t}`);
}
function At(e, t, n, r) {
	return (
		mt.copyFileSync(t, n),
		r.preserveTimestamps &&
			(function (e, t, n) {
				(function (e) {
					return 0 == (128 & e);
				})(e) &&
					(function (e, t) {
						vt(e, 128 | t);
					})(n, e);
				(function (e, t) {
					const n = mt.statSync(e);
					Ct(t, n.atime, n.mtime);
				})(t, n);
			})(e.mode, t, n),
		vt(n, e.mode)
	);
}
function vt(e, t) {
	return mt.chmodSync(e, t);
}
function St(e, t, n) {
	mt.readdirSync(e).forEach((r) =>
		(function (e, t, n, r) {
			const u = ht.join(t, e),
				o = ht.join(n, e),
				{ destStat: i } = Ft.checkPathsSync(u, o, "copy", r);
			return (function (e, t, n, r) {
				if (!r.filter || r.filter(t, n)) return gt(e, t, n, r);
			})(i, u, o, r);
		})(r, e, t, n),
	);
}
var wt = function (e, t, n) {
	"function" == typeof n && (n = { filter: n }),
		((n = n || {}).clobber = !("clobber" in n) || !!n.clobber),
		(n.overwrite = "overwrite" in n ? !!n.overwrite : n.clobber),
		n.preserveTimestamps &&
			"ia32" === process.arch &&
			console.warn(
				"fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n\n    see https://github.com/jprichardson/node-fs-extra/issues/269",
			);
	const { srcStat: r, destStat: u } = Ft.checkPathsSync(e, t, "copy", n);
	return (
		Ft.checkParentPathsSync(e, r, t, "copy"),
		(function (e, t, n, r) {
			if (r.filter && !r.filter(t, n)) return;
			const u = ht.dirname(n);
			mt.existsSync(u) || yt(u);
			return gt(e, t, n, r);
		})(u, e, t, n)
	);
};
var Ot = { copy: (0, re.fromCallback)(Et), copySync: wt };
const bt = we,
	_t = p.default,
	Bt = g.default,
	Pt = "win32" === process.platform;
function kt(e) {
	["unlink", "chmod", "stat", "lstat", "rmdir", "readdir"].forEach((t) => {
		(e[t] = e[t] || bt[t]), (e[(t += "Sync")] = e[t] || bt[t]);
	}),
		(e.maxBusyTries = e.maxBusyTries || 3);
}
function xt(e, t, n) {
	let r = 0;
	"function" == typeof t && ((n = t), (t = {})),
		Bt(e, "rimraf: missing path"),
		Bt.strictEqual(typeof e, "string", "rimraf: path should be a string"),
		Bt.strictEqual(typeof n, "function", "rimraf: callback function required"),
		Bt(t, "rimraf: invalid options argument provided"),
		Bt.strictEqual(typeof t, "object", "rimraf: options should be object"),
		kt(t),
		Nt(e, t, function u(o) {
			if (o) {
				if (("EBUSY" === o.code || "ENOTEMPTY" === o.code || "EPERM" === o.code) && r < t.maxBusyTries) {
					r++;
					return setTimeout(() => Nt(e, t, u), 100 * r);
				}
				"ENOENT" === o.code && (o = null);
			}
			n(o);
		});
}
function Nt(e, t, n) {
	Bt(e),
		Bt(t),
		Bt("function" == typeof n),
		t.lstat(e, (r, u) =>
			r && "ENOENT" === r.code
				? n(null)
				: r && "EPERM" === r.code && Pt
				? It(e, t, r, n)
				: u && u.isDirectory()
				? Rt(e, t, r, n)
				: void t.unlink(e, (r) => {
						if (r) {
							if ("ENOENT" === r.code) return n(null);
							if ("EPERM" === r.code) return Pt ? It(e, t, r, n) : Rt(e, t, r, n);
							if ("EISDIR" === r.code) return Rt(e, t, r, n);
						}
						return n(r);
				  }),
		);
}
function It(e, t, n, r) {
	Bt(e),
		Bt(t),
		Bt("function" == typeof r),
		t.chmod(e, 438, (u) => {
			u
				? r("ENOENT" === u.code ? null : n)
				: t.stat(e, (u, o) => {
						u ? r("ENOENT" === u.code ? null : n) : o.isDirectory() ? Rt(e, t, n, r) : t.unlink(e, r);
				  });
		});
}
function Tt(e, t, n) {
	let r;
	Bt(e), Bt(t);
	try {
		t.chmodSync(e, 438);
	} catch (e) {
		if ("ENOENT" === e.code) return;
		throw n;
	}
	try {
		r = t.statSync(e);
	} catch (e) {
		if ("ENOENT" === e.code) return;
		throw n;
	}
	r.isDirectory() ? Lt(e, t, n) : t.unlinkSync(e);
}
function Rt(e, t, n, r) {
	Bt(e),
		Bt(t),
		Bt("function" == typeof r),
		t.rmdir(e, (u) => {
			!u || ("ENOTEMPTY" !== u.code && "EEXIST" !== u.code && "EPERM" !== u.code)
				? u && "ENOTDIR" === u.code
					? r(n)
					: r(u)
				: (function (e, t, n) {
						Bt(e),
							Bt(t),
							Bt("function" == typeof n),
							t.readdir(e, (r, u) => {
								if (r) return n(r);
								let o,
									i = u.length;
								if (0 === i) return t.rmdir(e, n);
								u.forEach((r) => {
									xt(_t.join(e, r), t, (r) => {
										if (!o) return r ? n((o = r)) : void (0 == --i && t.rmdir(e, n));
									});
								});
							});
				  })(e, t, r);
		});
}
function Mt(e, t) {
	let n;
	kt((t = t || {})),
		Bt(e, "rimraf: missing path"),
		Bt.strictEqual(typeof e, "string", "rimraf: path should be a string"),
		Bt(t, "rimraf: missing options"),
		Bt.strictEqual(typeof t, "object", "rimraf: options should be object");
	try {
		n = t.lstatSync(e);
	} catch (n) {
		if ("ENOENT" === n.code) return;
		"EPERM" === n.code && Pt && Tt(e, t, n);
	}
	try {
		n && n.isDirectory() ? Lt(e, t, null) : t.unlinkSync(e);
	} catch (n) {
		if ("ENOENT" === n.code) return;
		if ("EPERM" === n.code) return Pt ? Tt(e, t, n) : Lt(e, t, n);
		if ("EISDIR" !== n.code) throw n;
		Lt(e, t, n);
	}
}
function Lt(e, t, n) {
	Bt(e), Bt(t);
	try {
		t.rmdirSync(e);
	} catch (r) {
		if ("ENOTDIR" === r.code) throw n;
		if ("ENOTEMPTY" === r.code || "EEXIST" === r.code || "EPERM" === r.code)
			!(function (e, t) {
				if ((Bt(e), Bt(t), t.readdirSync(e).forEach((n) => Mt(_t.join(e, n), t)), !Pt)) {
					return t.rmdirSync(e, t);
				}
				{
					const n = Date.now();
					do {
						try {
							return t.rmdirSync(e, t);
						} catch {}
					} while (Date.now() - n < 500);
				}
			})(e, t);
		else if ("ENOENT" !== r.code) throw r;
	}
}
var jt = xt;
xt.sync = Mt;
const $t = we,
	Ht = re.fromCallback,
	Jt = jt;
var Gt = {
	remove: Ht(function (e, t) {
		if ($t.rm) return $t.rm(e, { recursive: !0, force: !0 }, t);
		Jt(e, t);
	}),
	removeSync: function (e) {
		if ($t.rmSync) return $t.rmSync(e, { recursive: !0, force: !0 });
		Jt.sync(e);
	},
};
const Vt = re.fromPromise,
	Ut = ne,
	Wt = p.default,
	zt = $e,
	Kt = Gt,
	qt = Vt(async function (e) {
		let t;
		try {
			t = await Ut.readdir(e);
		} catch {
			return zt.mkdirs(e);
		}
		return Promise.all(t.map((t) => Kt.remove(Wt.join(e, t))));
	});
function Yt(e) {
	let t;
	try {
		t = Ut.readdirSync(e);
	} catch {
		return zt.mkdirsSync(e);
	}
	t.forEach((t) => {
		(t = Wt.join(e, t)), Kt.removeSync(t);
	});
}
var Xt = { emptyDirSync: Yt, emptydirSync: Yt, emptyDir: qt, emptydir: qt };
const Zt = re.fromCallback,
	Qt = p.default,
	en = we,
	tn = $e;
var nn = {
	createFile: Zt(function (e, t) {
		function n() {
			en.writeFile(e, "", (e) => {
				if (e) return t(e);
				t();
			});
		}
		en.stat(e, (r, u) => {
			if (!r && u.isFile()) return t();
			const o = Qt.dirname(e);
			en.stat(o, (e, r) => {
				if (e)
					return "ENOENT" === e.code
						? tn.mkdirs(o, (e) => {
								if (e) return t(e);
								n();
						  })
						: t(e);
				r.isDirectory()
					? n()
					: en.readdir(o, (e) => {
							if (e) return t(e);
					  });
			});
		});
	}),
	createFileSync: function (e) {
		let t;
		try {
			t = en.statSync(e);
		} catch {}
		if (t && t.isFile()) return;
		const n = Qt.dirname(e);
		try {
			en.statSync(n).isDirectory() || en.readdirSync(n);
		} catch (e) {
			if (!e || "ENOENT" !== e.code) throw e;
			tn.mkdirsSync(n);
		}
		en.writeFileSync(e, "");
	},
};
const rn = re.fromCallback,
	un = p.default,
	on = we,
	sn = $e,
	cn = Ge.pathExists,
	{ areIdentical: an } = et;
var ln = {
	createLink: rn(function (e, t, n) {
		function r(e, t) {
			on.link(e, t, (e) => {
				if (e) return n(e);
				n(null);
			});
		}
		on.lstat(t, (u, o) => {
			on.lstat(e, (u, i) => {
				if (u) return (u.message = u.message.replace("lstat", "ensureLink")), n(u);
				if (o && an(i, o)) return n(null);
				const s = un.dirname(t);
				cn(s, (u, o) =>
					u
						? n(u)
						: o
						? r(e, t)
						: void sn.mkdirs(s, (u) => {
								if (u) return n(u);
								r(e, t);
						  }),
				);
			});
		});
	}),
	createLinkSync: function (e, t) {
		let n;
		try {
			n = on.lstatSync(t);
		} catch {}
		try {
			const t = on.lstatSync(e);
			if (n && an(t, n)) return;
		} catch (e) {
			throw ((e.message = e.message.replace("lstat", "ensureLink")), e);
		}
		const r = un.dirname(t);
		return on.existsSync(r) || sn.mkdirsSync(r), on.linkSync(e, t);
	},
};
const fn = p.default,
	dn = we,
	Dn = Ge.pathExists;
var pn = {
	symlinkPaths: function (e, t, n) {
		if (fn.isAbsolute(e)) return dn.lstat(e, (t) => (t ? ((t.message = t.message.replace("lstat", "ensureSymlink")), n(t)) : n(null, { toCwd: e, toDst: e })));
		{
			const r = fn.dirname(t),
				u = fn.join(r, e);
			return Dn(u, (t, o) =>
				t
					? n(t)
					: o
					? n(null, { toCwd: u, toDst: e })
					: dn.lstat(e, (t) => (t ? ((t.message = t.message.replace("lstat", "ensureSymlink")), n(t)) : n(null, { toCwd: e, toDst: fn.relative(r, e) }))),
			);
		}
	},
	symlinkPathsSync: function (e, t) {
		let n;
		if (fn.isAbsolute(e)) {
			if (((n = dn.existsSync(e)), !n)) throw new Error("absolute srcpath does not exist");
			return { toCwd: e, toDst: e };
		}
		{
			const r = fn.dirname(t),
				u = fn.join(r, e);
			if (((n = dn.existsSync(u)), n)) return { toCwd: u, toDst: e };
			if (((n = dn.existsSync(e)), !n)) throw new Error("relative srcpath does not exist");
			return { toCwd: e, toDst: fn.relative(r, e) };
		}
	},
};
const En = we;
var mn = {
	symlinkType: function (e, t, n) {
		if (((n = "function" == typeof t ? t : n), (t = "function" != typeof t && t))) return n(null, t);
		En.lstat(e, (e, r) => {
			if (e) return n(null, "file");
			(t = r && r.isDirectory() ? "dir" : "file"), n(null, t);
		});
	},
	symlinkTypeSync: function (e, t) {
		let n;
		if (t) return t;
		try {
			n = En.lstatSync(e);
		} catch {
			return "file";
		}
		return n && n.isDirectory() ? "dir" : "file";
	},
};
const hn = re.fromCallback,
	yn = p.default,
	Cn = ne,
	Fn = $e.mkdirs,
	gn = $e.mkdirsSync,
	An = pn.symlinkPaths,
	vn = pn.symlinkPathsSync,
	Sn = mn.symlinkType,
	wn = mn.symlinkTypeSync,
	On = Ge.pathExists,
	{ areIdentical: bn } = et;
function _n(e, t, n, r) {
	An(e, t, (u, o) => {
		if (u) return r(u);
		(e = o.toDst),
			Sn(o.toCwd, n, (n, u) => {
				if (n) return r(n);
				const o = yn.dirname(t);
				On(o, (n, i) =>
					n
						? r(n)
						: i
						? Cn.symlink(e, t, u, r)
						: void Fn(o, (n) => {
								if (n) return r(n);
								Cn.symlink(e, t, u, r);
						  }),
				);
			});
	});
}
var Bn = {
	createSymlink: hn(function (e, t, n, r) {
		(r = "function" == typeof n ? n : r),
			(n = "function" != typeof n && n),
			Cn.lstat(t, (u, o) => {
				!u && o.isSymbolicLink()
					? Promise.all([Cn.stat(e), Cn.stat(t)]).then(([u, o]) => {
							if (bn(u, o)) return r(null);
							_n(e, t, n, r);
					  })
					: _n(e, t, n, r);
			});
	}),
	createSymlinkSync: function (e, t, n) {
		let r;
		try {
			r = Cn.lstatSync(t);
		} catch {}
		if (r && r.isSymbolicLink()) {
			const n = Cn.statSync(e),
				r = Cn.statSync(t);
			if (bn(n, r)) return;
		}
		const u = vn(e, t);
		(e = u.toDst), (n = wn(u.toCwd, n));
		const o = yn.dirname(t);
		return Cn.existsSync(o) || gn(o), Cn.symlinkSync(e, t, n);
	},
};
const { createFile: Pn, createFileSync: kn } = nn,
	{ createLink: xn, createLinkSync: Nn } = ln,
	{ createSymlink: In, createSymlinkSync: Tn } = Bn;
var Rn = {
	createFile: Pn,
	createFileSync: kn,
	ensureFile: Pn,
	ensureFileSync: kn,
	createLink: xn,
	createLinkSync: Nn,
	ensureLink: xn,
	ensureLinkSync: Nn,
	createSymlink: In,
	createSymlinkSync: Tn,
	ensureSymlink: In,
	ensureSymlinkSync: Tn,
};
var Mn = {
	stringify: function (e, { EOL: t = "\n", finalEOL: n = !0, replacer: r = null, spaces: u } = {}) {
		const o = n ? t : "";
		return JSON.stringify(e, r, u).replace(/\n/g, t) + o;
	},
	stripBom: function (e) {
		return Buffer.isBuffer(e) && (e = e.toString("utf8")), e.replace(/^\uFEFF/, "");
	},
};
let Ln;
try {
	Ln = we;
} catch (e) {
	Ln = D.default;
}
const jn = re,
	{ stringify: $n, stripBom: Hn } = Mn;
const Jn = jn.fromPromise(async function (e, t = {}) {
	"string" == typeof t && (t = { encoding: t });
	const n = t.fs || Ln,
		r = !("throws" in t) || t.throws;
	let u,
		o = await jn.fromCallback(n.readFile)(e, t);
	o = Hn(o);
	try {
		u = JSON.parse(o, t ? t.reviver : null);
	} catch (t) {
		if (r) throw ((t.message = `${e}: ${t.message}`), t);
		return null;
	}
	return u;
});
const Gn = jn.fromPromise(async function (e, t, n = {}) {
	const r = n.fs || Ln,
		u = $n(t, n);
	await jn.fromCallback(r.writeFile)(e, u, n);
});
const Vn = {
	readFile: Jn,
	readFileSync: function (e, t = {}) {
		"string" == typeof t && (t = { encoding: t });
		const n = t.fs || Ln,
			r = !("throws" in t) || t.throws;
		try {
			let r = n.readFileSync(e, t);
			return (r = Hn(r)), JSON.parse(r, t.reviver);
		} catch (t) {
			if (r) throw ((t.message = `${e}: ${t.message}`), t);
			return null;
		}
	},
	writeFile: Gn,
	writeFileSync: function (e, t, n = {}) {
		const r = n.fs || Ln,
			u = $n(t, n);
		return r.writeFileSync(e, u, n);
	},
};
var Un = { readJson: Vn.readFile, readJsonSync: Vn.readFileSync, writeJson: Vn.writeFile, writeJsonSync: Vn.writeFileSync };
const Wn = re.fromCallback,
	zn = we,
	Kn = p.default,
	qn = $e,
	Yn = Ge.pathExists;
var Xn = {
	outputFile: Wn(function (e, t, n, r) {
		"function" == typeof n && ((r = n), (n = "utf8"));
		const u = Kn.dirname(e);
		Yn(u, (o, i) =>
			o
				? r(o)
				: i
				? zn.writeFile(e, t, n, r)
				: void qn.mkdirs(u, (u) => {
						if (u) return r(u);
						zn.writeFile(e, t, n, r);
				  }),
		);
	}),
	outputFileSync: function (e, ...t) {
		const n = Kn.dirname(e);
		if (zn.existsSync(n)) return zn.writeFileSync(e, ...t);
		qn.mkdirsSync(n), zn.writeFileSync(e, ...t);
	},
};
const { stringify: Zn } = Mn,
	{ outputFile: Qn } = Xn;
var er = async function (e, t, n = {}) {
	const r = Zn(t, n);
	await Qn(e, r, n);
};
const { stringify: tr } = Mn,
	{ outputFileSync: nr } = Xn;
var rr = function (e, t, n) {
	const r = tr(t, n);
	nr(e, r, n);
};
const ur = re.fromPromise,
	or = Un;
(or.outputJson = ur(er)),
	(or.outputJsonSync = rr),
	(or.outputJSON = or.outputJson),
	(or.outputJSONSync = or.outputJsonSync),
	(or.writeJSON = or.writeJson),
	(or.writeJSONSync = or.writeJsonSync),
	(or.readJSON = or.readJson),
	(or.readJSONSync = or.readJsonSync);
var ir = or;
const sr = we,
	cr = p.default,
	ar = Ot.copy,
	lr = Gt.remove,
	fr = $e.mkdirp,
	dr = Ge.pathExists,
	Dr = et;
function pr(e, t, n, r, u) {
	return r
		? Er(e, t, n, u)
		: n
		? lr(t, (r) => (r ? u(r) : Er(e, t, n, u)))
		: void dr(t, (r, o) => (r ? u(r) : o ? u(new Error("dest already exists.")) : Er(e, t, n, u)));
}
function Er(e, t, n, r) {
	sr.rename(e, t, (u) =>
		u
			? "EXDEV" !== u.code
				? r(u)
				: (function (e, t, n, r) {
						const u = { overwrite: n, errorOnExist: !0 };
						ar(e, t, u, (t) => (t ? r(t) : lr(e, r)));
				  })(e, t, n, r)
			: r(),
	);
}
var mr = function (e, t, n, r) {
	"function" == typeof n && ((r = n), (n = {}));
	const u = n.overwrite || n.clobber || !1;
	Dr.checkPaths(e, t, "move", n, (n, o) => {
		if (n) return r(n);
		const { srcStat: i, isChangingCase: s = !1 } = o;
		Dr.checkParentPaths(e, i, t, "move", (n) =>
			n
				? r(n)
				: (function (e) {
						const t = cr.dirname(e);
						return cr.parse(t).root === t;
				  })(t)
				? pr(e, t, u, s, r)
				: void fr(cr.dirname(t), (n) => (n ? r(n) : pr(e, t, u, s, r))),
		);
	});
};
const hr = we,
	yr = p.default,
	Cr = Ot.copySync,
	Fr = Gt.removeSync,
	gr = $e.mkdirpSync,
	Ar = et;
function vr(e, t, n) {
	try {
		hr.renameSync(e, t);
	} catch (r) {
		if ("EXDEV" !== r.code) throw r;
		return (function (e, t, n) {
			const r = { overwrite: n, errorOnExist: !0 };
			return Cr(e, t, r), Fr(e);
		})(e, t, n);
	}
}
var Sr = function (e, t, n) {
	const r = (n = n || {}).overwrite || n.clobber || !1,
		{ srcStat: u, isChangingCase: o = !1 } = Ar.checkPathsSync(e, t, "move", n);
	return (
		Ar.checkParentPathsSync(e, u, t, "move"),
		(function (e) {
			const t = yr.dirname(e);
			return yr.parse(t).root === t;
		})(t) || gr(yr.dirname(t)),
		(function (e, t, n, r) {
			if (r) return vr(e, t, n);
			if (n) return Fr(t), vr(e, t, n);
			if (hr.existsSync(t)) throw new Error("dest already exists.");
			return vr(e, t, n);
		})(e, t, r, o)
	);
};
var wr,
	Or,
	br,
	_r,
	Br,
	Pr = { move: (0, re.fromCallback)(mr), moveSync: Sr },
	kr = { ...ne, ...Ot, ...Xt, ...Rn, ...ir, ...$e, ...Pr, ...Xn, ...Ge, ...Gt },
	xr = {},
	Nr = { exports: {} },
	Ir = { exports: {} };
function Tr() {
	if (Or) return wr;
	Or = 1;
	var e = 1e3,
		t = 60 * e,
		n = 60 * t,
		r = 24 * n,
		u = 7 * r,
		o = 365.25 * r;
	function i(e, t, n, r) {
		var u = t >= 1.5 * n;
		return Math.round(e / n) + " " + r + (u ? "s" : "");
	}
	return (wr = function (s, c) {
		c = c || {};
		var a = typeof s;
		if ("string" === a && s.length > 0)
			return (function (i) {
				if ((i = String(i)).length > 100) return;
				var s = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(i);
				if (!s) return;
				var c = parseFloat(s[1]);
				switch ((s[2] || "ms").toLowerCase()) {
					case "years":
					case "year":
					case "yrs":
					case "yr":
					case "y":
						return c * o;
					case "weeks":
					case "week":
					case "w":
						return c * u;
					case "days":
					case "day":
					case "d":
						return c * r;
					case "hours":
					case "hour":
					case "hrs":
					case "hr":
					case "h":
						return c * n;
					case "minutes":
					case "minute":
					case "mins":
					case "min":
					case "m":
						return c * t;
					case "seconds":
					case "second":
					case "secs":
					case "sec":
					case "s":
						return c * e;
					case "milliseconds":
					case "millisecond":
					case "msecs":
					case "msec":
					case "ms":
						return c;
					default:
						return;
				}
			})(s);
		if ("number" === a && isFinite(s))
			return c.long
				? (function (u) {
						var o = Math.abs(u);
						if (o >= r) return i(u, o, r, "day");
						if (o >= n) return i(u, o, n, "hour");
						if (o >= t) return i(u, o, t, "minute");
						if (o >= e) return i(u, o, e, "second");
						return u + " ms";
				  })(s)
				: (function (u) {
						var o = Math.abs(u);
						if (o >= r) return Math.round(u / r) + "d";
						if (o >= n) return Math.round(u / n) + "h";
						if (o >= t) return Math.round(u / t) + "m";
						if (o >= e) return Math.round(u / e) + "s";
						return u + "ms";
				  })(s);
		throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(s));
	});
}
function Rr() {
	if (_r) return br;
	return (
		(_r = 1),
		(br = function (e) {
			function t(e) {
				let r,
					u,
					o,
					i = null;
				function s(...e) {
					if (!s.enabled) return;
					const n = s,
						u = Number(new Date()),
						o = u - (r || u);
					(n.diff = o), (n.prev = r), (n.curr = u), (r = u), (e[0] = t.coerce(e[0])), "string" != typeof e[0] && e.unshift("%O");
					let i = 0;
					(e[0] = e[0].replace(/%([a-zA-Z%])/g, (r, u) => {
						if ("%%" === r) return "%";
						i++;
						const o = t.formatters[u];
						if ("function" == typeof o) {
							const t = e[i];
							(r = o.call(n, t)), e.splice(i, 1), i--;
						}
						return r;
					})),
						t.formatArgs.call(n, e);
					(n.log || t.log).apply(n, e);
				}
				return (
					(s.namespace = e),
					(s.useColors = t.useColors()),
					(s.color = t.selectColor(e)),
					(s.extend = n),
					(s.destroy = t.destroy),
					Object.defineProperty(s, "enabled", {
						enumerable: !0,
						configurable: !1,
						get: () => (null !== i ? i : (u !== t.namespaces && ((u = t.namespaces), (o = t.enabled(e))), o)),
						set: (e) => {
							i = e;
						},
					}),
					"function" == typeof t.init && t.init(s),
					s
				);
			}
			function n(e, n) {
				const r = t(this.namespace + (void 0 === n ? ":" : n) + e);
				return (r.log = this.log), r;
			}
			function r(e) {
				return e
					.toString()
					.substring(2, e.toString().length - 2)
					.replace(/\.\*\?$/, "*");
			}
			return (
				(t.debug = t),
				(t.default = t),
				(t.coerce = function (e) {
					if (e instanceof Error) return e.stack || e.message;
					return e;
				}),
				(t.disable = function () {
					const e = [...t.names.map(r), ...t.skips.map(r).map((e) => "-" + e)].join(",");
					return t.enable(""), e;
				}),
				(t.enable = function (e) {
					let n;
					t.save(e), (t.namespaces = e), (t.names = []), (t.skips = []);
					const r = ("string" == typeof e ? e : "").split(/[\s,]+/),
						u = r.length;
					for (n = 0; n < u; n++)
						r[n] && ("-" === (e = r[n].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.slice(1) + "$")) : t.names.push(new RegExp("^" + e + "$")));
				}),
				(t.enabled = function (e) {
					if ("*" === e[e.length - 1]) return !0;
					let n, r;
					for (n = 0, r = t.skips.length; n < r; n++) if (t.skips[n].test(e)) return !1;
					for (n = 0, r = t.names.length; n < r; n++) if (t.names[n].test(e)) return !0;
					return !1;
				}),
				(t.humanize = Tr()),
				(t.destroy = function () {
					console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
				}),
				Object.keys(e).forEach((n) => {
					t[n] = e[n];
				}),
				(t.names = []),
				(t.skips = []),
				(t.formatters = {}),
				(t.selectColor = function (e) {
					let n = 0;
					for (let t = 0; t < e.length; t++) (n = (n << 5) - n + e.charCodeAt(t)), (n |= 0);
					return t.colors[Math.abs(n) % t.colors.length];
				}),
				t.enable(t.load()),
				t
			);
		}),
		br
	);
}
var Mr,
	Lr,
	jr,
	$r,
	Hr,
	Jr,
	Gr = { exports: {} };
function Vr() {
	return Lr
		? Mr
		: ((Lr = 1),
		  (Mr = (e, t = process.argv) => {
				const n = e.startsWith("-") ? "" : 1 === e.length ? "-" : "--",
					r = t.indexOf(n + e),
					u = t.indexOf("--");
				return -1 !== r && (-1 === u || r < u);
		  }));
}
function Ur() {
	return (
		Hr ||
			((Hr = 1),
			(function (e, t) {
				const n = A.default,
					r = F.default;
				(t.init = function (e) {
					e.inspectOpts = {};
					const n = Object.keys(t.inspectOpts);
					for (let r = 0; r < n.length; r++) e.inspectOpts[n[r]] = t.inspectOpts[n[r]];
				}),
					(t.log = function (...e) {
						return process.stderr.write(r.format(...e) + "\n");
					}),
					(t.formatArgs = function (n) {
						const { namespace: r, useColors: u } = this;
						if (u) {
							const t = this.color,
								u = "[3" + (t < 8 ? t : "8;5;" + t),
								o = `  ${u};1m${r} [0m`;
							(n[0] = o + n[0].split("\n").join("\n" + o)), n.push(u + "m+" + e.exports.humanize(this.diff) + "[0m");
						} else
							n[0] =
								(function () {
									if (t.inspectOpts.hideDate) return "";
									return new Date().toISOString() + " ";
								})() +
								r +
								" " +
								n[0];
					}),
					(t.save = function (e) {
						e ? (process.env.DEBUG = e) : delete process.env.DEBUG;
					}),
					(t.load = function () {
						return process.env.DEBUG;
					}),
					(t.useColors = function () {
						return "colors" in t.inspectOpts ? Boolean(t.inspectOpts.colors) : n.isatty(process.stderr.fd);
					}),
					(t.destroy = r.deprecate(
						() => {},
						"Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
					)),
					(t.colors = [6, 2, 3, 4, 5, 1]);
				try {
					const e = (function () {
						if ($r) return jr;
						$r = 1;
						const e = E.default,
							t = A.default,
							n = Vr(),
							{ env: r } = process;
						let u;
						function o(e) {
							return 0 !== e && { level: e, hasBasic: !0, has256: e >= 2, has16m: e >= 3 };
						}
						function i(t, o) {
							if (0 === u) return 0;
							if (n("color=16m") || n("color=full") || n("color=truecolor")) return 3;
							if (n("color=256")) return 2;
							if (t && !o && void 0 === u) return 0;
							const i = u || 0;
							if ("dumb" === r.TERM) return i;
							if ("win32" === process.platform) {
								const t = e.release().split(".");
								return Number(t[0]) >= 10 && Number(t[2]) >= 10586 ? (Number(t[2]) >= 14931 ? 3 : 2) : 1;
							}
							if ("CI" in r)
								return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((e) => e in r) || "codeship" === r.CI_NAME ? 1 : i;
							if ("TEAMCITY_VERSION" in r) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(r.TEAMCITY_VERSION) ? 1 : 0;
							if ("truecolor" === r.COLORTERM) return 3;
							if ("TERM_PROGRAM" in r) {
								const e = parseInt((r.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
								switch (r.TERM_PROGRAM) {
									case "iTerm.app":
										return e >= 3 ? 3 : 2;
									case "Apple_Terminal":
										return 2;
								}
							}
							return /-256(color)?$/i.test(r.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(r.TERM) || "COLORTERM" in r ? 1 : i;
						}
						return (
							n("no-color") || n("no-colors") || n("color=false") || n("color=never")
								? (u = 0)
								: (n("color") || n("colors") || n("color=true") || n("color=always")) && (u = 1),
							"FORCE_COLOR" in r &&
								(u = "true" === r.FORCE_COLOR ? 1 : "false" === r.FORCE_COLOR ? 0 : 0 === r.FORCE_COLOR.length ? 1 : Math.min(parseInt(r.FORCE_COLOR, 10), 3)),
							(jr = {
								supportsColor: function (e) {
									return o(i(e, e && e.isTTY));
								},
								stdout: o(i(!0, t.isatty(1))),
								stderr: o(i(!0, t.isatty(2))),
							})
						);
					})();
					e &&
						(e.stderr || e).level >= 2 &&
						(t.colors = [
							20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128,
							129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201,
							202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221,
						]);
				} catch (e) {}
				(t.inspectOpts = Object.keys(process.env)
					.filter((e) => /^debug_/i.test(e))
					.reduce((e, t) => {
						const n = t
							.substring(6)
							.toLowerCase()
							.replace(/_([a-z])/g, (e, t) => t.toUpperCase());
						let r = process.env[t];
						return (r = !!/^(yes|on|true|enabled)$/i.test(r) || (!/^(no|off|false|disabled)$/i.test(r) && ("null" === r ? null : Number(r)))), (e[n] = r), e;
					}, {})),
					(e.exports = Rr()(t));
				const { formatters: u } = e.exports;
				(u.o = function (e) {
					return (
						(this.inspectOpts.colors = this.useColors),
						r
							.inspect(e, this.inspectOpts)
							.split("\n")
							.map((e) => e.trim())
							.join(" ")
					);
				}),
					(u.O = function (e) {
						return (this.inspectOpts.colors = this.useColors), r.inspect(e, this.inspectOpts);
					});
			})(Gr, Gr.exports)),
		Gr.exports
	);
}
(Jr = Nr),
	"undefined" == typeof process || "renderer" === process.type || !0 === process.browser || process.__nwjs
		? (Jr.exports =
				(Br ||
					((Br = 1),
					(function (e, t) {
						(t.formatArgs = function (t) {
							if (
								((t[0] =
									(this.useColors ? "%c" : "") +
									this.namespace +
									(this.useColors ? " %c" : " ") +
									t[0] +
									(this.useColors ? "%c " : " ") +
									"+" +
									e.exports.humanize(this.diff)),
								!this.useColors)
							)
								return;
							const n = "color: " + this.color;
							t.splice(1, 0, n, "color: inherit");
							let r = 0,
								u = 0;
							t[0].replace(/%[a-zA-Z%]/g, (e) => {
								"%%" !== e && (r++, "%c" === e && (u = r));
							}),
								t.splice(u, 0, n);
						}),
							(t.save = function (e) {
								try {
									e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug");
								} catch (e) {}
							}),
							(t.load = function () {
								let e;
								try {
									e = t.storage.getItem("debug");
								} catch (e) {}
								return !e && "undefined" != typeof process && "env" in process && (e = process.env.DEBUG), e;
							}),
							(t.useColors = function () {
								return (
									!("undefined" == typeof window || !window.process || ("renderer" !== window.process.type && !window.process.__nwjs)) ||
									(("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) &&
										(("undefined" != typeof document &&
											document.documentElement &&
											document.documentElement.style &&
											document.documentElement.style.WebkitAppearance) ||
											("undefined" != typeof window && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
											("undefined" != typeof navigator &&
												navigator.userAgent &&
												navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
												parseInt(RegExp.$1, 10) >= 31) ||
											("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))))
								);
							}),
							(t.storage = (function () {
								try {
									return localStorage;
								} catch (e) {}
							})()),
							(t.destroy = (() => {
								let e = !1;
								return () => {
									e ||
										((e = !0),
										console.warn(
											"Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
										));
								};
							})()),
							(t.colors = [
								"#0000CC",
								"#0000FF",
								"#0033CC",
								"#0033FF",
								"#0066CC",
								"#0066FF",
								"#0099CC",
								"#0099FF",
								"#00CC00",
								"#00CC33",
								"#00CC66",
								"#00CC99",
								"#00CCCC",
								"#00CCFF",
								"#3300CC",
								"#3300FF",
								"#3333CC",
								"#3333FF",
								"#3366CC",
								"#3366FF",
								"#3399CC",
								"#3399FF",
								"#33CC00",
								"#33CC33",
								"#33CC66",
								"#33CC99",
								"#33CCCC",
								"#33CCFF",
								"#6600CC",
								"#6600FF",
								"#6633CC",
								"#6633FF",
								"#66CC00",
								"#66CC33",
								"#9900CC",
								"#9900FF",
								"#9933CC",
								"#9933FF",
								"#99CC00",
								"#99CC33",
								"#CC0000",
								"#CC0033",
								"#CC0066",
								"#CC0099",
								"#CC00CC",
								"#CC00FF",
								"#CC3300",
								"#CC3333",
								"#CC3366",
								"#CC3399",
								"#CC33CC",
								"#CC33FF",
								"#CC6600",
								"#CC6633",
								"#CC9900",
								"#CC9933",
								"#CCCC00",
								"#CCCC33",
								"#FF0000",
								"#FF0033",
								"#FF0066",
								"#FF0099",
								"#FF00CC",
								"#FF00FF",
								"#FF3300",
								"#FF3333",
								"#FF3366",
								"#FF3399",
								"#FF33CC",
								"#FF33FF",
								"#FF6600",
								"#FF6633",
								"#FF9900",
								"#FF9933",
								"#FFCC00",
								"#FFCC33",
							]),
							(t.log = console.debug || console.log || (() => {})),
							(e.exports = Rr()(t));
						const { formatters: n } = e.exports;
						n.j = function (e) {
							try {
								return JSON.stringify(e);
							} catch (e) {
								return "[UnexpectedJSONParseError]: " + e.message;
							}
						};
					})(Ir, Ir.exports)),
				Ir.exports))
		: (Jr.exports = Ur());
var Wr = function (e) {
	return (e = e || {}).circles
		? (function (e) {
				var t = [],
					n = [];
				return e.proto
					? function e(u) {
							if ("object" != typeof u || null === u) return u;
							if (u instanceof Date) return new Date(u);
							if (Array.isArray(u)) return r(u, e);
							if (u instanceof Map) return new Map(r(Array.from(u), e));
							if (u instanceof Set) return new Set(r(Array.from(u), e));
							var o = {};
							for (var i in (t.push(u), n.push(o), u)) {
								var s = u[i];
								if ("object" != typeof s || null === s) o[i] = s;
								else if (s instanceof Date) o[i] = new Date(s);
								else if (s instanceof Map) o[i] = new Map(r(Array.from(s), e));
								else if (s instanceof Set) o[i] = new Set(r(Array.from(s), e));
								else if (ArrayBuffer.isView(s)) o[i] = zr(s);
								else {
									var c = t.indexOf(s);
									o[i] = -1 !== c ? n[c] : e(s);
								}
							}
							return t.pop(), n.pop(), o;
					  }
					: function e(u) {
							if ("object" != typeof u || null === u) return u;
							if (u instanceof Date) return new Date(u);
							if (Array.isArray(u)) return r(u, e);
							if (u instanceof Map) return new Map(r(Array.from(u), e));
							if (u instanceof Set) return new Set(r(Array.from(u), e));
							var o = {};
							for (var i in (t.push(u), n.push(o), u))
								if (!1 !== Object.hasOwnProperty.call(u, i)) {
									var s = u[i];
									if ("object" != typeof s || null === s) o[i] = s;
									else if (s instanceof Date) o[i] = new Date(s);
									else if (s instanceof Map) o[i] = new Map(r(Array.from(s), e));
									else if (s instanceof Set) o[i] = new Set(r(Array.from(s), e));
									else if (ArrayBuffer.isView(s)) o[i] = zr(s);
									else {
										var c = t.indexOf(s);
										o[i] = -1 !== c ? n[c] : e(s);
									}
								}
							return t.pop(), n.pop(), o;
					  };
				function r(e, r) {
					for (var u = Object.keys(e), o = new Array(u.length), i = 0; i < u.length; i++) {
						var s = u[i],
							c = e[s];
						if ("object" != typeof c || null === c) o[s] = c;
						else if (c instanceof Date) o[s] = new Date(c);
						else if (ArrayBuffer.isView(c)) o[s] = zr(c);
						else {
							var a = t.indexOf(c);
							o[s] = -1 !== a ? n[a] : r(c);
						}
					}
					return o;
				}
		  })(e)
		: e.proto
		? function e(n) {
				if ("object" != typeof n || null === n) return n;
				if (n instanceof Date) return new Date(n);
				if (Array.isArray(n)) return t(n, e);
				if (n instanceof Map) return new Map(t(Array.from(n), e));
				if (n instanceof Set) return new Set(t(Array.from(n), e));
				var r = {};
				for (var u in n) {
					var o = n[u];
					"object" != typeof o || null === o
						? (r[u] = o)
						: o instanceof Date
						? (r[u] = new Date(o))
						: o instanceof Map
						? (r[u] = new Map(t(Array.from(o), e)))
						: o instanceof Set
						? (r[u] = new Set(t(Array.from(o), e)))
						: ArrayBuffer.isView(o)
						? (r[u] = zr(o))
						: (r[u] = e(o));
				}
				return r;
		  }
		: n;
	function t(e, t) {
		for (var n = Object.keys(e), r = new Array(n.length), u = 0; u < n.length; u++) {
			var o = n[u],
				i = e[o];
			"object" != typeof i || null === i ? (r[o] = i) : i instanceof Date ? (r[o] = new Date(i)) : ArrayBuffer.isView(i) ? (r[o] = zr(i)) : (r[o] = t(i));
		}
		return r;
	}
	function n(e) {
		if ("object" != typeof e || null === e) return e;
		if (e instanceof Date) return new Date(e);
		if (Array.isArray(e)) return t(e, n);
		if (e instanceof Map) return new Map(t(Array.from(e), n));
		if (e instanceof Set) return new Set(t(Array.from(e), n));
		var r = {};
		for (var u in e)
			if (!1 !== Object.hasOwnProperty.call(e, u)) {
				var o = e[u];
				"object" != typeof o || null === o
					? (r[u] = o)
					: o instanceof Date
					? (r[u] = new Date(o))
					: o instanceof Map
					? (r[u] = new Map(t(Array.from(o), n)))
					: o instanceof Set
					? (r[u] = new Set(t(Array.from(o), n)))
					: ArrayBuffer.isView(o)
					? (r[u] = zr(o))
					: (r[u] = n(o));
			}
		return r;
	}
};
function zr(e) {
	return e instanceof Buffer ? Buffer.from(e) : new e.constructor(e.buffer.slice(), e.byteOffset, e.length);
}
const Kr = F.default,
	qr = Nr.exports("log4js:configuration"),
	Yr = [],
	Xr = [],
	Zr = (e) => !e,
	Qr = (e) => e && "object" == typeof e && !Array.isArray(e),
	eu = (e, t, n) => {
		(Array.isArray(t) ? t : [t]).forEach((t) => {
			if (t) throw new Error(`Problem with log4js configuration: (${Kr.inspect(e, { depth: 5 })}) - ${n}`);
		});
	};
var tu = {
		configure: (e) => {
			qr("New configuration to be validated: ", e),
				eu(e, Zr(Qr(e)), "must be an object."),
				qr(`Calling pre-processing listeners (${Yr.length})`),
				Yr.forEach((t) => t(e)),
				qr("Configuration pre-processing finished."),
				qr(`Calling configuration listeners (${Xr.length})`),
				Xr.forEach((t) => t(e)),
				qr("Configuration finished.");
		},
		addListener: (e) => {
			Xr.push(e), qr(`Added listener, now ${Xr.length} listeners`);
		},
		addPreProcessingListener: (e) => {
			Yr.push(e), qr(`Added pre-processing listener, now ${Yr.length} listeners`);
		},
		throwExceptionIf: eu,
		anObject: Qr,
		anInteger: (e) => e && "number" == typeof e && Number.isInteger(e),
		validIdentifier: (e) => /^[A-Za-z][A-Za-z0-9_]*$/g.test(e),
		not: Zr,
	},
	nu = { exports: {} };
!(function (e) {
	function t(e, t) {
		for (var n = e.toString(); n.length < t; ) n = "0" + n;
		return n;
	}
	function n(e) {
		return t(e, 2);
	}
	function r(r, u) {
		"string" != typeof r && ((u = r), (r = e.exports.ISO8601_FORMAT)), u || (u = e.exports.now());
		var o = n(u.getDate()),
			i = n(u.getMonth() + 1),
			s = n(u.getFullYear()),
			c = n(s.substring(2, 4)),
			a = r.indexOf("yyyy") > -1 ? s : c,
			l = n(u.getHours()),
			f = n(u.getMinutes()),
			d = n(u.getSeconds()),
			D = t(u.getMilliseconds(), 3),
			p = (function (e) {
				var t = Math.abs(e),
					n = String(Math.floor(t / 60)),
					r = String(t % 60);
				return (n = ("0" + n).slice(-2)), (r = ("0" + r).slice(-2)), 0 === e ? "Z" : (e < 0 ? "+" : "-") + n + ":" + r;
			})(u.getTimezoneOffset());
		return r
			.replace(/dd/g, o)
			.replace(/MM/g, i)
			.replace(/y{1,4}/g, a)
			.replace(/hh/g, l)
			.replace(/mm/g, f)
			.replace(/ss/g, d)
			.replace(/SSS/g, D)
			.replace(/O/g, p);
	}
	function u(e, t, n, r) {
		e["set" + (r ? "" : "UTC") + t](n);
	}
	(e.exports = r),
		(e.exports.asString = r),
		(e.exports.parse = function (t, n, r) {
			if (!t) throw new Error("pattern must be supplied");
			return (function (t, n, r) {
				var o = t.indexOf("O") < 0,
					i = !1,
					s = [
						{
							pattern: /y{1,4}/,
							regexp: "\\d{1,4}",
							fn: function (e, t) {
								u(e, "FullYear", t, o);
							},
						},
						{
							pattern: /MM/,
							regexp: "\\d{1,2}",
							fn: function (e, t) {
								u(e, "Month", t - 1, o), e.getMonth() !== t - 1 && (i = !0);
							},
						},
						{
							pattern: /dd/,
							regexp: "\\d{1,2}",
							fn: function (e, t) {
								i && u(e, "Month", e.getMonth() - 1, o), u(e, "Date", t, o);
							},
						},
						{
							pattern: /hh/,
							regexp: "\\d{1,2}",
							fn: function (e, t) {
								u(e, "Hours", t, o);
							},
						},
						{
							pattern: /mm/,
							regexp: "\\d\\d",
							fn: function (e, t) {
								u(e, "Minutes", t, o);
							},
						},
						{
							pattern: /ss/,
							regexp: "\\d\\d",
							fn: function (e, t) {
								u(e, "Seconds", t, o);
							},
						},
						{
							pattern: /SSS/,
							regexp: "\\d\\d\\d",
							fn: function (e, t) {
								u(e, "Milliseconds", t, o);
							},
						},
						{
							pattern: /O/,
							regexp: "[+-]\\d{1,2}:?\\d{2}?|Z",
							fn: function (e, t) {
								t = "Z" === t ? 0 : t.replace(":", "");
								var n = Math.abs(t),
									r = (t > 0 ? -1 : 1) * ((n % 100) + 60 * Math.floor(n / 100));
								e.setUTCMinutes(e.getUTCMinutes() + r);
							},
						},
					],
					c = s.reduce(
						function (e, t) {
							return (
								t.pattern.test(e.regexp)
									? ((t.index = e.regexp.match(t.pattern).index), (e.regexp = e.regexp.replace(t.pattern, "(" + t.regexp + ")")))
									: (t.index = -1),
								e
							);
						},
						{ regexp: t, index: [] },
					),
					a = s.filter(function (e) {
						return e.index > -1;
					});
				a.sort(function (e, t) {
					return e.index - t.index;
				});
				var l = new RegExp(c.regexp).exec(n);
				if (l) {
					var f = r || e.exports.now();
					return (
						a.forEach(function (e, t) {
							e.fn(f, l[t + 1]);
						}),
						f
					);
				}
				throw new Error("String '" + n + "' could not be parsed as '" + t + "'");
			})(t, n, r);
		}),
		(e.exports.now = function () {
			return new Date();
		}),
		(e.exports.ISO8601_FORMAT = "yyyy-MM-ddThh:mm:ss.SSS"),
		(e.exports.ISO8601_WITH_TZ_OFFSET_FORMAT = "yyyy-MM-ddThh:mm:ss.SSSO"),
		(e.exports.DATETIME_FORMAT = "dd MM yyyy hh:mm:ss.SSS"),
		(e.exports.ABSOLUTETIME_FORMAT = "hh:mm:ss.SSS");
})(nu);
const ru = nu.exports,
	uu = E.default,
	ou = F.default,
	iu = p.default,
	su = {
		bold: [1, 22],
		italic: [3, 23],
		underline: [4, 24],
		inverse: [7, 27],
		white: [37, 39],
		grey: [90, 39],
		black: [90, 39],
		blue: [34, 39],
		cyan: [36, 39],
		green: [32, 39],
		magenta: [35, 39],
		red: [91, 39],
		yellow: [33, 39],
	};
function cu(e) {
	return e ? `[${su[e][0]}m` : "";
}
function au(e) {
	return e ? `[${su[e][1]}m` : "";
}
function lu(e, t) {
	return (n = ou.format("[%s] [%s] %s - ", ru.asString(e.startTime), e.level.toString(), e.categoryName)), cu((r = t)) + n + au(r);
	var n, r;
}
function fu(e) {
	return lu(e) + ou.format(...e.data);
}
function du(e) {
	return lu(e, e.level.colour) + ou.format(...e.data);
}
function Du(e) {
	return ou.format(...e.data);
}
function pu(e) {
	return e.data[0];
}
function Eu(e, t) {
	const n = /%(-?[0-9]+)?(\.?-?[0-9]+)?([[\]cdhmnprzxXyflos%])(\{([^}]+)\})?|([^%]+)/;
	function r(e) {
		return e && e.pid ? e.pid.toString() : process.pid.toString();
	}
	e = e || "%r %p %c - %m%n";
	const u = {
		c: function (e, t) {
			let n = e.categoryName;
			if (t) {
				const e = parseInt(t, 10),
					r = n.split(".");
				e < r.length && (n = r.slice(r.length - e).join("."));
			}
			return n;
		},
		d: function (e, t) {
			let n = ru.ISO8601_FORMAT;
			return (
				t &&
					((n = t),
					"ISO8601" === n
						? (n = ru.ISO8601_FORMAT)
						: "ISO8601_WITH_TZ_OFFSET" === n
						? (n = ru.ISO8601_WITH_TZ_OFFSET_FORMAT)
						: "ABSOLUTE" === n
						? (n = ru.ABSOLUTETIME_FORMAT)
						: "DATE" === n && (n = ru.DATETIME_FORMAT)),
				ru.asString(n, e.startTime)
			);
		},
		h: function () {
			return uu.hostname().toString();
		},
		m: function (e) {
			return ou.format(...e.data);
		},
		n: function () {
			return uu.EOL;
		},
		p: function (e) {
			return e.level.toString();
		},
		r: function (e) {
			return ru.asString("hh:mm:ss", e.startTime);
		},
		"[": function (e) {
			return cu(e.level.colour);
		},
		"]": function (e) {
			return au(e.level.colour);
		},
		y: function () {
			return r();
		},
		z: r,
		"%": function () {
			return "%";
		},
		x: function (e, n) {
			return void 0 !== t[n] ? ("function" == typeof t[n] ? t[n](e) : t[n]) : null;
		},
		X: function (e, t) {
			const n = e.context[t];
			return void 0 !== n ? ("function" == typeof n ? n(e) : n) : null;
		},
		f: function (e, t) {
			let n = e.fileName || "";
			if (t) {
				const e = parseInt(t, 10),
					r = n.split(iu.sep);
				r.length > e && (n = r.slice(-e).join(iu.sep));
			}
			return n;
		},
		l: function (e) {
			return e.lineNumber ? `${e.lineNumber}` : "";
		},
		o: function (e) {
			return e.columnNumber ? `${e.columnNumber}` : "";
		},
		s: function (e) {
			return e.callStack || "";
		},
	};
	function o(e, t, n) {
		return u[e](t, n);
	}
	function i(e, t, n) {
		let r = e;
		return (
			(r = (function (e, t) {
				let n;
				return e ? ((n = parseInt(e.substr(1), 10)), n > 0 ? t.slice(0, n) : t.slice(n)) : t;
			})(t, r)),
			(r = (function (e, t) {
				let n;
				if (e)
					if ("-" === e.charAt(0)) for (n = parseInt(e.substr(1), 10); t.length < n; ) t += " ";
					else for (n = parseInt(e, 10); t.length < n; ) t = ` ${t}`;
				return t;
			})(n, r)),
			r
		);
	}
	return function (t) {
		let r,
			u = "",
			s = e;
		for (; null !== (r = n.exec(s)); ) {
			const e = r[1],
				n = r[2],
				c = r[3],
				a = r[5],
				l = r[6];
			if (l) u += l.toString();
			else {
				u += i(o(c, t, a), n, e);
			}
			s = s.substr(r.index + r[0].length);
		}
		return u;
	};
}
const mu = {
	messagePassThrough: () => Du,
	basic: () => fu,
	colored: () => du,
	coloured: () => du,
	pattern: (e) => Eu(e && e.pattern, e && e.tokens),
	dummy: () => pu,
};
var hu = {
	basicLayout: fu,
	messagePassThroughLayout: Du,
	patternLayout: Eu,
	colouredLayout: du,
	coloredLayout: du,
	dummyLayout: pu,
	addLayout(e, t) {
		mu[e] = t;
	},
	layout: (e, t) => mu[e] && mu[e](t),
};
const yu = tu,
	Cu = ["white", "grey", "black", "blue", "cyan", "green", "magenta", "red", "yellow"];
class Fu {
	constructor(e, t, n) {
		(this.level = e), (this.levelStr = t), (this.colour = n);
	}
	toString() {
		return this.levelStr;
	}
	static getLevel(e, t) {
		return e ? (e instanceof Fu ? e : (e instanceof Object && e.levelStr && (e = e.levelStr), Fu[e.toString().toUpperCase()] || t)) : t;
	}
	static addLevels(e) {
		if (e) {
			Object.keys(e).forEach((t) => {
				const n = t.toUpperCase();
				Fu[n] = new Fu(e[t].value, n, e[t].colour);
				const r = Fu.levels.findIndex((e) => e.levelStr === n);
				r > -1 ? (Fu.levels[r] = Fu[n]) : Fu.levels.push(Fu[n]);
			}),
				Fu.levels.sort((e, t) => e.level - t.level);
		}
	}
	isLessThanOrEqualTo(e) {
		return "string" == typeof e && (e = Fu.getLevel(e)), this.level <= e.level;
	}
	isGreaterThanOrEqualTo(e) {
		return "string" == typeof e && (e = Fu.getLevel(e)), this.level >= e.level;
	}
	isEqualTo(e) {
		return "string" == typeof e && (e = Fu.getLevel(e)), this.level === e.level;
	}
}
(Fu.levels = []),
	Fu.addLevels({
		ALL: { value: Number.MIN_VALUE, colour: "grey" },
		TRACE: { value: 5e3, colour: "blue" },
		DEBUG: { value: 1e4, colour: "cyan" },
		INFO: { value: 2e4, colour: "green" },
		WARN: { value: 3e4, colour: "yellow" },
		ERROR: { value: 4e4, colour: "red" },
		FATAL: { value: 5e4, colour: "magenta" },
		MARK: { value: 9007199254740992, colour: "grey" },
		OFF: { value: Number.MAX_VALUE, colour: "grey" },
	}),
	yu.addListener((e) => {
		const t = e.levels;
		if (t) {
			yu.throwExceptionIf(e, yu.not(yu.anObject(t)), "levels must be an object");
			Object.keys(t).forEach((n) => {
				yu.throwExceptionIf(
					e,
					yu.not(yu.validIdentifier(n)),
					`level name "${n}" is not a valid identifier (must start with a letter, only contain A-Z,a-z,0-9,_)`,
				),
					yu.throwExceptionIf(e, yu.not(yu.anObject(t[n])), `level "${n}" must be an object`),
					yu.throwExceptionIf(e, yu.not(t[n].value), `level "${n}" must have a 'value' property`),
					yu.throwExceptionIf(e, yu.not(yu.anInteger(t[n].value)), `level "${n}".value must have an integer value`),
					yu.throwExceptionIf(e, yu.not(t[n].colour), `level "${n}" must have a 'colour' property`),
					yu.throwExceptionIf(e, yu.not(Cu.indexOf(t[n].colour) > -1), `level "${n}".colour must be one of ${Cu.join(", ")}`);
			});
		}
	}),
	yu.addListener((e) => {
		Fu.addLevels(e.levels);
	});
var gu = Fu,
	Au = { exports: {} },
	vu = {}; /*! (c) 2020 Andrea Giammarchi */
const { parse: Su, stringify: wu } = JSON,
	{ keys: Ou } = Object,
	bu = String,
	_u = "string",
	Bu = {},
	Pu = "object",
	ku = (e, t) => t,
	xu = (e) => (e instanceof bu ? bu(e) : e),
	Nu = (e, t) => (typeof t === _u ? new bu(t) : t),
	Iu = (e, t, n, r) => {
		const u = [];
		for (let o = Ou(n), { length: i } = o, s = 0; s < i; s++) {
			const i = o[s],
				c = n[i];
			if (c instanceof bu) {
				const o = e[c];
				typeof o !== Pu || t.has(o) ? (n[i] = r.call(n, i, o)) : (t.add(o), (n[i] = Bu), u.push({ k: i, a: [e, t, o, r] }));
			} else n[i] !== Bu && (n[i] = r.call(n, i, c));
		}
		for (let { length: e } = u, t = 0; t < e; t++) {
			const { k: e, a: o } = u[t];
			n[e] = r.call(n, e, Iu.apply(null, o));
		}
		return n;
	},
	Tu = (e, t, n) => {
		const r = bu(t.push(n) - 1);
		return e.set(n, r), r;
	},
	Ru = (e, t) => {
		const n = Su(e, Nu).map(xu),
			r = n[0],
			u = t || ku,
			o = typeof r === Pu && r ? Iu(n, new Set(), r, u) : r;
		return u.call({ "": o }, "", o);
	};
vu.parse = Ru;
const Mu = (e, t, n) => {
	const r = t && typeof t === Pu ? (e, n) => ("" === e || -1 < t.indexOf(e) ? n : void 0) : t || ku,
		u = new Map(),
		o = [],
		i = [];
	let s = +Tu(u, o, r.call({ "": e }, "", e)),
		c = !s;
	for (; s < o.length; ) (c = !0), (i[s] = wu(o[s++], a, n));
	return "[" + i.join(",") + "]";
	function a(e, t) {
		if (c) return (c = !c), t;
		const n = r.call(this, e, t);
		switch (typeof n) {
			case Pu:
				if (null === n) return n;
			case _u:
				return u.get(n) || Tu(u, o, n);
		}
		return n;
	}
};
vu.stringify = Mu;
vu.toJSON = (e) => Su(Mu(e));
vu.fromJSON = (e) => Ru(wu(e));
const Lu = vu,
	ju = gu;
class $u {
	constructor(e, t, n, r, u) {
		(this.startTime = new Date()),
			(this.categoryName = e),
			(this.data = n),
			(this.level = t),
			(this.context = Object.assign({}, r)),
			(this.pid = process.pid),
			u &&
				((this.functionName = u.functionName),
				(this.fileName = u.fileName),
				(this.lineNumber = u.lineNumber),
				(this.columnNumber = u.columnNumber),
				(this.callStack = u.callStack));
	}
	serialise() {
		const e = this.data.map((e) => (e && e.message && e.stack && (e = Object.assign({ message: e.message, stack: e.stack }, e)), e));
		return (this.data = e), Lu.stringify(this);
	}
	static deserialise(e) {
		let t;
		try {
			const n = Lu.parse(e);
			(n.data = n.data.map((e) => {
				if (e && e.message && e.stack) {
					const t = new Error(e);
					Object.keys(e).forEach((n) => {
						t[n] = e[n];
					}),
						(e = t);
				}
				return e;
			})),
				(t = new $u(n.categoryName, ju.getLevel(n.level.levelStr), n.data, n.context)),
				(t.startTime = new Date(n.startTime)),
				(t.pid = n.pid),
				(t.cluster = n.cluster);
		} catch (n) {
			t = new $u("log4js", ju.ERROR, ["Unable to parse log:", e, "because: ", n]);
		}
		return t;
	}
}
var Hu = $u;
const Ju = Nr.exports("log4js:clustering"),
	Gu = Hu,
	Vu = tu;
let Uu = !1,
	Wu = null;
try {
	Wu = require("cluster");
} catch (e) {
	Ju("cluster module not present"), (Uu = !0);
}
const zu = [];
let Ku = !1,
	qu = "NODE_APP_INSTANCE";
const Yu = () => Ku && "0" === process.env[qu],
	Xu = () => Uu || Wu.isMaster || Yu(),
	Zu = (e) => {
		zu.forEach((t) => t(e));
	},
	Qu = (e, t) => {
		if ((Ju("cluster message received from worker ", e, ": ", t), e.topic && e.data && ((t = e), (e = void 0)), t && t.topic && "log4js:message" === t.topic)) {
			Ju("received message: ", t.data);
			const e = Gu.deserialise(t.data);
			Zu(e);
		}
	};
Uu ||
	Vu.addListener((e) => {
		(zu.length = 0),
			({ pm2: Ku, disableClustering: Uu, pm2InstanceVar: qu = "NODE_APP_INSTANCE" } = e),
			Ju(`clustering disabled ? ${Uu}`),
			Ju(`cluster.isMaster ? ${Wu && Wu.isMaster}`),
			Ju(`pm2 enabled ? ${Ku}`),
			Ju(`pm2InstanceVar = ${qu}`),
			Ju(`process.env[${qu}] = ${process.env[qu]}`),
			Ku && process.removeListener("message", Qu),
			Wu && Wu.removeListener && Wu.removeListener("message", Qu),
			Uu || e.disableClustering
				? Ju("Not listening for cluster messages, because clustering disabled.")
				: Yu()
				? (Ju("listening for PM2 broadcast messages"), process.on("message", Qu))
				: Wu.isMaster
				? (Ju("listening for cluster messages"), Wu.on("message", Qu))
				: Ju("not listening for messages, because we are not a master process");
	});
var eo = {
		onlyOnMaster: (e, t) => (Xu() ? e() : t),
		isMaster: Xu,
		send: (e) => {
			Xu() ? Zu(e) : (Ku || (e.cluster = { workerId: Wu.worker.id, worker: process.pid }), process.send({ topic: "log4js:message", data: e.serialise() }));
		},
		onMessage: (e) => {
			zu.push(e);
		},
	},
	to = {};
function no(e) {
	if ("number" == typeof e && Number.isInteger(e)) return e;
	const t = { K: 1024, M: 1048576, G: 1073741824 },
		n = Object.keys(t),
		r = e.substr(e.length - 1).toLocaleUpperCase(),
		u = e.substring(0, e.length - 1).trim();
	if (n.indexOf(r) < 0 || !Number.isInteger(Number(u))) throw Error(`maxLogSize: "${e}" is invalid`);
	return u * t[r];
}
function ro(e) {
	return (function (e, t) {
		const n = Object.assign({}, t);
		return (
			Object.keys(e).forEach((r) => {
				n[r] && (n[r] = e[r](t[r]));
			}),
			n
		);
	})({ maxLogSize: no }, e);
}
const uo = { file: ro, fileSync: ro };
to.modifyConfig = (e) => (uo[e.type] ? uo[e.type](e) : e);
var oo = {};
const io = console.log.bind(console);
oo.configure = function (e, t) {
	let n = t.colouredLayout;
	return (
		e.layout && (n = t.layout(e.layout.type, e.layout)),
		(function (e, t) {
			return (n) => {
				io(e(n, t));
			};
		})(n, e.timezoneOffset)
	);
};
var so = {};
so.configure = function (e, t) {
	let n = t.colouredLayout;
	return (
		e.layout && (n = t.layout(e.layout.type, e.layout)),
		(function (e, t) {
			return (n) => {
				process.stdout.write(`${e(n, t)}\n`);
			};
		})(n, e.timezoneOffset)
	);
};
var co = {};
co.configure = function (e, t) {
	let n = t.colouredLayout;
	return (
		e.layout && (n = t.layout(e.layout.type, e.layout)),
		(function (e, t) {
			return (n) => {
				process.stderr.write(`${e(n, t)}\n`);
			};
		})(n, e.timezoneOffset)
	);
};
var ao = {};
ao.configure = function (e, t, n, r) {
	const u = n(e.appender);
	return (function (e, t, n, r) {
		const u = r.getLevel(e),
			o = r.getLevel(t, r.FATAL);
		return (e) => {
			const t = e.level;
			t.isGreaterThanOrEqualTo(u) && t.isLessThanOrEqualTo(o) && n(e);
		};
	})(e.level, e.maxLevel, u, r);
};
var lo = {};
const fo = Nr.exports("log4js:categoryFilter");
lo.configure = function (e, t, n) {
	const r = n(e.appender);
	return (function (e, t) {
		return (
			"string" == typeof e && (e = [e]),
			(n) => {
				fo(`Checking ${n.categoryName} against ${e}`), -1 === e.indexOf(n.categoryName) && (fo("Not excluded, sending to appender"), t(n));
			}
		);
	})(e.exclude, r);
};
var Do = {};
const po = Nr.exports("log4js:noLogFilter");
Do.configure = function (e, t, n) {
	const r = n(e.appender);
	return (function (e, t) {
		return (n) => {
			po(`Checking data: ${n.data} against filters: ${e}`), "string" == typeof e && (e = [e]), (e = e.filter((e) => null != e && "" !== e));
			const r = new RegExp(e.join("|"), "i");
			(0 === e.length || n.data.findIndex((e) => r.test(e)) < 0) && (po("Not excluded, sending to appender"), t(n));
		};
	})(e.exclude, r);
};
var Eo = {},
	mo = { exports: {} },
	ho = {},
	yo = {
		fromCallback: function (e) {
			return Object.defineProperty(
				function () {
					if ("function" != typeof arguments[arguments.length - 1])
						return new Promise((t, n) => {
							(arguments[arguments.length] = (e, r) => {
								if (e) return n(e);
								t(r);
							}),
								arguments.length++,
								e.apply(this, arguments);
						});
					e.apply(this, arguments);
				},
				"name",
				{ value: e.name },
			);
		},
		fromPromise: function (e) {
			return Object.defineProperty(
				function () {
					const t = arguments[arguments.length - 1];
					if ("function" != typeof t) return e.apply(this, arguments);
					e.apply(this, arguments).then((e) => t(null, e), t);
				},
				"name",
				{ value: e.name },
			);
		},
	};
!(function (e) {
	const t = yo.fromCallback,
		n = we,
		r = [
			"access",
			"appendFile",
			"chmod",
			"chown",
			"close",
			"copyFile",
			"fchmod",
			"fchown",
			"fdatasync",
			"fstat",
			"fsync",
			"ftruncate",
			"futimes",
			"lchown",
			"lchmod",
			"link",
			"lstat",
			"mkdir",
			"mkdtemp",
			"open",
			"readFile",
			"readdir",
			"readlink",
			"realpath",
			"rename",
			"rmdir",
			"stat",
			"symlink",
			"truncate",
			"unlink",
			"utimes",
			"writeFile",
		].filter((e) => "function" == typeof n[e]);
	Object.keys(n).forEach((t) => {
		"promises" !== t && (e[t] = n[t]);
	}),
		r.forEach((r) => {
			e[r] = t(n[r]);
		}),
		(e.exists = function (e, t) {
			return "function" == typeof t ? n.exists(e, t) : new Promise((t) => n.exists(e, t));
		}),
		(e.read = function (e, t, r, u, o, i) {
			return "function" == typeof i
				? n.read(e, t, r, u, o, i)
				: new Promise((i, s) => {
						n.read(e, t, r, u, o, (e, t, n) => {
							if (e) return s(e);
							i({ bytesRead: t, buffer: n });
						});
				  });
		}),
		(e.write = function (e, t, ...r) {
			return "function" == typeof r[r.length - 1]
				? n.write(e, t, ...r)
				: new Promise((u, o) => {
						n.write(e, t, ...r, (e, t, n) => {
							if (e) return o(e);
							u({ bytesWritten: t, buffer: n });
						});
				  });
		}),
		"function" == typeof n.realpath.native && (e.realpath.native = t(n.realpath.native));
})(ho);
const Co = p.default;
function Fo(e) {
	return (e = Co.normalize(Co.resolve(e)).split(Co.sep)).length > 0 ? e[0] : null;
}
const go = /[<>:"|?*]/;
var Ao = function (e) {
	const t = Fo(e);
	return (e = e.replace(t, "")), go.test(e);
};
const vo = we,
	So = p.default,
	wo = Ao,
	Oo = parseInt("0777", 8);
var bo = function e(t, n, r, u) {
	if (("function" == typeof n ? ((r = n), (n = {})) : (n && "object" == typeof n) || (n = { mode: n }), "win32" === process.platform && wo(t))) {
		const e = new Error(t + " contains invalid WIN32 path characters.");
		return (e.code = "EINVAL"), r(e);
	}
	let o = n.mode;
	const i = n.fs || vo;
	void 0 === o && (o = Oo & ~process.umask()),
		u || (u = null),
		(r = r || function () {}),
		(t = So.resolve(t)),
		i.mkdir(t, o, (o) => {
			if (!o) return r(null, (u = u || t));
			if ("ENOENT" === o.code) {
				if (So.dirname(t) === t) return r(o);
				e(So.dirname(t), n, (u, o) => {
					u ? r(u, o) : e(t, n, r, o);
				});
			} else
				i.stat(t, (e, t) => {
					e || !t.isDirectory() ? r(o, u) : r(null, u);
				});
		});
};
const _o = we,
	Bo = p.default,
	Po = Ao,
	ko = parseInt("0777", 8);
var xo = function e(t, n, r) {
	(n && "object" == typeof n) || (n = { mode: n });
	let u = n.mode;
	const o = n.fs || _o;
	if ("win32" === process.platform && Po(t)) {
		const e = new Error(t + " contains invalid WIN32 path characters.");
		throw ((e.code = "EINVAL"), e);
	}
	void 0 === u && (u = ko & ~process.umask()), r || (r = null), (t = Bo.resolve(t));
	try {
		o.mkdirSync(t, u), (r = r || t);
	} catch (u) {
		if ("ENOENT" === u.code) {
			if (Bo.dirname(t) === t) throw u;
			(r = e(Bo.dirname(t), n, r)), e(t, n, r);
		} else {
			let e;
			try {
				e = o.statSync(t);
			} catch (e) {
				throw u;
			}
			if (!e.isDirectory()) throw u;
		}
	}
	return r;
};
const No = (0, yo.fromCallback)(bo);
var Io = { mkdirs: No, mkdirsSync: xo, mkdirp: No, mkdirpSync: xo, ensureDir: No, ensureDirSync: xo };
const To = we;
E.default, p.default;
var Ro = function (e, t, n, r) {
		To.open(e, "r+", (e, u) => {
			if (e) return r(e);
			To.futimes(u, t, n, (e) => {
				To.close(u, (t) => {
					r && r(e || t);
				});
			});
		});
	},
	Mo = function (e, t, n) {
		const r = To.openSync(e, "r+");
		return To.futimesSync(r, t, n), To.closeSync(r);
	};
const Lo = we,
	jo = p.default,
	$o = 10,
	Ho = 5,
	Jo = 0,
	Go = process.versions.node.split("."),
	Vo = Number.parseInt(Go[0], 10),
	Uo = Number.parseInt(Go[1], 10),
	Wo = Number.parseInt(Go[2], 10);
function zo() {
	if (Vo > $o) return !0;
	if (Vo === $o) {
		if (Uo > Ho) return !0;
		if (Uo === Ho && Wo >= Jo) return !0;
	}
	return !1;
}
function Ko(e, t) {
	const n = jo
			.resolve(e)
			.split(jo.sep)
			.filter((e) => e),
		r = jo
			.resolve(t)
			.split(jo.sep)
			.filter((e) => e);
	return n.reduce((e, t, n) => e && r[n] === t, !0);
}
function qo(e, t, n) {
	return `Cannot ${n} '${e}' to a subdirectory of itself, '${t}'.`;
}
var Yo,
	Xo,
	Zo = {
		checkPaths: function (e, t, n, r) {
			!(function (e, t, n) {
				zo()
					? Lo.stat(e, { bigint: !0 }, (e, r) => {
							if (e) return n(e);
							Lo.stat(t, { bigint: !0 }, (e, t) =>
								e ? ("ENOENT" === e.code ? n(null, { srcStat: r, destStat: null }) : n(e)) : n(null, { srcStat: r, destStat: t }),
							);
					  })
					: Lo.stat(e, (e, r) => {
							if (e) return n(e);
							Lo.stat(t, (e, t) => (e ? ("ENOENT" === e.code ? n(null, { srcStat: r, destStat: null }) : n(e)) : n(null, { srcStat: r, destStat: t })));
					  });
			})(e, t, (u, o) => {
				if (u) return r(u);
				const { srcStat: i, destStat: s } = o;
				return s && s.ino && s.dev && s.ino === i.ino && s.dev === i.dev
					? r(new Error("Source and destination must not be the same."))
					: i.isDirectory() && Ko(e, t)
					? r(new Error(qo(e, t, n)))
					: r(null, { srcStat: i, destStat: s });
			});
		},
		checkPathsSync: function (e, t, n) {
			const { srcStat: r, destStat: u } = (function (e, t) {
				let n, r;
				n = zo() ? Lo.statSync(e, { bigint: !0 }) : Lo.statSync(e);
				try {
					r = zo() ? Lo.statSync(t, { bigint: !0 }) : Lo.statSync(t);
				} catch (e) {
					if ("ENOENT" === e.code) return { srcStat: n, destStat: null };
					throw e;
				}
				return { srcStat: n, destStat: r };
			})(e, t);
			if (u && u.ino && u.dev && u.ino === r.ino && u.dev === r.dev) throw new Error("Source and destination must not be the same.");
			if (r.isDirectory() && Ko(e, t)) throw new Error(qo(e, t, n));
			return { srcStat: r, destStat: u };
		},
		checkParentPaths: function e(t, n, r, u, o) {
			const i = jo.resolve(jo.dirname(t)),
				s = jo.resolve(jo.dirname(r));
			if (s === i || s === jo.parse(s).root) return o();
			zo()
				? Lo.stat(s, { bigint: !0 }, (i, c) =>
						i ? ("ENOENT" === i.code ? o() : o(i)) : c.ino && c.dev && c.ino === n.ino && c.dev === n.dev ? o(new Error(qo(t, r, u))) : e(t, n, s, u, o),
				  )
				: Lo.stat(s, (i, c) =>
						i ? ("ENOENT" === i.code ? o() : o(i)) : c.ino && c.dev && c.ino === n.ino && c.dev === n.dev ? o(new Error(qo(t, r, u))) : e(t, n, s, u, o),
				  );
		},
		checkParentPathsSync: function e(t, n, r, u) {
			const o = jo.resolve(jo.dirname(t)),
				i = jo.resolve(jo.dirname(r));
			if (i === o || i === jo.parse(i).root) return;
			let s;
			try {
				s = zo() ? Lo.statSync(i, { bigint: !0 }) : Lo.statSync(i);
			} catch (e) {
				if ("ENOENT" === e.code) return;
				throw e;
			}
			if (s.ino && s.dev && s.ino === n.ino && s.dev === n.dev) throw new Error(qo(t, r, u));
			return e(t, n, i, u);
		},
		isSrcSubdir: Ko,
	};
const Qo = we,
	ei = p.default,
	ti = Io.mkdirsSync,
	ni = Mo,
	ri = Zo;
function ui(e, t, n, r) {
	if (!r.filter || r.filter(t, n))
		return (function (e, t, n, r) {
			const u = r.dereference ? Qo.statSync : Qo.lstatSync,
				o = u(t);
			if (o.isDirectory())
				return (function (e, t, n, r, u) {
					if (!t)
						return (function (e, t, n, r) {
							return Qo.mkdirSync(n), ii(t, n, r), Qo.chmodSync(n, e.mode);
						})(e, n, r, u);
					if (t && !t.isDirectory()) throw new Error(`Cannot overwrite non-directory '${r}' with directory '${n}'.`);
					return ii(n, r, u);
				})(o, e, t, n, r);
			if (o.isFile() || o.isCharacterDevice() || o.isBlockDevice())
				return (function (e, t, n, r, u) {
					return t
						? (function (e, t, n, r) {
								if (r.overwrite) return Qo.unlinkSync(n), oi(e, t, n, r);
								if (r.errorOnExist) throw new Error(`'${n}' already exists`);
						  })(e, n, r, u)
						: oi(e, n, r, u);
				})(o, e, t, n, r);
			if (o.isSymbolicLink())
				return (function (e, t, n, r) {
					let u = Qo.readlinkSync(t);
					r.dereference && (u = ei.resolve(process.cwd(), u));
					if (e) {
						let e;
						try {
							e = Qo.readlinkSync(n);
						} catch (e) {
							if ("EINVAL" === e.code || "UNKNOWN" === e.code) return Qo.symlinkSync(u, n);
							throw e;
						}
						if ((r.dereference && (e = ei.resolve(process.cwd(), e)), ri.isSrcSubdir(u, e)))
							throw new Error(`Cannot copy '${u}' to a subdirectory of itself, '${e}'.`);
						if (Qo.statSync(n).isDirectory() && ri.isSrcSubdir(e, u)) throw new Error(`Cannot overwrite '${e}' with '${u}'.`);
						return (function (e, t) {
							return Qo.unlinkSync(t), Qo.symlinkSync(e, t);
						})(u, n);
					}
					return Qo.symlinkSync(u, n);
				})(e, t, n, r);
		})(e, t, n, r);
}
function oi(e, t, n, r) {
	return "function" == typeof Qo.copyFileSync
		? (Qo.copyFileSync(t, n), Qo.chmodSync(n, e.mode), r.preserveTimestamps ? ni(n, e.atime, e.mtime) : void 0)
		: (function (e, t, n, r) {
				const u = 65536,
					o = (
						Xo
							? Yo
							: ((Xo = 1),
							  (Yo = function (e) {
									if ("function" == typeof Buffer.allocUnsafe)
										try {
											return Buffer.allocUnsafe(e);
										} catch (t) {
											return new Buffer(e);
										}
									return new Buffer(e);
							  }))
					)(u),
					i = Qo.openSync(t, "r"),
					s = Qo.openSync(n, "w", e.mode);
				let c = 0;
				for (; c < e.size; ) {
					const e = Qo.readSync(i, o, 0, u, c);
					Qo.writeSync(s, o, 0, e), (c += e);
				}
				r.preserveTimestamps && Qo.futimesSync(s, e.atime, e.mtime);
				Qo.closeSync(i), Qo.closeSync(s);
		  })(e, t, n, r);
}
function ii(e, t, n) {
	Qo.readdirSync(e).forEach((r) =>
		(function (e, t, n, r) {
			const u = ei.join(t, e),
				o = ei.join(n, e),
				{ destStat: i } = ri.checkPathsSync(u, o, "copy");
			return ui(i, u, o, r);
		})(r, e, t, n),
	);
}
var si = function (e, t, n) {
		"function" == typeof n && (n = { filter: n }),
			((n = n || {}).clobber = !("clobber" in n) || !!n.clobber),
			(n.overwrite = "overwrite" in n ? !!n.overwrite : n.clobber),
			n.preserveTimestamps &&
				"ia32" === process.arch &&
				console.warn(
					"fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n\n    see https://github.com/jprichardson/node-fs-extra/issues/269",
				);
		const { srcStat: r, destStat: u } = ri.checkPathsSync(e, t, "copy");
		return (
			ri.checkParentPathsSync(e, r, t, "copy"),
			(function (e, t, n, r) {
				if (r.filter && !r.filter(t, n)) return;
				const u = ei.dirname(n);
				Qo.existsSync(u) || ti(u);
				return ui(e, t, n, r);
			})(u, e, t, n)
		);
	},
	ci = { copySync: si };
const ai = yo.fromPromise,
	li = ho;
var fi = {
	pathExists: ai(function (e) {
		return li
			.access(e)
			.then(() => !0)
			.catch(() => !1);
	}),
	pathExistsSync: li.existsSync,
};
const di = we,
	Di = p.default,
	pi = Io.mkdirs,
	Ei = fi.pathExists,
	mi = Ro,
	hi = Zo;
function yi(e, t, n, r, u) {
	const o = Di.dirname(n);
	Ei(o, (i, s) => (i ? u(i) : s ? Fi(e, t, n, r, u) : void pi(o, (o) => (o ? u(o) : Fi(e, t, n, r, u)))));
}
function Ci(e, t, n, r, u, o) {
	Promise.resolve(u.filter(n, r)).then(
		(i) => (i ? e(t, n, r, u, o) : o()),
		(e) => o(e),
	);
}
function Fi(e, t, n, r, u) {
	return r.filter ? Ci(gi, e, t, n, r, u) : gi(e, t, n, r, u);
}
function gi(e, t, n, r, u) {
	(r.dereference ? di.stat : di.lstat)(t, (o, i) =>
		o
			? u(o)
			: i.isDirectory()
			? (function (e, t, n, r, u, o) {
					if (!t)
						return (function (e, t, n, r, u) {
							di.mkdir(n, (o) => {
								if (o) return u(o);
								Si(t, n, r, (t) => (t ? u(t) : di.chmod(n, e.mode, u)));
							});
						})(e, n, r, u, o);
					if (t && !t.isDirectory()) return o(new Error(`Cannot overwrite non-directory '${r}' with directory '${n}'.`));
					return Si(n, r, u, o);
			  })(i, e, t, n, r, u)
			: i.isFile() || i.isCharacterDevice() || i.isBlockDevice()
			? (function (e, t, n, r, u, o) {
					return t
						? (function (e, t, n, r, u) {
								if (!r.overwrite) return r.errorOnExist ? u(new Error(`'${n}' already exists`)) : u();
								di.unlink(n, (o) => (o ? u(o) : Ai(e, t, n, r, u)));
						  })(e, n, r, u, o)
						: Ai(e, n, r, u, o);
			  })(i, e, t, n, r, u)
			: i.isSymbolicLink()
			? (function (e, t, n, r, u) {
					di.readlink(t, (t, o) =>
						t
							? u(t)
							: (r.dereference && (o = Di.resolve(process.cwd(), o)),
							  e
									? void di.readlink(n, (t, i) =>
											t
												? "EINVAL" === t.code || "UNKNOWN" === t.code
													? di.symlink(o, n, u)
													: u(t)
												: (r.dereference && (i = Di.resolve(process.cwd(), i)),
												  hi.isSrcSubdir(o, i)
														? u(new Error(`Cannot copy '${o}' to a subdirectory of itself, '${i}'.`))
														: e.isDirectory() && hi.isSrcSubdir(i, o)
														? u(new Error(`Cannot overwrite '${i}' with '${o}'.`))
														: (function (e, t, n) {
																di.unlink(t, (r) => (r ? n(r) : di.symlink(e, t, n)));
														  })(o, n, u)),
									  )
									: di.symlink(o, n, u)),
					);
			  })(e, t, n, r, u)
			: void 0,
	);
}
function Ai(e, t, n, r, u) {
	return "function" == typeof di.copyFile
		? di.copyFile(t, n, (t) => (t ? u(t) : vi(e, n, r, u)))
		: (function (e, t, n, r, u) {
				const o = di.createReadStream(t);
				o.on("error", (e) => u(e)).once("open", () => {
					const t = di.createWriteStream(n, { mode: e.mode });
					t.on("error", (e) => u(e))
						.on("open", () => o.pipe(t))
						.once("close", () => vi(e, n, r, u));
				});
		  })(e, t, n, r, u);
}
function vi(e, t, n, r) {
	di.chmod(t, e.mode, (u) => (u ? r(u) : n.preserveTimestamps ? mi(t, e.atime, e.mtime, r) : r()));
}
function Si(e, t, n, r) {
	di.readdir(e, (u, o) => (u ? r(u) : wi(o, e, t, n, r)));
}
function wi(e, t, n, r, u) {
	const o = e.pop();
	return o
		? (function (e, t, n, r, u, o) {
				const i = Di.join(n, t),
					s = Di.join(r, t);
				hi.checkPaths(i, s, "copy", (t, c) => {
					if (t) return o(t);
					const { destStat: a } = c;
					Fi(a, i, s, u, (t) => (t ? o(t) : wi(e, n, r, u, o)));
				});
		  })(e, o, t, n, r, u)
		: u();
}
var Oi = function (e, t, n, r) {
	"function" != typeof n || r ? "function" == typeof n && (n = { filter: n }) : ((r = n), (n = {})),
		(r = r || function () {}),
		((n = n || {}).clobber = !("clobber" in n) || !!n.clobber),
		(n.overwrite = "overwrite" in n ? !!n.overwrite : n.clobber),
		n.preserveTimestamps &&
			"ia32" === process.arch &&
			console.warn(
				"fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n\n    see https://github.com/jprichardson/node-fs-extra/issues/269",
			),
		hi.checkPaths(e, t, "copy", (u, o) => {
			if (u) return r(u);
			const { srcStat: i, destStat: s } = o;
			hi.checkParentPaths(e, i, t, "copy", (u) => (u ? r(u) : n.filter ? Ci(yi, s, e, t, n, r) : yi(s, e, t, n, r)));
		});
};
var bi = { copy: (0, yo.fromCallback)(Oi) };
const _i = we,
	Bi = p.default,
	Pi = g.default,
	ki = "win32" === process.platform;
function xi(e) {
	["unlink", "chmod", "stat", "lstat", "rmdir", "readdir"].forEach((t) => {
		(e[t] = e[t] || _i[t]), (e[(t += "Sync")] = e[t] || _i[t]);
	}),
		(e.maxBusyTries = e.maxBusyTries || 3);
}
function Ni(e, t, n) {
	let r = 0;
	"function" == typeof t && ((n = t), (t = {})),
		Pi(e, "rimraf: missing path"),
		Pi.strictEqual(typeof e, "string", "rimraf: path should be a string"),
		Pi.strictEqual(typeof n, "function", "rimraf: callback function required"),
		Pi(t, "rimraf: invalid options argument provided"),
		Pi.strictEqual(typeof t, "object", "rimraf: options should be object"),
		xi(t),
		Ii(e, t, function u(o) {
			if (o) {
				if (("EBUSY" === o.code || "ENOTEMPTY" === o.code || "EPERM" === o.code) && r < t.maxBusyTries) {
					r++;
					return setTimeout(() => Ii(e, t, u), 100 * r);
				}
				"ENOENT" === o.code && (o = null);
			}
			n(o);
		});
}
function Ii(e, t, n) {
	Pi(e),
		Pi(t),
		Pi("function" == typeof n),
		t.lstat(e, (r, u) =>
			r && "ENOENT" === r.code
				? n(null)
				: r && "EPERM" === r.code && ki
				? Ti(e, t, r, n)
				: u && u.isDirectory()
				? Mi(e, t, r, n)
				: void t.unlink(e, (r) => {
						if (r) {
							if ("ENOENT" === r.code) return n(null);
							if ("EPERM" === r.code) return ki ? Ti(e, t, r, n) : Mi(e, t, r, n);
							if ("EISDIR" === r.code) return Mi(e, t, r, n);
						}
						return n(r);
				  }),
		);
}
function Ti(e, t, n, r) {
	Pi(e),
		Pi(t),
		Pi("function" == typeof r),
		n && Pi(n instanceof Error),
		t.chmod(e, 438, (u) => {
			u
				? r("ENOENT" === u.code ? null : n)
				: t.stat(e, (u, o) => {
						u ? r("ENOENT" === u.code ? null : n) : o.isDirectory() ? Mi(e, t, n, r) : t.unlink(e, r);
				  });
		});
}
function Ri(e, t, n) {
	let r;
	Pi(e), Pi(t), n && Pi(n instanceof Error);
	try {
		t.chmodSync(e, 438);
	} catch (e) {
		if ("ENOENT" === e.code) return;
		throw n;
	}
	try {
		r = t.statSync(e);
	} catch (e) {
		if ("ENOENT" === e.code) return;
		throw n;
	}
	r.isDirectory() ? ji(e, t, n) : t.unlinkSync(e);
}
function Mi(e, t, n, r) {
	Pi(e),
		Pi(t),
		n && Pi(n instanceof Error),
		Pi("function" == typeof r),
		t.rmdir(e, (u) => {
			!u || ("ENOTEMPTY" !== u.code && "EEXIST" !== u.code && "EPERM" !== u.code)
				? u && "ENOTDIR" === u.code
					? r(n)
					: r(u)
				: (function (e, t, n) {
						Pi(e),
							Pi(t),
							Pi("function" == typeof n),
							t.readdir(e, (r, u) => {
								if (r) return n(r);
								let o,
									i = u.length;
								if (0 === i) return t.rmdir(e, n);
								u.forEach((r) => {
									Ni(Bi.join(e, r), t, (r) => {
										if (!o) return r ? n((o = r)) : void (0 == --i && t.rmdir(e, n));
									});
								});
							});
				  })(e, t, r);
		});
}
function Li(e, t) {
	let n;
	xi((t = t || {})),
		Pi(e, "rimraf: missing path"),
		Pi.strictEqual(typeof e, "string", "rimraf: path should be a string"),
		Pi(t, "rimraf: missing options"),
		Pi.strictEqual(typeof t, "object", "rimraf: options should be object");
	try {
		n = t.lstatSync(e);
	} catch (n) {
		if ("ENOENT" === n.code) return;
		"EPERM" === n.code && ki && Ri(e, t, n);
	}
	try {
		n && n.isDirectory() ? ji(e, t, null) : t.unlinkSync(e);
	} catch (n) {
		if ("ENOENT" === n.code) return;
		if ("EPERM" === n.code) return ki ? Ri(e, t, n) : ji(e, t, n);
		if ("EISDIR" !== n.code) throw n;
		ji(e, t, n);
	}
}
function ji(e, t, n) {
	Pi(e), Pi(t), n && Pi(n instanceof Error);
	try {
		t.rmdirSync(e);
	} catch (r) {
		if ("ENOTDIR" === r.code) throw n;
		if ("ENOTEMPTY" === r.code || "EEXIST" === r.code || "EPERM" === r.code)
			!(function (e, t) {
				if ((Pi(e), Pi(t), t.readdirSync(e).forEach((n) => Li(Bi.join(e, n), t)), !ki)) {
					return t.rmdirSync(e, t);
				}
				{
					const n = Date.now();
					do {
						try {
							return t.rmdirSync(e, t);
						} catch (e) {}
					} while (Date.now() - n < 500);
				}
			})(e, t);
		else if ("ENOENT" !== r.code) throw r;
	}
}
var $i = Ni;
Ni.sync = Li;
const Hi = $i;
var Ji = { remove: (0, yo.fromCallback)(Hi), removeSync: Hi.sync };
const Gi = yo.fromCallback,
	Vi = we,
	Ui = p.default,
	Wi = Io,
	zi = Ji,
	Ki = Gi(function (e, t) {
		(t = t || function () {}),
			Vi.readdir(e, (n, r) => {
				if (n) return Wi.mkdirs(e, t);
				(r = r.map((t) => Ui.join(e, t))),
					(function e() {
						const n = r.pop();
						if (!n) return t();
						zi.remove(n, (n) => {
							if (n) return t(n);
							e();
						});
					})();
			});
	});
function qi(e) {
	let t;
	try {
		t = Vi.readdirSync(e);
	} catch (t) {
		return Wi.mkdirsSync(e);
	}
	t.forEach((t) => {
		(t = Ui.join(e, t)), zi.removeSync(t);
	});
}
var Yi = { emptyDirSync: qi, emptydirSync: qi, emptyDir: Ki, emptydir: Ki };
const Xi = yo.fromCallback,
	Zi = p.default,
	Qi = we,
	es = Io,
	ts = fi.pathExists;
var ns = {
	createFile: Xi(function (e, t) {
		function n() {
			Qi.writeFile(e, "", (e) => {
				if (e) return t(e);
				t();
			});
		}
		Qi.stat(e, (r, u) => {
			if (!r && u.isFile()) return t();
			const o = Zi.dirname(e);
			ts(o, (e, r) =>
				e
					? t(e)
					: r
					? n()
					: void es.mkdirs(o, (e) => {
							if (e) return t(e);
							n();
					  }),
			);
		});
	}),
	createFileSync: function (e) {
		let t;
		try {
			t = Qi.statSync(e);
		} catch (e) {}
		if (t && t.isFile()) return;
		const n = Zi.dirname(e);
		Qi.existsSync(n) || es.mkdirsSync(n), Qi.writeFileSync(e, "");
	},
};
const rs = yo.fromCallback,
	us = p.default,
	os = we,
	is = Io,
	ss = fi.pathExists;
var cs = {
	createLink: rs(function (e, t, n) {
		function r(e, t) {
			os.link(e, t, (e) => {
				if (e) return n(e);
				n(null);
			});
		}
		ss(t, (u, o) =>
			u
				? n(u)
				: o
				? n(null)
				: void os.lstat(e, (u) => {
						if (u) return (u.message = u.message.replace("lstat", "ensureLink")), n(u);
						const o = us.dirname(t);
						ss(o, (u, i) =>
							u
								? n(u)
								: i
								? r(e, t)
								: void is.mkdirs(o, (u) => {
										if (u) return n(u);
										r(e, t);
								  }),
						);
				  }),
		);
	}),
	createLinkSync: function (e, t) {
		if (os.existsSync(t)) return;
		try {
			os.lstatSync(e);
		} catch (e) {
			throw ((e.message = e.message.replace("lstat", "ensureLink")), e);
		}
		const n = us.dirname(t);
		return os.existsSync(n) || is.mkdirsSync(n), os.linkSync(e, t);
	},
};
const as = p.default,
	ls = we,
	fs = fi.pathExists;
var ds = {
	symlinkPaths: function (e, t, n) {
		if (as.isAbsolute(e)) return ls.lstat(e, (t) => (t ? ((t.message = t.message.replace("lstat", "ensureSymlink")), n(t)) : n(null, { toCwd: e, toDst: e })));
		{
			const r = as.dirname(t),
				u = as.join(r, e);
			return fs(u, (t, o) =>
				t
					? n(t)
					: o
					? n(null, { toCwd: u, toDst: e })
					: ls.lstat(e, (t) => (t ? ((t.message = t.message.replace("lstat", "ensureSymlink")), n(t)) : n(null, { toCwd: e, toDst: as.relative(r, e) }))),
			);
		}
	},
	symlinkPathsSync: function (e, t) {
		let n;
		if (as.isAbsolute(e)) {
			if (((n = ls.existsSync(e)), !n)) throw new Error("absolute srcpath does not exist");
			return { toCwd: e, toDst: e };
		}
		{
			const r = as.dirname(t),
				u = as.join(r, e);
			if (((n = ls.existsSync(u)), n)) return { toCwd: u, toDst: e };
			if (((n = ls.existsSync(e)), !n)) throw new Error("relative srcpath does not exist");
			return { toCwd: e, toDst: as.relative(r, e) };
		}
	},
};
const Ds = we;
var ps = {
	symlinkType: function (e, t, n) {
		if (((n = "function" == typeof t ? t : n), (t = "function" != typeof t && t))) return n(null, t);
		Ds.lstat(e, (e, r) => {
			if (e) return n(null, "file");
			(t = r && r.isDirectory() ? "dir" : "file"), n(null, t);
		});
	},
	symlinkTypeSync: function (e, t) {
		let n;
		if (t) return t;
		try {
			n = Ds.lstatSync(e);
		} catch (e) {
			return "file";
		}
		return n && n.isDirectory() ? "dir" : "file";
	},
};
const Es = yo.fromCallback,
	ms = p.default,
	hs = we,
	ys = Io.mkdirs,
	Cs = Io.mkdirsSync,
	Fs = ds.symlinkPaths,
	gs = ds.symlinkPathsSync,
	As = ps.symlinkType,
	vs = ps.symlinkTypeSync,
	Ss = fi.pathExists;
var ws = {
	createSymlink: Es(function (e, t, n, r) {
		(r = "function" == typeof n ? n : r),
			(n = "function" != typeof n && n),
			Ss(t, (u, o) =>
				u
					? r(u)
					: o
					? r(null)
					: void Fs(e, t, (u, o) => {
							if (u) return r(u);
							(e = o.toDst),
								As(o.toCwd, n, (n, u) => {
									if (n) return r(n);
									const o = ms.dirname(t);
									Ss(o, (n, i) =>
										n
											? r(n)
											: i
											? hs.symlink(e, t, u, r)
											: void ys(o, (n) => {
													if (n) return r(n);
													hs.symlink(e, t, u, r);
											  }),
									);
								});
					  }),
			);
	}),
	createSymlinkSync: function (e, t, n) {
		if (hs.existsSync(t)) return;
		const r = gs(e, t);
		(e = r.toDst), (n = vs(r.toCwd, n));
		const u = ms.dirname(t);
		return hs.existsSync(u) || Cs(u), hs.symlinkSync(e, t, n);
	},
};
var Os,
	bs = {
		createFile: ns.createFile,
		createFileSync: ns.createFileSync,
		ensureFile: ns.createFile,
		ensureFileSync: ns.createFileSync,
		createLink: cs.createLink,
		createLinkSync: cs.createLinkSync,
		ensureLink: cs.createLink,
		ensureLinkSync: cs.createLinkSync,
		createSymlink: ws.createSymlink,
		createSymlinkSync: ws.createSymlinkSync,
		ensureSymlink: ws.createSymlink,
		ensureSymlinkSync: ws.createSymlinkSync,
	};
try {
	Os = we;
} catch (e) {
	Os = D.default;
}
function _s(e, t) {
	var n,
		r = "\n";
	return (
		"object" == typeof t && null !== t && (t.spaces && (n = t.spaces), t.EOL && (r = t.EOL)), JSON.stringify(e, t ? t.replacer : null, n).replace(/\n/g, r) + r
	);
}
function Bs(e) {
	return Buffer.isBuffer(e) && (e = e.toString("utf8")), (e = e.replace(/^\uFEFF/, ""));
}
var Ps = {
		readFile: function (e, t, n) {
			null == n && ((n = t), (t = {})), "string" == typeof t && (t = { encoding: t });
			var r = (t = t || {}).fs || Os,
				u = !0;
			"throws" in t && (u = t.throws),
				r.readFile(e, t, function (r, o) {
					if (r) return n(r);
					var i;
					o = Bs(o);
					try {
						i = JSON.parse(o, t ? t.reviver : null);
					} catch (t) {
						return u ? ((t.message = e + ": " + t.message), n(t)) : n(null, null);
					}
					n(null, i);
				});
		},
		readFileSync: function (e, t) {
			"string" == typeof (t = t || {}) && (t = { encoding: t });
			var n = t.fs || Os,
				r = !0;
			"throws" in t && (r = t.throws);
			try {
				var u = n.readFileSync(e, t);
				return (u = Bs(u)), JSON.parse(u, t.reviver);
			} catch (t) {
				if (r) throw ((t.message = e + ": " + t.message), t);
				return null;
			}
		},
		writeFile: function (e, t, n, r) {
			null == r && ((r = n), (n = {}));
			var u = (n = n || {}).fs || Os,
				o = "";
			try {
				o = _s(t, n);
			} catch (e) {
				return void (r && r(e, null));
			}
			u.writeFile(e, o, n, r);
		},
		writeFileSync: function (e, t, n) {
			var r = (n = n || {}).fs || Os,
				u = _s(t, n);
			return r.writeFileSync(e, u, n);
		},
	},
	ks = Ps;
const xs = yo.fromCallback,
	Ns = ks;
var Is = { readJson: xs(Ns.readFile), readJsonSync: Ns.readFileSync, writeJson: xs(Ns.writeFile), writeJsonSync: Ns.writeFileSync };
const Ts = p.default,
	Rs = Io,
	Ms = fi.pathExists,
	Ls = Is;
var js = function (e, t, n, r) {
	"function" == typeof n && ((r = n), (n = {}));
	const u = Ts.dirname(e);
	Ms(u, (o, i) =>
		o
			? r(o)
			: i
			? Ls.writeJson(e, t, n, r)
			: void Rs.mkdirs(u, (u) => {
					if (u) return r(u);
					Ls.writeJson(e, t, n, r);
			  }),
	);
};
const $s = we,
	Hs = p.default,
	Js = Io,
	Gs = Is;
var Vs = function (e, t, n) {
	const r = Hs.dirname(e);
	$s.existsSync(r) || Js.mkdirsSync(r), Gs.writeJsonSync(e, t, n);
};
const Us = yo.fromCallback,
	Ws = Is;
(Ws.outputJson = Us(js)),
	(Ws.outputJsonSync = Vs),
	(Ws.outputJSON = Ws.outputJson),
	(Ws.outputJSONSync = Ws.outputJsonSync),
	(Ws.writeJSON = Ws.writeJson),
	(Ws.writeJSONSync = Ws.writeJsonSync),
	(Ws.readJSON = Ws.readJson),
	(Ws.readJSONSync = Ws.readJsonSync);
var zs = Ws;
const Ks = we,
	qs = p.default,
	Ys = ci.copySync,
	Xs = Ji.removeSync,
	Zs = Io.mkdirpSync,
	Qs = Zo;
function ec(e, t, n) {
	try {
		Ks.renameSync(e, t);
	} catch (r) {
		if ("EXDEV" !== r.code) throw r;
		return (function (e, t, n) {
			const r = { overwrite: n, errorOnExist: !0 };
			return Ys(e, t, r), Xs(e);
		})(e, t, n);
	}
}
var tc = function (e, t, n) {
		const r = (n = n || {}).overwrite || n.clobber || !1,
			{ srcStat: u } = Qs.checkPathsSync(e, t, "move");
		return (
			Qs.checkParentPathsSync(e, u, t, "move"),
			Zs(qs.dirname(t)),
			(function (e, t, n) {
				if (n) return Xs(t), ec(e, t, n);
				if (Ks.existsSync(t)) throw new Error("dest already exists.");
				return ec(e, t, n);
			})(e, t, r)
		);
	},
	nc = { moveSync: tc };
const rc = we,
	uc = p.default,
	oc = bi.copy,
	ic = Ji.remove,
	sc = Io.mkdirp,
	cc = fi.pathExists,
	ac = Zo;
function lc(e, t, n, r) {
	rc.rename(e, t, (u) =>
		u
			? "EXDEV" !== u.code
				? r(u)
				: (function (e, t, n, r) {
						const u = { overwrite: n, errorOnExist: !0 };
						oc(e, t, u, (t) => (t ? r(t) : ic(e, r)));
				  })(e, t, n, r)
			: r(),
	);
}
var fc = function (e, t, n, r) {
	"function" == typeof n && ((r = n), (n = {}));
	const u = n.overwrite || n.clobber || !1;
	ac.checkPaths(e, t, "move", (n, o) => {
		if (n) return r(n);
		const { srcStat: i } = o;
		ac.checkParentPaths(e, i, t, "move", (n) => {
			if (n) return r(n);
			sc(uc.dirname(t), (n) =>
				n
					? r(n)
					: (function (e, t, n, r) {
							if (n) return ic(t, (u) => (u ? r(u) : lc(e, t, n, r)));
							cc(t, (u, o) => (u ? r(u) : o ? r(new Error("dest already exists.")) : lc(e, t, n, r)));
					  })(e, t, u, r),
			);
		});
	});
};
var dc = { move: (0, yo.fromCallback)(fc) };
const Dc = yo.fromCallback,
	pc = we,
	Ec = p.default,
	mc = Io,
	hc = fi.pathExists;
var yc = {
	outputFile: Dc(function (e, t, n, r) {
		"function" == typeof n && ((r = n), (n = "utf8"));
		const u = Ec.dirname(e);
		hc(u, (o, i) =>
			o
				? r(o)
				: i
				? pc.writeFile(e, t, n, r)
				: void mc.mkdirs(u, (u) => {
						if (u) return r(u);
						pc.writeFile(e, t, n, r);
				  }),
		);
	}),
	outputFileSync: function (e, ...t) {
		const n = Ec.dirname(e);
		if (pc.existsSync(n)) return pc.writeFileSync(e, ...t);
		mc.mkdirsSync(n), pc.writeFileSync(e, ...t);
	},
};
!(function (e) {
	e.exports = Object.assign({}, ho, ci, bi, Yi, bs, zs, Io, nc, dc, yc, fi, Ji);
	const t = D.default;
	Object.getOwnPropertyDescriptor(t, "promises") && Object.defineProperty(e.exports, "promises", { get: () => t.promises });
})(mo);
const Cc = Nr.exports("streamroller:fileNameFormatter"),
	Fc = p.default;
const gc = Nr.exports("streamroller:fileNameParser"),
	Ac = nu.exports;
const vc = Nr.exports("streamroller:moveAndMaybeCompressFile"),
	Sc = mo.exports,
	wc = v.default;
var Oc = async (e, t, n) => {
	if (
		((n = (function (e) {
			const t = { mode: parseInt("0600", 8), compress: !1 },
				n = Object.assign({}, t, e);
			return vc(`_parseOption: moveAndMaybeCompressFile called with option=${JSON.stringify(n)}`), n;
		})(n)),
		e !== t)
	) {
		if (await Sc.pathExists(e))
			if ((vc(`moveAndMaybeCompressFile: moving file from ${e} to ${t} ${n.compress ? "with" : "without"} compress`), n.compress))
				await new Promise((r, u) => {
					let o = !1;
					const i = Sc.createWriteStream(t, { mode: n.mode, flags: "wx" })
						.on("open", () => {
							o = !0;
							const t = Sc.createReadStream(e)
								.on("open", () => {
									t.pipe(wc.createGzip()).pipe(i);
								})
								.on("error", (t) => {
									vc(`moveAndMaybeCompressFile: error reading ${e}`, t), i.destroy(t);
								});
						})
						.on("finish", () => {
							vc(`moveAndMaybeCompressFile: finished compressing ${t}, deleting ${e}`),
								Sc.unlink(e)
									.then(r)
									.catch((t) => {
										vc(`moveAndMaybeCompressFile: error deleting ${e}, truncating instead`, t),
											Sc.truncate(e)
												.then(r)
												.catch((t) => {
													vc(`moveAndMaybeCompressFile: error truncating ${e}`, t), u(t);
												});
									});
						})
						.on("error", (e) => {
							o
								? (vc(`moveAndMaybeCompressFile: error writing ${t}, deleting`, e),
								  Sc.unlink(t)
										.then(() => {
											u(e);
										})
										.catch((e) => {
											vc(`moveAndMaybeCompressFile: error deleting ${t}`, e), u(e);
										}))
								: (vc(`moveAndMaybeCompressFile: error creating ${t}`, e), u(e));
						});
				}).catch(() => {});
			else {
				vc(`moveAndMaybeCompressFile: renaming ${e} to ${t}`);
				try {
					await Sc.move(e, t, { overwrite: !0 });
				} catch (n) {
					if ((vc(`moveAndMaybeCompressFile: error renaming ${e} to ${t}`, n), "ENOENT" !== n.code)) {
						vc("moveAndMaybeCompressFile: trying copy+truncate instead");
						try {
							await Sc.copy(e, t, { overwrite: !0 }), await Sc.truncate(e);
						} catch (e) {
							vc("moveAndMaybeCompressFile: error copy+truncate", e);
						}
					}
				}
			}
	} else vc("moveAndMaybeCompressFile: source and target are the same, not doing anything");
};
const bc = Nr.exports("streamroller:RollingFileWriteStream"),
	_c = mo.exports,
	Bc = p.default,
	Pc = E.default,
	kc = () => new Date(),
	xc = nu.exports,
	{ Writable: Nc } = C.default,
	Ic = ({ file: e, keepFileExt: t, needsIndex: n, alwaysIncludeDate: r, compress: u, fileNameSep: o }) => {
		let i = o || ".";
		const s = Fc.join(e.dir, e.name),
			c = (t) => t + e.ext,
			a = (e, t, r) => ((!n && r) || !t ? e : e + i + t),
			l = (e, t, n) => ((t > 0 || r) && n ? e + i + n : e),
			f = (e, t) => (t && u ? e + ".gz" : e),
			d = t ? [l, a, c, f] : [c, l, a, f];
		return ({ date: e, index: t }) => (Cc(`_formatFileName: date=${e}, index=${t}`), d.reduce((n, r) => r(n, t, e), s));
	},
	Tc = ({ file: e, keepFileExt: t, pattern: n, fileNameSep: r }) => {
		let u = r || ".";
		const o = "__NOT_MATCHING__";
		let i = [
			(e, t) => (e.endsWith(".gz") ? (gc("it is gzipped"), (t.isCompressed = !0), e.slice(0, -1 * ".gz".length)) : e),
			t
				? (t) =>
						t.startsWith(e.name) && t.endsWith(e.ext) ? (gc("it starts and ends with the right things"), t.slice(e.name.length + 1, -1 * e.ext.length)) : o
				: (t) => (t.startsWith(e.base) ? (gc("it starts with the right things"), t.slice(e.base.length + 1)) : o),
			n
				? (e, t) => {
						const r = e.split(u);
						let o = r[r.length - 1];
						gc("items: ", r, ", indexStr: ", o);
						let i = e;
						void 0 !== o && o.match(/^\d+$/) ? ((i = e.slice(0, -1 * (o.length + 1))), gc(`dateStr is ${i}`), n && !i && ((i = o), (o = "0"))) : (o = "0");
						try {
							const r = Ac.parse(n, i, new Date(0, 0));
							return Ac.asString(n, r) !== i ? e : ((t.index = parseInt(o, 10)), (t.date = i), (t.timestamp = r.getTime()), "");
						} catch (t) {
							return gc(`Problem parsing ${i} as ${n}, error was: `, t), e;
						}
				  }
				: (e, t) => (e.match(/^\d+$/) ? (gc("it has an index"), (t.index = parseInt(e, 10)), "") : e),
		];
		return (e) => {
			let t = { filename: e, index: 0, isCompressed: !1 };
			return i.reduce((e, n) => n(e, t), e) ? null : t;
		};
	},
	Rc = Oc;
var Mc = class extends Nc {
	constructor(e, t) {
		if ((bc(`constructor: creating RollingFileWriteStream. path=${e}`), "string" != typeof e || 0 === e.length)) throw new Error(`Invalid filename: ${e}`);
		if (e.endsWith(Bc.sep)) throw new Error(`Filename is a directory: ${e}`);
		0 === e.indexOf(`~${Bc.sep}`) && (e = e.replace("~", Pc.homedir())),
			super(t),
			(this.options = this._parseOption(t)),
			(this.fileObject = Bc.parse(e)),
			"" === this.fileObject.dir && (this.fileObject = Bc.parse(Bc.join(process.cwd(), e))),
			(this.fileFormatter = Ic({
				file: this.fileObject,
				alwaysIncludeDate: this.options.alwaysIncludePattern,
				needsIndex: this.options.maxSize < Number.MAX_SAFE_INTEGER,
				compress: this.options.compress,
				keepFileExt: this.options.keepFileExt,
				fileNameSep: this.options.fileNameSep,
			})),
			(this.fileNameParser = Tc({
				file: this.fileObject,
				keepFileExt: this.options.keepFileExt,
				pattern: this.options.pattern,
				fileNameSep: this.options.fileNameSep,
			})),
			(this.state = { currentSize: 0 }),
			this.options.pattern && (this.state.currentDate = xc(this.options.pattern, kc())),
			(this.filename = this.fileFormatter({ index: 0, date: this.state.currentDate })),
			["a", "a+", "as", "as+"].includes(this.options.flags) && this._setExistingSizeAndDate(),
			bc(`constructor: create new file ${this.filename}, state=${JSON.stringify(this.state)}`),
			this._renewWriteStream();
	}
	_setExistingSizeAndDate() {
		try {
			const e = _c.statSync(this.filename);
			(this.state.currentSize = e.size), this.options.pattern && (this.state.currentDate = xc(this.options.pattern, e.mtime));
		} catch (e) {
			return;
		}
	}
	_parseOption(e) {
		const t = {
				maxSize: 0,
				numToKeep: Number.MAX_SAFE_INTEGER,
				encoding: "utf8",
				mode: parseInt("0600", 8),
				flags: "a",
				compress: !1,
				keepFileExt: !1,
				alwaysIncludePattern: !1,
			},
			n = Object.assign({}, t, e);
		if (n.maxSize) {
			if (n.maxSize <= 0) throw new Error(`options.maxSize (${n.maxSize}) should be > 0`);
		} else delete n.maxSize;
		if (n.numBackups || 0 === n.numBackups) {
			if (n.numBackups < 0) throw new Error(`options.numBackups (${n.numBackups}) should be >= 0`);
			if (n.numBackups >= Number.MAX_SAFE_INTEGER) throw new Error(`options.numBackups (${n.numBackups}) should be < Number.MAX_SAFE_INTEGER`);
			n.numToKeep = n.numBackups + 1;
		} else if (n.numToKeep <= 0) throw new Error(`options.numToKeep (${n.numToKeep}) should be > 0`);
		return bc(`_parseOption: creating stream with option=${JSON.stringify(n)}`), n;
	}
	_final(e) {
		this.currentFileStream.end("", this.options.encoding, e);
	}
	_write(e, t, n) {
		this._shouldRoll().then(() => {
			bc(`_write: writing chunk. file=${this.currentFileStream.path} state=${JSON.stringify(this.state)} chunk=${e}`),
				this.currentFileStream.write(e, t, (t) => {
					(this.state.currentSize += e.length), n(t);
				});
		});
	}
	async _shouldRoll() {
		(this._dateChanged() || this._tooBig()) &&
			(bc(`_shouldRoll: rolling because dateChanged? ${this._dateChanged()} or tooBig? ${this._tooBig()}`), await this._roll());
	}
	_dateChanged() {
		return this.state.currentDate && this.state.currentDate !== xc(this.options.pattern, kc());
	}
	_tooBig() {
		return this.state.currentSize >= this.options.maxSize;
	}
	_roll() {
		return (
			bc("_roll: closing the current stream"),
			new Promise((e, t) => {
				this.currentFileStream.end("", this.options.encoding, () => {
					this._moveOldFiles().then(e).catch(t);
				});
			})
		);
	}
	async _moveOldFiles() {
		const e = await this._getExistingFiles();
		for (let t = (this.state.currentDate ? e.filter((e) => e.date === this.state.currentDate) : e).length; t >= 0; t--) {
			bc(`_moveOldFiles: i = ${t}`);
			const e = this.fileFormatter({ date: this.state.currentDate, index: t }),
				n = this.fileFormatter({ date: this.state.currentDate, index: t + 1 }),
				r = { compress: this.options.compress && 0 === t, mode: this.options.mode };
			await Rc(e, n, r);
		}
		(this.state.currentSize = 0),
			(this.state.currentDate = this.state.currentDate ? xc(this.options.pattern, kc()) : null),
			bc(`_moveOldFiles: finished rolling files. state=${JSON.stringify(this.state)}`),
			this._renewWriteStream(),
			await new Promise((e, t) => {
				this.currentFileStream.write("", "utf8", () => {
					this._clean().then(e).catch(t);
				});
			});
	}
	async _getExistingFiles() {
		const e = await _c.readdir(this.fileObject.dir).catch(() => []);
		bc(`_getExistingFiles: files=${e}`);
		const t = e.map((e) => this.fileNameParser(e)).filter((e) => e),
			n = (e) => (e.timestamp ? e.timestamp : kc().getTime()) - e.index;
		return t.sort((e, t) => n(e) - n(t)), t;
	}
	_renewWriteStream() {
		const e = this.fileFormatter({ date: this.state.currentDate, index: 0 }),
			t = (e) => {
				try {
					return _c.mkdirSync(e, { recursive: !0 });
				} catch (n) {
					if ("ENOENT" === n.code) return t(Bc.dirname(e)), t(e);
					if ("EEXIST" !== n.code && "EROFS" !== n.code) throw n;
					try {
						if (_c.statSync(e).isDirectory()) return e;
						throw n;
					} catch (e) {
						throw n;
					}
				}
			};
		t(this.fileObject.dir);
		const n = { flags: this.options.flags, encoding: this.options.encoding, mode: this.options.mode };
		var r, u;
		_c.appendFileSync(e, "", ((r = { ...n }), (u = "flags"), (r["flag"] = r[u]), delete r[u], r)),
			(this.currentFileStream = _c.createWriteStream(e, n)),
			this.currentFileStream.on("error", (e) => {
				this.emit("error", e);
			});
	}
	async _clean() {
		const e = await this._getExistingFiles();
		if (
			(bc(`_clean: numToKeep = ${this.options.numToKeep}, existingFiles = ${e.length}`), bc("_clean: existing files are: ", e), this._tooManyFiles(e.length))
		) {
			const n = e.slice(0, e.length - this.options.numToKeep).map((e) => Bc.format({ dir: this.fileObject.dir, base: e.filename }));
			await ((t = n),
			bc(`deleteFiles: files to delete: ${t}`),
			Promise.all(
				t.map((e) =>
					_c.unlink(e).catch((t) => {
						bc(`deleteFiles: error when unlinking ${e}, ignoring. Error was ${t}`);
					}),
				),
			));
		}
		var t;
	}
	_tooManyFiles(e) {
		return this.options.numToKeep > 0 && e > this.options.numToKeep;
	}
};
const Lc = Mc;
var jc = class extends Lc {
	constructor(e, t, n, r) {
		r || (r = {}),
			t && (r.maxSize = t),
			r.numBackups || 0 === r.numBackups || (n || 0 === n || (n = 1), (r.numBackups = n)),
			super(e, r),
			(this.backups = r.numBackups),
			(this.size = this.options.maxSize);
	}
	get theStream() {
		return this.currentFileStream;
	}
};
const $c = Mc;
var Hc = {
	RollingFileWriteStream: Mc,
	RollingFileStream: jc,
	DateRollingFileStream: class extends $c {
		constructor(e, t, n) {
			t && "object" == typeof t && ((n = t), (t = null)),
				n || (n = {}),
				t || (t = "yyyy-MM-dd"),
				(n.pattern = t),
				n.numBackups || 0 === n.numBackups
					? (n.daysToKeep = n.numBackups)
					: (n.daysToKeep || 0 === n.daysToKeep
							? process.emitWarning(
									"options.daysToKeep is deprecated due to the confusion it causes when used together with file size rolling. Please use options.numBackups instead.",
									"DeprecationWarning",
									"streamroller-DEP0001",
							  )
							: (n.daysToKeep = 1),
					  (n.numBackups = n.daysToKeep)),
				super(e, n),
				(this.mode = this.options.mode);
		}
		get theStream() {
			return this.currentFileStream;
		}
	},
};
const Jc = Nr.exports("log4js:file"),
	Gc = p.default,
	Vc = Hc,
	Uc = E.default.EOL;
let Wc = !1;
const zc = new Set();
function Kc() {
	zc.forEach((e) => {
		e.sighupHandler();
	});
}
function qc(e, t, n, r) {
	const u = new Vc.RollingFileStream(e, t, n, r);
	return (
		u.on("error", (t) => {
			console.error("log4js.fileAppender - Writing to file %s, error happened ", e, t);
		}),
		u.on("drain", () => {
			process.emit("log4js:pause", !1);
		}),
		u
	);
}
Eo.configure = function (e, t) {
	let n = t.basicLayout;
	return (
		e.layout && (n = t.layout(e.layout.type, e.layout)),
		(e.mode = e.mode || 384),
		(function (e, t, n, r, u, o) {
			(e = Gc.normalize(e)), Jc("Creating file appender (", e, ", ", n, ", ", (r = r || 0 === r ? r : 5), ", ", u, ", ", o, ")");
			let i = qc(e, n, r, u);
			const s = function (e) {
				if (i.writable) {
					if (!0 === u.removeColor) {
						const t = /\x1b[[0-9;]*m/g;
						e.data = e.data.map((e) => ("string" == typeof e ? e.replace(t, "") : e));
					}
					i.write(t(e, o) + Uc, "utf8") || process.emit("log4js:pause", !0);
				}
			};
			return (
				(s.reopen = function () {
					i.end(() => {
						i = qc(e, n, r, u);
					});
				}),
				(s.sighupHandler = function () {
					Jc("SIGHUP handler called."), s.reopen();
				}),
				(s.shutdown = function (e) {
					zc.delete(s), 0 === zc.size && Wc && (process.removeListener("SIGHUP", Kc), (Wc = !1)), i.end("", "utf-8", e);
				}),
				zc.add(s),
				Wc || (process.on("SIGHUP", Kc), (Wc = !0)),
				s
			);
		})(e.filename, n, e.maxLogSize, e.backups, e, e.timezoneOffset)
	);
};
var Yc = {};
const Xc = Hc,
	Zc = E.default.EOL;
function Qc(e, t, n, r, u) {
	r.maxSize = r.maxLogSize;
	const o = (function (e, t, n) {
			const r = new Xc.DateRollingFileStream(e, t, n);
			return (
				r.on("error", (t) => {
					console.error("log4js.dateFileAppender - Writing to file %s, error happened ", e, t);
				}),
				r.on("drain", () => {
					process.emit("log4js:pause", !1);
				}),
				r
			);
		})(e, t, r),
		i = function (e) {
			o.writable && (o.write(n(e, u) + Zc, "utf8") || process.emit("log4js:pause", !0));
		};
	return (
		(i.shutdown = function (e) {
			o.end("", "utf-8", e);
		}),
		i
	);
}
Yc.configure = function (e, t) {
	let n = t.basicLayout;
	return (
		e.layout && (n = t.layout(e.layout.type, e.layout)),
		e.alwaysIncludePattern || (e.alwaysIncludePattern = !1),
		(e.mode = e.mode || 384),
		Qc(e.filename, e.pattern, n, e, e.timezoneOffset)
	);
};
var ea = {};
const ta = Nr.exports("log4js:fileSync"),
	na = p.default,
	ra = D.default,
	ua = E.default.EOL || "\n";
function oa(e, t) {
	if (ra.existsSync(e)) return;
	const n = ra.openSync(e, t.flags, t.mode);
	ra.closeSync(n);
}
class ia {
	constructor(e, t, n, r) {
		ta("In RollingFileStream"),
			(function () {
				if (!e || !t || t <= 0) throw new Error("You must specify a filename and file size");
			})(),
			(this.filename = e),
			(this.size = t),
			(this.backups = n),
			(this.options = r),
			(this.currentSize = 0),
			(this.currentSize = (function (e) {
				let t = 0;
				try {
					t = ra.statSync(e).size;
				} catch (t) {
					oa(e, r);
				}
				return t;
			})(this.filename));
	}
	shouldRoll() {
		return ta("should roll with current size %d, and max size %d", this.currentSize, this.size), this.currentSize >= this.size;
	}
	roll(e) {
		const t = this,
			n = new RegExp(`^${na.basename(e)}`);
		function r(e) {
			return n.test(e);
		}
		function u(t) {
			return parseInt(t.substring(`${na.basename(e)}.`.length), 10) || 0;
		}
		function o(e, t) {
			return u(e) > u(t) ? 1 : u(e) < u(t) ? -1 : 0;
		}
		function i(n) {
			const r = u(n);
			if ((ta(`Index of ${n} is ${r}`), 0 === t.backups)) ra.truncateSync(e, 0);
			else if (r < t.backups) {
				try {
					ra.unlinkSync(`${e}.${r + 1}`);
				} catch (e) {}
				ta(`Renaming ${n} -> ${e}.${r + 1}`), ra.renameSync(na.join(na.dirname(e), n), `${e}.${r + 1}`);
			}
		}
		ta("Rolling, rolling, rolling"), ta("Renaming the old files"), ra.readdirSync(na.dirname(e)).filter(r).sort(o).reverse().forEach(i);
	}
	write(e, t) {
		const n = this;
		ta("in write"),
			this.shouldRoll() && ((this.currentSize = 0), this.roll(this.filename)),
			ta("writing the chunk to the file"),
			(n.currentSize += e.length),
			ra.appendFileSync(n.filename, e);
	}
}
ea.configure = function (e, t) {
	let n = t.basicLayout;
	e.layout && (n = t.layout(e.layout.type, e.layout));
	const r = { flags: e.flags || "a", encoding: e.encoding || "utf8", mode: e.mode || 384 };
	return (function (e, t, n, r, u, o) {
		ta("fileSync appender created");
		const i = (function (e, t, n) {
			let r;
			var u;
			return (
				t
					? (r = new ia(e, t, n, o))
					: (oa((u = e), o),
					  (r = {
							write(e) {
								ra.appendFileSync(u, e);
							},
					  })),
				r
			);
		})((e = na.normalize(e)), n, (r = r || 0 === r ? r : 5));
		return (e) => {
			i.write(t(e, u) + ua);
		};
	})(e.filename, n, e.maxLogSize, e.backups, e.timezoneOffset, r);
};
var sa = {};
const ca = Nr.exports("log4js:tcp"),
	aa = S.default;
sa.configure = function (e, t) {
	ca(`configure with config = ${e}`);
	let n = function (e) {
		return e.serialise();
	};
	return (
		e.layout && (n = t.layout(e.layout.type, e.layout)),
		(function (e, t) {
			let n = !1;
			const r = [];
			let u,
				o = 3,
				i = "__LOG4JS__";
			function s(e) {
				ca("Writing log event to socket"), (n = u.write(`${t(e)}${i}`, "utf8"));
			}
			function c() {
				let e;
				for (ca("emptying buffer"); (e = r.shift()); ) s(e);
			}
			function a(e) {
				n ? s(e) : (ca("buffering log event because it cannot write at the moment"), r.push(e));
			}
			return (
				(function t() {
					ca(`appender creating socket to ${e.host || "localhost"}:${e.port || 5e3}`),
						(i = `${e.endMsg || "__LOG4JS__"}`),
						(u = aa.createConnection(e.port || 5e3, e.host || "localhost")),
						u.on("connect", () => {
							ca("socket connected"), c(), (n = !0);
						}),
						u.on("drain", () => {
							ca("drain event received, emptying buffer"), (n = !0), c();
						}),
						u.on("timeout", u.end.bind(u)),
						u.on("error", (e) => {
							ca("connection error", e), (n = !1), c();
						}),
						u.on("close", t);
				})(),
				(a.shutdown = function (e) {
					ca("shutdown called"),
						r.length && o
							? (ca("buffer has items, waiting 100ms to empty"),
							  (o -= 1),
							  setTimeout(() => {
									a.shutdown(e);
							  }, 100))
							: (u.removeAllListeners("close"), u.end(e));
				}),
				a
			);
		})(e, n)
	);
};
const la = p.default,
	fa = Nr.exports("log4js:appenders"),
	da = tu,
	Da = eo,
	pa = gu,
	Ea = hu,
	ma = to,
	ha = new Map();
ha.set("console", oo),
	ha.set("stdout", so),
	ha.set("stderr", co),
	ha.set("logLevelFilter", ao),
	ha.set("categoryFilter", lo),
	ha.set("noLogFilter", Do),
	ha.set("file", Eo),
	ha.set("dateFile", Yc),
	ha.set("fileSync", ea),
	ha.set("tcp", sa);
const ya = new Map(),
	Ca = (e, t) => {
		fa("Loading module from ", e);
		try {
			return require(e);
		} catch (n) {
			return void da.throwExceptionIf(t, "MODULE_NOT_FOUND" !== n.code, `appender "${e}" could not be loaded (error was: ${n})`);
		}
	},
	Fa = new Set(),
	ga = (e, t) => {
		if (ya.has(e)) return ya.get(e);
		if (!t.appenders[e]) return !1;
		if (Fa.has(e)) throw new Error(`Dependency loop detected for appender ${e}.`);
		Fa.add(e), fa(`Creating appender ${e}`);
		const n = Aa(e, t);
		return Fa.delete(e), ya.set(e, n), n;
	},
	Aa = (e, t) => {
		const n = t.appenders[e],
			r = n.type.configure
				? n.type
				: ((e, t) =>
						ha.get(e) ||
						Ca(`./${e}`, t) ||
						Ca(e, t) ||
						(require.main && Ca(la.join(la.dirname(require.main.filename), e), t)) ||
						Ca(la.join(process.cwd(), e), t))(n.type, t);
		return (
			da.throwExceptionIf(t, da.not(r), `appender "${e}" is not valid (type "${n.type}" could not be found)`),
			r.appender && fa(`DEPRECATION: Appender ${n.type} exports an appender function.`),
			r.shutdown && fa(`DEPRECATION: Appender ${n.type} exports a shutdown function.`),
			fa(`${e}: clustering.isMaster ? ${Da.isMaster()}`),
			fa(`${e}: appenderModule is ${F.default.inspect(r)}`),
			Da.onlyOnMaster(
				() => (fa(`calling appenderModule.configure for ${e} / ${n.type}`), r.configure(ma.modifyConfig(n), Ea, (e) => ga(e, t), pa)),
				() => {},
			)
		);
	},
	va = (e) => {
		ya.clear(), Fa.clear();
		const t = [];
		Object.values(e.categories).forEach((e) => {
			t.push(...e.appenders);
		}),
			Object.keys(e.appenders).forEach((n) => {
				(t.includes(n) || "tcp-server" === e.appenders[n].type) && ga(n, e);
			});
	},
	Sa = () => {
		va({ appenders: { out: { type: "stdout" } }, categories: { default: { appenders: ["out"], level: "trace" } } });
	};
Sa(),
	da.addListener((e) => {
		da.throwExceptionIf(e, da.not(da.anObject(e.appenders)), 'must have a property "appenders" of type object.');
		const t = Object.keys(e.appenders);
		da.throwExceptionIf(e, da.not(t.length), "must define at least one appender."),
			t.forEach((t) => {
				da.throwExceptionIf(e, da.not(e.appenders[t].type), `appender "${t}" is not valid (must be an object with property "type")`);
			});
	}),
	da.addListener(va),
	(Au.exports = ya),
	(Au.exports.init = Sa);
var wa = { exports: {} };
!(function (e) {
	const t = Nr.exports("log4js:categories"),
		n = tu,
		r = gu,
		u = Au.exports,
		o = new Map();
	function i(e, t, n) {
		if (!1 === t.inherit) return;
		const r = n.lastIndexOf(".");
		if (r < 0) return;
		const u = n.substring(0, r);
		let o = e.categories[u];
		o || (o = { inherit: !0, appenders: [] }),
			i(e, o, u),
			!e.categories[u] && o.appenders && o.appenders.length && o.level && (e.categories[u] = o),
			(t.appenders = t.appenders || []),
			(t.level = t.level || o.level),
			o.appenders.forEach((e) => {
				t.appenders.includes(e) || t.appenders.push(e);
			}),
			(t.parent = o);
	}
	function s(e) {
		if (!e.categories) return;
		Object.keys(e.categories).forEach((t) => {
			const n = e.categories[t];
			i(e, n, t);
		});
	}
	n.addPreProcessingListener((e) => s(e)),
		n.addListener((e) => {
			n.throwExceptionIf(e, n.not(n.anObject(e.categories)), 'must have a property "categories" of type object.');
			const t = Object.keys(e.categories);
			n.throwExceptionIf(e, n.not(t.length), "must define at least one category."),
				t.forEach((t) => {
					const o = e.categories[t];
					n.throwExceptionIf(
						e,
						[n.not(o.appenders), n.not(o.level)],
						`category "${t}" is not valid (must be an object with properties "appenders" and "level")`,
					),
						n.throwExceptionIf(e, n.not(Array.isArray(o.appenders)), `category "${t}" is not valid (appenders must be an array of appender names)`),
						n.throwExceptionIf(e, n.not(o.appenders.length), `category "${t}" is not valid (appenders must contain at least one appender name)`),
						Object.prototype.hasOwnProperty.call(o, "enableCallStack") &&
							n.throwExceptionIf(e, "boolean" != typeof o.enableCallStack, `category "${t}" is not valid (enableCallStack must be boolean type)`),
						o.appenders.forEach((r) => {
							n.throwExceptionIf(e, n.not(u.get(r)), `category "${t}" is not valid (appender "${r}" is not defined)`);
						}),
						n.throwExceptionIf(
							e,
							n.not(r.getLevel(o.level)),
							`category "${t}" is not valid (level "${o.level}" not recognised; valid levels are ${r.levels.join(", ")})`,
						);
				}),
				n.throwExceptionIf(e, n.not(e.categories.default), 'must define a "default" category.');
		});
	const c = (e) => {
			o.clear();
			Object.keys(e.categories).forEach((n) => {
				const i = e.categories[n],
					s = [];
				i.appenders.forEach((e) => {
					s.push(u.get(e)), t(`Creating category ${n}`), o.set(n, { appenders: s, level: r.getLevel(i.level), enableCallStack: i.enableCallStack || !1 });
				});
			});
		},
		a = () => {
			c({ categories: { default: { appenders: ["out"], level: "OFF" } } });
		};
	a(), n.addListener(c);
	const l = (e) => (
		t(`configForCategory: searching for config for ${e}`),
		o.has(e)
			? (t(`configForCategory: ${e} exists in config, returning it`), o.get(e))
			: e.indexOf(".") > 0
			? (t(`configForCategory: ${e} has hierarchy, searching for parents`), l(e.substring(0, e.lastIndexOf("."))))
			: (t("configForCategory: returning config for default category"), l("default"))
	);
	(e.exports = o),
		(e.exports = Object.assign(e.exports, {
			appendersForCategory: (e) => l(e).appenders,
			getLevelForCategory: (e) => l(e).level,
			setLevelForCategory: (e, n) => {
				let r = o.get(e);
				if ((t(`setLevelForCategory: found ${r} for ${e}`), !r)) {
					const n = l(e);
					t(`setLevelForCategory: no config found for category, found ${n} for parents of ${e}`), (r = { appenders: n.appenders });
				}
				(r.level = n), o.set(e, r);
			},
			getEnableCallStackForCategory: (e) => !0 === l(e).enableCallStack,
			setEnableCallStackForCategory: (e, t) => {
				l(e).enableCallStack = t;
			},
			init: a,
		}));
})(wa);
const Oa = Nr.exports("log4js:logger"),
	ba = Hu,
	_a = gu,
	Ba = eo,
	Pa = wa.exports,
	ka = tu,
	xa = /at (?:(.+)\s+\()?(?:(.+?):(\d+)(?::(\d+))?|([^)]+))\)?/;
function Na(e, t = 4) {
	const n = e.stack.split("\n").slice(t),
		r = xa.exec(n[0]);
	return r && 6 === r.length
		? { functionName: r[1], fileName: r[2], lineNumber: parseInt(r[3], 10), columnNumber: parseInt(r[4], 10), callStack: n.join("\n") }
		: null;
}
class Ia {
	constructor(e) {
		if (!e) throw new Error("No category provided.");
		(this.category = e), (this.context = {}), (this.parseCallStack = Na), Oa(`Logger created (${this.category}, ${this.level})`);
	}
	get level() {
		return _a.getLevel(Pa.getLevelForCategory(this.category), _a.TRACE);
	}
	set level(e) {
		Pa.setLevelForCategory(this.category, _a.getLevel(e, this.level));
	}
	get useCallStack() {
		return Pa.getEnableCallStackForCategory(this.category);
	}
	set useCallStack(e) {
		Pa.setEnableCallStackForCategory(this.category, !0 === e);
	}
	log(e, ...t) {
		let n = _a.getLevel(e);
		n || (this._log(_a.WARN, "log4js:logger.log: invalid value for log-level as first parameter given: ", e), (n = _a.INFO)),
			this.isLevelEnabled(n) && this._log(n, t);
	}
	isLevelEnabled(e) {
		return this.level.isLessThanOrEqualTo(e);
	}
	_log(e, t) {
		Oa(`sending log data (${e}) to appenders`);
		const n = new ba(this.category, e, t, this.context, this.useCallStack && this.parseCallStack(new Error()));
		Ba.send(n);
	}
	addContext(e, t) {
		this.context[e] = t;
	}
	removeContext(e) {
		delete this.context[e];
	}
	clearContext() {
		this.context = {};
	}
	setParseCallStackFunction(e) {
		this.parseCallStack = e;
	}
}
function Ta(e) {
	const t = _a.getLevel(e),
		n = t
			.toString()
			.toLowerCase()
			.replace(/_([a-z])/g, (e) => e[1].toUpperCase()),
		r = n[0].toUpperCase() + n.slice(1);
	(Ia.prototype[`is${r}Enabled`] = function () {
		return this.isLevelEnabled(t);
	}),
		(Ia.prototype[n] = function (...e) {
			this.log(t, ...e);
		});
}
_a.levels.forEach(Ta),
	ka.addListener(() => {
		_a.levels.forEach(Ta);
	});
var Ra = Ia;
const Ma = gu;
function La(e) {
	return e.originalUrl || e.url;
}
function ja(e, t) {
	for (let n = 0; n < t.length; n++) e = e.replace(t[n].token, t[n].replacement);
	return e;
}
const $a = Nr.exports("log4js:recording"),
	Ha = [];
function Ja() {
	return Ha.slice();
}
function Ga() {
	Ha.length = 0;
}
var Va = {
	configure: function () {
		return function (e) {
			$a(`received logEvent, number of events now ${Ha.length + 1}`), $a("log event was ", e), Ha.push(e);
		};
	},
	replay: Ja,
	playback: Ja,
	reset: Ga,
	erase: Ga,
};
const Ua = Nr.exports("log4js:main"),
	Wa = D.default,
	za = Wr({ proto: !0 }),
	Ka = tu,
	qa = hu,
	Ya = gu,
	Xa = Au.exports,
	Za = wa.exports,
	Qa = Ra,
	el = eo,
	tl = function (e, t) {
		t = "string" == typeof t || "function" == typeof t ? { format: t } : t || {};
		const n = e;
		let r = Ma.getLevel(t.level, Ma.INFO);
		const u = t.format || ':remote-addr - - ":method :url HTTP/:http-version" :status :content-length ":referrer" ":user-agent"',
			o = (function (e) {
				let t = null;
				if ((e instanceof RegExp && (t = e), "string" == typeof e && (t = new RegExp(e)), Array.isArray(e))) {
					const n = e.map((e) => (e.source ? e.source : e));
					t = new RegExp(n.join("|"));
				}
				return t;
			})(t.nolog);
		return (e, i, s) => {
			if (e._logging) return s();
			if (o && o.test(e.originalUrl)) return s();
			if (n.isLevelEnabled(r) || "auto" === t.level) {
				const o = new Date(),
					{ writeHead: s } = i;
				(e._logging = !0),
					(i.writeHead = (e, t) => {
						(i.writeHead = s), i.writeHead(e, t), (i.__statusCode = e), (i.__headers = t || {});
					}),
					i.on("finish", () => {
						(i.responseTime = new Date() - o),
							i.statusCode && "auto" === t.level && ((r = Ma.INFO), i.statusCode >= 300 && (r = Ma.WARN), i.statusCode >= 400 && (r = Ma.ERROR)),
							(r = (function (e, t, n) {
								let r = t;
								if (n) {
									const t = n.find((t) => {
										let n = !1;
										return (n = t.from && t.to ? e >= t.from && e <= t.to : -1 !== t.codes.indexOf(e)), n;
									});
									t && (r = Ma.getLevel(t.level, r));
								}
								return r;
							})(i.statusCode, r, t.statusRules));
						const s = (function (e, t, n) {
							const r = [];
							return (
								r.push({ token: ":url", replacement: La(e) }),
								r.push({ token: ":protocol", replacement: e.protocol }),
								r.push({ token: ":hostname", replacement: e.hostname }),
								r.push({ token: ":method", replacement: e.method }),
								r.push({ token: ":status", replacement: t.__statusCode || t.statusCode }),
								r.push({ token: ":response-time", replacement: t.responseTime }),
								r.push({ token: ":date", replacement: new Date().toUTCString() }),
								r.push({ token: ":referrer", replacement: e.headers.referer || e.headers.referrer || "" }),
								r.push({ token: ":http-version", replacement: `${e.httpVersionMajor}.${e.httpVersionMinor}` }),
								r.push({
									token: ":remote-addr",
									replacement:
										e.headers["x-forwarded-for"] ||
										e.ip ||
										e._remoteAddress ||
										(e.socket && (e.socket.remoteAddress || (e.socket.socket && e.socket.socket.remoteAddress))),
								}),
								r.push({ token: ":user-agent", replacement: e.headers["user-agent"] }),
								r.push({ token: ":content-length", replacement: t.getHeader("content-length") || (t.__headers && t.__headers["Content-Length"]) || "-" }),
								r.push({ token: /:req\[([^\]]+)]/g, replacement: (t, n) => e.headers[n.toLowerCase()] }),
								r.push({ token: /:res\[([^\]]+)]/g, replacement: (e, n) => t.getHeader(n.toLowerCase()) || (t.__headers && t.__headers[n]) }),
								((e) => {
									const t = e.concat();
									for (let e = 0; e < t.length; ++e) for (let n = e + 1; n < t.length; ++n) t[e].token == t[n].token && t.splice(n--, 1);
									return t;
								})(n.concat(r))
							);
						})(e, i, t.tokens || []);
						if ((t.context && n.addContext("res", i), "function" == typeof u)) {
							const t = u(e, i, (e) => ja(e, s));
							t && n.log(r, t);
						} else n.log(r, ja(u, s));
						t.context && n.removeContext("res");
					});
			}
			return s();
		};
	},
	nl = Va;
let rl = !1;
function ul(e) {
	if (!rl) return;
	Ua("Received log event ", e);
	Za.appendersForCategory(e.categoryName).forEach((t) => {
		t(e);
	});
}
function ol(e) {
	rl && il();
	let t = e;
	return (
		"string" == typeof t &&
			(t = (function (e) {
				Ua(`Loading configuration from ${e}`);
				try {
					return JSON.parse(Wa.readFileSync(e, "utf8"));
				} catch (t) {
					throw new Error(`Problem reading config from file "${e}". Error was ${t.message}`, t);
				}
			})(e)),
		Ua(`Configuration is ${t}`),
		Ka.configure(za(t)),
		el.onMessage(ul),
		(rl = !0),
		sl
	);
}
function il(e) {
	Ua("Shutdown called. Disabling all log writing."), (rl = !1);
	const t = Array.from(Xa.values());
	Xa.init(), Za.init();
	const n = t.reduceRight((e, t) => (t.shutdown ? e + 1 : e), 0);
	if (0 === n) return Ua("No appenders with shutdown functions found."), void 0 !== e && e();
	let r,
		u = 0;
	function o(t) {
		(r = r || t), (u += 1), Ua(`Appender shutdowns complete: ${u} / ${n}`), u >= n && (Ua("All shutdown functions completed."), e && e(r));
	}
	return Ua(`Found ${n} appenders with shutdown functions.`), t.filter((e) => e.shutdown).forEach((e) => e.shutdown(o)), null;
}
const sl = {
	getLogger: function (e) {
		return (
			rl || ol(process.env.LOG4JS_CONFIG || { appenders: { out: { type: "stdout" } }, categories: { default: { appenders: ["out"], level: "OFF" } } }),
			new Qa(e || "default")
		);
	},
	configure: ol,
	shutdown: il,
	connectLogger: tl,
	levels: Ya,
	addLayout: qa.addLayout,
	recording: function () {
		return nl;
	},
};
var cl = sl,
	al = {};
Object.defineProperty(al, "__esModule", { value: !0 }),
	(al.levelMap = al.getLevel = al.setCategoriesLevel = al.getConfiguration = al.setConfiguration = void 0);
const ll = cl;
let fl = {
	appenders: {
		debug: { type: "stdout", layout: { type: "pattern", pattern: "[%d] > hvigor %p %c %[%m%]" } },
		info: { type: "stdout", layout: { type: "pattern", pattern: "[%d] > hvigor %[%m%]" } },
		"no-pattern-info": { type: "stdout", layout: { type: "pattern", pattern: "%m" } },
		wrong: { type: "stderr", layout: { type: "pattern", pattern: "[%d] > hvigor %[%p: %m%]" } },
		"just-debug": { type: "logLevelFilter", appender: "debug", level: "debug", maxLevel: "debug" },
		"just-info": { type: "logLevelFilter", appender: "info", level: "info", maxLevel: "info" },
		"just-wrong": { type: "logLevelFilter", appender: "wrong", level: "warn", maxLevel: "error" },
	},
	categories: {
		default: { appenders: ["just-debug", "just-info", "just-wrong"], level: "debug" },
		"no-pattern-info": { appenders: ["no-pattern-info"], level: "info" },
	},
};
al.setConfiguration = (e) => {
	fl = e;
};
al.getConfiguration = () => fl;
let dl = ll.levels.DEBUG;
al.setCategoriesLevel = (e, t) => {
	dl = e;
	const n = fl.categories;
	for (const r in n) (null == t ? void 0 : t.includes(r)) || (Object.prototype.hasOwnProperty.call(n, r) && (n[r].level = e.levelStr));
};
(al.getLevel = () => dl),
	(al.levelMap = new Map([
		["ALL", ll.levels.ALL],
		["MARK", ll.levels.MARK],
		["TRACE", ll.levels.TRACE],
		["DEBUG", ll.levels.DEBUG],
		["INFO", ll.levels.INFO],
		["WARN", ll.levels.WARN],
		["ERROR", ll.levels.ERROR],
		["FATAL", ll.levels.FATAL],
		["OFF", ll.levels.OFF],
	]));
var Dl =
		(w && w.__createBinding) ||
		(Object.create
			? function (e, t, n, r) {
					void 0 === r && (r = n);
					var u = Object.getOwnPropertyDescriptor(t, n);
					(u && !("get" in u ? !t.__esModule : u.writable || u.configurable)) ||
						(u = {
							enumerable: !0,
							get: function () {
								return t[n];
							},
						}),
						Object.defineProperty(e, r, u);
			  }
			: function (e, t, n, r) {
					void 0 === r && (r = n), (e[r] = t[n]);
			  }),
	pl =
		(w && w.__setModuleDefault) ||
		(Object.create
			? function (e, t) {
					Object.defineProperty(e, "default", { enumerable: !0, value: t });
			  }
			: function (e, t) {
					e.default = t;
			  }),
	El =
		(w && w.__importStar) ||
		function (e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && Dl(t, e, n);
			return pl(t, e), t;
		};
Object.defineProperty(xr, "__esModule", { value: !0 }), (xr.evaluateLogLevel = xr.HvigorLogger = void 0);
const ml = El(cl),
	hl = cl,
	yl = El(F.default),
	Cl = al;
class Fl {
	constructor(e) {
		ml.configure((0, Cl.getConfiguration)()), (this._logger = ml.getLogger(e)), (this._logger.level = (0, Cl.getLevel)());
	}
	static getLogger(e) {
		return new Fl(e);
	}
	log(e, ...t) {
		this._logger.log(e, ...t);
	}
	debug(e, ...t) {
		this._logger.debug(e, ...t);
	}
	info(e, ...t) {
		this._logger.info(e, ...t);
	}
	warn(e, ...t) {
		void 0 !== e && "" !== e && this._logger.warn(e, ...t);
	}
	error(e, ...t) {
		this._logger.error(e, ...t);
	}
	_printTaskExecuteInfo(e, t) {
		this.info(`Finished :${e}... after ${t}`);
	}
	_printFailedTaskInfo(e) {
		this.error(`Failed :${e}... `);
	}
	_printDisabledTaskInfo(e) {
		this.info(`Disabled :${e}... `);
	}
	_printUpToDateTaskInfo(e) {
		this.info(`UP-TO-DATE :${e}...  `);
	}
	errorMessageExit(e, ...t) {
		throw new Error(yl.format(e, ...t));
	}
	errorExit(e, t, ...n) {
		t && this._logger.error(t, n), this._logger.error(e.stack);
	}
	setLevel(e, t) {
		(0, Cl.setCategoriesLevel)(e, t), ml.shutdown(), ml.configure((0, Cl.getConfiguration)());
	}
	getLevel() {
		return this._logger.level;
	}
	configure(e) {
		const t = (0, Cl.getConfiguration)(),
			n = { appenders: { ...t.appenders, ...e.appenders }, categories: { ...t.categories, ...e.categories } };
		(0, Cl.setConfiguration)(n), ml.shutdown(), ml.configure(n);
	}
}
(xr.HvigorLogger = Fl),
	(xr.evaluateLogLevel = function (e, t) {
		t.debug ? e.setLevel(hl.levels.DEBUG) : t.warn ? e.setLevel(hl.levels.WARN) : t.error ? e.setLevel(hl.levels.ERROR) : e.setLevel(hl.levels.INFO);
	});
var gl =
	(w && w.__importDefault) ||
	function (e) {
		return e && e.__esModule ? e : { default: e };
	};
Object.defineProperty(X, "__esModule", { value: !0 }), (X.parseJsonText = X.parseJsonFile = void 0);
const Al = Z,
	vl = gl(kr),
	Sl = gl(p.default),
	wl = gl(E.default),
	Ol = xr.HvigorLogger.getLogger("parse-json-util");
var bl;
!(function (e) {
	(e[(e.Char = 0)] = "Char"), (e[(e.EOF = 1)] = "EOF"), (e[(e.Identifier = 2)] = "Identifier");
})(bl || (bl = {}));
let _l,
	Bl,
	Pl,
	kl,
	xl,
	Nl,
	Il = "start",
	Tl = [],
	Rl = 0,
	Ml = 1,
	Ll = 0,
	jl = !1,
	$l = "default",
	Hl = "'",
	Jl = 1;
function Gl(e, t = !1) {
	(Bl = String(e)), (Il = "start"), (Tl = []), (Rl = 0), (Ml = 1), (Ll = 0), (kl = void 0), (jl = t);
	do {
		(_l = Vl()), Xl[Il]();
	} while ("eof" !== _l.type);
	return kl;
}
function Vl() {
	for ($l = "default", xl = "", Hl = "'", Jl = 1; ; ) {
		Nl = Ul();
		const e = zl[$l]();
		if (e) return e;
	}
}
function Ul() {
	if (Bl[Rl]) return String.fromCodePoint(Bl.codePointAt(Rl));
}
function Wl() {
	const e = Ul();
	return "\n" === e ? (Ml++, (Ll = 0)) : e ? (Ll += e.length) : Ll++, e && (Rl += e.length), e;
}
(X.parseJsonFile = function (e, t = !1, n = "utf-8") {
	const r = vl.default.readFileSync(Sl.default.resolve(e), { encoding: n });
	try {
		return Gl(r, t);
	} catch (t) {
		if (t instanceof SyntaxError) {
			const n = t.message.split("at");
			2 === n.length && Ol.errorMessageExit(`${n[0].trim()}${wl.default.EOL}\t at ${e}:${n[1].trim()}`);
		}
		Ol.errorMessageExit(`${e} is not in valid JSON/JSON5 format.`);
	}
}),
	(X.parseJsonText = Gl);
const zl = {
	default() {
		switch (Nl) {
			case "/":
				return Wl(), void ($l = "comment");
			case void 0:
				return Wl(), Kl("eof");
		}
		if (!Al.JudgeUtil.isIgnoreChar(Nl) && !Al.JudgeUtil.isSpaceSeparator(Nl)) return zl[Il]();
		Wl();
	},
	start() {
		$l = "value";
	},
	beforePropertyName() {
		switch (Nl) {
			case "$":
			case "_":
				return (xl = Wl()), void ($l = "identifierName");
			case "\\":
				return Wl(), void ($l = "identifierNameStartEscape");
			case "}":
				return Kl("punctuator", Wl());
			case '"':
			case "'":
				return (Hl = Nl), Wl(), void ($l = "string");
		}
		if (Al.JudgeUtil.isIdStartChar(Nl)) return (xl += Wl()), void ($l = "identifierName");
		throw tf(bl.Char, Wl());
	},
	afterPropertyName() {
		if (":" === Nl) return Kl("punctuator", Wl());
		throw tf(bl.Char, Wl());
	},
	beforePropertyValue() {
		$l = "value";
	},
	afterPropertyValue() {
		switch (Nl) {
			case ",":
			case "}":
				return Kl("punctuator", Wl());
		}
		throw tf(bl.Char, Wl());
	},
	beforeArrayValue() {
		if ("]" === Nl) return Kl("punctuator", Wl());
		$l = "value";
	},
	afterArrayValue() {
		switch (Nl) {
			case ",":
			case "]":
				return Kl("punctuator", Wl());
		}
		throw tf(bl.Char, Wl());
	},
	end() {
		throw tf(bl.Char, Wl());
	},
	comment() {
		switch (Nl) {
			case "*":
				return Wl(), void ($l = "multiLineComment");
			case "/":
				return Wl(), void ($l = "singleLineComment");
		}
		throw tf(bl.Char, Wl());
	},
	multiLineComment() {
		switch (Nl) {
			case "*":
				return Wl(), void ($l = "multiLineCommentAsterisk");
			case void 0:
				throw tf(bl.Char, Wl());
		}
		Wl();
	},
	multiLineCommentAsterisk() {
		switch (Nl) {
			case "*":
				return void Wl();
			case "/":
				return Wl(), void ($l = "default");
			case void 0:
				throw tf(bl.Char, Wl());
		}
		Wl(), ($l = "multiLineComment");
	},
	singleLineComment() {
		switch (Nl) {
			case "\n":
			case "\r":
			case "\u2028":
			case "\u2029":
				return Wl(), void ($l = "default");
			case void 0:
				return Wl(), Kl("eof");
		}
		Wl();
	},
	value() {
		switch (Nl) {
			case "{":
			case "[":
				return Kl("punctuator", Wl());
			case "n":
				return Wl(), ql("ull"), Kl("null", null);
			case "t":
				return Wl(), ql("rue"), Kl("boolean", !0);
			case "f":
				return Wl(), ql("alse"), Kl("boolean", !1);
			case "-":
			case "+":
				return "-" === Wl() && (Jl = -1), void ($l = "numerical");
			case ".":
			case "0":
			case "I":
			case "N":
				return void ($l = "numerical");
			case '"':
			case "'":
				return (Hl = Nl), Wl(), (xl = ""), void ($l = "string");
		}
		if (void 0 === Nl || !Al.JudgeUtil.isDigitWithoutZero(Nl)) throw tf(bl.Char, Wl());
		$l = "numerical";
	},
	numerical() {
		switch (Nl) {
			case ".":
				return (xl = Wl()), void ($l = "decimalPointLeading");
			case "0":
				return (xl = Wl()), void ($l = "zero");
			case "I":
				return Wl(), ql("nfinity"), Kl("numeric", Jl * (1 / 0));
			case "N":
				return Wl(), ql("aN"), Kl("numeric", NaN);
		}
		if (void 0 !== Nl && Al.JudgeUtil.isDigitWithoutZero(Nl)) return (xl = Wl()), void ($l = "decimalInteger");
		throw tf(bl.Char, Wl());
	},
	zero() {
		switch (Nl) {
			case ".":
			case "e":
			case "E":
				return void ($l = "decimal");
			case "x":
			case "X":
				return (xl += Wl()), void ($l = "hexadecimal");
		}
		return Kl("numeric", 0);
	},
	decimalInteger() {
		switch (Nl) {
			case ".":
			case "e":
			case "E":
				return void ($l = "decimal");
		}
		if (!Al.JudgeUtil.isDigit(Nl)) return Kl("numeric", Jl * Number(xl));
		xl += Wl();
	},
	decimal() {
		switch (Nl) {
			case ".":
				(xl += Wl()), ($l = "decimalFraction");
				break;
			case "e":
			case "E":
				(xl += Wl()), ($l = "decimalExponent");
		}
	},
	decimalPointLeading() {
		if (Al.JudgeUtil.isDigit(Nl)) return (xl += Wl()), void ($l = "decimalFraction");
		throw tf(bl.Char, Wl());
	},
	decimalFraction() {
		switch (Nl) {
			case "e":
			case "E":
				return (xl += Wl()), void ($l = "decimalExponent");
		}
		if (!Al.JudgeUtil.isDigit(Nl)) return Kl("numeric", Jl * Number(xl));
		xl += Wl();
	},
	decimalExponent() {
		switch (Nl) {
			case "+":
			case "-":
				return (xl += Wl()), void ($l = "decimalExponentSign");
		}
		if (Al.JudgeUtil.isDigit(Nl)) return (xl += Wl()), void ($l = "decimalExponentInteger");
		throw tf(bl.Char, Wl());
	},
	decimalExponentSign() {
		if (Al.JudgeUtil.isDigit(Nl)) return (xl += Wl()), void ($l = "decimalExponentInteger");
		throw tf(bl.Char, Wl());
	},
	decimalExponentInteger() {
		if (!Al.JudgeUtil.isDigit(Nl)) return Kl("numeric", Jl * Number(xl));
		xl += Wl();
	},
	hexadecimal() {
		if (Al.JudgeUtil.isHexDigit(Nl)) return (xl += Wl()), void ($l = "hexadecimalInteger");
		throw tf(bl.Char, Wl());
	},
	hexadecimalInteger() {
		if (!Al.JudgeUtil.isHexDigit(Nl)) return Kl("numeric", Jl * Number(xl));
		xl += Wl();
	},
	identifierNameStartEscape() {
		if ("u" !== Nl) throw tf(bl.Char, Wl());
		Wl();
		const e = Yl();
		switch (e) {
			case "$":
			case "_":
				break;
			default:
				if (!Al.JudgeUtil.isIdStartChar(e)) throw tf(bl.Identifier);
		}
		(xl += e), ($l = "identifierName");
	},
	identifierName() {
		switch (Nl) {
			case "$":
			case "_":
			case "‌":
			case "‍":
				return void (xl += Wl());
			case "\\":
				return Wl(), void ($l = "identifierNameEscape");
		}
		if (!Al.JudgeUtil.isIdContinueChar(Nl)) return Kl("identifier", xl);
		xl += Wl();
	},
	identifierNameEscape() {
		if ("u" !== Nl) throw tf(bl.Char, Wl());
		Wl();
		const e = Yl();
		switch (e) {
			case "$":
			case "_":
			case "‌":
			case "‍":
				break;
			default:
				if (!Al.JudgeUtil.isIdContinueChar(e)) throw tf(bl.Identifier);
		}
		(xl += e), ($l = "identifierName");
	},
	string() {
		switch (Nl) {
			case "\\":
				return (
					Wl(),
					void (xl += (function () {
						const e = Ul(),
							t = (function () {
								switch (Ul()) {
									case "b":
										return Wl(), "\b";
									case "f":
										return Wl(), "\f";
									case "n":
										return Wl(), "\n";
									case "r":
										return Wl(), "\r";
									case "t":
										return Wl(), "\t";
									case "v":
										return Wl(), "\v";
								}
								return;
							})();
						if (t) return t;
						switch (e) {
							case "0":
								if ((Wl(), Al.JudgeUtil.isDigit(Ul()))) throw tf(bl.Char, Wl());
								return "\0";
							case "x":
								return (
									Wl(),
									(function () {
										let e = "",
											t = Ul();
										if (!Al.JudgeUtil.isHexDigit(t)) throw tf(bl.Char, Wl());
										if (((e += Wl()), (t = Ul()), !Al.JudgeUtil.isHexDigit(t))) throw tf(bl.Char, Wl());
										return (e += Wl()), String.fromCodePoint(parseInt(e, 16));
									})()
								);
							case "u":
								return Wl(), Yl();
							case "\n":
							case "\u2028":
							case "\u2029":
								return Wl(), "";
							case "\r":
								return Wl(), "\n" === Ul() && Wl(), "";
						}
						if (void 0 === e || Al.JudgeUtil.isDigitWithoutZero(e)) throw tf(bl.Char, Wl());
						return Wl();
					})())
				);
			case '"':
			case "'":
				if (Nl === Hl) {
					const e = Kl("string", xl);
					return Wl(), e;
				}
				return void (xl += Wl());
			case "\n":
			case "\r":
			case void 0:
				throw tf(bl.Char, Wl());
			case "\u2028":
			case "\u2029":
				!(function (e) {
					Ol.warn(`JSON5: '${ef(e)}' in strings is not valid ECMAScript; consider escaping.`);
				})(Nl);
		}
		xl += Wl();
	},
};
function Kl(e, t) {
	return { type: e, value: t, line: Ml, column: Ll };
}
function ql(e) {
	for (const t of e) {
		if (Ul() !== t) throw tf(bl.Char, Wl());
		Wl();
	}
}
function Yl() {
	let e = "",
		t = 4;
	for (; t-- > 0; ) {
		const t = Ul();
		if (!Al.JudgeUtil.isHexDigit(t)) throw tf(bl.Char, Wl());
		e += Wl();
	}
	return String.fromCodePoint(parseInt(e, 16));
}
const Xl = {
	start() {
		if ("eof" === _l.type) throw tf(bl.EOF);
		Zl();
	},
	beforePropertyName() {
		switch (_l.type) {
			case "identifier":
			case "string":
				return (Pl = _l.value), void (Il = "afterPropertyName");
			case "punctuator":
				return void Ql();
			case "eof":
				throw tf(bl.EOF);
		}
	},
	afterPropertyName() {
		if ("eof" === _l.type) throw tf(bl.EOF);
		Il = "beforePropertyValue";
	},
	beforePropertyValue() {
		if ("eof" === _l.type) throw tf(bl.EOF);
		Zl();
	},
	afterPropertyValue() {
		if ("eof" === _l.type) throw tf(bl.EOF);
		switch (_l.value) {
			case ",":
				return void (Il = "beforePropertyName");
			case "}":
				Ql();
		}
	},
	beforeArrayValue() {
		if ("eof" === _l.type) throw tf(bl.EOF);
		"punctuator" !== _l.type || "]" !== _l.value ? Zl() : Ql();
	},
	afterArrayValue() {
		if ("eof" === _l.type) throw tf(bl.EOF);
		switch (_l.value) {
			case ",":
				return void (Il = "beforeArrayValue");
			case "]":
				Ql();
		}
	},
	end() {},
};
function Zl() {
	const e = (function () {
		let e;
		switch (_l.type) {
			case "punctuator":
				switch (_l.value) {
					case "{":
						e = {};
						break;
					case "[":
						e = [];
				}
				break;
			case "null":
			case "boolean":
			case "numeric":
			case "string":
				e = _l.value;
		}
		return e;
	})();
	if ((jl && "object" == typeof e && ((e._line = Ml), (e._column = Ll)), void 0 === kl)) kl = e;
	else {
		const t = Tl[Tl.length - 1];
		Array.isArray(t)
			? jl && "object" != typeof e
				? t.push({ value: e, _line: Ml, _column: Ll })
				: t.push(e)
			: (t[Pl] = jl && "object" != typeof e ? { value: e, _line: Ml, _column: Ll } : e);
	}
	!(function (e) {
		if (e && "object" == typeof e) Tl.push(e), (Il = Array.isArray(e) ? "beforeArrayValue" : "beforePropertyName");
		else {
			const e = Tl[Tl.length - 1];
			Il = e ? (Array.isArray(e) ? "afterArrayValue" : "afterPropertyValue") : "end";
		}
	})(e);
}
function Ql() {
	Tl.pop();
	const e = Tl[Tl.length - 1];
	Il = e ? (Array.isArray(e) ? "afterArrayValue" : "afterPropertyValue") : "end";
}
function ef(e) {
	const t = {
		"'": "\\'",
		'"': '\\"',
		"\\": "\\\\",
		"\b": "\\b",
		"\f": "\\f",
		"\n": "\\n",
		"\r": "\\r",
		"\t": "\\t",
		"\v": "\\v",
		"\0": "\\0",
		"\u2028": "\\u2028",
		"\u2029": "\\u2029",
	};
	if (t[e]) return t[e];
	if (e < " ") {
		const t = e.charCodeAt(0).toString(16);
		return `\\x${`00${t}`.substring(t.length)}`;
	}
	return e;
}
function tf(e, t) {
	let n = "";
	switch (e) {
		case bl.Char:
			n = void 0 === t ? `JSON5: invalid end of input at ${Ml}:${Ll}` : `JSON5: invalid character '${ef(t)}' at ${Ml}:${Ll}`;
			break;
		case bl.EOF:
			n = `JSON5: invalid end of input at ${Ml}:${Ll}`;
			break;
		case bl.Identifier:
			(Ll -= 5), (n = `JSON5: invalid identifier character at ${Ml}:${Ll}`);
	}
	const r = new nf(n);
	return (r.lineNumber = Ml), (r.columnNumber = Ll), r;
}
class nf extends SyntaxError {}
var rf =
		(w && w.__createBinding) ||
		(Object.create
			? function (e, t, n, r) {
					void 0 === r && (r = n);
					var u = Object.getOwnPropertyDescriptor(t, n);
					(u && !("get" in u ? !t.__esModule : u.writable || u.configurable)) ||
						(u = {
							enumerable: !0,
							get: function () {
								return t[n];
							},
						}),
						Object.defineProperty(e, r, u);
			  }
			: function (e, t, n, r) {
					void 0 === r && (r = n), (e[r] = t[n]);
			  }),
	uf =
		(w && w.__setModuleDefault) ||
		(Object.create
			? function (e, t) {
					Object.defineProperty(e, "default", { enumerable: !0, value: t });
			  }
			: function (e, t) {
					e.default = t;
			  }),
	of =
		(w && w.__importStar) ||
		function (e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && rf(t, e, n);
			return uf(t, e), t;
		};
Object.defineProperty(Y, "__esModule", { value: !0 });
var sf = (Y.cleanWorkSpace = Ff = Y.executeInstallHvigor = yf = Y.isHvigorInstalled = mf = Y.isAllDependenciesInstalled = void 0);
const cf = of(D.default),
	af = of(p.default),
	lf = b,
	ff = j,
	df = $,
	Df = X;
let pf, Ef;
var mf = (Y.isAllDependenciesInstalled = function () {
	function e(e) {
		const t = null == e ? void 0 : e.dependencies;
		return void 0 === t ? 0 : Object.getOwnPropertyNames(t).length;
	}
	if (((pf = gf()), (Ef = Af()), e(pf) + 1 !== e(Ef))) return !1;
	for (const e in null == pf ? void 0 : pf.dependencies) if (!(0, ff.hasNpmPackInPaths)(e, [lf.HVIGOR_PROJECT_DEPENDENCIES_HOME]) || !hf(e, pf, Ef)) return !1;
	return !0;
});
function hf(e, t, n) {
	return void 0 !== n.dependencies && (0, ff.offlinePluginConversion)(lf.HVIGOR_PROJECT_ROOT_DIR, t.dependencies[e]) === n.dependencies[e];
}
var yf = (Y.isHvigorInstalled = function () {
	return (
		(pf = gf()),
		(Ef = Af()),
		(0, ff.hasNpmPackInPaths)(lf.HVIGOR_ENGINE_PACKAGE_NAME, [lf.HVIGOR_PROJECT_DEPENDENCIES_HOME]) &&
			(0, ff.offlinePluginConversion)(lf.HVIGOR_PROJECT_ROOT_DIR, pf.hvigorVersion) === Ef.dependencies[lf.HVIGOR_ENGINE_PACKAGE_NAME]
	);
});
const Cf = { cwd: lf.HVIGOR_PROJECT_DEPENDENCIES_HOME, stdio: ["inherit", "inherit", "inherit"] };
var Ff = (Y.executeInstallHvigor = function () {
	(0, df.logInfoPrintConsole)("Hvigor installing...");
	const e = { dependencies: {} };
	e.dependencies[lf.HVIGOR_ENGINE_PACKAGE_NAME] = (0, ff.offlinePluginConversion)(lf.HVIGOR_PROJECT_ROOT_DIR, pf.hvigorVersion);
	try {
		cf.mkdirSync(lf.HVIGOR_PROJECT_DEPENDENCIES_HOME, { recursive: !0 });
		const t = af.resolve(lf.HVIGOR_PROJECT_DEPENDENCIES_HOME, lf.DEFAULT_PACKAGE_JSON);
		cf.writeFileSync(t, JSON.stringify(e));
	} catch (e) {
		(0, df.logErrorAndExit)(e);
	}
	!(function () {
		const e = ["config", "set", "store-dir", lf.HVIGOR_PNPM_STORE_PATH];
		(0, ff.executeCommand)(lf.HVIGOR_WRAPPER_PNPM_SCRIPT_PATH, e, Cf);
	})(),
		(0, ff.executeCommand)(lf.HVIGOR_WRAPPER_PNPM_SCRIPT_PATH, ["install"], Cf);
});
function gf() {
	const e = af.resolve(lf.HVIGOR_PROJECT_WRAPPER_HOME, lf.DEFAULT_HVIGOR_CONFIG_JSON_FILE_NAME);
	return cf.existsSync(e) || (0, df.logErrorAndExit)(`Error: Hvigor config file ${e} does not exist.`), (0, Df.parseJsonFile)(e);
}
function Af() {
	return cf.existsSync(lf.HVIGOR_PROJECT_DEPENDENCY_PACKAGE_JSON_PATH)
		? (0, Df.parseJsonFile)(lf.HVIGOR_PROJECT_DEPENDENCY_PACKAGE_JSON_PATH)
		: { dependencies: {} };
}
sf = Y.cleanWorkSpace = function () {
	if (((0, df.logInfoPrintConsole)("Hvigor cleaning..."), !cf.existsSync(lf.HVIGOR_PROJECT_DEPENDENCIES_HOME))) return;
	const e = cf.readdirSync(lf.HVIGOR_PROJECT_DEPENDENCIES_HOME);
	if (e && 0 !== e.length) {
		cf.existsSync(lf.HVIGOR_BOOT_JS_FILE_PATH) && (0, ff.executeCommand)(process.argv[0], [lf.HVIGOR_BOOT_JS_FILE_PATH, "--stop-daemon"], {});
		try {
			e.forEach((e) => {
				cf.rmSync(af.resolve(lf.HVIGOR_PROJECT_DEPENDENCIES_HOME, e), { recursive: !0 });
			});
		} catch (e) {
			(0, df.logErrorAndExit)(
				`The hvigor build tool cannot be installed. Please manually clear the workspace directory and synchronize the project again.\n\n      Workspace Path: ${lf.HVIGOR_PROJECT_DEPENDENCIES_HOME}.`,
			);
		}
	}
};
var vf = {},
	Sf =
		(w && w.__createBinding) ||
		(Object.create
			? function (e, t, n, r) {
					void 0 === r && (r = n);
					var u = Object.getOwnPropertyDescriptor(t, n);
					(u && !("get" in u ? !t.__esModule : u.writable || u.configurable)) ||
						(u = {
							enumerable: !0,
							get: function () {
								return t[n];
							},
						}),
						Object.defineProperty(e, r, u);
			  }
			: function (e, t, n, r) {
					void 0 === r && (r = n), (e[r] = t[n]);
			  }),
	wf =
		(w && w.__setModuleDefault) ||
		(Object.create
			? function (e, t) {
					Object.defineProperty(e, "default", { enumerable: !0, value: t });
			  }
			: function (e, t) {
					e.default = t;
			  }),
	Of =
		(w && w.__importStar) ||
		function (e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && Sf(t, e, n);
			return wf(t, e), t;
		};
Object.defineProperty(vf, "__esModule", { value: !0 });
var bf = (vf.executeBuild = void 0);
const _f = b,
	Bf = Of(D.default),
	Pf = Of(p.default),
	kf = $;
(bf = vf.executeBuild =
	function () {
		const e = Pf.resolve(_f.HVIGOR_PROJECT_DEPENDENCIES_HOME, "node_modules", "@ohos", "hvigor", "bin", "hvigor.js");
		try {
			const t = Bf.realpathSync(e);
			require(t);
		} catch (t) {
			(0, kf.logErrorAndExit)(`Error: ENOENT: no such file ${e},delete ${_f.HVIGOR_PROJECT_DEPENDENCIES_HOME} and retry.`);
		}
	}),
	(function () {
		if ((O.checkNpmConifg(), O.environmentHandler(), O.isPnpmAvailable() || O.executeInstallPnpm(), yf() && mf())) bf();
		else {
			sf();
			try {
				Ff();
			} catch (e) {
				return void sf();
			}
			bf();
		}
	})();
