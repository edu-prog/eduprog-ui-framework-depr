const BreakpointsLabel = ["xs", "s", "m", "l", "xl"];
const BreakpointsLabelConvertToLarge = (value) => {
  const sizes = {
    xs: "sm",
    s: "md",
    m: "lg",
    l: "xl",
    xl: "xxl",
    fluid: "fluid",
  };
  return sizes[value];
};

export { BreakpointsLabel, BreakpointsLabelConvertToLarge };
