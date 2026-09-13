import { Plugin } from "obsidian";

export default class QuickReloadPlugin extends Plugin {
    onload() {
        this.addRibbonIcon("refresh-cw", "Quick Reload", () => {
            window.location.reload();
        });
    }
}