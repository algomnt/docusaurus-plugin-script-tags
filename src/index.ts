/**
 * Copyright (c) Algorithms, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { LoadContext, Plugin } from "@docusaurus/types";
import type { ThemeConfig } from "../plugin-script-tags";

export default function pluginGoogleGtag(context: LoadContext): Plugin {
  const {
    siteConfig: { themeConfig },
  } = context;
  const { tags } = themeConfig as ThemeConfig;

  if (!tags) {
    throw new Error(
      `You need to specify "tags" array in "themeConfig" to use docusaurus-plugin-script-tags.`
    );
  }

  return {
    name: "docusaurus-plugin-script-tags",

    injectHtmlTags() {
      return { ...tags };
    },
  };
}
