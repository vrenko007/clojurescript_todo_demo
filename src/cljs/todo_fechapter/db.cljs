(ns todo-fechapter.db)

(def default-db
  {:name "re-frame"
   :current-todo-id 0
   :next-todo-id 4
   :weather "Loading..."
   :todos [{:id 1 :title "First Todo" :description "Description of the first Todo" :completed false}
           {:id 2 :title "Second Todo" :description "Description of the second Todo" :completed true}
           {:id 3 :title "Third Todo" :description "Description of the third Todo" :completed false}]})
