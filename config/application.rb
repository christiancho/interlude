require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module InterludeApp
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
    config.serve_static_assets = true

    config.paperclip_defaults = {
      :storage => :s3,
      :s3_credentials => {
        :bucket => ENV["aws_bucket"],
        :access_key_id => ENV["aws_access_key_id"],
        :secret_access_key => ENV["aws_secret_access_key"],
        :region => ENV["aws_region"]
      }
    }

  end
end
