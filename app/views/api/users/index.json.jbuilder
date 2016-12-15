@users.each do |user|
  json.set! user.username do
    json.extract! user, :username, :f_name, :l_name, :image_url, :created_at
  end
end
