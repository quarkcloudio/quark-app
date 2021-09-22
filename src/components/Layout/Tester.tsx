import React from 'react';
import { View, Text, Button } from '@tarojs/components';

const Tester: React.FC<any> = (props:any) => {

  return (
      <View className="default-theme">
        <Button className="adm-button adm-button-primary">
          <Text className="adm-button-text">Primary</Text>
        </Button>
      </View>
  );
}

export default Tester;