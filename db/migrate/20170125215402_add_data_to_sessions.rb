class AddDataToSessions < ActiveRecord::Migration[5.0]
  def change
    add_column :sessions, :ip_address, :string
  end
end
