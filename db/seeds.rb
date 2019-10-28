user = User.create(username: 'mendoza929', name: 'Alfie', password: 'password')
user.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'placeholder-icon.png')), filename: 'default-image.png',  content_type: 'image/png')
user = User.first
channel = Channel.find_or_create_by(name: 'General')
Channel.find_or_create_by(name: 'Random')

10.times do |iteration|
  Message.create(content: "This is message ##{iteration+1}", user: user, channel: channel)
end
