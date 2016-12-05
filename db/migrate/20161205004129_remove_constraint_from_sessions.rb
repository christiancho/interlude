class RemoveConstraintFromSessions < ActiveRecord::Migration[5.0]
  def change

    change_column :sessions, :http_user_agent, :string, null: true

  end
end
