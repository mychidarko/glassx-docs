import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'No boilerplate ☃️',
    description: (
      <>
        Right after installation, you can call `GlassX.set` to add items to your
        global state or use the `useStore` hook. No setup, no initializations.
      </>
    ),
  },
  {
    title: 'Based on react context ⚛️',
    description: (
      <>
        GlassX is based on context which makes it super fast and allows it to
        sit right in your app like a part of the react code itself.
      </>
    ),
  },
  {
    title: 'Supports advanced features 🚀',
    description: (
      <>
        Unlike many other state management libraries out there, GlassX supports
        features like async reducers, hooks, plugins and modules which allow you
        to scope your state and reducers to particular portions of your app.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      {Svg && <Svg className={styles.featureSvg} role="img" />}
      <div className="padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
