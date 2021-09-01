import React, { useState, useEffect } from 'react';
import { get } from '../../services/request'
import Render from '../Render';

const Page: React.FC<any> = (props:any) => {

  const [data, setDataState] = useState(null);

  useEffect(() => {
    if(props.initApi) {
      getData(props.initApi)
    }
  }, [props.initApi]);

  const getData = async (initApi:string) => {

    const result = await get({
      actionUrl: initApi
    });

    setDataState(result.data);
  };

  return (
    <view style={props?.style}>
      <Render body={props.body} data={data ? data : props.data} callback={null} />
    </view>
  );
}

export default Page;