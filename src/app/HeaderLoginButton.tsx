"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { User } from "./user";

interface UserSessionData {
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

export default function HeaderLoginButton() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<UserSessionData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const appDomain =
    process.env.NEXT_PUBLIC_APP_DOMAIN || "https://app.cakely.es";

  useEffect(() => {
    setIsLoading(true);
    fetch(`${appDomain}/api/check-session`, {
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to check session");
        return res.json();
      })
      .then((data) => {
        if (data.isAuthenticated && data.user) {
          setIsAuthenticated(true);
          setUser(data.user);
        } else {
          setIsAuthenticated(false);
          setUser(null);
        }
      })
      .catch((error) => {
        console.error("Error checking session from landing:", error);
        setIsAuthenticated(false);
        setUser(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [appDomain]);

  if (isLoading) {
    return (
      <div className="h-9 w-24 bg-gray-200 animate-pulse rounded-md"></div>
    );
  }

  if (isAuthenticated && user) {
    return (
      <>
        <Button variant="ghost" asChild>
          <Link href={`${appDomain}/dashboard`}>Panel de control</Link>
        </Button>
        <User isLoading={isLoading} user={user} />
      </>
    );
  }

  return (
    <>
      <Button variant="ghost" asChild>
        <Link href="/#precios">Ver Precios</Link>
      </Button>
      <Button className="ml-2" asChild>
        <Link href={`${appDomain}/login`}>Iniciar Sesión</Link>
      </Button>
    </>
  );
}
