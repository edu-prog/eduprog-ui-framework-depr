const BreakpointsLabel = ["xs", "s", "m", "l", "xl"];

interface Sizes {
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  fluid: string;
}

const BreakpointsLabelConvertToLarge = (value: string): string => {
  const sizes: Sizes = {
    xs: "sm",
    s: "md",
    m: "lg",
    l: "xl",
    xl: "xxl",
    fluid: "fluid",
  };

  return sizes[value as keyof Sizes];
};

export { BreakpointsLabel, BreakpointsLabelConvertToLarge };