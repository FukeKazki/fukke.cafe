import type { GatsbyNode } from 'gatsby';
import { resolve } from 'path';

export const onCreateNode: GatsbyNode['onCreateNode'] = ({
  node,
  actions,
  getNode
}) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    if (!node.parent) return;

    // idから親のノードを取得
    const parent = getNode(node.parent);
    if (!parent) return;

    // field属性に category: 'daily' | 'tech' を生成
    createNodeField({
      node,
      name: 'category',
      value: parent.sourceInstanceName
    });

    // field属性に name: '20220906' を生成
    createNodeField({
      node,
      name: 'name',
      value: parent.name
    });
  }
};

export const createPages: GatsbyNode['createPages'] = ({ actions }) => {
  const { createSlice } = actions;
  createSlice({
    id: 'header',
    component: resolve('src/components/shared/Header/index.tsx')
  });
};
