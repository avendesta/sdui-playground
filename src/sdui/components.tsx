import { Renderer } from "./Renderer";
import type { SDUINode } from "./types";

/*
 * The component vocabulary: each component renders exactly one node type and
 * receives that type's narrowed node. All components live at module scope —
 * defining them inside other components would make React remount them on
 * every render (see vercel-react-best-practices: rerender-no-inline-components).
 */

type TextNode = Extract<SDUINode, { type: "text" }>;
type ButtonNode = Extract<SDUINode, { type: "button" }>;
type ColumnNode = Extract<SDUINode, { type: "column" }>;
type RowNode = Extract<SDUINode, { type: "row" }>;
type CardNode = Extract<SDUINode, { type: "card" }>;

export function TextComponent({ node }: { node: TextNode }) {
  const className = `sdui-text${
    node.props.variant ? ` sdui-text--${node.props.variant}` : ""
  }`;
  return <p className={className}>{node.props.text}</p>;
}

export function ButtonComponent({ node }: { node: ButtonNode }) {
  const className = `sdui-button${
    node.props.variant ? ` sdui-button--${node.props.variant}` : ""
  }`;
  return (
    <button type="button" className={className}>
      {node.props.label}
    </button>
  );
}

export function ColumnComponent({ node }: { node: ColumnNode }) {
  return (
    <div className="sdui-column">
      {node.children.map((child, index) => (
        <Renderer key={index} node={child} />
      ))}
    </div>
  );
}

export function RowComponent({ node }: { node: RowNode }) {
  return (
    <div className="sdui-row">
      {node.children.map((child, index) => (
        <Renderer key={index} node={child} />
      ))}
    </div>
  );
}

export function CardComponent({ node }: { node: CardNode }) {
  return (
    <div className="sdui-card">
      {node.children.map((child, index) => (
        <Renderer key={index} node={child} />
      ))}
    </div>
  );
}
