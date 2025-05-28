import React from "react";

import FooterContent from "./FooterContent";

export default function Footer() {
  return (
    <div
      className="relative h-screen"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-full w-full">
        <FooterContent />
      </div>
    </div>
  );
}
