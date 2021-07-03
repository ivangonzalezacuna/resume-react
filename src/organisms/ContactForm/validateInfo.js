export default function validateInfo(values) {
  let errors = {}

  if (!values.name.trim()) {
    errors.name = "Required field"
  }

  if (!values.email) {
    errors.email = "Required field"
  } else if (!/^[A-Z0-9._%+~]+@[A-Z0-9.~]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email address is invalid"
  }

  if (!values.message.trim()) {
    errors.message = "Required field"
  }

  return errors
}