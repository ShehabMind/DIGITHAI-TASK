import {strings} from "@Localization/";
import {Dimensions, PixelRatio, Platform} from "react-native";
export const {width, height} = Dimensions.get("window");
export const guidelineBaseWidth = 375;
export const guidelineBaseHeight = 812;

export const scale = (size: number) => {
  return (width / guidelineBaseWidth) * size;
};
export const scaleHeight = (size: number) => {
  return (height / guidelineBaseHeight) * size;
};
export const scaleWidth = (size: number, factor = 0.5) => {
  return size + (scale(size) - size) * factor;
};

export const scaleFontSize = (size: number) => {
  const newSize = size * (width / guidelineBaseWidth);
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

export const capitalizeFirstLetter = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const capitalize = (str: string) => {
  const arr = str.split(" ");

  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  //Join all the elements of the array back into a string
  //using a blank space as a separator
  const str2 = arr.join(" ");
  return str2;
};

export const formatAMPM = (date: Date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();

  let ampm = hours >= 12 ? strings("shifts.pm") : strings("shifts.am");
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  return hours + ":" + formatNumber(minutes) + " " + ampm;
};

export const twentyFourToTwelve = (time: string) => {
  let d = new Date();
  d.setHours(parseInt(time.slice(0, 2)));
  d.setMinutes(parseInt(time.slice(-2)));
  let hours = d.getHours();
  let minutes = d.getMinutes();

  let ampm = hours >= 12 ? strings("shifts.pm") : strings("shifts.am");
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  return hours + ":" + formatNumber(minutes) + " " + ampm;
};

export const formatDate = (day: Date = new Date()) => {
  let today = day.toDateString().split(" ");
  return today[0] + " " + today[2] + ", " + today[1];
};

export const getDayName = (date: Date) =>
  Platform.OS === "ios"
    ? date.toLocaleDateString(undefined, {weekday: "long"}).toLowerCase()
    : date
        .toLocaleDateString(undefined, {weekday: "long"})
        .split(",")[0]
        .toLocaleLowerCase();

export const getTomorrowDayName = () => {
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return getDayName(tomorrow);
};

export const formatNumber = (num: number) => (num < 10 ? "0" + num : num);

export const round5 = (x: number) => Math.ceil(x / 5) * 5;

export const formateFullTime = (time?: string) => {
  if (!time) {
    return "";
  }
  let t = time.split("");
  t.splice(2, 0, ":");
  return t.join("");
};

export const SCREEN_WIDTH = Dimensions.get("screen").width;
export const SCREEN_HEIGHT = Dimensions.get("screen").height;
