goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__40785 = e.target.readyState;
var fexpr__40784 = new cljs.core.PersistentArrayMap(null, 6, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276),new cljs.core.Keyword("cljs.analyzer","analyzed","cljs.analyzer/analyzed",-735094162),true], null);
return (fexpr__40784.cljs$core$IFn$_invoke$arity$1 ? fexpr__40784.cljs$core$IFn$_invoke$arity$1(G__40785) : fexpr__40784.call(null,G__40785));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():XMLHttpRequest);
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__40792,handler){
var map__40794 = p__40792;
var map__40794__$1 = (((((!((map__40794 == null))))?(((((map__40794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40794):map__40794);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40794__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40794__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40794__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40794__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40794__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40794__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40794__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__40791_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__40791_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5735__auto___40831 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___40831)){
var response_type_40832 = temp__5735__auto___40831;
(this$__$1.responseType = cljs.core.name(response_type_40832));
} else {
}

var seq__40805_40833 = cljs.core.seq(headers);
var chunk__40806_40834 = null;
var count__40807_40835 = (0);
var i__40808_40836 = (0);
while(true){
if((i__40808_40836 < count__40807_40835)){
var vec__40815_40837 = chunk__40806_40834.cljs$core$IIndexed$_nth$arity$2(null,i__40808_40836);
var k_40838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40815_40837,(0),null);
var v_40839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40815_40837,(1),null);
this$__$1.setRequestHeader(k_40838,v_40839);


var G__40840 = seq__40805_40833;
var G__40841 = chunk__40806_40834;
var G__40842 = count__40807_40835;
var G__40843 = (i__40808_40836 + (1));
seq__40805_40833 = G__40840;
chunk__40806_40834 = G__40841;
count__40807_40835 = G__40842;
i__40808_40836 = G__40843;
continue;
} else {
var temp__5735__auto___40844 = cljs.core.seq(seq__40805_40833);
if(temp__5735__auto___40844){
var seq__40805_40846__$1 = temp__5735__auto___40844;
if(cljs.core.chunked_seq_QMARK_(seq__40805_40846__$1)){
var c__4609__auto___40848 = cljs.core.chunk_first(seq__40805_40846__$1);
var G__40850 = cljs.core.chunk_rest(seq__40805_40846__$1);
var G__40851 = c__4609__auto___40848;
var G__40852 = cljs.core.count(c__4609__auto___40848);
var G__40853 = (0);
seq__40805_40833 = G__40850;
chunk__40806_40834 = G__40851;
count__40807_40835 = G__40852;
i__40808_40836 = G__40853;
continue;
} else {
var vec__40819_40854 = cljs.core.first(seq__40805_40846__$1);
var k_40855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40819_40854,(0),null);
var v_40856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40819_40854,(1),null);
this$__$1.setRequestHeader(k_40855,v_40856);


var G__40857 = cljs.core.next(seq__40805_40846__$1);
var G__40858 = null;
var G__40859 = (0);
var G__40860 = (0);
seq__40805_40833 = G__40857;
chunk__40806_40834 = G__40858;
count__40807_40835 = G__40859;
i__40808_40836 = G__40860;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4185__auto__ = body;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
