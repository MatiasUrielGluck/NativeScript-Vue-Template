import { Application } from "@nativescript/core";

export const enableBackNavigation = () => {
  if (Application.android) {
    Application.android.off(
      Application.AndroidApplication.activityBackPressedEvent
    );

    Application.android.on(
      Application.AndroidApplication.activityBackPressedEvent,
      (data) => {
        data.cancel = false;
      }
    );
  }
};

export const disableBackNavigation = (customHandler = null) => {
  if (Application.android) {
    Application.android.off(
      Application.AndroidApplication.activityBackPressedEvent
    );

    Application.android.on(
      Application.AndroidApplication.activityBackPressedEvent,
      (data) => {
        data.cancel = true;
        console.warn("BACK TAP PREVENTED");
        if (customHandler) customHandler();
      }
    );
  }
};
