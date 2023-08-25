import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import fs from 'fs'
import path from 'path'

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: 'string',
    resolve: doc =>
      doc._raw.flattenedPath
        .split('/')
        .at(-1)
        .replace(/^\d{4}-\d{2}-\d{2}-/, ''),
  },
}

export const Article = defineDocumentType(() => ({
  name: 'Article',
  filePathPattern: `articles/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    description: { type: 'string', required: false },
    lang: { type: 'string', required: true },
  },
  computedFields,
}))

export const Talk = defineDocumentType(() => ({
  name: 'Talk',
  filePathPattern: `talks/**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    url: { type: 'string', required: true },
    date: { type: 'date', required: true },
  },
  computedFields: {
    order: {
      type: 'number',
      resolve: doc => Number(doc._raw.sourceFileName.match(/^(\d+)/)[1]),
    },
  },
}))

export const Craft = defineDocumentType(() => ({
  name: 'Craft',
  filePathPattern: `craft/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string' },
    date: { type: 'date', required: true },
    packageName: { type: 'string' },
    remixLink: { type: 'string' },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: './src/content',
  documentTypes: [Article, Talk, Craft],
  mdx: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      rehypeKatex,
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'wrap' }],
      [
        rehypePrettyCode,
        {
          theme: {
            dark: JSON.parse(
              fs.readFileSync(
                path.resolve('./code-block-themes/dark.json'),
                'utf-8'
              )
            ),
            light: JSON.parse(
              fs.readFileSync(
                path.resolve('./code-block-themes/light.json'),
                'utf-8'
              )
            ),
          },
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }]
            }
          },
        },
      ],
    ],
  },
})
