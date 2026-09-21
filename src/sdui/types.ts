export type SDUINode =
  | {
      type: "text";
      props: {
        text: string;
      };
    }
  | {
      type: "button";
      props: {
        label: string;
      };
    };

export type SDUIScreen = {
  components: SDUINode[];
};
