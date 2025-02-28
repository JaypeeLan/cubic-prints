declare module "@sanity/block-content-to-react" {
  import { ComponentType } from "react";

  interface BlockContentProps {
    blocks: unknown;
    className?: string;
    renderContainerOnSingleChild?: boolean;
    serializers?: object;
    projectId?: string;
    dataset?: string;
  }

  const BlockContent: ComponentType<BlockContentProps>;
  export default BlockContent;
}
