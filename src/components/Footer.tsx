export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-8" role="contentinfo">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 md:px-10 lg:px-14 xl:px-20 sm:flex-row">
        <img src="/karigar.png" alt="Kaarigar" className="h-14 w-auto object-contain" />
        <p className="text-[12px] text-muted-foreground">
          © {new Date().getFullYear()} Kaarigar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
