import {useMDXComponents as getThemeComponents} from 'nextra-theme-docs';
import {Callout, FileTree, Tabs, Steps} from "nextra/components";

import { Badge } from "components/ui/badge";

// Get the default MDX components
const themeComponents = getThemeComponents()

// Merge components
export function useMDXComponents() {
    return {
        ...themeComponents,
        Badge: Badge,
        Callout: Callout,
        FileTree: FileTree,
        Tabs: Tabs,
        Steps: Steps,
    }
}