goog.provide('todo_fechapter.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('todo_fechapter.db');
goog.require('ajax.core');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("todo-fechapter.events","initialize-db","todo-fechapter.events/initialize-db",-656702816),(function (_,___$1){
return todo_fechapter.db.default_db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("todo-fechapter.events","set-active-panel","todo-fechapter.events/set-active-panel",-1550518036),(function (db,p__41811){
var vec__41812 = p__41811;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41812,(0),null);
var active_panel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41812,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("todo-fechapter.events","current-todo-id","todo-fechapter.events/current-todo-id",-2031193196),(function (db,p__41815){
var vec__41816 = p__41815;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41816,(0),null);
var todo_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41816,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-todo-id","current-todo-id",571820180),todo_id);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("todo-fechapter.events","toggle-complete","todo-fechapter.events/toggle-complete",2053271317),(function (db,p__41819){
var vec__41820 = p__41819;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41820,(0),null);
var map__41823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41820,(1),null);
var map__41823__$1 = (((((!((map__41823 == null))))?(((((map__41823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41823):map__41823);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41823__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var completed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41823__$1,new cljs.core.Keyword(null,"completed","completed",-486056503));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"todos","todos",630308868),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (todo){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((id | (0)),(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo) | (0)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(todo,new cljs.core.Keyword(null,"completed","completed",-486056503),completed);
} else {
return todo;
}
}),new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(db))));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("todo-fechapter.events","new-todo","todo-fechapter.events/new-todo",-465384420),(function (db,p__41825){
var vec__41826 = p__41825;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41826,(0),null);
var map__41829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41826,(1),null);
var map__41829__$1 = (((((!((map__41829 == null))))?(((((map__41829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41829):map__41829);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41829__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41829__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
todo_fechapter.events.new_db = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"todos","todos",630308868),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"next-todo-id","next-todo-id",-1087392093).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"description","description",-1428560544),description,new cljs.core.Keyword(null,"completed","completed",-486056503),false], null)));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(todo_fechapter.events.new_db,new cljs.core.Keyword(null,"next-todo-id","next-todo-id",-1087392093),(new cljs.core.Keyword(null,"next-todo-id","next-todo-id",-1087392093).cljs$core$IFn$_invoke$arity$1(db) + (1)));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("todo-fechapter.events","get-weather","todo-fechapter.events/get-weather",-1131798134),(function (p__41831,_){
var map__41832 = p__41831;
var map__41832__$1 = (((((!((map__41832 == null))))?(((((map__41832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41832):map__41832);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41832__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"show-twirly","show-twirly",1191467838),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"https://api.openweathermap.org/data/2.5/weather?q=Ljubljana&appid=bae59abd29656ca9e830d09f04c2cc26&units=metric",new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"response-format","response-format",1664465322),(function (){var G__41834 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null);
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__41834) : ajax.core.json_response_format.call(null,G__41834));
})(),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo-fechapter.events","got-weather","todo-fechapter.events/got-weather",-1616086545)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("todo-fechapter.events","got-weather","todo-fechapter.events/got-weather",-1616086545),(function (db,p__41835){
var vec__41836 = p__41835;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41836,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41836,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"weather","weather",1320452344),result);
}));

//# sourceMappingURL=todo_fechapter.events.js.map
