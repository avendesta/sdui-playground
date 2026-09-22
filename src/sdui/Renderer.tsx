import type { ReactNode } from "react";
import {
  ButtonComponent,
  CardComponent,
  ColumnComponent,
  RowComponent,
  TextComponent,
} from "./components";
import type { SDUINode } from "./types";
import "./sdui.css";

// A component for one specific node type: it receives that type's narrowed node.
type NodeComponent<K extends SDUINode["type"]> = (props: {
  node: Extract<SDUINode, { type: K }>;
}) => ReactNode;

// The component registry: the JSON's "type" string looks up which component
// renders the node. The mapped type forces every SDUINode variant to have an
// entry — adding a node type to types.ts without registering it here is a
// compile error.
const registry: { [K in SDUINode["type"]]: NodeComponent<K> } = {
  text: TextComponent,
  button: ButtonComponent,
  column: ColumnComponent,
  row: RowComponent,
  card: CardComponent,
};

type RendererProps = {
  node: SDUINode;
};

export function Renderer({ node }: RendererProps) {
  // The lookup key is a union, so TypeScript can't correlate the node to its
  // component — one cast is the price of dynamic dispatch.
  const Component = registry[node.type] as
    | NodeComponent<SDUINode["type"]>
    | undefined;

  // Unknown type handling (roadmap item 8): fail loudly in dev rather than
  // crashing the render — for now, render nothing.
  if (!Component) return null;

  return <Component node={node} />;
}
