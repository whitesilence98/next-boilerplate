import * as React from 'react';
import {useInView} from 'react-intersection-observer';

import styles from './card.module.scss';

import {NextImage} from '@components/atoms';

import clsx from 'clsx';
// import {Post} from '@models/post';
import {motion, useAnimation} from 'framer-motion';

// import NextImage from '@components/atoms/NextImage';

// import NextImage from '@components/NextImage';

interface IItem {
  item?: any;
  index: number;
}

const CardItem = ({item, index}: IItem): JSX.Element => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start('show');
    }
  }, [controls, inView]);

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate={controls}
      ref={ref}
      className={styles['root']}>
      <div className={styles['card']}>
        <div className={clsx(styles['image'], 'relative')}>
          <NextImage
            layout="fill"
            src={
              item.images.webp.large_image_url || 'http://placecorgi.com/300'
            }
            alt="bello"
            imgClassName="relative"
          />
        </div>
        <div className={clsx(styles['content'], '')}>
          <h4>
            {item.title} | <span>{item.title_japanese}</span>
          </h4>
          <div className={clsx(styles['description'], 'truncate')}>
            {item.background}
          </div>
          <div className={styles['tag']}>
            {item.genres.map((i: any, index: number) => (
              <span key={index.toString()}>{i.name}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const variants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {ease: [0.78, 0.14, 0.15, 0.86]},
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {ease: [0.78, 0.14, 0.15, 0.86]},
  },
};

export default React.memo(CardItem);
