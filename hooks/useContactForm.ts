"use client";

import { FormEvent, useState } from "react";

type FormState = { name: string; email: string; projectType: string; budget: string; message: string };
type Options = { requireProjectDetails?: boolean };

const initialState: FormState = { name: "", email: "", projectType: "", budget: "", message: "" };
const successMessage = "Thanks! Your message has been sent successfully. I’ll get back to you soon.";
const errorMessage = "Sorry, your message could not be sent. Please try again or contact me by email.";

export function useContactForm({ requireProjectDetails = true }: Options = {}) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(name: keyof FormState, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setStatus("idle");
  }

  function validate() {
    const nextErrors: Partial<FormState> = {};
    if (!values.name.trim()) nextErrors.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) nextErrors.email = "Please enter a valid email.";
    if (requireProjectDetails && !values.projectType) nextErrors.projectType = "Please choose a project type.";
    if (requireProjectDetails && !values.budget.trim()) nextErrors.budget = "Please add a budget range or write not sure.";
    if (!values.message.trim()) nextErrors.message = "Please share your project requirements.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, pageUrl: window.location.href, website: "" }),
      });
      if (!response.ok) throw new Error("Unable to send inquiry");
      setStatus("success");
      setValues(initialState);
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return { values, errors, status, isSubmitting, successMessage, errorMessage, updateField, handleSubmit };
}
