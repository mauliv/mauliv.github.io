import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

function rehypeTableWrap() {
  return function (tree) {
    function visit(node) {
      if (!node || !node.children) return;
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        if (child.type === 'element' && child.tagName === 'table') {
          node.children[i] = {
            type: 'element',
            tagName: 'div',
            properties: { className: ['table-wrapper'] },
            children: [child]
          };
        } else {
          visit(child);
        }
      }
    }
    visit(tree);
  };
}

export default defineConfig({
  site: 'https://mauliv.github.io',
  markdown: {
    rehypePlugins: [rehypeTableWrap]
  },
  vite: { plugins: [tailwindcss()] }
});

