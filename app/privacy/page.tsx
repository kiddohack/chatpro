"use client";

import React from "react";
import PrivacyPolicy from "./privacy.mdx";
import MDXComponents from "@/mdx-component";
import { MDXProvider } from "@mdx-js/react";

export default function PrivacyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <MDXProvider components={MDXComponents}>
        <article className="prose lg:prose-lg prose-gray">
          <PrivacyPolicy />
        </article>
      </MDXProvider>
    </main>
  );
}
