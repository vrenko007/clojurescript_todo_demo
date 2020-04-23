goog.provide('todo_fechapter.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('todo_fechapter.events');
goog.require('todo_fechapter.routes');
goog.require('todo_fechapter.views');
goog.require('todo_fechapter.config');
goog.require('day8.re_frame.http_fx');
todo_fechapter.core.dev_setup = (function todo_fechapter$core$dev_setup(){
if(todo_fechapter.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
todo_fechapter.core.mount_root = (function todo_fechapter$core$mount_root(){
(re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0 ? re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0() : re_frame.core.clear_subscription_cache_BANG_.call(null));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo_fechapter.views.main_panel], null),document.getElementById("app"));
});
todo_fechapter.core.init = (function todo_fechapter$core$init(){
todo_fechapter.routes.app_routes();

var G__43604_43606 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo-fechapter.events","initialize-db","todo-fechapter.events/initialize-db",-656702816)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__43604_43606) : re_frame.core.dispatch_sync.call(null,G__43604_43606));

todo_fechapter.core.dev_setup();

return todo_fechapter.core.mount_root();
});

//# sourceMappingURL=todo_fechapter.core.js.map
