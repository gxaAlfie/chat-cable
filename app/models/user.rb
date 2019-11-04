class User < ApplicationRecord
  devise :database_authenticatable, :rememberable, :validatable, :registerable

  validates :username, uniqueness: true, presence: true

  has_many :messages, dependent: :delete_all
  has_one_attached :image

  after_create :add_default_image

  def email_required?
    false
  end

  def will_save_change_to_email?
    false
  end

  private

  def add_default_image
    return if image.attached?
    image_path = Rails.root.join(
      'app', 'assets', 'images', 'placeholder-icon.png'
    )
    default_image = File.open(image_path)
    self.image.attach(
      io: default_image,
      filename: 'default-image.png',
      content_type: 'image/png'
    )
  end
end
