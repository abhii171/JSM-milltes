'use client';

import { useEffect, useRef, useState } from 'react';
import { navItems } from '@/lib/data';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);
  const navPanelRef = useRef<HTMLElement>(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        toggleBtnRef.current?.focus();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuOpen &&
        navPanelRef.current &&
        !navPanelRef.current.contains(e.target as Node) &&
        toggleBtnRef.current &&
        !toggleBtnRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-[#0F3D2E] text-stone-100 shadow-md border-b border-emerald-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo Branding */}
          <a className="header-logo flex group focus:outline-none focus:ring-2 focus:ring-amber-400" href="#home">
            <img
              alt="JSM Millet Tiffins and Ragimuddha Logo"
              className="drop-shadow-sm transition-transform group-hover:scale-105 duration-200"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3JMNeaWDSBB8y73J3rx6fzr3kTu3y7V8jwPkdVEeh4WRWxdjUwFAnmn65oxTNH4ZZbERWrIKvFnBziAB85OhD0yR-K9QY-ADEeq3zJhO0S2oohk_O3Vb8YtzqURpGgdL0R9obX2xyapW5OSk7JthyrlpE_HGFNNpvg17pQJ_gR1Wh4OX-71n4no1uPAFpYijiGwMfTIaPoU-SqAzxfwfuvCkPF8OwD9ya88zmLur4I-SHCFdCTreNERsAUIBmlsLxwA"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
            {navItems.map((item) => (
              <a
                key={item.href}
                className={item.href === '#home' ? 'text-white hover:text-amber-400 transition-colors' : 'text-stone-300 hover:text-amber-400 transition-colors'}
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Action */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold bg-[#E5A91E] text-stone-900 shadow-md hover:bg-[#C99214] transition-all duration-200 hover:shadow-lg focus:ring-2 focus:ring-offset-2 focus:ring-[#E5A91E]"
              href="#locations"
            >
              Find a Store
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex md:hidden">
            <button
              ref={toggleBtnRef}
              type="button"
              className="mobile-nav-toggle"
              id="mobile-nav-toggle"
              aria-expanded={menuOpen ? 'true' : 'false'}
              aria-controls="mobile-nav-panel"
              onClick={toggleMenu}
            >
              <span aria-hidden="true">☰</span>
              <span>Menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <nav
        ref={navPanelRef}
        id="mobile-nav-panel"
        className={`mobile-nav-panel ${menuOpen ? 'is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
