import {AfterViewInit, Component, OnInit} from '@angular/core';
import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js';
// @ts-ignore
import Phaser from 'phaser';
import {Load} from './scene/Load';
import {Level1} from './scene/map/Level1';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'RPG';
  game: Phaser.Game;
  WIDTH = 1024;
  HEIGHT = 576;
  SCENE = [Load, Level1];

  ngAfterViewInit(): void {
    this.game = new Phaser.Game({
      type: Phaser.WEBGL,
      parent: 'game-root',
      dom: {
        createContainer: true
      },
      width: this.WIDTH,
      height: this.HEIGHT,
      physics: {
        default: 'arcade',
        arcade: {
          debug: true,
          fps: 120
        }
      },
      render: {
        pixelArt: true,
        powerPreference: 'high-performance',
      },
      plugins: {
        scene: [
          {
            key: 'rexUI',
            plugin: RexUIPlugin,
            mapping: 'rexUI'
          }
        ]
      },
      scene: this.SCENE,
      // scale: {
      //   mode: Phaser.Scale.RESIZE,
      //   autoCenter: Phaser.Scale.Center.CENTER_HORIZONTALLY
      // },
      fps: {
        min: 30,
        deltaHistory: 60,
        forceSetTimeOut: true
      },
      version: '1.0',
      disableContextMenu: false,
      audio: {
        disableWebAudio: false,
        noAudio: false,
      }
    });
  }

  ngOnInit(): void {
  }
}
