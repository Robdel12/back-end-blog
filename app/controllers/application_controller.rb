class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session

  # protected

  def authenticate_user_from_token!
    puts "this work?"
    authenticated = authenticate_with_http_token do |user_token, options|
      user_email = options[:email].presence
      user       = user_email && User.find_by_email(user_email)
      puts "hey ma look at me #{user}"

      if user && Devise.secure_compare(user.authentication_token, user_token)
        sign_in user, store: false
      else
        render json: 'Invalid authorization.'
      end
    end
    puts authenticated

    if !authenticated
      render json: 'No authorization provided.'
    end
  end

end
