import { useEffect, useState } from 'react';
import usePixel from './usePixel';


const MetaPixel = () => {
  const [pixelData] = usePixel();
  const [validPixels, setValidPixels] = useState([]);

  useEffect(() => {
    if (pixelData && pixelData.length > 0) {
      const filteredPixels = pixelData.filter(item => item.pixelId);
      setValidPixels(filteredPixels);
    }
  }, [pixelData]);

  useEffect(() => {
    if (validPixels.length > 0) {
      const scriptBase = document.createElement('script');
      scriptBase.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
      `;
      document.head.appendChild(scriptBase);

      const pixelScripts = [];

      validPixels.forEach(pixel => {
        const initScript = document.createElement('script');
        initScript.innerHTML = `
          fbq('init', '${pixel.pixelId}');
          fbq('track', 'PageView');
        `;
        document.head.appendChild(initScript);
        pixelScripts.push(initScript); 
      });

      return () => {
        document.head.removeChild(scriptBase);
        pixelScripts.forEach(script => {
          document.head.removeChild(script);
        });
      };
    }
  }, [validPixels]);

  return null;
};

export default MetaPixel;
