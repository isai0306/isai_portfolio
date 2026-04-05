import Tilt from "react-parallax-tilt";
import { ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  glareEnable?: boolean;
  tiltMaxAngleX?: number;
  tiltMaxAngleY?: number;
  scale?: number;
  onClick?: () => void;
}

const TiltCard = ({
  children,
  className = "",
  glareEnable = true,
  tiltMaxAngleX = 15,
  tiltMaxAngleY = 15,
  scale = 1.02,
  onClick,
}: TiltCardProps) => (
  <div onClick={onClick}>
    <Tilt
      tiltMaxAngleX={tiltMaxAngleX}
      tiltMaxAngleY={tiltMaxAngleY}
      scale={scale}
      transitionSpeed={400}
      glareEnable={glareEnable}
      glareMaxOpacity={0.12}
      glareColor="#ffffff"
      glarePosition="all"
      glareBorderRadius="12px"
      className={className}
    >
      {children}
    </Tilt>
  </div>
);

export default TiltCard;
