// This npm package is for the Date Time picker on the services#show
import flatpickr from "flatpickr"
import "flatpickr/dist/themes/airbnb.css"

flatpickr(".datepicker", {
  enableTime: true,
  dateFormat: "Y-m-d H:i",
})
