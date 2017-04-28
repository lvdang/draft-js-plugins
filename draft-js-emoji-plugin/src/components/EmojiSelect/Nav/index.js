import React from 'react';
import Entry from './Entry';

const Nav = ({
  theme = {},
  groups,
  activeGroup,
  onGroupSelect,
}) => (
  <ul className={theme.emojiSelectNav}>
    {groups.map((group, index) => (
      <li
        key={
          `nav-item#${index}[${group.categories.join(',')}]` // eslint-disable-line react/no-array-index-key
        }
        className={theme.emojiSelectNavItem}
      >
        <Entry
          theme={theme}
          groupIndex={index}
          isActive={index === activeGroup}
          icon={group.icon}
          onGroupSelect={onGroupSelect}
        />
      </li>
    ))}
  </ul>
);

export default Nav;
