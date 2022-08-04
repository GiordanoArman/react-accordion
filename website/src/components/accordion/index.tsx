import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionProps,
  AccordionItemProps
} from '@szhsin/react-accordion';
import ChevronDown from '@site/static/img/chevron-down.svg';
import styles from './styles.module.css';

const StyledAccordion = (props: AccordionProps) => (
  <Accordion
    {...props}
    className={styles.accordion}
    transition
    transitionTimeout={200}
  />
);

const StyledAccordionItem = (props: AccordionItemProps) => (
  <AccordionItem
    {...props}
    header={
      <>
        {props.header}
        <ChevronDown className={styles.chevron} />
      </>
    }
    className={styles.item}
    buttonProps={{
      className: ({ expanded }) =>
        expanded ? styles.buttonExpanded : styles.button
    }}
    contentProps={{ className: styles.content }}
    panelProps={{ className: styles.panel }}
  />
);

export {
  StyledAccordion as Accordion,
  StyledAccordionItem as AccordionItem
};
