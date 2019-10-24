class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :rememberable, :validatable, :registerable

  validates :username, uniqueness: true, presence: true

  has_many :messages, dependent: :delete_all

  def email_required?
    false
  end

  def will_save_change_to_email?
    false
  end
end
