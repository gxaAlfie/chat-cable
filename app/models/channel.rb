class Channel < ApplicationRecord
  has_many :messages, dependent: :delete_all

  scope :with_message_count, -> { left_outer_joins(:messages).select("channels.*, COUNT(messages.id) AS message_count").group(:id) }
end
