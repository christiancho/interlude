# == Schema Information
#
# Table name: songs
#
#  id                 :integer          not null, primary key
#  title              :string           not null
#  album_id           :integer          not null
#  ord                :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  media_file_name    :string
#  media_content_type :string
#  media_file_size    :integer
#  media_updated_at   :datetime
#  duration           :integer
#

class Song < ApplicationRecord

  before_validation :extract_duration

  validates :title, :album_id, :ord, :duration, presence: true
  validates_uniqueness_of :ord, scope: :album_id

  has_attached_file :media
  validates_attachment_content_type :media,
  content_type: [ 'audio/mpeg',
    'audio/x-mpeg',
    'audio/mp3',
    'audio/x-mp3',
    'audio/mpeg3',
    'audio/x-mpeg3',
    'audio/mpg',
    'audio/x-mpg',
    'audio/x-mpegaudio'
  ]

  belongs_to :album
  has_one :artist, through: :album

  def media_url
    media.url
  end

  private

  def extract_duration
    path = media.queued_for_write[:original].path
    open_opts = { :encoding => 'utf-8' }
    Mp3Info.open(path, open_opts) do |mp3info|
      self.duration = (mp3info.length + 0.5).to_i
    end
  end

end
