goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__52754 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__52755 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__52755);

try{try{var seq__52756 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52757 = null;
var count__52758 = (0);
var i__52759 = (0);
while(true){
if((i__52759 < count__52758)){
var vec__52766 = chunk__52757.cljs$core$IIndexed$_nth$arity$2(null,i__52759);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52766,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52766,(1),null);
var temp__5733__auto___52863 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52863)){
var effect_fn_52864 = temp__5733__auto___52863;
(effect_fn_52864.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52864.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52864.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52865 = seq__52756;
var G__52866 = chunk__52757;
var G__52867 = count__52758;
var G__52868 = (i__52759 + (1));
seq__52756 = G__52865;
chunk__52757 = G__52866;
count__52758 = G__52867;
i__52759 = G__52868;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52756);
if(temp__5735__auto__){
var seq__52756__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52756__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52756__$1);
var G__52869 = cljs.core.chunk_rest(seq__52756__$1);
var G__52870 = c__4609__auto__;
var G__52871 = cljs.core.count(c__4609__auto__);
var G__52872 = (0);
seq__52756 = G__52869;
chunk__52757 = G__52870;
count__52758 = G__52871;
i__52759 = G__52872;
continue;
} else {
var vec__52769 = cljs.core.first(seq__52756__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52769,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52769,(1),null);
var temp__5733__auto___52873 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52873)){
var effect_fn_52874 = temp__5733__auto___52873;
(effect_fn_52874.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52874.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52874.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52875 = cljs.core.next(seq__52756__$1);
var G__52876 = null;
var G__52877 = (0);
var G__52878 = (0);
seq__52756 = G__52875;
chunk__52757 = G__52876;
count__52758 = G__52877;
i__52759 = G__52878;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__52422__auto___52879 = re_frame.interop.now();
var duration__52423__auto___52880 = (end__52422__auto___52879 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__52423__auto___52880,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__52422__auto___52879);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__52754);
}} else {
var seq__52772 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52773 = null;
var count__52774 = (0);
var i__52775 = (0);
while(true){
if((i__52775 < count__52774)){
var vec__52790 = chunk__52773.cljs$core$IIndexed$_nth$arity$2(null,i__52775);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52790,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52790,(1),null);
var temp__5733__auto___52885 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52885)){
var effect_fn_52887 = temp__5733__auto___52885;
(effect_fn_52887.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52887.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52887.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52892 = seq__52772;
var G__52893 = chunk__52773;
var G__52894 = count__52774;
var G__52895 = (i__52775 + (1));
seq__52772 = G__52892;
chunk__52773 = G__52893;
count__52774 = G__52894;
i__52775 = G__52895;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52772);
if(temp__5735__auto__){
var seq__52772__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52772__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52772__$1);
var G__52896 = cljs.core.chunk_rest(seq__52772__$1);
var G__52897 = c__4609__auto__;
var G__52898 = cljs.core.count(c__4609__auto__);
var G__52899 = (0);
seq__52772 = G__52896;
chunk__52773 = G__52897;
count__52774 = G__52898;
i__52775 = G__52899;
continue;
} else {
var vec__52795 = cljs.core.first(seq__52772__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52795,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52795,(1),null);
var temp__5733__auto___52900 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52900)){
var effect_fn_52901 = temp__5733__auto___52900;
(effect_fn_52901.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52901.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52901.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52908 = cljs.core.next(seq__52772__$1);
var G__52909 = null;
var G__52910 = (0);
var G__52911 = (0);
seq__52772 = G__52908;
chunk__52773 = G__52909;
count__52774 = G__52910;
i__52775 = G__52911;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__52798 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52799 = null;
var count__52800 = (0);
var i__52801 = (0);
while(true){
if((i__52801 < count__52800)){
var map__52820 = chunk__52799.cljs$core$IIndexed$_nth$arity$2(null,i__52801);
var map__52820__$1 = (((((!((map__52820 == null))))?(((((map__52820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52820):map__52820);
var effect = map__52820__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52820__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52820__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__52798,chunk__52799,count__52800,i__52801,map__52820,map__52820__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__52798,chunk__52799,count__52800,i__52801,map__52820,map__52820__$1,effect,ms,dispatch))
,ms);
}


var G__52920 = seq__52798;
var G__52921 = chunk__52799;
var G__52922 = count__52800;
var G__52923 = (i__52801 + (1));
seq__52798 = G__52920;
chunk__52799 = G__52921;
count__52800 = G__52922;
i__52801 = G__52923;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52798);
if(temp__5735__auto__){
var seq__52798__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52798__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52798__$1);
var G__52924 = cljs.core.chunk_rest(seq__52798__$1);
var G__52925 = c__4609__auto__;
var G__52926 = cljs.core.count(c__4609__auto__);
var G__52927 = (0);
seq__52798 = G__52924;
chunk__52799 = G__52925;
count__52800 = G__52926;
i__52801 = G__52927;
continue;
} else {
var map__52830 = cljs.core.first(seq__52798__$1);
var map__52830__$1 = (((((!((map__52830 == null))))?(((((map__52830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52830):map__52830);
var effect = map__52830__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52830__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52830__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__52798,chunk__52799,count__52800,i__52801,map__52830,map__52830__$1,effect,ms,dispatch,seq__52798__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__52798,chunk__52799,count__52800,i__52801,map__52830,map__52830__$1,effect,ms,dispatch,seq__52798__$1,temp__5735__auto__))
,ms);
}


var G__52936 = cljs.core.next(seq__52798__$1);
var G__52937 = null;
var G__52938 = (0);
var G__52939 = (0);
seq__52798 = G__52936;
chunk__52799 = G__52937;
count__52800 = G__52938;
i__52801 = G__52939;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__52832 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52833 = null;
var count__52834 = (0);
var i__52835 = (0);
while(true){
if((i__52835 < count__52834)){
var event = chunk__52833.cljs$core$IIndexed$_nth$arity$2(null,i__52835);
re_frame.router.dispatch(event);


var G__52940 = seq__52832;
var G__52941 = chunk__52833;
var G__52942 = count__52834;
var G__52943 = (i__52835 + (1));
seq__52832 = G__52940;
chunk__52833 = G__52941;
count__52834 = G__52942;
i__52835 = G__52943;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52832);
if(temp__5735__auto__){
var seq__52832__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52832__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52832__$1);
var G__52944 = cljs.core.chunk_rest(seq__52832__$1);
var G__52945 = c__4609__auto__;
var G__52946 = cljs.core.count(c__4609__auto__);
var G__52947 = (0);
seq__52832 = G__52944;
chunk__52833 = G__52945;
count__52834 = G__52946;
i__52835 = G__52947;
continue;
} else {
var event = cljs.core.first(seq__52832__$1);
re_frame.router.dispatch(event);


var G__52948 = cljs.core.next(seq__52832__$1);
var G__52949 = null;
var G__52950 = (0);
var G__52951 = (0);
seq__52832 = G__52948;
chunk__52833 = G__52949;
count__52834 = G__52950;
i__52835 = G__52951;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__52844 = cljs.core.seq(value);
var chunk__52845 = null;
var count__52846 = (0);
var i__52847 = (0);
while(true){
if((i__52847 < count__52846)){
var event = chunk__52845.cljs$core$IIndexed$_nth$arity$2(null,i__52847);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__52955 = seq__52844;
var G__52956 = chunk__52845;
var G__52957 = count__52846;
var G__52958 = (i__52847 + (1));
seq__52844 = G__52955;
chunk__52845 = G__52956;
count__52846 = G__52957;
i__52847 = G__52958;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52844);
if(temp__5735__auto__){
var seq__52844__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52844__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52844__$1);
var G__52963 = cljs.core.chunk_rest(seq__52844__$1);
var G__52964 = c__4609__auto__;
var G__52965 = cljs.core.count(c__4609__auto__);
var G__52966 = (0);
seq__52844 = G__52963;
chunk__52845 = G__52964;
count__52846 = G__52965;
i__52847 = G__52966;
continue;
} else {
var event = cljs.core.first(seq__52844__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__52967 = cljs.core.next(seq__52844__$1);
var G__52968 = null;
var G__52969 = (0);
var G__52970 = (0);
seq__52844 = G__52967;
chunk__52845 = G__52968;
count__52846 = G__52969;
i__52847 = G__52970;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
