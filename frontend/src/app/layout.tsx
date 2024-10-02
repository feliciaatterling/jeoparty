import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "./lib/registry";
import { ScWrapper } from "./layout.styled";

// Metadata configuration for the app
export const metadata: Metadata = {
  title: "Jeoparty!",
  description: "Generated by create next app",
};

// Root layout component that wraps the entire app
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ScWrapper>{children}</ScWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
