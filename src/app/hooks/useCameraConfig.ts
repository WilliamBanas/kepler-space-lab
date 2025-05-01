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
        position: [0, 0, 1000],
        fov: 60,
        near: 0.1,
        far: 1000000,
        controls: true,
      };
    } 
    if (pathname === "/") {
      return {
        position: [0,0, 25000],
        fov: 60,
        near: 0.1,
        far: 1000000,
        controls: true,
      };
    }

    return {
      position: [0,0,25000],
      fov: 60,
      near: 0.1,
      far: 1000000,
      controls: false,
    };
  }, [pathname]);
};