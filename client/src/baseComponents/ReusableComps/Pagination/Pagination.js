import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import { Div, Pagination as BasePagination } from 'basedesign-iswad';

import Icon from '@/baseComponents/ReusableComps/Icon';
import Select from '@/baseComponents/FormComps/Select';

import { COLORS } from '@/constants/vars';

import styles from './Pagination.module.scss';
import { LIST_OF_ICONS } from '@/constants/devDesignVars';

const Pagination = ({ type = 1, currentPage, setCurrentPage, numberOfTotalPages, ...props }) => {
  const firstPageComp = () => <Icon type="angleDoubleLeft" color={COLORS['theme-two']} />;
  const lastPageComp = () => <Icon type="angleDoubleRight" color={COLORS['theme-two']} />;
  const prevComp = () => <Icon type="angleLeft" scale={0.7} color={COLORS['theme-two']} />;
  const nextComp = () => <Icon type="angleRight" scale={0.7} color={COLORS['theme-two']} />;

  const [options, setOptions] = useState([]);

  useEffect(() => {
    const localOptions = [];
    for (let i = 1; i <= numberOfTotalPages; i++) {
      localOptions.push({ value: i, shownText: `${i}` });
    }
    setOptions([...localOptions]);
  }, [numberOfTotalPages]);
  return (
    <>
      {numberOfTotalPages > 1 && type === 1 ? (
        <Div type="flex" vAlign="center" className="">
          <Div
            type="flex"
            hAlign="center"
            vAlign="center"
            className="m-r-temp-4 mouse-hand width-px-20 bg-theme-three height-px-20 br-rad-per-50"
            onClick={() => {
              if (currentPage > 1) {
                setCurrentPage(currentPage - 1);
              } else {
                setCurrentPage(numberOfTotalPages);
              }
            }}>
            <Icon type={LIST_OF_ICONS['angle-left']} color={'black'} scale={0.7} />
          </Div>
          <Div className="text-off-black">Page </Div>
          <Div className="width-px-80 m-l-temp-2 m-r-temp-2">
            <Select
              options={options}
              val={currentPage}
              setVal={setCurrentPage}
              selectIntialShownText={''}
              labelText=""
              hasMarginBottom={false}
            />
          </Div>
          <Div className="text-off-black">of {numberOfTotalPages}</Div>
          <Div
            type="flex"
            hAlign="center"
            vAlign="center"
            className="m-l-temp-4 mouse-hand width-px-20 bg-theme-three height-px-20 br-rad-per-50"
            onClick={() => {
              if (currentPage < numberOfTotalPages) {
                setCurrentPage(currentPage + 1);
              } else {
                setCurrentPage(1);
              }
            }}>
            <Icon type={LIST_OF_ICONS['angle-right']} color={'black'} scale={0.7} />
          </Div>
        </Div>
      ) : (
        ''
      )}
      {numberOfTotalPages > 1 && type === 2 ? (
        <BasePagination
          numberOfShownPages={5}
          numberOfTotalPages={numberOfTotalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          showDefaultFirstLastIcon={false}
          showDefaultPrevNextIcon={false}
          firstPageComp={firstPageComp}
          lastPageCome={lastPageComp}
          prevComp={prevComp}
          nextComp={nextComp}
          containerClassName={cx(
            'flex--wrap width-per-100 max-width-px-400 flex--jc--between m-l-auto m-r-auto'
          )}
          itemClassName={cx(
            'width-px-30 height-px-30 flex flex--jc--center flex--ai--center br-rad-per-50 bg-red text-white fs-px-12',
            styles.itemContainer
          )}
          activeItemClassName={cx(styles.activeItemContainer)}
          {...props}
        />
      ) : (
        ''
      )}
    </>
  );
};

export default Pagination;
