import { AnimatePresence } from "framer-motion";
import * as LoadingSpinner from "../../images/lottie/loading-spinner.json";
import { Overlay, Popup, Animation } from "./styles";
import { loading } from "./animations";

export const LoadingOrganism = ({ isLoading }: { isLoading: boolean }) => {
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
              <Animation loop play animationData={LoadingSpinner} />
            </Popup>
          </Overlay>
        )}
      </AnimatePresence>
    </>
  );
};
