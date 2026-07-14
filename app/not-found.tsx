"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <span className="font-mono text-8xl font-light text-accent-dim/20">
          404
        </span>
        <h1 className="text-2xl font-light text-silver mt-4 mb-2">
          Page not found
        </h1>
        <p className="text-sm text-silver-muted mb-8">
          The route you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors"
        >
          <ArrowLeft size={14} />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
