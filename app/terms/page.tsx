"use client";

import React from "react";
import TermsofUse from "./termsofuse.mdx";
import MDXComponents from "@/mdx-component";
import { MDXProvider } from "@mdx-js/react";

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 animate-fade-in">
      <MDXProvider components={MDXComponents}>
        <article className="prose lg:prose-lg prose-gray">
          <TermsofUse />
        </article>
      </MDXProvider>
    </main>
  );
}
