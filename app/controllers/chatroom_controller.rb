class ChatroomController < ApplicationController
    def index
        @messages = Message.all
        @message = Message.new
      end
end
