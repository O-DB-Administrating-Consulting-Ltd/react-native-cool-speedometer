import React from 'react';
import { PathProps, SvgProps } from 'react-native-svg';
interface ArcProps extends PathProps {
    color?: string;
    opacity?: number;
    arcWidth?: number;
    lineCap?: SvgProps['strokeLinecap'];
}
export default function Arc({ color, opacity, arcWidth, lineCap, ...rest }: ArcProps): React.JSX.Element;
export {};
