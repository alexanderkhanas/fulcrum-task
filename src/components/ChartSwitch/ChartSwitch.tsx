import React from 'react';
import s from './ChartSwitch.s';
import { Image, TouchableOpacity, View } from 'react-native';
import { ChartSwitchProps } from './ChartSwitch.types';
import classNames from 'classnames-react-native';

const ChartSwitch = ({
  thumbnails,
  onSelect,
  selectedIndex,
}: ChartSwitchProps) => {
  return (
    <View style={s.container}>
      {thumbnails.map((thumbnail, index) => (
        <TouchableOpacity
          style={classNames(s.thumbnailContainer, [
            s.thumbnailContainerActive,
            index === selectedIndex,
          ])}
          key={`thumbnail${thumbnail}`}
          onPress={() => onSelect(index)}>
          <Image source={thumbnail} style={s.thumbnail} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ChartSwitch;
