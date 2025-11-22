import React from "react";
import styles from "./ReelCarousel.module.css";
import { registerVevComponent } from "@vev/react";

type Props = {
  title: string;
};

const ReelCarousel = ({ title = "Vev" }: Props) => {
  return (
    <div className={styles.wrapper}>
      <h1>Hello, {title}</h1>
    </div>
  );
};

registerVevComponent(ReelCarousel, {
  name: "ReelCarousel",
  props: [{ name: "title", type: "string", initialValue: "Vev" }],
  editableCSS: [
    {
      selector: styles.wrapper,
      properties: ["background"],
    },
  ],
  type: 'standard',
});

export default ReelCarousel;
