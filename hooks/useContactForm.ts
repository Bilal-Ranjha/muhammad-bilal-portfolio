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
  const [submitted, setSubmitted] = useState(false);

  function updateField(name: keyof FormState, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setSubmitted(false);
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
    setSubmitted(true);
    setValues(initialState);
  }

  return { values, errors, submitted, updateField, handleSubmit };
}
