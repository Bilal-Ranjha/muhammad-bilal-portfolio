"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  projectType: "",
  budget: "",
  message: "",
};

export function useContactForm() {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [emailDraftReady, setEmailDraftReady] = useState(false);

  function updateField(name: keyof FormState, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setEmailDraftReady(false);
  }

  function validate() {
    const nextErrors: Partial<FormState> = {};
    if (!values.name.trim()) nextErrors.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) nextErrors.email = "Please enter a valid email.";
    if (!values.projectType) nextErrors.projectType = "Please choose a project type.";
    if (!values.budget.trim()) nextErrors.budget = "Please add a budget range or write not sure.";
    if (values.message.trim().length < 20) nextErrors.message = "Please share at least 20 characters about the project.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;
    const subject = `Portfolio enquiry: ${values.projectType}`;
    const body = [
      `Name: ${values.name.trim()}`,
      `Email: ${values.email.trim()}`,
      `Project type: ${values.projectType}`,
      `Budget: ${values.budget.trim()}`,
      "",
      "Project details:",
      values.message.trim(),
    ].join("\n");
    window.location.href = `mailto:m.bilalranjha030@gmail.com?${new URLSearchParams({ subject, body }).toString()}`;
    setEmailDraftReady(true);
    setValues(initialState);
  }

  return { values, errors, emailDraftReady, updateField, handleSubmit };
}
