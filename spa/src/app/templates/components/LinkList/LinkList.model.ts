// ⚠️ This file is auto-generated based on the LinkList.yaml definition.
// It will be overwritten when running `create-model`. Avoid manual edits.
import { MagnoliaNodeMeta, MgnlContent } from '@magnolia/frontend-helpers-base';

export type Theme = 'light' | 'dark';

export default interface ILinkListProps {
  metadata: MagnoliaNodeMeta;
  title?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  links: MgnlContent[] | any;
}
