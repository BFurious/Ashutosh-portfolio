export class EnvVariables {
  constructor() {
    this.TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID
    this.SERVICE_ID = import.meta.env.VITE_SERVICE_ID
    this.EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  }
}
