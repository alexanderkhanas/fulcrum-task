import { ImageSourcePropType } from 'react-native';

export interface ChartSwitchProps {
  thumbnails: ImageSourcePropType[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}
