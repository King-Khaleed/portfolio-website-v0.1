import { Smartphone, Mail, CodeXml } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Link href="/" className="flex items-center space-x-2">
            <CodeXml className="h-6 w-6 text-primary" />
            <p className="text-sm font-bold leading-loose">
              Web3 Wizard
            </p>
          </Link>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Web3 Wizard. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="mailto:hello@web3wizard.dev" target="_blank" rel="noreferrer">
            <Mail className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
          <Link href="#" target="_blank" rel="noreferrer">
            <Smartphone className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
