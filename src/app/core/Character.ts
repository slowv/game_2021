export class Character extends Phaser.Physics.Arcade.Sprite {
  private _speed: number = 128;
  constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number) {
    super(scene, x, y, texture, frame);
    this.setDepth(2);
    this.setVisible(true);
    scene.physics.world.enableBody(this);
    this.setCollideWorldBounds(true);
    this.setImmovable(true);
    this.setOrigin(0, 0);
    this.body.setOffset(10, 0);
    scene.add.existing(this);
  }

  preUpdate (time, delta)
  {
    super.preUpdate(time, delta);
  }


  get speed(): number {
    return this._speed;
  }
}

