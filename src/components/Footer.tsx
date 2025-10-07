import React from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-background border-t">
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Kolom 1 - Logo & Deskripsi */}
          <div>
            <a href="/" className="flex items-center gap-2">
              <svg
                className="w-8 text-primary"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                stroke="currentColor"
                fill="none"
              >
                <rect x="3" y="1" width="7" height="12" />
                <rect x="3" y="17" width="7" height="6" />
                <rect x="14" y="1" width="7" height="6" />
                <rect x="14" y="11" width="7" height="12" />
              </svg>
              <span className="text-lg font-semibold tracking-wide text-gray-900 dark:text-gray-50">
                Company
              </span>
            </a>

            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Empowering your business through modern design, seamless
              integration, and digital innovation.
            </p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Join us to create meaningful digital experiences.
            </p>
          </div>

          {/* Kolom 2 */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-50 mb-4">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 3 */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-50 mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  UI/UX Design
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Mobile Apps
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  AI Integration
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 4 */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-50 mb-4">
              Stay Updated
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Get the latest updates and insights delivered to your inbox.
            </p>
            <Button size="sm" className="w-full">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Garis Pemisah */}
        <Separator className="my-8" />

        {/* Footer bawah */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Company. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-gray-500">
            <a
              href="#"
              className="hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.6a9.8 9.8 0 0 1-2.8.8 4.8 4.8 0 0 0 2.2-2.7 9.6 9.6 0 0 1-3.1 1.2A4.7 4.7 0 0 0 16.6 3c-2.6 0-4.8 2.2-4.8 4.8 0 .4 0 .8.1 1.1A13.3 13.3 0 0 1 1.6 3.1a4.9 4.9 0 0 0 1.5 6.5 4.8 4.8 0 0 1-2.2-.6v.1a4.8 4.8 0 0 0 3.9 4.7 5 5 0 0 1-2.1.1 4.8 4.8 0 0 0 4.5 3.3A9.5 9.5 0 0 1 0 19.5a13.2 13.2 0 0 0 7.1 2.1c8.6 0 13.4-7.2 13.4-13.4v-.6A9.5 9.5 0 0 0 24 4.6z" />
              </svg>
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 30 30"
              >
                <circle cx="15" cy="15" r="4" />
                <path d="M20 3H10C6.14 3 3 6.14 3 10v10c0 3.86 3.14 7 7 7h10c3.86 0 7-3.14 7-7V10c0-3.86-3.14-7-7-7zM15 21a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm7-12a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
              </svg>
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 0H2C.9 0 0 .9 0 2v20c0 1.1.9 2 2 2h11v-9H9v-4h4V8.4C13 5.3 14.9 3.6 17.7 3.6c1.3 0 2.5.1 2.8.1v3.2h-1.9c-1.5 0-1.8.7-1.8 1.8V11h4.4l-1 4h-3.4v9H22c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
