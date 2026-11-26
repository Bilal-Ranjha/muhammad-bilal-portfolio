"use client";
import { type FormEvent, useRef, useState } from "react";
type FormState = {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
  website: string;
};
type Options = { requireProjectDetails?: boolean };
const initialState: FormState = {
  name: "",
  email: "",
  projectType: "",
  budget: "",
  message: "",
  website: "",
};
const successMessage =
  "Thanks! Your message has been sent successfully. I’ll get back to you soon.";
const errorMessage =
  "Sorry, your message could not be sent. Please try again or contact me by email.";
export function useContactForm({ requireProjectDetails = true }: Options = {}) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState<Partial<FormState & { captcha: string }>>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const inFlight = useRef(false);
  const captchaToken = useRef("");
  const [captchaVersion, setCaptchaVersion] = useState(0);
  function setCaptchaToken(token: string) {
    captchaToken.current = token;
    setErrors((current) => ({ ...current, captcha: undefined }));
  }
  function updateField(name: keyof FormState, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setStatus("idle");
  }
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current) return;
    const form = event.currentTarget;
    const nextErrors: Partial<FormState & { captcha: string }> = {};
    if (!values.name.trim()) nextErrors.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(values.email.trim()))
      nextErrors.email = "Please enter a valid email.";
    if (requireProjectDetails && !values.projectType)
      nextErrors.projectType = "Please choose a project type.";
    if (requireProjectDetails && !values.budget.trim())
      nextErrors.budget = "Please add a budget range or write not sure.";
    if (!values.message.trim())
      nextErrors.message = "Please share your project requirements.";
    for (const [field, max] of Object.entries({ name: 120, email: 254, projectType: 120, budget: 120, message: 5000 })) {
      if (values[field as keyof FormState].length > max) nextErrors[field as keyof FormState] = `Please use at most ${max} characters.`;
    }
    if (/[\r\n]/.test(values.name)) nextErrors.name = "Please enter your name on one line.";
    if (!captchaToken.current) nextErrors.captcha = "Please complete the spam protection check.";
    setErrors(nextErrors);
    const firstError = Object.keys(nextErrors)[0];
    if (firstError) {
      form.querySelector<HTMLElement>(firstError === "captcha" ? '[data-captcha-field="true"]' : `[name="${firstError}"]`)?.focus();
      return;
    }
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();
    if (!accessKey || values.website.trim() || form.querySelector<HTMLInputElement>('[name="botcheck"]')?.checked) {
      setStatus("error");
      return;
    }
    inFlight.current = true;
    setIsSubmitting(true);
    setStatus("idle");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          name: values.name.trim(),
          email: values.email.trim(),
          message: values.message.trim(),
          projectType: values.projectType.trim(),
          budget: values.budget.trim(),
          subject: `New Portfolio Inquiry from ${values.name.trim()}`,
          "h-captcha-response": captchaToken.current,
          botcheck: false,
          pageUrl: window.location.origin + window.location.pathname,
        }),
        signal: AbortSignal.timeout(15000),
        redirect: "error",
        credentials: "omit",
      });
      const result = await response.json();
      if (!response.ok || !result || typeof result !== "object" || Array.isArray(result) || result.success !== true)
        throw new Error("Unable to send inquiry");
      setStatus("success");
      setValues(initialState);
    } catch {
      setStatus("error");
    } finally {
      inFlight.current = false;
      captchaToken.current = "";
      setCaptchaVersion((current) => current + 1);
      setIsSubmitting(false);
    }
  }
  return {
    values,
    errors,
    setCaptchaToken,
    captchaVersion,
    status,
    isSubmitting,
    successMessage,
    errorMessage,
    updateField,
    handleSubmit,
  };
}
