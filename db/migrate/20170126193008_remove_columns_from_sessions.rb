class RemoveColumnsFromSessions < ActiveRecord::Migration[5.0]
  def change
    remove_column :sessions, :http_user_agent
    remove_column :sessions, :ip_address
    remove_column :sessions, :metro_code
    remove_column :sessions, :geo_lat
    remove_column :sessions, :geo_lng
  end
end
