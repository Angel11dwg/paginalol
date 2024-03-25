import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;
const CardItems = (props) => (
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt={props.altText} src={props.imageUrl}/>}
  >
    <Meta title={props.title} description={props.description}/>
  </Card>
);
export default CardItems;