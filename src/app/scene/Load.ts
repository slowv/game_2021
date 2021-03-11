import {CST} from '../util/Constant';

export class Load extends Phaser.Scene {
  constructor() {
    super({
      key: CST.SCENE.LOAD
    });
  }

  loadImage() {
    this.load.setPath('assets/images');
    // bg room wait
    this.load.image('bgRoomWait_1', 'bg_login2.jpg');
    this.load.image('bgRoomWait_2', 'bg_login3.jpg');
    this.load.image('roomlist', 'roomList.png');
    for (const prop in CST.IMAGE) {
      this.load.image(CST.IMAGE[prop], CST.IMAGE[prop]);
    }
  }

  loadSound() {
    this.load.setPath('assets/sound');
    for (const prop in CST.IMAGE) {
      this.load.image(CST.IMAGE[prop], CST.IMAGE[prop]);
    }
  }

  loadSprite(frameConfig: Phaser.Types.Loader.FileTypes.ImageFrameConfig) {
    this.load.setPath('assets/sprite');
    for (const prop in CST.SPRITE) {
      this.load.spritesheet(CST.SPRITE[prop], CST.SPRITE[prop], frameConfig);
    }

    this.load.setPath('assets/images/character');

    // ======================= LOAD NINJA GIRL =======================
    this.load.spritesheet('ninja_girl_attack', `ninja_girl/attack.png`, {
      frameWidth: 524,
      frameHeight: 565
    });

    this.load.spritesheet('ninja_girl_climb', `ninja_girl/climb.png`, {
      frameWidth: 361,
      frameHeight: 497
    });

    this.load.spritesheet('ninja_girl_dead', `ninja_girl/dead.png`, {
      frameWidth: 578,
      frameHeight: 599
    });

    this.load.spritesheet('ninja_girl_glide', `ninja_girl/glide.png`, {
      frameWidth: 505,
      frameHeight: 474
    });

    this.load.spritesheet('ninja_girl_idle', `ninja_girl/idle.png`, {
      frameWidth: 290,
      frameHeight: 500
    });

    this.load.spritesheet('ninja_girl_jump_attack', `ninja_girl/jump_attack.png`, {
      frameWidth: 495,
      frameHeight: 583
    });

    this.load.spritesheet('ninja_girl_jump_throw', `ninja_girl/jump_throw.png`, {
      frameWidth: 425,
      frameHeight: 497
    });

    this.load.spritesheet('ninja_girl_run', `ninja_girl/run.png`, {
      frameWidth: 376,
      frameHeight: 520
    });

    this.load.spritesheet('ninja_girl_slide', `ninja_girl/slide.png`, {
      frameWidth: 397,
      frameHeight: 401
    });

    this.load.spritesheet('ninja_girl_throw', `ninja_girl/throw.png`, {
      frameWidth: 383,
      frameHeight: 514
    });
  }

  loadAnim() {
    // ======================= Load Animation NINJA GIRL =======================
    // Attack
    this.anims.create({
      key: 'NG_attack',
      frames: [
        {key: 'Attack__000'},
        {key: 'Attack__001'},
        {key: 'Attack__002'},
        {key: 'Attack__003'},
        {key: 'Attack__004'},
        {key: 'Attack__005'},
        {key: 'Attack__006'},
        {key: 'Attack__007'},
        {key: 'Attack__008'},
        {key: 'Attack__009'},
      ],
      duration: 10,
      repeat: 1
    });

    // Climb
    this.anims.create({
      key: 'NG_climb',
      frames: [
        {key: 'Climb_000'},
        {key: 'Climb_001'},
        {key: 'Climb_002'},
        {key: 'Climb_003'},
        {key: 'Climb_004'},
        {key: 'Climb_005'},
        {key: 'Climb_006'},
        {key: 'Climb_007'},
        {key: 'Climb_008'},
        {key: 'Climb_009'},
      ]
    });

    // Dead
    this.anims.create({
      key: 'NG_dead',
      frames: [
        {key: 'Dead__000'},
        {key: 'Dead__001'},
        {key: 'Dead__002'},
        {key: 'Dead__003'},
        {key: 'Dead__004'},
        {key: 'Dead__005'},
        {key: 'Dead__006'},
        {key: 'Dead__007'},
        {key: 'Dead__008'},
        {key: 'Dead__009'},
      ],
      duration: 10,
      repeat: 1
    });

    // Glide
    this.anims.create({
      key: 'NG_glide',
      frames: [
        {key: 'Glide_000'},
        {key: 'Glide_001'},
        {key: 'Glide_002'},
        {key: 'Glide_003'},
        {key: 'Glide_004'},
        {key: 'Glide_005'},
        {key: 'Glide_006'},
        {key: 'Glide_007'},
        {key: 'Glide_008'},
        {key: 'Glide_009'},
      ],
      duration: 10,
      repeat: 1
    });

    // Idle
    this.anims.create({
      key: 'NG_idle',
      frameRate: 15,
      frames: this.anims.generateFrameNumbers("ninja_girl_idle", {
        start: 0,
        end: 9
      }),
      repeat: -1
    });

    // Jump
    this.anims.create({
      key: 'NG_jump',
      frames: [
        {key: 'Jump__000'},
        {key: 'Jump__001'},
        {key: 'Jump__002'},
        {key: 'Jump__003'},
        {key: 'Jump__004'},
        {key: 'Jump__005'},
        {key: 'Jump__006'},
        {key: 'Jump__007'},
        {key: 'Jump__008'},
        {key: 'Jump__009'},
      ],
      duration: 10,
      repeat: 1
    });

    // Jump Attack
    this.anims.create({
      key: 'NG_jump_attack',
      frames: [
        {key: 'Jump_Attack_000'},
        {key: 'Jump_Attack_001'},
        {key: 'Jump_Attack_002'},
        {key: 'Jump_Attack_003'},
        {key: 'Jump_Attack_004'},
        {key: 'Jump_Attack_005'},
        {key: 'Jump_Attack_006'},
        {key: 'Jump_Attack_007'},
        {key: 'Jump_Attack_008'},
        {key: 'Jump_Attack_009'},
      ],
      duration: 10,
      repeat: 1
    });

    // Jump throw
    this.anims.create({
      key: 'NG_jump_throw',
      frames: [
        {key: 'Jump_Throw_000'},
        {key: 'Jump_Throw_001'},
        {key: 'Jump_Throw_002'},
        {key: 'Jump_Throw_003'},
        {key: 'Jump_Throw_004'},
        {key: 'Jump_Throw_005'},
        {key: 'Jump_Throw_006'},
        {key: 'Jump_Throw_007'},
        {key: 'Jump_Throw_008'},
        {key: 'Jump_Throw_009'},
      ],
      duration: 10,
      repeat: 1
    });

    // Run
    this.anims.create({
      key: 'NG_jump_throw',
      frames: [
        {key: 'Run__000'},
        {key: 'Run__001'},
        {key: 'Run__002'},
        {key: 'Run__003'},
        {key: 'Run__004'},
        {key: 'Run__005'},
        {key: 'Run__006'},
        {key: 'Run__007'},
        {key: 'Run__008'},
        {key: 'Run__009'},
      ],
      duration: 10,
      repeat: 1
    });

    // Run
    this.anims.create({
      key: 'NG_slide',
      frames: [
        {key: 'Slide__000'},
        {key: 'Slide__001'},
        {key: 'Slide__002'},
        {key: 'Slide__003'},
        {key: 'Slide__004'},
        {key: 'Slide__005'},
        {key: 'Slide__006'},
        {key: 'Slide__007'},
        {key: 'Slide__008'},
        {key: 'Slide__009'},
      ],
      duration: 10,
      repeat: 1
    });

    // Throw
    this.anims.create({
      key: 'NG_throw',
      frames: [
        {key: 'Throw__000'},
        {key: 'Throw__001'},
        {key: 'Throw__002'},
        {key: 'Throw__003'},
        {key: 'Throw__004'},
        {key: 'Throw__005'},
        {key: 'Throw__006'},
        {key: 'Throw__007'},
        {key: 'Throw__008'},
        {key: 'Throw__009'},
      ],
      duration: 10,
      repeat: 1
    });
  }

  loadTileMap(): void {
    this.load.setPath('assets/tileset');
    for (const prop in CST.TILE_MAP) {
      this.load.image(CST.TILE_MAP[prop].PNG, CST.TILE_MAP[prop].PNG);
      this.load.tilemapTiledJSON(CST.TILE_MAP[prop].JSON, CST.TILE_MAP[prop].JSON);
    }
  }

  loadHUD(): void {
    this.load.setPath('assets/hud');
    for (const prop in CST.HUD) {
      this.load.image(CST.HUD[prop], CST.HUD[prop]);
    }
  }

  preload() {
    // Load assets
    this.loadImage();
    this.loadSound();
    this.loadSprite({
      frameWidth: 36,
      frameHeight: 36
    });
    this.loadTileMap();
    this.loadHUD();

    this.add.rectangle(0, 0, this.cameras.main.width, this.cameras.main.height)
      .setOrigin(0)
      .setStrokeStyle(4, 0x515151, 1);

    // LOADING BAR
    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBar.setDepth(99);
    progressBox.fillStyle(0xffffff, 0.8);
    progressBox.fillRect(250, 280, 1024 / 2, 30);
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;
    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 45,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        color: '#ffffff'
      }
    });
    loadingText.setOrigin(0.5, 0.5);
    const percentText = this.make.text({
      x: width / 2,
      y: height / 2 + 6,
      text: '0%',
      style: {
        font: '18px monospace',
        color: '#ffffff'
      }
    });
    percentText.setOrigin(0.5, 0.5).setDepth(100);
    const assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 55,
      text: '',
      style: {
        font: '18px monospace',
        color: '#ffffff'
      }
    });
    assetText.setOrigin(0.5, 0.5);

    this.load.on('progress', (value: number) => {
      progressBar.clear();
      progressBar.fillStyle(0xDC4E41, 1);
      progressBar.fillRect(250, 280, (1024 / 2) * value, 30);
      percentText.setText(Math.ceil(value * 100).toString() + '%');
    });

    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      setTimeout(() => {
        this.scene.start(CST.SCENE.PLAY.MAP.LEVEL_1);
      }, 1000);
    });

    this.load.on('fileprogress', (file: Phaser.Loader.File) => {
      assetText.setText('Loading asset: ' + file.key);
    });
  }

  create() {
    this.loadAnim();
    this.add.image(1024 / 2, 576 / 2, CST.IMAGE.LOGO).setScale(.3);
  }
}
