'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const CONSENT_KEY = 'pgmobile_cookie_consent';

export default function GoogleAdsTag() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(CONSENT_KEY);
      setHasConsent(stored === 'accepted');
    } catch {
      setHasConsent(false);
    }
  }, []);

  if (!googleAdsId) return null;
  if (!hasConsent) return null;

  return (
    <>
      <Script
        id="google-ads-gtag-src"
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
        strategy="afterInteractive"
      />

      <Script
        id="google-ads-gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAdsId}');
          `
        }}
      />
    </>
  );
}
