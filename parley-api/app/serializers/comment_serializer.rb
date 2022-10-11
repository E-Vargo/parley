class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :conversation_id
end
