export class Point2D {

    private _x!: number;
    private _y!: number;

    public constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    public get x(): number {
        return this._x;
    }

    public set x(x: number) {
        this._x = x;
    }

    public getX(): number {
        return this._x;
    }

    public setX(x: number) {
        this._x = x;
    }

    public get y(): number {
        return this._y;
    }

    public set y(y: number){
        this._y = y;
    }

    /**
     * Afficher les coordonnées du point
     */
    public afficher(): void {
        console.log(`[${this.x}, ${this.y}]`)
    }

    /**
     * Faire une translation vectorielle du point sur 2 dimmensions.
     * @param dX décalage en x
     * @param dY décalage en Y
     */
    public translater(dX: number, dY: number): void{
        this.x = this.x + dX;
        this.y += dY;
    }

}
