class AddUserAgentColumnToGeoPoints < ActiveRecord::Migration[5.0]
  def change
    add_column :geopoints, :http_user_agent, :string
  end
end
