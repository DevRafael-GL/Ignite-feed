import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

interface AvaterProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...props }: AvaterProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  );
}
