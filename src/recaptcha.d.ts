interface Window {
  grecaptcha: {
    render: (container: string | HTMLElement, parameters: ReCaptchaParameters) => number;
    getResponse: (opt_widget_id?: number) => string;
  };
  onRecaptchaLoad: () => void;
}

interface ReCaptchaParameters {
  sitekey: string;
  callback: (response: string) => void;
  [key: string]: any;
}

declare const grecaptcha: Window['grecaptcha'];
