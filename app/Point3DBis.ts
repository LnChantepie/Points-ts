import { Point2D } from "./Point2D";

export class Point3DBis {

    protected _point2D!: Point2D
    protected _z!: number;

    public constructor(point2D: Point2D, z: number = 0){
        this.point2D = point2D;
        this.z = z;
    }

    public get point2D(): Point2D {
        return this._point2D;
    }
    public set point2D(point2D: Point2D) {
        this._point2D = point2D;
    }

    public get z(): number {
        return this._z;
    }
    public set z(z: number) {
        this._z = z;
    }

    public afficher(){
        console.log(`[${this.point2D.x}, ${this.point2D.y}, ${this.z}]`)
    }

    public translater3D(dX: number, dY: number, dZ: number){
        this.point2D.x += dX;
        this.point2D.y += dY;
        this.z += dZ;
    }
}