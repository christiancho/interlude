class ChangeColumnNameInPlaylists < ActiveRecord::Migration[5.0]
  def change
    rename_column :playlists, :owner_id, :user_id
  end
end
