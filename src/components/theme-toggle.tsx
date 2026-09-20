"use client";

export function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement;
    root.classList.add("theme-transitioning");

    const isDark = root.classList.contains("dark");
    if (isDark) {
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.add("dark");
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }

    window.setTimeout(() => {
      root.classList.remove("theme-transitioning");
    }, 280);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative inline-flex h-11 w-11 min-h-[44px] min-w-[44px] sm:h-9 sm:w-9 sm:min-h-0 sm:min-w-0 items-center justify-center rounded-md border border-border bg-surface text-text-secondary shadow-2xs transition-all duration-200 hover:border-border/90 hover:bg-surface-elevated hover:text-text-primary active:scale-95 focus-visible:outline-2 focus-visible:outline-accent"
      aria-label="Toggle color theme"
      title="Toggle color theme"
    >
      {/* Sun icon: visible and rotated into place in dark mode */}
      <svg
        className="absolute h-4 w-4 stroke-current transition-all duration-300 ease-out rotate-90 scale-0 opacity-0 [.dark_&]:rotate-0 [.dark_&]:scale-100 [.dark_&]:opacity-100 motion-reduce:transition-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>
      {/* Moon icon: visible and rotated into place in light mode */}
      <svg
        className="absolute h-4 w-4 stroke-current transition-all duration-300 ease-out rotate-0 scale-100 opacity-100 [.dark_&]:-rotate-90 [.dark_&]:scale-0 [.dark_&]:opacity-0 motion-reduce:transition-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    </button>
  );
}
