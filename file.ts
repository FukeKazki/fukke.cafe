#!/usr/bin/env -S deno run --allow-net --allow-env --allow-write
import { format } from "https://deno.land/std@0.140.0/datetime/mod.ts";
import { parse } from "https://deno.land/std@0.140.0/flags/mod.ts";

const type = parse(Deno.args).type ?? 'source';
const now = new Date();
const path = `./articles/${type}/${format(now, "yyyyMMdd")}.mdx`;
const template = `---
title: ''
date: ${format(now, "yyyy-MM-dd")}
tags: []
---`;

const dailyTemplate = `---
title: ''
date: ${format(now, "yyyy-MM-dd")}
tags: []
---

# 読んだ記事

# やったこと

# わかったこと

`

try {
  if (type === 'daily') {
      await Deno.writeTextFile(path, dailyTemplate);
  } else {
      await Deno.writeTextFile(path, template);
  }
 
  console.log("ファイルを作成しました", path);
} catch (err) {
  console.error("ファイルの作成に失敗しました。", err);
}
