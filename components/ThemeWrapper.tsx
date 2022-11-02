import React from "react";
import {useTheme} from "../Context/ThemeContext";
type Props = {};

export default function ThemeWrapper({children}) {
  const {isThemeLoading} = useTheme();
  if (isThemeLoading) return null;
  return children;
}
