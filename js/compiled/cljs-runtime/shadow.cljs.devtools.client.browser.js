goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___51025 = arguments.length;
var i__4790__auto___51026 = (0);
while(true){
if((i__4790__auto___51026 < len__4789__auto___51025)){
args__4795__auto__.push((arguments[i__4790__auto___51026]));

var G__51027 = (i__4790__auto___51026 + (1));
i__4790__auto___51026 = G__51027;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq50605){
var G__50607 = cljs.core.first(seq50605);
var seq50605__$1 = cljs.core.next(seq50605);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50607,seq50605__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__50620){
var map__50621 = p__50620;
var map__50621__$1 = (((((!((map__50621 == null))))?(((((map__50621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50621):map__50621);
var src = map__50621__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50621__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50621__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__50642 = cljs.core.seq(sources);
var chunk__50643 = null;
var count__50644 = (0);
var i__50645 = (0);
while(true){
if((i__50645 < count__50644)){
var map__50657 = chunk__50643.cljs$core$IIndexed$_nth$arity$2(null,i__50645);
var map__50657__$1 = (((((!((map__50657 == null))))?(((((map__50657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50657):map__50657);
var src = map__50657__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50657__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50657__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50657__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50657__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e50661){var e_51035 = e50661;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_51035);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_51035.message)].join('')));
}

var G__51036 = seq__50642;
var G__51037 = chunk__50643;
var G__51038 = count__50644;
var G__51039 = (i__50645 + (1));
seq__50642 = G__51036;
chunk__50643 = G__51037;
count__50644 = G__51038;
i__50645 = G__51039;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50642);
if(temp__5735__auto__){
var seq__50642__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50642__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__50642__$1);
var G__51040 = cljs.core.chunk_rest(seq__50642__$1);
var G__51041 = c__4609__auto__;
var G__51042 = cljs.core.count(c__4609__auto__);
var G__51043 = (0);
seq__50642 = G__51040;
chunk__50643 = G__51041;
count__50644 = G__51042;
i__50645 = G__51043;
continue;
} else {
var map__50672 = cljs.core.first(seq__50642__$1);
var map__50672__$1 = (((((!((map__50672 == null))))?(((((map__50672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50672):map__50672);
var src = map__50672__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50672__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50672__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50672__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50672__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e50683){var e_51047 = e50683;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_51047);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_51047.message)].join('')));
}

var G__51048 = cljs.core.next(seq__50642__$1);
var G__51049 = null;
var G__51050 = (0);
var G__51051 = (0);
seq__50642 = G__51048;
chunk__50643 = G__51049;
count__50644 = G__51050;
i__50645 = G__51051;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__50690 = cljs.core.seq(js_requires);
var chunk__50691 = null;
var count__50692 = (0);
var i__50693 = (0);
while(true){
if((i__50693 < count__50692)){
var js_ns = chunk__50691.cljs$core$IIndexed$_nth$arity$2(null,i__50693);
var require_str_51054 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_51054);


var G__51055 = seq__50690;
var G__51056 = chunk__50691;
var G__51058 = count__50692;
var G__51059 = (i__50693 + (1));
seq__50690 = G__51055;
chunk__50691 = G__51056;
count__50692 = G__51058;
i__50693 = G__51059;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50690);
if(temp__5735__auto__){
var seq__50690__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50690__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__50690__$1);
var G__51060 = cljs.core.chunk_rest(seq__50690__$1);
var G__51061 = c__4609__auto__;
var G__51062 = cljs.core.count(c__4609__auto__);
var G__51063 = (0);
seq__50690 = G__51060;
chunk__50691 = G__51061;
count__50692 = G__51062;
i__50693 = G__51063;
continue;
} else {
var js_ns = cljs.core.first(seq__50690__$1);
var require_str_51064 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_51064);


var G__51065 = cljs.core.next(seq__50690__$1);
var G__51066 = null;
var G__51067 = (0);
var G__51068 = (0);
seq__50690 = G__51065;
chunk__50691 = G__51066;
count__50692 = G__51067;
i__50693 = G__51068;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__50709 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__50709) : callback.call(null,G__50709));
} else {
var G__50712 = shadow.cljs.devtools.client.env.files_url();
var G__50713 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__50714 = "POST";
var G__50715 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__50716 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__50712,G__50713,G__50714,G__50715,G__50716);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__50720){
var map__50724 = p__50720;
var map__50724__$1 = (((((!((map__50724 == null))))?(((((map__50724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50724):map__50724);
var msg = map__50724__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50724__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50724__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__50728 = info;
var map__50728__$1 = (((((!((map__50728 == null))))?(((((map__50728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50728):map__50728);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50728__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50728__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50730(s__50731){
return (new cljs.core.LazySeq(null,(function (){
var s__50731__$1 = s__50731;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50731__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__50736 = cljs.core.first(xs__6292__auto__);
var map__50736__$1 = (((((!((map__50736 == null))))?(((((map__50736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50736):map__50736);
var src = map__50736__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50736__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50736__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__50731__$1,map__50736,map__50736__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__50728,map__50728__$1,sources,compiled,map__50724,map__50724__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50730_$_iter__50732(s__50733){
return (new cljs.core.LazySeq(null,((function (s__50731__$1,map__50736,map__50736__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__50728,map__50728__$1,sources,compiled,map__50724,map__50724__$1,msg,info,reload_info){
return (function (){
var s__50733__$1 = s__50733;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__50733__$1);
if(temp__5735__auto____$1){
var s__50733__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50733__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__50733__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__50735 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__50734 = (0);
while(true){
if((i__50734 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__50734);
cljs.core.chunk_append(b__50735,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__51074 = (i__50734 + (1));
i__50734 = G__51074;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50735),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50730_$_iter__50732(cljs.core.chunk_rest(s__50733__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50735),null);
}
} else {
var warning = cljs.core.first(s__50733__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50730_$_iter__50732(cljs.core.rest(s__50733__$2)));
}
} else {
return null;
}
break;
}
});})(s__50731__$1,map__50736,map__50736__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__50728,map__50728__$1,sources,compiled,map__50724,map__50724__$1,msg,info,reload_info))
,null,null));
});})(s__50731__$1,map__50736,map__50736__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__50728,map__50728__$1,sources,compiled,map__50724,map__50724__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50730(cljs.core.rest(s__50731__$1)));
} else {
var G__51075 = cljs.core.rest(s__50731__$1);
s__50731__$1 = G__51075;
continue;
}
} else {
var G__51076 = cljs.core.rest(s__50731__$1);
s__50731__$1 = G__51076;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(sources);
})()));
var seq__50750_51077 = cljs.core.seq(warnings);
var chunk__50751_51078 = null;
var count__50752_51079 = (0);
var i__50753_51080 = (0);
while(true){
if((i__50753_51080 < count__50752_51079)){
var map__50764_51081 = chunk__50751_51078.cljs$core$IIndexed$_nth$arity$2(null,i__50753_51080);
var map__50764_51082__$1 = (((((!((map__50764_51081 == null))))?(((((map__50764_51081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50764_51081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50764_51081):map__50764_51081);
var w_51083 = map__50764_51082__$1;
var msg_51084__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50764_51082__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51085 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50764_51082__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51086 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50764_51082__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51087 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50764_51082__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51087)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51085),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51086),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51084__$1)].join(''));


var G__51090 = seq__50750_51077;
var G__51091 = chunk__50751_51078;
var G__51092 = count__50752_51079;
var G__51093 = (i__50753_51080 + (1));
seq__50750_51077 = G__51090;
chunk__50751_51078 = G__51091;
count__50752_51079 = G__51092;
i__50753_51080 = G__51093;
continue;
} else {
var temp__5735__auto___51094 = cljs.core.seq(seq__50750_51077);
if(temp__5735__auto___51094){
var seq__50750_51095__$1 = temp__5735__auto___51094;
if(cljs.core.chunked_seq_QMARK_(seq__50750_51095__$1)){
var c__4609__auto___51096 = cljs.core.chunk_first(seq__50750_51095__$1);
var G__51097 = cljs.core.chunk_rest(seq__50750_51095__$1);
var G__51098 = c__4609__auto___51096;
var G__51099 = cljs.core.count(c__4609__auto___51096);
var G__51100 = (0);
seq__50750_51077 = G__51097;
chunk__50751_51078 = G__51098;
count__50752_51079 = G__51099;
i__50753_51080 = G__51100;
continue;
} else {
var map__50767_51101 = cljs.core.first(seq__50750_51095__$1);
var map__50767_51102__$1 = (((((!((map__50767_51101 == null))))?(((((map__50767_51101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50767_51101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50767_51101):map__50767_51101);
var w_51103 = map__50767_51102__$1;
var msg_51104__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50767_51102__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51105 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50767_51102__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51106 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50767_51102__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51107 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50767_51102__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51107)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51105),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51106),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51104__$1)].join(''));


var G__51108 = cljs.core.next(seq__50750_51095__$1);
var G__51109 = null;
var G__51110 = (0);
var G__51111 = (0);
seq__50750_51077 = G__51108;
chunk__50751_51078 = G__51109;
count__50752_51079 = G__51110;
i__50753_51080 = G__51111;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__50769){
var map__50770 = p__50769;
var map__50770__$1 = (((((!((map__50770 == null))))?(((((map__50770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50770):map__50770);
var src = map__50770__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50770__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50770__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__50797){
var map__50798 = p__50797;
var map__50798__$1 = (((((!((map__50798 == null))))?(((((map__50798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50798):map__50798);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50798__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__50804){
var map__50805 = p__50804;
var map__50805__$1 = (((((!((map__50805 == null))))?(((((map__50805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50805):map__50805);
var rc = map__50805__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50805__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__50719_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__50719_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__50837){
var map__50838 = p__50837;
var map__50838__$1 = (((((!((map__50838 == null))))?(((((map__50838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50838):map__50838);
var msg = map__50838__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50838__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__50842 = cljs.core.seq(updates);
var chunk__50844 = null;
var count__50845 = (0);
var i__50846 = (0);
while(true){
if((i__50846 < count__50845)){
var path = chunk__50844.cljs$core$IIndexed$_nth$arity$2(null,i__50846);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50929_51122 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50932_51123 = null;
var count__50933_51124 = (0);
var i__50934_51125 = (0);
while(true){
if((i__50934_51125 < count__50933_51124)){
var node_51126 = chunk__50932_51123.cljs$core$IIndexed$_nth$arity$2(null,i__50934_51125);
var path_match_51127 = shadow.cljs.devtools.client.browser.match_paths(node_51126.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51127)){
var new_link_51128 = (function (){var G__50944 = node_51126.cloneNode(true);
G__50944.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51127),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50944;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51127], 0));

goog.dom.insertSiblingAfter(new_link_51128,node_51126);

goog.dom.removeNode(node_51126);


var G__51129 = seq__50929_51122;
var G__51130 = chunk__50932_51123;
var G__51131 = count__50933_51124;
var G__51132 = (i__50934_51125 + (1));
seq__50929_51122 = G__51129;
chunk__50932_51123 = G__51130;
count__50933_51124 = G__51131;
i__50934_51125 = G__51132;
continue;
} else {
var G__51133 = seq__50929_51122;
var G__51134 = chunk__50932_51123;
var G__51135 = count__50933_51124;
var G__51136 = (i__50934_51125 + (1));
seq__50929_51122 = G__51133;
chunk__50932_51123 = G__51134;
count__50933_51124 = G__51135;
i__50934_51125 = G__51136;
continue;
}
} else {
var temp__5735__auto___51138 = cljs.core.seq(seq__50929_51122);
if(temp__5735__auto___51138){
var seq__50929_51139__$1 = temp__5735__auto___51138;
if(cljs.core.chunked_seq_QMARK_(seq__50929_51139__$1)){
var c__4609__auto___51140 = cljs.core.chunk_first(seq__50929_51139__$1);
var G__51141 = cljs.core.chunk_rest(seq__50929_51139__$1);
var G__51142 = c__4609__auto___51140;
var G__51143 = cljs.core.count(c__4609__auto___51140);
var G__51144 = (0);
seq__50929_51122 = G__51141;
chunk__50932_51123 = G__51142;
count__50933_51124 = G__51143;
i__50934_51125 = G__51144;
continue;
} else {
var node_51145 = cljs.core.first(seq__50929_51139__$1);
var path_match_51146 = shadow.cljs.devtools.client.browser.match_paths(node_51145.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51146)){
var new_link_51147 = (function (){var G__50948 = node_51145.cloneNode(true);
G__50948.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51146),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50948;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51146], 0));

goog.dom.insertSiblingAfter(new_link_51147,node_51145);

goog.dom.removeNode(node_51145);


var G__51148 = cljs.core.next(seq__50929_51139__$1);
var G__51149 = null;
var G__51150 = (0);
var G__51151 = (0);
seq__50929_51122 = G__51148;
chunk__50932_51123 = G__51149;
count__50933_51124 = G__51150;
i__50934_51125 = G__51151;
continue;
} else {
var G__51152 = cljs.core.next(seq__50929_51139__$1);
var G__51153 = null;
var G__51154 = (0);
var G__51155 = (0);
seq__50929_51122 = G__51152;
chunk__50932_51123 = G__51153;
count__50933_51124 = G__51154;
i__50934_51125 = G__51155;
continue;
}
}
} else {
}
}
break;
}


var G__51156 = seq__50842;
var G__51157 = chunk__50844;
var G__51158 = count__50845;
var G__51159 = (i__50846 + (1));
seq__50842 = G__51156;
chunk__50844 = G__51157;
count__50845 = G__51158;
i__50846 = G__51159;
continue;
} else {
var G__51160 = seq__50842;
var G__51161 = chunk__50844;
var G__51162 = count__50845;
var G__51163 = (i__50846 + (1));
seq__50842 = G__51160;
chunk__50844 = G__51161;
count__50845 = G__51162;
i__50846 = G__51163;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50842);
if(temp__5735__auto__){
var seq__50842__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50842__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__50842__$1);
var G__51164 = cljs.core.chunk_rest(seq__50842__$1);
var G__51165 = c__4609__auto__;
var G__51166 = cljs.core.count(c__4609__auto__);
var G__51167 = (0);
seq__50842 = G__51164;
chunk__50844 = G__51165;
count__50845 = G__51166;
i__50846 = G__51167;
continue;
} else {
var path = cljs.core.first(seq__50842__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50949_51168 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50952_51169 = null;
var count__50953_51170 = (0);
var i__50954_51171 = (0);
while(true){
if((i__50954_51171 < count__50953_51170)){
var node_51172 = chunk__50952_51169.cljs$core$IIndexed$_nth$arity$2(null,i__50954_51171);
var path_match_51173 = shadow.cljs.devtools.client.browser.match_paths(node_51172.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51173)){
var new_link_51174 = (function (){var G__50961 = node_51172.cloneNode(true);
G__50961.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51173),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50961;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51173], 0));

goog.dom.insertSiblingAfter(new_link_51174,node_51172);

goog.dom.removeNode(node_51172);


var G__51175 = seq__50949_51168;
var G__51176 = chunk__50952_51169;
var G__51177 = count__50953_51170;
var G__51178 = (i__50954_51171 + (1));
seq__50949_51168 = G__51175;
chunk__50952_51169 = G__51176;
count__50953_51170 = G__51177;
i__50954_51171 = G__51178;
continue;
} else {
var G__51179 = seq__50949_51168;
var G__51180 = chunk__50952_51169;
var G__51181 = count__50953_51170;
var G__51182 = (i__50954_51171 + (1));
seq__50949_51168 = G__51179;
chunk__50952_51169 = G__51180;
count__50953_51170 = G__51181;
i__50954_51171 = G__51182;
continue;
}
} else {
var temp__5735__auto___51183__$1 = cljs.core.seq(seq__50949_51168);
if(temp__5735__auto___51183__$1){
var seq__50949_51185__$1 = temp__5735__auto___51183__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50949_51185__$1)){
var c__4609__auto___51186 = cljs.core.chunk_first(seq__50949_51185__$1);
var G__51187 = cljs.core.chunk_rest(seq__50949_51185__$1);
var G__51188 = c__4609__auto___51186;
var G__51189 = cljs.core.count(c__4609__auto___51186);
var G__51190 = (0);
seq__50949_51168 = G__51187;
chunk__50952_51169 = G__51188;
count__50953_51170 = G__51189;
i__50954_51171 = G__51190;
continue;
} else {
var node_51192 = cljs.core.first(seq__50949_51185__$1);
var path_match_51193 = shadow.cljs.devtools.client.browser.match_paths(node_51192.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51193)){
var new_link_51194 = (function (){var G__50962 = node_51192.cloneNode(true);
G__50962.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51193),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50962;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51193], 0));

goog.dom.insertSiblingAfter(new_link_51194,node_51192);

goog.dom.removeNode(node_51192);


var G__51195 = cljs.core.next(seq__50949_51185__$1);
var G__51196 = null;
var G__51197 = (0);
var G__51198 = (0);
seq__50949_51168 = G__51195;
chunk__50952_51169 = G__51196;
count__50953_51170 = G__51197;
i__50954_51171 = G__51198;
continue;
} else {
var G__51203 = cljs.core.next(seq__50949_51185__$1);
var G__51204 = null;
var G__51205 = (0);
var G__51206 = (0);
seq__50949_51168 = G__51203;
chunk__50952_51169 = G__51204;
count__50953_51170 = G__51205;
i__50954_51171 = G__51206;
continue;
}
}
} else {
}
}
break;
}


var G__51207 = cljs.core.next(seq__50842__$1);
var G__51208 = null;
var G__51209 = (0);
var G__51210 = (0);
seq__50842 = G__51207;
chunk__50844 = G__51208;
count__50845 = G__51209;
i__50846 = G__51210;
continue;
} else {
var G__51211 = cljs.core.next(seq__50842__$1);
var G__51212 = null;
var G__51213 = (0);
var G__51214 = (0);
seq__50842 = G__51211;
chunk__50844 = G__51212;
count__50845 = G__51213;
i__50846 = G__51214;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__50970){
var map__50971 = p__50970;
var map__50971__$1 = (((((!((map__50971 == null))))?(((((map__50971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50971):map__50971);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50971__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50971__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__50977,done){
var map__50978 = p__50977;
var map__50978__$1 = (((((!((map__50978 == null))))?(((((map__50978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50978):map__50978);
var msg = map__50978__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50978__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50978__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50978__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50978__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__50982){
var map__50983 = p__50982;
var map__50983__$1 = (((((!((map__50983 == null))))?(((((map__50983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50983):map__50983);
var src = map__50983__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50983__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e50985){var e = e50985;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__50986,done){
var map__50987 = p__50986;
var map__50987__$1 = (((((!((map__50987 == null))))?(((((map__50987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50987.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50987):map__50987);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50987__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50987__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__50990){
var map__50991 = p__50990;
var map__50991__$1 = (((((!((map__50991 == null))))?(((((map__50991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50991):map__50991);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50991__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50991__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__51001,done){
var map__51002 = p__51001;
var map__51002__$1 = (((((!((map__51002 == null))))?(((((map__51002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51002):map__51002);
var msg = map__51002__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51002__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__51004_51227 = type;
var G__51004_51228__$1 = (((G__51004_51227 instanceof cljs.core.Keyword))?G__51004_51227.fqn:null);
switch (G__51004_51228__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__51005 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__51006 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__51007 = "POST";
var G__51008 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__51009 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__51005,G__51006,G__51007,G__51008,G__51009);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__51013 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__51012 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__51012.cljs$core$IFn$_invoke$arity$1 ? fexpr__51012.cljs$core$IFn$_invoke$arity$1(G__51013) : fexpr__51012.call(null,G__51013));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e51018){var e = e51018;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___51255 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___51255)){
var s_51256 = temp__5735__auto___51255;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_51256.onclose = (function (e){
return null;
}));

s_51256.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
