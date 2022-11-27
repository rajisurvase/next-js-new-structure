import React from "react";
import "@/styles/global.scss";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { checkWindow } from "@/lib/functions/_storage.lib";

const ToastifyProvider=dynamic(()=>import("@/ui/toastify/ToastifyProvider"))
const MuiTheme=dynamic(()=>import("@/themes/index"))

function fixSSRLayout() {
  // suppress useLayoutEffect (and its warnings) when not running in a browser
  // hence when running in SSR mode
  if (checkWindow()) {
    React.useLayoutEffect = () => {};
  }
}

export default function App({ Component, pageProps }: AppProps) {
  fixSSRLayout()
  return (
    <ToastifyProvider>
      <MuiTheme>
        <Component {...pageProps} />
      </MuiTheme>
    </ToastifyProvider>
  );
}