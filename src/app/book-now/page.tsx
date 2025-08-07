"use client";

import { useAppContext } from "@/context";
import { useEffect, useRef } from "react";

const BookNow: React.FC<any> = () => {
  const data = useAppContext();
  const widgetRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    const loadDMNWidget = async () => {
      // Clear any existing widget content
      if (widgetRef.current) {
        widgetRef.current.innerHTML = '';
      }

      // Remove any existing DMN elements to prevent conflicts
      const existingScript = document.querySelector("script[data-dmn]");
      const existingLink = document.querySelector("link[data-dmn-style]");
      
      if (existingScript) {
        existingScript.remove();
      }
      if (existingLink) {
        existingLink.remove();
      }

      // Reset the loaded flag
      scriptLoadedRef.current = false;

      // Add stylesheet first and wait for it to load
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href =
        "https://onsass.designmynight.com/?background-color=%23EBE9DB&primary-color=%23ffffff&body-text-color=%23000000&outer-border-color=gray";
      link.setAttribute("data-dmn-style", "true");
      
      // Wait for stylesheet to load
      await new Promise((resolve, reject) => {
        link.onload = resolve;
        link.onerror = reject;
        document.head.appendChild(link);
      });

      // Small delay to ensure styles are applied
      await new Promise(resolve => setTimeout(resolve, 100));

      // Add script after stylesheet is loaded
      const script = document.createElement("script");
      script.src = "//widgets.designmynight.com/bookings-partner.min.js";
      script.setAttribute("dmn-booking-form", "true");
      script.setAttribute("venue", "5ef4accad4ea515dbc2e723b");
      script.setAttribute("hide-offers", "false");
      script.setAttribute("hide-powered-by", "false");
      script.setAttribute("search-venues", "false");
      script.setAttribute("monday-first", "true");
      script.setAttribute("locale", "undefined");
      script.setAttribute(
        "allowed-types",
        "67854362da655219cc7c62a7,678a2c23f221b16abf3f73a9,678548e8b7e5ce3059275463,678a2c23f221b16abf3f73a7"
      );
      script.setAttribute("custom-source", "Own website");
      script.setAttribute("google-analytics-code", "G-0DDZDG74MF");
      script.setAttribute("google-tag-manager-code", "GTM-T5RMKTD");
      script.setAttribute(
        "return-url",
        "https://bigpennysocial.co.uk/flukes/dmn-redirect"
      );
      script.setAttribute("return-method", "get");
      script.setAttribute("linked-bookings", "true");
      script.setAttribute("data-dmn", "true");
      script.async = true;

      // Wait for script to load and execute
      await new Promise((resolve, reject) => {
        script.onload = () => {
          scriptLoadedRef.current = true;
          resolve(void 0);
        };
        script.onerror = reject;
        widgetRef.current?.appendChild(script);
      });

      // Additional delay to ensure widget initializes
      setTimeout(() => {
        // Force a repaint if needed
        if (widgetRef.current) {
          widgetRef.current.style.display = 'none';
          widgetRef.current.offsetHeight; // Trigger reflow
          widgetRef.current.style.display = '';
        }
      }, 500);
    };

    loadDMNWidget().catch(console.error);

    // Cleanup function
    return () => {
      const script = document.querySelector("script[data-dmn]");
      const link = document.querySelector("link[data-dmn-style]");
      if (script) script.remove();
      if (link) link.remove();
    };
  }, []); // Empty dependency array to run only once

  return (
    <main className="flex flex-col items-center py-8 min-h-screen px-6 md:px-12 font-['Salford_Sans'] bg-primary text-secondary">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
          <div
            ref={widgetRef}
            id="design-my-night-widget"
            className="w-full max-w-3xl flex justify-center"
            style={{ minHeight: '400px' }} // Prevent layout shift
          ></div>
        </div>

        <div className="mb-auto xl:text-[40px] xl:leading-[42px] text-center md:text-left">
          <h1 className="text-[28px] md:text-[35px] font-bold mb-6 xl:text-[45px]">
            {data.pageTitle}
          </h1>
          <ul className="text-[24px] md:text-[28px] xl:text-[30px] text-left leading-[24px] md:leading-[30px] xl:leading-[32px] list-disc list-outside pl-6 space-y-3">
            {data.games.map((game: any) => {
              return (
                <li key={game.id}>
                  <strong className="mr-2" key={game.id}>{game.title}:</strong> {game.details}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="mt-8 mx-auto sm:w-[57%] xl:text-[40px] xl:leading-[42px] md:text-left mb-12">
        <h1 className="text-[28px] text-center md:text-left uppercase md:text-[35px] font-bold mb-6 xl:text-[45px]">
          Notices
        </h1>
        <ul className="text-[24px] md:text-[28px] xl:text-[30px] text-left leading-[24px] md:leading-[30px] xl:leading-[32px] list-disc list-outside pl-6 space-y-3">
          {data.notices.map((notice: any) => {
            return (
              <li key={notice.id}>{notice.notice}</li>
            )
          })}

          <li key={Math.random()}>
            For groups of 30 or more please email{" "}
            <a
              href="mailto:privatehire@bigpennysocial.co.uk"
              className="font-semibold hover:opacity-80"
            >
              privatehire@bigpennysocial.co.uk
            </a>{" "}
            and a member of our team will make sure you have the perfect night
            at Flukes.
          </li>
        </ul>
      </div>
    </main>
  );
};

export default BookNow;