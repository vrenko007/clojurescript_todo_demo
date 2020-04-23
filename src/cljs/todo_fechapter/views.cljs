(ns todo-fechapter.views
  (:require
   [re-frame.core :as re-frame]
   [re-com.core :as re-com]
   [reagent.core :as r]
   [reagent-forms.core :refer [bind-fields]]
   [secretary.core :as secretary]
   [todo-fechapter.subs :as subs]
   [todo-fechapter.events :as events]))

(defn set-hash! [loc]
  (set! (.-hash js/window.location) loc))


;; home
(defn todo-row [{:keys [id title completed]}]
  [re-com/hyperlink-href
   :class "todo"
   :label [re-com/label :label title] :href (str "#/todos/" id)])

(defn add-todo-row []
  [re-com/md-icon-button
   :class "new-todo"
   :size :larger
   :md-icon-name "zmdi-plus"
   :emphasise? true
   :on-click #(set-hash! "#/new")])

(defn link-to-weather-page []
  [re-com/hyperlink-href
   :label "Check Weather in Ljubljana"
   :href "#/weather"])

(defn home-data []
  (let [todos (re-frame/subscribe [::subs/todos])]
    [re-com/v-box
     :children [[re-com/h-box
                 :justify :between
                 :children [[re-com/title
                             :label "To Do"
                             :level :level2]
                            [add-todo-row]]]
                (map (fn [todo] [todo-row todo])
                     (sort-by :id #(compare %2 %1) (filterv #(= (:completed %) false) @todos)))
                [re-com/title
                 :label "Completed"
                 :level :level2]
                (map (fn [todo] [todo-row todo])
                     (sort-by :id #(compare %2 %1) (filterv #(= (:completed %) true) @todos)))]]))

(defn home-panel []
  [re-com/v-box
   :gap "1em"
   :children [[home-data]]])

;; todo
(defn todo-info [{:keys [id title completed description]}]
  [re-com/v-box
   :class "todo-details"
   :gap "5px"
   :children [[re-com/title
               :label title
               :level :level2]
              [re-com/p {:class "description"} description]
              [re-com/h-box
               :class "todo-actions"
               :gap "5px"
               :children [[re-com/button
                           :label (if completed "Not Done" "Done")
                           :on-click (fn []
                                       (re-frame/dispatch [::events/toggle-complete {:id id, :completed (not completed)}])
                                       (set-hash! "/"))]
                          [re-com/button
                           :label "Back"
                           :on-click #(set-hash! "/")]]]]])

(defn todo-data []
  (let [todos (re-frame/subscribe [::subs/todos])
        current-todo-id (re-frame/subscribe [::subs/current-todo-id])]
    (def find-id (partial (fn [id todo] (= (int id) (int (:id todo)))) @current-todo-id))
    [re-com/v-box :children (map (fn [todo] [todo-info todo])
                                 (filterv find-id @todos))]))

(defn link-to-home-page []
  [re-com/hyperlink-href
   :label "go to Home Page"
   :href "#/"])

(defn todo-panel []
  [re-com/v-box
   :gap "1em"
   :children [[todo-data]]])

(def form-template
  [re-com/v-box
   :gap "5px"
   :children [[re-com/label :label "Title"]
              [:input {:field :text :id :title}]
              [re-com/label :label "Description"]
              [:textarea {:field :textarea :id :description}]]])

;; new todo
(defn new-info []
  (let [doc (r/atom {:title "" :description ""})]
    (fn []
      [re-com/v-box
       :gap "5px"
       :children [[bind-fields
                   form-template
                   doc]
                  [re-com/h-box
                   :gap "5px"
                   :children [[re-com/button
                               :label "Save"
                               :on-click (fn []
                                           (re-frame/dispatch [::events/new-todo @doc])
                                           (set-hash! "/"))]
                              [re-com/button
                               :label "Back"
                               :on-click #(set-hash! "/")]]]]])))

(defn new-data []
  (let [todos (re-frame/subscribe [::subs/todos])
        current-todo-id (re-frame/subscribe [::subs/current-todo-id])]
    [new-info]))

(defn new-panel []
  [re-com/v-box
   :gap "1em"
   :children [[new-data]]])

;; weather
(defn weather-info [{:keys [name main weather]}]
  ((.-log js/console) (first weather))
  [re-com/v-box
   :children [[re-com/title
               :label name
               :level :level2]
              [:img {:src (str "http://openweathermap.org/img/wn/" (:icon (first weather)) "@2x.png") :width 100 :height 100}]
              [re-com/p
               {:class "description"}
               (str
                (:temp main)
                "°C")]]])

(defn weather-data []
  (let [weather (re-frame/subscribe [::subs/weather])]
    ((.-log js/console) @weather)
    (if (or
         (= @weather "Loading")
         (= @weather nil))
      [re-com/title
       :label "Loading..."
       :level :level2]
      [weather-info @weather])))

(defn weather-panel []
  [re-com/v-box
   :gap "1em"
   :children [[weather-data]]])

;; main

(defn- panels [panel-name]
  (case panel-name
    :home-panel [home-panel]
    :todo-panel [todo-panel]
    :new-panel [new-panel]
    :weather-panel [weather-panel]
    [:div]))

(defn show-panel [panel-name]
  [panels panel-name])

(defn main-panel []
  (let [active-panel (re-frame/subscribe [::subs/active-panel])]
    [:div.container
     [re-com/v-box
      :height "100%"
      :gap "10px"
      :children [[re-com/title
                  :label "Clojurescript TODO Example"
                  :level :level1]
                 (if-not (= @active-panel :weather-panel)
                   (link-to-weather-page)
                   (link-to-home-page))
                 [panels @active-panel]]]]))
