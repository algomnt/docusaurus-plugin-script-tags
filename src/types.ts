/**
 * Copyright (c) Algorithms, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { HtmlTags } from "@docusaurus/types";

export interface ThemeConfig {
  tags?: {
    headTags?: HtmlTags;
    preBodyTags?: HtmlTags;
    postBodyTags?: HtmlTags;
  }
}
