goog.provide('reagent_forms.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('reagent.core');
goog.require('reagent_forms.datepicker');
reagent_forms.core.value_of = (function reagent_forms$core$value_of(element){
return element.target.value;
});
reagent_forms.core.scroll_to = (function reagent_forms$core$scroll_to(element,idx){
var list_elem = element.target.parentNode.getElementsByTagName("ul").item((0));
var idx__$1 = (((idx < (0)))?(0):idx);
var item_elem = list_elem.children.item(idx__$1);
var vec__40805 = (cljs.core.truth_(item_elem)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_elem.scrollHeight,item_elem.offsetTop], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
var item_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40805,(0),null);
var offset_top = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40805,(1),null);
return (list_elem.scrollTop = (offset_top - ((2) * item_height)));
});
reagent_forms.core.id__GT_path = cljs.core.memoize((function (id){
if(cljs.core.sequential_QMARK_(id)){
return id;
} else {
var segments = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),(1)),/\./);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,segments);
}
}));
reagent_forms.core.cursor_for_id = cljs.core.memoize((function (doc,id){
return reagent.core.cursor(doc,(reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1 ? reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1(id) : reagent_forms.core.id__GT_path.call(null,id)));
}));
reagent_forms.core.run_events = (function reagent_forms$core$run_events(doc,id,value,events){
var path = (reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1 ? reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1(id) : reagent_forms.core.id__GT_path.call(null,id));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__40821_SHARP_,p2__40820_SHARP_){
var or__4185__auto__ = (p2__40820_SHARP_.cljs$core$IFn$_invoke$arity$4 ? p2__40820_SHARP_.cljs$core$IFn$_invoke$arity$4(id,path,value,p1__40821_SHARP_) : p2__40820_SHARP_.call(null,id,path,value,p1__40821_SHARP_));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return p1__40821_SHARP_;
}
}),doc,events);
});
reagent_forms.core.mk_update_fn = (function reagent_forms$core$mk_update_fn(doc,events){
return (function (id,update_fn,value){
var result = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((reagent_forms.core.cursor_for_id.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.cursor_for_id.cljs$core$IFn$_invoke$arity$2(doc,id) : reagent_forms.core.cursor_for_id.call(null,doc,id)),(function (current_value){
return (update_fn.cljs$core$IFn$_invoke$arity$2 ? update_fn.cljs$core$IFn$_invoke$arity$2(current_value,value) : update_fn.call(null,current_value,value));
}));
if(cljs.core.empty_QMARK_(events)){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(doc,reagent_forms.core.run_events,id,result,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([events], 0));
}
});
});
reagent_forms.core.mk_save_fn = (function reagent_forms$core$mk_save_fn(doc,events){
return (function (id,value){
cljs.core.reset_BANG_((reagent_forms.core.cursor_for_id.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.cursor_for_id.cljs$core$IFn$_invoke$arity$2(doc,id) : reagent_forms.core.cursor_for_id.call(null,doc,id)),value);

if(cljs.core.empty_QMARK_(events)){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(doc,reagent_forms.core.run_events,id,value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([events], 0));
}
});
});
reagent_forms.core.wrap_get_fn = (function reagent_forms$core$wrap_get_fn(get,wrapper){
return (function (id){
var G__40826 = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
return (wrapper.cljs$core$IFn$_invoke$arity$1 ? wrapper.cljs$core$IFn$_invoke$arity$1(G__40826) : wrapper.call(null,G__40826));
});
});
reagent_forms.core.wrap_save_fn = (function reagent_forms$core$wrap_save_fn(save_BANG_,wrapper){
return (function (id,value){
var G__40827 = id;
var G__40828 = (wrapper.cljs$core$IFn$_invoke$arity$1 ? wrapper.cljs$core$IFn$_invoke$arity$1(value) : wrapper.call(null,value));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__40827,G__40828) : save_BANG_.call(null,G__40827,G__40828));
});
});
reagent_forms.core.wrap_update_fn = (function reagent_forms$core$wrap_update_fn(update_BANG_,wrapper){
return (function (id,update_fn,value){
var G__40829 = id;
var G__40830 = update_fn;
var G__40831 = (wrapper.cljs$core$IFn$_invoke$arity$1 ? wrapper.cljs$core$IFn$_invoke$arity$1(value) : wrapper.call(null,value));
return (update_BANG_.cljs$core$IFn$_invoke$arity$3 ? update_BANG_.cljs$core$IFn$_invoke$arity$3(G__40829,G__40830,G__40831) : update_BANG_.call(null,G__40829,G__40830,G__40831));
});
});
reagent_forms.core.wrap_fns = (function reagent_forms$core$wrap_fns(p__40832,node){
var map__40833 = p__40832;
var map__40833__$1 = (((((!((map__40833 == null))))?(((((map__40833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40833):map__40833);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40833__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40833__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40833__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var update_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40833__$1,new cljs.core.Keyword(null,"update!","update!",-1453508586));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"get","get",1683182755),(function (){var temp__5733__auto__ = new cljs.core.Keyword(null,"in-fn","in-fn",-1938980694).cljs$core$IFn$_invoke$arity$1(cljs.core.second(node));
if(cljs.core.truth_(temp__5733__auto__)){
var in_fn = temp__5733__auto__;
return reagent_forms.core.wrap_get_fn(get,in_fn);
} else {
return get;
}
})(),new cljs.core.Keyword(null,"save!","save!",-1137373803),(function (){var temp__5733__auto__ = new cljs.core.Keyword(null,"out-fn","out-fn",747295447).cljs$core$IFn$_invoke$arity$1(cljs.core.second(node));
if(cljs.core.truth_(temp__5733__auto__)){
var out_fn = temp__5733__auto__;
return reagent_forms.core.wrap_save_fn(save_BANG_,out_fn);
} else {
return save_BANG_;
}
})(),new cljs.core.Keyword(null,"update!","update!",-1453508586),(function (){var temp__5733__auto__ = new cljs.core.Keyword(null,"out-fn","out-fn",747295447).cljs$core$IFn$_invoke$arity$1(cljs.core.second(node));
if(cljs.core.truth_(temp__5733__auto__)){
var out_fn = temp__5733__auto__;
return reagent_forms.core.wrap_update_fn(update_BANG_,out_fn);
} else {
return update_BANG_;
}
})()], null);
});
reagent_forms.core.set_disabled = (function reagent_forms$core$set_disabled(attrs,update_disabled_QMARK_){
if(cljs.core.truth_((function (){var and__4174__auto__ = update_disabled_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return (!((new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(attrs) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(function (p1__40835_SHARP_){
if(cljs.core.fn_QMARK_(p1__40835_SHARP_)){
return (p1__40835_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__40835_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__40835_SHARP_.call(null));
} else {
return p1__40835_SHARP_;
}
}));
} else {
return attrs;
}
});
reagent_forms.core.call_attr = (function reagent_forms$core$call_attr(doc,attr){
var doc__$1 = ((cljs.core.fn_QMARK_(doc))?(doc.cljs$core$IFn$_invoke$arity$0 ? doc.cljs$core$IFn$_invoke$arity$0() : doc.call(null)):cljs.core.deref(doc));
if(cljs.core.fn_QMARK_(attr)){
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(doc__$1) : attr.call(null,doc__$1));
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(doc__$1,(reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1 ? reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1(attr) : reagent_forms.core.id__GT_path.call(null,attr)));
}
});
reagent_forms.core.update_class = (function reagent_forms$core$update_class(attrs,classes){
if(cljs.core.truth_(cljs.core.not_empty(classes))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.Keyword(null,"class","class",-2030961996),(function (p1__40837_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,cljs.core.into.cljs$core$IFn$_invoke$arity$2(((typeof p1__40837_SHARP_ === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40837_SHARP_], null):p1__40837_SHARP_),classes)));
}));
} else {
return attrs;
}
});
reagent_forms.core.update_attrs = (function reagent_forms$core$update_attrs(p__40838,doc){
var map__40839 = p__40838;
var map__40839__$1 = (((((!((map__40839 == null))))?(((((map__40839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40839):map__40839);
var attrs = map__40839__$1;
var set_attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40839__$1,new cljs.core.Keyword(null,"set-attributes","set-attributes",1727919473));
var or__4185__auto__ = (cljs.core.truth_(set_attributes)?(function (){var G__40843 = ((cljs.core.fn_QMARK_(doc))?(doc.cljs$core$IFn$_invoke$arity$0 ? doc.cljs$core$IFn$_invoke$arity$0() : doc.call(null)):cljs.core.deref(doc));
var G__40844 = attrs;
return (set_attributes.cljs$core$IFn$_invoke$arity$2 ? set_attributes.cljs$core$IFn$_invoke$arity$2(G__40843,G__40844) : set_attributes.call(null,G__40843,G__40844));
})():null);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return attrs;
}
});
reagent_forms.core.set_validation_class = (function reagent_forms$core$set_validation_class(attrs,doc){
var temp__5733__auto__ = new cljs.core.Keyword(null,"validator","validator",-1966190681).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var valid = temp__5733__auto__;
return reagent_forms.core.update_class(attrs,reagent_forms.core.call_attr(doc,valid));
} else {
return attrs;
}
});
reagent_forms.core.clean_attrs = (function reagent_forms$core$clean_attrs(attrs){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,new cljs.core.Keyword(null,"fmt","fmt",332300772),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"in-fn","in-fn",-1938980694),new cljs.core.Keyword(null,"out-fn","out-fn",747295447),new cljs.core.Keyword(null,"inline","inline",1399884222),new cljs.core.Keyword(null,"save-fn","save-fn",383840986),new cljs.core.Keyword(null,"preamble","preamble",1641040241),new cljs.core.Keyword(null,"visible?","visible?",2129863715),new cljs.core.Keyword(null,"postamble","postamble",-500033366),new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword(null,"date-format","date-format",-557196721),new cljs.core.Keyword(null,"auto-close?","auto-close?",-1675434568),new cljs.core.Keyword(null,"set-attributes","set-attributes",1727919473)], 0));
});
if((typeof reagent_forms !== 'undefined') && (typeof reagent_forms.core !== 'undefined') && (typeof reagent_forms.core.format_type !== 'undefined')){
} else {
reagent_forms.core.format_type = (function (){var method_table__4672__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__40845 = cljs.core.get_global_hierarchy;
return (fexpr__40845.cljs$core$IFn$_invoke$arity$0 ? fexpr__40845.cljs$core$IFn$_invoke$arity$0() : fexpr__40845.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","format-type"),(function (field_type,_){
if(cljs.core.truth_((function (){var fexpr__40846 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"numeric","numeric",-1495594714),null,new cljs.core.Keyword(null,"range","range",1639692286),null], null), null);
return (fexpr__40846.cljs$core$IFn$_invoke$arity$1 ? fexpr__40846.cljs$core$IFn$_invoke$arity$1(field_type) : fexpr__40846.call(null,field_type));
})())){
return new cljs.core.Keyword(null,"numeric","numeric",-1495594714);
} else {
return field_type;
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
reagent_forms.core.format_value = (function reagent_forms$core$format_value(fmt,value){
if(cljs.core.truth_(((cljs.core.not(isNaN(parseFloat(value))))?fmt:false))){
return goog.string.format(fmt,value);
} else {
return value;
}
});
reagent_forms.core.format_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),(function (_,n){
if(cljs.core.truth_(cljs.core.not_empty(n))){
var parsed = parseFloat(n);
if(cljs.core.truth_(isNaN(parsed))){
return null;
} else {
return parsed;
}
} else {
return null;
}
}));
reagent_forms.core.format_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,value){
return value;
}));
if((typeof reagent_forms !== 'undefined') && (typeof reagent_forms.core !== 'undefined') && (typeof reagent_forms.core.bind !== 'undefined')){
} else {
reagent_forms.core.bind = (function (){var method_table__4672__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__40847 = cljs.core.get_global_hierarchy;
return (fexpr__40847.cljs$core$IFn$_invoke$arity$0 ? fexpr__40847.cljs$core$IFn$_invoke$arity$0() : fexpr__40847.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","bind"),(function (p__40848,_){
var map__40849 = p__40848;
var map__40849__$1 = (((((!((map__40849 == null))))?(((((map__40849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40849):map__40849);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40849__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
if(cljs.core.truth_((function (){var fexpr__40851 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"email","email",1415816706),null,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),null,new cljs.core.Keyword(null,"password","password",417022471),null,new cljs.core.Keyword(null,"tel","tel",224138159),null,new cljs.core.Keyword(null,"textarea","textarea",-650375824),null,new cljs.core.Keyword(null,"range","range",1639692286),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__40851.cljs$core$IFn$_invoke$arity$1 ? fexpr__40851.cljs$core$IFn$_invoke$arity$1(field) : fexpr__40851.call(null,field));
})())){
return new cljs.core.Keyword(null,"input-field","input-field",289353943);
} else {
return field;
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
reagent_forms.core.bind.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"input-field","input-field",289353943),(function (p__40853,p__40854){
var map__40855 = p__40853;
var map__40855__$1 = (((((!((map__40855 == null))))?(((((map__40855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40855):map__40855);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40855__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40855__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40855__$1,new cljs.core.Keyword(null,"fmt","fmt",332300772));
var map__40856 = p__40854;
var map__40856__$1 = (((((!((map__40856 == null))))?(((((map__40856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40856):map__40856);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40856__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40856__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var value = (function (){var or__4185__auto__ = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})();
return reagent_forms.core.format_value(fmt,value);
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__40852_SHARP_){
var G__40860 = id;
var G__40861 = (function (){var G__40862 = field;
var G__40863 = reagent_forms.core.value_of(p1__40852_SHARP_);
return (reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2(G__40862,G__40863) : reagent_forms.core.format_type.call(null,G__40862,G__40863));
})();
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__40860,G__40861) : save_BANG_.call(null,G__40860,G__40861));
})], null);
}));
reagent_forms.core.bind.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),(function (p__40865,p__40866){
var map__40867 = p__40865;
var map__40867__$1 = (((((!((map__40867 == null))))?(((((map__40867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40867):map__40867);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40867__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__40868 = p__40866;
var map__40868__$1 = (((((!((map__40868 == null))))?(((((map__40868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40868):map__40868);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40868__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40868__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.boolean$((get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
var G__40871 = id;
var G__40872 = cljs.core.not((get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id)));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__40871,G__40872) : save_BANG_.call(null,G__40871,G__40872));
})], null);
}));
reagent_forms.core.bind.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,___$1){
return null;
}));
reagent_forms.core.set_attrs = (function reagent_forms$core$set_attrs(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41129 = arguments.length;
var i__4790__auto___41130 = (0);
while(true){
if((i__4790__auto___41130 < len__4789__auto___41129)){
args__4795__auto__.push((arguments[i__4790__auto___41130]));

var G__41131 = (i__4790__auto___41130 + (1));
i__4790__auto___41130 = G__41131;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic = (function (p__40877,opts,p__40878){
var vec__40879 = p__40877;
var seq__40880 = cljs.core.seq(vec__40879);
var first__40881 = cljs.core.first(seq__40880);
var seq__40880__$1 = cljs.core.next(seq__40880);
var type = first__40881;
var first__40881__$1 = cljs.core.first(seq__40880__$1);
var seq__40880__$2 = cljs.core.next(seq__40880__$1);
var attrs = first__40881__$1;
var body = seq__40880__$2;
var vec__40882 = p__40878;
var default_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40882,(0),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_attrs,(reagent_forms.core.bind.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.bind.cljs$core$IFn$_invoke$arity$2(attrs,opts) : reagent_forms.core.bind.call(null,attrs,opts)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"default-checked","default-checked",1039965863)], 0))], 0))], null),body);
}));

(reagent_forms.core.set_attrs.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent_forms.core.set_attrs.cljs$lang$applyTo = (function (seq40874){
var G__40875 = cljs.core.first(seq40874);
var seq40874__$1 = cljs.core.next(seq40874);
var G__40876 = cljs.core.first(seq40874__$1);
var seq40874__$2 = cljs.core.next(seq40874__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40875,G__40876,seq40874__$2);
}));

if((typeof reagent_forms !== 'undefined') && (typeof reagent_forms.core !== 'undefined') && (typeof reagent_forms.core.init_field !== 'undefined')){
} else {
reagent_forms.core.init_field = (function (){var method_table__4672__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__40886 = cljs.core.get_global_hierarchy;
return (fexpr__40886.cljs$core$IFn$_invoke$arity$0 ? fexpr__40886.cljs$core$IFn$_invoke$arity$0() : fexpr__40886.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","init-field"),(function (p__40887,_){
var vec__40888 = p__40887;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40888,(0),null);
var map__40891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40888,(1),null);
var map__40891__$1 = (((((!((map__40891 == null))))?(((((map__40891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40891):map__40891);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40891__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var field__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(field);
if(cljs.core.truth_((function (){var fexpr__40893 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"email","email",1415816706),null,new cljs.core.Keyword(null,"password","password",417022471),null,new cljs.core.Keyword(null,"tel","tel",224138159),null,new cljs.core.Keyword(null,"textarea","textarea",-650375824),null,new cljs.core.Keyword(null,"range","range",1639692286),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__40893.cljs$core$IFn$_invoke$arity$1 ? fexpr__40893.cljs$core$IFn$_invoke$arity$1(field__$1) : fexpr__40893.call(null,field__$1));
})())){
return new cljs.core.Keyword(null,"input-field","input-field",289353943);
} else {
return field__$1;
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"container","container",-1736937707),(function (p__40895,p__40896){
var vec__40897 = p__40895;
var seq__40898 = cljs.core.seq(vec__40897);
var first__40899 = cljs.core.first(seq__40898);
var seq__40898__$1 = cljs.core.next(seq__40898);
var type = first__40899;
var first__40899__$1 = cljs.core.first(seq__40898__$1);
var seq__40898__$2 = cljs.core.next(seq__40898__$1);
var attrs = first__40899__$1;
var body = seq__40898__$2;
var map__40900 = p__40896;
var map__40900__$1 = (((((!((map__40900 == null))))?(((((map__40900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40900):map__40900);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40900__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return (function (){
var update_disabled_QMARK___40796__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__40797__auto__ = clojure.walk.postwalk((function (c__40798__auto__){
if(cljs.core.map_QMARK_(c__40798__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__40798__auto__,doc),doc),update_disabled_QMARK___40796__auto__));
} else {
return c__40798__auto__;
}
}),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs], null),body));
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__40799__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__40799__auto__))){
return body__40797__auto__;
} else {
return null;
}
} else {
return body__40797__auto__;
}
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"input-field","input-field",289353943),(function (p__40903,p__40904){
var vec__40905 = p__40903;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40905,(0),null);
var map__40908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40905,(1),null);
var map__40908__$1 = (((((!((map__40908 == null))))?(((((map__40908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40908):map__40908);
var attrs = map__40908__$1;
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40908__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var component = vec__40905;
var map__40909 = p__40904;
var map__40909__$1 = (((((!((map__40909 == null))))?(((((map__40909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40909):map__40909);
var opts = map__40909__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40909__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return (function (){
var update_disabled_QMARK___40796__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__40797__auto__ = clojure.walk.postwalk((function (c__40798__auto__){
if(cljs.core.map_QMARK_(c__40798__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__40798__auto__,doc),doc),update_disabled_QMARK___40796__auto__));
} else {
return c__40798__auto__;
}
}),reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(component,opts,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null)], 0)));
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__40799__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__40799__auto__))){
return body__40797__auto__;
} else {
return null;
}
} else {
return body__40797__auto__;
}
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),(function (p__40914,p__40915){
var vec__40916 = p__40914;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40916,(0),null);
var map__40919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40916,(1),null);
var map__40919__$1 = (((((!((map__40919 == null))))?(((((map__40919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40919):map__40919);
var attrs = map__40919__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40919__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40919__$1,new cljs.core.Keyword(null,"fmt","fmt",332300772));
var map__40920 = p__40915;
var map__40920__$1 = (((((!((map__40920 == null))))?(((((map__40920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40920):map__40920);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40920__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40920__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40920__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var input_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (){
var update_disabled_QMARK___40796__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__40797__auto__ = clojure.walk.postwalk((function (c__40798__auto__){
if(cljs.core.map_QMARK_(c__40798__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__40798__auto__,doc),doc),update_disabled_QMARK___40796__auto__));
} else {
return c__40798__auto__;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = cljs.core.deref(input_value);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (get.cljs$core$IFn$_invoke$arity$2 ? get.cljs$core$IFn$_invoke$arity$2(id,"") : get.call(null,id,""));
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__40912_SHARP_){
return cljs.core.reset_BANG_(input_value,reagent_forms.core.value_of(p1__40912_SHARP_));
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (p1__40913_SHARP_){
cljs.core.reset_BANG_(input_value,null);

var G__40923 = id;
var G__40924 = (function (){var G__40925 = new cljs.core.Keyword(null,"numeric","numeric",-1495594714);
var G__40926 = reagent_forms.core.format_value(fmt,reagent_forms.core.value_of(p1__40913_SHARP_));
return (reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2(G__40925,G__40926) : reagent_forms.core.format_type.call(null,G__40925,G__40926));
})();
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__40923,G__40924) : save_BANG_.call(null,G__40923,G__40924));
})], null),attrs], 0))], null));
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__40799__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__40799__auto__))){
return body__40797__auto__;
} else {
return null;
}
} else {
return body__40797__auto__;
}
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"datepicker","datepicker",821741450),(function (p__40930,p__40931){
var vec__40932 = p__40930;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40932,(0),null);
var map__40935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40932,(1),null);
var map__40935__$1 = (((((!((map__40935 == null))))?(((((map__40935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40935):map__40935);
var attrs = map__40935__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40935__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var date_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40935__$1,new cljs.core.Keyword(null,"date-format","date-format",-557196721));
var inline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40935__$1,new cljs.core.Keyword(null,"inline","inline",1399884222));
var auto_close_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40935__$1,new cljs.core.Keyword(null,"auto-close?","auto-close?",-1675434568));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40935__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40935__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"en-US","en-US",1221407245));
var save_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40935__$1,new cljs.core.Keyword(null,"save-fn","save-fn",383840986));
var map__40936 = p__40931;
var map__40936__$1 = (((((!((map__40936 == null))))?(((((map__40936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40936):map__40936);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40936__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40936__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40936__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var update_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40936__$1,new cljs.core.Keyword(null,"update!","update!",-1453508586));
var fmt = ((cljs.core.fn_QMARK_(date_format))?date_format:(function (p1__40927_SHARP_){
return reagent_forms.datepicker.format_date(p1__40927_SHARP_,reagent_forms.datepicker.parse_format(date_format));
}));
var selected_date = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
var selected_month = (((new cljs.core.Keyword(null,"month","month",-1960248533).cljs$core$IFn$_invoke$arity$1(selected_date) > (0)))?(new cljs.core.Keyword(null,"month","month",-1960248533).cljs$core$IFn$_invoke$arity$1(selected_date) - (1)):new cljs.core.Keyword(null,"month","month",-1960248533).cljs$core$IFn$_invoke$arity$1(selected_date));
var today = (new Date());
var year = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(selected_date);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return today.getFullYear();
}
})();
var month = (function (){var or__4185__auto__ = selected_month;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return today.getMonth();
}
})();
var day = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"day","day",-274800446).cljs$core$IFn$_invoke$arity$1(selected_date);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return today.getDate();
}
})();
var expanded_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var mouse_on_list_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var dom_node = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var save_value = (cljs.core.truth_(save_fn)?(function (p1__40928_SHARP_){
return (update_BANG_.cljs$core$IFn$_invoke$arity$3 ? update_BANG_.cljs$core$IFn$_invoke$arity$3(id,save_fn,p1__40928_SHARP_) : update_BANG_.call(null,id,save_fn,p1__40928_SHARP_));
}):(function (p1__40929_SHARP_){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,p1__40929_SHARP_) : save_BANG_.call(null,id,p1__40929_SHARP_));
}));
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return cljs.core.reset_BANG_(dom_node,reagent.core.dom_node(this$).firstChild.firstChild);
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$){
return cljs.core.reset_BANG_(dom_node,reagent.core.dom_node(this$).firstChild.firstChild);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
var update_disabled_QMARK___40796__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__40797__auto__ = clojure.walk.postwalk((function (c__40798__auto__){
if(cljs.core.map_QMARK_(c__40798__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__40798__auto__,doc),doc),update_disabled_QMARK___40796__auto__));
} else {
return c__40798__auto__;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.datepicker-wrapper","div.datepicker-wrapper",2036556212),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group.date","div.input-group.date",-987970676),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),true,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
if(cljs.core.truth_(cljs.core.deref(mouse_on_list_QMARK_))){
return null;
} else {
return cljs.core.reset_BANG_(expanded_QMARK_,false);
}
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.preventDefault();

if(cljs.core.truth_(((cljs.core.fn_QMARK_(disabled))?(disabled.cljs$core$IFn$_invoke$arity$0 ? disabled.cljs$core$IFn$_invoke$arity$0() : disabled.call(null)):disabled))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);
}
}),new cljs.core.Keyword(null,"value","value",305978217),(function (){var temp__5733__auto__ = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.truth_(temp__5733__auto__)){
var date = temp__5733__auto__;
return (fmt.cljs$core$IFn$_invoke$arity$1 ? fmt.cljs$core$IFn$_invoke$arity$1(date) : fmt.call(null,date));
} else {
return "";
}
})()], null),attrs], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",-1300181023),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.preventDefault();

if(cljs.core.truth_(((cljs.core.fn_QMARK_(disabled))?(disabled.cljs$core$IFn$_invoke$arity$0 ? disabled.cljs$core$IFn$_invoke$arity$0() : disabled.call(null)):disabled))){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);

return cljs.core.deref(dom_node).focus();
}
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.glyphicon.glyphicon-calendar","i.glyphicon.glyphicon-calendar",-1048928069)], null)], null)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,year,month,day,dom_node,mouse_on_list_QMARK_,expanded_QMARK_,auto_close_QMARK_,(function (){
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
}),save_value,inline,lang], null)], null));
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__40799__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__40799__auto__))){
return body__40797__auto__;
} else {
return null;
}
} else {
return body__40797__auto__;
}
})], null));
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),(function (p__40939,p__40940){
var vec__40941 = p__40939;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40941,(0),null);
var map__40944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40941,(1),null);
var map__40944__$1 = (((((!((map__40944 == null))))?(((((map__40944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40944):map__40944);
var attrs = map__40944__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40944__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40944__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40944__$1,new cljs.core.Keyword(null,"checked","checked",-50955819));
var default_checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40944__$1,new cljs.core.Keyword(null,"default-checked","default-checked",1039965863));
var component = vec__40941;
var map__40945 = p__40940;
var map__40945__$1 = (((((!((map__40945 == null))))?(((((map__40945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40945):map__40945);
var opts = map__40945__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40945__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40945__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
if(cljs.core.truth_((function (){var or__4185__auto__ = checked;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default_checked;
}
})())){
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,true) : save_BANG_.call(null,id,true));
} else {
}

return (function (){
var update_disabled_QMARK___40796__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"default-checked","default-checked",1039965863)], 0)))]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__40797__auto__ = clojure.walk.postwalk((function (c__40798__auto__){
if(cljs.core.map_QMARK_(c__40798__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__40798__auto__,doc),doc),update_disabled_QMARK___40796__auto__));
} else {
return c__40798__auto__;
}
}),reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(component,opts,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null)], 0)));
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"default-checked","default-checked",1039965863)], 0)));
if(cljs.core.truth_(temp__5733__auto__)){
var visible__40799__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__40799__auto__))){
return body__40797__auto__;
} else {
return null;
}
} else {
return body__40797__auto__;
}
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"label","label",1718410804),(function (p__40948,p__40949){
var vec__40950 = p__40948;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40950,(0),null);
var map__40953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40950,(1),null);
var map__40953__$1 = (((((!((map__40953 == null))))?(((((map__40953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40953):map__40953);
var attrs = map__40953__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40953__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var preamble = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40953__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var postamble = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40953__$1,new cljs.core.Keyword(null,"postamble","postamble",-500033366));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40953__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40953__$1,new cljs.core.Keyword(null,"fmt","fmt",332300772));
var map__40954 = p__40949;
var map__40954__$1 = (((((!((map__40954 == null))))?(((((map__40954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40954):map__40954);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40954__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40954__$1,new cljs.core.Keyword(null,"get","get",1683182755));
return (function (){
var update_disabled_QMARK___40796__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__40797__auto__ = clojure.walk.postwalk((function (c__40798__auto__){
if(cljs.core.map_QMARK_(c__40798__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__40798__auto__,doc),doc),update_disabled_QMARK___40796__auto__));
} else {
return c__40798__auto__;
}
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,preamble,(function (){var value = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.truth_(fmt)){
return (fmt.cljs$core$IFn$_invoke$arity$1 ? fmt.cljs$core$IFn$_invoke$arity$1(value) : fmt.call(null,value));
} else {
if(cljs.core.truth_(value)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),cljs.core.str.cljs$core$IFn$_invoke$arity$1(postamble)].join('');
} else {
return placeholder;
}
}
})()], null));
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__40799__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__40799__auto__))){
return body__40797__auto__;
} else {
return null;
}
} else {
return body__40797__auto__;
}
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"alert","alert",-571950580),(function (p__40957,p__40958){
var vec__40959 = p__40957;
var seq__40960 = cljs.core.seq(vec__40959);
var first__40961 = cljs.core.first(seq__40960);
var seq__40960__$1 = cljs.core.next(seq__40960);
var type = first__40961;
var first__40961__$1 = cljs.core.first(seq__40960__$1);
var seq__40960__$2 = cljs.core.next(seq__40960__$1);
var map__40962 = first__40961__$1;
var map__40962__$1 = (((((!((map__40962 == null))))?(((((map__40962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40962):map__40962);
var attrs = map__40962__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40962__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40962__$1,new cljs.core.Keyword(null,"event","event",301435442));
var touch_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40962__$1,new cljs.core.Keyword(null,"touch-event","touch-event",-1071581783));
var closeable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40962__$1,new cljs.core.Keyword(null,"closeable?","closeable?",1490064409),true);
var body = seq__40960__$2;
var map__40963 = p__40958;
var map__40963__$1 = (((((!((map__40963 == null))))?(((((map__40963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40963):map__40963);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40963__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40963__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40963__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
return (function (){
var update_disabled_QMARK___40796__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__40797__auto__ = clojure.walk.postwalk((function (c__40798__auto__){
if(cljs.core.map_QMARK_(c__40798__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__40798__auto__,doc),doc),update_disabled_QMARK___40796__auto__));
} else {
return c__40798__auto__;
}
}),(cljs.core.truth_(event)?(cljs.core.truth_((function (){var G__40966 = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
return (event.cljs$core$IFn$_invoke$arity$1 ? event.cljs$core$IFn$_invoke$arity$1(G__40966) : event.call(null,G__40966));
})())?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs], null),body):null):(function (){var temp__5733__auto__ = cljs.core.not_empty((get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id)));
if(cljs.core.truth_(temp__5733__auto__)){
var message = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,(cljs.core.truth_(closeable_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true,(function (){var or__4185__auto__ = touch_event;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),(function (){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,null) : save_BANG_.call(null,id,null));
})]),"X"], null):null),message], null);
} else {
return null;
}
})()));
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__40799__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__40799__auto__))){
return body__40797__auto__;
} else {
return null;
}
} else {
return body__40797__auto__;
}
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"radio","radio",1323726374),(function (p__40967,p__40968){
var vec__40969 = p__40967;
var seq__40970 = cljs.core.seq(vec__40969);
var first__40971 = cljs.core.first(seq__40970);
var seq__40970__$1 = cljs.core.next(seq__40970);
var type = first__40971;
var first__40971__$1 = cljs.core.first(seq__40970__$1);
var seq__40970__$2 = cljs.core.next(seq__40970__$1);
var map__40972 = first__40971__$1;
var map__40972__$1 = (((((!((map__40972 == null))))?(((((map__40972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40972):map__40972);
var attrs = map__40972__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40972__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40972__$1,new cljs.core.Keyword(null,"value","value",305978217));
var checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40972__$1,new cljs.core.Keyword(null,"checked","checked",-50955819));
var default_checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40972__$1,new cljs.core.Keyword(null,"default-checked","default-checked",1039965863));
var body = seq__40970__$2;
var map__40973 = p__40968;
var map__40973__$1 = (((((!((map__40973 == null))))?(((((map__40973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40973):map__40973);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40973__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40973__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40973__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
if(cljs.core.truth_((function (){var or__4185__auto__ = checked;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default_checked;
}
})())){
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(name,value) : save_BANG_.call(null,name,value));
} else {
}

return (function (){
var update_disabled_QMARK___40796__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__40797__auto__ = clojure.walk.postwalk((function (c__40798__auto__){
if(cljs.core.map_QMARK_(c__40798__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__40798__auto__,doc),doc),update_disabled_QMARK___40796__auto__));
} else {
return c__40798__auto__;
}
}),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"default-checked","default-checked",1039965863)], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(name) : get.call(null,name))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(name,value) : save_BANG_.call(null,name,value));
})], null)], 0))], null),body));
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__40799__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__40799__auto__))){
return body__40797__auto__;
} else {
return null;
}
} else {
return body__40797__auto__;
}
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"typeahead","typeahead",-1364611797),(function (p__40980,p__40981){
var vec__40982 = p__40980;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40982,(0),null);
var map__40985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40982,(1),null);
var map__40985__$1 = (((((!((map__40985 == null))))?(((((map__40985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40985):map__40985);
var attrs = map__40985__$1;
var result_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40985__$1,new cljs.core.Keyword(null,"result-fn","result-fn",-726333573),cljs.core.identity);
var item_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40985__$1,new cljs.core.Keyword(null,"item-class","item-class",1277553858));
var input_placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40985__$1,new cljs.core.Keyword(null,"input-placeholder","input-placeholder",-965612860));
var selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40985__$1,new cljs.core.Keyword(null,"selections","selections",-1277610233));
var highlight_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40985__$1,new cljs.core.Keyword(null,"highlight-class","highlight-class",1738202282));
var list_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40985__$1,new cljs.core.Keyword(null,"list-class","list-class",1412758252));
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40985__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var input_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40985__$1,new cljs.core.Keyword(null,"input-class","input-class",-62053138));
var clear_on_focus_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40985__$1,new cljs.core.Keyword(null,"clear-on-focus?","clear-on-focus?",330213424),true);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40985__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var choice_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40985__$1,new cljs.core.Keyword(null,"choice-fn","choice-fn",-1053191627),cljs.core.identity);
var get_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40985__$1,new cljs.core.Keyword(null,"get-index","get-index",440051606));
var map__40986 = p__40981;
var map__40986__$1 = (((((!((map__40986 == null))))?(((((map__40986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40986):map__40986);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40986__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40986__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40986__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var typeahead_hidden_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var mouse_on_list_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var selected_index = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
var selections__$1 = (function (){var or__4185__auto__ = selections;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
})();
var get_index__$1 = (function (){var or__4185__auto__ = get_index;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.constantly((-1));
}
})();
var choose_selected = (function (){
if(cljs.core.truth_((function (){var and__4174__auto__ = cljs.core.not_empty(cljs.core.deref(selections__$1));
if(cljs.core.truth_(and__4174__auto__)){
return (cljs.core.deref(selected_index) > (-1));
} else {
return and__4174__auto__;
}
})())){
var choice = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selections__$1),cljs.core.deref(selected_index));
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,choice) : save_BANG_.call(null,id,choice));

(choice_fn.cljs$core$IFn$_invoke$arity$1 ? choice_fn.cljs$core$IFn$_invoke$arity$1(choice) : choice_fn.call(null,choice));

return cljs.core.reset_BANG_(typeahead_hidden_QMARK_,true);
} else {
return null;
}
});
return (function (){
var update_disabled_QMARK___40796__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__40797__auto__ = clojure.walk.postwalk((function (c__40798__auto__){
if(cljs.core.map_QMARK_(c__40798__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__40798__auto__,doc),doc),update_disabled_QMARK___40796__auto__));
} else {
return c__40798__auto__;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765)],[input_placeholder,new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(attrs),(function (){
if(cljs.core.truth_(clear_on_focus_QMARK_)){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,null) : save_BANG_.call(null,id,null));
} else {
return null;
}
}),(function (){var v = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if((!(cljs.core.iterable_QMARK_(v)))){
return v;
} else {
return cljs.core.first(v);
}
})(),(function (){
if(cljs.core.truth_(cljs.core.deref(mouse_on_list_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_(typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_(selected_index,(-1));
}
}),new cljs.core.Keyword(null,"text","text",-1790561697),input_class,(function (p1__40976_SHARP_){
var temp__5735__auto__ = clojure.string.trim(reagent_forms.core.value_of(p1__40976_SHARP_));
if(cljs.core.truth_(temp__5735__auto__)){
var value = temp__5735__auto__;
cljs.core.reset_BANG_(selections__$1,(function (){var G__40989 = value.toLowerCase();
return (data_source.cljs$core$IFn$_invoke$arity$1 ? data_source.cljs$core$IFn$_invoke$arity$1(G__40989) : data_source.call(null,G__40989));
})());

var G__40990_41136 = id;
var G__40991_41137 = reagent_forms.core.value_of(p1__40976_SHARP_);
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__40990_41136,G__40991_41137) : save_BANG_.call(null,G__40990_41136,G__40991_41137));

cljs.core.reset_BANG_(typeahead_hidden_QMARK_,false);

return cljs.core.reset_BANG_(selected_index,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(cljs.core.deref(selections__$1))))?(0):(-1)));
} else {
return null;
}
}),(function (p1__40977_SHARP_){
var G__40992 = p1__40977_SHARP_.which;
switch (G__40992) {
case (38):
p1__40977_SHARP_.preventDefault();

if(cljs.core.truth_((function (){var or__4185__auto__ = cljs.core.deref(typeahead_hidden_QMARK_);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (cljs.core.deref(selected_index) <= (0));
}
})())){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selected_index,cljs.core.dec);

return reagent_forms.core.scroll_to(p1__40977_SHARP_,cljs.core.deref(selected_index));
}

break;
case (40):
p1__40977_SHARP_.preventDefault();

if(cljs.core.truth_(cljs.core.deref(typeahead_hidden_QMARK_))){
cljs.core.reset_BANG_(selections__$1,(function (){var G__40993 = new cljs.core.Keyword(null,"all","all",892129742);
return (data_source.cljs$core$IFn$_invoke$arity$1 ? data_source.cljs$core$IFn$_invoke$arity$1(G__40993) : data_source.call(null,G__40993));
})());

cljs.core.reset_BANG_(selected_index,(function (){var G__40994 = clojure.string.trim(reagent_forms.core.value_of(p1__40977_SHARP_));
var G__40995 = cljs.core.deref(selections__$1);
return (get_index__$1.cljs$core$IFn$_invoke$arity$2 ? get_index__$1.cljs$core$IFn$_invoke$arity$2(G__40994,G__40995) : get_index__$1.call(null,G__40994,G__40995));
})());

cljs.core.reset_BANG_(typeahead_hidden_QMARK_,false);

return reagent_forms.core.scroll_to(p1__40977_SHARP_,cljs.core.deref(selected_index));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selected_index),(cljs.core.count(cljs.core.deref(selections__$1)) - (1)))){
return null;
} else {
var G__40996_41139 = id;
var G__40997_41140 = reagent_forms.core.value_of(p1__40977_SHARP_);
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__40996_41139,G__40997_41140) : save_BANG_.call(null,G__40996_41139,G__40997_41140));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selected_index,cljs.core.inc);

return reagent_forms.core.scroll_to(p1__40977_SHARP_,cljs.core.deref(selected_index));
}
}

break;
case (9):
return choose_selected();

break;
case (13):
p1__40977_SHARP_.preventDefault();

return choose_selected();

break;
case (27):
cljs.core.reset_BANG_(typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_(selected_index,(-1));

break;
default:
return "default";

}
})])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_((function (){var or__4185__auto__ = cljs.core.empty_QMARK_(cljs.core.deref(selections__$1));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return cljs.core.deref(typeahead_hidden_QMARK_);
}
})())?new cljs.core.Keyword(null,"none","none",1333468478):new cljs.core.Keyword(null,"block","block",664686210))], null),new cljs.core.Keyword(null,"class","class",-2030961996),list_class,new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (){
return cljs.core.reset_BANG_(mouse_on_list_QMARK_,true);
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (){
return cljs.core.reset_BANG_(mouse_on_list_QMARK_,false);
})], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,result){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tab-index","tab-index",895755393),index,new cljs.core.Keyword(null,"key","key",-1516042587),index,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selected_index),index))?highlight_class:item_class),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (p1__40978_SHARP_){
return cljs.core.reset_BANG_(selected_index,parseInt(p1__40978_SHARP_.target.getAttribute("tabIndex")));
}),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__40979_SHARP_){
p1__40979_SHARP_.preventDefault();

cljs.core.reset_BANG_(typeahead_hidden_QMARK_,true);

(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,result) : save_BANG_.call(null,id,result));

return (choice_fn.cljs$core$IFn$_invoke$arity$1 ? choice_fn.cljs$core$IFn$_invoke$arity$1(result) : choice_fn.call(null,result));
})], null),(result_fn.cljs$core$IFn$_invoke$arity$1 ? result_fn.cljs$core$IFn$_invoke$arity$1(result) : result_fn.call(null,result))], null);
}),cljs.core.deref(selections__$1)))], null)], null));
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__40799__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__40799__auto__))){
return body__40797__auto__;
} else {
return null;
}
} else {
return body__40797__auto__;
}
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"file","file",-1269645878),(function (p__40999,p__41000){
var vec__41001 = p__40999;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41001,(0),null);
var map__41004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41001,(1),null);
var map__41004__$1 = (((((!((map__41004 == null))))?(((((map__41004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41004):map__41004);
var attrs = map__41004__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41004__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__41005 = p__41000;
var map__41005__$1 = (((((!((map__41005 == null))))?(((((map__41005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41005):map__41005);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41005__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41005__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
return (function (){
var update_disabled_QMARK___40796__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__40797__auto__ = clojure.walk.postwalk((function (c__40798__auto__){
if(cljs.core.map_QMARK_(c__40798__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__40798__auto__,doc),doc),update_disabled_QMARK___40796__auto__));
} else {
return c__40798__auto__;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__40998_SHARP_){
var G__41008 = id;
var G__41009 = cljs.core.first(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(p1__40998_SHARP_.target.files));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__41008,G__41009) : save_BANG_.call(null,G__41008,G__41009));
})], null),attrs], 0))], null));
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__40799__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__40799__auto__))){
return body__40797__auto__;
} else {
return null;
}
} else {
return body__40797__auto__;
}
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"files","files",-472457450),(function (p__41011,p__41012){
var vec__41013 = p__41011;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41013,(0),null);
var map__41016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41013,(1),null);
var map__41016__$1 = (((((!((map__41016 == null))))?(((((map__41016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41016):map__41016);
var attrs = map__41016__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41016__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__41017 = p__41012;
var map__41017__$1 = (((((!((map__41017 == null))))?(((((map__41017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41017):map__41017);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41017__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41017__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
return (function (){
var update_disabled_QMARK___40796__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__40797__auto__ = clojure.walk.postwalk((function (c__40798__auto__){
if(cljs.core.map_QMARK_(c__40798__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__40798__auto__,doc),doc),update_disabled_QMARK___40796__auto__));
} else {
return c__40798__auto__;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"multiple","multiple",1244445549),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__41010_SHARP_){
var G__41020 = id;
var G__41021 = p1__41010_SHARP_.target.files;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__41020,G__41021) : save_BANG_.call(null,G__41020,G__41021));
})], null),attrs], 0))], null));
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__40799__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__40799__auto__))){
return body__40797__auto__;
} else {
return null;
}
} else {
return body__40797__auto__;
}
});
}));
reagent_forms.core.group_item = (function reagent_forms$core$group_item(p__41022,p__41023,selections,field,id){
var vec__41024 = p__41022;
var seq__41025 = cljs.core.seq(vec__41024);
var first__41026 = cljs.core.first(seq__41025);
var seq__41025__$1 = cljs.core.next(seq__41025);
var type = first__41026;
var first__41026__$1 = cljs.core.first(seq__41025__$1);
var seq__41025__$2 = cljs.core.next(seq__41025__$1);
var map__41027 = first__41026__$1;
var map__41027__$1 = (((((!((map__41027 == null))))?(((((map__41027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41027):map__41027);
var attrs = map__41027__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41027__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var touch_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41027__$1,new cljs.core.Keyword(null,"touch-event","touch-event",-1071581783));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41027__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var body = seq__41025__$2;
var map__41028 = p__41023;
var map__41028__$1 = (((((!((map__41028 == null))))?(((((map__41028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41028):map__41028);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41028__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var multi_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41028__$1,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287));
var handle_click_BANG_ = (function reagent_forms$core$group_item_$_handle_click_BANG_(){
if(cljs.core.truth_(multi_select)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(selections,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.not);

var G__41035 = id;
var G__41036 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.deref(selections)));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__41035,G__41036) : save_BANG_.call(null,G__41035,G__41036));
} else {
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selections),key);
cljs.core.reset_BANG_(selections,cljs.core.PersistentArrayMap.createAsIfByAssoc([key,cljs.core.not(value)]));

var G__41037 = id;
var G__41038 = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selections),key))?key:null);
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__41037,G__41038) : save_BANG_.call(null,G__41037,G__41038));
}
});
return (function (){
var disabled_QMARK_ = ((cljs.core.fn_QMARK_(disabled))?(disabled.cljs$core$IFn$_invoke$arity$0 ? disabled.cljs$core$IFn$_invoke$arity$0() : disabled.call(null)):disabled);
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selections),key);
var button_or_input_QMARK_ = (function (){var t = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(cljs.core.name(type),(0),(5));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"butto")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"input")));
})();
var class$ = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(active_QMARK_)?"active":null),(cljs.core.truth_((function (){var and__4174__auto__ = disabled_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return (!(button_or_input_QMARK_));
} else {
return and__4174__auto__;
}
})())?"disabled":null)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"class","class",-2030961996),class$,(function (){var or__4185__auto__ = touch_event;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),(cljs.core.truth_(disabled_QMARK_)?null:handle_click_BANG_)]),reagent_forms.core.clean_attrs(attrs),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_], null)], 0)),((button_or_input_QMARK_)?null:new cljs.core.Keyword(null,"disabled","disabled",-1529784218))),body], null);
});
});
reagent_forms.core.mk_selections = (function reagent_forms$core$mk_selections(id,selectors,p__41039){
var map__41040 = p__41039;
var map__41040__$1 = (((((!((map__41040 == null))))?(((((map__41040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41040):map__41040);
var ks = map__41040__$1;
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41040__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var multi_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41040__$1,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287));
var value = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__41042){
var vec__41043 = p__41042;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41043,(0),null);
var map__41046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41043,(1),null);
var map__41046__$1 = (((((!((map__41046 == null))))?(((((map__41046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41046):map__41046);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41046__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,cljs.core.boolean$(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([key]),(cljs.core.truth_(multi_select)?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)))));
}),cljs.core.PersistentArrayMap.EMPTY,selectors);
});
/**
 * selectors might be passed in inline or as a collection
 */
reagent_forms.core.extract_selectors = (function reagent_forms$core$extract_selectors(selectors){
if((cljs.core.ffirst(selectors) instanceof cljs.core.Keyword)){
return selectors;
} else {
return cljs.core.first(selectors);
}
});
reagent_forms.core.selection_group = (function reagent_forms$core$selection_group(p__41050,p__41051){
var vec__41052 = p__41050;
var seq__41053 = cljs.core.seq(vec__41052);
var first__41054 = cljs.core.first(seq__41053);
var seq__41053__$1 = cljs.core.next(seq__41053);
var type = first__41054;
var first__41054__$1 = cljs.core.first(seq__41053__$1);
var seq__41053__$2 = cljs.core.next(seq__41053__$1);
var map__41055 = first__41054__$1;
var map__41055__$1 = (((((!((map__41055 == null))))?(((((map__41055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41055):map__41055);
var attrs = map__41055__$1;
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41055__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41055__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var selection_items = seq__41053__$2;
var map__41056 = p__41051;
var map__41056__$1 = (((((!((map__41056 == null))))?(((((map__41056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41056.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41056):map__41056);
var opts = map__41056__$1;
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41056__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41056__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var selection_items__$1 = reagent_forms.core.extract_selectors(selection_items);
var selections = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(reagent_forms.core.mk_selections(id,selection_items__$1,opts));
var selectors = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visible?","visible?",2129863715),new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second(item)),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.group_item(item,opts,selections,field,id)], null)], null);
}),selection_items__$1);
return (function (){
if(cljs.core.truth_((get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selections,(function (p1__41048_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__41059){
var vec__41060 = p__41059;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41060,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null);
}),p1__41048_SHARP_));
}));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,reagent_forms.core.clean_attrs(attrs)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"selector","selector",762528866),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__41049_SHARP_){
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(p1__41049_SHARP_);
if(cljs.core.truth_(temp__5733__auto__)){
var visible_QMARK_ = temp__5733__auto__;
return reagent_forms.core.call_attr(doc,visible_QMARK_);
} else {
return true;
}
}),selectors)));
});
});
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"single-select","single-select",1327691774),(function (p__41063,p__41064){
var vec__41065 = p__41063;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41065,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41065,(1),null);
var field = vec__41065;
var map__41068 = p__41064;
var map__41068__$1 = (((((!((map__41068 == null))))?(((((map__41068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41068):map__41068);
var opts = map__41068__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41068__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return (function (){
var update_disabled_QMARK___40796__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__40797__auto__ = clojure.walk.postwalk((function (c__40798__auto__){
if(cljs.core.map_QMARK_(c__40798__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__40798__auto__,doc),doc),update_disabled_QMARK___40796__auto__));
} else {
return c__40798__auto__;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null));
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__40799__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__40799__auto__))){
return body__40797__auto__;
} else {
return null;
}
} else {
return body__40797__auto__;
}
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),(function (p__41070,p__41071){
var vec__41072 = p__41070;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41072,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41072,(1),null);
var field = vec__41072;
var map__41075 = p__41071;
var map__41075__$1 = (((((!((map__41075 == null))))?(((((map__41075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41075):map__41075);
var opts = map__41075__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41075__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return (function (){
var update_disabled_QMARK___40796__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__40797__auto__ = clojure.walk.postwalk((function (c__40798__auto__){
if(cljs.core.map_QMARK_(c__40798__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__40798__auto__,doc),doc),update_disabled_QMARK___40796__auto__));
} else {
return c__40798__auto__;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),true)], null));
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__40799__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__40799__auto__))){
return body__40797__auto__;
} else {
return null;
}
} else {
return body__40797__auto__;
}
});
}));
reagent_forms.core.map_options = (function reagent_forms$core$map_options(options){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reagent_forms$core$map_options_$_iter__41077(s__41078){
return (new cljs.core.LazySeq(null,(function (){
var s__41078__$1 = s__41078;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41078__$1);
if(temp__5735__auto__){
var s__41078__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41078__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__41078__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__41080 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__41079 = (0);
while(true){
if((i__41079 < size__4581__auto__)){
var vec__41081 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__41079);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41081,(0),null);
var map__41084 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41081,(1),null);
var map__41084__$1 = (((((!((map__41084 == null))))?(((((map__41084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41084):map__41084);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41084__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41081,(2),null);
cljs.core.chunk_append(b__41080,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),key], null));

var G__41141 = (i__41079 + (1));
i__41079 = G__41141;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41080),reagent_forms$core$map_options_$_iter__41077(cljs.core.chunk_rest(s__41078__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41080),null);
}
} else {
var vec__41086 = cljs.core.first(s__41078__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41086,(0),null);
var map__41089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41086,(1),null);
var map__41089__$1 = (((((!((map__41089 == null))))?(((((map__41089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41089):map__41089);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41089__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41086,(2),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),key], null),reagent_forms$core$map_options_$_iter__41077(cljs.core.rest(s__41078__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(options);
})());
});
reagent_forms.core.default_selection = (function reagent_forms$core$default_selection(options,v){
return cljs.core.last(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__41091_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__41091_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"key","key",-1516042587)], null)));
}),options)));
});
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"list","list",765357683),(function (p__41094,p__41095){
var vec__41096 = p__41094;
var seq__41097 = cljs.core.seq(vec__41096);
var first__41098 = cljs.core.first(seq__41097);
var seq__41097__$1 = cljs.core.next(seq__41097);
var type = first__41098;
var first__41098__$1 = cljs.core.first(seq__41097__$1);
var seq__41097__$2 = cljs.core.next(seq__41097__$1);
var map__41099 = first__41098__$1;
var map__41099__$1 = (((((!((map__41099 == null))))?(((((map__41099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41099):map__41099);
var attrs = map__41099__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41099__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var options = seq__41097__$2;
var map__41100 = p__41095;
var map__41100__$1 = (((((!((map__41100 == null))))?(((((map__41100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41100):map__41100);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41100__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41100__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41100__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var options__$1 = reagent_forms.core.extract_selectors(options);
var options_lookup = reagent_forms.core.map_options(options__$1);
var selection = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.first(options__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
}
})());
var G__41103_41142 = id;
var G__41104_41143 = cljs.core.deref(selection);
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__41103_41142,G__41104_41143) : save_BANG_.call(null,G__41103_41142,G__41104_41143));

return (function (){
var update_disabled_QMARK___40796__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__40797__auto__ = clojure.walk.postwalk((function (c__40798__auto__){
if(cljs.core.map_QMARK_(c__40798__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__40798__auto__,doc),doc),update_disabled_QMARK___40796__auto__));
} else {
return c__40798__auto__;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-value","default-value",232220170),reagent_forms.core.default_selection(options__$1,cljs.core.deref(selection)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__41092_SHARP_){
var G__41105 = id;
var G__41106 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options_lookup,reagent_forms.core.value_of(p1__41092_SHARP_));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__41105,G__41106) : save_BANG_.call(null,G__41105,G__41106));
})], null)], 0)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__41093_SHARP_){
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__41093_SHARP_));
if(cljs.core.truth_(temp__5733__auto__)){
var visible = temp__5733__auto__;
return reagent_forms.core.call_attr(doc,visible);
} else {
return true;
}
}),options__$1))], null));
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__40799__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__40799__auto__))){
return body__40797__auto__;
} else {
return null;
}
} else {
return body__40797__auto__;
}
});
}));
reagent_forms.core.field_QMARK_ = (function reagent_forms$core$field_QMARK_(node){
return ((cljs.core.coll_QMARK_(node)) && (cljs.core.map_QMARK_(cljs.core.second(node))) && (cljs.core.contains_QMARK_(cljs.core.second(node),new cljs.core.Keyword(null,"field","field",-1302436500))));
});
reagent_forms.core.make_form = (function reagent_forms$core$make_form(form,opts){
return clojure.walk.postwalk((function (node){
if(reagent_forms.core.field_QMARK_(node)){
var opts__$1 = reagent_forms.core.wrap_fns(opts,node);
var field = (reagent_forms.core.init_field.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.init_field.cljs$core$IFn$_invoke$arity$2(node,opts__$1) : reagent_forms.core.init_field.call(null,node,opts__$1));
if(cljs.core.fn_QMARK_(field)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null);
} else {
return field;
}
} else {
return node;
}
}),form);
});
if((typeof reagent_forms !== 'undefined') && (typeof reagent_forms.core !== 'undefined') && (typeof reagent_forms.core.bind_fields !== 'undefined')){
} else {
/**
 * Creates data bindings between the form fields and the supplied atom or calls
 *         the supplied functions (when `doc` is a map) on events triggered by fields.
 *         form - the form template with the fields
 *         doc - the document that the fields will be bound to
 *         events - any events that should be triggered when the document state changes
 */
reagent_forms.core.bind_fields = (function (){var method_table__4672__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__41107 = cljs.core.get_global_hierarchy;
return (fexpr__41107.cljs$core$IFn$_invoke$arity$0 ? fexpr__41107.cljs$core$IFn$_invoke$arity$0() : fexpr__41107.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","bind-fields"),(function() { 
var G__41144__delegate = function (_,doc,___$1){
return cljs.core.type(doc);
};
var G__41144 = function (_,doc,var_args){
var ___$1 = null;
if (arguments.length > 2) {
var G__41145__i = 0, G__41145__a = new Array(arguments.length -  2);
while (G__41145__i < G__41145__a.length) {G__41145__a[G__41145__i] = arguments[G__41145__i + 2]; ++G__41145__i;}
  ___$1 = new cljs.core.IndexedSeq(G__41145__a,0,null);
} 
return G__41144__delegate.call(this,_,doc,___$1);};
G__41144.cljs$lang$maxFixedArity = 2;
G__41144.cljs$lang$applyTo = (function (arglist__41146){
var _ = cljs.core.first(arglist__41146);
arglist__41146 = cljs.core.next(arglist__41146);
var doc = cljs.core.first(arglist__41146);
var ___$1 = cljs.core.rest(arglist__41146);
return G__41144__delegate(_,doc,___$1);
});
G__41144.cljs$core$IFn$_invoke$arity$variadic = G__41144__delegate;
return G__41144;
})()
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
reagent_forms.core.bind_fields.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.PersistentArrayMap,(function (form,opts){
var form__$1 = reagent_forms.core.make_form(form,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"get","get",1683182755),(function (get){
return (function (id){
var G__41108 = (reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1 ? reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1(id) : reagent_forms.core.id__GT_path.call(null,id));
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__41108) : get.call(null,G__41108));
});
})),new cljs.core.Keyword(null,"save!","save!",-1137373803),(function (save_BANG_){
return (function (id,value){
var G__41109 = (reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1 ? reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1(id) : reagent_forms.core.id__GT_path.call(null,id));
var G__41110 = value;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__41109,G__41110) : save_BANG_.call(null,G__41109,G__41110));
});
})),new cljs.core.Keyword(null,"update!","update!",-1453508586),(function (update_BANG_){
return (function (id,save_fn,value){
var G__41111 = (reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1 ? reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1(id) : reagent_forms.core.id__GT_path.call(null,id));
var G__41112 = save_fn;
var G__41113 = value;
return (update_BANG_.cljs$core$IFn$_invoke$arity$3 ? update_BANG_.cljs$core$IFn$_invoke$arity$3(G__41111,G__41112,G__41113) : update_BANG_.call(null,G__41111,G__41112,G__41113));
});
})));
return (function (){
return form__$1;
});
}));
reagent_forms.core.bind_fields.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__41147__delegate = function (form,doc,events){
var opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"get","get",1683182755),(function (p1__41114_SHARP_){
return cljs.core.deref((reagent_forms.core.cursor_for_id.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.cursor_for_id.cljs$core$IFn$_invoke$arity$2(doc,p1__41114_SHARP_) : reagent_forms.core.cursor_for_id.call(null,doc,p1__41114_SHARP_)));
}),new cljs.core.Keyword(null,"save!","save!",-1137373803),reagent_forms.core.mk_save_fn(doc,events),new cljs.core.Keyword(null,"update!","update!",-1453508586),reagent_forms.core.mk_update_fn(doc,events)], null);
var form__$1 = reagent_forms.core.make_form(form,opts);
return (function (){
return form__$1;
});
};
var G__41147 = function (form,doc,var_args){
var events = null;
if (arguments.length > 2) {
var G__41148__i = 0, G__41148__a = new Array(arguments.length -  2);
while (G__41148__i < G__41148__a.length) {G__41148__a[G__41148__i] = arguments[G__41148__i + 2]; ++G__41148__i;}
  events = new cljs.core.IndexedSeq(G__41148__a,0,null);
} 
return G__41147__delegate.call(this,form,doc,events);};
G__41147.cljs$lang$maxFixedArity = 2;
G__41147.cljs$lang$applyTo = (function (arglist__41149){
var form = cljs.core.first(arglist__41149);
arglist__41149 = cljs.core.next(arglist__41149);
var doc = cljs.core.first(arglist__41149);
var events = cljs.core.rest(arglist__41149);
return G__41147__delegate(form,doc,events);
});
G__41147.cljs$core$IFn$_invoke$arity$variadic = G__41147__delegate;
return G__41147;
})()
);

//# sourceMappingURL=reagent_forms.core.js.map
