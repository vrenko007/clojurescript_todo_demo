(ns todo-fechapter.routes
  (:require-macros [secretary.core :refer [defroute]])
  (:import [goog History]
           [goog.history EventType])
  (:require
   [secretary.core :as secretary]
   [goog.events :as gevents]
   [re-frame.core :as re-frame]
   [todo-fechapter.events :as events]))

(defn hook-browser-navigation! []
  (doto (History.)
    (gevents/listen
     EventType/NAVIGATE
     (fn [event]
       (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

(defn app-routes []
  (secretary/set-config! :prefix "#")
  ;; --------------------
  ;; define routes here
  (defroute "/" []
    (re-frame/dispatch [::events/set-active-panel :home-panel]))


  (defroute "/new" []
    (re-frame/dispatch [::events/set-active-panel :new-panel]))

  (defroute "/todos/:id" [id]
    (re-frame/dispatch [::events/current-todo-id id])
    (re-frame/dispatch [::events/set-active-panel :todo-panel]))

  (defroute "/about" []
    (re-frame/dispatch [::events/set-active-panel :about-panel]))


  ;; --------------------
  (hook-browser-navigation!))
