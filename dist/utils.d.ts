type Cartesian = {
    x: number;
    y: number;
};
export declare const polarToCartesian: (centerX: number, centerY: number, radius: number, angleInDegrees: number) => Cartesian;
export declare const getCirclePath: (x: number, y: number, radius: number, startAngle: number, endAngle: number) => string;
export {};
