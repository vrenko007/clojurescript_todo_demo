goog.provide('cljs_time.coerce');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('cljs_time.format');
goog.require('goog.date.UtcDateTime');

/**
 * @interface
 */
cljs_time.coerce.ICoerce = function(){};

/**
 * Convert `obj` to a goog.date.DateTime instance.
 */
cljs_time.coerce.to_date_time = (function cljs_time$coerce$to_date_time(obj){
if((((!((obj == null)))) && ((!((obj.cljs_time$coerce$ICoerce$to_date_time$arity$1 == null)))))){
return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1(obj);
} else {
var x__4487__auto__ = (((obj == null))?null:obj);
var m__4488__auto__ = (cljs_time.coerce.to_date_time[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__4488__auto__.call(null,obj));
} else {
var m__4485__auto__ = (cljs_time.coerce.to_date_time["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__4485__auto__.call(null,obj));
} else {
throw cljs.core.missing_protocol("ICoerce.to-date-time",obj);
}
}
}
});

/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.from_long = (function cljs_time$coerce$from_long(millis){
var G__53970 = millis;
if((G__53970 == null)){
return null;
} else {
return (goog.date.UtcDateTime.fromTimestamp.cljs$core$IFn$_invoke$arity$1 ? goog.date.UtcDateTime.fromTimestamp.cljs$core$IFn$_invoke$arity$1(G__53970) : goog.date.UtcDateTime.fromTimestamp.call(null,G__53970));
}
});
/**
 * Returns DateTime instance from string using formatters in cljs-time.format,
 *   returning first which parses
 */
cljs_time.coerce.from_string = (function cljs_time$coerce$from_string(s){
if(cljs.core.truth_(s)){
return cljs.core.first((function (){var iter__4582__auto__ = (function cljs_time$coerce$from_string_$_iter__53971(s__53972){
return (new cljs.core.LazySeq(null,(function (){
var s__53972__$1 = s__53972;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__53972__$1);
if(temp__5735__auto__){
var s__53972__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53972__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__53972__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__53974 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__53973 = (0);
while(true){
if((i__53973 < size__4581__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__53973);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e53975){if((e53975 instanceof Error)){
var _ = e53975;
return null;
} else {
throw e53975;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__53974,d);

var G__54021 = (i__53973 + (1));
i__53973 = G__54021;
continue;
} else {
var G__54022 = (i__53973 + (1));
i__53973 = G__54022;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53974),cljs_time$coerce$from_string_$_iter__53971(cljs.core.chunk_rest(s__53972__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53974),null);
}
} else {
var f = cljs.core.first(s__53972__$2);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e53977){if((e53977 instanceof Error)){
var _ = e53977;
return null;
} else {
throw e53977;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$coerce$from_string_$_iter__53971(cljs.core.rest(s__53972__$2)));
} else {
var G__54024 = cljs.core.rest(s__53972__$2);
s__53972__$1 = G__54024;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
} else {
return null;
}
});
/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   js Date object.
 */
cljs_time.coerce.from_date = (function cljs_time$coerce$from_date(date){
var G__53982 = date;
var G__53982__$1 = (((G__53982 == null))?null:G__53982.getTime());
if((G__53982__$1 == null)){
return null;
} else {
return cljs_time.coerce.from_long(G__53982__$1);
}
});
/**
 * Convert `obj` to the number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.to_long = (function cljs_time$coerce$to_long(obj){
var G__53983 = obj;
var G__53983__$1 = (((G__53983 == null))?null:cljs_time.coerce.to_date_time(G__53983));
if((G__53983__$1 == null)){
return null;
} else {
return G__53983__$1.getTime();
}
});
/**
 * Convert `obj` to Unix epoch.
 */
cljs_time.coerce.to_epoch = (function cljs_time$coerce$to_epoch(obj){
var millis = cljs_time.coerce.to_long(obj);
var and__4174__auto__ = millis;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.quot(millis,(1000));
} else {
return and__4174__auto__;
}
});
/**
 * Convert `obj` to a JavaScript Date instance.
 */
cljs_time.coerce.to_date = (function cljs_time$coerce$to_date(obj){
var G__53990 = obj;
var G__53990__$1 = (((G__53990 == null))?null:cljs_time.coerce.to_date_time(G__53990));
var G__53990__$2 = (((G__53990__$1 == null))?null:G__53990__$1.getTime());
if((G__53990__$2 == null)){
return null;
} else {
return (new Date(G__53990__$2));
}
});
/**
 * Returns a string representation of obj in UTC time-zone
 *   using "yyyy-MM-dd'T'HH:mm:ss.SSSZZ" date-time representation.
 */
cljs_time.coerce.to_string = (function cljs_time$coerce$to_string(obj){
var G__53991 = obj;
var G__53991__$1 = (((G__53991 == null))?null:cljs_time.coerce.to_date_time(G__53991));
if((G__53991__$1 == null)){
return null;
} else {
return cljs_time.format.unparse(new cljs.core.Keyword(null,"date-time","date-time",177938180).cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),G__53991__$1);
}
});
/**
 * Convert `obj` to a goog.date.Date instance
 */
cljs_time.coerce.to_local_date = (function cljs_time$coerce$to_local_date(obj){
if(cljs.core.truth_(obj)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.date.Date,cljs.core.type(obj))){
return obj;
} else {
var temp__5733__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__5733__auto__)){
var dt = temp__5733__auto__;
return (new goog.date.Date(dt.getYear(),dt.getMonth(),dt.getDate()));
} else {
return null;
}
}
} else {
return null;
}
});
/**
 * Convert `obj` to a goog.date.DateTime instance
 */
cljs_time.coerce.to_local_date_time = (function cljs_time$coerce$to_local_date_time(obj){
if(cljs.core.truth_(obj)){
var temp__5733__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__5733__auto__)){
var dt = temp__5733__auto__;
var G__53993 = (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate()));
G__53993.setHours(dt.getHours());

G__53993.setMinutes(dt.getMinutes());

G__53993.setSeconds(dt.getSeconds());

G__53993.setMilliseconds(dt.getMilliseconds());

return G__53993;
} else {
return null;
}
} else {
return null;
}
});
goog.object.set(cljs_time.coerce.ICoerce,"null",true);

var G__53995_54033 = cljs_time.coerce.to_date_time;
var G__53996_54034 = "null";
var G__53997_54035 = (function (_){
return null;
});
goog.object.set(G__53995_54033,G__53996_54034,G__53997_54035);

(Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date){
var date__$1 = this;
return cljs_time.coerce.from_date(date__$1);
}));

(goog.date.Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date){
var local_date__$1 = this;
if(cljs.core.truth_(local_date__$1)){
return cljs_time.core.to_utc_time_zone(local_date__$1);
} else {
return null;
}
}));

(goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date_time){
var local_date_time__$1 = this;
if(cljs.core.truth_(local_date_time__$1)){
return cljs_time.core.to_utc_time_zone(local_date_time__$1);
} else {
return null;
}
}));

(goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date_time){
var date_time__$1 = this;
return date_time__$1;
}));

goog.object.set(cljs_time.coerce.ICoerce,"number",true);

var G__54008_54036 = cljs_time.coerce.to_date_time;
var G__54009_54037 = "number";
var G__54010_54038 = (function (long$){
return cljs_time.coerce.from_long(long$);
});
goog.object.set(G__54008_54036,G__54009_54037,G__54010_54038);

goog.object.set(cljs_time.coerce.ICoerce,"string",true);

var G__54011_54039 = cljs_time.coerce.to_date_time;
var G__54012_54040 = "string";
var G__54013_54041 = (function (string){
return cljs_time.coerce.from_string(string);
});
goog.object.set(G__54011_54039,G__54012_54040,G__54013_54041);

//# sourceMappingURL=cljs_time.coerce.js.map
