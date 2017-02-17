# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = [
	{
		handle: 'Dr. Teeth',
		photo: 'http://vignette1.wikia.nocookie.net/muppet/images/2/26/Dr_Teeth_pink.jpg/revision/latest?cb=20150625152503'
	},
	{
		handle: 'Animal',
		photo: 'https://upload.wikimedia.org/wikipedia/en/e/e7/Animal_(Muppet).jpg'
	},
	{
		handle: 'Zoot',
		photo: 'https://s-media-cache-ak0.pinimg.com/originals/e4/02/b5/e402b53190df79c74509408c1412f6cc.jpg'
	},
	{
		handle: 'Floyd Pepper',
		photo: 'http://vignette1.wikia.nocookie.net/muppet/images/3/3d/FloydPepper.jpg/revision/latest/scale-to-width-down/280?cb=20110209034900'
	}
]

users.each do |user|
	User.create(user)
end

posts = [
	{
		caption: 'Playing Music!',
		photo_url: 'http://vignette1.wikia.nocookie.net/muppet/images/4/46/Electricmayhemposter.jpg/revision/latest?cb=20060206173850'
	},
	{
		caption: 'Kermit',
		photo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/62/Kermit_the_Frog.jpg/220px-Kermit_the_Frog.jpg' 
	},
	{
		caption: 'Fan Art Friday!',
		photo_url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcThWKBTg6FC5HGTXLfFmHCXX7DRVBNgza-yLtt-j25v8qxuh-rk'
	},
	{
		caption: 'axis bold as teeth',
		photo_url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQV37nzlU4ULKkHE1fUvD6IBZcwzfcRtt_J69mvo6rlsm0IwJOz'
	},
	{
		caption: 'Floyd before Floyd',
		photo_url: 'http://vignette4.wikia.nocookie.net/muppet/images/9/99/Floydpeppersketch.jpg/revision/latest/scale-to-width-down/300?cb=20060326160919'
	},
	{
		caption: 'the horn section!',
		photo_url: 'http://a.abcnews.com/images/Sports/gty_dr_teeth_electric_mayhem_02_jc_160808_4x3_992.jpg'
	},
	{
		caption: 'turn the page',
		photo_url: 'http://vignette1.wikia.nocookie.net/muppet/images/6/63/Ghost_town_showdown.jpg/revision/latest/scale-to-width-down/176?cb=20130801123532'
	}
]

posts.each do |post|
	post[:user_id] = User.limit(1).order("RANDOM()").first.id
	Post.create(post)
end