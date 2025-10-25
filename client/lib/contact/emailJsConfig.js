// emailJS IDs
export const SERVICE_ID = process.env.EMAILJS_SERVICE_ID
export const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID
const PUBLIC_ID = process.env.EMAILJS_PUBLIC_ID

export const createEmailTemplate = data => ({
  to_name: 'Eleni',
  from_name: data.name,
  message: data.message,
  reply_to: data.email,
})

export const EMAIL_JS_OPTIONS = {
  publicKey: PUBLIC_ID,
  limitRate: { throttle: 10000 }, // 10s
}
