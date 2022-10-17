# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

x = Conversation.create(title:'one')
y = Conversation.create(title:'two')
a = Comment.create(content:'comment on convo one', conversation_id:1)
a = Comment.create(content:'comment on convo two', conversation_id:2)
