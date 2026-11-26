"use client";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useId } from "react";
import { useContactForm } from "@/hooks/useContactForm";
import { projectTypes } from "@/data/portfolio";
export function InquiryForm({ compact = false }: { compact?: boolean }) {
  const id = useId();
  const {
    values,
    setCaptchaToken,
    captchaVersion,
    errors,
    status,
    isSubmitting,
    successMessage,
    errorMessage,
    updateField,
    handleSubmit,
  } = useContactForm({ requireProjectDetails: !compact });
  function fieldProps(
    name: "name" | "email" | "budget" | "message" | "projectType",
  ) {
    return {
      id: `${id}-${name}`,
      name,
      value: values[name],
      "aria-invalid": Boolean(errors[name]),
      "aria-describedby": errors[name] ? `${id}-${name}-error` : undefined,
      required: true,
    };
  }
  function error(name: keyof typeof values) {
    return errors[name] ? (
      <span id={`${id}-${name}-error`} className="field-error">
        {errors[name]}
      </span>
    ) : null;
  }
  return (
    <form
      className={`inquiry-form ${compact ? "compact-form" : ""}`}
      onSubmit={handleSubmit}
      noValidate
      aria-busy={isSubmitting}
    >
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor={`${id}-name`}>Name</label>
          <input
            {...fieldProps("name")}
            autoComplete="name"
            maxLength={120}
            placeholder="Your name"
            onChange={(e) => updateField("name", e.target.value)}
          />
          {error("name")}
        </div>
        <div className="form-field">
          <label htmlFor={`${id}-email`}>Email</label>
          <input
            {...fieldProps("email")}
            type="email"
            autoComplete="email"
            maxLength={254}
            placeholder="you@company.com"
            onChange={(e) => updateField("email", e.target.value)}
          />
          {error("email")}
        </div>
        {!compact && (
          <>
            <div className="form-field">
              <label htmlFor={`${id}-projectType`}>Project type</label>
              <select
                {...fieldProps("projectType")}
                onChange={(e) => updateField("projectType", e.target.value)}
              >
                <option value="">Select a project type</option>
                {projectTypes.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
              {error("projectType")}
            </div>
            <div className="form-field">
              <label htmlFor={`${id}-budget`}>Budget</label>
              <input
                {...fieldProps("budget")}
                maxLength={120}
                placeholder="Your range, or not sure"
                onChange={(e) => updateField("budget", e.target.value)}
              />
              {error("budget")}
            </div>
          </>
        )}
      </div>
      <div className="form-field message-field">
        <label htmlFor={`${id}-message`}>
          {compact ? "Project requirements" : "Message"}
        </label>
        <textarea
          {...fieldProps("message")}
          rows={compact ? 4 : 5}
          maxLength={5000}
          placeholder="What would you like to build?"
          onChange={(e) => updateField("message", e.target.value)}
        />
        {error("message")}
      </div>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor={`${id}-website`}>Leave this field empty</label>
        <input
          id={`${id}-website`}
          name="website"
          value={values.website}
          onChange={(e) => updateField("website", e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <input type="checkbox" name="botcheck" hidden tabIndex={-1} aria-hidden="true" />
      <div tabIndex={-1} data-captcha-field="true" aria-label="Spam protection">
        <HCaptcha
          key={captchaVersion}
          sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
          reCaptchaCompat={false}
          theme="dark"
          size="compact"
          onVerify={setCaptchaToken}
          onExpire={() => setCaptchaToken("")}
          onError={() => setCaptchaToken("")}
        />
        {errors.captcha && <span className="field-error" role="alert">{errors.captcha}</span>}
      </div>
      <button
        className="button button-primary"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting
          ? "Sending…"
          : compact
            ? "Send Message"
            : "Submit Project Inquiry"}
      </button>
      <p className="form-note">Your enquiry goes directly to my inbox.</p>
      {status === "success" && (
        <p className="form-status" role="status">
          {successMessage}
        </p>
      )}
      {status === "error" && (
        <p className="form-status form-status-error" role="alert">
          {errorMessage}{" "}
          <a href="mailto:m.bilalranjha030@gmail.com">Email me directly</a>.
        </p>
      )}
    </form>
  );
}
