#!/usr/bin/env -S deno run --allow-write
import { format } from 'https://deno.land/std@0.140.0/datetime/mod.ts';
import outdent from 'https://deno.land/x/outdent@v0.8.0/mod.ts';

const now = new Date();
const path = `./articles/daily/${format(now, 'yyyyMMdd')}.mdx`;
const dailyTemplate = outdent`
---
title: ''
date: ${format(now, 'yyyy-MM-dd')}
tags: []
---

# Reading

# やったこと

# わかったこと

`;

try {
  await Deno.writeTextFile(path, dailyTemplate);
  console.log('ファイルを作成しました', path);
} catch (err) {
  console.error('ファイルの作成に失敗しました。', err);
}
