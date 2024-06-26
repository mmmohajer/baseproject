import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Card from '@/baseComponents/ReusableComps/Card';

import { CARD_TYPES } from '@/constants/devDesignVars';

import styles from '../../../DevDesign.module.scss';

const BlogInfo = ({ ...props }) => {
  return (
    <>
      <Div
        direction="vertical"
        type="flex"
        hAlign="center"
        vAlign="center"
        className="m-b-32 width-px-350"
        {...props}>
        <Div className="m-b-8">Type: {CARD_TYPES.blogInfo}</Div>
        <Card
          type={CARD_TYPES.blogInfo}
          src={'https://picsum.photos/300'}
          writer="John Smith"
          postDate="June 1, 2024"
          title="Blog Post Title Here"
          description={`Description of blog post will go here. Description of blog post will go here.
            Description of blog post will go here. Description of blog post will go here.`}
          moreInfoUrl="/"
        />
      </Div>
    </>
  );
};

export default BlogInfo;
