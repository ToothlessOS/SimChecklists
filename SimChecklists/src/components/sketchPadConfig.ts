export interface CanvasConfig {
  id: string;
  name: string;
  backgroundImage?: string;
}

export const canvasConfigs: CanvasConfig[] = [
  {
    id: "atis_dep",
    name: "ATIS DEP",
    backgroundImage: "/src/assets/atis-bg.png", // Uncomment and set path when ready
  },
  {
    id: "clearance",
    name: "Clearance",
    backgroundImage: "/src/assets/clearance-bg.png",
  },
  {
    id: "atis_arr",
    name: "ATIS ARR",
    backgroundImage: "/src/assets/atis-bg.png", // Uncomment and set path when ready
  },
  {
    id: "log1",
    name: "Log 1",
    // backgroundImage: "/src/assets/log1-bg.png", // Uncomment and set path when ready
  },
  {
    id: "log2",
    name: "Log 2",
    // backgroundImage: "/src/assets/log2-bg.png", // Uncomment and set path when ready
  },
  {
    id: "log3",
    name: "Log 3",
    // backgroundImage: "/src/assets/log3-bg.png", // Uncomment and set path when ready
  },
];
