import { theme } from "@styles/theme";

export const toastStyles = {
  success: {
    style: {
      background: theme.colors.green1,
      color: theme.colors.white
    },
    iconTheme: {
      primary: theme.colors.white,
      secondary: theme.colors.green1
    }
  },
  error: {
    style: {
      background: theme.colors.red,
      color: theme.colors.white
    },
    iconTheme: {
      primary: theme.colors.white,
      secondary: theme.colors.red
    }
  },
  loading: {
    style: {
      background: theme.colors.blue,
      color: theme.colors.white
    },
    iconTheme: {
      primary: theme.colors.white,
      secondary: theme.colors.blue
    }
  }
};