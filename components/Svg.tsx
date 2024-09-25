import React from 'react';
import { SvgXml } from "react-native-svg";

interface XmlSvgProps {
  svgString: string;
}

const XmlSvg: React.FC<XmlSvgProps> = ({ svgString }) => {
  return (
    <SvgXml xml={svgString} width="100%" height="100%" />
  );
}

export default XmlSvg;
