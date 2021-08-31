import React, { useState, useEffect } from 'react';
import Engine from '../../components/Engine';

const Index: React.FC<{}> = () => {

  const [initData, setInitApi] = useState();

  useEffect(() => {
    onSetInitApi()
  }, []);

  const onSetInitApi = async () => {
    const config = await request('./config.json');
    setInitApi(config.initApi);
  };

  return (
    <Engine initApi={initData} />
  );
}

export default Index;