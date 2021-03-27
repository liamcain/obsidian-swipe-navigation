import { Notice, Plugin } from "obsidian";
import { IDirection, SwipeManager } from "./utils";

export default class SwipeNavigationPlugin extends Plugin {
  private swipeManager: SwipeManager;

  handleSwipe(direction: IDirection): void {
    if (direction === "right") {
      history.back();
      new Notice("⇠ Go back");
    } else {
      history.forward();
      new Notice("⇢ Go forward");
    }
  }

  async onload(): Promise<void> {
    this.handleSwipe = this.handleSwipe.bind(this);
    this.swipeManager = new SwipeManager(this.handleSwipe);

    document.body.addEventListener(
      "touchstart",
      this.swipeManager.handleTouchStart,
      false
    );
    document.body.addEventListener(
      "touchmove",
      this.swipeManager.handleTouchMove,
      true
    );
    document.body.addEventListener(
      "touchend",
      this.swipeManager.handleTouchEnd,
      false
    );
  }

  onunload(): void {
    this.swipeManager.handleTouchStart;
    document.body.removeEventListener(
      "touchstart",
      this.swipeManager.handleTouchStart
    );
    document.body.removeEventListener(
      "touchmove",
      this.swipeManager.handleTouchMove
    );
    document.body.removeEventListener(
      "touchend",
      this.swipeManager.handleTouchEnd
    );
  }
}
