"use client";

import React, { useState, useEffect } from 'react';

export default function OfflineDetector() {
  const [isOffline, setIsOffline] = useState(false);
  const [showRestoredToast, setShowRestoredToast] = useState(false);

  useEffect(() => {
    if (typeof navigator !== 'undefined') {
      setIsOffline(!navigator.onLine);
    }

    const handleOnline = () => {
      setIsOffline(false);
      setShowRestoredToast(true);
      setTimeout(() => {
        setShowRestoredToast(false);
      }, 3500); // Hide toast after 3.5 seconds
    };
    
    const handleOffline = () => {
      setShowRestoredToast(false);
      setIsOffline(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!isOffline && !showRestoredToast) return null;

  return (
    <>
      {isOffline && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'var(--surface-body)',
          zIndex: 99999,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '2rem'
        }}>
          <svg viewBox="0 0 1105 1424" width="120" height="155" className="logo-loader" style={{ marginBottom: '2rem' }}>
            <path d="M 129.50,22.00 Q 121.00,19.00 115.50,41.00 Q 110.00,63.00 115.00,115.50 Q 120.00,168.00 154.00,269.00 Q 188.00,370.00 239.00,453.50 Q 290.00,537.00 349.50,590.50 Q 409.00,644.00 313.00,718.50 Q 217.00,793.00 164.50,867.50 Q 112.00,942.00 72.50,1048.00 Q 33.00,1154.00 23.50,1224.50 Q 14.00,1295.00 17.00,1340.00 Q 20.00,1385.00 32.50,1375.00 Q 45.00,1365.00 95.50,1243.00 Q 146.00,1121.00 188.00,1059.00 Q 230.00,997.00 296.00,936.50 Q 362.00,876.00 420.50,851.00 Q 479.00,826.00 526.50,829.50 Q 574.00,833.00 645.00,870.00 Q 716.00,907.00 804.00,972.50 Q 892.00,1038.00 969.00,1121.00 Q 1046.00,1204.00 1055.00,1204.00 Q 1064.00,1204.00 1077.00,1175.00 Q 1090.00,1146.00 1080.00,1123.00 Q 1070.00,1100.00 965.00,978.00 Q 860.00,856.00 755.00,752.00 Q 650.00,648.00 741.50,590.00 Q 833.00,532.00 895.00,467.00 Q 957.00,402.00 1007.50,312.50 Q 1058.00,223.00 1070.00,182.50 Q 1082.00,142.00 1082.00,113.50 Q 1082.00,85.00 1070.00,86.50 Q 1058.00,88.00 991.50,184.50 Q 925.00,281.00 869.50,334.50 Q 814.00,388.00 749.00,421.00 Q 684.00,454.00 617.00,462.50 Q 550.00,471.00 488.50,454.00 Q 427.00,437.00 372.00,394.50 Q 317.00,352.00 274.00,294.50 Q 231.00,237.00 184.50,131.00 Q 138.00,25.00 129.50,22.00 Z M 549.50,171.00 Q 538.00,171.00 526.00,173.00 Q 514.00,175.00 506.50,177.50 Q 499.00,180.00 484.50,188.00 Q 470.00,196.00 459.00,206.00 Q 448.00,216.00 440.50,226.50 Q 433.00,237.00 427.50,249.50 Q 422.00,262.00 419.00,277.00 Q 416.00,292.00 416.00,303.00 Q 416.00,314.00 418.00,325.50 Q 420.00,337.00 426.50,352.50 Q 433.00,368.00 439.50,377.50 Q 446.00,387.00 454.50,395.50 Q 463.00,404.00 475.00,412.00 Q 487.00,420.00 498.00,424.50 Q 509.00,429.00 521.00,431.50 Q 533.00,434.00 547.50,434.00 Q 562.00,434.00 579.00,430.00 Q 596.00,426.00 608.00,420.00 Q 620.00,414.00 627.50,408.50 Q 635.00,403.00 644.50,393.00 Q 654.00,383.00 659.00,375.50 Q 664.00,368.00 670.50,352.50 Q 677.00,337.00 679.00,326.00 Q 681.00,315.00 681.00,302.00 Q 681.00,289.00 678.50,276.50 Q 676.00,264.00 671.50,252.50 Q 667.00,241.00 660.50,231.00 Q 654.00,221.00 643.00,210.00 Q 632.00,199.00 622.00,192.50 Q 612.00,186.00 601.50,181.50 Q 591.00,177.00 576.00,174.00 Q 561.00,171.00 549.50,171.00 Z" className="logo-outline"></path>
            <path d="M 129.50,22.00 Q 121.00,19.00 115.50,41.00 Q 110.00,63.00 115.00,115.50 Q 120.00,168.00 154.00,269.00 Q 188.00,370.00 239.00,453.50 Q 290.00,537.00 349.50,590.50 Q 409.00,644.00 313.00,718.50 Q 217.00,793.00 164.50,867.50 Q 112.00,942.00 72.50,1048.00 Q 33.00,1154.00 23.50,1224.50 Q 14.00,1295.00 17.00,1340.00 Q 20.00,1385.00 32.50,1375.00 Q 45.00,1365.00 95.50,1243.00 Q 146.00,1121.00 188.00,1059.00 Q 230.00,997.00 296.00,936.50 Q 362.00,876.00 420.50,851.00 Q 479.00,826.00 526.50,829.50 Q 574.00,833.00 645.00,870.00 Q 716.00,907.00 804.00,972.50 Q 892.00,1038.00 969.00,1121.00 Q 1046.00,1204.00 1055.00,1204.00 Q 1064.00,1204.00 1077.00,1175.00 Q 1090.00,1146.00 1080.00,1123.00 Q 1070.00,1100.00 965.00,978.00 Q 860.00,856.00 755.00,752.00 Q 650.00,648.00 741.50,590.00 Q 833.00,532.00 895.00,467.00 Q 957.00,402.00 1007.50,312.50 Q 1058.00,223.00 1070.00,182.50 Q 1082.00,142.00 1082.00,113.50 Q 1082.00,85.00 1070.00,86.50 Q 1058.00,88.00 991.50,184.50 Q 925.00,281.00 869.50,334.50 Q 814.00,388.00 749.00,421.00 Q 684.00,454.00 617.00,462.50 Q 550.00,471.00 488.50,454.00 Q 427.00,437.00 372.00,394.50 Q 317.00,352.00 274.00,294.50 Q 231.00,237.00 184.50,131.00 Q 138.00,25.00 129.50,22.00 Z M 549.50,171.00 Q 538.00,171.00 526.00,173.00 Q 514.00,175.00 506.50,177.50 Q 499.00,180.00 484.50,188.00 Q 470.00,196.00 459.00,206.00 Q 448.00,216.00 440.50,226.50 Q 433.00,237.00 427.50,249.50 Q 422.00,262.00 419.00,277.00 Q 416.00,292.00 416.00,303.00 Q 416.00,314.00 418.00,325.50 Q 420.00,337.00 426.50,352.50 Q 433.00,368.00 439.50,377.50 Q 446.00,387.00 454.50,395.50 Q 463.00,404.00 475.00,412.00 Q 487.00,420.00 498.00,424.50 Q 509.00,429.00 521.00,431.50 Q 533.00,434.00 547.50,434.00 Q 562.00,434.00 579.00,430.00 Q 596.00,426.00 608.00,420.00 Q 620.00,414.00 627.50,408.50 Q 635.00,403.00 644.50,393.00 Q 654.00,383.00 659.00,375.50 Q 664.00,368.00 670.50,352.50 Q 677.00,337.00 679.00,326.00 Q 681.00,315.00 681.00,302.00 Q 681.00,289.00 678.50,276.50 Q 676.00,264.00 671.50,252.50 Q 667.00,241.00 660.50,231.00 Q 654.00,221.00 643.00,210.00 Q 632.00,199.00 622.00,192.50 Q 612.00,186.00 601.50,181.50 Q 591.00,177.00 576.00,174.00 Q 561.00,171.00 549.50,171.00 Z" className="logo-fill"></path>
          </svg>

          <h2 style={{ color: 'var(--primary-maroon)', marginBottom: '0.5rem', fontWeight: 800, fontSize: '2rem' }}>
            No Internet Connection
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem', maxWidth: '400px' }}>
            Please check your network connection. We will automatically reconnect you once you're back online.
          </p>
          
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span className="dot" style={{ animation: 'bounce 1.4s infinite ease-in-out both', width: '12px', height: '12px', backgroundColor: 'var(--primary-maroon)', borderRadius: '50%' }}></span>
            <span className="dot" style={{ animation: 'bounce 1.4s infinite ease-in-out both', animationDelay: '0.2s', width: '12px', height: '12px', backgroundColor: 'var(--primary-maroon)', borderRadius: '50%' }}></span>
            <span className="dot" style={{ animation: 'bounce 1.4s infinite ease-in-out both', animationDelay: '0.4s', width: '12px', height: '12px', backgroundColor: 'var(--primary-maroon)', borderRadius: '50%' }}></span>
          </div>
        </div>
      )}

      {showRestoredToast && (
        <div style={{
          position: 'fixed',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#2e7d32',
          color: 'white',
          padding: '0.8rem 1.5rem',
          borderRadius: '50px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          zIndex: 999999,
          animation: 'slideUpFade 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
          fontSize: '1.05rem',
          fontWeight: 600
        }}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          <span>Connection restored</span>
        </div>
      )}

      <style>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }
        @keyframes slideUpFade {
          from { opacity: 0; transform: translate(-50%, 20px) scale(0.95); }
          to { opacity: 1; transform: translate(-50%, 0) scale(1); }
        }
      `}</style>
    </>
  );
}
