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
    }
  | {
      type: "column";
      children: SDUINode[];
    }
  | {
      type: "row";
      children: SDUINode[];
    }
  | {
      type: "card";
      children: SDUINode[];
    };

export type SDUIScreen = {
  components: SDUINode[];
};
