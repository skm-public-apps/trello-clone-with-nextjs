import { ClerkProvider } from "@clerk/nextjs";

export default function PaltformLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ClerkProvider>{children}</ClerkProvider>;
}
