class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      redirect_to api_user_url(@user)
    else
      render json: 'invalid credentials', status: :unprocessable_entity
    end
  end

  def destroy
    if !current_user
      render json: 'no current user', status: :not_found
    else
      logout
      render json: {}
    end
  end
end
