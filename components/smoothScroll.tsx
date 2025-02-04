"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const scrollToSection = (id: string, offset: number = 30) => {
  setTimeout(() => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      let offsetPosition: number = 0;
      if (id === "main") {
        offsetPosition = 0;
      } else {
        offsetPosition = elementPosition - offset;
      }

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, 100); // Small delay to ensure element is rendered
};

const SmoothNavigation = ({
  path,
  sectionId,
  children,
}: {
  path: string;
  sectionId: string;
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [pendingScroll, setPendingScroll] = useState<string | null>(null);

  // Detect when navigation is done, then scroll
  useEffect(() => {
    if (pendingScroll && pathname === path) {
      scrollToSection(pendingScroll);
      setPendingScroll(null);
    }
  }, [pathname, pendingScroll, path]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();

    if (pathname === path) {
      scrollToSection(sectionId);
    } else {
      setPendingScroll(sectionId); // Save the section to scroll after navigation
      router.push(path);
    }
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      {children}
    </div>
  );
};

export default SmoothNavigation;
