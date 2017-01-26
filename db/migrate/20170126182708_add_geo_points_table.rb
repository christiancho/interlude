class AddGeoPointsTable < ActiveRecord::Migration[5.0]
  def change
    create_table :geopoints do |t|
      t.integer :user_id, null: false
      t.string :metrocode
      t.float :geo_lat
      t.float :geo_lng
      t.string :ip_address

      t.timestamps
    end

    add_index :geopoints, :user_id
  end
end
