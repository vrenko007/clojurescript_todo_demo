goog.provide('todo_fechapter.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('goog.history.EventType');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('re_frame.core');
goog.require('todo_fechapter.events');
todo_fechapter.routes.hook_browser_navigation_BANG_ = (function todo_fechapter$routes$hook_browser_navigation_BANG_(){
var G__41839 = (new goog.History());
var G__41840_41901 = G__41839;
var G__41841_41902 = goog.history.EventType.NAVIGATE;
var G__41842_41903 = (function (event){
return secretary.core.dispatch_BANG_(event.token);
});
goog.events.listen(G__41840_41901,G__41841_41902,G__41842_41903);

G__41839.setEnabled(true);

return G__41839;
});
todo_fechapter.routes.app_routes = (function todo_fechapter$routes$app_routes(){
secretary.core.set_config_BANG_(new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__40976__auto___41906 = (function (params__40977__auto__){
if(cljs.core.map_QMARK_(params__40977__auto__)){
var map__41846 = params__40977__auto__;
var map__41846__$1 = (((((!((map__41846 == null))))?(((((map__41846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41846):map__41846);
var G__41848 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo-fechapter.events","set-active-panel","todo-fechapter.events/set-active-panel",-1550518036),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41848) : re_frame.core.dispatch.call(null,G__41848));
} else {
if(cljs.core.vector_QMARK_(params__40977__auto__)){
var vec__41855 = params__40977__auto__;
var G__41858 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo-fechapter.events","set-active-panel","todo-fechapter.events/set-active-panel",-1550518036),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41858) : re_frame.core.dispatch.call(null,G__41858));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__40976__auto___41906);


var action__40976__auto___41908 = (function (params__40977__auto__){
if(cljs.core.map_QMARK_(params__40977__auto__)){
var map__41860 = params__40977__auto__;
var map__41860__$1 = (((((!((map__41860 == null))))?(((((map__41860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41860):map__41860);
var G__41862 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo-fechapter.events","set-active-panel","todo-fechapter.events/set-active-panel",-1550518036),new cljs.core.Keyword(null,"new-panel","new-panel",25022285)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41862) : re_frame.core.dispatch.call(null,G__41862));
} else {
if(cljs.core.vector_QMARK_(params__40977__auto__)){
var vec__41863 = params__40977__auto__;
var G__41866 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo-fechapter.events","set-active-panel","todo-fechapter.events/set-active-panel",-1550518036),new cljs.core.Keyword(null,"new-panel","new-panel",25022285)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41866) : re_frame.core.dispatch.call(null,G__41866));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/new",action__40976__auto___41908);


var action__40976__auto___41910 = (function (params__40977__auto__){
if(cljs.core.map_QMARK_(params__40977__auto__)){
var map__41867 = params__40977__auto__;
var map__41867__$1 = (((((!((map__41867 == null))))?(((((map__41867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41867):map__41867);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41867__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var G__41872_41914 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo-fechapter.events","current-todo-id","todo-fechapter.events/current-todo-id",-2031193196),id], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41872_41914) : re_frame.core.dispatch.call(null,G__41872_41914));

var G__41873 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo-fechapter.events","set-active-panel","todo-fechapter.events/set-active-panel",-1550518036),new cljs.core.Keyword(null,"todo-panel","todo-panel",-678509962)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41873) : re_frame.core.dispatch.call(null,G__41873));
} else {
if(cljs.core.vector_QMARK_(params__40977__auto__)){
var vec__41874 = params__40977__auto__;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41874,(0),null);
var G__41877_41915 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo-fechapter.events","current-todo-id","todo-fechapter.events/current-todo-id",-2031193196),id], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41877_41915) : re_frame.core.dispatch.call(null,G__41877_41915));

var G__41879 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo-fechapter.events","set-active-panel","todo-fechapter.events/set-active-panel",-1550518036),new cljs.core.Keyword(null,"todo-panel","todo-panel",-678509962)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41879) : re_frame.core.dispatch.call(null,G__41879));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/todos/:id",action__40976__auto___41910);


var action__40976__auto___41916 = (function (params__40977__auto__){
if(cljs.core.map_QMARK_(params__40977__auto__)){
var map__41882 = params__40977__auto__;
var map__41882__$1 = (((((!((map__41882 == null))))?(((((map__41882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41882):map__41882);
var G__41884 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo-fechapter.events","set-active-panel","todo-fechapter.events/set-active-panel",-1550518036),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41884) : re_frame.core.dispatch.call(null,G__41884));
} else {
if(cljs.core.vector_QMARK_(params__40977__auto__)){
var vec__41885 = params__40977__auto__;
var G__41888 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo-fechapter.events","set-active-panel","todo-fechapter.events/set-active-panel",-1550518036),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41888) : re_frame.core.dispatch.call(null,G__41888));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/about",action__40976__auto___41916);


var action__40976__auto___41918 = (function (params__40977__auto__){
if(cljs.core.map_QMARK_(params__40977__auto__)){
var map__41889 = params__40977__auto__;
var map__41889__$1 = (((((!((map__41889 == null))))?(((((map__41889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41889):map__41889);
var G__41891_41919 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo-fechapter.events","get-weather","todo-fechapter.events/get-weather",-1131798134)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41891_41919) : re_frame.core.dispatch.call(null,G__41891_41919));

var G__41893 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo-fechapter.events","set-active-panel","todo-fechapter.events/set-active-panel",-1550518036),new cljs.core.Keyword(null,"weather-panel","weather-panel",2053021669)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41893) : re_frame.core.dispatch.call(null,G__41893));
} else {
if(cljs.core.vector_QMARK_(params__40977__auto__)){
var vec__41894 = params__40977__auto__;
var G__41897_41920 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo-fechapter.events","get-weather","todo-fechapter.events/get-weather",-1131798134)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41897_41920) : re_frame.core.dispatch.call(null,G__41897_41920));

var G__41898 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo-fechapter.events","set-active-panel","todo-fechapter.events/set-active-panel",-1550518036),new cljs.core.Keyword(null,"weather-panel","weather-panel",2053021669)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41898) : re_frame.core.dispatch.call(null,G__41898));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/weather",action__40976__auto___41918);


return todo_fechapter.routes.hook_browser_navigation_BANG_();
});

//# sourceMappingURL=todo_fechapter.routes.js.map
