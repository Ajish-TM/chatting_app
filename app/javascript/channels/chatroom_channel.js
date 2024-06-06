import consumer from "channels/consumer"

// Function to get the Stimulus controller instance for an element
function getStimulusController(element, identifier) {
  const application = window.Stimulus;
  if (application) {
    return application.getControllerForElementAndIdentifier(element, identifier);
  }
  return null;
}

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Assuming #messages is the container for the messages
    const messagesContainer = document.getElementById('messages');
    messagesContainer.insertAdjacentHTML('beforeend', data.mod_message);

    // Get the chat controller instance
    const controllerElement = document.querySelector('[data-controller="chat"]');
    if (controllerElement && window.Stimulus) {
      const chatController = getStimulusController(controllerElement, "chat");
      if (chatController) {
        chatController.scrollToBottom();
        chatController.clearInput();
      } else {
        console.error("Chat controller not found");
      }
    } else {
      console.error("Controller element or Stimulus not found");
    }
  }
});
