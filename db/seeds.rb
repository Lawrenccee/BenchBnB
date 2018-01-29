# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

benches = Bench.create([
  { description: 'bench1', lat: 37.784108, lng: -122.440620 },
  { description: 'bench2', lat: 37.784642, lng: -122.443560 },
  { description: 'bench3', lat: 37.752387, lng: -122.423281 },
  { description: 'bench4', lat: 37.758687, lng: -122.479257 },
  { description: 'bench5', lat: 37.757109, lng: -122.391401 },
  { description: 'bench6', lat: 37.720791, lng: -122.453549 },
])