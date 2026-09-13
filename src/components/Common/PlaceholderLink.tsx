"use client";

import React from "react";

interface PlaceholderLinkProps {
  href: string;
  title: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function PlaceholderLink({ href, title, className, style }: PlaceholderLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href === "#") {
      e.preventDefault();
      alert("This option will be added in future");
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={className}
      style={style}
      data-pdf-title={title}
    >
      {title}
    </a>
  );
}
