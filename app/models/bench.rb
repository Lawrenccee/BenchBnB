class Bench < ApplicationRecord
  validates :description, :lat, presence: true
  validates :lng, 
    uniqueness: { scope: :lat, message: "Bench at this location already exists!" }, presence: true
end
