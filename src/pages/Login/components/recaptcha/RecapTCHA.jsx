import React, { useEffect, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const PassiveReCAPTCHA = (props) => {
  const recaptchaRef = useRef(null);

  useEffect(() => {
    const addPassiveListener = (element) => {
      element.addEventListener('touchstart', () => {}, { passive: true });
    };

    if (recaptchaRef.current) {
      const recaptchaElement = recaptchaRef.current;
      if (recaptchaElement instanceof HTMLElement) {
        addPassiveListener(recaptchaElement);
        recaptchaElement.querySelectorAll('*').forEach(addPassiveListener);
      }
    }
  }, []);

  return <ReCAPTCHA ref={recaptchaRef} {...props} />;
};

export default PassiveReCAPTCHA;