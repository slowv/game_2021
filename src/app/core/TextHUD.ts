export class TextHUD extends Phaser.GameObjects.Text {
  constructor(scene: Phaser.Scene, x: number, y: number, text: string | string[], style: Phaser.Types.GameObjects.Text.TextStyle) {
    super(scene, x, y, text, style);
    this.setScrollFactor(0);
    this.setDepth(4);
    scene.add.existing(this);
  }
}
