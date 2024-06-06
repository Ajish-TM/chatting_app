class ApplicationController < ActionController::Base
 before_action :authenticate_user!
 def create
    @message = current_user.messages.create(message_params)
    redirect_to messages_path
  end

  private

  def message_params
    params.require(:message).permit(:content)
  end
end
