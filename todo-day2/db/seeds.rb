# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
todo1 = Todo.create!(title: "Todo 1", body: "Todo 1 body", done: false)
todo2 = Todo.create!(title: "Todo 2", body: "Todo 2 body", done: false)
todo3 = Todo.create!(title: "Todo 3", body: "Todo 3 body", done: true)
todo4 = Todo.create!(title: "Todo 4", body: "Todo 4 body", done: false)
todo5 = Todo.create!(title: "Todo 5", body: "Todo 5 body", done: true)
