import React from "react";
import { AnimatePresence } from "framer-motion";
import * as LoadingSpinner from "../../images/lottie/loading-spinner.json";
import { Overlay, Popup, Animation } from "./LoadingElements";
import { loading } from "./animations";

const Loading = ({ isLoading }) => {
  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <Overlay>
            <Popup
              variants={loading}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Animation loop play animationData={LoadingSpinner.default} />
            </Popup>
          </Overlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default Loading;
