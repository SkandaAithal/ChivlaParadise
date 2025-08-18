"use client";

import Spline from "@splinetool/react-spline";
import { useState, useEffect, useRef, useCallback } from "react";

interface SplineWrapperProps {
  scene: string;
  className?: string;
}

export default function SplineWrapper({
  scene,
  className = "!h-[800px]",
}: SplineWrapperProps) {
  const [isClient, setIsClient] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);
  const contextCheckInterval = useRef<NodeJS.Timeout | null>(null);

  const checkWebGLSupport = useCallback(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") as WebGLRenderingContext | null;

      if (!gl) {
        return false;
      }

      // Check if context is lost
      if (gl.isContextLost()) {
        console.log("WebGL context lost, reloading page...");
        window.location.reload();
        return false;
      }

      return true;
    } catch {
      console.log("WebGL check failed, reloading page...");
      window.location.reload();
      return false;
    }
  }, []);

  const checkWebGLContext = useCallback(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") as WebGLRenderingContext | null;
      return gl && !gl.isContextLost();
    } catch {
      return false;
    }
  }, []);

  const handleError = useCallback((error: unknown) => {
    const errorString = String(error).toLowerCase();

    if (
      errorString.includes("context") ||
      errorString.includes("webgl") ||
      errorString.includes("lost") ||
      errorString.includes("too many active") ||
      errorString.includes("blocked") ||
      errorString.includes("could not be created")
    ) {
      console.log("WebGL context lost detected, reloading page...");
      window.location.reload();
    }
  }, []);

  useEffect(() => {
    setIsClient(true);

    // Check WebGL support immediately
    const isSupported = checkWebGLSupport();
    setWebglSupported(isSupported);

    // Add global error handler for WebGL errors
    const handleGlobalError = (event: ErrorEvent) => {
      const errorString = event.message.toLowerCase();
      if (
        errorString.includes("webgl") ||
        errorString.includes("context") ||
        errorString.includes("blocked")
      ) {
        console.log("Global WebGL error detected, reloading page...");
        window.location.reload();
      }
    };

    window.addEventListener("error", handleGlobalError);

    return () => {
      window.removeEventListener("error", handleGlobalError);
    };
  }, [checkWebGLSupport]);

  // Monitor WebGL context health periodically
  useEffect(() => {
    if (isClient && webglSupported) {
      contextCheckInterval.current = setInterval(() => {
        if (!checkWebGLContext()) {
          console.log(
            "WebGL context lost detected during monitoring, reloading page..."
          );
          window.location.reload();
        }
      }, 10000);

      return () => {
        if (contextCheckInterval.current) {
          clearInterval(contextCheckInterval.current);
        }
      };
    }
  }, [isClient, webglSupported, checkWebGLContext]);

  if (!isClient) {
    return <div className={className} />;
  }

  if (!webglSupported) {
    return <div className={className} />;
  }

  return <Spline className={className} scene={scene} onError={handleError} />;
}
