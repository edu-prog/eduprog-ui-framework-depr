export const BreakpointsLabel = ["xs", "s", "m", "l", "xl"];
export const BreakpointsLabelConvertFromLarge = (value) => {
  const sizes = {
    sm: "xs",
    md: "s",
    lg: "m",
    xl: "l",
    xxl: "xl",
  };
  return sizes[value];
};
