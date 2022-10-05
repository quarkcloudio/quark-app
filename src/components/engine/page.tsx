import React from 'react';
import Engine from '../engine'

export interface PageProps {
  api: string
}

const Page: React.FC<Partial<PageProps>> = (props) => {
  return (
    <Engine api={props.api} />
  );
}

export default Page;