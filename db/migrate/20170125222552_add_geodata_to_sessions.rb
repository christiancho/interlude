class AddGeodataToSessions < ActiveRecord::Migration[5.0]
  def change
    add_column :sessions, :metro_code, :string
    add_column :sessions, :geo_lat, :float
    add_column :sessions, :geo_lng, :float
  end
end
