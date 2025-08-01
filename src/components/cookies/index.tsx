'use client';
import CookieConsent from "react-cookie-consent";

export default function CookieBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      cookieName="consent"
      style={{ background: "#2B373B" }}
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
    >
      We use cookies to enhance your experience. Read our{" "}
      <a href="https://bigpennysocial.co.uk/privacy-policy">Privacy Policy</a>.
    </CookieConsent>
  );
}
