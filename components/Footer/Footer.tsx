"use client";

import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center ">
      <div className="footer-container">
        <div className="flex items-center gap-2">
          {/* <p className="text-sm text-muted-foreground">Last updated on</p> */}
          {/* <span className="current-date text-xs">March 01 2025</span> */}
        </div>
        <div className="flex gap-3 items-center">
         
          <p className=" flex gap-1 text-muted-foreground text-sm">
            Made by
            <Link
              href="https://www.linkedin.com/in/jannat-chehal/"
               target="_blank"
              className="flex gap-1 text-muted-foreground text-sm hover:underline "
            >
              Jannat
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
