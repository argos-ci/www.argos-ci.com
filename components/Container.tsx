import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { TwcComponentProps, twc } from "react-twc";

export type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  asChild?: boolean;
  tight?: boolean;
  noGutter?: boolean;
};

export const Container = ({
  className,
  asChild,
  tight,
  noGutter,
  ...props
}: ContainerProps) => {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp
      className={clsx(
        "container mx-auto",
        tight ? "max-w-4xl" : "max-w-6xl",
        noGutter ? "" : "px-4 sm:px-8",
        className,
      )}
      {...props}
    />
  );
};

export type SectionProps = TwcComponentProps<"div"> & {
  gutter?: boolean;
};
export const Section = twc.div<SectionProps>((props) => [
  props.gutter ? "px-4 sm:px-8" : "",
]);
