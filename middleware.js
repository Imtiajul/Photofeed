import { NextResponse } from "next/server";

import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

let locales = ['en', 'bn'];
let defaultLocale = 'en';


function getLocale(request) {
   const acceptedLanguage = request.headers.get('accept-language') ?? 'undefined';

   let headers = { 'accept-language': acceptedLanguage };

   let languages = new Negotiator({headers}).languages()

   return match(languages, locales, defaultLocale);
}

export function middleware(request) {
   const pathname = request.nextUrl.pathname;

   // const pathnameIsMissingLocale = locales.every((locale) => !pathname.startsWith(locale) && pathname !== `/${locale}`);

   // if(pathnameIsMissingLocale) {
   //    const locale = getLocale(request);

   //    return NextResponse.redirect( new URL(`/${locale}${pathname}`, request.url));
   // }
   // return;
   const pathnameHasLocale = locales.some(
      (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )
   
    if (pathnameHasLocale) return
   
    // Redirect if there is no locale
    const locale = getLocale(request)
    request.nextUrl.pathname = `/${locale}${pathname}`
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(request.nextUrl)
}

export const config = {
   matcher: [
     // Skip all internal paths (_next)
     '/((?!api|assets|.*\\..*|_next).*)',
     // Optional: only run on root (/) URL
     // '/'
   ],
 }