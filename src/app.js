import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, MeshBuilder } from "@babylonjs/core";
class App {
    constructor() {
        var canvas = document.createElement("canvas");
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.id = "gameCanvas";
        document.body.appendChild(canvas);
        var engine = new Engine(canvas, true);
        var scene = this.createScene(canvas, engine);
        window.addEventListener("keydown", (ev) => {
            if (ev.ctrlKey && ev.keyCode === 73) {
                if (scene.debugLayer.isVisible()) {
                    scene.debugLayer.hide();
                }
                else {
                    scene.debugLayer.show();
                }
            }
        });
        engine.runRenderLoop(() => {
            scene.render();
        });
    }
    createScene(canvas, engine) {
        const scene = new Scene(engine);
        var camera = new ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, Vector3.Zero(), scene);
        camera.attachControl(canvas, true);
        var light1 = new HemisphericLight("light1", new Vector3(1, 1, 0), scene);
        var sphere = MeshBuilder.CreateSphere("sphere", { diameter: 1 }, scene);
        return scene;
    }
}
new App();
