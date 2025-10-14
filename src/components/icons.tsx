import type { SVGProps } from "react";

export function ArrowBeaconLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12.25a9.25 9.25 0 1 1-18.5 0 9.25 9.25 0 0 1 18.5 0Z" />
      <path d="m7.42 15.58 4.83-4.83" />
      <path d="m12.25 10.75 4.83 4.83" />
      <path d="M12.25 3v1.5" />
    </svg>
  );
}
