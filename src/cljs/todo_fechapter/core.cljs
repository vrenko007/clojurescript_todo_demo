(ns todo-fechapter.core
  (:require
   [reagent.core :as reagent]
   [re-frame.core :as re-frame]
   [todo-fechapter.events :as events]
   [todo-fechapter.routes :as routes]
   [todo-fechapter.views :as views]
   [todo-fechapter.config :as config]
   [day8.re-frame.http-fx]))


(defn dev-setup []
  (when config/debug?
    (println "dev mode")))

(defn ^:dev/after-load mount-root []
  (re-frame/clear-subscription-cache!)
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn init []
  (routes/app-routes)
  (re-frame/dispatch-sync [::events/initialize-db])
  (dev-setup)
  (mount-root))
