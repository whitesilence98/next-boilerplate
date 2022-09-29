import React from 'react';

import styles from './card.module.scss';

import clsx from 'clsx';

export const CardLoading = () => {
  return (
    <div className={styles['root']}>
      <div className={clsx(styles['card'], styles['loading'])}>
        <div className={styles['image']}></div>
        <div className={styles['content']}>
          <h4 />
          <div className={styles['description']}></div>
        </div>
      </div>
    </div>
  );
};
