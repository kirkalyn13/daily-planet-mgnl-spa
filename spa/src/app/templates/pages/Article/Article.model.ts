// ⚠️ This file is auto-generated based on the Article.yaml definition.
// It will be overwritten when running `create-model`. Avoid manual edits.
import { MagnoliaNodeMeta, MgnlContent } from '@magnolia/frontend-helpers-base';

export default interface IArticleProps {
  metadata: MagnoliaNodeMeta;
  article: MagnoliaNodeMeta;
  title?: string;
  main?: MgnlContent;
  footer?: MgnlContent;
  author: string;
  publishDate: string;
  readTime: number;
  heroImage: MgnlContent;
  heroTitle: string;
  subtitle: string;
  description: string;
}
