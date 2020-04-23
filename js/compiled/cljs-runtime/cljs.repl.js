goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__51219){
var map__51220 = p__51219;
var map__51220__$1 = (((((!((map__51220 == null))))?(((((map__51220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51220):map__51220);
var m = map__51220__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51220__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51220__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__51222_51467 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51223_51468 = null;
var count__51224_51469 = (0);
var i__51225_51470 = (0);
while(true){
if((i__51225_51470 < count__51224_51469)){
var f_51471 = chunk__51223_51468.cljs$core$IIndexed$_nth$arity$2(null,i__51225_51470);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_51471], 0));


var G__51472 = seq__51222_51467;
var G__51473 = chunk__51223_51468;
var G__51474 = count__51224_51469;
var G__51475 = (i__51225_51470 + (1));
seq__51222_51467 = G__51472;
chunk__51223_51468 = G__51473;
count__51224_51469 = G__51474;
i__51225_51470 = G__51475;
continue;
} else {
var temp__5735__auto___51476 = cljs.core.seq(seq__51222_51467);
if(temp__5735__auto___51476){
var seq__51222_51477__$1 = temp__5735__auto___51476;
if(cljs.core.chunked_seq_QMARK_(seq__51222_51477__$1)){
var c__4609__auto___51478 = cljs.core.chunk_first(seq__51222_51477__$1);
var G__51479 = cljs.core.chunk_rest(seq__51222_51477__$1);
var G__51480 = c__4609__auto___51478;
var G__51481 = cljs.core.count(c__4609__auto___51478);
var G__51482 = (0);
seq__51222_51467 = G__51479;
chunk__51223_51468 = G__51480;
count__51224_51469 = G__51481;
i__51225_51470 = G__51482;
continue;
} else {
var f_51483 = cljs.core.first(seq__51222_51477__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_51483], 0));


var G__51484 = cljs.core.next(seq__51222_51477__$1);
var G__51485 = null;
var G__51486 = (0);
var G__51487 = (0);
seq__51222_51467 = G__51484;
chunk__51223_51468 = G__51485;
count__51224_51469 = G__51486;
i__51225_51470 = G__51487;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_51488 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_51488], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_51488)))?cljs.core.second(arglists_51488):arglists_51488)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__51232_51490 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51233_51491 = null;
var count__51234_51492 = (0);
var i__51235_51493 = (0);
while(true){
if((i__51235_51493 < count__51234_51492)){
var vec__51251_51494 = chunk__51233_51491.cljs$core$IIndexed$_nth$arity$2(null,i__51235_51493);
var name_51495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51251_51494,(0),null);
var map__51254_51496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51251_51494,(1),null);
var map__51254_51497__$1 = (((((!((map__51254_51496 == null))))?(((((map__51254_51496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51254_51496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51254_51496):map__51254_51496);
var doc_51498 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51254_51497__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51499 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51254_51497__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_51495], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_51499], 0));

if(cljs.core.truth_(doc_51498)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_51498], 0));
} else {
}


var G__51500 = seq__51232_51490;
var G__51501 = chunk__51233_51491;
var G__51502 = count__51234_51492;
var G__51503 = (i__51235_51493 + (1));
seq__51232_51490 = G__51500;
chunk__51233_51491 = G__51501;
count__51234_51492 = G__51502;
i__51235_51493 = G__51503;
continue;
} else {
var temp__5735__auto___51504 = cljs.core.seq(seq__51232_51490);
if(temp__5735__auto___51504){
var seq__51232_51505__$1 = temp__5735__auto___51504;
if(cljs.core.chunked_seq_QMARK_(seq__51232_51505__$1)){
var c__4609__auto___51506 = cljs.core.chunk_first(seq__51232_51505__$1);
var G__51507 = cljs.core.chunk_rest(seq__51232_51505__$1);
var G__51508 = c__4609__auto___51506;
var G__51509 = cljs.core.count(c__4609__auto___51506);
var G__51510 = (0);
seq__51232_51490 = G__51507;
chunk__51233_51491 = G__51508;
count__51234_51492 = G__51509;
i__51235_51493 = G__51510;
continue;
} else {
var vec__51262_51511 = cljs.core.first(seq__51232_51505__$1);
var name_51512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51262_51511,(0),null);
var map__51265_51513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51262_51511,(1),null);
var map__51265_51514__$1 = (((((!((map__51265_51513 == null))))?(((((map__51265_51513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51265_51513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51265_51513):map__51265_51513);
var doc_51515 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51265_51514__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51516 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51265_51514__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_51512], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_51516], 0));

if(cljs.core.truth_(doc_51515)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_51515], 0));
} else {
}


var G__51518 = cljs.core.next(seq__51232_51505__$1);
var G__51519 = null;
var G__51520 = (0);
var G__51521 = (0);
seq__51232_51490 = G__51518;
chunk__51233_51491 = G__51519;
count__51234_51492 = G__51520;
i__51235_51493 = G__51521;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__51267 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__51268 = null;
var count__51269 = (0);
var i__51270 = (0);
while(true){
if((i__51270 < count__51269)){
var role = chunk__51268.cljs$core$IIndexed$_nth$arity$2(null,i__51270);
var temp__5735__auto___51522__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___51522__$1)){
var spec_51523 = temp__5735__auto___51522__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_51523)], 0));
} else {
}


var G__51524 = seq__51267;
var G__51525 = chunk__51268;
var G__51526 = count__51269;
var G__51527 = (i__51270 + (1));
seq__51267 = G__51524;
chunk__51268 = G__51525;
count__51269 = G__51526;
i__51270 = G__51527;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__51267);
if(temp__5735__auto____$1){
var seq__51267__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__51267__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__51267__$1);
var G__51528 = cljs.core.chunk_rest(seq__51267__$1);
var G__51529 = c__4609__auto__;
var G__51530 = cljs.core.count(c__4609__auto__);
var G__51531 = (0);
seq__51267 = G__51528;
chunk__51268 = G__51529;
count__51269 = G__51530;
i__51270 = G__51531;
continue;
} else {
var role = cljs.core.first(seq__51267__$1);
var temp__5735__auto___51532__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___51532__$2)){
var spec_51533 = temp__5735__auto___51532__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_51533)], 0));
} else {
}


var G__51534 = cljs.core.next(seq__51267__$1);
var G__51535 = null;
var G__51536 = (0);
var G__51537 = (0);
seq__51267 = G__51534;
chunk__51268 = G__51535;
count__51269 = G__51536;
i__51270 = G__51537;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__51540 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__51541 = cljs.core.ex_cause(t);
via = G__51540;
t = G__51541;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__51304 = datafied_throwable;
var map__51304__$1 = (((((!((map__51304 == null))))?(((((map__51304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51304):map__51304);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51304__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51304__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51304__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__51305 = cljs.core.last(via);
var map__51305__$1 = (((((!((map__51305 == null))))?(((((map__51305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51305):map__51305);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51305__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51305__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51305__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__51306 = data;
var map__51306__$1 = (((((!((map__51306 == null))))?(((((map__51306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51306):map__51306);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51306__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51306__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51306__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__51307 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__51307__$1 = (((((!((map__51307 == null))))?(((((map__51307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51307):map__51307);
var top_data = map__51307__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51307__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__51325 = phase;
var G__51325__$1 = (((G__51325 instanceof cljs.core.Keyword))?G__51325.fqn:null);
switch (G__51325__$1) {
case "read-source":
var map__51330 = data;
var map__51330__$1 = (((((!((map__51330 == null))))?(((((map__51330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51330):map__51330);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51330__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51330__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__51342 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__51342__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51342,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__51342);
var G__51342__$2 = (cljs.core.truth_((function (){var fexpr__51343 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__51343.cljs$core$IFn$_invoke$arity$1 ? fexpr__51343.cljs$core$IFn$_invoke$arity$1(source) : fexpr__51343.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__51342__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__51342__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51342__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__51342__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__51344 = top_data;
var G__51344__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51344,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__51344);
var G__51344__$2 = (cljs.core.truth_((function (){var fexpr__51349 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__51349.cljs$core$IFn$_invoke$arity$1 ? fexpr__51349.cljs$core$IFn$_invoke$arity$1(source) : fexpr__51349.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__51344__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__51344__$1);
var G__51344__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51344__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__51344__$2);
var G__51344__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51344__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__51344__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51344__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__51344__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__51356 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51356,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51356,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51356,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51356,(3),null);
var G__51364 = top_data;
var G__51364__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51364,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__51364);
var G__51364__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51364__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__51364__$1);
var G__51364__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51364__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__51364__$2);
var G__51364__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51364__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__51364__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51364__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__51364__$4;
}

break;
case "execution":
var vec__51374 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51374,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51374,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51374,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51374,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__51303_SHARP_){
var or__4185__auto__ = (p1__51303_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__51378 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__51378.cljs$core$IFn$_invoke$arity$1 ? fexpr__51378.cljs$core$IFn$_invoke$arity$1(p1__51303_SHARP_) : fexpr__51378.call(null,p1__51303_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__51379 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__51379__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51379,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__51379);
var G__51379__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51379__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__51379__$1);
var G__51379__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51379__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__51379__$2);
var G__51379__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51379__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__51379__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51379__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__51379__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51325__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__51396){
var map__51398 = p__51396;
var map__51398__$1 = (((((!((map__51398 == null))))?(((((map__51398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51398):map__51398);
var triage_data = map__51398__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51398__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51398__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51398__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51398__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51398__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51398__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51398__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51398__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__51423 = phase;
var G__51423__$1 = (((G__51423 instanceof cljs.core.Keyword))?G__51423.fqn:null);
switch (G__51423__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__51424 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__51425 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51426 = loc;
var G__51427 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__51428_51568 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__51429_51569 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__51430_51570 = true;
var _STAR_print_fn_STAR__temp_val__51431_51571 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__51430_51570);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__51431_51571);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51387_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__51387_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__51429_51569);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__51428_51568);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__51424,G__51425,G__51426,G__51427) : format.call(null,G__51424,G__51425,G__51426,G__51427));

break;
case "macroexpansion":
var G__51433 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__51434 = cause_type;
var G__51435 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51436 = loc;
var G__51437 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51433,G__51434,G__51435,G__51436,G__51437) : format.call(null,G__51433,G__51434,G__51435,G__51436,G__51437));

break;
case "compile-syntax-check":
var G__51440 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__51441 = cause_type;
var G__51442 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51443 = loc;
var G__51444 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51440,G__51441,G__51442,G__51443,G__51444) : format.call(null,G__51440,G__51441,G__51442,G__51443,G__51444));

break;
case "compilation":
var G__51445 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__51446 = cause_type;
var G__51447 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51448 = loc;
var G__51449 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51445,G__51446,G__51447,G__51448,G__51449) : format.call(null,G__51445,G__51446,G__51447,G__51448,G__51449));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__51450 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__51451 = symbol;
var G__51452 = loc;
var G__51453 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__51455_51581 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__51456_51582 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__51457_51583 = true;
var _STAR_print_fn_STAR__temp_val__51458_51584 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__51457_51583);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__51458_51584);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51390_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__51390_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__51456_51582);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__51455_51581);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__51450,G__51451,G__51452,G__51453) : format.call(null,G__51450,G__51451,G__51452,G__51453));
} else {
var G__51459 = "Execution error%s at %s(%s).\n%s\n";
var G__51460 = cause_type;
var G__51461 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51462 = loc;
var G__51463 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51459,G__51460,G__51461,G__51462,G__51463) : format.call(null,G__51459,G__51460,G__51461,G__51462,G__51463));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51423__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
