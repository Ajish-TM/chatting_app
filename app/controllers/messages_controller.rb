class MessagesController < ApplicationController
    before_action :authenticate_user!

    def create
      @message = current_user.messages.build(message_params)
      if @message.save
        # flash[:notice] = "Message sent!"
        ActionCable.server.broadcast('chatroom_channel', {mod_message: render_message(@message)})
      else
        flash[:alert] = "Failed to send message."
      end
      # redirect_to root_path
    end
  
    private
  
    def message_params
      params.require(:message).permit(:body)
    end

    def render_message(message)
      ApplicationController.render(
        partial: 'messages/message',
        locals: { message: message }
      )
    end
end
