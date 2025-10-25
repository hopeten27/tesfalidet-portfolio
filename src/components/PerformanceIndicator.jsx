import { useState, useEffect } from 'react';

function PerformanceIndicator() {
  const [fps, setFps] = useState(60);
  const [loadTime, setLoadTime] = useState(0);

  useEffect(() => {
    // Calculate load time
    const navigationStart = performance.timing.navigationStart;
    const loadComplete = performance.timing.loadEventEnd;
    const loadTimeMs = loadComplete - navigationStart;
    setLoadTime(loadTimeMs);

    // FPS counter
    let lastTime = performance.now();
    let frameCount = 0;
    
    const countFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime >= lastTime + 1000) {
        setFps(Math.round((frameCount * 1000) / (currentTime - lastTime)));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(countFPS);
    };
    
    requestAnimationFrame(countFPS);
  }, []);

  return (
    <div className="perf-indicator">
      <div className="text-mono">
        {fps}fps • {loadTime}ms
      </div>
    </div>
  );
}

export default PerformanceIndicator;