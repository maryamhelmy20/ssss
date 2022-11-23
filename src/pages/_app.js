import { Modal } from "@redq/reuse-modal";
import "@redq/reuse-modal/es/index.css";
import "common/assets/css/flaticon.css";
import "common/assets/css/icon-example-page.css";
// swiper bundle styles
import "swiper/css/bundle";
import "common/assets/css/react-slick.css";
import "common/assets/css/motion.css";
import "common/assets/css/rc-collapse.css";
import "rc-collapse/assets/index.css";
import localFont from "@next/font/local";

const myFont = localFont({
  src: "../common/assets/fonts/alfont_com_SST-Arabic-Medium.ttf",
});

export default function CustomApp({ Component, pageProps }) {
  return (
    <Modal
    //  className={myFont.className}
    >
      <Component {...pageProps} />
    </Modal>
  );
}
