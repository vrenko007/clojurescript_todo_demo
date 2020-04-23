goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__47983 = coll;
var G__47984 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__47983,G__47984) : shadow.dom.lazy_native_coll_seq.call(null,G__47983,G__47984));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__48015 = arguments.length;
switch (G__48015) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__48018 = arguments.length;
switch (G__48018) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__48022 = arguments.length;
switch (G__48022) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__48031 = arguments.length;
switch (G__48031) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__48039 = arguments.length;
switch (G__48039) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__48041 = document;
var G__48042 = shadow.dom.dom_node(el);
return goog.dom.contains(G__48041,G__48042);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__48044 = shadow.dom.dom_node(parent);
var G__48045 = shadow.dom.dom_node(el);
return goog.dom.contains(G__48044,G__48045);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__48046 = shadow.dom.dom_node(el);
var G__48047 = cls;
return goog.dom.classlist.add(G__48046,G__48047);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__48049 = shadow.dom.dom_node(el);
var G__48050 = cls;
return goog.dom.classlist.remove(G__48049,G__48050);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__48054 = arguments.length;
switch (G__48054) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__48058 = shadow.dom.dom_node(el);
var G__48059 = cls;
return goog.dom.classlist.toggle(G__48058,G__48059);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e48064){if((e48064 instanceof Object)){
var e = e48064;
return console.log("didnt support attachEvent",el,e);
} else {
throw e48064;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__48065 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__48066 = null;
var count__48067 = (0);
var i__48068 = (0);
while(true){
if((i__48068 < count__48067)){
var el = chunk__48066.cljs$core$IIndexed$_nth$arity$2(null,i__48068);
var handler_48831__$1 = ((function (seq__48065,chunk__48066,count__48067,i__48068,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__48065,chunk__48066,count__48067,i__48068,el))
;
var G__48077_48834 = el;
var G__48078_48835 = cljs.core.name(ev);
var G__48079_48836 = handler_48831__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__48077_48834,G__48078_48835,G__48079_48836) : shadow.dom.dom_listen.call(null,G__48077_48834,G__48078_48835,G__48079_48836));


var G__48839 = seq__48065;
var G__48840 = chunk__48066;
var G__48841 = count__48067;
var G__48842 = (i__48068 + (1));
seq__48065 = G__48839;
chunk__48066 = G__48840;
count__48067 = G__48841;
i__48068 = G__48842;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48065);
if(temp__5735__auto__){
var seq__48065__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48065__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48065__$1);
var G__48844 = cljs.core.chunk_rest(seq__48065__$1);
var G__48845 = c__4609__auto__;
var G__48846 = cljs.core.count(c__4609__auto__);
var G__48847 = (0);
seq__48065 = G__48844;
chunk__48066 = G__48845;
count__48067 = G__48846;
i__48068 = G__48847;
continue;
} else {
var el = cljs.core.first(seq__48065__$1);
var handler_48849__$1 = ((function (seq__48065,chunk__48066,count__48067,i__48068,el,seq__48065__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__48065,chunk__48066,count__48067,i__48068,el,seq__48065__$1,temp__5735__auto__))
;
var G__48080_48852 = el;
var G__48081_48853 = cljs.core.name(ev);
var G__48082_48854 = handler_48849__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__48080_48852,G__48081_48853,G__48082_48854) : shadow.dom.dom_listen.call(null,G__48080_48852,G__48081_48853,G__48082_48854));


var G__48860 = cljs.core.next(seq__48065__$1);
var G__48861 = null;
var G__48862 = (0);
var G__48863 = (0);
seq__48065 = G__48860;
chunk__48066 = G__48861;
count__48067 = G__48862;
i__48068 = G__48863;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__48086 = arguments.length;
switch (G__48086) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__48090 = shadow.dom.dom_node(el);
var G__48091 = cljs.core.name(ev);
var G__48092 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__48090,G__48091,G__48092) : shadow.dom.dom_listen.call(null,G__48090,G__48091,G__48092));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__48096 = shadow.dom.dom_node(el);
var G__48097 = cljs.core.name(ev);
var G__48098 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__48096,G__48097,G__48098) : shadow.dom.dom_listen_remove.call(null,G__48096,G__48097,G__48098));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__48101 = cljs.core.seq(events);
var chunk__48102 = null;
var count__48103 = (0);
var i__48104 = (0);
while(true){
if((i__48104 < count__48103)){
var vec__48117 = chunk__48102.cljs$core$IIndexed$_nth$arity$2(null,i__48104);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48117,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48117,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48878 = seq__48101;
var G__48879 = chunk__48102;
var G__48880 = count__48103;
var G__48881 = (i__48104 + (1));
seq__48101 = G__48878;
chunk__48102 = G__48879;
count__48103 = G__48880;
i__48104 = G__48881;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48101);
if(temp__5735__auto__){
var seq__48101__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48101__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48101__$1);
var G__48884 = cljs.core.chunk_rest(seq__48101__$1);
var G__48885 = c__4609__auto__;
var G__48886 = cljs.core.count(c__4609__auto__);
var G__48887 = (0);
seq__48101 = G__48884;
chunk__48102 = G__48885;
count__48103 = G__48886;
i__48104 = G__48887;
continue;
} else {
var vec__48123 = cljs.core.first(seq__48101__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48123,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48123,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48889 = cljs.core.next(seq__48101__$1);
var G__48890 = null;
var G__48891 = (0);
var G__48892 = (0);
seq__48101 = G__48889;
chunk__48102 = G__48890;
count__48103 = G__48891;
i__48104 = G__48892;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__48126 = cljs.core.seq(styles);
var chunk__48127 = null;
var count__48128 = (0);
var i__48129 = (0);
while(true){
if((i__48129 < count__48128)){
var vec__48143 = chunk__48127.cljs$core$IIndexed$_nth$arity$2(null,i__48129);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48143,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48143,(1),null);
var G__48146_48897 = dom;
var G__48147_48898 = cljs.core.name(k);
var G__48148_48899 = (((v == null))?"":v);
goog.style.setStyle(G__48146_48897,G__48147_48898,G__48148_48899);


var G__48903 = seq__48126;
var G__48904 = chunk__48127;
var G__48905 = count__48128;
var G__48906 = (i__48129 + (1));
seq__48126 = G__48903;
chunk__48127 = G__48904;
count__48128 = G__48905;
i__48129 = G__48906;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48126);
if(temp__5735__auto__){
var seq__48126__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48126__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48126__$1);
var G__48909 = cljs.core.chunk_rest(seq__48126__$1);
var G__48910 = c__4609__auto__;
var G__48911 = cljs.core.count(c__4609__auto__);
var G__48912 = (0);
seq__48126 = G__48909;
chunk__48127 = G__48910;
count__48128 = G__48911;
i__48129 = G__48912;
continue;
} else {
var vec__48149 = cljs.core.first(seq__48126__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48149,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48149,(1),null);
var G__48152_48915 = dom;
var G__48153_48916 = cljs.core.name(k);
var G__48154_48917 = (((v == null))?"":v);
goog.style.setStyle(G__48152_48915,G__48153_48916,G__48154_48917);


var G__48918 = cljs.core.next(seq__48126__$1);
var G__48919 = null;
var G__48920 = (0);
var G__48921 = (0);
seq__48126 = G__48918;
chunk__48127 = G__48919;
count__48128 = G__48920;
i__48129 = G__48921;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__48156_48924 = key;
var G__48156_48925__$1 = (((G__48156_48924 instanceof cljs.core.Keyword))?G__48156_48924.fqn:null);
switch (G__48156_48925__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_48935 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_48935,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_48935,"aria-");
}
})())){
el.setAttribute(ks_48935,value);
} else {
(el[ks_48935] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__48168 = shadow.dom.dom_node(el);
var G__48169 = cls;
return goog.dom.classlist.contains(G__48168,G__48169);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__48180){
var map__48181 = p__48180;
var map__48181__$1 = (((((!((map__48181 == null))))?(((((map__48181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48181):map__48181);
var props = map__48181__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48181__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__48184 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48184,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48184,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48184,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__48189 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__48189,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__48189;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__48193 = arguments.length;
switch (G__48193) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__48198){
var vec__48200 = p__48198;
var seq__48201 = cljs.core.seq(vec__48200);
var first__48202 = cljs.core.first(seq__48201);
var seq__48201__$1 = cljs.core.next(seq__48201);
var nn = first__48202;
var first__48202__$1 = cljs.core.first(seq__48201__$1);
var seq__48201__$2 = cljs.core.next(seq__48201__$1);
var np = first__48202__$1;
var nc = seq__48201__$2;
var node = vec__48200;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48204 = nn;
var G__48205 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48204,G__48205) : create_fn.call(null,G__48204,G__48205));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48206 = nn;
var G__48207 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48206,G__48207) : create_fn.call(null,G__48206,G__48207));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__48210 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48210,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48210,(1),null);
var seq__48213_48980 = cljs.core.seq(node_children);
var chunk__48214_48981 = null;
var count__48215_48982 = (0);
var i__48216_48983 = (0);
while(true){
if((i__48216_48983 < count__48215_48982)){
var child_struct_48985 = chunk__48214_48981.cljs$core$IIndexed$_nth$arity$2(null,i__48216_48983);
var children_48986 = shadow.dom.dom_node(child_struct_48985);
if(cljs.core.seq_QMARK_(children_48986)){
var seq__48254_48987 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48986));
var chunk__48256_48988 = null;
var count__48257_48989 = (0);
var i__48258_48990 = (0);
while(true){
if((i__48258_48990 < count__48257_48989)){
var child_48992 = chunk__48256_48988.cljs$core$IIndexed$_nth$arity$2(null,i__48258_48990);
if(cljs.core.truth_(child_48992)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48992);


var G__48993 = seq__48254_48987;
var G__48994 = chunk__48256_48988;
var G__48995 = count__48257_48989;
var G__48996 = (i__48258_48990 + (1));
seq__48254_48987 = G__48993;
chunk__48256_48988 = G__48994;
count__48257_48989 = G__48995;
i__48258_48990 = G__48996;
continue;
} else {
var G__48999 = seq__48254_48987;
var G__49000 = chunk__48256_48988;
var G__49001 = count__48257_48989;
var G__49002 = (i__48258_48990 + (1));
seq__48254_48987 = G__48999;
chunk__48256_48988 = G__49000;
count__48257_48989 = G__49001;
i__48258_48990 = G__49002;
continue;
}
} else {
var temp__5735__auto___49005 = cljs.core.seq(seq__48254_48987);
if(temp__5735__auto___49005){
var seq__48254_49006__$1 = temp__5735__auto___49005;
if(cljs.core.chunked_seq_QMARK_(seq__48254_49006__$1)){
var c__4609__auto___49007 = cljs.core.chunk_first(seq__48254_49006__$1);
var G__49011 = cljs.core.chunk_rest(seq__48254_49006__$1);
var G__49012 = c__4609__auto___49007;
var G__49013 = cljs.core.count(c__4609__auto___49007);
var G__49014 = (0);
seq__48254_48987 = G__49011;
chunk__48256_48988 = G__49012;
count__48257_48989 = G__49013;
i__48258_48990 = G__49014;
continue;
} else {
var child_49015 = cljs.core.first(seq__48254_49006__$1);
if(cljs.core.truth_(child_49015)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49015);


var G__49018 = cljs.core.next(seq__48254_49006__$1);
var G__49019 = null;
var G__49020 = (0);
var G__49021 = (0);
seq__48254_48987 = G__49018;
chunk__48256_48988 = G__49019;
count__48257_48989 = G__49020;
i__48258_48990 = G__49021;
continue;
} else {
var G__49024 = cljs.core.next(seq__48254_49006__$1);
var G__49025 = null;
var G__49026 = (0);
var G__49027 = (0);
seq__48254_48987 = G__49024;
chunk__48256_48988 = G__49025;
count__48257_48989 = G__49026;
i__48258_48990 = G__49027;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48986);
}


var G__49029 = seq__48213_48980;
var G__49030 = chunk__48214_48981;
var G__49031 = count__48215_48982;
var G__49032 = (i__48216_48983 + (1));
seq__48213_48980 = G__49029;
chunk__48214_48981 = G__49030;
count__48215_48982 = G__49031;
i__48216_48983 = G__49032;
continue;
} else {
var temp__5735__auto___49033 = cljs.core.seq(seq__48213_48980);
if(temp__5735__auto___49033){
var seq__48213_49034__$1 = temp__5735__auto___49033;
if(cljs.core.chunked_seq_QMARK_(seq__48213_49034__$1)){
var c__4609__auto___49035 = cljs.core.chunk_first(seq__48213_49034__$1);
var G__49036 = cljs.core.chunk_rest(seq__48213_49034__$1);
var G__49037 = c__4609__auto___49035;
var G__49038 = cljs.core.count(c__4609__auto___49035);
var G__49039 = (0);
seq__48213_48980 = G__49036;
chunk__48214_48981 = G__49037;
count__48215_48982 = G__49038;
i__48216_48983 = G__49039;
continue;
} else {
var child_struct_49040 = cljs.core.first(seq__48213_49034__$1);
var children_49041 = shadow.dom.dom_node(child_struct_49040);
if(cljs.core.seq_QMARK_(children_49041)){
var seq__48268_49042 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_49041));
var chunk__48270_49043 = null;
var count__48271_49044 = (0);
var i__48272_49045 = (0);
while(true){
if((i__48272_49045 < count__48271_49044)){
var child_49050 = chunk__48270_49043.cljs$core$IIndexed$_nth$arity$2(null,i__48272_49045);
if(cljs.core.truth_(child_49050)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49050);


var G__49051 = seq__48268_49042;
var G__49052 = chunk__48270_49043;
var G__49053 = count__48271_49044;
var G__49054 = (i__48272_49045 + (1));
seq__48268_49042 = G__49051;
chunk__48270_49043 = G__49052;
count__48271_49044 = G__49053;
i__48272_49045 = G__49054;
continue;
} else {
var G__49055 = seq__48268_49042;
var G__49056 = chunk__48270_49043;
var G__49057 = count__48271_49044;
var G__49058 = (i__48272_49045 + (1));
seq__48268_49042 = G__49055;
chunk__48270_49043 = G__49056;
count__48271_49044 = G__49057;
i__48272_49045 = G__49058;
continue;
}
} else {
var temp__5735__auto___49059__$1 = cljs.core.seq(seq__48268_49042);
if(temp__5735__auto___49059__$1){
var seq__48268_49060__$1 = temp__5735__auto___49059__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48268_49060__$1)){
var c__4609__auto___49061 = cljs.core.chunk_first(seq__48268_49060__$1);
var G__49062 = cljs.core.chunk_rest(seq__48268_49060__$1);
var G__49063 = c__4609__auto___49061;
var G__49064 = cljs.core.count(c__4609__auto___49061);
var G__49065 = (0);
seq__48268_49042 = G__49062;
chunk__48270_49043 = G__49063;
count__48271_49044 = G__49064;
i__48272_49045 = G__49065;
continue;
} else {
var child_49066 = cljs.core.first(seq__48268_49060__$1);
if(cljs.core.truth_(child_49066)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49066);


var G__49067 = cljs.core.next(seq__48268_49060__$1);
var G__49068 = null;
var G__49069 = (0);
var G__49070 = (0);
seq__48268_49042 = G__49067;
chunk__48270_49043 = G__49068;
count__48271_49044 = G__49069;
i__48272_49045 = G__49070;
continue;
} else {
var G__49071 = cljs.core.next(seq__48268_49060__$1);
var G__49072 = null;
var G__49073 = (0);
var G__49074 = (0);
seq__48268_49042 = G__49071;
chunk__48270_49043 = G__49072;
count__48271_49044 = G__49073;
i__48272_49045 = G__49074;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_49041);
}


var G__49075 = cljs.core.next(seq__48213_49034__$1);
var G__49076 = null;
var G__49077 = (0);
var G__49078 = (0);
seq__48213_48980 = G__49075;
chunk__48214_48981 = G__49076;
count__48215_48982 = G__49077;
i__48216_48983 = G__49078;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__48279 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__48279);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__48281 = cljs.core.seq(node);
var chunk__48282 = null;
var count__48283 = (0);
var i__48284 = (0);
while(true){
if((i__48284 < count__48283)){
var n = chunk__48282.cljs$core$IIndexed$_nth$arity$2(null,i__48284);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__49079 = seq__48281;
var G__49080 = chunk__48282;
var G__49081 = count__48283;
var G__49082 = (i__48284 + (1));
seq__48281 = G__49079;
chunk__48282 = G__49080;
count__48283 = G__49081;
i__48284 = G__49082;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48281);
if(temp__5735__auto__){
var seq__48281__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48281__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48281__$1);
var G__49083 = cljs.core.chunk_rest(seq__48281__$1);
var G__49084 = c__4609__auto__;
var G__49085 = cljs.core.count(c__4609__auto__);
var G__49086 = (0);
seq__48281 = G__49083;
chunk__48282 = G__49084;
count__48283 = G__49085;
i__48284 = G__49086;
continue;
} else {
var n = cljs.core.first(seq__48281__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__49087 = cljs.core.next(seq__48281__$1);
var G__49088 = null;
var G__49089 = (0);
var G__49090 = (0);
seq__48281 = G__49087;
chunk__48282 = G__49088;
count__48283 = G__49089;
i__48284 = G__49090;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__48291 = shadow.dom.dom_node(new$);
var G__48292 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__48291,G__48292);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__48295 = arguments.length;
switch (G__48295) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__48298 = arguments.length;
switch (G__48298) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__48301 = arguments.length;
switch (G__48301) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___49101 = arguments.length;
var i__4790__auto___49102 = (0);
while(true){
if((i__4790__auto___49102 < len__4789__auto___49101)){
args__4795__auto__.push((arguments[i__4790__auto___49102]));

var G__49103 = (i__4790__auto___49102 + (1));
i__4790__auto___49102 = G__49103;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__48317_49104 = cljs.core.seq(nodes);
var chunk__48318_49105 = null;
var count__48319_49106 = (0);
var i__48320_49107 = (0);
while(true){
if((i__48320_49107 < count__48319_49106)){
var node_49111 = chunk__48318_49105.cljs$core$IIndexed$_nth$arity$2(null,i__48320_49107);
fragment.appendChild(shadow.dom._to_dom(node_49111));


var G__49112 = seq__48317_49104;
var G__49113 = chunk__48318_49105;
var G__49114 = count__48319_49106;
var G__49115 = (i__48320_49107 + (1));
seq__48317_49104 = G__49112;
chunk__48318_49105 = G__49113;
count__48319_49106 = G__49114;
i__48320_49107 = G__49115;
continue;
} else {
var temp__5735__auto___49116 = cljs.core.seq(seq__48317_49104);
if(temp__5735__auto___49116){
var seq__48317_49117__$1 = temp__5735__auto___49116;
if(cljs.core.chunked_seq_QMARK_(seq__48317_49117__$1)){
var c__4609__auto___49118 = cljs.core.chunk_first(seq__48317_49117__$1);
var G__49119 = cljs.core.chunk_rest(seq__48317_49117__$1);
var G__49120 = c__4609__auto___49118;
var G__49121 = cljs.core.count(c__4609__auto___49118);
var G__49122 = (0);
seq__48317_49104 = G__49119;
chunk__48318_49105 = G__49120;
count__48319_49106 = G__49121;
i__48320_49107 = G__49122;
continue;
} else {
var node_49123 = cljs.core.first(seq__48317_49117__$1);
fragment.appendChild(shadow.dom._to_dom(node_49123));


var G__49124 = cljs.core.next(seq__48317_49117__$1);
var G__49125 = null;
var G__49126 = (0);
var G__49127 = (0);
seq__48317_49104 = G__49124;
chunk__48318_49105 = G__49125;
count__48319_49106 = G__49126;
i__48320_49107 = G__49127;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq48314){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48314));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__48322_49128 = cljs.core.seq(scripts);
var chunk__48323_49129 = null;
var count__48324_49130 = (0);
var i__48325_49131 = (0);
while(true){
if((i__48325_49131 < count__48324_49130)){
var vec__48333_49132 = chunk__48323_49129.cljs$core$IIndexed$_nth$arity$2(null,i__48325_49131);
var script_tag_49133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48333_49132,(0),null);
var script_body_49134 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48333_49132,(1),null);
eval(script_body_49134);


var G__49135 = seq__48322_49128;
var G__49136 = chunk__48323_49129;
var G__49137 = count__48324_49130;
var G__49138 = (i__48325_49131 + (1));
seq__48322_49128 = G__49135;
chunk__48323_49129 = G__49136;
count__48324_49130 = G__49137;
i__48325_49131 = G__49138;
continue;
} else {
var temp__5735__auto___49139 = cljs.core.seq(seq__48322_49128);
if(temp__5735__auto___49139){
var seq__48322_49140__$1 = temp__5735__auto___49139;
if(cljs.core.chunked_seq_QMARK_(seq__48322_49140__$1)){
var c__4609__auto___49141 = cljs.core.chunk_first(seq__48322_49140__$1);
var G__49142 = cljs.core.chunk_rest(seq__48322_49140__$1);
var G__49143 = c__4609__auto___49141;
var G__49144 = cljs.core.count(c__4609__auto___49141);
var G__49145 = (0);
seq__48322_49128 = G__49142;
chunk__48323_49129 = G__49143;
count__48324_49130 = G__49144;
i__48325_49131 = G__49145;
continue;
} else {
var vec__48339_49146 = cljs.core.first(seq__48322_49140__$1);
var script_tag_49147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48339_49146,(0),null);
var script_body_49148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48339_49146,(1),null);
eval(script_body_49148);


var G__49152 = cljs.core.next(seq__48322_49140__$1);
var G__49153 = null;
var G__49154 = (0);
var G__49155 = (0);
seq__48322_49128 = G__49152;
chunk__48323_49129 = G__49153;
count__48324_49130 = G__49154;
i__48325_49131 = G__49155;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__48342){
var vec__48344 = p__48342;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48344,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48344,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__48356 = shadow.dom.dom_node(el);
var G__48357 = cls;
return goog.dom.getAncestorByClass(G__48356,G__48357);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__48363 = arguments.length;
switch (G__48363) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__48367 = shadow.dom.dom_node(el);
var G__48368 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__48367,G__48368);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__48371 = shadow.dom.dom_node(el);
var G__48372 = cljs.core.name(tag);
var G__48373 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__48371,G__48372,G__48373);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__48377 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__48377);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__48381 = shadow.dom.dom_node(dom);
var G__48382 = value;
return goog.dom.forms.setValue(G__48381,G__48382);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__48392 = cljs.core.seq(style_keys);
var chunk__48393 = null;
var count__48394 = (0);
var i__48395 = (0);
while(true){
if((i__48395 < count__48394)){
var it = chunk__48393.cljs$core$IIndexed$_nth$arity$2(null,i__48395);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__49157 = seq__48392;
var G__49158 = chunk__48393;
var G__49159 = count__48394;
var G__49160 = (i__48395 + (1));
seq__48392 = G__49157;
chunk__48393 = G__49158;
count__48394 = G__49159;
i__48395 = G__49160;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48392);
if(temp__5735__auto__){
var seq__48392__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48392__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48392__$1);
var G__49161 = cljs.core.chunk_rest(seq__48392__$1);
var G__49162 = c__4609__auto__;
var G__49163 = cljs.core.count(c__4609__auto__);
var G__49164 = (0);
seq__48392 = G__49161;
chunk__48393 = G__49162;
count__48394 = G__49163;
i__48395 = G__49164;
continue;
} else {
var it = cljs.core.first(seq__48392__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__49165 = cljs.core.next(seq__48392__$1);
var G__49166 = null;
var G__49167 = (0);
var G__49168 = (0);
seq__48392 = G__49165;
chunk__48393 = G__49166;
count__48394 = G__49167;
i__48395 = G__49168;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k48400,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__48407 = k48400;
var G__48407__$1 = (((G__48407 instanceof cljs.core.Keyword))?G__48407.fqn:null);
switch (G__48407__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48400,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__48408){
var vec__48409 = p__48408;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48409,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48409,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48399){
var self__ = this;
var G__48399__$1 = this;
return (new cljs.core.RecordIter((0),G__48399__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__48415 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__48415(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48401,other48402){
var self__ = this;
var this48401__$1 = this;
return (((!((other48402 == null)))) && ((this48401__$1.constructor === other48402.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48401__$1.x,other48402.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48401__$1.y,other48402.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48401__$1.__extmap,other48402.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__48399){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__48418 = cljs.core.keyword_identical_QMARK_;
var expr__48419 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__48421 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__48422 = expr__48419;
return (pred__48418.cljs$core$IFn$_invoke$arity$2 ? pred__48418.cljs$core$IFn$_invoke$arity$2(G__48421,G__48422) : pred__48418.call(null,G__48421,G__48422));
})())){
return (new shadow.dom.Coordinate(G__48399,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48423 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__48424 = expr__48419;
return (pred__48418.cljs$core$IFn$_invoke$arity$2 ? pred__48418.cljs$core$IFn$_invoke$arity$2(G__48423,G__48424) : pred__48418.call(null,G__48423,G__48424));
})())){
return (new shadow.dom.Coordinate(self__.x,G__48399,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__48399),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__48399){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__48399,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__48404){
var extmap__4478__auto__ = (function (){var G__48431 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48404,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__48404)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48431);
} else {
return G__48431;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__48404),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__48404),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__48435 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__48435);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__48439 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__48439);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__48443 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__48443);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k48446,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__48454 = k48446;
var G__48454__$1 = (((G__48454 instanceof cljs.core.Keyword))?G__48454.fqn:null);
switch (G__48454__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48446,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__48458){
var vec__48459 = p__48458;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48459,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48459,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48445){
var self__ = this;
var G__48445__$1 = this;
return (new cljs.core.RecordIter((0),G__48445__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__48470 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__48470(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48447,other48448){
var self__ = this;
var this48447__$1 = this;
return (((!((other48448 == null)))) && ((this48447__$1.constructor === other48448.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48447__$1.w,other48448.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48447__$1.h,other48448.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48447__$1.__extmap,other48448.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__48445){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__48474 = cljs.core.keyword_identical_QMARK_;
var expr__48475 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__48477 = new cljs.core.Keyword(null,"w","w",354169001);
var G__48478 = expr__48475;
return (pred__48474.cljs$core$IFn$_invoke$arity$2 ? pred__48474.cljs$core$IFn$_invoke$arity$2(G__48477,G__48478) : pred__48474.call(null,G__48477,G__48478));
})())){
return (new shadow.dom.Size(G__48445,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48481 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__48482 = expr__48475;
return (pred__48474.cljs$core$IFn$_invoke$arity$2 ? pred__48474.cljs$core$IFn$_invoke$arity$2(G__48481,G__48482) : pred__48474.call(null,G__48481,G__48482));
})())){
return (new shadow.dom.Size(self__.w,G__48445,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__48445),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__48445){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__48445,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__48450){
var extmap__4478__auto__ = (function (){var G__48488 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48450,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__48450)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48488);
} else {
return G__48488;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__48450),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__48450),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__48490 = shadow.dom.dom_node(el);
return goog.style.getSize(G__48490);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__49197 = (i + (1));
var G__49198 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__49197;
ret = G__49198;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48506){
var vec__48507 = p__48506;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48507,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48507,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__48514 = arguments.length;
switch (G__48514) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__48522_49201 = new_node;
var G__48523_49202 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__48522_49201,G__48523_49202);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__48526_49203 = new_node;
var G__48527_49204 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__48526_49203,G__48527_49204);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__49205 = ps;
var G__49206 = (i + (1));
el__$1 = G__49205;
i = G__49206;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__48534 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__48534);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__48543 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__48543);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__48545 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__48545);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__48547 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48547,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48547,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48547,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__48554_49209 = cljs.core.seq(props);
var chunk__48555_49210 = null;
var count__48556_49211 = (0);
var i__48557_49212 = (0);
while(true){
if((i__48557_49212 < count__48556_49211)){
var vec__48566_49214 = chunk__48555_49210.cljs$core$IIndexed$_nth$arity$2(null,i__48557_49212);
var k_49215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48566_49214,(0),null);
var v_49216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48566_49214,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_49215);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_49215),v_49216);


var G__49217 = seq__48554_49209;
var G__49218 = chunk__48555_49210;
var G__49219 = count__48556_49211;
var G__49220 = (i__48557_49212 + (1));
seq__48554_49209 = G__49217;
chunk__48555_49210 = G__49218;
count__48556_49211 = G__49219;
i__48557_49212 = G__49220;
continue;
} else {
var temp__5735__auto___49223 = cljs.core.seq(seq__48554_49209);
if(temp__5735__auto___49223){
var seq__48554_49226__$1 = temp__5735__auto___49223;
if(cljs.core.chunked_seq_QMARK_(seq__48554_49226__$1)){
var c__4609__auto___49227 = cljs.core.chunk_first(seq__48554_49226__$1);
var G__49228 = cljs.core.chunk_rest(seq__48554_49226__$1);
var G__49229 = c__4609__auto___49227;
var G__49230 = cljs.core.count(c__4609__auto___49227);
var G__49231 = (0);
seq__48554_49209 = G__49228;
chunk__48555_49210 = G__49229;
count__48556_49211 = G__49230;
i__48557_49212 = G__49231;
continue;
} else {
var vec__48572_49233 = cljs.core.first(seq__48554_49226__$1);
var k_49234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48572_49233,(0),null);
var v_49235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48572_49233,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_49234);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_49234),v_49235);


var G__49236 = cljs.core.next(seq__48554_49226__$1);
var G__49237 = null;
var G__49238 = (0);
var G__49239 = (0);
seq__48554_49209 = G__49236;
chunk__48555_49210 = G__49237;
count__48556_49211 = G__49238;
i__48557_49212 = G__49239;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__48585 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48585,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48585,(1),null);
var seq__48590_49240 = cljs.core.seq(node_children);
var chunk__48592_49241 = null;
var count__48593_49242 = (0);
var i__48594_49243 = (0);
while(true){
if((i__48594_49243 < count__48593_49242)){
var child_struct_49245 = chunk__48592_49241.cljs$core$IIndexed$_nth$arity$2(null,i__48594_49243);
if((!((child_struct_49245 == null)))){
if(typeof child_struct_49245 === 'string'){
var text_49246 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49246),child_struct_49245].join(''));
} else {
var children_49247 = shadow.dom.svg_node(child_struct_49245);
if(cljs.core.seq_QMARK_(children_49247)){
var seq__48630_49248 = cljs.core.seq(children_49247);
var chunk__48632_49249 = null;
var count__48633_49250 = (0);
var i__48634_49251 = (0);
while(true){
if((i__48634_49251 < count__48633_49250)){
var child_49253 = chunk__48632_49249.cljs$core$IIndexed$_nth$arity$2(null,i__48634_49251);
if(cljs.core.truth_(child_49253)){
node.appendChild(child_49253);


var G__49257 = seq__48630_49248;
var G__49258 = chunk__48632_49249;
var G__49259 = count__48633_49250;
var G__49260 = (i__48634_49251 + (1));
seq__48630_49248 = G__49257;
chunk__48632_49249 = G__49258;
count__48633_49250 = G__49259;
i__48634_49251 = G__49260;
continue;
} else {
var G__49261 = seq__48630_49248;
var G__49262 = chunk__48632_49249;
var G__49263 = count__48633_49250;
var G__49264 = (i__48634_49251 + (1));
seq__48630_49248 = G__49261;
chunk__48632_49249 = G__49262;
count__48633_49250 = G__49263;
i__48634_49251 = G__49264;
continue;
}
} else {
var temp__5735__auto___49265 = cljs.core.seq(seq__48630_49248);
if(temp__5735__auto___49265){
var seq__48630_49266__$1 = temp__5735__auto___49265;
if(cljs.core.chunked_seq_QMARK_(seq__48630_49266__$1)){
var c__4609__auto___49267 = cljs.core.chunk_first(seq__48630_49266__$1);
var G__49268 = cljs.core.chunk_rest(seq__48630_49266__$1);
var G__49269 = c__4609__auto___49267;
var G__49270 = cljs.core.count(c__4609__auto___49267);
var G__49271 = (0);
seq__48630_49248 = G__49268;
chunk__48632_49249 = G__49269;
count__48633_49250 = G__49270;
i__48634_49251 = G__49271;
continue;
} else {
var child_49272 = cljs.core.first(seq__48630_49266__$1);
if(cljs.core.truth_(child_49272)){
node.appendChild(child_49272);


var G__49273 = cljs.core.next(seq__48630_49266__$1);
var G__49274 = null;
var G__49275 = (0);
var G__49276 = (0);
seq__48630_49248 = G__49273;
chunk__48632_49249 = G__49274;
count__48633_49250 = G__49275;
i__48634_49251 = G__49276;
continue;
} else {
var G__49277 = cljs.core.next(seq__48630_49266__$1);
var G__49278 = null;
var G__49279 = (0);
var G__49280 = (0);
seq__48630_49248 = G__49277;
chunk__48632_49249 = G__49278;
count__48633_49250 = G__49279;
i__48634_49251 = G__49280;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49247);
}
}


var G__49281 = seq__48590_49240;
var G__49282 = chunk__48592_49241;
var G__49283 = count__48593_49242;
var G__49284 = (i__48594_49243 + (1));
seq__48590_49240 = G__49281;
chunk__48592_49241 = G__49282;
count__48593_49242 = G__49283;
i__48594_49243 = G__49284;
continue;
} else {
var G__49285 = seq__48590_49240;
var G__49286 = chunk__48592_49241;
var G__49287 = count__48593_49242;
var G__49288 = (i__48594_49243 + (1));
seq__48590_49240 = G__49285;
chunk__48592_49241 = G__49286;
count__48593_49242 = G__49287;
i__48594_49243 = G__49288;
continue;
}
} else {
var temp__5735__auto___49289 = cljs.core.seq(seq__48590_49240);
if(temp__5735__auto___49289){
var seq__48590_49290__$1 = temp__5735__auto___49289;
if(cljs.core.chunked_seq_QMARK_(seq__48590_49290__$1)){
var c__4609__auto___49291 = cljs.core.chunk_first(seq__48590_49290__$1);
var G__49292 = cljs.core.chunk_rest(seq__48590_49290__$1);
var G__49293 = c__4609__auto___49291;
var G__49294 = cljs.core.count(c__4609__auto___49291);
var G__49295 = (0);
seq__48590_49240 = G__49292;
chunk__48592_49241 = G__49293;
count__48593_49242 = G__49294;
i__48594_49243 = G__49295;
continue;
} else {
var child_struct_49296 = cljs.core.first(seq__48590_49290__$1);
if((!((child_struct_49296 == null)))){
if(typeof child_struct_49296 === 'string'){
var text_49297 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49297),child_struct_49296].join(''));
} else {
var children_49298 = shadow.dom.svg_node(child_struct_49296);
if(cljs.core.seq_QMARK_(children_49298)){
var seq__48648_49299 = cljs.core.seq(children_49298);
var chunk__48650_49300 = null;
var count__48651_49301 = (0);
var i__48652_49302 = (0);
while(true){
if((i__48652_49302 < count__48651_49301)){
var child_49303 = chunk__48650_49300.cljs$core$IIndexed$_nth$arity$2(null,i__48652_49302);
if(cljs.core.truth_(child_49303)){
node.appendChild(child_49303);


var G__49304 = seq__48648_49299;
var G__49305 = chunk__48650_49300;
var G__49306 = count__48651_49301;
var G__49307 = (i__48652_49302 + (1));
seq__48648_49299 = G__49304;
chunk__48650_49300 = G__49305;
count__48651_49301 = G__49306;
i__48652_49302 = G__49307;
continue;
} else {
var G__49308 = seq__48648_49299;
var G__49309 = chunk__48650_49300;
var G__49310 = count__48651_49301;
var G__49311 = (i__48652_49302 + (1));
seq__48648_49299 = G__49308;
chunk__48650_49300 = G__49309;
count__48651_49301 = G__49310;
i__48652_49302 = G__49311;
continue;
}
} else {
var temp__5735__auto___49313__$1 = cljs.core.seq(seq__48648_49299);
if(temp__5735__auto___49313__$1){
var seq__48648_49314__$1 = temp__5735__auto___49313__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48648_49314__$1)){
var c__4609__auto___49315 = cljs.core.chunk_first(seq__48648_49314__$1);
var G__49316 = cljs.core.chunk_rest(seq__48648_49314__$1);
var G__49317 = c__4609__auto___49315;
var G__49318 = cljs.core.count(c__4609__auto___49315);
var G__49319 = (0);
seq__48648_49299 = G__49316;
chunk__48650_49300 = G__49317;
count__48651_49301 = G__49318;
i__48652_49302 = G__49319;
continue;
} else {
var child_49320 = cljs.core.first(seq__48648_49314__$1);
if(cljs.core.truth_(child_49320)){
node.appendChild(child_49320);


var G__49321 = cljs.core.next(seq__48648_49314__$1);
var G__49322 = null;
var G__49323 = (0);
var G__49324 = (0);
seq__48648_49299 = G__49321;
chunk__48650_49300 = G__49322;
count__48651_49301 = G__49323;
i__48652_49302 = G__49324;
continue;
} else {
var G__49325 = cljs.core.next(seq__48648_49314__$1);
var G__49326 = null;
var G__49327 = (0);
var G__49328 = (0);
seq__48648_49299 = G__49325;
chunk__48650_49300 = G__49326;
count__48651_49301 = G__49327;
i__48652_49302 = G__49328;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49298);
}
}


var G__49329 = cljs.core.next(seq__48590_49290__$1);
var G__49330 = null;
var G__49331 = (0);
var G__49332 = (0);
seq__48590_49240 = G__49329;
chunk__48592_49241 = G__49330;
count__48593_49242 = G__49331;
i__48594_49243 = G__49332;
continue;
} else {
var G__49333 = cljs.core.next(seq__48590_49290__$1);
var G__49334 = null;
var G__49335 = (0);
var G__49336 = (0);
seq__48590_49240 = G__49333;
chunk__48592_49241 = G__49334;
count__48593_49242 = G__49335;
i__48594_49243 = G__49336;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__48676_49337 = shadow.dom._to_svg;
var G__48677_49338 = "string";
var G__48678_49339 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__48676_49337,G__48677_49338,G__48678_49339);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__48691_49347 = shadow.dom._to_svg;
var G__48692_49348 = "null";
var G__48693_49349 = (function (_){
return null;
});
goog.object.set(G__48691_49347,G__48692_49348,G__48693_49349);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___49350 = arguments.length;
var i__4790__auto___49351 = (0);
while(true){
if((i__4790__auto___49351 < len__4789__auto___49350)){
args__4795__auto__.push((arguments[i__4790__auto___49351]));

var G__49352 = (i__4790__auto___49351 + (1));
i__4790__auto___49351 = G__49352;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq48695){
var G__48696 = cljs.core.first(seq48695);
var seq48695__$1 = cljs.core.next(seq48695);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48696,seq48695__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__48716 = arguments.length;
switch (G__48716) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
var G__48725_49354 = shadow.dom.dom_node(el);
var G__48726_49355 = cljs.core.name(event);
var G__48727_49356 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__48725_49354,G__48726_49355,G__48727_49356) : shadow.dom.dom_listen.call(null,G__48725_49354,G__48726_49355,G__48727_49356));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__46324__auto___49358 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46325__auto__ = (function (){var switch__46257__auto__ = (function (state_48736){
var state_val_48737 = (state_48736[(1)]);
if((state_val_48737 === (1))){
var state_48736__$1 = state_48736;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48736__$1,(2),once_or_cleanup);
} else {
if((state_val_48737 === (2))){
var inst_48732 = (state_48736[(2)]);
var inst_48734 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_48736__$1 = (function (){var statearr_48745 = state_48736;
(statearr_48745[(7)] = inst_48732);

return statearr_48745;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48736__$1,inst_48734);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__46258__auto__ = null;
var shadow$dom$state_machine__46258__auto____0 = (function (){
var statearr_48747 = [null,null,null,null,null,null,null,null];
(statearr_48747[(0)] = shadow$dom$state_machine__46258__auto__);

(statearr_48747[(1)] = (1));

return statearr_48747;
});
var shadow$dom$state_machine__46258__auto____1 = (function (state_48736){
while(true){
var ret_value__46259__auto__ = (function (){try{while(true){
var result__46260__auto__ = switch__46257__auto__(state_48736);
if(cljs.core.keyword_identical_QMARK_(result__46260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46260__auto__;
}
break;
}
}catch (e48750){if((e48750 instanceof Object)){
var ex__46261__auto__ = e48750;
var statearr_48751_49360 = state_48736;
(statearr_48751_49360[(5)] = ex__46261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48750;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49361 = state_48736;
state_48736 = G__49361;
continue;
} else {
return ret_value__46259__auto__;
}
break;
}
});
shadow$dom$state_machine__46258__auto__ = function(state_48736){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__46258__auto____0.call(this);
case 1:
return shadow$dom$state_machine__46258__auto____1.call(this,state_48736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__46258__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__46258__auto____0;
shadow$dom$state_machine__46258__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__46258__auto____1;
return shadow$dom$state_machine__46258__auto__;
})()
})();
var state__46326__auto__ = (function (){var statearr_48758 = (f__46325__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46325__auto__.cljs$core$IFn$_invoke$arity$0() : f__46325__auto__.call(null));
(statearr_48758[(6)] = c__46324__auto___49358);

return statearr_48758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46326__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
