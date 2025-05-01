import { usePathname } from "next/navigation";
import { useMemo } from "react";

type CameraConfig = {
  position: [number, number, number];
  fov: number;
  near: number;
  far: number;
  controls: boolean
};

export const useCameraConfig = (): CameraConfig  => {
const pathname = usePathname();

  return useMemo(() => {
    if (pathname === "/solar-system") {
      return {
        position: [0, 0, 10000],
        fov: 60,
        near: 0.1,
        far: 10000,
        controls: true,
      };
    } 
    if (pathname === "/") {
      return {
        position: [0,0,0],
        fov: 60,
        near: 0.1,
        far: 10000,
        controls: false,
      };
    }

    return {
      position: [0,0,0],
      fov: 60,
      near: 0.1,
      far: 10000,
      controls: false,
    };
  }, [pathname]);
};