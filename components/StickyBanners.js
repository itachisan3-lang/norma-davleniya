'use client';
import { useEffect } from 'react';

export default function StickyBanners() {
  useEffect(() => {
    // Push ads
    window.AdMediatorTag = window.AdMediatorTag || [];
    window.AdMediatorTag.push({ v:1, el:'admediator-51871-437097', c:51871, b:437097, admData: window.admData||{} });
    window.AdMediatorTag.push({ v:1, el:'admediator-51871-437098', c:51871, b:437098, admData: window.admData||{} });

    function checkSticky(adId, wrapperId, bodyClass) {
      const el = document.getElementById(adId);
      const wrap = document.getElementById(wrapperId);
      if (!el || !wrap) return;
      const obs = new MutationObserver(() => {
        if (el.children.length > 0 || el.innerHTML.trim()) {
          wrap.style.display = '';
          document.body.classList.add(bodyClass);
        }
      });
      obs.observe(el, { childList: true, subtree: true, characterData: true });
    }
    checkSticky('admediator-51871-437097', 'stickyDesktop', 'has-web-sticky');
    checkSticky('admediator-51871-437098', 'stickyMobile',  'has-mob-sticky');
  }, []);

  return (
    <>
      {/* Desktop sticky 1200x250 */}
      <div id="stickyDesktop" className="ad-desktop-only">
        <button className="sticky-close" onClick={() => {
          document.getElementById('stickyDesktop').style.display='none';
          document.body.classList.remove('has-web-sticky');
        }} aria-label="Закрыть рекламу">✕</button>
        <div id="admediator-51871-437097" />
      </div>
      {/* Mobile sticky 320x50 */}
      <div id="stickyMobile" className="ad-mobile-only">
        <button className="sticky-close" onClick={() => {
          document.getElementById('stickyMobile').style.display='none';
          document.body.classList.remove('has-mob-sticky');
        }} aria-label="Закрыть рекламу">✕</button>
        <div id="admediator-51871-437098" />
      </div>
      {/* Fullscreen interstitial */}
      <div id="fullscreen-ad-overlay">
        <div style={{position:'relative'}}>
          <button
            style={{position:'absolute',top:'-36px',right:0,background:'none',border:'none',color:'#fff',fontSize:'26px',cursor:'pointer'}}
            onClick={() => document.getElementById('fullscreen-ad-overlay').style.display='none'}
            aria-label="Закрыть"
          >✕</button>
          <div id="admediator-51871-437124" />
        </div>
      </div>
      <script dangerouslySetInnerHTML={{__html:`
        (function(){
          window.AdMediatorTag=window.AdMediatorTag||[];
          window.AdMediatorTag.push({v:1,el:'admediator-51871-437124',c:51871,b:437124,admData:window.admData||{}});
          if(!sessionStorage.getItem('fs_ad_shown')){
            setTimeout(function(){
              var o=document.getElementById('fullscreen-ad-overlay');
              if(o){o.style.display='flex';}
              sessionStorage.setItem('fs_ad_shown','1');
            },3500);
          }
        })();
      `}} />
    </>
  );
}
