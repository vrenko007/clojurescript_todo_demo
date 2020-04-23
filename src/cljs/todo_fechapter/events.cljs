(ns todo-fechapter.events
  (:require
   [re-frame.core :as re-frame]
   [todo-fechapter.db :as db]
   [ajax.core :as ajax]))

(re-frame/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))

(re-frame/reg-event-db
 ::set-active-panel
 (fn [db [_ active-panel]]
   (assoc db :active-panel active-panel)))

(re-frame/reg-event-db
 ::current-todo-id
 (fn [db [_ todo-id]]
   (assoc db :current-todo-id todo-id)))

(re-frame/reg-event-db
 ::toggle-complete
 (fn [db [_ {:keys [id completed]}]]
   (assoc db
          :todos
          (vec (map
                (fn [todo]
                  (if (= (int id)
                         (int (:id todo)))
                    (assoc todo :completed completed)
                    todo))
                (:todos db))))))

(re-frame/reg-event-db
 ::new-todo
 (fn [db [_ {:keys [title description]}]]
   (def new-db
     (assoc db
            :todos
            (conj (:todos db) {:id (:next-todo-id db) :title title :description description :completed false})))
   (assoc new-db :next-todo-id (+ (:next-todo-id db) 1))))


(re-frame/reg-event-fx                             ;; note the trailing -fx
 ::get-weather                     ;; usage:  (dispatch [:handler-with-http])
 (fn [{:keys [db]} _]                    ;; the first param will be "world"
   {:db   (assoc db :show-twirly true)   ;; causes the twirly-waiting-dialog to show??
    :http-xhrio {:method          :get
                 :uri             "https://api.openweathermap.org/data/2.5/weather?q=Ljubljana&appid=bae59abd29656ca9e830d09f04c2cc26&units=metric"
                 :timeout         8000                                           ;; optional see API docs
                 :response-format (ajax/json-response-format {:keywords? true})  ;; IMPORTANT!: You must provide this.
                 :on-success      [::got-weather]}}))

(re-frame/reg-event-db
 ::got-weather
 (fn [db [_ result]]
   (assoc db :weather result)))