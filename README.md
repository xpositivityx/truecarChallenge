Overview:

For my submission I chose to create a rails REST api which is consumed by a react isomorphic app. Due to time constraints this may not be the cleanest code I have ever written, but i did want to give a demonstration of some key framework concepts. Things like use of active model serializers in the api and basic demonstration of smart/dumb component structure.

To get the app running:

for the api:
cd selfiegramAPI
rake db:create db:migrate db:seed
rails s

for the frontend App:
cd selfiegramFrontEnd
npm start

this should open the browser automatically and direct you to localhost:3001

if not, try npm install then npm start
