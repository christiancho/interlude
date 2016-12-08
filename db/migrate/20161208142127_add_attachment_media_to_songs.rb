class AddAttachmentMediaToSongs < ActiveRecord::Migration
  def self.up
    change_table :songs do |t|
      t.attachment :media
    end
  end

  def self.down
    remove_attachment :songs, :media
  end
end
