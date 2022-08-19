import type { AppProps } from "next/app";
import { ImageDisplay } from "../components/ImageDisplay";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <ImageDisplay></ImageDisplay>
    </div>
  );
}

export default MyApp;
