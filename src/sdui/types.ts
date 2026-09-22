export type SDUINode =
  | {
      type: "text";
      props: {
        text: string;
        variant?: "title";
      };
    }
  | {
      type: "button";
      props: {
        label: string;
        variant?: "success" | "danger";
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
