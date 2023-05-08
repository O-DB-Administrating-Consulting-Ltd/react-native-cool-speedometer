import React from 'react';
import { PathProps } from 'react-native-svg';
interface BackgroundProps extends PathProps {
    angle?: number;
    color?: string;
    opacity?: number;
}
export default function Background({ angle, color, opacity, ...rest }: BackgroundProps): React.JSX.Element;
export {};
