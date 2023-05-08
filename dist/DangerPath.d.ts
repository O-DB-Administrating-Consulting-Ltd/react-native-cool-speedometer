import React from 'react';
import { PathProps } from 'react-native-svg';
interface DangerPathProps extends PathProps {
    color?: string;
    angle?: number;
    arcWidth?: number;
    lineCap?: PathProps['strokeLinecap'];
    offset?: number;
}
export default function DangerPath({ color, angle, arcWidth, lineCap, offset, ...rest }: DangerPathProps): React.JSX.Element;
export {};
