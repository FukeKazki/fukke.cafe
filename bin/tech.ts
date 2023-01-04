#!/usr/bin/env -S deno run --allow-write
import { format } from 'https://deno.land/std@0.140.0/datetime/mod.ts';
import outdent from 'https://deno.land/x/outdent@v0.8.0/mod.ts';

const now = new Date();
const path = `./articles/tech/${format(now, 'yyyyMMdd')}.mdx`;
const template = outdent`
---
title: ''
date: ${format(now, 'yyyy-MM-dd')}
tags: []
category: 'ウェブフロント'
subCategory: ''
---`;

try {
  await Deno.writeTextFile(path, template);
  console.log('ファイルを作成しました', path);
} catch (err) {
  console.error('ファイルの作成に失敗しました。', err);
}
