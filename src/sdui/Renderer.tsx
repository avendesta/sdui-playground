import type { SDUINode } from "./types";

type RendererProps = {
  node: SDUINode;
};

export function Renderer({ node }: RendererProps) {
  switch (node.type) {
    case "text":
      return <p>{node.props.text}</p>;

    case "button":
      return <button>{node.props.label}</button>;
  }
}
