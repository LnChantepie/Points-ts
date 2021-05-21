import { Point2D } from "./Point2D";

export class Point3D extends Point2D {

    // le "!" permet d'indiquer à TS que la valeur sera définie au lancement du programme
    private _z!: number;

    constructor(x: number = 0, y: number = 0, z: number = 0){
        super(x, y);
        this.z = z;
    }

    public get z(): number {
        return this._z;
    }
    public set z(z: number) {
        this._z = z;
    }

    // redéfinition de la fonction Point2D.afficher;
    /**
     * Afficher les coordonnées du point sur 3 dimmensions
     */
    public afficher(){
        console.log(`[${this.x}, ${this.y}, ${this.z}]`)
    }

    public translater3D(dX: number, dY: number, dZ: number){
        super.translater(dX, dY);
        this.z += dZ;
    }

}