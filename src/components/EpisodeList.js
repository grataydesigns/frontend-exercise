import React from 'react';
import IconStar from '../icons/IconStar';

const EpisodeList = (props) => (
  <ul className="list-group">
    {
      props.items.map((item, i) => (
        <li key={i} className="list-group__item">
          <p>{item.name}</p>
          <span>Season: {item.season}</span>
          <span>{<IconStar starfill="#FF3D00" iconclass="icon--size-xs" />}Rating: {item.rating}</span>
        </li>
      ))
    }
  </ul>
);

export default EpisodeList;
