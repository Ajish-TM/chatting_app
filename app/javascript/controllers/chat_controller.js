import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="chat"
export default class extends Controller {
  static targets = ["input", "button", "messages"];

  connect() {
    console.log("Input target:", this.inputTarget);
    console.log("Button target:", this.buttonTarget);
    console.log("Messages target:", this.messagesTarget);
    this.scrollToBottom();
    this.clearInput();
    console.log("Chat controller connected");
  }

  submitOnEnter(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      this.buttonTarget.click();
    }
  }

  scrollToBottom() {
    const messagesContainer = this.messagesTarget;
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  clearInput() {
    console.log("Clearing input field") // Add a log to ensure this method is called
    this.inputTarget.value = ''
  }
}
