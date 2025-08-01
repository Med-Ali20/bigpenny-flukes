// app/flukes/dmn-redirect/page.tsx
'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DmnRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/confirmation");
  }, [router]);

  return (
    <div className="min-h-[100vh] w-full flex justify-center items-center">
        Redirecting...
    </div>
  );
}
