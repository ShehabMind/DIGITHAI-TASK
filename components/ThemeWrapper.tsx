import React from "react";
import {useTheme} from "@ThemeContext";
type Props = {};

export default function ThemeWrapper({children}) {
  const {isThemeLoading} = useTheme();
  if (isThemeLoading) return null;
  return children;
}
