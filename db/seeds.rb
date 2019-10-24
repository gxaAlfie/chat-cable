user = User.create(username: 'mendoza929', name: 'Alfie', password: 'password')
channel = Channel.find_or_create_by(name: 'General')
Channel.find_or_create_by(name: 'Random')

10.times do |iteration|
  Message.create(content: "This is message ##{iteration+1}", user: user, channel: channel)
end
