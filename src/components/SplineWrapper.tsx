"use client";

import Spline from "@splinetool/react-spline";
import { useState } from "react";

interface SplineWrapperProps {
  scene: string;
  className?: string;
}

export default function SplineWrapper({
  scene,
  className = "!h-[800px]",
}: SplineWrapperProps) {
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
  };

  if (hasError) {
    return <div className={className} />;
  }

  return <Spline className={className} scene={scene} onError={handleError} />;
}
