import { Application } from "@hotwired/stimulus"
import { lazyLoadControllersFrom } from "@hotwired/stimulus-loading"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus = application

// Lazy load all Stimulus controllers from the "controllers" directory
lazyLoadControllersFrom("controllers", application)

export { application }
