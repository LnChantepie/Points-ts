import { Point2D } from "./Point2D";
import { Point3D } from "./Point3D";
import { Point3DBis } from "./Point3DBis";

//classe de base
const point1 = new Point2D(5,8);
// héritage de Point2D pour faire Point3D
const point3D = new Point3D(10, -5, 8);
const point3DBis = new Point3DBis(point1, 12);
console.log("===== Point2D ====")
point1.x = 0;
point1.y = 5;

point1.afficher();
point1.translater(5, -5);
point1.afficher();

point1.translater(5, -5);
point1.afficher();
console.log(point1.x)

console.log("===== Point3D ====")
point3D.afficher();
point3D.translater3D(5,5,5);

point3D.afficher();

console.log("===== Point3DBis ====")
point3DBis.afficher();
point3DBis.translater3D(10,10,10);
point3DBis.afficher();
