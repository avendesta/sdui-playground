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

    case "column":
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {node.children.map((child, index) => (
            <Renderer key={index} node={child} />
          ))}
        </div>
      );

    case "row":
      return (
        <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
          {node.children.map((child, index) => (
            <Renderer key={index} node={child} />
          ))}
        </div>
      );
  }
}
