import type { SDUINode } from "./types";
import "./sdui.css";

type RendererProps = {
  node: SDUINode;
};

export function Renderer({ node }: RendererProps) {
  switch (node.type) {
    case "text":
      return <p className="sdui-text">{node.props.text}</p>;

    case "button":
      return (
        <button type="button" className="sdui-button">
          {node.props.label}
        </button>
      );

    case "column":
      return (
        <div className="sdui-column">
          {node.children.map((child, index) => (
            <Renderer key={index} node={child} />
          ))}
        </div>
      );

    case "row":
      return (
        <div className="sdui-row">
          {node.children.map((child, index) => (
            <Renderer key={index} node={child} />
          ))}
        </div>
      );

    case "card":
      return (
        <div className="sdui-card">
          {node.children.map((child, index) => (
            <Renderer key={index} node={child} />
          ))}
        </div>
      );
  }
}
