goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__46383 = arguments.length;
switch (G__46383) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46384 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46384 = (function (f,blockable,meta46385){
this.f = f;
this.blockable = blockable;
this.meta46385 = meta46385;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46386,meta46385__$1){
var self__ = this;
var _46386__$1 = this;
return (new cljs.core.async.t_cljs$core$async46384(self__.f,self__.blockable,meta46385__$1));
}));

(cljs.core.async.t_cljs$core$async46384.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46386){
var self__ = this;
var _46386__$1 = this;
return self__.meta46385;
}));

(cljs.core.async.t_cljs$core$async46384.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46384.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46384.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async46384.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async46384.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta46385","meta46385",-318325181,null)], null);
}));

(cljs.core.async.t_cljs$core$async46384.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46384.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46384");

(cljs.core.async.t_cljs$core$async46384.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46384");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46384.
 */
cljs.core.async.__GT_t_cljs$core$async46384 = (function cljs$core$async$__GT_t_cljs$core$async46384(f__$1,blockable__$1,meta46385){
return (new cljs.core.async.t_cljs$core$async46384(f__$1,blockable__$1,meta46385));
});

}

return (new cljs.core.async.t_cljs$core$async46384(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__46391 = arguments.length;
switch (G__46391) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__46393 = arguments.length;
switch (G__46393) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__46395 = arguments.length;
switch (G__46395) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_47835 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47835) : fn1.call(null,val_47835));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47835) : fn1.call(null,val_47835));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__46397 = arguments.length;
switch (G__46397) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___47837 = n;
var x_47838 = (0);
while(true){
if((x_47838 < n__4666__auto___47837)){
(a[x_47838] = x_47838);

var G__47839 = (x_47838 + (1));
x_47838 = G__47839;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46398 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46398 = (function (flag,meta46399){
this.flag = flag;
this.meta46399 = meta46399;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46400,meta46399__$1){
var self__ = this;
var _46400__$1 = this;
return (new cljs.core.async.t_cljs$core$async46398(self__.flag,meta46399__$1));
}));

(cljs.core.async.t_cljs$core$async46398.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46400){
var self__ = this;
var _46400__$1 = this;
return self__.meta46399;
}));

(cljs.core.async.t_cljs$core$async46398.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46398.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async46398.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46398.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async46398.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta46399","meta46399",87929249,null)], null);
}));

(cljs.core.async.t_cljs$core$async46398.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46398.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46398");

(cljs.core.async.t_cljs$core$async46398.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46398");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46398.
 */
cljs.core.async.__GT_t_cljs$core$async46398 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async46398(flag__$1,meta46399){
return (new cljs.core.async.t_cljs$core$async46398(flag__$1,meta46399));
});

}

return (new cljs.core.async.t_cljs$core$async46398(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46401 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46401 = (function (flag,cb,meta46402){
this.flag = flag;
this.cb = cb;
this.meta46402 = meta46402;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46403,meta46402__$1){
var self__ = this;
var _46403__$1 = this;
return (new cljs.core.async.t_cljs$core$async46401(self__.flag,self__.cb,meta46402__$1));
}));

(cljs.core.async.t_cljs$core$async46401.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46403){
var self__ = this;
var _46403__$1 = this;
return self__.meta46402;
}));

(cljs.core.async.t_cljs$core$async46401.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46401.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async46401.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46401.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async46401.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta46402","meta46402",634878410,null)], null);
}));

(cljs.core.async.t_cljs$core$async46401.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46401.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46401");

(cljs.core.async.t_cljs$core$async46401.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46401");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46401.
 */
cljs.core.async.__GT_t_cljs$core$async46401 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async46401(flag__$1,cb__$1,meta46402){
return (new cljs.core.async.t_cljs$core$async46401(flag__$1,cb__$1,meta46402));
});

}

return (new cljs.core.async.t_cljs$core$async46401(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46404_SHARP_){
var G__46406 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46404_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46406) : fret.call(null,G__46406));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46405_SHARP_){
var G__46407 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46405_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46407) : fret.call(null,G__46407));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__47858 = (i + (1));
i = G__47858;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47863 = arguments.length;
var i__4790__auto___47864 = (0);
while(true){
if((i__4790__auto___47864 < len__4789__auto___47863)){
args__4795__auto__.push((arguments[i__4790__auto___47864]));

var G__47865 = (i__4790__auto___47864 + (1));
i__4790__auto___47864 = G__47865;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__46410){
var map__46411 = p__46410;
var map__46411__$1 = (((((!((map__46411 == null))))?(((((map__46411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46411):map__46411);
var opts = map__46411__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq46408){
var G__46409 = cljs.core.first(seq46408);
var seq46408__$1 = cljs.core.next(seq46408);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46409,seq46408__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__46414 = arguments.length;
switch (G__46414) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__46324__auto___47873 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46325__auto__ = (function (){var switch__46257__auto__ = (function (state_46438){
var state_val_46439 = (state_46438[(1)]);
if((state_val_46439 === (7))){
var inst_46434 = (state_46438[(2)]);
var state_46438__$1 = state_46438;
var statearr_46440_47875 = state_46438__$1;
(statearr_46440_47875[(2)] = inst_46434);

(statearr_46440_47875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46439 === (1))){
var state_46438__$1 = state_46438;
var statearr_46441_47879 = state_46438__$1;
(statearr_46441_47879[(2)] = null);

(statearr_46441_47879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46439 === (4))){
var inst_46417 = (state_46438[(7)]);
var inst_46417__$1 = (state_46438[(2)]);
var inst_46418 = (inst_46417__$1 == null);
var state_46438__$1 = (function (){var statearr_46442 = state_46438;
(statearr_46442[(7)] = inst_46417__$1);

return statearr_46442;
})();
if(cljs.core.truth_(inst_46418)){
var statearr_46443_47881 = state_46438__$1;
(statearr_46443_47881[(1)] = (5));

} else {
var statearr_46444_47882 = state_46438__$1;
(statearr_46444_47882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46439 === (13))){
var state_46438__$1 = state_46438;
var statearr_46445_47883 = state_46438__$1;
(statearr_46445_47883[(2)] = null);

(statearr_46445_47883[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46439 === (6))){
var inst_46417 = (state_46438[(7)]);
var state_46438__$1 = state_46438;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46438__$1,(11),to,inst_46417);
} else {
if((state_val_46439 === (3))){
var inst_46436 = (state_46438[(2)]);
var state_46438__$1 = state_46438;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46438__$1,inst_46436);
} else {
if((state_val_46439 === (12))){
var state_46438__$1 = state_46438;
var statearr_46446_47888 = state_46438__$1;
(statearr_46446_47888[(2)] = null);

(statearr_46446_47888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46439 === (2))){
var state_46438__$1 = state_46438;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46438__$1,(4),from);
} else {
if((state_val_46439 === (11))){
var inst_46427 = (state_46438[(2)]);
var state_46438__$1 = state_46438;
if(cljs.core.truth_(inst_46427)){
var statearr_46447_47889 = state_46438__$1;
(statearr_46447_47889[(1)] = (12));

} else {
var statearr_46448_47890 = state_46438__$1;
(statearr_46448_47890[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46439 === (9))){
var state_46438__$1 = state_46438;
var statearr_46449_47894 = state_46438__$1;
(statearr_46449_47894[(2)] = null);

(statearr_46449_47894[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46439 === (5))){
var state_46438__$1 = state_46438;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46450_47895 = state_46438__$1;
(statearr_46450_47895[(1)] = (8));

} else {
var statearr_46451_47896 = state_46438__$1;
(statearr_46451_47896[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46439 === (14))){
var inst_46432 = (state_46438[(2)]);
var state_46438__$1 = state_46438;
var statearr_46452_47897 = state_46438__$1;
(statearr_46452_47897[(2)] = inst_46432);

(statearr_46452_47897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46439 === (10))){
var inst_46424 = (state_46438[(2)]);
var state_46438__$1 = state_46438;
var statearr_46453_47899 = state_46438__$1;
(statearr_46453_47899[(2)] = inst_46424);

(statearr_46453_47899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46439 === (8))){
var inst_46421 = cljs.core.async.close_BANG_(to);
var state_46438__$1 = state_46438;
var statearr_46454_47900 = state_46438__$1;
(statearr_46454_47900[(2)] = inst_46421);

(statearr_46454_47900[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46258__auto__ = null;
var cljs$core$async$state_machine__46258__auto____0 = (function (){
var statearr_46455 = [null,null,null,null,null,null,null,null];
(statearr_46455[(0)] = cljs$core$async$state_machine__46258__auto__);

(statearr_46455[(1)] = (1));

return statearr_46455;
});
var cljs$core$async$state_machine__46258__auto____1 = (function (state_46438){
while(true){
var ret_value__46259__auto__ = (function (){try{while(true){
var result__46260__auto__ = switch__46257__auto__(state_46438);
if(cljs.core.keyword_identical_QMARK_(result__46260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46260__auto__;
}
break;
}
}catch (e46456){if((e46456 instanceof Object)){
var ex__46261__auto__ = e46456;
var statearr_46457_47903 = state_46438;
(statearr_46457_47903[(5)] = ex__46261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46456;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47904 = state_46438;
state_46438 = G__47904;
continue;
} else {
return ret_value__46259__auto__;
}
break;
}
});
cljs$core$async$state_machine__46258__auto__ = function(state_46438){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46258__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46258__auto____1.call(this,state_46438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46258__auto____0;
cljs$core$async$state_machine__46258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46258__auto____1;
return cljs$core$async$state_machine__46258__auto__;
})()
})();
var state__46326__auto__ = (function (){var statearr_46458 = (f__46325__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46325__auto__.cljs$core$IFn$_invoke$arity$0() : f__46325__auto__.call(null));
(statearr_46458[(6)] = c__46324__auto___47873);

return statearr_46458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46326__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__46459){
var vec__46460 = p__46459;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46460,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46460,(1),null);
var job = vec__46460;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__46324__auto___47907 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46325__auto__ = (function (){var switch__46257__auto__ = (function (state_46467){
var state_val_46468 = (state_46467[(1)]);
if((state_val_46468 === (1))){
var state_46467__$1 = state_46467;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46467__$1,(2),res,v);
} else {
if((state_val_46468 === (2))){
var inst_46464 = (state_46467[(2)]);
var inst_46465 = cljs.core.async.close_BANG_(res);
var state_46467__$1 = (function (){var statearr_46469 = state_46467;
(statearr_46469[(7)] = inst_46464);

return statearr_46469;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46467__$1,inst_46465);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46258__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46258__auto____0 = (function (){
var statearr_46470 = [null,null,null,null,null,null,null,null];
(statearr_46470[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46258__auto__);

(statearr_46470[(1)] = (1));

return statearr_46470;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46258__auto____1 = (function (state_46467){
while(true){
var ret_value__46259__auto__ = (function (){try{while(true){
var result__46260__auto__ = switch__46257__auto__(state_46467);
if(cljs.core.keyword_identical_QMARK_(result__46260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46260__auto__;
}
break;
}
}catch (e46471){if((e46471 instanceof Object)){
var ex__46261__auto__ = e46471;
var statearr_46472_47908 = state_46467;
(statearr_46472_47908[(5)] = ex__46261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46471;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47909 = state_46467;
state_46467 = G__47909;
continue;
} else {
return ret_value__46259__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46258__auto__ = function(state_46467){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46258__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46258__auto____1.call(this,state_46467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46258__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46258__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46258__auto__;
})()
})();
var state__46326__auto__ = (function (){var statearr_46473 = (f__46325__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46325__auto__.cljs$core$IFn$_invoke$arity$0() : f__46325__auto__.call(null));
(statearr_46473[(6)] = c__46324__auto___47907);

return statearr_46473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46326__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__46474){
var vec__46475 = p__46474;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46475,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46475,(1),null);
var job = vec__46475;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___47913 = n;
var __47914 = (0);
while(true){
if((__47914 < n__4666__auto___47913)){
var G__46478_47915 = type;
var G__46478_47916__$1 = (((G__46478_47915 instanceof cljs.core.Keyword))?G__46478_47915.fqn:null);
switch (G__46478_47916__$1) {
case "compute":
var c__46324__auto___47918 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47914,c__46324__auto___47918,G__46478_47915,G__46478_47916__$1,n__4666__auto___47913,jobs,results,process,async){
return (function (){
var f__46325__auto__ = (function (){var switch__46257__auto__ = ((function (__47914,c__46324__auto___47918,G__46478_47915,G__46478_47916__$1,n__4666__auto___47913,jobs,results,process,async){
return (function (state_46491){
var state_val_46492 = (state_46491[(1)]);
if((state_val_46492 === (1))){
var state_46491__$1 = state_46491;
var statearr_46493_47920 = state_46491__$1;
(statearr_46493_47920[(2)] = null);

(statearr_46493_47920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46492 === (2))){
var state_46491__$1 = state_46491;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46491__$1,(4),jobs);
} else {
if((state_val_46492 === (3))){
var inst_46489 = (state_46491[(2)]);
var state_46491__$1 = state_46491;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46491__$1,inst_46489);
} else {
if((state_val_46492 === (4))){
var inst_46481 = (state_46491[(2)]);
var inst_46482 = process(inst_46481);
var state_46491__$1 = state_46491;
if(cljs.core.truth_(inst_46482)){
var statearr_46494_47925 = state_46491__$1;
(statearr_46494_47925[(1)] = (5));

} else {
var statearr_46495_47926 = state_46491__$1;
(statearr_46495_47926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46492 === (5))){
var state_46491__$1 = state_46491;
var statearr_46496_47927 = state_46491__$1;
(statearr_46496_47927[(2)] = null);

(statearr_46496_47927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46492 === (6))){
var state_46491__$1 = state_46491;
var statearr_46497_47928 = state_46491__$1;
(statearr_46497_47928[(2)] = null);

(statearr_46497_47928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46492 === (7))){
var inst_46487 = (state_46491[(2)]);
var state_46491__$1 = state_46491;
var statearr_46498_47929 = state_46491__$1;
(statearr_46498_47929[(2)] = inst_46487);

(statearr_46498_47929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__47914,c__46324__auto___47918,G__46478_47915,G__46478_47916__$1,n__4666__auto___47913,jobs,results,process,async))
;
return ((function (__47914,switch__46257__auto__,c__46324__auto___47918,G__46478_47915,G__46478_47916__$1,n__4666__auto___47913,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46258__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46258__auto____0 = (function (){
var statearr_46499 = [null,null,null,null,null,null,null];
(statearr_46499[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46258__auto__);

(statearr_46499[(1)] = (1));

return statearr_46499;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46258__auto____1 = (function (state_46491){
while(true){
var ret_value__46259__auto__ = (function (){try{while(true){
var result__46260__auto__ = switch__46257__auto__(state_46491);
if(cljs.core.keyword_identical_QMARK_(result__46260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46260__auto__;
}
break;
}
}catch (e46500){if((e46500 instanceof Object)){
var ex__46261__auto__ = e46500;
var statearr_46501_47930 = state_46491;
(statearr_46501_47930[(5)] = ex__46261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46500;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47935 = state_46491;
state_46491 = G__47935;
continue;
} else {
return ret_value__46259__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46258__auto__ = function(state_46491){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46258__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46258__auto____1.call(this,state_46491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46258__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46258__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46258__auto__;
})()
;})(__47914,switch__46257__auto__,c__46324__auto___47918,G__46478_47915,G__46478_47916__$1,n__4666__auto___47913,jobs,results,process,async))
})();
var state__46326__auto__ = (function (){var statearr_46502 = (f__46325__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46325__auto__.cljs$core$IFn$_invoke$arity$0() : f__46325__auto__.call(null));
(statearr_46502[(6)] = c__46324__auto___47918);

return statearr_46502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46326__auto__);
});})(__47914,c__46324__auto___47918,G__46478_47915,G__46478_47916__$1,n__4666__auto___47913,jobs,results,process,async))
);


break;
case "async":
var c__46324__auto___47941 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47914,c__46324__auto___47941,G__46478_47915,G__46478_47916__$1,n__4666__auto___47913,jobs,results,process,async){
return (function (){
var f__46325__auto__ = (function (){var switch__46257__auto__ = ((function (__47914,c__46324__auto___47941,G__46478_47915,G__46478_47916__$1,n__4666__auto___47913,jobs,results,process,async){
return (function (state_46515){
var state_val_46516 = (state_46515[(1)]);
if((state_val_46516 === (1))){
var state_46515__$1 = state_46515;
var statearr_46517_47946 = state_46515__$1;
(statearr_46517_47946[(2)] = null);

(statearr_46517_47946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46516 === (2))){
var state_46515__$1 = state_46515;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46515__$1,(4),jobs);
} else {
if((state_val_46516 === (3))){
var inst_46513 = (state_46515[(2)]);
var state_46515__$1 = state_46515;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46515__$1,inst_46513);
} else {
if((state_val_46516 === (4))){
var inst_46505 = (state_46515[(2)]);
var inst_46506 = async(inst_46505);
var state_46515__$1 = state_46515;
if(cljs.core.truth_(inst_46506)){
var statearr_46518_47947 = state_46515__$1;
(statearr_46518_47947[(1)] = (5));

} else {
var statearr_46519_47948 = state_46515__$1;
(statearr_46519_47948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46516 === (5))){
var state_46515__$1 = state_46515;
var statearr_46520_47951 = state_46515__$1;
(statearr_46520_47951[(2)] = null);

(statearr_46520_47951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46516 === (6))){
var state_46515__$1 = state_46515;
var statearr_46521_47953 = state_46515__$1;
(statearr_46521_47953[(2)] = null);

(statearr_46521_47953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46516 === (7))){
var inst_46511 = (state_46515[(2)]);
var state_46515__$1 = state_46515;
var statearr_46522_47954 = state_46515__$1;
(statearr_46522_47954[(2)] = inst_46511);

(statearr_46522_47954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__47914,c__46324__auto___47941,G__46478_47915,G__46478_47916__$1,n__4666__auto___47913,jobs,results,process,async))
;
return ((function (__47914,switch__46257__auto__,c__46324__auto___47941,G__46478_47915,G__46478_47916__$1,n__4666__auto___47913,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46258__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46258__auto____0 = (function (){
var statearr_46523 = [null,null,null,null,null,null,null];
(statearr_46523[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46258__auto__);

(statearr_46523[(1)] = (1));

return statearr_46523;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46258__auto____1 = (function (state_46515){
while(true){
var ret_value__46259__auto__ = (function (){try{while(true){
var result__46260__auto__ = switch__46257__auto__(state_46515);
if(cljs.core.keyword_identical_QMARK_(result__46260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46260__auto__;
}
break;
}
}catch (e46524){if((e46524 instanceof Object)){
var ex__46261__auto__ = e46524;
var statearr_46525_47961 = state_46515;
(statearr_46525_47961[(5)] = ex__46261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46524;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47962 = state_46515;
state_46515 = G__47962;
continue;
} else {
return ret_value__46259__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46258__auto__ = function(state_46515){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46258__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46258__auto____1.call(this,state_46515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46258__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46258__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46258__auto__;
})()
;})(__47914,switch__46257__auto__,c__46324__auto___47941,G__46478_47915,G__46478_47916__$1,n__4666__auto___47913,jobs,results,process,async))
})();
var state__46326__auto__ = (function (){var statearr_46526 = (f__46325__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46325__auto__.cljs$core$IFn$_invoke$arity$0() : f__46325__auto__.call(null));
(statearr_46526[(6)] = c__46324__auto___47941);

return statearr_46526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46326__auto__);
});})(__47914,c__46324__auto___47941,G__46478_47915,G__46478_47916__$1,n__4666__auto___47913,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46478_47916__$1)].join('')));

}

var G__47963 = (__47914 + (1));
__47914 = G__47963;
continue;
} else {
}
break;
}

var c__46324__auto___47964 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46325__auto__ = (function (){var switch__46257__auto__ = (function (state_46548){
var state_val_46549 = (state_46548[(1)]);
if((state_val_46549 === (7))){
var inst_46544 = (state_46548[(2)]);
var state_46548__$1 = state_46548;
var statearr_46550_47965 = state_46548__$1;
(statearr_46550_47965[(2)] = inst_46544);

(statearr_46550_47965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46549 === (1))){
var state_46548__$1 = state_46548;
var statearr_46551_47966 = state_46548__$1;
(statearr_46551_47966[(2)] = null);

(statearr_46551_47966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46549 === (4))){
var inst_46529 = (state_46548[(7)]);
var inst_46529__$1 = (state_46548[(2)]);
var inst_46530 = (inst_46529__$1 == null);
var state_46548__$1 = (function (){var statearr_46552 = state_46548;
(statearr_46552[(7)] = inst_46529__$1);

return statearr_46552;
})();
if(cljs.core.truth_(inst_46530)){
var statearr_46553_47967 = state_46548__$1;
(statearr_46553_47967[(1)] = (5));

} else {
var statearr_46554_47968 = state_46548__$1;
(statearr_46554_47968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46549 === (6))){
var inst_46534 = (state_46548[(8)]);
var inst_46529 = (state_46548[(7)]);
var inst_46534__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_46535 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46536 = [inst_46529,inst_46534__$1];
var inst_46537 = (new cljs.core.PersistentVector(null,2,(5),inst_46535,inst_46536,null));
var state_46548__$1 = (function (){var statearr_46555 = state_46548;
(statearr_46555[(8)] = inst_46534__$1);

return statearr_46555;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46548__$1,(8),jobs,inst_46537);
} else {
if((state_val_46549 === (3))){
var inst_46546 = (state_46548[(2)]);
var state_46548__$1 = state_46548;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46548__$1,inst_46546);
} else {
if((state_val_46549 === (2))){
var state_46548__$1 = state_46548;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46548__$1,(4),from);
} else {
if((state_val_46549 === (9))){
var inst_46541 = (state_46548[(2)]);
var state_46548__$1 = (function (){var statearr_46556 = state_46548;
(statearr_46556[(9)] = inst_46541);

return statearr_46556;
})();
var statearr_46557_47973 = state_46548__$1;
(statearr_46557_47973[(2)] = null);

(statearr_46557_47973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46549 === (5))){
var inst_46532 = cljs.core.async.close_BANG_(jobs);
var state_46548__$1 = state_46548;
var statearr_46558_47974 = state_46548__$1;
(statearr_46558_47974[(2)] = inst_46532);

(statearr_46558_47974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46549 === (8))){
var inst_46534 = (state_46548[(8)]);
var inst_46539 = (state_46548[(2)]);
var state_46548__$1 = (function (){var statearr_46559 = state_46548;
(statearr_46559[(10)] = inst_46539);

return statearr_46559;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46548__$1,(9),results,inst_46534);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46258__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46258__auto____0 = (function (){
var statearr_46560 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46560[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46258__auto__);

(statearr_46560[(1)] = (1));

return statearr_46560;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46258__auto____1 = (function (state_46548){
while(true){
var ret_value__46259__auto__ = (function (){try{while(true){
var result__46260__auto__ = switch__46257__auto__(state_46548);
if(cljs.core.keyword_identical_QMARK_(result__46260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46260__auto__;
}
break;
}
}catch (e46561){if((e46561 instanceof Object)){
var ex__46261__auto__ = e46561;
var statearr_46562_47976 = state_46548;
(statearr_46562_47976[(5)] = ex__46261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46561;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47978 = state_46548;
state_46548 = G__47978;
continue;
} else {
return ret_value__46259__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46258__auto__ = function(state_46548){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46258__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46258__auto____1.call(this,state_46548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46258__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46258__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46258__auto__;
})()
})();
var state__46326__auto__ = (function (){var statearr_46563 = (f__46325__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46325__auto__.cljs$core$IFn$_invoke$arity$0() : f__46325__auto__.call(null));
(statearr_46563[(6)] = c__46324__auto___47964);

return statearr_46563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46326__auto__);
}));


var c__46324__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46325__auto__ = (function (){var switch__46257__auto__ = (function (state_46601){
var state_val_46602 = (state_46601[(1)]);
if((state_val_46602 === (7))){
var inst_46597 = (state_46601[(2)]);
var state_46601__$1 = state_46601;
var statearr_46603_47980 = state_46601__$1;
(statearr_46603_47980[(2)] = inst_46597);

(statearr_46603_47980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46602 === (20))){
var state_46601__$1 = state_46601;
var statearr_46604_47981 = state_46601__$1;
(statearr_46604_47981[(2)] = null);

(statearr_46604_47981[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46602 === (1))){
var state_46601__$1 = state_46601;
var statearr_46605_47982 = state_46601__$1;
(statearr_46605_47982[(2)] = null);

(statearr_46605_47982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46602 === (4))){
var inst_46566 = (state_46601[(7)]);
var inst_46566__$1 = (state_46601[(2)]);
var inst_46567 = (inst_46566__$1 == null);
var state_46601__$1 = (function (){var statearr_46606 = state_46601;
(statearr_46606[(7)] = inst_46566__$1);

return statearr_46606;
})();
if(cljs.core.truth_(inst_46567)){
var statearr_46607_47985 = state_46601__$1;
(statearr_46607_47985[(1)] = (5));

} else {
var statearr_46608_47986 = state_46601__$1;
(statearr_46608_47986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46602 === (15))){
var inst_46579 = (state_46601[(8)]);
var state_46601__$1 = state_46601;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46601__$1,(18),to,inst_46579);
} else {
if((state_val_46602 === (21))){
var inst_46592 = (state_46601[(2)]);
var state_46601__$1 = state_46601;
var statearr_46609_47987 = state_46601__$1;
(statearr_46609_47987[(2)] = inst_46592);

(statearr_46609_47987[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46602 === (13))){
var inst_46594 = (state_46601[(2)]);
var state_46601__$1 = (function (){var statearr_46610 = state_46601;
(statearr_46610[(9)] = inst_46594);

return statearr_46610;
})();
var statearr_46611_47988 = state_46601__$1;
(statearr_46611_47988[(2)] = null);

(statearr_46611_47988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46602 === (6))){
var inst_46566 = (state_46601[(7)]);
var state_46601__$1 = state_46601;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46601__$1,(11),inst_46566);
} else {
if((state_val_46602 === (17))){
var inst_46587 = (state_46601[(2)]);
var state_46601__$1 = state_46601;
if(cljs.core.truth_(inst_46587)){
var statearr_46612_47989 = state_46601__$1;
(statearr_46612_47989[(1)] = (19));

} else {
var statearr_46613_47990 = state_46601__$1;
(statearr_46613_47990[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46602 === (3))){
var inst_46599 = (state_46601[(2)]);
var state_46601__$1 = state_46601;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46601__$1,inst_46599);
} else {
if((state_val_46602 === (12))){
var inst_46576 = (state_46601[(10)]);
var state_46601__$1 = state_46601;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46601__$1,(14),inst_46576);
} else {
if((state_val_46602 === (2))){
var state_46601__$1 = state_46601;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46601__$1,(4),results);
} else {
if((state_val_46602 === (19))){
var state_46601__$1 = state_46601;
var statearr_46614_47994 = state_46601__$1;
(statearr_46614_47994[(2)] = null);

(statearr_46614_47994[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46602 === (11))){
var inst_46576 = (state_46601[(2)]);
var state_46601__$1 = (function (){var statearr_46615 = state_46601;
(statearr_46615[(10)] = inst_46576);

return statearr_46615;
})();
var statearr_46616_47995 = state_46601__$1;
(statearr_46616_47995[(2)] = null);

(statearr_46616_47995[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46602 === (9))){
var state_46601__$1 = state_46601;
var statearr_46617_47997 = state_46601__$1;
(statearr_46617_47997[(2)] = null);

(statearr_46617_47997[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46602 === (5))){
var state_46601__$1 = state_46601;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46618_47998 = state_46601__$1;
(statearr_46618_47998[(1)] = (8));

} else {
var statearr_46619_47999 = state_46601__$1;
(statearr_46619_47999[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46602 === (14))){
var inst_46579 = (state_46601[(8)]);
var inst_46579__$1 = (state_46601[(2)]);
var inst_46580 = (inst_46579__$1 == null);
var inst_46581 = cljs.core.not(inst_46580);
var state_46601__$1 = (function (){var statearr_46620 = state_46601;
(statearr_46620[(8)] = inst_46579__$1);

return statearr_46620;
})();
if(inst_46581){
var statearr_46621_48003 = state_46601__$1;
(statearr_46621_48003[(1)] = (15));

} else {
var statearr_46622_48004 = state_46601__$1;
(statearr_46622_48004[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46602 === (16))){
var state_46601__$1 = state_46601;
var statearr_46623_48005 = state_46601__$1;
(statearr_46623_48005[(2)] = false);

(statearr_46623_48005[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46602 === (10))){
var inst_46573 = (state_46601[(2)]);
var state_46601__$1 = state_46601;
var statearr_46624_48006 = state_46601__$1;
(statearr_46624_48006[(2)] = inst_46573);

(statearr_46624_48006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46602 === (18))){
var inst_46584 = (state_46601[(2)]);
var state_46601__$1 = state_46601;
var statearr_46625_48007 = state_46601__$1;
(statearr_46625_48007[(2)] = inst_46584);

(statearr_46625_48007[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46602 === (8))){
var inst_46570 = cljs.core.async.close_BANG_(to);
var state_46601__$1 = state_46601;
var statearr_46626_48008 = state_46601__$1;
(statearr_46626_48008[(2)] = inst_46570);

(statearr_46626_48008[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46258__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46258__auto____0 = (function (){
var statearr_46627 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46627[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46258__auto__);

(statearr_46627[(1)] = (1));

return statearr_46627;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46258__auto____1 = (function (state_46601){
while(true){
var ret_value__46259__auto__ = (function (){try{while(true){
var result__46260__auto__ = switch__46257__auto__(state_46601);
if(cljs.core.keyword_identical_QMARK_(result__46260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46260__auto__;
}
break;
}
}catch (e46628){if((e46628 instanceof Object)){
var ex__46261__auto__ = e46628;
var statearr_46629_48009 = state_46601;
(statearr_46629_48009[(5)] = ex__46261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46628;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48010 = state_46601;
state_46601 = G__48010;
continue;
} else {
return ret_value__46259__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46258__auto__ = function(state_46601){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46258__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46258__auto____1.call(this,state_46601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46258__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46258__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46258__auto__;
})()
})();
var state__46326__auto__ = (function (){var statearr_46630 = (f__46325__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46325__auto__.cljs$core$IFn$_invoke$arity$0() : f__46325__auto__.call(null));
(statearr_46630[(6)] = c__46324__auto__);

return statearr_46630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46326__auto__);
}));

return c__46324__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__46632 = arguments.length;
switch (G__46632) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__46634 = arguments.length;
switch (G__46634) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__46636 = arguments.length;
switch (G__46636) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__46324__auto___48019 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46325__auto__ = (function (){var switch__46257__auto__ = (function (state_46662){
var state_val_46663 = (state_46662[(1)]);
if((state_val_46663 === (7))){
var inst_46658 = (state_46662[(2)]);
var state_46662__$1 = state_46662;
var statearr_46664_48021 = state_46662__$1;
(statearr_46664_48021[(2)] = inst_46658);

(statearr_46664_48021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46663 === (1))){
var state_46662__$1 = state_46662;
var statearr_46665_48023 = state_46662__$1;
(statearr_46665_48023[(2)] = null);

(statearr_46665_48023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46663 === (4))){
var inst_46639 = (state_46662[(7)]);
var inst_46639__$1 = (state_46662[(2)]);
var inst_46640 = (inst_46639__$1 == null);
var state_46662__$1 = (function (){var statearr_46666 = state_46662;
(statearr_46666[(7)] = inst_46639__$1);

return statearr_46666;
})();
if(cljs.core.truth_(inst_46640)){
var statearr_46667_48024 = state_46662__$1;
(statearr_46667_48024[(1)] = (5));

} else {
var statearr_46668_48025 = state_46662__$1;
(statearr_46668_48025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46663 === (13))){
var state_46662__$1 = state_46662;
var statearr_46669_48026 = state_46662__$1;
(statearr_46669_48026[(2)] = null);

(statearr_46669_48026[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46663 === (6))){
var inst_46639 = (state_46662[(7)]);
var inst_46645 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46639) : p.call(null,inst_46639));
var state_46662__$1 = state_46662;
if(cljs.core.truth_(inst_46645)){
var statearr_46670_48027 = state_46662__$1;
(statearr_46670_48027[(1)] = (9));

} else {
var statearr_46671_48028 = state_46662__$1;
(statearr_46671_48028[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46663 === (3))){
var inst_46660 = (state_46662[(2)]);
var state_46662__$1 = state_46662;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46662__$1,inst_46660);
} else {
if((state_val_46663 === (12))){
var state_46662__$1 = state_46662;
var statearr_46672_48029 = state_46662__$1;
(statearr_46672_48029[(2)] = null);

(statearr_46672_48029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46663 === (2))){
var state_46662__$1 = state_46662;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46662__$1,(4),ch);
} else {
if((state_val_46663 === (11))){
var inst_46639 = (state_46662[(7)]);
var inst_46649 = (state_46662[(2)]);
var state_46662__$1 = state_46662;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46662__$1,(8),inst_46649,inst_46639);
} else {
if((state_val_46663 === (9))){
var state_46662__$1 = state_46662;
var statearr_46673_48032 = state_46662__$1;
(statearr_46673_48032[(2)] = tc);

(statearr_46673_48032[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46663 === (5))){
var inst_46642 = cljs.core.async.close_BANG_(tc);
var inst_46643 = cljs.core.async.close_BANG_(fc);
var state_46662__$1 = (function (){var statearr_46674 = state_46662;
(statearr_46674[(8)] = inst_46642);

return statearr_46674;
})();
var statearr_46675_48033 = state_46662__$1;
(statearr_46675_48033[(2)] = inst_46643);

(statearr_46675_48033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46663 === (14))){
var inst_46656 = (state_46662[(2)]);
var state_46662__$1 = state_46662;
var statearr_46676_48034 = state_46662__$1;
(statearr_46676_48034[(2)] = inst_46656);

(statearr_46676_48034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46663 === (10))){
var state_46662__$1 = state_46662;
var statearr_46677_48035 = state_46662__$1;
(statearr_46677_48035[(2)] = fc);

(statearr_46677_48035[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46663 === (8))){
var inst_46651 = (state_46662[(2)]);
var state_46662__$1 = state_46662;
if(cljs.core.truth_(inst_46651)){
var statearr_46678_48036 = state_46662__$1;
(statearr_46678_48036[(1)] = (12));

} else {
var statearr_46679_48037 = state_46662__$1;
(statearr_46679_48037[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46258__auto__ = null;
var cljs$core$async$state_machine__46258__auto____0 = (function (){
var statearr_46680 = [null,null,null,null,null,null,null,null,null];
(statearr_46680[(0)] = cljs$core$async$state_machine__46258__auto__);

(statearr_46680[(1)] = (1));

return statearr_46680;
});
var cljs$core$async$state_machine__46258__auto____1 = (function (state_46662){
while(true){
var ret_value__46259__auto__ = (function (){try{while(true){
var result__46260__auto__ = switch__46257__auto__(state_46662);
if(cljs.core.keyword_identical_QMARK_(result__46260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46260__auto__;
}
break;
}
}catch (e46681){if((e46681 instanceof Object)){
var ex__46261__auto__ = e46681;
var statearr_46682_48040 = state_46662;
(statearr_46682_48040[(5)] = ex__46261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46681;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48043 = state_46662;
state_46662 = G__48043;
continue;
} else {
return ret_value__46259__auto__;
}
break;
}
});
cljs$core$async$state_machine__46258__auto__ = function(state_46662){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46258__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46258__auto____1.call(this,state_46662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46258__auto____0;
cljs$core$async$state_machine__46258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46258__auto____1;
return cljs$core$async$state_machine__46258__auto__;
})()
})();
var state__46326__auto__ = (function (){var statearr_46683 = (f__46325__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46325__auto__.cljs$core$IFn$_invoke$arity$0() : f__46325__auto__.call(null));
(statearr_46683[(6)] = c__46324__auto___48019);

return statearr_46683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46326__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__46324__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46325__auto__ = (function (){var switch__46257__auto__ = (function (state_46704){
var state_val_46705 = (state_46704[(1)]);
if((state_val_46705 === (7))){
var inst_46700 = (state_46704[(2)]);
var state_46704__$1 = state_46704;
var statearr_46706_48048 = state_46704__$1;
(statearr_46706_48048[(2)] = inst_46700);

(statearr_46706_48048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46705 === (1))){
var inst_46684 = init;
var state_46704__$1 = (function (){var statearr_46707 = state_46704;
(statearr_46707[(7)] = inst_46684);

return statearr_46707;
})();
var statearr_46708_48051 = state_46704__$1;
(statearr_46708_48051[(2)] = null);

(statearr_46708_48051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46705 === (4))){
var inst_46687 = (state_46704[(8)]);
var inst_46687__$1 = (state_46704[(2)]);
var inst_46688 = (inst_46687__$1 == null);
var state_46704__$1 = (function (){var statearr_46709 = state_46704;
(statearr_46709[(8)] = inst_46687__$1);

return statearr_46709;
})();
if(cljs.core.truth_(inst_46688)){
var statearr_46710_48053 = state_46704__$1;
(statearr_46710_48053[(1)] = (5));

} else {
var statearr_46711_48055 = state_46704__$1;
(statearr_46711_48055[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46705 === (6))){
var inst_46687 = (state_46704[(8)]);
var inst_46684 = (state_46704[(7)]);
var inst_46691 = (state_46704[(9)]);
var inst_46691__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_46684,inst_46687) : f.call(null,inst_46684,inst_46687));
var inst_46692 = cljs.core.reduced_QMARK_(inst_46691__$1);
var state_46704__$1 = (function (){var statearr_46712 = state_46704;
(statearr_46712[(9)] = inst_46691__$1);

return statearr_46712;
})();
if(inst_46692){
var statearr_46713_48056 = state_46704__$1;
(statearr_46713_48056[(1)] = (8));

} else {
var statearr_46714_48057 = state_46704__$1;
(statearr_46714_48057[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46705 === (3))){
var inst_46702 = (state_46704[(2)]);
var state_46704__$1 = state_46704;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46704__$1,inst_46702);
} else {
if((state_val_46705 === (2))){
var state_46704__$1 = state_46704;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46704__$1,(4),ch);
} else {
if((state_val_46705 === (9))){
var inst_46691 = (state_46704[(9)]);
var inst_46684 = inst_46691;
var state_46704__$1 = (function (){var statearr_46715 = state_46704;
(statearr_46715[(7)] = inst_46684);

return statearr_46715;
})();
var statearr_46716_48060 = state_46704__$1;
(statearr_46716_48060[(2)] = null);

(statearr_46716_48060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46705 === (5))){
var inst_46684 = (state_46704[(7)]);
var state_46704__$1 = state_46704;
var statearr_46717_48061 = state_46704__$1;
(statearr_46717_48061[(2)] = inst_46684);

(statearr_46717_48061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46705 === (10))){
var inst_46698 = (state_46704[(2)]);
var state_46704__$1 = state_46704;
var statearr_46718_48062 = state_46704__$1;
(statearr_46718_48062[(2)] = inst_46698);

(statearr_46718_48062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46705 === (8))){
var inst_46691 = (state_46704[(9)]);
var inst_46694 = cljs.core.deref(inst_46691);
var state_46704__$1 = state_46704;
var statearr_46719_48063 = state_46704__$1;
(statearr_46719_48063[(2)] = inst_46694);

(statearr_46719_48063[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__46258__auto__ = null;
var cljs$core$async$reduce_$_state_machine__46258__auto____0 = (function (){
var statearr_46720 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46720[(0)] = cljs$core$async$reduce_$_state_machine__46258__auto__);

(statearr_46720[(1)] = (1));

return statearr_46720;
});
var cljs$core$async$reduce_$_state_machine__46258__auto____1 = (function (state_46704){
while(true){
var ret_value__46259__auto__ = (function (){try{while(true){
var result__46260__auto__ = switch__46257__auto__(state_46704);
if(cljs.core.keyword_identical_QMARK_(result__46260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46260__auto__;
}
break;
}
}catch (e46721){if((e46721 instanceof Object)){
var ex__46261__auto__ = e46721;
var statearr_46722_48075 = state_46704;
(statearr_46722_48075[(5)] = ex__46261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46721;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48076 = state_46704;
state_46704 = G__48076;
continue;
} else {
return ret_value__46259__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__46258__auto__ = function(state_46704){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__46258__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__46258__auto____1.call(this,state_46704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__46258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__46258__auto____0;
cljs$core$async$reduce_$_state_machine__46258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__46258__auto____1;
return cljs$core$async$reduce_$_state_machine__46258__auto__;
})()
})();
var state__46326__auto__ = (function (){var statearr_46723 = (f__46325__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46325__auto__.cljs$core$IFn$_invoke$arity$0() : f__46325__auto__.call(null));
(statearr_46723[(6)] = c__46324__auto__);

return statearr_46723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46326__auto__);
}));

return c__46324__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__46324__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46325__auto__ = (function (){var switch__46257__auto__ = (function (state_46729){
var state_val_46730 = (state_46729[(1)]);
if((state_val_46730 === (1))){
var inst_46724 = cljs.core.async.reduce(f__$1,init,ch);
var state_46729__$1 = state_46729;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46729__$1,(2),inst_46724);
} else {
if((state_val_46730 === (2))){
var inst_46726 = (state_46729[(2)]);
var inst_46727 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_46726) : f__$1.call(null,inst_46726));
var state_46729__$1 = state_46729;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46729__$1,inst_46727);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__46258__auto__ = null;
var cljs$core$async$transduce_$_state_machine__46258__auto____0 = (function (){
var statearr_46731 = [null,null,null,null,null,null,null];
(statearr_46731[(0)] = cljs$core$async$transduce_$_state_machine__46258__auto__);

(statearr_46731[(1)] = (1));

return statearr_46731;
});
var cljs$core$async$transduce_$_state_machine__46258__auto____1 = (function (state_46729){
while(true){
var ret_value__46259__auto__ = (function (){try{while(true){
var result__46260__auto__ = switch__46257__auto__(state_46729);
if(cljs.core.keyword_identical_QMARK_(result__46260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46260__auto__;
}
break;
}
}catch (e46732){if((e46732 instanceof Object)){
var ex__46261__auto__ = e46732;
var statearr_46733_48083 = state_46729;
(statearr_46733_48083[(5)] = ex__46261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46732;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48084 = state_46729;
state_46729 = G__48084;
continue;
} else {
return ret_value__46259__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__46258__auto__ = function(state_46729){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__46258__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__46258__auto____1.call(this,state_46729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__46258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__46258__auto____0;
cljs$core$async$transduce_$_state_machine__46258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__46258__auto____1;
return cljs$core$async$transduce_$_state_machine__46258__auto__;
})()
})();
var state__46326__auto__ = (function (){var statearr_46734 = (f__46325__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46325__auto__.cljs$core$IFn$_invoke$arity$0() : f__46325__auto__.call(null));
(statearr_46734[(6)] = c__46324__auto__);

return statearr_46734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46326__auto__);
}));

return c__46324__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__46736 = arguments.length;
switch (G__46736) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__46324__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46325__auto__ = (function (){var switch__46257__auto__ = (function (state_46761){
var state_val_46762 = (state_46761[(1)]);
if((state_val_46762 === (7))){
var inst_46743 = (state_46761[(2)]);
var state_46761__$1 = state_46761;
var statearr_46763_48088 = state_46761__$1;
(statearr_46763_48088[(2)] = inst_46743);

(statearr_46763_48088[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46762 === (1))){
var inst_46737 = cljs.core.seq(coll);
var inst_46738 = inst_46737;
var state_46761__$1 = (function (){var statearr_46764 = state_46761;
(statearr_46764[(7)] = inst_46738);

return statearr_46764;
})();
var statearr_46765_48089 = state_46761__$1;
(statearr_46765_48089[(2)] = null);

(statearr_46765_48089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46762 === (4))){
var inst_46738 = (state_46761[(7)]);
var inst_46741 = cljs.core.first(inst_46738);
var state_46761__$1 = state_46761;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46761__$1,(7),ch,inst_46741);
} else {
if((state_val_46762 === (13))){
var inst_46755 = (state_46761[(2)]);
var state_46761__$1 = state_46761;
var statearr_46766_48093 = state_46761__$1;
(statearr_46766_48093[(2)] = inst_46755);

(statearr_46766_48093[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46762 === (6))){
var inst_46746 = (state_46761[(2)]);
var state_46761__$1 = state_46761;
if(cljs.core.truth_(inst_46746)){
var statearr_46767_48094 = state_46761__$1;
(statearr_46767_48094[(1)] = (8));

} else {
var statearr_46768_48095 = state_46761__$1;
(statearr_46768_48095[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46762 === (3))){
var inst_46759 = (state_46761[(2)]);
var state_46761__$1 = state_46761;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46761__$1,inst_46759);
} else {
if((state_val_46762 === (12))){
var state_46761__$1 = state_46761;
var statearr_46769_48099 = state_46761__$1;
(statearr_46769_48099[(2)] = null);

(statearr_46769_48099[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46762 === (2))){
var inst_46738 = (state_46761[(7)]);
var state_46761__$1 = state_46761;
if(cljs.core.truth_(inst_46738)){
var statearr_46770_48100 = state_46761__$1;
(statearr_46770_48100[(1)] = (4));

} else {
var statearr_46771_48105 = state_46761__$1;
(statearr_46771_48105[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46762 === (11))){
var inst_46752 = cljs.core.async.close_BANG_(ch);
var state_46761__$1 = state_46761;
var statearr_46772_48109 = state_46761__$1;
(statearr_46772_48109[(2)] = inst_46752);

(statearr_46772_48109[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46762 === (9))){
var state_46761__$1 = state_46761;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46773_48110 = state_46761__$1;
(statearr_46773_48110[(1)] = (11));

} else {
var statearr_46774_48111 = state_46761__$1;
(statearr_46774_48111[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46762 === (5))){
var inst_46738 = (state_46761[(7)]);
var state_46761__$1 = state_46761;
var statearr_46775_48115 = state_46761__$1;
(statearr_46775_48115[(2)] = inst_46738);

(statearr_46775_48115[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46762 === (10))){
var inst_46757 = (state_46761[(2)]);
var state_46761__$1 = state_46761;
var statearr_46776_48116 = state_46761__$1;
(statearr_46776_48116[(2)] = inst_46757);

(statearr_46776_48116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46762 === (8))){
var inst_46738 = (state_46761[(7)]);
var inst_46748 = cljs.core.next(inst_46738);
var inst_46738__$1 = inst_46748;
var state_46761__$1 = (function (){var statearr_46777 = state_46761;
(statearr_46777[(7)] = inst_46738__$1);

return statearr_46777;
})();
var statearr_46778_48120 = state_46761__$1;
(statearr_46778_48120[(2)] = null);

(statearr_46778_48120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46258__auto__ = null;
var cljs$core$async$state_machine__46258__auto____0 = (function (){
var statearr_46779 = [null,null,null,null,null,null,null,null];
(statearr_46779[(0)] = cljs$core$async$state_machine__46258__auto__);

(statearr_46779[(1)] = (1));

return statearr_46779;
});
var cljs$core$async$state_machine__46258__auto____1 = (function (state_46761){
while(true){
var ret_value__46259__auto__ = (function (){try{while(true){
var result__46260__auto__ = switch__46257__auto__(state_46761);
if(cljs.core.keyword_identical_QMARK_(result__46260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46260__auto__;
}
break;
}
}catch (e46780){if((e46780 instanceof Object)){
var ex__46261__auto__ = e46780;
var statearr_46781_48121 = state_46761;
(statearr_46781_48121[(5)] = ex__46261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46780;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48122 = state_46761;
state_46761 = G__48122;
continue;
} else {
return ret_value__46259__auto__;
}
break;
}
});
cljs$core$async$state_machine__46258__auto__ = function(state_46761){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46258__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46258__auto____1.call(this,state_46761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46258__auto____0;
cljs$core$async$state_machine__46258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46258__auto____1;
return cljs$core$async$state_machine__46258__auto__;
})()
})();
var state__46326__auto__ = (function (){var statearr_46782 = (f__46325__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46325__auto__.cljs$core$IFn$_invoke$arity$0() : f__46325__auto__.call(null));
(statearr_46782[(6)] = c__46324__auto__);

return statearr_46782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46326__auto__);
}));

return c__46324__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46783 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46783 = (function (ch,cs,meta46784){
this.ch = ch;
this.cs = cs;
this.meta46784 = meta46784;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46785,meta46784__$1){
var self__ = this;
var _46785__$1 = this;
return (new cljs.core.async.t_cljs$core$async46783(self__.ch,self__.cs,meta46784__$1));
}));

(cljs.core.async.t_cljs$core$async46783.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46785){
var self__ = this;
var _46785__$1 = this;
return self__.meta46784;
}));

(cljs.core.async.t_cljs$core$async46783.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46783.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46783.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46783.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async46783.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async46783.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async46783.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta46784","meta46784",-1796685952,null)], null);
}));

(cljs.core.async.t_cljs$core$async46783.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46783.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46783");

(cljs.core.async.t_cljs$core$async46783.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46783");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46783.
 */
cljs.core.async.__GT_t_cljs$core$async46783 = (function cljs$core$async$mult_$___GT_t_cljs$core$async46783(ch__$1,cs__$1,meta46784){
return (new cljs.core.async.t_cljs$core$async46783(ch__$1,cs__$1,meta46784));
});

}

return (new cljs.core.async.t_cljs$core$async46783(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__46324__auto___48157 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46325__auto__ = (function (){var switch__46257__auto__ = (function (state_46920){
var state_val_46921 = (state_46920[(1)]);
if((state_val_46921 === (7))){
var inst_46916 = (state_46920[(2)]);
var state_46920__$1 = state_46920;
var statearr_46922_48158 = state_46920__$1;
(statearr_46922_48158[(2)] = inst_46916);

(statearr_46922_48158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (20))){
var inst_46819 = (state_46920[(7)]);
var inst_46831 = cljs.core.first(inst_46819);
var inst_46832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46831,(0),null);
var inst_46833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46831,(1),null);
var state_46920__$1 = (function (){var statearr_46923 = state_46920;
(statearr_46923[(8)] = inst_46832);

return statearr_46923;
})();
if(cljs.core.truth_(inst_46833)){
var statearr_46924_48159 = state_46920__$1;
(statearr_46924_48159[(1)] = (22));

} else {
var statearr_46925_48160 = state_46920__$1;
(statearr_46925_48160[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (27))){
var inst_46863 = (state_46920[(9)]);
var inst_46788 = (state_46920[(10)]);
var inst_46868 = (state_46920[(11)]);
var inst_46861 = (state_46920[(12)]);
var inst_46868__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_46861,inst_46863);
var inst_46869 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46868__$1,inst_46788,done);
var state_46920__$1 = (function (){var statearr_46926 = state_46920;
(statearr_46926[(11)] = inst_46868__$1);

return statearr_46926;
})();
if(cljs.core.truth_(inst_46869)){
var statearr_46927_48162 = state_46920__$1;
(statearr_46927_48162[(1)] = (30));

} else {
var statearr_46928_48163 = state_46920__$1;
(statearr_46928_48163[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (1))){
var state_46920__$1 = state_46920;
var statearr_46929_48165 = state_46920__$1;
(statearr_46929_48165[(2)] = null);

(statearr_46929_48165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (24))){
var inst_46819 = (state_46920[(7)]);
var inst_46838 = (state_46920[(2)]);
var inst_46839 = cljs.core.next(inst_46819);
var inst_46797 = inst_46839;
var inst_46798 = null;
var inst_46799 = (0);
var inst_46800 = (0);
var state_46920__$1 = (function (){var statearr_46930 = state_46920;
(statearr_46930[(13)] = inst_46800);

(statearr_46930[(14)] = inst_46838);

(statearr_46930[(15)] = inst_46797);

(statearr_46930[(16)] = inst_46798);

(statearr_46930[(17)] = inst_46799);

return statearr_46930;
})();
var statearr_46931_48167 = state_46920__$1;
(statearr_46931_48167[(2)] = null);

(statearr_46931_48167[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (39))){
var state_46920__$1 = state_46920;
var statearr_46935_48170 = state_46920__$1;
(statearr_46935_48170[(2)] = null);

(statearr_46935_48170[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (4))){
var inst_46788 = (state_46920[(10)]);
var inst_46788__$1 = (state_46920[(2)]);
var inst_46789 = (inst_46788__$1 == null);
var state_46920__$1 = (function (){var statearr_46936 = state_46920;
(statearr_46936[(10)] = inst_46788__$1);

return statearr_46936;
})();
if(cljs.core.truth_(inst_46789)){
var statearr_46937_48172 = state_46920__$1;
(statearr_46937_48172[(1)] = (5));

} else {
var statearr_46938_48173 = state_46920__$1;
(statearr_46938_48173[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (15))){
var inst_46800 = (state_46920[(13)]);
var inst_46797 = (state_46920[(15)]);
var inst_46798 = (state_46920[(16)]);
var inst_46799 = (state_46920[(17)]);
var inst_46815 = (state_46920[(2)]);
var inst_46816 = (inst_46800 + (1));
var tmp46932 = inst_46797;
var tmp46933 = inst_46798;
var tmp46934 = inst_46799;
var inst_46797__$1 = tmp46932;
var inst_46798__$1 = tmp46933;
var inst_46799__$1 = tmp46934;
var inst_46800__$1 = inst_46816;
var state_46920__$1 = (function (){var statearr_46939 = state_46920;
(statearr_46939[(13)] = inst_46800__$1);

(statearr_46939[(18)] = inst_46815);

(statearr_46939[(15)] = inst_46797__$1);

(statearr_46939[(16)] = inst_46798__$1);

(statearr_46939[(17)] = inst_46799__$1);

return statearr_46939;
})();
var statearr_46940_48174 = state_46920__$1;
(statearr_46940_48174[(2)] = null);

(statearr_46940_48174[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (21))){
var inst_46842 = (state_46920[(2)]);
var state_46920__$1 = state_46920;
var statearr_46944_48175 = state_46920__$1;
(statearr_46944_48175[(2)] = inst_46842);

(statearr_46944_48175[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (31))){
var inst_46868 = (state_46920[(11)]);
var inst_46872 = done(null);
var inst_46873 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46868);
var state_46920__$1 = (function (){var statearr_46945 = state_46920;
(statearr_46945[(19)] = inst_46872);

return statearr_46945;
})();
var statearr_46946_48177 = state_46920__$1;
(statearr_46946_48177[(2)] = inst_46873);

(statearr_46946_48177[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (32))){
var inst_46863 = (state_46920[(9)]);
var inst_46860 = (state_46920[(20)]);
var inst_46862 = (state_46920[(21)]);
var inst_46861 = (state_46920[(12)]);
var inst_46875 = (state_46920[(2)]);
var inst_46876 = (inst_46863 + (1));
var tmp46941 = inst_46860;
var tmp46942 = inst_46862;
var tmp46943 = inst_46861;
var inst_46860__$1 = tmp46941;
var inst_46861__$1 = tmp46943;
var inst_46862__$1 = tmp46942;
var inst_46863__$1 = inst_46876;
var state_46920__$1 = (function (){var statearr_46947 = state_46920;
(statearr_46947[(9)] = inst_46863__$1);

(statearr_46947[(22)] = inst_46875);

(statearr_46947[(20)] = inst_46860__$1);

(statearr_46947[(21)] = inst_46862__$1);

(statearr_46947[(12)] = inst_46861__$1);

return statearr_46947;
})();
var statearr_46948_48178 = state_46920__$1;
(statearr_46948_48178[(2)] = null);

(statearr_46948_48178[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (40))){
var inst_46888 = (state_46920[(23)]);
var inst_46892 = done(null);
var inst_46893 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46888);
var state_46920__$1 = (function (){var statearr_46949 = state_46920;
(statearr_46949[(24)] = inst_46892);

return statearr_46949;
})();
var statearr_46950_48183 = state_46920__$1;
(statearr_46950_48183[(2)] = inst_46893);

(statearr_46950_48183[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (33))){
var inst_46879 = (state_46920[(25)]);
var inst_46881 = cljs.core.chunked_seq_QMARK_(inst_46879);
var state_46920__$1 = state_46920;
if(inst_46881){
var statearr_46951_48185 = state_46920__$1;
(statearr_46951_48185[(1)] = (36));

} else {
var statearr_46952_48188 = state_46920__$1;
(statearr_46952_48188[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (13))){
var inst_46809 = (state_46920[(26)]);
var inst_46812 = cljs.core.async.close_BANG_(inst_46809);
var state_46920__$1 = state_46920;
var statearr_46953_48190 = state_46920__$1;
(statearr_46953_48190[(2)] = inst_46812);

(statearr_46953_48190[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (22))){
var inst_46832 = (state_46920[(8)]);
var inst_46835 = cljs.core.async.close_BANG_(inst_46832);
var state_46920__$1 = state_46920;
var statearr_46954_48191 = state_46920__$1;
(statearr_46954_48191[(2)] = inst_46835);

(statearr_46954_48191[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (36))){
var inst_46879 = (state_46920[(25)]);
var inst_46883 = cljs.core.chunk_first(inst_46879);
var inst_46884 = cljs.core.chunk_rest(inst_46879);
var inst_46885 = cljs.core.count(inst_46883);
var inst_46860 = inst_46884;
var inst_46861 = inst_46883;
var inst_46862 = inst_46885;
var inst_46863 = (0);
var state_46920__$1 = (function (){var statearr_46955 = state_46920;
(statearr_46955[(9)] = inst_46863);

(statearr_46955[(20)] = inst_46860);

(statearr_46955[(21)] = inst_46862);

(statearr_46955[(12)] = inst_46861);

return statearr_46955;
})();
var statearr_46956_48195 = state_46920__$1;
(statearr_46956_48195[(2)] = null);

(statearr_46956_48195[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (41))){
var inst_46879 = (state_46920[(25)]);
var inst_46895 = (state_46920[(2)]);
var inst_46896 = cljs.core.next(inst_46879);
var inst_46860 = inst_46896;
var inst_46861 = null;
var inst_46862 = (0);
var inst_46863 = (0);
var state_46920__$1 = (function (){var statearr_46957 = state_46920;
(statearr_46957[(9)] = inst_46863);

(statearr_46957[(20)] = inst_46860);

(statearr_46957[(21)] = inst_46862);

(statearr_46957[(27)] = inst_46895);

(statearr_46957[(12)] = inst_46861);

return statearr_46957;
})();
var statearr_46958_48196 = state_46920__$1;
(statearr_46958_48196[(2)] = null);

(statearr_46958_48196[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (43))){
var state_46920__$1 = state_46920;
var statearr_46959_48197 = state_46920__$1;
(statearr_46959_48197[(2)] = null);

(statearr_46959_48197[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (29))){
var inst_46904 = (state_46920[(2)]);
var state_46920__$1 = state_46920;
var statearr_46960_48199 = state_46920__$1;
(statearr_46960_48199[(2)] = inst_46904);

(statearr_46960_48199[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (44))){
var inst_46913 = (state_46920[(2)]);
var state_46920__$1 = (function (){var statearr_46961 = state_46920;
(statearr_46961[(28)] = inst_46913);

return statearr_46961;
})();
var statearr_46962_48203 = state_46920__$1;
(statearr_46962_48203[(2)] = null);

(statearr_46962_48203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (6))){
var inst_46852 = (state_46920[(29)]);
var inst_46851 = cljs.core.deref(cs);
var inst_46852__$1 = cljs.core.keys(inst_46851);
var inst_46853 = cljs.core.count(inst_46852__$1);
var inst_46854 = cljs.core.reset_BANG_(dctr,inst_46853);
var inst_46859 = cljs.core.seq(inst_46852__$1);
var inst_46860 = inst_46859;
var inst_46861 = null;
var inst_46862 = (0);
var inst_46863 = (0);
var state_46920__$1 = (function (){var statearr_46963 = state_46920;
(statearr_46963[(9)] = inst_46863);

(statearr_46963[(29)] = inst_46852__$1);

(statearr_46963[(20)] = inst_46860);

(statearr_46963[(21)] = inst_46862);

(statearr_46963[(30)] = inst_46854);

(statearr_46963[(12)] = inst_46861);

return statearr_46963;
})();
var statearr_46964_48209 = state_46920__$1;
(statearr_46964_48209[(2)] = null);

(statearr_46964_48209[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (28))){
var inst_46860 = (state_46920[(20)]);
var inst_46879 = (state_46920[(25)]);
var inst_46879__$1 = cljs.core.seq(inst_46860);
var state_46920__$1 = (function (){var statearr_46965 = state_46920;
(statearr_46965[(25)] = inst_46879__$1);

return statearr_46965;
})();
if(inst_46879__$1){
var statearr_46966_48217 = state_46920__$1;
(statearr_46966_48217[(1)] = (33));

} else {
var statearr_46967_48218 = state_46920__$1;
(statearr_46967_48218[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (25))){
var inst_46863 = (state_46920[(9)]);
var inst_46862 = (state_46920[(21)]);
var inst_46865 = (inst_46863 < inst_46862);
var inst_46866 = inst_46865;
var state_46920__$1 = state_46920;
if(cljs.core.truth_(inst_46866)){
var statearr_46968_48225 = state_46920__$1;
(statearr_46968_48225[(1)] = (27));

} else {
var statearr_46969_48226 = state_46920__$1;
(statearr_46969_48226[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (34))){
var state_46920__$1 = state_46920;
var statearr_46970_48227 = state_46920__$1;
(statearr_46970_48227[(2)] = null);

(statearr_46970_48227[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (17))){
var state_46920__$1 = state_46920;
var statearr_46971_48228 = state_46920__$1;
(statearr_46971_48228[(2)] = null);

(statearr_46971_48228[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (3))){
var inst_46918 = (state_46920[(2)]);
var state_46920__$1 = state_46920;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46920__$1,inst_46918);
} else {
if((state_val_46921 === (12))){
var inst_46847 = (state_46920[(2)]);
var state_46920__$1 = state_46920;
var statearr_46972_48229 = state_46920__$1;
(statearr_46972_48229[(2)] = inst_46847);

(statearr_46972_48229[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (2))){
var state_46920__$1 = state_46920;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46920__$1,(4),ch);
} else {
if((state_val_46921 === (23))){
var state_46920__$1 = state_46920;
var statearr_46973_48230 = state_46920__$1;
(statearr_46973_48230[(2)] = null);

(statearr_46973_48230[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (35))){
var inst_46902 = (state_46920[(2)]);
var state_46920__$1 = state_46920;
var statearr_46974_48231 = state_46920__$1;
(statearr_46974_48231[(2)] = inst_46902);

(statearr_46974_48231[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (19))){
var inst_46819 = (state_46920[(7)]);
var inst_46823 = cljs.core.chunk_first(inst_46819);
var inst_46824 = cljs.core.chunk_rest(inst_46819);
var inst_46825 = cljs.core.count(inst_46823);
var inst_46797 = inst_46824;
var inst_46798 = inst_46823;
var inst_46799 = inst_46825;
var inst_46800 = (0);
var state_46920__$1 = (function (){var statearr_46975 = state_46920;
(statearr_46975[(13)] = inst_46800);

(statearr_46975[(15)] = inst_46797);

(statearr_46975[(16)] = inst_46798);

(statearr_46975[(17)] = inst_46799);

return statearr_46975;
})();
var statearr_46976_48233 = state_46920__$1;
(statearr_46976_48233[(2)] = null);

(statearr_46976_48233[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (11))){
var inst_46797 = (state_46920[(15)]);
var inst_46819 = (state_46920[(7)]);
var inst_46819__$1 = cljs.core.seq(inst_46797);
var state_46920__$1 = (function (){var statearr_46977 = state_46920;
(statearr_46977[(7)] = inst_46819__$1);

return statearr_46977;
})();
if(inst_46819__$1){
var statearr_46978_48234 = state_46920__$1;
(statearr_46978_48234[(1)] = (16));

} else {
var statearr_46979_48235 = state_46920__$1;
(statearr_46979_48235[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (9))){
var inst_46849 = (state_46920[(2)]);
var state_46920__$1 = state_46920;
var statearr_46980_48236 = state_46920__$1;
(statearr_46980_48236[(2)] = inst_46849);

(statearr_46980_48236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (5))){
var inst_46795 = cljs.core.deref(cs);
var inst_46796 = cljs.core.seq(inst_46795);
var inst_46797 = inst_46796;
var inst_46798 = null;
var inst_46799 = (0);
var inst_46800 = (0);
var state_46920__$1 = (function (){var statearr_46981 = state_46920;
(statearr_46981[(13)] = inst_46800);

(statearr_46981[(15)] = inst_46797);

(statearr_46981[(16)] = inst_46798);

(statearr_46981[(17)] = inst_46799);

return statearr_46981;
})();
var statearr_46982_48244 = state_46920__$1;
(statearr_46982_48244[(2)] = null);

(statearr_46982_48244[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (14))){
var state_46920__$1 = state_46920;
var statearr_46983_48245 = state_46920__$1;
(statearr_46983_48245[(2)] = null);

(statearr_46983_48245[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (45))){
var inst_46910 = (state_46920[(2)]);
var state_46920__$1 = state_46920;
var statearr_46984_48246 = state_46920__$1;
(statearr_46984_48246[(2)] = inst_46910);

(statearr_46984_48246[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (26))){
var inst_46852 = (state_46920[(29)]);
var inst_46906 = (state_46920[(2)]);
var inst_46907 = cljs.core.seq(inst_46852);
var state_46920__$1 = (function (){var statearr_46985 = state_46920;
(statearr_46985[(31)] = inst_46906);

return statearr_46985;
})();
if(inst_46907){
var statearr_46986_48247 = state_46920__$1;
(statearr_46986_48247[(1)] = (42));

} else {
var statearr_46987_48248 = state_46920__$1;
(statearr_46987_48248[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (16))){
var inst_46819 = (state_46920[(7)]);
var inst_46821 = cljs.core.chunked_seq_QMARK_(inst_46819);
var state_46920__$1 = state_46920;
if(inst_46821){
var statearr_46988_48249 = state_46920__$1;
(statearr_46988_48249[(1)] = (19));

} else {
var statearr_46989_48251 = state_46920__$1;
(statearr_46989_48251[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (38))){
var inst_46899 = (state_46920[(2)]);
var state_46920__$1 = state_46920;
var statearr_46990_48252 = state_46920__$1;
(statearr_46990_48252[(2)] = inst_46899);

(statearr_46990_48252[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (30))){
var state_46920__$1 = state_46920;
var statearr_46991_48253 = state_46920__$1;
(statearr_46991_48253[(2)] = null);

(statearr_46991_48253[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (10))){
var inst_46800 = (state_46920[(13)]);
var inst_46798 = (state_46920[(16)]);
var inst_46808 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_46798,inst_46800);
var inst_46809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46808,(0),null);
var inst_46810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46808,(1),null);
var state_46920__$1 = (function (){var statearr_46992 = state_46920;
(statearr_46992[(26)] = inst_46809);

return statearr_46992;
})();
if(cljs.core.truth_(inst_46810)){
var statearr_46993_48260 = state_46920__$1;
(statearr_46993_48260[(1)] = (13));

} else {
var statearr_46994_48261 = state_46920__$1;
(statearr_46994_48261[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (18))){
var inst_46845 = (state_46920[(2)]);
var state_46920__$1 = state_46920;
var statearr_46995_48262 = state_46920__$1;
(statearr_46995_48262[(2)] = inst_46845);

(statearr_46995_48262[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (42))){
var state_46920__$1 = state_46920;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46920__$1,(45),dchan);
} else {
if((state_val_46921 === (37))){
var inst_46788 = (state_46920[(10)]);
var inst_46888 = (state_46920[(23)]);
var inst_46879 = (state_46920[(25)]);
var inst_46888__$1 = cljs.core.first(inst_46879);
var inst_46889 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46888__$1,inst_46788,done);
var state_46920__$1 = (function (){var statearr_46996 = state_46920;
(statearr_46996[(23)] = inst_46888__$1);

return statearr_46996;
})();
if(cljs.core.truth_(inst_46889)){
var statearr_46997_48264 = state_46920__$1;
(statearr_46997_48264[(1)] = (39));

} else {
var statearr_46998_48265 = state_46920__$1;
(statearr_46998_48265[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (8))){
var inst_46800 = (state_46920[(13)]);
var inst_46799 = (state_46920[(17)]);
var inst_46802 = (inst_46800 < inst_46799);
var inst_46803 = inst_46802;
var state_46920__$1 = state_46920;
if(cljs.core.truth_(inst_46803)){
var statearr_46999_48266 = state_46920__$1;
(statearr_46999_48266[(1)] = (10));

} else {
var statearr_47000_48267 = state_46920__$1;
(statearr_47000_48267[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__46258__auto__ = null;
var cljs$core$async$mult_$_state_machine__46258__auto____0 = (function (){
var statearr_47001 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47001[(0)] = cljs$core$async$mult_$_state_machine__46258__auto__);

(statearr_47001[(1)] = (1));

return statearr_47001;
});
var cljs$core$async$mult_$_state_machine__46258__auto____1 = (function (state_46920){
while(true){
var ret_value__46259__auto__ = (function (){try{while(true){
var result__46260__auto__ = switch__46257__auto__(state_46920);
if(cljs.core.keyword_identical_QMARK_(result__46260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46260__auto__;
}
break;
}
}catch (e47002){if((e47002 instanceof Object)){
var ex__46261__auto__ = e47002;
var statearr_47003_48274 = state_46920;
(statearr_47003_48274[(5)] = ex__46261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47002;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48275 = state_46920;
state_46920 = G__48275;
continue;
} else {
return ret_value__46259__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__46258__auto__ = function(state_46920){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__46258__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__46258__auto____1.call(this,state_46920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__46258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__46258__auto____0;
cljs$core$async$mult_$_state_machine__46258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__46258__auto____1;
return cljs$core$async$mult_$_state_machine__46258__auto__;
})()
})();
var state__46326__auto__ = (function (){var statearr_47004 = (f__46325__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46325__auto__.cljs$core$IFn$_invoke$arity$0() : f__46325__auto__.call(null));
(statearr_47004[(6)] = c__46324__auto___48157);

return statearr_47004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46326__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__47006 = arguments.length;
switch (G__47006) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48286 = arguments.length;
var i__4790__auto___48287 = (0);
while(true){
if((i__4790__auto___48287 < len__4789__auto___48286)){
args__4795__auto__.push((arguments[i__4790__auto___48287]));

var G__48288 = (i__4790__auto___48287 + (1));
i__4790__auto___48287 = G__48288;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__47011){
var map__47012 = p__47011;
var map__47012__$1 = (((((!((map__47012 == null))))?(((((map__47012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47012):map__47012);
var opts = map__47012__$1;
var statearr_47014_48289 = state;
(statearr_47014_48289[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_47015_48290 = state;
(statearr_47015_48290[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_47016_48293 = state;
(statearr_47016_48293[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq47007){
var G__47008 = cljs.core.first(seq47007);
var seq47007__$1 = cljs.core.next(seq47007);
var G__47009 = cljs.core.first(seq47007__$1);
var seq47007__$2 = cljs.core.next(seq47007__$1);
var G__47010 = cljs.core.first(seq47007__$2);
var seq47007__$3 = cljs.core.next(seq47007__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47008,G__47009,G__47010,seq47007__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47017 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47017 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta47018){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta47018 = meta47018;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47019,meta47018__$1){
var self__ = this;
var _47019__$1 = this;
return (new cljs.core.async.t_cljs$core$async47017(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta47018__$1));
}));

(cljs.core.async.t_cljs$core$async47017.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47019){
var self__ = this;
var _47019__$1 = this;
return self__.meta47018;
}));

(cljs.core.async.t_cljs$core$async47017.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47017.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async47017.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47017.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47017.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47017.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47017.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47017.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47017.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta47018","meta47018",1427552145,null)], null);
}));

(cljs.core.async.t_cljs$core$async47017.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47017.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47017");

(cljs.core.async.t_cljs$core$async47017.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47017");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47017.
 */
cljs.core.async.__GT_t_cljs$core$async47017 = (function cljs$core$async$mix_$___GT_t_cljs$core$async47017(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47018){
return (new cljs.core.async.t_cljs$core$async47017(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47018));
});

}

return (new cljs.core.async.t_cljs$core$async47017(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46324__auto___48302 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46325__auto__ = (function (){var switch__46257__auto__ = (function (state_47121){
var state_val_47122 = (state_47121[(1)]);
if((state_val_47122 === (7))){
var inst_47036 = (state_47121[(2)]);
var state_47121__$1 = state_47121;
var statearr_47123_48303 = state_47121__$1;
(statearr_47123_48303[(2)] = inst_47036);

(statearr_47123_48303[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47122 === (20))){
var inst_47048 = (state_47121[(7)]);
var state_47121__$1 = state_47121;
var statearr_47124_48304 = state_47121__$1;
(statearr_47124_48304[(2)] = inst_47048);

(statearr_47124_48304[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47122 === (27))){
var state_47121__$1 = state_47121;
var statearr_47125_48306 = state_47121__$1;
(statearr_47125_48306[(2)] = null);

(statearr_47125_48306[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47122 === (1))){
var inst_47023 = (state_47121[(8)]);
var inst_47023__$1 = calc_state();
var inst_47025 = (inst_47023__$1 == null);
var inst_47026 = cljs.core.not(inst_47025);
var state_47121__$1 = (function (){var statearr_47126 = state_47121;
(statearr_47126[(8)] = inst_47023__$1);

return statearr_47126;
})();
if(inst_47026){
var statearr_47127_48307 = state_47121__$1;
(statearr_47127_48307[(1)] = (2));

} else {
var statearr_47128_48308 = state_47121__$1;
(statearr_47128_48308[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47122 === (24))){
var inst_47081 = (state_47121[(9)]);
var inst_47095 = (state_47121[(10)]);
var inst_47072 = (state_47121[(11)]);
var inst_47095__$1 = (inst_47072.cljs$core$IFn$_invoke$arity$1 ? inst_47072.cljs$core$IFn$_invoke$arity$1(inst_47081) : inst_47072.call(null,inst_47081));
var state_47121__$1 = (function (){var statearr_47129 = state_47121;
(statearr_47129[(10)] = inst_47095__$1);

return statearr_47129;
})();
if(cljs.core.truth_(inst_47095__$1)){
var statearr_47130_48309 = state_47121__$1;
(statearr_47130_48309[(1)] = (29));

} else {
var statearr_47131_48310 = state_47121__$1;
(statearr_47131_48310[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47122 === (4))){
var inst_47039 = (state_47121[(2)]);
var state_47121__$1 = state_47121;
if(cljs.core.truth_(inst_47039)){
var statearr_47132_48311 = state_47121__$1;
(statearr_47132_48311[(1)] = (8));

} else {
var statearr_47133_48312 = state_47121__$1;
(statearr_47133_48312[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47122 === (15))){
var inst_47066 = (state_47121[(2)]);
var state_47121__$1 = state_47121;
if(cljs.core.truth_(inst_47066)){
var statearr_47134_48315 = state_47121__$1;
(statearr_47134_48315[(1)] = (19));

} else {
var statearr_47135_48316 = state_47121__$1;
(statearr_47135_48316[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47122 === (21))){
var inst_47071 = (state_47121[(12)]);
var inst_47071__$1 = (state_47121[(2)]);
var inst_47072 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47071__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47073 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47071__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47074 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47071__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_47121__$1 = (function (){var statearr_47136 = state_47121;
(statearr_47136[(13)] = inst_47073);

(statearr_47136[(11)] = inst_47072);

(statearr_47136[(12)] = inst_47071__$1);

return statearr_47136;
})();
return cljs.core.async.ioc_alts_BANG_(state_47121__$1,(22),inst_47074);
} else {
if((state_val_47122 === (31))){
var inst_47103 = (state_47121[(2)]);
var state_47121__$1 = state_47121;
if(cljs.core.truth_(inst_47103)){
var statearr_47137_48336 = state_47121__$1;
(statearr_47137_48336[(1)] = (32));

} else {
var statearr_47138_48337 = state_47121__$1;
(statearr_47138_48337[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47122 === (32))){
var inst_47080 = (state_47121[(14)]);
var state_47121__$1 = state_47121;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47121__$1,(35),out,inst_47080);
} else {
if((state_val_47122 === (33))){
var inst_47071 = (state_47121[(12)]);
var inst_47048 = inst_47071;
var state_47121__$1 = (function (){var statearr_47139 = state_47121;
(statearr_47139[(7)] = inst_47048);

return statearr_47139;
})();
var statearr_47140_48343 = state_47121__$1;
(statearr_47140_48343[(2)] = null);

(statearr_47140_48343[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47122 === (13))){
var inst_47048 = (state_47121[(7)]);
var inst_47055 = inst_47048.cljs$lang$protocol_mask$partition0$;
var inst_47056 = (inst_47055 & (64));
var inst_47057 = inst_47048.cljs$core$ISeq$;
var inst_47058 = (cljs.core.PROTOCOL_SENTINEL === inst_47057);
var inst_47059 = ((inst_47056) || (inst_47058));
var state_47121__$1 = state_47121;
if(cljs.core.truth_(inst_47059)){
var statearr_47141_48347 = state_47121__$1;
(statearr_47141_48347[(1)] = (16));

} else {
var statearr_47142_48348 = state_47121__$1;
(statearr_47142_48348[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47122 === (22))){
var inst_47081 = (state_47121[(9)]);
var inst_47080 = (state_47121[(14)]);
var inst_47079 = (state_47121[(2)]);
var inst_47080__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47079,(0),null);
var inst_47081__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47079,(1),null);
var inst_47082 = (inst_47080__$1 == null);
var inst_47083 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47081__$1,change);
var inst_47084 = ((inst_47082) || (inst_47083));
var state_47121__$1 = (function (){var statearr_47143 = state_47121;
(statearr_47143[(9)] = inst_47081__$1);

(statearr_47143[(14)] = inst_47080__$1);

return statearr_47143;
})();
if(cljs.core.truth_(inst_47084)){
var statearr_47144_48349 = state_47121__$1;
(statearr_47144_48349[(1)] = (23));

} else {
var statearr_47145_48350 = state_47121__$1;
(statearr_47145_48350[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47122 === (36))){
var inst_47071 = (state_47121[(12)]);
var inst_47048 = inst_47071;
var state_47121__$1 = (function (){var statearr_47146 = state_47121;
(statearr_47146[(7)] = inst_47048);

return statearr_47146;
})();
var statearr_47147_48352 = state_47121__$1;
(statearr_47147_48352[(2)] = null);

(statearr_47147_48352[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47122 === (29))){
var inst_47095 = (state_47121[(10)]);
var state_47121__$1 = state_47121;
var statearr_47148_48353 = state_47121__$1;
(statearr_47148_48353[(2)] = inst_47095);

(statearr_47148_48353[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47122 === (6))){
var state_47121__$1 = state_47121;
var statearr_47149_48354 = state_47121__$1;
(statearr_47149_48354[(2)] = false);

(statearr_47149_48354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47122 === (28))){
var inst_47091 = (state_47121[(2)]);
var inst_47092 = calc_state();
var inst_47048 = inst_47092;
var state_47121__$1 = (function (){var statearr_47150 = state_47121;
(statearr_47150[(7)] = inst_47048);

(statearr_47150[(15)] = inst_47091);

return statearr_47150;
})();
var statearr_47151_48355 = state_47121__$1;
(statearr_47151_48355[(2)] = null);

(statearr_47151_48355[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47122 === (25))){
var inst_47117 = (state_47121[(2)]);
var state_47121__$1 = state_47121;
var statearr_47152_48358 = state_47121__$1;
(statearr_47152_48358[(2)] = inst_47117);

(statearr_47152_48358[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47122 === (34))){
var inst_47115 = (state_47121[(2)]);
var state_47121__$1 = state_47121;
var statearr_47153_48359 = state_47121__$1;
(statearr_47153_48359[(2)] = inst_47115);

(statearr_47153_48359[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47122 === (17))){
var state_47121__$1 = state_47121;
var statearr_47154_48360 = state_47121__$1;
(statearr_47154_48360[(2)] = false);

(statearr_47154_48360[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47122 === (3))){
var state_47121__$1 = state_47121;
var statearr_47155_48362 = state_47121__$1;
(statearr_47155_48362[(2)] = false);

(statearr_47155_48362[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47122 === (12))){
var inst_47119 = (state_47121[(2)]);
var state_47121__$1 = state_47121;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47121__$1,inst_47119);
} else {
if((state_val_47122 === (2))){
var inst_47023 = (state_47121[(8)]);
var inst_47028 = inst_47023.cljs$lang$protocol_mask$partition0$;
var inst_47029 = (inst_47028 & (64));
var inst_47030 = inst_47023.cljs$core$ISeq$;
var inst_47031 = (cljs.core.PROTOCOL_SENTINEL === inst_47030);
var inst_47032 = ((inst_47029) || (inst_47031));
var state_47121__$1 = state_47121;
if(cljs.core.truth_(inst_47032)){
var statearr_47156_48365 = state_47121__$1;
(statearr_47156_48365[(1)] = (5));

} else {
var statearr_47157_48366 = state_47121__$1;
(statearr_47157_48366[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47122 === (23))){
var inst_47080 = (state_47121[(14)]);
var inst_47086 = (inst_47080 == null);
var state_47121__$1 = state_47121;
if(cljs.core.truth_(inst_47086)){
var statearr_47158_48369 = state_47121__$1;
(statearr_47158_48369[(1)] = (26));

} else {
var statearr_47159_48370 = state_47121__$1;
(statearr_47159_48370[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47122 === (35))){
var inst_47106 = (state_47121[(2)]);
var state_47121__$1 = state_47121;
if(cljs.core.truth_(inst_47106)){
var statearr_47160_48374 = state_47121__$1;
(statearr_47160_48374[(1)] = (36));

} else {
var statearr_47161_48375 = state_47121__$1;
(statearr_47161_48375[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47122 === (19))){
var inst_47048 = (state_47121[(7)]);
var inst_47068 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_47048);
var state_47121__$1 = state_47121;
var statearr_47162_48376 = state_47121__$1;
(statearr_47162_48376[(2)] = inst_47068);

(statearr_47162_48376[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47122 === (11))){
var inst_47048 = (state_47121[(7)]);
var inst_47052 = (inst_47048 == null);
var inst_47053 = cljs.core.not(inst_47052);
var state_47121__$1 = state_47121;
if(inst_47053){
var statearr_47163_48378 = state_47121__$1;
(statearr_47163_48378[(1)] = (13));

} else {
var statearr_47164_48379 = state_47121__$1;
(statearr_47164_48379[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47122 === (9))){
var inst_47023 = (state_47121[(8)]);
var state_47121__$1 = state_47121;
var statearr_47165_48380 = state_47121__$1;
(statearr_47165_48380[(2)] = inst_47023);

(statearr_47165_48380[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47122 === (5))){
var state_47121__$1 = state_47121;
var statearr_47166_48383 = state_47121__$1;
(statearr_47166_48383[(2)] = true);

(statearr_47166_48383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47122 === (14))){
var state_47121__$1 = state_47121;
var statearr_47167_48384 = state_47121__$1;
(statearr_47167_48384[(2)] = false);

(statearr_47167_48384[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47122 === (26))){
var inst_47081 = (state_47121[(9)]);
var inst_47088 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_47081);
var state_47121__$1 = state_47121;
var statearr_47168_48386 = state_47121__$1;
(statearr_47168_48386[(2)] = inst_47088);

(statearr_47168_48386[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47122 === (16))){
var state_47121__$1 = state_47121;
var statearr_47169_48387 = state_47121__$1;
(statearr_47169_48387[(2)] = true);

(statearr_47169_48387[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47122 === (38))){
var inst_47111 = (state_47121[(2)]);
var state_47121__$1 = state_47121;
var statearr_47170_48388 = state_47121__$1;
(statearr_47170_48388[(2)] = inst_47111);

(statearr_47170_48388[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47122 === (30))){
var inst_47081 = (state_47121[(9)]);
var inst_47073 = (state_47121[(13)]);
var inst_47072 = (state_47121[(11)]);
var inst_47098 = cljs.core.empty_QMARK_(inst_47072);
var inst_47099 = (inst_47073.cljs$core$IFn$_invoke$arity$1 ? inst_47073.cljs$core$IFn$_invoke$arity$1(inst_47081) : inst_47073.call(null,inst_47081));
var inst_47100 = cljs.core.not(inst_47099);
var inst_47101 = ((inst_47098) && (inst_47100));
var state_47121__$1 = state_47121;
var statearr_47171_48389 = state_47121__$1;
(statearr_47171_48389[(2)] = inst_47101);

(statearr_47171_48389[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47122 === (10))){
var inst_47023 = (state_47121[(8)]);
var inst_47044 = (state_47121[(2)]);
var inst_47045 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47044,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47046 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47044,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47047 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47044,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_47048 = inst_47023;
var state_47121__$1 = (function (){var statearr_47172 = state_47121;
(statearr_47172[(7)] = inst_47048);

(statearr_47172[(16)] = inst_47046);

(statearr_47172[(17)] = inst_47047);

(statearr_47172[(18)] = inst_47045);

return statearr_47172;
})();
var statearr_47173_48391 = state_47121__$1;
(statearr_47173_48391[(2)] = null);

(statearr_47173_48391[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47122 === (18))){
var inst_47063 = (state_47121[(2)]);
var state_47121__$1 = state_47121;
var statearr_47174_48396 = state_47121__$1;
(statearr_47174_48396[(2)] = inst_47063);

(statearr_47174_48396[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47122 === (37))){
var state_47121__$1 = state_47121;
var statearr_47175_48397 = state_47121__$1;
(statearr_47175_48397[(2)] = null);

(statearr_47175_48397[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47122 === (8))){
var inst_47023 = (state_47121[(8)]);
var inst_47041 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_47023);
var state_47121__$1 = state_47121;
var statearr_47176_48398 = state_47121__$1;
(statearr_47176_48398[(2)] = inst_47041);

(statearr_47176_48398[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__46258__auto__ = null;
var cljs$core$async$mix_$_state_machine__46258__auto____0 = (function (){
var statearr_47177 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47177[(0)] = cljs$core$async$mix_$_state_machine__46258__auto__);

(statearr_47177[(1)] = (1));

return statearr_47177;
});
var cljs$core$async$mix_$_state_machine__46258__auto____1 = (function (state_47121){
while(true){
var ret_value__46259__auto__ = (function (){try{while(true){
var result__46260__auto__ = switch__46257__auto__(state_47121);
if(cljs.core.keyword_identical_QMARK_(result__46260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46260__auto__;
}
break;
}
}catch (e47178){if((e47178 instanceof Object)){
var ex__46261__auto__ = e47178;
var statearr_47179_48403 = state_47121;
(statearr_47179_48403[(5)] = ex__46261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47178;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48406 = state_47121;
state_47121 = G__48406;
continue;
} else {
return ret_value__46259__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__46258__auto__ = function(state_47121){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__46258__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__46258__auto____1.call(this,state_47121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__46258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__46258__auto____0;
cljs$core$async$mix_$_state_machine__46258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__46258__auto____1;
return cljs$core$async$mix_$_state_machine__46258__auto__;
})()
})();
var state__46326__auto__ = (function (){var statearr_47180 = (f__46325__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46325__auto__.cljs$core$IFn$_invoke$arity$0() : f__46325__auto__.call(null));
(statearr_47180[(6)] = c__46324__auto___48302);

return statearr_47180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46326__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__47182 = arguments.length;
switch (G__47182) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__47185 = arguments.length;
switch (G__47185) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__47183_SHARP_){
if(cljs.core.truth_((p1__47183_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__47183_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__47183_SHARP_.call(null,topic)))){
return p1__47183_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47183_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47186 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47186 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta47187){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta47187 = meta47187;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47188,meta47187__$1){
var self__ = this;
var _47188__$1 = this;
return (new cljs.core.async.t_cljs$core$async47186(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta47187__$1));
}));

(cljs.core.async.t_cljs$core$async47186.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47188){
var self__ = this;
var _47188__$1 = this;
return self__.meta47187;
}));

(cljs.core.async.t_cljs$core$async47186.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47186.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async47186.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47186.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async47186.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async47186.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async47186.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async47186.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta47187","meta47187",2127900466,null)], null);
}));

(cljs.core.async.t_cljs$core$async47186.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47186.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47186");

(cljs.core.async.t_cljs$core$async47186.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47186");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47186.
 */
cljs.core.async.__GT_t_cljs$core$async47186 = (function cljs$core$async$__GT_t_cljs$core$async47186(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47187){
return (new cljs.core.async.t_cljs$core$async47186(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47187));
});

}

return (new cljs.core.async.t_cljs$core$async47186(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46324__auto___48426 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46325__auto__ = (function (){var switch__46257__auto__ = (function (state_47260){
var state_val_47261 = (state_47260[(1)]);
if((state_val_47261 === (7))){
var inst_47256 = (state_47260[(2)]);
var state_47260__$1 = state_47260;
var statearr_47262_48427 = state_47260__$1;
(statearr_47262_48427[(2)] = inst_47256);

(statearr_47262_48427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47261 === (20))){
var state_47260__$1 = state_47260;
var statearr_47263_48428 = state_47260__$1;
(statearr_47263_48428[(2)] = null);

(statearr_47263_48428[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47261 === (1))){
var state_47260__$1 = state_47260;
var statearr_47264_48430 = state_47260__$1;
(statearr_47264_48430[(2)] = null);

(statearr_47264_48430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47261 === (24))){
var inst_47239 = (state_47260[(7)]);
var inst_47248 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_47239);
var state_47260__$1 = state_47260;
var statearr_47265_48432 = state_47260__$1;
(statearr_47265_48432[(2)] = inst_47248);

(statearr_47265_48432[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47261 === (4))){
var inst_47191 = (state_47260[(8)]);
var inst_47191__$1 = (state_47260[(2)]);
var inst_47192 = (inst_47191__$1 == null);
var state_47260__$1 = (function (){var statearr_47266 = state_47260;
(statearr_47266[(8)] = inst_47191__$1);

return statearr_47266;
})();
if(cljs.core.truth_(inst_47192)){
var statearr_47267_48433 = state_47260__$1;
(statearr_47267_48433[(1)] = (5));

} else {
var statearr_47268_48434 = state_47260__$1;
(statearr_47268_48434[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47261 === (15))){
var inst_47233 = (state_47260[(2)]);
var state_47260__$1 = state_47260;
var statearr_47269_48436 = state_47260__$1;
(statearr_47269_48436[(2)] = inst_47233);

(statearr_47269_48436[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47261 === (21))){
var inst_47253 = (state_47260[(2)]);
var state_47260__$1 = (function (){var statearr_47270 = state_47260;
(statearr_47270[(9)] = inst_47253);

return statearr_47270;
})();
var statearr_47271_48438 = state_47260__$1;
(statearr_47271_48438[(2)] = null);

(statearr_47271_48438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47261 === (13))){
var inst_47215 = (state_47260[(10)]);
var inst_47217 = cljs.core.chunked_seq_QMARK_(inst_47215);
var state_47260__$1 = state_47260;
if(inst_47217){
var statearr_47272_48440 = state_47260__$1;
(statearr_47272_48440[(1)] = (16));

} else {
var statearr_47273_48441 = state_47260__$1;
(statearr_47273_48441[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47261 === (22))){
var inst_47245 = (state_47260[(2)]);
var state_47260__$1 = state_47260;
if(cljs.core.truth_(inst_47245)){
var statearr_47274_48442 = state_47260__$1;
(statearr_47274_48442[(1)] = (23));

} else {
var statearr_47275_48444 = state_47260__$1;
(statearr_47275_48444[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47261 === (6))){
var inst_47239 = (state_47260[(7)]);
var inst_47191 = (state_47260[(8)]);
var inst_47241 = (state_47260[(11)]);
var inst_47239__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_47191) : topic_fn.call(null,inst_47191));
var inst_47240 = cljs.core.deref(mults);
var inst_47241__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47240,inst_47239__$1);
var state_47260__$1 = (function (){var statearr_47276 = state_47260;
(statearr_47276[(7)] = inst_47239__$1);

(statearr_47276[(11)] = inst_47241__$1);

return statearr_47276;
})();
if(cljs.core.truth_(inst_47241__$1)){
var statearr_47277_48451 = state_47260__$1;
(statearr_47277_48451[(1)] = (19));

} else {
var statearr_47278_48452 = state_47260__$1;
(statearr_47278_48452[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47261 === (25))){
var inst_47250 = (state_47260[(2)]);
var state_47260__$1 = state_47260;
var statearr_47279_48453 = state_47260__$1;
(statearr_47279_48453[(2)] = inst_47250);

(statearr_47279_48453[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47261 === (17))){
var inst_47215 = (state_47260[(10)]);
var inst_47224 = cljs.core.first(inst_47215);
var inst_47225 = cljs.core.async.muxch_STAR_(inst_47224);
var inst_47226 = cljs.core.async.close_BANG_(inst_47225);
var inst_47227 = cljs.core.next(inst_47215);
var inst_47201 = inst_47227;
var inst_47202 = null;
var inst_47203 = (0);
var inst_47204 = (0);
var state_47260__$1 = (function (){var statearr_47280 = state_47260;
(statearr_47280[(12)] = inst_47226);

(statearr_47280[(13)] = inst_47201);

(statearr_47280[(14)] = inst_47203);

(statearr_47280[(15)] = inst_47204);

(statearr_47280[(16)] = inst_47202);

return statearr_47280;
})();
var statearr_47281_48455 = state_47260__$1;
(statearr_47281_48455[(2)] = null);

(statearr_47281_48455[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47261 === (3))){
var inst_47258 = (state_47260[(2)]);
var state_47260__$1 = state_47260;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47260__$1,inst_47258);
} else {
if((state_val_47261 === (12))){
var inst_47235 = (state_47260[(2)]);
var state_47260__$1 = state_47260;
var statearr_47282_48456 = state_47260__$1;
(statearr_47282_48456[(2)] = inst_47235);

(statearr_47282_48456[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47261 === (2))){
var state_47260__$1 = state_47260;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47260__$1,(4),ch);
} else {
if((state_val_47261 === (23))){
var state_47260__$1 = state_47260;
var statearr_47283_48462 = state_47260__$1;
(statearr_47283_48462[(2)] = null);

(statearr_47283_48462[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47261 === (19))){
var inst_47191 = (state_47260[(8)]);
var inst_47241 = (state_47260[(11)]);
var inst_47243 = cljs.core.async.muxch_STAR_(inst_47241);
var state_47260__$1 = state_47260;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47260__$1,(22),inst_47243,inst_47191);
} else {
if((state_val_47261 === (11))){
var inst_47201 = (state_47260[(13)]);
var inst_47215 = (state_47260[(10)]);
var inst_47215__$1 = cljs.core.seq(inst_47201);
var state_47260__$1 = (function (){var statearr_47284 = state_47260;
(statearr_47284[(10)] = inst_47215__$1);

return statearr_47284;
})();
if(inst_47215__$1){
var statearr_47285_48463 = state_47260__$1;
(statearr_47285_48463[(1)] = (13));

} else {
var statearr_47286_48464 = state_47260__$1;
(statearr_47286_48464[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47261 === (9))){
var inst_47237 = (state_47260[(2)]);
var state_47260__$1 = state_47260;
var statearr_47287_48465 = state_47260__$1;
(statearr_47287_48465[(2)] = inst_47237);

(statearr_47287_48465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47261 === (5))){
var inst_47198 = cljs.core.deref(mults);
var inst_47199 = cljs.core.vals(inst_47198);
var inst_47200 = cljs.core.seq(inst_47199);
var inst_47201 = inst_47200;
var inst_47202 = null;
var inst_47203 = (0);
var inst_47204 = (0);
var state_47260__$1 = (function (){var statearr_47288 = state_47260;
(statearr_47288[(13)] = inst_47201);

(statearr_47288[(14)] = inst_47203);

(statearr_47288[(15)] = inst_47204);

(statearr_47288[(16)] = inst_47202);

return statearr_47288;
})();
var statearr_47289_48467 = state_47260__$1;
(statearr_47289_48467[(2)] = null);

(statearr_47289_48467[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47261 === (14))){
var state_47260__$1 = state_47260;
var statearr_47293_48468 = state_47260__$1;
(statearr_47293_48468[(2)] = null);

(statearr_47293_48468[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47261 === (16))){
var inst_47215 = (state_47260[(10)]);
var inst_47219 = cljs.core.chunk_first(inst_47215);
var inst_47220 = cljs.core.chunk_rest(inst_47215);
var inst_47221 = cljs.core.count(inst_47219);
var inst_47201 = inst_47220;
var inst_47202 = inst_47219;
var inst_47203 = inst_47221;
var inst_47204 = (0);
var state_47260__$1 = (function (){var statearr_47294 = state_47260;
(statearr_47294[(13)] = inst_47201);

(statearr_47294[(14)] = inst_47203);

(statearr_47294[(15)] = inst_47204);

(statearr_47294[(16)] = inst_47202);

return statearr_47294;
})();
var statearr_47295_48469 = state_47260__$1;
(statearr_47295_48469[(2)] = null);

(statearr_47295_48469[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47261 === (10))){
var inst_47201 = (state_47260[(13)]);
var inst_47203 = (state_47260[(14)]);
var inst_47204 = (state_47260[(15)]);
var inst_47202 = (state_47260[(16)]);
var inst_47209 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_47202,inst_47204);
var inst_47210 = cljs.core.async.muxch_STAR_(inst_47209);
var inst_47211 = cljs.core.async.close_BANG_(inst_47210);
var inst_47212 = (inst_47204 + (1));
var tmp47290 = inst_47201;
var tmp47291 = inst_47203;
var tmp47292 = inst_47202;
var inst_47201__$1 = tmp47290;
var inst_47202__$1 = tmp47292;
var inst_47203__$1 = tmp47291;
var inst_47204__$1 = inst_47212;
var state_47260__$1 = (function (){var statearr_47296 = state_47260;
(statearr_47296[(13)] = inst_47201__$1);

(statearr_47296[(17)] = inst_47211);

(statearr_47296[(14)] = inst_47203__$1);

(statearr_47296[(15)] = inst_47204__$1);

(statearr_47296[(16)] = inst_47202__$1);

return statearr_47296;
})();
var statearr_47297_48472 = state_47260__$1;
(statearr_47297_48472[(2)] = null);

(statearr_47297_48472[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47261 === (18))){
var inst_47230 = (state_47260[(2)]);
var state_47260__$1 = state_47260;
var statearr_47298_48473 = state_47260__$1;
(statearr_47298_48473[(2)] = inst_47230);

(statearr_47298_48473[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47261 === (8))){
var inst_47203 = (state_47260[(14)]);
var inst_47204 = (state_47260[(15)]);
var inst_47206 = (inst_47204 < inst_47203);
var inst_47207 = inst_47206;
var state_47260__$1 = state_47260;
if(cljs.core.truth_(inst_47207)){
var statearr_47299_48479 = state_47260__$1;
(statearr_47299_48479[(1)] = (10));

} else {
var statearr_47300_48480 = state_47260__$1;
(statearr_47300_48480[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46258__auto__ = null;
var cljs$core$async$state_machine__46258__auto____0 = (function (){
var statearr_47301 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47301[(0)] = cljs$core$async$state_machine__46258__auto__);

(statearr_47301[(1)] = (1));

return statearr_47301;
});
var cljs$core$async$state_machine__46258__auto____1 = (function (state_47260){
while(true){
var ret_value__46259__auto__ = (function (){try{while(true){
var result__46260__auto__ = switch__46257__auto__(state_47260);
if(cljs.core.keyword_identical_QMARK_(result__46260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46260__auto__;
}
break;
}
}catch (e47302){if((e47302 instanceof Object)){
var ex__46261__auto__ = e47302;
var statearr_47303_48484 = state_47260;
(statearr_47303_48484[(5)] = ex__46261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47302;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48485 = state_47260;
state_47260 = G__48485;
continue;
} else {
return ret_value__46259__auto__;
}
break;
}
});
cljs$core$async$state_machine__46258__auto__ = function(state_47260){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46258__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46258__auto____1.call(this,state_47260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46258__auto____0;
cljs$core$async$state_machine__46258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46258__auto____1;
return cljs$core$async$state_machine__46258__auto__;
})()
})();
var state__46326__auto__ = (function (){var statearr_47304 = (f__46325__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46325__auto__.cljs$core$IFn$_invoke$arity$0() : f__46325__auto__.call(null));
(statearr_47304[(6)] = c__46324__auto___48426);

return statearr_47304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46326__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__47306 = arguments.length;
switch (G__47306) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__47308 = arguments.length;
switch (G__47308) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__47310 = arguments.length;
switch (G__47310) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__46324__auto___48493 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46325__auto__ = (function (){var switch__46257__auto__ = (function (state_47349){
var state_val_47350 = (state_47349[(1)]);
if((state_val_47350 === (7))){
var state_47349__$1 = state_47349;
var statearr_47351_48494 = state_47349__$1;
(statearr_47351_48494[(2)] = null);

(statearr_47351_48494[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47350 === (1))){
var state_47349__$1 = state_47349;
var statearr_47352_48495 = state_47349__$1;
(statearr_47352_48495[(2)] = null);

(statearr_47352_48495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47350 === (4))){
var inst_47313 = (state_47349[(7)]);
var inst_47315 = (inst_47313 < cnt);
var state_47349__$1 = state_47349;
if(cljs.core.truth_(inst_47315)){
var statearr_47353_48496 = state_47349__$1;
(statearr_47353_48496[(1)] = (6));

} else {
var statearr_47354_48497 = state_47349__$1;
(statearr_47354_48497[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47350 === (15))){
var inst_47345 = (state_47349[(2)]);
var state_47349__$1 = state_47349;
var statearr_47355_48502 = state_47349__$1;
(statearr_47355_48502[(2)] = inst_47345);

(statearr_47355_48502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47350 === (13))){
var inst_47338 = cljs.core.async.close_BANG_(out);
var state_47349__$1 = state_47349;
var statearr_47356_48504 = state_47349__$1;
(statearr_47356_48504[(2)] = inst_47338);

(statearr_47356_48504[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47350 === (6))){
var state_47349__$1 = state_47349;
var statearr_47357_48505 = state_47349__$1;
(statearr_47357_48505[(2)] = null);

(statearr_47357_48505[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47350 === (3))){
var inst_47347 = (state_47349[(2)]);
var state_47349__$1 = state_47349;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47349__$1,inst_47347);
} else {
if((state_val_47350 === (12))){
var inst_47335 = (state_47349[(8)]);
var inst_47335__$1 = (state_47349[(2)]);
var inst_47336 = cljs.core.some(cljs.core.nil_QMARK_,inst_47335__$1);
var state_47349__$1 = (function (){var statearr_47358 = state_47349;
(statearr_47358[(8)] = inst_47335__$1);

return statearr_47358;
})();
if(cljs.core.truth_(inst_47336)){
var statearr_47359_48510 = state_47349__$1;
(statearr_47359_48510[(1)] = (13));

} else {
var statearr_47360_48511 = state_47349__$1;
(statearr_47360_48511[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47350 === (2))){
var inst_47312 = cljs.core.reset_BANG_(dctr,cnt);
var inst_47313 = (0);
var state_47349__$1 = (function (){var statearr_47361 = state_47349;
(statearr_47361[(7)] = inst_47313);

(statearr_47361[(9)] = inst_47312);

return statearr_47361;
})();
var statearr_47362_48513 = state_47349__$1;
(statearr_47362_48513[(2)] = null);

(statearr_47362_48513[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47350 === (11))){
var inst_47313 = (state_47349[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_47349,(10),Object,null,(9));
var inst_47322 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_47313) : chs__$1.call(null,inst_47313));
var inst_47323 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_47313) : done.call(null,inst_47313));
var inst_47324 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_47322,inst_47323);
var state_47349__$1 = state_47349;
var statearr_47363_48516 = state_47349__$1;
(statearr_47363_48516[(2)] = inst_47324);


cljs.core.async.impl.ioc_helpers.process_exception(state_47349__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47350 === (9))){
var inst_47313 = (state_47349[(7)]);
var inst_47326 = (state_47349[(2)]);
var inst_47327 = (inst_47313 + (1));
var inst_47313__$1 = inst_47327;
var state_47349__$1 = (function (){var statearr_47364 = state_47349;
(statearr_47364[(7)] = inst_47313__$1);

(statearr_47364[(10)] = inst_47326);

return statearr_47364;
})();
var statearr_47365_48517 = state_47349__$1;
(statearr_47365_48517[(2)] = null);

(statearr_47365_48517[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47350 === (5))){
var inst_47333 = (state_47349[(2)]);
var state_47349__$1 = (function (){var statearr_47366 = state_47349;
(statearr_47366[(11)] = inst_47333);

return statearr_47366;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47349__$1,(12),dchan);
} else {
if((state_val_47350 === (14))){
var inst_47335 = (state_47349[(8)]);
var inst_47340 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_47335);
var state_47349__$1 = state_47349;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47349__$1,(16),out,inst_47340);
} else {
if((state_val_47350 === (16))){
var inst_47342 = (state_47349[(2)]);
var state_47349__$1 = (function (){var statearr_47367 = state_47349;
(statearr_47367[(12)] = inst_47342);

return statearr_47367;
})();
var statearr_47368_48518 = state_47349__$1;
(statearr_47368_48518[(2)] = null);

(statearr_47368_48518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47350 === (10))){
var inst_47317 = (state_47349[(2)]);
var inst_47318 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_47349__$1 = (function (){var statearr_47369 = state_47349;
(statearr_47369[(13)] = inst_47317);

return statearr_47369;
})();
var statearr_47370_48520 = state_47349__$1;
(statearr_47370_48520[(2)] = inst_47318);


cljs.core.async.impl.ioc_helpers.process_exception(state_47349__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47350 === (8))){
var inst_47331 = (state_47349[(2)]);
var state_47349__$1 = state_47349;
var statearr_47371_48521 = state_47349__$1;
(statearr_47371_48521[(2)] = inst_47331);

(statearr_47371_48521[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46258__auto__ = null;
var cljs$core$async$state_machine__46258__auto____0 = (function (){
var statearr_47372 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47372[(0)] = cljs$core$async$state_machine__46258__auto__);

(statearr_47372[(1)] = (1));

return statearr_47372;
});
var cljs$core$async$state_machine__46258__auto____1 = (function (state_47349){
while(true){
var ret_value__46259__auto__ = (function (){try{while(true){
var result__46260__auto__ = switch__46257__auto__(state_47349);
if(cljs.core.keyword_identical_QMARK_(result__46260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46260__auto__;
}
break;
}
}catch (e47373){if((e47373 instanceof Object)){
var ex__46261__auto__ = e47373;
var statearr_47374_48524 = state_47349;
(statearr_47374_48524[(5)] = ex__46261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47373;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48525 = state_47349;
state_47349 = G__48525;
continue;
} else {
return ret_value__46259__auto__;
}
break;
}
});
cljs$core$async$state_machine__46258__auto__ = function(state_47349){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46258__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46258__auto____1.call(this,state_47349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46258__auto____0;
cljs$core$async$state_machine__46258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46258__auto____1;
return cljs$core$async$state_machine__46258__auto__;
})()
})();
var state__46326__auto__ = (function (){var statearr_47375 = (f__46325__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46325__auto__.cljs$core$IFn$_invoke$arity$0() : f__46325__auto__.call(null));
(statearr_47375[(6)] = c__46324__auto___48493);

return statearr_47375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46326__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__47378 = arguments.length;
switch (G__47378) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46324__auto___48529 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46325__auto__ = (function (){var switch__46257__auto__ = (function (state_47410){
var state_val_47411 = (state_47410[(1)]);
if((state_val_47411 === (7))){
var inst_47390 = (state_47410[(7)]);
var inst_47389 = (state_47410[(8)]);
var inst_47389__$1 = (state_47410[(2)]);
var inst_47390__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47389__$1,(0),null);
var inst_47391 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47389__$1,(1),null);
var inst_47392 = (inst_47390__$1 == null);
var state_47410__$1 = (function (){var statearr_47412 = state_47410;
(statearr_47412[(9)] = inst_47391);

(statearr_47412[(7)] = inst_47390__$1);

(statearr_47412[(8)] = inst_47389__$1);

return statearr_47412;
})();
if(cljs.core.truth_(inst_47392)){
var statearr_47413_48531 = state_47410__$1;
(statearr_47413_48531[(1)] = (8));

} else {
var statearr_47414_48532 = state_47410__$1;
(statearr_47414_48532[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47411 === (1))){
var inst_47379 = cljs.core.vec(chs);
var inst_47380 = inst_47379;
var state_47410__$1 = (function (){var statearr_47415 = state_47410;
(statearr_47415[(10)] = inst_47380);

return statearr_47415;
})();
var statearr_47416_48533 = state_47410__$1;
(statearr_47416_48533[(2)] = null);

(statearr_47416_48533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47411 === (4))){
var inst_47380 = (state_47410[(10)]);
var state_47410__$1 = state_47410;
return cljs.core.async.ioc_alts_BANG_(state_47410__$1,(7),inst_47380);
} else {
if((state_val_47411 === (6))){
var inst_47406 = (state_47410[(2)]);
var state_47410__$1 = state_47410;
var statearr_47417_48535 = state_47410__$1;
(statearr_47417_48535[(2)] = inst_47406);

(statearr_47417_48535[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47411 === (3))){
var inst_47408 = (state_47410[(2)]);
var state_47410__$1 = state_47410;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47410__$1,inst_47408);
} else {
if((state_val_47411 === (2))){
var inst_47380 = (state_47410[(10)]);
var inst_47382 = cljs.core.count(inst_47380);
var inst_47383 = (inst_47382 > (0));
var state_47410__$1 = state_47410;
if(cljs.core.truth_(inst_47383)){
var statearr_47419_48537 = state_47410__$1;
(statearr_47419_48537[(1)] = (4));

} else {
var statearr_47420_48538 = state_47410__$1;
(statearr_47420_48538[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47411 === (11))){
var inst_47380 = (state_47410[(10)]);
var inst_47399 = (state_47410[(2)]);
var tmp47418 = inst_47380;
var inst_47380__$1 = tmp47418;
var state_47410__$1 = (function (){var statearr_47421 = state_47410;
(statearr_47421[(10)] = inst_47380__$1);

(statearr_47421[(11)] = inst_47399);

return statearr_47421;
})();
var statearr_47422_48539 = state_47410__$1;
(statearr_47422_48539[(2)] = null);

(statearr_47422_48539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47411 === (9))){
var inst_47390 = (state_47410[(7)]);
var state_47410__$1 = state_47410;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47410__$1,(11),out,inst_47390);
} else {
if((state_val_47411 === (5))){
var inst_47404 = cljs.core.async.close_BANG_(out);
var state_47410__$1 = state_47410;
var statearr_47423_48542 = state_47410__$1;
(statearr_47423_48542[(2)] = inst_47404);

(statearr_47423_48542[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47411 === (10))){
var inst_47402 = (state_47410[(2)]);
var state_47410__$1 = state_47410;
var statearr_47424_48544 = state_47410__$1;
(statearr_47424_48544[(2)] = inst_47402);

(statearr_47424_48544[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47411 === (8))){
var inst_47391 = (state_47410[(9)]);
var inst_47390 = (state_47410[(7)]);
var inst_47389 = (state_47410[(8)]);
var inst_47380 = (state_47410[(10)]);
var inst_47394 = (function (){var cs = inst_47380;
var vec__47385 = inst_47389;
var v = inst_47390;
var c = inst_47391;
return (function (p1__47376_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__47376_SHARP_);
});
})();
var inst_47395 = cljs.core.filterv(inst_47394,inst_47380);
var inst_47380__$1 = inst_47395;
var state_47410__$1 = (function (){var statearr_47425 = state_47410;
(statearr_47425[(10)] = inst_47380__$1);

return statearr_47425;
})();
var statearr_47426_48546 = state_47410__$1;
(statearr_47426_48546[(2)] = null);

(statearr_47426_48546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46258__auto__ = null;
var cljs$core$async$state_machine__46258__auto____0 = (function (){
var statearr_47427 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47427[(0)] = cljs$core$async$state_machine__46258__auto__);

(statearr_47427[(1)] = (1));

return statearr_47427;
});
var cljs$core$async$state_machine__46258__auto____1 = (function (state_47410){
while(true){
var ret_value__46259__auto__ = (function (){try{while(true){
var result__46260__auto__ = switch__46257__auto__(state_47410);
if(cljs.core.keyword_identical_QMARK_(result__46260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46260__auto__;
}
break;
}
}catch (e47428){if((e47428 instanceof Object)){
var ex__46261__auto__ = e47428;
var statearr_47429_48550 = state_47410;
(statearr_47429_48550[(5)] = ex__46261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47428;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48553 = state_47410;
state_47410 = G__48553;
continue;
} else {
return ret_value__46259__auto__;
}
break;
}
});
cljs$core$async$state_machine__46258__auto__ = function(state_47410){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46258__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46258__auto____1.call(this,state_47410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46258__auto____0;
cljs$core$async$state_machine__46258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46258__auto____1;
return cljs$core$async$state_machine__46258__auto__;
})()
})();
var state__46326__auto__ = (function (){var statearr_47430 = (f__46325__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46325__auto__.cljs$core$IFn$_invoke$arity$0() : f__46325__auto__.call(null));
(statearr_47430[(6)] = c__46324__auto___48529);

return statearr_47430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46326__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__47432 = arguments.length;
switch (G__47432) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46324__auto___48565 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46325__auto__ = (function (){var switch__46257__auto__ = (function (state_47456){
var state_val_47457 = (state_47456[(1)]);
if((state_val_47457 === (7))){
var inst_47438 = (state_47456[(7)]);
var inst_47438__$1 = (state_47456[(2)]);
var inst_47439 = (inst_47438__$1 == null);
var inst_47440 = cljs.core.not(inst_47439);
var state_47456__$1 = (function (){var statearr_47458 = state_47456;
(statearr_47458[(7)] = inst_47438__$1);

return statearr_47458;
})();
if(inst_47440){
var statearr_47459_48569 = state_47456__$1;
(statearr_47459_48569[(1)] = (8));

} else {
var statearr_47460_48570 = state_47456__$1;
(statearr_47460_48570[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47457 === (1))){
var inst_47433 = (0);
var state_47456__$1 = (function (){var statearr_47461 = state_47456;
(statearr_47461[(8)] = inst_47433);

return statearr_47461;
})();
var statearr_47462_48571 = state_47456__$1;
(statearr_47462_48571[(2)] = null);

(statearr_47462_48571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47457 === (4))){
var state_47456__$1 = state_47456;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47456__$1,(7),ch);
} else {
if((state_val_47457 === (6))){
var inst_47451 = (state_47456[(2)]);
var state_47456__$1 = state_47456;
var statearr_47463_48575 = state_47456__$1;
(statearr_47463_48575[(2)] = inst_47451);

(statearr_47463_48575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47457 === (3))){
var inst_47453 = (state_47456[(2)]);
var inst_47454 = cljs.core.async.close_BANG_(out);
var state_47456__$1 = (function (){var statearr_47464 = state_47456;
(statearr_47464[(9)] = inst_47453);

return statearr_47464;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47456__$1,inst_47454);
} else {
if((state_val_47457 === (2))){
var inst_47433 = (state_47456[(8)]);
var inst_47435 = (inst_47433 < n);
var state_47456__$1 = state_47456;
if(cljs.core.truth_(inst_47435)){
var statearr_47465_48576 = state_47456__$1;
(statearr_47465_48576[(1)] = (4));

} else {
var statearr_47466_48577 = state_47456__$1;
(statearr_47466_48577[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47457 === (11))){
var inst_47433 = (state_47456[(8)]);
var inst_47443 = (state_47456[(2)]);
var inst_47444 = (inst_47433 + (1));
var inst_47433__$1 = inst_47444;
var state_47456__$1 = (function (){var statearr_47467 = state_47456;
(statearr_47467[(10)] = inst_47443);

(statearr_47467[(8)] = inst_47433__$1);

return statearr_47467;
})();
var statearr_47468_48580 = state_47456__$1;
(statearr_47468_48580[(2)] = null);

(statearr_47468_48580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47457 === (9))){
var state_47456__$1 = state_47456;
var statearr_47469_48581 = state_47456__$1;
(statearr_47469_48581[(2)] = null);

(statearr_47469_48581[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47457 === (5))){
var state_47456__$1 = state_47456;
var statearr_47470_48583 = state_47456__$1;
(statearr_47470_48583[(2)] = null);

(statearr_47470_48583[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47457 === (10))){
var inst_47448 = (state_47456[(2)]);
var state_47456__$1 = state_47456;
var statearr_47471_48584 = state_47456__$1;
(statearr_47471_48584[(2)] = inst_47448);

(statearr_47471_48584[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47457 === (8))){
var inst_47438 = (state_47456[(7)]);
var state_47456__$1 = state_47456;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47456__$1,(11),out,inst_47438);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46258__auto__ = null;
var cljs$core$async$state_machine__46258__auto____0 = (function (){
var statearr_47472 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47472[(0)] = cljs$core$async$state_machine__46258__auto__);

(statearr_47472[(1)] = (1));

return statearr_47472;
});
var cljs$core$async$state_machine__46258__auto____1 = (function (state_47456){
while(true){
var ret_value__46259__auto__ = (function (){try{while(true){
var result__46260__auto__ = switch__46257__auto__(state_47456);
if(cljs.core.keyword_identical_QMARK_(result__46260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46260__auto__;
}
break;
}
}catch (e47473){if((e47473 instanceof Object)){
var ex__46261__auto__ = e47473;
var statearr_47474_48597 = state_47456;
(statearr_47474_48597[(5)] = ex__46261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47473;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48598 = state_47456;
state_47456 = G__48598;
continue;
} else {
return ret_value__46259__auto__;
}
break;
}
});
cljs$core$async$state_machine__46258__auto__ = function(state_47456){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46258__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46258__auto____1.call(this,state_47456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46258__auto____0;
cljs$core$async$state_machine__46258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46258__auto____1;
return cljs$core$async$state_machine__46258__auto__;
})()
})();
var state__46326__auto__ = (function (){var statearr_47475 = (f__46325__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46325__auto__.cljs$core$IFn$_invoke$arity$0() : f__46325__auto__.call(null));
(statearr_47475[(6)] = c__46324__auto___48565);

return statearr_47475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46326__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47477 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47477 = (function (f,ch,meta47478){
this.f = f;
this.ch = ch;
this.meta47478 = meta47478;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47479,meta47478__$1){
var self__ = this;
var _47479__$1 = this;
return (new cljs.core.async.t_cljs$core$async47477(self__.f,self__.ch,meta47478__$1));
}));

(cljs.core.async.t_cljs$core$async47477.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47479){
var self__ = this;
var _47479__$1 = this;
return self__.meta47478;
}));

(cljs.core.async.t_cljs$core$async47477.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47477.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47477.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47477.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47477.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47480 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47480 = (function (f,ch,meta47478,_,fn1,meta47481){
this.f = f;
this.ch = ch;
this.meta47478 = meta47478;
this._ = _;
this.fn1 = fn1;
this.meta47481 = meta47481;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47482,meta47481__$1){
var self__ = this;
var _47482__$1 = this;
return (new cljs.core.async.t_cljs$core$async47480(self__.f,self__.ch,self__.meta47478,self__._,self__.fn1,meta47481__$1));
}));

(cljs.core.async.t_cljs$core$async47480.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47482){
var self__ = this;
var _47482__$1 = this;
return self__.meta47481;
}));

(cljs.core.async.t_cljs$core$async47480.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47480.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async47480.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47480.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__47476_SHARP_){
var G__47483 = (((p1__47476_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__47476_SHARP_) : self__.f.call(null,p1__47476_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__47483) : f1.call(null,G__47483));
});
}));

(cljs.core.async.t_cljs$core$async47480.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47478","meta47478",657115990,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async47477","cljs.core.async/t_cljs$core$async47477",-707014585,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta47481","meta47481",1124401078,null)], null);
}));

(cljs.core.async.t_cljs$core$async47480.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47480.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47480");

(cljs.core.async.t_cljs$core$async47480.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47480");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47480.
 */
cljs.core.async.__GT_t_cljs$core$async47480 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47480(f__$1,ch__$1,meta47478__$1,___$2,fn1__$1,meta47481){
return (new cljs.core.async.t_cljs$core$async47480(f__$1,ch__$1,meta47478__$1,___$2,fn1__$1,meta47481));
});

}

return (new cljs.core.async.t_cljs$core$async47480(self__.f,self__.ch,self__.meta47478,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__47484 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__47484) : self__.f.call(null,G__47484));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async47477.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47477.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async47477.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47478","meta47478",657115990,null)], null);
}));

(cljs.core.async.t_cljs$core$async47477.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47477.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47477");

(cljs.core.async.t_cljs$core$async47477.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47477");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47477.
 */
cljs.core.async.__GT_t_cljs$core$async47477 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47477(f__$1,ch__$1,meta47478){
return (new cljs.core.async.t_cljs$core$async47477(f__$1,ch__$1,meta47478));
});

}

return (new cljs.core.async.t_cljs$core$async47477(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47485 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47485 = (function (f,ch,meta47486){
this.f = f;
this.ch = ch;
this.meta47486 = meta47486;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47485.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47487,meta47486__$1){
var self__ = this;
var _47487__$1 = this;
return (new cljs.core.async.t_cljs$core$async47485(self__.f,self__.ch,meta47486__$1));
}));

(cljs.core.async.t_cljs$core$async47485.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47487){
var self__ = this;
var _47487__$1 = this;
return self__.meta47486;
}));

(cljs.core.async.t_cljs$core$async47485.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47485.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47485.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47485.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47485.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47485.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async47485.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47486","meta47486",-862627367,null)], null);
}));

(cljs.core.async.t_cljs$core$async47485.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47485.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47485");

(cljs.core.async.t_cljs$core$async47485.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47485");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47485.
 */
cljs.core.async.__GT_t_cljs$core$async47485 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async47485(f__$1,ch__$1,meta47486){
return (new cljs.core.async.t_cljs$core$async47485(f__$1,ch__$1,meta47486));
});

}

return (new cljs.core.async.t_cljs$core$async47485(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47488 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47488 = (function (p,ch,meta47489){
this.p = p;
this.ch = ch;
this.meta47489 = meta47489;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47490,meta47489__$1){
var self__ = this;
var _47490__$1 = this;
return (new cljs.core.async.t_cljs$core$async47488(self__.p,self__.ch,meta47489__$1));
}));

(cljs.core.async.t_cljs$core$async47488.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47490){
var self__ = this;
var _47490__$1 = this;
return self__.meta47489;
}));

(cljs.core.async.t_cljs$core$async47488.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47488.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47488.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47488.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47488.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47488.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47488.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async47488.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47489","meta47489",1214198829,null)], null);
}));

(cljs.core.async.t_cljs$core$async47488.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47488.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47488");

(cljs.core.async.t_cljs$core$async47488.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47488");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47488.
 */
cljs.core.async.__GT_t_cljs$core$async47488 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async47488(p__$1,ch__$1,meta47489){
return (new cljs.core.async.t_cljs$core$async47488(p__$1,ch__$1,meta47489));
});

}

return (new cljs.core.async.t_cljs$core$async47488(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__47492 = arguments.length;
switch (G__47492) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46324__auto___48656 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46325__auto__ = (function (){var switch__46257__auto__ = (function (state_47513){
var state_val_47514 = (state_47513[(1)]);
if((state_val_47514 === (7))){
var inst_47509 = (state_47513[(2)]);
var state_47513__$1 = state_47513;
var statearr_47515_48659 = state_47513__$1;
(statearr_47515_48659[(2)] = inst_47509);

(statearr_47515_48659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47514 === (1))){
var state_47513__$1 = state_47513;
var statearr_47516_48661 = state_47513__$1;
(statearr_47516_48661[(2)] = null);

(statearr_47516_48661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47514 === (4))){
var inst_47495 = (state_47513[(7)]);
var inst_47495__$1 = (state_47513[(2)]);
var inst_47496 = (inst_47495__$1 == null);
var state_47513__$1 = (function (){var statearr_47517 = state_47513;
(statearr_47517[(7)] = inst_47495__$1);

return statearr_47517;
})();
if(cljs.core.truth_(inst_47496)){
var statearr_47518_48665 = state_47513__$1;
(statearr_47518_48665[(1)] = (5));

} else {
var statearr_47519_48666 = state_47513__$1;
(statearr_47519_48666[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47514 === (6))){
var inst_47495 = (state_47513[(7)]);
var inst_47500 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47495) : p.call(null,inst_47495));
var state_47513__$1 = state_47513;
if(cljs.core.truth_(inst_47500)){
var statearr_47520_48668 = state_47513__$1;
(statearr_47520_48668[(1)] = (8));

} else {
var statearr_47521_48669 = state_47513__$1;
(statearr_47521_48669[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47514 === (3))){
var inst_47511 = (state_47513[(2)]);
var state_47513__$1 = state_47513;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47513__$1,inst_47511);
} else {
if((state_val_47514 === (2))){
var state_47513__$1 = state_47513;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47513__$1,(4),ch);
} else {
if((state_val_47514 === (11))){
var inst_47503 = (state_47513[(2)]);
var state_47513__$1 = state_47513;
var statearr_47522_48673 = state_47513__$1;
(statearr_47522_48673[(2)] = inst_47503);

(statearr_47522_48673[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47514 === (9))){
var state_47513__$1 = state_47513;
var statearr_47523_48674 = state_47513__$1;
(statearr_47523_48674[(2)] = null);

(statearr_47523_48674[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47514 === (5))){
var inst_47498 = cljs.core.async.close_BANG_(out);
var state_47513__$1 = state_47513;
var statearr_47524_48675 = state_47513__$1;
(statearr_47524_48675[(2)] = inst_47498);

(statearr_47524_48675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47514 === (10))){
var inst_47506 = (state_47513[(2)]);
var state_47513__$1 = (function (){var statearr_47525 = state_47513;
(statearr_47525[(8)] = inst_47506);

return statearr_47525;
})();
var statearr_47526_48680 = state_47513__$1;
(statearr_47526_48680[(2)] = null);

(statearr_47526_48680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47514 === (8))){
var inst_47495 = (state_47513[(7)]);
var state_47513__$1 = state_47513;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47513__$1,(11),out,inst_47495);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46258__auto__ = null;
var cljs$core$async$state_machine__46258__auto____0 = (function (){
var statearr_47527 = [null,null,null,null,null,null,null,null,null];
(statearr_47527[(0)] = cljs$core$async$state_machine__46258__auto__);

(statearr_47527[(1)] = (1));

return statearr_47527;
});
var cljs$core$async$state_machine__46258__auto____1 = (function (state_47513){
while(true){
var ret_value__46259__auto__ = (function (){try{while(true){
var result__46260__auto__ = switch__46257__auto__(state_47513);
if(cljs.core.keyword_identical_QMARK_(result__46260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46260__auto__;
}
break;
}
}catch (e47528){if((e47528 instanceof Object)){
var ex__46261__auto__ = e47528;
var statearr_47529_48684 = state_47513;
(statearr_47529_48684[(5)] = ex__46261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47528;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48686 = state_47513;
state_47513 = G__48686;
continue;
} else {
return ret_value__46259__auto__;
}
break;
}
});
cljs$core$async$state_machine__46258__auto__ = function(state_47513){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46258__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46258__auto____1.call(this,state_47513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46258__auto____0;
cljs$core$async$state_machine__46258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46258__auto____1;
return cljs$core$async$state_machine__46258__auto__;
})()
})();
var state__46326__auto__ = (function (){var statearr_47530 = (f__46325__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46325__auto__.cljs$core$IFn$_invoke$arity$0() : f__46325__auto__.call(null));
(statearr_47530[(6)] = c__46324__auto___48656);

return statearr_47530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46326__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__47532 = arguments.length;
switch (G__47532) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__46324__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46325__auto__ = (function (){var switch__46257__auto__ = (function (state_47594){
var state_val_47595 = (state_47594[(1)]);
if((state_val_47595 === (7))){
var inst_47590 = (state_47594[(2)]);
var state_47594__$1 = state_47594;
var statearr_47596_48699 = state_47594__$1;
(statearr_47596_48699[(2)] = inst_47590);

(statearr_47596_48699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47595 === (20))){
var inst_47560 = (state_47594[(7)]);
var inst_47571 = (state_47594[(2)]);
var inst_47572 = cljs.core.next(inst_47560);
var inst_47546 = inst_47572;
var inst_47547 = null;
var inst_47548 = (0);
var inst_47549 = (0);
var state_47594__$1 = (function (){var statearr_47597 = state_47594;
(statearr_47597[(8)] = inst_47547);

(statearr_47597[(9)] = inst_47548);

(statearr_47597[(10)] = inst_47571);

(statearr_47597[(11)] = inst_47549);

(statearr_47597[(12)] = inst_47546);

return statearr_47597;
})();
var statearr_47598_48702 = state_47594__$1;
(statearr_47598_48702[(2)] = null);

(statearr_47598_48702[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47595 === (1))){
var state_47594__$1 = state_47594;
var statearr_47599_48706 = state_47594__$1;
(statearr_47599_48706[(2)] = null);

(statearr_47599_48706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47595 === (4))){
var inst_47535 = (state_47594[(13)]);
var inst_47535__$1 = (state_47594[(2)]);
var inst_47536 = (inst_47535__$1 == null);
var state_47594__$1 = (function (){var statearr_47600 = state_47594;
(statearr_47600[(13)] = inst_47535__$1);

return statearr_47600;
})();
if(cljs.core.truth_(inst_47536)){
var statearr_47601_48708 = state_47594__$1;
(statearr_47601_48708[(1)] = (5));

} else {
var statearr_47602_48709 = state_47594__$1;
(statearr_47602_48709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47595 === (15))){
var state_47594__$1 = state_47594;
var statearr_47606_48710 = state_47594__$1;
(statearr_47606_48710[(2)] = null);

(statearr_47606_48710[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47595 === (21))){
var state_47594__$1 = state_47594;
var statearr_47607_48711 = state_47594__$1;
(statearr_47607_48711[(2)] = null);

(statearr_47607_48711[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47595 === (13))){
var inst_47547 = (state_47594[(8)]);
var inst_47548 = (state_47594[(9)]);
var inst_47549 = (state_47594[(11)]);
var inst_47546 = (state_47594[(12)]);
var inst_47556 = (state_47594[(2)]);
var inst_47557 = (inst_47549 + (1));
var tmp47603 = inst_47547;
var tmp47604 = inst_47548;
var tmp47605 = inst_47546;
var inst_47546__$1 = tmp47605;
var inst_47547__$1 = tmp47603;
var inst_47548__$1 = tmp47604;
var inst_47549__$1 = inst_47557;
var state_47594__$1 = (function (){var statearr_47608 = state_47594;
(statearr_47608[(8)] = inst_47547__$1);

(statearr_47608[(9)] = inst_47548__$1);

(statearr_47608[(14)] = inst_47556);

(statearr_47608[(11)] = inst_47549__$1);

(statearr_47608[(12)] = inst_47546__$1);

return statearr_47608;
})();
var statearr_47609_48717 = state_47594__$1;
(statearr_47609_48717[(2)] = null);

(statearr_47609_48717[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47595 === (22))){
var state_47594__$1 = state_47594;
var statearr_47610_48719 = state_47594__$1;
(statearr_47610_48719[(2)] = null);

(statearr_47610_48719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47595 === (6))){
var inst_47535 = (state_47594[(13)]);
var inst_47544 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47535) : f.call(null,inst_47535));
var inst_47545 = cljs.core.seq(inst_47544);
var inst_47546 = inst_47545;
var inst_47547 = null;
var inst_47548 = (0);
var inst_47549 = (0);
var state_47594__$1 = (function (){var statearr_47611 = state_47594;
(statearr_47611[(8)] = inst_47547);

(statearr_47611[(9)] = inst_47548);

(statearr_47611[(11)] = inst_47549);

(statearr_47611[(12)] = inst_47546);

return statearr_47611;
})();
var statearr_47612_48723 = state_47594__$1;
(statearr_47612_48723[(2)] = null);

(statearr_47612_48723[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47595 === (17))){
var inst_47560 = (state_47594[(7)]);
var inst_47564 = cljs.core.chunk_first(inst_47560);
var inst_47565 = cljs.core.chunk_rest(inst_47560);
var inst_47566 = cljs.core.count(inst_47564);
var inst_47546 = inst_47565;
var inst_47547 = inst_47564;
var inst_47548 = inst_47566;
var inst_47549 = (0);
var state_47594__$1 = (function (){var statearr_47613 = state_47594;
(statearr_47613[(8)] = inst_47547);

(statearr_47613[(9)] = inst_47548);

(statearr_47613[(11)] = inst_47549);

(statearr_47613[(12)] = inst_47546);

return statearr_47613;
})();
var statearr_47614_48730 = state_47594__$1;
(statearr_47614_48730[(2)] = null);

(statearr_47614_48730[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47595 === (3))){
var inst_47592 = (state_47594[(2)]);
var state_47594__$1 = state_47594;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47594__$1,inst_47592);
} else {
if((state_val_47595 === (12))){
var inst_47580 = (state_47594[(2)]);
var state_47594__$1 = state_47594;
var statearr_47615_48738 = state_47594__$1;
(statearr_47615_48738[(2)] = inst_47580);

(statearr_47615_48738[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47595 === (2))){
var state_47594__$1 = state_47594;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47594__$1,(4),in$);
} else {
if((state_val_47595 === (23))){
var inst_47588 = (state_47594[(2)]);
var state_47594__$1 = state_47594;
var statearr_47616_48740 = state_47594__$1;
(statearr_47616_48740[(2)] = inst_47588);

(statearr_47616_48740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47595 === (19))){
var inst_47575 = (state_47594[(2)]);
var state_47594__$1 = state_47594;
var statearr_47617_48744 = state_47594__$1;
(statearr_47617_48744[(2)] = inst_47575);

(statearr_47617_48744[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47595 === (11))){
var inst_47560 = (state_47594[(7)]);
var inst_47546 = (state_47594[(12)]);
var inst_47560__$1 = cljs.core.seq(inst_47546);
var state_47594__$1 = (function (){var statearr_47618 = state_47594;
(statearr_47618[(7)] = inst_47560__$1);

return statearr_47618;
})();
if(inst_47560__$1){
var statearr_47619_48746 = state_47594__$1;
(statearr_47619_48746[(1)] = (14));

} else {
var statearr_47620_48749 = state_47594__$1;
(statearr_47620_48749[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47595 === (9))){
var inst_47582 = (state_47594[(2)]);
var inst_47583 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_47594__$1 = (function (){var statearr_47621 = state_47594;
(statearr_47621[(15)] = inst_47582);

return statearr_47621;
})();
if(cljs.core.truth_(inst_47583)){
var statearr_47622_48754 = state_47594__$1;
(statearr_47622_48754[(1)] = (21));

} else {
var statearr_47623_48756 = state_47594__$1;
(statearr_47623_48756[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47595 === (5))){
var inst_47538 = cljs.core.async.close_BANG_(out);
var state_47594__$1 = state_47594;
var statearr_47624_48757 = state_47594__$1;
(statearr_47624_48757[(2)] = inst_47538);

(statearr_47624_48757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47595 === (14))){
var inst_47560 = (state_47594[(7)]);
var inst_47562 = cljs.core.chunked_seq_QMARK_(inst_47560);
var state_47594__$1 = state_47594;
if(inst_47562){
var statearr_47625_48760 = state_47594__$1;
(statearr_47625_48760[(1)] = (17));

} else {
var statearr_47626_48761 = state_47594__$1;
(statearr_47626_48761[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47595 === (16))){
var inst_47578 = (state_47594[(2)]);
var state_47594__$1 = state_47594;
var statearr_47627_48765 = state_47594__$1;
(statearr_47627_48765[(2)] = inst_47578);

(statearr_47627_48765[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47595 === (10))){
var inst_47547 = (state_47594[(8)]);
var inst_47549 = (state_47594[(11)]);
var inst_47554 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_47547,inst_47549);
var state_47594__$1 = state_47594;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47594__$1,(13),out,inst_47554);
} else {
if((state_val_47595 === (18))){
var inst_47560 = (state_47594[(7)]);
var inst_47569 = cljs.core.first(inst_47560);
var state_47594__$1 = state_47594;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47594__$1,(20),out,inst_47569);
} else {
if((state_val_47595 === (8))){
var inst_47548 = (state_47594[(9)]);
var inst_47549 = (state_47594[(11)]);
var inst_47551 = (inst_47549 < inst_47548);
var inst_47552 = inst_47551;
var state_47594__$1 = state_47594;
if(cljs.core.truth_(inst_47552)){
var statearr_47628_48770 = state_47594__$1;
(statearr_47628_48770[(1)] = (10));

} else {
var statearr_47629_48771 = state_47594__$1;
(statearr_47629_48771[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__46258__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__46258__auto____0 = (function (){
var statearr_47630 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47630[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__46258__auto__);

(statearr_47630[(1)] = (1));

return statearr_47630;
});
var cljs$core$async$mapcat_STAR__$_state_machine__46258__auto____1 = (function (state_47594){
while(true){
var ret_value__46259__auto__ = (function (){try{while(true){
var result__46260__auto__ = switch__46257__auto__(state_47594);
if(cljs.core.keyword_identical_QMARK_(result__46260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46260__auto__;
}
break;
}
}catch (e47631){if((e47631 instanceof Object)){
var ex__46261__auto__ = e47631;
var statearr_47632_48776 = state_47594;
(statearr_47632_48776[(5)] = ex__46261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47631;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48778 = state_47594;
state_47594 = G__48778;
continue;
} else {
return ret_value__46259__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__46258__auto__ = function(state_47594){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__46258__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__46258__auto____1.call(this,state_47594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__46258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__46258__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__46258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__46258__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__46258__auto__;
})()
})();
var state__46326__auto__ = (function (){var statearr_47633 = (f__46325__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46325__auto__.cljs$core$IFn$_invoke$arity$0() : f__46325__auto__.call(null));
(statearr_47633[(6)] = c__46324__auto__);

return statearr_47633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46326__auto__);
}));

return c__46324__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__47635 = arguments.length;
switch (G__47635) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__47637 = arguments.length;
switch (G__47637) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__47639 = arguments.length;
switch (G__47639) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46324__auto___48793 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46325__auto__ = (function (){var switch__46257__auto__ = (function (state_47663){
var state_val_47664 = (state_47663[(1)]);
if((state_val_47664 === (7))){
var inst_47658 = (state_47663[(2)]);
var state_47663__$1 = state_47663;
var statearr_47665_48796 = state_47663__$1;
(statearr_47665_48796[(2)] = inst_47658);

(statearr_47665_48796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47664 === (1))){
var inst_47640 = null;
var state_47663__$1 = (function (){var statearr_47666 = state_47663;
(statearr_47666[(7)] = inst_47640);

return statearr_47666;
})();
var statearr_47667_48798 = state_47663__$1;
(statearr_47667_48798[(2)] = null);

(statearr_47667_48798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47664 === (4))){
var inst_47643 = (state_47663[(8)]);
var inst_47643__$1 = (state_47663[(2)]);
var inst_47644 = (inst_47643__$1 == null);
var inst_47645 = cljs.core.not(inst_47644);
var state_47663__$1 = (function (){var statearr_47668 = state_47663;
(statearr_47668[(8)] = inst_47643__$1);

return statearr_47668;
})();
if(inst_47645){
var statearr_47669_48800 = state_47663__$1;
(statearr_47669_48800[(1)] = (5));

} else {
var statearr_47670_48804 = state_47663__$1;
(statearr_47670_48804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47664 === (6))){
var state_47663__$1 = state_47663;
var statearr_47671_48806 = state_47663__$1;
(statearr_47671_48806[(2)] = null);

(statearr_47671_48806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47664 === (3))){
var inst_47660 = (state_47663[(2)]);
var inst_47661 = cljs.core.async.close_BANG_(out);
var state_47663__$1 = (function (){var statearr_47672 = state_47663;
(statearr_47672[(9)] = inst_47660);

return statearr_47672;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47663__$1,inst_47661);
} else {
if((state_val_47664 === (2))){
var state_47663__$1 = state_47663;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47663__$1,(4),ch);
} else {
if((state_val_47664 === (11))){
var inst_47643 = (state_47663[(8)]);
var inst_47652 = (state_47663[(2)]);
var inst_47640 = inst_47643;
var state_47663__$1 = (function (){var statearr_47673 = state_47663;
(statearr_47673[(10)] = inst_47652);

(statearr_47673[(7)] = inst_47640);

return statearr_47673;
})();
var statearr_47674_48810 = state_47663__$1;
(statearr_47674_48810[(2)] = null);

(statearr_47674_48810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47664 === (9))){
var inst_47643 = (state_47663[(8)]);
var state_47663__$1 = state_47663;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47663__$1,(11),out,inst_47643);
} else {
if((state_val_47664 === (5))){
var inst_47643 = (state_47663[(8)]);
var inst_47640 = (state_47663[(7)]);
var inst_47647 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47643,inst_47640);
var state_47663__$1 = state_47663;
if(inst_47647){
var statearr_47676_48813 = state_47663__$1;
(statearr_47676_48813[(1)] = (8));

} else {
var statearr_47677_48815 = state_47663__$1;
(statearr_47677_48815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47664 === (10))){
var inst_47655 = (state_47663[(2)]);
var state_47663__$1 = state_47663;
var statearr_47678_48816 = state_47663__$1;
(statearr_47678_48816[(2)] = inst_47655);

(statearr_47678_48816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47664 === (8))){
var inst_47640 = (state_47663[(7)]);
var tmp47675 = inst_47640;
var inst_47640__$1 = tmp47675;
var state_47663__$1 = (function (){var statearr_47679 = state_47663;
(statearr_47679[(7)] = inst_47640__$1);

return statearr_47679;
})();
var statearr_47680_48820 = state_47663__$1;
(statearr_47680_48820[(2)] = null);

(statearr_47680_48820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46258__auto__ = null;
var cljs$core$async$state_machine__46258__auto____0 = (function (){
var statearr_47681 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47681[(0)] = cljs$core$async$state_machine__46258__auto__);

(statearr_47681[(1)] = (1));

return statearr_47681;
});
var cljs$core$async$state_machine__46258__auto____1 = (function (state_47663){
while(true){
var ret_value__46259__auto__ = (function (){try{while(true){
var result__46260__auto__ = switch__46257__auto__(state_47663);
if(cljs.core.keyword_identical_QMARK_(result__46260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46260__auto__;
}
break;
}
}catch (e47682){if((e47682 instanceof Object)){
var ex__46261__auto__ = e47682;
var statearr_47683_48823 = state_47663;
(statearr_47683_48823[(5)] = ex__46261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47663);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47682;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48824 = state_47663;
state_47663 = G__48824;
continue;
} else {
return ret_value__46259__auto__;
}
break;
}
});
cljs$core$async$state_machine__46258__auto__ = function(state_47663){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46258__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46258__auto____1.call(this,state_47663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46258__auto____0;
cljs$core$async$state_machine__46258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46258__auto____1;
return cljs$core$async$state_machine__46258__auto__;
})()
})();
var state__46326__auto__ = (function (){var statearr_47684 = (f__46325__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46325__auto__.cljs$core$IFn$_invoke$arity$0() : f__46325__auto__.call(null));
(statearr_47684[(6)] = c__46324__auto___48793);

return statearr_47684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46326__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__47686 = arguments.length;
switch (G__47686) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46324__auto___48830 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46325__auto__ = (function (){var switch__46257__auto__ = (function (state_47724){
var state_val_47725 = (state_47724[(1)]);
if((state_val_47725 === (7))){
var inst_47720 = (state_47724[(2)]);
var state_47724__$1 = state_47724;
var statearr_47726_48837 = state_47724__$1;
(statearr_47726_48837[(2)] = inst_47720);

(statearr_47726_48837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47725 === (1))){
var inst_47687 = (new Array(n));
var inst_47688 = inst_47687;
var inst_47689 = (0);
var state_47724__$1 = (function (){var statearr_47727 = state_47724;
(statearr_47727[(7)] = inst_47689);

(statearr_47727[(8)] = inst_47688);

return statearr_47727;
})();
var statearr_47728_48843 = state_47724__$1;
(statearr_47728_48843[(2)] = null);

(statearr_47728_48843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47725 === (4))){
var inst_47692 = (state_47724[(9)]);
var inst_47692__$1 = (state_47724[(2)]);
var inst_47693 = (inst_47692__$1 == null);
var inst_47694 = cljs.core.not(inst_47693);
var state_47724__$1 = (function (){var statearr_47729 = state_47724;
(statearr_47729[(9)] = inst_47692__$1);

return statearr_47729;
})();
if(inst_47694){
var statearr_47730_48851 = state_47724__$1;
(statearr_47730_48851[(1)] = (5));

} else {
var statearr_47731_48855 = state_47724__$1;
(statearr_47731_48855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47725 === (15))){
var inst_47714 = (state_47724[(2)]);
var state_47724__$1 = state_47724;
var statearr_47732_48859 = state_47724__$1;
(statearr_47732_48859[(2)] = inst_47714);

(statearr_47732_48859[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47725 === (13))){
var state_47724__$1 = state_47724;
var statearr_47733_48866 = state_47724__$1;
(statearr_47733_48866[(2)] = null);

(statearr_47733_48866[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47725 === (6))){
var inst_47689 = (state_47724[(7)]);
var inst_47710 = (inst_47689 > (0));
var state_47724__$1 = state_47724;
if(cljs.core.truth_(inst_47710)){
var statearr_47734_48867 = state_47724__$1;
(statearr_47734_48867[(1)] = (12));

} else {
var statearr_47735_48869 = state_47724__$1;
(statearr_47735_48869[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47725 === (3))){
var inst_47722 = (state_47724[(2)]);
var state_47724__$1 = state_47724;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47724__$1,inst_47722);
} else {
if((state_val_47725 === (12))){
var inst_47688 = (state_47724[(8)]);
var inst_47712 = cljs.core.vec(inst_47688);
var state_47724__$1 = state_47724;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47724__$1,(15),out,inst_47712);
} else {
if((state_val_47725 === (2))){
var state_47724__$1 = state_47724;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47724__$1,(4),ch);
} else {
if((state_val_47725 === (11))){
var inst_47704 = (state_47724[(2)]);
var inst_47705 = (new Array(n));
var inst_47688 = inst_47705;
var inst_47689 = (0);
var state_47724__$1 = (function (){var statearr_47736 = state_47724;
(statearr_47736[(7)] = inst_47689);

(statearr_47736[(8)] = inst_47688);

(statearr_47736[(10)] = inst_47704);

return statearr_47736;
})();
var statearr_47737_48875 = state_47724__$1;
(statearr_47737_48875[(2)] = null);

(statearr_47737_48875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47725 === (9))){
var inst_47688 = (state_47724[(8)]);
var inst_47702 = cljs.core.vec(inst_47688);
var state_47724__$1 = state_47724;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47724__$1,(11),out,inst_47702);
} else {
if((state_val_47725 === (5))){
var inst_47689 = (state_47724[(7)]);
var inst_47692 = (state_47724[(9)]);
var inst_47688 = (state_47724[(8)]);
var inst_47697 = (state_47724[(11)]);
var inst_47696 = (inst_47688[inst_47689] = inst_47692);
var inst_47697__$1 = (inst_47689 + (1));
var inst_47698 = (inst_47697__$1 < n);
var state_47724__$1 = (function (){var statearr_47738 = state_47724;
(statearr_47738[(12)] = inst_47696);

(statearr_47738[(11)] = inst_47697__$1);

return statearr_47738;
})();
if(cljs.core.truth_(inst_47698)){
var statearr_47739_48893 = state_47724__$1;
(statearr_47739_48893[(1)] = (8));

} else {
var statearr_47740_48894 = state_47724__$1;
(statearr_47740_48894[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47725 === (14))){
var inst_47717 = (state_47724[(2)]);
var inst_47718 = cljs.core.async.close_BANG_(out);
var state_47724__$1 = (function (){var statearr_47742 = state_47724;
(statearr_47742[(13)] = inst_47717);

return statearr_47742;
})();
var statearr_47743_48895 = state_47724__$1;
(statearr_47743_48895[(2)] = inst_47718);

(statearr_47743_48895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47725 === (10))){
var inst_47708 = (state_47724[(2)]);
var state_47724__$1 = state_47724;
var statearr_47744_48901 = state_47724__$1;
(statearr_47744_48901[(2)] = inst_47708);

(statearr_47744_48901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47725 === (8))){
var inst_47688 = (state_47724[(8)]);
var inst_47697 = (state_47724[(11)]);
var tmp47741 = inst_47688;
var inst_47688__$1 = tmp47741;
var inst_47689 = inst_47697;
var state_47724__$1 = (function (){var statearr_47745 = state_47724;
(statearr_47745[(7)] = inst_47689);

(statearr_47745[(8)] = inst_47688__$1);

return statearr_47745;
})();
var statearr_47746_48913 = state_47724__$1;
(statearr_47746_48913[(2)] = null);

(statearr_47746_48913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46258__auto__ = null;
var cljs$core$async$state_machine__46258__auto____0 = (function (){
var statearr_47747 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47747[(0)] = cljs$core$async$state_machine__46258__auto__);

(statearr_47747[(1)] = (1));

return statearr_47747;
});
var cljs$core$async$state_machine__46258__auto____1 = (function (state_47724){
while(true){
var ret_value__46259__auto__ = (function (){try{while(true){
var result__46260__auto__ = switch__46257__auto__(state_47724);
if(cljs.core.keyword_identical_QMARK_(result__46260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46260__auto__;
}
break;
}
}catch (e47748){if((e47748 instanceof Object)){
var ex__46261__auto__ = e47748;
var statearr_47749_48926 = state_47724;
(statearr_47749_48926[(5)] = ex__46261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47748;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48929 = state_47724;
state_47724 = G__48929;
continue;
} else {
return ret_value__46259__auto__;
}
break;
}
});
cljs$core$async$state_machine__46258__auto__ = function(state_47724){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46258__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46258__auto____1.call(this,state_47724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46258__auto____0;
cljs$core$async$state_machine__46258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46258__auto____1;
return cljs$core$async$state_machine__46258__auto__;
})()
})();
var state__46326__auto__ = (function (){var statearr_47750 = (f__46325__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46325__auto__.cljs$core$IFn$_invoke$arity$0() : f__46325__auto__.call(null));
(statearr_47750[(6)] = c__46324__auto___48830);

return statearr_47750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46326__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__47752 = arguments.length;
switch (G__47752) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46324__auto___48937 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46325__auto__ = (function (){var switch__46257__auto__ = (function (state_47794){
var state_val_47795 = (state_47794[(1)]);
if((state_val_47795 === (7))){
var inst_47790 = (state_47794[(2)]);
var state_47794__$1 = state_47794;
var statearr_47796_48940 = state_47794__$1;
(statearr_47796_48940[(2)] = inst_47790);

(statearr_47796_48940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (1))){
var inst_47753 = [];
var inst_47754 = inst_47753;
var inst_47755 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47794__$1 = (function (){var statearr_47797 = state_47794;
(statearr_47797[(7)] = inst_47754);

(statearr_47797[(8)] = inst_47755);

return statearr_47797;
})();
var statearr_47798_48945 = state_47794__$1;
(statearr_47798_48945[(2)] = null);

(statearr_47798_48945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (4))){
var inst_47758 = (state_47794[(9)]);
var inst_47758__$1 = (state_47794[(2)]);
var inst_47759 = (inst_47758__$1 == null);
var inst_47760 = cljs.core.not(inst_47759);
var state_47794__$1 = (function (){var statearr_47799 = state_47794;
(statearr_47799[(9)] = inst_47758__$1);

return statearr_47799;
})();
if(inst_47760){
var statearr_47800_48947 = state_47794__$1;
(statearr_47800_48947[(1)] = (5));

} else {
var statearr_47801_48948 = state_47794__$1;
(statearr_47801_48948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (15))){
var inst_47784 = (state_47794[(2)]);
var state_47794__$1 = state_47794;
var statearr_47802_48949 = state_47794__$1;
(statearr_47802_48949[(2)] = inst_47784);

(statearr_47802_48949[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (13))){
var state_47794__$1 = state_47794;
var statearr_47803_48954 = state_47794__$1;
(statearr_47803_48954[(2)] = null);

(statearr_47803_48954[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (6))){
var inst_47754 = (state_47794[(7)]);
var inst_47779 = inst_47754.length;
var inst_47780 = (inst_47779 > (0));
var state_47794__$1 = state_47794;
if(cljs.core.truth_(inst_47780)){
var statearr_47804_48955 = state_47794__$1;
(statearr_47804_48955[(1)] = (12));

} else {
var statearr_47805_48956 = state_47794__$1;
(statearr_47805_48956[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (3))){
var inst_47792 = (state_47794[(2)]);
var state_47794__$1 = state_47794;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47794__$1,inst_47792);
} else {
if((state_val_47795 === (12))){
var inst_47754 = (state_47794[(7)]);
var inst_47782 = cljs.core.vec(inst_47754);
var state_47794__$1 = state_47794;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47794__$1,(15),out,inst_47782);
} else {
if((state_val_47795 === (2))){
var state_47794__$1 = state_47794;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47794__$1,(4),ch);
} else {
if((state_val_47795 === (11))){
var inst_47758 = (state_47794[(9)]);
var inst_47762 = (state_47794[(10)]);
var inst_47772 = (state_47794[(2)]);
var inst_47773 = [];
var inst_47774 = inst_47773.push(inst_47758);
var inst_47754 = inst_47773;
var inst_47755 = inst_47762;
var state_47794__$1 = (function (){var statearr_47806 = state_47794;
(statearr_47806[(7)] = inst_47754);

(statearr_47806[(11)] = inst_47772);

(statearr_47806[(8)] = inst_47755);

(statearr_47806[(12)] = inst_47774);

return statearr_47806;
})();
var statearr_47807_48966 = state_47794__$1;
(statearr_47807_48966[(2)] = null);

(statearr_47807_48966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (9))){
var inst_47754 = (state_47794[(7)]);
var inst_47770 = cljs.core.vec(inst_47754);
var state_47794__$1 = state_47794;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47794__$1,(11),out,inst_47770);
} else {
if((state_val_47795 === (5))){
var inst_47758 = (state_47794[(9)]);
var inst_47755 = (state_47794[(8)]);
var inst_47762 = (state_47794[(10)]);
var inst_47762__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47758) : f.call(null,inst_47758));
var inst_47763 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47762__$1,inst_47755);
var inst_47764 = cljs.core.keyword_identical_QMARK_(inst_47755,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_47765 = ((inst_47763) || (inst_47764));
var state_47794__$1 = (function (){var statearr_47808 = state_47794;
(statearr_47808[(10)] = inst_47762__$1);

return statearr_47808;
})();
if(cljs.core.truth_(inst_47765)){
var statearr_47809_48973 = state_47794__$1;
(statearr_47809_48973[(1)] = (8));

} else {
var statearr_47810_48975 = state_47794__$1;
(statearr_47810_48975[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (14))){
var inst_47787 = (state_47794[(2)]);
var inst_47788 = cljs.core.async.close_BANG_(out);
var state_47794__$1 = (function (){var statearr_47812 = state_47794;
(statearr_47812[(13)] = inst_47787);

return statearr_47812;
})();
var statearr_47813_48978 = state_47794__$1;
(statearr_47813_48978[(2)] = inst_47788);

(statearr_47813_48978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (10))){
var inst_47777 = (state_47794[(2)]);
var state_47794__$1 = state_47794;
var statearr_47814_48984 = state_47794__$1;
(statearr_47814_48984[(2)] = inst_47777);

(statearr_47814_48984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (8))){
var inst_47754 = (state_47794[(7)]);
var inst_47758 = (state_47794[(9)]);
var inst_47762 = (state_47794[(10)]);
var inst_47767 = inst_47754.push(inst_47758);
var tmp47811 = inst_47754;
var inst_47754__$1 = tmp47811;
var inst_47755 = inst_47762;
var state_47794__$1 = (function (){var statearr_47815 = state_47794;
(statearr_47815[(7)] = inst_47754__$1);

(statearr_47815[(14)] = inst_47767);

(statearr_47815[(8)] = inst_47755);

return statearr_47815;
})();
var statearr_47816_48997 = state_47794__$1;
(statearr_47816_48997[(2)] = null);

(statearr_47816_48997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46258__auto__ = null;
var cljs$core$async$state_machine__46258__auto____0 = (function (){
var statearr_47817 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47817[(0)] = cljs$core$async$state_machine__46258__auto__);

(statearr_47817[(1)] = (1));

return statearr_47817;
});
var cljs$core$async$state_machine__46258__auto____1 = (function (state_47794){
while(true){
var ret_value__46259__auto__ = (function (){try{while(true){
var result__46260__auto__ = switch__46257__auto__(state_47794);
if(cljs.core.keyword_identical_QMARK_(result__46260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46260__auto__;
}
break;
}
}catch (e47818){if((e47818 instanceof Object)){
var ex__46261__auto__ = e47818;
var statearr_47819_49016 = state_47794;
(statearr_47819_49016[(5)] = ex__46261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47818;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49028 = state_47794;
state_47794 = G__49028;
continue;
} else {
return ret_value__46259__auto__;
}
break;
}
});
cljs$core$async$state_machine__46258__auto__ = function(state_47794){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46258__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46258__auto____1.call(this,state_47794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46258__auto____0;
cljs$core$async$state_machine__46258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46258__auto____1;
return cljs$core$async$state_machine__46258__auto__;
})()
})();
var state__46326__auto__ = (function (){var statearr_47820 = (f__46325__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46325__auto__.cljs$core$IFn$_invoke$arity$0() : f__46325__auto__.call(null));
(statearr_47820[(6)] = c__46324__auto___48937);

return statearr_47820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46326__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
