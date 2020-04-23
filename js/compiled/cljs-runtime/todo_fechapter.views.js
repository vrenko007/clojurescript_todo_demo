goog.provide('todo_fechapter.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_com.core');
goog.require('reagent.core');
goog.require('reagent_forms.core');
goog.require('secretary.core');
goog.require('todo_fechapter.subs');
goog.require('todo_fechapter.events');
todo_fechapter.views.set_hash_BANG_ = (function todo_fechapter$views$set_hash_BANG_(loc){
return (window.location.hash = loc);
});
todo_fechapter.views.todo_row = (function todo_fechapter$views$todo_row(p__43575){
var map__43576 = p__43575;
var map__43576__$1 = (((((!((map__43576 == null))))?(((((map__43576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43576):map__43576);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43576__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43576__$1,new cljs.core.Keyword(null,"title","title",636505583));
var completed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43576__$1,new cljs.core.Keyword(null,"completed","completed",-486056503));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink_href,new cljs.core.Keyword(null,"class","class",-2030961996),"todo",new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),title], null),new cljs.core.Keyword(null,"href","href",-793805698),["#/todos/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null);
});
todo_fechapter.views.add_todo_row = (function todo_fechapter$views$add_todo_row(){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"class","class",-2030961996),"new-todo",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"larger","larger",1304935444),new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-plus",new cljs.core.Keyword(null,"emphasise?","emphasise?",1618294247),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return todo_fechapter.views.set_hash_BANG_("#/new");
})], null);
});
todo_fechapter.views.link_to_weather_page = (function todo_fechapter$views$link_to_weather_page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink_href,new cljs.core.Keyword(null,"label","label",1718410804),"Check Weather in Ljubljana",new cljs.core.Keyword(null,"href","href",-793805698),"#/weather"], null);
});
todo_fechapter.views.home_data = (function todo_fechapter$views$home_data(){
var todos = (function (){var G__43584 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo-fechapter.subs","todos","todo-fechapter.subs/todos",1774654298)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43584) : re_frame.core.subscribe.call(null,G__43584));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"between","between",1131099276),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"To Do",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo_fechapter.views.add_todo_row], null)], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (todo){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo_fechapter.views.todo_row,todo], null);
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"id","id",-1388402092),(function (p1__43579_SHARP_,p2__43578_SHARP_){
return cljs.core.compare(p2__43578_SHARP_,p1__43579_SHARP_);
}),cljs.core.filterv((function (p1__43580_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"completed","completed",-486056503).cljs$core$IFn$_invoke$arity$1(p1__43580_SHARP_),false);
}),cljs.core.deref(todos)))),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Completed",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (todo){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo_fechapter.views.todo_row,todo], null);
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"id","id",-1388402092),(function (p1__43582_SHARP_,p2__43581_SHARP_){
return cljs.core.compare(p2__43581_SHARP_,p1__43582_SHARP_);
}),cljs.core.filterv((function (p1__43583_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"completed","completed",-486056503).cljs$core$IFn$_invoke$arity$1(p1__43583_SHARP_),true);
}),cljs.core.deref(todos))))], null)], null);
});
todo_fechapter.views.home_panel = (function todo_fechapter$views$home_panel(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"1em",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo_fechapter.views.home_data], null)], null)], null);
});
todo_fechapter.views.todo_info = (function todo_fechapter$views$todo_info(p__43585){
var map__43586 = p__43585;
var map__43586__$1 = (((((!((map__43586 == null))))?(((((map__43586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43586):map__43586);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43586__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43586__$1,new cljs.core.Keyword(null,"title","title",636505583));
var completed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43586__$1,new cljs.core.Keyword(null,"completed","completed",-486056503));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43586__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"todo-details",new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"description"], null),description], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),"todo-actions",new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),(cljs.core.truth_(completed)?"Not Done":"Done"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__43588_43605 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo-fechapter.events","toggle-complete","todo-fechapter.events/toggle-complete",2053271317),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"completed","completed",-486056503),cljs.core.not(completed)], null)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43588_43605) : re_frame.core.dispatch.call(null,G__43588_43605));

return todo_fechapter.views.set_hash_BANG_("/");
})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Back",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return todo_fechapter.views.set_hash_BANG_("/");
})], null)], null)], null)], null)], null);
});
todo_fechapter.views.todo_data = (function todo_fechapter$views$todo_data(){
var todos = (function (){var G__43589 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo-fechapter.subs","todos","todo-fechapter.subs/todos",1774654298)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43589) : re_frame.core.subscribe.call(null,G__43589));
})();
var current_todo_id = (function (){var G__43590 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo-fechapter.subs","current-todo-id","todo-fechapter.subs/current-todo-id",-1765803366)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43590) : re_frame.core.subscribe.call(null,G__43590));
})();
todo_fechapter.views.find_id = cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (id,todo){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((id | (0)),(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo) | (0)));
}),cljs.core.deref(current_todo_id));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (todo){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo_fechapter.views.todo_info,todo], null);
}),cljs.core.filterv(todo_fechapter.views.find_id,cljs.core.deref(todos)))], null);
});
todo_fechapter.views.link_to_home_page = (function todo_fechapter$views$link_to_home_page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink_href,new cljs.core.Keyword(null,"label","label",1718410804),"go to Home Page",new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null);
});
todo_fechapter.views.todo_panel = (function todo_fechapter$views$todo_panel(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"1em",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo_fechapter.views.todo_data], null)], null)], null);
});
todo_fechapter.views.form_template = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"Title"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"title","title",636505583)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"Description"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"description","description",-1428560544)], null)], null)], null)], null);
todo_fechapter.views.new_info = (function todo_fechapter$views$new_info(){
var doc = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"description","description",-1428560544),""], null));
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.bind_fields,todo_fechapter.views.form_template,doc], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Save",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__43591_43607 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo-fechapter.events","new-todo","todo-fechapter.events/new-todo",-465384420),cljs.core.deref(doc)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43591_43607) : re_frame.core.dispatch.call(null,G__43591_43607));

return todo_fechapter.views.set_hash_BANG_("/");
})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Back",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return todo_fechapter.views.set_hash_BANG_("/");
})], null)], null)], null)], null)], null);
});
});
todo_fechapter.views.new_data = (function todo_fechapter$views$new_data(){
var todos = (function (){var G__43592 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo-fechapter.subs","todos","todo-fechapter.subs/todos",1774654298)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43592) : re_frame.core.subscribe.call(null,G__43592));
})();
var current_todo_id = (function (){var G__43593 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo-fechapter.subs","current-todo-id","todo-fechapter.subs/current-todo-id",-1765803366)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43593) : re_frame.core.subscribe.call(null,G__43593));
})();
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo_fechapter.views.new_info], null);
});
todo_fechapter.views.new_panel = (function todo_fechapter$views$new_panel(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"1em",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo_fechapter.views.new_data], null)], null)], null);
});
todo_fechapter.views.weather_info = (function todo_fechapter$views$weather_info(p__43594){
var map__43595 = p__43594;
var map__43595__$1 = (((((!((map__43595 == null))))?(((((map__43595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43595):map__43595);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43595__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var main = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43595__$1,new cljs.core.Keyword(null,"main","main",-2117802661));
var weather = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43595__$1,new cljs.core.Keyword(null,"weather","weather",1320452344));
var G__43598_43608 = cljs.core.first(weather);
var fexpr__43597_43609 = console.log;
(fexpr__43597_43609.cljs$core$IFn$_invoke$arity$1 ? fexpr__43597_43609.cljs$core$IFn$_invoke$arity$1(G__43598_43608) : fexpr__43597_43609.call(null,G__43598_43608));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),name,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),["http://openweathermap.org/img/wn/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(cljs.core.first(weather))),"@2x.png"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"height","height",1025178622),(100)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"description"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"temp","temp",1791541284).cljs$core$IFn$_invoke$arity$1(main)),"\u00B0C"].join('')], null)], null)], null);
});
todo_fechapter.views.weather_data = (function todo_fechapter$views$weather_data(){
var weather = (function (){var G__43599 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo-fechapter.subs","weather","todo-fechapter.subs/weather",158284494)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43599) : re_frame.core.subscribe.call(null,G__43599));
})();
var G__43601_43610 = cljs.core.deref(weather);
var fexpr__43600_43611 = console.log;
(fexpr__43600_43611.cljs$core$IFn$_invoke$arity$1 ? fexpr__43600_43611.cljs$core$IFn$_invoke$arity$1(G__43601_43610) : fexpr__43600_43611.call(null,G__43601_43610));

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(weather),"Loading")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(weather),null)))){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Loading...",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo_fechapter.views.weather_info,cljs.core.deref(weather)], null);
}
});
todo_fechapter.views.weather_panel = (function todo_fechapter$views$weather_panel(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"1em",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo_fechapter.views.weather_data], null)], null)], null);
});
todo_fechapter.views.panels = (function todo_fechapter$views$panels(panel_name){
var G__43602 = panel_name;
var G__43602__$1 = (((G__43602 instanceof cljs.core.Keyword))?G__43602.fqn:null);
switch (G__43602__$1) {
case "home-panel":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo_fechapter.views.home_panel], null);

break;
case "todo-panel":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo_fechapter.views.todo_panel], null);

break;
case "new-panel":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo_fechapter.views.new_panel], null);

break;
case "weather-panel":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo_fechapter.views.weather_panel], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);

}
});
todo_fechapter.views.show_panel = (function todo_fechapter$views$show_panel(panel_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo_fechapter.views.panels,panel_name], null);
});
todo_fechapter.views.main_panel = (function todo_fechapter$views$main_panel(){
var active_panel = (function (){var G__43603 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo-fechapter.subs","active-panel","todo-fechapter.subs/active-panel",1472465504)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43603) : re_frame.core.subscribe.call(null,G__43603));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Clojurescript TODO Example",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),(((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(active_panel),new cljs.core.Keyword(null,"weather-panel","weather-panel",2053021669)))))?todo_fechapter.views.link_to_weather_page():todo_fechapter.views.link_to_home_page()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo_fechapter.views.panels,cljs.core.deref(active_panel)], null)], null)], null)], null);
});

//# sourceMappingURL=todo_fechapter.views.js.map
