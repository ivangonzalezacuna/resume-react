export default function validateInfo(values) {
  let errors = {}
  let noErrors = false

  if (!values.name.trim()) {
    errors.name = "Name required"
    noErrors = true
  }

  if (!values.email) {
    errors.email = "Email required"
    noErrors = true
  } else if (!/^[A-Z0-9._%+~]+@[A-Z0-9.~]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email address is invalid"
    noErrors = true
  }

  if (!values.message.trim()) {
    errors.message = "Message required"
    noErrors = true
  }

  if (!values.subject.trim() && !noErrors) {
    values.subject = "Resume Contact Form"
  }

  return errors
}