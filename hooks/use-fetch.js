"use client";

import { useState, useCallback } from "react";
import { toast } from "sonner";

export default function useFetch(fn) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const execute = useCallback(
    async (...args) => {
      setLoading(true);
      setError(null);
      try {
        const result = await fn(...args);
        setData(result);
        return result;
      } catch (err) {
        setError(err.message);
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    },
    [fn]
  );

  return { loading, data, error, fn: execute, setData };
}
