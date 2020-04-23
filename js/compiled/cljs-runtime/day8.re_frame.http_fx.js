goog.provide('day8.re_frame.http_fx');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('goog.net.XhrIo');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__41485){
var vec__41486 = p__41485;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41486,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41486,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),(function (){var G__41489 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__41489);
})()], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__41492){
var map__41493 = p__41492;
var map__41493__$1 = (((((!((map__41493 == null))))?(((((map__41493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41493):map__41493);
var request = map__41493__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41493__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41493__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,new cljs.core.Keyword(null,"api","api",-899839580),api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,(function (p1__41490_SHARP_){
var G__41495 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__41490_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41495) : re_frame.core.dispatch.call(null,G__41495));
}),(function (p1__41491_SHARP_){
var G__41496 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__41491_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41496) : re_frame.core.dispatch.call(null,G__41496));
}),api)], 0)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-failure","on-failure",842888245)], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__41497 = cljs.core.seq(seq_request_maps);
var chunk__41498 = null;
var count__41499 = (0);
var i__41500 = (0);
while(true){
if((i__41500 < count__41499)){
var request__$1 = chunk__41498.cljs$core$IIndexed$_nth$arity$2(null,i__41500);
var G__41503_41507 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__41503_41507) : ajax.core.ajax_request.call(null,G__41503_41507));


var G__41509 = seq__41497;
var G__41510 = chunk__41498;
var G__41511 = count__41499;
var G__41512 = (i__41500 + (1));
seq__41497 = G__41509;
chunk__41498 = G__41510;
count__41499 = G__41511;
i__41500 = G__41512;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41497);
if(temp__5735__auto__){
var seq__41497__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41497__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41497__$1);
var G__41513 = cljs.core.chunk_rest(seq__41497__$1);
var G__41514 = c__4609__auto__;
var G__41515 = cljs.core.count(c__4609__auto__);
var G__41516 = (0);
seq__41497 = G__41513;
chunk__41498 = G__41514;
count__41499 = G__41515;
i__41500 = G__41516;
continue;
} else {
var request__$1 = cljs.core.first(seq__41497__$1);
var G__41504_41517 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__41504_41517) : ajax.core.ajax_request.call(null,G__41504_41517));


var G__41518 = cljs.core.next(seq__41497__$1);
var G__41519 = null;
var G__41520 = (0);
var G__41521 = (0);
seq__41497 = G__41518;
chunk__41498 = G__41519;
count__41499 = G__41520;
i__41500 = G__41521;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__41505_41522 = new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714);
var G__41506_41523 = day8.re_frame.http_fx.http_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__41505_41522,G__41506_41523) : re_frame.core.reg_fx.call(null,G__41505_41522,G__41506_41523));

//# sourceMappingURL=day8.re_frame.http_fx.js.map
