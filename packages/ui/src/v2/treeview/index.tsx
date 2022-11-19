import { TreeItem } from "@dzcode.io/utils/dist/ts";
import Skeleton from "@mui/material/Skeleton";
import { ReactElement, VFC } from "react";
import { Stack, StackProps } from "src/v2/stack";

export interface TreeviewProps<T extends Record<string, unknown>>
  extends Pick<StackProps, "min" | "margin"> {
  items: TreeItem<T>[] | null;
  itemRender: (item: TreeItem<T>) => ReactElement;
  shift?: number;
}

export const Treeview = <T extends Record<string, unknown>>({
  items,
  itemRender,
  shift = 1,
  ...props
}: TreeviewProps<T>): ReturnType<VFC<TreeviewProps<T>>> => {
  const RecursiveTreeitem: VFC<{ item: TreeItem<T>; root?: boolean }> = ({ item, root }) => (
    <Stack direction="vertical" margin={!root ? [0, 0, 0, shift] : undefined}>
      {itemRender(item)}
      <Stack direction="vertical">
        {item.children?.map((childItem) => (
          <RecursiveTreeitem key={`treeitem-${childItem.id}`} item={childItem} />
        ))}
      </Stack>
    </Stack>
  );

  return (
    <Stack direction="vertical" {...props}>
      {items ? (
        items.map((i) => <RecursiveTreeitem key={`treeitem-${i.id}`} item={i} root={true} />)
      ) : (
        <>
          <Skeleton height={48} width={"70%"} sx={{ display: "inline-block" }} />
          <Skeleton height={48} width={"50%"} sx={{ display: "inline-block" }} />
          <Skeleton height={48} width={"60%"} sx={{ display: "inline-block" }} />
          <Skeleton height={48} width={"90%"} sx={{ display: "inline-block" }} />
          <Skeleton height={48} width={"80%"} sx={{ display: "inline-block" }} />
        </>
      )}
    </Stack>
  );
};
