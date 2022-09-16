export interface Rover {
  id: number;
  name: string;
  landing_date: string;
  launch_date: string;
  status: string;
}

export interface Camera {
  id: number;
  name: string;
  rover_id: number;
  full_name: string;
}

export interface Photo {
  id: number;
  img_src: string;
  camera: Camera;
  rover: Rover;
  earth_date: string;
}
