"use client";
import { useState, useEffect } from "react";
export default function Loading() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 350000);
  });
  return (
    <>
      {loading ? (
        <div className="loading">
          <video width="700" autoPlay muted>
            <source src={"/images/ferdinand.mp4"} />
          </video>
        </div>
      ) : null}
    </>
  );
}
