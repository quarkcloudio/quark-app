import React, { useState, useEffect } from 'react';
import Engine from '../../components/Engine';
import config from '../../../config.json'

const Index: React.FC<{}> = () => {

  const [initApi, setInitApi] = useState();

  useEffect(() => {
    onSetInitApi()
  }, []);

  const onSetInitApi = async () => {
    setInitApi(config.initApi);
  };

  return (
    initApi ? <Engine initApi={initApi} /> : null
  );
}

export default Index;