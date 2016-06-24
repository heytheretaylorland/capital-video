Capcoauth.configure do |config|
  # CapcOAuth Client ID
  config.client_id ENV['CAPCO_ID']

  # CapcOAuth Client Secret
  config.client_secret ENV['CAPCO_SECRET']

  # Configures how often to check CapcOAuth for access token validity, in seconds.  If this value is too high,
  # application will continue to serve requests to users even after the token is revoked
  # config.token_verify_ttl 10
end
